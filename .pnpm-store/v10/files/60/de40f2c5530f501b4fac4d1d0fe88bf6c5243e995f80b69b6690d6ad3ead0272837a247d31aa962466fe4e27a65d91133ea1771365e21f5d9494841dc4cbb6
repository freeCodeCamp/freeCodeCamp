"use strict";

exports.__esModule = true;
exports.getPagination = exports.getPageInfo = exports.getGroup = exports.getEdge = void 0;
var _graphqlCompose = require("graphql-compose");
var _sort = require("./sort");
var _derivedTypes = require("./derived-types");
var _resolvers = require("../resolvers");
var _utils = require("./utils");
const getPageInfo = ({
  schemaComposer
}) => schemaComposer.getOrCreateOTC(`PageInfo`, tc => {
  tc.addFields({
    currentPage: `Int!`,
    hasPreviousPage: `Boolean!`,
    hasNextPage: `Boolean!`,
    itemCount: `Int!`,
    pageCount: `Int!`,
    perPage: `Int`,
    totalCount: `Int!`
  });
});
exports.getPageInfo = getPageInfo;
const getEdge = ({
  schemaComposer,
  typeComposer
}) => {
  const typeName = `${typeComposer.getTypeName()}Edge`;
  (0, _derivedTypes.addDerivedType)({
    typeComposer,
    derivedTypeName: typeName
  });
  return schemaComposer.getOrCreateOTC(typeName, tc => {
    tc.addFields({
      next: typeComposer,
      node: typeComposer.getTypeNonNull(),
      previous: typeComposer
    });
  });
};
exports.getEdge = getEdge;
const getGroup = ({
  schemaComposer,
  typeComposer
}) => {
  const typeName = `${typeComposer.getTypeName()}GroupConnection`;
  const fields = {
    field: `String!`,
    fieldValue: `String`
  };
  return createPagination({
    schemaComposer,
    typeComposer,
    typeName,
    fields
  });
};
exports.getGroup = getGroup;
const getPagination = ({
  schemaComposer,
  typeComposer
}) => {
  const typeName = `${typeComposer.getTypeName()}Connection`;
  return createPagination({
    schemaComposer,
    typeComposer,
    typeName
  });
};
exports.getPagination = getPagination;
function getFieldSelectorTC({
  schemaComposer,
  typeComposer
}) {
  if ("5" === `5`) {
    return (0, _utils.convertToNestedInputType)({
      schemaComposer,
      typeComposer,
      onEnter: ({
        fieldName,
        typeComposer
      }) => {
        const sortable = typeComposer instanceof _graphqlCompose.UnionTypeComposer || typeComposer instanceof _graphqlCompose.ScalarTypeComposer ? undefined : typeComposer.getFieldExtension(fieldName, `sortable`);
        if (sortable === _sort.SORTABLE_ENUM.NOT_SORTABLE) {
          // stop traversing
          return null;
        } else if (sortable === _sort.SORTABLE_ENUM.DEPRECATED_SORTABLE) {
          // mark this and all nested fields as deprecated
          return {
            deprecationReason: `Sorting on fields that need arguments to resolve is deprecated.`
          };
        }

        // continue
        return undefined;
      },
      leafInputComposer: schemaComposer.getOrCreateETC(`FieldSelectorEnum`, etc => {
        etc.setFields({
          // GraphQL spec doesn't allow using "true" (or "false" or "null") as enum values
          // so we "SELECT"
          SELECT: {
            value: `SELECT`
          }
        });
      }),
      postfix: `FieldSelector`
    }).getTypeNonNull();
  } else {
    const inputTypeComposer = typeComposer.getInputTypeComposer();
    const fieldsEnumTC = (0, _sort.getFieldsEnum)({
      schemaComposer,
      typeComposer,
      inputTypeComposer
    });
    return fieldsEnumTC.getTypeNonNull();
  }
}
function createPagination({
  schemaComposer,
  typeComposer,
  fields,
  typeName
}) {
  const fieldTC = getFieldSelectorTC({
    schemaComposer,
    typeComposer
  });
  const paginationTypeComposer = schemaComposer.getOrCreateOTC(typeName, tc => {
    // getGroup() will create a recursive call to pagination,
    // so only add it and other aggregate functions on onCreate.
    // Cast into their own category to avoid Typescript conflicts.
    const aggregationFields = {
      distinct: {
        type: [`String!`],
        args: {
          field: fieldTC
        },
        resolve: (0, _resolvers.createDistinctResolver)(typeComposer.getTypeName())
      },
      max: {
        type: `Float`,
        args: {
          field: fieldTC
        },
        resolve: (0, _resolvers.createMaxResolver)(typeComposer.getTypeName())
      },
      min: {
        type: `Float`,
        args: {
          field: fieldTC
        },
        resolve: (0, _resolvers.createMinResolver)(typeComposer.getTypeName())
      },
      sum: {
        type: `Float`,
        args: {
          field: fieldTC
        },
        resolve: (0, _resolvers.createSumResolver)(typeComposer.getTypeName())
      },
      group: {
        type: [getGroup({
          schemaComposer,
          typeComposer
        }).getTypeNonNull()],
        args: {
          skip: `Int`,
          limit: `Int`,
          field: fieldTC
        },
        resolve: (0, _resolvers.createGroupResolver)(typeComposer.getTypeName())
      }
    };
    tc.addFields({
      totalCount: `Int!`,
      edges: [getEdge({
        schemaComposer,
        typeComposer
      }).getTypeNonNull()],
      nodes: [typeComposer.getTypeNonNull()],
      pageInfo: getPageInfo({
        schemaComposer
      }).getTypeNonNull(),
      ...aggregationFields,
      ...fields
    });
  });
  paginationTypeComposer.makeFieldNonNull(`edges`);
  paginationTypeComposer.makeFieldNonNull(`nodes`);
  paginationTypeComposer.makeFieldNonNull(`distinct`);
  paginationTypeComposer.makeFieldNonNull(`group`);
  (0, _derivedTypes.addDerivedType)({
    typeComposer,
    derivedTypeName: typeName
  });
  return paginationTypeComposer;
}
//# sourceMappingURL=pagination.js.map