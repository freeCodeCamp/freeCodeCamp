"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fieldPathNeedToResolve = exports.fieldNeedToResolve = void 0;
exports.getResolvedFields = getResolvedFields;
exports.isObjectOrInterfaceTypeComposer = isObjectOrInterfaceTypeComposer;
exports.maybeConvertSortInputObjectToSortPath = maybeConvertSortInputObjectToSortPath;
exports.pathObjectToPathString = pathObjectToPathString;
exports.toNodeTypeNames = void 0;
var _graphql = require("graphql");
var _graphqlCompose = require("graphql-compose");
var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));
var _redux = require("../redux");
const toNodeTypeNames = (schema, gqlTypeName) => {
  const gqlType = typeof gqlTypeName === `string` ? schema.getType(gqlTypeName) : gqlTypeName;
  if (!gqlType || !((0, _graphql.isObjectType)(gqlType) || (0, _graphql.isAbstractType)(gqlType))) {
    return [];
  }
  const possibleTypes = (0, _graphql.isAbstractType)(gqlType) ? schema.getPossibleTypes(gqlType) : [gqlType];
  return possibleTypes.filter(type => type.getInterfaces().some(iface => iface.name === `Node`)).map(type => type.name);
};
exports.toNodeTypeNames = toNodeTypeNames;
function isObjectOrInterfaceTypeComposer(type) {
  return type instanceof _graphqlCompose.ObjectTypeComposer || type instanceof _graphqlCompose.InterfaceTypeComposer;
}
const fieldNeedToResolve = ({
  schema,
  gqlType,
  typeComposer,
  schemaComposer,
  fieldName
}) => {
  const nodeTypeNames = toNodeTypeNames(schema, gqlType);
  const possibleTCs = [typeComposer, ...nodeTypeNames.map(name => schemaComposer.getAnyTC(name)).filter(isObjectOrInterfaceTypeComposer)];
  for (const tc of possibleTCs) {
    if (tc.getFieldExtension(fieldName, `needsResolve`) || false) {
      return true;
    }
  }
  return false;
};
exports.fieldNeedToResolve = fieldNeedToResolve;
const fieldPathNeedToResolve = ({
  selector,
  type
}) => {
  const {
    schema,
    schemaCustomization: {
      composer: schemaComposer
    }
  } = _redux.store.getState();
  if (!schemaComposer) {
    throw new Error(`Schema composer isn't set yet`);
  }
  const selectors = typeof selector === `string` ? selector.split(`.`) : selector;
  let gqlType = typeof type === `string` ? schema.getType(type) : type;
  if (!gqlType || !((0, _graphql.isObjectType)(gqlType) || (0, _graphql.isInterfaceType)(gqlType))) {
    return false;
  }
  for (let i = 0; i < selectors.length; i++) {
    const fieldName = selectors[i];
    const typeComposer = schemaComposer.getAnyTC(gqlType.name);
    if (!isObjectOrInterfaceTypeComposer(typeComposer)) {
      return false;
    }
    if (fieldNeedToResolve({
      schema,
      gqlType,
      typeComposer,
      schemaComposer,
      fieldName
    })) {
      return true;
    }
    const nextType = (0, _graphql.getNamedType)(gqlType.getFields()[fieldName].type);
    if (!nextType || !((0, _graphql.isObjectType)(nextType) || (0, _graphql.isInterfaceType)(nextType))) {
      return false;
    } else {
      gqlType = nextType;
    }
  }
  return false;
};
exports.fieldPathNeedToResolve = fieldPathNeedToResolve;
function getResolvedFields(node) {
  const typeName = node.internal.type;
  const resolvedNodes = _redux.store.getState().resolvedNodesCache.get(typeName);
  return resolvedNodes === null || resolvedNodes === void 0 ? void 0 : resolvedNodes.get(node.id);
}
function pathObjectToPathString(input) {
  const path = [];
  let currentValue = input;
  let leaf = undefined;
  while (currentValue) {
    if ((0, _isPlainObject.default)(currentValue)) {
      const entries = Object.entries(currentValue);
      if (entries.length !== 1) {
        throw new Error(`Invalid field arg`);
      }
      for (const [key, value] of entries) {
        path.push(key);
        currentValue = value;
      }
    } else {
      leaf = currentValue;
      currentValue = undefined;
    }
  }
  return {
    path: path.join(`.`),
    leaf
  };
}
function maybeConvertSortInputObjectToSortPath(args) {
  if (!args.sort) {
    return args;
  }
  if ("5" === `5`) {
    var _args$sort, _args$sort2;
    // check if it's already in expected format
    if (Array.isArray((_args$sort = args.sort) === null || _args$sort === void 0 ? void 0 : _args$sort.fields) && Array.isArray((_args$sort2 = args.sort) === null || _args$sort2 === void 0 ? void 0 : _args$sort2.order) && args.sort.order.every(item => typeof item === `string` && (item.toLowerCase() === `asc` || item.toLowerCase() === `desc`))) {
      return args;
    }
    let sorts = args.sort;
    if (!Array.isArray(sorts)) {
      sorts = [sorts];
    }
    const modifiedSort = {
      fields: [],
      order: []
    };
    for (const sort of sorts) {
      const {
        path,
        leaf
      } = pathObjectToPathString(sort);
      modifiedSort.fields.push(path);
      modifiedSort.order.push(leaf);
    }
    return {
      ...args,
      sort: modifiedSort
    };
  }
  return args;
}
//# sourceMappingURL=utils.js.map