/**
 * @fileoverview Prevent usage of deprecated methods
 * @author Yannick Croissant
 * @author Scott Feeney
 */
'use strict';

var pragmaUtil = require('../util/pragma');
var versionUtil = require('../util/version');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEPRECATED_MESSAGE = '{{oldMethod}} is deprecated since React {{version}}{{newMethod}}';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of deprecated methods',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var pragma = pragmaUtil.getFromContext(context);

    function getDeprecated() {
      var deprecated = {
        MemberExpression: {}
      };
      // 0.12.0
      deprecated.MemberExpression[pragma + '.renderComponent'] = ['0.12.0', pragma + '.render'];
      deprecated.MemberExpression[pragma + '.renderComponentToString'] = ['0.12.0', pragma + '.renderToString'];
      deprecated.MemberExpression[pragma + '.renderComponentToStaticMarkup'] = [
        '0.12.0',
        pragma + '.renderToStaticMarkup'
      ];
      deprecated.MemberExpression[pragma + '.isValidComponent'] = ['0.12.0', pragma + '.isValidElement'];
      deprecated.MemberExpression[pragma + '.PropTypes.component'] = ['0.12.0', pragma + '.PropTypes.element'];
      deprecated.MemberExpression[pragma + '.PropTypes.renderable'] = ['0.12.0', pragma + '.PropTypes.node'];
      deprecated.MemberExpression[pragma + '.isValidClass'] = ['0.12.0'];
      deprecated.MemberExpression['this.transferPropsTo'] = ['0.12.0', 'spread operator ({...})'];
      // 0.13.0
      deprecated.MemberExpression[pragma + '.addons.classSet'] = ['0.13.0', 'the npm module classnames'];
      deprecated.MemberExpression[pragma + '.addons.cloneWithProps'] = ['0.13.0', pragma + '.cloneElement'];
      // 0.14.0
      deprecated.MemberExpression[pragma + '.render'] = ['0.14.0', 'ReactDOM.render'];
      deprecated.MemberExpression[pragma + '.unmountComponentAtNode'] = ['0.14.0', 'ReactDOM.unmountComponentAtNode'];
      deprecated.MemberExpression[pragma + '.findDOMNode'] = ['0.14.0', 'ReactDOM.findDOMNode'];
      deprecated.MemberExpression[pragma + '.renderToString'] = ['0.14.0', 'ReactDOMServer.renderToString'];
      deprecated.MemberExpression[pragma + '.renderToStaticMarkup'] = ['0.14.0', 'ReactDOMServer.renderToStaticMarkup'];
      // 15.0.0
      deprecated.MemberExpression[pragma + '.addons.LinkedStateMixin'] = ['15.0.0'];
      deprecated.MemberExpression['ReactPerf.printDOM'] = ['15.0.0', 'ReactPerf.printOperations'];
      deprecated.MemberExpression['Perf.printDOM'] = ['15.0.0', 'Perf.printOperations'];
      deprecated.MemberExpression['ReactPerf.getMeasurementsSummaryMap'] = ['15.0.0', 'ReactPerf.getWasted'];
      deprecated.MemberExpression['Perf.getMeasurementsSummaryMap'] = ['15.0.0', 'Perf.getWasted'];

      return deprecated;
    }

    function isDeprecated(type, method) {
      var deprecated = getDeprecated();

      return (
        deprecated[type] &&
        deprecated[type][method] &&
        versionUtil.test(context, deprecated[type][method][0])
      );
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      MemberExpression: function(node) {
        var method = sourceCode.getText(node);
        if (!isDeprecated(node.type, method)) {
          return;
        }
        var deprecated = getDeprecated();
        context.report({
          node: node,
          message: DEPRECATED_MESSAGE,
          data: {
            oldMethod: method,
            version: deprecated[node.type][method][0],
            newMethod: deprecated[node.type][method][1] ? ', use ' + deprecated[node.type][method][1] + ' instead' : ''
          }
        });
      },

      BlockComment: function(node) {
        pragma = pragmaUtil.getFromNode(node) || pragma;
      }

    };

  }
};
