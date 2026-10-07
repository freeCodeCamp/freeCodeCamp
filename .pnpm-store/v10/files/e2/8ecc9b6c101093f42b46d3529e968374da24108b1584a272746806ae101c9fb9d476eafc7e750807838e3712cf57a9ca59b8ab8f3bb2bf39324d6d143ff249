/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var invariant = require('invariant');

var _require = require('../util/DefaultHandleKey'),
    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

var INDENT = '  ';
/**
 * Converts an IR node into a GraphQL string. Custom Relay
 * extensions (directives) are not supported; to print fragments with
 * variables or fragment spreads with arguments, transform the node
 * prior to printing.
 */

function print(schema, node) {
  switch (node.kind) {
    case 'Fragment':
      return "fragment ".concat(node.name, " on ").concat(schema.getTypeString(node.type)) + printFragmentArgumentDefinitions(schema, node.argumentDefinitions) + printDirectives(schema, node.directives) + printSelections(schema, node, '', {}) + '\n';

    case 'Root':
      return "".concat(node.operation, " ").concat(node.name) + printArgumentDefinitions(schema, node.argumentDefinitions) + printDirectives(schema, node.directives) + printSelections(schema, node, '', {}) + '\n';

    case 'SplitOperation':
      return "SplitOperation ".concat(node.name, " on ").concat(schema.getTypeString(node.type)) + printSelections(schema, node, '', {}) + '\n';

    default:
      node;
      !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Unsupported IR node `%s`.', node.kind) : invariant(false) : void 0;
  }
}

function printSelections(schema, node, indent, options) {
  var selections = node.selections;

  if (selections == null) {
    return '';
  }

  var printed = selections.map(function (selection) {
    return printSelection(schema, selection, indent, options);
  });
  return printed.length ? " {\n".concat(indent + INDENT).concat(printed.join('\n' + indent + INDENT), "\n").concat(indent).concat((options === null || options === void 0 ? void 0 : options.isClientExtension) === true ? '# ' : '', "}") : '';
}
/**
 * Prints a field without subselections.
 */


function printField(schema, field, options) {
  var _options$parentDirect;

  var parentDirectives = (_options$parentDirect = options === null || options === void 0 ? void 0 : options.parentDirectives) !== null && _options$parentDirect !== void 0 ? _options$parentDirect : '';
  var isClientExtension = (options === null || options === void 0 ? void 0 : options.isClientExtension) === true;
  return (isClientExtension ? '# ' : '') + (field.alias === field.name ? field.name : field.alias + ': ' + field.name) + printArguments(schema, field.args) + parentDirectives + printDirectives(schema, field.directives) + printHandles(schema, field);
}

function printSelection(schema, selection, indent, options) {
  var _options$parentDirect2;

  var str;
  var parentDirectives = (_options$parentDirect2 = options === null || options === void 0 ? void 0 : options.parentDirectives) !== null && _options$parentDirect2 !== void 0 ? _options$parentDirect2 : '';
  var isClientExtension = (options === null || options === void 0 ? void 0 : options.isClientExtension) === true;

  if (selection.kind === 'LinkedField') {
    str = printField(schema, selection, {
      parentDirectives: parentDirectives,
      isClientExtension: isClientExtension
    });
    str += printSelections(schema, selection, indent + INDENT, {
      isClientExtension: isClientExtension
    });
  } else if (selection.kind === 'ModuleImport') {
    str = selection.selections.map(function (matchSelection) {
      return printSelection(schema, matchSelection, indent, {
        parentDirectives: parentDirectives,
        isClientExtension: isClientExtension
      });
    }).join('\n' + indent + INDENT);
  } else if (selection.kind === 'ScalarField') {
    str = printField(schema, selection, {
      parentDirectives: parentDirectives,
      isClientExtension: isClientExtension
    });
  } else if (selection.kind === 'InlineFragment') {
    str = '';

    if (isClientExtension) {
      str += '# ';
    }

    str += '... on ' + schema.getTypeString(selection.typeCondition);
    str += parentDirectives;
    str += printDirectives(schema, selection.directives);
    str += printSelections(schema, selection, indent + INDENT, {
      isClientExtension: isClientExtension
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
    str = "# ".concat(selection.name, " @inline") + "\n".concat(indent).concat(INDENT, "...") + parentDirectives + printSelections(schema, selection, indent + INDENT, {});
  } else if (selection.kind === 'Condition') {
    var value = printValue(schema, selection.condition, null); // For Flow

    !(value != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Expected a variable for condition, got a literal `null`.') : invariant(false) : void 0;
    var condStr = selection.passingValue ? ' @include' : ' @skip';
    condStr += '(if: ' + value + ')';
    condStr += parentDirectives; // For multi-selection conditions, pushes the condition down to each

    var subSelections = selection.selections.map(function (sel) {
      return printSelection(schema, sel, indent, {
        parentDirectives: condStr,
        isClientExtension: isClientExtension
      });
    });
    str = subSelections.join('\n' + indent + INDENT);
  } else if (selection.kind === 'Stream') {
    var streamStr = parentDirectives;
    streamStr += " @stream(label: \"".concat(selection.label, "\"");

    if (selection["if"] !== null) {
      var _printValue;

      streamStr += ", if: ".concat((_printValue = printValue(schema, selection["if"], null)) !== null && _printValue !== void 0 ? _printValue : '');
    }

    if (selection.initialCount !== null) {
      var _printValue2;

      streamStr += ", initial_count: ".concat((_printValue2 = printValue(schema, selection.initialCount, null)) !== null && _printValue2 !== void 0 ? _printValue2 : '');
    }

    if (selection.useCustomizedBatch !== null) {
      var _printValue3;

      streamStr += ", use_customized_batch: ".concat((_printValue3 = printValue(schema, selection.useCustomizedBatch, null)) !== null && _printValue3 !== void 0 ? _printValue3 : 'false');
    }

    streamStr += ')';

    var _subSelections = selection.selections.map(function (sel) {
      return printSelection(schema, sel, indent, {
        parentDirectives: streamStr,
        isClientExtension: isClientExtension
      });
    });

    str = _subSelections.join('\n' + INDENT);
  } else if (selection.kind === 'Defer') {
    var deferStr = parentDirectives;
    deferStr += " @defer(label: \"".concat(selection.label, "\"");

    if (selection["if"] !== null) {
      var _printValue4;

      deferStr += ", if: ".concat((_printValue4 = printValue(schema, selection["if"], null)) !== null && _printValue4 !== void 0 ? _printValue4 : '');
    }

    deferStr += ')';

    if (selection.selections.every(function (subSelection) {
      return subSelection.kind === 'InlineFragment' || subSelection.kind === 'FragmentSpread';
    })) {
      var _subSelections2 = selection.selections.map(function (sel) {
        return printSelection(schema, sel, indent, {
          parentDirectives: deferStr,
          isClientExtension: isClientExtension
        });
      });

      str = _subSelections2.join('\n' + INDENT);
    } else {
      str = '...' + deferStr;
      str += printSelections(schema, selection, indent + INDENT, {
        isClientExtension: isClientExtension
      });
    }
  } else if (selection.kind === 'ClientExtension') {
    !(isClientExtension === false) ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Did not expect to encounter a ClientExtension node ' + 'as a descendant of another ClientExtension node.') : invariant(false) : void 0;
    str = '# Client-only selections:\n' + indent + INDENT + selection.selections.map(function (sel) {
      return printSelection(schema, sel, indent, {
        parentDirectives: parentDirectives,
        isClientExtension: true
      });
    }).join('\n' + indent + INDENT);
  } else {
    selection;
    !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Unknown selection kind `%s`.', selection.kind) : invariant(false) : void 0;
  }

  return str;
}

function printArgumentDefinitions(schema, argumentDefinitions) {
  var printed = argumentDefinitions.map(function (def) {
    var str = "$".concat(def.name, ": ").concat(schema.getTypeString(def.type));

    if (def.defaultValue != null) {
      str += ' = ' + printLiteral(schema, def.defaultValue, def.type);
    }

    return str;
  });
  return printed.length ? "(\n".concat(INDENT).concat(printed.join('\n' + INDENT), "\n)") : '';
}

function printFragmentArgumentDefinitions(schema, argumentDefinitions) {
  var printed;
  argumentDefinitions.forEach(function (def) {
    if (def.kind !== 'LocalArgumentDefinition') {
      return;
    }

    printed = printed || [];
    var str = "".concat(def.name, ": {type: \"").concat(schema.getTypeString(def.type), "\"");

    if (def.defaultValue != null) {
      str += ", defaultValue: ".concat(printLiteral(schema, def.defaultValue, def.type));
    }

    str += '}'; // $FlowFixMe[incompatible-use]

    printed.push(str);
  });
  return printed && printed.length ? " @argumentDefinitions(\n".concat(INDENT).concat(printed.join('\n' + INDENT), "\n)") : '';
}

function printHandles(schema, field) {
  if (!field.handles) {
    return '';
  }

  var printed = field.handles.map(function (handle) {
    // For backward compatibility.
    var key = handle.key === DEFAULT_HANDLE_KEY ? '' : ", key: \"".concat(handle.key, "\"");
    var filters = handle.filters == null ? '' : ", filters: ".concat(JSON.stringify(Array.from(handle.filters).sort()));
    var handleArgs = handle.handleArgs == null ? '' : ", handleArgs: ".concat(printArguments(schema, handle.handleArgs));
    return "@__clientField(handle: \"".concat(handle.name, "\"").concat(key).concat(filters).concat(handleArgs, ")");
  });
  return printed.length ? ' ' + printed.join(' ') : '';
}

function printDirectives(schema, directives) {
  var printed = directives.map(function (directive) {
    return '@' + directive.name + printArguments(schema, directive.args);
  });
  return printed.length ? ' ' + printed.join(' ') : '';
}

function printFragmentArguments(schema, args) {
  var printedArgs = printArguments(schema, args);

  if (!printedArgs.length) {
    return '';
  }

  return " @arguments".concat(printedArgs);
}

function printArguments(schema, args) {
  var printed = [];
  args.forEach(function (arg) {
    var printedValue = printValue(schema, arg.value, arg.type);

    if (printedValue != null) {
      printed.push(arg.name + ': ' + printedValue);
    }
  });
  return printed.length ? '(' + printed.join(', ') + ')' : '';
}

function printValue(schema, value, type) {
  if (type != null && schema.isNonNull(type)) {
    type = schema.getNullableType(type);
  }

  if (value.kind === 'Variable') {
    return '$' + value.variableName;
  } else if (value.kind === 'ObjectValue') {
    var inputType = type != null ? schema.asInputObjectType(type) : null;
    var pairs = value.fields.map(function (field) {
      var fieldConfig = inputType != null ? schema.hasField(inputType, field.name) ? schema.getFieldConfig(schema.expectField(inputType, field.name)) : null : null;
      var innerValue = printValue(schema, field.value, fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.type);
      return innerValue == null ? null : field.name + ': ' + innerValue;
    }).filter(Boolean);
    return '{' + pairs.join(', ') + '}';
  } else if (value.kind === 'ListValue') {
    !(type && schema.isList(type)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'GraphQLIRPrinter: Need a type in order to print arrays.') : invariant(false) : void 0;
    var innerType = schema.getListItemType(type);
    return "[".concat(value.items.map(function (i) {
      return printValue(schema, i, innerType);
    }).join(', '), "]");
  } else if (value.value != null) {
    return printLiteral(schema, value.value, type);
  } else {
    return null;
  }
}

function printLiteral(schema, value, type) {
  if (value == null) {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(value)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : 'null';
  }

  if (type != null && schema.isNonNull(type)) {
    type = schema.getNullableType(type);
  }

  if (type && schema.isEnum(type)) {
    var _JSON$stringify2;

    var result = schema.serialize(schema.assertEnumType(type), value);

    if (result == null && typeof value === 'string') {
      // For backwards compatibility, print invalid input values as-is. This
      // can occur with literals defined as an @argumentDefinitions
      // defaultValue.
      result = value;
    }

    !(typeof result === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Expected value of type %s to be a valid enum value, got `%s`.', schema.getTypeString(type), (_JSON$stringify2 = JSON.stringify(value)) !== null && _JSON$stringify2 !== void 0 ? _JSON$stringify2 : 'null') : invariant(false) : void 0;
    return result;
  } else if (type && (schema.isId(type) || schema.isInt(type))) {
    var _JSON$stringify3;

    return (_JSON$stringify3 = JSON.stringify(value)) !== null && _JSON$stringify3 !== void 0 ? _JSON$stringify3 : '';
  } else if (type && schema.isScalar(type)) {
    var _JSON$stringify4;

    var _result = schema.serialize(schema.assertScalarType(type), value);

    return (_JSON$stringify4 = JSON.stringify(_result)) !== null && _JSON$stringify4 !== void 0 ? _JSON$stringify4 : '';
  } else if (Array.isArray(value)) {
    !(type && schema.isList(type)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Need a type in order to print arrays.') : invariant(false) : void 0;
    var itemType = schema.getListItemType(type);
    return '[' + value.map(function (item) {
      return printLiteral(schema, item, itemType);
    }).join(', ') + ']';
  } else if (type && schema.isList(type) && value != null) {
    // Not an array, but still a list. Treat as list-of-one as per spec 3.1.7:
    // http://facebook.github.io/graphql/October2016/#sec-Lists
    return printLiteral(schema, value, schema.getListItemType(type));
  } else if (typeof value === 'object' && value != null) {
    var fields = [];
    !(type && schema.isInputObject(type)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'IRPrinter: Need an InputObject type to print objects.') : invariant(false) : void 0;
    var inputType = schema.assertInputObjectType(type);

    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        var fieldConfig = schema.getFieldConfig(schema.expectField(inputType, key));
        fields.push(key + ': ' + printLiteral(schema, value[key], fieldConfig.type));
      }
    }

    return '{' + fields.join(', ') + '}';
  } else {
    var _JSON$stringify5;

    return (_JSON$stringify5 = JSON.stringify(value)) !== null && _JSON$stringify5 !== void 0 ? _JSON$stringify5 : 'null';
  }
}

module.exports = {
  print: print,
  printField: printField,
  printArguments: printArguments,
  printDirectives: printDirectives
};