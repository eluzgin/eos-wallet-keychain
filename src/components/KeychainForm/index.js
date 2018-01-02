import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { change } from "redux-form";
import KeychainForm from "./KeychainForm";
//import { doTransfer } from "../../thunks/transfer";


function doEncrypt(key, password) {
    //todo: Implement
    return key;
}

function doSave(guardian, keyname, encpubkey, encprikey) {
    //todo: Implement
    return key;
}

const mapDispatchToProps = dispatch => ({
    callAPI(values) {
        values.prikey = doEncrypt(values.prikey, values.password);
        values.pubkey = doEncrypt(values.pubkey, values.password);
        return dispatch(doSave(values.guardian, values.keyname, values.pubkey, values.prikey));
    },
});

export const keychainForm = connect(null, mapDispatchToProps)(KeychainForm);

export default withRouter(keychainForm);
