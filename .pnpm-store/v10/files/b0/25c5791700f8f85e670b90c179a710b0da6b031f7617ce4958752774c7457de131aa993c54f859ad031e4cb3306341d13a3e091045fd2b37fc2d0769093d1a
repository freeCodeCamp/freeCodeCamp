"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const ignoreToPrimitiveHint = (_api$assumption = api.assumption("ignoreToPrimitiveHint")) != null ? _api$assumption : options.loose;
  const mutableTemplateObject = (_api$assumption2 = api.assumption("mutableTemplateObject")) != null ? _api$assumption2 : options.loose;
  let helperName = "taggedTemplateLiteral";
  if (mutableTemplateObject) helperName += "Loose";
  function buildConcatCallExpressions(items) {
    let avail = true;
    return items.reduce(function (left, right) {
      let canBeInserted = _core.types.isLiteral(right);
      if (!canBeInserted && avail) {
        canBeInserted = true;
        avail = false;
      }
      if (canBeInserted && _core.types.isCallExpression(left)) {
        left.arguments.push(right);
        return left;
      }
      return _core.types.callExpression(_core.types.memberExpression(left, _core.types.identifier("concat")), [right]);
    });
  }
  return {
    name: "transform-template-literals",
    visitor: {
      TaggedTemplateExpression(path) {
        const {
          node
        } = path;
        const {
          quasi
        } = node;
        const strings = [];
        const raws = [];
        let isStringsRawEqual = true;
        for (const elem of quasi.quasis) {
          const {
            raw,
            cooked
          } = elem.value;
          const value = cooked == null ? path.scope.buildUndefinedNode() : _core.types.stringLiteral(cooked);
          strings.push(value);
          raws.push(_core.types.stringLiteral(raw));
          if (raw !== cooked) {
            isStringsRawEqual = false;
          }
        }
        const helperArgs = [_core.types.arrayExpression(strings)];
        if (!isStringsRawEqual) {
          helperArgs.push(_core.types.arrayExpression(raws));
        }
        const tmp = path.scope.generateUidIdentifier("templateObject");
        path.scope.getProgramParent().push({
          id: _core.types.cloneNode(tmp)
        });
        path.replaceWith(_core.types.callExpression(node.tag, [_core.template.expression.ast`
              ${_core.types.cloneNode(tmp)} || (
                ${tmp} = ${this.addHelper(helperName)}(${helperArgs})
              )
            `, ...quasi.expressions]));
      },
      TemplateLiteral(path) {
        if (path.parent.type === "TSLiteralType") {
          return;
        }
        const nodes = [];
        const expressions = path.get("expressions");
        let index = 0;
        for (const elem of path.node.quasis) {
          if (elem.value.cooked) {
            nodes.push(_core.types.stringLiteral(elem.value.cooked));
          }
          if (index < expressions.length) {
            const expr = expressions[index++];
            const node = expr.node;
            if (!_core.types.isStringLiteral(node, {
              value: ""
            })) {
              nodes.push(node);
            }
          }
        }
        if (!_core.types.isStringLiteral(nodes[0]) && !(ignoreToPrimitiveHint && _core.types.isStringLiteral(nodes[1]))) {
          nodes.unshift(_core.types.stringLiteral(""));
        }
        let root = nodes[0];
        if (ignoreToPrimitiveHint) {
          for (let i = 1; i < nodes.length; i++) {
            root = _core.types.binaryExpression("+", root, nodes[i]);
          }
        } else if (nodes.length > 1) {
          root = buildConcatCallExpressions(nodes);
        }
        path.replaceWith(root);
      }
    }
  };
});

//# sourceMappingURL=index.js.map
