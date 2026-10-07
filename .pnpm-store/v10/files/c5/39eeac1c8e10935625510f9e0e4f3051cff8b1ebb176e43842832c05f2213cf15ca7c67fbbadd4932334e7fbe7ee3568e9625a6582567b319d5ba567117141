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


typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function isServer() {
    return typeof window === "undefined" && typeof document === "undefined";
}

var version = "10.1.0";
var SCRIPT_LOADING_STATE = {
    PENDING: "pending",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};
var DATA_ATTRIBUTE_LOADING_STATE = "data-loading-state";
function loadCoreSdkScript(options) {
    var _a;
    var _b;
    validateArguments(options);
    if (isServer()) {
        return Promise.resolve(null);
    }
    var environment = options.environment, debug = options.debug, dataNamespace = options.dataNamespace, dataSdkIntegrationSource = options.dataSdkIntegrationSource;
    var namespace = dataNamespace !== null && dataNamespace !== void 0 ? dataNamespace : "paypal";
    var paypalWindowReference = getPayPalWindowNamespace(namespace);
    if (paypalWindowReference === null || paypalWindowReference === void 0 ? void 0 : paypalWindowReference.version.startsWith("6")) {
        return Promise.resolve(paypalWindowReference);
    }
    var baseURL = environment === "production"
        ? "https://www.paypal.com"
        : "https://www.sandbox.paypal.com";
    var url = new URL("/web-sdk/v6/core", baseURL);
    if (debug) {
        url.searchParams.append("debug", "true");
    }
    var scriptElement = (_b = document.querySelector("script[src*=\"".concat(url.pathname, "\"][").concat(DATA_ATTRIBUTE_LOADING_STATE, "=\"").concat(SCRIPT_LOADING_STATE.PENDING, "\"]"))) !== null && _b !== void 0 ? _b : createScriptElement({
        url: url.toString(),
        attributes: (_a = {
                "data-namespace": dataNamespace,
                "data-sdk-integration-source": dataSdkIntegrationSource
            },
            _a[DATA_ATTRIBUTE_LOADING_STATE] = SCRIPT_LOADING_STATE.PENDING,
            _a),
    });
    return new Promise(function (resolve, reject) {
        scriptElement.addEventListener("load", function () {
            var paypalWindowReference = getPayPalWindowNamespace(namespace);
            if (!paypalWindowReference) {
                scriptElement.setAttribute(DATA_ATTRIBUTE_LOADING_STATE, SCRIPT_LOADING_STATE.REJECTED);
                return reject("The window.".concat(namespace, " global variable is not available"));
            }
            scriptElement.setAttribute(DATA_ATTRIBUTE_LOADING_STATE, SCRIPT_LOADING_STATE.RESOLVED);
            return resolve(paypalWindowReference);
        }, { once: true });
        scriptElement.addEventListener("error", function () {
            var defaultError = new Error("The script \"".concat(url.toString(), "\" failed to load. Check the HTTP status code and response body in DevTools to learn more."));
            scriptElement.setAttribute(DATA_ATTRIBUTE_LOADING_STATE, SCRIPT_LOADING_STATE.REJECTED);
            return reject(defaultError);
        }, { once: true });
    });
}
function validateArguments(options) {
    if (typeof options !== "object" || options === null) {
        throw new Error("Expected an options object");
    }
    var _a = options, environment = _a.environment, dataNamespace = _a.dataNamespace, dataSdkIntegrationSource = _a.dataSdkIntegrationSource;
    if (environment !== "production" && environment !== "sandbox") {
        throw new Error('The "environment" option is required and must be either "production" or "sandbox"');
    }
    if (dataNamespace !== undefined && dataNamespace.trim() === "") {
        throw new Error('The "dataNamespace" option cannot be an empty string');
    }
    if (dataSdkIntegrationSource !== undefined &&
        dataSdkIntegrationSource.trim() === "") {
        throw new Error('The "dataSdkIntegrationSource" option cannot be an empty string');
    }
}
function getPayPalWindowNamespace(namespace) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return window[namespace];
}
function createScriptElement(_a) {
    var url = _a.url, attributes = _a.attributes;
    var newScript = document.createElement("script");
    newScript.src = url;
    for (var _i = 0, _b = Object.entries(attributes); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], value = _c[1];
        if (value !== undefined) {
            newScript.setAttribute(key, value);
        }
    }
    document.head.appendChild(newScript);
    return newScript;
}

export { loadCoreSdkScript, version };
