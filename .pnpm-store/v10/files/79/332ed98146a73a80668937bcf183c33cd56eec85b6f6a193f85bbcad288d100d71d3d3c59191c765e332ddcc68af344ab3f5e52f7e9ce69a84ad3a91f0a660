// @flow
import * as React from "react";
import type {
  FormApi,
  Config,
  Decorator,
  FormState,
  FormSubscription,
  FormValuesShape,
  FieldSubscription,
  FieldValidator,
} from "final-form";

type SupportedInputs = "input" | "select" | "textarea";

export type ReactContext<FormValues: FormValuesShape> = {
  reactFinalForm: FormApi<FormValues>,
};

export type FieldInputProps = {
  name: string,
  onBlur: (?SyntheticFocusEvent<*>) => void,
  onChange: (SyntheticInputEvent<*> | any) => void,
  onFocus: (?SyntheticFocusEvent<*>) => void,
  value: any,
  type?: string,
  checked?: boolean,
  multiple?: boolean,
};
export type FieldRenderProps = {
  input: FieldInputProps,
  meta: {
    active?: boolean,
    data?: Object,
    dirty?: boolean,
    dirtySinceLastSubmit?: boolean,
    error?: any,
    initial?: any,
    invalid?: boolean,
    length?: number,
    modified?: boolean,
    modifiedSinceLastSubmit?: boolean,
    pristine?: boolean,
    submitError?: any,
    submitFailed?: boolean,
    submitSucceeded?: boolean,
    submitting?: boolean,
    touched?: boolean,
    valid?: boolean,
    validating?: boolean,
    visited?: boolean,
  },
};

export type SubmitEvent = {
  preventDefault?: $PropertyType<SyntheticEvent<EventTarget>, "preventDefault">,
  stopPropagation?: $PropertyType<
    SyntheticEvent<EventTarget>,
    "stopPropagation",
  >,
};

export type FormRenderProps<FormValues: FormValuesShape> = {
  handleSubmit: (?SubmitEvent) => ?Promise<?Object>,
  form: FormApi<FormValues>,
} & FormState<FormValues>;

export type FormSpyRenderProps<FormValues: FormValuesShape> = {
  form: FormApi<FormValues>,
} & FormState<FormValues>;

export type RenderableProps<T> = {
  component?: React.ComponentType<*> | SupportedInputs,
  children?: ((props: T) => React.Node) | React.Node,
  render?: (props: T) => React.Node,
};

export type FormProps<FormValues: FormValuesShape> = {
  subscription?: FormSubscription,
  decorators?: Decorator<FormValues>[],
  form?: FormApi<FormValues>,
  initialValuesEqual?: (?Object, ?Object) => boolean,
} & Config<FormValues> &
  RenderableProps<FormRenderProps<FormValues>>;

export type UseFieldAutoConfig = {
  afterSubmit?: () => void,
  allowNull?: boolean,
  beforeSubmit?: () => void | false,
  children?: $PropertyType<RenderableProps<*>, "children">,
  component?: $PropertyType<RenderableProps<*>, "component">,
  data?: Object,
  defaultValue?: any,
  format?: (value: any, name: string) => any,
  formatOnBlur?: boolean,
  initialValue?: any,
  isEqual?: (a: any, b: any) => boolean,
  multiple?: boolean,
  parse?: (value: any, name: string) => any,
  type?: string,
  validate?: FieldValidator,
  validateFields?: string[],
  value?: any,
};

export type UseFieldConfig = {
  subscription?: FieldSubscription,
} & UseFieldAutoConfig;

export type FieldProps = UseFieldConfig & {
  name: string,
} & RenderableProps<FieldRenderProps>;

export type UseFormStateParams<FormValues: FormValuesShape> = {
  onChange?: (formState: FormState<FormValues>) => void,
  subscription?: FormSubscription,
};

export type FormSpyProps<FormValues: FormValuesShape> =
  UseFormStateParams<FormValues> &
    RenderableProps<FormSpyRenderProps<FormValues>>;

export type FormSpyPropsWithForm<FormValues: FormValuesShape> = {
  reactFinalForm: FormApi<FormValues>,
} & FormSpyProps<FormValues>;
