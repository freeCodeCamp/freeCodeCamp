"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const reportOnViolation = (context, node, {
  maxSize: lineLimit = 50,
  allowedSnapshots = {}
}) => {
  const startLine = node.loc.start.line;
  const endLine = node.loc.end.line;
  const lineCount = endLine - startLine;
  const allPathsAreAbsolute = Object.keys(allowedSnapshots).every(_path.isAbsolute);

  if (!allPathsAreAbsolute) {
    throw new Error('All paths for allowedSnapshots must be absolute. You can use JS config and `path.resolve`');
  }

  let isAllowed = false;

  if (node.type === _experimentalUtils.AST_NODE_TYPES.ExpressionStatement && 'left' in node.expression && (0, _utils.isExpectMember)(node.expression.left)) {
    const fileName = context.getFilename();
    const allowedSnapshotsInFile = allowedSnapshots[fileName];

    if (allowedSnapshotsInFile) {
      const snapshotName = (0, _utils.getAccessorValue)(node.expression.left.property);
      isAllowed = allowedSnapshotsInFile.some(name => {
        if (name instanceof RegExp) {
          return name.test(snapshotName);
        }

        return snapshotName === name;
      });
    }
  }

  if (!isAllowed && lineCount > lineLimit) {
    context.report({
      messageId: lineLimit === 0 ? 'noSnapshot' : 'tooLongSnapshots',
      data: {
        lineLimit,
        lineCount
      },
      node
    });
  }
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'disallow large snapshots',
      recommended: false
    },
    messages: {
      noSnapshot: '`{{ lineCount }}`s should begin with lowercase',
      tooLongSnapshots: 'Expected Jest snapshot to be smaller than {{ lineLimit }} lines but was {{ lineCount }} lines long'
    },
    type: 'suggestion',
    schema: [{
      type: 'object',
      properties: {
        maxSize: {
          type: 'number'
        },
        inlineMaxSize: {
          type: 'number'
        },
        allowedSnapshots: {
          type: 'object',
          additionalProperties: {
            type: 'array'
          }
        }
      },
      additionalProperties: false
    }]
  },
  defaultOptions: [{}],

  create(context, [options]) {
    if (context.getFilename().endsWith('.snap')) {
      return {
        ExpressionStatement(node) {
          reportOnViolation(context, node, options);
        }

      };
    }

    return {
      CallExpression(node) {
        var _matcher$arguments;

        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          matcher
        } = (0, _utils.parseExpectCall)(node);

        if ((matcher === null || matcher === void 0 ? void 0 : matcher.node.parent.type) !== _experimentalUtils.AST_NODE_TYPES.CallExpression) {
          return;
        }

        if (['toMatchInlineSnapshot', 'toThrowErrorMatchingInlineSnapshot'].includes(matcher.name) && (_matcher$arguments = matcher.arguments) !== null && _matcher$arguments !== void 0 && _matcher$arguments.length) {
          var _options$inlineMaxSiz;

          reportOnViolation(context, matcher.arguments[0], { ...options,
            maxSize: (_options$inlineMaxSiz = options.inlineMaxSize) !== null && _options$inlineMaxSiz !== void 0 ? _options$inlineMaxSiz : options.maxSize
          });
        }
      }

    };
  }

});

exports.default = _default;