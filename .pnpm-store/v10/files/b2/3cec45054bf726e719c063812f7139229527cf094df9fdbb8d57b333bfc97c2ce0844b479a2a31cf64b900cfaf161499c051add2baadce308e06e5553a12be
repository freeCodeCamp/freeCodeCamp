/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from "assert";
import * as leap from "./leap";
import * as meta from "./meta";
import * as util from "./util";

let hasOwn = Object.prototype.hasOwnProperty;

function Emitter(contextId) {
  assert.ok(this instanceof Emitter);

  util.getTypes().assertIdentifier(contextId);

  // Used to generate unique temporary names.
  this.nextTempId = 0;

  // In order to make sure the context object does not collide with
  // anything in the local scope, we might have to rename it, so we
  // refer to it symbolically instead of just assuming that it will be
  // called "context".
  this.contextId = contextId;

  // An append-only list of Statements that grows each time this.emit is
  // called.
  this.listing = [];

  // A sparse array whose keys correspond to locations in this.listing
  // that have been marked as branch/jump targets.
  this.marked = [true];

  this.insertedLocs = new Set();

  // The last location will be marked when this.getDispatchLoop is
  // called.
  this.finalLoc = this.loc();

  // A list of all leap.TryEntry statements emitted.
  this.tryEntries = [];

  // Each time we evaluate the body of a loop, we tell this.leapManager
  // to enter a nested loop context that determines the meaning of break
  // and continue statements therein.
  this.leapManager = new leap.LeapManager(this);
}

let Ep = Emitter.prototype;
exports.Emitter = Emitter;

// Offsets into this.listing that could be used as targets for branches or
// jumps are represented as numeric Literal nodes. This representation has
// the amazingly convenient benefit of allowing the exact value of the
// location to be determined at any time, even after generating code that
// refers to the location.
// We use 'Number.MAX_VALUE' to mark uninitialized location. We can safely do
// so because no code can realistically have about 1.8e+308 locations before
// hitting memory limit of the machine it's running on. For comparison, the
// estimated number of atoms in the observable universe is around 1e+80.
const PENDING_LOCATION = Number.MAX_VALUE;
Ep.loc = function() {
  const l = util.getTypes().numericLiteral(PENDING_LOCATION)
  this.insertedLocs.add(l);
  return l;
}

Ep.getInsertedLocs = function() {
  return this.insertedLocs;
}

Ep.getContextId = function() {
  return util.getTypes().clone(this.contextId);
}

// Sets the exact value of the given location to the offset of the next
// Statement emitted.
Ep.mark = function(loc) {
  util.getTypes().assertLiteral(loc);
  let index = this.listing.length;
  if (loc.value === PENDING_LOCATION) {
    loc.value = index;
  } else {
    // Locations can be marked redundantly, but their values cannot change
    // once set the first time.
    assert.strictEqual(loc.value, index);
  }
  this.marked[index] = true;
  return loc;
};

Ep.emit = function(node) {
  const t = util.getTypes();

  if (t.isExpression(node)) {
    node = t.expressionStatement(node);
  }

  t.assertStatement(node);
  this.listing.push(node);
};

// Shorthand for emitting assignment statements. This will come in handy
// for assignments to temporary variables.
Ep.emitAssign = function(lhs, rhs) {
  this.emit(this.assign(lhs, rhs));
  return lhs;
};

// Shorthand for an assignment statement.
Ep.assign = function(lhs, rhs) {
  const t = util.getTypes();
  return t.expressionStatement(
    t.assignmentExpression("=", t.cloneDeep(lhs), rhs));
};

// Convenience function for generating expressions like context.next,
// context.sent, and context.rval.
Ep.contextProperty = function(name, computed) {
  const t = util.getTypes();
  return t.memberExpression(
    this.getContextId(),
    computed ? t.stringLiteral(name) : t.identifier(name),
    !!computed
  );
};

// Shorthand for setting context.rval and jumping to `context.stop()`.
Ep.stop = function(rval) {
  if (rval) {
    this.setReturnValue(rval);
  }

  this.jump(this.finalLoc);
};

Ep.setReturnValue = function(valuePath) {
  util.getTypes().assertExpression(valuePath.value);

  this.emitAssign(
    this.contextProperty("rval"),
    this.explodeExpression(valuePath)
  );
};

Ep.clearPendingException = function(tryLoc, assignee) {
  const t = util.getTypes();

  t.assertLiteral(tryLoc);

  let catchCall = t.callExpression(
    this.contextProperty("catch", true),
    [t.clone(tryLoc)]
  );

  if (assignee) {
    this.emitAssign(assignee, catchCall);
  } else {
    this.emit(catchCall);
  }
};

// Emits code for an unconditional jump to the given location, even if the
// exact value of the location is not yet known.
Ep.jump = function(toLoc) {
  this.emitAssign(this.contextProperty("next"), toLoc);
  this.emit(util.getTypes().breakStatement());
};

// Conditional jump.
Ep.jumpIf = function(test, toLoc) {
  const t = util.getTypes();

  t.assertExpression(test);
  t.assertLiteral(toLoc);

  this.emit(t.ifStatement(
    test,
    t.blockStatement([
      this.assign(this.contextProperty("next"), toLoc),
      t.breakStatement()
    ])
  ));
};

// Conditional jump, with the condition negated.
Ep.jumpIfNot = function(test, toLoc) {
  const t = util.getTypes();

  t.assertExpression(test);
  t.assertLiteral(toLoc);

  let negatedTest;
  if (t.isUnaryExpression(test) &&
      test.operator === "!") {
    // Avoid double negation.
    negatedTest = test.argument;
  } else {
    negatedTest = t.unaryExpression("!", test);
  }

  this.emit(t.ifStatement(
    negatedTest,
    t.blockStatement([
      this.assign(this.contextProperty("next"), toLoc),
      t.breakStatement()
    ])
  ));
};

// Returns a unique MemberExpression that can be used to store and
// retrieve temporary values. Since the object of the member expression is
// the context object, which is presumed to coexist peacefully with all
// other local variables, and since we just increment `nextTempId`
// monotonically, uniqueness is assured.
Ep.makeTempVar = function() {
  return this.contextProperty("t" + this.nextTempId++);
};

Ep.getContextFunction = function(id) {
  const t = util.getTypes();

  return t.functionExpression(
    id || null/*Anonymous*/,
    [this.getContextId()],
    t.blockStatement([this.getDispatchLoop()]),
    false, // Not a generator anymore!
    false // Nor an expression.
  );
};

// Turns this.listing into a loop of the form
//
//   while (1) switch (context.next) {
//   case 0:
//   ...
//   case n:
//     return context.stop();
//   }
//
// Each marked location in this.listing will correspond to one generated
// case statement.
Ep.getDispatchLoop = function() {
  const self = this;
  const t = util.getTypes();
  let cases = [];
  let current;

  // If we encounter a break, continue, or return statement in a switch
  // case, we can skip the rest of the statements until the next case.
  let alreadyEnded = false;

  self.listing.forEach(function(stmt, i) {
    if (self.marked.hasOwnProperty(i)) {
      cases.push(t.switchCase(
        t.numericLiteral(i),
        current = []));
      alreadyEnded = false;
    }

    if (!alreadyEnded) {
      current.push(stmt);
      if (t.isCompletionStatement(stmt))
        alreadyEnded = true;
    }
  });

  // Now that we know how many statements there will be in this.listing,
  // we can finally resolve this.finalLoc.value.
  this.finalLoc.value = this.listing.length;

  cases.push(
    t.switchCase(this.finalLoc, [
      // Intentionally fall through to the "end" case...
    ]),

    // So that the runtime can jump to the final location without having
    // to know its offset, we provide the "end" case as a synonym.
    t.switchCase(t.stringLiteral("end"), [
      // This will check/clear both context.thrown and context.rval.
      t.returnStatement(
        t.callExpression(this.contextProperty("stop"), [])
      )
    ])
  );

  return t.whileStatement(
    t.numericLiteral(1),
    t.switchStatement(
      t.assignmentExpression(
        "=",
        this.contextProperty("prev"),
        this.contextProperty("next")
      ),
      cases
    )
  );
};

Ep.getTryLocsList = function() {
  if (this.tryEntries.length === 0) {
    // To avoid adding a needless [] to the majority of runtime.wrap
    // argument lists, force the caller to handle this case specially.
    return null;
  }

  const t = util.getTypes();
  let lastLocValue = 0;

  return t.arrayExpression(
    this.tryEntries.map(function(tryEntry) {
      let thisLocValue = tryEntry.firstLoc.value;
      assert.ok(thisLocValue >= lastLocValue, "try entries out of order");
      lastLocValue = thisLocValue;

      let ce = tryEntry.catchEntry;
      let fe = tryEntry.finallyEntry;

      let locs = [
        tryEntry.firstLoc,
        // The null here makes a hole in the array.
        ce ? ce.firstLoc : null
      ];

      if (fe) {
        locs[2] = fe.firstLoc;
        locs[3] = fe.afterLoc;
      }

      return t.arrayExpression(locs.map(loc => loc && t.clone(loc)));
    })
  );
};

// All side effects must be realized in order.

// If any subexpression harbors a leap, all subexpressions must be
// neutered of side effects.

// No destructive modification of AST nodes.

Ep.explode = function(path, ignoreResult) {
  const t = util.getTypes();
  let node = path.node;
  let self = this;

  t.assertNode(node);

  if (t.isDeclaration(node))
    throw getDeclError(node);

  if (t.isStatement(node))
    return self.explodeStatement(path);

  if (t.isExpression(node))
    return self.explodeExpression(path, ignoreResult);

  switch (node.type) {
  case "Program":
    return path.get("body").map(
      self.explodeStatement,
      self
    );

  case "VariableDeclarator":
    throw getDeclError(node);

  // These node types should be handled by their parent nodes
  // (ObjectExpression, SwitchStatement, and TryStatement, respectively).
  case "Property":
  case "SwitchCase":
  case "CatchClause":
    throw new Error(
      node.type + " nodes should be handled by their parents");

  default:
    throw new Error(
      "unknown Node of type " +
        JSON.stringify(node.type));
  }
};

function getDeclError(node) {
  return new Error(
    "all declarations should have been transformed into " +
    "assignments before the Exploder began its work: " +
    JSON.stringify(node));
}

Ep.explodeStatement = function(path, labelId) {
  const t = util.getTypes();
  let stmt = path.node;
  let self = this;
  let before, after, head;

  t.assertStatement(stmt);

  if (labelId) {
    t.assertIdentifier(labelId);
  } else {
    labelId = null;
  }

  // Explode BlockStatement nodes even if they do not contain a yield,
  // because we don't want or need the curly braces.
  if (t.isBlockStatement(stmt)) {
    path.get("body").forEach(function (path) {
      self.explodeStatement(path);
    });
    return;
  }

  if (!meta.containsLeap(stmt)) {
    // Technically we should be able to avoid emitting the statement
    // altogether if !meta.hasSideEffects(stmt), but that leads to
    // confusing generated code (for instance, `while (true) {}` just
    // disappears) and is probably a more appropriate job for a dedicated
    // dead code elimination pass.
    self.emit(stmt);
    return;
  }

  switch (stmt.type) {
  case "ExpressionStatement":
    self.explodeExpression(path.get("expression"), true);
    break;

  case "LabeledStatement":
    after = this.loc();

    // Did you know you can break from any labeled block statement or
    // control structure? Well, you can! Note: when a labeled loop is
    // encountered, the leap.LabeledEntry created here will immediately
    // enclose a leap.LoopEntry on the leap manager's stack, and both
    // entries will have the same label. Though this works just fine, it
    // may seem a bit redundant. In theory, we could check here to
    // determine if stmt knows how to handle its own label; for example,
    // stmt happens to be a WhileStatement and so we know it's going to
    // establish its own LoopEntry when we explode it (below). Then this
    // LabeledEntry would be unnecessary. Alternatively, we might be
    // tempted not to pass stmt.label down into self.explodeStatement,
    // because we've handled the label here, but that's a mistake because
    // labeled loops may contain labeled continue statements, which is not
    // something we can handle in this generic case. All in all, I think a
    // little redundancy greatly simplifies the logic of this case, since
    // it's clear that we handle all possible LabeledStatements correctly
    // here, regardless of whether they interact with the leap manager
    // themselves. Also remember that labels and break/continue-to-label
    // statements are rare, and all of this logic happens at transform
    // time, so it has no additional runtime cost.
    self.leapManager.withEntry(
      new leap.LabeledEntry(after, stmt.label),
      function() {
        self.explodeStatement(path.get("body"), stmt.label);
      }
    );

    self.mark(after);

    break;

  case "WhileStatement":
    before = this.loc();
    after = this.loc();

    self.mark(before);
    self.jumpIfNot(self.explodeExpression(path.get("test")), after);
    self.leapManager.withEntry(
      new leap.LoopEntry(after, before, labelId),
      function() { self.explodeStatement(path.get("body")); }
    );
    self.jump(before);
    self.mark(after);

    break;

  case "DoWhileStatement":
    let first = this.loc();
    let test = this.loc();
    after = this.loc();

    self.mark(first);
    self.leapManager.withEntry(
      new leap.LoopEntry(after, test, labelId),
      function() { self.explode(path.get("body")); }
    );
    self.mark(test);
    self.jumpIf(self.explodeExpression(path.get("test")), first);
    self.mark(after);

    break;

  case "ForStatement":
    head = this.loc();
    let update = this.loc();
    after = this.loc();

    if (stmt.init) {
      // We pass true here to indicate that if stmt.init is an expression
      // then we do not care about its result.
      self.explode(path.get("init"), true);
    }

    self.mark(head);

    if (stmt.test) {
      self.jumpIfNot(self.explodeExpression(path.get("test")), after);
    } else {
      // No test means continue unconditionally.
    }

    self.leapManager.withEntry(
      new leap.LoopEntry(after, update, labelId),
      function() { self.explodeStatement(path.get("body")); }
    );

    self.mark(update);

    if (stmt.update) {
      // We pass true here to indicate that if stmt.update is an
      // expression then we do not care about its result.
      self.explode(path.get("update"), true);
    }

    self.jump(head);

    self.mark(after);

    break;

  case "TypeCastExpression":
    return self.explodeExpression(path.get("expression"));

  case "ForInStatement":
    head = this.loc();
    after = this.loc();

    let keyIterNextFn = self.makeTempVar();
    self.emitAssign(
      keyIterNextFn,
      t.callExpression(
        util.runtimeProperty("keys"),
        [self.explodeExpression(path.get("right"))]
      )
    );

    self.mark(head);

    let keyInfoTmpVar = self.makeTempVar();
    self.jumpIf(
      t.memberExpression(
        t.assignmentExpression(
          "=",
          keyInfoTmpVar,
          t.callExpression(t.cloneDeep(keyIterNextFn), [])
        ),
        t.identifier("done"),
        false
      ),
      after
    );

    self.emitAssign(
      stmt.left,
      t.memberExpression(
        t.cloneDeep(keyInfoTmpVar),
        t.identifier("value"),
        false
      )
    );

    self.leapManager.withEntry(
      new leap.LoopEntry(after, head, labelId),
      function() { self.explodeStatement(path.get("body")); }
    );

    self.jump(head);

    self.mark(after);

    break;

  case "BreakStatement":
    self.emitAbruptCompletion({
      type: "break",
      target: self.leapManager.getBreakLoc(stmt.label)
    });

    break;

  case "ContinueStatement":
    self.emitAbruptCompletion({
      type: "continue",
      target: self.leapManager.getContinueLoc(stmt.label)
    });

    break;

  case "SwitchStatement":
    // Always save the discriminant into a temporary variable in case the
    // test expressions overwrite values like context.sent.
    let disc = self.emitAssign(
      self.makeTempVar(),
      self.explodeExpression(path.get("discriminant"))
    );

    after = this.loc();
    let defaultLoc = this.loc();
    let condition = defaultLoc;
    let caseLocs = [];

    // If there are no cases, .cases might be undefined.
    let cases = stmt.cases || [];

    for (let i = cases.length - 1; i >= 0; --i) {
      let c = cases[i];
      t.assertSwitchCase(c);

      if (c.test) {
        condition = t.conditionalExpression(
          t.binaryExpression("===", t.cloneDeep(disc), c.test),
          caseLocs[i] = this.loc(),
          condition
        );
      } else {
        caseLocs[i] = defaultLoc;
      }
    }

    let discriminant = path.get("discriminant");
    util.replaceWithOrRemove(discriminant, condition);
    self.jump(self.explodeExpression(discriminant));

    self.leapManager.withEntry(
      new leap.SwitchEntry(after),
      function() {
        path.get("cases").forEach(function(casePath) {
          let i = casePath.key;
          self.mark(caseLocs[i]);

          casePath.get("consequent").forEach(function (path) {
            self.explodeStatement(path);
          });
        });
      }
    );

    self.mark(after);
    if (defaultLoc.value === PENDING_LOCATION) {
      self.mark(defaultLoc);
      assert.strictEqual(after.value, defaultLoc.value);
    }

    break;

  case "IfStatement":
    let elseLoc = stmt.alternate && this.loc();
    after = this.loc();

    self.jumpIfNot(
      self.explodeExpression(path.get("test")),
      elseLoc || after
    );

    self.explodeStatement(path.get("consequent"));

    if (elseLoc) {
      self.jump(after);
      self.mark(elseLoc);
      self.explodeStatement(path.get("alternate"));
    }

    self.mark(after);

    break;

  case "ReturnStatement":
    self.emitAbruptCompletion({
      type: "return",
      value: self.explodeExpression(path.get("argument"))
    });

    break;

  case "WithStatement":
    throw new Error("WithStatement not supported in generator functions.");

  case "TryStatement":
    after = this.loc();

    let handler = stmt.handler;

    let catchLoc = handler && this.loc();
    let catchEntry = catchLoc && new leap.CatchEntry(
      catchLoc,
      handler.param
    );

    let finallyLoc = stmt.finalizer && this.loc();
    let finallyEntry = finallyLoc &&
      new leap.FinallyEntry(finallyLoc, after);

    let tryEntry = new leap.TryEntry(
      self.getUnmarkedCurrentLoc(),
      catchEntry,
      finallyEntry
    );

    self.tryEntries.push(tryEntry);
    self.updateContextPrevLoc(tryEntry.firstLoc);

    self.leapManager.withEntry(tryEntry, function() {
      self.explodeStatement(path.get("block"));

      if (catchLoc) {
        if (finallyLoc) {
          // If we have both a catch block and a finally block, then
          // because we emit the catch block first, we need to jump over
          // it to the finally block.
          self.jump(finallyLoc);

        } else {
          // If there is no finally block, then we need to jump over the
          // catch block to the fall-through location.
          self.jump(after);
        }

        self.updateContextPrevLoc(self.mark(catchLoc));

        let bodyPath = path.get("handler.body");
        let safeParam = self.makeTempVar();
        self.clearPendingException(tryEntry.firstLoc, safeParam);

        bodyPath.traverse(catchParamVisitor, {
          getSafeParam: () => t.cloneDeep(safeParam),
          catchParamName: handler.param.name
        });

        self.leapManager.withEntry(catchEntry, function() {
          self.explodeStatement(bodyPath);
        });
      }

      if (finallyLoc) {
        self.updateContextPrevLoc(self.mark(finallyLoc));

        self.leapManager.withEntry(finallyEntry, function() {
          self.explodeStatement(path.get("finalizer"));
        });

        self.emit(t.returnStatement(t.callExpression(
          self.contextProperty("finish"),
          [finallyEntry.firstLoc]
        )));
      }
    });

    self.mark(after);

    break;

  case "ThrowStatement":
    self.emit(t.throwStatement(
      self.explodeExpression(path.get("argument"))
    ));

    break;

  case "ClassDeclaration":
    self.emit(self.explodeClass(path));
    break;

  default:
    throw new Error(
      "unknown Statement of type " +
        JSON.stringify(stmt.type));
  }
};

let catchParamVisitor = {
  Identifier: function(path, state) {
    if (path.node.name === state.catchParamName && util.isReference(path)) {
      util.replaceWithOrRemove(path, state.getSafeParam());
    }
  },

  Scope: function(path, state) {
    if (path.scope.hasOwnBinding(state.catchParamName)) {
      // Don't descend into nested scopes that shadow the catch
      // parameter with their own declarations.
      path.skip();
    }
  }
};

Ep.emitAbruptCompletion = function(record) {
  if (!isValidCompletion(record)) {
    assert.ok(
      false,
      "invalid completion record: " +
        JSON.stringify(record)
    );
  }

  assert.notStrictEqual(
    record.type, "normal",
    "normal completions are not abrupt"
  );

  const t = util.getTypes();
  let abruptArgs = [t.stringLiteral(record.type)];

  if (record.type === "break" ||
      record.type === "continue") {
    t.assertLiteral(record.target);
    abruptArgs[1] = this.insertedLocs.has(record.target)
      ? record.target
      : t.cloneDeep(record.target);
  } else if (record.type === "return" ||
             record.type === "throw") {
    if (record.value) {
      t.assertExpression(record.value);
      abruptArgs[1] = this.insertedLocs.has(record.value)
        ? record.value
        : t.cloneDeep(record.value);
    }
  }

  this.emit(
    t.returnStatement(
      t.callExpression(
        this.contextProperty("abrupt"),
        abruptArgs
      )
    )
  );
};

function isValidCompletion(record) {
  let type = record.type;

  if (type === "normal") {
    return !hasOwn.call(record, "target");
  }

  if (type === "break" ||
      type === "continue") {
    return !hasOwn.call(record, "value")
        && util.getTypes().isLiteral(record.target);
  }

  if (type === "return" ||
      type === "throw") {
    return hasOwn.call(record, "value")
        && !hasOwn.call(record, "target");
  }

  return false;
}


// Not all offsets into emitter.listing are potential jump targets. For
// example, execution typically falls into the beginning of a try block
// without jumping directly there. This method returns the current offset
// without marking it, so that a switch case will not necessarily be
// generated for this offset (I say "not necessarily" because the same
// location might end up being marked in the process of emitting other
// statements). There's no logical harm in marking such locations as jump
// targets, but minimizing the number of switch cases keeps the generated
// code shorter.
Ep.getUnmarkedCurrentLoc = function() {
  return util.getTypes().numericLiteral(this.listing.length);
};

// The context.prev property takes the value of context.next whenever we
// evaluate the switch statement discriminant, which is generally good
// enough for tracking the last location we jumped to, but sometimes
// context.prev needs to be more precise, such as when we fall
// successfully out of a try block and into a finally block without
// jumping. This method exists to update context.prev to the freshest
// available location. If we were implementing a full interpreter, we
// would know the location of the current instruction with complete
// precision at all times, but we don't have that luxury here, as it would
// be costly and verbose to set context.prev before every statement.
Ep.updateContextPrevLoc = function(loc) {
  const t = util.getTypes();
  if (loc) {
    t.assertLiteral(loc);

    if (loc.value === PENDING_LOCATION) {
      // If an uninitialized location literal was passed in, set its value
      // to the current this.listing.length.
      loc.value = this.listing.length;
    } else {
      // Otherwise assert that the location matches the current offset.
      assert.strictEqual(loc.value, this.listing.length);
    }

  } else {
    loc = this.getUnmarkedCurrentLoc();
  }

  // Make sure context.prev is up to date in case we fell into this try
  // statement without jumping to it. TODO Consider avoiding this
  // assignment when we know control must have jumped here.
  this.emitAssign(this.contextProperty("prev"), loc);
};


// In order to save the rest of explodeExpression from a combinatorial
// trainwreck of special cases, explodeViaTempVar is responsible for
// deciding when a subexpression needs to be "exploded," which is my
// very technical term for emitting the subexpression as an assignment
// to a temporary variable and the substituting the temporary variable
// for the original subexpression. Think of exploded view diagrams, not
// Michael Bay movies. The point of exploding subexpressions is to
// control the precise order in which the generated code realizes the
// side effects of those subexpressions.
Ep.explodeViaTempVar = function(tempVar, childPath, hasLeapingChildren, ignoreChildResult) {
  assert.ok(
    !ignoreChildResult || !tempVar,
    "Ignoring the result of a child expression but forcing it to " +
      "be assigned to a temporary variable?"
  );
  const t = util.getTypes();

  let result = this.explodeExpression(childPath, ignoreChildResult);

  if (ignoreChildResult) {
    // Side effects already emitted above.

  } else if (tempVar || (hasLeapingChildren &&
                          !t.isLiteral(result))) {
    // If tempVar was provided, then the result will always be assigned
    // to it, even if the result does not otherwise need to be assigned
    // to a temporary variable.  When no tempVar is provided, we have
    // the flexibility to decide whether a temporary variable is really
    // necessary.  Unfortunately, in general, a temporary variable is
    // required whenever any child contains a yield expression, since it
    // is difficult to prove (at all, let alone efficiently) whether
    // this result would evaluate to the same value before and after the
    // yield (see #206).  One narrow case where we can prove it doesn't
    // matter (and thus we do not need a temporary variable) is when the
    // result in question is a Literal value.
    result = this.emitAssign(
      tempVar || this.makeTempVar(),
      result
    );
  }
  return result;
};

Ep.explodeExpression = function(path, ignoreResult) {
  const t = util.getTypes();
  let expr = path.node;
  if (expr) {
    t.assertExpression(expr);
  } else {
    return expr;
  }

  let self = this;
  let result; // Used optionally by several cases below.
  let after;

  function finish(expr) {
    t.assertExpression(expr);
    if (ignoreResult) {
      self.emit(expr);
    }
    return expr;
  }

  // If the expression does not contain a leap, then we either emit the
  // expression as a standalone statement or return it whole.
  if (!meta.containsLeap(expr)) {
    return finish(expr);
  }

  // If any child contains a leap (such as a yield or labeled continue or
  // break statement), then any sibling subexpressions will almost
  // certainly have to be exploded in order to maintain the order of their
  // side effects relative to the leaping child(ren).
  let hasLeapingChildren = meta.containsLeap.onlyChildren(expr);

  // If ignoreResult is true, then we must take full responsibility for
  // emitting the expression with all its side effects, and we should not
  // return a result.

  switch (expr.type) {
  case "MemberExpression":
    return finish(t.memberExpression(
      self.explodeExpression(path.get("object")),
      expr.computed
        ? self.explodeViaTempVar(null, path.get("property"), hasLeapingChildren)
        : expr.property,
      expr.computed
    ));

  case "CallExpression":
    let calleePath = path.get("callee");
    let argsPath = path.get("arguments");

    let newCallee;
    let newArgs;

    let hasLeapingArgs = argsPath.some(
      argPath => meta.containsLeap(argPath.node)
    );

    let injectFirstArg = null;

    if (t.isMemberExpression(calleePath.node)) {
      if (hasLeapingArgs) {
        // If the arguments of the CallExpression contained any yield
        // expressions, then we need to be sure to evaluate the callee
        // before evaluating the arguments, but if the callee was a member
        // expression, then we must be careful that the object of the
        // member expression still gets bound to `this` for the call.

        let newObject = self.explodeViaTempVar(
          // Assign the exploded callee.object expression to a temporary
          // variable so that we can use it twice without reevaluating it.
          self.makeTempVar(),
          calleePath.get("object"),
          hasLeapingChildren
        );

        let newProperty = calleePath.node.computed
          ? self.explodeViaTempVar(null, calleePath.get("property"), hasLeapingChildren)
          : calleePath.node.property;

        injectFirstArg = newObject;

        newCallee = t.memberExpression(
          t.memberExpression(
            t.cloneDeep(newObject),
            newProperty,
            calleePath.node.computed
          ),
          t.identifier("call"),
          false
        );

      } else {
        newCallee = self.explodeExpression(calleePath);
      }

    } else {
      newCallee = self.explodeViaTempVar(null, calleePath, hasLeapingChildren);

      if (t.isMemberExpression(newCallee)) {
        // If the callee was not previously a MemberExpression, then the
        // CallExpression was "unqualified," meaning its `this` object
        // should be the global object. If the exploded expression has
        // become a MemberExpression (e.g. a context property, probably a
        // temporary variable), then we need to force it to be unqualified
        // by using the (0, object.property)(...) trick; otherwise, it
        // will receive the object of the MemberExpression as its `this`
        // object.
        newCallee = t.sequenceExpression([
          t.numericLiteral(0),
          t.cloneDeep(newCallee)
        ]);
      }
    }

    if (hasLeapingArgs) {
      newArgs = argsPath.map(argPath => self.explodeViaTempVar(null, argPath, hasLeapingChildren));
      if (injectFirstArg) newArgs.unshift(injectFirstArg);

      newArgs = newArgs.map(arg => t.cloneDeep(arg));
    } else {
      newArgs = path.node.arguments;
    }

    return finish(t.callExpression(newCallee, newArgs));

  case "NewExpression":
    return finish(t.newExpression(
     self.explodeViaTempVar(null, path.get("callee"), hasLeapingChildren),
       path.get("arguments").map(function(argPath) {
        return self.explodeViaTempVar(null, argPath, hasLeapingChildren);
      })
    ));

  case "ObjectExpression":
    return finish(t.objectExpression(
      path.get("properties").map(function(propPath) {
        if (propPath.isObjectProperty()) {
          return t.objectProperty(
            propPath.node.key,
            self.explodeViaTempVar(null, propPath.get("value"), hasLeapingChildren),
            propPath.node.computed
          );
        } else {
          return propPath.node;
        }
      })
    ));

  case "ArrayExpression":
    return finish(t.arrayExpression(
      path.get("elements").map(function(elemPath) {
        if (!elemPath.node) {
          return null;
        } if (elemPath.isSpreadElement()) {
          return t.spreadElement(
            self.explodeViaTempVar(null, elemPath.get("argument"), hasLeapingChildren)
          );
        } else {
          return self.explodeViaTempVar(null, elemPath, hasLeapingChildren);
        }
      })
    ));

  case "SequenceExpression":
    let lastIndex = expr.expressions.length - 1;

    path.get("expressions").forEach(function(exprPath) {
      if (exprPath.key === lastIndex) {
        result = self.explodeExpression(exprPath, ignoreResult);
      } else {
        self.explodeExpression(exprPath, true);
      }
    });

    return result;

  case "LogicalExpression":
    after = this.loc();

    if (!ignoreResult) {
      result = self.makeTempVar();
    }

    let left = self.explodeViaTempVar(result, path.get("left"), hasLeapingChildren);

    if (expr.operator === "&&") {
      self.jumpIfNot(left, after);
    } else {
      assert.strictEqual(expr.operator, "||");
      self.jumpIf(left, after);
    }

    self.explodeViaTempVar(result, path.get("right"), hasLeapingChildren, ignoreResult);

    self.mark(after);

    return result;

  case "ConditionalExpression":
    let elseLoc = this.loc();
    after = this.loc();
    let test = self.explodeExpression(path.get("test"));

    self.jumpIfNot(test, elseLoc);

    if (!ignoreResult) {
      result = self.makeTempVar();
    }

    self.explodeViaTempVar(result, path.get("consequent"), hasLeapingChildren, ignoreResult);
    self.jump(after);

    self.mark(elseLoc);
    self.explodeViaTempVar(result, path.get("alternate"), hasLeapingChildren, ignoreResult);

    self.mark(after);

    return result;

  case "UnaryExpression":
    return finish(t.unaryExpression(
      expr.operator,
      // Can't (and don't need to) break up the syntax of the argument.
      // Think about delete a[b].
      self.explodeExpression(path.get("argument")),
      !!expr.prefix
    ));

  case "BinaryExpression":
    return finish(t.binaryExpression(
      expr.operator,
      self.explodeViaTempVar(null, path.get("left"), hasLeapingChildren),
      self.explodeViaTempVar(null, path.get("right"), hasLeapingChildren)
    ));

  case "AssignmentExpression":
    if (expr.operator === "=") {
      // If this is a simple assignment, the left hand side does not need
      // to be read before the right hand side is evaluated, so we can
      // avoid the more complicated logic below.
      return finish(t.assignmentExpression(
        expr.operator,
        self.explodeExpression(path.get("left")),
        self.explodeExpression(path.get("right"))
      ));
    }

    const lhs = self.explodeExpression(path.get("left"));
    const temp = self.emitAssign(self.makeTempVar(), lhs);

    // For example,
    //
    //   x += yield y
    //
    // becomes
    //
    //   context.t0 = x
    //   x = context.t0 += yield y
    //
    // so that the left-hand side expression is read before the yield.
    // Fixes https://github.com/facebook/regenerator/issues/345.

    return finish(t.assignmentExpression(
      "=",
      t.cloneDeep(lhs),
      t.assignmentExpression(
        expr.operator,
        t.cloneDeep(temp),
        self.explodeExpression(path.get("right"))
      )
    ));

  case "UpdateExpression":
    return finish(t.updateExpression(
      expr.operator,
      self.explodeExpression(path.get("argument")),
      expr.prefix
    ));

  case "YieldExpression":
    after = this.loc();
    let arg = expr.argument && self.explodeExpression(path.get("argument"));

    if (arg && expr.delegate) {
      let result = self.makeTempVar();

      let ret = t.returnStatement(t.callExpression(
        self.contextProperty("delegateYield"),
        [
          arg,
          t.stringLiteral(result.property.name),
          after
        ]
      ));
      ret.loc = expr.loc;

      self.emit(ret);
      self.mark(after);

      return result;
    }

    self.emitAssign(self.contextProperty("next"), after);

    let ret = t.returnStatement(t.cloneDeep(arg) || null);
    // Preserve the `yield` location so that source mappings for the statements
    // link back to the yield properly.
    ret.loc = expr.loc;
    self.emit(ret);
    self.mark(after);

    return self.contextProperty("sent");

  case "ClassExpression":
    return finish(self.explodeClass(path));

  default:
    throw new Error(
      "unknown Expression of type " +
        JSON.stringify(expr.type));
  }
};

Ep.explodeClass = function(path) {
  const explodingChildren = [];

  if (path.node.superClass) {
    explodingChildren.push(path.get("superClass"));
  }

  path.get("body.body").forEach(member => {
    if (member.node.computed) {
      explodingChildren.push(member.get("key"));
    }
  });

  const hasLeapingChildren = explodingChildren.some(
    child => meta.containsLeap(child));

  for (let i = 0; i < explodingChildren.length; i++) {
    const child = explodingChildren[i];
    const isLast = i === explodingChildren.length - 1;

    if (isLast) {
      child.replaceWith(this.explodeExpression(child));
    } else {
      child.replaceWith(this.explodeViaTempVar(null, child, hasLeapingChildren));
    }
  }

  return path.node;
};
