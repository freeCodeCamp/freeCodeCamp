"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = populatePlaceholders;
var _t = require("@babel/types");
const {
  blockStatement,
  cloneNode,
  emptyStatement,
  expressionStatement,
  identifier,
  isStatement,
  isStringLiteral,
  stringLiteral,
  validate
} = _t;
function populatePlaceholders(metadata, replacements) {
  const ast = cloneNode(metadata.ast);
  if (replacements) {
    metadata.placeholders.forEach(placeholder => {
      if (!hasOwnProperty.call(replacements, placeholder.name)) {
        const placeholderName = placeholder.name;
        throw new Error(`Error: No substitution given for "${placeholderName}". If this is not meant to be a
            placeholder you may want to consider passing one of the following options to @babel/template:
            - { placeholderPattern: false, placeholderWhitelist: new Set(['${placeholderName}'])}
            - { placeholderPattern: /^${placeholderName}$/ }`);
      }
    });
    Object.keys(replacements).forEach(key => {
      if (!metadata.placeholderNames.has(key)) {
        throw new Error(`Unknown substitution "${key}" given`);
      }
    });
  }
  metadata.placeholders.slice().reverse().forEach(placeholder => {
    try {
      var _ref;
      applyReplacement(placeholder, ast, (_ref = replacements && replacements[placeholder.name]) != null ? _ref : null);
    } catch (e) {
      e.message = `@babel/template placeholder "${placeholder.name}": ${e.message}`;
      throw e;
    }
  });
  return ast;
}
function applyReplacement(placeholder, ast, replacement) {
  if (placeholder.isDuplicate) {
    if (Array.isArray(replacement)) {
      replacement = replacement.map(node => cloneNode(node));
    } else if (typeof replacement === "object") {
      replacement = cloneNode(replacement);
    }
  }
  const {
    parent,
    key,
    index
  } = placeholder.resolve(ast);
  if (placeholder.type === "string") {
    if (typeof replacement === "string") {
      replacement = stringLiteral(replacement);
    }
    if (!replacement || !isStringLiteral(replacement)) {
      throw new Error("Expected string substitution");
    }
  } else if (placeholder.type === "statement") {
    if (index === undefined) {
      if (!replacement) {
        replacement = emptyStatement();
      } else if (Array.isArray(replacement)) {
        replacement = blockStatement(replacement);
      } else if (typeof replacement === "string") {
        replacement = expressionStatement(identifier(replacement));
      } else if (!isStatement(replacement)) {
        replacement = expressionStatement(replacement);
      }
    } else {
      if (replacement && !Array.isArray(replacement)) {
        if (typeof replacement === "string") {
          replacement = identifier(replacement);
        }
        if (!isStatement(replacement)) {
          replacement = expressionStatement(replacement);
        }
      }
    }
  } else if (placeholder.type === "param") {
    if (typeof replacement === "string") {
      replacement = identifier(replacement);
    }
    if (index === undefined) throw new Error("Assertion failure.");
  } else {
    if (typeof replacement === "string") {
      replacement = identifier(replacement);
    }
    if (Array.isArray(replacement)) {
      throw new Error("Cannot replace single expression with an array.");
    }
  }
  function set(parent, key, value) {
    const node = parent[key];
    parent[key] = value;
    if (node.type === "Identifier" || node.type === "Placeholder") {
      if (node.typeAnnotation) {
        value.typeAnnotation = node.typeAnnotation;
      }
      if (node.optional) {
        value.optional = node.optional;
      }
      if (node.decorators) {
        value.decorators = node.decorators;
      }
    }
  }
  if (index === undefined) {
    validate(parent, key, replacement);
    set(parent, key, replacement);
  } else {
    const items = parent[key].slice();
    if (placeholder.type === "statement" || placeholder.type === "param") {
      if (replacement == null) {
        items.splice(index, 1);
      } else if (Array.isArray(replacement)) {
        items.splice(index, 1, ...replacement);
      } else {
        set(items, index, replacement);
      }
    } else {
      set(items, index, replacement);
    }
    validate(parent, key, items);
    parent[key] = items;
  }
}

//# sourceMappingURL=populate.js.map
