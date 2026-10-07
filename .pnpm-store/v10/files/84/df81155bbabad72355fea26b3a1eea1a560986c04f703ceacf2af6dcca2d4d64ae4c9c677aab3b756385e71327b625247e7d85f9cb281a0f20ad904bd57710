define("vs/jsonMode-CCwfh_OB", ["module", "exports", "./workers-p6mTW5Va", "./lspLanguageFeatures-BnY_dL8Y", "./editor.api-CykLys8L"], (function(module, exports, workers, lspLanguageFeatures, editor_api) {
  "use strict";
  const STOP_WHEN_IDLE_FOR = 2 * 60 * 1e3;
  class WorkerManager {
    constructor(defaults) {
      this._defaults = defaults;
      this._worker = null;
      this._client = null;
      this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3);
      this._lastUsedTime = 0;
      this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
    }
    _stopWorker() {
      if (this._worker) {
        this._worker.dispose();
        this._worker = null;
      }
      this._client = null;
    }
    dispose() {
      clearInterval(this._idleCheckInterval);
      this._configChangeListener.dispose();
      this._stopWorker();
    }
    _checkIfIdle() {
      if (!this._worker) {
        return;
      }
      let timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
      if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
        this._stopWorker();
      }
    }
    _getClient() {
      this._lastUsedTime = Date.now();
      if (!this._client) {
        this._worker = workers.createWebWorker({
          // module that exports the create() method and returns a `JSONWorker` instance
          moduleId: "vs/language/json/jsonWorker",
          createWorker: () => new Worker(new URL(
            /* @vite-ignore */
            "" + new URL(require.toUrl("./assets/json.worker-CvNsV1ln.js"), document.baseURI).href,
            new URL(module.uri, document.baseURI).href
          ), { type: "module" }),
          label: this._defaults.languageId,
          // passed in to the create() method
          createData: {
            languageSettings: this._defaults.diagnosticsOptions,
            languageId: this._defaults.languageId,
            enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
          }
        });
        this._client = this._worker.getProxy();
      }
      return this._client;
    }
    getLanguageServiceWorker(...resources) {
      let _client;
      return this._getClient().then((client) => {
        _client = client;
      }).then((_) => {
        if (this._worker) {
          return this._worker.withSyncedResources(resources);
        }
      }).then((_) => _client);
    }
  }
  function createScanner$1(text, ignoreTrivia = false) {
    const len = text.length;
    let pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
    function scanHexDigits(count, exact) {
      let digits = 0;
      let value2 = 0;
      while (digits < count || false) {
        let ch = text.charCodeAt(pos);
        if (ch >= 48 && ch <= 57) {
          value2 = value2 * 16 + ch - 48;
        } else if (ch >= 65 && ch <= 70) {
          value2 = value2 * 16 + ch - 65 + 10;
        } else if (ch >= 97 && ch <= 102) {
          value2 = value2 * 16 + ch - 97 + 10;
        } else {
          break;
        }
        pos++;
        digits++;
      }
      if (digits < count) {
        value2 = -1;
      }
      return value2;
    }
    function setPosition(newPosition) {
      pos = newPosition;
      value = "";
      tokenOffset = 0;
      token = 16;
      scanError = 0;
    }
    function scanNumber() {
      let start = pos;
      if (text.charCodeAt(pos) === 48) {
        pos++;
      } else {
        pos++;
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
        }
      }
      if (pos < text.length && text.charCodeAt(pos) === 46) {
        pos++;
        if (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
          while (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
          }
        } else {
          scanError = 3;
          return text.substring(start, pos);
        }
      }
      let end = pos;
      if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
        pos++;
        if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) {
          pos++;
        }
        if (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
          while (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
          }
          end = pos;
        } else {
          scanError = 3;
        }
      }
      return text.substring(start, end);
    }
    function scanString() {
      let result = "", start = pos;
      while (true) {
        if (pos >= len) {
          result += text.substring(start, pos);
          scanError = 2;
          break;
        }
        const ch = text.charCodeAt(pos);
        if (ch === 34) {
          result += text.substring(start, pos);
          pos++;
          break;
        }
        if (ch === 92) {
          result += text.substring(start, pos);
          pos++;
          if (pos >= len) {
            scanError = 2;
            break;
          }
          const ch2 = text.charCodeAt(pos++);
          switch (ch2) {
            case 34:
              result += '"';
              break;
            case 92:
              result += "\\";
              break;
            case 47:
              result += "/";
              break;
            case 98:
              result += "\b";
              break;
            case 102:
              result += "\f";
              break;
            case 110:
              result += "\n";
              break;
            case 114:
              result += "\r";
              break;
            case 116:
              result += "	";
              break;
            case 117:
              const ch3 = scanHexDigits(4);
              if (ch3 >= 0) {
                result += String.fromCharCode(ch3);
              } else {
                scanError = 4;
              }
              break;
            default:
              scanError = 5;
          }
          start = pos;
          continue;
        }
        if (ch >= 0 && ch <= 31) {
          if (isLineBreak(ch)) {
            result += text.substring(start, pos);
            scanError = 2;
            break;
          } else {
            scanError = 6;
          }
        }
        pos++;
      }
      return result;
    }
    function scanNext() {
      value = "";
      scanError = 0;
      tokenOffset = pos;
      lineStartOffset = lineNumber;
      prevTokenLineStartOffset = tokenLineStartOffset;
      if (pos >= len) {
        tokenOffset = len;
        return token = 17;
      }
      let code = text.charCodeAt(pos);
      if (isWhiteSpace(code)) {
        do {
          pos++;
          value += String.fromCharCode(code);
          code = text.charCodeAt(pos);
        } while (isWhiteSpace(code));
        return token = 15;
      }
      if (isLineBreak(code)) {
        pos++;
        value += String.fromCharCode(code);
        if (code === 13 && text.charCodeAt(pos) === 10) {
          pos++;
          value += "\n";
        }
        lineNumber++;
        tokenLineStartOffset = pos;
        return token = 14;
      }
      switch (code) {
        // tokens: []{}:,
        case 123:
          pos++;
          return token = 1;
        case 125:
          pos++;
          return token = 2;
        case 91:
          pos++;
          return token = 3;
        case 93:
          pos++;
          return token = 4;
        case 58:
          pos++;
          return token = 6;
        case 44:
          pos++;
          return token = 5;
        // strings
        case 34:
          pos++;
          value = scanString();
          return token = 10;
        // comments
        case 47:
          const start = pos - 1;
          if (text.charCodeAt(pos + 1) === 47) {
            pos += 2;
            while (pos < len) {
              if (isLineBreak(text.charCodeAt(pos))) {
                break;
              }
              pos++;
            }
            value = text.substring(start, pos);
            return token = 12;
          }
          if (text.charCodeAt(pos + 1) === 42) {
            pos += 2;
            const safeLength = len - 1;
            let commentClosed = false;
            while (pos < safeLength) {
              const ch = text.charCodeAt(pos);
              if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
                pos += 2;
                commentClosed = true;
                break;
              }
              pos++;
              if (isLineBreak(ch)) {
                if (ch === 13 && text.charCodeAt(pos) === 10) {
                  pos++;
                }
                lineNumber++;
                tokenLineStartOffset = pos;
              }
            }
            if (!commentClosed) {
              pos++;
              scanError = 1;
            }
            value = text.substring(start, pos);
            return token = 13;
          }
          value += String.fromCharCode(code);
          pos++;
          return token = 16;
        // numbers
        case 45:
          value += String.fromCharCode(code);
          pos++;
          if (pos === len || !isDigit(text.charCodeAt(pos))) {
            return token = 16;
          }
        // found a minus, followed by a number so
        // we fall through to proceed with scanning
        // numbers
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          value += scanNumber();
          return token = 11;
        // literals and unknown symbols
        default:
          while (pos < len && isUnknownContentCharacter(code)) {
            pos++;
            code = text.charCodeAt(pos);
          }
          if (tokenOffset !== pos) {
            value = text.substring(tokenOffset, pos);
            switch (value) {
              case "true":
                return token = 8;
              case "false":
                return token = 9;
              case "null":
                return token = 7;
            }
            return token = 16;
          }
          value += String.fromCharCode(code);
          pos++;
          return token = 16;
      }
    }
    function isUnknownContentCharacter(code) {
      if (isWhiteSpace(code) || isLineBreak(code)) {
        return false;
      }
      switch (code) {
        case 125:
        case 93:
        case 123:
        case 91:
        case 34:
        case 58:
        case 44:
        case 47:
          return false;
      }
      return true;
    }
    function scanNextNonTrivia() {
      let result;
      do {
        result = scanNext();
      } while (result >= 12 && result <= 15);
      return result;
    }
    return {
      setPosition,
      getPosition: () => pos,
      scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
      getToken: () => token,
      getTokenValue: () => value,
      getTokenOffset: () => tokenOffset,
      getTokenLength: () => pos - tokenOffset,
      getTokenStartLine: () => lineStartOffset,
      getTokenStartCharacter: () => tokenOffset - prevTokenLineStartOffset,
      getTokenError: () => scanError
    };
  }
  function isWhiteSpace(ch) {
    return ch === 32 || ch === 9;
  }
  function isLineBreak(ch) {
    return ch === 10 || ch === 13;
  }
  function isDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  var CharacterCodes;
  (function(CharacterCodes2) {
    CharacterCodes2[CharacterCodes2["lineFeed"] = 10] = "lineFeed";
    CharacterCodes2[CharacterCodes2["carriageReturn"] = 13] = "carriageReturn";
    CharacterCodes2[CharacterCodes2["space"] = 32] = "space";
    CharacterCodes2[CharacterCodes2["_0"] = 48] = "_0";
    CharacterCodes2[CharacterCodes2["_1"] = 49] = "_1";
    CharacterCodes2[CharacterCodes2["_2"] = 50] = "_2";
    CharacterCodes2[CharacterCodes2["_3"] = 51] = "_3";
    CharacterCodes2[CharacterCodes2["_4"] = 52] = "_4";
    CharacterCodes2[CharacterCodes2["_5"] = 53] = "_5";
    CharacterCodes2[CharacterCodes2["_6"] = 54] = "_6";
    CharacterCodes2[CharacterCodes2["_7"] = 55] = "_7";
    CharacterCodes2[CharacterCodes2["_8"] = 56] = "_8";
    CharacterCodes2[CharacterCodes2["_9"] = 57] = "_9";
    CharacterCodes2[CharacterCodes2["a"] = 97] = "a";
    CharacterCodes2[CharacterCodes2["b"] = 98] = "b";
    CharacterCodes2[CharacterCodes2["c"] = 99] = "c";
    CharacterCodes2[CharacterCodes2["d"] = 100] = "d";
    CharacterCodes2[CharacterCodes2["e"] = 101] = "e";
    CharacterCodes2[CharacterCodes2["f"] = 102] = "f";
    CharacterCodes2[CharacterCodes2["g"] = 103] = "g";
    CharacterCodes2[CharacterCodes2["h"] = 104] = "h";
    CharacterCodes2[CharacterCodes2["i"] = 105] = "i";
    CharacterCodes2[CharacterCodes2["j"] = 106] = "j";
    CharacterCodes2[CharacterCodes2["k"] = 107] = "k";
    CharacterCodes2[CharacterCodes2["l"] = 108] = "l";
    CharacterCodes2[CharacterCodes2["m"] = 109] = "m";
    CharacterCodes2[CharacterCodes2["n"] = 110] = "n";
    CharacterCodes2[CharacterCodes2["o"] = 111] = "o";
    CharacterCodes2[CharacterCodes2["p"] = 112] = "p";
    CharacterCodes2[CharacterCodes2["q"] = 113] = "q";
    CharacterCodes2[CharacterCodes2["r"] = 114] = "r";
    CharacterCodes2[CharacterCodes2["s"] = 115] = "s";
    CharacterCodes2[CharacterCodes2["t"] = 116] = "t";
    CharacterCodes2[CharacterCodes2["u"] = 117] = "u";
    CharacterCodes2[CharacterCodes2["v"] = 118] = "v";
    CharacterCodes2[CharacterCodes2["w"] = 119] = "w";
    CharacterCodes2[CharacterCodes2["x"] = 120] = "x";
    CharacterCodes2[CharacterCodes2["y"] = 121] = "y";
    CharacterCodes2[CharacterCodes2["z"] = 122] = "z";
    CharacterCodes2[CharacterCodes2["A"] = 65] = "A";
    CharacterCodes2[CharacterCodes2["B"] = 66] = "B";
    CharacterCodes2[CharacterCodes2["C"] = 67] = "C";
    CharacterCodes2[CharacterCodes2["D"] = 68] = "D";
    CharacterCodes2[CharacterCodes2["E"] = 69] = "E";
    CharacterCodes2[CharacterCodes2["F"] = 70] = "F";
    CharacterCodes2[CharacterCodes2["G"] = 71] = "G";
    CharacterCodes2[CharacterCodes2["H"] = 72] = "H";
    CharacterCodes2[CharacterCodes2["I"] = 73] = "I";
    CharacterCodes2[CharacterCodes2["J"] = 74] = "J";
    CharacterCodes2[CharacterCodes2["K"] = 75] = "K";
    CharacterCodes2[CharacterCodes2["L"] = 76] = "L";
    CharacterCodes2[CharacterCodes2["M"] = 77] = "M";
    CharacterCodes2[CharacterCodes2["N"] = 78] = "N";
    CharacterCodes2[CharacterCodes2["O"] = 79] = "O";
    CharacterCodes2[CharacterCodes2["P"] = 80] = "P";
    CharacterCodes2[CharacterCodes2["Q"] = 81] = "Q";
    CharacterCodes2[CharacterCodes2["R"] = 82] = "R";
    CharacterCodes2[CharacterCodes2["S"] = 83] = "S";
    CharacterCodes2[CharacterCodes2["T"] = 84] = "T";
    CharacterCodes2[CharacterCodes2["U"] = 85] = "U";
    CharacterCodes2[CharacterCodes2["V"] = 86] = "V";
    CharacterCodes2[CharacterCodes2["W"] = 87] = "W";
    CharacterCodes2[CharacterCodes2["X"] = 88] = "X";
    CharacterCodes2[CharacterCodes2["Y"] = 89] = "Y";
    CharacterCodes2[CharacterCodes2["Z"] = 90] = "Z";
    CharacterCodes2[CharacterCodes2["asterisk"] = 42] = "asterisk";
    CharacterCodes2[CharacterCodes2["backslash"] = 92] = "backslash";
    CharacterCodes2[CharacterCodes2["closeBrace"] = 125] = "closeBrace";
    CharacterCodes2[CharacterCodes2["closeBracket"] = 93] = "closeBracket";
    CharacterCodes2[CharacterCodes2["colon"] = 58] = "colon";
    CharacterCodes2[CharacterCodes2["comma"] = 44] = "comma";
    CharacterCodes2[CharacterCodes2["dot"] = 46] = "dot";
    CharacterCodes2[CharacterCodes2["doubleQuote"] = 34] = "doubleQuote";
    CharacterCodes2[CharacterCodes2["minus"] = 45] = "minus";
    CharacterCodes2[CharacterCodes2["openBrace"] = 123] = "openBrace";
    CharacterCodes2[CharacterCodes2["openBracket"] = 91] = "openBracket";
    CharacterCodes2[CharacterCodes2["plus"] = 43] = "plus";
    CharacterCodes2[CharacterCodes2["slash"] = 47] = "slash";
    CharacterCodes2[CharacterCodes2["formFeed"] = 12] = "formFeed";
    CharacterCodes2[CharacterCodes2["tab"] = 9] = "tab";
  })(CharacterCodes || (CharacterCodes = {}));
  new Array(20).fill(0).map((_, index) => {
    return " ".repeat(index);
  });
  const maxCachedValues = 200;
  ({
    " ": {
      "\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\n" + " ".repeat(index);
      }),
      "\r": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r" + " ".repeat(index);
      }),
      "\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r\n" + " ".repeat(index);
      })
    },
    "	": {
      "\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\n" + "	".repeat(index);
      }),
      "\r": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r" + "	".repeat(index);
      }),
      "\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r\n" + "	".repeat(index);
      })
    }
  });
  var ParseOptions;
  (function(ParseOptions2) {
    ParseOptions2.DEFAULT = {
      allowTrailingComma: false
    };
  })(ParseOptions || (ParseOptions = {}));
  const createScanner = createScanner$1;
  var ScanError;
  (function(ScanError2) {
    ScanError2[ScanError2["None"] = 0] = "None";
    ScanError2[ScanError2["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
    ScanError2[ScanError2["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
    ScanError2[ScanError2["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
    ScanError2[ScanError2["InvalidUnicode"] = 4] = "InvalidUnicode";
    ScanError2[ScanError2["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
    ScanError2[ScanError2["InvalidCharacter"] = 6] = "InvalidCharacter";
  })(ScanError || (ScanError = {}));
  var SyntaxKind;
  (function(SyntaxKind2) {
    SyntaxKind2[SyntaxKind2["OpenBraceToken"] = 1] = "OpenBraceToken";
    SyntaxKind2[SyntaxKind2["CloseBraceToken"] = 2] = "CloseBraceToken";
    SyntaxKind2[SyntaxKind2["OpenBracketToken"] = 3] = "OpenBracketToken";
    SyntaxKind2[SyntaxKind2["CloseBracketToken"] = 4] = "CloseBracketToken";
    SyntaxKind2[SyntaxKind2["CommaToken"] = 5] = "CommaToken";
    SyntaxKind2[SyntaxKind2["ColonToken"] = 6] = "ColonToken";
    SyntaxKind2[SyntaxKind2["NullKeyword"] = 7] = "NullKeyword";
    SyntaxKind2[SyntaxKind2["TrueKeyword"] = 8] = "TrueKeyword";
    SyntaxKind2[SyntaxKind2["FalseKeyword"] = 9] = "FalseKeyword";
    SyntaxKind2[SyntaxKind2["StringLiteral"] = 10] = "StringLiteral";
    SyntaxKind2[SyntaxKind2["NumericLiteral"] = 11] = "NumericLiteral";
    SyntaxKind2[SyntaxKind2["LineCommentTrivia"] = 12] = "LineCommentTrivia";
    SyntaxKind2[SyntaxKind2["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
    SyntaxKind2[SyntaxKind2["LineBreakTrivia"] = 14] = "LineBreakTrivia";
    SyntaxKind2[SyntaxKind2["Trivia"] = 15] = "Trivia";
    SyntaxKind2[SyntaxKind2["Unknown"] = 16] = "Unknown";
    SyntaxKind2[SyntaxKind2["EOF"] = 17] = "EOF";
  })(SyntaxKind || (SyntaxKind = {}));
  var ParseErrorCode;
  (function(ParseErrorCode2) {
    ParseErrorCode2[ParseErrorCode2["InvalidSymbol"] = 1] = "InvalidSymbol";
    ParseErrorCode2[ParseErrorCode2["InvalidNumberFormat"] = 2] = "InvalidNumberFormat";
    ParseErrorCode2[ParseErrorCode2["PropertyNameExpected"] = 3] = "PropertyNameExpected";
    ParseErrorCode2[ParseErrorCode2["ValueExpected"] = 4] = "ValueExpected";
    ParseErrorCode2[ParseErrorCode2["ColonExpected"] = 5] = "ColonExpected";
    ParseErrorCode2[ParseErrorCode2["CommaExpected"] = 6] = "CommaExpected";
    ParseErrorCode2[ParseErrorCode2["CloseBraceExpected"] = 7] = "CloseBraceExpected";
    ParseErrorCode2[ParseErrorCode2["CloseBracketExpected"] = 8] = "CloseBracketExpected";
    ParseErrorCode2[ParseErrorCode2["EndOfFileExpected"] = 9] = "EndOfFileExpected";
    ParseErrorCode2[ParseErrorCode2["InvalidCommentToken"] = 10] = "InvalidCommentToken";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfComment"] = 11] = "UnexpectedEndOfComment";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfString"] = 12] = "UnexpectedEndOfString";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfNumber"] = 13] = "UnexpectedEndOfNumber";
    ParseErrorCode2[ParseErrorCode2["InvalidUnicode"] = 14] = "InvalidUnicode";
    ParseErrorCode2[ParseErrorCode2["InvalidEscapeCharacter"] = 15] = "InvalidEscapeCharacter";
    ParseErrorCode2[ParseErrorCode2["InvalidCharacter"] = 16] = "InvalidCharacter";
  })(ParseErrorCode || (ParseErrorCode = {}));
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
      case 2:
        line = '"' + line;
        numberOfInsertedCharacters = 1;
        break;
      case 1:
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
      if (kind === 17) {
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
        case 1:
          parents = ParentsStack.push(
            parents,
            0
            /* Object */
          );
          type = TOKEN_DELIM_OBJECT;
          lastWasColon = false;
          break;
        case 2:
          parents = ParentsStack.pop(parents);
          type = TOKEN_DELIM_OBJECT;
          lastWasColon = false;
          break;
        case 3:
          parents = ParentsStack.push(
            parents,
            1
            /* Array */
          );
          type = TOKEN_DELIM_ARRAY;
          lastWasColon = false;
          break;
        case 4:
          parents = ParentsStack.pop(parents);
          type = TOKEN_DELIM_ARRAY;
          lastWasColon = false;
          break;
        case 6:
          type = TOKEN_DELIM_COLON;
          lastWasColon = true;
          break;
        case 5:
          type = TOKEN_DELIM_COMMA;
          lastWasColon = false;
          break;
        case 8:
        case 9:
          type = TOKEN_VALUE_BOOLEAN;
          lastWasColon = false;
          break;
        case 7:
          type = TOKEN_VALUE_NULL;
          lastWasColon = false;
          break;
        case 10:
          const currentParent = parents ? parents.type : 0;
          const inArray = currentParent === 1;
          type = lastWasColon || inArray ? TOKEN_VALUE_STRING : TOKEN_PROPERTY_NAME;
          lastWasColon = false;
          break;
        case 11:
          type = TOKEN_VALUE_NUMBER;
          lastWasColon = false;
          break;
      }
      {
        switch (kind) {
          case 12:
            type = TOKEN_COMMENT_LINE;
            break;
          case 13:
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
  let worker;
  function getWorker() {
    return new Promise((resolve, reject) => {
      if (!worker) {
        return reject("JSON not registered!");
      }
      resolve(worker);
    });
  }
  class JSONDiagnosticsAdapter extends lspLanguageFeatures.DiagnosticsAdapter {
    constructor(languageId, worker2, defaults) {
      super(languageId, worker2, defaults.onDidChange);
      this._disposables.push(
        editor_api.editor.onWillDisposeModel((model) => {
          this._resetSchema(model.uri);
        })
      );
      this._disposables.push(
        editor_api.editor.onDidChangeModelLanguage((event) => {
          this._resetSchema(event.model.uri);
        })
      );
    }
    _resetSchema(resource) {
      this._worker().then((worker2) => {
        worker2.resetSchema(resource.toString());
      });
    }
  }
  function setupMode(defaults) {
    const disposables = [];
    const providers = [];
    const client = new WorkerManager(defaults);
    disposables.push(client);
    worker = (...uris) => {
      return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
      const { languageId, modeConfiguration: modeConfiguration2 } = defaults;
      disposeAll(providers);
      if (modeConfiguration2.documentFormattingEdits) {
        providers.push(
          editor_api.languages.registerDocumentFormattingEditProvider(
            languageId,
            new lspLanguageFeatures.DocumentFormattingEditProvider(worker)
          )
        );
      }
      if (modeConfiguration2.documentRangeFormattingEdits) {
        providers.push(
          editor_api.languages.registerDocumentRangeFormattingEditProvider(
            languageId,
            new lspLanguageFeatures.DocumentRangeFormattingEditProvider(worker)
          )
        );
      }
      if (modeConfiguration2.completionItems) {
        providers.push(
          editor_api.languages.registerCompletionItemProvider(
            languageId,
            new lspLanguageFeatures.CompletionAdapter(worker, [" ", ":", '"'])
          )
        );
      }
      if (modeConfiguration2.hovers) {
        providers.push(
          editor_api.languages.registerHoverProvider(languageId, new lspLanguageFeatures.HoverAdapter(worker))
        );
      }
      if (modeConfiguration2.documentSymbols) {
        providers.push(
          editor_api.languages.registerDocumentSymbolProvider(
            languageId,
            new lspLanguageFeatures.DocumentSymbolAdapter(worker)
          )
        );
      }
      if (modeConfiguration2.tokens) {
        providers.push(editor_api.languages.setTokensProvider(languageId, createTokenizationSupport(true)));
      }
      if (modeConfiguration2.colors) {
        providers.push(
          editor_api.languages.registerColorProvider(
            languageId,
            new lspLanguageFeatures.DocumentColorAdapter(worker)
          )
        );
      }
      if (modeConfiguration2.foldingRanges) {
        providers.push(
          editor_api.languages.registerFoldingRangeProvider(
            languageId,
            new lspLanguageFeatures.FoldingRangeAdapter(worker)
          )
        );
      }
      if (modeConfiguration2.diagnostics) {
        providers.push(new JSONDiagnosticsAdapter(languageId, worker, defaults));
      }
      if (modeConfiguration2.selectionRanges) {
        providers.push(
          editor_api.languages.registerSelectionRangeProvider(
            languageId,
            new lspLanguageFeatures.SelectionRangeAdapter(worker)
          )
        );
      }
    }
    registerProviders();
    disposables.push(editor_api.languages.setLanguageConfiguration(defaults.languageId, richEditConfiguration));
    let modeConfiguration = defaults.modeConfiguration;
    defaults.onDidChange((newDefaults) => {
      if (newDefaults.modeConfiguration !== modeConfiguration) {
        modeConfiguration = newDefaults.modeConfiguration;
        registerProviders();
      }
    });
    disposables.push(asDisposable(providers));
    return asDisposable(disposables);
  }
  function asDisposable(disposables) {
    return { dispose: () => disposeAll(disposables) };
  }
  function disposeAll(disposables) {
    while (disposables.length) {
      disposables.pop().dispose();
    }
  }
  const richEditConfiguration = {
    wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"]
    },
    brackets: [
      ["{", "}"],
      ["[", "]"]
    ],
    autoClosingPairs: [
      { open: "{", close: "}", notIn: ["string"] },
      { open: "[", close: "]", notIn: ["string"] },
      { open: '"', close: '"', notIn: ["string"] }
    ]
  };
  exports.CompletionAdapter = lspLanguageFeatures.CompletionAdapter;
  exports.DefinitionAdapter = lspLanguageFeatures.DefinitionAdapter;
  exports.DiagnosticsAdapter = lspLanguageFeatures.DiagnosticsAdapter;
  exports.DocumentColorAdapter = lspLanguageFeatures.DocumentColorAdapter;
  exports.DocumentFormattingEditProvider = lspLanguageFeatures.DocumentFormattingEditProvider;
  exports.DocumentHighlightAdapter = lspLanguageFeatures.DocumentHighlightAdapter;
  exports.DocumentLinkAdapter = lspLanguageFeatures.DocumentLinkAdapter;
  exports.DocumentRangeFormattingEditProvider = lspLanguageFeatures.DocumentRangeFormattingEditProvider;
  exports.DocumentSymbolAdapter = lspLanguageFeatures.DocumentSymbolAdapter;
  exports.FoldingRangeAdapter = lspLanguageFeatures.FoldingRangeAdapter;
  exports.HoverAdapter = lspLanguageFeatures.HoverAdapter;
  exports.ReferenceAdapter = lspLanguageFeatures.ReferenceAdapter;
  exports.RenameAdapter = lspLanguageFeatures.RenameAdapter;
  exports.SelectionRangeAdapter = lspLanguageFeatures.SelectionRangeAdapter;
  exports.fromPosition = lspLanguageFeatures.fromPosition;
  exports.fromRange = lspLanguageFeatures.fromRange;
  exports.toRange = lspLanguageFeatures.toRange;
  exports.toTextEdit = lspLanguageFeatures.toTextEdit;
  exports.WorkerManager = WorkerManager;
  exports.getWorker = getWorker;
  exports.setupMode = setupMode;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
