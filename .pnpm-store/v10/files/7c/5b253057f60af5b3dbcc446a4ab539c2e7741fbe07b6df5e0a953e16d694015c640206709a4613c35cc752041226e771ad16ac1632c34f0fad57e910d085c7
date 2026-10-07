"use strict";

exports.__esModule = true;
exports.getFilterInput = exports.SEARCHABLE_ENUM = void 0;
var _graphql = require("graphql");
var _graphqlCompose = require("graphql-compose");
var _date = require("./date");
var _utils = require("./utils");
const SEARCHABLE_ENUM = {
  SEARCHABLE: `SEARCHABLE`,
  NOT_SEARCHABLE: `NON_SEARCHABLE`,
  DEPRECATED_SEARCHABLE: `DERPECATED_SEARCHABLE`
};
exports.SEARCHABLE_ENUM = SEARCHABLE_ENUM;
const getQueryOperatorListInput = ({
  schemaComposer,
  inputTypeComposer
}) => {
  const typeName = inputTypeComposer.getTypeName().replace(/Input/, `ListInput`);
  return schemaComposer.getOrCreateITC(typeName, itc => {
    itc.addFields({
      elemMatch: inputTypeComposer
    });
  });
};
const EQ = `eq`;
const NE = `ne`;
const GT = `gt`;
const GTE = `gte`;
const LT = `lt`;
const LTE = `lte`;
const IN = `in`;
const NIN = `nin`;
const REGEX = `regex`;
const GLOB = `glob`;
const ALLOWED_OPERATORS = {
  Boolean: [EQ, NE, IN, NIN],
  Date: [EQ, NE, GT, GTE, LT, LTE, IN, NIN],
  Float: [EQ, NE, GT, GTE, LT, LTE, IN, NIN],
  ID: [EQ, NE, IN, NIN],
  Int: [EQ, NE, GT, GTE, LT, LTE, IN, NIN],
  JSON: [EQ, NE, IN, NIN, REGEX, GLOB],
  String: [EQ, NE, IN, NIN, REGEX, GLOB],
  Enum: [EQ, NE, IN, NIN],
  CustomScalar: [EQ, NE, IN, NIN]
};
const ARRAY_OPERATORS = [IN, NIN];
const getOperatorFields = (fieldType, operators) => {
  const result = {};
  operators.forEach(op => {
    if (ARRAY_OPERATORS.includes(op)) {
      result[op] = [fieldType];
    } else {
      result[op] = fieldType;
    }
  });
  return result;
};
const isBuiltInScalarType = type => (0, _graphql.isSpecifiedScalarType)(type) || type === _date.GraphQLDate || type === _graphqlCompose.GraphQLJSON;
const getQueryOperatorInput = ({
  schemaComposer,
  type
}) => {
  let typeName;
  if (type instanceof _graphql.GraphQLEnumType) {
    typeName = `Enum`;
  } else if (isBuiltInScalarType(type)) {
    typeName = type.name;
  } else {
    typeName = `CustomScalar`;
  }
  const operators = ALLOWED_OPERATORS[typeName];
  return schemaComposer.getOrCreateITC(type.name + `QueryOperatorInput`, itc => itc.addFields(getOperatorFields(type, operators)));
};
const getFilterInput = ({
  schemaComposer,
  typeComposer
}) => (0, _utils.convertToNestedInputType)({
  schemaComposer,
  typeComposer,
  postfix: `FilterInput`,
  onEnter: ({
    fieldName,
    typeComposer
  }) => {
    const searchable = typeComposer instanceof _graphqlCompose.UnionTypeComposer || typeComposer instanceof _graphqlCompose.ScalarTypeComposer ? undefined : typeComposer.getFieldExtension(fieldName, `searchable`);
    if (searchable === SEARCHABLE_ENUM.NOT_SEARCHABLE) {
      // stop traversing
      return null;
    } else if (searchable === SEARCHABLE_ENUM.DEPRECATED_SEARCHABLE) {
      // mark this and all nested fields as deprecated
      return {
        deprecationReason: `Filtering on fields that need arguments to resolve is deprecated.`
      };
    }

    // continue
    return undefined;
  },
  leafInputComposer: getQueryOperatorInput,
  // elemMatch operator
  listInputComposer: getQueryOperatorListInput
});
exports.getFilterInput = getFilterInput;
//# sourceMappingURL=filter.js.map