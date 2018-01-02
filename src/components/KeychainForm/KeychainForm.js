import * as React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";


const KeychainForm = ({
  callAPI,
  handleSubmit,
  reset,
  submitting,
  updateAmount
}) => (
  <form onSubmit={handleSubmit(callAPI)}>
      <Field
          aria-describedby="guardian"
          className="input"
          id="guardian"
          label="Guardian"
          name="guardian"
          prefixed
          component={renderField}
          type="text"
      />

      <Field
          aria-describedby="keyname"
          className="input"
          id="keyname"
          label="Wallet Name"
          name="keyname"
          required
          component={renderField}
          type="text"
      />

      <Field
          aria-describedby="pubkey"
          className="input"
          id="pubkey"
          label="Public Key"
          name="pubkey"
          required
          component={renderField}
          type="text"
      />

      <Field
          aria-describedby="prikey"
          className="input"
          id="prikey"
          label="Private Key"
          name="prikey"
          required
          component={renderField}
          type="text"
      />

      <Field
          aria-describedby="password"
          className="input"
          id="password"
          label="Password"
          name="password"
          required
          component={renderField}
          type="password"
      />

    <div className="field is-grouped u-mt6">
      <div className="control">
        <Button
          disabled={submitting}
          className="is-large is-primary"
          type="submit"
          text={submitting ? "Processing..." : "Encrypt & Save"}
        />
      </div>
      <div className="control cancel-button">
        <Button
          className="button is-large is-secondary"
          onClick={reset}
          text="Cancel"
        />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: "keychain"
})(KeychainForm);
