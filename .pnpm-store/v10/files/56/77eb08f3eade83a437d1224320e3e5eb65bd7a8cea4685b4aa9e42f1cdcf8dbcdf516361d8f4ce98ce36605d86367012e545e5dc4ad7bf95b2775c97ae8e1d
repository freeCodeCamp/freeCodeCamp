(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@vscode/l10n"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCSSParseError = exports.SCSSIssueType = void 0;
    const l10n = require("@vscode/l10n");
    class SCSSIssueType {
        constructor(id, message) {
            this.id = id;
            this.message = message;
        }
    }
    exports.SCSSIssueType = SCSSIssueType;
    exports.SCSSParseError = {
        FromExpected: new SCSSIssueType('scss-fromexpected', l10n.t("'from' expected")),
        ThroughOrToExpected: new SCSSIssueType('scss-throughexpected', l10n.t("'through' or 'to' expected")),
        InExpected: new SCSSIssueType('scss-fromexpected', l10n.t("'in' expected")),
    };
});
