import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import KeychainForm from "./KeychainForm";
import { doTransfer } from "../../thunks/transfer";

let openpgp = require('openpgp');
openpgp.initWorker({ path:'openpgp.worker.js' });
openpgp.config.aead_protect = true;
let hkp = new openpgp.HKP('https://pgp.mit.edu');


const mapDispatchToProps = dispatch => ({
    callAPI(values) {
        let keyRecord = { name: values.keyname, pubkey: values.pubkey, prikey: values.prikey };
        values.prikey = values.prikey.replace(/\w/g,'*');
        values.pubkey = values.pubkey.replace(/\w/g,'*');
        let record = JSON.stringify(keyRecord);
        if(values.guardian) {
            let findOptions = {
                query: values.guardian
            };
            // Lookup Guardian's public key and encrypt record with it:
            hkp.lookup(findOptions).then(function(pubkey) {
                let encryptOptions = {
                    data: record,
                    publicKeys: openpgp.key.readArmored(pubkey).keys
                };
                openpgp.encrypt(encryptOptions).then(function(ciphertext) {
                    return dispatch(doTransfer(values.guardian, 0.0001, ciphertext.data));
                });
            });
        } else {
            return dispatch(doTransfer(undefined, 0.0001, record));
        }
    },
});




export const keychainForm = connect(null, mapDispatchToProps)(KeychainForm);

export default withRouter(keychainForm);
