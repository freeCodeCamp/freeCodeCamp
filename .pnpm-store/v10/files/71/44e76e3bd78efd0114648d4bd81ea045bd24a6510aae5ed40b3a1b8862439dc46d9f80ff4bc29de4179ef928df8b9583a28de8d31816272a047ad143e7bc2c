/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "vscode-uri"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dirname = dirname;
    exports.joinPath = joinPath;
    const vscode_uri_1 = require("vscode-uri");
    function dirname(uriString) {
        return vscode_uri_1.Utils.dirname(vscode_uri_1.URI.parse(uriString)).toString(true);
    }
    function joinPath(uriString, ...paths) {
        return vscode_uri_1.Utils.joinPath(vscode_uri_1.URI.parse(uriString), ...paths).toString(true);
    }
});
