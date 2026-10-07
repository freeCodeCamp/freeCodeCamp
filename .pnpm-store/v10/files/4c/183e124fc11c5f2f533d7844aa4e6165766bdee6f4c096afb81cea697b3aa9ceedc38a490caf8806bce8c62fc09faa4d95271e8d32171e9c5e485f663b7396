/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { FormSpy } from "react-final-form";

function submitButtonSpy() {
  return (
    <FormSpy subscription={{ pristine: true, submitting: true, valid: true }}>
      {({ pristine, submitting, valid }) => {
        return (
          <button type="submit" disabled={submitting || pristine || !valid}>
            Submit
          </button>
        );
      }}
    </FormSpy>
  );
}
