function parseIdentifier(identifier) {
  if (identifier.type === `JSXIdentifier`) {
    return identifier.name;
  }

  return parseIdentifier(identifier.name);
}
/**
 * Get all attribute values of a JSX element. This only includes values that can be statically-analysed.
 * Pass the `onError` callback to be notified if an attribute cannot be resolved.
 *
 * @param nodePath The NodePath of the JSX opening element
 * @param onError Called with the attribute name and path if it is present but cannot be resolved
 * @param include If present, only these props are evaluated. Does not apply to spread attributes.
 */

function getAttributeValues(nodePath, onError, include) {
  let result = {};
  nodePath.traverse({
    JSXSpreadAttribute(attrPath) {
      const spreadValues = attrPath.get(`argument`).evaluate();

      if (spreadValues.confident) {
        result = { ...result,
          ...spreadValues.value
        };
      } else {
        onError == null ? void 0 : onError(`<spread attributes>`);
      }
    },

    JSXAttribute(attrPath) {
      const prop = parseIdentifier(attrPath.node.name);

      if (include && !include.has(prop)) {
        return;
      }

      const {
        value,
        confident
      } = getAttributeValue(attrPath);

      if (confident) {
        result[prop] = value;
      } else {
        onError == null ? void 0 : onError(prop, attrPath);
      }
    }

  });
  return result;
}
/**
 * Attempt to get the value of a JSX attribute. Returns an object with the
 * properties `confident`, which is false if the value cannot be resolved
 * in the current scope, and `value` which is the value if it can be.
 *
 * If the attribute is empty, then the returned value is `true`, e.g.
 * `<Image eager />` would return `true` for the `eager` attribute.
 *
 * @param nodePath The NodePath of the JSXAttribute
 */

function getAttributeValue(nodePath) {
  let valueNode = nodePath.get(`value`);

  if (Array.isArray(valueNode)) {
    valueNode = valueNode[0];
  }

  if (!valueNode.node) {
    // empty attributes are truthy
    return {
      confident: true,
      value: true
    };
  } else if (valueNode.node.type === `JSXExpressionContainer`) {
    const expression = valueNode.get(`expression`);

    if (Array.isArray(expression)) {
      var _expression$;

      return (_expression$ = expression[0]) == null ? void 0 : _expression$.evaluate();
    }

    return expression.evaluate();
  } else {
    return valueNode.evaluate();
  }
}

export { getAttributeValue, getAttributeValues, parseIdentifier };
//# sourceMappingURL=index.esm.js.map
