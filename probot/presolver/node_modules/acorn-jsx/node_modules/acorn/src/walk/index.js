// AST walker module for Mozilla Parser API compatible trees

// A simple walk is one where you simply specify callbacks to be
// called on specific nodes. The last two arguments are optional. A
// simple use would be
//
//     walk.simple(myTree, {
//         Expression: function(node) { ... }
//     });
//
// to do something with all expressions. All Parser API node types
// can be used to identify node types, as well as Expression,
// Statement, and ScopeBody, which denote categories of nodes.
//
// The base argument can be used to pass a custom (recursive)
// walker, and state can be used to give this walked an initial
// state.

export function simple(node, visitors, base, state, override) {
  if (!base) base = exports.base
  ;(function c(node, st, override) {
    let type = override || node.type, found = visitors[type]
    base[type](node, st, c)
    if (found) found(node, st)
  })(node, state, override)
}

// An ancestor walk keeps an array of ancestor nodes (including the
// current node) and passes them to the callback as third parameter
// (and also as state parameter when no other state is present).
export function ancestor(node, visitors, base, state) {
  if (!base) base = exports.base
  let ancestors = []
  ;(function c(node, st, override) {
    let type = override || node.type, found = visitors[type]
    let isNew = node != ancestors[ancestors.length - 1]
    if (isNew) ancestors.push(node)
    base[type](node, st, c)
    if (found) found(node, st || ancestors, ancestors)
    if (isNew) ancestors.pop()
  })(node, state)
}

// A recursive walk is one where your functions override the default
// walkers. They can modify and replace the state parameter that's
// threaded through the walk, and can opt how and whether to walk
// their child nodes (by calling their third argument on these
// nodes).
export function recursive(node, state, funcs, base, override) {
  let visitor = funcs ? exports.make(funcs, base) : base
  ;(function c(node, st, override) {
    visitor[override || node.type](node, st, c)
  })(node, state, override)
}

function makeTest(test) {
  if (typeof test == "string")
    return type => type == test
  else if (!test)
    return () => true
  else
    return test
}

class Found {
  constructor(node, state) { this.node = node; this.state = state }
}

// Find a node with a given start, end, and type (all are optional,
// null can be used as wildcard). Returns a {node, state} object, or
// undefined when it doesn't find a matching node.
export function findNodeAt(node, start, end, test, base, state) {
  test = makeTest(test)
  if (!base) base = exports.base
  try {
    ;(function c(node, st, override) {
      let type = override || node.type
      if ((start == null || node.start <= start) &&
          (end == null || node.end >= end))
        base[type](node, st, c)
      if ((start == null || node.start == start) &&
          (end == null || node.end == end) &&
          test(type, node))
        throw new Found(node, st)
    })(node, state)
  } catch (e) {
    if (e instanceof Found) return e
    throw e
  }
}

// Find the innermost node of a given type that contains the given
// position. Interface similar to findNodeAt.
export function findNodeAround(node, pos, test, base, state) {
  test = makeTest(test)
  if (!base) base = exports.base
  try {
    ;(function c(node, st, override) {
      let type = override || node.type
      if (node.start > pos || node.end < pos) return
      base[type](node, st, c)
      if (test(type, node)) throw new Found(node, st)
    })(node, state)
  } catch (e) {
    if (e instanceof Found) return e
    throw e
  }
}

// Find the outermost matching node after a given position.
export function findNodeAfter(node, pos, test, base, state) {
  test = makeTest(test)
  if (!base) base = exports.base
  try {
    ;(function c(node, st, override) {
      if (node.end < pos) return
      let type = override || node.type
      if (node.start >= pos && test(type, node)) throw new Found(node, st)
      base[type](node, st, c)
    })(node, state)
  } catch (e) {
    if (e instanceof Found) return e
    throw e
  }
}

// Find the outermost matching node before a given position.
export function findNodeBefore(node, pos, test, base, state) {
  test = makeTest(test)
  if (!base) base = exports.base
  let max
  ;(function c(node, st, override) {
    if (node.start > pos) return
    let type = override || node.type
    if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node))
      max = new Found(node, st)
    base[type](node, st, c)
  })(node, state)
  return max
}

// Fallback to an Object.create polyfill for older environments.
const create = Object.create || function(proto) {
  function Ctor() {}
  Ctor.prototype = proto
  return new Ctor
}

// Used to create a custom walker. Will fill in all missing node
// type properties with the defaults.
export function make(funcs, base) {
  if (!base) base = exports.base
  let visitor = create(base)
  for (var type in funcs) visitor[type] = funcs[type]
  return visitor
}

function skipThrough(node, st, c) { c(node, st) }
function ignore(_node, _st, _c) {}

// Node walkers.

export const base = {}

base.Program = base.BlockStatement = (node, st, c) => {
  for (let i = 0; i < node.body.length; ++i)
    c(node.body[i], st, "Statement")
}
base.Statement = skipThrough
base.EmptyStatement = ignore
base.ExpressionStatement = base.ParenthesizedExpression =
  (node, st, c) => c(node.expression, st, "Expression")
base.IfStatement = (node, st, c) => {
  c(node.test, st, "Expression")
  c(node.consequent, st, "Statement")
  if (node.alternate) c(node.alternate, st, "Statement")
}
base.LabeledStatement = (node, st, c) => c(node.body, st, "Statement")
base.BreakStatement = base.ContinueStatement = ignore
base.WithStatement = (node, st, c) => {
  c(node.object, st, "Expression")
  c(node.body, st, "Statement")
}
base.SwitchStatement = (node, st, c) => {
  c(node.discriminant, st, "Expression")
  for (let i = 0; i < node.cases.length; ++i) {
    let cs = node.cases[i]
    if (cs.test) c(cs.test, st, "Expression")
    for (let j = 0; j < cs.consequent.length; ++j)
      c(cs.consequent[j], st, "Statement")
  }
}
base.ReturnStatement = base.YieldExpression = (node, st, c) => {
  if (node.argument) c(node.argument, st, "Expression")
}
base.ThrowStatement = base.SpreadElement =
  (node, st, c) => c(node.argument, st, "Expression")
base.TryStatement = (node, st, c) => {
  c(node.block, st, "Statement")
  if (node.handler) c(node.handler, st)
  if (node.finalizer) c(node.finalizer, st, "Statement")
}
base.CatchClause = (node, st, c) => {
  c(node.param, st, "Pattern")
  c(node.body, st, "ScopeBody")
}
base.WhileStatement = base.DoWhileStatement = (node, st, c) => {
  c(node.test, st, "Expression")
  c(node.body, st, "Statement")
}
base.ForStatement = (node, st, c) => {
  if (node.init) c(node.init, st, "ForInit")
  if (node.test) c(node.test, st, "Expression")
  if (node.update) c(node.update, st, "Expression")
  c(node.body, st, "Statement")
}
base.ForInStatement = base.ForOfStatement = (node, st, c) => {
  c(node.left, st, "ForInit")
  c(node.right, st, "Expression")
  c(node.body, st, "Statement")
}
base.ForInit = (node, st, c) => {
  if (node.type == "VariableDeclaration") c(node, st)
  else c(node, st, "Expression")
}
base.DebuggerStatement = ignore

base.FunctionDeclaration = (node, st, c) => c(node, st, "Function")
base.VariableDeclaration = (node, st, c) => {
  for (let i = 0; i < node.declarations.length; ++i)
    c(node.declarations[i], st)
}
base.VariableDeclarator = (node, st, c) => {
  c(node.id, st, "Pattern")
  if (node.init) c(node.init, st, "Expression")
}

base.Function = (node, st, c) => {
  if (node.id) c(node.id, st, "Pattern")
  for (let i = 0; i < node.params.length; i++)
    c(node.params[i], st, "Pattern")
  c(node.body, st, node.expression ? "ScopeExpression" : "ScopeBody")
}
// FIXME drop these node types in next major version
// (They are awkward, and in ES6 every block can be a scope.)
base.ScopeBody = (node, st, c) => c(node, st, "Statement")
base.ScopeExpression = (node, st, c) => c(node, st, "Expression")

base.Pattern = (node, st, c) => {
  if (node.type == "Identifier")
    c(node, st, "VariablePattern")
  else if (node.type == "MemberExpression")
    c(node, st, "MemberPattern")
  else
    c(node, st)
}
base.VariablePattern = ignore
base.MemberPattern = skipThrough
base.RestElement = (node, st, c) => c(node.argument, st, "Pattern")
base.ArrayPattern =  (node, st, c) => {
  for (let i = 0; i < node.elements.length; ++i) {
    let elt = node.elements[i]
    if (elt) c(elt, st, "Pattern")
  }
}
base.ObjectPattern = (node, st, c) => {
  for (let i = 0; i < node.properties.length; ++i)
    c(node.properties[i].value, st, "Pattern")
}

base.Expression = skipThrough
base.ThisExpression = base.Super = base.MetaProperty = ignore
base.ArrayExpression = (node, st, c) => {
  for (let i = 0; i < node.elements.length; ++i) {
    let elt = node.elements[i]
    if (elt) c(elt, st, "Expression")
  }
}
base.ObjectExpression = (node, st, c) => {
  for (let i = 0; i < node.properties.length; ++i)
    c(node.properties[i], st)
}
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration
base.SequenceExpression = base.TemplateLiteral = (node, st, c) => {
  for (let i = 0; i < node.expressions.length; ++i)
    c(node.expressions[i], st, "Expression")
}
base.UnaryExpression = base.UpdateExpression = (node, st, c) => {
  c(node.argument, st, "Expression")
}
base.BinaryExpression = base.LogicalExpression = (node, st, c) => {
  c(node.left, st, "Expression")
  c(node.right, st, "Expression")
}
base.AssignmentExpression = base.AssignmentPattern = (node, st, c) => {
  c(node.left, st, "Pattern")
  c(node.right, st, "Expression")
}
base.ConditionalExpression = (node, st, c) => {
  c(node.test, st, "Expression")
  c(node.consequent, st, "Expression")
  c(node.alternate, st, "Expression")
}
base.NewExpression = base.CallExpression = (node, st, c) => {
  c(node.callee, st, "Expression")
  if (node.arguments) for (let i = 0; i < node.arguments.length; ++i)
    c(node.arguments[i], st, "Expression")
}
base.MemberExpression = (node, st, c) => {
  c(node.object, st, "Expression")
  if (node.computed) c(node.property, st, "Expression")
}
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = (node, st, c) => {
  if (node.declaration)
    c(node.declaration, st, node.type == "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression")
  if (node.source) c(node.source, st, "Expression")
}
base.ExportAllDeclaration = (node, st, c) => {
  c(node.source, st, "Expression")
}
base.ImportDeclaration = (node, st, c) => {
  for (let i = 0; i < node.specifiers.length; i++)
    c(node.specifiers[i], st)
  c(node.source, st, "Expression")
}
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.Literal = ignore

base.TaggedTemplateExpression = (node, st, c) => {
  c(node.tag, st, "Expression")
  c(node.quasi, st)
}
base.ClassDeclaration = base.ClassExpression = (node, st, c) => c(node, st, "Class")
base.Class = (node, st, c) => {
  if (node.id) c(node.id, st, "Pattern")
  if (node.superClass) c(node.superClass, st, "Expression")
  for (let i = 0; i < node.body.body.length; i++)
    c(node.body.body[i], st)
}
base.MethodDefinition = base.Property = (node, st, c) => {
  if (node.computed) c(node.key, st, "Expression")
  c(node.value, st, "Expression")
}
