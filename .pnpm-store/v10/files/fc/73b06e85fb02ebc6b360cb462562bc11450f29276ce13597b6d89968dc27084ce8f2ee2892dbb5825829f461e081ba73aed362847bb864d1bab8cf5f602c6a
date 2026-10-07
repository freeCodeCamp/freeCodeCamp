"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.printTypeDefinitions = exports.printDirectives = void 0;
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _flatMap2 = _interopRequireDefault(require("lodash/flatMap"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _graphqlCompose = require("graphql-compose");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _graphql = require("graphql");
var _blockString = require("graphql/language/blockString");
var _extensions = require("./extensions");
var _builtInTypes = require("./types/built-in-types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const breakLine = (line, maxLen) => {
  const parts = line.split(new RegExp(`((?: |^).{15,${maxLen - 40}}(?= |$))`));
  if (parts.length < 4) {
    return [line];
  }
  const sublines = [parts[0] + parts[1] + parts[2]];
  for (let i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }
  return sublines;
};
const descriptionLines = (description, maxLen) => {
  const rawLines = description.split(`\n`);
  return (0, _flatMap2.default)(rawLines, line => {
    if (line.length < maxLen + 5) {
      return line;
    }
    // For > 120 character long lines, cut at space boundaries into sublines
    // of ~80 chars.
    return breakLine(line, maxLen);
  });
};
const printBlock = items => items.length !== 0 ? ` {\n` + items.join(`\n`) + `\n}` : ``;
const printDeprecated = fieldOrEnumVal => {
  const reason = fieldOrEnumVal.deprecationReason;
  if (!reason) {
    return ``;
  }
  const reasonAST = (0, _graphql.astFromValue)(reason, _graphql.GraphQLString);
  if (reasonAST && reason !== `` && reason !== _graphql.DEFAULT_DEPRECATION_REASON) {
    return ` @deprecated(reason: ` + (0, _graphql.print)(reasonAST) + `)`;
  }
  return ` @deprecated`;
};
const printDescription = (def, indentation = ``, firstInBlock = true) => {
  const description = (0, _graphqlCompose.isNamedTypeComposer)(def) ? def.getDescription() : def.description;
  if (!description) {
    return ``;
  }
  const lines = descriptionLines(description, 120 - indentation.length);
  const text = lines.join(`\n`);
  const isMultiline = text.length > 70;
  const blockString = (0, _blockString.printBlockString)(text, {
    minimize: !isMultiline
  });
  const prefix = indentation && !firstInBlock ? `\n` + indentation : indentation;
  return prefix + blockString.replace(/\n/g, `\n` + indentation) + `\n`;
};
const printDirectiveArgs = (args, directive) => {
  if (!args || !directive) {
    return ``;
  }
  const directiveArgs = Object.entries(args);
  if (directiveArgs.length === 0) {
    return ``;
  }
  return `(` + directiveArgs.map(([name, value]) => {
    const arg = directive.args && directive.args.find(arg => arg.name === name);
    return arg && `${name}: ${(0, _graphql.print)((0, _graphql.astFromValue)(value, arg.type))}`;
  }).join(`, `) + `)`;
};
const printDirectives = (extensions, directives) => Object.entries(extensions).map(([name, args]) => {
  if ([..._extensions.internalExtensionNames, `deprecated`].includes(name)) return ``;
  return ` @${name}` + printDirectiveArgs(args, directives.find(directive => directive.name === name));
}).join(``);
exports.printDirectives = printDirectives;
const printInputValue = ([name, inputTC]) => {
  let argDecl = name + `: ` + inputTC.type.getTypeName();
  if (inputTC.defaultValue) {
    const defaultAST = (0, _graphql.astFromValue)(inputTC.defaultValue, inputTC.type.getType());
    if (defaultAST) {
      argDecl += ` = ${(0, _graphql.print)(defaultAST)}`;
    }
  }
  return argDecl;
};
const printArgs = (args, indentation = ``) => {
  if (!args) {
    return ``;
  }
  const argsArray = Object.entries(args);
  if (argsArray.length === 0) {
    return ``;
  }

  // If all args have no description, print them on one line
  if (argsArray.every(([_name, argTC]) => !argTC.description)) {
    return `(` + argsArray.map(printInputValue).join(`, `) + `)`;
  }
  return `(\n` + argsArray.map(([_name, argTC], i) => printDescription(argTC, `  ` + indentation, !i) + `  ` + indentation + printInputValue([_name, argTC])).join(`\n`) + `\n` + indentation + `)`;
};
const printFields = (fields, directives) => {
  const printedFields = Object.entries(fields).map(([fieldName, fieldTC], i) => printDescription(fieldTC, `  `, !i) + `  ` + fieldName + printArgs(fieldTC.args, `  `) + `: ` + String(fieldTC.type.getTypeName()) + printDirectives(fieldTC.extensions || {}, directives) + printDeprecated(fieldTC));
  return printBlock(printedFields);
};
const printScalarType = tc => printDescription(tc) + `scalar ${tc.getTypeName()}`;
const printObjectType = tc => {
  const interfaces = tc.getInterfaces();
  const implementedInterfaces = interfaces.length ? ` implements ` + interfaces.map(i => i.getTypeName()).join(` & `) : ``;
  const extensions = tc.getExtensions();
  let fields = tc.getFields();
  if (tc.hasInterface(`Node`)) {
    extensions.dontInfer = null;
    fields = (0, _omit2.default)(fields, [`id`, `parent`, `children`, `internal`]);
  }
  const directives = tc.schemaComposer.getDirectives();
  const printedDirectives = printDirectives(extensions, directives);
  return printDescription(tc) + `type ${tc.getTypeName()}${implementedInterfaces}${printedDirectives}` + printFields(fields, directives);
};
const printInterfaceType = tc => {
  const interfaces = tc.getInterfaces();
  const implementedInterfaces = interfaces.length ? ` implements ` + interfaces.map(i => i.getTypeName()).join(` & `) : ``;
  const extensions = tc.getExtensions();
  const directives = tc.schemaComposer.getDirectives();
  const printedDirectives = printDirectives(extensions, directives);
  return printDescription(tc) + `interface ${tc.getTypeName()}${implementedInterfaces}${printedDirectives}` + printFields(tc.getFields(), directives);
};
const printUnionType = tc => {
  const types = tc.getTypeNames();
  const possibleTypes = types.length ? ` = ` + types.join(` | `) : ``;
  return printDescription(tc) + `union ` + tc.getTypeName() + possibleTypes;
};
const printEnumType = tc => {
  const values = Object.entries(tc.getFields()).map(([name, valueTC], i) => printDescription(valueTC, `  `, !i) + `  ` + name + printDeprecated(valueTC));
  return printDescription(tc) + `enum ${tc.getTypeName()}` + printBlock(values);
};
const printInputObjectType = tc => {
  const fields = Object.entries(tc.getFields()).map(([fieldName, fieldTC], i) => printDescription(fieldTC, `  `, !i) + `  ` + printInputValue([fieldName, fieldTC]));
  return printDescription(tc) + `input ${tc.getTypeName()}` + printBlock(fields);
};
const printType = tc => {
  if (tc instanceof _graphqlCompose.ObjectTypeComposer) {
    return printObjectType(tc);
  } else if (tc instanceof _graphqlCompose.InterfaceTypeComposer) {
    return printInterfaceType(tc);
  } else if (tc instanceof _graphqlCompose.UnionTypeComposer) {
    return printUnionType(tc);
  } else if (tc instanceof _graphqlCompose.EnumTypeComposer) {
    return printEnumType(tc);
  } else if (tc instanceof _graphqlCompose.ScalarTypeComposer) {
    return printScalarType(tc);
  } else if (tc instanceof _graphqlCompose.InputTypeComposer) {
    return printInputObjectType(tc);
  }
  return ``;
};
const printTypeDefinitions = ({
  config,
  schemaComposer
}) => {
  if (!config) return Promise.resolve();
  const {
    path,
    include,
    exclude,
    withFieldTypes,
    rewrite = false
  } = config || {};
  if (!path) {
    _reporter.default.error(`Printing type definitions aborted. Please provide a file path.`);
    return Promise.resolve();
  }
  if (!rewrite && fs.existsSync(path)) {
    _reporter.default.error(`Printing type definitions aborted. The file \`${path}\` already exists.`);
    return Promise.resolve();
  }
  const internalPlugins = [`internal-data-bridge`];
  const typesToExclude = (exclude === null || exclude === void 0 ? void 0 : exclude.types) || [];
  const pluginsToExclude = (exclude === null || exclude === void 0 ? void 0 : exclude.plugins) || [];
  const getName = tc => tc.getTypeName();
  const isInternalType = tc => {
    const typeName = getName(tc);
    if (_builtInTypes.internalTypeNames.includes(typeName)) {
      return true;
    }
    const plugin = tc.getExtension(`plugin`);
    if (typeof plugin === `string` && internalPlugins.includes(plugin)) {
      return true;
    }
    return false;
  };
  const shouldIncludeType = tc => {
    const typeName = getName(tc);
    if (typesToExclude.includes(typeName)) {
      return false;
    }
    if (include !== null && include !== void 0 && include.types && !include.types.includes(typeName)) {
      return false;
    }
    const plugin = tc.getExtension(`plugin`);
    if (typeof plugin === `string` && pluginsToExclude.includes(plugin)) {
      return false;
    }
    if (include !== null && include !== void 0 && include.plugins && (!plugin || typeof plugin === `string` && !include.plugins.includes(plugin))) {
      return false;
    }
    return true;
  };

  // Save processed type names, not references to the type composers,
  // because of how graphql-compose, at least in v6, processes
  // inline types
  const processedTypes = new Set();
  const typeDefs = new Set();
  const addType = tc => {
    const typeName = getName(tc);
    if (!processedTypes.has(typeName) && !isInternalType(tc)) {
      processedTypes.add(typeName);
      return typeDefs.add(tc);
    }
    processedTypes.add(typeName);
    return null;
  };
  const addWithFieldTypes = tc => {
    if (addType(tc) && (tc instanceof _graphqlCompose.ObjectTypeComposer || tc instanceof _graphqlCompose.InterfaceTypeComposer || tc instanceof _graphqlCompose.InputTypeComposer)) {
      if (tc instanceof _graphqlCompose.ObjectTypeComposer) {
        const interfaces = tc.getInterfaces();
        interfaces.forEach(iface => {
          const ifaceName = iface.getTypeName();
          if (ifaceName !== `Node`) {
            addWithFieldTypes(schemaComposer.getAnyTC(ifaceName));
          }
        });
      }
      tc.getFieldNames().forEach(fieldName => {
        const fieldType = tc.getFieldTC(fieldName);
        addWithFieldTypes(fieldType);
        if (!(tc instanceof _graphqlCompose.InputTypeComposer)) {
          const fieldArgs = tc.getFieldArgs(fieldName);
          Object.keys(fieldArgs).forEach(argName => {
            try {
              addWithFieldTypes(tc.getFieldArgTC(fieldName, argName));
            } catch {
              // this type might not exist yet. If it won't be created by the end
              // of schema creation then building schema will fail and fact that we
              // skip it here won't matter
            }
          });
        }
      });
    }
  };
  schemaComposer.forEach(tc => {
    if (!isInternalType(tc) && shouldIncludeType(tc)) {
      if (withFieldTypes) {
        addWithFieldTypes(tc);
      } else {
        addType(tc);
      }
    }
  });
  const printedTypeDefs = [`### Type definitions saved at ${new Date().toISOString()} ###`];
  try {
    typeDefs.forEach(tc => printedTypeDefs.push(printType(tc)));
    _reporter.default.info(`Writing GraphQL type definitions to ${path}`);
    return fs.writeFile(path, printedTypeDefs.join(`\n\n`));
  } catch (error) {
    _reporter.default.error(`Failed writing type definitions to \`${path}\`.`, error);
    return Promise.resolve();
  }
};
exports.printTypeDefinitions = printTypeDefinitions;
//# sourceMappingURL=print.js.map