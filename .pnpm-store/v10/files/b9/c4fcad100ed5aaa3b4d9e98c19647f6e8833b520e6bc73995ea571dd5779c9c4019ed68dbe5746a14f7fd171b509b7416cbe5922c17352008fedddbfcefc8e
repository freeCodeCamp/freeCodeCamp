/**
 * @fileoverview Common defaultProps detection functionality.
 */

'use strict';

const fromEntries = require('object.fromentries');
const astUtil = require('./ast');
const componentUtil = require('./componentUtil');
const propsUtil = require('./props');
const variableUtil = require('./variable');
const propWrapperUtil = require('./propWrapper');
const getText = require('./eslint').getText;

const QUOTES_REGEX = /^["']|["']$/g;

module.exports = function defaultPropsInstructions(context, components, utils) {
  /**
   * Try to resolve the node passed in to a variable in the current scope. If the node passed in is not
   * an Identifier, then the node is simply returned.
   * @param   {ASTNode} node The node to resolve.
   * @returns {ASTNode|null} Return null if the value could not be resolved, ASTNode otherwise.
   */
  function resolveNodeValue(node) {
    if (node.type === 'Identifier') {
      return variableUtil.findVariableByName(context, node, node.name);
    }
    if (
      astUtil.isCallExpression(node)
      && propWrapperUtil.isPropWrapperFunction(context, node.callee.name)
      && node.arguments && node.arguments[0]
    ) {
      return resolveNodeValue(node.arguments[0]);
    }
    return node;
  }

  /**
   * Extracts a DefaultProp from an ObjectExpression node.
   * @param   {ASTNode} objectExpression ObjectExpression node.
   * @returns {Object|string}            Object representation of a defaultProp, to be consumed by
   *                                     `addDefaultPropsToComponent`, or string "unresolved", if the defaultProps
   *                                     from this ObjectExpression can't be resolved.
   */
  function getDefaultPropsFromObjectExpression(objectExpression) {
    const hasSpread = objectExpression.properties.find((property) => property.type === 'ExperimentalSpreadProperty' || property.type === 'SpreadElement');

    if (hasSpread) {
      return 'unresolved';
    }

    return objectExpression.properties.map((defaultProp) => ({
      name: getText(context, defaultProp.key).replace(QUOTES_REGEX, ''),
      node: defaultProp,
    }));
  }

  /**
   * Marks a component's DefaultProps declaration as "unresolved". A component's DefaultProps is
   * marked as "unresolved" if we cannot safely infer the values of its defaultProps declarations
   * without risking false negatives.
   * @param   {Object} component The component to mark.
   * @returns {void}
   */
  function markDefaultPropsAsUnresolved(component) {
    components.set(component.node, {
      defaultProps: 'unresolved',
    });
  }

  /**
   * Adds defaultProps to the component passed in.
   * @param   {ASTNode}         component    The component to add the defaultProps to.
   * @param   {Object[]|'unresolved'} defaultProps defaultProps to add to the component or the string "unresolved"
   *                                         if this component has defaultProps that can't be resolved.
   * @returns {void}
   */
  function addDefaultPropsToComponent(component, defaultProps) {
    // Early return if this component's defaultProps is already marked as "unresolved".
    if (component.defaultProps === 'unresolved') {
      return;
    }

    if (defaultProps === 'unresolved') {
      markDefaultPropsAsUnresolved(component);
      return;
    }

    const defaults = component.defaultProps || {};
    const newDefaultProps = Object.assign(
      {},
      defaults,
      fromEntries(defaultProps.map((prop) => [prop.name, prop]))
    );

    components.set(component.node, {
      defaultProps: newDefaultProps,
    });
  }

  return {
    MemberExpression(node) {
      const isDefaultProp = propsUtil.isDefaultPropsDeclaration(node);

      if (!isDefaultProp) {
        return;
      }

      // find component this defaultProps belongs to
      const component = utils.getRelatedComponent(node);
      if (!component) {
        return;
      }

      // e.g.:
      // MyComponent.propTypes = {
      //   foo: React.PropTypes.string.isRequired,
      //   bar: React.PropTypes.string
      // };
      //
      // or:
      //
      // MyComponent.propTypes = myPropTypes;
      if (node.parent.type === 'AssignmentExpression') {
        const expression = resolveNodeValue(node.parent.right);
        if (!expression || expression.type !== 'ObjectExpression') {
          // If a value can't be found, we mark the defaultProps declaration as "unresolved", because
          // we should ignore this component and not report any errors for it, to avoid false-positives
          // with e.g. external defaultProps declarations.
          if (isDefaultProp) {
            markDefaultPropsAsUnresolved(component);
          }

          return;
        }

        addDefaultPropsToComponent(component, getDefaultPropsFromObjectExpression(expression));

        return;
      }

      // e.g.:
      // MyComponent.propTypes.baz = React.PropTypes.string;
      if (node.parent.type === 'MemberExpression' && node.parent.parent
        && node.parent.parent.type === 'AssignmentExpression') {
        addDefaultPropsToComponent(component, [{
          name: node.parent.property.name,
          node: node.parent.parent,
        }]);
      }
    },

    // e.g.:
    // class Hello extends React.Component {
    //   static get defaultProps() {
    //     return {
    //       name: 'Dean'
    //     };
    //   }
    //   render() {
    //     return <div>Hello {this.props.name}</div>;
    //   }
    // }
    MethodDefinition(node) {
      if (!node.static || node.kind !== 'get') {
        return;
      }

      if (!propsUtil.isDefaultPropsDeclaration(node)) {
        return;
      }

      // find component this propTypes/defaultProps belongs to
      const component = components.get(componentUtil.getParentES6Component(context, node));
      if (!component) {
        return;
      }

      const returnStatement = utils.findReturnStatement(node);
      if (!returnStatement) {
        return;
      }

      const expression = resolveNodeValue(returnStatement.argument);
      if (!expression || expression.type !== 'ObjectExpression') {
        return;
      }

      addDefaultPropsToComponent(component, getDefaultPropsFromObjectExpression(expression));
    },

    // e.g.:
    // class Greeting extends React.Component {
    //   render() {
    //     return (
    //       <h1>Hello, {this.props.foo} {this.props.bar}</h1>
    //     );
    //   }
    //   static defaultProps = {
    //     foo: 'bar',
    //     bar: 'baz'
    //   };
    // }
    'ClassProperty, PropertyDefinition'(node) {
      if (!(node.static && node.value)) {
        return;
      }

      const propName = astUtil.getPropertyName(node);
      const isDefaultProp = propName === 'defaultProps' || propName === 'getDefaultProps';

      if (!isDefaultProp) {
        return;
      }

      // find component this propTypes/defaultProps belongs to
      const component = components.get(componentUtil.getParentES6Component(context, node));
      if (!component) {
        return;
      }

      const expression = resolveNodeValue(node.value);
      if (!expression || expression.type !== 'ObjectExpression') {
        return;
      }

      addDefaultPropsToComponent(component, getDefaultPropsFromObjectExpression(expression));
    },

    // e.g.:
    // React.createClass({
    //   render: function() {
    //     return <div>{this.props.foo}</div>;
    //   },
    //   getDefaultProps: function() {
    //     return {
    //       foo: 'default'
    //     };
    //   }
    // });
    ObjectExpression(node) {
      // find component this propTypes/defaultProps belongs to
      const component = componentUtil.isES5Component(node, context) && components.get(node);
      if (!component) {
        return;
      }

      // Search for the proptypes declaration
      node.properties.forEach((property) => {
        if (property.type === 'ExperimentalSpreadProperty' || property.type === 'SpreadElement') {
          return;
        }

        const isDefaultProp = propsUtil.isDefaultPropsDeclaration(property);

        if (isDefaultProp && property.value.type === 'FunctionExpression') {
          const returnStatement = utils.findReturnStatement(property);
          if (!returnStatement || returnStatement.argument.type !== 'ObjectExpression') {
            return;
          }

          addDefaultPropsToComponent(component, getDefaultPropsFromObjectExpression(returnStatement.argument));
        }
      });
    },
  };
};
