"use strict";

exports.__esModule = true;
exports.convertToNestedInputType = exports.SEARCHABLE_ENUM = void 0;
var _graphql = require("graphql");
var _derivedTypes = require("./derived-types");
var _graphqlCompose = require("graphql-compose");
const SEARCHABLE_ENUM = {
  SEARCHABLE: `SEARCHABLE`,
  NOT_SEARCHABLE: `NON_SEARCHABLE`,
  DEPRECATED_SEARCHABLE: `DERPECATED_SEARCHABLE`
};
exports.SEARCHABLE_ENUM = SEARCHABLE_ENUM;
const removeEmptyFields = ({
  inputTypeComposer
}, cache = new Set()) => {
  const convert = itc => {
    if (cache.has(itc)) {
      return itc;
    }
    cache.add(itc);
    const fields = itc.getFields();
    const nonEmptyFields = {};
    Object.keys(fields).forEach(fieldName => {
      const fieldITC = fields[fieldName].type;
      if (fieldITC instanceof _graphqlCompose.InputTypeComposer) {
        const convertedITC = convert(fieldITC);
        if (convertedITC.getFieldNames().length) {
          nonEmptyFields[fieldName] = convertedITC;
        }
      } else {
        nonEmptyFields[fieldName] = fieldITC;
      }
    });
    itc.setFields(nonEmptyFields);
    return itc;
  };
  return convert(inputTypeComposer);
};
const convert = ({
  schemaComposer,
  typeComposer,
  inputTypeComposer,
  preCreatedInputComposer,
  deprecationReason,
  postfix,
  onEnter,
  leafInputComposer,
  listInputComposer
}) => {
  const inputTypeName = inputTypeComposer.getTypeName().replace(/Input$/, postfix);
  (0, _derivedTypes.addDerivedType)({
    typeComposer,
    derivedTypeName: inputTypeName
  });
  let convertedITC;
  if (preCreatedInputComposer) {
    convertedITC = preCreatedInputComposer;
  } else if (schemaComposer.has(inputTypeName)) {
    return schemaComposer.getITC(inputTypeName);
  } else {
    convertedITC = new _graphqlCompose.InputTypeComposer(new _graphql.GraphQLInputObjectType({
      name: inputTypeName,
      fields: {}
    }), schemaComposer);
  }
  schemaComposer.add(convertedITC);
  const fieldNames = inputTypeComposer.getFieldNames();
  const convertedFields = {};
  fieldNames.forEach(fieldName => {
    const maybeContext = onEnter({
      fieldName,
      typeComposer
    });
    if (maybeContext === null) {
      return;
    }
    const fieldConfig = inputTypeComposer.getFieldConfig(fieldName);
    const type = (0, _graphql.getNamedType)(fieldConfig.type);
    if (type instanceof _graphql.GraphQLInputObjectType) {
      var _maybeContext$depreca;
      // Input type composers has names `FooInput`, get the type associated
      // with it
      const typeComposer = schemaComposer.getAnyTC(type.name.replace(/Input$/, ``));
      const itc = new _graphqlCompose.InputTypeComposer(type, schemaComposer);
      const operatorsInputTC = convert({
        schemaComposer,
        typeComposer,
        inputTypeComposer: itc,
        deprecationReason: (_maybeContext$depreca = maybeContext === null || maybeContext === void 0 ? void 0 : maybeContext.deprecationReason) !== null && _maybeContext$depreca !== void 0 ? _maybeContext$depreca : deprecationReason,
        postfix,
        onEnter,
        leafInputComposer,
        listInputComposer
      });

      // TODO: array of arrays?
      const isListType = (0, _graphql.getNullableType)(fieldConfig.type) instanceof _graphql.GraphQLList;
      convertedFields[fieldName] = isListType ? typeof listInputComposer === `function` ? listInputComposer({
        schemaComposer,
        inputTypeComposer: operatorsInputTC
      }) : operatorsInputTC : operatorsInputTC;
    } else {
      // GraphQLScalarType || GraphQLEnumType
      const operatorFields = typeof leafInputComposer === `function` ? leafInputComposer({
        schemaComposer,
        type
      }) : leafInputComposer;
      if (operatorFields) {
        convertedFields[fieldName] = operatorFields;
      }
    }
    if (convertedFields[fieldName]) {
      convertedFields[fieldName].deprecationReason = deprecationReason;
    }
  });
  convertedITC.addFields(convertedFields);
  return convertedITC;
};
const convertToNestedInputType = ({
  schemaComposer,
  typeComposer,
  postfix,
  onEnter,
  leafInputComposer,
  listInputComposer
}) => {
  const typeName = typeComposer.getTypeName();
  const preCreatedInputComposer = schemaComposer.getOrCreateITC(`${typeName}${postfix}`);
  const inputTypeComposer = typeComposer.getInputTypeComposer({
    fallbackType: null
  });
  if (inputTypeComposer !== null && inputTypeComposer !== void 0 && inputTypeComposer.hasField(`id`) && (0, _graphql.getNamedType)(inputTypeComposer.getFieldType(`id`)).name === `ID`) {
    inputTypeComposer.extendField(`id`, {
      type: `String`
    });
  }
  const filterInputTC = convert({
    schemaComposer,
    typeComposer,
    inputTypeComposer,
    preCreatedInputComposer,
    postfix,
    onEnter,
    leafInputComposer,
    listInputComposer
  });
  return removeEmptyFields({
    inputTypeComposer: filterInputTC
  });
};
exports.convertToNestedInputType = convertToNestedInputType;
//# sourceMappingURL=utils.js.map