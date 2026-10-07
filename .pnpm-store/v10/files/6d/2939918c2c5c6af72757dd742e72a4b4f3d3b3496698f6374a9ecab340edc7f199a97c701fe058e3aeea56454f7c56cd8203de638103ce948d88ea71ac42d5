"use strict";

var t = require("@babel/types");
var convertComments = require("./convertComments");

module.exports = function(ast, traverse, code) {
  var state = { source: code };

  // Monkey patch visitor keys in order to be able to traverse the estree nodes
  t.VISITOR_KEYS.Property = t.VISITOR_KEYS.ObjectProperty;
  t.VISITOR_KEYS.MethodDefinition = [
    "key",
    "value",
    "decorators",
    "returnType",
    "typeParameters",
  ];

  traverse(ast, astTransformVisitor, null, state);

  delete t.VISITOR_KEYS.Property;
  delete t.VISITOR_KEYS.MethodDefinition;
};

var astTransformVisitor = {
  noScope: true,
  enter(path) {
    var node = path.node;

    // private var to track original node type
    node._babelType = node.type;

    if (node.innerComments) {
      node.trailingComments = node.innerComments;
      delete node.innerComments;
    }

    if (node.trailingComments) {
      convertComments(node.trailingComments);
    }

    if (node.leadingComments) {
      convertComments(node.leadingComments);
    }
  },
  exit(path) {
    var node = path.node;

    if (path.isJSXText()) {
      node.type = "Literal";
    }

    if (
      path.isRestElement() &&
      path.parent &&
      path.parent.type === "ObjectPattern"
    ) {
      node.type = "ExperimentalRestProperty";
    }

    if (
      path.isSpreadElement() &&
      path.parent &&
      path.parent.type === "ObjectExpression"
    ) {
      node.type = "ExperimentalSpreadProperty";
    }

    if (path.isTypeParameter()) {
      node.type = "Identifier";
      node.typeAnnotation = node.bound;
      delete node.bound;
    }

    // flow: prevent "no-undef"
    // for "Component" in: "let x: React.Component"
    if (path.isQualifiedTypeIdentifier()) {
      delete node.id;
    }
    // for "b" in: "var a: { b: Foo }"
    if (path.isObjectTypeProperty()) {
      delete node.key;
    }
    // for "indexer" in: "var a: {[indexer: string]: number}"
    if (path.isObjectTypeIndexer()) {
      delete node.id;
    }
    // for "param" in: "var a: { func(param: Foo): Bar };"
    if (path.isFunctionTypeParam()) {
      delete node.name;
    }

    // modules

    if (path.isImportDeclaration()) {
      delete node.isType;
    }

    // template string range fixes
    if (path.isTemplateLiteral()) {
      for (var j = 0; j < node.quasis.length; j++) {
        var q = node.quasis[j];
        q.range[0] -= 1;
        if (q.tail) {
          q.range[1] += 1;
        } else {
          q.range[1] += 2;
        }
        q.loc.start.column -= 1;
        if (q.tail) {
          q.loc.end.column += 1;
        } else {
          q.loc.end.column += 2;
        }
      }
    }
  },
};
