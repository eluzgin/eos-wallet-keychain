import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import KeychainForm from "./KeychainForm";
import { doTransfer } from "../../thunks/transfer";


function doHash(text) {
    var SHA256 = require("crypto-js/sha256");
    return SHA256(text);
}

const mapDispatchToProps = dispatch => ({
    callAPI(values) {
        var keyRecord = { name: values.keyname, pubkey: values.pubkey, prikey: values.prikey };
        values.prikey = doHash(values.prikey);
        values.pubkey = doHash(values.pubkey);
        return dispatch(doTransfer(undefined, 0.0001, keyRecord.toString(), true));
    },
});

export const keychainForm = connect(null, mapDispatchToProps)(KeychainForm);

export default withRouter(keychainForm);
