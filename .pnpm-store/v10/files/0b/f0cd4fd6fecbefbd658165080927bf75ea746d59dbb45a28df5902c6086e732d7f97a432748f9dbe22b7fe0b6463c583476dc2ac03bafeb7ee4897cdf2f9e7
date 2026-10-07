import { createScanner, getNodePath as getNodePath$1, getNodeValue as getNodeValue$1, findNodeAtOffset } from '../../../../jsonc-parser/lib/esm/main.js';
import { isBoolean, equals, isDefined, isNumber, isString, isObject } from '../utils/objects.js';
import { stringLength, extendedRegExp } from '../utils/strings.js';
import { SchemaDraft, ErrorCode } from '../jsonLanguageTypes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { DiagnosticSeverity, Range, Diagnostic } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const formats = {
    'color-hex': { errorMessage: t('Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'), pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/ },
    'date-time': { errorMessage: t('String is not a RFC3339 date-time.'), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
    'date': { errorMessage: t('String is not a RFC3339 date.'), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i },
    'time': { errorMessage: t('String is not a RFC3339 time.'), pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
    'email': { errorMessage: t('String is not an e-mail address.'), pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/ },
    'hostname': { errorMessage: t('String is not a hostname.'), pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i },
    'ipv4': { errorMessage: t('String is not an IPv4 address.'), pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/ },
    'ipv6': { errorMessage: t('String is not an IPv6 address.'), pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i },
};
class ASTNodeImpl {
    constructor(parent, offset, length = 0) {
        this.offset = offset;
        this.length = length;
        this.parent = parent;
    }
    get children() {
        return [];
    }
    toString() {
        return 'type: ' + this.type + ' (' + this.offset + '/' + this.length + ')' + (this.parent ? ' parent: {' + this.parent.toString() + '}' : '');
    }
}
class NullASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
        super(parent, offset);
        this.type = 'null';
        this.value = null;
    }
}
class BooleanASTNodeImpl extends ASTNodeImpl {
    constructor(parent, boolValue, offset) {
        super(parent, offset);
        this.type = 'boolean';
        this.value = boolValue;
    }
}
class ArrayASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
        super(parent, offset);
        this.type = 'array';
        this.items = [];
    }
    get children() {
        return this.items;
    }
}
class NumberASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
        super(parent, offset);
        this.type = 'number';
        this.isInteger = true;
        this.value = Number.NaN;
    }
}
class StringASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset, length) {
        super(parent, offset, length);
        this.type = 'string';
        this.value = '';
    }
}
class PropertyASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset, keyNode) {
        super(parent, offset);
        this.type = 'property';
        this.colonOffset = -1;
        this.keyNode = keyNode;
    }
    get children() {
        return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
    }
}
class ObjectASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
        super(parent, offset);
        this.type = 'object';
        this.properties = [];
    }
    get children() {
        return this.properties;
    }
}
function asSchema(schema) {
    if (isBoolean(schema)) {
        return schema ? {} : { "not": {} };
    }
    return schema;
}
var EnumMatch;
(function (EnumMatch) {
    EnumMatch[EnumMatch["Key"] = 0] = "Key";
    EnumMatch[EnumMatch["Enum"] = 1] = "Enum";
})(EnumMatch || (EnumMatch = {}));
const schemaDraftFromId = {
    'http://json-schema.org/draft-03/schema#': SchemaDraft.v3,
    'http://json-schema.org/draft-04/schema#': SchemaDraft.v4,
    'http://json-schema.org/draft-06/schema#': SchemaDraft.v6,
    'http://json-schema.org/draft-07/schema#': SchemaDraft.v7,
    'https://json-schema.org/draft/2019-09/schema': SchemaDraft.v2019_09,
    'https://json-schema.org/draft/2020-12/schema': SchemaDraft.v2020_12
};
class EvaluationContext {
    constructor(schemaDraft) {
        this.schemaDraft = schemaDraft;
    }
}
class SchemaCollector {
    constructor(focusOffset = -1, exclude) {
        this.focusOffset = focusOffset;
        this.exclude = exclude;
        this.schemas = [];
    }
    add(schema) {
        this.schemas.push(schema);
    }
    merge(other) {
        Array.prototype.push.apply(this.schemas, other.schemas);
    }
    include(node) {
        return (this.focusOffset === -1 || contains(node, this.focusOffset)) && (node !== this.exclude);
    }
    newSub() {
        return new SchemaCollector(-1, this.exclude);
    }
}
class NoOpSchemaCollector {
    constructor() { }
    get schemas() { return []; }
    add(_schema) { }
    merge(_other) { }
    include(_node) { return true; }
    newSub() { return this; }
}
NoOpSchemaCollector.instance = new NoOpSchemaCollector();
class ValidationResult {
    constructor() {
        this.problems = [];
        this.propertiesMatches = 0;
        this.processedProperties = new Set();
        this.propertiesValueMatches = 0;
        this.primaryValueMatches = 0;
        this.enumValueMatch = false;
        this.enumValues = undefined;
    }
    hasProblems() {
        return !!this.problems.length;
    }
    merge(validationResult) {
        this.problems = this.problems.concat(validationResult.problems);
        this.propertiesMatches += validationResult.propertiesMatches;
        this.propertiesValueMatches += validationResult.propertiesValueMatches;
        this.mergeProcessedProperties(validationResult);
    }
    mergeEnumValues(validationResult) {
        if (!this.enumValueMatch && !validationResult.enumValueMatch && this.enumValues && validationResult.enumValues) {
            this.enumValues = this.enumValues.concat(validationResult.enumValues);
            for (const error of this.problems) {
                if (error.code === ErrorCode.EnumValueMismatch) {
                    error.message = t('Value is not accepted. Valid values: {0}.', this.enumValues.map(v => JSON.stringify(v)).join(', '));
                }
            }
        }
    }
    mergePropertyMatch(propertyValidationResult) {
        this.problems = this.problems.concat(propertyValidationResult.problems);
        this.propertiesMatches++;
        if (propertyValidationResult.enumValueMatch || !propertyValidationResult.hasProblems() && propertyValidationResult.propertiesMatches) {
            this.propertiesValueMatches++;
        }
        if (propertyValidationResult.enumValueMatch && propertyValidationResult.enumValues && propertyValidationResult.enumValues.length === 1) {
            this.primaryValueMatches++;
        }
    }
    mergeProcessedProperties(validationResult) {
        validationResult.processedProperties.forEach(p => this.processedProperties.add(p));
    }
    compare(other) {
        const hasProblems = this.hasProblems();
        if (hasProblems !== other.hasProblems()) {
            return hasProblems ? -1 : 1;
        }
        if (this.enumValueMatch !== other.enumValueMatch) {
            return other.enumValueMatch ? -1 : 1;
        }
        if (this.primaryValueMatches !== other.primaryValueMatches) {
            return this.primaryValueMatches - other.primaryValueMatches;
        }
        if (this.propertiesValueMatches !== other.propertiesValueMatches) {
            return this.propertiesValueMatches - other.propertiesValueMatches;
        }
        return this.propertiesMatches - other.propertiesMatches;
    }
}
function newJSONDocument(root, diagnostics = []) {
    return new JSONDocument(root, diagnostics, []);
}
function getNodeValue(node) {
    return getNodeValue$1(node);
}
function getNodePath(node) {
    return getNodePath$1(node);
}
function contains(node, offset, includeRightBound = false) {
    return offset >= node.offset && offset < (node.offset + node.length) || includeRightBound && offset === (node.offset + node.length);
}
class JSONDocument {
    constructor(root, syntaxErrors = [], comments = []) {
        this.root = root;
        this.syntaxErrors = syntaxErrors;
        this.comments = comments;
    }
    getNodeFromOffset(offset, includeRightBound = false) {
        if (this.root) {
            return findNodeAtOffset(this.root, offset, includeRightBound);
        }
        return undefined;
    }
    visit(visitor) {
        if (this.root) {
            const doVisit = (node) => {
                let ctn = visitor(node);
                const children = node.children;
                if (Array.isArray(children)) {
                    for (let i = 0; i < children.length && ctn; i++) {
                        ctn = doVisit(children[i]);
                    }
                }
                return ctn;
            };
            doVisit(this.root);
        }
    }
    validate(textDocument, schema, severity = DiagnosticSeverity.Warning, schemaDraft) {
        if (this.root && schema) {
            const validationResult = new ValidationResult();
            validate(this.root, schema, validationResult, NoOpSchemaCollector.instance, new EvaluationContext(schemaDraft ?? getSchemaDraft(schema)));
            return validationResult.problems.map(p => {
                const range = Range.create(textDocument.positionAt(p.location.offset), textDocument.positionAt(p.location.offset + p.location.length));
                return Diagnostic.create(range, p.message, p.severity ?? severity, p.code);
            });
        }
        return undefined;
    }
    getMatchingSchemas(schema, focusOffset = -1, exclude) {
        if (this.root && schema) {
            const matchingSchemas = new SchemaCollector(focusOffset, exclude);
            const schemaDraft = getSchemaDraft(schema);
            const context = new EvaluationContext(schemaDraft);
            validate(this.root, schema, new ValidationResult(), matchingSchemas, context);
            return matchingSchemas.schemas;
        }
        return [];
    }
}
function getSchemaDraft(schema, fallBack = SchemaDraft.v2020_12) {
    let schemaId = schema.$schema;
    if (schemaId) {
        return schemaDraftFromId[schemaId] ?? fallBack;
    }
    return fallBack;
}
function validate(n, schema, validationResult, matchingSchemas, context) {
    if (!n || !matchingSchemas.include(n)) {
        return;
    }
    if (n.type === 'property') {
        return validate(n.valueNode, schema, validationResult, matchingSchemas, context);
    }
    const node = n;
    _validateNode();
    switch (node.type) {
        case 'object':
            _validateObjectNode(node);
            break;
        case 'array':
            _validateArrayNode(node);
            break;
        case 'string':
            _validateStringNode(node);
            break;
        case 'number':
            _validateNumberNode(node);
            break;
    }
    matchingSchemas.add({ node: node, schema: schema });
    function _validateNode() {
        function matchesType(type) {
            return node.type === type || (type === 'integer' && node.type === 'number' && node.isInteger);
        }
        if (Array.isArray(schema.type)) {
            if (!schema.type.some(matchesType)) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.errorMessage || t('Incorrect type. Expected one of {0}.', schema.type.join(', '))
                });
            }
        }
        else if (schema.type) {
            if (!matchesType(schema.type)) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.errorMessage || t('Incorrect type. Expected "{0}".', schema.type)
                });
            }
        }
        if (Array.isArray(schema.allOf)) {
            for (const subSchemaRef of schema.allOf) {
                const subValidationResult = new ValidationResult();
                const subMatchingSchemas = matchingSchemas.newSub();
                validate(node, asSchema(subSchemaRef), subValidationResult, subMatchingSchemas, context);
                validationResult.merge(subValidationResult);
                matchingSchemas.merge(subMatchingSchemas);
            }
        }
        const notSchema = asSchema(schema.not);
        if (notSchema) {
            const subValidationResult = new ValidationResult();
            const subMatchingSchemas = matchingSchemas.newSub();
            validate(node, notSchema, subValidationResult, subMatchingSchemas, context);
            if (!subValidationResult.hasProblems()) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.errorMessage || t("Matches a schema that is not allowed.")
                });
            }
            for (const ms of subMatchingSchemas.schemas) {
                ms.inverted = !ms.inverted;
                matchingSchemas.add(ms);
            }
        }
        const testAlternatives = (alternatives, maxOneMatch) => {
            const matches = [];
            // remember the best match that is used for error messages
            let bestMatch = undefined;
            for (const subSchemaRef of alternatives) {
                const subSchema = asSchema(subSchemaRef);
                const subValidationResult = new ValidationResult();
                const subMatchingSchemas = matchingSchemas.newSub();
                validate(node, subSchema, subValidationResult, subMatchingSchemas, context);
                if (!subValidationResult.hasProblems()) {
                    matches.push(subSchema);
                }
                if (!bestMatch) {
                    bestMatch = { schema: subSchema, validationResult: subValidationResult, matchingSchemas: subMatchingSchemas };
                }
                else {
                    if (!maxOneMatch && !subValidationResult.hasProblems() && !bestMatch.validationResult.hasProblems()) {
                        // no errors, both are equally good matches
                        bestMatch.matchingSchemas.merge(subMatchingSchemas);
                        bestMatch.validationResult.propertiesMatches += subValidationResult.propertiesMatches;
                        bestMatch.validationResult.propertiesValueMatches += subValidationResult.propertiesValueMatches;
                        bestMatch.validationResult.mergeProcessedProperties(subValidationResult);
                    }
                    else {
                        const compareResult = subValidationResult.compare(bestMatch.validationResult);
                        if (compareResult > 0) {
                            // our node is the best matching so far
                            bestMatch = { schema: subSchema, validationResult: subValidationResult, matchingSchemas: subMatchingSchemas };
                        }
                        else if (compareResult === 0) {
                            // there's already a best matching but we are as good
                            bestMatch.matchingSchemas.merge(subMatchingSchemas);
                            bestMatch.validationResult.mergeEnumValues(subValidationResult);
                        }
                    }
                }
            }
            if (matches.length > 1 && maxOneMatch) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: 1 },
                    message: t("Matches multiple schemas when only one must validate.")
                });
            }
            if (bestMatch) {
                validationResult.merge(bestMatch.validationResult);
                matchingSchemas.merge(bestMatch.matchingSchemas);
            }
            return matches.length;
        };
        if (Array.isArray(schema.anyOf)) {
            testAlternatives(schema.anyOf, false);
        }
        if (Array.isArray(schema.oneOf)) {
            testAlternatives(schema.oneOf, true);
        }
        const testBranch = (schema) => {
            const subValidationResult = new ValidationResult();
            const subMatchingSchemas = matchingSchemas.newSub();
            validate(node, asSchema(schema), subValidationResult, subMatchingSchemas, context);
            validationResult.merge(subValidationResult);
            matchingSchemas.merge(subMatchingSchemas);
        };
        const testCondition = (ifSchema, thenSchema, elseSchema) => {
            const subSchema = asSchema(ifSchema);
            const subValidationResult = new ValidationResult();
            const subMatchingSchemas = matchingSchemas.newSub();
            validate(node, subSchema, subValidationResult, subMatchingSchemas, context);
            matchingSchemas.merge(subMatchingSchemas);
            validationResult.mergeProcessedProperties(subValidationResult);
            if (!subValidationResult.hasProblems()) {
                if (thenSchema) {
                    testBranch(thenSchema);
                }
            }
            else if (elseSchema) {
                testBranch(elseSchema);
            }
        };
        const ifSchema = asSchema(schema.if);
        if (ifSchema) {
            testCondition(ifSchema, asSchema(schema.then), asSchema(schema.else));
        }
        if (Array.isArray(schema.enum)) {
            const val = getNodeValue(node);
            let enumValueMatch = false;
            for (const e of schema.enum) {
                if (equals(val, e)) {
                    enumValueMatch = true;
                    break;
                }
            }
            validationResult.enumValues = schema.enum;
            validationResult.enumValueMatch = enumValueMatch;
            if (!enumValueMatch) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    code: ErrorCode.EnumValueMismatch,
                    message: schema.errorMessage || t('Value is not accepted. Valid values: {0}.', schema.enum.map(v => JSON.stringify(v)).join(', '))
                });
            }
        }
        if (isDefined(schema.const)) {
            const val = getNodeValue(node);
            if (!equals(val, schema.const)) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    code: ErrorCode.EnumValueMismatch,
                    message: schema.errorMessage || t('Value must be {0}.', JSON.stringify(schema.const))
                });
                validationResult.enumValueMatch = false;
            }
            else {
                validationResult.enumValueMatch = true;
            }
            validationResult.enumValues = [schema.const];
        }
        let deprecationMessage = schema.deprecationMessage;
        if (deprecationMessage || schema.deprecated) {
            deprecationMessage = deprecationMessage || t('Value is deprecated');
            let targetNode = node.parent?.type === 'property' ? node.parent : node;
            validationResult.problems.push({
                location: { offset: targetNode.offset, length: targetNode.length },
                severity: DiagnosticSeverity.Warning,
                message: deprecationMessage,
                code: ErrorCode.Deprecated
            });
        }
    }
    function _validateNumberNode(node) {
        const val = node.value;
        function normalizeFloats(float) {
            const parts = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(float.toString());
            return parts && {
                value: Number(parts[1] + (parts[2] || '')),
                multiplier: (parts[2]?.length || 0) - (parseInt(parts[3]) || 0)
            };
        }
        if (isNumber(schema.multipleOf)) {
            let remainder = -1;
            if (Number.isInteger(schema.multipleOf)) {
                remainder = val % schema.multipleOf;
            }
            else {
                let normMultipleOf = normalizeFloats(schema.multipleOf);
                let normValue = normalizeFloats(val);
                if (normMultipleOf && normValue) {
                    const multiplier = 10 ** Math.abs(normValue.multiplier - normMultipleOf.multiplier);
                    if (normValue.multiplier < normMultipleOf.multiplier) {
                        normValue.value *= multiplier;
                    }
                    else {
                        normMultipleOf.value *= multiplier;
                    }
                    remainder = normValue.value % normMultipleOf.value;
                }
            }
            if (remainder !== 0) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: t('Value is not divisible by {0}.', schema.multipleOf)
                });
            }
        }
        function getExclusiveLimit(limit, exclusive) {
            if (isNumber(exclusive)) {
                return exclusive;
            }
            if (isBoolean(exclusive) && exclusive) {
                return limit;
            }
            return undefined;
        }
        function getLimit(limit, exclusive) {
            if (!isBoolean(exclusive) || !exclusive) {
                return limit;
            }
            return undefined;
        }
        const exclusiveMinimum = getExclusiveLimit(schema.minimum, schema.exclusiveMinimum);
        if (isNumber(exclusiveMinimum) && val <= exclusiveMinimum) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('Value is below the exclusive minimum of {0}.', exclusiveMinimum)
            });
        }
        const exclusiveMaximum = getExclusiveLimit(schema.maximum, schema.exclusiveMaximum);
        if (isNumber(exclusiveMaximum) && val >= exclusiveMaximum) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('Value is above the exclusive maximum of {0}.', exclusiveMaximum)
            });
        }
        const minimum = getLimit(schema.minimum, schema.exclusiveMinimum);
        if (isNumber(minimum) && val < minimum) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('Value is below the minimum of {0}.', minimum)
            });
        }
        const maximum = getLimit(schema.maximum, schema.exclusiveMaximum);
        if (isNumber(maximum) && val > maximum) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('Value is above the maximum of {0}.', maximum)
            });
        }
    }
    function _validateStringNode(node) {
        if (isNumber(schema.minLength) && stringLength(node.value) < schema.minLength) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('String is shorter than the minimum length of {0}.', schema.minLength)
            });
        }
        if (isNumber(schema.maxLength) && stringLength(node.value) > schema.maxLength) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('String is longer than the maximum length of {0}.', schema.maxLength)
            });
        }
        if (isString(schema.pattern)) {
            const regex = extendedRegExp(schema.pattern);
            if (!(regex?.test(node.value))) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.patternErrorMessage || schema.errorMessage || t('String does not match the pattern of "{0}".', schema.pattern)
                });
            }
        }
        if (schema.format) {
            switch (schema.format) {
                case 'uri':
                case 'uri-reference':
                    {
                        let errorMessage;
                        if (!node.value) {
                            errorMessage = t('URI expected.');
                        }
                        else {
                            const match = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(node.value);
                            if (!match) {
                                errorMessage = t('URI is expected.');
                            }
                            else if (!match[2] && schema.format === 'uri') {
                                errorMessage = t('URI with a scheme is expected.');
                            }
                        }
                        if (errorMessage) {
                            validationResult.problems.push({
                                location: { offset: node.offset, length: node.length },
                                message: schema.patternErrorMessage || schema.errorMessage || t('String is not a URI: {0}', errorMessage)
                            });
                        }
                    }
                    break;
                case 'color-hex':
                case 'date-time':
                case 'date':
                case 'time':
                case 'email':
                case 'hostname':
                case 'ipv4':
                case 'ipv6':
                    const format = formats[schema.format];
                    if (!node.value || !format.pattern.exec(node.value)) {
                        validationResult.problems.push({
                            location: { offset: node.offset, length: node.length },
                            message: schema.patternErrorMessage || schema.errorMessage || format.errorMessage
                        });
                    }
            }
        }
    }
    function _validateArrayNode(node) {
        let prefixItemsSchemas;
        let additionalItemSchema;
        if (context.schemaDraft >= SchemaDraft.v2020_12) {
            prefixItemsSchemas = schema.prefixItems;
            additionalItemSchema = !Array.isArray(schema.items) ? schema.items : undefined;
        }
        else {
            prefixItemsSchemas = Array.isArray(schema.items) ? schema.items : undefined;
            additionalItemSchema = !Array.isArray(schema.items) ? schema.items : schema.additionalItems;
        }
        let index = 0;
        if (prefixItemsSchemas !== undefined) {
            const max = Math.min(prefixItemsSchemas.length, node.items.length);
            for (; index < max; index++) {
                const subSchemaRef = prefixItemsSchemas[index];
                const subSchema = asSchema(subSchemaRef);
                const itemValidationResult = new ValidationResult();
                const item = node.items[index];
                if (item) {
                    validate(item, subSchema, itemValidationResult, matchingSchemas, context);
                    validationResult.mergePropertyMatch(itemValidationResult);
                }
                validationResult.processedProperties.add(String(index));
            }
        }
        if (additionalItemSchema !== undefined && index < node.items.length) {
            if (typeof additionalItemSchema === 'boolean') {
                if (additionalItemSchema === false) {
                    validationResult.problems.push({
                        location: { offset: node.offset, length: node.length },
                        message: t('Array has too many items according to schema. Expected {0} or fewer.', index)
                    });
                }
                for (; index < node.items.length; index++) {
                    validationResult.processedProperties.add(String(index));
                    validationResult.propertiesValueMatches++;
                }
            }
            else {
                for (; index < node.items.length; index++) {
                    const itemValidationResult = new ValidationResult();
                    validate(node.items[index], additionalItemSchema, itemValidationResult, matchingSchemas, context);
                    validationResult.mergePropertyMatch(itemValidationResult);
                    validationResult.processedProperties.add(String(index));
                }
            }
        }
        const containsSchema = asSchema(schema.contains);
        if (containsSchema) {
            let containsCount = 0;
            for (let index = 0; index < node.items.length; index++) {
                const item = node.items[index];
                const itemValidationResult = new ValidationResult();
                validate(item, containsSchema, itemValidationResult, NoOpSchemaCollector.instance, context);
                if (!itemValidationResult.hasProblems()) {
                    containsCount++;
                    if (context.schemaDraft >= SchemaDraft.v2020_12) {
                        validationResult.processedProperties.add(String(index));
                    }
                }
            }
            if (containsCount === 0 && !isNumber(schema.minContains)) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.errorMessage || t('Array does not contain required item.')
                });
            }
            if (isNumber(schema.minContains) && containsCount < schema.minContains) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.errorMessage || t('Array has too few items that match the contains contraint. Expected {0} or more.', schema.minContains)
                });
            }
            if (isNumber(schema.maxContains) && containsCount > schema.maxContains) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: schema.errorMessage || t('Array has too many items that match the contains contraint. Expected {0} or less.', schema.maxContains)
                });
            }
        }
        const unevaluatedItems = schema.unevaluatedItems;
        if (unevaluatedItems !== undefined) {
            for (let i = 0; i < node.items.length; i++) {
                if (!validationResult.processedProperties.has(String(i))) {
                    if (unevaluatedItems === false) {
                        validationResult.problems.push({
                            location: { offset: node.offset, length: node.length },
                            message: t('Item does not match any validation rule from the array.')
                        });
                    }
                    else {
                        const itemValidationResult = new ValidationResult();
                        validate(node.items[i], schema.unevaluatedItems, itemValidationResult, matchingSchemas, context);
                        validationResult.mergePropertyMatch(itemValidationResult);
                    }
                }
                validationResult.processedProperties.add(String(i));
                validationResult.propertiesValueMatches++;
            }
        }
        if (isNumber(schema.minItems) && node.items.length < schema.minItems) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('Array has too few items. Expected {0} or more.', schema.minItems)
            });
        }
        if (isNumber(schema.maxItems) && node.items.length > schema.maxItems) {
            validationResult.problems.push({
                location: { offset: node.offset, length: node.length },
                message: t('Array has too many items. Expected {0} or fewer.', schema.maxItems)
            });
        }
        if (schema.uniqueItems === true) {
            const values = getNodeValue(node);
            function hasDuplicates() {
                for (let i = 0; i < values.length - 1; i++) {
                    const value = values[i];
                    for (let j = i + 1; j < values.length; j++) {
                        if (equals(value, values[j])) {
                            return true;
                        }
                    }
                }
                return false;
            }
            if (hasDuplicates()) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: t('Array has duplicate items.')
                });
            }
        }
    }
    function _validateObjectNode(node) {
        const seenKeys = Object.create(null);
        const unprocessedProperties = new Set();
        for (const propertyNode of node.properties) {
            const key = propertyNode.keyNode.value;
            seenKeys[key] = propertyNode.valueNode;
            unprocessedProperties.add(key);
        }
        if (Array.isArray(schema.required)) {
            for (const propertyName of schema.required) {
                if (!seenKeys[propertyName]) {
                    const keyNode = node.parent && node.parent.type === 'property' && node.parent.keyNode;
                    const location = keyNode ? { offset: keyNode.offset, length: keyNode.length } : { offset: node.offset, length: 1 };
                    validationResult.problems.push({
                        location: location,
                        message: t('Missing property "{0}".', propertyName)
                    });
                }
            }
        }
        const propertyProcessed = (prop) => {
            unprocessedProperties.delete(prop);
            validationResult.processedProperties.add(prop);
        };
        if (schema.properties) {
            for (const propertyName of Object.keys(schema.properties)) {
                propertyProcessed(propertyName);
                const propertySchema = schema.properties[propertyName];
                const child = seenKeys[propertyName];
                if (child) {
                    if (isBoolean(propertySchema)) {
                        if (!propertySchema) {
                            const propertyNode = child.parent;
                            validationResult.problems.push({
                                location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                                message: schema.errorMessage || t('Property {0} is not allowed.', propertyName)
                            });
                        }
                        else {
                            validationResult.propertiesMatches++;
                            validationResult.propertiesValueMatches++;
                        }
                    }
                    else {
                        const propertyValidationResult = new ValidationResult();
                        validate(child, propertySchema, propertyValidationResult, matchingSchemas, context);
                        validationResult.mergePropertyMatch(propertyValidationResult);
                    }
                }
            }
        }
        if (schema.patternProperties) {
            for (const propertyPattern of Object.keys(schema.patternProperties)) {
                const regex = extendedRegExp(propertyPattern);
                if (regex) {
                    const processed = [];
                    for (const propertyName of unprocessedProperties) {
                        if (regex.test(propertyName)) {
                            processed.push(propertyName);
                            const child = seenKeys[propertyName];
                            if (child) {
                                const propertySchema = schema.patternProperties[propertyPattern];
                                if (isBoolean(propertySchema)) {
                                    if (!propertySchema) {
                                        const propertyNode = child.parent;
                                        validationResult.problems.push({
                                            location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                                            message: schema.errorMessage || t('Property {0} is not allowed.', propertyName)
                                        });
                                    }
                                    else {
                                        validationResult.propertiesMatches++;
                                        validationResult.propertiesValueMatches++;
                                    }
                                }
                                else {
                                    const propertyValidationResult = new ValidationResult();
                                    validate(child, propertySchema, propertyValidationResult, matchingSchemas, context);
                                    validationResult.mergePropertyMatch(propertyValidationResult);
                                }
                            }
                        }
                    }
                    processed.forEach(propertyProcessed);
                }
            }
        }
        const additionalProperties = schema.additionalProperties;
        if (additionalProperties !== undefined) {
            for (const propertyName of unprocessedProperties) {
                propertyProcessed(propertyName);
                const child = seenKeys[propertyName];
                if (child) {
                    if (additionalProperties === false) {
                        const propertyNode = child.parent;
                        validationResult.problems.push({
                            location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                            message: schema.errorMessage || t('Property {0} is not allowed.', propertyName)
                        });
                    }
                    else if (additionalProperties !== true) {
                        const propertyValidationResult = new ValidationResult();
                        validate(child, additionalProperties, propertyValidationResult, matchingSchemas, context);
                        validationResult.mergePropertyMatch(propertyValidationResult);
                    }
                }
            }
        }
        const unevaluatedProperties = schema.unevaluatedProperties;
        if (unevaluatedProperties !== undefined) {
            const processed = [];
            for (const propertyName of unprocessedProperties) {
                if (!validationResult.processedProperties.has(propertyName)) {
                    processed.push(propertyName);
                    const child = seenKeys[propertyName];
                    if (child) {
                        if (unevaluatedProperties === false) {
                            const propertyNode = child.parent;
                            validationResult.problems.push({
                                location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                                message: schema.errorMessage || t('Property {0} is not allowed.', propertyName)
                            });
                        }
                        else if (unevaluatedProperties !== true) {
                            const propertyValidationResult = new ValidationResult();
                            validate(child, unevaluatedProperties, propertyValidationResult, matchingSchemas, context);
                            validationResult.mergePropertyMatch(propertyValidationResult);
                        }
                    }
                }
            }
            processed.forEach(propertyProcessed);
        }
        if (isNumber(schema.maxProperties)) {
            if (node.properties.length > schema.maxProperties) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: t('Object has more properties than limit of {0}.', schema.maxProperties)
                });
            }
        }
        if (isNumber(schema.minProperties)) {
            if (node.properties.length < schema.minProperties) {
                validationResult.problems.push({
                    location: { offset: node.offset, length: node.length },
                    message: t('Object has fewer properties than the required number of {0}', schema.minProperties)
                });
            }
        }
        if (schema.dependentRequired) {
            for (const key in schema.dependentRequired) {
                const prop = seenKeys[key];
                const propertyDeps = schema.dependentRequired[key];
                if (prop && Array.isArray(propertyDeps)) {
                    _validatePropertyDependencies(key, propertyDeps);
                }
            }
        }
        if (schema.dependentSchemas) {
            for (const key in schema.dependentSchemas) {
                const prop = seenKeys[key];
                const propertyDeps = schema.dependentSchemas[key];
                if (prop && isObject(propertyDeps)) {
                    _validatePropertyDependencies(key, propertyDeps);
                }
            }
        }
        if (schema.dependencies) {
            for (const key in schema.dependencies) {
                const prop = seenKeys[key];
                if (prop) {
                    _validatePropertyDependencies(key, schema.dependencies[key]);
                }
            }
        }
        const propertyNames = asSchema(schema.propertyNames);
        if (propertyNames) {
            for (const f of node.properties) {
                const key = f.keyNode;
                if (key) {
                    validate(key, propertyNames, validationResult, NoOpSchemaCollector.instance, context);
                }
            }
        }
        function _validatePropertyDependencies(key, propertyDep) {
            if (Array.isArray(propertyDep)) {
                for (const requiredProp of propertyDep) {
                    if (!seenKeys[requiredProp]) {
                        validationResult.problems.push({
                            location: { offset: node.offset, length: node.length },
                            message: t('Object is missing property {0} required by property {1}.', requiredProp, key)
                        });
                    }
                    else {
                        validationResult.propertiesValueMatches++;
                    }
                }
            }
            else {
                const propertySchema = asSchema(propertyDep);
                if (propertySchema) {
                    const propertyValidationResult = new ValidationResult();
                    validate(node, propertySchema, propertyValidationResult, matchingSchemas, context);
                    validationResult.mergePropertyMatch(propertyValidationResult);
                }
            }
        }
    }
}
function parse(textDocument, config) {
    const problems = [];
    let lastProblemOffset = -1;
    const text = textDocument.getText();
    const scanner = createScanner(text, false);
    const commentRanges = config && config.collectComments ? [] : undefined;
    function _scanNext() {
        while (true) {
            const token = scanner.scan();
            _checkScanError();
            switch (token) {
                case 12 /* Json.SyntaxKind.LineCommentTrivia */:
                case 13 /* Json.SyntaxKind.BlockCommentTrivia */:
                    if (Array.isArray(commentRanges)) {
                        commentRanges.push(Range.create(textDocument.positionAt(scanner.getTokenOffset()), textDocument.positionAt(scanner.getTokenOffset() + scanner.getTokenLength())));
                    }
                    break;
                case 15 /* Json.SyntaxKind.Trivia */:
                case 14 /* Json.SyntaxKind.LineBreakTrivia */:
                    break;
                default:
                    return token;
            }
        }
    }
    function _errorAtRange(message, code, startOffset, endOffset, severity = DiagnosticSeverity.Error) {
        if (problems.length === 0 || startOffset !== lastProblemOffset) {
            const range = Range.create(textDocument.positionAt(startOffset), textDocument.positionAt(endOffset));
            problems.push(Diagnostic.create(range, message, severity, code, textDocument.languageId));
            lastProblemOffset = startOffset;
        }
    }
    function _error(message, code, node = undefined, skipUntilAfter = [], skipUntil = []) {
        let start = scanner.getTokenOffset();
        let end = scanner.getTokenOffset() + scanner.getTokenLength();
        if (start === end && start > 0) {
            start--;
            while (start > 0 && /\s/.test(text.charAt(start))) {
                start--;
            }
            end = start + 1;
        }
        _errorAtRange(message, code, start, end);
        if (node) {
            _finalize(node, false);
        }
        if (skipUntilAfter.length + skipUntil.length > 0) {
            let token = scanner.getToken();
            while (token !== 17 /* Json.SyntaxKind.EOF */) {
                if (skipUntilAfter.indexOf(token) !== -1) {
                    _scanNext();
                    break;
                }
                else if (skipUntil.indexOf(token) !== -1) {
                    break;
                }
                token = _scanNext();
            }
        }
        return node;
    }
    function _checkScanError() {
        switch (scanner.getTokenError()) {
            case 4 /* Json.ScanError.InvalidUnicode */:
                _error(t('Invalid unicode sequence in string.'), ErrorCode.InvalidUnicode);
                return true;
            case 5 /* Json.ScanError.InvalidEscapeCharacter */:
                _error(t('Invalid escape character in string.'), ErrorCode.InvalidEscapeCharacter);
                return true;
            case 3 /* Json.ScanError.UnexpectedEndOfNumber */:
                _error(t('Unexpected end of number.'), ErrorCode.UnexpectedEndOfNumber);
                return true;
            case 1 /* Json.ScanError.UnexpectedEndOfComment */:
                _error(t('Unexpected end of comment.'), ErrorCode.UnexpectedEndOfComment);
                return true;
            case 2 /* Json.ScanError.UnexpectedEndOfString */:
                _error(t('Unexpected end of string.'), ErrorCode.UnexpectedEndOfString);
                return true;
            case 6 /* Json.ScanError.InvalidCharacter */:
                _error(t('Invalid characters in string. Control characters must be escaped.'), ErrorCode.InvalidCharacter);
                return true;
        }
        return false;
    }
    function _finalize(node, scanNext) {
        node.length = scanner.getTokenOffset() + scanner.getTokenLength() - node.offset;
        if (scanNext) {
            _scanNext();
        }
        return node;
    }
    function _parseArray(parent) {
        if (scanner.getToken() !== 3 /* Json.SyntaxKind.OpenBracketToken */) {
            return undefined;
        }
        const node = new ArrayASTNodeImpl(parent, scanner.getTokenOffset());
        _scanNext(); // consume OpenBracketToken
        let needsComma = false;
        while (scanner.getToken() !== 4 /* Json.SyntaxKind.CloseBracketToken */ && scanner.getToken() !== 17 /* Json.SyntaxKind.EOF */) {
            if (scanner.getToken() === 5 /* Json.SyntaxKind.CommaToken */) {
                if (!needsComma) {
                    _error(t('Value expected'), ErrorCode.ValueExpected);
                }
                const commaOffset = scanner.getTokenOffset();
                _scanNext(); // consume comma
                if (scanner.getToken() === 4 /* Json.SyntaxKind.CloseBracketToken */) {
                    if (needsComma) {
                        _errorAtRange(t('Trailing comma'), ErrorCode.TrailingComma, commaOffset, commaOffset + 1);
                    }
                    continue;
                }
            }
            else if (needsComma) {
                _error(t('Expected comma'), ErrorCode.CommaExpected);
            }
            const item = _parseValue(node);
            if (!item) {
                _error(t('Value expected'), ErrorCode.ValueExpected, undefined, [], [4 /* Json.SyntaxKind.CloseBracketToken */, 5 /* Json.SyntaxKind.CommaToken */]);
            }
            else {
                node.items.push(item);
            }
            needsComma = true;
        }
        if (scanner.getToken() !== 4 /* Json.SyntaxKind.CloseBracketToken */) {
            return _error(t('Expected comma or closing bracket'), ErrorCode.CommaOrCloseBacketExpected, node);
        }
        return _finalize(node, true);
    }
    const keyPlaceholder = new StringASTNodeImpl(undefined, 0, 0);
    function _parseProperty(parent, keysSeen) {
        const node = new PropertyASTNodeImpl(parent, scanner.getTokenOffset(), keyPlaceholder);
        let key = _parseString(node);
        if (!key) {
            if (scanner.getToken() === 16 /* Json.SyntaxKind.Unknown */) {
                // give a more helpful error message
                _error(t('Property keys must be doublequoted'), ErrorCode.PropertyKeysMustBeDoublequoted);
                const keyNode = new StringASTNodeImpl(node, scanner.getTokenOffset(), scanner.getTokenLength());
                keyNode.value = scanner.getTokenValue();
                key = keyNode;
                _scanNext(); // consume Unknown
            }
            else {
                return undefined;
            }
        }
        node.keyNode = key;
        // For JSON files that forbid code comments, there is a convention to use the key name "//" to add comments.
        // Multiple instances of "//" are okay.
        if (key.value !== "//") {
            const seen = keysSeen[key.value];
            if (seen) {
                _errorAtRange(t("Duplicate object key"), ErrorCode.DuplicateKey, node.keyNode.offset, node.keyNode.offset + node.keyNode.length, DiagnosticSeverity.Warning);
                if (isObject(seen)) {
                    _errorAtRange(t("Duplicate object key"), ErrorCode.DuplicateKey, seen.keyNode.offset, seen.keyNode.offset + seen.keyNode.length, DiagnosticSeverity.Warning);
                }
                keysSeen[key.value] = true; // if the same key is duplicate again, avoid duplicate error reporting
            }
            else {
                keysSeen[key.value] = node;
            }
        }
        if (scanner.getToken() === 6 /* Json.SyntaxKind.ColonToken */) {
            node.colonOffset = scanner.getTokenOffset();
            _scanNext(); // consume ColonToken
        }
        else {
            _error(t('Colon expected'), ErrorCode.ColonExpected);
            if (scanner.getToken() === 10 /* Json.SyntaxKind.StringLiteral */ && textDocument.positionAt(key.offset + key.length).line < textDocument.positionAt(scanner.getTokenOffset()).line) {
                node.length = key.length;
                return node;
            }
        }
        const value = _parseValue(node);
        if (!value) {
            return _error(t('Value expected'), ErrorCode.ValueExpected, node, [], [2 /* Json.SyntaxKind.CloseBraceToken */, 5 /* Json.SyntaxKind.CommaToken */]);
        }
        node.valueNode = value;
        node.length = value.offset + value.length - node.offset;
        return node;
    }
    function _parseObject(parent) {
        if (scanner.getToken() !== 1 /* Json.SyntaxKind.OpenBraceToken */) {
            return undefined;
        }
        const node = new ObjectASTNodeImpl(parent, scanner.getTokenOffset());
        const keysSeen = Object.create(null);
        _scanNext(); // consume OpenBraceToken
        let needsComma = false;
        while (scanner.getToken() !== 2 /* Json.SyntaxKind.CloseBraceToken */ && scanner.getToken() !== 17 /* Json.SyntaxKind.EOF */) {
            if (scanner.getToken() === 5 /* Json.SyntaxKind.CommaToken */) {
                if (!needsComma) {
                    _error(t('Property expected'), ErrorCode.PropertyExpected);
                }
                const commaOffset = scanner.getTokenOffset();
                _scanNext(); // consume comma
                if (scanner.getToken() === 2 /* Json.SyntaxKind.CloseBraceToken */) {
                    if (needsComma) {
                        _errorAtRange(t('Trailing comma'), ErrorCode.TrailingComma, commaOffset, commaOffset + 1);
                    }
                    continue;
                }
            }
            else if (needsComma) {
                _error(t('Expected comma'), ErrorCode.CommaExpected);
            }
            const property = _parseProperty(node, keysSeen);
            if (!property) {
                _error(t('Property expected'), ErrorCode.PropertyExpected, undefined, [], [2 /* Json.SyntaxKind.CloseBraceToken */, 5 /* Json.SyntaxKind.CommaToken */]);
            }
            else {
                node.properties.push(property);
            }
            needsComma = true;
        }
        if (scanner.getToken() !== 2 /* Json.SyntaxKind.CloseBraceToken */) {
            return _error(t('Expected comma or closing brace'), ErrorCode.CommaOrCloseBraceExpected, node);
        }
        return _finalize(node, true);
    }
    function _parseString(parent) {
        if (scanner.getToken() !== 10 /* Json.SyntaxKind.StringLiteral */) {
            return undefined;
        }
        const node = new StringASTNodeImpl(parent, scanner.getTokenOffset());
        node.value = scanner.getTokenValue();
        return _finalize(node, true);
    }
    function _parseNumber(parent) {
        if (scanner.getToken() !== 11 /* Json.SyntaxKind.NumericLiteral */) {
            return undefined;
        }
        const node = new NumberASTNodeImpl(parent, scanner.getTokenOffset());
        if (scanner.getTokenError() === 0 /* Json.ScanError.None */) {
            const tokenValue = scanner.getTokenValue();
            try {
                const numberValue = JSON.parse(tokenValue);
                if (!isNumber(numberValue)) {
                    return _error(t('Invalid number format.'), ErrorCode.Undefined, node);
                }
                node.value = numberValue;
            }
            catch (e) {
                return _error(t('Invalid number format.'), ErrorCode.Undefined, node);
            }
            node.isInteger = tokenValue.indexOf('.') === -1;
        }
        return _finalize(node, true);
    }
    function _parseLiteral(parent) {
        switch (scanner.getToken()) {
            case 7 /* Json.SyntaxKind.NullKeyword */:
                return _finalize(new NullASTNodeImpl(parent, scanner.getTokenOffset()), true);
            case 8 /* Json.SyntaxKind.TrueKeyword */:
                return _finalize(new BooleanASTNodeImpl(parent, true, scanner.getTokenOffset()), true);
            case 9 /* Json.SyntaxKind.FalseKeyword */:
                return _finalize(new BooleanASTNodeImpl(parent, false, scanner.getTokenOffset()), true);
            default:
                return undefined;
        }
    }
    function _parseValue(parent) {
        return _parseArray(parent) || _parseObject(parent) || _parseString(parent) || _parseNumber(parent) || _parseLiteral(parent);
    }
    let _root = undefined;
    const token = _scanNext();
    if (token !== 17 /* Json.SyntaxKind.EOF */) {
        _root = _parseValue(_root);
        if (!_root) {
            _error(t('Expected a JSON object, array or literal.'), ErrorCode.Undefined);
        }
        else if (scanner.getToken() !== 17 /* Json.SyntaxKind.EOF */) {
            _error(t('End of file expected.'), ErrorCode.Undefined);
        }
    }
    return new JSONDocument(_root, problems, commentRanges);
}

export { ASTNodeImpl, ArrayASTNodeImpl, BooleanASTNodeImpl, EnumMatch, JSONDocument, NullASTNodeImpl, NumberASTNodeImpl, ObjectASTNodeImpl, PropertyASTNodeImpl, StringASTNodeImpl, ValidationResult, asSchema, contains, getNodePath, getNodeValue, newJSONDocument, parse };
