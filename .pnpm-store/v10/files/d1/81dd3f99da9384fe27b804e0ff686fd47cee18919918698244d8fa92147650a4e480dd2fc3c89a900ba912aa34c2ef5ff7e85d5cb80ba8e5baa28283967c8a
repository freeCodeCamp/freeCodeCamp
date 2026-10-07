/**
 * @fileoverview Common used propTypes detection functionality.
 */

'use strict';

const values = require('object.values');

const astUtil = require('./ast');
const componentUtil = require('./componentUtil');
const testReactVersion = require('./version').testReactVersion;
const ast = require('./ast');
const eslintUtil = require('./eslint');

const getScope = eslintUtil.getScope;
const getSourceCode = eslintUtil.getSourceCode;

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const LIFE_CYCLE_METHODS = ['componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate'];
const ASYNC_SAFE_LIFE_CYCLE_METHODS = ['getDerivedStateFromProps', 'getSnapshotBeforeUpdate', 'UNSAFE_componentWillReceiveProps', 'UNSAFE_componentWillUpdate'];

function createPropVariables() {
  /** @type {Map<string, string[]>} Maps the variable to its definition. `props.a.b` is stored as `['a', 'b']` */
  let propVariables = new Map();
  let hasBeenWritten = false;
  const stack = [{ propVariables, hasBeenWritten }];
  return {
    pushScope() {
      // popVariables is not copied until first write.
      stack.push({ propVariables, hasBeenWritten: false });
    },
    popScope() {
      stack.pop();
      propVariables = stack[stack.length - 1].propVariables;
      hasBeenWritten = stack[stack.length - 1].hasBeenWritten;
    },
    /**
     * Add a variable name to the current scope
     * @param {string} name
     * @param {string[]} allNames Example: `props.a.b` should be formatted as `['a', 'b']`
     * @returns {Map<string, string[]>}
     */
    set(name, allNames) {
      if (!hasBeenWritten) {
        // copy on write
        propVariables = new Map(propVariables);
        Object.assign(stack[stack.length - 1], { propVariables, hasBeenWritten: true });
        stack[stack.length - 1].hasBeenWritten = true;
      }
      return propVariables.set(name, allNames);
    },
    /**
     * Get the definition of a variable.
     * @param {string} name
     * @returns {string[]} Example: `props.a.b` is represented by `['a', 'b']`
     */
    get(name) {
      return propVariables.get(name);
    },
  };
}

/**
 * Checks if the string is one of `props`, `nextProps`, or `prevProps`
 * @param {string} name The AST node being checked.
 * @returns {boolean} True if the prop name matches
 */
function isCommonVariableNameForProps(name) {
  return name === 'props' || name === 'nextProps' || name === 'prevProps';
}

/**
 * Checks if the component must be validated
 * @param {Object} component The component to process
 * @returns {boolean} True if the component must be validated, false if not.
 */
function mustBeValidated(component) {
  return !!(component && !component.ignorePropsValidation);
}

/**
 * Check if we are in a lifecycle method
 * @param {object} context
 * @param {ASTNode} node The AST node being checked.
 * @param {boolean} checkAsyncSafeLifeCycles
 * @return {boolean} true if we are in a class constructor, false if not
 */
function inLifeCycleMethod(context, node, checkAsyncSafeLifeCycles) {
  let scope = getScope(context, node);
  while (scope) {
    if (scope.block && scope.block.parent && scope.block.parent.key) {
      const name = scope.block.parent.key.name;

      if (LIFE_CYCLE_METHODS.indexOf(name) >= 0) {
        return true;
      }
      if (checkAsyncSafeLifeCycles && ASYNC_SAFE_LIFE_CYCLE_METHODS.indexOf(name) >= 0) {
        return true;
      }
    }
    scope = scope.upper;
  }
  return false;
}

/**
 * Returns true if the given node is a React Component lifecycle method
 * @param {ASTNode} node The AST node being checked.
 * @param {boolean} checkAsyncSafeLifeCycles
 * @return {boolean} True if the node is a lifecycle method
 */
function isNodeALifeCycleMethod(node, checkAsyncSafeLifeCycles) {
  if (node.key) {
    if (node.kind === 'constructor') {
      return true;
    }

    const nodeKeyName = node.key.name;

    if (typeof nodeKeyName !== 'string') {
      return false;
    }

    if (LIFE_CYCLE_METHODS.indexOf(nodeKeyName) >= 0) {
      return true;
    }
    if (checkAsyncSafeLifeCycles && ASYNC_SAFE_LIFE_CYCLE_METHODS.indexOf(nodeKeyName) >= 0) {
      return true;
    }
  }

  return false;
}

/**
 * Returns true if the given node is inside a React Component lifecycle
 * method.
 * @param {ASTNode} node The AST node being checked.
 * @param {boolean} checkAsyncSafeLifeCycles
 * @return {boolean} True if the node is inside a lifecycle method
 */
function isInLifeCycleMethod(node, checkAsyncSafeLifeCycles) {
  if (
    (node.type === 'MethodDefinition' || node.type === 'Property')
    && isNodeALifeCycleMethod(node, checkAsyncSafeLifeCycles)
  ) {
    return true;
  }

  if (node.parent) {
    return isInLifeCycleMethod(node.parent, checkAsyncSafeLifeCycles);
  }

  return false;
}

/**
 * Check if a function node is a setState updater
 * @param {ASTNode} node a function node
 * @return {boolean}
 */
function isSetStateUpdater(node) {
  const unwrappedParentCalleeNode = astUtil.isCallExpression(node.parent)
    && ast.unwrapTSAsExpression(node.parent.callee);

  return unwrappedParentCalleeNode
    && unwrappedParentCalleeNode.property
    && unwrappedParentCalleeNode.property.name === 'setState'
    // Make sure we are in the updater not the callback
    && node.parent.arguments[0] === node;
}

function isPropArgumentInSetStateUpdater(context, node, name) {
  if (typeof name !== 'string') {
    return;
  }
  let scope = getScope(context, node);
  while (scope) {
    const unwrappedParentCalleeNode = scope.block
      && astUtil.isCallExpression(scope.block.parent)
      && ast.unwrapTSAsExpression(scope.block.parent.callee);
    if (
      unwrappedParentCalleeNode
      && unwrappedParentCalleeNode.property
      && unwrappedParentCalleeNode.property.name === 'setState'
      // Make sure we are in the updater not the callback
      && scope.block.parent.arguments[0].range[0] === scope.block.range[0]
      && scope.block.parent.arguments[0].params
      && scope.block.parent.arguments[0].params.length > 1
    ) {
      return scope.block.parent.arguments[0].params[1].name === name;
    }
    scope = scope.upper;
  }
  return false;
}

/**
 * @param {Context} context
 * @param {ASTNode} node
 * @returns {boolean}
 */
function isInClassComponent(context, node) {
  return !!(componentUtil.getParentES6Component(context, node) || componentUtil.getParentES5Component(context, node));
}

/**
 * Checks if the node is `this.props`
 * @param {ASTNode|undefined} node
 * @returns {boolean}
 */
function isThisDotProps(node) {
  return !!node
    && node.type === 'MemberExpression'
    && ast.unwrapTSAsExpression(node.object).type === 'ThisExpression'
    && node.property.name === 'props';
}

/**
 * Checks if the prop has spread operator.
 * @param {object} context
 * @param {ASTNode} node The AST node being marked.
 * @returns {boolean} True if the prop has spread operator, false if not.
 */
function hasSpreadOperator(context, node) {
  const tokens = getSourceCode(context).getTokens(node);
  return tokens.length && tokens[0].value === '...';
}

/**
 * Checks if the node is a propTypes usage of the form `this.props.*`, `props.*`, `prevProps.*`, or `nextProps.*`.
 * @param {Context} context
 * @param {ASTNode} node
 * @param {Object} utils
 * @param {boolean} checkAsyncSafeLifeCycles
 * @returns {boolean}
 */
function isPropTypesUsageByMemberExpression(context, node, utils, checkAsyncSafeLifeCycles) {
  const unwrappedObjectNode = ast.unwrapTSAsExpression(node.object);

  if (isInClassComponent(context, node)) {
    // this.props.*
    if (isThisDotProps(unwrappedObjectNode)) {
      return true;
    }
    // props.* or prevProps.* or nextProps.*
    if (
      isCommonVariableNameForProps(unwrappedObjectNode.name)
      && (inLifeCycleMethod(context, node, checkAsyncSafeLifeCycles) || astUtil.inConstructor(context, node))
    ) {
      return true;
    }
    // this.setState((_, props) => props.*))
    if (isPropArgumentInSetStateUpdater(context, node, unwrappedObjectNode.name)) {
      return true;
    }
    return false;
  }
  // props.* in function component
  return unwrappedObjectNode.name === 'props' && !ast.isAssignmentLHS(node);
}

/**
 * Retrieve the name of a property node
 * @param {Context} context
 * @param {ASTNode} node The AST node with the property.
 * @param {Object} utils
 * @param {boolean} checkAsyncSafeLifeCycles
 * @return {string|undefined} the name of the property or undefined if not found
 */
function getPropertyName(context, node, utils, checkAsyncSafeLifeCycles) {
  const property = node.property;
  if (property) {
    switch (property.type) {
      case 'Identifier':
        if (node.computed) {
          return '__COMPUTED_PROP__';
        }
        return property.name;
      case 'MemberExpression':
        return;
      case 'Literal':
        // Accept computed properties that are literal strings
        if (typeof property.value === 'string') {
          return property.value;
        }
        // Accept number as well but only accept props[123]
        if (typeof property.value === 'number') {
          if (isPropTypesUsageByMemberExpression(context, node, utils, checkAsyncSafeLifeCycles)) {
            return property.raw;
          }
        }
        // falls through
      default:
        if (node.computed) {
          return '__COMPUTED_PROP__';
        }
        break;
    }
  }
}

module.exports = function usedPropTypesInstructions(context, components, utils) {
  const checkAsyncSafeLifeCycles = testReactVersion(context, '>= 16.3.0');

  const propVariables = createPropVariables();
  const pushScope = propVariables.pushScope;
  const popScope = propVariables.popScope;

  /**
   * Mark a prop type as used
   * @param {ASTNode} node The AST node being marked.
   * @param {string[]} [parentNames]
   */
  function markPropTypesAsUsed(node, parentNames) {
    parentNames = parentNames || [];
    let type;
    let name;
    let allNames;
    let properties;
    switch (node.type) {
      case 'OptionalMemberExpression':
      case 'MemberExpression':
        name = getPropertyName(context, node, utils, checkAsyncSafeLifeCycles);
        if (name) {
          allNames = parentNames.concat(name);
          if (
            // Match props.foo.bar, don't match bar[props.foo]
            node.parent.type === 'MemberExpression'
            && node.parent.object === node
          ) {
            markPropTypesAsUsed(node.parent, allNames);
          }
          // Handle the destructuring part of `const {foo} = props.a.b`
          if (
            node.parent.type === 'VariableDeclarator'
            && node.parent.id.type === 'ObjectPattern'
          ) {
            node.parent.id.parent = node.parent; // patch for bug in eslint@4 in which ObjectPattern has no parent
            markPropTypesAsUsed(node.parent.id, allNames);
          }

          // const a = props.a
          if (
            node.parent.type === 'VariableDeclarator'
            && node.parent.id.type === 'Identifier'
          ) {
            propVariables.set(node.parent.id.name, allNames);
          }
          // Do not mark computed props as used.
          type = name !== '__COMPUTED_PROP__' ? 'direct' : null;
        }
        break;
      case 'ArrowFunctionExpression':
      case 'FunctionDeclaration':
      case 'FunctionExpression': {
        if (node.params.length === 0) {
          break;
        }
        type = 'destructuring';
        const propParam = isSetStateUpdater(node) ? node.params[1] : node.params[0];
        properties = propParam.type === 'AssignmentPattern'
          ? propParam.left.properties
          : propParam.properties;
        break;
      }
      case 'ObjectPattern':
        type = 'destructuring';
        properties = node.properties;
        break;
      case 'TSEmptyBodyFunctionExpression':
        break;
      default:
        throw new Error(`${node.type} ASTNodes are not handled by markPropTypesAsUsed`);
    }

    const component = components.get(utils.getParentComponent(node));
    const usedPropTypes = (component && component.usedPropTypes) || [];
    let ignoreUnusedPropTypesValidation = (component && component.ignoreUnusedPropTypesValidation) || false;

    switch (type) {
      case 'direct': {
        // Ignore Object methods
        if (name in Object.prototype) {
          break;
        }

        const reportedNode = node.property;
        usedPropTypes.push({
          name,
          allNames,
          node: reportedNode,
        });
        break;
      }
      case 'destructuring': {
        for (let k = 0, l = (properties || []).length; k < l; k++) {
          if (hasSpreadOperator(context, properties[k]) || properties[k].computed) {
            ignoreUnusedPropTypesValidation = true;
            break;
          }
          const propName = ast.getKeyValue(context, properties[k]);

          if (!propName || properties[k].type !== 'Property') {
            break;
          }

          usedPropTypes.push({
            allNames: parentNames.concat([propName]),
            name: propName,
            node: properties[k],
          });

          if (properties[k].value.type === 'ObjectPattern') {
            markPropTypesAsUsed(properties[k].value, parentNames.concat([propName]));
          } else if (properties[k].value.type === 'Identifier') {
            propVariables.set(properties[k].value.name, parentNames.concat(propName));
          }
        }
        break;
      }
      default:
        break;
    }

    components.set(component ? component.node : node, {
      usedPropTypes,
      ignoreUnusedPropTypesValidation,
    });
  }

  /**
   * @param {ASTNode} node We expect either an ArrowFunctionExpression,
   *   FunctionDeclaration, or FunctionExpression
   */
  function markDestructuredFunctionArgumentsAsUsed(node) {
    const param = node.params && isSetStateUpdater(node) ? node.params[1] : node.params[0];

    const destructuring = param && (
      param.type === 'ObjectPattern'
      || ((param.type === 'AssignmentPattern') && (param.left.type === 'ObjectPattern'))
    );

    if (destructuring && (components.get(node) || components.get(node.parent))) {
      markPropTypesAsUsed(node);
    }
  }

  function handleSetStateUpdater(node) {
    if (!node.params || node.params.length < 2 || !isSetStateUpdater(node)) {
      return;
    }
    markPropTypesAsUsed(node);
  }

  /**
   * Handle both stateless functions and setState updater functions.
   * @param {ASTNode} node We expect either an ArrowFunctionExpression,
   *   FunctionDeclaration, or FunctionExpression
   */
  function handleFunctionLikeExpressions(node) {
    pushScope();
    handleSetStateUpdater(node);
    markDestructuredFunctionArgumentsAsUsed(node);
  }

  function handleCustomValidators(component) {
    const propTypes = component.declaredPropTypes;
    if (!propTypes) {
      return;
    }

    Object.keys(propTypes).forEach((key) => {
      const node = propTypes[key].node;

      if (node && node.value && astUtil.isFunctionLikeExpression(node.value)) {
        markPropTypesAsUsed(node.value);
      }
    });
  }

  return {
    VariableDeclarator(node) {
      const unwrappedInitNode = ast.unwrapTSAsExpression(node.init);

      // let props = this.props
      if (isThisDotProps(unwrappedInitNode) && isInClassComponent(context, node) && node.id.type === 'Identifier') {
        propVariables.set(node.id.name, []);
      }

      // Only handles destructuring
      if (node.id.type !== 'ObjectPattern' || !unwrappedInitNode) {
        return;
      }

      // let {props: {firstname}} = this
      const propsProperty = node.id.properties.find((property) => (
        property.key
        && (property.key.name === 'props' || property.key.value === 'props')
      ));

      if (unwrappedInitNode.type === 'ThisExpression' && propsProperty && propsProperty.value.type === 'ObjectPattern') {
        markPropTypesAsUsed(propsProperty.value);
        return;
      }

      // let {props} = this
      if (unwrappedInitNode.type === 'ThisExpression' && propsProperty && propsProperty.value.name === 'props') {
        propVariables.set('props', []);
        return;
      }

      // let {firstname} = props
      if (
        isCommonVariableNameForProps(unwrappedInitNode.name)
        && (utils.getParentStatelessComponent(node) || isInLifeCycleMethod(node, checkAsyncSafeLifeCycles))
      ) {
        markPropTypesAsUsed(node.id);
        return;
      }

      // let {firstname} = this.props
      if (isThisDotProps(unwrappedInitNode) && isInClassComponent(context, node)) {
        markPropTypesAsUsed(node.id);
        return;
      }

      // let {firstname} = thing, where thing is defined by const thing = this.props.**.*
      if (propVariables.get(unwrappedInitNode.name)) {
        markPropTypesAsUsed(node.id, propVariables.get(unwrappedInitNode.name));
      }
    },

    FunctionDeclaration: handleFunctionLikeExpressions,

    ArrowFunctionExpression: handleFunctionLikeExpressions,

    FunctionExpression: handleFunctionLikeExpressions,

    'FunctionDeclaration:exit': popScope,

    'ArrowFunctionExpression:exit': popScope,

    'FunctionExpression:exit': popScope,

    JSXSpreadAttribute(node) {
      const component = components.get(utils.getParentComponent(node));
      components.set(component ? component.node : node, {
        ignoreUnusedPropTypesValidation: node.argument.type !== 'ObjectExpression',
      });
    },

    'MemberExpression, OptionalMemberExpression'(node) {
      if (isPropTypesUsageByMemberExpression(context, node, utils, checkAsyncSafeLifeCycles)) {
        markPropTypesAsUsed(node);
        return;
      }

      const propVariable = propVariables.get(ast.unwrapTSAsExpression(node.object).name);
      if (propVariable) {
        markPropTypesAsUsed(node, propVariable);
      }
    },

    ObjectPattern(node) {
      // If the object pattern is a destructured props object in a lifecycle
      // method -- mark it for used props.
      if (isNodeALifeCycleMethod(node.parent.parent, checkAsyncSafeLifeCycles) && node.properties.length > 0) {
        markPropTypesAsUsed(node.parent);
      }
    },

    'Program:exit'() {
      values(components.list())
        .filter((component) => mustBeValidated(component))
        .forEach((component) => {
          handleCustomValidators(component);
        });
    },
  };
};
