"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDescriptionWithComments = exports.printDescription = exports.printNodeDirectives = exports.printDirective = exports.printInputValue = exports.printArgs = exports.printBlock = exports.printFields = exports.printInputObject = exports.printEnum = exports.printUnion = exports.printInterface = exports.printObject = exports.printImplementedInterfaces = exports.printScalar = exports.printType = exports.isSchemaOfCommonNames = exports.printSchemaDefinition = exports.printFilteredSchema = exports.isDefinedType = exports.printIntrospectionSchema = exports.printSchema = exports.printSchemaComposer = void 0;
const misc_1 = require("./misc");
const printer_1 = require("graphql/language/printer");
const blockString_1 = require("graphql/language/blockString");
const introspection_1 = require("graphql/type/introspection");
const scalars_1 = require("graphql/type/scalars");
const directives_1 = require("graphql/type/directives");
const definition_1 = require("graphql/type/definition");
const astFromValue_1 = require("graphql/utilities/astFromValue");
const getFromSchema_1 = require("./getFromSchema");
const schemaPrinterSortTypes_1 = require("./schemaPrinterSortTypes");
const graphqlVersion_1 = require("./graphqlVersion");
let printBlockStringLegacy;
if (graphqlVersion_1.graphqlVersion >= 16) {
    printBlockStringLegacy = blockString_1.printBlockString;
}
else {
    printBlockStringLegacy = (value, preferMultipleLines) => blockString_1.printBlockString(value, '', preferMultipleLines);
}
function splitOptionsFilterPrinter(options) {
    const _a = options || {}, { exclude = [], include, omitDirectiveDefinitions } = _a, optPrinter = __rest(_a, ["exclude", "include", "omitDirectiveDefinitions"]);
    const optFilter = { exclude, include, omitDirectiveDefinitions };
    return { optPrinter, optFilter };
}
function printSchemaComposer(sc, options) {
    const { optPrinter, optFilter } = splitOptionsFilterPrinter(options);
    const printTypes = Array.from((0, getFromSchema_1.getTypesFromSchema)(sc, optFilter));
    const sortMethod = (0, schemaPrinterSortTypes_1.getSortMethodFromOption)(optPrinter === null || optPrinter === void 0 ? void 0 : optPrinter.sortTypes, optFilter);
    if (sortMethod)
        printTypes.sort(sortMethod);
    const res = [];
    if (!optFilter.omitDirectiveDefinitions) {
        res.push(...(0, getFromSchema_1.getDirectivesFromSchema)(sc).map((d) => printDirective(d, optPrinter)));
    }
    res.push(...printTypes.map((tc) => tc.toSDL(optPrinter)));
    return res.filter(Boolean).join('\n\n');
}
exports.printSchemaComposer = printSchemaComposer;
function printSchema(schema, options) {
    return printFilteredSchema(schema, (n) => !(0, directives_1.isSpecifiedDirective)(n), isDefinedType, options);
}
exports.printSchema = printSchema;
function printIntrospectionSchema(schema, options) {
    return printFilteredSchema(schema, directives_1.isSpecifiedDirective, introspection_1.isIntrospectionType, options);
}
exports.printIntrospectionSchema = printIntrospectionSchema;
function isDefinedType(type) {
    return !(0, scalars_1.isSpecifiedScalarType)(type) && !(0, introspection_1.isIntrospectionType)(type);
}
exports.isDefinedType = isDefinedType;
function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
    const directives = schema.getDirectives().filter(directiveFilter);
    const typeMap = schema.getTypeMap();
    const types = Object.values(typeMap)
        .sort((type1, type2) => type1.name.localeCompare(type2.name))
        .filter(typeFilter);
    return `${[printSchemaDefinition(schema)]
        .concat(directives.map((directive) => printDirective(directive, options)), types.map((type) => printType(type, options)))
        .filter(Boolean)
        .join('\n\n')}\n`;
}
exports.printFilteredSchema = printFilteredSchema;
function printSchemaDefinition(schema) {
    if (isSchemaOfCommonNames(schema)) {
        return '';
    }
    const operationTypes = [];
    const queryType = schema.getQueryType();
    if (queryType) {
        operationTypes.push(`  query: ${queryType.name}`);
    }
    const mutationType = schema.getMutationType();
    if (mutationType) {
        operationTypes.push(`  mutation: ${mutationType.name}`);
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType) {
        operationTypes.push(`  subscription: ${subscriptionType.name}`);
    }
    return `schema {\n${operationTypes.join('\n')}\n}`;
}
exports.printSchemaDefinition = printSchemaDefinition;
function isSchemaOfCommonNames(schema) {
    const queryType = schema.getQueryType();
    if (queryType && queryType.name !== 'Query') {
        return false;
    }
    const mutationType = schema.getMutationType();
    if (mutationType && mutationType.name !== 'Mutation') {
        return false;
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType && subscriptionType.name !== 'Subscription') {
        return false;
    }
    return true;
}
exports.isSchemaOfCommonNames = isSchemaOfCommonNames;
function printType(type, options) {
    if ((0, definition_1.isScalarType)(type)) {
        return printScalar(type, options);
    }
    else if ((0, definition_1.isObjectType)(type)) {
        return printObject(type, options);
    }
    else if ((0, definition_1.isInterfaceType)(type)) {
        return printInterface(type, options);
    }
    else if ((0, definition_1.isUnionType)(type)) {
        return printUnion(type, options);
    }
    else if ((0, definition_1.isEnumType)(type)) {
        return printEnum(type, options);
    }
    else if ((0, definition_1.isInputObjectType)(type)) {
        return printInputObject(type, options);
    }
    (0, misc_1.invariant)(false, `Unexpected type: ${(0, misc_1.inspect)(type)}`);
    return '';
}
exports.printType = printType;
function printScalar(type, options) {
    if (options === null || options === void 0 ? void 0 : options.omitScalars)
        return '';
    return `${printDescription(type, options)}scalar ${type.name}${printNodeDirectives(type.astNode)}`;
}
exports.printScalar = printScalar;
function printImplementedInterfaces(type, options) {
    const interfaces = (type.getInterfaces ? type.getInterfaces() : []);
    if (!interfaces.length)
        return '';
    if ((options === null || options === void 0 ? void 0 : options.sortAll) || (options === null || options === void 0 ? void 0 : options.sortInterfaces)) {
        return ` implements ${interfaces
            .map((i) => i.name)
            .sort()
            .join(' & ')}`;
    }
    return ` implements ${interfaces.map((i) => i.name).join(' & ')}`;
}
exports.printImplementedInterfaces = printImplementedInterfaces;
function printObject(type, options) {
    return `${printDescription(type, options)}type ${type.name}${printImplementedInterfaces(type, options)}${printNodeDirectives(type.astNode)}${printFields(type, options)}`;
}
exports.printObject = printObject;
function printInterface(type, options) {
    return `${printDescription(type, options)}interface ${type.name}${printImplementedInterfaces(type, options)}${printNodeDirectives(type.astNode)}${printFields(type, options)}`;
}
exports.printInterface = printInterface;
function printUnion(type, options) {
    let types = type.getTypes();
    if ((options === null || options === void 0 ? void 0 : options.sortAll) || (options === null || options === void 0 ? void 0 : options.sortUnions)) {
        types = [...types].sort();
    }
    const possibleTypes = types.length ? ` = ${types.join(' | ')}` : '';
    return `${printDescription(type, options)}union ${type.name}${printNodeDirectives(type.astNode)}${possibleTypes}`;
}
exports.printUnion = printUnion;
function printEnum(type, options) {
    let values = type.getValues();
    if ((options === null || options === void 0 ? void 0 : options.sortAll) || (options === null || options === void 0 ? void 0 : options.sortEnums)) {
        values = [...values].sort((a, b) => a.name.localeCompare(b.name));
    }
    const valuesList = values.map((value, i) => `${printDescription(value, options, '  ', !i)}  ${value.name}${printNodeDirectives(value.astNode)}`);
    return `${printDescription(type, options)}enum ${type.name}${printNodeDirectives(type.astNode)}${printBlock(valuesList)}`;
}
exports.printEnum = printEnum;
function printInputObject(type, options) {
    let fields = Object.values(type.getFields());
    if ((options === null || options === void 0 ? void 0 : options.sortAll) || (options === null || options === void 0 ? void 0 : options.sortFields)) {
        fields = fields.sort((a, b) => a.name.localeCompare(b.name));
    }
    const fieldsList = fields.map((f, i) => `${printDescription(f, options, '  ', !i)}  ${printInputValue(f)}`);
    return `${printDescription(type, options)}input ${type.name}${printNodeDirectives(type.astNode)}${printBlock(fieldsList)}`;
}
exports.printInputObject = printInputObject;
function printFields(type, options) {
    let fields = Object.values(type.getFields());
    if ((options === null || options === void 0 ? void 0 : options.sortAll) || (options === null || options === void 0 ? void 0 : options.sortFields)) {
        fields = fields.sort((a, b) => a.name.localeCompare(b.name));
    }
    const fieldsList = fields.map((f, i) => `${printDescription(f, options, '  ', !i)}  ${f.name}${printArgs(f.args, options, '  ')}: ${String(f.type)}${printNodeDirectives(f.astNode)}`);
    return printBlock(fieldsList);
}
exports.printFields = printFields;
function printBlock(items) {
    return items.length !== 0 ? ` {\n${items.join('\n')}\n}` : '';
}
exports.printBlock = printBlock;
function printArgs(_args, options, indentation = '') {
    if (_args.length === 0) {
        return '';
    }
    const args = (options === null || options === void 0 ? void 0 : options.sortAll) || (options === null || options === void 0 ? void 0 : options.sortArgs)
        ? [..._args].sort((a, b) => a.name.localeCompare(b.name))
        : _args;
    if (args.every((arg) => !arg.description)) {
        return `(${args.map(printInputValue).join(', ')})`;
    }
    return `(\n${args
        .map((arg, i) => `${printDescription(arg, options, `  ${indentation}`, !i)}  ${indentation}${printInputValue(arg)}`)
        .join('\n')}\n${indentation})`;
}
exports.printArgs = printArgs;
function printInputValue(arg) {
    const defaultAST = (0, astFromValue_1.astFromValue)(arg.defaultValue, arg.type);
    let argDecl = `${arg.name}: ${String(arg.type)}`;
    if (defaultAST) {
        argDecl += ` = ${(0, printer_1.print)(defaultAST)}`;
    }
    return `${argDecl}${printNodeDirectives(arg.astNode)}`;
}
exports.printInputValue = printInputValue;
function printDirective(directive, options) {
    return `${printDescription(directive, options)}directive @${directive.name}${printArgs(directive.args, options)}${directive.isRepeatable ? ' repeatable' : ''} on ${directive.locations.join(' | ')}`;
}
exports.printDirective = printDirective;
function printNodeDirectives(node) {
    if (!node || !node.directives || !node.directives.length)
        return '';
    return ` ${node.directives
        .map((d) => {
        let args = '';
        if (d.arguments && d.arguments.length) {
            args = `(${d.arguments.map((a) => `${a.name.value}: ${(0, printer_1.print)(a.value)}`).join(', ')})`;
        }
        return `@${d.name.value}${args}`;
    })
        .join(' ')}`;
}
exports.printNodeDirectives = printNodeDirectives;
function printDescription(def, options, indentation = '', firstInBlock = true) {
    let { description } = def;
    if (description == null || (options === null || options === void 0 ? void 0 : options.omitDescriptions)) {
        return '';
    }
    description = description.trimRight();
    if (options && options.commentDescriptions) {
        return printDescriptionWithComments(description, indentation, firstInBlock);
    }
    const preferMultipleLines = description.length > 70;
    const blockString = printBlockStringLegacy(description, preferMultipleLines);
    const prefix = indentation && !firstInBlock ? `\n${indentation}` : indentation;
    return `${prefix + blockString.replace(/\n/g, `\n${indentation}`)}\n`;
}
exports.printDescription = printDescription;
function printDescriptionWithComments(description, indentation, firstInBlock) {
    const prefix = indentation && !firstInBlock ? '\n' : '';
    const comment = description
        .split('\n')
        .map((line) => indentation + (line !== '' ? `# ${line}` : '#'))
        .join('\n');
    return `${prefix + comment}\n`;
}
exports.printDescriptionWithComments = printDescriptionWithComments;
//# sourceMappingURL=schemaPrinter.js.map