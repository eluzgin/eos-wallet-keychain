import * as React from "react";
import { Link } from "react-router-dom";
import Container from "components/KeychainForm/index";
import { AppNotifications as Notifications } from "../../components/Notification";

const Keychain = () => (
    <div className="columns is-desktop content is-variable is-6">
        <div className="column is-7-desktop is-12-tablet">
            <Notifications />
            <article className="u-mb6">
                <h2 className="title is-2">Backup wallet keys</h2>
                <p>Encrypt and save wallet keys on EOS Blockchain.</p>
                <Container />
            </article>
        </div>
        <div className="column is-5-desktop is-12-tablet">
            <article className="section">
                <h5 className="title is-5">Why do I need to backup my keys?</h5>
                <div className="box">
                    There are estimated about 4 millions of abandoned bitcoins mainly due to people loosing their private keys.
                    Once lost private key can never be restored. We offer a safe way to double-encrypt and store wallet keys
                    on EOS Blockchain with an ability to retrieve wallet keys when you need it.
                    You can backup all other crypto wallet keys here making EOS wallet both your master wallet and a key manager.
                    Learn more about encryption and backup process of keys at http://ses.network .
                </div>
            </article>
            <article className="section">
                <h5 className="title is-5">Who is Guardian and why I need it?</h5>
                <div className="box">
                    The Guardian is fully optional for users who want an ability to retrieve their wallet keys even
                    if they are locked out of their EOS master wallet due to lost private key, etc.
                    Your wallet keys will be encrypted with your password and Guardian is given access to
                    encrypted keys without knowledge of the password used to encrypt it.
                    The Guardian is then able to provide keys to the user after receiving proof of ownership.
                    Learn more about Guardian service at http://ses.network .
                </div>
            </article>
        </div>
    </div>
);

export default Keychain;
