(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../parser/cssNodes", "./lintRules", "./lint", "../cssLanguageTypes"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSValidation = void 0;
    const nodes = require("../parser/cssNodes");
    const lintRules_1 = require("./lintRules");
    const lint_1 = require("./lint");
    const cssLanguageTypes_1 = require("../cssLanguageTypes");
    class CSSValidation {
        constructor(cssDataManager) {
            this.cssDataManager = cssDataManager;
        }
        configure(settings) {
            this.settings = settings;
        }
        doValidation(document, stylesheet, settings = this.settings) {
            if (settings && settings.validate === false) {
                return [];
            }
            const entries = [];
            entries.push.apply(entries, nodes.ParseErrorCollector.entries(stylesheet));
            entries.push.apply(entries, lint_1.LintVisitor.entries(stylesheet, document, new lintRules_1.LintConfigurationSettings(settings && settings.lint), this.cssDataManager));
            const ruleIds = [];
            for (const r in lintRules_1.Rules) {
                ruleIds.push(lintRules_1.Rules[r].id);
            }
            function toDiagnostic(marker) {
                const range = cssLanguageTypes_1.Range.create(document.positionAt(marker.getOffset()), document.positionAt(marker.getOffset() + marker.getLength()));
                const source = document.languageId;
                return {
                    code: marker.getRule().id,
                    source: source,
                    message: marker.getMessage(),
                    severity: marker.getLevel() === nodes.Level.Warning ? cssLanguageTypes_1.DiagnosticSeverity.Warning : cssLanguageTypes_1.DiagnosticSeverity.Error,
                    range: range
                };
            }
            return entries.filter(entry => entry.getLevel() !== nodes.Level.Ignore).map(toDiagnostic);
        }
    }
    exports.CSSValidation = CSSValidation;
});
