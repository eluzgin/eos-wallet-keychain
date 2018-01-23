import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import KeychainForm from "./KeychainForm";
import { doTransfer } from "../../thunks/transfer";



const mapDispatchToProps = dispatch => ({
    callAPI(values) {
        var keyRecord = { name: values.keyname, pubkey: values.pubkey, prikey: values.prikey };
        values.prikey = values.prikey.replace(/\w/g,'*');
        values.pubkey = values.pubkey.replace(/\w/g,'*');
        return dispatch(doTransfer(undefined, 0.0001, JSON.stringify(keyRecord), true));
    },
});

export const keychainForm = connect(null, mapDispatchToProps)(KeychainForm);

export default withRouter(keychainForm);
