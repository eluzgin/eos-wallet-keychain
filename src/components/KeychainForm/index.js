import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import KeychainForm from "./KeychainForm";
import { doTransfer } from "../../thunks/transfer";

var SHA256 = require("crypto-js/sha256");


const mapDispatchToProps = dispatch => ({
    callAPI(values) {
        var keyRecord = { name: values.keyname, pubkey: values.pubkey, prikey: values.prikey };
        values.prikey = SHA256(values.prikey);
        values.pubkey = SHA256(values.pubkey);
        return dispatch(doTransfer(undefined, 0.0001, JSON.stringify(keyRecord), true));
    },
});

export const keychainForm = connect(null, mapDispatchToProps)(KeychainForm);

export default withRouter(keychainForm);
