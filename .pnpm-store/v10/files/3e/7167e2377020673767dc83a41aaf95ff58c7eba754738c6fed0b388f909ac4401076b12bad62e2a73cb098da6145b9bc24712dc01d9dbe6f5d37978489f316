/**
 * @fileoverview Ensure symmetric naming of useState hook value and setter variables
 * @author Duncan Beevers
 */

'use strict';

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');
const getMessageData = require('../util/message');
const getText = require('../util/eslint').getText;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isNodeDestructuring(node) {
  return node && (node.type === 'ArrayPattern' || node.type === 'ObjectPattern');
}

const messages = {
  useStateErrorMessage: 'useState call is not destructured into value + setter pair',
  useStateErrorMessageOrAddOption: 'useState call is not destructured into value + setter pair (you can allow destructuring by enabling "allowDestructuredState" option)',
  suggestPair: 'Destructure useState call into value + setter pair',
  suggestMemo: 'Replace useState call with useMemo',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Ensure destructuring and symmetric naming of useState hook value and setter variables',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('hook-use-state'),
    },
    messages,
    schema: [{
      type: 'object',
      properties: {
        allowDestructuredState: {
          default: false,
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
    type: 'suggestion',
    hasSuggestions: true,
  },

  create: Components.detect((context, components, util) => {
    const configuration = context.options[0] || {};
    const allowDestructuredState = configuration.allowDestructuredState || false;

    return {
      CallExpression(node) {
        const isImmediateReturn = node.parent
          && node.parent.type === 'ReturnStatement';

        if (isImmediateReturn || !util.isReactHookCall(node, ['useState'])) {
          return;
        }

        const isDestructuringDeclarator = node.parent
          && node.parent.type === 'VariableDeclarator'
          && node.parent.id.type === 'ArrayPattern';

        if (!isDestructuringDeclarator) {
          report(
            context,
            messages.useStateErrorMessage,
            'useStateErrorMessage',
            {
              node,
              suggest: false,
            }
          );
          return;
        }

        const variableNodes = node.parent.id.elements;
        const valueVariable = variableNodes[0];
        const setterVariable = variableNodes[1];
        const isOnlyValueDestructuring = isNodeDestructuring(valueVariable) && !isNodeDestructuring(setterVariable);

        if (allowDestructuredState && isOnlyValueDestructuring) {
          return;
        }

        const valueVariableName = valueVariable
          ? valueVariable.name
          : undefined;

        const setterVariableName = setterVariable
          ? setterVariable.name
          : undefined;

        const caseCandidateMatch = valueVariableName ? valueVariableName.match(/(^[a-z]+)(.*)/) : undefined;
        const upperCaseCandidatePrefix = caseCandidateMatch ? caseCandidateMatch[1] : undefined;
        const caseCandidateSuffix = caseCandidateMatch ? caseCandidateMatch[2] : undefined;
        const expectedSetterVariableNames = upperCaseCandidatePrefix ? [
          `set${upperCaseCandidatePrefix.charAt(0).toUpperCase()}${upperCaseCandidatePrefix.slice(1)}${caseCandidateSuffix}`,
          `set${upperCaseCandidatePrefix.toUpperCase()}${caseCandidateSuffix}`,
        ] : [];

        const isSymmetricGetterSetterPair = valueVariable
          && setterVariable
          && expectedSetterVariableNames.indexOf(setterVariableName) !== -1
          && variableNodes.length === 2;

        if (!isSymmetricGetterSetterPair) {
          const suggestions = [
            Object.assign(
              getMessageData('suggestPair', messages.suggestPair),
              {
                fix(fixer) {
                  if (expectedSetterVariableNames.length > 0) {
                    return fixer.replaceTextRange(
                      node.parent.id.range,
                      `[${valueVariableName}, ${expectedSetterVariableNames[0]}]`
                    );
                  }
                },
              }
            ),
          ];

          const defaultReactImports = components.getDefaultReactImports();
          const defaultReactImportSpecifier = defaultReactImports
            ? defaultReactImports[0]
            : undefined;

          const defaultReactImportName = defaultReactImportSpecifier
            ? defaultReactImportSpecifier.local.name
            : undefined;

          const namedReactImports = components.getNamedReactImports();
          const useStateReactImportSpecifier = namedReactImports
            ? namedReactImports.find((specifier) => specifier.imported.name === 'useState')
            : undefined;

          const isSingleGetter = valueVariable && variableNodes.length === 1;
          const isUseStateCalledWithSingleArgument = node.arguments.length === 1;
          if (isSingleGetter && isUseStateCalledWithSingleArgument) {
            const useMemoReactImportSpecifier = namedReactImports
              && namedReactImports.find((specifier) => specifier.imported.name === 'useMemo');

            let useMemoCode;
            if (useMemoReactImportSpecifier) {
              useMemoCode = useMemoReactImportSpecifier.local.name;
            } else if (defaultReactImportName) {
              useMemoCode = `${defaultReactImportName}.useMemo`;
            } else {
              useMemoCode = 'useMemo';
            }

            suggestions.unshift(Object.assign(
              getMessageData('suggestMemo', messages.suggestMemo),
              {
                fix: (fixer) => [
                  // Add useMemo import, if necessary
                  useStateReactImportSpecifier
                    && (!useMemoReactImportSpecifier || defaultReactImportName)
                    && fixer.insertTextAfter(useStateReactImportSpecifier, ', useMemo'),
                  // Convert single-value destructure to simple assignment
                  fixer.replaceTextRange(node.parent.id.range, valueVariableName),
                  // Convert useState call to useMemo + arrow function + dependency array
                  fixer.replaceTextRange(
                    node.range,
                    `${useMemoCode}(() => ${getText(context, node.arguments[0])}, [])`
                  ),
                ].filter(Boolean),
              }
            ));
          }

          if (isOnlyValueDestructuring) {
            report(
              context,
              messages.useStateErrorMessageOrAddOption,
              'useStateErrorMessageOrAddOption',
              {
                node: node.parent.id,
                suggest: false,
              }
            );
            return;
          }

          report(
            context,
            messages.useStateErrorMessage,
            'useStateErrorMessage',
            {
              node: node.parent.id,
              suggest: suggestions,
            }
          );
        }
      },
    };
  }),
};
