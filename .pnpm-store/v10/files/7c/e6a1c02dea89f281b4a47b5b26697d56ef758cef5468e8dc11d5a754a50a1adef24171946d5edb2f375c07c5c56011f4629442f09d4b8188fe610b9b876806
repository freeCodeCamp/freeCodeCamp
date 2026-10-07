import { printBlockString } from '../language/blockString.mjs';
import { isPunctuatorTokenKind, Lexer } from '../language/lexer.mjs';
import { isSource, Source } from '../language/source.mjs';
import { TokenKind } from '../language/tokenKind.mjs';
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

export function stripIgnoredCharacters(source) {
  const sourceObj = isSource(source) ? source : new Source(source);
  const body = sourceObj.body;
  const lexer = new Lexer(sourceObj);
  let strippedBody = '';
  let wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== TokenKind.EOF) {
    const currentToken = lexer.token;
    const tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    const isNonPunctuator = !isPunctuatorTokenKind(currentToken.kind);

    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === TokenKind.SPREAD) {
        strippedBody += ' ';
      }
    }

    const tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === TokenKind.BLOCK_STRING) {
      strippedBody += printBlockString(currentToken.value, {
        minimize: true,
      });
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}
