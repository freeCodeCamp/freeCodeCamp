/**
 * @fileoverview Prevent using string literals in React component definition
 * @author Caleb Morris
 * @author David Buchan-Swanson
 */

'use strict';

const iterFrom = require('es-iterator-helpers/Iterator.from');
const map = require('es-iterator-helpers/Iterator.prototype.map');
const some = require('es-iterator-helpers/Iterator.prototype.some');
const flatMap = require('es-iterator-helpers/Iterator.prototype.flatMap');
const fromEntries = require('object.fromentries');
const entries = require('object.entries');

const docsUrl = require('../util/docsUrl');
const report = require('../util/report');
const getText = require('../util/eslint').getText;

/** @typedef {import('eslint').Rule.RuleModule} RuleModule */

/** @typedef {import('../../types/rules/jsx-no-literals').Config} Config */
/** @typedef {import('../../types/rules/jsx-no-literals').RawConfig} RawConfig */
/** @typedef {import('../../types/rules/jsx-no-literals').ResolvedConfig} ResolvedConfig */
/** @typedef {import('../../types/rules/jsx-no-literals').OverrideConfig} OverrideConfig */
/** @typedef {import('../../types/rules/jsx-no-literals').ElementConfig} ElementConfig */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

/**
 * @param {unknown} value
 * @returns {string | unknown}
 */
function trimIfString(value) {
  return typeof value === 'string' ? value.trim() : value;
}

const reOverridableElement = /^[A-Z][\w.]*$/;
const reIsWhiteSpace = /^[\s]+$/;
const jsxElementTypes = new Set(['JSXElement', 'JSXFragment']);
const standardJSXNodeParentTypes = new Set(['JSXAttribute', 'JSXElement', 'JSXExpressionContainer', 'JSXFragment']);

const messages = {
  invalidPropValue: 'Invalid prop value: "{{text}}"',
  invalidPropValueInElement: 'Invalid prop value: "{{text}}" in {{element}}',
  noStringsInAttributes: 'Strings not allowed in attributes: "{{text}}"',
  noStringsInAttributesInElement: 'Strings not allowed in attributes: "{{text}}" in {{element}}',
  noStringsInJSX: 'Strings not allowed in JSX files: "{{text}}"',
  noStringsInJSXInElement: 'Strings not allowed in JSX files: "{{text}}" in {{element}}',
  literalNotInJSXExpression: 'Missing JSX expression container around literal string: "{{text}}"',
  literalNotInJSXExpressionInElement: 'Missing JSX expression container around literal string: "{{text}}" in {{element}}',
};

/** @type {Exclude<RuleModule['meta']['schema'], unknown[] | false>['properties']} */
const commonPropertiesSchema = {
  noStrings: {
    type: 'boolean',
  },
  allowedStrings: {
    type: 'array',
    uniqueItems: true,
    items: {
      type: 'string',
    },
  },
  ignoreProps: {
    type: 'boolean',
  },
  noAttributeStrings: {
    type: 'boolean',
  },
};

// eslint-disable-next-line valid-jsdoc
/**
 * Normalizes the element portion of the config
 * @param {RawConfig} config
 * @returns {ElementConfig}
 */
function normalizeElementConfig(config) {
  return {
    type: 'element',
    noStrings: !!config.noStrings,
    allowedStrings: config.allowedStrings
      ? new Set(map(iterFrom(config.allowedStrings), trimIfString))
      : new Set(),
    ignoreProps: !!config.ignoreProps,
    noAttributeStrings: !!config.noAttributeStrings,
  };
}

// eslint-disable-next-line valid-jsdoc
/**
 * Normalizes the config and applies default values to all config options
 * @param {RawConfig} config
 * @returns {Config}
 */
function normalizeConfig(config) {
  /** @type {Config} */
  const normalizedConfig = Object.assign(normalizeElementConfig(config), {
    elementOverrides: {},
  });

  if (config.elementOverrides) {
    normalizedConfig.elementOverrides = fromEntries(
      flatMap(
        iterFrom(entries(config.elementOverrides)),
        (entry) => {
          const elementName = entry[0];
          const rawElementConfig = entry[1];

          if (!reOverridableElement.test(elementName)) {
            return [];
          }

          return [[
            elementName,
            Object.assign(normalizeElementConfig(rawElementConfig), {
              type: 'override',
              name: elementName,
              allowElement: !!rawElementConfig.allowElement,
              applyToNestedElements: typeof rawElementConfig.applyToNestedElements === 'undefined' || !!rawElementConfig.applyToNestedElements,
            }),
          ]];
        }
      )
    );
  }

  return normalizedConfig;
}

const elementOverrides = {
  type: 'object',
  patternProperties: {
    [reOverridableElement.source]: {
      type: 'object',
      properties: Object.assign(
        { applyToNestedElements: { type: 'boolean' } },
        commonPropertiesSchema
      ),

    },
  },
};

/** @type {RuleModule} */
module.exports = {
  meta: /** @type {RuleModule['meta']} */ ({
    docs: {
      description: 'Disallow usage of string literals in JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-no-literals'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: Object.assign(
        { elementOverrides },
        commonPropertiesSchema
      ),
      additionalProperties: false,
    }],
  }),

  create(context) {
    /** @type {RawConfig} */
    const rawConfig = (context.options.length && context.options[0]) || {};
    const config = normalizeConfig(rawConfig);

    const hasElementOverrides = Object.keys(config.elementOverrides).length > 0;

    /** @type {Map<string, string>} */
    const renamedImportMap = new Map();

    /**
     * Determines if the given expression is a require statement. Supports
     * nested MemberExpresions. ie `require('foo').nested.property`
     * @param {ASTNode} node
     * @returns {boolean}
     */
    function isRequireStatement(node) {
      if (node.type === 'CallExpression') {
        if (node.callee.type === 'Identifier') {
          return node.callee.name === 'require';
        }
      }
      if (node.type === 'MemberExpression') {
        return isRequireStatement(node.object);
      }

      return false;
    }

    /** @typedef {{ name: string, compoundName?: string }} ElementNameFragment */

    /**
     * Gets the name of the given JSX element. Supports nested
     * JSXMemeberExpressions. ie `<Namesapce.Component.SubComponent />`
     * @param {ASTNode} node
     * @returns {ElementNameFragment | undefined}
     */
    function getJSXElementName(node) {
      if (node.openingElement.name.type === 'JSXIdentifier') {
        const name = node.openingElement.name.name;
        return {
          name: renamedImportMap.get(name) || name,
          compoundName: undefined,
        };
      }

      /** @type {string[]} */
      const nameFragments = [];

      if (node.openingElement.name.type === 'JSXMemberExpression') {
        /** @type {ASTNode} */
        let current = node.openingElement.name;
        while (current.type === 'JSXMemberExpression') {
          if (current.property.type === 'JSXIdentifier') {
            nameFragments.unshift(current.property.name);
          }

          current = current.object;
        }

        if (current.type === 'JSXIdentifier') {
          nameFragments.unshift(current.name);

          const rootFragment = nameFragments[0];
          if (rootFragment) {
            const rootFragmentRenamed = renamedImportMap.get(rootFragment);
            if (rootFragmentRenamed) {
              nameFragments[0] = rootFragmentRenamed;
            }
          }

          const nameFragment = nameFragments[nameFragments.length - 1];
          if (nameFragment) {
            return {
              name: nameFragment,
              compoundName: nameFragments.join('.'),
            };
          }
        }
      }
    }

    /**
     * Gets all JSXElement ancestor nodes for the given node
     * @param {ASTNode} node
     * @returns {ASTNode[]}
     */
    function getJSXElementAncestors(node) {
      /** @type {ASTNode[]} */
      const ancestors = [];

      let current = node;
      while (current) {
        if (current.type === 'JSXElement') {
          ancestors.push(current);
        }

        current = current.parent;
      }

      return ancestors;
    }

    /**
     * @param {ASTNode} node
     * @returns {ASTNode}
     */
    function getParentIgnoringBinaryExpressions(node) {
      let current = node;
      while (current.parent.type === 'BinaryExpression') {
        current = current.parent;
      }
      return current.parent;
    }

    /**
     * @param {ASTNode} node
     * @returns {{ parent: ASTNode, grandParent: ASTNode }}
     */
    function getParentAndGrandParent(node) {
      const parent = getParentIgnoringBinaryExpressions(node);
      return {
        parent,
        grandParent: parent.parent,
      };
    }

    /**
     * @param {ASTNode} node
     * @returns {boolean}
     */
    function hasJSXElementParentOrGrandParent(node) {
      const ancestors = getParentAndGrandParent(node);
      return some(iterFrom([ancestors.parent, ancestors.grandParent]), (parent) => jsxElementTypes.has(parent.type));
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * Determines whether a given node's value and its immediate parent are
     * viable text nodes that can/should be reported on
     * @param {ASTNode} node
     * @param {ResolvedConfig} resolvedConfig
     * @returns {boolean}
     */
    function isViableTextNode(node, resolvedConfig) {
      const textValues = iterFrom([trimIfString(node.raw), trimIfString(node.value)]);
      if (some(textValues, (value) => resolvedConfig.allowedStrings.has(value))) {
        return false;
      }

      const parent = getParentIgnoringBinaryExpressions(node);

      let isStandardJSXNode = false;
      if (typeof node.value === 'string' && !reIsWhiteSpace.test(node.value) && standardJSXNodeParentTypes.has(parent.type)) {
        if (resolvedConfig.noAttributeStrings) {
          isStandardJSXNode = parent.type === 'JSXAttribute' || parent.type === 'JSXElement';
        } else {
          isStandardJSXNode = parent.type !== 'JSXAttribute';
        }
      }

      if (resolvedConfig.noStrings) {
        return isStandardJSXNode;
      }

      return isStandardJSXNode && parent.type !== 'JSXExpressionContainer';
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * Gets an override config for a given node. For any given node, we also
     * need to traverse the ancestor tree to determine if an ancestor's config
     * will also apply to the current node.
     * @param {ASTNode} node
     * @returns {OverrideConfig | undefined}
     */
    function getOverrideConfig(node) {
      if (!hasElementOverrides) {
        return;
      }

      const allAncestorElements = getJSXElementAncestors(node);
      if (!allAncestorElements.length) {
        return;
      }

      for (const ancestorElement of allAncestorElements) {
        const isClosestJSXAncestor = ancestorElement === allAncestorElements[0];

        const ancestor = getJSXElementName(ancestorElement);
        if (ancestor) {
          if (ancestor.name) {
            const ancestorElements = config.elementOverrides[ancestor.name];
            const ancestorConfig = ancestor.compoundName
              ? config.elementOverrides[ancestor.compoundName] || ancestorElements
              : ancestorElements;

            if (ancestorConfig) {
              if (isClosestJSXAncestor || ancestorConfig.applyToNestedElements) {
                return ancestorConfig;
              }
            }
          }
        }
      }
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {ResolvedConfig} resolvedConfig
     * @returns {boolean}
     */
    function shouldAllowElement(resolvedConfig) {
      return resolvedConfig.type === 'override' && 'allowElement' in resolvedConfig && !!resolvedConfig.allowElement;
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {boolean} ancestorIsJSXElement
     * @param {ResolvedConfig} resolvedConfig
     * @returns {string}
     */
    function defaultMessageId(ancestorIsJSXElement, resolvedConfig) {
      if (resolvedConfig.noAttributeStrings && !ancestorIsJSXElement) {
        return resolvedConfig.type === 'override' ? 'noStringsInAttributesInElement' : 'noStringsInAttributes';
      }

      if (resolvedConfig.noStrings) {
        return resolvedConfig.type === 'override' ? 'noStringsInJSXInElement' : 'noStringsInJSX';
      }

      return resolvedConfig.type === 'override' ? 'literalNotInJSXExpressionInElement' : 'literalNotInJSXExpression';
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {ASTNode} node
     * @param {string} messageId
     * @param {ResolvedConfig} resolvedConfig
     */
    function reportLiteralNode(node, messageId, resolvedConfig) {
      report(context, messages[messageId], messageId, {
        node,
        data: {
          text: getText(context, node).trim(),
          element: resolvedConfig.type === 'override' && 'name' in resolvedConfig ? resolvedConfig.name : undefined,
        },
      });
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return Object.assign(hasElementOverrides ? {
      // Get renamed import local names mapped to their imported name
      ImportDeclaration(node) {
        node.specifiers
          .filter((s) => s.type === 'ImportSpecifier')
          .forEach((specifier) => {
            renamedImportMap.set(
              (specifier.local || specifier.imported).name,
              specifier.imported.name
            );
          });
      },

      // Get renamed destructured local names mapped to their imported name
      VariableDeclaration(node) {
        node.declarations
          .filter((d) => (
            d.type === 'VariableDeclarator'
            && isRequireStatement(d.init)
            && d.id.type === 'ObjectPattern'
          ))
          .forEach((declaration) => {
            declaration.id.properties
              .filter((property) => (
                property.type === 'Property'
                && property.key.type === 'Identifier'
                && property.value.type === 'Identifier'
              ))
              .forEach((property) => {
                renamedImportMap.set(property.value.name, property.key.name);
              });
          });
      },
    } : false, {
      Literal(node) {
        const resolvedConfig = getOverrideConfig(node) || config;

        const hasJSXParentOrGrandParent = hasJSXElementParentOrGrandParent(node);
        if (hasJSXParentOrGrandParent && shouldAllowElement(resolvedConfig)) {
          return;
        }

        if (isViableTextNode(node, resolvedConfig)) {
          if (hasJSXParentOrGrandParent || !config.ignoreProps) {
            reportLiteralNode(node, defaultMessageId(hasJSXParentOrGrandParent, resolvedConfig), resolvedConfig);
          }
        }
      },

      JSXAttribute(node) {
        const isLiteralString = node.value && node.value.type === 'Literal'
          && typeof node.value.value === 'string';
        const isStringLiteral = node.value && node.value.type === 'StringLiteral';

        if (isLiteralString || isStringLiteral) {
          const resolvedConfig = getOverrideConfig(node) || config;

          if (
            resolvedConfig.noStrings
            && !resolvedConfig.ignoreProps
            && !resolvedConfig.allowedStrings.has(node.value.value)
          ) {
            const messageId = resolvedConfig.type === 'override' ? 'invalidPropValueInElement' : 'invalidPropValue';
            reportLiteralNode(node, messageId, resolvedConfig);
          }
        }
      },

      JSXText(node) {
        const resolvedConfig = getOverrideConfig(node) || config;

        if (shouldAllowElement(resolvedConfig)) {
          return;
        }

        if (isViableTextNode(node, resolvedConfig)) {
          const hasJSXParendOrGrantParent = hasJSXElementParentOrGrandParent(node);
          reportLiteralNode(node, defaultMessageId(hasJSXParendOrGrantParent, resolvedConfig), resolvedConfig);
        }
      },

      TemplateLiteral(node) {
        const ancestors = getParentAndGrandParent(node);
        const isParentJSXExpressionCont = ancestors.parent.type === 'JSXExpressionContainer';
        const isParentJSXElement = ancestors.grandParent.type === 'JSXElement';

        if (isParentJSXExpressionCont) {
          const resolvedConfig = getOverrideConfig(node) || config;

          if (
            resolvedConfig.noStrings
            && (isParentJSXElement || !resolvedConfig.ignoreProps)
          ) {
            reportLiteralNode(node, defaultMessageId(isParentJSXElement, resolvedConfig), resolvedConfig);
          }
        }
      },
    });
  },
};
