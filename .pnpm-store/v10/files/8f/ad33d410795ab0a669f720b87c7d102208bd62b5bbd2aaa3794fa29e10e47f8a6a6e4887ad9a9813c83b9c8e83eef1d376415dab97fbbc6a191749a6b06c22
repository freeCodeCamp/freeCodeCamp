/**
 * @fileoverview Prevent usage of deprecated methods
 * @author Yannick Croissant
 * @author Scott Feeney
 * @author Sergei Startsev
 */

'use strict';

const entries = require('object.entries');
const astUtil = require('../util/ast');
const componentUtil = require('../util/componentUtil');
const docsUrl = require('../util/docsUrl');
const pragmaUtil = require('../util/pragma');
const testReactVersion = require('../util/version').testReactVersion;
const report = require('../util/report');
const getText = require('../util/eslint').getText;

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const MODULES = {
  react: ['React'],
  'react-addons-perf': ['ReactPerf', 'Perf'],
  'react-dom': ['ReactDOM'],
  'react-dom/server': ['ReactDOMServer'],
};

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function getDeprecated(pragma) {
  const deprecated = {};
  // 0.12.0
  deprecated[`${pragma}.renderComponent`] = ['0.12.0', `${pragma}.render`];
  deprecated[`${pragma}.renderComponentToString`] = ['0.12.0', `${pragma}.renderToString`];
  deprecated[`${pragma}.renderComponentToStaticMarkup`] = ['0.12.0', `${pragma}.renderToStaticMarkup`];
  deprecated[`${pragma}.isValidComponent`] = ['0.12.0', `${pragma}.isValidElement`];
  deprecated[`${pragma}.PropTypes.component`] = ['0.12.0', `${pragma}.PropTypes.element`];
  deprecated[`${pragma}.PropTypes.renderable`] = ['0.12.0', `${pragma}.PropTypes.node`];
  deprecated[`${pragma}.isValidClass`] = ['0.12.0'];
  deprecated['this.transferPropsTo'] = ['0.12.0', 'spread operator ({...})'];
  // 0.13.0
  deprecated[`${pragma}.addons.classSet`] = ['0.13.0', 'the npm module classnames'];
  deprecated[`${pragma}.addons.cloneWithProps`] = ['0.13.0', `${pragma}.cloneElement`];
  // 0.14.0
  deprecated[`${pragma}.render`] = ['0.14.0', 'ReactDOM.render'];
  deprecated[`${pragma}.unmountComponentAtNode`] = ['0.14.0', 'ReactDOM.unmountComponentAtNode'];
  deprecated[`${pragma}.findDOMNode`] = ['0.14.0', 'ReactDOM.findDOMNode'];
  deprecated[`${pragma}.renderToString`] = ['0.14.0', 'ReactDOMServer.renderToString'];
  deprecated[`${pragma}.renderToStaticMarkup`] = ['0.14.0', 'ReactDOMServer.renderToStaticMarkup'];
  // 15.0.0
  deprecated[`${pragma}.addons.LinkedStateMixin`] = ['15.0.0'];
  deprecated['ReactPerf.printDOM'] = ['15.0.0', 'ReactPerf.printOperations'];
  deprecated['Perf.printDOM'] = ['15.0.0', 'Perf.printOperations'];
  deprecated['ReactPerf.getMeasurementsSummaryMap'] = ['15.0.0', 'ReactPerf.getWasted'];
  deprecated['Perf.getMeasurementsSummaryMap'] = ['15.0.0', 'Perf.getWasted'];
  // 15.5.0
  deprecated[`${pragma}.createClass`] = ['15.5.0', 'the npm module create-react-class'];
  deprecated[`${pragma}.addons.TestUtils`] = ['15.5.0', 'ReactDOM.TestUtils'];
  deprecated[`${pragma}.PropTypes`] = ['15.5.0', 'the npm module prop-types'];
  // 15.6.0
  deprecated[`${pragma}.DOM`] = ['15.6.0', 'the npm module react-dom-factories'];
  // 16.9.0
  // For now the following life-cycle methods are just legacy, not deprecated:
  // `componentWillMount`, `componentWillReceiveProps`, `componentWillUpdate`
  // https://github.com/yannickcr/eslint-plugin-react/pull/1750#issuecomment-425975934
  deprecated.componentWillMount = [
    '16.9.0',
    'UNSAFE_componentWillMount',
    'https://reactjs.org/docs/react-component.html#unsafe_componentwillmount. '
    + 'Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.',
  ];
  deprecated.componentWillReceiveProps = [
    '16.9.0',
    'UNSAFE_componentWillReceiveProps',
    'https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops. '
    + 'Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.',
  ];
  deprecated.componentWillUpdate = [
    '16.9.0',
    'UNSAFE_componentWillUpdate',
    'https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate. '
    + 'Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components.',
  ];
  // 18.0.0
  // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#deprecations
  deprecated['ReactDOM.render'] = [
    '18.0.0',
    'createRoot',
    'https://reactjs.org/link/switch-to-createroot',
  ];
  deprecated['ReactDOM.hydrate'] = [
    '18.0.0',
    'hydrateRoot',
    'https://reactjs.org/link/switch-to-createroot',
  ];
  deprecated['ReactDOM.unmountComponentAtNode'] = [
    '18.0.0',
    'root.unmount',
    'https://reactjs.org/link/switch-to-createroot',
  ];
  deprecated['ReactDOMServer.renderToNodeStream'] = [
    '18.0.0',
    'renderToPipeableStream',
    'https://reactjs.org/docs/react-dom-server.html#rendertonodestream',
  ];

  return deprecated;
}

const messages = {
  deprecated: '{{oldMethod}} is deprecated since React {{version}}{{newMethod}}{{refs}}',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of deprecated methods',
      category: 'Best Practices',
      recommended: true,
      url: docsUrl('no-deprecated'),
    },

    messages,

    schema: [],
  },

  create(context) {
    const pragma = pragmaUtil.getFromContext(context);
    const deprecated = getDeprecated(pragma);

    function isDeprecated(method) {
      return (
        deprecated
        && deprecated[method]
        && deprecated[method][0]
        && testReactVersion(context, `>= ${deprecated[method][0]}`)
      );
    }

    function checkDeprecation(node, methodName, methodNode) {
      if (!isDeprecated(methodName)) {
        return;
      }
      const version = deprecated[methodName][0];
      const newMethod = deprecated[methodName][1];
      const refs = deprecated[methodName][2];
      report(context, messages.deprecated, 'deprecated', {
        node: methodNode || node,
        data: {
          oldMethod: methodName,
          version,
          newMethod: newMethod ? `, use ${newMethod} instead` : '',
          refs: refs ? `, see ${refs}` : '',
        },
      });
    }

    function getReactModuleName(node) {
      let moduleName = false;
      if (!node.init) {
        return false;
      }

      entries(MODULES).some((entry) => {
        const key = entry[0];
        const moduleNames = entry[1];
        if (
          node.init.arguments
          && node.init.arguments.length > 0
          && node.init.arguments[0]
          && key === node.init.arguments[0].value
        ) {
          moduleName = MODULES[key][0];
        } else {
          moduleName = moduleNames.find((name) => name === node.init.name);
        }
        return moduleName;
      });

      return moduleName;
    }

    /**
     * Returns life cycle methods if available
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} The array of methods.
     */
    function getLifeCycleMethods(node) {
      const properties = astUtil.getComponentProperties(node);
      return properties.map((property) => ({
        name: astUtil.getPropertyName(property),
        node: astUtil.getPropertyNameNode(property),
      }));
    }

    /**
     * Checks life cycle methods
     * @param {ASTNode} node The AST node being checked.
     */
    function checkLifeCycleMethods(node) {
      if (
        componentUtil.isES5Component(node, context)
     || componentUtil.isES6Component(node, context)
      ) {
        const methods = getLifeCycleMethods(node);
        methods.forEach((method) => checkDeprecation(node, method.name, method.node));
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      MemberExpression(node) {
        checkDeprecation(node, getText(context, node));
      },

      ImportDeclaration(node) {
        const isReactImport = typeof MODULES[node.source.value] !== 'undefined';
        if (!isReactImport) {
          return;
        }
        node.specifiers.filter(((s) => 'imported' in s && s.imported)).forEach((specifier) => {
          // TODO, semver-major: remove `in` check as part of jsdoc->tsdoc migration
          checkDeprecation(node, 'imported' in specifier && 'name' in specifier.imported && `${MODULES[node.source.value][0]}.${specifier.imported.name}`, specifier);
        });
      },

      VariableDeclarator(node) {
        const reactModuleName = getReactModuleName(node);
        const isRequire = node.init
          && 'callee' in node.init
          && node.init.callee
          && 'name' in node.init.callee
          && node.init.callee.name === 'require';
        const isReactRequire = node.init
          && 'arguments' in node.init
          && node.init.arguments
          && node.init.arguments.length
          && typeof MODULES['value' in node.init.arguments[0] ? node.init.arguments[0].value : undefined] !== 'undefined';
        const isDestructuring = node.id && node.id.type === 'ObjectPattern';

        if (
          !(isDestructuring && reactModuleName)
          && !(isDestructuring && isRequire && isReactRequire)
        ) {
          return;
        }

        ('properties' in node.id ? node.id.properties : undefined).filter((p) => p.type !== 'RestElement' && p.key).forEach((property) => {
          checkDeprecation(
            node,
            'key' in property && 'name' in property.key && `${reactModuleName || pragma}.${property.key.name}`,
            property
          );
        });
      },

      ClassDeclaration: checkLifeCycleMethods,
      ClassExpression: checkLifeCycleMethods,
      ObjectExpression: checkLifeCycleMethods,
    };
  },
};
