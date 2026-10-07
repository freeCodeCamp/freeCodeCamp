(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../parser/cssNodes", "../utils/strings", "../services/lintRules", "../cssLanguageTypes", "@vscode/l10n"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSCodeActions = void 0;
    const nodes = require("../parser/cssNodes");
    const strings_1 = require("../utils/strings");
    const lintRules_1 = require("../services/lintRules");
    const cssLanguageTypes_1 = require("../cssLanguageTypes");
    const l10n = require("@vscode/l10n");
    class CSSCodeActions {
        constructor(cssDataManager) {
            this.cssDataManager = cssDataManager;
        }
        doCodeActions(document, range, context, stylesheet) {
            return this.doCodeActions2(document, range, context, stylesheet).map(ca => {
                const textDocumentEdit = ca.edit && ca.edit.documentChanges && ca.edit.documentChanges[0];
                return cssLanguageTypes_1.Command.create(ca.title, '_css.applyCodeAction', document.uri, document.version, textDocumentEdit && textDocumentEdit.edits);
            });
        }
        doCodeActions2(document, range, context, stylesheet) {
            const result = [];
            if (context.diagnostics) {
                for (const diagnostic of context.diagnostics) {
                    this.appendFixesForMarker(document, stylesheet, diagnostic, result);
                }
            }
            return result;
        }
        getFixesForUnknownProperty(document, property, marker, result) {
            const propertyName = property.getName();
            const candidates = [];
            this.cssDataManager.getProperties().forEach(p => {
                const score = (0, strings_1.difference)(propertyName, p.name);
                if (score >= propertyName.length / 2 /*score_lim*/) {
                    candidates.push({ property: p.name, score });
                }
            });
            // Sort in descending order.
            candidates.sort((a, b) => {
                return b.score - a.score || a.property.localeCompare(b.property);
            });
            let maxActions = 3;
            for (const candidate of candidates) {
                const propertyName = candidate.property;
                const title = l10n.t("Rename to '{0}'", propertyName);
                const edit = cssLanguageTypes_1.TextEdit.replace(marker.range, propertyName);
                const documentIdentifier = cssLanguageTypes_1.VersionedTextDocumentIdentifier.create(document.uri, document.version);
                const workspaceEdit = { documentChanges: [cssLanguageTypes_1.TextDocumentEdit.create(documentIdentifier, [edit])] };
                const codeAction = cssLanguageTypes_1.CodeAction.create(title, workspaceEdit, cssLanguageTypes_1.CodeActionKind.QuickFix);
                codeAction.diagnostics = [marker];
                result.push(codeAction);
                if (--maxActions <= 0) {
                    return;
                }
            }
        }
        appendFixesForMarker(document, stylesheet, marker, result) {
            if (marker.code !== lintRules_1.Rules.UnknownProperty.id) {
                return;
            }
            const offset = document.offsetAt(marker.range.start);
            const end = document.offsetAt(marker.range.end);
            const nodepath = nodes.getNodePath(stylesheet, offset);
            for (let i = nodepath.length - 1; i >= 0; i--) {
                const node = nodepath[i];
                if (node instanceof nodes.Declaration) {
                    const property = node.getProperty();
                    if (property && property.offset === offset && property.end === end) {
                        this.getFixesForUnknownProperty(document, property, marker, result);
                        return;
                    }
                }
            }
        }
    }
    exports.CSSCodeActions = CSSCodeActions;
});
