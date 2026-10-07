import * as React from "react";
import {
  FormApi,
  Config,
  Decorator,
  FormState,
  FormSubscription,
  FieldState,
  FieldSubscription,
  FieldValidator,
} from "final-form";

type SupportedInputs = "input" | "select" | "textarea";

export interface ReactContext<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
> {
  reactFinalForm: FormApi<FormValues, InitialFormValues>;
}

export type FieldMetaState<FieldValue> = Pick<
  FieldState<FieldValue>,
  Exclude<
    keyof FieldState<FieldValue>,
    "blur" | "change" | "focus" | "name" | "value"
  >
>;

interface FieldInputProps<FieldValue, T extends HTMLElement = HTMLElement>
  extends AnyObject {
  name: string;
  onBlur: (event?: React.FocusEvent<T>) => void;
  onChange: (event: React.ChangeEvent<T> | any) => void;
  onFocus: (event?: React.FocusEvent<T>) => void;
  type?: string;
  value: FieldValue;
  checked?: boolean;
  multiple?: boolean;
}

interface AnyObject {
  [key: string]: any;
}

export interface FieldRenderProps<
  FieldValue,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
> {
  input: FieldInputProps<InputValue, T>;
  meta: FieldMetaState<FieldValue>;
  [otherProp: string]: any;
}

export interface FormRenderProps<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
> extends FormState<FormValues, InitialFormValues>,
    RenderableProps<FormRenderProps<FormValues>> {
  form: FormApi<FormValues>;
  handleSubmit: (
    event?: Partial<
      Pick<React.SyntheticEvent, "preventDefault" | "stopPropagation">
    >,
  ) => Promise<AnyObject | undefined> | undefined;
}

export interface FormSpyRenderProps<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
> extends FormState<FormValues, InitialFormValues> {
  form: FormApi<FormValues, InitialFormValues>;
}

export interface RenderableProps<T> {
  children?: ((props: T) => React.ReactNode) | React.ReactNode;
  component?: React.ComponentType<T> | SupportedInputs;
  render?: (props: T) => React.ReactNode;
}

export interface FormProps<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
> extends Config<FormValues, InitialFormValues>,
    RenderableProps<FormRenderProps<FormValues, InitialFormValues>> {
  subscription?: FormSubscription;
  decorators?: Array<Decorator<FormValues, InitialFormValues>>;
  form?: FormApi<FormValues, InitialFormValues>;
  initialValuesEqual?: (a?: AnyObject, b?: AnyObject) => boolean;
  [otherProp: string]: any;
}

export interface UseFieldConfig<FieldValue, InputValue = any> {
  afterSubmit?: () => void;
  allowNull?: boolean;
  beforeSubmit?: () => void | boolean;
  data?: AnyObject;
  defaultValue?: FieldValue;
  format?: (value: FieldValue, name: string) => InputValue;
  formatOnBlur?: boolean;
  initialValue?: FieldValue;
  isEqual?: (a: any, b: any) => boolean;
  multiple?: boolean;
  parse?: (value: InputValue, name: string) => FieldValue;
  subscription?: FieldSubscription;
  type?: string;
  validate?: FieldValidator<FieldValue>;
  validateFields?: string[];
  value?: FieldValue;
}

export interface FieldProps<
  FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue>,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
> extends UseFieldConfig<FieldValue, InputValue>,
    RenderableProps<RP> {
  name: string;
  [otherProp: string]: any;
}

export interface UseFormStateParams<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
> {
  onChange?: (formState: FormState<FormValues, InitialFormValues>) => void;
  subscription?: FormSubscription;
}

export interface FormSpyProps<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
> extends UseFormStateParams<FormValues, InitialFormValues>,
    RenderableProps<FormSpyRenderProps<FormValues, InitialFormValues>> {}

export const Field: <
  FieldValue = any,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue> = FieldRenderProps<
    FieldValue,
    T,
    InputValue
  >,
>(
  props: FieldProps<FieldValue, RP, T, InputValue>,
) => React.ReactElement;
export const Form: <
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
>(
  props: FormProps<FormValues, InitialFormValues>,
) => React.ReactElement;
export const FormSpy: <
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
>(
  props: FormSpyProps<FormValues, InitialFormValues>,
) => React.ReactElement;
export function useField<
  FieldValue = any,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
>(
  name: string,
  config?: UseFieldConfig<FieldValue, InputValue>,
): FieldRenderProps<FieldValue, T, InputValue>;
export function useForm<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
>(componentName?: string): FormApi<FormValues, InitialFormValues>;
export function useFormState<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
>(
  params?: UseFormStateParams<FormValues, InitialFormValues>,
): FormState<FormValues, InitialFormValues>;
export function withTypes<
  FormValues = Record<string, any>,
  InitialFormValues = Partial<FormValues>,
>(): {
  Form: React.FC<FormProps<FormValues, InitialFormValues>>;
  FormSpy: React.FC<FormSpyProps<FormValues, InitialFormValues>>;
};
export const version: string;
