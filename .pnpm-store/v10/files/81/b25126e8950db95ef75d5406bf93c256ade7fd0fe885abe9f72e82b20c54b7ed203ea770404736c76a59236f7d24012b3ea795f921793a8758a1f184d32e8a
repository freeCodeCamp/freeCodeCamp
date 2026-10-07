"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const spaceIndents = [];
for (let i = 0; i < 32; i++) {
  spaceIndents.push(" ".repeat(i * 2));
}
class Buffer {
  constructor(map, indentChar) {
    this._map = null;
    this._buf = "";
    this._str = "";
    this._appendCount = 0;
    this._last = 0;
    this._canMarkIdName = true;
    this._indentChar = "";
    this._queuedChar = 0;
    this._position = {
      line: 1,
      column: 0
    };
    this._sourcePosition = {
      identifierName: undefined,
      identifierNamePos: undefined,
      line: undefined,
      column: undefined,
      filename: undefined
    };
    this._map = map;
    this._indentChar = indentChar;
  }
  get() {
    const {
      _map,
      _last
    } = this;
    if (this._queuedChar !== 32) {
      this._flush();
    }
    const code = _last === 10 ? (this._buf + this._str).trimRight() : this._buf + this._str;
    if (_map === null) {
      return {
        code: code,
        decodedMap: undefined,
        map: null,
        rawMappings: undefined
      };
    }
    const result = {
      code: code,
      decodedMap: _map.getDecoded(),
      get __mergedMap() {
        return this.map;
      },
      get map() {
        const resultMap = _map.get();
        result.map = resultMap;
        return resultMap;
      },
      set map(value) {
        Object.defineProperty(result, "map", {
          value,
          writable: true
        });
      },
      get rawMappings() {
        const mappings = _map.getRawMappings();
        result.rawMappings = mappings;
        return mappings;
      },
      set rawMappings(value) {
        Object.defineProperty(result, "rawMappings", {
          value,
          writable: true
        });
      }
    };
    return result;
  }
  append(str, maybeNewline) {
    this._flush();
    this._append(str, maybeNewline);
  }
  appendChar(char) {
    this._flush();
    this._appendChar(char, 1, true);
  }
  queue(char) {
    this._flush();
    this._queuedChar = char;
  }
  _flush() {
    const queuedChar = this._queuedChar;
    if (queuedChar !== 0) {
      this._appendChar(queuedChar, 1, true);
      this._queuedChar = 0;
    }
  }
  _appendChar(char, repeat, useSourcePos) {
    this._last = char;
    if (char === -1) {
      const indent = repeat >= 64 ? this._indentChar.repeat(repeat) : spaceIndents[repeat / 2];
      this._str += indent;
    } else {
      this._str += repeat > 1 ? String.fromCharCode(char).repeat(repeat) : String.fromCharCode(char);
    }
    const isSpace = char === 32;
    const position = this._position;
    if (char !== 10) {
      if (this._map) {
        const sourcePos = this._sourcePosition;
        if (useSourcePos && sourcePos) {
          this._map.mark(position, sourcePos.line, sourcePos.column, isSpace ? undefined : sourcePos.identifierName, isSpace ? undefined : sourcePos.identifierNamePos, sourcePos.filename);
          if (!isSpace && this._canMarkIdName) {
            sourcePos.identifierName = undefined;
            sourcePos.identifierNamePos = undefined;
          }
        } else {
          this._map.mark(position);
        }
      }
      position.column += repeat;
    } else {
      position.line++;
      position.column = 0;
    }
  }
  _append(str, maybeNewline) {
    const len = str.length;
    const position = this._position;
    const sourcePos = this._sourcePosition;
    this._last = -1;
    if (++this._appendCount > 4096) {
      +this._str;
      this._buf += this._str;
      this._str = str;
      this._appendCount = 0;
    } else {
      this._str += str;
    }
    const hasMap = this._map !== null;
    if (!maybeNewline && !hasMap) {
      position.column += len;
      return;
    }
    const {
      column,
      identifierName,
      identifierNamePos,
      filename
    } = sourcePos;
    let line = sourcePos.line;
    if ((identifierName != null || identifierNamePos != null) && this._canMarkIdName) {
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
    let i = str.indexOf("\n");
    let last = 0;
    if (hasMap && i !== 0) {
      this._map.mark(position, line, column, identifierName, identifierNamePos, filename);
    }
    while (i !== -1) {
      position.line++;
      position.column = 0;
      last = i + 1;
      if (last < len && line !== undefined) {
        line++;
        if (hasMap) {
          this._map.mark(position, line, 0, undefined, undefined, filename);
        }
      }
      i = str.indexOf("\n", last);
    }
    position.column += len - last;
  }
  removeLastSemicolon() {
    if (this._queuedChar === 59) {
      this._queuedChar = 0;
    }
  }
  getLastChar(checkQueue) {
    if (!checkQueue) {
      return this._last;
    }
    const queuedChar = this._queuedChar;
    return queuedChar !== 0 ? queuedChar : this._last;
  }
  getNewlineCount() {
    return this._queuedChar === 0 && this._last === 10 ? 1 : 0;
  }
  hasContent() {
    return this._last !== 0;
  }
  exactSource(loc, cb) {
    if (!this._map) {
      cb();
      return;
    }
    this.source("start", loc);
    const identifierName = loc.identifierName;
    const sourcePos = this._sourcePosition;
    if (identifierName != null) {
      this._canMarkIdName = false;
      sourcePos.identifierName = identifierName;
    }
    cb();
    if (identifierName != null) {
      this._canMarkIdName = true;
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
    this.source("end", loc);
  }
  source(prop, loc) {
    if (!this._map) return;
    this._normalizePosition(prop, loc, 0);
  }
  sourceWithOffset(prop, loc, columnOffset) {
    if (!this._map) return;
    this._normalizePosition(prop, loc, columnOffset);
  }
  _normalizePosition(prop, loc, columnOffset) {
    this._flush();
    const pos = loc[prop];
    const target = this._sourcePosition;
    if (pos) {
      target.line = pos.line;
      target.column = Math.max(pos.column + columnOffset, 0);
      target.filename = loc.filename;
    }
  }
  getCurrentColumn() {
    return this._position.column + (this._queuedChar ? 1 : 0);
  }
  getCurrentLine() {
    return this._position.line;
  }
}
exports.default = Buffer;

//# sourceMappingURL=buffer.js.map
