/**
 * @fileoverview Forbid target='_blank' attribute
 * @author Kevin Miller
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Forbid target="_blank" attribute without rel="noopener noreferrer"',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: function(context) {
    return {
      JSXAttribute: function(node) {
        if (node.parent.name.name !== 'a') {
          return;
        }

        if (
          node.name.name === 'target' &&
          node.value.type === 'Literal' &&
          node.value.value.toLowerCase() === '_blank'
        ) {
          var relFound = false;
          var attrs = node.parent.attributes;
          for (var idx in attrs) {
            if (attrs[idx].name && attrs[idx].name.name === 'rel') {
              var tags = attrs[idx].value.type === 'Literal' && attrs[idx].value.value.toLowerCase().split(' ');
              if (!tags || (tags.indexOf('noopener') >= 0 && tags.indexOf('noreferrer') >= 0)) {
                relFound = true;
                break;
              }
            }
          }
          if (!relFound) {
            context.report(node, 'Using target="_blank" without rel="noopener noreferrer" ' +
            'is a security risk: see https://mathiasbynens.github.io/rel-noopener');
          }
        }
      }
    };
  }
};
