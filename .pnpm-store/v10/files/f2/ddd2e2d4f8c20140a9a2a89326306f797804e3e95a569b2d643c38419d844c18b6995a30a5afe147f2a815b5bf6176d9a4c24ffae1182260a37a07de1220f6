'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutPropertiesLoose = require('@babel/runtime/helpers/objectWithoutPropertiesLoose');
var React = require('react');
var finalForm = require('final-form');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded$3 = ["render", "children", "component"];
// shared logic between components that use either render prop,
// children render function, or component prop
function renderComponent(props, lazyProps, name) {
  var render = props.render,
      children = props.children,
      component = props.component,
      rest = _objectWithoutPropertiesLoose__default["default"](props, _excluded$3);

  if (component) {
    return /*#__PURE__*/React__namespace.createElement(component, Object.assign(lazyProps, rest, {
      children: children,
      render: render
    }));
  }

  if (render) {
    return render(children === undefined ? Object.assign(lazyProps, rest) : // inject children back in
    Object.assign(lazyProps, rest, {
      children: children
    }));
  }

  if (typeof children !== "function") {
    throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + name);
  }

  return children(Object.assign(lazyProps, rest));
}

function useWhenValueChanges(value, callback, isEqual) {
  if (isEqual === void 0) {
    isEqual = function isEqual(a, b) {
      return a === b;
    };
  }

  var previous = React__default["default"].useRef(value);
  React__default["default"].useEffect(function () {
    if (!isEqual(value, previous.current)) {
      callback();
      previous.current = value;
    }
  });
}

/**
 * A simple hook to create a constant value that lives for
 * the lifetime of the component.
 *
 * Plagiarized from https://github.com/Andarist/use-constant
 *
 * Do NOT reuse this code unless you know what you're doing.
 * Use Andarist's hook; it's more fault tolerant to things like
 * falsy values.
 *
 * @param {Function} init - A function to generate the value
 */

function useConstant(init) {
  var ref = React__default["default"].useRef();

  if (!ref.current) {
    ref.current = init();
  }

  return ref.current;
}

var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

var isSyntheticEvent = function isSyntheticEvent(candidate) {
  return !!(candidate && typeof candidate.stopPropagation === "function");
};

var ReactFinalFormContext = /*#__PURE__*/React__namespace.createContext();

function useLatest(value) {
  var ref = React__default["default"].useRef(value);
  React__default["default"].useEffect(function () {
    ref.current = value;
  });
  return ref;
}

var version = "6.5.8";

var addLazyState = function addLazyState(dest, state, keys) {
  keys.forEach(function (key) {
    Object.defineProperty(dest, key, {
      get: function get() {
        return state[key];
      },
      enumerable: true
    });
  });
};

var addLazyFormState = function addLazyFormState(dest, state) {
  return addLazyState(dest, state, ["active", "dirty", "dirtyFields", "dirtySinceLastSubmit", "dirtyFieldsSinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
};
var addLazyFieldMetaState = function addLazyFieldMetaState(dest, state) {
  return addLazyState(dest, state, ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "visited"]);
};

var _excluded$2 = ["debug", "decorators", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"];
var versions = {
  "final-form": finalForm.version,
  "react-final-form": version
};
var all$1 = finalForm.formSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

function ReactFinalForm(_ref) {
  var debug = _ref.debug,
      _ref$decorators = _ref.decorators,
      decorators = _ref$decorators === void 0 ? [] : _ref$decorators,
      destroyOnUnregister = _ref.destroyOnUnregister,
      alternateFormApi = _ref.form,
      initialValues = _ref.initialValues,
      initialValuesEqual = _ref.initialValuesEqual,
      keepDirtyOnReinitialize = _ref.keepDirtyOnReinitialize,
      mutators = _ref.mutators,
      onSubmit = _ref.onSubmit,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription,
      validate = _ref.validate,
      validateOnBlur = _ref.validateOnBlur,
      rest = _objectWithoutPropertiesLoose__default["default"](_ref, _excluded$2);

  var config = {
    debug: debug,
    destroyOnUnregister: destroyOnUnregister,
    initialValues: initialValues,
    keepDirtyOnReinitialize: keepDirtyOnReinitialize,
    mutators: mutators,
    onSubmit: onSubmit,
    validate: validate,
    validateOnBlur: validateOnBlur
  };
  var form = useConstant(function () {
    var f = alternateFormApi || finalForm.createForm(config); // pause validation until children register all fields on first render (unpaused in useEffect() below)

    f.pauseValidation();
    return f;
  }); // synchronously register and unregister to query form state for our subscription on first render

  var _React$useState = React__namespace.useState(function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // save a copy of state that can break through the closure
  // on the shallowEqual() line below.


  var stateRef = useLatest(state);
  React__namespace.useEffect(function () {
    // We have rendered, so all fields are now registered, so we can unpause validation
    form.isValidationPaused() && form.resumeValidation();
    var unsubscriptions = [form.subscribe(function (s) {
      if (!shallowEqual(s, stateRef.current)) {
        setState(s);
      }
    }, subscription)].concat(decorators ? decorators.map(function (decorator) {
      return (// this noop ternary is to appease the flow gods
        // istanbul ignore next
        decorator(form)
      );
    }) : []);
    return function () {
      form.pauseValidation(); // pause validation so we don't revalidate on every field deregistration

      unsubscriptions.reverse().forEach(function (unsubscribe) {
        return unsubscribe();
      }); // don't need to resume validation here; either unmounting, or will re-run this hook with new deps
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, decorators); // warn about decorator changes
  // istanbul ignore next

  if (process.env.NODE_ENV !== "production") {
    // You're never supposed to use hooks inside a conditional, but in this
    // case we can be certain that you're not going to be changing your
    // NODE_ENV between renders, so this is safe.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWhenValueChanges(decorators, function () {
      console.error("Form decorators should not change from one render to the next as new values will be ignored");
    }, shallowEqual);
  } // allow updatable config


  useWhenValueChanges(debug, function () {
    form.setConfig("debug", debug);
  });
  useWhenValueChanges(destroyOnUnregister, function () {
    form.destroyOnUnregister = !!destroyOnUnregister;
  });
  useWhenValueChanges(keepDirtyOnReinitialize, function () {
    form.setConfig("keepDirtyOnReinitialize", keepDirtyOnReinitialize);
  });
  useWhenValueChanges(initialValues, function () {
    form.setConfig("initialValues", initialValues);
  }, initialValuesEqual || shallowEqual);
  useWhenValueChanges(mutators, function () {
    form.setConfig("mutators", mutators);
  });
  useWhenValueChanges(onSubmit, function () {
    form.setConfig("onSubmit", onSubmit);
  });
  useWhenValueChanges(validate, function () {
    form.setConfig("validate", validate);
  });
  useWhenValueChanges(validateOnBlur, function () {
    form.setConfig("validateOnBlur", validateOnBlur);
  });

  var handleSubmit = function handleSubmit(event) {
    if (event) {
      // sometimes not true, e.g. React Native
      if (typeof event.preventDefault === "function") {
        event.preventDefault();
      }

      if (typeof event.stopPropagation === "function") {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }
    }

    return form.submit();
  };

  var renderProps = {
    form: _extends__default["default"]({}, form, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          form.reset();
        } else {
          form.reset(eventOrValues);
        }
      }
    }),
    handleSubmit: handleSubmit
  };
  addLazyFormState(renderProps, state);
  return /*#__PURE__*/React__namespace.createElement(ReactFinalFormContext.Provider, {
    value: form
  }, renderComponent(_extends__default["default"]({}, rest, {
    __versions: versions
  }), renderProps, "ReactFinalForm"));
}

function useForm(componentName) {
  var form = React__namespace.useContext(ReactFinalFormContext);

  if (!form) {
    throw new Error((componentName || "useForm") + " must be used inside of a <Form> component");
  }

  return form;
}

function useFormState(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onChange = _ref.onChange,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription;

  var form = useForm("useFormState");
  var firstRender = React__namespace.useRef(true);
  var onChangeRef = React__namespace.useRef(onChange);
  onChangeRef.current = onChange; // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = React__namespace.useState(function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();

    if (onChange) {
      onChange(initialState);
    }

    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  React__namespace.useEffect(function () {
    return form.subscribe(function (newState) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(newState);

        if (onChangeRef.current) {
          onChangeRef.current(newState);
        }
      }
    }, subscription);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var lazyState = {};
  addLazyFormState(lazyState, state);
  return lazyState;
}

var _excluded$1 = ["onChange", "subscription"];

function FormSpy(_ref) {
  var onChange = _ref.onChange,
      subscription = _ref.subscription,
      rest = _objectWithoutPropertiesLoose__default["default"](_ref, _excluded$1);

  var reactFinalForm = useForm("FormSpy");
  var state = useFormState({
    onChange: onChange,
    subscription: subscription
  });

  if (onChange) {
    return null;
  }

  var renderProps = {
    form: _extends__default["default"]({}, reactFinalForm, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          reactFinalForm.reset();
        } else {
          reactFinalForm.reset(eventOrValues);
        }
      }
    })
  };
  return renderComponent(_extends__default["default"]({}, rest, renderProps), state, "FormSpy");
}

var isReactNative = typeof window !== "undefined" && window.navigator && window.navigator.product && window.navigator.product === "ReactNative";

var getSelectedValues = function getSelectedValues(options) {
  var result = [];

  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];

      if (option.selected) {
        result.push(option.value);
      }
    }
  }

  return result;
};

var getValue = function getValue(event, currentValue, valueProp, isReactNative) {
  if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
    return event.nativeEvent.text;
  }

  if (isReactNative && event.nativeEvent) {
    return event.nativeEvent.text;
  }

  var detypedEvent = event;
  var _detypedEvent$target = detypedEvent.target,
      type = _detypedEvent$target.type,
      value = _detypedEvent$target.value,
      checked = _detypedEvent$target.checked;

  switch (type) {
    case "checkbox":
      if (valueProp !== undefined) {
        // we are maintaining an array, not just a boolean
        if (checked) {
          // add value to current array value
          return Array.isArray(currentValue) ? currentValue.concat(valueProp) : [valueProp];
        } else {
          // remove value from current array value
          if (!Array.isArray(currentValue)) {
            return currentValue;
          }

          var index = currentValue.indexOf(valueProp);

          if (index < 0) {
            return currentValue;
          } else {
            return currentValue.slice(0, index).concat(currentValue.slice(index + 1));
          }
        }
      } else {
        // it's just a boolean
        return !!checked;
      }

    case "select-multiple":
      return getSelectedValues(event.target.options);

    default:
      return value;
  }
};

/**
 * Creates a callback, even with closures, that will be
 * instance === for the lifetime of the component, always
 * calling the most recent version of the function and its
 * closures.
 */

function useConstantCallback(callback) {
  var ref = React__namespace.useRef(callback);
  React__namespace.useEffect(function () {
    ref.current = callback;
  });
  return React__namespace.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(null, args);
  }, []);
}

var all = finalForm.fieldSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

var defaultFormat = function defaultFormat(value, name) {
  return value === undefined ? "" : value;
};

var defaultParse = function defaultParse(value, name) {
  return value === "" ? undefined : value;
};

var defaultIsEqual = function defaultIsEqual(a, b) {
  return a === b;
};

function useField(name, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      afterSubmit = _config.afterSubmit,
      allowNull = _config.allowNull,
      component = _config.component,
      data = _config.data,
      defaultValue = _config.defaultValue,
      _config$format = _config.format,
      format = _config$format === void 0 ? defaultFormat : _config$format,
      formatOnBlur = _config.formatOnBlur,
      initialValue = _config.initialValue,
      multiple = _config.multiple,
      _config$parse = _config.parse,
      parse = _config$parse === void 0 ? defaultParse : _config$parse,
      _config$subscription = _config.subscription,
      subscription = _config$subscription === void 0 ? all : _config$subscription,
      type = _config.type,
      validateFields = _config.validateFields,
      _value = _config.value;
  var form = useForm("useField");
  var configRef = useLatest(config);

  var register = function register(callback, silent) {
    return (// avoid using `state` const in any closures created inside `register`
      // because they would refer `state` from current execution context
      // whereas actual `state` would defined in the subsequent `useField` hook
      // execution
      // (that would be caused by `setState` call performed in `register` callback)
      form.registerField(name, callback, subscription, {
        afterSubmit: afterSubmit,
        beforeSubmit: function beforeSubmit() {
          var _configRef$current = configRef.current,
              beforeSubmit = _configRef$current.beforeSubmit,
              formatOnBlur = _configRef$current.formatOnBlur,
              _configRef$current$fo = _configRef$current.format,
              format = _configRef$current$fo === void 0 ? defaultFormat : _configRef$current$fo;

          if (formatOnBlur) {
            var _ref = form.getFieldState(name),
                value = _ref.value;

            var formatted = format(value, name);

            if (formatted !== value) {
              form.change(name, formatted);
            }
          }

          return beforeSubmit && beforeSubmit();
        },
        data: data,
        defaultValue: defaultValue,
        getValidator: function getValidator() {
          return configRef.current.validate;
        },
        initialValue: initialValue,
        isEqual: function isEqual(a, b) {
          return (configRef.current.isEqual || defaultIsEqual)(a, b);
        },
        silent: silent,
        validateFields: validateFields
      })
    );
  };

  var firstRender = React__namespace.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = React__namespace.useState(function () {
    var initialState = {}; // temporarily disable destroyOnUnregister

    // temporarily disable destroyOnUnregister
    var destroyOnUnregister = form.destroyOnUnregister;
    form.destroyOnUnregister = false;
    register(function (state) {
      initialState = state;
    }, true)(); // return destroyOnUnregister to its original value

    // return destroyOnUnregister to its original value
    form.destroyOnUnregister = destroyOnUnregister;
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  React__namespace.useEffect(function () {
    return register(function (state) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(state);
      }
    }, false);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [name, data, defaultValue, // If we want to allow inline fat-arrow field-level validation functions, we
  // cannot reregister field every time validate function !==.
  // validate,
  initialValue // The validateFields array is often passed as validateFields={[]}, creating
  // a !== new array every time. If it needs to be changed, a rerender/reregister
  // can be forced by changing the key prop
  // validateFields
  ]);
  var meta = {};
  addLazyFieldMetaState(meta, state);
  var input = {
    name: name,

    get value() {
      var value = state.value;

      if (formatOnBlur) {
        if (component === "input") {
          value = defaultFormat(value);
        }
      } else {
        value = format(value, name);
      }

      if (value === null && !allowNull) {
        value = "";
      }

      if (type === "checkbox" || type === "radio") {
        return _value;
      } else if (component === "select" && multiple) {
        return value || [];
      }

      return value;
    },

    get checked() {
      var value = state.value;

      if (type === "checkbox") {
        value = format(value, name);

        if (_value === undefined) {
          return !!value;
        } else {
          return !!(Array.isArray(value) && ~value.indexOf(_value));
        }
      } else if (type === "radio") {
        return format(value, name) === _value;
      }

      return undefined;
    },

    onBlur: useConstantCallback(function (event) {
      state.blur();

      if (formatOnBlur) {
        /**
         * Here we must fetch the value directly from Final Form because we cannot
         * trust that our `state` closure has the most recent value. This is a problem
         * if-and-only-if the library consumer has called `onChange()` immediately
         * before calling `onBlur()`, but before the field has had a chance to receive
         * the value update from Final Form.
         */
        var fieldState = form.getFieldState(state.name);
        state.change(format(fieldState.value, state.name));
      }
    }),
    onChange: useConstantCallback(function (event) {
      // istanbul ignore next
      if (process.env.NODE_ENV !== "production" && event && event.target) {
        var targetType = event.target.type;
        var unknown = ~["checkbox", "radio", "select-multiple"].indexOf(targetType) && !type && component !== "select";

        var _value2 = targetType === "select-multiple" ? state.value : _value;

        if (unknown) {
          console.error("You must pass `type=\"" + (targetType === "select-multiple" ? "select" : targetType) + "\"` prop to your Field(" + name + ") component.\n" + ("Without it we don't know how to unpack your `value` prop - " + (Array.isArray(_value2) ? "[" + _value2 + "]" : "\"" + _value2 + "\"") + "."));
        }
      }

      var value = event && event.target ? getValue(event, state.value, _value, isReactNative) : event;
      state.change(parse(value, name));
    }),
    onFocus: useConstantCallback(function (event) {
      return state.focus();
    })
  };

  if (multiple) {
    input.multiple = multiple;
  }

  if (type !== undefined) {
    input.type = type;
  }

  var renderProps = {
    input: input,
    meta: meta
  }; // assign to force Flow check

  return renderProps;
}

var _excluded = ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"];
var Field = /*#__PURE__*/React__namespace.forwardRef(function Field(_ref, ref) {
  var afterSubmit = _ref.afterSubmit,
      allowNull = _ref.allowNull,
      beforeSubmit = _ref.beforeSubmit,
      children = _ref.children,
      component = _ref.component,
      data = _ref.data,
      defaultValue = _ref.defaultValue,
      format = _ref.format,
      formatOnBlur = _ref.formatOnBlur,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      multiple = _ref.multiple,
      name = _ref.name,
      parse = _ref.parse,
      subscription = _ref.subscription,
      type = _ref.type,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      value = _ref.value,
      rest = _objectWithoutPropertiesLoose__default["default"](_ref, _excluded);

  var field = useField(name, {
    afterSubmit: afterSubmit,
    allowNull: allowNull,
    beforeSubmit: beforeSubmit,
    children: children,
    component: component,
    data: data,
    defaultValue: defaultValue,
    format: format,
    formatOnBlur: formatOnBlur,
    initialValue: initialValue,
    isEqual: isEqual,
    multiple: multiple,
    parse: parse,
    subscription: subscription,
    type: type,
    validate: validate,
    validateFields: validateFields,
    value: value
  });

  if (typeof children === "function") {
    return children(_extends__default["default"]({}, field, rest));
  }

  if (typeof component === "string") {
    // ignore meta, combine input with any other props
    return /*#__PURE__*/React__namespace.createElement(component, _extends__default["default"]({}, field.input, {
      children: children,
      ref: ref
    }, rest));
  }

  if (!name) {
    throw new Error("prop name cannot be undefined in <Field> component");
  }

  return renderComponent(_extends__default["default"]({
    children: children,
    component: component,
    ref: ref
  }, rest), field, "Field(" + name + ")");
});

function withTypes() {
  return {
    Form: ReactFinalForm,
    FormSpy: FormSpy
  };
}

exports.Field = Field;
exports.Form = ReactFinalForm;
exports.FormSpy = FormSpy;
exports.useField = useField;
exports.useForm = useForm;
exports.useFormState = useFormState;
exports.version = version;
exports.withTypes = withTypes;
