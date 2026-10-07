/**
 * Obtained originally from {@link https://github.com/eslint/eslint/blob/master/lib/util/source-code.js#L313}.
 *
 * @license MIT
 */

/**
 * @typedef {import('eslint').AST.Token | import('estree').Comment | {
 *   type: import('eslint').AST.TokenType|"Line"|"Block"|"Shebang",
 *   range: [number, number],
 *   value: string
 * }} Token
 */

/**
 * @typedef {import('eslint').Rule.Node|
 *   import('@typescript-eslint/types').TSESTree.Node} ESLintOrTSNode
 */

/**
 * @typedef {number} int
 */

/**
 * Checks if the given token is a comment token or not.
 *
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is a comment token.
 */
const isCommentToken = (token) => {
  return token.type === 'Line' || token.type === 'Block' ||
    token.type === 'Shebang';
};

/**
 * @param {(ESLintOrTSNode|import('estree').Comment) & {
 *   declaration?: any,
 *   decorators?: any[],
 *   parent?: import('eslint').Rule.Node & {
 *     decorators?: any[]
 *   }
 * }} node
 * @returns {import('@typescript-eslint/types').TSESTree.Decorator|undefined}
 */
const getDecorator = (node) => {
  return node?.declaration?.decorators?.[0] || node?.decorators?.[0] ||
      node?.parent?.decorators?.[0];
};

/**
 * Check to see if it is a ES6 export declaration.
 *
 * @param {ESLintOrTSNode} astNode An AST node.
 * @returns {boolean} whether the given node represents an export declaration.
 * @private
 */
const looksLikeExport = function (astNode) {
  return astNode.type === 'ExportDefaultDeclaration' ||
    astNode.type === 'ExportNamedDeclaration' ||
    astNode.type === 'ExportAllDeclaration' ||
    astNode.type === 'ExportSpecifier';
};

/**
 * @param {ESLintOrTSNode} astNode
 * @returns {ESLintOrTSNode}
 */
const getTSFunctionComment = function (astNode) {
  const {parent} = astNode;
  /* v8 ignore next 3 */
  if (!parent) {
    return astNode;
  }
  const grandparent = parent.parent;
  /* v8 ignore next 3 */
  if (!grandparent) {
    return astNode;
  }
  const greatGrandparent = grandparent.parent;
  const greatGreatGrandparent = greatGrandparent && greatGrandparent.parent;

  /* v8 ignore next 3 */
  if (/** @type {ESLintOrTSNode} */ (parent).type !== 'TSTypeAnnotation') {
    return astNode;
  }

  switch (/** @type {ESLintOrTSNode} */ (grandparent).type) {
  // @ts-expect-error -- For `ClassProperty`.
  case 'PropertyDefinition': case 'ClassProperty':
  case 'TSDeclareFunction':
  case 'TSMethodSignature':
  case 'TSPropertySignature':
    return grandparent;
  case 'ArrowFunctionExpression':
    /* v8 ignore next 3 */
    if (!greatGrandparent) {
      return astNode;
    }

    if (
      greatGrandparent.type === 'VariableDeclarator'

    // && greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      /* v8 ignore next 3 */
      if (!greatGreatGrandparent || !greatGreatGrandparent.parent) {
        return astNode;
      }
      return greatGreatGrandparent.parent;
    }
    /* v8 ignore next */
    return astNode;
  case 'FunctionExpression':
    /* v8 ignore next 3 */
    if (!greatGreatGrandparent) {
      return astNode;
    }
    if (greatGrandparent.type === 'MethodDefinition') {
      return greatGrandparent;
    }

  // Fallthrough
  default:
    /* v8 ignore next 3 */
    if (grandparent.type !== 'Identifier') {
      return astNode;
    }
  }

  /* v8 ignore next 3 */
  if (!greatGreatGrandparent) {
    return astNode;
  }

  switch (greatGrandparent.type) {
  case 'ArrowFunctionExpression':
    if (
      greatGreatGrandparent.type === 'VariableDeclarator' &&
      greatGreatGrandparent.parent.type === 'VariableDeclaration'
    ) {
      return greatGreatGrandparent.parent;
    }

    return astNode;
  case 'FunctionDeclaration':
    return greatGrandparent;
  case 'VariableDeclarator':
    if (greatGreatGrandparent.type === 'VariableDeclaration') {
      return greatGreatGrandparent;
    }
    /* v8 ignore next 2 */
    // Fallthrough
  default:
    /* v8 ignore next 3 */
    return astNode;
  }
};

const invokedExpression = new Set(
  ['CallExpression', 'OptionalCallExpression', 'NewExpression']
);
const allowableCommentNode = new Set([
  'AssignmentPattern',
  'VariableDeclaration',
  'ExpressionStatement',
  'MethodDefinition',
  'Property',
  'ObjectProperty',
  'ClassProperty',
  'PropertyDefinition',
  'ExportDefaultDeclaration',
  'ReturnStatement'
]);

/**
 * Reduces the provided node to the appropriate node for evaluating
 * JSDoc comment status.
 *
 * @param {ESLintOrTSNode} node An AST node.
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode.
 * @returns {ESLintOrTSNode} The AST node that
 *   can be evaluated for appropriate JSDoc comments.
 */
const getReducedASTNode = function (node, sourceCode) {
  let {parent} = node;

  switch (/** @type {ESLintOrTSNode} */ (node).type) {
  case 'TSFunctionType':
    return getTSFunctionComment(node);
  case 'TSInterfaceDeclaration':
  case 'TSTypeAliasDeclaration':
  case 'TSEnumDeclaration':
  case 'ClassDeclaration':
  case 'FunctionDeclaration':
    /* v8 ignore next 3 */
    if (!parent) {
      return node;
    }
    return looksLikeExport(parent) ? parent : node;

  case 'TSDeclareFunction':
  case 'ClassExpression':
  case 'ObjectExpression':
  case 'ArrowFunctionExpression':
  case 'TSEmptyBodyFunctionExpression':
  case 'FunctionExpression':
    /* v8 ignore next 3 */
    if (!parent) {
      return node;
    }
    if (
      !invokedExpression.has(parent.type)
    ) {
      /**
       * @type {ESLintOrTSNode|Token|null}
       */
      let token = node;
      do {
        token = sourceCode.getTokenBefore(
          /** @type {import('eslint').Rule.Node|import('eslint').AST.Token} */ (
            token
          ),
          {includeComments: true}
        );
      } while (token && token.type === 'Punctuator' && token.value === '(');
      if (token && token.type === 'Block') {
        return node;
      }

      if (sourceCode.getCommentsBefore(
        /** @type {import('eslint').Rule.Node} */
        (node)
      ).length) {
        return node;
      }

      while (
        !sourceCode.getCommentsBefore(
          /** @type {import('eslint').Rule.Node} */
          (parent)
        ).length &&
        !(/Function/u).test(parent.type) &&
        !allowableCommentNode.has(parent.type)
      ) {
        ({parent} = parent);

        if (!parent) {
          break;
        }
      }
      if (parent && parent.type !== 'FunctionDeclaration' &&
        parent.type !== 'Program'
      ) {
        if (parent.parent && parent.parent.type === 'ExportNamedDeclaration') {
          return parent.parent;
        }

        return parent;
      }
    }

    return node;

  default:
    return node;
  }
};

/**
 * Checks for the presence of a JSDoc comment for the given node and returns it.
 *
 * @param {ESLintOrTSNode} astNode The AST node to get
 *   the comment for.
 * @param {import('eslint').SourceCode} sourceCode
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings
 * @param {{nonJSDoc?: boolean}} [opts]
 * @returns {Token|null} The Block comment token containing the JSDoc comment
 *    for the given node or null if not found.
 */
const findJSDocComment = (astNode, sourceCode, settings, opts = {}) => {
  const {nonJSDoc} = opts;
  const {minLines, maxLines} = settings;

  /** @type {ESLintOrTSNode|import('estree').Comment} */
  let currentNode = astNode;
  let tokenBefore = null;
  let parenthesisToken = null;

  while (currentNode) {
    const decorator = getDecorator(
      /** @type {import('eslint').Rule.Node} */
      (currentNode)
    );
    if (decorator) {
      const dec = /** @type {unknown} */ (decorator);
      currentNode = /** @type {import('eslint').Rule.Node} */ (dec);
    }
    tokenBefore = sourceCode.getTokenBefore(
      /** @type {import('eslint').Rule.Node} */
      (currentNode),
      {includeComments: true}
    );
    if (
      tokenBefore && tokenBefore.type === 'Punctuator' &&
      tokenBefore.value === '('
    ) {
      parenthesisToken = tokenBefore;
      [tokenBefore] = sourceCode.getTokensBefore(
        /** @type {import('eslint').Rule.Node} */
        (currentNode),
        {
          count: 2,
          includeComments: true
        }
      );
    }
    if (!tokenBefore || !isCommentToken(tokenBefore)) {
      return null;
    }
    if (!nonJSDoc && tokenBefore.type === 'Line') {
      currentNode = tokenBefore;
      continue;
    }
    break;
  }

  /* v8 ignore next 3 */
  if (!tokenBefore || !currentNode.loc || !tokenBefore.loc) {
    return null;
  }

  if (
    (
      (nonJSDoc && (tokenBefore.type !== 'Block' ||
        !(/^\*\s/u).test(tokenBefore.value))) ||
      (!nonJSDoc && tokenBefore.type === 'Block' &&
      (/^\*\s/u).test(tokenBefore.value))
    ) &&
    currentNode.loc.start.line - (
      /** @type {import('eslint').AST.Token} */
      (parenthesisToken ?? tokenBefore)
    ).loc.end.line >= minLines &&
    currentNode.loc.start.line - (
      /** @type {import('eslint').AST.Token} */
      (parenthesisToken ?? tokenBefore)
    ).loc.end.line <= maxLines
  ) {
    return tokenBefore;
  }

  return null;
};

/**
 * Retrieves the JSDoc comment for a given node.
 *
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode
 * @param {import('eslint').Rule.Node} node The AST node to get
 *   the comment for.
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings The
 *   settings in context
 * @returns {Token|null} The Block comment
 *   token containing the JSDoc comment for the given node or
 *   null if not found.
 * @public
 */
const getJSDocComment = function (sourceCode, node, settings) {
  const reducedNode = getReducedASTNode(node, sourceCode);

  return findJSDocComment(reducedNode, sourceCode, settings);
};

/**
 * Retrieves the comment preceding a given node.
 *
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode
 * @param {ESLintOrTSNode} node The AST node to get
 *   the comment for.
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings The
 *   settings in context
 * @returns {Token|null} The Block comment
 *   token containing the JSDoc comment for the given node or
 *   null if not found.
 * @public
 */
const getNonJsdocComment = function (sourceCode, node, settings) {
  const reducedNode = getReducedASTNode(node, sourceCode);

  return findJSDocComment(reducedNode, sourceCode, settings, {
    nonJSDoc: true
  });
};

/**
  * @param {ESLintOrTSNode|import('eslint').AST.Token|
  *   import('estree').Comment
  * } nodeA The AST node or token to compare
  * @param {ESLintOrTSNode|import('eslint').AST.Token|
  *   import('estree').Comment} nodeB The
  *   AST node or token to compare
  */
const compareLocEndToStart = (nodeA, nodeB) => {
  /* v8 ignore next */
  return (nodeA.loc?.end.line ?? 0) === (nodeB.loc?.start.line ?? 0);
};

/**
 * Checks for the presence of a comment following the given node and
 * returns it.
 *
 * This method is experimental.
 *
 * @param {import('eslint').SourceCode} sourceCode
 * @param {ESLintOrTSNode} astNode The AST node to get
 *   the comment for.
 * @returns {Token|null} The comment token containing the comment
 *    for the given node or null if not found.
 */
const getFollowingComment = function (sourceCode, astNode) {
  /**
   * @param {ESLintOrTSNode} node The
   *   AST node to get the comment for.
   */
  const getTokensAfterIgnoringSemis = (node) => {
    let tokenAfter = sourceCode.getTokenAfter(
      /** @type {import('eslint').Rule.Node} */
      (node),
      {includeComments: true}
    );

    while (
      tokenAfter && tokenAfter.type === 'Punctuator' &&
      // tokenAfter.value === ')' // Don't apparently need to ignore
      tokenAfter.value === ';'
    ) {
      [tokenAfter] = sourceCode.getTokensAfter(tokenAfter, {
        includeComments: true
      });
    }
    return tokenAfter;
  };

  /**
   * @param {ESLintOrTSNode} node The
   *   AST node to get the comment for.
   */
  const tokenAfterIgnoringSemis = (node) => {
    const tokenAfter = getTokensAfterIgnoringSemis(node);
    return (
      tokenAfter &&
      isCommentToken(tokenAfter) &&
      compareLocEndToStart(node, tokenAfter)
    )
      ? tokenAfter
      : null;
  };

  let tokenAfter = tokenAfterIgnoringSemis(astNode);

  if (!tokenAfter) {
    switch (astNode.type) {
    case 'FunctionDeclaration':
      tokenAfter = tokenAfterIgnoringSemis(
        /** @type {ESLintOrTSNode} */
        (astNode.body)
      );
      break;
    case 'ExpressionStatement':
      tokenAfter = tokenAfterIgnoringSemis(
        /** @type {ESLintOrTSNode} */
        (astNode.expression)
      );
      break;

    /* v8 ignore next 3 */
    default:
      break;
    }
  }

  return tokenAfter;
};

export {
  getReducedASTNode, getJSDocComment, getNonJsdocComment,
  getDecorator, findJSDocComment, getFollowingComment
};
