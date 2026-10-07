"use strict";

exports.__esModule = true;
exports.default = void 0;

var _esutils = _interopRequireDefault(require("esutils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts JSX Spread arguments into Object Spread, avoiding Babel's helper or Object.assign injection.
 * Input:
 * 	 <div a="1" {...b} />
 * Output:
 *   <div {...{ a: "1", ...b }} />
 * ...which Babel converts to:
 *   h("div", { a: "1", ...b })
 */
var _default = ({
  types: t
}) => {
  // converts a set of JSXAttributes to an Object.assign() call
  function convertAttributesAssign(attributes) {
    const args = [];

    for (let i = 0, current; i < attributes.length; i++) {
      const node = attributes[i];

      if (t.isJSXSpreadAttribute(node)) {
        // the first attribute is a spread, avoid copying all other attributes onto it
        if (i === 0) {
          args.push(t.objectExpression([]));
        }

        current = null;
        args.push(node.argument);
      } else {
        const name = getAttributeName(node);
        const value = getAttributeValue(node);

        if (!current) {
          current = t.objectExpression([]);
          args.push(current);
        }

        current.properties.push(t.objectProperty(name, value));
      }
    }

    return t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("assign")), args);
  } // Converts a JSXAttribute to the equivalent ObjectExpression property


  function convertAttributeSpread(node) {
    if (t.isJSXSpreadAttribute(node)) {
      return t.spreadElement(node.argument);
    }

    const name = getAttributeName(node);
    const value = getAttributeValue(node);
    return t.inherits(t.objectProperty(name, value), node);
  } // Convert a JSX attribute name to an Object expression property name


  function getAttributeName(node) {
    if (t.isJSXNamespacedName(node.name)) {
      return t.stringLiteral(node.name.namespace.name + ":" + node.name.name.name);
    }

    if (_esutils.default.keyword.isIdentifierNameES6(node.name.name)) {
      return t.identifier(node.name.name);
    }

    return t.stringLiteral(node.name.name);
  } // Convert a JSX attribute value to a JavaScript expression value


  function getAttributeValue(node) {
    let value = node.value || t.booleanLiteral(true);

    if (t.isJSXExpressionContainer(value)) {
      value = value.expression;
    } else if (t.isStringLiteral(value)) {
      value.value = value.value.replace(/\n\s+/g, " "); // "raw" JSXText should not be used from a StringLiteral because it needs to be escaped.

      if (value.extra && value.extra.raw) {
        delete value.extra.raw;
      }
    }

    return value;
  }

  return {
    name: "transform-jsx-spread",
    visitor: {
      JSXOpeningElement(path, state) {
        const useSpread = state.opts.useSpread === true;
        const hasSpread = path.node.attributes.some(attr => t.isJSXSpreadAttribute(attr)); // ignore JSX Elements without spread or with lone spread:

        if (!hasSpread || path.node.attributes.length === 1) return;

        if (useSpread) {
          path.node.attributes = [t.jsxSpreadAttribute(t.objectExpression(path.node.attributes.map(convertAttributeSpread)))];
        } else {
          path.node.attributes = [t.jsxSpreadAttribute(convertAttributesAssign(path.node.attributes))];
        }
      }

    }
  };
};

exports.default = _default;
module.exports = exports.default;