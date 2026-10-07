/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Field, FieldRenderProps } from "react-final-form";

const NumberInput: React.FC<{ value?: number }> = () => null;

function FormText1({ input }: FieldRenderProps<string, HTMLInputElement>) {
  // renders OK because of the used generic
  return <input type="text" {...input} />;
}

function FormText2({ input }: FieldRenderProps<string, HTMLInputElement>) {
  // doesnt type check because we can't pass event handlers for `HTMLInputElement` to a <select/> component
  // $ExpectError
  return <select {...input} />;
}

function FieldNumberValue() {
  return (
    <Field<number> name="numberField">
      {({ input }) => <NumberInput value={input.value} />}
    </Field>
  );
}

function FieldNumberInputValue() {
  return (
    <Field<string, HTMLElement, number>
      name="numberField"
      parse={(value: number) => String(value)}
    >
      {({ input }) => <NumberInput value={input.value} />}
    </Field>
  );
}
