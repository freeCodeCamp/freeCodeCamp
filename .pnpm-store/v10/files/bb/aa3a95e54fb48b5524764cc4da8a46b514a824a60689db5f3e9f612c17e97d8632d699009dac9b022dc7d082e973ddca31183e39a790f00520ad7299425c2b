import { match } from '../../base/common/glob.js';
import { normalize } from '../../base/common/path.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function score(selector, candidateUri, candidateLanguage, candidateIsSynchronized, candidateNotebookUri, candidateNotebookType) {
    if (Array.isArray(selector)) {
        // array -> take max individual value
        let ret = 0;
        for (const filter of selector) {
            const value = score(filter, candidateUri, candidateLanguage, candidateIsSynchronized, candidateNotebookUri, candidateNotebookType);
            if (value === 10) {
                return value; // already at the highest
            }
            if (value > ret) {
                ret = value;
            }
        }
        return ret;
    }
    else if (typeof selector === 'string') {
        if (!candidateIsSynchronized) {
            return 0;
        }
        // short-hand notion, desugars to
        // 'fooLang' -> { language: 'fooLang'}
        // '*' -> { language: '*' }
        if (selector === '*') {
            return 5;
        }
        else if (selector === candidateLanguage) {
            return 10;
        }
        else {
            return 0;
        }
    }
    else if (selector) {
        // filter -> select accordingly, use defaults for scheme
        const { language, pattern, scheme, hasAccessToAllModels, notebookType } = selector; // TODO: microsoft/TypeScript#42768
        if (!candidateIsSynchronized && !hasAccessToAllModels) {
            return 0;
        }
        // selector targets a notebook -> use the notebook uri instead
        // of the "normal" document uri.
        if (notebookType && candidateNotebookUri) {
            candidateUri = candidateNotebookUri;
        }
        let ret = 0;
        if (scheme) {
            if (scheme === candidateUri.scheme) {
                ret = 10;
            }
            else if (scheme === '*') {
                ret = 5;
            }
            else {
                return 0;
            }
        }
        if (language) {
            if (language === candidateLanguage) {
                ret = 10;
            }
            else if (language === '*') {
                ret = Math.max(ret, 5);
            }
            else {
                return 0;
            }
        }
        if (notebookType) {
            if (notebookType === candidateNotebookType) {
                ret = 10;
            }
            else if (notebookType === '*' && candidateNotebookType !== undefined) {
                ret = Math.max(ret, 5);
            }
            else {
                return 0;
            }
        }
        if (pattern) {
            let normalizedPattern;
            if (typeof pattern === 'string') {
                normalizedPattern = pattern;
            }
            else {
                // Since this pattern has a `base` property, we need
                // to normalize this path first before passing it on
                // because we will compare it against `Uri.fsPath`
                // which uses platform specific separators.
                // Refs: https://github.com/microsoft/vscode/issues/99938
                normalizedPattern = { ...pattern, base: normalize(pattern.base) };
            }
            if (normalizedPattern === candidateUri.fsPath || match(normalizedPattern, candidateUri.fsPath)) {
                ret = 10;
            }
            else {
                return 0;
            }
        }
        return ret;
    }
    else {
        return 0;
    }
}

export { score };
