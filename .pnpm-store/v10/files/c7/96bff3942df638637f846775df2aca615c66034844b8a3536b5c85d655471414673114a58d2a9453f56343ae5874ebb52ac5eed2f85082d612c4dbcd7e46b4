(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../parser/cssNodes", "../parser/cssSymbolScope", "../languageFacts/facts", "../utils/strings", "../cssLanguageTypes", "@vscode/l10n", "../utils/objects", "./pathCompletion"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSCompletion = void 0;
    const nodes = require("../parser/cssNodes");
    const cssSymbolScope_1 = require("../parser/cssSymbolScope");
    const languageFacts = require("../languageFacts/facts");
    const strings = require("../utils/strings");
    const cssLanguageTypes_1 = require("../cssLanguageTypes");
    const l10n = require("@vscode/l10n");
    const objects_1 = require("../utils/objects");
    const pathCompletion_1 = require("./pathCompletion");
    const SnippetFormat = cssLanguageTypes_1.InsertTextFormat.Snippet;
    const retriggerCommand = {
        title: 'Suggest',
        command: 'editor.action.triggerSuggest'
    };
    var SortTexts;
    (function (SortTexts) {
        // char code 32, comes before everything
        SortTexts["Enums"] = " ";
        SortTexts["Normal"] = "d";
        SortTexts["VendorPrefixed"] = "x";
        SortTexts["Term"] = "y";
        SortTexts["Variable"] = "z";
    })(SortTexts || (SortTexts = {}));
    class CSSCompletion {
        constructor(variablePrefix = null, lsOptions, cssDataManager) {
            this.variablePrefix = variablePrefix;
            this.lsOptions = lsOptions;
            this.cssDataManager = cssDataManager;
            this.completionParticipants = [];
        }
        configure(settings) {
            this.defaultSettings = settings;
        }
        getSymbolContext() {
            if (!this.symbolContext) {
                this.symbolContext = new cssSymbolScope_1.Symbols(this.styleSheet);
            }
            return this.symbolContext;
        }
        setCompletionParticipants(registeredCompletionParticipants) {
            this.completionParticipants = registeredCompletionParticipants || [];
        }
        async doComplete2(document, position, styleSheet, documentContext, completionSettings = this.defaultSettings) {
            if (!this.lsOptions.fileSystemProvider || !this.lsOptions.fileSystemProvider.readDirectory) {
                return this.doComplete(document, position, styleSheet, completionSettings);
            }
            const participant = new pathCompletion_1.PathCompletionParticipant(this.lsOptions.fileSystemProvider.readDirectory);
            const contributedParticipants = this.completionParticipants;
            this.completionParticipants = [participant].concat(contributedParticipants);
            const result = this.doComplete(document, position, styleSheet, completionSettings);
            try {
                const pathCompletionResult = await participant.computeCompletions(document, documentContext);
                return {
                    isIncomplete: result.isIncomplete || pathCompletionResult.isIncomplete,
                    itemDefaults: result.itemDefaults,
                    items: pathCompletionResult.items.concat(result.items)
                };
            }
            finally {
                this.completionParticipants = contributedParticipants;
            }
        }
        doComplete(document, position, styleSheet, documentSettings) {
            this.offset = document.offsetAt(position);
            this.position = position;
            this.currentWord = getCurrentWord(document, this.offset);
            this.defaultReplaceRange = cssLanguageTypes_1.Range.create(cssLanguageTypes_1.Position.create(this.position.line, this.position.character - this.currentWord.length), this.position);
            this.textDocument = document;
            this.styleSheet = styleSheet;
            this.documentSettings = documentSettings;
            try {
                const result = {
                    isIncomplete: false,
                    itemDefaults: {
                        editRange: {
                            start: { line: position.line, character: position.character - this.currentWord.length },
                            end: position
                        }
                    },
                    items: []
                };
                this.nodePath = nodes.getNodePath(this.styleSheet, this.offset);
                for (let i = this.nodePath.length - 1; i >= 0; i--) {
                    const node = this.nodePath[i];
                    if (node instanceof nodes.Property) {
                        this.getCompletionsForDeclarationProperty(node.getParent(), result);
                    }
                    else if (node instanceof nodes.Expression) {
                        if (node.parent instanceof nodes.Interpolation) {
                            this.getVariableProposals(null, result);
                        }
                        else {
                            this.getCompletionsForExpression(node, result);
                        }
                    }
                    else if (node instanceof nodes.SimpleSelector) {
                        const parentRef = node.findAParent(nodes.NodeType.ExtendsReference, nodes.NodeType.Ruleset);
                        if (parentRef) {
                            if (parentRef.type === nodes.NodeType.ExtendsReference) {
                                this.getCompletionsForExtendsReference(parentRef, node, result);
                            }
                            else {
                                const parentRuleSet = parentRef;
                                this.getCompletionsForSelector(parentRuleSet, parentRuleSet && parentRuleSet.isNested(), result);
                            }
                        }
                    }
                    else if (node instanceof nodes.FunctionArgument) {
                        this.getCompletionsForFunctionArgument(node, node.getParent(), result);
                    }
                    else if (node instanceof nodes.Declarations) {
                        this.getCompletionsForDeclarations(node, result);
                    }
                    else if (node instanceof nodes.VariableDeclaration) {
                        this.getCompletionsForVariableDeclaration(node, result);
                    }
                    else if (node instanceof nodes.RuleSet) {
                        this.getCompletionsForRuleSet(node, result);
                    }
                    else if (node instanceof nodes.Interpolation) {
                        this.getCompletionsForInterpolation(node, result);
                    }
                    else if (node instanceof nodes.FunctionDeclaration) {
                        this.getCompletionsForFunctionDeclaration(node, result);
                    }
                    else if (node instanceof nodes.MixinReference) {
                        this.getCompletionsForMixinReference(node, result);
                    }
                    else if (node instanceof nodes.Function) {
                        this.getCompletionsForFunctionArgument(null, node, result);
                    }
                    else if (node instanceof nodes.Supports) {
                        this.getCompletionsForSupports(node, result);
                    }
                    else if (node instanceof nodes.SupportsCondition) {
                        this.getCompletionsForSupportsCondition(node, result);
                    }
                    else if (node instanceof nodes.MediaCondition) {
                        this.getCompletionsForMediaCondition(node, result);
                    }
                    else if (node instanceof nodes.ExtendsReference) {
                        this.getCompletionsForExtendsReference(node, null, result);
                    }
                    else if (node.type === nodes.NodeType.URILiteral) {
                        this.getCompletionForUriLiteralValue(node, result);
                    }
                    else if (node.parent === null) {
                        this.getCompletionForTopLevel(result);
                    }
                    else if (node.type === nodes.NodeType.StringLiteral && this.isImportPathParent(node.parent.type)) {
                        this.getCompletionForImportPath(node, result);
                        // } else if (node instanceof nodes.Variable) {
                        // this.getCompletionsForVariableDeclaration()
                    }
                    else {
                        continue;
                    }
                    if (result.items.length > 0 || this.offset > node.offset) {
                        return this.finalize(result);
                    }
                }
                this.getCompletionsForStylesheet(result);
                if (result.items.length === 0) {
                    if (this.variablePrefix && this.currentWord.indexOf(this.variablePrefix) === 0) {
                        this.getVariableProposals(null, result);
                    }
                }
                return this.finalize(result);
            }
            finally {
                // don't hold on any state, clear symbolContext
                this.position = null;
                this.currentWord = null;
                this.textDocument = null;
                this.styleSheet = null;
                this.symbolContext = null;
                this.defaultReplaceRange = null;
                this.nodePath = null;
            }
        }
        isImportPathParent(type) {
            return type === nodes.NodeType.Import;
        }
        finalize(result) {
            return result;
        }
        findInNodePath(...types) {
            for (let i = this.nodePath.length - 1; i >= 0; i--) {
                const node = this.nodePath[i];
                if (types.indexOf(node.type) !== -1) {
                    return node;
                }
            }
            return null;
        }
        getCompletionsForDeclarationProperty(declaration, result) {
            return this.getPropertyProposals(declaration, result);
        }
        getPropertyProposals(declaration, result) {
            const triggerPropertyValueCompletion = this.isTriggerPropertyValueCompletionEnabled;
            const completePropertyWithSemicolon = this.isCompletePropertyWithSemicolonEnabled;
            const properties = this.cssDataManager.getProperties();
            properties.forEach(entry => {
                let range;
                let insertText;
                let retrigger = false;
                if (declaration) {
                    range = this.getCompletionRange(declaration.getProperty());
                    insertText = entry.name;
                    if (!(0, objects_1.isDefined)(declaration.colonPosition)) {
                        insertText += ': ';
                        retrigger = true;
                    }
                }
                else {
                    range = this.getCompletionRange(null);
                    insertText = entry.name + ': ';
                    retrigger = true;
                }
                // Empty .selector { | } case
                if (!declaration && completePropertyWithSemicolon) {
                    insertText += '$0;';
                }
                // Cases such as .selector { p; } or .selector { p:; }
                if (declaration && !declaration.semicolonPosition) {
                    if (completePropertyWithSemicolon && this.offset >= this.textDocument.offsetAt(range.end)) {
                        insertText += '$0;';
                    }
                }
                const item = {
                    label: entry.name,
                    documentation: languageFacts.getEntryDescription(entry, this.doesSupportMarkdown()),
                    tags: isDeprecated(entry) ? [cssLanguageTypes_1.CompletionItemTag.Deprecated] : [],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(range, insertText),
                    insertTextFormat: cssLanguageTypes_1.InsertTextFormat.Snippet,
                    kind: cssLanguageTypes_1.CompletionItemKind.Property
                };
                if (triggerPropertyValueCompletion && retrigger) {
                    item.command = retriggerCommand;
                }
                const relevance = typeof entry.relevance === 'number' ? Math.min(Math.max(entry.relevance, 0), 99) : 50;
                const sortTextSuffix = (255 - relevance).toString(16);
                const sortTextPrefix = strings.startsWith(entry.name, '-') ? SortTexts.VendorPrefixed : SortTexts.Normal;
                item.sortText = sortTextPrefix + '_' + sortTextSuffix;
                result.items.push(item);
            });
            this.completionParticipants.forEach(participant => {
                if (participant.onCssProperty) {
                    participant.onCssProperty({
                        propertyName: this.currentWord,
                        range: this.defaultReplaceRange
                    });
                }
            });
            return result;
        }
        get isTriggerPropertyValueCompletionEnabled() {
            return this.documentSettings?.triggerPropertyValueCompletion ?? true;
        }
        get isCompletePropertyWithSemicolonEnabled() {
            return this.documentSettings?.completePropertyWithSemicolon ?? true;
        }
        getCompletionsForDeclarationValue(node, result) {
            const propertyName = node.getFullPropertyName();
            const entry = this.cssDataManager.getProperty(propertyName);
            let existingNode = node.getValue() || null;
            while (existingNode && existingNode.hasChildren()) {
                existingNode = existingNode.findChildAtOffset(this.offset, false);
            }
            this.completionParticipants.forEach(participant => {
                if (participant.onCssPropertyValue) {
                    participant.onCssPropertyValue({
                        propertyName,
                        propertyValue: this.currentWord,
                        range: this.getCompletionRange(existingNode)
                    });
                }
            });
            if (entry) {
                if (entry.restrictions) {
                    for (const restriction of entry.restrictions) {
                        switch (restriction) {
                            case 'color':
                                this.getColorProposals(entry, existingNode, result);
                                break;
                            case 'position':
                                this.getPositionProposals(entry, existingNode, result);
                                break;
                            case 'repeat':
                                this.getRepeatStyleProposals(entry, existingNode, result);
                                break;
                            case 'line-style':
                                this.getLineStyleProposals(entry, existingNode, result);
                                break;
                            case 'line-width':
                                this.getLineWidthProposals(entry, existingNode, result);
                                break;
                            case 'geometry-box':
                                this.getGeometryBoxProposals(entry, existingNode, result);
                                break;
                            case 'box':
                                this.getBoxProposals(entry, existingNode, result);
                                break;
                            case 'image':
                                this.getImageProposals(entry, existingNode, result);
                                break;
                            case 'timing-function':
                                this.getTimingFunctionProposals(entry, existingNode, result);
                                break;
                            case 'shape':
                                this.getBasicShapeProposals(entry, existingNode, result);
                                break;
                        }
                    }
                }
                this.getValueEnumProposals(entry, existingNode, result);
                this.getCSSWideKeywordProposals(entry, existingNode, result);
                this.getUnitProposals(entry, existingNode, result);
            }
            else {
                const existingValues = collectValues(this.styleSheet, node);
                for (const existingValue of existingValues.getEntries()) {
                    result.items.push({
                        label: existingValue,
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), existingValue),
                        kind: cssLanguageTypes_1.CompletionItemKind.Value
                    });
                }
            }
            this.getVariableProposals(existingNode, result);
            this.getTermProposals(entry, existingNode, result);
            return result;
        }
        getValueEnumProposals(entry, existingNode, result) {
            if (entry.values) {
                for (const value of entry.values) {
                    let insertString = value.name;
                    let insertTextFormat;
                    if (strings.endsWith(insertString, ')')) {
                        const from = insertString.lastIndexOf('(');
                        if (from !== -1) {
                            insertString = insertString.substring(0, from + 1) + '$1' + insertString.substring(from + 1);
                            insertTextFormat = SnippetFormat;
                        }
                    }
                    let sortText = SortTexts.Enums;
                    if (strings.startsWith(value.name, '-')) {
                        sortText += SortTexts.VendorPrefixed;
                    }
                    const item = {
                        label: value.name,
                        documentation: languageFacts.getEntryDescription(value, this.doesSupportMarkdown()),
                        tags: isDeprecated(entry) ? [cssLanguageTypes_1.CompletionItemTag.Deprecated] : [],
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertString),
                        sortText,
                        kind: cssLanguageTypes_1.CompletionItemKind.Value,
                        insertTextFormat
                    };
                    result.items.push(item);
                }
            }
            return result;
        }
        getCSSWideKeywordProposals(entry, existingNode, result) {
            for (const keywords in languageFacts.cssWideKeywords) {
                result.items.push({
                    label: keywords,
                    documentation: languageFacts.cssWideKeywords[keywords],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), keywords),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            for (const func in languageFacts.cssWideFunctions) {
                const insertText = moveCursorInsideParenthesis(func);
                result.items.push({
                    label: func,
                    documentation: languageFacts.cssWideFunctions[func],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                    insertTextFormat: SnippetFormat,
                    command: strings.startsWith(func, 'var') ? retriggerCommand : undefined
                });
            }
            return result;
        }
        getCompletionsForInterpolation(node, result) {
            if (this.offset >= node.offset + 2) {
                this.getVariableProposals(null, result);
            }
            return result;
        }
        getVariableProposals(existingNode, result) {
            const symbols = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Variable);
            for (const symbol of symbols) {
                const insertText = strings.startsWith(symbol.name, '--') ? `var(${symbol.name})` : symbol.name;
                const completionItem = {
                    label: symbol.name,
                    documentation: symbol.value ? strings.getLimitedString(symbol.value) : symbol.value,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    kind: cssLanguageTypes_1.CompletionItemKind.Variable,
                    sortText: SortTexts.Variable
                };
                if (typeof completionItem.documentation === 'string' && languageFacts.isColorString(completionItem.documentation)) {
                    completionItem.kind = cssLanguageTypes_1.CompletionItemKind.Color;
                }
                if (symbol.node.type === nodes.NodeType.FunctionParameter) {
                    const mixinNode = (symbol.node.getParent());
                    if (mixinNode.type === nodes.NodeType.MixinDeclaration) {
                        completionItem.detail = l10n.t('argument from \'{0}\'', mixinNode.getName());
                    }
                }
                result.items.push(completionItem);
            }
            return result;
        }
        getVariableProposalsForCSSVarFunction(result) {
            const allReferencedVariables = new Set();
            this.styleSheet.acceptVisitor(new VariableCollector(allReferencedVariables, this.offset));
            let symbols = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Variable);
            for (const symbol of symbols) {
                if (strings.startsWith(symbol.name, '--')) {
                    const completionItem = {
                        label: symbol.name,
                        documentation: symbol.value ? strings.getLimitedString(symbol.value) : symbol.value,
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(null), symbol.name),
                        kind: cssLanguageTypes_1.CompletionItemKind.Variable
                    };
                    if (typeof completionItem.documentation === 'string' && languageFacts.isColorString(completionItem.documentation)) {
                        completionItem.kind = cssLanguageTypes_1.CompletionItemKind.Color;
                    }
                    result.items.push(completionItem);
                }
                allReferencedVariables.remove(symbol.name);
            }
            for (const name of allReferencedVariables.getEntries()) {
                if (strings.startsWith(name, '--')) {
                    const completionItem = {
                        label: name,
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(null), name),
                        kind: cssLanguageTypes_1.CompletionItemKind.Variable
                    };
                    result.items.push(completionItem);
                }
            }
            return result;
        }
        getUnitProposals(entry, existingNode, result) {
            let currentWord = '0';
            if (this.currentWord.length > 0) {
                const numMatch = this.currentWord.match(/^-?\d[\.\d+]*/);
                if (numMatch) {
                    currentWord = numMatch[0];
                    result.isIncomplete = currentWord.length === this.currentWord.length;
                }
            }
            else if (this.currentWord.length === 0) {
                result.isIncomplete = true;
            }
            if (existingNode && existingNode.parent && existingNode.parent.type === nodes.NodeType.Term) {
                existingNode = existingNode.getParent(); // include the unary operator
            }
            if (entry.restrictions) {
                for (const restriction of entry.restrictions) {
                    const units = languageFacts.units[restriction];
                    if (units) {
                        for (const unit of units) {
                            const insertText = currentWord + unit;
                            result.items.push({
                                label: insertText,
                                textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                                kind: cssLanguageTypes_1.CompletionItemKind.Unit
                            });
                        }
                    }
                }
            }
            return result;
        }
        getCompletionRange(existingNode) {
            if (existingNode && existingNode.offset <= this.offset && this.offset <= existingNode.end) {
                const end = existingNode.end !== -1 ? this.textDocument.positionAt(existingNode.end) : this.position;
                const start = this.textDocument.positionAt(existingNode.offset);
                if (start.line === end.line) {
                    return cssLanguageTypes_1.Range.create(start, end); // multi line edits are not allowed
                }
            }
            return this.defaultReplaceRange;
        }
        getColorProposals(entry, existingNode, result) {
            for (const color in languageFacts.colors) {
                result.items.push({
                    label: color,
                    documentation: languageFacts.colors[color],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), color),
                    kind: cssLanguageTypes_1.CompletionItemKind.Color
                });
            }
            for (const color in languageFacts.colorKeywords) {
                result.items.push({
                    label: color,
                    documentation: languageFacts.colorKeywords[color],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), color),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            const colorValues = new Set();
            this.styleSheet.acceptVisitor(new ColorValueCollector(colorValues, this.offset));
            for (const color of colorValues.getEntries()) {
                result.items.push({
                    label: color,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), color),
                    kind: cssLanguageTypes_1.CompletionItemKind.Color
                });
            }
            for (const p of languageFacts.colorFunctions) {
                result.items.push({
                    label: p.label,
                    detail: p.func,
                    documentation: p.desc,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), p.insertText),
                    insertTextFormat: SnippetFormat,
                    kind: cssLanguageTypes_1.CompletionItemKind.Function
                });
            }
            return result;
        }
        getPositionProposals(entry, existingNode, result) {
            for (const position in languageFacts.positionKeywords) {
                result.items.push({
                    label: position,
                    documentation: languageFacts.positionKeywords[position],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), position),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            return result;
        }
        getRepeatStyleProposals(entry, existingNode, result) {
            for (const repeat in languageFacts.repeatStyleKeywords) {
                result.items.push({
                    label: repeat,
                    documentation: languageFacts.repeatStyleKeywords[repeat],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), repeat),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            return result;
        }
        getLineStyleProposals(entry, existingNode, result) {
            for (const lineStyle in languageFacts.lineStyleKeywords) {
                result.items.push({
                    label: lineStyle,
                    documentation: languageFacts.lineStyleKeywords[lineStyle],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), lineStyle),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            return result;
        }
        getLineWidthProposals(entry, existingNode, result) {
            for (const lineWidth of languageFacts.lineWidthKeywords) {
                result.items.push({
                    label: lineWidth,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), lineWidth),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            return result;
        }
        getGeometryBoxProposals(entry, existingNode, result) {
            for (const box in languageFacts.geometryBoxKeywords) {
                result.items.push({
                    label: box,
                    documentation: languageFacts.geometryBoxKeywords[box],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), box),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            return result;
        }
        getBoxProposals(entry, existingNode, result) {
            for (const box in languageFacts.boxKeywords) {
                result.items.push({
                    label: box,
                    documentation: languageFacts.boxKeywords[box],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), box),
                    kind: cssLanguageTypes_1.CompletionItemKind.Value
                });
            }
            return result;
        }
        getImageProposals(entry, existingNode, result) {
            for (const image in languageFacts.imageFunctions) {
                const insertText = moveCursorInsideParenthesis(image);
                result.items.push({
                    label: image,
                    documentation: languageFacts.imageFunctions[image],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                    insertTextFormat: image !== insertText ? SnippetFormat : void 0
                });
            }
            return result;
        }
        getTimingFunctionProposals(entry, existingNode, result) {
            for (const timing in languageFacts.transitionTimingFunctions) {
                const insertText = moveCursorInsideParenthesis(timing);
                result.items.push({
                    label: timing,
                    documentation: languageFacts.transitionTimingFunctions[timing],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                    insertTextFormat: timing !== insertText ? SnippetFormat : void 0
                });
            }
            return result;
        }
        getBasicShapeProposals(entry, existingNode, result) {
            for (const shape in languageFacts.basicShapeFunctions) {
                const insertText = moveCursorInsideParenthesis(shape);
                result.items.push({
                    label: shape,
                    documentation: languageFacts.basicShapeFunctions[shape],
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                    insertTextFormat: shape !== insertText ? SnippetFormat : void 0
                });
            }
            return result;
        }
        getCompletionsForStylesheet(result) {
            const node = this.styleSheet.findFirstChildBeforeOffset(this.offset);
            if (!node) {
                return this.getCompletionForTopLevel(result);
            }
            if (node instanceof nodes.RuleSet) {
                return this.getCompletionsForRuleSet(node, result);
            }
            if (node instanceof nodes.Supports) {
                return this.getCompletionsForSupports(node, result);
            }
            return result;
        }
        getCompletionForTopLevel(result) {
            this.cssDataManager.getAtDirectives().forEach(entry => {
                result.items.push({
                    label: entry.name,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(null), entry.name),
                    documentation: languageFacts.getEntryDescription(entry, this.doesSupportMarkdown()),
                    tags: isDeprecated(entry) ? [cssLanguageTypes_1.CompletionItemTag.Deprecated] : [],
                    kind: cssLanguageTypes_1.CompletionItemKind.Keyword
                });
            });
            this.getCompletionsForSelector(null, false, result);
            return result;
        }
        getCompletionsForRuleSet(ruleSet, result) {
            const declarations = ruleSet.getDeclarations();
            const isAfter = declarations && declarations.endsWith('}') && this.offset >= declarations.end;
            if (isAfter) {
                return this.getCompletionForTopLevel(result);
            }
            const isInSelectors = !declarations || this.offset <= declarations.offset;
            if (isInSelectors) {
                return this.getCompletionsForSelector(ruleSet, ruleSet.isNested(), result);
            }
            return this.getCompletionsForDeclarations(ruleSet.getDeclarations(), result);
        }
        getCompletionsForSelector(ruleSet, isNested, result) {
            const existingNode = this.findInNodePath(nodes.NodeType.PseudoSelector, nodes.NodeType.IdentifierSelector, nodes.NodeType.ClassSelector, nodes.NodeType.ElementNameSelector);
            if (!existingNode && this.hasCharacterAtPosition(this.offset - this.currentWord.length - 1, ':')) {
                // after the ':' of a pseudo selector, no node generated for just ':'
                this.currentWord = ':' + this.currentWord;
                if (this.hasCharacterAtPosition(this.offset - this.currentWord.length - 1, ':')) {
                    this.currentWord = ':' + this.currentWord; // for '::'
                }
                this.defaultReplaceRange = cssLanguageTypes_1.Range.create(cssLanguageTypes_1.Position.create(this.position.line, this.position.character - this.currentWord.length), this.position);
            }
            const pseudoClasses = this.cssDataManager.getPseudoClasses();
            pseudoClasses.forEach(entry => {
                const insertText = moveCursorInsideParenthesis(entry.name);
                const item = {
                    label: entry.name,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    documentation: languageFacts.getEntryDescription(entry, this.doesSupportMarkdown()),
                    tags: isDeprecated(entry) ? [cssLanguageTypes_1.CompletionItemTag.Deprecated] : [],
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                    insertTextFormat: entry.name !== insertText ? SnippetFormat : void 0
                };
                if (strings.startsWith(entry.name, ':-')) {
                    item.sortText = SortTexts.VendorPrefixed;
                }
                result.items.push(item);
            });
            const pseudoElements = this.cssDataManager.getPseudoElements();
            pseudoElements.forEach(entry => {
                const insertText = moveCursorInsideParenthesis(entry.name);
                const item = {
                    label: entry.name,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                    documentation: languageFacts.getEntryDescription(entry, this.doesSupportMarkdown()),
                    tags: isDeprecated(entry) ? [cssLanguageTypes_1.CompletionItemTag.Deprecated] : [],
                    kind: cssLanguageTypes_1.CompletionItemKind.Function,
                    insertTextFormat: entry.name !== insertText ? SnippetFormat : void 0
                };
                if (strings.startsWith(entry.name, '::-')) {
                    item.sortText = SortTexts.VendorPrefixed;
                }
                result.items.push(item);
            });
            if (!isNested) { // show html tags only for top level
                for (const entry of languageFacts.html5Tags) {
                    result.items.push({
                        label: entry,
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), entry),
                        kind: cssLanguageTypes_1.CompletionItemKind.Keyword
                    });
                }
                for (const entry of languageFacts.svgElements) {
                    result.items.push({
                        label: entry,
                        textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), entry),
                        kind: cssLanguageTypes_1.CompletionItemKind.Keyword
                    });
                }
            }
            const visited = {};
            visited[this.currentWord] = true;
            const docText = this.textDocument.getText();
            this.styleSheet.accept(n => {
                if (n.type === nodes.NodeType.SimpleSelector && n.length > 0) {
                    const selector = docText.substr(n.offset, n.length);
                    if (selector.charAt(0) === '.' && !visited[selector]) {
                        visited[selector] = true;
                        result.items.push({
                            label: selector,
                            textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), selector),
                            kind: cssLanguageTypes_1.CompletionItemKind.Keyword
                        });
                    }
                    return false;
                }
                return true;
            });
            if (ruleSet && ruleSet.isNested()) {
                const selector = ruleSet.getSelectors().findFirstChildBeforeOffset(this.offset);
                if (selector && ruleSet.getSelectors().getChildren().indexOf(selector) === 0) {
                    this.getPropertyProposals(null, result);
                }
            }
            return result;
        }
        getCompletionsForDeclarations(declarations, result) {
            if (!declarations || this.offset === declarations.offset) { // incomplete nodes
                return result;
            }
            const node = declarations.findFirstChildBeforeOffset(this.offset);
            if (!node) {
                return this.getCompletionsForDeclarationProperty(null, result);
            }
            if (node instanceof nodes.AbstractDeclaration) {
                const declaration = node;
                if (!(0, objects_1.isDefined)(declaration.colonPosition) || this.offset <= declaration.colonPosition) {
                    // complete property
                    return this.getCompletionsForDeclarationProperty(declaration, result);
                }
                else if (((0, objects_1.isDefined)(declaration.semicolonPosition) && declaration.semicolonPosition < this.offset)) {
                    if (this.offset === declaration.semicolonPosition + 1) {
                        return result; // don't show new properties right after semicolon (see Bug 15421:[intellisense] [css] Be less aggressive when manually typing CSS)
                    }
                    // complete next property
                    return this.getCompletionsForDeclarationProperty(null, result);
                }
                if (declaration instanceof nodes.Declaration) {
                    // complete value
                    return this.getCompletionsForDeclarationValue(declaration, result);
                }
            }
            else if (node instanceof nodes.ExtendsReference) {
                this.getCompletionsForExtendsReference(node, null, result);
            }
            else if (this.currentWord && this.currentWord[0] === '@') {
                this.getCompletionsForDeclarationProperty(null, result);
            }
            else if (node instanceof nodes.RuleSet) {
                this.getCompletionsForDeclarationProperty(null, result);
            }
            return result;
        }
        getCompletionsForVariableDeclaration(declaration, result) {
            if (this.offset && (0, objects_1.isDefined)(declaration.colonPosition) && this.offset > declaration.colonPosition) {
                this.getVariableProposals(declaration.getValue() || null, result);
            }
            return result;
        }
        getCompletionsForExpression(expression, result) {
            const parent = expression.getParent();
            if (parent instanceof nodes.FunctionArgument) {
                this.getCompletionsForFunctionArgument(parent, parent.getParent(), result);
                return result;
            }
            const declaration = expression.findParent(nodes.NodeType.Declaration);
            if (!declaration) {
                this.getTermProposals(undefined, null, result);
                return result;
            }
            const node = expression.findChildAtOffset(this.offset, true);
            if (!node) {
                return this.getCompletionsForDeclarationValue(declaration, result);
            }
            if (node instanceof nodes.NumericValue || node instanceof nodes.Identifier) {
                return this.getCompletionsForDeclarationValue(declaration, result);
            }
            return result;
        }
        getCompletionsForFunctionArgument(arg, func, result) {
            const identifier = func.getIdentifier();
            if (identifier && identifier.matches('var')) {
                if (!func.getArguments().hasChildren() || func.getArguments().getChild(0) === arg) {
                    this.getVariableProposalsForCSSVarFunction(result);
                }
            }
            return result;
        }
        getCompletionsForFunctionDeclaration(decl, result) {
            const declarations = decl.getDeclarations();
            if (declarations && this.offset > declarations.offset && this.offset < declarations.end) {
                this.getTermProposals(undefined, null, result);
            }
            return result;
        }
        getCompletionsForMixinReference(ref, result) {
            const allMixins = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Mixin);
            for (const mixinSymbol of allMixins) {
                if (mixinSymbol.node instanceof nodes.MixinDeclaration) {
                    result.items.push(this.makeTermProposal(mixinSymbol, mixinSymbol.node.getParameters(), null));
                }
            }
            const identifierNode = ref.getIdentifier() || null;
            this.completionParticipants.forEach(participant => {
                if (participant.onCssMixinReference) {
                    participant.onCssMixinReference({
                        mixinName: this.currentWord,
                        range: this.getCompletionRange(identifierNode)
                    });
                }
            });
            return result;
        }
        getTermProposals(entry, existingNode, result) {
            const allFunctions = this.getSymbolContext().findSymbolsAtOffset(this.offset, nodes.ReferenceType.Function);
            for (const functionSymbol of allFunctions) {
                if (functionSymbol.node instanceof nodes.FunctionDeclaration) {
                    result.items.push(this.makeTermProposal(functionSymbol, functionSymbol.node.getParameters(), existingNode));
                }
            }
            return result;
        }
        makeTermProposal(symbol, parameters, existingNode) {
            const decl = symbol.node;
            const params = parameters.getChildren().map((c) => {
                return (c instanceof nodes.FunctionParameter) ? c.getName() : c.getText();
            });
            const insertText = symbol.name + '(' + params.map((p, index) => '${' + (index + 1) + ':' + p + '}').join(', ') + ')';
            return {
                label: symbol.name,
                detail: symbol.name + '(' + params.join(', ') + ')',
                textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(existingNode), insertText),
                insertTextFormat: SnippetFormat,
                kind: cssLanguageTypes_1.CompletionItemKind.Function,
                sortText: SortTexts.Term
            };
        }
        getCompletionsForSupportsCondition(supportsCondition, result) {
            const child = supportsCondition.findFirstChildBeforeOffset(this.offset);
            if (child) {
                if (child instanceof nodes.Declaration) {
                    if (!(0, objects_1.isDefined)(child.colonPosition) || this.offset <= child.colonPosition) {
                        return this.getCompletionsForDeclarationProperty(child, result);
                    }
                    else {
                        return this.getCompletionsForDeclarationValue(child, result);
                    }
                }
                else if (child instanceof nodes.SupportsCondition) {
                    return this.getCompletionsForSupportsCondition(child, result);
                }
            }
            if ((0, objects_1.isDefined)(supportsCondition.lParent) && this.offset > supportsCondition.lParent && (!(0, objects_1.isDefined)(supportsCondition.rParent) || this.offset <= supportsCondition.rParent)) {
                return this.getCompletionsForDeclarationProperty(null, result);
            }
            return result;
        }
        getCompletionsForSupports(supports, result) {
            const declarations = supports.getDeclarations();
            const inInCondition = !declarations || this.offset <= declarations.offset;
            if (inInCondition) {
                const child = supports.findFirstChildBeforeOffset(this.offset);
                if (child instanceof nodes.SupportsCondition) {
                    return this.getCompletionsForSupportsCondition(child, result);
                }
                return result;
            }
            return this.getCompletionForTopLevel(result);
        }
        getCompletionsForMediaCondition(mediaCondition, result) {
            const child = mediaCondition.findFirstChildBeforeOffset(this.offset);
            if (child) {
                if (child instanceof nodes.MediaFeature) {
                    const featureName = child.getChild(0);
                    if (featureName && this.offset > featureName.end) {
                        const name = featureName.getText();
                        const media = this.cssDataManager.getAtDirective('@media')?.descriptors?.find((descriptor) => descriptor.name === name);
                        if (media) {
                            return this.getValueEnumProposals(media, null, result);
                        }
                    }
                }
                else if (child instanceof nodes.MediaCondition) {
                    return this.getCompletionsForMediaCondition(child, result);
                }
            }
            // Return all media descriptors
            const media = this.cssDataManager.getAtDirective('@media');
            for (const descriptor of media?.descriptors || []) {
                let command = undefined;
                let text = descriptor.name;
                if (descriptor.type === 'discrete') {
                    // Change this check when we support auto completes for other types
                    if (descriptor.values) {
                        command = retriggerCommand;
                    }
                    text = `${descriptor.name}: `;
                }
                result.items.push({
                    label: descriptor.name,
                    textEdit: cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(null), text),
                    documentation: languageFacts.getEntryDescription(descriptor, this.doesSupportMarkdown()),
                    tags: isDeprecated(descriptor) ? [cssLanguageTypes_1.CompletionItemTag.Deprecated] : [],
                    kind: cssLanguageTypes_1.CompletionItemKind.Keyword,
                    command,
                });
            }
            return result;
        }
        getCompletionsForExtendsReference(extendsRef, existingNode, result) {
            return result;
        }
        getCompletionForUriLiteralValue(uriLiteralNode, result) {
            let uriValue;
            let position;
            let range;
            // No children, empty value
            if (!uriLiteralNode.hasChildren()) {
                uriValue = '';
                position = this.position;
                const emptyURIValuePosition = this.textDocument.positionAt(uriLiteralNode.offset + 'url('.length);
                range = cssLanguageTypes_1.Range.create(emptyURIValuePosition, emptyURIValuePosition);
            }
            else {
                const uriValueNode = uriLiteralNode.getChild(0);
                uriValue = uriValueNode.getText();
                position = this.position;
                range = this.getCompletionRange(uriValueNode);
            }
            this.completionParticipants.forEach(participant => {
                if (participant.onCssURILiteralValue) {
                    participant.onCssURILiteralValue({
                        uriValue,
                        position,
                        range
                    });
                }
            });
            return result;
        }
        getCompletionForImportPath(importPathNode, result) {
            this.completionParticipants.forEach(participant => {
                if (participant.onCssImportPath) {
                    participant.onCssImportPath({
                        pathValue: importPathNode.getText(),
                        position: this.position,
                        range: this.getCompletionRange(importPathNode)
                    });
                }
            });
            return result;
        }
        hasCharacterAtPosition(offset, char) {
            const text = this.textDocument.getText();
            return (offset >= 0 && offset < text.length) && text.charAt(offset) === char;
        }
        doesSupportMarkdown() {
            if (!(0, objects_1.isDefined)(this.supportsMarkdown)) {
                if (!(0, objects_1.isDefined)(this.lsOptions.clientCapabilities)) {
                    this.supportsMarkdown = true;
                    return this.supportsMarkdown;
                }
                const documentationFormat = this.lsOptions.clientCapabilities.textDocument?.completion?.completionItem?.documentationFormat;
                this.supportsMarkdown = Array.isArray(documentationFormat) && documentationFormat.indexOf(cssLanguageTypes_1.MarkupKind.Markdown) !== -1;
            }
            return this.supportsMarkdown;
        }
    }
    exports.CSSCompletion = CSSCompletion;
    function isDeprecated(entry) {
        if (entry.status && (entry.status === 'nonstandard' || entry.status === 'obsolete')) {
            return true;
        }
        return false;
    }
    class Set {
        constructor() {
            this.entries = {};
        }
        add(entry) {
            this.entries[entry] = true;
        }
        remove(entry) {
            delete this.entries[entry];
        }
        getEntries() {
            return Object.keys(this.entries);
        }
    }
    function moveCursorInsideParenthesis(text) {
        return text.replace(/\(\)$/, "($1)");
    }
    function collectValues(styleSheet, declaration) {
        const fullPropertyName = declaration.getFullPropertyName();
        const entries = new Set();
        function visitValue(node) {
            if (node instanceof nodes.Identifier || node instanceof nodes.NumericValue || node instanceof nodes.HexColorValue) {
                entries.add(node.getText());
            }
            return true;
        }
        function matchesProperty(decl) {
            const propertyName = decl.getFullPropertyName();
            return fullPropertyName === propertyName;
        }
        function vistNode(node) {
            if (node instanceof nodes.Declaration && node !== declaration) {
                if (matchesProperty(node)) {
                    const value = node.getValue();
                    if (value) {
                        value.accept(visitValue);
                    }
                }
            }
            return true;
        }
        styleSheet.accept(vistNode);
        return entries;
    }
    class ColorValueCollector {
        constructor(entries, currentOffset) {
            this.entries = entries;
            this.currentOffset = currentOffset;
            // nothing to do
        }
        visitNode(node) {
            if (node instanceof nodes.HexColorValue || (node instanceof nodes.Function && languageFacts.isColorConstructor(node))) {
                if (this.currentOffset < node.offset || node.end < this.currentOffset) {
                    this.entries.add(node.getText());
                }
            }
            return true;
        }
    }
    class VariableCollector {
        constructor(entries, currentOffset) {
            this.entries = entries;
            this.currentOffset = currentOffset;
            // nothing to do
        }
        visitNode(node) {
            if (node instanceof nodes.Identifier && node.isCustomProperty) {
                if (this.currentOffset < node.offset || node.end < this.currentOffset) {
                    this.entries.add(node.getText());
                }
            }
            return true;
        }
    }
    function getCurrentWord(document, offset) {
        let i = offset - 1;
        const text = document.getText();
        while (i >= 0 && ' \t\n\r":{[()]},*>+'.indexOf(text.charAt(i)) === -1) {
            i--;
        }
        return text.substring(i + 1, offset);
    }
});
