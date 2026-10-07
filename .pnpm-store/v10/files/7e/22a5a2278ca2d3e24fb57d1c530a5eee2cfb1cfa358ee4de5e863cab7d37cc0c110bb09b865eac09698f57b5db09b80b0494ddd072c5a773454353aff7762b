import { getNodePath, Declaration } from '../parser/cssNodes.js';
import { difference } from '../utils/strings.js';
import { Rules } from './lintRules.js';
import '../cssLanguageTypes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { Command, TextEdit, VersionedTextDocumentIdentifier, TextDocumentEdit, CodeAction, CodeActionKind } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CSSCodeActions {
    constructor(cssDataManager) {
        this.cssDataManager = cssDataManager;
    }
    doCodeActions(document, range, context, stylesheet) {
        return this.doCodeActions2(document, range, context, stylesheet).map(ca => {
            const textDocumentEdit = ca.edit && ca.edit.documentChanges && ca.edit.documentChanges[0];
            return Command.create(ca.title, '_css.applyCodeAction', document.uri, document.version, textDocumentEdit && textDocumentEdit.edits);
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
            const score = difference(propertyName, p.name);
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
            const title = t("Rename to '{0}'", propertyName);
            const edit = TextEdit.replace(marker.range, propertyName);
            const documentIdentifier = VersionedTextDocumentIdentifier.create(document.uri, document.version);
            const workspaceEdit = { documentChanges: [TextDocumentEdit.create(documentIdentifier, [edit])] };
            const codeAction = CodeAction.create(title, workspaceEdit, CodeActionKind.QuickFix);
            codeAction.diagnostics = [marker];
            result.push(codeAction);
            if (--maxActions <= 0) {
                return;
            }
        }
    }
    appendFixesForMarker(document, stylesheet, marker, result) {
        if (marker.code !== Rules.UnknownProperty.id) {
            return;
        }
        const offset = document.offsetAt(marker.range.start);
        const end = document.offsetAt(marker.range.end);
        const nodepath = getNodePath(stylesheet, offset);
        for (let i = nodepath.length - 1; i >= 0; i--) {
            const node = nodepath[i];
            if (node instanceof Declaration) {
                const property = node.getProperty();
                if (property && property.offset === offset && property.end === end) {
                    this.getFixesForUnknownProperty(document, property, marker, result);
                    return;
                }
            }
        }
    }
}

export { CSSCodeActions };
