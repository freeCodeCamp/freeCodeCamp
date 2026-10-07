"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _detectJestVersion = require("./detectJestVersion");

var _utils = require("./utils");

const parseJestVersion = rawVersion => {
  if (typeof rawVersion === 'number') {
    return rawVersion;
  }

  const [majorVersion] = rawVersion.split('.');
  return parseInt(majorVersion, 10);
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow use of deprecated functions',
      recommended: 'error'
    },
    messages: {
      deprecatedFunction: '`{{ deprecation }}` has been deprecated in favor of `{{ replacement }}`'
    },
    type: 'suggestion',
    schema: [],
    fixable: 'code'
  },
  defaultOptions: [],

  create(context) {
    var _context$settings, _context$settings$jes;

    const jestVersion = parseJestVersion(((_context$settings = context.settings) === null || _context$settings === void 0 ? void 0 : (_context$settings$jes = _context$settings.jest) === null || _context$settings$jes === void 0 ? void 0 : _context$settings$jes.version) || (0, _detectJestVersion.detectJestVersion)());
    const deprecations = { ...(jestVersion >= 15 && {
        'jest.resetModuleRegistry': 'jest.resetModules'
      }),
      ...(jestVersion >= 17 && {
        'jest.addMatchers': 'expect.extend'
      }),
      ...(jestVersion >= 21 && {
        'require.requireMock': 'jest.requireMock',
        'require.requireActual': 'jest.requireActual'
      }),
      ...(jestVersion >= 22 && {
        'jest.runTimersToTime': 'jest.advanceTimersByTime'
      }),
      ...(jestVersion >= 26 && {
        'jest.genMockFromModule': 'jest.createMockFromModule'
      })
    };
    return {
      CallExpression(node) {
        if (node.callee.type !== _experimentalUtils.AST_NODE_TYPES.MemberExpression) {
          return;
        }

        const deprecation = (0, _utils.getNodeName)(node);

        if (!deprecation || !(deprecation in deprecations)) {
          return;
        }

        const replacement = deprecations[deprecation];
        const {
          callee
        } = node;
        context.report({
          messageId: 'deprecatedFunction',
          data: {
            deprecation,
            replacement
          },
          node,

          fix(fixer) {
            let [name, func] = replacement.split('.');

            if (callee.property.type === _experimentalUtils.AST_NODE_TYPES.Literal) {
              func = `'${func}'`;
            }

            return [fixer.replaceText(callee.object, name), fixer.replaceText(callee.property, func)];
          }

        });
      }

    };
  }

});

exports.default = _default;