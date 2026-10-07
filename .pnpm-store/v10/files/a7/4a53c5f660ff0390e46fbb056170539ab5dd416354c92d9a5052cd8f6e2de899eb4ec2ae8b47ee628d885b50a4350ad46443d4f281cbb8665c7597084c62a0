"use strict";

exports.__esModule = true;
exports.tranformDocument = tranformDocument;
var graphql = _interopRequireWildcard(require("graphql"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function extractEnumValues(value, acc = []) {
  let hasValue = false;
  if (value.kind === graphql.Kind.ENUM) {
    hasValue = true;
    acc.push(value.value);
  } else if (value.kind === graphql.Kind.LIST) {
    // list can be empty but it indicate that it is set at least
    hasValue = true;
    for (const listItem of value.values) {
      extractEnumValues(listItem, acc);
    }
  }
  return hasValue ? acc : undefined;
}
function isOldSortObject(props) {
  if (!props || typeof props !== `object` || Array.isArray(props)) {
    return false;
  }
  let hasFields = false;
  // skip if there any unexpected keys
  for (const [key, value] of Object.entries(props)) {
    if (key === `fields`) {
      if (value) {
        hasFields = true;
      }
    } else if (key !== `order`) {
      return false;
    }
  }
  return hasFields;
}
function pathSegmentsToAst(path, value) {
  return path.split(`___`).reduceRight((previousNode, fieldPathSegment) => {
    return {
      kind: graphql.Kind.OBJECT,
      fields: [{
        kind: graphql.Kind.OBJECT_FIELD,
        name: {
          kind: graphql.Kind.NAME,
          value: fieldPathSegment
        },
        value: previousNode
      }]
    };
  }, {
    kind: graphql.Kind.ENUM,
    value
  });
}
function processGraphQLQuery(query) {
  try {
    let hasChanged = false; // this is sort of a hack, but print changes formatting and we only want to use it when we have to
    const ast = typeof query === `string` ? graphql.parse(query) : query;
    graphql.visit(ast, {
      Argument(node) {
        if (node.name.value === `sort`) {
          if (node.value.kind !== graphql.Kind.OBJECT) {
            return;
          }

          // old style sort: `allX(sort: { fields: <something>, order?: </something> })
          const props = {};
          for (const field of node.value.fields) {
            props[field.name.value] = extractEnumValues(field.value);
          }
          if (!isOldSortObject(props)) {
            return;
          }

          // iterate over each pair of field and order and create new object style for each
          const newObjects = [];
          for (let i = 0; i < props.fields.length; i++) {
            var _props$order$i, _props$order;
            const field = props.fields[i];
            const order = (_props$order$i = (_props$order = props.order) === null || _props$order === void 0 ? void 0 : _props$order[i]) !== null && _props$order$i !== void 0 ? _props$order$i : `ASC`;
            newObjects.push(pathSegmentsToAst(field, order));
          }
          if (newObjects.length === 0) {
            return;
          }

          // @ts-ignore node.value apparently is read-only ...
          node.value = newObjects.length > 1 ? {
            kind: graphql.Kind.LIST,
            values: newObjects
          } : newObjects[0];
          hasChanged = true;
        } else if (node.name.value === `field`) {
          if (node.value.kind !== graphql.Kind.ENUM) {
            return;
          }

          // @ts-ignore read-only ...
          node.value = pathSegmentsToAst(node.value.value, `SELECT`);
          hasChanged = true;
        }
      }
    });
    return {
      ast,
      hasChanged
    };
  } catch (err) {
    throw new Error(`GatsbySortAndAggrCodemod: GraphQL syntax error in query:\n\n${query}\n\nmessage:\n\n${err}`);
  }
}
function tranformDocument(ast) {
  if ("5" === `5`) {
    try {
      return processGraphQLQuery(ast);
    } catch (error) {
      return {
        ast,
        hasChanged: false,
        error
      };
    }
  }
  return {
    ast,
    hasChanged: false
  };
}
//# sourceMappingURL=transform-document.js.map