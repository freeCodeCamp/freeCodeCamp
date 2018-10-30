import { Node, SourceLocation, Token, addLooseExports, defaultOptions, getLineInfo, isNewLine, lineBreak, lineBreakG, tokTypes, tokenizer } from './acorn.es';

function noop() {}

// Registered plugins
var pluginsLoose = {};

var LooseParser = function LooseParser(input, options) {
  if ( options === void 0 ) options = {};

  this.toks = tokenizer(input, options);
  this.options = this.toks.options;
  this.input = this.toks.input;
  this.tok = this.last = {type: tokTypes.eof, start: 0, end: 0};
  this.tok.validateRegExpFlags = noop;
  this.tok.validateRegExpPattern = noop;
  if (this.options.locations) {
    var here = this.toks.curPosition();
    this.tok.loc = new SourceLocation(this.toks, here, here);
  }
  this.ahead = []; // Tokens ahead
  this.context = []; // Indentation contexted
  this.curIndent = 0;
  this.curLineStart = 0;
  this.nextLineStart = this.lineEnd(this.curLineStart) + 1;
  this.inAsync = false;
  this.inFunction = false;
  // Load plugins
  this.options.pluginsLoose = options.pluginsLoose || {};
  this.loadPlugins(this.options.pluginsLoose);
};

LooseParser.prototype.startNode = function startNode () {
  return new Node(this.toks, this.tok.start, this.options.locations ? this.tok.loc.start : null)
};

LooseParser.prototype.storeCurrentPos = function storeCurrentPos () {
  return this.options.locations ? [this.tok.start, this.tok.loc.start] : this.tok.start
};

LooseParser.prototype.startNodeAt = function startNodeAt (pos) {
  if (this.options.locations) {
    return new Node(this.toks, pos[0], pos[1])
  } else {
    return new Node(this.toks, pos)
  }
};

LooseParser.prototype.finishNode = function finishNode (node, type) {
  node.type = type;
  node.end = this.last.end;
  if (this.options.locations)
    { node.loc.end = this.last.loc.end; }
  if (this.options.ranges)
    { node.range[1] = this.last.end; }
  return node
};

LooseParser.prototype.dummyNode = function dummyNode (type) {
  var dummy = this.startNode();
  dummy.type = type;
  dummy.end = dummy.start;
  if (this.options.locations)
    { dummy.loc.end = dummy.loc.start; }
  if (this.options.ranges)
    { dummy.range[1] = dummy.start; }
  this.last = {type: tokTypes.name, start: dummy.start, end: dummy.start, loc: dummy.loc};
  return dummy
};

LooseParser.prototype.dummyIdent = function dummyIdent () {
  var dummy = this.dummyNode("Identifier");
  dummy.name = "✖";
  return dummy
};

LooseParser.prototype.dummyString = function dummyString () {
  var dummy = this.dummyNode("Literal");
  dummy.value = dummy.raw = "✖";
  return dummy
};

LooseParser.prototype.eat = function eat (type) {
  if (this.tok.type === type) {
    this.next();
    return true
  } else {
    return false
  }
};

LooseParser.prototype.isContextual = function isContextual (name) {
  return this.tok.type === tokTypes.name && this.tok.value === name
};

LooseParser.prototype.eatContextual = function eatContextual (name) {
  return this.tok.value === name && this.eat(tokTypes.name)
};

LooseParser.prototype.canInsertSemicolon = function canInsertSemicolon () {
  return this.tok.type === tokTypes.eof || this.tok.type === tokTypes.braceR ||
    lineBreak.test(this.input.slice(this.last.end, this.tok.start))
};

LooseParser.prototype.semicolon = function semicolon () {
  return this.eat(tokTypes.semi)
};

LooseParser.prototype.expect = function expect (type) {
    var this$1 = this;

  if (this.eat(type)) { return true }
  for (var i = 1; i <= 2; i++) {
    if (this$1.lookAhead(i).type === type) {
      for (var j = 0; j < i; j++) { this$1.next(); }
      return true
    }
  }
};

LooseParser.prototype.pushCx = function pushCx () {
  this.context.push(this.curIndent);
};

LooseParser.prototype.popCx = function popCx () {
  this.curIndent = this.context.pop();
};

LooseParser.prototype.lineEnd = function lineEnd (pos) {
  while (pos < this.input.length && !isNewLine(this.input.charCodeAt(pos))) { ++pos; }
  return pos
};

LooseParser.prototype.indentationAfter = function indentationAfter (pos) {
    var this$1 = this;

  for (var count = 0;; ++pos) {
    var ch = this$1.input.charCodeAt(pos);
    if (ch === 32) { ++count; }
    else if (ch === 9) { count += this$1.options.tabSize; }
    else { return count }
  }
};

LooseParser.prototype.closes = function closes (closeTok, indent, line, blockHeuristic) {
  if (this.tok.type === closeTok || this.tok.type === tokTypes.eof) { return true }
  return line !== this.curLineStart && this.curIndent < indent && this.tokenStartsLine() &&
    (!blockHeuristic || this.nextLineStart >= this.input.length ||
     this.indentationAfter(this.nextLineStart) < indent)
};

LooseParser.prototype.tokenStartsLine = function tokenStartsLine () {
    var this$1 = this;

  for (var p = this.tok.start - 1; p >= this.curLineStart; --p) {
    var ch = this$1.input.charCodeAt(p);
    if (ch !== 9 && ch !== 32) { return false }
  }
  return true
};

LooseParser.prototype.extend = function extend (name, f) {
  this[name] = f(this[name]);
};

LooseParser.prototype.loadPlugins = function loadPlugins (pluginConfigs) {
    var this$1 = this;

  for (var name in pluginConfigs) {
    var plugin = pluginsLoose[name];
    if (!plugin) { throw new Error("Plugin '" + name + "' not found") }
    plugin(this$1, pluginConfigs[name]);
  }
};

LooseParser.prototype.parse = function parse () {
  this.next();
  return this.parseTopLevel()
};

var lp = LooseParser.prototype;

function isSpace(ch) {
  return (ch < 14 && ch > 8) || ch === 32 || ch === 160 || isNewLine(ch)
}

lp.next = function() {
  var this$1 = this;

  this.last = this.tok;
  if (this.ahead.length)
    { this.tok = this.ahead.shift(); }
  else
    { this.tok = this.readToken(); }

  if (this.tok.start >= this.nextLineStart) {
    while (this.tok.start >= this.nextLineStart) {
      this$1.curLineStart = this$1.nextLineStart;
      this$1.nextLineStart = this$1.lineEnd(this$1.curLineStart) + 1;
    }
    this.curIndent = this.indentationAfter(this.curLineStart);
  }
};

lp.readToken = function() {
  var this$1 = this;

  for (;;) {
    try {
      this$1.toks.next();
      if (this$1.toks.type === tokTypes.dot &&
          this$1.input.substr(this$1.toks.end, 1) === "." &&
          this$1.options.ecmaVersion >= 6) {
        this$1.toks.end++;
        this$1.toks.type = tokTypes.ellipsis;
      }
      return new Token(this$1.toks)
    } catch (e) {
      if (!(e instanceof SyntaxError)) { throw e }

      // Try to skip some text, based on the error message, and then continue
      var msg = e.message, pos = e.raisedAt, replace = true;
      if (/unterminated/i.test(msg)) {
        pos = this$1.lineEnd(e.pos + 1);
        if (/string/.test(msg)) {
          replace = {start: e.pos, end: pos, type: tokTypes.string, value: this$1.input.slice(e.pos + 1, pos)};
        } else if (/regular expr/i.test(msg)) {
          var re = this$1.input.slice(e.pos, pos);
          try { re = new RegExp(re); } catch (e) { /* ignore compilation error due to new syntax */ }
          replace = {start: e.pos, end: pos, type: tokTypes.regexp, value: re};
        } else if (/template/.test(msg)) {
          replace = {
            start: e.pos,
            end: pos,
            type: tokTypes.template,
            value: this$1.input.slice(e.pos, pos)
          };
        } else {
          replace = false;
        }
      } else if (/invalid (unicode|regexp|number)|expecting unicode|octal literal|is reserved|directly after number|expected number in radix/i.test(msg)) {
        while (pos < this.input.length && !isSpace(this.input.charCodeAt(pos))) { ++pos; }
      } else if (/character escape|expected hexadecimal/i.test(msg)) {
        while (pos < this.input.length) {
          var ch = this$1.input.charCodeAt(pos++);
          if (ch === 34 || ch === 39 || isNewLine(ch)) { break }
        }
      } else if (/unexpected character/i.test(msg)) {
        pos++;
        replace = false;
      } else if (/regular expression/i.test(msg)) {
        replace = true;
      } else {
        throw e
      }
      this$1.resetTo(pos);
      if (replace === true) { replace = {start: pos, end: pos, type: tokTypes.name, value: "✖"}; }
      if (replace) {
        if (this$1.options.locations)
          { replace.loc = new SourceLocation(
            this$1.toks,
            getLineInfo(this$1.input, replace.start),
            getLineInfo(this$1.input, replace.end)); }
        return replace
      }
    }
  }
};

lp.resetTo = function(pos) {
  var this$1 = this;

  this.toks.pos = pos;
  var ch = this.input.charAt(pos - 1);
  this.toks.exprAllowed = !ch || /[[{(,;:?/*=+\-~!|&%^<>]/.test(ch) ||
    /[enwfd]/.test(ch) &&
    /\b(case|else|return|throw|new|in|(instance|type)?of|delete|void)$/.test(this.input.slice(pos - 10, pos));

  if (this.options.locations) {
    this.toks.curLine = 1;
    this.toks.lineStart = lineBreakG.lastIndex = 0;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < pos) {
      ++this$1.toks.curLine;
      this$1.toks.lineStart = match.index + match[0].length;
    }
  }
};

lp.lookAhead = function(n) {
  var this$1 = this;

  while (n > this.ahead.length)
    { this$1.ahead.push(this$1.readToken()); }
  return this.ahead[n - 1]
};

function isDummy(node) { return node.name === "✖" }

var lp$1 = LooseParser.prototype;

lp$1.parseTopLevel = function() {
  var this$1 = this;

  var node = this.startNodeAt(this.options.locations ? [0, getLineInfo(this.input, 0)] : 0);
  node.body = [];
  while (this.tok.type !== tokTypes.eof) { node.body.push(this$1.parseStatement()); }
  this.toks.adaptDirectivePrologue(node.body);
  this.last = this.tok;
  if (this.options.ecmaVersion >= 6) {
    node.sourceType = this.options.sourceType;
  }
  return this.finishNode(node, "Program")
};

lp$1.parseStatement = function() {
  var this$1 = this;

  var starttype = this.tok.type, node = this.startNode(), kind;

  if (this.toks.isLet()) {
    starttype = tokTypes._var;
    kind = "let";
  }

  switch (starttype) {
  case tokTypes._break: case tokTypes._continue:
    this.next();
    var isBreak = starttype === tokTypes._break;
    if (this.semicolon() || this.canInsertSemicolon()) {
      node.label = null;
    } else {
      node.label = this.tok.type === tokTypes.name ? this.parseIdent() : null;
      this.semicolon();
    }
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")

  case tokTypes._debugger:
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement")

  case tokTypes._do:
    this.next();
    node.body = this.parseStatement();
    node.test = this.eat(tokTypes._while) ? this.parseParenExpression() : this.dummyIdent();
    this.semicolon();
    return this.finishNode(node, "DoWhileStatement")

  case tokTypes._for:
    this.next(); // `for` keyword
    var isAwait = this.options.ecmaVersion >= 9 && this.inAsync && this.eatContextual("await");

    this.pushCx();
    this.expect(tokTypes.parenL);
    if (this.tok.type === tokTypes.semi) { return this.parseFor(node, null) }
    var isLet = this.toks.isLet();
    if (isLet || this.tok.type === tokTypes._var || this.tok.type === tokTypes._const) {
      var init$1 = this.parseVar(true, isLet ? "let" : this.tok.value);
      if (init$1.declarations.length === 1 && (this.tok.type === tokTypes._in || this.isContextual("of"))) {
        if (this.options.ecmaVersion >= 9 && this.tok.type !== tokTypes._in) {
          node.await = isAwait;
        }
        return this.parseForIn(node, init$1)
      }
      return this.parseFor(node, init$1)
    }
    var init = this.parseExpression(true);
    if (this.tok.type === tokTypes._in || this.isContextual("of")) {
      if (this.options.ecmaVersion >= 9 && this.tok.type !== tokTypes._in) {
        node.await = isAwait;
      }
      return this.parseForIn(node, this.toAssignable(init))
    }
    return this.parseFor(node, init)

  case tokTypes._function:
    this.next();
    return this.parseFunction(node, true)

  case tokTypes._if:
    this.next();
    node.test = this.parseParenExpression();
    node.consequent = this.parseStatement();
    node.alternate = this.eat(tokTypes._else) ? this.parseStatement() : null;
    return this.finishNode(node, "IfStatement")

  case tokTypes._return:
    this.next();
    if (this.eat(tokTypes.semi) || this.canInsertSemicolon()) { node.argument = null; }
    else { node.argument = this.parseExpression(); this.semicolon(); }
    return this.finishNode(node, "ReturnStatement")

  case tokTypes._switch:
    var blockIndent = this.curIndent, line = this.curLineStart;
    this.next();
    node.discriminant = this.parseParenExpression();
    node.cases = [];
    this.pushCx();
    this.expect(tokTypes.braceL);

    var cur;
    while (!this.closes(tokTypes.braceR, blockIndent, line, true)) {
      if (this$1.tok.type === tokTypes._case || this$1.tok.type === tokTypes._default) {
        var isCase = this$1.tok.type === tokTypes._case;
        if (cur) { this$1.finishNode(cur, "SwitchCase"); }
        node.cases.push(cur = this$1.startNode());
        cur.consequent = [];
        this$1.next();
        if (isCase) { cur.test = this$1.parseExpression(); }
        else { cur.test = null; }
        this$1.expect(tokTypes.colon);
      } else {
        if (!cur) {
          node.cases.push(cur = this$1.startNode());
          cur.consequent = [];
          cur.test = null;
        }
        cur.consequent.push(this$1.parseStatement());
      }
    }
    if (cur) { this.finishNode(cur, "SwitchCase"); }
    this.popCx();
    this.eat(tokTypes.braceR);
    return this.finishNode(node, "SwitchStatement")

  case tokTypes._throw:
    this.next();
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement")

  case tokTypes._try:
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.tok.type === tokTypes._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(tokTypes.parenL)) {
        clause.param = this.toAssignable(this.parseExprAtom(), true);
        this.expect(tokTypes.parenR);
      } else {
        clause.param = null;
      }
      clause.body = this.parseBlock();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(tokTypes._finally) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer) { return node.block }
    return this.finishNode(node, "TryStatement")

  case tokTypes._var:
  case tokTypes._const:
    return this.parseVar(false, kind || this.tok.value)

  case tokTypes._while:
    this.next();
    node.test = this.parseParenExpression();
    node.body = this.parseStatement();
    return this.finishNode(node, "WhileStatement")

  case tokTypes._with:
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement();
    return this.finishNode(node, "WithStatement")

  case tokTypes.braceL:
    return this.parseBlock()

  case tokTypes.semi:
    this.next();
    return this.finishNode(node, "EmptyStatement")

  case tokTypes._class:
    return this.parseClass(true)

  case tokTypes._import:
    return this.parseImport()

  case tokTypes._export:
    return this.parseExport()

  default:
    if (this.toks.isAsyncFunction()) {
      this.next();
      this.next();
      return this.parseFunction(node, true, true)
    }
    var expr = this.parseExpression();
    if (isDummy(expr)) {
      this.next();
      if (this.tok.type === tokTypes.eof) { return this.finishNode(node, "EmptyStatement") }
      return this.parseStatement()
    } else if (starttype === tokTypes.name && expr.type === "Identifier" && this.eat(tokTypes.colon)) {
      node.body = this.parseStatement();
      node.label = expr;
      return this.finishNode(node, "LabeledStatement")
    } else {
      node.expression = expr;
      this.semicolon();
      return this.finishNode(node, "ExpressionStatement")
    }
  }
};

lp$1.parseBlock = function() {
  var this$1 = this;

  var node = this.startNode();
  this.pushCx();
  this.expect(tokTypes.braceL);
  var blockIndent = this.curIndent, line = this.curLineStart;
  node.body = [];
  while (!this.closes(tokTypes.braceR, blockIndent, line, true))
    { node.body.push(this$1.parseStatement()); }
  this.popCx();
  this.eat(tokTypes.braceR);
  return this.finishNode(node, "BlockStatement")
};

lp$1.parseFor = function(node, init) {
  node.init = init;
  node.test = node.update = null;
  if (this.eat(tokTypes.semi) && this.tok.type !== tokTypes.semi) { node.test = this.parseExpression(); }
  if (this.eat(tokTypes.semi) && this.tok.type !== tokTypes.parenR) { node.update = this.parseExpression(); }
  this.popCx();
  this.expect(tokTypes.parenR);
  node.body = this.parseStatement();
  return this.finishNode(node, "ForStatement")
};

lp$1.parseForIn = function(node, init) {
  var type = this.tok.type === tokTypes._in ? "ForInStatement" : "ForOfStatement";
  this.next();
  node.left = init;
  node.right = this.parseExpression();
  this.popCx();
  this.expect(tokTypes.parenR);
  node.body = this.parseStatement();
  return this.finishNode(node, type)
};

lp$1.parseVar = function(noIn, kind) {
  var this$1 = this;

  var node = this.startNode();
  node.kind = kind;
  this.next();
  node.declarations = [];
  do {
    var decl = this$1.startNode();
    decl.id = this$1.options.ecmaVersion >= 6 ? this$1.toAssignable(this$1.parseExprAtom(), true) : this$1.parseIdent();
    decl.init = this$1.eat(tokTypes.eq) ? this$1.parseMaybeAssign(noIn) : null;
    node.declarations.push(this$1.finishNode(decl, "VariableDeclarator"));
  } while (this.eat(tokTypes.comma))
  if (!node.declarations.length) {
    var decl$1 = this.startNode();
    decl$1.id = this.dummyIdent();
    node.declarations.push(this.finishNode(decl$1, "VariableDeclarator"));
  }
  if (!noIn) { this.semicolon(); }
  return this.finishNode(node, "VariableDeclaration")
};

lp$1.parseClass = function(isStatement) {
  var this$1 = this;

  var node = this.startNode();
  this.next();
  if (this.tok.type === tokTypes.name) { node.id = this.parseIdent(); }
  else if (isStatement === true) { node.id = this.dummyIdent(); }
  else { node.id = null; }
  node.superClass = this.eat(tokTypes._extends) ? this.parseExpression() : null;
  node.body = this.startNode();
  node.body.body = [];
  this.pushCx();
  var indent = this.curIndent + 1, line = this.curLineStart;
  this.eat(tokTypes.braceL);
  if (this.curIndent + 1 < indent) { indent = this.curIndent; line = this.curLineStart; }
  while (!this.closes(tokTypes.braceR, indent, line)) {
    if (this$1.semicolon()) { continue }
    var method = this$1.startNode(), isGenerator = (void 0), isAsync = (void 0);
    if (this$1.options.ecmaVersion >= 6) {
      method.static = false;
      isGenerator = this$1.eat(tokTypes.star);
    }
    this$1.parsePropertyName(method);
    if (isDummy(method.key)) { if (isDummy(this$1.parseMaybeAssign())) { this$1.next(); } this$1.eat(tokTypes.comma); continue }
    if (method.key.type === "Identifier" && !method.computed && method.key.name === "static" &&
        (this$1.tok.type !== tokTypes.parenL && this$1.tok.type !== tokTypes.braceL)) {
      method.static = true;
      isGenerator = this$1.eat(tokTypes.star);
      this$1.parsePropertyName(method);
    } else {
      method.static = false;
    }
    if (!method.computed &&
        method.key.type === "Identifier" && method.key.name === "async" && this$1.tok.type !== tokTypes.parenL &&
        !this$1.canInsertSemicolon()) {
      isAsync = true;
      isGenerator = this$1.options.ecmaVersion >= 9 && this$1.eat(tokTypes.star);
      this$1.parsePropertyName(method);
    } else {
      isAsync = false;
    }
    if (this$1.options.ecmaVersion >= 5 && method.key.type === "Identifier" &&
        !method.computed && (method.key.name === "get" || method.key.name === "set") &&
        this$1.tok.type !== tokTypes.parenL && this$1.tok.type !== tokTypes.braceL) {
      method.kind = method.key.name;
      this$1.parsePropertyName(method);
      method.value = this$1.parseMethod(false);
    } else {
      if (!method.computed && !method.static && !isGenerator && !isAsync && (
        method.key.type === "Identifier" && method.key.name === "constructor" ||
          method.key.type === "Literal" && method.key.value === "constructor")) {
        method.kind = "constructor";
      } else {
        method.kind = "method";
      }
      method.value = this$1.parseMethod(isGenerator, isAsync);
    }
    node.body.body.push(this$1.finishNode(method, "MethodDefinition"));
  }
  this.popCx();
  if (!this.eat(tokTypes.braceR)) {
    // If there is no closing brace, make the node span to the start
    // of the next token (this is useful for Tern)
    this.last.end = this.tok.start;
    if (this.options.locations) { this.last.loc.end = this.tok.loc.start; }
  }
  this.semicolon();
  this.finishNode(node.body, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
};

lp$1.parseFunction = function(node, isStatement, isAsync) {
  var oldInAsync = this.inAsync, oldInFunction = this.inFunction;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = this.eat(tokTypes.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (this.tok.type === tokTypes.name) { node.id = this.parseIdent(); }
  else if (isStatement === true) { node.id = this.dummyIdent(); }
  this.inAsync = node.async;
  this.inFunction = true;
  node.params = this.parseFunctionParams();
  node.body = this.parseBlock();
  this.toks.adaptDirectivePrologue(node.body.body);
  this.inAsync = oldInAsync;
  this.inFunction = oldInFunction;
  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression")
};

lp$1.parseExport = function() {
  var node = this.startNode();
  this.next();
  if (this.eat(tokTypes.star)) {
    node.source = this.eatContextual("from") ? this.parseExprAtom() : this.dummyString();
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(tokTypes._default)) {
    // export default (function foo() {}) // This is FunctionExpression.
    var isAsync;
    if (this.tok.type === tokTypes._function || (isAsync = this.toks.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      node.declaration = this.parseFunction(fNode, "nullableID", isAsync);
    } else if (this.tok.type === tokTypes._class) {
      node.declaration = this.parseClass("nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  if (this.tok.type.keyword || this.toks.isLet() || this.toks.isAsyncFunction()) {
    node.declaration = this.parseStatement();
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifierList();
    node.source = this.eatContextual("from") ? this.parseExprAtom() : null;
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration")
};

lp$1.parseImport = function() {
  var node = this.startNode();
  this.next();
  if (this.tok.type === tokTypes.string) {
    node.specifiers = [];
    node.source = this.parseExprAtom();
  } else {
    var elt;
    if (this.tok.type === tokTypes.name && this.tok.value !== "from") {
      elt = this.startNode();
      elt.local = this.parseIdent();
      this.finishNode(elt, "ImportDefaultSpecifier");
      this.eat(tokTypes.comma);
    }
    node.specifiers = this.parseImportSpecifierList();
    node.source = this.eatContextual("from") && this.tok.type === tokTypes.string ? this.parseExprAtom() : this.dummyString();
    if (elt) { node.specifiers.unshift(elt); }
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

lp$1.parseImportSpecifierList = function() {
  var this$1 = this;

  var elts = [];
  if (this.tok.type === tokTypes.star) {
    var elt = this.startNode();
    this.next();
    elt.local = this.eatContextual("as") ? this.parseIdent() : this.dummyIdent();
    elts.push(this.finishNode(elt, "ImportNamespaceSpecifier"));
  } else {
    var indent = this.curIndent, line = this.curLineStart, continuedLine = this.nextLineStart;
    this.pushCx();
    this.eat(tokTypes.braceL);
    if (this.curLineStart > continuedLine) { continuedLine = this.curLineStart; }
    while (!this.closes(tokTypes.braceR, indent + (this.curLineStart <= continuedLine ? 1 : 0), line)) {
      var elt$1 = this$1.startNode();
      if (this$1.eat(tokTypes.star)) {
        elt$1.local = this$1.eatContextual("as") ? this$1.parseIdent() : this$1.dummyIdent();
        this$1.finishNode(elt$1, "ImportNamespaceSpecifier");
      } else {
        if (this$1.isContextual("from")) { break }
        elt$1.imported = this$1.parseIdent();
        if (isDummy(elt$1.imported)) { break }
        elt$1.local = this$1.eatContextual("as") ? this$1.parseIdent() : elt$1.imported;
        this$1.finishNode(elt$1, "ImportSpecifier");
      }
      elts.push(elt$1);
      this$1.eat(tokTypes.comma);
    }
    this.eat(tokTypes.braceR);
    this.popCx();
  }
  return elts
};

lp$1.parseExportSpecifierList = function() {
  var this$1 = this;

  var elts = [];
  var indent = this.curIndent, line = this.curLineStart, continuedLine = this.nextLineStart;
  this.pushCx();
  this.eat(tokTypes.braceL);
  if (this.curLineStart > continuedLine) { continuedLine = this.curLineStart; }
  while (!this.closes(tokTypes.braceR, indent + (this.curLineStart <= continuedLine ? 1 : 0), line)) {
    if (this$1.isContextual("from")) { break }
    var elt = this$1.startNode();
    elt.local = this$1.parseIdent();
    if (isDummy(elt.local)) { break }
    elt.exported = this$1.eatContextual("as") ? this$1.parseIdent() : elt.local;
    this$1.finishNode(elt, "ExportSpecifier");
    elts.push(elt);
    this$1.eat(tokTypes.comma);
  }
  this.eat(tokTypes.braceR);
  this.popCx();
  return elts
};

var lp$2 = LooseParser.prototype;

lp$2.checkLVal = function(expr) {
  if (!expr) { return expr }
  switch (expr.type) {
  case "Identifier":
  case "MemberExpression":
    return expr

  case "ParenthesizedExpression":
    expr.expression = this.checkLVal(expr.expression);
    return expr

  default:
    return this.dummyIdent()
  }
};

lp$2.parseExpression = function(noIn) {
  var this$1 = this;

  var start = this.storeCurrentPos();
  var expr = this.parseMaybeAssign(noIn);
  if (this.tok.type === tokTypes.comma) {
    var node = this.startNodeAt(start);
    node.expressions = [expr];
    while (this.eat(tokTypes.comma)) { node.expressions.push(this$1.parseMaybeAssign(noIn)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

lp$2.parseParenExpression = function() {
  this.pushCx();
  this.expect(tokTypes.parenL);
  var val = this.parseExpression();
  this.popCx();
  this.expect(tokTypes.parenR);
  return val
};

lp$2.parseMaybeAssign = function(noIn) {
  if (this.toks.isContextual("yield")) {
    var node = this.startNode();
    this.next();
    if (this.semicolon() || this.canInsertSemicolon() || (this.tok.type !== tokTypes.star && !this.tok.type.startsExpr)) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(tokTypes.star);
      node.argument = this.parseMaybeAssign();
    }
    return this.finishNode(node, "YieldExpression")
  }

  var start = this.storeCurrentPos();
  var left = this.parseMaybeConditional(noIn);
  if (this.tok.type.isAssign) {
    var node$1 = this.startNodeAt(start);
    node$1.operator = this.tok.value;
    node$1.left = this.tok.type === tokTypes.eq ? this.toAssignable(left) : this.checkLVal(left);
    this.next();
    node$1.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node$1, "AssignmentExpression")
  }
  return left
};

lp$2.parseMaybeConditional = function(noIn) {
  var start = this.storeCurrentPos();
  var expr = this.parseExprOps(noIn);
  if (this.eat(tokTypes.question)) {
    var node = this.startNodeAt(start);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    node.alternate = this.expect(tokTypes.colon) ? this.parseMaybeAssign(noIn) : this.dummyIdent();
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
};

lp$2.parseExprOps = function(noIn) {
  var start = this.storeCurrentPos();
  var indent = this.curIndent, line = this.curLineStart;
  return this.parseExprOp(this.parseMaybeUnary(false), start, -1, noIn, indent, line)
};

lp$2.parseExprOp = function(left, start, minPrec, noIn, indent, line) {
  if (this.curLineStart !== line && this.curIndent < indent && this.tokenStartsLine()) { return left }
  var prec = this.tok.type.binop;
  if (prec != null && (!noIn || this.tok.type !== tokTypes._in)) {
    if (prec > minPrec) {
      var node = this.startNodeAt(start);
      node.left = left;
      node.operator = this.tok.value;
      this.next();
      if (this.curLineStart !== line && this.curIndent < indent && this.tokenStartsLine()) {
        node.right = this.dummyIdent();
      } else {
        var rightStart = this.storeCurrentPos();
        node.right = this.parseExprOp(this.parseMaybeUnary(false), rightStart, prec, noIn, indent, line);
      }
      this.finishNode(node, /&&|\|\|/.test(node.operator) ? "LogicalExpression" : "BinaryExpression");
      return this.parseExprOp(node, start, minPrec, noIn, indent, line)
    }
  }
  return left
};

lp$2.parseMaybeUnary = function(sawUnary) {
  var this$1 = this;

  var start = this.storeCurrentPos(), expr;
  if (this.options.ecmaVersion >= 8 && this.toks.isContextual("await") &&
    (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))
  ) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.tok.type.prefix) {
    var node = this.startNode(), update = this.tok.type === tokTypes.incDec;
    if (!update) { sawUnary = true; }
    node.operator = this.tok.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(true);
    if (update) { node.argument = this.checkLVal(node.argument); }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else if (this.tok.type === tokTypes.ellipsis) {
    var node$1 = this.startNode();
    this.next();
    node$1.argument = this.parseMaybeUnary(sawUnary);
    expr = this.finishNode(node$1, "SpreadElement");
  } else {
    expr = this.parseExprSubscripts();
    while (this.tok.type.postfix && !this.canInsertSemicolon()) {
      var node$2 = this$1.startNodeAt(start);
      node$2.operator = this$1.tok.value;
      node$2.prefix = false;
      node$2.argument = this$1.checkLVal(expr);
      this$1.next();
      expr = this$1.finishNode(node$2, "UpdateExpression");
    }
  }

  if (!sawUnary && this.eat(tokTypes.starstar)) {
    var node$3 = this.startNodeAt(start);
    node$3.operator = "**";
    node$3.left = expr;
    node$3.right = this.parseMaybeUnary(false);
    return this.finishNode(node$3, "BinaryExpression")
  }

  return expr
};

lp$2.parseExprSubscripts = function() {
  var start = this.storeCurrentPos();
  return this.parseSubscripts(this.parseExprAtom(), start, false, this.curIndent, this.curLineStart)
};

lp$2.parseSubscripts = function(base, start, noCalls, startIndent, line) {
  var this$1 = this;

  for (;;) {
    if (this$1.curLineStart !== line && this$1.curIndent <= startIndent && this$1.tokenStartsLine()) {
      if (this$1.tok.type === tokTypes.dot && this$1.curIndent === startIndent)
        { --startIndent; }
      else
        { return base }
    }

    var maybeAsyncArrow = base.type === "Identifier" && base.name === "async" && !this$1.canInsertSemicolon();

    if (this$1.eat(tokTypes.dot)) {
      var node = this$1.startNodeAt(start);
      node.object = base;
      if (this$1.curLineStart !== line && this$1.curIndent <= startIndent && this$1.tokenStartsLine())
        { node.property = this$1.dummyIdent(); }
      else
        { node.property = this$1.parsePropertyAccessor() || this$1.dummyIdent(); }
      node.computed = false;
      base = this$1.finishNode(node, "MemberExpression");
    } else if (this$1.tok.type === tokTypes.bracketL) {
      this$1.pushCx();
      this$1.next();
      var node$1 = this$1.startNodeAt(start);
      node$1.object = base;
      node$1.property = this$1.parseExpression();
      node$1.computed = true;
      this$1.popCx();
      this$1.expect(tokTypes.bracketR);
      base = this$1.finishNode(node$1, "MemberExpression");
    } else if (!noCalls && this$1.tok.type === tokTypes.parenL) {
      var exprList = this$1.parseExprList(tokTypes.parenR);
      if (maybeAsyncArrow && this$1.eat(tokTypes.arrow))
        { return this$1.parseArrowExpression(this$1.startNodeAt(start), exprList, true) }
      var node$2 = this$1.startNodeAt(start);
      node$2.callee = base;
      node$2.arguments = exprList;
      base = this$1.finishNode(node$2, "CallExpression");
    } else if (this$1.tok.type === tokTypes.backQuote) {
      var node$3 = this$1.startNodeAt(start);
      node$3.tag = base;
      node$3.quasi = this$1.parseTemplate();
      base = this$1.finishNode(node$3, "TaggedTemplateExpression");
    } else {
      return base
    }
  }
};

lp$2.parseExprAtom = function() {
  var node;
  switch (this.tok.type) {
  case tokTypes._this:
  case tokTypes._super:
    var type = this.tok.type === tokTypes._this ? "ThisExpression" : "Super";
    node = this.startNode();
    this.next();
    return this.finishNode(node, type)

  case tokTypes.name:
    var start = this.storeCurrentPos();
    var id = this.parseIdent();
    var isAsync = false;
    if (id.name === "async" && !this.canInsertSemicolon()) {
      if (this.eat(tokTypes._function))
        { return this.parseFunction(this.startNodeAt(start), false, true) }
      if (this.tok.type === tokTypes.name) {
        id = this.parseIdent();
        isAsync = true;
      }
    }
    return this.eat(tokTypes.arrow) ? this.parseArrowExpression(this.startNodeAt(start), [id], isAsync) : id

  case tokTypes.regexp:
    node = this.startNode();
    var val = this.tok.value;
    node.regex = {pattern: val.pattern, flags: val.flags};
    node.value = val.value;
    node.raw = this.input.slice(this.tok.start, this.tok.end);
    this.next();
    return this.finishNode(node, "Literal")

  case tokTypes.num: case tokTypes.string:
    node = this.startNode();
    node.value = this.tok.value;
    node.raw = this.input.slice(this.tok.start, this.tok.end);
    this.next();
    return this.finishNode(node, "Literal")

  case tokTypes._null: case tokTypes._true: case tokTypes._false:
    node = this.startNode();
    node.value = this.tok.type === tokTypes._null ? null : this.tok.type === tokTypes._true;
    node.raw = this.tok.type.keyword;
    this.next();
    return this.finishNode(node, "Literal")

  case tokTypes.parenL:
    var parenStart = this.storeCurrentPos();
    this.next();
    var inner = this.parseExpression();
    this.expect(tokTypes.parenR);
    if (this.eat(tokTypes.arrow)) {
      // (a,)=>a // SequenceExpression makes dummy in the last hole. Drop the dummy.
      var params = inner.expressions || [inner];
      if (params.length && isDummy(params[params.length - 1]))
        { params.pop(); }
      return this.parseArrowExpression(this.startNodeAt(parenStart), params)
    }
    if (this.options.preserveParens) {
      var par = this.startNodeAt(parenStart);
      par.expression = inner;
      inner = this.finishNode(par, "ParenthesizedExpression");
    }
    return inner

  case tokTypes.bracketL:
    node = this.startNode();
    node.elements = this.parseExprList(tokTypes.bracketR, true);
    return this.finishNode(node, "ArrayExpression")

  case tokTypes.braceL:
    return this.parseObj()

  case tokTypes._class:
    return this.parseClass(false)

  case tokTypes._function:
    node = this.startNode();
    this.next();
    return this.parseFunction(node, false)

  case tokTypes._new:
    return this.parseNew()

  case tokTypes.backQuote:
    return this.parseTemplate()

  default:
    return this.dummyIdent()
  }
};

lp$2.parseNew = function() {
  var node = this.startNode(), startIndent = this.curIndent, line = this.curLineStart;
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(tokTypes.dot)) {
    node.meta = meta;
    node.property = this.parseIdent(true);
    return this.finishNode(node, "MetaProperty")
  }
  var start = this.storeCurrentPos();
  node.callee = this.parseSubscripts(this.parseExprAtom(), start, true, startIndent, line);
  if (this.tok.type === tokTypes.parenL) {
    node.arguments = this.parseExprList(tokTypes.parenR);
  } else {
    node.arguments = [];
  }
  return this.finishNode(node, "NewExpression")
};

lp$2.parseTemplateElement = function() {
  var elem = this.startNode();

  // The loose parser accepts invalid unicode escapes even in untagged templates.
  if (this.tok.type === tokTypes.invalidTemplate) {
    elem.value = {
      raw: this.tok.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.tok.start, this.tok.end).replace(/\r\n?/g, "\n"),
      cooked: this.tok.value
    };
  }
  this.next();
  elem.tail = this.tok.type === tokTypes.backQuote;
  return this.finishNode(elem, "TemplateElement")
};

lp$2.parseTemplate = function() {
  var this$1 = this;

  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement();
  node.quasis = [curElt];
  while (!curElt.tail) {
    this$1.next();
    node.expressions.push(this$1.parseExpression());
    if (this$1.expect(tokTypes.braceR)) {
      curElt = this$1.parseTemplateElement();
    } else {
      curElt = this$1.startNode();
      curElt.value = {cooked: "", raw: ""};
      curElt.tail = true;
      this$1.finishNode(curElt, "TemplateElement");
    }
    node.quasis.push(curElt);
  }
  this.expect(tokTypes.backQuote);
  return this.finishNode(node, "TemplateLiteral")
};

lp$2.parseObj = function() {
  var this$1 = this;

  var node = this.startNode();
  node.properties = [];
  this.pushCx();
  var indent = this.curIndent + 1, line = this.curLineStart;
  this.eat(tokTypes.braceL);
  if (this.curIndent + 1 < indent) { indent = this.curIndent; line = this.curLineStart; }
  while (!this.closes(tokTypes.braceR, indent, line)) {
    var prop = this$1.startNode(), isGenerator = (void 0), isAsync = (void 0), start = (void 0);
    if (this$1.options.ecmaVersion >= 9 && this$1.eat(tokTypes.ellipsis)) {
      prop.argument = this$1.parseMaybeAssign();
      node.properties.push(this$1.finishNode(prop, "SpreadElement"));
      this$1.eat(tokTypes.comma);
      continue
    }
    if (this$1.options.ecmaVersion >= 6) {
      start = this$1.storeCurrentPos();
      prop.method = false;
      prop.shorthand = false;
      isGenerator = this$1.eat(tokTypes.star);
    }
    this$1.parsePropertyName(prop);
    if (this$1.toks.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this$1.options.ecmaVersion >= 9 && this$1.eat(tokTypes.star);
      this$1.parsePropertyName(prop);
    } else {
      isAsync = false;
    }
    if (isDummy(prop.key)) { if (isDummy(this$1.parseMaybeAssign())) { this$1.next(); } this$1.eat(tokTypes.comma); continue }
    if (this$1.eat(tokTypes.colon)) {
      prop.kind = "init";
      prop.value = this$1.parseMaybeAssign();
    } else if (this$1.options.ecmaVersion >= 6 && (this$1.tok.type === tokTypes.parenL || this$1.tok.type === tokTypes.braceL)) {
      prop.kind = "init";
      prop.method = true;
      prop.value = this$1.parseMethod(isGenerator, isAsync);
    } else if (this$1.options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
               !prop.computed && (prop.key.name === "get" || prop.key.name === "set") &&
               (this$1.tok.type !== tokTypes.comma && this$1.tok.type !== tokTypes.braceR && this$1.tok.type !== tokTypes.eq)) {
      prop.kind = prop.key.name;
      this$1.parsePropertyName(prop);
      prop.value = this$1.parseMethod(false);
    } else {
      prop.kind = "init";
      if (this$1.options.ecmaVersion >= 6) {
        if (this$1.eat(tokTypes.eq)) {
          var assign = this$1.startNodeAt(start);
          assign.operator = "=";
          assign.left = prop.key;
          assign.right = this$1.parseMaybeAssign();
          prop.value = this$1.finishNode(assign, "AssignmentExpression");
        } else {
          prop.value = prop.key;
        }
      } else {
        prop.value = this$1.dummyIdent();
      }
      prop.shorthand = true;
    }
    node.properties.push(this$1.finishNode(prop, "Property"));
    this$1.eat(tokTypes.comma);
  }
  this.popCx();
  if (!this.eat(tokTypes.braceR)) {
    // If there is no closing brace, make the node span to the start
    // of the next token (this is useful for Tern)
    this.last.end = this.tok.start;
    if (this.options.locations) { this.last.loc.end = this.tok.loc.start; }
  }
  return this.finishNode(node, "ObjectExpression")
};

lp$2.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(tokTypes.bracketL)) {
      prop.computed = true;
      prop.key = this.parseExpression();
      this.expect(tokTypes.bracketR);
      return
    } else {
      prop.computed = false;
    }
  }
  var key = (this.tok.type === tokTypes.num || this.tok.type === tokTypes.string) ? this.parseExprAtom() : this.parseIdent();
  prop.key = key || this.dummyIdent();
};

lp$2.parsePropertyAccessor = function() {
  if (this.tok.type === tokTypes.name || this.tok.type.keyword) { return this.parseIdent() }
};

lp$2.parseIdent = function() {
  var name = this.tok.type === tokTypes.name ? this.tok.value : this.tok.type.keyword;
  if (!name) { return this.dummyIdent() }
  var node = this.startNode();
  this.next();
  node.name = name;
  return this.finishNode(node, "Identifier")
};

lp$2.initFunction = function(node) {
  node.id = null;
  node.params = [];
  if (this.options.ecmaVersion >= 6) {
    node.generator = false;
    node.expression = false;
  }
  if (this.options.ecmaVersion >= 8)
    { node.async = false; }
};

// Convert existing expression atom to assignable pattern
// if possible.

lp$2.toAssignable = function(node, binding) {
  var this$1 = this;

  if (!node || node.type === "Identifier" || (node.type === "MemberExpression" && !binding)) {
    // Okay
  } else if (node.type === "ParenthesizedExpression") {
    this.toAssignable(node.expression, binding);
  } else if (this.options.ecmaVersion < 6) {
    return this.dummyIdent()
  } else if (node.type === "ObjectExpression") {
    node.type = "ObjectPattern";
    for (var i = 0, list = node.properties; i < list.length; i += 1)
      {
      var prop = list[i];

      this$1.toAssignable(prop, binding);
    }
  } else if (node.type === "ArrayExpression") {
    node.type = "ArrayPattern";
    this.toAssignableList(node.elements, binding);
  } else if (node.type === "Property") {
    this.toAssignable(node.value, binding);
  } else if (node.type === "SpreadElement") {
    node.type = "RestElement";
    this.toAssignable(node.argument, binding);
  } else if (node.type === "AssignmentExpression") {
    node.type = "AssignmentPattern";
    delete node.operator;
  } else {
    return this.dummyIdent()
  }
  return node
};

lp$2.toAssignableList = function(exprList, binding) {
  var this$1 = this;

  for (var i = 0, list = exprList; i < list.length; i += 1)
    {
    var expr = list[i];

    this$1.toAssignable(expr, binding);
  }
  return exprList
};

lp$2.parseFunctionParams = function(params) {
  params = this.parseExprList(tokTypes.parenR);
  return this.toAssignableList(params, true)
};

lp$2.parseMethod = function(isGenerator, isAsync) {
  var node = this.startNode(), oldInAsync = this.inAsync, oldInFunction = this.inFunction;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = !!isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }
  this.inAsync = node.async;
  this.inFunction = true;
  node.params = this.parseFunctionParams();
  node.body = this.parseBlock();
  this.toks.adaptDirectivePrologue(node.body.body);
  this.inAsync = oldInAsync;
  this.inFunction = oldInFunction;
  return this.finishNode(node, "FunctionExpression")
};

lp$2.parseArrowExpression = function(node, params, isAsync) {
  var oldInAsync = this.inAsync, oldInFunction = this.inFunction;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }
  this.inAsync = node.async;
  this.inFunction = true;
  node.params = this.toAssignableList(params, true);
  node.expression = this.tok.type !== tokTypes.braceL;
  if (node.expression) {
    node.body = this.parseMaybeAssign();
  } else {
    node.body = this.parseBlock();
    this.toks.adaptDirectivePrologue(node.body.body);
  }
  this.inAsync = oldInAsync;
  this.inFunction = oldInFunction;
  return this.finishNode(node, "ArrowFunctionExpression")
};

lp$2.parseExprList = function(close, allowEmpty) {
  var this$1 = this;

  this.pushCx();
  var indent = this.curIndent, line = this.curLineStart, elts = [];
  this.next(); // Opening bracket
  while (!this.closes(close, indent + 1, line)) {
    if (this$1.eat(tokTypes.comma)) {
      elts.push(allowEmpty ? null : this$1.dummyIdent());
      continue
    }
    var elt = this$1.parseMaybeAssign();
    if (isDummy(elt)) {
      if (this$1.closes(close, indent, line)) { break }
      this$1.next();
    } else {
      elts.push(elt);
    }
    this$1.eat(tokTypes.comma);
  }
  this.popCx();
  if (!this.eat(close)) {
    // If there is no closing brace, make the node span to the start
    // of the next token (this is useful for Tern)
    this.last.end = this.tok.start;
    if (this.options.locations) { this.last.loc.end = this.tok.loc.start; }
  }
  return elts
};

lp$2.parseAwait = function() {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary();
  return this.finishNode(node, "AwaitExpression")
};

// Acorn: Loose parser
//
// This module provides an alternative parser (`parse_dammit`) that
// exposes that same interface as `parse`, but will try to parse
// anything as JavaScript, repairing syntax error the best it can.
// There are circumstances in which it will raise an error and give
// up, but they are very rare. The resulting AST will be a mostly
// valid JavaScript AST (as per the [Mozilla parser API][api], except
// that:
//
// - Return outside functions is allowed
//
// - Label consistency (no conflicts, break only to existing labels)
//   is not enforced.
//
// - Bogus Identifier nodes with a name of `"✖"` are inserted whenever
//   the parser got too confused to return anything meaningful.
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API
//
// The expected use for this is to *first* try `acorn.parse`, and only
// if that fails switch to `parse_dammit`. The loose parser might
// parse badly indented code incorrectly, so **don't** use it as
// your default parser.
//
// Quite a lot of acorn.js is duplicated here. The alternative was to
// add a *lot* of extra cruft to that file, making it less readable
// and slower. Copying and editing the code allowed me to make
// invasive changes and simplifications without creating a complicated
// tangle.

defaultOptions.tabSize = 4;

// eslint-disable-next-line camelcase
function parse_dammit(input, options) {
  return new LooseParser(input, options).parse()
}

addLooseExports(parse_dammit, LooseParser, pluginsLoose);

export { parse_dammit, LooseParser, pluginsLoose };
