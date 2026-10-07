import { illegalArgument } from './errors.js';
import { escapeIcons } from './iconLabels.js';
import { Schemas } from './network.js';
import { isEqual } from './resources.js';
import { escapeRegExpCharacters } from './strings.js';
import { URI } from './uri.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class MarkdownString {
    constructor(value = '', isTrustedOrOptions = false) {
        this.value = value;
        if (typeof this.value !== 'string') {
            throw illegalArgument('value');
        }
        if (typeof isTrustedOrOptions === 'boolean') {
            this.isTrusted = isTrustedOrOptions;
            this.supportThemeIcons = false;
            this.supportHtml = false;
            this.supportAlertSyntax = false;
        }
        else {
            this.isTrusted = isTrustedOrOptions.isTrusted ?? undefined;
            this.supportThemeIcons = isTrustedOrOptions.supportThemeIcons ?? false;
            this.supportHtml = isTrustedOrOptions.supportHtml ?? false;
            this.supportAlertSyntax = isTrustedOrOptions.supportAlertSyntax ?? false;
        }
    }
    appendText(value, newlineStyle = 0 /* MarkdownStringTextNewlineStyle.Paragraph */) {
        this.value += escapeMarkdownSyntaxTokens(this.supportThemeIcons ? escapeIcons(value) : value) // CodeQL [SM02383] The Markdown is fully sanitized after being rendered.
            .replace(/([ \t]+)/g, (_match, g1) => '&nbsp;'.repeat(g1.length)) // CodeQL [SM02383] The Markdown is fully sanitized after being rendered.
            .replace(/\>/gm, '\\>') // CodeQL [SM02383] The Markdown is fully sanitized after being rendered.
            .replace(/\n/g, newlineStyle === 1 /* MarkdownStringTextNewlineStyle.Break */ ? '\\\n' : '\n\n'); // CodeQL [SM02383] The Markdown is fully sanitized after being rendered.
        return this;
    }
    appendMarkdown(value) {
        this.value += value;
        return this;
    }
    appendCodeblock(langId, code) {
        this.value += `\n${appendEscapedMarkdownCodeBlockFence(code, langId)}\n`;
        return this;
    }
    appendLink(target, label, title) {
        this.value += '[';
        this.value += this._escape(label, ']');
        this.value += '](';
        this.value += this._escape(String(target), ')');
        if (title) {
            this.value += ` "${this._escape(this._escape(title, '"'), ')')}"`;
        }
        this.value += ')';
        return this;
    }
    _escape(value, ch) {
        const r = new RegExp(escapeRegExpCharacters(ch), 'g');
        return value.replace(r, (match, offset) => {
            if (value.charAt(offset - 1) !== '\\') {
                return `\\${match}`;
            }
            else {
                return match;
            }
        });
    }
}
function isEmptyMarkdownString(oneOrMany) {
    if (isMarkdownString(oneOrMany)) {
        return !oneOrMany.value;
    }
    else if (Array.isArray(oneOrMany)) {
        return oneOrMany.every(isEmptyMarkdownString);
    }
    else {
        return true;
    }
}
function isMarkdownString(thing) {
    if (thing instanceof MarkdownString) {
        return true;
    }
    else if (thing && typeof thing === 'object') {
        return typeof thing.value === 'string'
            && (typeof thing.isTrusted === 'boolean' || typeof thing.isTrusted === 'object' || thing.isTrusted === undefined)
            && (typeof thing.supportThemeIcons === 'boolean' || thing.supportThemeIcons === undefined)
            && (typeof thing.supportAlertSyntax === 'boolean' || thing.supportAlertSyntax === undefined);
    }
    return false;
}
function markdownStringEqual(a, b) {
    if (a === b) {
        return true;
    }
    else if (!a || !b) {
        return false;
    }
    else {
        return a.value === b.value
            && a.isTrusted === b.isTrusted
            && a.supportThemeIcons === b.supportThemeIcons
            && a.supportHtml === b.supportHtml
            && a.supportAlertSyntax === b.supportAlertSyntax
            && (a.baseUri === b.baseUri || !!a.baseUri && !!b.baseUri && isEqual(URI.from(a.baseUri), URI.from(b.baseUri)));
    }
}
function escapeMarkdownSyntaxTokens(text) {
    // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    return text.replace(/[\\`*_{}[\]()#+\-!~]/g, '\\$&'); // CodeQL [SM02383] Backslash is escaped in the character class
}
/**
 * @see https://github.com/microsoft/vscode/issues/193746
 */
function appendEscapedMarkdownCodeBlockFence(code, langId) {
    const longestFenceLength = code.match(/^`+/gm)?.reduce((a, b) => (a.length > b.length ? a : b)).length ??
        0;
    const desiredFenceLength = longestFenceLength >= 3 ? longestFenceLength + 1 : 3;
    // the markdown result
    return [
        `${'`'.repeat(desiredFenceLength)}${langId}`,
        code,
        `${'`'.repeat(desiredFenceLength)}`,
    ].join('\n');
}
function escapeDoubleQuotes(input) {
    return input.replace(/"/g, '&quot;');
}
function removeMarkdownEscapes(text) {
    if (!text) {
        return text;
    }
    return text.replace(/\\([\\`*_{}[\]()#+\-.!~])/g, '$1');
}
function parseHrefAndDimensions(href) {
    const dimensions = [];
    const splitted = href.split('|').map(s => s.trim());
    href = splitted[0];
    const parameters = splitted[1];
    if (parameters) {
        const heightFromParams = /height=(\d+)/.exec(parameters);
        const widthFromParams = /width=(\d+)/.exec(parameters);
        const height = heightFromParams ? heightFromParams[1] : '';
        const width = widthFromParams ? widthFromParams[1] : '';
        const widthIsFinite = isFinite(parseInt(width));
        const heightIsFinite = isFinite(parseInt(height));
        if (widthIsFinite) {
            dimensions.push(`width="${width}"`);
        }
        if (heightIsFinite) {
            dimensions.push(`height="${height}"`);
        }
    }
    return { href, dimensions };
}
function createCommandUri(commandId, ...commandArgs) {
    return URI.from({
        scheme: Schemas.command,
        path: commandId,
        query: commandArgs.length ? encodeURIComponent(JSON.stringify(commandArgs)) : undefined,
    });
}

export { MarkdownString, appendEscapedMarkdownCodeBlockFence, createCommandUri, escapeDoubleQuotes, escapeMarkdownSyntaxTokens, isEmptyMarkdownString, isMarkdownString, markdownStringEqual, parseHrefAndDimensions, removeMarkdownEscapes };
