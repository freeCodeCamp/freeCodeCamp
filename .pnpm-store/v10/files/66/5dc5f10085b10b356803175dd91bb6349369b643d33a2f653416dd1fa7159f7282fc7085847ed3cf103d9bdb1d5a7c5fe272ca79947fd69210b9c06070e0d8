"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var t = _interopRequireWildcard(require("@babel/types"));
var _generator = _interopRequireDefault(require("@babel/generator"));
var _template = _interopRequireDefault(require("@babel/template"));
var _helperPluginUtils = require("@babel/helper-plugin-utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const getKeyNameFromAttribute = node => node.key.name || node.key.value;
const unwrapTemplateLiteral = str => str.trim().replace(/^`/, ``).replace(/`$/, ``);
const isLiteral = node => t.isLiteral(node) || t.isStringLiteral(node) || t.isNumericLiteral(node);
const getObjectFromNode = nodeValue => {
  if (!nodeValue || !nodeValue.properties) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return getValueFromNode(nodeValue);
  }
  const props = nodeValue.properties.reduce((acc, curr) => {
    let value = null;
    if (curr.value) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      value = getValueFromNode(curr.value);
    } else if (t.isObjectExpression(curr.value)) {
      value = curr.value.expression.properties.reduce((acc, curr) => {
        acc[getKeyNameFromAttribute(curr)] = getObjectFromNode(curr);
        return acc;
      }, {});
    } else {
      throw new Error(`Did not recognize ${curr}`);
    }
    acc[getKeyNameFromAttribute(curr)] = value;
    return acc;
  }, {});
  return props;
};
const getValueFromNode = node => {
  if (t.isTemplateLiteral(node)) {
    // @ts-ignore - fix me
    delete node.leadingComments;
    // @ts-ignore - fix me
    delete node.trailingComments;
    // @ts-ignore - fix me
    const literalContents = (0, _generator.default)(node).code;
    return unwrapTemplateLiteral(literalContents);
  }
  if (isLiteral(node)) {
    return node.value;
  }
  if (node.type === `ArrayExpression`) {
    return node.elements.map(getObjectFromNode);
  }
  if (node.type === `ObjectExpression`) {
    return getObjectFromNode(node);
  }
  return null;
};
function isDefaultExport(node) {
  if (!node || !t.isMemberExpression(node)) {
    return false;
  }
  const {
    object,
    property
  } = node;
  if (!t.isIdentifier(object) || object.name !== `module`) return false;
  if (!t.isIdentifier(property) || property.name !== `exports`) return false;
  return true;
}
const getOptionsForPlugin = node => {
  if (!t.isObjectExpression(node) && !t.isLogicalExpression(node)) {
    return undefined;
  }
  let options;

  // When a plugin is added conditionally with && {}
  if (t.isLogicalExpression(node)) {
    // @ts-ignore - fix me
    options = node.right.properties.find(property => property.key.name === `options`);
  } else {
    // @ts-ignore - fix me
    options = node.properties.find(property => property.key.name === `options`);
  }
  if (options) {
    return getObjectFromNode(options.value);
  }
  return undefined;
};
const getKeyForPlugin = node => {
  if (t.isObjectExpression(node)) {
    // @ts-ignore - fix me
    const key = node.properties.find(p => p.key.name === `__key`);

    // @ts-ignore - fix me
    return key ? getValueFromNode(key.value) : null;
  }

  // When a plugin is added conditionally with && {}
  if (t.isLogicalExpression(node)) {
    // @ts-ignore - fix me
    const key = node.right.properties.find(p => p.key.name === `__key`);
    return key ? getValueFromNode(key.value) : null;
  }
  return null;
};
const getNameForPlugin = node => {
  if (t.isStringLiteral(node) || t.isTemplateLiteral(node)) {
    return getValueFromNode(node);
  }
  if (t.isObjectExpression(node)) {
    // @ts-ignore - fix me
    const resolve = node.properties.find(p => p.key.name === `resolve`);

    // @ts-ignore - fix me
    return resolve ? getValueFromNode(resolve.value) : null;
  }

  // When a plugin is added conditionally with && {}
  if (t.isLogicalExpression(node)) {
    // @ts-ignore - fix me
    const resolve = node.right.properties.find(p => p.key.name === `resolve`);
    return resolve ? getValueFromNode(resolve.value) : null;
  }
  return null;
};
const getPlugin = node => {
  const plugin = {
    name: getNameForPlugin(node),
    options: getOptionsForPlugin(node)
  };
  const key = getKeyForPlugin(node);
  if (key) {
    return {
      ...plugin,
      key
    };
  }
  return plugin;
};
function buildPluginNode({
  name,
  options,
  key
}) {
  if (!options && !key) {
    return t.stringLiteral(name);
  }
  const pluginWithOptions = (0, _template.default)(`
    const foo = {
      resolve: '${name}',
      options: ${JSON.stringify(options, null, 2)},
      ${key ? `__key: "` + key + `"` : ``}
    }
  `, {
    placeholderPattern: false
  })();

  // @ts-ignore - fix me
  return pluginWithOptions.declarations[0].init;
}
function addPluginsToConfig({
  pluginNodes,
  pluginOrThemeName,
  options,
  key
}) {
  if (t.isCallExpression(pluginNodes.value)) {
    const plugins = pluginNodes.value.callee.object.elements.map(getPlugin);
    const matches = plugins.filter(plugin => {
      if (!key) {
        return plugin.name === pluginOrThemeName;
      }
      return plugin.key === key;
    });
    if (!matches.length) {
      const pluginNode = buildPluginNode({
        name: pluginOrThemeName,
        options,
        key
      });
      pluginNodes.value.callee.object.elements.push(pluginNode);
    } else {
      pluginNodes.value.callee.object.elements = pluginNodes.value.callee.object.elements.map(node => {
        const plugin = getPlugin(node);
        if (plugin.key !== key) {
          return node;
        }
        if (!plugin.key && plugin.name !== pluginOrThemeName) {
          return node;
        }
        return buildPluginNode({
          name: pluginOrThemeName,
          options,
          key
        });
      });
    }
  } else {
    const plugins = pluginNodes.value.elements.map(getPlugin);
    const matches = plugins.filter(plugin => {
      if (!key) {
        return plugin.name === pluginOrThemeName;
      }
      return plugin.key === key;
    });
    if (!matches.length) {
      const pluginNode = buildPluginNode({
        name: pluginOrThemeName,
        options,
        key
      });
      pluginNodes.value.elements.push(pluginNode);
    } else {
      pluginNodes.value.elements = pluginNodes.value.elements.map(node => {
        const plugin = getPlugin(node);
        if (plugin.key !== key) {
          return node;
        }
        if (!plugin.key && plugin.name !== pluginOrThemeName) {
          return node;
        }
        return buildPluginNode({
          name: pluginOrThemeName,
          options,
          key
        });
      });
    }
  }
}
function getPluginNodes(properties) {
  return properties.find(prop => t.isObjectProperty(prop) && t.isIdentifier(prop.key) && prop.key.name === `plugins`);
}

/**
 * Insert plugins selected in create-gatsby questionnaire into `gatsby-config` files.
 *
 * Scope is limited to the `gatsby-config` files in `gatsby-starter-minimal` and
 * `gatsby-starter-minimal-ts`. Does not support general usage with other `gatsby-config` files.
 * Changes to the config object in those files may require a change to this transformer.
 *
 * @see {@link https://github.com/gatsbyjs/gatsby/blob/master/starters/gatsby-starter-minimal/gatsby-config.js}
 * @see {@link https://github.com/gatsbyjs/gatsby/blob/master/starters/gatsby-starter-minimal-ts/gatsby-config.ts}
 */
var _default = (0, _helperPluginUtils.declare)((api, args) => {
  api.assertVersion(7);
  return {
    visitor: {
      /**
       * Handle `module.exports = { ..., plugins: [] }` from `gatsby-config.js` in `gatsby-starter-minimal`.
       * @see {@link https://github.com/gatsbyjs/gatsby/blob/master/starters/gatsby-starter-minimal/gatsby-config.js}
       */
      ExpressionStatement(path) {
        const {
          node
        } = path;
        if (!t.isAssignmentExpression(node.expression)) {
          return;
        }
        const {
          left,
          right
        } = node.expression;
        if (!isDefaultExport(left) || !t.isObjectExpression(right)) {
          return;
        }
        const pluginNodes = getPluginNodes(right.properties);
        if (!t.isObjectProperty(pluginNodes) || !t.isArrayExpression(pluginNodes.value)) {
          return;
        }
        addPluginsToConfig({
          pluginNodes,
          ...args
        });
        path.stop();
      },
      /**
       * Handle `const config = { ..., plugins: [] }; export default config` in `gatsby-config.ts` in `gatsby-starter-minimal-ts`.
       * @see {@link https://github.com/gatsbyjs/gatsby/blob/master/starters/gatsby-starter-minimal-ts/gatsby-config.ts}
       */
      VariableDeclaration(path) {
        const {
          node
        } = path;
        const configDeclaration = node.declarations.find(dec => t.isIdentifier(dec.id) && dec.id.name === `config` && dec.init);
        const config = configDeclaration === null || configDeclaration === void 0 ? void 0 : configDeclaration.init;
        if (!t.isObjectExpression(config)) {
          return;
        }
        const pluginNodes = getPluginNodes(config.properties);
        if (!t.isObjectProperty(pluginNodes) || !t.isArrayExpression(pluginNodes.value)) {
          return;
        }
        addPluginsToConfig({
          pluginNodes,
          ...args
        });
        path.stop();
      }
    }
  };
});
exports.default = _default;