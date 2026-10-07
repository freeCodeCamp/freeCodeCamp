import { isAbstractType, isInputObjectType, isListType, isNonNullType, isObjectType, isScalarType, Kind, } from 'graphql';
import { parseMapper } from './mappers.js';
import { DEFAULT_SCALARS } from './scalars.js';
export const getConfigValue = (value, defaultValue) => {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    return value;
};
export function quoteIfNeeded(array, joinWith = ' & ') {
    if (array.length === 0) {
        return '';
    }
    if (array.length === 1) {
        return array[0];
    }
    return `(${array.join(joinWith)})`;
}
export function block(array) {
    return array && array.length !== 0 ? '{\n' + array.join('\n') + '\n}' : '';
}
export function wrapWithSingleQuotes(value, skipNumericCheck = false) {
    if (skipNumericCheck) {
        if (typeof value === 'number') {
            return String(value);
        }
        return `'${value}'`;
    }
    if (typeof value === 'number' ||
        (typeof value === 'string' && !isNaN(parseInt(value)) && parseFloat(value).toString() === value)) {
        return String(value);
    }
    return `'${value}'`;
}
export function breakLine(str) {
    return str + '\n';
}
export function indent(str, count = 1) {
    return new Array(count).fill('  ').join('') + str;
}
export function indentMultiline(str, count = 1) {
    const indentation = new Array(count).fill('  ').join('');
    const replaceWith = '\n' + indentation;
    return indentation + str.replace(/\n/g, replaceWith);
}
export function transformComment(comment, indentLevel = 0, disabled = false) {
    if (!comment || comment === '' || disabled) {
        return '';
    }
    if (isStringValueNode(comment)) {
        comment = comment.value;
    }
    comment = comment.split('*/').join('*\\/');
    let lines = comment.split('\n');
    if (lines.length === 1) {
        return indent(`/** ${lines[0]} */\n`, indentLevel);
    }
    lines = ['/**', ...lines.map(line => ` * ${line}`), ' */\n'];
    return stripTrailingSpaces(lines.map(line => indent(line, indentLevel)).join('\n'));
}
export class DeclarationBlock {
    constructor(_config) {
        this._config = _config;
        this._decorator = null;
        this._export = false;
        this._name = null;
        this._kind = null;
        this._methodName = null;
        this._content = null;
        this._block = null;
        this._nameGenerics = null;
        this._comment = null;
        this._ignoreBlockWrapper = false;
        this._config = {
            blockWrapper: '',
            blockTransformer: block => block,
            enumNameValueSeparator: ':',
            ...this._config,
        };
    }
    withDecorator(decorator) {
        this._decorator = decorator;
        return this;
    }
    export(exp = true) {
        if (!this._config.ignoreExport) {
            this._export = exp;
        }
        return this;
    }
    asKind(kind) {
        this._kind = kind;
        return this;
    }
    withComment(comment, disabled = false) {
        const nonEmptyComment = !!(isStringValueNode(comment) ? comment.value : comment);
        if (nonEmptyComment && !disabled) {
            this._comment = transformComment(comment, 0);
        }
        return this;
    }
    withMethodCall(methodName, ignoreBlockWrapper = false) {
        this._methodName = methodName;
        this._ignoreBlockWrapper = ignoreBlockWrapper;
        return this;
    }
    withBlock(block) {
        this._block = block;
        return this;
    }
    withContent(content) {
        this._content = content;
        return this;
    }
    withName(name, generics = null) {
        this._name = name;
        this._nameGenerics = generics;
        return this;
    }
    get string() {
        let result = '';
        if (this._decorator) {
            result += this._decorator + '\n';
        }
        if (this._export) {
            result += 'export ';
        }
        if (this._kind) {
            let extra = '';
            let name = '';
            if (['type', 'const', 'var', 'let'].includes(this._kind)) {
                extra = '= ';
            }
            if (this._name) {
                name = this._name + (this._nameGenerics || '') + ' ';
            }
            result += this._kind + ' ' + name + extra;
        }
        if (this._block) {
            if (this._content) {
                result += this._content;
            }
            const blockWrapper = this._ignoreBlockWrapper ? '' : this._config.blockWrapper;
            const before = '{' + blockWrapper;
            const after = blockWrapper + '}';
            const block = [before, this._block, after].filter(val => !!val).join('\n');
            if (this._methodName) {
                result += `${this._methodName}(${this._config.blockTransformer(block)})`;
            }
            else {
                result += this._config.blockTransformer(block);
            }
        }
        else if (this._content) {
            result += this._content;
        }
        else if (this._kind) {
            result += this._config.blockTransformer('{}');
        }
        return stripTrailingSpaces((this._comment ? this._comment : '') +
            result +
            (this._kind === 'interface' || this._kind === 'enum' || this._kind === 'namespace' || this._kind === 'function'
                ? ''
                : ';') +
            '\n');
    }
}
export function getBaseTypeNode(typeNode) {
    if (typeNode.kind === Kind.LIST_TYPE || typeNode.kind === Kind.NON_NULL_TYPE) {
        return getBaseTypeNode(typeNode.type);
    }
    return typeNode;
}
export function convertNameParts(str, func, removeUnderscore = false) {
    if (removeUnderscore) {
        return func(str);
    }
    return str
        .split('_')
        .map(s => func(s))
        .join('_');
}
export function buildScalarsFromConfig(schema, config, defaultScalarsMapping = DEFAULT_SCALARS, defaultScalarType = 'any') {
    return buildScalars(schema, config.scalars, defaultScalarsMapping, config.strictScalars ? null : config.defaultScalarType || defaultScalarType);
}
export function buildScalars(schema, scalarsMapping, defaultScalarsMapping = DEFAULT_SCALARS, defaultScalarType = 'any') {
    const result = {};
    Object.keys(defaultScalarsMapping).forEach(name => {
        result[name] = parseMapper(defaultScalarsMapping[name]);
    });
    if (schema) {
        const typeMap = schema.getTypeMap();
        Object.keys(typeMap)
            .map(typeName => typeMap[typeName])
            .filter(type => isScalarType(type))
            .map((scalarType) => {
            var _a;
            const { name } = scalarType;
            if (typeof scalarsMapping === 'string') {
                const value = parseMapper(scalarsMapping + '#' + name, name);
                result[name] = value;
            }
            else if (scalarsMapping && typeof scalarsMapping[name] === 'string') {
                const value = parseMapper(scalarsMapping[name], name);
                result[name] = value;
            }
            else if (scalarsMapping === null || scalarsMapping === void 0 ? void 0 : scalarsMapping[name]) {
                result[name] = {
                    isExternal: false,
                    type: JSON.stringify(scalarsMapping[name]),
                };
            }
            else if ((_a = scalarType.extensions) === null || _a === void 0 ? void 0 : _a.codegenScalarType) {
                result[name] = {
                    isExternal: false,
                    type: scalarType.extensions.codegenScalarType,
                };
            }
            else if (!defaultScalarsMapping[name]) {
                if (defaultScalarType === null) {
                    throw new Error(`Unknown scalar type ${name}. Please override it using the "scalars" configuration field!`);
                }
                result[name] = {
                    isExternal: false,
                    type: defaultScalarType,
                };
            }
        });
    }
    else if (scalarsMapping) {
        if (typeof scalarsMapping === 'string') {
            throw new Error('Cannot use string scalars mapping when building without a schema');
        }
        Object.keys(scalarsMapping).forEach(name => {
            if (typeof scalarsMapping[name] === 'string') {
                const value = parseMapper(scalarsMapping[name], name);
                result[name] = value;
            }
            else {
                result[name] = {
                    isExternal: false,
                    type: JSON.stringify(scalarsMapping[name]),
                };
            }
        });
    }
    return result;
}
function isStringValueNode(node) {
    return node && typeof node === 'object' && node.kind === Kind.STRING;
}
// will be removed on next release because tools already has it
export function getRootTypeNames(schema) {
    return [schema.getQueryType(), schema.getMutationType(), schema.getSubscriptionType()]
        .filter(t => t)
        .map(t => t.name);
}
export function stripMapperTypeInterpolation(identifier) {
    return identifier.trim().replace(/<{.*}>/, '');
}
export const OMIT_TYPE = 'export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;';
export const REQUIRE_FIELDS_TYPE = `export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };`;
/**
 * merge selection sets into a new selection set without mutating the inputs.
 */
export function mergeSelectionSets(selectionSet1, selectionSet2) {
    const newSelections = [...selectionSet1.selections];
    for (let selection2 of selectionSet2.selections) {
        if (selection2.kind === 'FragmentSpread' || selection2.kind === 'InlineFragment') {
            newSelections.push(selection2);
            continue;
        }
        if (selection2.kind !== 'Field') {
            throw new TypeError('Invalid state.');
        }
        const match = newSelections.find(selection1 => selection1.kind === 'Field' &&
            getFieldNodeNameValue(selection1) === getFieldNodeNameValue(selection2));
        if (match &&
            // recursively merge all selection sets
            match.kind === 'Field' &&
            match.selectionSet &&
            selection2.selectionSet) {
            selection2 = {
                ...selection2,
                selectionSet: mergeSelectionSets(match.selectionSet, selection2.selectionSet),
            };
        }
        newSelections.push(selection2);
    }
    return {
        kind: Kind.SELECTION_SET,
        selections: newSelections,
    };
}
export const getFieldNodeNameValue = (node) => {
    return (node.alias || node.name).value;
};
export function separateSelectionSet(selections) {
    return {
        fields: selections.filter(s => s.kind === Kind.FIELD),
        inlines: selections.filter(s => s.kind === Kind.INLINE_FRAGMENT),
        spreads: selections.filter(s => s.kind === Kind.FRAGMENT_SPREAD),
    };
}
export function getPossibleTypes(schema, type) {
    if (isListType(type) || isNonNullType(type)) {
        return getPossibleTypes(schema, type.ofType);
    }
    if (isObjectType(type)) {
        return [type];
    }
    if (isAbstractType(type)) {
        return schema.getPossibleTypes(type);
    }
    return [];
}
export function hasConditionalDirectives(field) {
    var _a;
    const CONDITIONAL_DIRECTIVES = ['skip', 'include'];
    return (_a = field.directives) === null || _a === void 0 ? void 0 : _a.some(directive => CONDITIONAL_DIRECTIVES.includes(directive.name.value));
}
export function wrapTypeWithModifiers(baseType, type, options) {
    let currentType = type;
    const modifiers = [];
    while (currentType) {
        if (isNonNullType(currentType)) {
            currentType = currentType.ofType;
        }
        else {
            modifiers.push(options.wrapOptional);
        }
        if (isListType(currentType)) {
            modifiers.push(options.wrapArray);
            currentType = currentType.ofType;
        }
        else {
            break;
        }
    }
    return modifiers.reduceRight((result, modifier) => modifier(result), baseType);
}
export function removeDescription(nodes) {
    return nodes.map(node => ({ ...node, description: undefined }));
}
export function wrapTypeNodeWithModifiers(baseType, typeNode) {
    switch (typeNode.kind) {
        case Kind.NAMED_TYPE: {
            return `Maybe<${baseType}>`;
        }
        case Kind.NON_NULL_TYPE: {
            const innerType = wrapTypeNodeWithModifiers(baseType, typeNode.type);
            return clearOptional(innerType);
        }
        case Kind.LIST_TYPE: {
            const innerType = wrapTypeNodeWithModifiers(baseType, typeNode.type);
            return `Maybe<Array<${innerType}>>`;
        }
    }
}
function clearOptional(str) {
    const rgx = new RegExp(`^Maybe<(.*?)>$`, 'i');
    if (str.startsWith(`Maybe`)) {
        return str.replace(rgx, '$1');
    }
    return str;
}
function stripTrailingSpaces(str) {
    return str.replace(/ +\n/g, '\n');
}
const isOneOfTypeCache = new WeakMap();
export function isOneOfInputObjectType(namedType) {
    var _a, _b;
    if (!namedType) {
        return false;
    }
    let isOneOfType = isOneOfTypeCache.get(namedType);
    if (isOneOfType !== undefined) {
        return isOneOfType;
    }
    isOneOfType =
        isInputObjectType(namedType) &&
            (namedType.isOneOf ||
                ((_b = (_a = namedType.astNode) === null || _a === void 0 ? void 0 : _a.directives) === null || _b === void 0 ? void 0 : _b.some(d => d.name.value === 'oneOf')));
    isOneOfTypeCache.set(namedType, isOneOfType);
    return isOneOfType;
}
