/**
 * @fileoverview  Attempts to discover all state fields in a React component and
 * warn if any of them are never read.
 *
 * State field definitions are collected from `this.state = {}` assignments in
 * the constructor, objects passed to `this.setState()`, and `state = {}` class
 * property assignments.
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const astUtil = require('../util/ast');
const componentUtil = require('../util/componentUtil');
const report = require('../util/report');
const getScope = require('../util/eslint').getScope;

// Descend through all wrapping TypeCastExpressions and return the expression
// that was cast.
function uncast(node) {
  while (node.type === 'TypeCastExpression') {
    node = node.expression;
  }
  return node;
}

// Return the name of an identifier or the string value of a literal. Useful
// anywhere that a literal may be used as a key (e.g., member expressions,
// method definitions, ObjectExpression property keys).
function getName(node) {
  node = uncast(node);
  const type = node.type;

  if (type === 'Identifier') {
    return node.name;
  }
  if (type === 'Literal') {
    return String(node.value);
  }
  if (type === 'TemplateLiteral' && node.expressions.length === 0) {
    return node.quasis[0].value.raw;
  }
  return null;
}

function isThisExpression(node) {
  return astUtil.unwrapTSAsExpression(uncast(node)).type === 'ThisExpression';
}

function getInitialClassInfo() {
  return {
    // Set of nodes where state fields were defined.
    stateFields: new Set(),

    // Set of names of state fields that we've seen used.
    usedStateFields: new Set(),

    // Names of local variables that may be pointing to this.state. To
    // track this properly, we would need to keep track of all locals,
    // shadowing, assignments, etc. To keep things simple, we only
    // maintain one set of aliases per method and accept that it will
    // produce some false negatives.
    aliases: null,
  };
}

function isSetStateCall(node) {
  const unwrappedCalleeNode = astUtil.unwrapTSAsExpression(node.callee);

  return (
    unwrappedCalleeNode.type === 'MemberExpression'
    && isThisExpression(unwrappedCalleeNode.object)
    && getName(unwrappedCalleeNode.property) === 'setState'
  );
}

const messages = {
  unusedStateField: 'Unused state field: \'{{name}}\'',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow definitions of unused state',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('no-unused-state'),
    },

    messages,

    schema: [],
  },

  create(context) {
    // Non-null when we are inside a React component ClassDeclaration and we have
    // not yet encountered any use of this.state which we have chosen not to
    // analyze. If we encounter any such usage (like this.state being spread as
    // JSX attributes), then this is again set to null.
    let classInfo = null;

    function isStateParameterReference(node) {
      const classMethods = [
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
      ];

      let scope = getScope(context, node);
      while (scope) {
        const parent = scope.block && scope.block.parent;
        if (
          parent
          && parent.type === 'MethodDefinition' && (
            (parent.static && parent.key.name === 'getDerivedStateFromProps')
            || classMethods.indexOf(parent.key.name) !== -1
          )
          && parent.value.type === 'FunctionExpression'
          && parent.value.params[1]
          && parent.value.params[1].name === node.name
        ) {
          return true;
        }
        scope = scope.upper;
      }

      return false;
    }

    // Returns true if the given node is possibly a reference to `this.state` or the state parameter of
    // a lifecycle method.
    function isStateReference(node) {
      node = uncast(node);

      const isDirectStateReference = node.type === 'MemberExpression'
        && isThisExpression(node.object)
        && node.property.name === 'state';

      const isAliasedStateReference = node.type === 'Identifier'
        && classInfo.aliases
        && classInfo.aliases.has(node.name);

      return isDirectStateReference || isAliasedStateReference || isStateParameterReference(node);
    }

    // Takes an ObjectExpression node and adds all named Property nodes to the
    // current set of state fields.
    function addStateFields(node) {
      node.properties.filter((prop) => (
        prop.type === 'Property'
          && (prop.key.type === 'Literal'
          || (prop.key.type === 'TemplateLiteral' && prop.key.expressions.length === 0)
          || (prop.computed === false && prop.key.type === 'Identifier'))
          && getName(prop.key) !== null
      )).forEach((prop) => {
        classInfo.stateFields.add(prop);
      });
    }

    // Adds the name of the given node as a used state field if the node is an
    // Identifier or a Literal. Other node types are ignored.
    function addUsedStateField(node) {
      if (!classInfo) {
        return;
      }
      const name = getName(node);
      if (name) {
        classInfo.usedStateFields.add(name);
      }
    }

    // Records used state fields and new aliases for an ObjectPattern which
    // destructures `this.state`.
    function handleStateDestructuring(node) {
      node.properties.forEach((prop) => {
        if (prop.type === 'Property') {
          addUsedStateField(prop.key);
        } else if (
          (prop.type === 'ExperimentalRestProperty' || prop.type === 'RestElement')
          && classInfo.aliases
        ) {
          classInfo.aliases.add(getName(prop.argument));
        }
      });
    }

    // Used to record used state fields and new aliases for both
    // AssignmentExpressions and VariableDeclarators.
    function handleAssignment(left, right) {
      const unwrappedRight = astUtil.unwrapTSAsExpression(right);

      switch (left.type) {
        case 'Identifier':
          if (isStateReference(unwrappedRight) && classInfo.aliases) {
            classInfo.aliases.add(left.name);
          }
          break;
        case 'ObjectPattern':
          if (isStateReference(unwrappedRight)) {
            handleStateDestructuring(left);
          } else if (isThisExpression(unwrappedRight) && classInfo.aliases) {
            left.properties.forEach((prop) => {
              if (prop.type === 'Property' && getName(prop.key) === 'state') {
                const name = getName(prop.value);
                if (name) {
                  classInfo.aliases.add(name);
                } else if (prop.value.type === 'ObjectPattern') {
                  handleStateDestructuring(prop.value);
                }
              }
            });
          }
          break;
        default:
        // pass
      }
    }

    function reportUnusedFields() {
      // Report all unused state fields.
      classInfo.stateFields.forEach((node) => {
        const name = getName(node.key);
        if (!classInfo.usedStateFields.has(name)) {
          report(context, messages.unusedStateField, 'unusedStateField', {
            node,
            data: {
              name,
            },
          });
        }
      });
    }

    function handleES6ComponentEnter(node) {
      if (componentUtil.isES6Component(node, context)) {
        classInfo = getInitialClassInfo();
      }
    }

    function handleES6ComponentExit() {
      if (!classInfo) {
        return;
      }
      reportUnusedFields();
      classInfo = null;
    }

    function isGDSFP(node) {
      const name = getName(node.key);
      if (
        !node.static
        || name !== 'getDerivedStateFromProps'
        || !node.value
        || !node.value.params
        || node.value.params.length < 2 // no `state` argument
      ) {
        return false;
      }
      return true;
    }

    return {
      ClassDeclaration: handleES6ComponentEnter,

      'ClassDeclaration:exit': handleES6ComponentExit,

      ClassExpression: handleES6ComponentEnter,

      'ClassExpression:exit': handleES6ComponentExit,

      ObjectExpression(node) {
        if (componentUtil.isES5Component(node, context)) {
          classInfo = getInitialClassInfo();
        }
      },

      'ObjectExpression:exit'(node) {
        if (!classInfo) {
          return;
        }

        if (componentUtil.isES5Component(node, context)) {
          reportUnusedFields();
          classInfo = null;
        }
      },

      CallExpression(node) {
        if (!classInfo) {
          return;
        }

        const unwrappedNode = astUtil.unwrapTSAsExpression(node);
        const unwrappedArgumentNode = astUtil.unwrapTSAsExpression(unwrappedNode.arguments[0]);

        // If we're looking at a `this.setState({})` invocation, record all the
        // properties as state fields.
        if (
          isSetStateCall(unwrappedNode)
          && unwrappedNode.arguments.length > 0
          && unwrappedArgumentNode.type === 'ObjectExpression'
        ) {
          addStateFields(unwrappedArgumentNode);
        } else if (
          isSetStateCall(unwrappedNode)
          && unwrappedNode.arguments.length > 0
          && unwrappedArgumentNode.type === 'ArrowFunctionExpression'
        ) {
          const unwrappedBodyNode = astUtil.unwrapTSAsExpression(unwrappedArgumentNode.body);

          if (unwrappedBodyNode.type === 'ObjectExpression') {
            addStateFields(unwrappedBodyNode);
          }
          if (unwrappedArgumentNode.params.length > 0 && classInfo.aliases) {
            const firstParam = unwrappedArgumentNode.params[0];
            if (firstParam.type === 'ObjectPattern') {
              handleStateDestructuring(firstParam);
            } else {
              classInfo.aliases.add(getName(firstParam));
            }
          }
        }
      },

      'ClassProperty, PropertyDefinition'(node) {
        if (!classInfo) {
          return;
        }
        // If we see state being assigned as a class property using an object
        // expression, record all the fields of that object as state fields.
        const unwrappedValueNode = astUtil.unwrapTSAsExpression(node.value);

        const name = getName(node.key);
        if (
          name === 'state'
          && !node.static
          && unwrappedValueNode
          && unwrappedValueNode.type === 'ObjectExpression'
        ) {
          addStateFields(unwrappedValueNode);
        }

        if (
          !node.static
          && unwrappedValueNode
          && unwrappedValueNode.type === 'ArrowFunctionExpression'
        ) {
          // Create a new set for this.state aliases local to this method.
          classInfo.aliases = new Set();
        }
      },

      'ClassProperty:exit'(node) {
        if (
          classInfo
          && !node.static
          && node.value
          && node.value.type === 'ArrowFunctionExpression'
        ) {
          // Forget our set of local aliases.
          classInfo.aliases = null;
        }
      },

      'PropertyDefinition, ClassProperty'(node) {
        if (!isGDSFP(node)) {
          return;
        }

        const childScope = getScope(context, node).childScopes.find((x) => x.block === node.value);
        if (!childScope) {
          return;
        }
        const scope = childScope.variableScope.childScopes.find((x) => x.block === node.value);
        const stateArg = node.value.params[1]; // probably "state"
        if (!scope || !scope.variables) {
          return;
        }
        const argVar = scope.variables.find((x) => x.name === stateArg.name);

        if (argVar) {
          const stateRefs = argVar.references;

          stateRefs.forEach((ref) => {
            const identifier = ref.identifier;
            if (identifier && identifier.parent && identifier.parent.type === 'MemberExpression') {
              addUsedStateField(identifier.parent.property);
            }
          });
        }
      },

      'PropertyDefinition:exit'(node) {
        if (
          classInfo
          && !node.static
          && node.value
          && node.value.type === 'ArrowFunctionExpression'
          && !isGDSFP(node)
        ) {
          // Forget our set of local aliases.
          classInfo.aliases = null;
        }
      },

      MethodDefinition() {
        if (!classInfo) {
          return;
        }
        // Create a new set for this.state aliases local to this method.
        classInfo.aliases = new Set();
      },

      'MethodDefinition:exit'() {
        if (!classInfo) {
          return;
        }
        // Forget our set of local aliases.
        classInfo.aliases = null;
      },

      FunctionExpression(node) {
        if (!classInfo) {
          return;
        }

        const parent = node.parent;
        if (!componentUtil.isES5Component(parent.parent, context)) {
          return;
        }

        if (
          'key' in parent
          && 'name' in parent.key
          && parent.key.name === 'getInitialState'
        ) {
          const body = node.body.body;
          const lastBodyNode = body[body.length - 1];

          if (
            lastBodyNode.type === 'ReturnStatement'
            && lastBodyNode.argument.type === 'ObjectExpression'
          ) {
            addStateFields(lastBodyNode.argument);
          }
        } else {
          // Create a new set for this.state aliases local to this method.
          classInfo.aliases = new Set();
        }
      },

      AssignmentExpression(node) {
        if (!classInfo) {
          return;
        }

        const unwrappedLeft = astUtil.unwrapTSAsExpression(node.left);
        const unwrappedRight = astUtil.unwrapTSAsExpression(node.right);

        // Check for assignments like `this.state = {}`
        if (
          unwrappedLeft.type === 'MemberExpression'
          && isThisExpression(unwrappedLeft.object)
          && getName(unwrappedLeft.property) === 'state'
          && unwrappedRight.type === 'ObjectExpression'
        ) {
          // Find the nearest function expression containing this assignment.
          /** @type {import('eslint').Rule.Node} */
          let fn = node;
          while (fn.type !== 'FunctionExpression' && fn.parent) {
            fn = fn.parent;
          }
          // If the nearest containing function is the constructor, then we want
          // to record all the assigned properties as state fields.
          if (
            fn.parent
            && fn.parent.type === 'MethodDefinition'
            && fn.parent.kind === 'constructor'
          ) {
            addStateFields(unwrappedRight);
          }
        } else {
          // Check for assignments like `alias = this.state` and record the alias.
          handleAssignment(unwrappedLeft, unwrappedRight);
        }
      },

      VariableDeclarator(node) {
        if (!classInfo || !node.init) {
          return;
        }
        handleAssignment(node.id, node.init);
      },

      'MemberExpression, OptionalMemberExpression'(node) {
        if (!classInfo) {
          return;
        }
        if (isStateReference(astUtil.unwrapTSAsExpression(node.object))) {
          // If we see this.state[foo] access, give up.
          if (node.computed && node.property.type !== 'Literal') {
            classInfo = null;
            return;
          }
          // Otherwise, record that we saw this property being accessed.
          addUsedStateField(node.property);
        // If we see a `this.state` access in a CallExpression, give up.
        } else if (isStateReference(node) && astUtil.isCallExpression(node.parent)) {
          classInfo = null;
        }
      },

      JSXSpreadAttribute(node) {
        if (classInfo && isStateReference(node.argument)) {
          classInfo = null;
        }
      },

      'ExperimentalSpreadProperty, SpreadElement'(node) {
        if (classInfo && isStateReference(node.argument)) {
          classInfo = null;
        }
      },
    };
  },
};
