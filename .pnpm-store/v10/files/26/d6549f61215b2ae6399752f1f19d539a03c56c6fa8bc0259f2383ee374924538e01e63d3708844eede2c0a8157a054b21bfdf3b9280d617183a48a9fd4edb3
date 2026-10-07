/*!
 * react-paypal-js v10.3.0 (2026-07-31T15:41:18.126Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { createContext, useContext, useRef, Component, useState, useEffect, useReducer } from 'react';

/**
 * Enum for the SDK script resolve status,
 *
 * @enum {string}
 */
var SCRIPT_LOADING_STATE;
(function (SCRIPT_LOADING_STATE) {
  SCRIPT_LOADING_STATE["INITIAL"] = "initial";
  SCRIPT_LOADING_STATE["PENDING"] = "pending";
  SCRIPT_LOADING_STATE["REJECTED"] = "rejected";
  SCRIPT_LOADING_STATE["RESOLVED"] = "resolved";
})(SCRIPT_LOADING_STATE || (SCRIPT_LOADING_STATE = {}));
/**
 * Enum for the PayPalScriptProvider context dispatch actions
 *
 * @enum {string}
 */
var DISPATCH_ACTION;
(function (DISPATCH_ACTION) {
  DISPATCH_ACTION["LOADING_STATUS"] = "setLoadingStatus";
  DISPATCH_ACTION["RESET_OPTIONS"] = "resetOptions";
  DISPATCH_ACTION["SET_BRAINTREE_INSTANCE"] = "braintreeInstance";
})(DISPATCH_ACTION || (DISPATCH_ACTION = {}));
/**
 * Enum for all the available hosted fields
 *
 * @enum {string}
 */
var PAYPAL_HOSTED_FIELDS_TYPES;
(function (PAYPAL_HOSTED_FIELDS_TYPES) {
  PAYPAL_HOSTED_FIELDS_TYPES["NUMBER"] = "number";
  PAYPAL_HOSTED_FIELDS_TYPES["CVV"] = "cvv";
  PAYPAL_HOSTED_FIELDS_TYPES["EXPIRATION_DATE"] = "expirationDate";
  PAYPAL_HOSTED_FIELDS_TYPES["EXPIRATION_MONTH"] = "expirationMonth";
  PAYPAL_HOSTED_FIELDS_TYPES["EXPIRATION_YEAR"] = "expirationYear";
  PAYPAL_HOSTED_FIELDS_TYPES["POSTAL_CODE"] = "postalCode";
})(PAYPAL_HOSTED_FIELDS_TYPES || (PAYPAL_HOSTED_FIELDS_TYPES = {}));
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest$1(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/*********************************************
 * Common reference to the script identifier *
 *********************************************/
// keep this script id value in kebab-case format
var SCRIPT_ID = "data-react-paypal-script-id";
var SDK_SETTINGS = {
  DATA_CLIENT_TOKEN: "dataClientToken",
  DATA_JS_SDK_LIBRARY: "dataJsSdkLibrary",
  DATA_LIBRARY_VALUE: "react-paypal-js",
  DATA_NAMESPACE: "dataNamespace",
  DATA_SDK_INTEGRATION_SOURCE: "dataSdkIntegrationSource",
  DATA_USER_ID_TOKEN: "dataUserIdToken"
};
var LOAD_SCRIPT_ERROR = "Failed to load the PayPal JS SDK script.";
/****************************
 * Braintree error messages *
 ****************************/
var EMPTY_BRAINTREE_AUTHORIZATION_ERROR_MESSAGE = "Invalid authorization data. Use dataClientToken or dataUserIdToken to authorize.";
var braintreeVersion = "3.117.0";
var BRAINTREE_SOURCE = "https://js.braintreegateway.com/web/".concat(braintreeVersion, "/js/client.min.js");
var BRAINTREE_PAYPAL_CHECKOUT_SOURCE = "https://js.braintreegateway.com/web/".concat(braintreeVersion, "/js/paypal-checkout.min.js");
/*********************
 * PayPal namespaces *
 *********************/
var DEFAULT_PAYPAL_NAMESPACE = "paypal";
var DEFAULT_BRAINTREE_NAMESPACE = "braintree";
/*****************
 * Hosted Fields *
 *****************/
var HOSTED_FIELDS_CHILDREN_ERROR = "To use HostedFields you must use it with at least 3 children with types: [number, cvv, expirationDate] includes";
var HOSTED_FIELDS_DUPLICATE_CHILDREN_ERROR = "Cannot use duplicate HostedFields as children";
/*******************
 * Script Provider *
 *******************/
var SCRIPT_PROVIDER_REDUCER_ERROR = "usePayPalScriptReducer must be used within a PayPalScriptProvider";
var CARD_FIELDS_DUPLICATE_CHILDREN_ERROR = "Cannot use duplicate CardFields as children";
var CARD_FIELDS_CONTEXT_ERROR = "Individual CardFields must be rendered inside the PayPalCardFieldsProvider";

/**
 * Get the namespace from the window in the browser
 * this is useful to get the paypal object from window
 * after load PayPal SDK script
 *
 * @param namespace the name space to return
 * @returns the namespace if exists or undefined otherwise
 */
function getPayPalWindowNamespace$1(namespace) {
  if (namespace === void 0) {
    namespace = DEFAULT_PAYPAL_NAMESPACE;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return window[namespace];
}
/**
 * Get a namespace from the window in the browser
 * this is useful to get the braintree from window
 * after load Braintree script
 *
 * @param namespace the name space to return
 * @returns the namespace if exists or undefined otherwise
 */
function getBraintreeWindowNamespace(namespace) {
  if (namespace === void 0) {
    namespace = DEFAULT_BRAINTREE_NAMESPACE;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return window[namespace];
}
/**
 * Creates a string hash code based on the string argument
 *
 * @param str the source input string to hash
 * @returns string hash code
 */
function hashStr(str) {
  var hash = "";
  for (var i = 0; i < str.length; i++) {
    var total = str[i].charCodeAt(0) * i;
    if (str[i + 1]) {
      total += str[i + 1].charCodeAt(0) * (i - 1);
    }
    hash += String.fromCharCode(97 + Math.abs(total) % 26);
  }
  return hash;
}
function generateErrorMessage(_a) {
  var reactComponentName = _a.reactComponentName,
    sdkComponentKey = _a.sdkComponentKey,
    _b = _a.sdkRequestedComponents,
    sdkRequestedComponents = _b === void 0 ? "" : _b,
    _c = _a.sdkDataNamespace,
    sdkDataNamespace = _c === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _c;
  var requiredOptionCapitalized = sdkComponentKey.charAt(0).toUpperCase().concat(sdkComponentKey.substring(1));
  var errorMessage = "Unable to render <".concat(reactComponentName, " /> because window.").concat(sdkDataNamespace, ".").concat(requiredOptionCapitalized, " is undefined.");
  // The JS SDK only loads the buttons component by default.
  // All other components like messages and marks must be requested using the "components" query parameter
  var requestedComponents = typeof sdkRequestedComponents === "string" ? sdkRequestedComponents : sdkRequestedComponents.join(",");
  if (!requestedComponents.includes(sdkComponentKey)) {
    var expectedComponents = [requestedComponents, sdkComponentKey].filter(Boolean).join();
    errorMessage += "\nTo fix the issue, add '".concat(sdkComponentKey, "' to the list of components passed to the parent PayPalScriptProvider:") + "\n`<PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>`.");
  }
  return errorMessage;
}

/**
 * Generate a new random identifier for react-paypal-js
 *
 * @returns the {@code string} containing the random library name
 */
function getScriptID(options) {
  // exclude the data-react-paypal-script-id value from the options hash
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _a = options,
    _b = SCRIPT_ID;
  _a[_b];
  var paypalScriptOptions = __rest$1(_a, [_b + ""]);
  return "react-paypal-js-".concat(hashStr(JSON.stringify(paypalScriptOptions)));
}
/**
 * Destroy the PayPal SDK from the document page
 *
 * @param reactPayPalScriptID the script identifier
 */
function destroySDKScript(reactPayPalScriptID) {
  var scriptNode = self.document.querySelector("script[".concat(SCRIPT_ID, "=\"").concat(reactPayPalScriptID, "\"]"));
  if (scriptNode === null || scriptNode === void 0 ? void 0 : scriptNode.parentNode) {
    scriptNode.parentNode.removeChild(scriptNode);
  }
}
/**
 * Reducer function to handle complex state changes on the context
 *
 * @param state  the current state on the context object
 * @param action the action to be executed on the previous state
 * @returns a the same state if the action wasn't found, or a new state otherwise
 */
function scriptReducer(state, action) {
  var _a, _b;
  switch (action.type) {
    case DISPATCH_ACTION.LOADING_STATUS:
      if (typeof action.value === "object") {
        return __assign(__assign({}, state), {
          loadingStatus: action.value.state,
          loadingStatusErrorMessage: action.value.message
        });
      }
      return __assign(__assign({}, state), {
        loadingStatus: action.value
      });
    case DISPATCH_ACTION.RESET_OPTIONS:
      // destroy existing script to make sure only one script loads at a time
      destroySDKScript(state.options[SCRIPT_ID]);
      return __assign(__assign({}, state), {
        loadingStatus: SCRIPT_LOADING_STATE.PENDING,
        options: __assign(__assign((_a = {}, _a[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _a), action.value), (_b = {}, _b[SCRIPT_ID] = "".concat(getScriptID(action.value)), _b))
      });
    case DISPATCH_ACTION.SET_BRAINTREE_INSTANCE:
      return __assign(__assign({}, state), {
        braintreePayPalCheckoutInstance: action.value
      });
    default:
      {
        return state;
      }
  }
}
// Create the React context to use in the script provider component
var ScriptContext = createContext(null);

/**
 * Check if the context is valid and ready to dispatch actions.
 *
 * @param scriptContext the result of connecting to the context provider
 * @returns strict context avoiding null values in the type
 */
function validateReducer(scriptContext) {
  if (typeof (scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.dispatch) === "function" && scriptContext.dispatch.length !== 0) {
    return scriptContext;
  }
  throw new Error(SCRIPT_PROVIDER_REDUCER_ERROR);
}
/**
 * Check if the dataClientToken or the dataUserIdToken are
 * set in the options of the context.
 * @type dataClientToken is use to pass a client token
 * @type dataUserIdToken is use to pass a client tokenization key
 *
 * @param scriptContext the result of connecting to the context provider
 * @throws an {@link Error} if both dataClientToken and the dataUserIdToken keys are null or undefined
 * @returns strict context if one of the keys are defined
 */
var validateBraintreeAuthorizationData = function (scriptContext) {
  var _a, _b;
  if (!((_a = scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.options) === null || _a === void 0 ? void 0 : _a[SDK_SETTINGS.DATA_CLIENT_TOKEN]) && !((_b = scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.options) === null || _b === void 0 ? void 0 : _b[SDK_SETTINGS.DATA_USER_ID_TOKEN])) {
    throw new Error(EMPTY_BRAINTREE_AUTHORIZATION_ERROR_MESSAGE);
  }
  return scriptContext;
};

/**
 * Custom hook to get access to the Script context and
 * dispatch actions to modify the state on the {@link ScriptProvider} component
 *
 * @returns a tuple containing the state of the context and
 * a dispatch function to modify the state
 */
function usePayPalScriptReducer() {
  var scriptContext = validateReducer(useContext(ScriptContext));
  var derivedStatusContext = __assign(__assign({}, scriptContext), {
    isInitial: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.INITIAL,
    isPending: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.PENDING,
    isResolved: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.RESOLVED,
    isRejected: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.REJECTED
  });
  return [derivedStatusContext, scriptContext.dispatch];
}
/**
 * Custom hook to get access to the ScriptProvider context
 *
 * @returns the latest state of the context
 */
function useScriptProviderContext() {
  var scriptContext = validateBraintreeAuthorizationData(validateReducer(useContext(ScriptContext)));
  return [scriptContext, scriptContext.dispatch];
}

// Create the React context to use in the PayPal hosted fields provider
var PayPalHostedFieldsContext = createContext({});

/**
 * Custom hook to get access to the PayPal Hosted Fields instance.
 * The instance represent the returned object after the render process
 * With this object a user can submit the fields and dynamically modify the cards
 *
 * @returns the hosted fields instance if is available in the component
 */
function usePayPalHostedFields() {
  return useContext(PayPalHostedFieldsContext);
}

/**
 * `useProxyProps` can be used to maintain a reference to an updated props, without that change triggering
 * another re-render. This is useful if, for example, some props should be passed through a parent component to
 * a child function that contains code that needs the most up-to-date-reference, without causing the parent to
 * rerender.
 */
function useProxyProps(props) {
  var proxyRef = useRef(new Proxy({}, {
    get: function (target, prop, receiver) {
      /**
       *
       * If target[prop] is a function, return a function that accesses
       * this function off the target object. We can mutate the target with
       * new copies of this function without having to re-render the
       * SDK components to pass new callbacks.
       *
       * */
      if (typeof target[prop] === "function") {
        return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return target[prop].apply(target, args);
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  }));
  proxyRef.current = Object.assign(proxyRef.current, props);
  return proxyRef.current;
}
var PayPalButtonsErrorBoundary = /** @class */function (_super) {
  __extends(PayPalButtonsErrorBoundary, _super);
  function PayPalButtonsErrorBoundary(props) {
    var _this = _super.call(this, props) || this;
    _this.state = {
      hasError: false
    };
    return _this;
  }
  PayPalButtonsErrorBoundary.getDerivedStateFromError = function () {
    return {
      hasError: true
    };
  };
  PayPalButtonsErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
    console.error("Error in PayPalButtons component:", error, errorInfo);
    // if onError callback is provided, call it with the error details
    // don't rethrow the error, as we want to prevent the entire app from crashing
    if (typeof this.props.onError === "function") {
      this.props.onError({
        message: error.message,
        name: error.name,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
    }
  };
  PayPalButtonsErrorBoundary.prototype.render = function () {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  };
  return PayPalButtonsErrorBoundary;
}(Component);

/**
The inner component that renders the PayPal buttons. This component is wrapped in an error boundary to catch and handle any errors that may occur during rendering or interaction with the PayPal buttons.
 */
var PayPalButtonsInner = function (_a) {
  var _b;
  var _c = _a.className,
    className = _c === void 0 ? "" : _c,
    _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    children = _a.children,
    _e = _a.forceReRender,
    forceReRender = _e === void 0 ? [] : _e,
    buttonProps = __rest$1(_a, ["className", "disabled", "children", "forceReRender"]);
  var isDisabledStyle = disabled ? {
    opacity: 0.38
  } : {};
  var classNames = "".concat(className, " ").concat(disabled ? "paypal-buttons-disabled" : "").trim();
  var buttonsContainerRef = useRef(null);
  var buttons = useRef(null);
  var proxyProps = useProxyProps(buttonProps);
  var _f = usePayPalScriptReducer()[0],
    isResolved = _f.isResolved,
    options = _f.options;
  var _g = useState(null),
    initActions = _g[0],
    setInitActions = _g[1];
  var _h = useState(true),
    isEligible = _h[0],
    setIsEligible = _h[1];
  var _j = useState(null),
    setErrorState = _j[1];
  function closeButtonsComponent() {
    if (buttons.current !== null) {
      buttons.current.close().catch(function () {
        // ignore errors when closing the component
      });
    }
  }
  if ((_b = buttons.current) === null || _b === void 0 ? void 0 : _b.updateProps) {
    buttons.current.updateProps({
      message: buttonProps.message
    });
  }
  // useEffect hook for rendering the buttons
  useEffect(function () {
    // verify the sdk script has successfully loaded
    if (isResolved === false) {
      return closeButtonsComponent;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options.dataNamespace);
    // verify dependency on window object
    if (paypalWindowNamespace === undefined || paypalWindowNamespace.Buttons === undefined) {
      setErrorState(function () {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalButtons.displayName,
          sdkComponentKey: "buttons",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
      return closeButtonsComponent;
    }
    var decoratedOnInit = function (data, actions) {
      setInitActions(actions);
      if (typeof buttonProps.onInit === "function") {
        buttonProps.onInit(data, actions);
      }
    };
    try {
      buttons.current = paypalWindowNamespace.Buttons(__assign(__assign({}, proxyProps), {
        onInit: decoratedOnInit
      }));
    } catch (err) {
      return setErrorState(function () {
        throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(err));
      });
    }
    // only render the button when eligible
    if (buttons.current.isEligible() === false) {
      setIsEligible(false);
      return closeButtonsComponent;
    }
    if (!buttonsContainerRef.current) {
      return closeButtonsComponent;
    }
    buttons.current.render(buttonsContainerRef.current).catch(function (err) {
      // component failed to render, possibly because it was closed or destroyed.
      if (buttonsContainerRef.current === null || buttonsContainerRef.current.children.length === 0) {
        // paypal buttons container is no longer in the DOM, we can safely ignore the error
        return;
      }
      // paypal buttons container is still in the DOM
      setErrorState(function () {
        throw new Error("Failed to render <PayPalButtons /> component. ".concat(err));
      });
    });
    return closeButtonsComponent;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, __spreadArray(__spreadArray([isResolved], forceReRender, true), [buttonProps.fundingSource], false));
  // useEffect hook for managing disabled state
  useEffect(function () {
    if (initActions === null) {
      return;
    }
    if (disabled === true) {
      initActions.disable().catch(function () {
        // ignore errors when disabling the component
      });
    } else {
      initActions.enable().catch(function () {
        // ignore errors when enabling the component
      });
    }
  }, [disabled, initActions]);
  return React.createElement(React.Fragment, null, isEligible ? React.createElement("div", {
    ref: buttonsContainerRef,
    style: isDisabledStyle,
    className: classNames
  }) : children);
};
PayPalButtonsInner.displayName = "PayPalButtons";
/**
This `<PayPalButtons />` component supports rendering [buttons](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/#buttons) for PayPal, Venmo, and alternative payment methods.
It relies on the `<PayPalScriptProvider />` parent component for managing state related to loading the JS SDK script.
*/
var PayPalButtons = function (props) {
  return React.createElement(PayPalButtonsErrorBoundary, {
    onError: props.onError
  }, React.createElement(PayPalButtonsInner, __assign({}, props)));
};
PayPalButtons.displayName = "PayPalButtons";
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function findScript(url, attributes) {
  var currentScript = document.querySelector("script[src=\"".concat(url, "\"]"));
  if (currentScript === null) return null;
  var nextScript = createScriptElement(url, attributes);
  var currentScriptClone = currentScript.cloneNode();
  delete currentScriptClone.dataset.uidAuto;
  if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }
  var isExactMatch = true;
  Object.keys(currentScriptClone.dataset).forEach(function (key) {
    if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
  var url = _a.url,
    attributes = _a.attributes,
    onSuccess = _a.onSuccess,
    onError = _a.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
  var customSdkBaseUrl = Object.prototype.hasOwnProperty.call(options, "sdkBaseUrl") ? options.sdkBaseUrl : undefined;
  var environment = Object.prototype.hasOwnProperty.call(options, "environment") ? options.environment : undefined;
  options.environment;
  options.sdkBaseUrl;
  var rest = __rest(options, ["environment", "sdkBaseUrl"]);
  var sdkBaseUrl = customSdkBaseUrl || processSdkBaseUrl(environment);
  var optionsWithStringIndex = rest;
  var _a = Object.keys(optionsWithStringIndex).filter(function (key) {
      return typeof optionsWithStringIndex[key] !== "undefined" && optionsWithStringIndex[key] !== null && optionsWithStringIndex[key] !== "";
    }).reduce(function (accumulator, key) {
      var value = optionsWithStringIndex[key].toString();
      key = camelCaseToKebabCase(key);
      if (key.substring(0, 4) === "data" || key === "crossorigin") {
        accumulator.attributes[key] = value;
      } else {
        accumulator.queryParams[key] = value;
      }
      return accumulator;
    }, {
      queryParams: {},
      attributes: {}
    }),
    queryParams = _a.queryParams,
    attributes = _a.attributes;
  if (queryParams["merchant-id"] && queryParams["merchant-id"].indexOf(",") !== -1) {
    attributes["data-merchant-id"] = queryParams["merchant-id"];
    queryParams["merchant-id"] = "*";
  }
  return {
    url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
    attributes: attributes
  };
}
function camelCaseToKebabCase(str) {
  var replacer = function (match, indexOfMatch) {
    return (indexOfMatch ? "-" : "") + match.toLowerCase();
  };
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function (key) {
    if (queryString.length !== 0) queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}
function processSdkBaseUrl(environment) {
  return environment === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
}
function createScriptElement(url, attributes) {
  if (attributes === void 0) {
    attributes = {};
  }
  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function (key) {
    newScript.setAttribute(key, attributes[key]);
    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}
function loadScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  if (typeof document === "undefined") return PromisePonyfill.resolve(null);
  var _a = processOptions(options),
    url = _a.url,
    attributes = _a.attributes;
  var namespace = attributes["data-namespace"] || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace);
  if (!attributes["data-js-sdk-library"]) {
    attributes["data-js-sdk-library"] = "paypal-js";
  }
  if (findScript(url, attributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }
  return loadCustomScript({
    url: url,
    attributes: attributes
  }, PromisePonyfill).then(function () {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);
    if (newWindowNamespace) {
      return newWindowNamespace;
    }
    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
function loadCustomScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  var url = options.url,
    attributes = options.attributes;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }
  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }
  return new PromisePonyfill(function (resolve, reject) {
    if (typeof document === "undefined") return resolve();
    insertScriptElement({
      url: url,
      attributes: attributes,
      onSuccess: function () {
        return resolve();
      },
      onError: function () {
        var defaultError = new Error("The script \"".concat(url, "\" failed to load. Check the HTTP status code and response body in DevTools to learn more."));
        return reject(defaultError);
      }
    });
  });
}
function getPayPalWindowNamespace(namespace) {
  return window[namespace];
}
function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }
  var environment = options.environment;
  if (environment && environment !== "production" && environment !== "sandbox") {
    throw new Error('The `environment` option must be either "production" or "sandbox".');
  }
  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}

/**
 * Simple check to determine if the Braintree is a valid namespace.
 *
 * @param braintreeSource the source {@link BraintreeNamespace}
 * @returns a boolean representing if the namespace is valid.
 */
var isValidBraintreeNamespace = function (braintreeSource) {
  var _a, _b;
  if (typeof ((_a = braintreeSource === null || braintreeSource === void 0 ? void 0 : braintreeSource.client) === null || _a === void 0 ? void 0 : _a.create) !== "function" && typeof ((_b = braintreeSource === null || braintreeSource === void 0 ? void 0 : braintreeSource.paypalCheckout) === null || _b === void 0 ? void 0 : _b.create) !== "function") {
    throw new Error("The braintreeNamespace property is not a valid BraintreeNamespace type.");
  }
  return true;
};
/**
 * Use `actions.braintree` to provide an interface for the paypalCheckoutInstance
 * through the createOrder, createBillingAgreement and onApprove callbacks
 *
 * @param braintreeButtonProps the component button options
 * @returns a new copy of the component button options casted as {@link PayPalButtonsComponentProps}
 */
var decorateActions = function (buttonProps, payPalCheckoutInstance) {
  var createOrderRef = buttonProps.createOrder;
  var createBillingAgreementRef = buttonProps.createBillingAgreement;
  var onApproveRef = buttonProps.onApprove;
  if (typeof createOrderRef === "function") {
    buttonProps.createOrder = function (data, actions) {
      return createOrderRef(data, __assign(__assign({}, actions), {
        braintree: payPalCheckoutInstance
      }));
    };
  }
  if (typeof createBillingAgreementRef === "function") {
    buttonProps.createBillingAgreement = function (data, actions) {
      return createBillingAgreementRef(data, __assign(__assign({}, actions), {
        braintree: payPalCheckoutInstance
      }));
    };
  }
  if (typeof onApproveRef === "function") {
    buttonProps.onApprove = function (data, actions) {
      return onApproveRef(data, __assign(__assign({}, actions), {
        braintree: payPalCheckoutInstance
      }));
    };
  }
  return __assign({}, buttonProps);
};
/**
 * Get the Braintree namespace from the component props.
 * If the prop `braintreeNamespace` is undefined will try to load it from the CDN.
 * This function allows users to set the braintree manually on the `BraintreePayPalButtons` component.
 *
 * Use case can be for example legacy sites using AMD/UMD modules,
 * trying to integrate the `BraintreePayPalButtons` component.
 * If we attempt to load the Braintree from the CDN won't define the braintree namespace.
 * This happens because the braintree script is an UMD module.
 * After detecting the AMD on the global scope will create an anonymous module using `define`
 * and the `BraintreePayPalButtons` won't be able to get access to the `window.braintree` namespace
 * from the global context.
 *
 * @param braintreeSource the source {@link BraintreeNamespace}
 * @returns the {@link BraintreeNamespace}
 */
var getBraintreeNamespace = function (braintreeSource) {
  if (braintreeSource && isValidBraintreeNamespace(braintreeSource)) {
    return Promise.resolve(braintreeSource);
  }
  return Promise.all([loadCustomScript({
    url: BRAINTREE_SOURCE
  }), loadCustomScript({
    url: BRAINTREE_PAYPAL_CHECKOUT_SOURCE
  })]).then(function () {
    return getBraintreeWindowNamespace();
  });
};

/**
This `<BraintreePayPalButtons />` component renders the [Braintree PayPal Buttons](https://developer.paypal.com/braintree/docs/guides/paypal/overview) for Braintree Merchants.
It relies on the `<PayPalScriptProvider />` parent component for managing state related to loading the JS SDK script.

Note: You are able to make your integration using the client token or using the tokenization key.

- To use the client token integration set the key `dataClientToken` in the `PayPayScriptProvider` component's options.
- To use the tokenization key integration set the key `dataUserIdToken` in the `PayPayScriptProvider` component's options.
*/
var BraintreePayPalButtons = function (_a) {
  var _b = _a.className,
    className = _b === void 0 ? "" : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    children = _a.children,
    _d = _a.forceReRender,
    forceReRender = _d === void 0 ? [] : _d,
    braintreeNamespace = _a.braintreeNamespace,
    merchantAccountId = _a.merchantAccountId,
    buttonProps = __rest$1(_a, ["className", "disabled", "children", "forceReRender", "braintreeNamespace", "merchantAccountId"]);
  var _e = useState(null),
    setErrorState = _e[1];
  var _f = useScriptProviderContext(),
    providerContext = _f[0],
    dispatch = _f[1];
  useEffect(function () {
    getBraintreeNamespace(braintreeNamespace).then(function (braintree) {
      var clientTokenizationKey = providerContext.options[SDK_SETTINGS.DATA_USER_ID_TOKEN];
      var clientToken = providerContext.options[SDK_SETTINGS.DATA_CLIENT_TOKEN];
      return braintree.client.create({
        authorization: clientTokenizationKey || clientToken
      }).then(function (clientInstance) {
        var merchantProp = merchantAccountId ? {
          merchantAccountId: merchantAccountId
        } : {};
        return braintree.paypalCheckout.create(__assign(__assign({}, merchantProp), {
          client: clientInstance
        }));
      }).then(function (paypalCheckoutInstance) {
        dispatch({
          type: DISPATCH_ACTION.SET_BRAINTREE_INSTANCE,
          value: paypalCheckoutInstance
        });
      });
    }).catch(function (err) {
      setErrorState(function () {
        throw new Error("".concat(LOAD_SCRIPT_ERROR, " ").concat(err));
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerContext.options]);
  return React.createElement(React.Fragment, null, providerContext.braintreePayPalCheckoutInstance && React.createElement(PayPalButtons, __assign({
    className: className,
    disabled: disabled,
    forceReRender: forceReRender
  }, decorateActions(buttonProps, providerContext.braintreePayPalCheckoutInstance)), children));
};

/**
The `<PayPalMarks />` component is used for conditionally rendering different payment options using radio buttons.
The [Display PayPal Buttons with other Payment Methods guide](https://developer.paypal.com/docs/business/checkout/add-capabilities/buyer-experience/#display-paypal-buttons-with-other-payment-methods) describes this style of integration in detail.
It relies on the `<PayPalScriptProvider />` parent component for managing state related to loading the JS SDK script.

This component can also be configured to use a single funding source similar to the [standalone buttons](https://developer.paypal.com/docs/business/checkout/configure-payments/standalone-buttons/) approach.
A `FUNDING` object is exported by this library which has a key for every available funding source option.
*/
var PayPalMarks = function (_a) {
  var _b = _a.className,
    className = _b === void 0 ? "" : _b,
    children = _a.children,
    markProps = __rest$1(_a, ["className", "children"]);
  var _c = usePayPalScriptReducer()[0],
    isResolved = _c.isResolved,
    options = _c.options;
  var markContainerRef = useRef(null);
  var _d = useState(true),
    isEligible = _d[0],
    setIsEligible = _d[1];
  var _e = useState(null),
    setErrorState = _e[1];
  /**
   * Render PayPal Mark into the DOM
   */
  var renderPayPalMark = function (mark) {
    var current = markContainerRef.current;
    // only render the mark when eligible
    if (!current || !mark.isEligible()) {
      return setIsEligible(false);
    }
    // Remove any children before render it again
    if (current.firstChild) {
      current.removeChild(current.firstChild);
    }
    mark.render(current).catch(function (err) {
      // component failed to render, possibly because it was closed or destroyed.
      if (current === null || current.children.length === 0) {
        // paypal marks container is no longer in the DOM, we can safely ignore the error
        return;
      }
      // paypal marks container is still in the DOM
      setErrorState(function () {
        throw new Error("Failed to render <PayPalMarks /> component. ".concat(err));
      });
    });
  };
  useEffect(function () {
    // verify the sdk script has successfully loaded
    if (isResolved === false) {
      return;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]);
    // verify dependency on window object
    if (paypalWindowNamespace === undefined || paypalWindowNamespace.Marks === undefined) {
      return setErrorState(function () {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalMarks.displayName,
          sdkComponentKey: "marks",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
    }
    renderPayPalMark(paypalWindowNamespace.Marks(__assign({}, markProps)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResolved, markProps.fundingSource]);
  return React.createElement(React.Fragment, null, isEligible ? React.createElement("div", {
    ref: markContainerRef,
    className: className
  }) : children);
};
PayPalMarks.displayName = "PayPalMarks";

/**
This `<PayPalMessages />` messages component renders a credit messaging on upstream merchant sites.
It relies on the `<PayPalScriptProvider />` parent component for managing state related to loading the JS SDK script.
*/
var PayPalMessages = function (_a) {
  var _b = _a.className,
    className = _b === void 0 ? "" : _b,
    _c = _a.forceReRender,
    forceReRender = _c === void 0 ? [] : _c,
    messageProps = __rest$1(_a, ["className", "forceReRender"]);
  var _d = usePayPalScriptReducer()[0],
    isResolved = _d.isResolved,
    options = _d.options;
  var messagesContainerRef = useRef(null);
  var messages = useRef(null);
  var _e = useState(null),
    setErrorState = _e[1];
  useEffect(function () {
    // verify the sdk script has successfully loaded
    if (isResolved === false) {
      return;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]);
    // verify dependency on window object
    if (paypalWindowNamespace === undefined || paypalWindowNamespace.Messages === undefined) {
      return setErrorState(function () {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalMessages.displayName,
          sdkComponentKey: "messages",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
    }
    messages.current = paypalWindowNamespace.Messages(__assign({}, messageProps));
    messages.current.render(messagesContainerRef.current).catch(function (err) {
      // component failed to render, possibly because it was closed or destroyed.
      if (messagesContainerRef.current === null || messagesContainerRef.current.children.length === 0) {
        // paypal messages container is no longer in the DOM, we can safely ignore the error
        return;
      }
      // paypal messages container is still in the DOM
      setErrorState(function () {
        throw new Error("Failed to render <PayPalMessages /> component. ".concat(err));
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, __spreadArray([isResolved], forceReRender, true));
  return React.createElement("div", {
    ref: messagesContainerRef,
    className: className
  });
};
PayPalMessages.displayName = "PayPalMessages";

/**
This `<PayPalScriptProvider />` component takes care of loading the JS SDK `<script>`.
It manages state for script loading so children components like `<PayPalButtons />` know when it's safe to use the `window.paypal` global namespace.

Note: You always should use this component as a wrapper for  `PayPalButtons`, `PayPalMarks`, `PayPalMessages` and `BraintreePayPalButtons` components.
 */
var PayPalScriptProvider = function (_a) {
  var _b;
  var _c = _a.options,
    options = _c === void 0 ? {
      clientId: "test"
    } : _c,
    children = _a.children,
    _d = _a.deferLoading,
    deferLoading = _d === void 0 ? false : _d;
  var _e = useReducer(scriptReducer, {
      options: __assign(__assign({}, options), (_b = {}, _b[SDK_SETTINGS.DATA_JS_SDK_LIBRARY] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SCRIPT_ID] = "".concat(getScriptID(options)), _b)),
      loadingStatus: deferLoading ? SCRIPT_LOADING_STATE.INITIAL : SCRIPT_LOADING_STATE.PENDING
    }),
    state = _e[0],
    dispatch = _e[1];
  useEffect(function () {
    if (deferLoading === false && state.loadingStatus === SCRIPT_LOADING_STATE.INITIAL) {
      return dispatch({
        type: DISPATCH_ACTION.LOADING_STATUS,
        value: SCRIPT_LOADING_STATE.PENDING
      });
    }
    if (state.loadingStatus !== SCRIPT_LOADING_STATE.PENDING) {
      return;
    }
    var isSubscribed = true;
    loadScript(state.options).then(function () {
      if (isSubscribed) {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: SCRIPT_LOADING_STATE.RESOLVED
        });
      }
    }).catch(function (err) {
      console.error("".concat(LOAD_SCRIPT_ERROR, " ").concat(err));
      if (isSubscribed) {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: {
            state: SCRIPT_LOADING_STATE.REJECTED,
            message: String(err)
          }
        });
      }
    });
    return function () {
      isSubscribed = false;
    };
  }, [state.options, deferLoading, state.loadingStatus]);
  return React.createElement(ScriptContext.Provider, {
    value: __assign(__assign({}, state), {
      dispatch: dispatch
    })
  }, children);
};

/**
 * Custom hook to store registered hosted fields children
 * Each `PayPalHostedField` component should be registered on the parent provider
 *
 * @param initialValue the initially registered components
 * @returns at first, an {@link Object} containing the registered hosted fields,
 * and at the second a function handler to register the hosted fields components
 */
var useHostedFieldsRegister = function (initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }
  var registeredFields = useRef(initialValue);
  var registerHostedField = function (component) {
    registeredFields.current = __assign(__assign({}, registeredFields.current), component);
  };
  return [registeredFields, registerHostedField];
};

/**
 * Throw an exception if the HostedFields is not found in the paypal namespace
 * Probably cause for this problem is not sending the hosted-fields string
 * as part of the components props in options
 * {@code <PayPalScriptProvider options={{ components: 'hosted-fields'}}>}
 *
 * @param param0 and object containing the components and namespace defined in options
 * @throws {@code Error}
 *
 */
var generateMissingHostedFieldsError = function (_a) {
  var _b = _a.components,
    components = _b === void 0 ? "" : _b,
    _c = SDK_SETTINGS.DATA_NAMESPACE,
    _d = _a[_c],
    dataNamespace = _d === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _d;
  var expectedComponents = components ? "".concat(components, ",hosted-fields") : "hosted-fields";
  var errorMessage = "Unable to render <PayPalHostedFieldsProvider /> because window.".concat(dataNamespace, ".HostedFields is undefined.");
  if (!components.includes("hosted-fields")) {
    errorMessage += "\nTo fix the issue, add 'hosted-fields' to the list of components passed to the parent PayPalScriptProvider: <PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>");
  }
  return errorMessage;
};
/**
 * Validate the expiration date component. Valid combinations are:
 * 1- Only the `expirationDate` field exists.
 * 2- Only the `expirationMonth` and `expirationYear` fields exist. Cannot be used with the `expirationDate` field.
 *
 * @param registerTypes
 * @returns @type {true} when the children are valid
 */
var validateExpirationDate = function (registerTypes) {
  return !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_DATE) && !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_MONTH) && !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_YEAR);
};
/**
 * Check if we find the [number, expiration, cvv] in children
 *
 * @param requiredChildren the list with required children [number, expiration, cvv]
 * @param registerTypes    the list of all the children types pass to the parent
 * @throw an @type {Error} when not find the default children
 */
var hasDefaultChildren = function (registerTypes) {
  if (!registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.NUMBER) || !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.CVV) || validateExpirationDate(registerTypes)) {
    throw new Error(HOSTED_FIELDS_CHILDREN_ERROR);
  }
};
/**
 * Check if we don't have duplicate children types
 *
 * @param registerTypes the list of all the children types pass to the parent
 * @throw an @type {Error} when duplicate types was found
 */
var noDuplicateChildren = function (registerTypes) {
  if (registerTypes.length !== new Set(registerTypes).size) {
    throw new Error(HOSTED_FIELDS_DUPLICATE_CHILDREN_ERROR);
  }
};
/**
 * Validate the hosted field children in the PayPalHostedFieldsProvider component.
 * These are the rules:
 * 1- We need to find 3 default children for number, expiration, cvv
 * 2- No duplicate children are allowed
 * 3- No invalid combinations of `expirationDate`, `expirationMonth`, and `expirationYear`
 *
 * @param childrenList     the list of children
 * @param requiredChildren the list with required children [number, expiration, cvv]
 */
var validateHostedFieldChildren = function (registeredFields) {
  hasDefaultChildren(registeredFields);
  noDuplicateChildren(registeredFields);
};

/**
This `<PayPalHostedFieldsProvider />` provider component wraps the form field elements and accepts props like `createOrder()`.

This provider component is designed to be used with the `<PayPalHostedField />` component.

Warning: If you don't see anything in the screen probably your client is ineligible.
To handle this problem make sure to use the prop `notEligibleError` and pass a component with a custom message.
Take a look to this link if that is the case: https://developer.paypal.com/docs/checkout/advanced/integrate/
*/
var PayPalHostedFieldsProvider = function (_a) {
  var styles = _a.styles,
    createOrder = _a.createOrder,
    notEligibleError = _a.notEligibleError,
    children = _a.children,
    installments = _a.installments;
  var _b = useScriptProviderContext()[0],
    options = _b.options,
    loadingStatus = _b.loadingStatus;
  var _c = useState(true),
    isEligible = _c[0],
    setIsEligible = _c[1];
  var _d = useState(),
    cardFields = _d[0],
    setCardFields = _d[1];
  var _e = useState(null),
    setErrorState = _e[1];
  var hostedFieldsContainerRef = useRef(null);
  var hostedFields = useRef();
  var _f = useHostedFieldsRegister(),
    registeredFields = _f[0],
    registerHostedField = _f[1];
  useEffect(function () {
    var _a;
    validateHostedFieldChildren(Object.keys(registeredFields.current));
    // Only render the hosted fields when script is loaded and hostedFields is eligible
    if (!(loadingStatus === SCRIPT_LOADING_STATE.RESOLVED)) {
      return;
    }
    // Get the hosted fields from the [window.paypal.HostedFields] SDK
    hostedFields.current = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]).HostedFields;
    if (!hostedFields.current) {
      throw new Error(generateMissingHostedFieldsError((_a = {
        components: options.components
      }, _a[SDK_SETTINGS.DATA_NAMESPACE] = options[SDK_SETTINGS.DATA_NAMESPACE], _a)));
    }
    if (!hostedFields.current.isEligible()) {
      return setIsEligible(false);
    }
    // Clean all the fields before the rerender
    if (cardFields) {
      cardFields.teardown();
    }
    hostedFields.current.render({
      // Call your server to set up the transaction
      createOrder: createOrder,
      fields: registeredFields.current,
      installments: installments,
      styles: styles
    }).then(function (cardFieldsInstance) {
      if (hostedFieldsContainerRef.current) {
        setCardFields(cardFieldsInstance);
      }
    }).catch(function (err) {
      setErrorState(function () {
        throw new Error("Failed to render <PayPalHostedFieldsProvider /> component. ".concat(err));
      });
    });
  }, [loadingStatus, styles]); // eslint-disable-line react-hooks/exhaustive-deps
  return React.createElement("div", {
    ref: hostedFieldsContainerRef
  }, isEligible ? React.createElement(PayPalHostedFieldsContext.Provider, {
    value: {
      cardFields: cardFields,
      registerHostedField: registerHostedField
    }
  }, children) : notEligibleError);
};

/**
This `<PayPalHostedField />` component renders individual fields for [Hosted Fields](https://developer.paypal.com/docs/business/checkout/advanced-card-payments/integrate#3-add-javascript-sdk-and-card-form) integrations.
It relies on the `<PayPalHostedFieldsProvider />` parent component for managing state related to loading the JS SDK script
and execute some validations before the rendering the fields.

To use the PayPal hosted fields you need to define at least three fields:

- A card number field
- The CVV code from the client card
- The expiration date

You can define the expiration date as a single field similar to the example below,
or you are able to define it in [two separate fields](https://paypal.github.io/paypal-js/web-sdk-v5-react-storybook/?path=/docs/paypal-paypalhostedfields--expiration-date). One for the month and second for year.

Note: Take care when using multiple instances of the PayPal Hosted Fields on the same page.
The component will fail to render when any of the selectors return more than one element.
*/
var PayPalHostedField = function (_a) {
  var hostedFieldType = _a.hostedFieldType,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    options = _a.options,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    props = __rest$1(_a, ["hostedFieldType", "options"]);
  var hostedFieldContext = useContext(PayPalHostedFieldsContext);
  useEffect(function () {
    var _a;
    if (!(hostedFieldContext === null || hostedFieldContext === void 0 ? void 0 : hostedFieldContext.registerHostedField)) {
      throw new Error("The HostedField cannot be register in the PayPalHostedFieldsProvider parent component");
    }
    // Register in the parent provider
    hostedFieldContext.registerHostedField((_a = {}, _a[hostedFieldType] = {
      selector: options.selector,
      placeholder: options.placeholder,
      type: options.type,
      formatInput: options.formatInput,
      maskInput: options.maskInput,
      select: options.select,
      maxlength: options.maxlength,
      minlength: options.minlength,
      prefill: options.prefill,
      rejectUnsupportedCards: options.rejectUnsupportedCards
    }, _a));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return React.createElement("div", __assign({}, props));
};

/**
 * Throw an exception if the CardFields is not found in the paypal namespace
 * Probably cause for this problem is not sending the card-fields string
 * as part of the components props in options
 * {@code <PayPalScriptProvider options={{ components: 'card-fields'}}>}
 *
 * @param param0 and object containing the components and namespace defined in options
 * @throws {@code Error}
 *
 */
var generateMissingCardFieldsError = function (_a) {
  var _b = _a.components,
    components = _b === void 0 ? "" : _b,
    _c = SDK_SETTINGS.DATA_NAMESPACE,
    _d = _a[_c],
    dataNamespace = _d === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _d;
  var expectedComponents = components ? "".concat(components, ",card-fields") : "card-fields";
  var errorMessage = "Unable to render <PayPalCardFieldsProvider /> because window.".concat(dataNamespace, ".CardFields is undefined.");
  if (!components.includes("card-fields")) {
    errorMessage += "\nTo fix the issue, add 'card-fields' to the list of components passed to the parent PayPalScriptProvider: <PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>");
  }
  return errorMessage;
};
function ignore() {
  return;
}
function hasChildren(container) {
  var _a;
  return !!((_a = container.current) === null || _a === void 0 ? void 0 : _a.children.length);
}
var PayPalCardFieldsContext = createContext({
  cardFieldsForm: null,
  fields: {},
  registerField: ignore,
  // implementation is inside hook and passed through the provider
  unregisterField: ignore // implementation is inside hook and passed through the provider
});
var usePayPalCardFields = function () {
  return useContext(PayPalCardFieldsContext);
};
var usePayPalCardFieldsRegistry = function () {
  var _a = useState(null),
    setError = _a[1];
  var registeredFields = useRef({});
  var registerField = function () {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      props[_i] = arguments[_i];
    }
    var fieldName = props[0],
      options = props[1],
      cardFields = props[2];
    if (registeredFields.current[fieldName]) {
      setError(function () {
        throw new Error(CARD_FIELDS_DUPLICATE_CHILDREN_ERROR);
      });
    }
    registeredFields.current[fieldName] = cardFields === null || cardFields === void 0 ? void 0 : cardFields[fieldName](options);
    return registeredFields.current[fieldName];
  };
  var unregisterField = function (fieldName) {
    var field = registeredFields.current[fieldName];
    if (field) {
      field.close().catch(ignore);
      delete registeredFields.current[fieldName];
    }
  };
  return {
    fields: registeredFields.current,
    registerField: registerField,
    unregisterField: unregisterField
  };
};
var FullWidthContainer = function (_a) {
  var children = _a.children;
  return React.createElement("div", {
    style: {
      width: "100%"
    }
  }, children);
};

/**
The `<PayPalCardFieldsProvider />` is a context provider that is designed to support the rendering and state management of PayPal CardFields in your application.

The context provider will initialize the `CardFields` instance from the JS SDK and determine eligibility to render the CardField components. Once the `CardFields` are initialized, the context provider will manage the state of the `CardFields` instance as well as the reference to each individual card field.

Passing the `inputEvents` and `style` props to the context provider will apply them to each of the individual field components.

The state managed by the provider is accessible through our custom hook `usePayPalCardFields`.

*/
var PayPalCardFieldsProvider = function (_a) {
  var children = _a.children,
    props = __rest$1(_a, ["children"]);
  var proxyInputEvents = useProxyProps(props.inputEvents);
  var proxyProps = useProxyProps(props);
  var _b = usePayPalScriptReducer()[0],
    isResolved = _b.isResolved,
    options = _b.options;
  var _c = usePayPalCardFieldsRegistry(),
    fields = _c.fields,
    registerField = _c.registerField,
    unregisterField = _c.unregisterField;
  var _d = useState(null),
    cardFieldsForm = _d[0],
    setCardFieldsForm = _d[1];
  var cardFieldsInstance = useRef(null);
  var _e = useState(false),
    isEligible = _e[0],
    setIsEligible = _e[1];
  // We set the error inside state so that it can be caught by React's error boundary
  var _f = useState(null),
    setError = _f[1];
  useEffect(function () {
    var _a, _b, _c;
    if (!isResolved) {
      return;
    }
    if (props.inputEvents) {
      proxyProps.inputEvents = proxyInputEvents;
    }
    try {
      cardFieldsInstance.current = (_c = (_b = (_a = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE])).CardFields) === null || _b === void 0 ? void 0 : _b.call(_a, __assign({}, proxyProps))) !== null && _c !== void 0 ? _c : null;
    } catch (error) {
      setError(function () {
        throw new Error("Failed to render <PayPalCardFieldsProvider /> component. Failed to initialize:  ".concat(error));
      });
      return;
    }
    if (!cardFieldsInstance.current) {
      setError(function () {
        var _a;
        throw new Error(generateMissingCardFieldsError((_a = {
          components: options.components
        }, _a[SDK_SETTINGS.DATA_NAMESPACE] = options[SDK_SETTINGS.DATA_NAMESPACE], _a)));
      });
      return;
    }
    setIsEligible(cardFieldsInstance.current.isEligible());
    setCardFieldsForm(cardFieldsInstance.current);
    return function () {
      setCardFieldsForm(null);
      cardFieldsInstance.current = null;
    };
  }, [isResolved]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!isEligible) {
    // TODO: What should be returned here?
    return React.createElement("div", null);
  }
  return React.createElement(FullWidthContainer, null, React.createElement(PayPalCardFieldsContext.Provider, {
    value: {
      cardFieldsForm: cardFieldsForm,
      fields: fields,
      registerField: registerField,
      unregisterField: unregisterField
    }
  }, children));
};
var PayPalCardField = function (_a) {
  var className = _a.className,
    fieldName = _a.fieldName,
    options = __rest$1(_a, ["className", "fieldName"]);
  var _b = usePayPalCardFields(),
    cardFieldsForm = _b.cardFieldsForm,
    registerField = _b.registerField,
    unregisterField = _b.unregisterField;
  var containerRef = useRef(null);
  var proxyInputEvents = useProxyProps(options.inputEvents);
  // Set errors is state so that they can be caught by React's error boundary
  var _c = useState(null),
    setError = _c[1];
  function closeComponent() {
    unregisterField(fieldName);
  }
  useEffect(function () {
    if (!cardFieldsForm) {
      setError(function () {
        throw new Error(CARD_FIELDS_CONTEXT_ERROR);
      });
      return closeComponent;
    }
    if (!containerRef.current) {
      return closeComponent;
    }
    if (options.inputEvents) {
      options.inputEvents = proxyInputEvents;
    }
    var registeredField = registerField(fieldName, options, cardFieldsForm);
    registeredField === null || registeredField === void 0 ? void 0 : registeredField.render(containerRef.current).catch(function (err) {
      if (!hasChildren(containerRef)) {
        // Component no longer in the DOM, we can safely ignore the error
        return;
      }
      // Component is still in the DOM
      setError(function () {
        throw new Error("Failed to render <PayPal".concat(fieldName, " /> component. ").concat(err));
      });
    });
    return closeComponent;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return React.createElement("div", {
    ref: containerRef,
    className: className
  });
};
var PayPalNameField = function (options) {
  return React.createElement(PayPalCardField, __assign({
    fieldName: "NameField"
  }, options));
};
var PayPalNumberField = function (options) {
  return React.createElement(PayPalCardField, __assign({
    fieldName: "NumberField"
  }, options));
};
var PayPalExpiryField = function (options) {
  return React.createElement(PayPalCardField, __assign({
    fieldName: "ExpiryField"
  }, options));
};
var PayPalCVVField = function (options) {
  return React.createElement(PayPalCardField, __assign({
    fieldName: "CVVField"
  }, options));
};
var FlexContainer = function (_a) {
  var children = _a.children;
  return React.createElement("div", {
    style: {
      display: "flex",
      width: "100%"
    }
  }, children);
};

/**
This `<PayPalCardFieldsForm />` component renders the 4 individual fields for [Card Fields](https://developer.paypal.com/docs/business/checkout/advanced-card-payments/integrate#3-add-javascript-sdk-and-card-form) integrations.
This setup relies on the `<PayPalCardFieldsProvider />` parent component, which manages the state related to loading the JS SDK script and performs certain validations before rendering the fields.



Note: If you want to have more granular control over the layout of how the fields are rendered, you can alternatively use our Individual Fields.
*/
var PayPalCardFieldsForm = function (_a) {
  var className = _a.className;
  return React.createElement("div", {
    className: className
  }, React.createElement(PayPalCardField, {
    fieldName: "NameField"
  }), React.createElement(PayPalCardField, {
    fieldName: "NumberField"
  }), React.createElement(FlexContainer, null, React.createElement(FullWidthContainer, null, React.createElement(PayPalCardField, {
    fieldName: "ExpiryField"
  })), React.createElement(FullWidthContainer, null, React.createElement(PayPalCardField, {
    fieldName: "CVVField"
  }))));
};
var FUNDING$1 = {
  PAYPAL: "paypal",
  VENMO: "venmo",
  APPLEPAY: "applepay",
  ITAU: "itau",
  CREDIT: "credit",
  PAYLATER: "paylater",
  CARD: "card",
  IDEAL: "ideal",
  SEPA: "sepa",
  BANCONTACT: "bancontact",
  GIROPAY: "giropay",
  SOFORT: "sofort",
  EPS: "eps",
  MYBANK: "mybank",
  P24: "p24",
  PAYU: "payu",
  BLIK: "blik",
  TRUSTLY: "trustly",
  OXXO: "oxxo",
  BOLETO: "boleto",
  BOLETOBANCARIO: "boletobancario",
  WECHATPAY: "wechatpay",
  MERCADOPAGO: "mercadopago",
  MULTIBANCO: "multibanco",
  SATISPAY: "satispay",
  PAIDY: "paidy",
  ZIMPLER: "zimpler",
  MAXIMA: "maxima"
};
[FUNDING$1.IDEAL, FUNDING$1.BANCONTACT, FUNDING$1.GIROPAY, FUNDING$1.SOFORT, FUNDING$1.EPS, FUNDING$1.MYBANK, FUNDING$1.P24, FUNDING$1.PAYU, FUNDING$1.BLIK, FUNDING$1.TRUSTLY, FUNDING$1.OXXO, FUNDING$1.BOLETO, FUNDING$1.BOLETOBANCARIO, FUNDING$1.WECHATPAY, FUNDING$1.MERCADOPAGO, FUNDING$1.MULTIBANCO, FUNDING$1.SATISPAY, FUNDING$1.PAIDY, FUNDING$1.MAXIMA, FUNDING$1.ZIMPLER];

// We do not re-export `FUNDING` from the `sdk-constants` module
// directly because it has no type definitions.
//
// See https://github.com/paypal/react-paypal-js/issues/125
var FUNDING = FUNDING$1;
export { BraintreePayPalButtons, DISPATCH_ACTION, FUNDING, PAYPAL_HOSTED_FIELDS_TYPES, PayPalButtons, PayPalCVVField, PayPalCardFieldsContext, PayPalCardFieldsForm, PayPalCardFieldsProvider, PayPalExpiryField, PayPalHostedField, PayPalHostedFieldsProvider, PayPalMarks, PayPalMessages, PayPalNameField, PayPalNumberField, PayPalScriptProvider, SCRIPT_LOADING_STATE, ScriptContext, destroySDKScript, getScriptID, scriptReducer, usePayPalCardFields, usePayPalHostedFields, usePayPalScriptReducer, useScriptProviderContext };
