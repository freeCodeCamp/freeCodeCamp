import { createPath } from "./node-path";
import { unionTypesMap, nodeAndUnionTypes } from "./nodes"; // recursively walks the AST starting at the given node. The callback is invoked for
// and object that has a 'type' property.

function walk(context, callback) {
  var stop = false;

  function innerWalk(context, callback) {
    if (stop) {
      return;
    }

    var node = context.node;

    if (node === undefined) {
      console.warn("traversing with an empty context");
      return;
    }

    if (node._deleted === true) {
      return;
    }

    var path = createPath(context);
    callback(node.type, path);

    if (path.shouldStop) {
      stop = true;
      return;
    }

    Object.keys(node).forEach(function (prop) {
      var value = node[prop];

      if (value === null || value === undefined) {
        return;
      }

      var valueAsArray = Array.isArray(value) ? value : [value];
      valueAsArray.forEach(function (childNode) {
        if (typeof childNode.type === "string") {
          var childContext = {
            node: childNode,
            parentKey: prop,
            parentPath: path,
            shouldStop: false,
            inList: Array.isArray(value)
          };
          innerWalk(childContext, callback);
        }
      });
    });
  }

  innerWalk(context, callback);
}

var noop = function noop() {};

export function traverse(node, visitors) {
  var before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  var after = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  Object.keys(visitors).forEach(function (visitor) {
    if (!nodeAndUnionTypes.includes(visitor)) {
      throw new Error("Unexpected visitor ".concat(visitor));
    }
  });
  var context = {
    node: node,
    inList: false,
    shouldStop: false,
    parentPath: null,
    parentKey: null
  };
  walk(context, function (type, path) {
    if (typeof visitors[type] === "function") {
      before(type, path);
      visitors[type](path);
      after(type, path);
    }

    var unionTypes = unionTypesMap[type];

    if (!unionTypes) {
      throw new Error("Unexpected node type ".concat(type));
    }

    unionTypes.forEach(function (unionType) {
      if (typeof visitors[unionType] === "function") {
        before(unionType, path);
        visitors[unionType](path);
        after(unionType, path);
      }
    });
  });
}