/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useField } from "react-final-form";

const NumberInput: React.FC<{ value?: number }> = () => null;

function NumberFieldValue() {
  const { input } = useField<number>("numberField");
  return <NumberInput value={input.value} />;
}

function NumberInputValue() {
  const { input } = useField("numberField", {
    format: (value: string) => Number(value),
    parse: (value: number) => String(value),
  });
  return <NumberInput value={input.value} />;
}
