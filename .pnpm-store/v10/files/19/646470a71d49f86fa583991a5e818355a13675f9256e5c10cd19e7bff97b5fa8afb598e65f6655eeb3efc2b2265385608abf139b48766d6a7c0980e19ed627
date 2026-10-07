'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SchemaCoordinateLexer = void 0;

var _syntaxError = require('../error/syntaxError.js');

var _ast = require('./ast.js');

var _characterClasses = require('./characterClasses.js');

var _lexer = require('./lexer.js');

var _tokenKind = require('./tokenKind.js');

/**
 * Given a Source schema coordinate, creates a Lexer for that source.
 * A SchemaCoordinateLexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
class SchemaCoordinateLexer {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   * Since a schema coordinate may not contain newline, this value is always 1.
   */
  line = 1;
  /**
   * The character offset at which the current line begins.
   * Since a schema coordinate may not contain newline, this value is always 0.
   */

  lineStart = 0;

  constructor(source) {
    const startOfFileToken = new _ast.Token(
      _tokenKind.TokenKind.SOF,
      0,
      0,
      0,
      0,
    );
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
  }

  get [Symbol.toStringTag]() {
    return 'SchemaCoordinateLexer';
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */

  advance() {
    this.lastToken = this.token;
    const token = (this.token = this.lookahead());
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the current Lexer token.
   */

  lookahead() {
    let token = this.token;

    if (token.kind !== _tokenKind.TokenKind.EOF) {
      // Read the next token and form a link in the token linked-list.
      const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

      token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

      nextToken.prev = token;
      token = nextToken;
    }

    return token;
  }
}
/**
 * Gets the next token from the source starting at the given position.
 */

exports.SchemaCoordinateLexer = SchemaCoordinateLexer;

function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  const position = start;

  if (position < bodyLength) {
    const code = body.charCodeAt(position);

    switch (code) {
      case 0x002e:
        // .
        return (0, _lexer.createToken)(
          lexer,
          _tokenKind.TokenKind.DOT,
          position,
          position + 1,
        );

      case 0x0028:
        // (
        return (0, _lexer.createToken)(
          lexer,
          _tokenKind.TokenKind.PAREN_L,
          position,
          position + 1,
        );

      case 0x0029:
        // )
        return (0, _lexer.createToken)(
          lexer,
          _tokenKind.TokenKind.PAREN_R,
          position,
          position + 1,
        );

      case 0x003a:
        // :
        return (0, _lexer.createToken)(
          lexer,
          _tokenKind.TokenKind.COLON,
          position,
          position + 1,
        );

      case 0x0040:
        // @
        return (0, _lexer.createToken)(
          lexer,
          _tokenKind.TokenKind.AT,
          position,
          position + 1,
        );
    } // Name

    if ((0, _characterClasses.isNameStart)(code)) {
      return (0, _lexer.readName)(lexer, position);
    }

    throw (0, _syntaxError.syntaxError)(
      lexer.source,
      position,
      `Invalid character: ${(0, _lexer.printCodePointAt)(lexer, position)}.`,
    );
  }

  return (0, _lexer.createToken)(
    lexer,
    _tokenKind.TokenKind.EOF,
    bodyLength,
    bodyLength,
  );
}
