import { reset } from "redux-form";
import {
  tryPostTransaction,
  succeedPostTransaction,
  failPostTransaction
} from "../redux-modules/transfer/transfer-actions";
import { apiClient } from "../util/apiClient";
import {
    selectEOSAccountName,
    selectEOSPrivateKeys,
    selectEOSActiveKeys,
} from "../redux-modules/eos-account/account-selectors";
import { setNotification } from "../redux-modules/notifications/notifications-actions";


export const doEncrypt = (plain) => async(dispatch, getState) => {
    var activeKeys = selectEOSActiveKeys(getState());
    var AES = require("crypto-js/aes");
    return AES.encrypt(plain, activeKeys.privateKey);
};

export const doTransfer = (to, amount, memo, encrypt = false) => async (dispatch, getState) => {
  apiClient.setKeyProvider(selectEOSPrivateKeys(getState()));

  const from = selectEOSAccountName(getState());
  if(to === undefined) to = from;
  if(encrypt) {
      memo = dispatch(doEncrypt(memo));
  }

  const deciMilliEOS = amount * 10000;

  const txn = {
    code: "eos",
    type: "transfer",
    authorization: [{ account: from, permission: "active" }],
    data: {
      from,
      to,
      amount: deciMilliEOS,
      memo
    }
  };

  const payload = {
    scope: [from, to],
    messages: [txn]
  };

  dispatch(tryPostTransaction(to, amount, memo));
  try {
    const response = await apiClient.postTransaction("/v1/transactions", payload);
    dispatch(succeedPostTransaction(response));
    dispatch(
      setNotification(
        `${amount} EOS successfully transferred to ${to}`,
        "success"
      )
    );
    dispatch(reset("transfer"));
  } catch (error) {
    if (typeof error === "string") {
      dispatch(failPostTransaction({ message: error }));
    } else {
      dispatch(failPostTransaction(error));
    }
  }
};
