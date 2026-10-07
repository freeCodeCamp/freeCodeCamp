/*!
 * paypal-js v10.1.0 (2026-07-27T18:48:45.288Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function findScript(url, attributes) {
    var currentScript = document.querySelector("script[src=\"".concat(url, "\"]"));
    if (currentScript === null)
        return null;
    var nextScript = createScriptElement(url, attributes);
    // ignore the data-uid-auto attribute that gets auto-assigned to every script tag
    var currentScriptClone = currentScript.cloneNode();
    delete currentScriptClone.dataset.uidAuto;
    // check if the new script has the same number of data attributes
    if (Object.keys(currentScriptClone.dataset).length !==
        Object.keys(nextScript.dataset).length) {
        return null;
    }
    var isExactMatch = true;
    // check if the data attribute values are the same
    Object.keys(currentScriptClone.dataset).forEach(function (key) {
        if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
            isExactMatch = false;
        }
    });
    return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
    var url = _a.url, attributes = _a.attributes, onSuccess = _a.onSuccess, onError = _a.onError;
    var newScript = createScriptElement(url, attributes);
    newScript.onerror = onError;
    newScript.onload = onSuccess;
    document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
    // Use hasOwnProperty to avoid picking up prototype-polluted values.
    var customSdkBaseUrl = Object.prototype.hasOwnProperty.call(options, "sdkBaseUrl")
        ? options.sdkBaseUrl
        : undefined;
    var environment = Object.prototype.hasOwnProperty.call(options, "environment")
        ? options.environment
        : undefined;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options.environment; options.sdkBaseUrl; var rest = __rest(options, ["environment", "sdkBaseUrl"]);
    var sdkBaseUrl = customSdkBaseUrl || processSdkBaseUrl(environment);
    var optionsWithStringIndex = rest;
    var _a = Object.keys(optionsWithStringIndex)
        .filter(function (key) {
        return (typeof optionsWithStringIndex[key] !== "undefined" &&
            optionsWithStringIndex[key] !== null &&
            optionsWithStringIndex[key] !== "");
    })
        .reduce(function (accumulator, key) {
        var value = optionsWithStringIndex[key].toString();
        key = camelCaseToKebabCase(key);
        if (key.substring(0, 4) === "data" || key === "crossorigin") {
            accumulator.attributes[key] = value;
        }
        else {
            accumulator.queryParams[key] = value;
        }
        return accumulator;
    }, {
        queryParams: {},
        attributes: {},
    }), queryParams = _a.queryParams, attributes = _a.attributes;
    if (queryParams["merchant-id"] &&
        queryParams["merchant-id"].indexOf(",") !== -1) {
        attributes["data-merchant-id"] = queryParams["merchant-id"];
        queryParams["merchant-id"] = "*";
    }
    return {
        url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
        attributes: attributes,
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
        if (queryString.length !== 0)
            queryString += "&";
        queryString += key + "=" + params[key];
    });
    return queryString;
}
function processSdkBaseUrl(environment) {
    // Keeping production as default to maintain backward compatibility.
    // In the future this logic needs to be changed to use sandbox domain as default instead of production.
    return environment === "sandbox"
        ? "https://www.sandbox.paypal.com/sdk/js"
        : "https://www.paypal.com/sdk/js";
}
function createScriptElement(url, attributes) {
    if (attributes === void 0) { attributes = {}; }
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

/**
 * Load the Paypal JS SDK script asynchronously.
 *
 * @param {Object} options - used to configure query parameters and data attributes for the JS SDK.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<Object>} paypalObject - reference to the global window PayPal object.
 */
function loadScript(options, PromisePonyfill) {
    if (PromisePonyfill === void 0) { PromisePonyfill = Promise; }
    validateArguments(options, PromisePonyfill);
    // resolve with null when running in Node or Deno
    if (typeof document === "undefined")
        return PromisePonyfill.resolve(null);
    var _a = processOptions(options), url = _a.url, attributes = _a.attributes;
    var namespace = attributes["data-namespace"] || "paypal";
    var existingWindowNamespace = getPayPalWindowNamespace(namespace);
    if (!attributes["data-js-sdk-library"]) {
        attributes["data-js-sdk-library"] = "paypal-js";
    }
    // resolve with the existing global paypal namespace when a script with the same params already exists
    if (findScript(url, attributes) && existingWindowNamespace) {
        return PromisePonyfill.resolve(existingWindowNamespace);
    }
    return loadCustomScript({
        url: url,
        attributes: attributes,
    }, PromisePonyfill).then(function () {
        var newWindowNamespace = getPayPalWindowNamespace(namespace);
        if (newWindowNamespace) {
            return newWindowNamespace;
        }
        throw new Error("The window.".concat(namespace, " global variable is not available."));
    });
}
/**
 * Load a custom script asynchronously.
 *
 * @param {Object} options - used to set the script url and attributes.
 * @param {PromiseConstructor} [PromisePonyfill=window.Promise] - optional Promise Constructor ponyfill.
 * @return {Promise<void>} returns a promise to indicate if the script was successfully loaded.
 */
function loadCustomScript(options, PromisePonyfill) {
    if (PromisePonyfill === void 0) { PromisePonyfill = Promise; }
    validateArguments(options, PromisePonyfill);
    var url = options.url, attributes = options.attributes;
    if (typeof url !== "string" || url.length === 0) {
        throw new Error("Invalid url.");
    }
    if (typeof attributes !== "undefined" && typeof attributes !== "object") {
        throw new Error("Expected attributes to be an object.");
    }
    return new PromisePonyfill(function (resolve, reject) {
        // resolve with undefined when running in Node or Deno
        if (typeof document === "undefined")
            return resolve();
        insertScriptElement({
            url: url,
            attributes: attributes,
            onSuccess: function () { return resolve(); },
            onError: function () {
                var defaultError = new Error("The script \"".concat(url, "\" failed to load. Check the HTTP status code and response body in DevTools to learn more."));
                return reject(defaultError);
            },
        });
    });
}
function getPayPalWindowNamespace(namespace) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return window[namespace];
}
function validateArguments(options, PromisePonyfill) {
    if (typeof options !== "object" || options === null) {
        throw new Error("Expected an options object.");
    }
    var environment = options.environment;
    if (environment &&
        environment !== "production" &&
        environment !== "sandbox") {
        throw new Error('The `environment` option must be either "production" or "sandbox".');
    }
    if (typeof PromisePonyfill !== "undefined" &&
        typeof PromisePonyfill !== "function") {
        throw new Error("Expected PromisePonyfill to be a function.");
    }
}

// replaced with the package.json version at build time
var version = "10.1.0";

export { loadCustomScript, loadScript, version };
