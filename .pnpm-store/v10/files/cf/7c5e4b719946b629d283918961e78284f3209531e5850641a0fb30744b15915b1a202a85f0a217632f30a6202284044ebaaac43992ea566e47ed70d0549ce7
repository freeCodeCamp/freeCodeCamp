import { createScanner } from '../../../external/jsonc-parser/lib/esm/main.js';

function createTokenizationSupport(supportComments) {
  return {
    getInitialState: () => new JSONState(null, null, false, null),
    tokenize: (line, state) => tokenize(supportComments, line, state)
  };
}
const TOKEN_DELIM_OBJECT = "delimiter.bracket.json";
const TOKEN_DELIM_ARRAY = "delimiter.array.json";
const TOKEN_DELIM_COLON = "delimiter.colon.json";
const TOKEN_DELIM_COMMA = "delimiter.comma.json";
const TOKEN_VALUE_BOOLEAN = "keyword.json";
const TOKEN_VALUE_NULL = "keyword.json";
const TOKEN_VALUE_STRING = "string.value.json";
const TOKEN_VALUE_NUMBER = "number.json";
const TOKEN_PROPERTY_NAME = "string.key.json";
const TOKEN_COMMENT_BLOCK = "comment.block.json";
const TOKEN_COMMENT_LINE = "comment.line.json";
class ParentsStack {
  constructor(parent, type) {
    this.parent = parent;
    this.type = type;
  }
  static pop(parents) {
    if (parents) {
      return parents.parent;
    }
    return null;
  }
  static push(parents, type) {
    return new ParentsStack(parents, type);
  }
  static equals(a, b) {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    while (a && b) {
      if (a === b) {
        return true;
      }
      if (a.type !== b.type) {
        return false;
      }
      a = a.parent;
      b = b.parent;
    }
    return true;
  }
}
class JSONState {
  constructor(state, scanError, lastWasColon, parents) {
    this._state = state;
    this.scanError = scanError;
    this.lastWasColon = lastWasColon;
    this.parents = parents;
  }
  clone() {
    return new JSONState(this._state, this.scanError, this.lastWasColon, this.parents);
  }
  equals(other) {
    if (other === this) {
      return true;
    }
    if (!other || !(other instanceof JSONState)) {
      return false;
    }
    return this.scanError === other.scanError && this.lastWasColon === other.lastWasColon && ParentsStack.equals(this.parents, other.parents);
  }
  getStateData() {
    return this._state;
  }
  setStateData(state) {
    this._state = state;
  }
}
function tokenize(comments, line, state, offsetDelta = 0) {
  let numberOfInsertedCharacters = 0;
  let adjustOffset = false;
  switch (state.scanError) {
    case 2 /* UnexpectedEndOfString */:
      line = '"' + line;
      numberOfInsertedCharacters = 1;
      break;
    case 1 /* UnexpectedEndOfComment */:
      line = "/*" + line;
      numberOfInsertedCharacters = 2;
      break;
  }
  const scanner = createScanner(line);
  let lastWasColon = state.lastWasColon;
  let parents = state.parents;
  const ret = {
    tokens: [],
    endState: state.clone()
  };
  while (true) {
    let offset = offsetDelta + scanner.getPosition();
    let type = "";
    const kind = scanner.scan();
    if (kind === 17 /* EOF */) {
      break;
    }
    if (offset === offsetDelta + scanner.getPosition()) {
      throw new Error(
        "Scanner did not advance, next 3 characters are: " + line.substr(scanner.getPosition(), 3)
      );
    }
    if (adjustOffset) {
      offset -= numberOfInsertedCharacters;
    }
    adjustOffset = numberOfInsertedCharacters > 0;
    switch (kind) {
      case 1 /* OpenBraceToken */:
        parents = ParentsStack.push(parents, 0 /* Object */);
        type = TOKEN_DELIM_OBJECT;
        lastWasColon = false;
        break;
      case 2 /* CloseBraceToken */:
        parents = ParentsStack.pop(parents);
        type = TOKEN_DELIM_OBJECT;
        lastWasColon = false;
        break;
      case 3 /* OpenBracketToken */:
        parents = ParentsStack.push(parents, 1 /* Array */);
        type = TOKEN_DELIM_ARRAY;
        lastWasColon = false;
        break;
      case 4 /* CloseBracketToken */:
        parents = ParentsStack.pop(parents);
        type = TOKEN_DELIM_ARRAY;
        lastWasColon = false;
        break;
      case 6 /* ColonToken */:
        type = TOKEN_DELIM_COLON;
        lastWasColon = true;
        break;
      case 5 /* CommaToken */:
        type = TOKEN_DELIM_COMMA;
        lastWasColon = false;
        break;
      case 8 /* TrueKeyword */:
      case 9 /* FalseKeyword */:
        type = TOKEN_VALUE_BOOLEAN;
        lastWasColon = false;
        break;
      case 7 /* NullKeyword */:
        type = TOKEN_VALUE_NULL;
        lastWasColon = false;
        break;
      case 10 /* StringLiteral */:
        const currentParent = parents ? parents.type : 0 /* Object */;
        const inArray = currentParent === 1 /* Array */;
        type = lastWasColon || inArray ? TOKEN_VALUE_STRING : TOKEN_PROPERTY_NAME;
        lastWasColon = false;
        break;
      case 11 /* NumericLiteral */:
        type = TOKEN_VALUE_NUMBER;
        lastWasColon = false;
        break;
    }
    {
      switch (kind) {
        case 12 /* LineCommentTrivia */:
          type = TOKEN_COMMENT_LINE;
          break;
        case 13 /* BlockCommentTrivia */:
          type = TOKEN_COMMENT_BLOCK;
          break;
      }
    }
    ret.endState = new JSONState(
      state.getStateData(),
      scanner.getTokenError(),
      lastWasColon,
      parents
    );
    ret.tokens.push({
      startIndex: offset,
      scopes: type
    });
  }
  return ret;
}

export { TOKEN_COMMENT_BLOCK, TOKEN_COMMENT_LINE, TOKEN_DELIM_ARRAY, TOKEN_DELIM_COLON, TOKEN_DELIM_COMMA, TOKEN_DELIM_OBJECT, TOKEN_PROPERTY_NAME, TOKEN_VALUE_BOOLEAN, TOKEN_VALUE_NULL, TOKEN_VALUE_NUMBER, TOKEN_VALUE_STRING, createTokenizationSupport };
