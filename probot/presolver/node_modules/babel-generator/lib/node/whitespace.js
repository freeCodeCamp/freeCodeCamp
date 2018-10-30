"use strict";

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crawl(node) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (t.isMemberExpression(node)) {
    crawl(node.object, state);
    if (node.computed) crawl(node.property, state);
  } else if (t.isBinary(node) || t.isAssignmentExpression(node)) {
    crawl(node.left, state);
    crawl(node.right, state);
  } else if (t.isCallExpression(node)) {
    state.hasCall = true;
    crawl(node.callee, state);
  } else if (t.isFunction(node)) {
    state.hasFunction = true;
  } else if (t.isIdentifier(node)) {
    state.hasHelper = state.hasHelper || isHelper(node.callee);
  }

  return state;
}

function isHelper(node) {
  if (t.isMemberExpression(node)) {
    return isHelper(node.object) || isHelper(node.property);
  } else if (t.isIdentifier(node)) {
    return node.name === "require" || node.name[0] === "_";
  } else if (t.isCallExpression(node)) {
    return isHelper(node.callee);
  } else if (t.isBinary(node) || t.isAssignmentExpression(node)) {
    return t.isIdentifier(node.left) && isHelper(node.left) || isHelper(node.right);
  } else {
    return false;
  }
}

function isType(node) {
  return t.isLiteral(node) || t.isObjectExpression(node) || t.isArrayExpression(node) || t.isIdentifier(node) || t.isMemberExpression(node);
}

exports.nodes = {
  AssignmentExpression: function AssignmentExpression(node) {
    var state = crawl(node.right);
    if (state.hasCall && state.hasHelper || state.hasFunction) {
      return {
        before: state.hasFunction,
        after: true
      };
    }
  },
  SwitchCase: function SwitchCase(node, parent) {
    return {
      before: node.consequent.length || parent.cases[0] === node
    };
  },
  LogicalExpression: function LogicalExpression(node) {
    if (t.isFunction(node.left) || t.isFunction(node.right)) {
      return {
        after: true
      };
    }
  },
  Literal: function Literal(node) {
    if (node.value === "use strict") {
      return {
        after: true
      };
    }
  },
  CallExpression: function CallExpression(node) {
    if (t.isFunction(node.callee) || isHelper(node)) {
      return {
        before: true,
        after: true
      };
    }
  },
  VariableDeclaration: function VariableDeclaration(node) {
    for (var i = 0; i < node.declarations.length; i++) {
      var declar = node.declarations[i];

      var enabled = isHelper(declar.id) && !isType(declar.init);
      if (!enabled) {
        var state = crawl(declar.init);
        enabled = isHelper(declar.init) && state.hasCall || state.hasFunction;
      }

      if (enabled) {
        return {
          before: true,
          after: true
        };
      }
    }
  },
  IfStatement: function IfStatement(node) {
    if (t.isBlockStatement(node.consequent)) {
      return {
        before: true,
        after: true
      };
    }
  }
};

exports.nodes.ObjectProperty = exports.nodes.ObjectTypeProperty = exports.nodes.ObjectMethod = exports.nodes.SpreadProperty = function (node, parent) {
  if (parent.properties[0] === node) {
    return {
      before: true
    };
  }
};

exports.list = {
  VariableDeclaration: function VariableDeclaration(node) {
    return (0, _map2.default)(node.declarations, "init");
  },
  ArrayExpression: function ArrayExpression(node) {
    return node.elements;
  },
  ObjectExpression: function ObjectExpression(node) {
    return node.properties;
  }
};

[["Function", true], ["Class", true], ["Loop", true], ["LabeledStatement", true], ["SwitchStatement", true], ["TryStatement", true]].forEach(function (_ref) {
  var type = _ref[0],
      amounts = _ref[1];

  if (typeof amounts === "boolean") {
    amounts = { after: amounts, before: amounts };
  }
  [type].concat(t.FLIPPED_ALIAS_KEYS[type] || []).forEach(function (type) {
    exports.nodes[type] = function () {
      return amounts;
    };
  });
});