'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.stripIgnoredCharacters = stripIgnoredCharacters;

var _blockString = require('../language/blockString.js');

var _lexer = require('../language/lexer.js');

var _source = require('../language/source.js');

var _tokenKind = require('../language/tokenKind.js');

/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * ```graphql
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 * ```
 *
 * Becomes:
 *
 * ```graphql
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 * ```
 *
 * SDL example:
 *
 * ```graphql
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 * ```
 *
 * Becomes:
 *
 * ```graphql
 * """Type description""" type Foo{"""Field description""" bar:String}
 * ```
 */
function stripIgnoredCharacters(source) {
  const sourceObj = (0, _source.isSource)(source)
    ? source
    : new _source.Source(source);
  const body = sourceObj.body;
  const lexer = new _lexer.Lexer(sourceObj);
  let strippedBody = '';
  let wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== _tokenKind.TokenKind.EOF) {
    const currentToken = lexer.token;
    const tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    const isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(
      currentToken.kind,
    );

    if (wasLastAddedTokenNonPunctuator) {
      if (
        isNonPunctuator ||
        currentToken.kind === _tokenKind.TokenKind.SPREAD
      ) {
        strippedBody += ' ';
      }
    }

    const tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
      strippedBody += (0, _blockString.printBlockString)(currentToken.value, {
        minimize: true,
      });
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}
