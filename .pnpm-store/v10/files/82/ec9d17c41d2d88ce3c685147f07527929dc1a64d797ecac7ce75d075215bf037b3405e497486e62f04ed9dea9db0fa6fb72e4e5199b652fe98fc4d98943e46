/**
 * @fileoverview Validates whitespace in and around the JSX opening and closing brackets
 * @author Diogo Franco (Kovensky)
 */

'use strict';

const getTokenBeforeClosingBracket = require('../util/getTokenBeforeClosingBracket');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');
const eslintUtil = require('../util/eslint');

const getFirstTokens = eslintUtil.getFirstTokens;
const getSourceCode = eslintUtil.getSourceCode;

const messages = {
  selfCloseSlashNoSpace: 'Whitespace is forbidden between `/` and `>`; write `/>`',
  selfCloseSlashNeedSpace: 'Whitespace is required between `/` and `>`; write `/ >`',
  closeSlashNoSpace: 'Whitespace is forbidden between `<` and `/`; write `</`',
  closeSlashNeedSpace: 'Whitespace is required between `<` and `/`; write `< /`',
  beforeSelfCloseNoSpace: 'A space is forbidden before closing bracket',
  beforeSelfCloseNeedSpace: 'A space is required before closing bracket',
  beforeSelfCloseNeedNewline: 'A newline is required before closing bracket',
  afterOpenNoSpace: 'A space is forbidden after opening bracket',
  afterOpenNeedSpace: 'A space is required after opening bracket',
  beforeCloseNoSpace: 'A space is forbidden before closing bracket',
  beforeCloseNeedSpace: 'Whitespace is required before closing bracket',
  beforeCloseNeedNewline: 'A newline is required before closing bracket',
};

// ------------------------------------------------------------------------------
// Validators
// ------------------------------------------------------------------------------

function validateClosingSlash(context, node, option) {
  const sourceCode = getSourceCode(context);

  let adjacent;

  if (node.selfClosing) {
    const lastTokens = sourceCode.getLastTokens(node, 2);

    adjacent = !sourceCode.isSpaceBetweenTokens(lastTokens[0], lastTokens[1]);

    if (option === 'never') {
      if (!adjacent) {
        report(context, messages.selfCloseSlashNoSpace, 'selfCloseSlashNoSpace', {
          node,
          loc: {
            start: lastTokens[0].loc.start,
            end: lastTokens[1].loc.end,
          },
          fix(fixer) {
            return fixer.removeRange([lastTokens[0].range[1], lastTokens[1].range[0]]);
          },
        });
      }
    } else if (option === 'always' && adjacent) {
      report(context, messages.selfCloseSlashNeedSpace, 'selfCloseSlashNeedSpace', {
        node,
        loc: {
          start: lastTokens[0].loc.start,
          end: lastTokens[1].loc.end,
        },
        fix(fixer) {
          return fixer.insertTextBefore(lastTokens[1], ' ');
        },
      });
    }
  } else {
    const firstTokens = getFirstTokens(context, node, 2);

    adjacent = !sourceCode.isSpaceBetweenTokens(firstTokens[0], firstTokens[1]);

    if (option === 'never') {
      if (!adjacent) {
        report(context, messages.closeSlashNoSpace, 'closeSlashNoSpace', {
          node,
          loc: {
            start: firstTokens[0].loc.start,
            end: firstTokens[1].loc.end,
          },
          fix(fixer) {
            return fixer.removeRange([firstTokens[0].range[1], firstTokens[1].range[0]]);
          },
        });
      }
    } else if (option === 'always' && adjacent) {
      report(context, messages.closeSlashNeedSpace, 'closeSlashNeedSpace', {
        node,
        loc: {
          start: firstTokens[0].loc.start,
          end: firstTokens[1].loc.end,
        },
        fix(fixer) {
          return fixer.insertTextBefore(firstTokens[1], ' ');
        },
      });
    }
  }
}

function validateBeforeSelfClosing(context, node, option) {
  const sourceCode = getSourceCode(context);
  const leftToken = getTokenBeforeClosingBracket(node);
  const closingSlash = sourceCode.getTokenAfter(leftToken);

  if (node.loc.start.line !== node.loc.end.line && option === 'proportional-always') {
    if (leftToken.loc.end.line === closingSlash.loc.start.line) {
      report(context, messages.beforeSelfCloseNeedNewline, 'beforeSelfCloseNeedNewline', {
        node,
        loc: leftToken.loc.end,
        fix(fixer) {
          return fixer.insertTextBefore(closingSlash, '\n');
        },
      });
      return;
    }
  }

  if (leftToken.loc.end.line !== closingSlash.loc.start.line) {
    return;
  }

  const adjacent = !sourceCode.isSpaceBetweenTokens(leftToken, closingSlash);

  if ((option === 'always' || option === 'proportional-always') && adjacent) {
    report(context, messages.beforeSelfCloseNeedSpace, 'beforeSelfCloseNeedSpace', {
      node,
      loc: closingSlash.loc.start,
      fix(fixer) {
        return fixer.insertTextBefore(closingSlash, ' ');
      },
    });
  } else if (option === 'never' && !adjacent) {
    report(context, messages.beforeSelfCloseNoSpace, 'beforeSelfCloseNoSpace', {
      node,
      loc: closingSlash.loc.start,
      fix(fixer) {
        const previousToken = sourceCode.getTokenBefore(closingSlash);
        return fixer.removeRange([previousToken.range[1], closingSlash.range[0]]);
      },
    });
  }
}

function validateAfterOpening(context, node, option) {
  const sourceCode = getSourceCode(context);
  const openingToken = sourceCode.getTokenBefore(node.name);

  if (option === 'allow-multiline') {
    if (openingToken.loc.start.line !== node.name.loc.start.line) {
      return;
    }
  }

  const adjacent = !sourceCode.isSpaceBetweenTokens(openingToken, node.name);

  if (option === 'never' || option === 'allow-multiline') {
    if (!adjacent) {
      report(context, messages.afterOpenNoSpace, 'afterOpenNoSpace', {
        node,
        loc: {
          start: openingToken.loc.start,
          end: node.name.loc.start,
        },
        fix(fixer) {
          return fixer.removeRange([openingToken.range[1], node.name.range[0]]);
        },
      });
    }
  } else if (option === 'always' && adjacent) {
    report(context, messages.afterOpenNeedSpace, 'afterOpenNeedSpace', {
      node,
      loc: {
        start: openingToken.loc.start,
        end: node.name.loc.start,
      },
      fix(fixer) {
        return fixer.insertTextBefore(node.name, ' ');
      },
    });
  }
}

function validateBeforeClosing(context, node, option) {
  // Don't enforce this rule for self closing tags
  if (!node.selfClosing) {
    const sourceCode = getSourceCode(context);
    const leftToken = option === 'proportional-always'
      ? getTokenBeforeClosingBracket(node)
      : sourceCode.getLastTokens(node, 2)[0];
    const closingToken = sourceCode.getTokenAfter(leftToken);

    if (node.loc.start.line !== node.loc.end.line && option === 'proportional-always') {
      if (leftToken.loc.end.line === closingToken.loc.start.line) {
        report(context, messages.beforeCloseNeedNewline, 'beforeCloseNeedNewline', {
          node,
          loc: leftToken.loc.end,
          fix(fixer) {
            return fixer.insertTextBefore(closingToken, '\n');
          },
        });
        return;
      }
    }

    if (leftToken.loc.start.line !== closingToken.loc.start.line) {
      return;
    }

    const adjacent = !sourceCode.isSpaceBetweenTokens(leftToken, closingToken);

    if (option === 'never' && !adjacent) {
      report(context, messages.beforeCloseNoSpace, 'beforeCloseNoSpace', {
        node,
        loc: {
          start: leftToken.loc.end,
          end: closingToken.loc.start,
        },
        fix(fixer) {
          return fixer.removeRange([leftToken.range[1], closingToken.range[0]]);
        },
      });
    } else if (option === 'always' && adjacent) {
      report(context, messages.beforeCloseNeedSpace, 'beforeCloseNeedSpace', {
        node,
        loc: {
          start: leftToken.loc.end,
          end: closingToken.loc.start,
        },
        fix(fixer) {
          return fixer.insertTextBefore(closingToken, ' ');
        },
      });
    } else if (option === 'proportional-always' && node.type === 'JSXOpeningElement' && adjacent !== (node.loc.start.line === node.loc.end.line)) {
      report(context, messages.beforeCloseNeedSpace, 'beforeCloseNeedSpace', {
        node,
        loc: {
          start: leftToken.loc.end,
          end: closingToken.loc.start,
        },
        fix(fixer) {
          return fixer.insertTextBefore(closingToken, ' ');
        },
      });
    }
  }
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const optionDefaults = {
  closingSlash: 'never',
  beforeSelfClosing: 'always',
  afterOpening: 'never',
  beforeClosing: 'allow',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce whitespace in and around the JSX opening and closing brackets',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-tag-spacing'),
    },
    fixable: 'whitespace',

    messages,

    schema: [
      {
        type: 'object',
        properties: {
          closingSlash: {
            enum: ['always', 'never', 'allow'],
          },
          beforeSelfClosing: {
            enum: ['always', 'proportional-always', 'never', 'allow'],
          },
          afterOpening: {
            enum: ['always', 'allow-multiline', 'never', 'allow'],
          },
          beforeClosing: {
            enum: ['always', 'proportional-always', 'never', 'allow'],
          },
        },
        default: optionDefaults,
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const options = Object.assign({}, optionDefaults, context.options[0]);

    return {
      JSXOpeningElement(node) {
        if (options.closingSlash !== 'allow' && node.selfClosing) {
          validateClosingSlash(context, node, options.closingSlash);
        }
        if (options.afterOpening !== 'allow') {
          validateAfterOpening(context, node, options.afterOpening);
        }
        if (options.beforeSelfClosing !== 'allow' && node.selfClosing) {
          validateBeforeSelfClosing(context, node, options.beforeSelfClosing);
        }
        if (options.beforeClosing !== 'allow') {
          validateBeforeClosing(context, node, options.beforeClosing);
        }
      },
      JSXClosingElement(node) {
        if (options.afterOpening !== 'allow') {
          validateAfterOpening(context, node, options.afterOpening);
        }
        if (options.closingSlash !== 'allow') {
          validateClosingSlash(context, node, options.closingSlash);
        }
        if (options.beforeClosing !== 'allow') {
          validateBeforeClosing(context, node, options.beforeClosing);
        }
      },
    };
  },
};
