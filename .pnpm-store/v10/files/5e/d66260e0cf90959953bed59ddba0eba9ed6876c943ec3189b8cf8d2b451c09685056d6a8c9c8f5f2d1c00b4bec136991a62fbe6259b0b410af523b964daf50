(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../cssLanguageTypes", "@vscode/l10n", "../parser/cssNodes", "../parser/cssSymbolScope", "../languageFacts/facts", "../utils/strings", "../utils/resources"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSNavigation = void 0;
    exports.getModuleNameFromPath = getModuleNameFromPath;
    const cssLanguageTypes_1 = require("../cssLanguageTypes");
    const l10n = require("@vscode/l10n");
    const nodes = require("../parser/cssNodes");
    const cssSymbolScope_1 = require("../parser/cssSymbolScope");
    const facts_1 = require("../languageFacts/facts");
    const strings_1 = require("../utils/strings");
    const resources_1 = require("../utils/resources");
    const startsWithSchemeRegex = /^\w+:\/\//;
    const startsWithData = /^data:/;
    class CSSNavigation {
        constructor(fileSystemProvider, resolveModuleReferences) {
            this.fileSystemProvider = fileSystemProvider;
            this.resolveModuleReferences = resolveModuleReferences;
        }
        configure(settings) {
            this.defaultSettings = settings;
        }
        findDefinition(document, position, stylesheet) {
            const symbols = new cssSymbolScope_1.Symbols(stylesheet);
            const offset = document.offsetAt(position);
            const node = nodes.getNodeAtOffset(stylesheet, offset);
            if (!node) {
                return null;
            }
            const symbol = symbols.findSymbolFromNode(node);
            if (!symbol) {
                return null;
            }
            return {
                uri: document.uri,
                range: getRange(symbol.node, document)
            };
        }
        findReferences(document, position, stylesheet) {
            const highlights = this.findDocumentHighlights(document, position, stylesheet);
            return highlights.map(h => {
                return {
                    uri: document.uri,
                    range: h.range
                };
            });
        }
        getHighlightNode(document, position, stylesheet) {
            const offset = document.offsetAt(position);
            let node = nodes.getNodeAtOffset(stylesheet, offset);
            if (!node || node.type === nodes.NodeType.Stylesheet || node.type === nodes.NodeType.Declarations || node.type === nodes.NodeType.ModuleConfig) {
                return;
            }
            if (node.type === nodes.NodeType.Identifier && node.parent && node.parent.type === nodes.NodeType.ClassSelector) {
                node = node.parent;
            }
            return node;
        }
        findDocumentHighlights(document, position, stylesheet) {
            const result = [];
            const node = this.getHighlightNode(document, position, stylesheet);
            if (!node) {
                return result;
            }
            const symbols = new cssSymbolScope_1.Symbols(stylesheet);
            const symbol = symbols.findSymbolFromNode(node);
            const name = node.getText();
            stylesheet.accept(candidate => {
                if (symbol) {
                    if (symbols.matchesSymbol(candidate, symbol)) {
                        result.push({
                            kind: getHighlightKind(candidate),
                            range: getRange(candidate, document)
                        });
                        return false;
                    }
                }
                else if (node && node.type === candidate.type && candidate.matches(name)) {
                    // Same node type and data
                    result.push({
                        kind: getHighlightKind(candidate),
                        range: getRange(candidate, document)
                    });
                }
                return true;
            });
            return result;
        }
        isRawStringDocumentLinkNode(node) {
            return node.type === nodes.NodeType.Import;
        }
        findDocumentLinks(document, stylesheet, documentContext) {
            const linkData = this.findUnresolvedLinks(document, stylesheet);
            const resolvedLinks = [];
            for (let data of linkData) {
                const link = data.link;
                const target = link.target;
                if (!target || startsWithData.test(target)) {
                    // no links for data:
                }
                else if (startsWithSchemeRegex.test(target)) {
                    resolvedLinks.push(link);
                }
                else {
                    const resolved = documentContext.resolveReference(target, document.uri);
                    if (resolved) {
                        link.target = resolved;
                    }
                    resolvedLinks.push(link);
                }
            }
            return resolvedLinks;
        }
        async findDocumentLinks2(document, stylesheet, documentContext) {
            const linkData = this.findUnresolvedLinks(document, stylesheet);
            const resolvedLinks = [];
            for (let data of linkData) {
                const link = data.link;
                const target = link.target;
                if (!target || startsWithData.test(target)) {
                    // no links for data:
                }
                else if (startsWithSchemeRegex.test(target)) {
                    resolvedLinks.push(link);
                }
                else {
                    const resolvedTarget = await this.resolveReference(target, document.uri, documentContext, data.isRawLink);
                    if (resolvedTarget !== undefined) {
                        link.target = resolvedTarget;
                        resolvedLinks.push(link);
                    }
                }
            }
            return resolvedLinks;
        }
        findUnresolvedLinks(document, stylesheet) {
            const result = [];
            const collect = (uriStringNode) => {
                let rawUri = uriStringNode.getText();
                const range = getRange(uriStringNode, document);
                // Make sure the range is not empty
                if (range.start.line === range.end.line && range.start.character === range.end.character) {
                    return;
                }
                if ((0, strings_1.startsWith)(rawUri, `'`) || (0, strings_1.startsWith)(rawUri, `"`)) {
                    rawUri = rawUri.slice(1, -1);
                }
                const isRawLink = uriStringNode.parent ? this.isRawStringDocumentLinkNode(uriStringNode.parent) : false;
                result.push({ link: { target: rawUri, range }, isRawLink });
            };
            stylesheet.accept(candidate => {
                if (candidate.type === nodes.NodeType.URILiteral) {
                    const first = candidate.getChild(0);
                    if (first) {
                        collect(first);
                    }
                    return false;
                }
                /**
                 * In @import, it is possible to include links that do not use `url()`
                 * For example, `@import 'foo.css';`
                 */
                if (candidate.parent && this.isRawStringDocumentLinkNode(candidate.parent)) {
                    const rawText = candidate.getText();
                    if ((0, strings_1.startsWith)(rawText, `'`) || (0, strings_1.startsWith)(rawText, `"`)) {
                        collect(candidate);
                    }
                    return false;
                }
                return true;
            });
            return result;
        }
        findSymbolInformations(document, stylesheet) {
            const result = [];
            const addSymbolInformation = (name, kind, symbolNodeOrRange) => {
                const range = symbolNodeOrRange instanceof nodes.Node ? getRange(symbolNodeOrRange, document) : symbolNodeOrRange;
                const entry = {
                    name: name || l10n.t('<undefined>'),
                    kind,
                    location: cssLanguageTypes_1.Location.create(document.uri, range)
                };
                result.push(entry);
            };
            this.collectDocumentSymbols(document, stylesheet, addSymbolInformation);
            return result;
        }
        findDocumentSymbols(document, stylesheet) {
            const result = [];
            const parents = [];
            const addDocumentSymbol = (name, kind, symbolNodeOrRange, nameNodeOrRange, bodyNode) => {
                const range = symbolNodeOrRange instanceof nodes.Node ? getRange(symbolNodeOrRange, document) : symbolNodeOrRange;
                let selectionRange = nameNodeOrRange instanceof nodes.Node ? getRange(nameNodeOrRange, document) : nameNodeOrRange;
                if (!selectionRange || !containsRange(range, selectionRange)) {
                    selectionRange = cssLanguageTypes_1.Range.create(range.start, range.start);
                }
                const entry = {
                    name: name || l10n.t('<undefined>'),
                    kind,
                    range,
                    selectionRange
                };
                let top = parents.pop();
                while (top && !containsRange(top[1], range)) {
                    top = parents.pop();
                }
                if (top) {
                    const topSymbol = top[0];
                    if (!topSymbol.children) {
                        topSymbol.children = [];
                    }
                    topSymbol.children.push(entry);
                    parents.push(top); // put back top
                }
                else {
                    result.push(entry);
                }
                if (bodyNode) {
                    parents.push([entry, getRange(bodyNode, document)]);
                }
            };
            this.collectDocumentSymbols(document, stylesheet, addDocumentSymbol);
            return result;
        }
        collectDocumentSymbols(document, stylesheet, collect) {
            stylesheet.accept(node => {
                if (node instanceof nodes.RuleSet) {
                    for (const selector of node.getSelectors().getChildren()) {
                        if (selector instanceof nodes.Selector) {
                            const range = cssLanguageTypes_1.Range.create(document.positionAt(selector.offset), document.positionAt(node.end));
                            collect(selector.getText(), cssLanguageTypes_1.SymbolKind.Class, range, selector, node.getDeclarations());
                        }
                    }
                }
                else if (node instanceof nodes.VariableDeclaration) {
                    collect(node.getName(), cssLanguageTypes_1.SymbolKind.Variable, node, node.getVariable(), undefined);
                }
                else if (node instanceof nodes.MixinDeclaration) {
                    collect(node.getName(), cssLanguageTypes_1.SymbolKind.Method, node, node.getIdentifier(), node.getDeclarations());
                }
                else if (node instanceof nodes.FunctionDeclaration) {
                    collect(node.getName(), cssLanguageTypes_1.SymbolKind.Function, node, node.getIdentifier(), node.getDeclarations());
                }
                else if (node instanceof nodes.Keyframe) {
                    const name = l10n.t("@keyframes {0}", node.getName());
                    collect(name, cssLanguageTypes_1.SymbolKind.Class, node, node.getIdentifier(), node.getDeclarations());
                }
                else if (node instanceof nodes.FontFace) {
                    const name = l10n.t("@font-face");
                    collect(name, cssLanguageTypes_1.SymbolKind.Class, node, undefined, node.getDeclarations());
                }
                else if (node instanceof nodes.Media) {
                    const mediaList = node.getChild(0);
                    if (mediaList instanceof nodes.Medialist) {
                        const name = '@media ' + mediaList.getText();
                        collect(name, cssLanguageTypes_1.SymbolKind.Module, node, mediaList, node.getDeclarations());
                    }
                }
                else if (node instanceof nodes.Scope) {
                    let scopeName = '';
                    const scopeLimits = node.getChild(0);
                    if (scopeLimits instanceof nodes.ScopeLimits) {
                        scopeName = `${scopeLimits.getName()}`;
                    }
                    collect(`@scope${scopeName ? ` ${scopeName}` : ''}`, cssLanguageTypes_1.SymbolKind.Module, node, scopeLimits ?? undefined, node.getDeclarations());
                }
                return true;
            });
        }
        findDocumentColors(document, stylesheet) {
            const result = [];
            stylesheet.accept((node) => {
                const colorInfo = getColorInformation(node, document);
                if (colorInfo) {
                    result.push(colorInfo);
                }
                return true;
            });
            return result;
        }
        getColorPresentations(document, stylesheet, color, range) {
            const result = [];
            const red256 = Math.round(color.red * 255), green256 = Math.round(color.green * 255), blue256 = Math.round(color.blue * 255);
            let label;
            if (color.alpha === 1) {
                label = `rgb(${red256}, ${green256}, ${blue256})`;
            }
            else {
                label = `rgba(${red256}, ${green256}, ${blue256}, ${color.alpha})`;
            }
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            if (color.alpha === 1) {
                label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}`;
            }
            else {
                label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}${toTwoDigitHex(Math.round(color.alpha * 255))}`;
            }
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            const hsl = (0, facts_1.hslFromColor)(color);
            if (hsl.a === 1) {
                label = `hsl(${hsl.h}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
            }
            else {
                label = `hsla(${hsl.h}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%, ${hsl.a})`;
            }
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            const hwb = (0, facts_1.hwbFromColor)(color);
            if (hwb.a === 1) {
                label = `hwb(${hwb.h} ${Math.round(hwb.w * 100)}% ${Math.round(hwb.b * 100)}%)`;
            }
            else {
                label = `hwb(${hwb.h} ${Math.round(hwb.w * 100)}% ${Math.round(hwb.b * 100)}% / ${hwb.a})`;
            }
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            const lab = (0, facts_1.labFromColor)(color);
            if (lab.alpha === 1) {
                label = `lab(${lab.l}% ${lab.a} ${lab.b})`;
            }
            else {
                label = `lab(${lab.l}% ${lab.a} ${lab.b} / ${lab.alpha})`;
            }
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            const lch = (0, facts_1.lchFromColor)(color);
            if (lch.alpha === 1) {
                label = `lch(${lch.l}% ${lch.c} ${lch.h})`;
            }
            else {
                label = `lch(${lch.l}% ${lch.c} ${lch.h} / ${lch.alpha})`;
            }
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            const oklab = (0, facts_1.oklabFromColor)(color);
            label = (oklab.alpha === 1) ? `oklab(${oklab.l}% ${oklab.a} ${oklab.b})` : `oklab(${oklab.l}% ${oklab.a} ${oklab.b} / ${oklab.alpha})`;
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            const oklch = (0, facts_1.oklchFromColor)(color);
            label = (oklch.alpha === 1) ? `oklch(${oklch.l}% ${oklch.c} ${oklch.h})` : `oklch(${oklch.l}% ${oklch.c} ${oklch.h} / ${oklch.alpha})`;
            result.push({ label: label, textEdit: cssLanguageTypes_1.TextEdit.replace(range, label) });
            return result;
        }
        prepareRename(document, position, stylesheet) {
            const node = this.getHighlightNode(document, position, stylesheet);
            if (node) {
                return cssLanguageTypes_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
            }
        }
        doRename(document, position, newName, stylesheet) {
            const highlights = this.findDocumentHighlights(document, position, stylesheet);
            const edits = highlights.map(h => cssLanguageTypes_1.TextEdit.replace(h.range, newName));
            return {
                changes: { [document.uri]: edits }
            };
        }
        async resolveModuleReference(ref, documentUri, documentContext) {
            if ((0, strings_1.startsWith)(documentUri, 'file://')) {
                const moduleName = getModuleNameFromPath(ref);
                if (moduleName && moduleName !== '.' && moduleName !== '..') {
                    const rootFolderUri = documentContext.resolveReference('/', documentUri);
                    const documentFolderUri = (0, resources_1.dirname)(documentUri);
                    const modulePath = await this.resolvePathToModule(moduleName, documentFolderUri, rootFolderUri);
                    if (modulePath) {
                        const pathWithinModule = ref.substring(moduleName.length + 1);
                        return (0, resources_1.joinPath)(modulePath, pathWithinModule);
                    }
                }
            }
            return undefined;
        }
        async mapReference(target, isRawLink) {
            return target;
        }
        async resolveReference(target, documentUri, documentContext, isRawLink = false, settings = this.defaultSettings) {
            // Following [css-loader](https://github.com/webpack-contrib/css-loader#url)
            // and [sass-loader's](https://github.com/webpack-contrib/sass-loader#imports)
            // convention, if an import path starts with ~ then use node module resolution
            // *unless* it starts with "~/" as this refers to the user's home directory.
            if (target[0] === '~' && target[1] !== '/' && this.fileSystemProvider) {
                target = target.substring(1);
                return this.mapReference(await this.resolveModuleReference(target, documentUri, documentContext), isRawLink);
            }
            const ref = await this.mapReference(documentContext.resolveReference(target, documentUri), isRawLink);
            // Following [less-loader](https://github.com/webpack-contrib/less-loader#imports)
            // and [sass-loader's](https://github.com/webpack-contrib/sass-loader#resolving-import-at-rules)
            // new resolving import at-rules (~ is deprecated). The loader will first try to resolve @import as a relative path. If it cannot be resolved,
            // then the loader will try to resolve @import inside node_modules.
            if (this.resolveModuleReferences) {
                if (ref && await this.fileExists(ref)) {
                    return ref;
                }
                const moduleReference = await this.mapReference(await this.resolveModuleReference(target, documentUri, documentContext), isRawLink);
                if (moduleReference) {
                    return moduleReference;
                }
            }
            // Try resolving the reference from the language configuration alias settings
            if (ref && !(await this.fileExists(ref))) {
                const rootFolderUri = documentContext.resolveReference('/', documentUri);
                if (settings && rootFolderUri) {
                    // Specific file reference
                    if (target in settings) {
                        return this.mapReference((0, resources_1.joinPath)(rootFolderUri, settings[target]), isRawLink);
                    }
                    // Reference folder
                    const firstSlash = target.indexOf('/');
                    const prefix = `${target.substring(0, firstSlash)}/`;
                    if (prefix in settings) {
                        const aliasPath = (settings[prefix]).slice(0, -1);
                        let newPath = (0, resources_1.joinPath)(rootFolderUri, aliasPath);
                        return this.mapReference(newPath = (0, resources_1.joinPath)(newPath, target.substring(prefix.length - 1)), isRawLink);
                    }
                }
            }
            // fall back. it might not exists
            return ref;
        }
        async resolvePathToModule(_moduleName, documentFolderUri, rootFolderUri) {
            // resolve the module relative to the document. We can't use `require` here as the code is webpacked.
            const packPath = (0, resources_1.joinPath)(documentFolderUri, 'node_modules', _moduleName, 'package.json');
            if (await this.fileExists(packPath)) {
                return (0, resources_1.dirname)(packPath);
            }
            else if (rootFolderUri && documentFolderUri.startsWith(rootFolderUri) && (documentFolderUri.length !== rootFolderUri.length)) {
                return this.resolvePathToModule(_moduleName, (0, resources_1.dirname)(documentFolderUri), rootFolderUri);
            }
            return undefined;
        }
        async fileExists(uri) {
            if (!this.fileSystemProvider) {
                return false;
            }
            try {
                const stat = await this.fileSystemProvider.stat(uri);
                if (stat.type === cssLanguageTypes_1.FileType.Unknown && stat.size === -1) {
                    return false;
                }
                return true;
            }
            catch (err) {
                return false;
            }
        }
        async getContent(uri) {
            if (!this.fileSystemProvider || !this.fileSystemProvider.getContent) {
                return null;
            }
            try {
                return await this.fileSystemProvider.getContent(uri);
            }
            catch (err) {
                return null;
            }
        }
    }
    exports.CSSNavigation = CSSNavigation;
    function getColorInformation(node, document) {
        const color = (0, facts_1.getColorValue)(node);
        if (color) {
            const range = getRange(node, document);
            return { color, range };
        }
        return null;
    }
    function getRange(node, document) {
        return cssLanguageTypes_1.Range.create(document.positionAt(node.offset), document.positionAt(node.end));
    }
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */
    function containsRange(range, otherRange) {
        const otherStartLine = otherRange.start.line, otherEndLine = otherRange.end.line;
        const rangeStartLine = range.start.line, rangeEndLine = range.end.line;
        if (otherStartLine < rangeStartLine || otherEndLine < rangeStartLine) {
            return false;
        }
        if (otherStartLine > rangeEndLine || otherEndLine > rangeEndLine) {
            return false;
        }
        if (otherStartLine === rangeStartLine && otherRange.start.character < range.start.character) {
            return false;
        }
        if (otherEndLine === rangeEndLine && otherRange.end.character > range.end.character) {
            return false;
        }
        return true;
    }
    function getHighlightKind(node) {
        if (node.type === nodes.NodeType.Selector) {
            return cssLanguageTypes_1.DocumentHighlightKind.Write;
        }
        if (node instanceof nodes.Identifier) {
            if (node.parent && node.parent instanceof nodes.Property) {
                if (node.isCustomProperty) {
                    return cssLanguageTypes_1.DocumentHighlightKind.Write;
                }
            }
        }
        if (node.parent) {
            switch (node.parent.type) {
                case nodes.NodeType.FunctionDeclaration:
                case nodes.NodeType.MixinDeclaration:
                case nodes.NodeType.Keyframe:
                case nodes.NodeType.VariableDeclaration:
                case nodes.NodeType.FunctionParameter:
                    return cssLanguageTypes_1.DocumentHighlightKind.Write;
            }
        }
        return cssLanguageTypes_1.DocumentHighlightKind.Read;
    }
    function toTwoDigitHex(n) {
        const r = n.toString(16);
        return r.length !== 2 ? '0' + r : r;
    }
    function getModuleNameFromPath(path) {
        const firstSlash = path.indexOf('/');
        if (firstSlash === -1) {
            return '';
        }
        // If a scoped module (starts with @) then get up until second instance of '/', or to the end of the string for root-level imports.
        if (path[0] === '@') {
            const secondSlash = path.indexOf('/', firstSlash + 1);
            if (secondSlash === -1) {
                return path;
            }
            return path.substring(0, secondSlash);
        }
        // Otherwise get until first instance of '/'
        return path.substring(0, firstSlash);
    }
});
