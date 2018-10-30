/**
 * @fileoverview Enforce component methods order
 * @author Yannick Croissant
 */
'use strict';

var has = require('has');
var util = require('util');

var Components = require('../util/Components');

/**
 * Get the methods order from the default config and the user config
 * @param {Object} defaultConfig The default configuration.
 * @param {Object} userConfig The user configuration.
 * @returns {Array} Methods order
 */
function getMethodsOrder(defaultConfig, userConfig) {
  userConfig = userConfig || {};

  var groups = util._extend(defaultConfig.groups, userConfig.groups);
  var order = userConfig.order || defaultConfig.order;

  var config = [];
  var entry;
  for (var i = 0, j = order.length; i < j; i++) {
    entry = order[i];
    if (has(groups, entry)) {
      config = config.concat(groups[entry]);
    } else {
      config.push(entry);
    }
  }

  return config;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce component methods order',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        order: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        groups: {
          type: 'object',
          patternProperties: {
            '^.*$': {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components) {

    var errors = {};

    var MISPOSITION_MESSAGE = '{{propA}} should be placed {{position}} {{propB}}';

    var methodsOrder = getMethodsOrder({
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }, context.options[0]);

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    var regExpRegExp = /\/(.*)\/([g|y|i|m]*)/;

    /**
     * Get indexes of the matching patterns in methods order configuration
     * @param {Object} method - Method metadata.
     * @returns {Array} The matching patterns indexes. Return [Infinity] if there is no match.
     */
    function getRefPropIndexes(method) {
      var isRegExp;
      var matching;
      var i;
      var j;
      var indexes = [];

      if (method.static) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          if (methodsOrder[i] === 'static-methods') {
            indexes.push(i);
            break;
          }
        }
      }

      if (method.typeAnnotation) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          if (methodsOrder[i] === 'type-annotations') {
            indexes.push(i);
            break;
          }
        }
      }

      // Either this is not a static method or static methods are not specified
      // in the methodsOrder.
      if (indexes.length === 0) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          isRegExp = methodsOrder[i].match(regExpRegExp);
          if (isRegExp) {
            matching = new RegExp(isRegExp[1], isRegExp[2]).test(method.name);
          } else {
            matching = methodsOrder[i] === method.name;
          }
          if (matching) {
            indexes.push(i);
          }
        }
      }

      // No matching pattern, return 'everything-else' index
      if (indexes.length === 0) {
        for (i = 0, j = methodsOrder.length; i < j; i++) {
          if (methodsOrder[i] === 'everything-else') {
            indexes.push(i);
            break;
          }
        }
      }

      // No matching pattern and no 'everything-else' group
      if (indexes.length === 0) {
        indexes.push(Infinity);
      }

      return indexes;
    }

    /**
     * Get properties name
     * @param {Object} node - Property.
     * @returns {String} Property name.
     */
    function getPropertyName(node) {
      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return tokens[1] && tokens[1].type === 'Identifier' ? tokens[1].value : tokens[0].value;
      }

      return node.key.name;
    }

    /**
     * Store a new error in the error list
     * @param {Object} propA - Mispositioned property.
     * @param {Object} propB - Reference property.
     */
    function storeError(propA, propB) {
      // Initialize the error object if needed
      if (!errors[propA.index]) {
        errors[propA.index] = {
          node: propA.node,
          score: 0,
          closest: {
            distance: Infinity,
            ref: {
              node: null,
              index: 0
            }
          }
        };
      }
      // Increment the prop score
      errors[propA.index].score++;
      // Stop here if we already have pushed another node at this position
      if (getPropertyName(errors[propA.index].node) !== getPropertyName(propA.node)) {
        return;
      }
      // Stop here if we already have a closer reference
      if (Math.abs(propA.index - propB.index) > errors[propA.index].closest.distance) {
        return;
      }
      // Update the closest reference
      errors[propA.index].closest.distance = Math.abs(propA.index - propB.index);
      errors[propA.index].closest.ref.node = propB.node;
      errors[propA.index].closest.ref.index = propB.index;
    }

    /**
     * Dedupe errors, only keep the ones with the highest score and delete the others
     */
    function dedupeErrors() {
      for (var i in errors) {
        if (!has(errors, i)) {
          continue;
        }
        var index = errors[i].closest.ref.index;
        if (!errors[index]) {
          continue;
        }
        if (errors[i].score > errors[index].score) {
          delete errors[index];
        } else {
          delete errors[i];
        }
      }
    }

    /**
     * Report errors
     */
    function reportErrors() {
      dedupeErrors();

      var nodeA;
      var nodeB;
      var indexA;
      var indexB;
      for (var i in errors) {
        if (!has(errors, i)) {
          continue;
        }

        nodeA = errors[i].node;
        nodeB = errors[i].closest.ref.node;
        indexA = i;
        indexB = errors[i].closest.ref.index;

        context.report({
          node: nodeA,
          message: MISPOSITION_MESSAGE,
          data: {
            propA: getPropertyName(nodeA),
            propB: getPropertyName(nodeB),
            position: indexA < indexB ? 'before' : 'after'
          }
        });
      }
    }

    /**
     * Get properties for a given AST node
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} Properties array.
     */
    function getComponentProperties(node) {
      switch (node.type) {
        case 'ClassDeclaration':
          return node.body.body;
        case 'ObjectExpression':
          return node.properties.filter(function(property) {
            return property.type === 'Property';
          });
        default:
          return [];
      }
    }

    /**
     * Compare two properties and find out if they are in the right order
     * @param {Array} propertiesInfos Array containing all the properties metadata.
     * @param {Object} propA First property name and metadata
     * @param {Object} propB Second property name.
     * @returns {Object} Object containing a correct true/false flag and the correct indexes for the two properties.
     */
    function comparePropsOrder(propertiesInfos, propA, propB) {
      var i;
      var j;
      var k;
      var l;
      var refIndexA;
      var refIndexB;

      // Get references indexes (the correct position) for given properties
      var refIndexesA = getRefPropIndexes(propA);
      var refIndexesB = getRefPropIndexes(propB);

      // Get current indexes for given properties
      var classIndexA = propertiesInfos.indexOf(propA);
      var classIndexB = propertiesInfos.indexOf(propB);

      // Loop around the references indexes for the 1st property
      for (i = 0, j = refIndexesA.length; i < j; i++) {
        refIndexA = refIndexesA[i];

        // Loop around the properties for the 2nd property (for comparison)
        for (k = 0, l = refIndexesB.length; k < l; k++) {
          refIndexB = refIndexesB[k];

          if (
            // Comparing the same properties
            refIndexA === refIndexB ||
            // 1st property is placed before the 2nd one in reference and in current component
            refIndexA < refIndexB && classIndexA < classIndexB ||
            // 1st property is placed after the 2nd one in reference and in current component
            refIndexA > refIndexB && classIndexA > classIndexB
          ) {
            return {
              correct: true,
              indexA: classIndexA,
              indexB: classIndexB
            };
          }

        }
      }

      // We did not find any correct match between reference and current component
      return {
        correct: false,
        indexA: refIndexA,
        indexB: refIndexB
      };
    }

    /**
     * Check properties order from a properties list and store the eventual errors
     * @param {Array} properties Array containing all the properties.
     */
    function checkPropsOrder(properties) {
      var propertiesInfos = properties.map(function(node) {
        return {
          name: getPropertyName(node),
          static: node.static,
          typeAnnotation: !!node.typeAnnotation && node.value === null
        };
      });

      var i;
      var j;
      var k;
      var l;
      var propA;
      var propB;
      var order;

      // Loop around the properties
      for (i = 0, j = propertiesInfos.length; i < j; i++) {
        propA = propertiesInfos[i];

        // Loop around the properties a second time (for comparison)
        for (k = 0, l = propertiesInfos.length; k < l; k++) {
          propB = propertiesInfos[k];

          // Compare the properties order
          order = comparePropsOrder(propertiesInfos, propA, propB);

          // Continue to next comparison is order is correct
          if (order.correct === true) {
            continue;
          }

          // Store an error if the order is incorrect
          storeError({
            node: properties[i],
            index: order.indexA
          }, {
            node: properties[k],
            index: order.indexB
          });
        }
      }

    }

    return {
      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (!has(list, component)) {
            continue;
          }
          var properties = getComponentProperties(list[component].node);
          checkPropsOrder(properties);
        }

        reportErrors();
      }
    };

  })
};
