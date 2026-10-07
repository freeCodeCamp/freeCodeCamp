/**
 * @fileoverview Enforce consistent usage of destructuring assignment of props, state, and context.
 */

'use strict';

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const eslintUtil = require('../util/eslint');
const isAssignmentLHS = require('../util/ast').isAssignmentLHS;
const report = require('../util/report');

const getScope = eslintUtil.getScope;
const getText = eslintUtil.getText;

const DEFAULT_OPTION = 'always';

function createSFCParams() {
  const queue = [];

  return {
    push(params) {
      queue.unshift(params);
    },
    pop() {
      queue.shift();
    },
    propsName() {
      const found = queue.find((params) => {
        const props = params[0];
        return props && !props.destructuring && props.name;
      });
      return found && found[0] && found[0].name;
    },
    contextName() {
      const found = queue.find((params) => {
        const context = params[1];
        return context && !context.destructuring && context.name;
      });
      return found && found[1] && found[1].name;
    },
  };
}

function evalParams(params) {
  return params.map((param) => ({
    destructuring: param.type === 'ObjectPattern',
    name: param.type === 'Identifier' && param.name,
  }));
}

const messages = {
  noDestructPropsInSFCArg: 'Must never use destructuring props assignment in SFC argument',
  noDestructContextInSFCArg: 'Must never use destructuring context assignment in SFC argument',
  noDestructAssignment: 'Must never use destructuring {{type}} assignment',
  useDestructAssignment: 'Must use destructuring {{type}} assignment',
  destructureInSignature: 'Must destructure props in the function signature.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce consistent usage of destructuring assignment of props, state, and context',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('destructuring-assignment'),
    },
    fixable: 'code',
    messages,

    schema: [{
      type: 'string',
      enum: [
        'always',
        'never',
      ],
    }, {
      type: 'object',
      properties: {
        ignoreClassFields: {
          type: 'boolean',
        },
        destructureInSignature: {
          type: 'string',
          enum: [
            'always',
            'ignore',
          ],
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components, utils) => {
    const configuration = context.options[0] || DEFAULT_OPTION;
    const ignoreClassFields = (context.options[1] && (context.options[1].ignoreClassFields === true)) || false;
    const destructureInSignature = (context.options[1] && context.options[1].destructureInSignature) || 'ignore';
    const sfcParams = createSFCParams();

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function handleStatelessComponent(node) {
      const params = evalParams(node.params);

      const SFCComponent = components.get(getScope(context, node).block);
      if (!SFCComponent) {
        return;
      }
      sfcParams.push(params);

      if (params[0] && params[0].destructuring && components.get(node) && configuration === 'never') {
        report(context, messages.noDestructPropsInSFCArg, 'noDestructPropsInSFCArg', {
          node,
        });
      } else if (params[1] && params[1].destructuring && components.get(node) && configuration === 'never') {
        report(context, messages.noDestructContextInSFCArg, 'noDestructContextInSFCArg', {
          node,
        });
      }
    }

    function handleStatelessComponentExit(node) {
      const SFCComponent = components.get(getScope(context, node).block);
      if (SFCComponent) {
        sfcParams.pop();
      }
    }

    function handleSFCUsage(node) {
      const propsName = sfcParams.propsName();
      const contextName = sfcParams.contextName();
      // props.aProp || context.aProp
      const isPropUsed = (
        (propsName && node.object.name === propsName)
          || (contextName && node.object.name === contextName)
      )
        && !isAssignmentLHS(node);
      if (isPropUsed && configuration === 'always' && !node.optional) {
        report(context, messages.useDestructAssignment, 'useDestructAssignment', {
          node,
          data: {
            type: node.object.name,
          },
        });
      }
    }

    function isInClassProperty(node) {
      let curNode = node.parent;
      while (curNode) {
        if (curNode.type === 'ClassProperty' || curNode.type === 'PropertyDefinition') {
          return true;
        }
        curNode = curNode.parent;
      }
      return false;
    }

    function handleClassUsage(node) {
      // this.props.Aprop || this.context.aProp || this.state.aState
      const isPropUsed = (
        node.object.type === 'MemberExpression' && node.object.object.type === 'ThisExpression'
        && (node.object.property.name === 'props' || node.object.property.name === 'context' || node.object.property.name === 'state')
        && !isAssignmentLHS(node)
      );

      if (
        isPropUsed && configuration === 'always'
        && !(ignoreClassFields && isInClassProperty(node))
      ) {
        report(context, messages.useDestructAssignment, 'useDestructAssignment', {
          node,
          data: {
            type: node.object.property.name,
          },
        });
      }
    }

    // valid-jsdoc cannot read function types
    // eslint-disable-next-line valid-jsdoc
    /**
     * Find a parent that satisfy the given predicate
     * @param {ASTNode} node
     * @param {(node: ASTNode) => boolean} predicate
     * @returns {ASTNode | undefined}
     */
    function findParent(node, predicate) {
      let n = node;
      while (n) {
        if (predicate(n)) {
          return n;
        }
        n = n.parent;
      }
      return undefined;
    }

    return {

      FunctionDeclaration: handleStatelessComponent,

      ArrowFunctionExpression: handleStatelessComponent,

      FunctionExpression: handleStatelessComponent,

      'FunctionDeclaration:exit': handleStatelessComponentExit,

      'ArrowFunctionExpression:exit': handleStatelessComponentExit,

      'FunctionExpression:exit': handleStatelessComponentExit,

      MemberExpression(node) {
        const SFCComponent = utils.getParentStatelessComponent(node);
        if (SFCComponent) {
          handleSFCUsage(node);
        }

        const classComponent = utils.getParentComponent(node);
        if (classComponent) {
          handleClassUsage(node);
        }
      },

      TSQualifiedName(node) {
        if (configuration !== 'always') {
          return;
        }
        // handle `typeof props.a.b`
        if (node.left.type === 'Identifier'
          && node.left.name === sfcParams.propsName()
          && findParent(node, (n) => n.type === 'TSTypeQuery')
          && utils.getParentStatelessComponent(node)
        ) {
          report(context, messages.useDestructAssignment, 'useDestructAssignment', {
            node,
            data: {
              type: 'props',
            },
          });
        }
      },

      VariableDeclarator(node) {
        const classComponent = utils.getParentComponent(node);
        const SFCComponent = components.get(getScope(context, node).block);

        const destructuring = (node.init && node.id && node.id.type === 'ObjectPattern');
        // let {foo} = props;
        const destructuringSFC = destructuring && (node.init.name === 'props' || node.init.name === 'context');
        // let {foo} = this.props;
        const destructuringClass = destructuring && node.init.object && node.init.object.type === 'ThisExpression' && (
          node.init.property.name === 'props' || node.init.property.name === 'context' || node.init.property.name === 'state'
        );

        if (SFCComponent && destructuringSFC && configuration === 'never') {
          report(context, messages.noDestructAssignment, 'noDestructAssignment', {
            node,
            data: {
              type: node.init.name,
            },
          });
        }

        if (
          classComponent && destructuringClass && configuration === 'never'
          && !(ignoreClassFields && (node.parent.type === 'ClassProperty' || node.parent.type === 'PropertyDefinition'))
        ) {
          report(context, messages.noDestructAssignment, 'noDestructAssignment', {
            node,
            data: {
              type: node.init.property.name,
            },
          });
        }

        if (
          SFCComponent
          && destructuringSFC
          && configuration === 'always'
          && destructureInSignature === 'always'
          && node.init.name === 'props'
        ) {
          const scopeSetProps = getScope(context, node).set.get('props');
          const propsRefs = scopeSetProps && scopeSetProps.references;
          if (!propsRefs) {
            return;
          }

          // Skip if props is used elsewhere
          if (propsRefs.length > 1) {
            return;
          }
          report(context, messages.destructureInSignature, 'destructureInSignature', {
            node,
            fix(fixer) {
              const param = SFCComponent.node.params[0];
              if (!param) {
                return;
              }
              const replaceRange = [
                param.range[0],
                param.typeAnnotation ? param.typeAnnotation.range[0] : param.range[1],
              ];
              return [
                fixer.replaceTextRange(replaceRange, getText(context, node.id)),
                fixer.remove(node.parent),
              ];
            },
          });
        }
      },
    };
  }),
};
