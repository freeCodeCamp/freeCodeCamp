import { visit, TokenKind, } from 'graphql';
const MAX_LINE_LENGTH = 80;
let commentsRegistry = {};
export function resetComments() {
    commentsRegistry = {};
}
export function collectComment(node) {
    var _a;
    const entityName = (_a = node.name) === null || _a === void 0 ? void 0 : _a.value;
    if (entityName == null) {
        return;
    }
    pushComment(node, entityName);
    switch (node.kind) {
        case 'EnumTypeDefinition':
            if (node.values) {
                for (const value of node.values) {
                    pushComment(value, entityName, value.name.value);
                }
            }
            break;
        case 'ObjectTypeDefinition':
        case 'InputObjectTypeDefinition':
        case 'InterfaceTypeDefinition':
            if (node.fields) {
                for (const field of node.fields) {
                    pushComment(field, entityName, field.name.value);
                    if (isFieldDefinitionNode(field) && field.arguments) {
                        for (const arg of field.arguments) {
                            pushComment(arg, entityName, field.name.value, arg.name.value);
                        }
                    }
                }
            }
            break;
    }
}
export function pushComment(node, entity, field, argument) {
    const comment = getComment(node);
    if (typeof comment !== 'string' || comment.length === 0) {
        return;
    }
    const keys = [entity];
    if (field) {
        keys.push(field);
        if (argument) {
            keys.push(argument);
        }
    }
    const path = keys.join('.');
    if (!commentsRegistry[path]) {
        commentsRegistry[path] = [];
    }
    commentsRegistry[path].push(comment);
}
export function printComment(comment) {
    return '\n# ' + comment.replace(/\n/g, '\n# ');
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * NOTE: ==> This file has been modified just to add comments to the printed AST
 * This is a temp measure, we will move to using the original non modified printer.js ASAP.
 */
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
    return maybeArray ? maybeArray.filter(x => x).join(separator || '') : '';
}
function hasMultilineItems(maybeArray) {
    var _a;
    return (_a = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some(str => str.includes('\n'))) !== null && _a !== void 0 ? _a : false;
}
function addDescription(cb) {
    return (node, _key, _parent, path, ancestors) => {
        var _a;
        const keys = [];
        const parent = path.reduce((prev, key) => {
            if (['fields', 'arguments', 'values'].includes(key) && prev.name) {
                keys.push(prev.name.value);
            }
            return prev[key];
        }, ancestors[0]);
        const key = [...keys, (_a = parent === null || parent === void 0 ? void 0 : parent.name) === null || _a === void 0 ? void 0 : _a.value].filter(Boolean).join('.');
        const items = [];
        if (node.kind.includes('Definition') && commentsRegistry[key]) {
            items.push(...commentsRegistry[key]);
        }
        return join([...items.map(printComment), node.description, cb(node, _key, _parent, path, ancestors)], '\n');
    };
}
function indent(maybeString) {
    return maybeString && `  ${maybeString.replace(/\n/g, '\n  ')}`;
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
    return array && array.length !== 0 ? `{\n${indent(join(array, '\n'))}\n}` : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
    return maybeString ? start + maybeString + (end || '') : '';
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */
function printBlockString(value, isDescription = false) {
    const escaped = value.replace(/"""/g, '\\"""');
    return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1
        ? `"""${escaped.replace(/"$/, '"\n')}"""`
        : `"""\n${isDescription ? escaped : indent(escaped)}\n"""`;
}
const printDocASTReducer = {
    Name: { leave: node => node.value },
    Variable: { leave: node => '$' + node.name },
    // Document
    Document: {
        leave: node => join(node.definitions, '\n\n'),
    },
    OperationDefinition: {
        leave: node => {
            const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
            const prefix = join([node.operation, join([node.name, varDefs]), join(node.directives, ' ')], ' ');
            // the query short form.
            return prefix + ' ' + node.selectionSet;
        },
    },
    VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives }) => variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' ')),
    },
    SelectionSet: { leave: ({ selections }) => block(selections) },
    Field: {
        leave({ alias, name, arguments: args, directives, selectionSet }) {
            const prefix = wrap('', alias, ': ') + name;
            let argsLine = prefix + wrap('(', join(args, ', '), ')');
            if (argsLine.length > MAX_LINE_LENGTH) {
                argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
            }
            return join([argsLine, join(directives, ' '), selectionSet], ' ');
        },
    },
    Argument: { leave: ({ name, value }) => name + ': ' + value },
    // Fragments
    FragmentSpread: {
        leave: ({ name, directives }) => '...' + name + wrap(' ', join(directives, ' ')),
    },
    InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet }) => join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' '),
    },
    FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => 
        // Note: fragment variable definitions are experimental and may be changed
        // or removed in the future.
        `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` +
            `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` +
            selectionSet,
    },
    // Value
    IntValue: { leave: ({ value }) => value },
    FloatValue: { leave: ({ value }) => value },
    StringValue: {
        leave: ({ value, block: isBlockString }) => {
            if (isBlockString) {
                return printBlockString(value);
            }
            return JSON.stringify(value);
        },
    },
    BooleanValue: { leave: ({ value }) => (value ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value }) => value },
    ListValue: { leave: ({ values }) => '[' + join(values, ', ') + ']' },
    ObjectValue: { leave: ({ fields }) => '{' + join(fields, ', ') + '}' },
    ObjectField: { leave: ({ name, value }) => name + ': ' + value },
    // Directive
    Directive: {
        leave: ({ name, arguments: args }) => '@' + name + wrap('(', join(args, ', '), ')'),
    },
    // Type
    NamedType: { leave: ({ name }) => name },
    ListType: { leave: ({ type }) => '[' + type + ']' },
    NonNullType: { leave: ({ type }) => type + '!' },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ directives, operationTypes }) => join(['schema', join(directives, ' '), block(operationTypes)], ' '),
    },
    OperationTypeDefinition: {
        leave: ({ operation, type }) => operation + ': ' + type,
    },
    ScalarTypeDefinition: {
        leave: ({ name, directives }) => join(['scalar', name, join(directives, ' ')], ' '),
    },
    ObjectTypeDefinition: {
        leave: ({ name, interfaces, directives, fields }) => join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' '),
    },
    FieldDefinition: {
        leave: ({ name, arguments: args, type, directives }) => name +
            (hasMultilineItems(args)
                ? wrap('(\n', indent(join(args, '\n')), '\n)')
                : wrap('(', join(args, ', '), ')')) +
            ': ' +
            type +
            wrap(' ', join(directives, ' ')),
    },
    InputValueDefinition: {
        leave: ({ name, type, defaultValue, directives }) => join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' '),
    },
    InterfaceTypeDefinition: {
        leave: ({ name, interfaces, directives, fields }) => join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' '),
    },
    UnionTypeDefinition: {
        leave: ({ name, directives, types }) => join(['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))], ' '),
    },
    EnumTypeDefinition: {
        leave: ({ name, directives, values }) => join(['enum', name, join(directives, ' '), block(values)], ' '),
    },
    EnumValueDefinition: {
        leave: ({ name, directives }) => join([name, join(directives, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
        leave: ({ name, directives, fields }) => join(['input', name, join(directives, ' '), block(fields)], ' '),
    },
    DirectiveDefinition: {
        leave: ({ name, arguments: args, repeatable, locations }) => 'directive @' +
            name +
            (hasMultilineItems(args)
                ? wrap('(\n', indent(join(args, '\n')), '\n)')
                : wrap('(', join(args, ', '), ')')) +
            (repeatable ? ' repeatable' : '') +
            ' on ' +
            join(locations, ' | '),
    },
    SchemaExtension: {
        leave: ({ directives, operationTypes }) => join(['extend schema', join(directives, ' '), block(operationTypes)], ' '),
    },
    ScalarTypeExtension: {
        leave: ({ name, directives }) => join(['extend scalar', name, join(directives, ' ')], ' '),
    },
    ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' '),
    },
    InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' '),
    },
    UnionTypeExtension: {
        leave: ({ name, directives, types }) => join(['extend union', name, join(directives, ' '), wrap('= ', join(types, ' | '))], ' '),
    },
    EnumTypeExtension: {
        leave: ({ name, directives, values }) => join(['extend enum', name, join(directives, ' '), block(values)], ' '),
    },
    InputObjectTypeExtension: {
        leave: ({ name, directives, fields }) => join(['extend input', name, join(directives, ' '), block(fields)], ' '),
    },
};
const printDocASTReducerWithComments = Object.keys(printDocASTReducer).reduce((prev, key) => ({
    ...prev,
    [key]: {
        leave: addDescription(printDocASTReducer[key].leave),
    },
}), {});
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
export function printWithComments(ast) {
    return visit(ast, printDocASTReducerWithComments);
}
function isFieldDefinitionNode(node) {
    return node.kind === 'FieldDefinition';
}
// graphql < v13 and > v15 does not export getDescription
export function getDescription(node, options) {
    if (node.description != null) {
        return node.description.value;
    }
    if (options === null || options === void 0 ? void 0 : options.commentDescriptions) {
        return getComment(node);
    }
}
export function getComment(node) {
    const rawValue = getLeadingCommentBlock(node);
    if (rawValue !== undefined) {
        return dedentBlockStringValue(`\n${rawValue}`);
    }
}
export function getLeadingCommentBlock(node) {
    const loc = node.loc;
    if (!loc) {
        return;
    }
    const comments = [];
    let token = loc.startToken.prev;
    while (token != null &&
        token.kind === TokenKind.COMMENT &&
        token.next != null &&
        token.prev != null &&
        token.line + 1 === token.next.line &&
        token.line !== token.prev.line) {
        const value = String(token.value);
        comments.push(value);
        token = token.prev;
    }
    return comments.length > 0 ? comments.reverse().join('\n') : undefined;
}
export function dedentBlockStringValue(rawString) {
    // Expand a block string's raw value into independent lines.
    const lines = rawString.split(/\r\n|[\n\r]/g);
    // Remove common indentation from all lines but first.
    const commonIndent = getBlockStringIndentation(lines);
    if (commonIndent !== 0) {
        for (let i = 1; i < lines.length; i++) {
            lines[i] = lines[i].slice(commonIndent);
        }
    }
    // Remove leading and trailing blank lines.
    while (lines.length > 0 && isBlank(lines[0])) {
        lines.shift();
    }
    while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
        lines.pop();
    }
    // Return a string of the lines joined with U+000A.
    return lines.join('\n');
}
/**
 * @internal
 */
export function getBlockStringIndentation(lines) {
    let commonIndent = null;
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) {
            continue; // skip empty lines
        }
        if (commonIndent === null || indent < commonIndent) {
            commonIndent = indent;
            if (commonIndent === 0) {
                break;
            }
        }
    }
    return commonIndent === null ? 0 : commonIndent;
}
function leadingWhitespace(str) {
    let i = 0;
    while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
        i++;
    }
    return i;
}
function isBlank(str) {
    return leadingWhitespace(str) === str.length;
}
