// @flow
export type Subscription = { [string]: boolean };
export type Subscriber<V> = (value: V) => void;
export type IsEqual = (a: any, b: any) => boolean;

export type FormValuesShape = {
  [string]: any,
};

export type FormSubscription = {
  active?: boolean,
  dirty?: boolean,
  dirtyFields?: boolean,
  dirtyFieldsSinceLastSubmit?: boolean,
  dirtySinceLastSubmit?: boolean,
  error?: boolean,
  errors?: boolean,
  hasSubmitErrors?: boolean,
  hasValidationErrors?: boolean,
  initialValues?: boolean,
  invalid?: boolean,
  modified?: boolean,
  modifiedSinceLastSubmit?: boolean,
  pristine?: boolean,
  submitError?: boolean,
  submitErrors?: boolean,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  submitting?: boolean,
  touched?: boolean,
  valid?: boolean,
  validating?: boolean,
  values?: boolean,
  visited?: boolean,
};

export type FormState<FormValues: FormValuesShape> = {
  // all values are optional because they must be subscribed to
  active?: string,
  dirty?: boolean,
  dirtyFields?: { [string]: boolean },
  dirtyFieldsSinceLastSubmit?: { [string]: boolean },
  dirtySinceLastSubmit?: boolean,
  error?: any,
  errors?: Object,
  hasSubmitErrors?: boolean,
  hasValidationErrors?: boolean,
  initialValues?: FormValues,
  invalid?: boolean,
  modified?: { [string]: boolean },
  modifiedSinceLastSubmit?: boolean,
  pristine?: boolean,
  submitError?: any,
  submitErrors?: Object,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  submitting?: boolean,
  touched?: { [string]: boolean },
  valid?: boolean,
  validating?: boolean,
  values?: FormValues,
  visited?: { [string]: boolean },
};

export type FormSubscriber<FormValues: FormValuesShape> = Subscriber<
  FormState<FormValues>,
>;

export type FieldState = {
  active?: boolean,
  blur: () => void,
  change: (value: any) => void,
  data?: Object,
  dirty?: boolean,
  dirtySinceLastSubmit?: boolean,
  error?: any,
  focus: () => void,
  initial?: any,
  invalid?: boolean,
  length?: number,
  modified?: boolean,
  modifiedSinceLastSubmit?: boolean,
  name: string,
  pristine?: boolean,
  submitError?: any,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  submitting?: boolean,
  touched?: boolean,
  valid?: boolean,
  validating?: boolean,
  value?: any,
  visited?: boolean,
};

export type FieldSubscription = {
  active?: boolean,
  data?: boolean,
  dirty?: boolean,
  dirtySinceLastSubmit?: boolean,
  error?: boolean,
  initial?: boolean,
  invalid?: boolean,
  length?: boolean,
  modified?: boolean,
  modifiedSinceLastSubmit?: boolean,
  pristine?: boolean,
  submitError?: boolean,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  submitting?: boolean,
  touched?: boolean,
  valid?: boolean,
  validating?: boolean,
  value?: boolean,
  visited?: boolean,
};

export type FieldSubscriber = Subscriber<FieldState>;
export type Subscribers<T: Object> = {
  index: number,
  entries: {
    [number]: {
      subscriber: Subscriber<T>,
      subscription: Subscription,
      notified: boolean,
    },
  },
};

export type Unsubscribe = () => void;

export type FieldValidator = (
  value: ?any,
  allValues: Object,
  meta: ?FieldState,
) => ?any | Promise<?any>;
export type GetFieldValidator = () => ?FieldValidator;

export type FieldConfig = {
  afterSubmit?: () => void,
  beforeSubmit?: () => void | false,
  data?: any,
  defaultValue?: any,
  getValidator?: GetFieldValidator,
  initialValue?: any,
  isEqual?: IsEqual,
  silent?: boolean,
  validateFields?: string[],
};

export type RegisterField = (
  name: string,
  subscriber: FieldSubscriber,
  subscription: FieldSubscription,
  config?: FieldConfig,
) => Unsubscribe;

export type InternalFieldState = {
  active: boolean,
  afterSubmit?: () => void,
  beforeSubmit?: () => void | false,
  blur: () => void,
  change: (value: any) => void,
  data: Object,
  focus: () => void,
  isEqual: IsEqual,
  lastFieldState: ?FieldState,
  length?: any,
  modified: boolean,
  modifiedSinceLastSubmit: boolean,
  name: string,
  touched: boolean,
  validateFields: ?(string[]),
  validators: {
    [number]: GetFieldValidator,
  },
  valid: boolean,
  validating: boolean,
  visited: boolean,
};

export type InternalFormState<FormValues: FormValuesShape> = {
  active?: string,
  asyncErrors: Object,
  dirtySinceLastSubmit: boolean,
  modifiedSinceLastSubmit: boolean,
  error?: any,
  errors: Object,
  initialValues?: Object,
  lastSubmittedValues?: Object,
  pristine: boolean,
  resetWhileSubmitting: boolean,
  submitError?: any,
  submitErrors?: Object,
  submitFailed: boolean,
  submitSucceeded: boolean,
  submitting: boolean,
  valid: boolean,
  validating: number,
  values: FormValues,
};

export type ConfigKey =
  | "debug"
  | "destroyOnUnregister"
  | "initialValues"
  | "keepDirtyOnReinitialize"
  | "mutators"
  | "onSubmit"
  | "validate"
  | "validateOnBlur";

export type FormApi<FormValues: FormValuesShape> = {
  batch: (fn: () => void) => void,
  blur: (name: string) => void,
  change: (name: string, value: ?any) => void,
  destroyOnUnregister: boolean,
  focus: (name: string) => void,
  initialize: (data: Object | ((values: Object) => Object)) => void,
  isValidationPaused: () => boolean,
  getFieldState: (field: string) => ?FieldState,
  getRegisteredFields: () => string[],
  getState: () => FormState<FormValues>,
  mutators: { [string]: (...args: any[]) => any },
  pauseValidation: () => void,
  registerField: RegisterField,
  reset: (initialValues?: Object) => void,
  resetFieldState: (name: string) => void,
  restart: (initialValues?: Object) => void,
  resumeValidation: () => void,
  setConfig: (name: ConfigKey, value: any) => void,
  submit: () => ?Promise<?Object>,
  subscribe: (
    subscriber: FormSubscriber<FormValues>,
    subscription: FormSubscription,
  ) => Unsubscribe,
};

export type DebugFunction<FormValues: FormValuesShape> = (
  state: FormState<FormValues>,
  fieldStates: { [string]: FieldState },
) => void;

export type MutableState<FormValues: FormValuesShape> = {
  fieldSubscribers: { [string]: Subscribers<FieldState> },
  fields: {
    [string]: InternalFieldState,
  },
  formState: InternalFormState<FormValues>,
  lastFormState?: FormState<FormValues>,
};

export type GetIn = (state: Object, complexKey: string) => any;
export type SetIn = (
  state: Object,
  key: string,
  value: any,
  destroyArrays?: boolean,
) => Object;
export type ChangeValue<FormValues: FormValuesShape> = (
  state: MutableState<FormValues>,
  name: string,
  mutate: (value: any) => any,
) => void;
export type RenameField<FormValues: FormValuesShape> = (
  state: MutableState<FormValues>,
  from: string,
  to: string,
) => void;
export type Tools<FormValues: FormValuesShape> = {
  changeValue: ChangeValue<FormValues>,
  getIn: GetIn,
  renameField: RenameField<FormValues>,
  resetFieldState: (string) => void,
  setIn: SetIn,
  shallowEqual: IsEqual,
};

export type Mutator<FormValues: FormValuesShape> = (
  args: any[],
  state: MutableState<FormValues>,
  tools: Tools<FormValues>,
) => any;

export type Config<FormValues: FormValuesShape> = {
  debug?: DebugFunction<FormValues>,
  destroyOnUnregister?: boolean,
  initialValues?: FormValues,
  keepDirtyOnReinitialize?: boolean,
  mutators?: { [string]: Mutator<FormValues> },
  onSubmit: (
    values: FormValues,
    form: FormApi<FormValues>,
    callback: ?(errors: ?Object) => ?Object,
  ) => ?Object | Promise<?Object> | void,
  validate?: (values: Object) => Object | Promise<Object>,
  validateOnBlur?: boolean,
};

export type Decorator<FormValues: FormValuesShape> = (
  form: FormApi<FormValues>,
) => Unsubscribe;
