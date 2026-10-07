/**
 * @fileoverview Check if tag attributes to have non-valid value
 * @author Sebastian Malton
 */

'use strict';

const matchAll = require('string.prototype.matchall');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const rel = new Map([
  ['alternate', new Set(['link', 'area', 'a'])],
  ['apple-touch-icon', new Set(['link'])],
  ['apple-touch-startup-image', new Set(['link'])],
  ['author', new Set(['link', 'area', 'a'])],
  ['bookmark', new Set(['area', 'a'])],
  ['canonical', new Set(['link'])],
  ['dns-prefetch', new Set(['link'])],
  ['external', new Set(['area', 'a', 'form'])],
  ['help', new Set(['link', 'area', 'a', 'form'])],
  ['icon', new Set(['link'])],
  ['license', new Set(['link', 'area', 'a', 'form'])],
  ['manifest', new Set(['link'])],
  ['mask-icon', new Set(['link'])],
  ['modulepreload', new Set(['link'])],
  ['next', new Set(['link', 'area', 'a', 'form'])],
  ['nofollow', new Set(['area', 'a', 'form'])],
  ['noopener', new Set(['area', 'a', 'form'])],
  ['noreferrer', new Set(['area', 'a', 'form'])],
  ['opener', new Set(['area', 'a', 'form'])],
  ['pingback', new Set(['link'])],
  ['preconnect', new Set(['link'])],
  ['prefetch', new Set(['link'])],
  ['preload', new Set(['link'])],
  ['prerender', new Set(['link'])],
  ['prev', new Set(['link', 'area', 'a', 'form'])],
  ['search', new Set(['link', 'area', 'a', 'form'])],
  ['shortcut', new Set(['link'])], // generally allowed but needs pair with "icon"
  ['shortcut\u0020icon', new Set(['link'])],
  ['stylesheet', new Set(['link'])],
  ['tag', new Set(['area', 'a'])],
]);

const pairs = new Map([
  ['shortcut', new Set(['icon'])],
]);

/**
 * Map between attributes and a mapping between valid values and a set of tags they are valid on
 * @type {Map<string, Map<string, Set<string>>>}
 */
const VALID_VALUES = new Map([
  ['rel', rel],
]);

/**
 * Map between attributes and a mapping between pair-values and a set of values they are valid with
 * @type {Map<string, Map<string, Set<string>>>}
 */
const VALID_PAIR_VALUES = new Map([
  ['rel', pairs],
]);

/**
 * The set of all possible HTML elements. Used for skipping custom types
 * @type {Set<string>}
 */
const HTML_ELEMENTS = new Set([
  'a',
  'abbr',
  'acronym',
  'address',
  'applet',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'basefont',
  'bdi',
  'bdo',
  'bgsound',
  'big',
  'blink',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'content',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'font',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'image',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'math',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'nobr',
  'noembed',
  'noframes',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'plaintext',
  'portal',
  'pre',
  'progress',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'shadow',
  'slot',
  'small',
  'source',
  'spacer',
  'span',
  'strike',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'tt',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'xmp',
]);

/**
* Map between attributes and set of tags that the attribute is valid on
* @type {Map<string, Set<string>>}
*/
const COMPONENT_ATTRIBUTE_MAP = new Map([
  ['rel', new Set(['link', 'a', 'area', 'form'])],
]);

/* eslint-disable eslint-plugin/no-unused-message-ids -- false positives, these messageIds are used */
const messages = {
  emptyIsMeaningless: 'An empty “{{attributeName}}” attribute is meaningless.',
  neverValid: '“{{reportingValue}}” is never a valid “{{attributeName}}” attribute value.',
  noEmpty: 'An empty “{{attributeName}}” attribute is meaningless.',
  noMethod: 'The ”{{attributeName}}“ attribute cannot be a method.',
  notAlone: '“{{reportingValue}}” must be directly followed by “{{missingValue}}”.',
  notPaired: '“{{reportingValue}}” can not be directly followed by “{{secondValue}}” without “{{missingValue}}”.',
  notValidFor: '“{{reportingValue}}” is not a valid “{{attributeName}}” attribute value for <{{elementName}}>.',
  onlyMeaningfulFor: 'The ”{{attributeName}}“ attribute only has meaning on the tags: {{tagNames}}',
  onlyStrings: '“{{attributeName}}” attribute only supports strings.',
  spaceDelimited: '”{{attributeName}}“ attribute values should be space delimited.',
  suggestRemoveDefault: '"remove {{attributeName}}"',
  suggestRemoveEmpty: '"remove empty attribute {{attributeName}}"',
  suggestRemoveInvalid: '“remove invalid attribute {{reportingValue}}”',
  suggestRemoveWhitespaces: 'remove whitespaces in “{{attributeName}}”',
  suggestRemoveNonString: 'remove non-string value in “{{attributeName}}”',
};

function splitIntoRangedParts(node, regex) {
  const valueRangeStart = node.range[0] + 1; // the plus one is for the initial quote

  return Array.from(matchAll(node.value, regex), (match) => {
    const start = match.index + valueRangeStart;
    const end = start + match[0].length;

    return {
      reportingValue: `${match[1]}`,
      value: match[1],
      range: [start, end],
    };
  });
}

function checkLiteralValueNode(context, attributeName, node, parentNode, parentNodeName) {
  if (typeof node.value !== 'string') {
    const data = { attributeName, reportingValue: node.value };

    report(context, messages.onlyStrings, 'onlyStrings', {
      node,
      data,
      suggest: [{
        messageId: 'suggestRemoveNonString',
        data,
        fix(fixer) { return fixer.remove(parentNode); },
      }],
    });
    return;
  }

  if (!node.value.trim()) {
    const data = { attributeName, reportingValue: node.value };

    report(context, messages.noEmpty, 'noEmpty', {
      node,
      data,
      suggest: [{
        messageId: 'suggestRemoveEmpty',
        data,
        fix(fixer) { return fixer.remove(node.parent); },
      }],
    });
    return;
  }

  const singleAttributeParts = splitIntoRangedParts(node, /(\S+)/g);
  singleAttributeParts.forEach((singlePart) => {
    const allowedTags = VALID_VALUES.get(attributeName).get(singlePart.value);
    const reportingValue = singlePart.reportingValue;

    if (!allowedTags) {
      const data = {
        attributeName,
        reportingValue,
      };

      const suggest = [{
        messageId: 'suggestRemoveInvalid',
        data,
        fix(fixer) { return fixer.removeRange(singlePart.range); },
      }];

      report(context, messages.neverValid, 'neverValid', {
        node,
        data,
        suggest,
      });
    } else if (!allowedTags.has(parentNodeName)) {
      const data = {
        attributeName,
        reportingValue,
        elementName: parentNodeName,
      };

      const suggest = [{
        messageId: 'suggestRemoveInvalid',
        data,
        fix(fixer) { return fixer.removeRange(singlePart.range); },
      }];

      report(context, messages.notValidFor, 'notValidFor', {
        node,
        data,
        suggest,
      });
    }
  });

  const allowedPairsForAttribute = VALID_PAIR_VALUES.get(attributeName);
  if (allowedPairsForAttribute) {
    const pairAttributeParts = splitIntoRangedParts(node, /(?=(\b\S+\s*\S+))/g);
    pairAttributeParts.forEach((pairPart) => {
      allowedPairsForAttribute.forEach((siblings, pairing) => {
        const attributes = pairPart.reportingValue.split('\u0020');
        const firstValue = attributes[0];
        const secondValue = attributes[1];
        if (firstValue === pairing) {
          const lastValue = attributes[attributes.length - 1]; // in case of multiple white spaces
          if (!siblings.has(lastValue)) {
            const message = secondValue ? messages.notPaired : messages.notAlone;
            const messageId = secondValue ? 'notPaired' : 'notAlone';
            report(context, message, messageId, {
              node,
              data: {
                reportingValue: firstValue,
                secondValue,
                missingValue: Array.from(siblings).join(', '),
              },
              suggest: false,
            });
          }
        }
      });
    });
  }

  const whitespaceParts = splitIntoRangedParts(node, /(\s+)/g);
  whitespaceParts.forEach((whitespacePart) => {
    const data = { attributeName };

    if (whitespacePart.range[0] === (node.range[0] + 1) || whitespacePart.range[1] === (node.range[1] - 1)) {
      report(context, messages.spaceDelimited, 'spaceDelimited', {
        node,
        data,
        suggest: [{
          messageId: 'suggestRemoveWhitespaces',
          data,
          fix(fixer) { return fixer.removeRange(whitespacePart.range); },
        }],
      });
    } else if (whitespacePart.value !== '\u0020') {
      report(context, messages.spaceDelimited, 'spaceDelimited', {
        node,
        data,
        suggest: [{
          messageId: 'suggestRemoveWhitespaces',
          data,
          fix(fixer) { return fixer.replaceTextRange(whitespacePart.range, '\u0020'); },
        }],
      });
    }
  });
}

const DEFAULT_ATTRIBUTES = ['rel'];

function checkAttribute(context, node) {
  const attribute = node.name.name;

  const parentNodeName = node.parent.name.name;
  if (!COMPONENT_ATTRIBUTE_MAP.has(attribute) || !COMPONENT_ATTRIBUTE_MAP.get(attribute).has(parentNodeName)) {
    const tagNames = Array.from(
      COMPONENT_ATTRIBUTE_MAP.get(attribute).values(),
      (tagName) => `"<${tagName}>"`
    ).join(', ');
    const data = {
      attributeName: attribute,
      tagNames,
    };

    report(context, messages.onlyMeaningfulFor, 'onlyMeaningfulFor', {
      node: node.name,
      data,
      suggest: [{
        messageId: 'suggestRemoveDefault',
        data,
        fix(fixer) { return fixer.remove(node); },
      }],
    });
    return;
  }

  function fix(fixer) { return fixer.remove(node); }

  if (!node.value) {
    const data = { attributeName: attribute };

    report(context, messages.emptyIsMeaningless, 'emptyIsMeaningless', {
      node: node.name,
      data,
      suggest: [{
        messageId: 'suggestRemoveEmpty',
        data,
        fix,
      }],
    });
    return;
  }

  if (node.value.type === 'Literal') {
    return checkLiteralValueNode(context, attribute, node.value, node, parentNodeName);
  }

  if (node.value.expression.type === 'Literal') {
    return checkLiteralValueNode(context, attribute, node.value.expression, node, parentNodeName);
  }

  if (node.value.type !== 'JSXExpressionContainer') {
    return;
  }

  if (node.value.expression.type === 'ObjectExpression') {
    const data = { attributeName: attribute };

    report(context, messages.onlyStrings, 'onlyStrings', {
      node: node.value,
      data,
      suggest: [{
        messageId: 'suggestRemoveDefault',
        data,
        fix,
      }],
    });
  } else if (node.value.expression.type === 'Identifier' && node.value.expression.name === 'undefined') {
    const data = { attributeName: attribute };

    report(context, messages.onlyStrings, 'onlyStrings', {
      node: node.value,
      data,
      suggest: [{
        messageId: 'suggestRemoveDefault',
        data,
        fix,
      }],
    });
  }
}

function isValidCreateElement(node) {
  return node.callee
    && node.callee.type === 'MemberExpression'
    && node.callee.object.name === 'React'
    && node.callee.property.name === 'createElement'
    && node.arguments.length > 0;
}

function checkPropValidValue(context, node, value, attribute) {
  const validTags = VALID_VALUES.get(attribute);

  if (value.type !== 'Literal') {
    return; // cannot check non-literals
  }

  const validTagSet = validTags.get(value.value);
  if (!validTagSet) {
    const data = {
      attributeName: attribute,
      reportingValue: value.value,
    };

    report(context, messages.neverValid, 'neverValid', {
      node: value,
      data,
      suggest: [{
        messageId: 'suggestRemoveInvalid',
        data,
        fix(fixer) { return fixer.replaceText(value, value.raw.replace(value.value, '')); },
      }],
    });
  } else if (!validTagSet.has(node.arguments[0].value)) {
    report(context, messages.notValidFor, 'notValidFor', {
      node: value,
      data: {
        attributeName: attribute,
        reportingValue: value.raw,
        elementName: node.arguments[0].value,
      },
      suggest: false,
    });
  }
}

/**
 *
 * @param {*} context
 * @param {*} node
 * @param {string} attribute
 */
function checkCreateProps(context, node, attribute) {
  const propsArg = node.arguments[1];

  if (!propsArg || propsArg.type !== 'ObjectExpression') {
    return; // can't check variables, computed, or shorthands
  }

  for (const prop of propsArg.properties) {
    if (!prop.key || prop.key.type !== 'Identifier') {
      // eslint-disable-next-line no-continue
      continue; // cannot check computed keys
    }

    if (prop.key.name !== attribute) {
      // eslint-disable-next-line no-continue
      continue; // ignore not this attribute
    }

    if (!COMPONENT_ATTRIBUTE_MAP.get(attribute).has(node.arguments[0].value)) {
      const tagNames = Array.from(
        COMPONENT_ATTRIBUTE_MAP.get(attribute).values(),
        (tagName) => `"<${tagName}>"`
      ).join(', ');

      report(context, messages.onlyMeaningfulFor, 'onlyMeaningfulFor', {
        node: prop.key,
        data: {
          attributeName: attribute,
          tagNames,
        },
        suggest: false,
      });

      // eslint-disable-next-line no-continue
      continue;
    }

    if (prop.method) {
      report(context, messages.noMethod, 'noMethod', {
        node: prop,
        data: {
          attributeName: attribute,
        },
        suggest: false,
      });

      // eslint-disable-next-line no-continue
      continue;
    }

    if (prop.shorthand || prop.computed) {
      // eslint-disable-next-line no-continue
      continue; // cannot check these
    }

    if (prop.value.type === 'ArrayExpression') {
      prop.value.elements.forEach((value) => {
        checkPropValidValue(context, node, value, attribute);
      });

      // eslint-disable-next-line no-continue
      continue;
    }

    checkPropValidValue(context, node, prop.value, attribute);
  }
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of invalid attributes',
      category: 'Possible Errors',
      url: docsUrl('no-invalid-html-attribute'),
    },
    messages,
    schema: [{
      type: 'array',
      uniqueItems: true,
      items: {
        enum: ['rel'],
      },
    }],
    type: 'suggestion',
    hasSuggestions: true, // eslint-disable-line eslint-plugin/require-meta-has-suggestions
  },

  create(context) {
    return {
      JSXAttribute(node) {
        const attributes = new Set(context.options[0] || DEFAULT_ATTRIBUTES);

        // ignore attributes that aren't configured to be checked
        if (!attributes.has(node.name.name)) {
          return;
        }

        // ignore non-HTML elements
        if (!HTML_ELEMENTS.has(node.parent.name.name)) {
          return;
        }

        checkAttribute(context, node);
      },

      CallExpression(node) {
        if (!isValidCreateElement(node)) {
          return;
        }

        const elemNameArg = node.arguments[0];

        if (!elemNameArg || elemNameArg.type !== 'Literal') {
          return; // can only check literals
        }

        // ignore non-HTML elements
        if (typeof elemNameArg.value === 'string' && !HTML_ELEMENTS.has(elemNameArg.value)) {
          return;
        }

        const attributes = new Set(context.options[0] || DEFAULT_ATTRIBUTES);

        attributes.forEach((attribute) => {
          checkCreateProps(context, node, attribute);
        });
      },
    };
  },
};
