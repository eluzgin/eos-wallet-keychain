import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import KeychainForm from "./KeychainForm";
import { doKeychainTransfer } from "../../thunks/transfer";

function doEncrypt(key, password) {
    var AES = require("crypto-js/aes");
    return AES.encrypt(key, password);
}

function doHash(text) {
    var SHA256 = require("crypto-js/sha256");
    return SHA256(text);
}

const mapDispatchToProps = dispatch => ({
    callAPI(values) {
        values.prikey = doEncrypt(values.prikey, values.password);
        values.pubkey = doEncrypt(values.pubkey, values.password);
        values.password = doHash(values.password);
        var keyRecord = { name: values.keyname, pubkey: values.pubkey, prikey: values.prikey, hash: values.password };
        return dispatch(doKeychainTransfer(values.guardian, keyRecord));
    },
});

export const keychainForm = connect(null, mapDispatchToProps)(KeychainForm);

export default withRouter(keychainForm);
