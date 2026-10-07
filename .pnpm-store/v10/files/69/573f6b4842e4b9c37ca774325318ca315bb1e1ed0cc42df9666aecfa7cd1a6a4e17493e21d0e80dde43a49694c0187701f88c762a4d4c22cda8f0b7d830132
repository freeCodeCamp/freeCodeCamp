/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');

const {DEFAULT_HANDLE_KEY} = require('../util/DefaultHandleKey');

import type {CompilerContextDocument} from './CompilerContext';
import type {
  Argument,
  ArgumentDefinition,
  ArgumentValue,
  Directive,
  Field,
  LocalArgumentDefinition,
  Node,
  Selection,
} from './IR';
import type {Schema, TypeID} from './Schema';

const INDENT = '  ';

/**
 * Converts an IR node into a GraphQL string. Custom Relay
 * extensions (directives) are not supported; to print fragments with
 * variables or fragment spreads with arguments, transform the node
 * prior to printing.
 */
function print(schema: Schema, node: CompilerContextDocument): string {
  switch (node.kind) {
    case 'Fragment':
      return (
        `fragment ${node.name} on ${schema.getTypeString(node.type)}` +
        printFragmentArgumentDefinitions(schema, node.argumentDefinitions) +
        printDirectives(schema, node.directives) +
        printSelections(schema, node, '', {}) +
        '\n'
      );
    case 'Root':
      return (
        `${node.operation} ${node.name}` +
        printArgumentDefinitions(schema, node.argumentDefinitions) +
        printDirectives(schema, node.directives) +
        printSelections(schema, node, '', {}) +
        '\n'
      );
    case 'SplitOperation':
      return (
        `SplitOperation ${node.name} on ${schema.getTypeString(node.type)}` +
        printSelections(schema, node, '', {}) +
        '\n'
      );
    default:
      (node: empty);
      invariant(false, 'IRPrinter: Unsupported IR node `%s`.', node.kind);
  }
}

function printSelections(
  schema: Schema,
  node: Node,
  indent: string,
  options?: {
    parentDirectives?: string,
    isClientExtension?: boolean,
    ...
  },
): string {
  const selections = node.selections;
  if (selections == null) {
    return '';
  }
  const printed = selections.map(selection =>
    printSelection(schema, selection, indent, options),
  );
  return printed.length
    ? ` {\n${indent + INDENT}${printed.join(
        '\n' + indent + INDENT,
      )}\n${indent}${options?.isClientExtension === true ? '# ' : ''}}`
    : '';
}

/**
 * Prints a field without subselections.
 */
function printField(
  schema: Schema,
  field: Field,
  options?: {
    parentDirectives?: string,
    isClientExtension?: boolean,
    ...
  },
): string {
  const parentDirectives = options?.parentDirectives ?? '';
  const isClientExtension = options?.isClientExtension === true;
  return (
    (isClientExtension ? '# ' : '') +
    (field.alias === field.name
      ? field.name
      : field.alias + ': ' + field.name) +
    printArguments(schema, field.args) +
    parentDirectives +
    printDirectives(schema, field.directives) +
    printHandles(schema, field)
  );
}

function printSelection(
  schema: Schema,
  selection: Selection,
  indent: string,
  options?: {
    parentDirectives?: string,
    isClientExtension?: boolean,
    ...
  },
): string {
  let str;
  const parentDirectives = options?.parentDirectives ?? '';
  const isClientExtension = options?.isClientExtension === true;
  if (selection.kind === 'LinkedField') {
    str = printField(schema, selection, {parentDirectives, isClientExtension});
    str += printSelections(schema, selection, indent + INDENT, {
      isClientExtension,
    });
  } else if (selection.kind === 'ModuleImport') {
    str = selection.selections
      .map(matchSelection =>
        printSelection(schema, matchSelection, indent, {
          parentDirectives,
          isClientExtension,
        }),
      )
      .join('\n' + indent + INDENT);
  } else if (selection.kind === 'ScalarField') {
    str = printField(schema, selection, {parentDirectives, isClientExtension});
  } else if (selection.kind === 'InlineFragment') {
    str = '';
    if (isClientExtension) {
      str += '# ';
    }
    str += '... on ' + schema.getTypeString(selection.typeCondition);
    str += parentDirectives;
    str += printDirectives(schema, selection.directives);
    str += printSelections(schema, selection, indent + INDENT, {
      isClientExtension,
    });
  } else if (selection.kind === 'FragmentSpread') {
    str = '';
    if (isClientExtension) {
      str += '# ';
    }
    str += '...' + selection.name;
    str += parentDirectives;
    str += printFragmentArguments(schema, selection.args);
    str += printDirectives(schema, selection.directives);
  } else if (selection.kind === 'InlineDataFragmentSpread') {
    str =
      `# ${selection.name} @inline` +
      `\n${indent}${INDENT}...` +
      parentDirectives +
      printSelections(schema, selection, indent + INDENT, {});
  } else if (selection.kind === 'Condition') {
    const value = printValue(schema, selection.condition, null);
    // For Flow
    invariant(
      value != null,
      'IRPrinter: Expected a variable for condition, got a literal `null`.',
    );
    let condStr = selection.passingValue ? ' @include' : ' @skip';
    condStr += '(if: ' + value + ')';
    condStr += parentDirectives;
    // For multi-selection conditions, pushes the condition down to each
    const subSelections = selection.selections.map(sel =>
      printSelection(schema, sel, indent, {
        parentDirectives: condStr,
        isClientExtension,
      }),
    );
    str = subSelections.join('\n' + indent + INDENT);
  } else if (selection.kind === 'Stream') {
    let streamStr = parentDirectives;
    streamStr += ` @stream(label: "${selection.label}"`;
    if (selection.if !== null) {
      streamStr += `, if: ${printValue(schema, selection.if, null) ?? ''}`;
    }
    if (selection.initialCount !== null) {
      streamStr += `, initial_count: ${printValue(
        schema,
        selection.initialCount,
        null,
      ) ?? ''}`;
    }
    if (selection.useCustomizedBatch !== null) {
      streamStr += `, use_customized_batch: ${printValue(
        schema,
        selection.useCustomizedBatch,
        null,
      ) ?? 'false'}`;
    }
    streamStr += ')';
    const subSelections = selection.selections.map(sel =>
      printSelection(schema, sel, indent, {
        parentDirectives: streamStr,
        isClientExtension,
      }),
    );
    str = subSelections.join('\n' + INDENT);
  } else if (selection.kind === 'Defer') {
    let deferStr = parentDirectives;
    deferStr += ` @defer(label: "${selection.label}"`;
    if (selection.if !== null) {
      deferStr += `, if: ${printValue(schema, selection.if, null) ?? ''}`;
    }
    deferStr += ')';
    if (
      selection.selections.every(
        subSelection =>
          subSelection.kind === 'InlineFragment' ||
          subSelection.kind === 'FragmentSpread',
      )
    ) {
      const subSelections = selection.selections.map(sel =>
        printSelection(schema, sel, indent, {
          parentDirectives: deferStr,
          isClientExtension,
        }),
      );
      str = subSelections.join('\n' + INDENT);
    } else {
      str = '...' + deferStr;
      str += printSelections(schema, selection, indent + INDENT, {
        isClientExtension,
      });
    }
  } else if (selection.kind === 'ClientExtension') {
    invariant(
      isClientExtension === false,
      'IRPrinter: Did not expect to encounter a ClientExtension node ' +
        'as a descendant of another ClientExtension node.',
    );
    str =
      '# Client-only selections:\n' +
      indent +
      INDENT +
      selection.selections
        .map(sel =>
          printSelection(schema, sel, indent, {
            parentDirectives,
            isClientExtension: true,
          }),
        )
        .join('\n' + indent + INDENT);
  } else {
    (selection: empty);
    invariant(false, 'IRPrinter: Unknown selection kind `%s`.', selection.kind);
  }
  return str;
}

function printArgumentDefinitions(
  schema: Schema,
  argumentDefinitions: $ReadOnlyArray<LocalArgumentDefinition>,
): string {
  const printed = argumentDefinitions.map(def => {
    let str = `$${def.name}: ${schema.getTypeString(def.type)}`;
    if (def.defaultValue != null) {
      str += ' = ' + printLiteral(schema, def.defaultValue, def.type);
    }
    return str;
  });
  return printed.length ? `(\n${INDENT}${printed.join('\n' + INDENT)}\n)` : '';
}

function printFragmentArgumentDefinitions(
  schema: Schema,
  argumentDefinitions: $ReadOnlyArray<ArgumentDefinition>,
): string {
  let printed;
  argumentDefinitions.forEach(def => {
    if (def.kind !== 'LocalArgumentDefinition') {
      return;
    }
    printed = printed || [];
    let str = `${def.name}: {type: "${schema.getTypeString(def.type)}"`;
    if (def.defaultValue != null) {
      str += `, defaultValue: ${printLiteral(
        schema,
        def.defaultValue,
        def.type,
      )}`;
    }
    str += '}';
    // $FlowFixMe[incompatible-use]
    printed.push(str);
  });
  return printed && printed.length
    ? ` @argumentDefinitions(\n${INDENT}${printed.join('\n' + INDENT)}\n)`
    : '';
}

function printHandles(schema: Schema, field: Field): string {
  if (!field.handles) {
    return '';
  }
  const printed = field.handles.map(handle => {
    // For backward compatibility.
    const key =
      handle.key === DEFAULT_HANDLE_KEY ? '' : `, key: "${handle.key}"`;
    const filters =
      handle.filters == null
        ? ''
        : `, filters: ${JSON.stringify(Array.from(handle.filters).sort())}`;
    const handleArgs =
      handle.handleArgs == null
        ? ''
        : `, handleArgs: ${printArguments(schema, handle.handleArgs)}`;
    return `@__clientField(handle: "${handle.name}"${key}${filters}${handleArgs})`;
  });
  return printed.length ? ' ' + printed.join(' ') : '';
}

function printDirectives(
  schema: Schema,
  directives: $ReadOnlyArray<Directive>,
): string {
  const printed = directives.map(directive => {
    return '@' + directive.name + printArguments(schema, directive.args);
  });
  return printed.length ? ' ' + printed.join(' ') : '';
}

function printFragmentArguments(
  schema: Schema,
  args: $ReadOnlyArray<Argument>,
) {
  const printedArgs = printArguments(schema, args);
  if (!printedArgs.length) {
    return '';
  }
  return ` @arguments${printedArgs}`;
}

function printArguments(
  schema: Schema,
  args: $ReadOnlyArray<Argument>,
): string {
  const printed = [];
  args.forEach(arg => {
    const printedValue = printValue(schema, arg.value, arg.type);
    if (printedValue != null) {
      printed.push(arg.name + ': ' + printedValue);
    }
  });
  return printed.length ? '(' + printed.join(', ') + ')' : '';
}

function printValue(
  schema: Schema,
  value: ArgumentValue,
  type: ?TypeID,
): ?string {
  if (type != null && schema.isNonNull(type)) {
    type = schema.getNullableType(type);
  }
  if (value.kind === 'Variable') {
    return '$' + value.variableName;
  } else if (value.kind === 'ObjectValue') {
    const inputType = type != null ? schema.asInputObjectType(type) : null;
    const pairs = value.fields
      .map(field => {
        const fieldConfig =
          inputType != null
            ? schema.hasField(inputType, field.name)
              ? schema.getFieldConfig(schema.expectField(inputType, field.name))
              : null
            : null;
        const innerValue = printValue(schema, field.value, fieldConfig?.type);
        return innerValue == null ? null : field.name + ': ' + innerValue;
      })
      .filter(Boolean);

    return '{' + pairs.join(', ') + '}';
  } else if (value.kind === 'ListValue') {
    invariant(
      type && schema.isList(type),
      'GraphQLIRPrinter: Need a type in order to print arrays.',
    );
    const innerType = schema.getListItemType(type);
    return `[${value.items
      .map(i => printValue(schema, i, innerType))
      .join(', ')}]`;
  } else if (value.value != null) {
    return printLiteral(schema, value.value, type);
  } else {
    return null;
  }
}

function printLiteral(schema: Schema, value: mixed, type: ?TypeID): string {
  if (value == null) {
    return JSON.stringify(value) ?? 'null';
  }
  if (type != null && schema.isNonNull(type)) {
    type = schema.getNullableType(type);
  }

  if (type && schema.isEnum(type)) {
    let result = schema.serialize(schema.assertEnumType(type), value);
    if (result == null && typeof value === 'string') {
      // For backwards compatibility, print invalid input values as-is. This
      // can occur with literals defined as an @argumentDefinitions
      // defaultValue.
      result = value;
    }
    invariant(
      typeof result === 'string',
      'IRPrinter: Expected value of type %s to be a valid enum value, got `%s`.',
      schema.getTypeString(type),
      JSON.stringify(value) ?? 'null',
    );
    return result;
  } else if (type && (schema.isId(type) || schema.isInt(type))) {
    return JSON.stringify(value) ?? '';
  } else if (type && schema.isScalar(type)) {
    const result = schema.serialize(schema.assertScalarType(type), value);
    return JSON.stringify(result) ?? '';
  } else if (Array.isArray(value)) {
    invariant(
      type && schema.isList(type),
      'IRPrinter: Need a type in order to print arrays.',
    );
    const itemType = schema.getListItemType(type);
    return (
      '[' +
      value.map(item => printLiteral(schema, item, itemType)).join(', ') +
      ']'
    );
  } else if (type && schema.isList(type) && value != null) {
    // Not an array, but still a list. Treat as list-of-one as per spec 3.1.7:
    // http://facebook.github.io/graphql/October2016/#sec-Lists
    return printLiteral(schema, value, schema.getListItemType(type));
  } else if (typeof value === 'object' && value != null) {
    const fields = [];
    invariant(
      type && schema.isInputObject(type),
      'IRPrinter: Need an InputObject type to print objects.',
    );
    const inputType = schema.assertInputObjectType(type);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const fieldConfig = schema.getFieldConfig(
          schema.expectField(inputType, key),
        );
        fields.push(
          key + ': ' + printLiteral(schema, value[key], fieldConfig.type),
        );
      }
    }
    return '{' + fields.join(', ') + '}';
  } else {
    return JSON.stringify(value) ?? 'null';
  }
}

module.exports = {print, printField, printArguments, printDirectives};
