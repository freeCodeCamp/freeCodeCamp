import { getNodePath, getNodeValue, contains } from '../parser/jsonParser.js';
import { createScanner } from '../../../../jsonc-parser/lib/esm/main.js';
import { stringifyObject } from '../utils/json.js';
import { endsWith, extendedRegExp } from '../utils/strings.js';
import { isDefined } from '../utils/objects.js';
import '../jsonLanguageTypes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { Range, CompletionItem, InsertTextFormat, CompletionItemKind, MarkupKind, TextEdit } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class JSONCompletion {
    constructor(schemaService, contributions = [], promiseConstructor = Promise, clientCapabilities = {}) {
        this.schemaService = schemaService;
        this.contributions = contributions;
        this.promiseConstructor = promiseConstructor;
        this.clientCapabilities = clientCapabilities;
    }
    doResolve(item) {
        for (let i = this.contributions.length - 1; i >= 0; i--) {
            const resolveCompletion = this.contributions[i].resolveCompletion;
            if (resolveCompletion) {
                const resolver = resolveCompletion(item);
                if (resolver) {
                    return resolver;
                }
            }
        }
        return this.promiseConstructor.resolve(item);
    }
    doComplete(document, position, doc) {
        const result = {
            items: [],
            isIncomplete: false
        };
        const text = document.getText();
        const offset = document.offsetAt(position);
        let node = doc.getNodeFromOffset(offset, true);
        if (this.isInComment(document, node ? node.offset : 0, offset)) {
            return Promise.resolve(result);
        }
        if (node && (offset === node.offset + node.length) && offset > 0) {
            const ch = text[offset - 1];
            if (node.type === 'object' && ch === '}' || node.type === 'array' && ch === ']') {
                // after ] or }
                node = node.parent;
            }
        }
        const currentWord = this.getCurrentWord(document, offset);
        let overwriteRange;
        if (node && (node.type === 'string' || node.type === 'number' || node.type === 'boolean' || node.type === 'null')) {
            overwriteRange = Range.create(document.positionAt(node.offset), document.positionAt(node.offset + node.length));
        }
        else {
            let overwriteStart = offset - currentWord.length;
            if (overwriteStart > 0 && text[overwriteStart - 1] === '"') {
                overwriteStart--;
            }
            overwriteRange = Range.create(document.positionAt(overwriteStart), position);
        }
        const proposed = new Map();
        const collector = {
            add: (suggestion) => {
                let label = suggestion.label;
                const existing = proposed.get(label);
                if (!existing) {
                    label = label.replace(/[\n]/g, '↵');
                    if (label.length > 60) {
                        const shortendedLabel = label.substr(0, 57).trim() + '...';
                        if (!proposed.has(shortendedLabel)) {
                            label = shortendedLabel;
                        }
                    }
                    suggestion.textEdit = TextEdit.replace(overwriteRange, suggestion.insertText);
                    suggestion.label = label;
                    proposed.set(label, suggestion);
                    result.items.push(suggestion);
                }
                else {
                    if (!existing.documentation) {
                        existing.documentation = suggestion.documentation;
                    }
                    if (!existing.detail) {
                        existing.detail = suggestion.detail;
                    }
                    if (!existing.labelDetails) {
                        existing.labelDetails = suggestion.labelDetails;
                    }
                }
            },
            setAsIncomplete: () => {
                result.isIncomplete = true;
            },
            error: (message) => {
                console.error(message);
            },
            getNumberOfProposals: () => {
                return result.items.length;
            }
        };
        return this.schemaService.getSchemaForResource(document.uri, doc).then((schema) => {
            const collectionPromises = [];
            let addValue = true;
            let currentKey = '';
            let currentProperty = undefined;
            if (node) {
                if (node.type === 'string') {
                    const parent = node.parent;
                    if (parent && parent.type === 'property' && parent.keyNode === node) {
                        addValue = !parent.valueNode;
                        currentProperty = parent;
                        currentKey = text.substr(node.offset + 1, node.length - 2);
                        if (parent) {
                            node = parent.parent;
                        }
                    }
                }
            }
            // proposals for properties
            if (node && node.type === 'object') {
                // don't suggest keys when the cursor is just before the opening curly brace
                if (node.offset === offset) {
                    return result;
                }
                // don't suggest properties that are already present
                const properties = node.properties;
                properties.forEach(p => {
                    if (!currentProperty || currentProperty !== p) {
                        proposed.set(p.keyNode.value, CompletionItem.create('__'));
                    }
                });
                let separatorAfter = '';
                if (addValue) {
                    separatorAfter = this.evaluateSeparatorAfter(document, document.offsetAt(overwriteRange.end));
                }
                if (schema) {
                    // property proposals with schema
                    this.getPropertyCompletions(schema, doc, node, addValue, separatorAfter, collector);
                }
                else {
                    // property proposals without schema
                    this.getSchemaLessPropertyCompletions(doc, node, currentKey, collector);
                }
                const location = getNodePath(node);
                this.contributions.forEach((contribution) => {
                    const collectPromise = contribution.collectPropertyCompletions(document.uri, location, currentWord, addValue, separatorAfter === '', collector);
                    if (collectPromise) {
                        collectionPromises.push(collectPromise);
                    }
                });
                if ((!schema && currentWord.length > 0 && text.charAt(offset - currentWord.length - 1) !== '"')) {
                    collector.add({
                        kind: CompletionItemKind.Property,
                        label: this.getLabelForValue(currentWord),
                        insertText: this.getInsertTextForProperty(currentWord, undefined, false, separatorAfter),
                        insertTextFormat: InsertTextFormat.Snippet, documentation: '',
                    });
                    collector.setAsIncomplete();
                }
            }
            // proposals for values
            const types = {};
            if (schema) {
                // value proposals with schema
                this.getValueCompletions(schema, doc, node, offset, document, collector, types);
            }
            else {
                // value proposals without schema
                this.getSchemaLessValueCompletions(doc, node, offset, document, collector);
            }
            if (this.contributions.length > 0) {
                this.getContributedValueCompletions(doc, node, offset, document, collector, collectionPromises);
            }
            return this.promiseConstructor.all(collectionPromises).then(() => {
                if (collector.getNumberOfProposals() === 0) {
                    let offsetForSeparator = offset;
                    if (node && (node.type === 'string' || node.type === 'number' || node.type === 'boolean' || node.type === 'null')) {
                        offsetForSeparator = node.offset + node.length;
                    }
                    const separatorAfter = this.evaluateSeparatorAfter(document, offsetForSeparator);
                    this.addFillerValueCompletions(types, separatorAfter, collector);
                }
                return result;
            });
        });
    }
    getPropertyCompletions(schema, doc, node, addValue, separatorAfter, collector) {
        const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset);
        matchingSchemas.forEach((s) => {
            if (s.node === node && !s.inverted) {
                const schemaProperties = s.schema.properties;
                if (schemaProperties) {
                    Object.keys(schemaProperties).forEach((key) => {
                        const propertySchema = schemaProperties[key];
                        if (typeof propertySchema === 'object' && !propertySchema.deprecationMessage && !propertySchema.doNotSuggest) {
                            const proposal = {
                                kind: CompletionItemKind.Property,
                                label: key,
                                insertText: this.getInsertTextForProperty(key, propertySchema, addValue, separatorAfter),
                                insertTextFormat: InsertTextFormat.Snippet,
                                filterText: this.getFilterTextForValue(key),
                                documentation: this.fromMarkup(propertySchema.markdownDescription) || propertySchema.description || '',
                            };
                            if (propertySchema.suggestSortText !== undefined) {
                                proposal.sortText = propertySchema.suggestSortText;
                            }
                            if (proposal.insertText && endsWith(proposal.insertText, `$1${separatorAfter}`)) {
                                proposal.command = {
                                    title: 'Suggest',
                                    command: 'editor.action.triggerSuggest'
                                };
                            }
                            collector.add(proposal);
                        }
                    });
                }
                const schemaPropertyNames = s.schema.propertyNames;
                if (typeof schemaPropertyNames === 'object' && !schemaPropertyNames.deprecationMessage && !schemaPropertyNames.doNotSuggest) {
                    const propertyNameCompletionItem = (name, enumDescription = undefined) => {
                        const proposal = {
                            kind: CompletionItemKind.Property,
                            label: name,
                            insertText: this.getInsertTextForProperty(name, undefined, addValue, separatorAfter),
                            insertTextFormat: InsertTextFormat.Snippet,
                            filterText: this.getFilterTextForValue(name),
                            documentation: enumDescription || this.fromMarkup(schemaPropertyNames.markdownDescription) || schemaPropertyNames.description || '',
                        };
                        if (schemaPropertyNames.suggestSortText !== undefined) {
                            proposal.sortText = schemaPropertyNames.suggestSortText;
                        }
                        if (proposal.insertText && endsWith(proposal.insertText, `$1${separatorAfter}`)) {
                            proposal.command = {
                                title: 'Suggest',
                                command: 'editor.action.triggerSuggest'
                            };
                        }
                        collector.add(proposal);
                    };
                    if (schemaPropertyNames.enum) {
                        for (let i = 0; i < schemaPropertyNames.enum.length; i++) {
                            let enumDescription = undefined;
                            if (schemaPropertyNames.markdownEnumDescriptions && i < schemaPropertyNames.markdownEnumDescriptions.length) {
                                enumDescription = this.fromMarkup(schemaPropertyNames.markdownEnumDescriptions[i]);
                            }
                            else if (schemaPropertyNames.enumDescriptions && i < schemaPropertyNames.enumDescriptions.length) {
                                enumDescription = schemaPropertyNames.enumDescriptions[i];
                            }
                            propertyNameCompletionItem(schemaPropertyNames.enum[i], enumDescription);
                        }
                    }
                    if (schemaPropertyNames.const) {
                        propertyNameCompletionItem(schemaPropertyNames.const);
                    }
                }
            }
        });
    }
    getSchemaLessPropertyCompletions(doc, node, currentKey, collector) {
        const collectCompletionsForSimilarObject = (obj) => {
            obj.properties.forEach((p) => {
                const key = p.keyNode.value;
                collector.add({
                    kind: CompletionItemKind.Property,
                    label: key,
                    insertText: this.getInsertTextForValue(key, ''),
                    insertTextFormat: InsertTextFormat.Snippet,
                    filterText: this.getFilterTextForValue(key),
                    documentation: ''
                });
            });
        };
        if (node.parent) {
            if (node.parent.type === 'property') {
                // if the object is a property value, check the tree for other objects that hang under a property of the same name
                const parentKey = node.parent.keyNode.value;
                doc.visit(n => {
                    if (n.type === 'property' && n !== node.parent && n.keyNode.value === parentKey && n.valueNode && n.valueNode.type === 'object') {
                        collectCompletionsForSimilarObject(n.valueNode);
                    }
                    return true;
                });
            }
            else if (node.parent.type === 'array') {
                // if the object is in an array, use all other array elements as similar objects
                node.parent.items.forEach(n => {
                    if (n.type === 'object' && n !== node) {
                        collectCompletionsForSimilarObject(n);
                    }
                });
            }
        }
        else if (node.type === 'object') {
            collector.add({
                kind: CompletionItemKind.Property,
                label: '$schema',
                insertText: this.getInsertTextForProperty('$schema', undefined, true, ''),
                insertTextFormat: InsertTextFormat.Snippet, documentation: '',
                filterText: this.getFilterTextForValue("$schema")
            });
        }
    }
    getSchemaLessValueCompletions(doc, node, offset, document, collector) {
        let offsetForSeparator = offset;
        if (node && (node.type === 'string' || node.type === 'number' || node.type === 'boolean' || node.type === 'null')) {
            offsetForSeparator = node.offset + node.length;
            node = node.parent;
        }
        if (!node) {
            collector.add({
                kind: this.getSuggestionKind('object'),
                label: 'Empty object',
                insertText: this.getInsertTextForValue({}, ''),
                insertTextFormat: InsertTextFormat.Snippet,
                documentation: ''
            });
            collector.add({
                kind: this.getSuggestionKind('array'),
                label: 'Empty array',
                insertText: this.getInsertTextForValue([], ''),
                insertTextFormat: InsertTextFormat.Snippet,
                documentation: ''
            });
            return;
        }
        const separatorAfter = this.evaluateSeparatorAfter(document, offsetForSeparator);
        const collectSuggestionsForValues = (value) => {
            if (value.parent && !contains(value.parent, offset, true)) {
                collector.add({
                    kind: this.getSuggestionKind(value.type),
                    label: this.getLabelTextForMatchingNode(value, document),
                    insertText: this.getInsertTextForMatchingNode(value, document, separatorAfter),
                    insertTextFormat: InsertTextFormat.Snippet, documentation: ''
                });
            }
            if (value.type === 'boolean') {
                this.addBooleanValueCompletion(!value.value, separatorAfter, collector);
            }
        };
        if (node.type === 'property') {
            if (offset > (node.colonOffset || 0)) {
                const valueNode = node.valueNode;
                if (valueNode && (offset > (valueNode.offset + valueNode.length) || valueNode.type === 'object' || valueNode.type === 'array')) {
                    return;
                }
                // suggest values at the same key
                const parentKey = node.keyNode.value;
                doc.visit(n => {
                    if (n.type === 'property' && n.keyNode.value === parentKey && n.valueNode) {
                        collectSuggestionsForValues(n.valueNode);
                    }
                    return true;
                });
                if (parentKey === '$schema' && node.parent && !node.parent.parent) {
                    this.addDollarSchemaCompletions(separatorAfter, collector);
                }
            }
        }
        if (node.type === 'array') {
            if (node.parent && node.parent.type === 'property') {
                // suggest items of an array at the same key
                const parentKey = node.parent.keyNode.value;
                doc.visit((n) => {
                    if (n.type === 'property' && n.keyNode.value === parentKey && n.valueNode && n.valueNode.type === 'array') {
                        n.valueNode.items.forEach(collectSuggestionsForValues);
                    }
                    return true;
                });
            }
            else {
                // suggest items in the same array
                node.items.forEach(collectSuggestionsForValues);
            }
        }
    }
    getValueCompletions(schema, doc, node, offset, document, collector, types) {
        let offsetForSeparator = offset;
        let parentKey = undefined;
        let valueNode = undefined;
        if (node && (node.type === 'string' || node.type === 'number' || node.type === 'boolean' || node.type === 'null')) {
            offsetForSeparator = node.offset + node.length;
            valueNode = node;
            node = node.parent;
        }
        if (!node) {
            this.addSchemaValueCompletions(schema.schema, '', collector, types);
            return;
        }
        if ((node.type === 'property') && offset > (node.colonOffset || 0)) {
            const valueNode = node.valueNode;
            if (valueNode && offset > (valueNode.offset + valueNode.length)) {
                return; // we are past the value node
            }
            parentKey = node.keyNode.value;
            node = node.parent;
        }
        if (node && (parentKey !== undefined || node.type === 'array')) {
            const separatorAfter = this.evaluateSeparatorAfter(document, offsetForSeparator);
            const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset, valueNode);
            for (const s of matchingSchemas) {
                if (s.node === node && !s.inverted && s.schema) {
                    if (node.type === 'array' && s.schema.items) {
                        let c = collector;
                        if (s.schema.uniqueItems) {
                            const existingValues = new Set();
                            node.children.forEach(n => {
                                if (n.type !== 'array' && n.type !== 'object') {
                                    existingValues.add(this.getLabelForValue(getNodeValue(n)));
                                }
                            });
                            c = {
                                ...collector,
                                add(suggestion) {
                                    if (!existingValues.has(suggestion.label)) {
                                        collector.add(suggestion);
                                    }
                                }
                            };
                        }
                        if (Array.isArray(s.schema.items)) {
                            const index = this.findItemAtOffset(node, document, offset);
                            if (index < s.schema.items.length) {
                                this.addSchemaValueCompletions(s.schema.items[index], separatorAfter, c, types);
                            }
                        }
                        else {
                            this.addSchemaValueCompletions(s.schema.items, separatorAfter, c, types);
                        }
                    }
                    if (parentKey !== undefined) {
                        let propertyMatched = false;
                        if (s.schema.properties) {
                            const propertySchema = s.schema.properties[parentKey];
                            if (propertySchema) {
                                propertyMatched = true;
                                this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
                            }
                        }
                        if (s.schema.patternProperties && !propertyMatched) {
                            for (const pattern of Object.keys(s.schema.patternProperties)) {
                                const regex = extendedRegExp(pattern);
                                if (regex?.test(parentKey)) {
                                    propertyMatched = true;
                                    const propertySchema = s.schema.patternProperties[pattern];
                                    this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
                                }
                            }
                        }
                        if (s.schema.additionalProperties && !propertyMatched) {
                            const propertySchema = s.schema.additionalProperties;
                            this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
                        }
                    }
                }
            }
            if (parentKey === '$schema' && !node.parent) {
                this.addDollarSchemaCompletions(separatorAfter, collector);
            }
            if (types['boolean']) {
                this.addBooleanValueCompletion(true, separatorAfter, collector);
                this.addBooleanValueCompletion(false, separatorAfter, collector);
            }
            if (types['null']) {
                this.addNullValueCompletion(separatorAfter, collector);
            }
        }
    }
    getContributedValueCompletions(doc, node, offset, document, collector, collectionPromises) {
        if (!node) {
            this.contributions.forEach((contribution) => {
                const collectPromise = contribution.collectDefaultCompletions(document.uri, collector);
                if (collectPromise) {
                    collectionPromises.push(collectPromise);
                }
            });
        }
        else {
            if (node.type === 'string' || node.type === 'number' || node.type === 'boolean' || node.type === 'null') {
                node = node.parent;
            }
            if (node && (node.type === 'property') && offset > (node.colonOffset || 0)) {
                const parentKey = node.keyNode.value;
                const valueNode = node.valueNode;
                if ((!valueNode || offset <= (valueNode.offset + valueNode.length)) && node.parent) {
                    const location = getNodePath(node.parent);
                    this.contributions.forEach((contribution) => {
                        const collectPromise = contribution.collectValueCompletions(document.uri, location, parentKey, collector);
                        if (collectPromise) {
                            collectionPromises.push(collectPromise);
                        }
                    });
                }
            }
        }
    }
    addSchemaValueCompletions(schema, separatorAfter, collector, types) {
        if (typeof schema === 'object') {
            this.addEnumValueCompletions(schema, separatorAfter, collector);
            this.addDefaultValueCompletions(schema, separatorAfter, collector);
            this.collectTypes(schema, types);
            if (Array.isArray(schema.allOf)) {
                schema.allOf.forEach(s => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
            }
            if (Array.isArray(schema.anyOf)) {
                schema.anyOf.forEach(s => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
            }
            if (Array.isArray(schema.oneOf)) {
                schema.oneOf.forEach(s => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
            }
        }
    }
    addDefaultValueCompletions(schema, separatorAfter, collector, arrayDepth = 0) {
        let hasProposals = false;
        if (isDefined(schema.default)) {
            let type = schema.type;
            let value = schema.default;
            for (let i = arrayDepth; i > 0; i--) {
                value = [value];
                type = 'array';
            }
            const completionItem = {
                kind: this.getSuggestionKind(type),
                label: this.getLabelForValue(value),
                insertText: this.getInsertTextForValue(value, separatorAfter),
                insertTextFormat: InsertTextFormat.Snippet
            };
            if (this.doesSupportsLabelDetails()) {
                completionItem.labelDetails = { description: t('Default value') };
            }
            else {
                completionItem.detail = t('Default value');
            }
            collector.add(completionItem);
            hasProposals = true;
        }
        if (Array.isArray(schema.examples)) {
            schema.examples.forEach(example => {
                let type = schema.type;
                let value = example;
                for (let i = arrayDepth; i > 0; i--) {
                    value = [value];
                    type = 'array';
                }
                collector.add({
                    kind: this.getSuggestionKind(type),
                    label: this.getLabelForValue(value),
                    insertText: this.getInsertTextForValue(value, separatorAfter),
                    insertTextFormat: InsertTextFormat.Snippet
                });
                hasProposals = true;
            });
        }
        if (Array.isArray(schema.defaultSnippets)) {
            schema.defaultSnippets.forEach(s => {
                let type = schema.type;
                let value = s.body;
                let label = s.label;
                let insertText;
                let filterText;
                if (isDefined(value)) {
                    schema.type;
                    for (let i = arrayDepth; i > 0; i--) {
                        value = [value];
                    }
                    insertText = this.getInsertTextForSnippetValue(value, separatorAfter);
                    filterText = this.getFilterTextForSnippetValue(value);
                    label = label || this.getLabelForSnippetValue(value);
                }
                else if (typeof s.bodyText === 'string') {
                    let prefix = '', suffix = '', indent = '';
                    for (let i = arrayDepth; i > 0; i--) {
                        prefix = prefix + indent + '[\n';
                        suffix = suffix + '\n' + indent + ']';
                        indent += '\t';
                        type = 'array';
                    }
                    insertText = prefix + indent + s.bodyText.split('\n').join('\n' + indent) + suffix + separatorAfter;
                    label = label || insertText,
                        filterText = insertText.replace(/[\n]/g, ''); // remove new lines
                }
                else {
                    return;
                }
                collector.add({
                    kind: this.getSuggestionKind(type),
                    label,
                    documentation: this.fromMarkup(s.markdownDescription) || s.description,
                    insertText,
                    insertTextFormat: InsertTextFormat.Snippet,
                    filterText
                });
                hasProposals = true;
            });
        }
        if (!hasProposals && typeof schema.items === 'object' && !Array.isArray(schema.items) && arrayDepth < 5 /* beware of recursion */) {
            this.addDefaultValueCompletions(schema.items, separatorAfter, collector, arrayDepth + 1);
        }
    }
    addEnumValueCompletions(schema, separatorAfter, collector) {
        if (isDefined(schema.const)) {
            collector.add({
                kind: this.getSuggestionKind(schema.type),
                label: this.getLabelForValue(schema.const),
                insertText: this.getInsertTextForValue(schema.const, separatorAfter),
                insertTextFormat: InsertTextFormat.Snippet,
                documentation: this.fromMarkup(schema.markdownDescription) || schema.description
            });
        }
        if (Array.isArray(schema.enum)) {
            for (let i = 0, length = schema.enum.length; i < length; i++) {
                const enm = schema.enum[i];
                let documentation = this.fromMarkup(schema.markdownDescription) || schema.description;
                if (schema.markdownEnumDescriptions && i < schema.markdownEnumDescriptions.length && this.doesSupportMarkdown()) {
                    documentation = this.fromMarkup(schema.markdownEnumDescriptions[i]);
                }
                else if (schema.enumDescriptions && i < schema.enumDescriptions.length) {
                    documentation = schema.enumDescriptions[i];
                }
                collector.add({
                    kind: this.getSuggestionKind(schema.type),
                    label: this.getLabelForValue(enm),
                    insertText: this.getInsertTextForValue(enm, separatorAfter),
                    insertTextFormat: InsertTextFormat.Snippet,
                    documentation
                });
            }
        }
    }
    collectTypes(schema, types) {
        if (Array.isArray(schema.enum) || isDefined(schema.const)) {
            return;
        }
        const type = schema.type;
        if (Array.isArray(type)) {
            type.forEach(t => types[t] = true);
        }
        else if (type) {
            types[type] = true;
        }
    }
    addFillerValueCompletions(types, separatorAfter, collector) {
        if (types['object']) {
            collector.add({
                kind: this.getSuggestionKind('object'),
                label: '{}',
                insertText: this.getInsertTextForGuessedValue({}, separatorAfter),
                insertTextFormat: InsertTextFormat.Snippet,
                detail: t('New object'),
                documentation: ''
            });
        }
        if (types['array']) {
            collector.add({
                kind: this.getSuggestionKind('array'),
                label: '[]',
                insertText: this.getInsertTextForGuessedValue([], separatorAfter),
                insertTextFormat: InsertTextFormat.Snippet,
                detail: t('New array'),
                documentation: ''
            });
        }
    }
    addBooleanValueCompletion(value, separatorAfter, collector) {
        collector.add({
            kind: this.getSuggestionKind('boolean'),
            label: value ? 'true' : 'false',
            insertText: this.getInsertTextForValue(value, separatorAfter),
            insertTextFormat: InsertTextFormat.Snippet,
            documentation: ''
        });
    }
    addNullValueCompletion(separatorAfter, collector) {
        collector.add({
            kind: this.getSuggestionKind('null'),
            label: 'null',
            insertText: 'null' + separatorAfter,
            insertTextFormat: InsertTextFormat.Snippet,
            documentation: ''
        });
    }
    addDollarSchemaCompletions(separatorAfter, collector) {
        const schemaIds = this.schemaService.getRegisteredSchemaIds(schema => schema === 'http' || schema === 'https');
        schemaIds.forEach(schemaId => {
            if (schemaId.startsWith('http://json-schema.org/draft-')) {
                schemaId = schemaId + '#';
            }
            collector.add({
                kind: CompletionItemKind.Module,
                label: this.getLabelForValue(schemaId),
                filterText: this.getFilterTextForValue(schemaId),
                insertText: this.getInsertTextForValue(schemaId, separatorAfter),
                insertTextFormat: InsertTextFormat.Snippet, documentation: ''
            });
        });
    }
    getLabelForValue(value) {
        return JSON.stringify(value);
    }
    getValueFromLabel(value) {
        return JSON.parse(value);
    }
    getFilterTextForValue(value) {
        return JSON.stringify(value);
    }
    getFilterTextForSnippetValue(value) {
        return JSON.stringify(value).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
    }
    getLabelForSnippetValue(value) {
        const label = JSON.stringify(value);
        return label.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, '$1');
    }
    getInsertTextForPlainText(text) {
        return text.replace(/[\\\$\}]/g, '\\$&'); // escape $, \ and }
    }
    getInsertTextForValue(value, separatorAfter) {
        const text = JSON.stringify(value, null, '\t');
        if (text === '{}') {
            return '{$1}' + separatorAfter;
        }
        else if (text === '[]') {
            return '[$1]' + separatorAfter;
        }
        return this.getInsertTextForPlainText(text + separatorAfter);
    }
    getInsertTextForSnippetValue(value, separatorAfter) {
        const replacer = (value) => {
            if (typeof value === 'string') {
                if (value[0] === '^') {
                    return value.substr(1);
                }
            }
            return JSON.stringify(value);
        };
        return stringifyObject(value, '', replacer) + separatorAfter;
    }
    getInsertTextForGuessedValue(value, separatorAfter) {
        switch (typeof value) {
            case 'object':
                if (value === null) {
                    return '${1:null}' + separatorAfter;
                }
                return this.getInsertTextForValue(value, separatorAfter);
            case 'string':
                let snippetValue = JSON.stringify(value);
                snippetValue = snippetValue.substr(1, snippetValue.length - 2); // remove quotes
                snippetValue = this.getInsertTextForPlainText(snippetValue); // escape \ and }
                return '"${1:' + snippetValue + '}"' + separatorAfter;
            case 'number':
            case 'boolean':
                return '${1:' + JSON.stringify(value) + '}' + separatorAfter;
        }
        return this.getInsertTextForValue(value, separatorAfter);
    }
    getSuggestionKind(type) {
        if (Array.isArray(type)) {
            const array = type;
            type = array.length > 0 ? array[0] : undefined;
        }
        if (!type) {
            return CompletionItemKind.Value;
        }
        switch (type) {
            case 'string': return CompletionItemKind.Value;
            case 'object': return CompletionItemKind.Module;
            case 'property': return CompletionItemKind.Property;
            default: return CompletionItemKind.Value;
        }
    }
    getLabelTextForMatchingNode(node, document) {
        switch (node.type) {
            case 'array':
                return '[]';
            case 'object':
                return '{}';
            default:
                const content = document.getText().substr(node.offset, node.length);
                return content;
        }
    }
    getInsertTextForMatchingNode(node, document, separatorAfter) {
        switch (node.type) {
            case 'array':
                return this.getInsertTextForValue([], separatorAfter);
            case 'object':
                return this.getInsertTextForValue({}, separatorAfter);
            default:
                const content = document.getText().substr(node.offset, node.length) + separatorAfter;
                return this.getInsertTextForPlainText(content);
        }
    }
    getInsertTextForProperty(key, propertySchema, addValue, separatorAfter) {
        const propertyText = this.getInsertTextForValue(key, '');
        if (!addValue) {
            return propertyText;
        }
        const resultText = propertyText + ': ';
        let value;
        let nValueProposals = 0;
        if (propertySchema) {
            if (Array.isArray(propertySchema.defaultSnippets)) {
                if (propertySchema.defaultSnippets.length === 1) {
                    const body = propertySchema.defaultSnippets[0].body;
                    if (isDefined(body)) {
                        value = this.getInsertTextForSnippetValue(body, '');
                    }
                }
                nValueProposals += propertySchema.defaultSnippets.length;
            }
            if (propertySchema.enum) {
                if (!value && propertySchema.enum.length === 1) {
                    value = this.getInsertTextForGuessedValue(propertySchema.enum[0], '');
                }
                nValueProposals += propertySchema.enum.length;
            }
            if (isDefined(propertySchema.const)) {
                if (!value) {
                    value = this.getInsertTextForGuessedValue(propertySchema.const, '');
                }
                nValueProposals++;
            }
            if (isDefined(propertySchema.default)) {
                if (!value) {
                    value = this.getInsertTextForGuessedValue(propertySchema.default, '');
                }
                nValueProposals++;
            }
            if (Array.isArray(propertySchema.examples) && propertySchema.examples.length) {
                if (!value) {
                    value = this.getInsertTextForGuessedValue(propertySchema.examples[0], '');
                }
                nValueProposals += propertySchema.examples.length;
            }
            if (nValueProposals === 0) {
                let type = Array.isArray(propertySchema.type) ? propertySchema.type[0] : propertySchema.type;
                if (!type) {
                    if (propertySchema.properties) {
                        type = 'object';
                    }
                    else if (propertySchema.items) {
                        type = 'array';
                    }
                }
                switch (type) {
                    case 'boolean':
                        value = '$1';
                        break;
                    case 'string':
                        value = '"$1"';
                        break;
                    case 'object':
                        value = '{$1}';
                        break;
                    case 'array':
                        value = '[$1]';
                        break;
                    case 'number':
                    case 'integer':
                        value = '${1:0}';
                        break;
                    case 'null':
                        value = '${1:null}';
                        break;
                    default:
                        return propertyText;
                }
            }
        }
        if (!value || nValueProposals > 1) {
            value = '$1';
        }
        return resultText + value + separatorAfter;
    }
    getCurrentWord(document, offset) {
        let i = offset - 1;
        const text = document.getText();
        while (i >= 0 && ' \t\n\r\v":{[,]}'.indexOf(text.charAt(i)) === -1) {
            i--;
        }
        return text.substring(i + 1, offset);
    }
    evaluateSeparatorAfter(document, offset) {
        const scanner = createScanner(document.getText(), true);
        scanner.setPosition(offset);
        const token = scanner.scan();
        switch (token) {
            case 5 /* Json.SyntaxKind.CommaToken */:
            case 2 /* Json.SyntaxKind.CloseBraceToken */:
            case 4 /* Json.SyntaxKind.CloseBracketToken */:
            case 17 /* Json.SyntaxKind.EOF */:
                return '';
            default:
                return ',';
        }
    }
    findItemAtOffset(node, document, offset) {
        const scanner = createScanner(document.getText(), true);
        const children = node.items;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (offset > child.offset + child.length) {
                scanner.setPosition(child.offset + child.length);
                const token = scanner.scan();
                if (token === 5 /* Json.SyntaxKind.CommaToken */ && offset >= scanner.getTokenOffset() + scanner.getTokenLength()) {
                    return i + 1;
                }
                return i;
            }
            else if (offset >= child.offset) {
                return i;
            }
        }
        return 0;
    }
    isInComment(document, start, offset) {
        const scanner = createScanner(document.getText(), false);
        scanner.setPosition(start);
        let token = scanner.scan();
        while (token !== 17 /* Json.SyntaxKind.EOF */ && (scanner.getTokenOffset() + scanner.getTokenLength() < offset)) {
            token = scanner.scan();
        }
        return (token === 12 /* Json.SyntaxKind.LineCommentTrivia */ || token === 13 /* Json.SyntaxKind.BlockCommentTrivia */) && scanner.getTokenOffset() <= offset;
    }
    fromMarkup(markupString) {
        if (markupString && this.doesSupportMarkdown()) {
            return {
                kind: MarkupKind.Markdown,
                value: markupString
            };
        }
        return undefined;
    }
    doesSupportMarkdown() {
        if (!isDefined(this.supportsMarkdown)) {
            const documentationFormat = this.clientCapabilities.textDocument?.completion?.completionItem?.documentationFormat;
            this.supportsMarkdown = Array.isArray(documentationFormat) && documentationFormat.indexOf(MarkupKind.Markdown) !== -1;
        }
        return this.supportsMarkdown;
    }
    doesSupportsCommitCharacters() {
        if (!isDefined(this.supportsCommitCharacters)) {
            this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.commitCharactersSupport;
        }
        return this.supportsCommitCharacters;
    }
    doesSupportsLabelDetails() {
        if (!isDefined(this.labelDetailsSupport)) {
            this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.labelDetailsSupport;
        }
        return this.labelDetailsSupport;
    }
}

export { JSONCompletion };
