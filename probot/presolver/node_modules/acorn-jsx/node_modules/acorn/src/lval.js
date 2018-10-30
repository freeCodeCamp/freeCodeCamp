import {types as tt} from "./tokentype"
import {Parser} from "./state"
import {has} from "./util"

const pp = Parser.prototype

// Convert existing expression atom to assignable pattern
// if possible.

pp.toAssignable = function(node, isBinding) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
    case "Identifier":
    case "ObjectPattern":
    case "ArrayPattern":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern"
      for (let i = 0; i < node.properties.length; i++) {
        let prop = node.properties[i]
        if (prop.kind !== "init") this.raise(prop.key.start, "Object pattern can't contain getter or setter")
        this.toAssignable(prop.value, isBinding)
      }
      break

    case "ArrayExpression":
      node.type = "ArrayPattern"
      this.toAssignableList(node.elements, isBinding)
      break

    case "AssignmentExpression":
      if (node.operator === "=") {
        node.type = "AssignmentPattern"
        delete node.operator
        // falls through to AssignmentPattern
      } else {
        this.raise(node.left.end, "Only '=' operator can be used for specifying default value.")
        break
      }

    case "AssignmentPattern":
      if (node.right.type === "YieldExpression")
        this.raise(node.right.start, "Yield expression cannot be a default value")
      break

    case "ParenthesizedExpression":
      node.expression = this.toAssignable(node.expression, isBinding)
      break

    case "MemberExpression":
      if (!isBinding) break

    default:
      this.raise(node.start, "Assigning to rvalue")
    }
  }
  return node
}

// Convert list of expression atoms to binding list.

pp.toAssignableList = function(exprList, isBinding) {
  let end = exprList.length
  if (end) {
    let last = exprList[end - 1]
    if (last && last.type == "RestElement") {
      --end
    } else if (last && last.type == "SpreadElement") {
      last.type = "RestElement"
      let arg = last.argument
      this.toAssignable(arg, isBinding)
      if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern")
        this.unexpected(arg.start)
      --end
    }

    if (isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      this.unexpected(last.argument.start)
  }
  for (let i = 0; i < end; i++) {
    let elt = exprList[i]
    if (elt) this.toAssignable(elt, isBinding)
  }
  return exprList
}

// Parses spread element.

pp.parseSpread = function(refDestructuringErrors) {
  let node = this.startNode()
  this.next()
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors)
  return this.finishNode(node, "SpreadElement")
}

pp.parseRest = function(allowNonIdent) {
  let node = this.startNode()
  this.next()

  // RestElement inside of a function parameter must be an identifier
  if (allowNonIdent) node.argument = this.type === tt.name ? this.parseIdent() : this.unexpected()
  else node.argument = this.type === tt.name || this.type === tt.bracketL ? this.parseBindingAtom() : this.unexpected()

  return this.finishNode(node, "RestElement")
}

// Parses lvalue (assignable) atom.

pp.parseBindingAtom = function() {
  if (this.options.ecmaVersion < 6) return this.parseIdent()
  switch (this.type) {
  case tt.name:
    return this.parseIdent()

  case tt.bracketL:
    let node = this.startNode()
    this.next()
    node.elements = this.parseBindingList(tt.bracketR, true, true)
    return this.finishNode(node, "ArrayPattern")

  case tt.braceL:
    return this.parseObj(true)

  default:
    this.unexpected()
  }
}

pp.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowNonIdent) {
  let elts = [], first = true
  while (!this.eat(close)) {
    if (first) first = false
    else this.expect(tt.comma)
    if (allowEmpty && this.type === tt.comma) {
      elts.push(null)
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break
    } else if (this.type === tt.ellipsis) {
      let rest = this.parseRest(allowNonIdent)
      this.parseBindingListItem(rest)
      elts.push(rest)
      if (this.type === tt.comma) this.raise(this.start, "Comma is not permitted after the rest element")
      this.expect(close)
      break
    } else {
      let elem = this.parseMaybeDefault(this.start, this.startLoc)
      this.parseBindingListItem(elem)
      elts.push(elem)
    }
  }
  return elts
}

pp.parseBindingListItem = function(param) {
  return param
}

// Parses assignment pattern around given atom if possible.

pp.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom()
  if (this.options.ecmaVersion < 6 || !this.eat(tt.eq)) return left
  let node = this.startNodeAt(startPos, startLoc)
  node.left = left
  node.right = this.parseMaybeAssign()
  return this.finishNode(node, "AssignmentPattern")
}

// Verify that a node is an lval — something that can be assigned
// to.

pp.checkLVal = function(expr, isBinding, checkClashes) {
  switch (expr.type) {
  case "Identifier":
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      this.raiseRecoverable(expr.start, (isBinding ? "Binding " : "Assigning to ") + expr.name + " in strict mode")
    if (checkClashes) {
      if (has(checkClashes, expr.name))
        this.raiseRecoverable(expr.start, "Argument name clash")
      checkClashes[expr.name] = true
    }
    break

  case "MemberExpression":
    if (isBinding) this.raiseRecoverable(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression")
    break

  case "ObjectPattern":
    for (let i = 0; i < expr.properties.length; i++)
      this.checkLVal(expr.properties[i].value, isBinding, checkClashes)
    break

  case "ArrayPattern":
    for (let i = 0; i < expr.elements.length; i++) {
      let elem = expr.elements[i]
      if (elem) this.checkLVal(elem, isBinding, checkClashes)
    }
    break

  case "AssignmentPattern":
    this.checkLVal(expr.left, isBinding, checkClashes)
    break

  case "RestElement":
    this.checkLVal(expr.argument, isBinding, checkClashes)
    break

  case "ParenthesizedExpression":
    this.checkLVal(expr.expression, isBinding, checkClashes)
    break

  default:
    this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " rvalue")
  }
}
