import { tokTypes, SourceLocation, Node, lineBreak, isNewLine, Parser, Token, getLineInfo, lineBreakG, tokContexts, defaultOptions } from 'acorn';

var dummyValue = "✖";

function isDummy(node) { return node.name === dummyValue }

function noop() {}

var LooseParser = function LooseParser(input, options) {
  if ( options === void 0 ) options = {};

  this.toks = this.constructor.BaseParser.tokenizer(input, options);
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
  this.inGenerator = false;
  this.inFunction = false;
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
  dummy.name = dummyValue;
  return dummy
};

LooseParser.prototype.dummyString = function dummyString () {
  var dummy = this.dummyNode("Literal");
  dummy.value = dummy.raw = dummyValue;
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
  if (this.eat(type)) { return true }
  for (var i = 1; i <= 2; i++) {
    if (this.lookAhead(i).type === type) {
      for (var j = 0; j < i; j++) { this.next(); }
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
  for (var count = 0;; ++pos) {
    var ch = this.input.charCodeAt(pos);
    if (ch === 32) { ++count; }
    else if (ch === 9) { count += this.options.tabSize; }
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
  for (var p = this.tok.start - 1; p >= this.curLineStart; --p) {
    var ch = this.input.charCodeAt(p);
    if (ch !== 9 && ch !== 32) { return false }
  }
  return true
};

LooseParser.prototype.extend = function extend (name, f) {
  this[name] = f(this[name]);
};

LooseParser.prototype.parse = function parse () {
  this.next();
  return this.parseTopLevel()
};

LooseParser.extend = function extend () {
    var plugins = [], len = arguments.length;
    while ( len-- ) plugins[ len ] = arguments[ len ];

  var cls = this;
  for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
  return cls
};

LooseParser.parse = function parse (input, options) {
  return new this(input, options).parse()
};

// Allows plugins to extend the base parser / tokenizer used
LooseParser.BaseParser = Parser;

var lp$2 = LooseParser.prototype;

function isSpace(ch) {
  return (ch < 14 && ch > 8) || ch === 32 || ch === 160 || isNewLine(ch)
}

lp$2.next = function() {
  this.last = this.tok;
  if (this.ahead.length)
    { this.tok = this.ahead.shift(); }
  else
    { this.tok = this.readToken(); }

  if (this.tok.start >= this.nextLineStart) {
    while (this.tok.start >= this.nextLineStart) {
      this.curLineStart = this.nextLineStart;
      this.nextLineStart = this.lineEnd(this.curLineStart) + 1;
    }
    this.curIndent = this.indentationAfter(this.curLineStart);
  }
};

lp$2.readToken = function() {
  for (;;) {
    try {
      this.toks.next();
      if (this.toks.type === tokTypes.dot &&
          this.input.substr(this.toks.end, 1) === "." &&
          this.options.ecmaVersion >= 6) {
        this.toks.end++;
        this.toks.type = tokTypes.ellipsis;
      }
      return new Token(this.toks)
    } catch (e) {
      if (!(e instanceof SyntaxError)) { throw e }

      // Try to skip some text, based on the error message, and then continue
      var msg = e.message, pos = e.raisedAt, replace = true;
      if (/unterminated/i.test(msg)) {
        pos = this.lineEnd(e.pos + 1);
        if (/string/.test(msg)) {
          replace = {start: e.pos, end: pos, type: tokTypes.string, value: this.input.slice(e.pos + 1, pos)};
        } else if (/regular expr/i.test(msg)) {
          var re = this.input.slice(e.pos, pos);
          try { re = new RegExp(re); } catch (e$1) { /* ignore compilation error due to new syntax */ }
          replace = {start: e.pos, end: pos, type: tokTypes.regexp, value: re};
        } else if (/template/.test(msg)) {
          replace = {
            start: e.pos,
            end: pos,
            type: tokTypes.template,
            value: this.input.slice(e.pos, pos)
          };
        } else {
          replace = false;
        }
      } else if (/invalid (unicode|regexp|number)|expecting unicode|octal literal|is reserved|directly after number|expected number in radix|numeric separator/i.test(msg)) {
        while (pos < this.input.length && !isSpace(this.input.charCodeAt(pos))) { ++pos; }
      } else if (/character escape|expected hexadecimal/i.test(msg)) {
        while (pos < this.input.length) {
          var ch = this.input.charCodeAt(pos++);
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
      this.resetTo(pos);
      if (replace === true) { replace = {start: pos, end: pos, type: tokTypes.name, value: dummyValue}; }
      if (replace) {
        if (this.options.locations)
          { replace.loc = new SourceLocation(
            this.toks,
            getLineInfo(this.input, replace.start),
            getLineInfo(this.input, replace.end)); }
        return replace
      }
    }
  }
};

lp$2.resetTo = function(pos) {
  this.toks.pos = pos;
  this.toks.containsEsc = false;
  var ch = this.input.charAt(pos - 1);
  this.toks.exprAllowed = !ch || /[[{(,;:?/*=+\-~!|&%^<>]/.test(ch) ||
    /[enwfd]/.test(ch) &&
    /\b(case|else|return|throw|new|in|(instance|type)?of|delete|void)$/.test(this.input.slice(pos - 10, pos));

  if (this.options.locations) {
    this.toks.curLine = 1;
    this.toks.lineStart = lineBreakG.lastIndex = 0;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < pos) {
      ++this.toks.curLine;
      this.toks.lineStart = match.index + match[0].length;
    }
  }
};

lp$2.lookAhead = function(n) {
  while (n > this.ahead.length)
    { this.ahead.push(this.readToken()); }
  return this.ahead[n - 1]
};

var lp$1 = LooseParser.prototype;

lp$1.parseTopLevel = function() {
  var node = this.startNodeAt(this.options.locations ? [0, getLineInfo(this.input, 0)] : 0);
  node.body = [];
  while (this.tok.type !== tokTypes.eof) { node.body.push(this.parseStatement()); }
  this.toks.adaptDirectivePrologue(node.body);
  this.last = this.tok;
  node.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType;
  return this.finishNode(node, "Program")
};

lp$1.parseStatement = function() {
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
    var isAwait = this.options.ecmaVersion >= 9 && this.eatContextual("await");

    this.pushCx();
    this.expect(tokTypes.parenL);
    if (this.tok.type === tokTypes.semi) { return this.parseFor(node, null) }
    var isLet = this.toks.isLet();
    var isAwaitUsing = this.toks.isAwaitUsing(true);
    var isUsing = !isAwaitUsing && this.toks.isUsing(true);

    if (isLet || this.tok.type === tokTypes._var || this.tok.type === tokTypes._const || isUsing || isAwaitUsing) {
      var kind$1 = isLet ? "let" : isUsing ? "using" : isAwaitUsing ? "await using" : this.tok.value;
      var init$1 = this.startNode();
      if (isUsing || isAwaitUsing) {
        if (isAwaitUsing) { this.next(); }
        this.parseVar(init$1, true, kind$1);
      } else {
        init$1 = this.parseVar(init$1, true, kind$1);
      }

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
      if (this.tok.type === tokTypes._case || this.tok.type === tokTypes._default) {
        var isCase = this.tok.type === tokTypes._case;
        if (cur) { this.finishNode(cur, "SwitchCase"); }
        node.cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) { cur.test = this.parseExpression(); }
        else { cur.test = null; }
        this.expect(tokTypes.colon);
      } else {
        if (!cur) {
          node.cases.push(cur = this.startNode());
          cur.consequent = [];
          cur.test = null;
        }
        cur.consequent.push(this.parseStatement());
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
    return this.parseVar(node, false, kind || this.tok.value)

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
    if (this.options.ecmaVersion > 10) {
      var nextType = this.lookAhead(1).type;
      if (nextType === tokTypes.parenL || nextType === tokTypes.dot) {
        node.expression = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, "ExpressionStatement")
      }
    }

    return this.parseImport()

  case tokTypes._export:
    return this.parseExport()

  default:
    if (this.toks.isAsyncFunction()) {
      this.next();
      this.next();
      return this.parseFunction(node, true, true)
    }

    if (this.toks.isUsing(false)) {
      return this.parseVar(node, false, "using")
    }

    if (this.toks.isAwaitUsing(false)) {
      this.next();
      return this.parseVar(node, false, "await using")
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
  var node = this.startNode();
  this.pushCx();
  this.expect(tokTypes.braceL);
  var blockIndent = this.curIndent, line = this.curLineStart;
  node.body = [];
  while (!this.closes(tokTypes.braceR, blockIndent, line, true))
    { node.body.push(this.parseStatement()); }
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

lp$1.parseVar = function(node, noIn, kind) {
  node.kind = kind;
  this.next();
  node.declarations = [];
  do {
    var decl = this.startNode();
    decl.id = this.options.ecmaVersion >= 6 ? this.toAssignable(this.parseExprAtom(), true) : this.parseIdent();
    decl.init = this.eat(tokTypes.eq) ? this.parseMaybeAssign(noIn) : null;
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
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
    var element = this.parseClassElement();
    if (element) { node.body.body.push(element); }
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

lp$1.parseClassElement = function() {
  if (this.eat(tokTypes.semi)) { return null }

  var ref = this.options;
  var ecmaVersion = ref.ecmaVersion;
  var locations = ref.locations;
  var indent = this.curIndent;
  var line = this.curLineStart;
  var node = this.startNode();
  var keyName = "";
  var isGenerator = false;
  var isAsync = false;
  var kind = "method";
  var isStatic = false;

  if (this.eatContextual("static")) {
    // Parse static init block
    if (ecmaVersion >= 13 && this.eat(tokTypes.braceL)) {
      this.parseClassStaticBlock(node);
      return node
    }
    if (this.isClassElementNameStart() || this.toks.type === tokTypes.star) {
      isStatic = true;
    } else {
      keyName = "static";
    }
  }
  node.static = isStatic;
  if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
    if ((this.isClassElementNameStart() || this.toks.type === tokTypes.star) && !this.canInsertSemicolon()) {
      isAsync = true;
    } else {
      keyName = "async";
    }
  }
  if (!keyName) {
    isGenerator = this.eat(tokTypes.star);
    var lastValue = this.toks.value;
    if (this.eatContextual("get") || this.eatContextual("set")) {
      if (this.isClassElementNameStart()) {
        kind = lastValue;
      } else {
        keyName = lastValue;
      }
    }
  }

  // Parse element name
  if (keyName) {
    // 'async', 'get', 'set', or 'static' were not a keyword contextually.
    // The last token is any of those. Make it the element name.
    node.computed = false;
    node.key = this.startNodeAt(locations ? [this.toks.lastTokStart, this.toks.lastTokStartLoc] : this.toks.lastTokStart);
    node.key.name = keyName;
    this.finishNode(node.key, "Identifier");
  } else {
    this.parseClassElementName(node);

    // From https://github.com/acornjs/acorn/blob/7deba41118d6384a2c498c61176b3cf434f69590/acorn-loose/src/statement.js#L291
    // Skip broken stuff.
    if (isDummy(node.key)) {
      if (isDummy(this.parseMaybeAssign())) { this.next(); }
      this.eat(tokTypes.comma);
      return null
    }
  }

  // Parse element value
  if (ecmaVersion < 13 || this.toks.type === tokTypes.parenL || kind !== "method" || isGenerator || isAsync) {
    // Method
    var isConstructor =
      !node.computed &&
      !node.static &&
      !isGenerator &&
      !isAsync &&
      kind === "method" && (
        node.key.type === "Identifier" && node.key.name === "constructor" ||
        node.key.type === "Literal" && node.key.value === "constructor"
      );
    node.kind = isConstructor ? "constructor" : kind;
    node.value = this.parseMethod(isGenerator, isAsync);
    this.finishNode(node, "MethodDefinition");
  } else {
    // Field
    if (this.eat(tokTypes.eq)) {
      if (this.curLineStart !== line && this.curIndent <= indent && this.tokenStartsLine()) {
        // Estimated the next line is the next class element by indentations.
        node.value = null;
      } else {
        var oldInAsync = this.inAsync;
        var oldInGenerator = this.inGenerator;
        this.inAsync = false;
        this.inGenerator = false;
        node.value = this.parseMaybeAssign();
        this.inAsync = oldInAsync;
        this.inGenerator = oldInGenerator;
      }
    } else {
      node.value = null;
    }
    this.semicolon();
    this.finishNode(node, "PropertyDefinition");
  }

  return node
};

lp$1.parseClassStaticBlock = function(node) {
  var blockIndent = this.curIndent, line = this.curLineStart;
  node.body = [];
  this.pushCx();
  while (!this.closes(tokTypes.braceR, blockIndent, line, true))
    { node.body.push(this.parseStatement()); }
  this.popCx();
  this.eat(tokTypes.braceR);

  return this.finishNode(node, "StaticBlock")
};

lp$1.isClassElementNameStart = function() {
  return this.toks.isClassElementNameStart()
};

lp$1.parseClassElementName = function(element) {
  if (this.toks.type === tokTypes.privateId) {
    element.computed = false;
    element.key = this.parsePrivateIdent();
  } else {
    this.parsePropertyName(element);
  }
};

lp$1.parseFunction = function(node, isStatement, isAsync) {
  var oldInAsync = this.inAsync, oldInGenerator = this.inGenerator, oldInFunction = this.inFunction;
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
  this.inGenerator = node.generator;
  this.inFunction = true;
  node.params = this.parseFunctionParams();
  node.body = this.parseBlock();
  this.toks.adaptDirectivePrologue(node.body.body);
  this.inAsync = oldInAsync;
  this.inGenerator = oldInGenerator;
  this.inFunction = oldInFunction;
  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression")
};

lp$1.parseExport = function() {
  var node = this.startNode();
  this.next();
  if (this.eat(tokTypes.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseExprAtom();
      } else {
        node.exported = null;
      }
    }
    node.source = this.eatContextual("from") ? this.parseExprAtom() : this.dummyString();
    if (this.options.ecmaVersion >= 16)
      { node.attributes = this.parseWithClause(); }
    this.semicolon();
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
    if (this.options.ecmaVersion >= 16)
      { node.attributes = this.parseWithClause(); }
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
    node.specifiers = this.parseImportSpecifiers();
    node.source = this.eatContextual("from") && this.tok.type === tokTypes.string ? this.parseExprAtom() : this.dummyString();
    if (elt) { node.specifiers.unshift(elt); }
  }
  if (this.options.ecmaVersion >= 16)
    { node.attributes = this.parseWithClause(); }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

lp$1.parseImportSpecifiers = function() {
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
      var elt$1 = this.startNode();
      if (this.eat(tokTypes.star)) {
        elt$1.local = this.eatContextual("as") ? this.parseModuleExportName() : this.dummyIdent();
        this.finishNode(elt$1, "ImportNamespaceSpecifier");
      } else {
        if (this.isContextual("from")) { break }
        elt$1.imported = this.parseModuleExportName();
        if (isDummy(elt$1.imported)) { break }
        elt$1.local = this.eatContextual("as") ? this.parseModuleExportName() : elt$1.imported;
        this.finishNode(elt$1, "ImportSpecifier");
      }
      elts.push(elt$1);
      this.eat(tokTypes.comma);
    }
    this.eat(tokTypes.braceR);
    this.popCx();
  }
  return elts
};

lp$1.parseWithClause = function() {
  var nodes = [];
  if (!this.eat(tokTypes._with)) {
    return nodes
  }

  var indent = this.curIndent, line = this.curLineStart, continuedLine = this.nextLineStart;
  this.pushCx();
  this.eat(tokTypes.braceL);
  if (this.curLineStart > continuedLine) { continuedLine = this.curLineStart; }
  while (!this.closes(tokTypes.braceR, indent + (this.curLineStart <= continuedLine ? 1 : 0), line)) {
    var attr = this.startNode();
    attr.key = this.tok.type === tokTypes.string ? this.parseExprAtom() : this.parseIdent();
    if (this.eat(tokTypes.colon)) {
      if (this.tok.type === tokTypes.string)
        { attr.value = this.parseExprAtom(); }
      else { attr.value = this.dummyString(); }
    } else {
      if (isDummy(attr.key)) { break }
      if (this.tok.type === tokTypes.string)
        { attr.value = this.parseExprAtom(); }
      else { break }
    }
    nodes.push(this.finishNode(attr, "ImportAttribute"));
    this.eat(tokTypes.comma);
  }
  this.eat(tokTypes.braceR);
  this.popCx();
  return nodes
};

lp$1.parseExportSpecifierList = function() {
  var elts = [];
  var indent = this.curIndent, line = this.curLineStart, continuedLine = this.nextLineStart;
  this.pushCx();
  this.eat(tokTypes.braceL);
  if (this.curLineStart > continuedLine) { continuedLine = this.curLineStart; }
  while (!this.closes(tokTypes.braceR, indent + (this.curLineStart <= continuedLine ? 1 : 0), line)) {
    if (this.isContextual("from")) { break }
    var elt = this.startNode();
    elt.local = this.parseModuleExportName();
    if (isDummy(elt.local)) { break }
    elt.exported = this.eatContextual("as") ? this.parseModuleExportName() : elt.local;
    this.finishNode(elt, "ExportSpecifier");
    elts.push(elt);
    this.eat(tokTypes.comma);
  }
  this.eat(tokTypes.braceR);
  this.popCx();
  return elts
};

lp$1.parseModuleExportName = function() {
  return this.options.ecmaVersion >= 13 && this.tok.type === tokTypes.string
    ? this.parseExprAtom()
    : this.parseIdent()
};

var lp = LooseParser.prototype;

lp.checkLVal = function(expr) {
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

lp.parseExpression = function(noIn) {
  var start = this.storeCurrentPos();
  var expr = this.parseMaybeAssign(noIn);
  if (this.tok.type === tokTypes.comma) {
    var node = this.startNodeAt(start);
    node.expressions = [expr];
    while (this.eat(tokTypes.comma)) { node.expressions.push(this.parseMaybeAssign(noIn)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

lp.parseParenExpression = function() {
  this.pushCx();
  this.expect(tokTypes.parenL);
  var val = this.parseExpression();
  this.popCx();
  this.expect(tokTypes.parenR);
  return val
};

lp.parseMaybeAssign = function(noIn) {
  // `yield` should be an identifier reference if it's not in generator functions.
  if (this.inGenerator && this.toks.isContextual("yield")) {
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

lp.parseMaybeConditional = function(noIn) {
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

lp.parseExprOps = function(noIn) {
  var start = this.storeCurrentPos();
  var indent = this.curIndent, line = this.curLineStart;
  return this.parseExprOp(this.parseMaybeUnary(false), start, -1, noIn, indent, line)
};

lp.parseExprOp = function(left, start, minPrec, noIn, indent, line) {
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
      this.finishNode(node, /&&|\|\||\?\?/.test(node.operator) ? "LogicalExpression" : "BinaryExpression");
      return this.parseExprOp(node, start, minPrec, noIn, indent, line)
    }
  }
  return left
};

lp.parseMaybeUnary = function(sawUnary) {
  var start = this.storeCurrentPos(), expr;
  if (this.options.ecmaVersion >= 8 && this.toks.isContextual("await") &&
      (this.inAsync || (this.toks.inModule && this.options.ecmaVersion >= 13) ||
       (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
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
  } else if (!sawUnary && this.tok.type === tokTypes.privateId) {
    expr = this.parsePrivateIdent();
  } else {
    expr = this.parseExprSubscripts();
    while (this.tok.type.postfix && !this.canInsertSemicolon()) {
      var node$2 = this.startNodeAt(start);
      node$2.operator = this.tok.value;
      node$2.prefix = false;
      node$2.argument = this.checkLVal(expr);
      this.next();
      expr = this.finishNode(node$2, "UpdateExpression");
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

lp.parseExprSubscripts = function() {
  var start = this.storeCurrentPos();
  return this.parseSubscripts(this.parseExprAtom(), start, false, this.curIndent, this.curLineStart)
};

lp.parseSubscripts = function(base, start, noCalls, startIndent, line) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optionalChained = false;
  for (;;) {
    if (this.curLineStart !== line && this.curIndent <= startIndent && this.tokenStartsLine()) {
      if (this.tok.type === tokTypes.dot && this.curIndent === startIndent)
        { --startIndent; }
      else
        { break }
    }

    var maybeAsyncArrow = base.type === "Identifier" && base.name === "async" && !this.canInsertSemicolon();
    var optional = optionalSupported && this.eat(tokTypes.questionDot);
    if (optional) {
      optionalChained = true;
    }

    if ((optional && this.tok.type !== tokTypes.parenL && this.tok.type !== tokTypes.bracketL && this.tok.type !== tokTypes.backQuote) || this.eat(tokTypes.dot)) {
      var node = this.startNodeAt(start);
      node.object = base;
      if (this.curLineStart !== line && this.curIndent <= startIndent && this.tokenStartsLine())
        { node.property = this.dummyIdent(); }
      else
        { node.property = this.parsePropertyAccessor() || this.dummyIdent(); }
      node.computed = false;
      if (optionalSupported) {
        node.optional = optional;
      }
      base = this.finishNode(node, "MemberExpression");
    } else if (this.tok.type === tokTypes.bracketL) {
      this.pushCx();
      this.next();
      var node$1 = this.startNodeAt(start);
      node$1.object = base;
      node$1.property = this.parseExpression();
      node$1.computed = true;
      if (optionalSupported) {
        node$1.optional = optional;
      }
      this.popCx();
      this.expect(tokTypes.bracketR);
      base = this.finishNode(node$1, "MemberExpression");
    } else if (!noCalls && this.tok.type === tokTypes.parenL) {
      var exprList = this.parseExprList(tokTypes.parenR);
      if (maybeAsyncArrow && this.eat(tokTypes.arrow))
        { return this.parseArrowExpression(this.startNodeAt(start), exprList, true) }
      var node$2 = this.startNodeAt(start);
      node$2.callee = base;
      node$2.arguments = exprList;
      if (optionalSupported) {
        node$2.optional = optional;
      }
      base = this.finishNode(node$2, "CallExpression");
    } else if (this.tok.type === tokTypes.backQuote) {
      var node$3 = this.startNodeAt(start);
      node$3.tag = base;
      node$3.quasi = this.parseTemplate();
      base = this.finishNode(node$3, "TaggedTemplateExpression");
    } else {
      break
    }
  }

  if (optionalChained) {
    var chainNode = this.startNodeAt(start);
    chainNode.expression = base;
    base = this.finishNode(chainNode, "ChainExpression");
  }
  return base
};

lp.parseExprAtom = function() {
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
      if (this.eat(tokTypes._function)) {
        this.toks.overrideContext(tokContexts.f_expr);
        return this.parseFunction(this.startNodeAt(start), false, true)
      }
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
    if (this.tok.type === tokTypes.num && node.raw.charCodeAt(node.raw.length - 1) === 110)
      { node.bigint = node.value != null ? node.value.toString() : node.raw.slice(0, -1).replace(/_/g, ""); }
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
    this.toks.overrideContext(tokContexts.b_expr);
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

  case tokTypes._import:
    if (this.options.ecmaVersion >= 11) {
      return this.parseExprImport()
    } else {
      return this.dummyIdent()
    }

  default:
    return this.dummyIdent()
  }
};

lp.parseExprImport = function() {
  var node = this.startNode();
  var meta = this.parseIdent(true);
  switch (this.tok.type) {
  case tokTypes.parenL:
    return this.parseDynamicImport(node)
  case tokTypes.dot:
    node.meta = meta;
    return this.parseImportMeta(node)
  default:
    node.name = "import";
    return this.finishNode(node, "Identifier")
  }
};

lp.parseDynamicImport = function(node) {
  var list = this.parseExprList(tokTypes.parenR);
  node.source = list[0] || this.dummyString();
  node.options = list[1] || null;
  return this.finishNode(node, "ImportExpression")
};

lp.parseImportMeta = function(node) {
  this.next(); // skip '.'
  node.property = this.parseIdent(true);
  return this.finishNode(node, "MetaProperty")
};

lp.parseNew = function() {
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

lp.parseTemplateElement = function() {
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

lp.parseTemplate = function() {
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement();
  node.quasis = [curElt];
  while (!curElt.tail) {
    this.next();
    node.expressions.push(this.parseExpression());
    if (this.expect(tokTypes.braceR)) {
      curElt = this.parseTemplateElement();
    } else {
      curElt = this.startNode();
      curElt.value = {cooked: "", raw: ""};
      curElt.tail = true;
      this.finishNode(curElt, "TemplateElement");
    }
    node.quasis.push(curElt);
  }
  this.expect(tokTypes.backQuote);
  return this.finishNode(node, "TemplateLiteral")
};

lp.parseObj = function() {
  var node = this.startNode();
  node.properties = [];
  this.pushCx();
  var indent = this.curIndent + 1, line = this.curLineStart;
  this.eat(tokTypes.braceL);
  if (this.curIndent + 1 < indent) { indent = this.curIndent; line = this.curLineStart; }
  while (!this.closes(tokTypes.braceR, indent, line)) {
    var prop = this.startNode(), isGenerator = (void 0), isAsync = (void 0), start = (void 0);
    if (this.options.ecmaVersion >= 9 && this.eat(tokTypes.ellipsis)) {
      prop.argument = this.parseMaybeAssign();
      node.properties.push(this.finishNode(prop, "SpreadElement"));
      this.eat(tokTypes.comma);
      continue
    }
    if (this.options.ecmaVersion >= 6) {
      start = this.storeCurrentPos();
      prop.method = false;
      prop.shorthand = false;
      isGenerator = this.eat(tokTypes.star);
    }
    this.parsePropertyName(prop);
    if (this.toks.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(tokTypes.star);
      this.parsePropertyName(prop);
    } else {
      isAsync = false;
    }
    if (isDummy(prop.key)) { if (isDummy(this.parseMaybeAssign())) { this.next(); } this.eat(tokTypes.comma); continue }
    if (this.eat(tokTypes.colon)) {
      prop.kind = "init";
      prop.value = this.parseMaybeAssign();
    } else if (this.options.ecmaVersion >= 6 && (this.tok.type === tokTypes.parenL || this.tok.type === tokTypes.braceL)) {
      prop.kind = "init";
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
    } else if (this.options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
               !prop.computed && (prop.key.name === "get" || prop.key.name === "set") &&
               (this.tok.type !== tokTypes.comma && this.tok.type !== tokTypes.braceR && this.tok.type !== tokTypes.eq)) {
      prop.kind = prop.key.name;
      this.parsePropertyName(prop);
      prop.value = this.parseMethod(false);
    } else {
      prop.kind = "init";
      if (this.options.ecmaVersion >= 6) {
        if (this.eat(tokTypes.eq)) {
          var assign = this.startNodeAt(start);
          assign.operator = "=";
          assign.left = prop.key;
          assign.right = this.parseMaybeAssign();
          prop.value = this.finishNode(assign, "AssignmentExpression");
        } else {
          prop.value = prop.key;
        }
      } else {
        prop.value = this.dummyIdent();
      }
      prop.shorthand = true;
    }
    node.properties.push(this.finishNode(prop, "Property"));
    this.eat(tokTypes.comma);
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

lp.parsePropertyName = function(prop) {
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

lp.parsePropertyAccessor = function() {
  if (this.tok.type === tokTypes.name || this.tok.type.keyword) { return this.parseIdent() }
  if (this.tok.type === tokTypes.privateId) { return this.parsePrivateIdent() }
};

lp.parseIdent = function() {
  var name = this.tok.type === tokTypes.name ? this.tok.value : this.tok.type.keyword;
  if (!name) { return this.dummyIdent() }
  if (this.tok.type.keyword) { this.toks.type = tokTypes.name; }
  var node = this.startNode();
  this.next();
  node.name = name;
  return this.finishNode(node, "Identifier")
};

lp.parsePrivateIdent = function() {
  var node = this.startNode();
  node.name = this.tok.value;
  this.next();
  return this.finishNode(node, "PrivateIdentifier")
};

lp.initFunction = function(node) {
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

lp.toAssignable = function(node, binding) {
  if (!node || node.type === "Identifier" || (node.type === "MemberExpression" && !binding)) ; else if (node.type === "ParenthesizedExpression") {
    this.toAssignable(node.expression, binding);
  } else if (this.options.ecmaVersion < 6) {
    return this.dummyIdent()
  } else if (node.type === "ObjectExpression") {
    node.type = "ObjectPattern";
    for (var i = 0, list = node.properties; i < list.length; i += 1)
      {
      var prop = list[i];

      this.toAssignable(prop, binding);
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

lp.toAssignableList = function(exprList, binding) {
  for (var i = 0, list = exprList; i < list.length; i += 1)
    {
    var expr = list[i];

    this.toAssignable(expr, binding);
  }
  return exprList
};

lp.parseFunctionParams = function(params) {
  params = this.parseExprList(tokTypes.parenR);
  return this.toAssignableList(params, true)
};

lp.parseMethod = function(isGenerator, isAsync) {
  var node = this.startNode(), oldInAsync = this.inAsync, oldInGenerator = this.inGenerator, oldInFunction = this.inFunction;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = !!isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }
  this.inAsync = node.async;
  this.inGenerator = node.generator;
  this.inFunction = true;
  node.params = this.parseFunctionParams();
  node.body = this.parseBlock();
  this.toks.adaptDirectivePrologue(node.body.body);
  this.inAsync = oldInAsync;
  this.inGenerator = oldInGenerator;
  this.inFunction = oldInFunction;
  return this.finishNode(node, "FunctionExpression")
};

lp.parseArrowExpression = function(node, params, isAsync) {
  var oldInAsync = this.inAsync, oldInGenerator = this.inGenerator, oldInFunction = this.inFunction;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }
  this.inAsync = node.async;
  this.inGenerator = false;
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
  this.inGenerator = oldInGenerator;
  this.inFunction = oldInFunction;
  return this.finishNode(node, "ArrowFunctionExpression")
};

lp.parseExprList = function(close, allowEmpty) {
  this.pushCx();
  var indent = this.curIndent, line = this.curLineStart, elts = [];
  this.next(); // Opening bracket
  while (!this.closes(close, indent + 1, line)) {
    if (this.eat(tokTypes.comma)) {
      elts.push(allowEmpty ? null : this.dummyIdent());
      continue
    }
    var elt = this.parseMaybeAssign();
    if (isDummy(elt)) {
      if (this.closes(close, indent, line)) { break }
      this.next();
    } else {
      elts.push(elt);
    }
    this.eat(tokTypes.comma);
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

lp.parseAwait = function() {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary();
  return this.finishNode(node, "AwaitExpression")
};

// Acorn: Loose parser
//
// This module provides an alternative parser that exposes that same
// interface as the main module's `parse` function, but will try to
// parse anything as JavaScript, repairing syntax error the best it
// can. There are circumstances in which it will raise an error and
// give up, but they are very rare. The resulting AST will be a mostly
// valid JavaScript AST (as per the [ESTree spec][estree], except
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
// [estree]: https://github.com/estree/estree
//
// The expected use for this is to *first* try `acorn.parse`, and only
// if that fails switch to the loose parser. The loose parser might
// parse badly indented code incorrectly, so **don't** use it as your
// default parser.
//
// Quite a lot of acorn.js is duplicated here. The alternative was to
// add a *lot* of extra cruft to that file, making it less readable
// and slower. Copying and editing the code allowed me to make
// invasive changes and simplifications without creating a complicated
// tangle.


defaultOptions.tabSize = 4;

function parse(input, options) {
  return LooseParser.parse(input, options)
}

export { LooseParser, isDummy, parse };
