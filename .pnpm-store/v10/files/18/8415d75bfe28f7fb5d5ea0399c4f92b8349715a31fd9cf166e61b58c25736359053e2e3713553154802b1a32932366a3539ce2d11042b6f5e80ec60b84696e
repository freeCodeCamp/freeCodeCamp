import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';

//      

var charCodeOfDot = ".".charCodeAt(0);
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp(
// Match anything that isn't a dot or bracket.
"[^.[\\]]+" + "|" +
// Or match property names within brackets.
"\\[(?:" +
// Match a non-string expression.
"([^\"'][^[]*)" + "|" +
// Or match strings (supports escaping characters).
"([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" + ")\\]" + "|" +
// Or match "" as the space between consecutive dots or empty brackets.
"(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g");

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = function stringToPath(string) {
  var result = [];
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push("");
  }
  string.replace(rePropName, function (match, expression, quote, subString) {
    var key = match;
    if (quote) {
      key = subString.replace(reEscapeChar, "$1");
    } else if (expression) {
      key = expression.trim();
    }
    result.push(key);
  });
  return result;
};
var keysCache = {};
var keysRegex = /[.[\]]+/;
var toPath = function toPath(key) {
  if (key === null || key === undefined || !key.length) {
    return [];
  }
  if (typeof key !== "string") {
    throw new Error("toPath() expects a string");
  }
  if (keysCache[key] == null) {
    /**
     * The following patch fixes issue 456, introduced since v4.20.3:
     *
     * Before v4.20.3, i.e. in v4.20.2, a `key` like 'choices[]' would map to ['choices']
     * (e.g. an array of choices used where 'choices[]' is name attribute of an input of type checkbox).
     *
     * Since v4.20.3, a `key` like 'choices[]' would map to ['choices', ''] which is wrong and breaks
     * this kind of inputs e.g. in React.
     *
     * v4.20.3 introduced an unwanted breaking change, this patch fixes it, see the issue at the link below.
     *
     * @see https://github.com/final-form/final-form/issues/456
     */
    if (key.endsWith("[]")) {
      // v4.20.2 (a `key` like 'choices[]' should map to ['choices'], which is fine).
      keysCache[key] = key.split(keysRegex).filter(Boolean);
    } else {
      // v4.20.3 (a `key` like 'choices[]' maps to ['choices', ''], which breaks applications relying on inputs like `<input type="checkbox" name="choices[]" />`).
      keysCache[key] = stringToPath(key);
    }
  }
  return keysCache[key];
};

//      
var getIn = function getIn(state, complexKey) {
  // Intentionally using iteration rather than recursion
  var path = toPath(complexKey);
  var current = state;
  for (var i = 0; i < path.length; i++) {
    var key = path[i];
    if (current === undefined || current === null || typeof current !== "object" || Array.isArray(current) && isNaN(key)) {
      return undefined;
    }
    current = current[key];
  }
  return current;
};

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
  if (index >= path.length) {
    // end of recursion
    return value;
  }
  var key = path[index];

  // determine type of key
  if (isNaN(key)) {
    var _extends2;
    // object set
    if (current === undefined || current === null) {
      var _ref;
      // recurse
      var _result = setInRecursor(undefined, index + 1, path, value, destroyArrays);

      // delete or create an object
      return _result === undefined ? undefined : (_ref = {}, _ref[key] = _result, _ref);
    }
    if (Array.isArray(current)) {
      throw new Error("Cannot set a non-numeric property on an array");
    }
    // current exists, so make a copy of all its values, and add/update the new one
    var _result2 = setInRecursor(current[key], index + 1, path, value, destroyArrays);
    if (_result2 === undefined) {
      var numKeys = Object.keys(current).length;
      if (current[key] === undefined && numKeys === 0) {
        // object was already empty
        return undefined;
      }
      if (current[key] !== undefined && numKeys <= 1) {
        // only key we had was the one we are deleting
        if (!isNaN(path[index - 1]) && !destroyArrays) {
          // we are in an array, so return an empty object
          return {};
        } else {
          return undefined;
        }
      }
      current[key];
        var _final = _objectWithoutPropertiesLoose(current, [key].map(_toPropertyKey));
      return _final;
    }
    // set result in key
    return _extends({}, current, (_extends2 = {}, _extends2[key] = _result2, _extends2));
  }
  // array set
  var numericKey = Number(key);
  if (current === undefined || current === null) {
    // recurse
    var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays);

    // if nothing returned, delete it
    if (_result3 === undefined) {
      return undefined;
    }

    // create an array
    var _array = [];
    _array[numericKey] = _result3;
    return _array;
  }
  if (!Array.isArray(current)) {
    throw new Error("Cannot set a numeric property on an object");
  }
  // recurse
  var existingValue = current[numericKey];
  var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays);

  // current exists, so make a copy of all its values, and add/update the new one
  var array = [].concat(current);
  if (destroyArrays && result === undefined) {
    array.splice(numericKey, 1);
    if (array.length === 0) {
      return undefined;
    }
  } else {
    array[numericKey] = result;
  }
  return array;
};
var setIn = function setIn(state, key, value, destroyArrays) {
  if (destroyArrays === void 0) {
    destroyArrays = false;
  }
  if (state === undefined || state === null) {
    throw new Error("Cannot call setIn() with " + String(state) + " state");
  }
  if (key === undefined || key === null) {
    throw new Error("Cannot call setIn() with " + String(key) + " key");
  }
  // Recursive function needs to accept and return State, but public API should
  // only deal with Objects
  return setInRecursor(state, 0, toPath(key), value, destroyArrays);
};

var FORM_ERROR = "FINAL_FORM/form-error";
var ARRAY_ERROR = "FINAL_FORM/array-error";

//      


/**
 * Converts internal field state to published field state
 */
function publishFieldState(formState, field) {
  var errors = formState.errors,
    initialValues = formState.initialValues,
    lastSubmittedValues = formState.lastSubmittedValues,
    submitErrors = formState.submitErrors,
    submitFailed = formState.submitFailed,
    submitSucceeded = formState.submitSucceeded,
    submitting = formState.submitting,
    values = formState.values;
  var active = field.active,
    blur = field.blur,
    change = field.change,
    data = field.data,
    focus = field.focus,
    modified = field.modified,
    modifiedSinceLastSubmit = field.modifiedSinceLastSubmit,
    name = field.name,
    touched = field.touched,
    validating = field.validating,
    visited = field.visited;
  var value = getIn(values, name);
  var error = getIn(errors, name);
  if (error && error[ARRAY_ERROR]) {
    error = error[ARRAY_ERROR];
  }
  var submitError = submitErrors && getIn(submitErrors, name);
  var initial = initialValues && getIn(initialValues, name);
  var pristine = field.isEqual(initial, value);
  var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
  var valid = !error && !submitError;
  return {
    active: active,
    blur: blur,
    change: change,
    data: data,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    focus: focus,
    initial: initial,
    invalid: !valid,
    length: Array.isArray(value) ? value.length : undefined,
    modified: modified,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    name: name,
    pristine: pristine,
    submitError: submitError,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitting: submitting,
    touched: touched,
    valid: valid,
    value: value,
    visited: visited,
    validating: validating
  };
}

//      
var fieldSubscriptionItems = ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "value", "visited", "validating"];

//      

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

//      
function subscriptionFilter (dest, src, previous, subscription, keys, shallowEqualKeys) {
  var different = false;
  keys.forEach(function (key) {
    if (subscription[key]) {
      dest[key] = src[key];
      if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual(src[key], previous[key]) : src[key] !== previous[key])) {
        different = true;
      }
    }
  });
  return different;
}

//      
var shallowEqualKeys$1 = ["data"];

/**
 * Filters items in a FieldState based on a FieldSubscription
 */
var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
  var result = {
    blur: state.blur,
    change: state.change,
    focus: state.focus,
    name: state.name
  };
  var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys$1) || !previousState;
  return different || force ? result : undefined;
};

//      
var formSubscriptionItems = ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitting", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "touched", "valid", "validating", "values", "visited"];

//      
var shallowEqualKeys = ["touched", "visited"];

/**
 * Filters items in a FormState based on a FormSubscription
 */
function filterFormState(state, previousState, subscription, force) {
  var result = {};
  var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys) || !previousState;
  return different || force ? result : undefined;
}

//      
var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
      return !shallowEqual(lastArgs[index], arg);
    })) {
      lastArgs = args;
      lastResult = fn.apply(void 0, args);
    }
    return lastResult;
  };
};

var isPromise = (function (obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
});

var version = "4.20.10";

var configOptions = ["debug", "initialValues", "keepDirtyOnReinitialize", "mutators", "onSubmit", "validate", "validateOnBlur"];
var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};
var hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];
    if (value && typeof value === "object" && !(value instanceof Error)) {
      return hasAnyError(value);
    }
    return typeof value !== "undefined";
  });
};
function convertToExternalFormState(_ref) {
  var active = _ref.active,
    dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
    modifiedSinceLastSubmit = _ref.modifiedSinceLastSubmit,
    error = _ref.error,
    errors = _ref.errors,
    initialValues = _ref.initialValues,
    pristine = _ref.pristine,
    submitting = _ref.submitting,
    submitFailed = _ref.submitFailed,
    submitSucceeded = _ref.submitSucceeded,
    submitError = _ref.submitError,
    submitErrors = _ref.submitErrors,
    valid = _ref.valid,
    validating = _ref.validating,
    values = _ref.values;
  return {
    active: active,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    error: error,
    errors: errors,
    hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
    hasValidationErrors: !!(error || hasAnyError(errors)),
    invalid: !valid,
    initialValues: initialValues,
    pristine: pristine,
    submitting: submitting,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitError: submitError,
    submitErrors: submitErrors,
    valid: valid,
    validating: validating > 0,
    values: values
  };
}
function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
  var notification = filter(state, lastState, subscription, force);
  if (notification) {
    subscriber(notification);
    return true;
  }
  return false;
}
function notify(_ref2, state, lastState, filter, force) {
  var entries = _ref2.entries;
  Object.keys(entries).forEach(function (key) {
    var entry = entries[Number(key)];
    // istanbul ignore next
    if (entry) {
      var subscription = entry.subscription,
        subscriber = entry.subscriber,
        notified = entry.notified;
      if (notifySubscriber(subscriber, subscription, state, lastState, filter, force || !notified)) {
        entry.notified = true;
      }
    }
  });
}
function createForm(config) {
  if (!config) {
    throw new Error("No config specified");
  }
  var debug = config.debug,
    destroyOnUnregister = config.destroyOnUnregister,
    keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
    initialValues = config.initialValues,
    mutators = config.mutators,
    onSubmit = config.onSubmit,
    validate = config.validate,
    validateOnBlur = config.validateOnBlur;
  if (!onSubmit) {
    throw new Error("No onSubmit function specified");
  }
  var state = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      asyncErrors: {},
      dirtySinceLastSubmit: false,
      modifiedSinceLastSubmit: false,
      errors: {},
      initialValues: initialValues && _extends({}, initialValues),
      invalid: false,
      pristine: true,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      resetWhileSubmitting: false,
      valid: true,
      validating: 0,
      values: initialValues ? _extends({}, initialValues) : {}
    },
    lastFormState: undefined
  };
  var inBatch = 0;
  var validationPaused = false;
  var validationBlocked = false;
  var preventNotificationWhileValidationPaused = false;
  var nextAsyncValidationKey = 0;
  var asyncValidationPromises = {};
  var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
    return function (result) {
      delete asyncValidationPromises[key];
      return result;
    };
  };
  var changeValue = function changeValue(state, name, mutate) {
    var before = getIn(state.formState.values, name);
    var after = mutate(before);
    state.formState.values = setIn(state.formState.values, name, after) || {};
  };
  var renameField = function renameField(state, from, to) {
    if (state.fields[from]) {
      var _extends2, _extends3;
      state.fields = _extends({}, state.fields, (_extends2 = {}, _extends2[to] = _extends({}, state.fields[from], {
        name: to,
        // rebind event handlers
        blur: function blur() {
          return api.blur(to);
        },
        change: function change(value) {
          return api.change(to, value);
        },
        focus: function focus() {
          return api.focus(to);
        },
        lastFieldState: undefined
      }), _extends2));
      delete state.fields[from];
      state.fieldSubscribers = _extends({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
      delete state.fieldSubscribers[from];
      var value = getIn(state.formState.values, from);
      state.formState.values = setIn(state.formState.values, from, undefined) || {};
      state.formState.values = setIn(state.formState.values, to, value);
      delete state.lastFormState;
    }
  };

  // bind state to mutators
  var getMutatorApi = function getMutatorApi(key) {
    return function () {
      // istanbul ignore next
      if (mutators) {
        // ^^ causes branch coverage warning, but needed to appease the Flow gods
        var mutatableState = {
          formState: state.formState,
          fields: state.fields,
          fieldSubscribers: state.fieldSubscribers,
          lastFormState: state.lastFormState
        };
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var returnValue = mutators[key](args, mutatableState, {
          changeValue: changeValue,
          getIn: getIn,
          renameField: renameField,
          resetFieldState: api.resetFieldState,
          setIn: setIn,
          shallowEqual: shallowEqual
        });
        state.formState = mutatableState.formState;
        state.fields = mutatableState.fields;
        state.fieldSubscribers = mutatableState.fieldSubscribers;
        state.lastFormState = mutatableState.lastFormState;
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
        return returnValue;
      }
    };
  };
  var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
    result[key] = getMutatorApi(key);
    return result;
  }, {}) : {};
  var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
    var promises = [];
    if (validate) {
      var errorsOrPromise = validate(_extends({}, state.formState.values)); // clone to avoid writing
      if (isPromise(errorsOrPromise)) {
        promises.push(errorsOrPromise.then(function (errors) {
          return setErrors(errors, true);
        }));
      } else {
        setErrors(errorsOrPromise, false);
      }
    }
    return promises;
  };
  var getValidators = function getValidators(field) {
    return Object.keys(field.validators).reduce(function (result, index) {
      var validator = field.validators[Number(index)]();
      if (validator) {
        result.push(validator);
      }
      return result;
    }, []);
  };
  var runFieldLevelValidation = function runFieldLevelValidation(field, setError) {
    var promises = [];
    var validators = getValidators(field);
    if (validators.length) {
      var error;
      validators.forEach(function (validator) {
        var errorOrPromise = validator(getIn(state.formState.values, field.name), state.formState.values, validator.length === 0 || validator.length === 3 ? publishFieldState(state.formState, state.fields[field.name]) : undefined);
        if (errorOrPromise && isPromise(errorOrPromise)) {
          field.validating = true;
          var promise = errorOrPromise.then(function (error) {
            if (state.fields[field.name]) {
              state.fields[field.name].validating = false;
              setError(error);
            }
          }); // errors must be resolved, not rejected
          promises.push(promise);
        } else if (!error) {
          // first registered validator wins
          error = errorOrPromise;
        }
      });
      setError(error);
    }
    return promises;
  };
  var runValidation = function runValidation(fieldChanged, callback) {
    if (validationPaused) {
      validationBlocked = true;
      callback();
      return;
    }
    var fields = state.fields,
      formState = state.formState;
    var safeFields = _extends({}, fields);
    var fieldKeys = Object.keys(safeFields);
    if (!validate && !fieldKeys.some(function (key) {
      return getValidators(safeFields[key]).length;
    })) {
      callback();
      return; // no validation rules
    }

    // pare down field keys to actually validate
    var limitedFieldLevelValidation = false;
    if (fieldChanged) {
      var changedField = safeFields[fieldChanged];
      if (changedField) {
        var validateFields = changedField.validateFields;
        if (validateFields) {
          limitedFieldLevelValidation = true;
          fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
        }
      }
    }
    var recordLevelErrors = {};
    var asyncRecordLevelErrors = {};
    var fieldLevelErrors = {};
    var promises = [].concat(runRecordLevelValidation(function (errors, wasAsync) {
      if (wasAsync) {
        asyncRecordLevelErrors = errors || {};
      } else {
        recordLevelErrors = errors || {};
      }
    }), fieldKeys.reduce(function (result, name) {
      return result.concat(runFieldLevelValidation(fields[name], function (error) {
        fieldLevelErrors[name] = error;
      }));
    }, []));
    var hasAsyncValidations = promises.length > 0;
    var asyncValidationPromiseKey = ++nextAsyncValidationKey;
    var promise = Promise.all(promises).then(clearAsyncValidationPromise(asyncValidationPromiseKey));

    // backwards-compat: add promise to submit-blocking promises iff there are any promises to await
    if (hasAsyncValidations) {
      asyncValidationPromises[asyncValidationPromiseKey] = promise;
    }
    var processErrors = function processErrors(afterAsync) {
      var merged = _extends({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors, afterAsync ? asyncRecordLevelErrors // new async errors
      : formState.asyncErrors);
      var forEachError = function forEachError(fn) {
        fieldKeys.forEach(function (name) {
          if (fields[name]) {
            // make sure field is still registered
            // field-level errors take precedent over record-level errors
            var recordLevelError = getIn(recordLevelErrors, name);
            var errorFromParent = getIn(merged, name);
            var hasFieldLevelValidation = getValidators(safeFields[name]).length;
            var fieldLevelError = fieldLevelErrors[name];
            fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
          }
        });
      };
      forEachError(function (name, error) {
        merged = setIn(merged, name, error) || {};
      });
      forEachError(function (name, error) {
        if (error && error[ARRAY_ERROR]) {
          var existing = getIn(merged, name);
          var copy = [].concat(existing);
          copy[ARRAY_ERROR] = error[ARRAY_ERROR];
          merged = setIn(merged, name, copy);
        }
      });
      if (!shallowEqual(formState.errors, merged)) {
        formState.errors = merged;
      }
      if (afterAsync) {
        formState.asyncErrors = asyncRecordLevelErrors;
      }
      formState.error = recordLevelErrors[FORM_ERROR];
    };
    if (hasAsyncValidations) {
      // async validations are running, ensure validating is true before notifying
      state.formState.validating++;
      callback();
    }

    // process sync errors
    processErrors(false);
    // sync errors have been set. notify listeners while we wait for others
    callback();
    if (hasAsyncValidations) {
      var afterPromise = function afterPromise() {
        state.formState.validating--;
        callback();
        // field async validation may affect formState validating
        // so force notifyFormListeners if validating is still 0 after callback finished
        // and lastFormState validating is true
        if (state.formState.validating === 0 && state.lastFormState.validating) {
          notifyFormListeners();
        }
      };
      promise.then(function () {
        if (nextAsyncValidationKey > asyncValidationPromiseKey) {
          // if this async validator has been superseded by another, ignore its results
          return;
        }
        processErrors(true);
      }).then(afterPromise, afterPromise);
    }
  };
  var notifyFieldListeners = function notifyFieldListeners(name) {
    if (inBatch) {
      return;
    }
    var fields = state.fields,
      fieldSubscribers = state.fieldSubscribers,
      formState = state.formState;
    var safeFields = _extends({}, fields);
    var notifyField = function notifyField(name) {
      var field = safeFields[name];
      var fieldState = publishFieldState(formState, field);
      var lastFieldState = field.lastFieldState;
      field.lastFieldState = fieldState;
      var fieldSubscriber = fieldSubscribers[name];
      if (fieldSubscriber) {
        notify(fieldSubscriber, fieldState, lastFieldState, filterFieldState, lastFieldState === undefined);
      }
    };
    if (name) {
      notifyField(name);
    } else {
      Object.keys(safeFields).forEach(notifyField);
    }
  };
  var markAllFieldsTouched = function markAllFieldsTouched() {
    Object.keys(state.fields).forEach(function (key) {
      state.fields[key].touched = true;
    });
  };
  var hasSyncErrors = function hasSyncErrors() {
    return !!(state.formState.error || hasAnyError(state.formState.errors));
  };
  var calculateNextFormState = function calculateNextFormState() {
    var fields = state.fields,
      formState = state.formState,
      lastFormState = state.lastFormState;
    var safeFields = _extends({}, fields);
    var safeFieldKeys = Object.keys(safeFields);

    // calculate dirty/pristine
    var foundDirty = false;
    var dirtyFields = safeFieldKeys.reduce(function (result, key) {
      var dirty = !safeFields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));
      if (dirty) {
        foundDirty = true;
        result[key] = true;
      }
      return result;
    }, {});
    var dirtyFieldsSinceLastSubmit = safeFieldKeys.reduce(function (result, key) {
      // istanbul ignore next
      var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint
      if (!safeFields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key))) {
        result[key] = true;
      }
      return result;
    }, {});
    formState.pristine = !foundDirty;
    formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && Object.values(dirtyFieldsSinceLastSubmit).some(function (value) {
      return value;
    }));
    formState.modifiedSinceLastSubmit = !!(formState.lastSubmittedValues &&
    // Object.values would treat values as mixed (facebook/flow#2221)
    Object.keys(safeFields).some(function (value) {
      return safeFields[value].modifiedSinceLastSubmit;
    }));
    formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
    var nextFormState = convertToExternalFormState(formState);
    var _safeFieldKeys$reduce = safeFieldKeys.reduce(function (result, key) {
        result.modified[key] = safeFields[key].modified;
        result.touched[key] = safeFields[key].touched;
        result.visited[key] = safeFields[key].visited;
        return result;
      }, {
        modified: {},
        touched: {},
        visited: {}
      }),
      modified = _safeFieldKeys$reduce.modified,
      touched = _safeFieldKeys$reduce.touched,
      visited = _safeFieldKeys$reduce.visited;
    nextFormState.dirtyFields = lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
    nextFormState.dirtyFieldsSinceLastSubmit = lastFormState && shallowEqual(lastFormState.dirtyFieldsSinceLastSubmit, dirtyFieldsSinceLastSubmit) ? lastFormState.dirtyFieldsSinceLastSubmit : dirtyFieldsSinceLastSubmit;
    nextFormState.modified = lastFormState && shallowEqual(lastFormState.modified, modified) ? lastFormState.modified : modified;
    nextFormState.touched = lastFormState && shallowEqual(lastFormState.touched, touched) ? lastFormState.touched : touched;
    nextFormState.visited = lastFormState && shallowEqual(lastFormState.visited, visited) ? lastFormState.visited : visited;
    return lastFormState && shallowEqual(lastFormState, nextFormState) ? lastFormState : nextFormState;
  };
  var callDebug = function callDebug() {
    return debug && "development" !== "production" && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
      result[key] = state.fields[key];
      return result;
    }, {}));
  };
  var notifying = false;
  var scheduleNotification = false;
  var notifyFormListeners = function notifyFormListeners() {
    if (notifying) {
      scheduleNotification = true;
    } else {
      notifying = true;
      callDebug();
      if (!inBatch && !(validationPaused && preventNotificationWhileValidationPaused)) {
        var lastFormState = state.lastFormState;
        var nextFormState = calculateNextFormState();
        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
          notify(state.subscribers, nextFormState, lastFormState, filterFormState);
        }
      }
      notifying = false;
      if (scheduleNotification) {
        scheduleNotification = false;
        notifyFormListeners();
      }
    }
  };
  var beforeSubmit = function beforeSubmit() {
    return Object.keys(state.fields).some(function (name) {
      return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
    });
  };
  var afterSubmit = function afterSubmit() {
    return Object.keys(state.fields).forEach(function (name) {
      return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
    });
  };
  var resetModifiedAfterSubmit = function resetModifiedAfterSubmit() {
    return Object.keys(state.fields).forEach(function (key) {
      return state.fields[key].modifiedSinceLastSubmit = false;
    });
  };

  // generate initial errors
  runValidation(undefined, function () {
    notifyFormListeners();
  });
  var api = {
    batch: function batch(fn) {
      inBatch++;
      fn();
      inBatch--;
      notifyFieldListeners();
      notifyFormListeners();
    },
    blur: function blur(name) {
      var fields = state.fields,
        formState = state.formState;
      var previous = fields[name];
      if (previous) {
        // can only blur registered fields
        delete formState.active;
        fields[name] = _extends({}, previous, {
          active: false,
          touched: true
        });
        if (validateOnBlur) {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        } else {
          notifyFieldListeners();
          notifyFormListeners();
        }
      }
    },
    change: function change(name, value) {
      var fields = state.fields,
        formState = state.formState;
      if (getIn(formState.values, name) !== value) {
        changeValue(state, name, function () {
          return value;
        });
        var previous = fields[name];
        if (previous) {
          // only track modified for registered fields
          fields[name] = _extends({}, previous, {
            modified: true,
            modifiedSinceLastSubmit: !!formState.lastSubmittedValues
          });
        }
        if (validateOnBlur) {
          notifyFieldListeners();
          notifyFormListeners();
        } else {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }
      }
    },
    get destroyOnUnregister() {
      return !!destroyOnUnregister;
    },
    set destroyOnUnregister(value) {
      destroyOnUnregister = value;
    },
    focus: function focus(name) {
      var field = state.fields[name];
      if (field && !field.active) {
        state.formState.active = name;
        field.active = true;
        field.visited = true;
        notifyFieldListeners();
        notifyFormListeners();
      }
    },
    mutators: mutatorsApi,
    getFieldState: function getFieldState(name) {
      var field = state.fields[name];
      return field && field.lastFieldState;
    },
    getRegisteredFields: function getRegisteredFields() {
      return Object.keys(state.fields);
    },
    getState: function getState() {
      return calculateNextFormState();
    },
    initialize: function initialize(data) {
      var fields = state.fields,
        formState = state.formState;
      var safeFields = _extends({}, fields);
      var values = typeof data === "function" ? data(formState.values) : data;
      if (!keepDirtyOnReinitialize) {
        formState.values = values;
      }
      /**
       * Hello, inquisitive code reader! Thanks for taking the time to dig in!
       *
       * The following code is the way it is to allow for non-registered deep
       * field values to be set via initialize()
       */

      // save dirty values
      var savedDirtyValues = keepDirtyOnReinitialize ? Object.keys(safeFields).reduce(function (result, key) {
        var field = safeFields[key];
        var pristine = field.isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));
        if (!pristine) {
          result[key] = getIn(formState.values, key);
        }
        return result;
      }, {}) : {};
      // update initalValues and values
      formState.initialValues = values;
      formState.values = values;
      // restore the dirty values
      Object.keys(savedDirtyValues).forEach(function (key) {
        formState.values = setIn(formState.values, key, savedDirtyValues[key]) || {};
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    isValidationPaused: function isValidationPaused() {
      return validationPaused;
    },
    pauseValidation: function pauseValidation(preventNotification) {
      if (preventNotification === void 0) {
        preventNotification = true;
      }
      validationPaused = true;
      preventNotificationWhileValidationPaused = preventNotification;
    },
    registerField: function registerField(name, subscriber, subscription, fieldConfig) {
      if (subscription === void 0) {
        subscription = {};
      }
      if (!state.fieldSubscribers[name]) {
        state.fieldSubscribers[name] = {
          index: 0,
          entries: {}
        };
      }
      var index = state.fieldSubscribers[name].index++;

      // save field subscriber callback
      state.fieldSubscribers[name].entries[index] = {
        subscriber: memoize(subscriber),
        subscription: subscription,
        notified: false
      };

      // create initial field state if not exists
      var field = state.fields[name] || {
        active: false,
        afterSubmit: fieldConfig && fieldConfig.afterSubmit,
        beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
        data: fieldConfig && fieldConfig.data || {},
        isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
        lastFieldState: undefined,
        modified: false,
        modifiedSinceLastSubmit: false,
        name: name,
        touched: false,
        valid: true,
        validateFields: fieldConfig && fieldConfig.validateFields,
        validators: {},
        validating: false,
        visited: false
      };
      // Mutators can create a field in order to keep the field states
      // We must update this field when registerField is called afterwards
      field.blur = field.blur || function () {
        return api.blur(name);
      };
      field.change = field.change || function (value) {
        return api.change(name, value);
      };
      field.focus = field.focus || function () {
        return api.focus(name);
      };
      state.fields[name] = field;
      var haveValidator = false;
      var silent = fieldConfig && fieldConfig.silent;
      var notify = function notify() {
        if (silent && state.fields[name]) {
          notifyFieldListeners(name);
        } else {
          notifyFormListeners();
          notifyFieldListeners();
        }
      };
      if (fieldConfig) {
        haveValidator = !!(fieldConfig.getValidator && fieldConfig.getValidator());
        if (fieldConfig.getValidator) {
          state.fields[name].validators[index] = fieldConfig.getValidator;
        }
        var noValueInFormState = getIn(state.formState.values, name) === undefined;
        if (fieldConfig.initialValue !== undefined && (noValueInFormState || getIn(state.formState.values, name) === getIn(state.formState.initialValues, name))
        // only initialize if we don't yet have any value for this field
        ) {
          state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
          state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
          runValidation(undefined, notify);
        }

        // only use defaultValue if we don't yet have any value for this field
        if (fieldConfig.defaultValue !== undefined && fieldConfig.initialValue === undefined && getIn(state.formState.initialValues, name) === undefined && noValueInFormState) {
          state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
        }
      }
      if (haveValidator) {
        runValidation(undefined, notify);
      } else {
        notify();
      }
      return function () {
        var validatorRemoved = false;
        // istanbul ignore next
        if (state.fields[name]) {
          // state.fields[name] may have been removed by a mutator
          validatorRemoved = !!(state.fields[name].validators[index] && state.fields[name].validators[index]());
          delete state.fields[name].validators[index];
        }
        var hasFieldSubscribers = !!state.fieldSubscribers[name];
        if (hasFieldSubscribers) {
          // state.fieldSubscribers[name] may have been removed by a mutator
          delete state.fieldSubscribers[name].entries[index];
        }
        var lastOne = hasFieldSubscribers && !Object.keys(state.fieldSubscribers[name].entries).length;
        if (lastOne) {
          delete state.fieldSubscribers[name];
          delete state.fields[name];
          if (validatorRemoved) {
            state.formState.errors = setIn(state.formState.errors, name, undefined) || {};
          }
          if (destroyOnUnregister) {
            state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
          }
        }
        if (!silent) {
          if (validatorRemoved) {
            runValidation(undefined, function () {
              notifyFormListeners();
              notifyFieldListeners();
            });
          } else if (lastOne) {
            // values or errors may have changed
            notifyFormListeners();
          }
        }
      };
    },
    reset: function reset(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }
      if (state.formState.submitting) {
        state.formState.resetWhileSubmitting = true;
      }
      state.formState.submitFailed = false;
      state.formState.submitSucceeded = false;
      delete state.formState.submitError;
      delete state.formState.submitErrors;
      delete state.formState.lastSubmittedValues;
      api.initialize(initialValues || {});
    },
    /**
     * Resets all field flags (e.g. touched, visited, etc.) to their initial state
     */
    resetFieldState: function resetFieldState(name) {
      state.fields[name] = _extends({}, state.fields[name], {
        active: false,
        lastFieldState: undefined,
        modified: false,
        touched: false,
        valid: true,
        validating: false,
        visited: false
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    /**
     * Returns the form to a clean slate; that is:
     * - Clear all values
     * - Resets all fields to their initial state
     */
    restart: function restart(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }
      api.batch(function () {
        for (var name in state.fields) {
          api.resetFieldState(name);
          state.fields[name] = _extends({}, state.fields[name], {
            active: false,
            lastFieldState: undefined,
            modified: false,
            modifiedSinceLastSubmit: false,
            touched: false,
            valid: true,
            validating: false,
            visited: false
          });
        }
        api.reset(initialValues);
      });
    },
    resumeValidation: function resumeValidation() {
      validationPaused = false;
      preventNotificationWhileValidationPaused = false;
      if (validationBlocked) {
        // validation was attempted while it was paused, so run it now
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      }
      validationBlocked = false;
    },
    setConfig: function setConfig(name, value) {
      switch (name) {
        case "debug":
          debug = value;
          break;
        case "destroyOnUnregister":
          destroyOnUnregister = value;
          break;
        case "initialValues":
          api.initialize(value);
          break;
        case "keepDirtyOnReinitialize":
          keepDirtyOnReinitialize = value;
          break;
        case "mutators":
          mutators = value;
          if (value) {
            Object.keys(mutatorsApi).forEach(function (key) {
              if (!(key in value)) {
                delete mutatorsApi[key];
              }
            });
            Object.keys(value).forEach(function (key) {
              mutatorsApi[key] = getMutatorApi(key);
            });
          } else {
            Object.keys(mutatorsApi).forEach(function (key) {
              delete mutatorsApi[key];
            });
          }
          break;
        case "onSubmit":
          onSubmit = value;
          break;
        case "validate":
          validate = value;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          break;
        case "validateOnBlur":
          validateOnBlur = value;
          break;
        default:
          throw new Error("Unrecognised option " + name);
      }
    },
    submit: function submit() {
      var formState = state.formState;
      if (formState.submitting) {
        return;
      }
      delete formState.submitErrors;
      delete formState.submitError;
      formState.lastSubmittedValues = _extends({}, formState.values);
      if (hasSyncErrors()) {
        markAllFieldsTouched();
        resetModifiedAfterSubmit();
        state.formState.submitFailed = true;
        notifyFormListeners();
        notifyFieldListeners();
        return; // no submit for you!!
      }

      var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);
      if (asyncValidationPromisesKeys.length) {
        // still waiting on async validation to complete...
        Promise.all(asyncValidationPromisesKeys.map(function (key) {
          return asyncValidationPromises[Number(key)];
        })).then(api.submit, console.error);
        return;
      }
      var submitIsBlocked = beforeSubmit();
      if (submitIsBlocked) {
        return;
      }
      var resolvePromise;
      var completeCalled = false;
      var complete = function complete(errors) {
        formState.submitting = false;
        var resetWhileSubmitting = formState.resetWhileSubmitting;
        if (resetWhileSubmitting) {
          formState.resetWhileSubmitting = false;
        }
        if (errors && hasAnyError(errors)) {
          formState.submitFailed = true;
          formState.submitSucceeded = false;
          formState.submitErrors = errors;
          formState.submitError = errors[FORM_ERROR];
          markAllFieldsTouched();
        } else {
          if (!resetWhileSubmitting) {
            formState.submitFailed = false;
            formState.submitSucceeded = true;
          }
          afterSubmit();
        }
        notifyFormListeners();
        notifyFieldListeners();
        completeCalled = true;
        if (resolvePromise) {
          resolvePromise(errors);
        }
        return errors;
      };
      formState.submitting = true;
      formState.submitFailed = false;
      formState.submitSucceeded = false;
      formState.lastSubmittedValues = _extends({}, formState.values);
      resetModifiedAfterSubmit();

      // onSubmit is either sync, callback or async with a Promise
      var result = onSubmit(formState.values, api, complete);
      if (!completeCalled) {
        if (result && isPromise(result)) {
          // onSubmit is async with a Promise
          notifyFormListeners(); // let everyone know we are submitting
          notifyFieldListeners(); // notify fields also
          return result.then(complete, function (error) {
            complete();
            throw error;
          });
        } else if (onSubmit.length >= 3) {
          // must be async, so we should return a Promise
          notifyFormListeners(); // let everyone know we are submitting
          notifyFieldListeners(); // notify fields also
          return new Promise(function (resolve) {
            resolvePromise = resolve;
          });
        } else {
          // onSubmit is sync
          complete(result);
        }
      }
    },
    subscribe: function subscribe(subscriber, subscription) {
      if (!subscriber) {
        throw new Error("No callback given.");
      }
      if (!subscription) {
        throw new Error("No subscription provided. What values do you want to listen to?");
      }
      var memoized = memoize(subscriber);
      var subscribers = state.subscribers;
      var index = subscribers.index++;
      subscribers.entries[index] = {
        subscriber: memoized,
        subscription: subscription,
        notified: false
      };
      var nextFormState = calculateNextFormState();
      notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
      return function () {
        delete subscribers.entries[index];
      };
    }
  };
  return api;
}

export { ARRAY_ERROR, FORM_ERROR, configOptions, createForm, fieldSubscriptionItems, formSubscriptionItems, getIn, setIn, version };
