"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenMap = void 0;
var _t = require("@babel/types");
const {
  traverseFast,
  VISITOR_KEYS
} = _t;
class TokenMap {
  constructor(ast, tokens, source) {
    this._tokens = void 0;
    this._source = void 0;
    this._nodesToTokenIndexes = new Map();
    this._nodesOccurrencesCountCache = new Map();
    this._tokensCache = new Map();
    this._tokens = tokens;
    this._source = source;
    traverseFast(ast, node => {
      const indexes = this._getTokensIndexesOfNode(node);
      if (indexes.length > 0) this._nodesToTokenIndexes.set(node, indexes);
    });
    this._tokensCache.clear();
  }
  has(node) {
    return this._nodesToTokenIndexes.has(node);
  }
  getIndexes(node) {
    return this._nodesToTokenIndexes.get(node);
  }
  find(node, condition) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (indexes) {
      for (let k = 0; k < indexes.length; k++) {
        const index = indexes[k];
        const tok = this._tokens[index];
        if (condition(tok, index)) return tok;
      }
    }
    return null;
  }
  findLastIndex(node, condition) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (indexes) {
      for (let k = indexes.length - 1; k >= 0; k--) {
        const index = indexes[k];
        const tok = this._tokens[index];
        if (condition(tok, index)) return index;
      }
    }
    return -1;
  }
  findMatching(node, test, occurrenceCount = 0) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (indexes) {
      if (typeof test === "number") {
        test = String.fromCharCode(test);
      }
      let i = 0;
      const count = occurrenceCount;
      if (count > 1) {
        const cache = this._nodesOccurrencesCountCache.get(node);
        if ((cache == null ? void 0 : cache.test) === test && cache.count < count) {
          i = cache.i + 1;
          occurrenceCount -= cache.count + 1;
        }
      }
      for (; i < indexes.length; i++) {
        const tok = this._tokens[indexes[i]];
        if (this.matchesOriginal(tok, test)) {
          if (occurrenceCount === 0) {
            if (count > 0) {
              this._nodesOccurrencesCountCache.set(node, {
                test,
                count,
                i
              });
            }
            return tok;
          }
          occurrenceCount--;
        }
      }
    }
    return null;
  }
  matchesOriginal(token, test) {
    if (token.end - token.start !== test.length) return false;
    if (token.value != null) return token.value === test;
    return this._source.startsWith(test, token.start);
  }
  startMatches(node, test) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (!indexes) return false;
    const tok = this._tokens[indexes[0]];
    if (tok.start !== node.start) return false;
    return this.matchesOriginal(tok, test);
  }
  endMatches(node, test) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (!indexes) return false;
    const tok = this._tokens[indexes[indexes.length - 1]];
    if (tok.end !== node.end) return false;
    return this.matchesOriginal(tok, test);
  }
  _getTokensIndexesOfNode(node) {
    var _node$declaration;
    if (node.start == null || node.end == null) return [];
    const {
      first,
      last
    } = this._findTokensOfNode(node, 0, this._tokens.length - 1);
    let low = first;
    const children = childrenIterator(node);
    if ((node.type === "ExportNamedDeclaration" || node.type === "ExportDefaultDeclaration") && ((_node$declaration = node.declaration) == null ? void 0 : _node$declaration.type) === "ClassDeclaration") {
      children.next();
    }
    const indexes = [];
    for (const child of children) {
      if (child == null) continue;
      if (child.start == null || child.end == null) continue;
      const childTok = this._findTokensOfNode(child, low, last);
      const high = childTok.first;
      for (let k = low; k < high; k++) indexes.push(k);
      low = childTok.last + 1;
    }
    for (let k = low; k <= last; k++) indexes.push(k);
    return indexes;
  }
  _findTokensOfNode(node, low, high) {
    const cached = this._tokensCache.get(node);
    if (cached) return cached;
    const first = this._findFirstTokenOfNode(node.start, low, high);
    const last = this._findLastTokenOfNode(node.end, first, high);
    this._tokensCache.set(node, {
      first,
      last
    });
    return {
      first,
      last
    };
  }
  _findFirstTokenOfNode(start, low, high) {
    while (low <= high) {
      const mid = high + low >> 1;
      if (start < this._tokens[mid].start) {
        high = mid - 1;
      } else if (start > this._tokens[mid].start) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return low;
  }
  _findLastTokenOfNode(end, low, high) {
    while (low <= high) {
      const mid = high + low >> 1;
      if (end < this._tokens[mid].end) {
        high = mid - 1;
      } else if (end > this._tokens[mid].end) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return high;
  }
}
exports.TokenMap = TokenMap;
function* childrenIterator(node) {
  if (node.type === "TemplateLiteral") {
    yield node.quasis[0];
    for (let i = 1; i < node.quasis.length; i++) {
      yield node.expressions[i - 1];
      yield node.quasis[i];
    }
    return;
  }
  const keys = VISITOR_KEYS[node.type];
  for (const key of keys) {
    const child = node[key];
    if (!child) continue;
    if (Array.isArray(child)) {
      yield* child;
    } else {
      yield child;
    }
  }
}

//# sourceMappingURL=token-map.js.map
