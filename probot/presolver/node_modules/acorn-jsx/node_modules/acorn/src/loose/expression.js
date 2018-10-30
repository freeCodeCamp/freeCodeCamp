import {LooseParser} from "./state"
import {isDummy} from "./parseutil"
import {tokTypes as tt} from "acorn"

const lp = LooseParser.prototype

lp.checkLVal = function(expr) {
  if (!expr) return expr
  switch (expr.type) {
  case "Identifier":
  case "MemberExpression":
    return expr

  case "ParenthesizedExpression":
    expr.expression = this.checkLVal(expr.expression)
    return expr

  default:
    return this.dummyIdent()
  }
}

lp.parseExpression = function(noIn) {
  let start = this.storeCurrentPos()
  let expr = this.parseMaybeAssign(noIn)
  if (this.tok.type === tt.comma) {
    let node = this.startNodeAt(start)
    node.expressions = [expr]
    while (this.eat(tt.comma)) node.expressions.push(this.parseMaybeAssign(noIn))
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
}

lp.parseParenExpression = function() {
  this.pushCx()
  this.expect(tt.parenL)
  let val = this.parseExpression()
  this.popCx()
  this.expect(tt.parenR)
  return val
}

lp.parseMaybeAssign = function(noIn) {
  if (this.toks.isContextual("yield")) {
    let node = this.startNode()
    this.next()
    if (this.semicolon() || this.canInsertSemicolon() || (this.tok.type != tt.star && !this.tok.type.startsExpr)) {
      node.delegate = false
      node.argument = null
    } else {
      node.delegate = this.eat(tt.star)
      node.argument = this.parseMaybeAssign()
    }
    return this.finishNode(node, "YieldExpression")
  }

  let start = this.storeCurrentPos()
  let left = this.parseMaybeConditional(noIn)
  if (this.tok.type.isAssign) {
    let node = this.startNodeAt(start)
    node.operator = this.tok.value
    node.left = this.tok.type === tt.eq ? this.toAssignable(left) : this.checkLVal(left)
    this.next()
    node.right = this.parseMaybeAssign(noIn)
    return this.finishNode(node, "AssignmentExpression")
  }
  return left
}

lp.parseMaybeConditional = function(noIn) {
  let start = this.storeCurrentPos()
  let expr = this.parseExprOps(noIn)
  if (this.eat(tt.question)) {
    let node = this.startNodeAt(start)
    node.test = expr
    node.consequent = this.parseMaybeAssign()
    node.alternate = this.expect(tt.colon) ? this.parseMaybeAssign(noIn) : this.dummyIdent()
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
}

lp.parseExprOps = function(noIn) {
  let start = this.storeCurrentPos()
  let indent = this.curIndent, line = this.curLineStart
  return this.parseExprOp(this.parseMaybeUnary(false), start, -1, noIn, indent, line)
}

lp.parseExprOp = function(left, start, minPrec, noIn, indent, line) {
  if (this.curLineStart != line && this.curIndent < indent && this.tokenStartsLine()) return left
  let prec = this.tok.type.binop
  if (prec != null && (!noIn || this.tok.type !== tt._in)) {
    if (prec > minPrec) {
      let node = this.startNodeAt(start)
      node.left = left
      node.operator = this.tok.value
      this.next()
      if (this.curLineStart != line && this.curIndent < indent && this.tokenStartsLine()) {
        node.right = this.dummyIdent()
      } else {
        let rightStart = this.storeCurrentPos()
        node.right = this.parseExprOp(this.parseMaybeUnary(false), rightStart, prec, noIn, indent, line)
      }
      this.finishNode(node, /&&|\|\|/.test(node.operator) ? "LogicalExpression" : "BinaryExpression")
      return this.parseExprOp(node, start, minPrec, noIn, indent, line)
    }
  }
  return left
}

lp.parseMaybeUnary = function(sawUnary) {
  let start = this.storeCurrentPos(), expr
  if (this.tok.type.prefix) {
    let node = this.startNode(), update = this.tok.type === tt.incDec
    if (!update) sawUnary = true
    node.operator = this.tok.value
    node.prefix = true
    this.next()
    node.argument = this.parseMaybeUnary(true)
    if (update) node.argument = this.checkLVal(node.argument)
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression")
  } else if (this.tok.type === tt.ellipsis) {
    let node = this.startNode()
    this.next()
    node.argument = this.parseMaybeUnary(sawUnary)
    expr = this.finishNode(node, "SpreadElement")
  } else {
    expr = this.parseExprSubscripts()
    while (this.tok.type.postfix && !this.canInsertSemicolon()) {
      let node = this.startNodeAt(start)
      node.operator = this.tok.value
      node.prefix = false
      node.argument = this.checkLVal(expr)
      this.next()
      expr = this.finishNode(node, "UpdateExpression")
    }
  }

  if (!sawUnary && this.eat(tt.starstar)) {
    let node = this.startNodeAt(start)
    node.operator = "**"
    node.left = expr
    node.right = this.parseMaybeUnary(false)
    return this.finishNode(node, "BinaryExpression")
  }

  return expr
}

lp.parseExprSubscripts = function() {
  let start = this.storeCurrentPos()
  return this.parseSubscripts(this.parseExprAtom(), start, false, this.curIndent, this.curLineStart)
}

lp.parseSubscripts = function(base, start, noCalls, startIndent, line) {
  for (;;) {
    if (this.curLineStart != line && this.curIndent <= startIndent && this.tokenStartsLine()) {
      if (this.tok.type == tt.dot && this.curIndent == startIndent)
        --startIndent
      else
        return base
    }

    if (this.eat(tt.dot)) {
      let node = this.startNodeAt(start)
      node.object = base
      if (this.curLineStart != line && this.curIndent <= startIndent && this.tokenStartsLine())
        node.property = this.dummyIdent()
      else
        node.property = this.parsePropertyAccessor() || this.dummyIdent()
      node.computed = false
      base = this.finishNode(node, "MemberExpression")
    } else if (this.tok.type == tt.bracketL) {
      this.pushCx()
      this.next()
      let node = this.startNodeAt(start)
      node.object = base
      node.property = this.parseExpression()
      node.computed = true
      this.popCx()
      this.expect(tt.bracketR)
      base = this.finishNode(node, "MemberExpression")
    } else if (!noCalls && this.tok.type == tt.parenL) {
      let node = this.startNodeAt(start)
      node.callee = base
      node.arguments = this.parseExprList(tt.parenR)
      base = this.finishNode(node, "CallExpression")
    } else if (this.tok.type == tt.backQuote) {
      let node = this.startNodeAt(start)
      node.tag = base
      node.quasi = this.parseTemplate()
      base = this.finishNode(node, "TaggedTemplateExpression")
    } else {
      return base
    }
  }
}

lp.parseExprAtom = function() {
  let node
  switch (this.tok.type) {
  case tt._this:
  case tt._super:
    let type = this.tok.type === tt._this ? "ThisExpression" : "Super"
    node = this.startNode()
    this.next()
    return this.finishNode(node, type)

  case tt.name:
    let start = this.storeCurrentPos()
    let id = this.parseIdent()
    return this.eat(tt.arrow) ? this.parseArrowExpression(this.startNodeAt(start), [id]) : id

  case tt.regexp:
    node = this.startNode()
    let val = this.tok.value
    node.regex = {pattern: val.pattern, flags: val.flags}
    node.value = val.value
    node.raw = this.input.slice(this.tok.start, this.tok.end)
    this.next()
    return this.finishNode(node, "Literal")

  case tt.num: case tt.string:
    node = this.startNode()
    node.value = this.tok.value
    node.raw = this.input.slice(this.tok.start, this.tok.end)
    this.next()
    return this.finishNode(node, "Literal")

  case tt._null: case tt._true: case tt._false:
    node = this.startNode()
    node.value = this.tok.type === tt._null ? null : this.tok.type === tt._true
    node.raw = this.tok.type.keyword
    this.next()
    return this.finishNode(node, "Literal")

  case tt.parenL:
    let parenStart = this.storeCurrentPos()
    this.next()
    let inner = this.parseExpression()
    this.expect(tt.parenR)
    if (this.eat(tt.arrow)) {
      return this.parseArrowExpression(this.startNodeAt(parenStart), inner.expressions || (isDummy(inner) ? [] : [inner]))
    }
    if (this.options.preserveParens) {
      let par = this.startNodeAt(parenStart)
      par.expression = inner
      inner = this.finishNode(par, "ParenthesizedExpression")
    }
    return inner

  case tt.bracketL:
    node = this.startNode()
    node.elements = this.parseExprList(tt.bracketR, true)
    return this.finishNode(node, "ArrayExpression")

  case tt.braceL:
    return this.parseObj()

  case tt._class:
    return this.parseClass()

  case tt._function:
    node = this.startNode()
    this.next()
    return this.parseFunction(node, false)

  case tt._new:
    return this.parseNew()

  case tt.backQuote:
    return this.parseTemplate()

  default:
    return this.dummyIdent()
  }
}

lp.parseNew = function() {
  let node = this.startNode(), startIndent = this.curIndent, line = this.curLineStart
  let meta = this.parseIdent(true)
  if (this.options.ecmaVersion >= 6 && this.eat(tt.dot)) {
    node.meta = meta
    node.property = this.parseIdent(true)
    return this.finishNode(node, "MetaProperty")
  }
  let start = this.storeCurrentPos()
  node.callee = this.parseSubscripts(this.parseExprAtom(), start, true, startIndent, line)
  if (this.tok.type == tt.parenL) {
    node.arguments = this.parseExprList(tt.parenR)
  } else {
    node.arguments = []
  }
  return this.finishNode(node, "NewExpression")
}

lp.parseTemplateElement = function() {
  let elem = this.startNode()
  elem.value = {
    raw: this.input.slice(this.tok.start, this.tok.end).replace(/\r\n?/g, '\n'),
    cooked: this.tok.value
  }
  this.next()
  elem.tail = this.tok.type === tt.backQuote
  return this.finishNode(elem, "TemplateElement")
}

lp.parseTemplate = function() {
  let node = this.startNode()
  this.next()
  node.expressions = []
  let curElt = this.parseTemplateElement()
  node.quasis = [curElt]
  while (!curElt.tail) {
    this.next()
    node.expressions.push(this.parseExpression())
    if (this.expect(tt.braceR)) {
      curElt = this.parseTemplateElement()
    } else {
      curElt = this.startNode()
      curElt.value = {cooked: '', raw: ''}
      curElt.tail = true
      this.finishNode(curElt, "TemplateElement")
    }
    node.quasis.push(curElt)
  }
  this.expect(tt.backQuote)
  return this.finishNode(node, "TemplateLiteral")
}

lp.parseObj = function() {
  let node = this.startNode()
  node.properties = []
  this.pushCx()
  let indent = this.curIndent + 1, line = this.curLineStart
  this.eat(tt.braceL)
  if (this.curIndent + 1 < indent) { indent = this.curIndent; line = this.curLineStart }
  while (!this.closes(tt.braceR, indent, line)) {
    let prop = this.startNode(), isGenerator, start
    if (this.options.ecmaVersion >= 6) {
      start = this.storeCurrentPos()
      prop.method = false
      prop.shorthand = false
      isGenerator = this.eat(tt.star)
    }
    this.parsePropertyName(prop)
    if (isDummy(prop.key)) { if (isDummy(this.parseMaybeAssign())) this.next(); this.eat(tt.comma); continue }
    if (this.eat(tt.colon)) {
      prop.kind = "init"
      prop.value = this.parseMaybeAssign()
    } else if (this.options.ecmaVersion >= 6 && (this.tok.type === tt.parenL || this.tok.type === tt.braceL)) {
      prop.kind = "init"
      prop.method = true
      prop.value = this.parseMethod(isGenerator)
    } else if (this.options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
               !prop.computed && (prop.key.name === "get" || prop.key.name === "set") &&
               (this.tok.type != tt.comma && this.tok.type != tt.braceR)) {
      prop.kind = prop.key.name
      this.parsePropertyName(prop)
      prop.value = this.parseMethod(false)
    } else {
      prop.kind = "init"
      if (this.options.ecmaVersion >= 6) {
        if (this.eat(tt.eq)) {
          let assign = this.startNodeAt(start)
          assign.operator = "="
          assign.left = prop.key
          assign.right = this.parseMaybeAssign()
          prop.value = this.finishNode(assign, "AssignmentExpression")
        } else {
          prop.value = prop.key
        }
      } else {
        prop.value = this.dummyIdent()
      }
      prop.shorthand = true
    }
    node.properties.push(this.finishNode(prop, "Property"))
    this.eat(tt.comma)
  }
  this.popCx()
  if (!this.eat(tt.braceR)) {
    // If there is no closing brace, make the node span to the start
    // of the next token (this is useful for Tern)
    this.last.end = this.tok.start
    if (this.options.locations) this.last.loc.end = this.tok.loc.start
  }
  return this.finishNode(node, "ObjectExpression")
}

lp.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(tt.bracketL)) {
      prop.computed = true
      prop.key = this.parseExpression()
      this.expect(tt.bracketR)
      return
    } else {
      prop.computed = false
    }
  }
  let key = (this.tok.type === tt.num || this.tok.type === tt.string) ? this.parseExprAtom() : this.parseIdent()
  prop.key = key || this.dummyIdent()
}

lp.parsePropertyAccessor = function() {
  if (this.tok.type === tt.name || this.tok.type.keyword) return this.parseIdent()
}

lp.parseIdent = function() {
  let name = this.tok.type === tt.name ? this.tok.value : this.tok.type.keyword
  if (!name) return this.dummyIdent()
  let node = this.startNode()
  this.next()
  node.name = name
  return this.finishNode(node, "Identifier")
}

lp.initFunction = function(node) {
  node.id = null
  node.params = []
  if (this.options.ecmaVersion >= 6) {
    node.generator = false
    node.expression = false
  }
}

// Convert existing expression atom to assignable pattern
// if possible.

lp.toAssignable = function(node, binding) {
  if (!node || node.type == "Identifier" || (node.type == "MemberExpression" && !binding)) {
    // Okay
  } else if (node.type == "ParenthesizedExpression") {
    node.expression = this.toAssignable(node.expression, binding)
  } else if (this.options.ecmaVersion < 6) {
    return this.dummyIdent()
  } else if (node.type == "ObjectExpression") {
    node.type = "ObjectPattern"
    let props = node.properties
    for (let i = 0; i < props.length; i++)
      props[i].value = this.toAssignable(props[i].value, binding)
  } else if (node.type == "ArrayExpression") {
    node.type = "ArrayPattern"
    this.toAssignableList(node.elements, binding)
  } else if (node.type == "SpreadElement") {
    node.type = "RestElement"
    node.argument = this.toAssignable(node.argument, binding)
  } else if (node.type == "AssignmentExpression") {
    node.type = "AssignmentPattern"
    delete node.operator
  } else {
    return this.dummyIdent()
  }
  return node
}

lp.toAssignableList = function(exprList, binding) {
  for (let i = 0; i < exprList.length; i++)
    exprList[i] = this.toAssignable(exprList[i], binding)
  return exprList
}

lp.parseFunctionParams = function(params) {
  params = this.parseExprList(tt.parenR)
  return this.toAssignableList(params, true)
}

lp.parseMethod = function(isGenerator) {
  let node = this.startNode()
  this.initFunction(node)
  node.params = this.parseFunctionParams()
  node.generator = isGenerator || false
  node.expression = this.options.ecmaVersion >= 6 && this.tok.type !== tt.braceL
  node.body = node.expression ? this.parseMaybeAssign() : this.parseBlock()
  return this.finishNode(node, "FunctionExpression")
}

lp.parseArrowExpression = function(node, params) {
  this.initFunction(node)
  node.params = this.toAssignableList(params, true)
  node.expression = this.tok.type !== tt.braceL
  node.body = node.expression ? this.parseMaybeAssign() : this.parseBlock()
  return this.finishNode(node, "ArrowFunctionExpression")
}

lp.parseExprList = function(close, allowEmpty) {
  this.pushCx()
  let indent = this.curIndent, line = this.curLineStart, elts = []
  this.next() // Opening bracket
  while (!this.closes(close, indent + 1, line)) {
    if (this.eat(tt.comma)) {
      elts.push(allowEmpty ? null : this.dummyIdent())
      continue
    }
    let elt = this.parseMaybeAssign()
    if (isDummy(elt)) {
      if (this.closes(close, indent, line)) break
      this.next()
    } else {
      elts.push(elt)
    }
    this.eat(tt.comma)
  }
  this.popCx()
  if (!this.eat(close)) {
    // If there is no closing brace, make the node span to the start
    // of the next token (this is useful for Tern)
    this.last.end = this.tok.start
    if (this.options.locations) this.last.loc.end = this.tok.loc.start
  }
  return elts
}
