import * as _acorn from "acorn";

const leftCurlyBrace = "{".charCodeAt(0);
const space = " ".charCodeAt(0);

const withKeyword = "with";
const assertKeyword = "assert";
const FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4

export const importAttributes = plugin({ keyword: "with" });
export const importAssertions = plugin({ keyword: "assert" });
export const importAttributesOrAssertions = plugin({ keyword: "with-assert" })

function plugin(options) {
  return function(Parser) {
    return pluginImpl(options, Parser);
  };
}

function pluginImpl(options, Parser) {
  // Use supplied version acorn version if present, to avoid
  // reference mismatches due to different acorn versions. This
  // allows this plugin to be used with Rollup which supplies
  // its own internal version of acorn and thereby sidesteps
  // the package manager.
  const acorn = Parser.acorn || _acorn;
  const { tokTypes: tt, TokenType } = acorn;
  const { keyword } = options;
  const isWithKeyword = keyword.includes(withKeyword);
  const isAssertKeyword = keyword.includes(assertKeyword);
  const isWithOrAssertKeyword = isWithKeyword && isAssertKeyword;

  return class extends Parser {
    constructor(...args) {
      super(...args);
      this.withToken = isWithKeyword && new TokenType(withKeyword);
      this.assertToken = isAssertKeyword && new TokenType(assertKeyword);
    }

    _codeAt(i) {
      return this.input.charCodeAt(i);
    }

    _eat(t) {
      if (this.type !== t) {
        this.unexpected();
      }
      this.next();
    }

    _matchKeywordToken() {
      return (isWithOrAssertKeyword && (this.type === this.withToken || this.type === this.assertToken))
        || (isWithKeyword && this.type === this.withToken)
        || (isAssertKeyword && this.type === this.assertToken)
    }

    _getProperty() {
      if (isWithOrAssertKeyword) {
        return this.type === this.withToken ? "attributes" : "assertions";
      }
      return isWithKeyword ? "attributes" : "assertions";
    }

    readToken(code) {
      let i = 0;
      let keyword;
      let token;
      if (isWithOrAssertKeyword) {
        if (this.input.slice(this.pos, this.pos + withKeyword.length) === withKeyword) {
          keyword = withKeyword;
          token = this.withToken;
        } else if (this.input.slice(this.pos, this.pos + assertKeyword.length) === assertKeyword) {
          keyword = assertKeyword;
          token = this.assertToken;
        } else {
          return super.readToken(code);
        }
        i += keyword.length;
      } else {
        keyword = isWithKeyword ? withKeyword : assertKeyword;
        token = isWithKeyword ? this.withToken : this.assertToken;
        for (; i < keyword.length; i++) {
          if (this._codeAt(this.pos + i) !== keyword.charCodeAt(i)) {
            return super.readToken(code);
          }
        }
      }

      // ensure that the keyword is at the correct location
      // ie `with{...` or `with {...`
      for (;; i++) {
        if (this._codeAt(this.pos + i) === leftCurlyBrace) {
          // Found '{'
          break;
        } else if (this._codeAt(this.pos + i) === space) {
          // white space is allowed between `with` and `{`, so continue.
          continue;
        } else {
          return super.readToken(code);
        }
      }

      // If we're inside a dynamic import expression we'll parse
      // the `with` keyword as a standard object property name
      // ie `import(""./foo.json", { with: { type: "json" } })`
      if (this.type.label === "{") {
        return super.readToken(code);
      }

      this.pos += keyword.length;
      return this.finishToken(token);
    }

    parseDynamicImport(node) {
      this.next(); // skip `(`

      // Parse node.source.
      node.source = this.parseMaybeAssign();

      if (this.eat(tt.comma)) {
        const expr = this.parseExpression();
        node.arguments = [expr];
      }
      this._eat(tt.parenR);
      return this.finishNode(node, "ImportExpression");
    }

    // ported from acorn/src/statement.js pp.parseExport
    parseExport(node, exports) {
      this.next();
      // export * from '...'
      if (this.eat(tt.star)) {
        if (this.options.ecmaVersion >= 11) {
          if (this.eatContextual("as")) {
            node.exported = this.parseIdent(true);
            this.checkExport(exports, node.exported.name, this.lastTokStart);
          } else {
            node.exported = null;
          }
        }
        this.expectContextual("from");
        if (this.type !== tt.string) { this.unexpected(); }
        node.source = this.parseExprAtom();

        if (this._matchKeywordToken()) {
          const property = this._getProperty();
          this.next();
          const attributes = this.parseImportAttributes();
          if (attributes) {
            node[property] = attributes;
          }
        }

        this.semicolon();
        return this.finishNode(node, "ExportAllDeclaration")
      }
      if (this.eat(tt._default)) { // export default ...
        this.checkExport(exports, "default", this.lastTokStart);
        var isAsync;
        if (this.type === tt._function || (isAsync = this.isAsyncFunction())) {
          var fNode = this.startNode();
          this.next();
          if (isAsync) { this.next(); }
          node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
        } else if (this.type === tt._class) {
          var cNode = this.startNode();
          node.declaration = this.parseClass(cNode, "nullableID");
        } else {
          node.declaration = this.parseMaybeAssign();
          this.semicolon();
        }
        return this.finishNode(node, "ExportDefaultDeclaration")
      }
      // export var|const|let|function|class ...
      if (this.shouldParseExportStatement()) {
        node.declaration = this.parseStatement(null);
        if (node.declaration.type === "VariableDeclaration")
          { this.checkVariableExport(exports, node.declaration.declarations); }
        else
          { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
        node.specifiers = [];
        node.source = null;
      } else { // export { x, y as z } [from '...']
        node.declaration = null;
        node.specifiers = this.parseExportSpecifiers(exports);
        if (this.eatContextual("from")) {
          if (this.type !== tt.string) { this.unexpected(); }
          node.source = this.parseExprAtom();

          if (this._matchKeywordToken()) {
            const property = this._getProperty();
            this.next();
            const attributes = this.parseImportAttributes();
            if (attributes) {
              node[property] = attributes;
            }
          }
        } else {
          for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
            // check for keywords used as local names
            var spec = list[i];

            this.checkUnreserved(spec.local);
            // check if export is defined
            this.checkLocalExport(spec.local);
          }

          node.source = null;
        }
        this.semicolon();
      }
      return this.finishNode(node, "ExportNamedDeclaration")
    }

    parseImport(node) {
      this.next();
      // import '...'
      if (this.type === tt.string) {
        node.specifiers = [];
        node.source = this.parseExprAtom();
      } else {
        node.specifiers = this.parseImportSpecifiers();
        this.expectContextual("from");
        node.source =
          this.type === tt.string ? this.parseExprAtom() : this.unexpected();
      }

      if (this._matchKeywordToken()) {
        const property = this._getProperty();
        this.next();
        const attributes = this.parseImportAttributes();
        if (attributes) {
          node[property] = attributes;
        }
      }
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }

    parseImportAttributes() {
      this._eat(tt.braceL);
      const attrs = this.parsewithEntries();
      this._eat(tt.braceR);
      return attrs;
    }

    parsewithEntries() {
      const attrs = [];
      const attrNames = new Set();

      do {
        if (this.type === tt.braceR) {
          break;
        }

        const node = this.startNode();

        // parse withionKey : IdentifierName, StringLiteral
        let withionKeyNode;
        if (this.type === tt.string) {
          withionKeyNode = this.parseLiteral(this.value);
        } else {
          withionKeyNode = this.parseIdent(true);
        }
        this.next();
        node.key = withionKeyNode;

        // check if we already have an entry for an attribute
        // if a duplicate entry is found, throw an error
        // for now this logic will come into play only when someone declares `type` twice
        if (attrNames.has(node.key.name)) {
          this.raise(this.pos, "Duplicated key in attributes");
        }
        attrNames.add(node.key.name);

        if (this.type !== tt.string) {
          this.raise(
            this.pos,
            "Only string is supported as an attribute value"
          );
        }

        node.value = this.parseLiteral(this.value);

        attrs.push(this.finishNode(node, "ImportAttribute"));
      } while (this.eat(tt.comma));

      return attrs;
    }
  };
}
