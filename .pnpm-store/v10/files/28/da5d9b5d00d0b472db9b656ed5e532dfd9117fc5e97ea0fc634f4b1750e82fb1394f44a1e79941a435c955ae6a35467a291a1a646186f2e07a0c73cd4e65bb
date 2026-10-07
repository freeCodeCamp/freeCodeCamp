/**
 * @fileoverview A class to manage state of generating a code path.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const CodePathSegment = require("./code-path-segment"),
	ForkContext = require("./fork-context");

//-----------------------------------------------------------------------------
// Contexts
//-----------------------------------------------------------------------------

/**
 * Represents the context in which a `break` statement can be used.
 *
 * A `break` statement without a label is only valid in a few places in
 * JavaScript: any type of loop or a `switch` statement. Otherwise, `break`
 * without a label causes a syntax error. For these contexts, `breakable` is
 * set to `true` to indicate that a `break` without a label is valid.
 *
 * However, a `break` statement with a label is also valid inside of a labeled
 * statement. For example, this is valid:
 *
 *     a : {
 *         break a;
 *     }
 *
 * The `breakable` property is set false for labeled statements to indicate
 * that `break` without a label is invalid.
 */
class BreakContext {
	/**
	 * Creates a new instance.
	 * @param {BreakContext} upperContext The previous `BreakContext`.
	 * @param {boolean} breakable Indicates if we are inside a statement where
	 *      `break` without a label will exit the statement.
	 * @param {string|null} label The label for the statement.
	 * @param {ForkContext} forkContext The current fork context.
	 */
	constructor(upperContext, breakable, label, forkContext) {
		/**
		 * The previous `BreakContext`
		 * @type {BreakContext}
		 */
		this.upper = upperContext;

		/**
		 * Indicates if we are inside a statement where `break` without a label
		 * will exit the statement.
		 * @type {boolean}
		 */
		this.breakable = breakable;

		/**
		 * The label associated with the statement.
		 * @type {string|null}
		 */
		this.label = label;

		/**
		 * The fork context for the `break`.
		 * @type {ForkContext}
		 */
		this.brokenForkContext = ForkContext.newEmpty(forkContext);
	}
}

/**
 * Represents the context for `ChainExpression` nodes.
 */
class ChainContext {
	/**
	 * Creates a new instance.
	 * @param {ChainContext} upperContext The previous `ChainContext`.
	 */
	constructor(upperContext) {
		/**
		 * The previous `ChainContext`
		 * @type {ChainContext}
		 */
		this.upper = upperContext;

		/**
		 * The number of choice contexts inside of the `ChainContext`.
		 * @type {number}
		 */
		this.choiceContextCount = 0;
	}
}

/**
 * Represents a choice in the code path.
 *
 * Choices are created by logical operators such as `&&`, loops, conditionals,
 * and `if` statements. This is the point at which the code path has a choice of
 * which direction to go.
 *
 * The result of a choice might be in the left (test) expression of another choice,
 * and in that case, may create a new fork. For example, `a || b` is a choice
 * but does not create a new fork because the result of the expression is
 * not used as the test expression in another expression. In this case,
 * `isForkingAsResult` is false. In the expression `a || b || c`, the `a || b`
 * expression appears as the test expression for `|| c`, so the
 * result of `a || b` creates a fork because execution may or may not
 * continue to `|| c`. `isForkingAsResult` for `a || b` in this case is true
 * while `isForkingAsResult` for `|| c` is false. (`isForkingAsResult` is always
 * false for `if` statements, conditional expressions, and loops.)
 *
 * All of the choices except one (`??`) operate on a true/false fork, meaning if
 * true go one way and if false go the other (tracked by `trueForkContext` and
 * `falseForkContext`). The `??` operator doesn't operate on true/false because
 * the left expression is evaluated to be nullish or not, so only if nullish do
 * we fork to the right expression (tracked by `nullishForkContext`).
 */
class ChoiceContext {
	/**
	 * Creates a new instance.
	 * @param {ChoiceContext} upperContext The previous `ChoiceContext`.
	 * @param {string} kind The kind of choice. If it's a logical or assignment expression, this
	 *      is `"&&"` or `"||"` or `"??"`; if it's an `if` statement or
	 *      conditional expression, this is `"test"`; otherwise, this is `"loop"`.
	 * @param {boolean} isForkingAsResult Indicates if the result of the choice
	 *      creates a fork.
	 * @param {ForkContext} forkContext The containing `ForkContext`.
	 */
	constructor(upperContext, kind, isForkingAsResult, forkContext) {
		/**
		 * The previous `ChoiceContext`
		 * @type {ChoiceContext}
		 */
		this.upper = upperContext;

		/**
		 * The kind of choice. If it's a logical or assignment expression, this
		 * is `"&&"` or `"||"` or `"??"`; if it's an `if` statement or
		 * conditional expression, this is `"test"`; otherwise, this is `"loop"`.
		 * @type {string}
		 */
		this.kind = kind;

		/**
		 * Indicates if the result of the choice forks the code path.
		 * @type {boolean}
		 */
		this.isForkingAsResult = isForkingAsResult;

		/**
		 * The fork context for the `true` path of the choice.
		 * @type {ForkContext}
		 */
		this.trueForkContext = ForkContext.newEmpty(forkContext);

		/**
		 * The fork context for the `false` path of the choice.
		 * @type {ForkContext}
		 */
		this.falseForkContext = ForkContext.newEmpty(forkContext);

		/**
		 * The fork context for when the choice result is `null` or `undefined`.
		 * @type {ForkContext}
		 */
		this.nullishForkContext = ForkContext.newEmpty(forkContext);

		/**
		 * Indicates if any of `trueForkContext`, `falseForkContext`, or
		 * `nullishForkContext` have been updated with segments from a child context.
		 * @type {boolean}
		 */
		this.processed = false;
	}
}

/**
 * Base class for all loop contexts.
 */
class LoopContextBase {
	/**
	 * Creates a new instance.
	 * @param {LoopContext|null} upperContext The previous `LoopContext`.
	 * @param {string} type The AST node's `type` for the loop.
	 * @param {string|null} label The label for the loop from an enclosing `LabeledStatement`.
	 * @param {BreakContext} breakContext The context for breaking the loop.
	 */
	constructor(upperContext, type, label, breakContext) {
		/**
		 * The previous `LoopContext`.
		 * @type {LoopContext}
		 */
		this.upper = upperContext;

		/**
		 * The AST node's `type` for the loop.
		 * @type {string}
		 */
		this.type = type;

		/**
		 * The label for the loop from an enclosing `LabeledStatement`.
		 * @type {string|null}
		 */
		this.label = label;

		/**
		 * The fork context for when `break` is encountered.
		 * @type {ForkContext}
		 */
		this.brokenForkContext = breakContext.brokenForkContext;
	}
}

/**
 * Represents the context for a `while` loop.
 */
class WhileLoopContext extends LoopContextBase {
	/**
	 * Creates a new instance.
	 * @param {LoopContext|null} upperContext The previous `LoopContext`.
	 * @param {string|null} label The label for the loop from an enclosing `LabeledStatement`.
	 * @param {BreakContext} breakContext The context for breaking the loop.
	 */
	constructor(upperContext, label, breakContext) {
		super(upperContext, "WhileStatement", label, breakContext);

		/**
		 * The hardcoded literal boolean test condition for
		 * the loop. Used to catch infinite or skipped loops.
		 * @type {boolean|undefined}
		 */
		this.test = void 0;

		/**
		 * The segments representing the test condition where `continue` will
		 * jump to. The test condition will typically have just one segment but
		 * it's possible for there to be more than one.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.continueDestSegments = null;
	}
}

/**
 * Represents the context for a `do-while` loop.
 */
class DoWhileLoopContext extends LoopContextBase {
	/**
	 * Creates a new instance.
	 * @param {LoopContext|null} upperContext The previous `LoopContext`.
	 * @param {string|null} label The label for the loop from an enclosing `LabeledStatement`.
	 * @param {BreakContext} breakContext The context for breaking the loop.
	 * @param {ForkContext} forkContext The enclosing fork context.
	 */
	constructor(upperContext, label, breakContext, forkContext) {
		super(upperContext, "DoWhileStatement", label, breakContext);

		/**
		 * The hardcoded literal boolean test condition for
		 * the loop. Used to catch infinite or skipped loops.
		 * @type {boolean|undefined}
		 */
		this.test = void 0;

		/**
		 * The segments at the start of the loop body. This is the only loop
		 * where the test comes at the end, so the first iteration always
		 * happens and we need a reference to the first statements.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.entrySegments = null;

		/**
		 * The fork context to follow when a `continue` is found.
		 * @type {ForkContext}
		 */
		this.continueForkContext = ForkContext.newEmpty(forkContext);
	}
}

/**
 * Represents the context for a `for` loop.
 */
class ForLoopContext extends LoopContextBase {
	/**
	 * Creates a new instance.
	 * @param {LoopContext|null} upperContext The previous `LoopContext`.
	 * @param {string|null} label The label for the loop from an enclosing `LabeledStatement`.
	 * @param {BreakContext} breakContext The context for breaking the loop.
	 */
	constructor(upperContext, label, breakContext) {
		super(upperContext, "ForStatement", label, breakContext);

		/**
		 * The hardcoded literal boolean test condition for
		 * the loop. Used to catch infinite or skipped loops.
		 * @type {boolean|undefined}
		 */
		this.test = void 0;

		/**
		 * The end of the init expression. This may change during the lifetime
		 * of the instance as we traverse the loop because some loops don't have
		 * an init expression.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.endOfInitSegments = null;

		/**
		 * The start of the test expression. This may change during the lifetime
		 * of the instance as we traverse the loop because some loops don't have
		 * a test expression.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.testSegments = null;

		/**
		 * The end of the test expression. This may change during the lifetime
		 * of the instance as we traverse the loop because some loops don't have
		 * a test expression.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.endOfTestSegments = null;

		/**
		 * The start of the update expression. This may change during the lifetime
		 * of the instance as we traverse the loop because some loops don't have
		 * an update expression.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.updateSegments = null;

		/**
		 * The end of the update expression. This may change during the lifetime
		 * of the instance as we traverse the loop because some loops don't have
		 * an update expression.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.endOfUpdateSegments = null;

		/**
		 * The segments representing the test condition where `continue` will
		 * jump to. The test condition will typically have just one segment but
		 * it's possible for there to be more than one. This may change during the
		 * lifetime of the instance as we traverse the loop because some loops
		 * don't have an update expression. When there is an update expression, this
		 * will end up pointing to that expression; otherwise it will end up pointing
		 * to the test expression.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.continueDestSegments = null;
	}
}

/**
 * Represents the context for a `for-in` loop.
 *
 * Terminology:
 * - "left" means the part of the loop to the left of the `in` keyword. For
 *   example, in `for (var x in y)`, the left is `var x`.
 * - "right" means the part of the loop to the right of the `in` keyword. For
 *   example, in `for (var x in y)`, the right is `y`.
 */
class ForInLoopContext extends LoopContextBase {
	/**
	 * Creates a new instance.
	 * @param {LoopContext|null} upperContext The previous `LoopContext`.
	 * @param {string|null} label The label for the loop from an enclosing `LabeledStatement`.
	 * @param {BreakContext} breakContext The context for breaking the loop.
	 */
	constructor(upperContext, label, breakContext) {
		super(upperContext, "ForInStatement", label, breakContext);

		/**
		 * The segments that came immediately before the start of the loop.
		 * This allows you to traverse backwards out of the loop into the
		 * surrounding code. This is necessary to evaluate the right expression
		 * correctly, as it must be evaluated in the same way as the left
		 * expression, but the pointer to these segments would otherwise be
		 * lost if not stored on the instance. Once the right expression has
		 * been evaluated, this property is no longer used.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.prevSegments = null;

		/**
		 * Segments representing the start of everything to the left of the
		 * `in` keyword. This can be used to move forward towards
		 * `endOfLeftSegments`. `leftSegments` and `endOfLeftSegments` are
		 * effectively the head and tail of a doubly-linked list.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.leftSegments = null;

		/**
		 * Segments representing the end of everything to the left of the
		 * `in` keyword. This can be used to move backward towards `leftSegments`.
		 * `leftSegments` and `endOfLeftSegments` are effectively the head
		 * and tail of a doubly-linked list.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.endOfLeftSegments = null;

		/**
		 * The segments representing the left expression where `continue` will
		 * jump to. In `for-in` loops, `continue` must always re-execute the
		 * left expression each time through the loop. This contains the same
		 * segments as `leftSegments`, but is duplicated here so each loop
		 * context has the same property pointing to where `continue` should
		 * end up.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.continueDestSegments = null;
	}
}

/**
 * Represents the context for a `for-of` loop.
 */
class ForOfLoopContext extends LoopContextBase {
	/**
	 * Creates a new instance.
	 * @param {LoopContext|null} upperContext The previous `LoopContext`.
	 * @param {string|null} label The label for the loop from an enclosing `LabeledStatement`.
	 * @param {BreakContext} breakContext The context for breaking the loop.
	 */
	constructor(upperContext, label, breakContext) {
		super(upperContext, "ForOfStatement", label, breakContext);

		/**
		 * The segments that came immediately before the start of the loop.
		 * This allows you to traverse backwards out of the loop into the
		 * surrounding code. This is necessary to evaluate the right expression
		 * correctly, as it must be evaluated in the same way as the left
		 * expression, but the pointer to these segments would otherwise be
		 * lost if not stored on the instance. Once the right expression has
		 * been evaluated, this property is no longer used.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.prevSegments = null;

		/**
		 * Segments representing the start of everything to the left of the
		 * `of` keyword. This can be used to move forward towards
		 * `endOfLeftSegments`. `leftSegments` and `endOfLeftSegments` are
		 * effectively the head and tail of a doubly-linked list.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.leftSegments = null;

		/**
		 * Segments representing the end of everything to the left of the
		 * `of` keyword. This can be used to move backward towards `leftSegments`.
		 * `leftSegments` and `endOfLeftSegments` are effectively the head
		 * and tail of a doubly-linked list.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.endOfLeftSegments = null;

		/**
		 * The segments representing the left expression where `continue` will
		 * jump to. In `for-in` loops, `continue` must always re-execute the
		 * left expression each time through the loop. This contains the same
		 * segments as `leftSegments`, but is duplicated here so each loop
		 * context has the same property pointing to where `continue` should
		 * end up.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.continueDestSegments = null;
	}
}

/**
 * Represents the context for any loop.
 * @typedef {WhileLoopContext|DoWhileLoopContext|ForLoopContext|ForInLoopContext|ForOfLoopContext} LoopContext
 */

/**
 * Represents the context for a `switch` statement.
 */
class SwitchContext {
	/**
	 * Creates a new instance.
	 * @param {SwitchContext} upperContext The previous context.
	 * @param {boolean} hasCase Indicates if there is at least one `case` statement.
	 *      `default` doesn't count.
	 */
	constructor(upperContext, hasCase) {
		/**
		 * The previous context.
		 * @type {SwitchContext}
		 */
		this.upper = upperContext;

		/**
		 * Indicates if there is at least one `case` statement. `default` doesn't count.
		 * @type {boolean}
		 */
		this.hasCase = hasCase;

		/**
		 * The `default` keyword.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.defaultSegments = null;

		/**
		 * The default case body starting segments.
		 * @type {Array<CodePathSegment>|null}
		 */
		this.defaultBodySegments = null;

		/**
		 * Indicates if a `default` case and is empty exists.
		 * @type {boolean}
		 */
		this.foundEmptyDefault = false;

		/**
		 * Indicates that a `default` exists and is the last case.
		 * @type {boolean}
		 */
		this.lastIsDefault = false;

		/**
		 * The number of fork contexts created. This is equivalent to the
		 * number of `case` statements plus a `default` statement (if present).
		 * @type {number}
		 */
		this.forkCount = 0;
	}
}

/**
 * Represents the context for a `try` statement.
 */
class TryContext {
	/**
	 * Creates a new instance.
	 * @param {TryContext} upperContext The previous context.
	 * @param {boolean} hasFinalizer Indicates if the `try` statement has a
	 *      `finally` block.
	 * @param {ForkContext} forkContext The enclosing fork context.
	 */
	constructor(upperContext, hasFinalizer, forkContext) {
		/**
		 * The previous context.
		 * @type {TryContext}
		 */
		this.upper = upperContext;

		/**
		 * Indicates if the `try` statement has a `finally` block.
		 * @type {boolean}
		 */
		this.hasFinalizer = hasFinalizer;

		/**
		 * Tracks the traversal position inside of the `try` statement. This is
		 * used to help determine the context necessary to create paths because
		 * a `try` statement may or may not have `catch` or `finally` blocks,
		 * and code paths behave differently in those blocks.
		 * @type {"try"|"catch"|"finally"}
		 */
		this.position = "try";

		/**
		 * If the `try` statement has a `finally` block, this affects how a
		 * `return` statement behaves in the `try` block. Without `finally`,
		 * `return` behaves as usual and doesn't require a fork; with `finally`,
		 * `return` forks into the `finally` block, so we need a fork context
		 * to track it.
		 * @type {ForkContext|null}
		 */
		this.returnedForkContext = hasFinalizer
			? ForkContext.newEmpty(forkContext)
			: null;

		/**
		 * When a `throw` occurs inside of a `try` block, the code path forks
		 * into the `catch` or `finally` blocks, and this fork context tracks
		 * that path.
		 * @type {ForkContext}
		 */
		this.thrownForkContext = ForkContext.newEmpty(forkContext);

		/**
		 * Indicates if the last segment in the `try` block is reachable.
		 * @type {boolean}
		 */
		this.lastOfTryIsReachable = false;

		/**
		 * Indicates if the last segment in the `catch` block is reachable.
		 * @type {boolean}
		 */
		this.lastOfCatchIsReachable = false;
	}
}

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Adds given segments into the `dest` array.
 * If the `others` array does not include the given segments, adds to the `all`
 * array as well.
 *
 * This adds only reachable and used segments.
 * @param {CodePathSegment[]} dest A destination array (`returnedSegments` or `thrownSegments`).
 * @param {CodePathSegment[]} others Another destination array (`returnedSegments` or `thrownSegments`).
 * @param {CodePathSegment[]} all The unified destination array (`finalSegments`).
 * @param {CodePathSegment[]} segments Segments to add.
 * @returns {void}
 */
function addToReturnedOrThrown(dest, others, all, segments) {
	for (let i = 0; i < segments.length; ++i) {
		const segment = segments[i];

		dest.push(segment);
		if (!others.includes(segment)) {
			all.push(segment);
		}
	}
}

/**
 * Gets a loop context for a `continue` statement based on a given label.
 * @param {CodePathState} state The state to search within.
 * @param {string|null} label The label of a `continue` statement.
 * @returns {LoopContext} A loop-context for a `continue` statement.
 */
function getContinueContext(state, label) {
	if (!label) {
		return state.loopContext;
	}

	let context = state.loopContext;

	while (context) {
		if (context.label === label) {
			return context;
		}
		context = context.upper;
	}

	/* c8 ignore next */
	return null;
}

/**
 * Gets a context for a `break` statement.
 * @param {CodePathState} state The state to search within.
 * @param {string|null} label The label of a `break` statement.
 * @returns {BreakContext} A context for a `break` statement.
 */
function getBreakContext(state, label) {
	let context = state.breakContext;

	while (context) {
		if (label ? context.label === label : context.breakable) {
			return context;
		}
		context = context.upper;
	}

	/* c8 ignore next */
	return null;
}

/**
 * Gets a context for a `return` statement. There is just one special case:
 * if there is a `try` statement with a `finally` block, because that alters
 * how `return` behaves; otherwise, this just passes through the given state.
 * @param {CodePathState} state The state to search within
 * @returns {TryContext|CodePathState} A context for a `return` statement.
 */
function getReturnContext(state) {
	let context = state.tryContext;

	while (context) {
		if (context.hasFinalizer && context.position !== "finally") {
			return context;
		}
		context = context.upper;
	}

	return state;
}

/**
 * Gets a context for a `throw` statement. There is just one special case:
 * if there is a `try` statement with a `finally` block and we are inside of
 * a `catch` because that changes how `throw` behaves; otherwise, this just
 * passes through the given state.
 * @param {CodePathState} state The state to search within.
 * @returns {TryContext|CodePathState} A context for a `throw` statement.
 */
function getThrowContext(state) {
	let context = state.tryContext;

	while (context) {
		if (
			context.position === "try" ||
			(context.hasFinalizer && context.position === "catch")
		) {
			return context;
		}
		context = context.upper;
	}

	return state;
}

/**
 * Removes a given value from a given array.
 * @param {any[]} elements An array to remove the specific element.
 * @param {any} value The value to be removed.
 * @returns {void}
 */
function removeFromArray(elements, value) {
	elements.splice(elements.indexOf(value), 1);
}

/**
 * Disconnect given segments.
 *
 * This is used in a process for switch statements.
 * If there is the "default" chunk before other cases, the order is different
 * between node's and running's.
 * @param {CodePathSegment[]} prevSegments Forward segments to disconnect.
 * @param {CodePathSegment[]} nextSegments Backward segments to disconnect.
 * @returns {void}
 */
function disconnectSegments(prevSegments, nextSegments) {
	for (let i = 0; i < prevSegments.length; ++i) {
		const prevSegment = prevSegments[i];
		const nextSegment = nextSegments[i];

		removeFromArray(prevSegment.nextSegments, nextSegment);
		removeFromArray(prevSegment.allNextSegments, nextSegment);
		removeFromArray(nextSegment.prevSegments, prevSegment);
		removeFromArray(nextSegment.allPrevSegments, prevSegment);
	}
}

/**
 * Creates looping path between two arrays of segments, ensuring that there are
 * paths going between matching segments in the arrays.
 * @param {CodePathState} state The state to operate on.
 * @param {CodePathSegment[]} unflattenedFromSegments Segments which are source.
 * @param {CodePathSegment[]} unflattenedToSegments Segments which are destination.
 * @returns {void}
 */
function makeLooped(state, unflattenedFromSegments, unflattenedToSegments) {
	const fromSegments = CodePathSegment.flattenUnusedSegments(
		unflattenedFromSegments,
	);
	const toSegments = CodePathSegment.flattenUnusedSegments(
		unflattenedToSegments,
	);
	const end = Math.min(fromSegments.length, toSegments.length);

	/*
	 * This loop effectively updates a doubly-linked list between two collections
	 * of segments making sure that segments in the same array indices are
	 * combined to create a path.
	 */
	for (let i = 0; i < end; ++i) {
		// get the segments in matching array indices
		const fromSegment = fromSegments[i];
		const toSegment = toSegments[i];

		/*
		 * If the destination segment is reachable, then create a path from the
		 * source segment to the destination segment.
		 */
		if (toSegment.reachable) {
			fromSegment.nextSegments.push(toSegment);
		}

		/*
		 * If the source segment is reachable, then create a path from the
		 * destination segment back to the source segment.
		 */
		if (fromSegment.reachable) {
			toSegment.prevSegments.push(fromSegment);
		}

		/*
		 * Also update the arrays that don't care if the segments are reachable
		 * or not. This should always happen regardless of anything else.
		 */
		fromSegment.allNextSegments.push(toSegment);
		toSegment.allPrevSegments.push(fromSegment);

		/*
		 * If the destination segment has at least two previous segments in its
		 * path then that means there was one previous segment before this iteration
		 * of the loop was executed. So, we need to mark the source segment as
		 * looped.
		 */
		if (toSegment.allPrevSegments.length >= 2) {
			CodePathSegment.markPrevSegmentAsLooped(toSegment, fromSegment);
		}

		// let the code path analyzer know that there's been a loop created
		state.notifyLooped(fromSegment, toSegment);
	}
}

/**
 * Finalizes segments of `test` chunk of a ForStatement.
 *
 * - Adds `false` paths to paths which are leaving from the loop.
 * - Sets `true` paths to paths which go to the body.
 * @param {LoopContext} context A loop context to modify.
 * @param {ChoiceContext} choiceContext A choice context of this loop.
 * @param {CodePathSegment[]} head The current head paths.
 * @returns {void}
 */
function finalizeTestSegmentsOfFor(context, choiceContext, head) {
	/*
	 * If this choice context doesn't already contain paths from a
	 * child context, then add the current head to each potential path.
	 */
	if (!choiceContext.processed) {
		choiceContext.trueForkContext.add(head);
		choiceContext.falseForkContext.add(head);
		choiceContext.nullishForkContext.add(head);
	}

	/*
	 * If the test condition isn't a hardcoded truthy value, then `break`
	 * must follow the same path as if the test condition is false. To represent
	 * that, we append the path for when the loop test is false (represented by
	 * `falseForkContext`) to the `brokenForkContext`.
	 */
	if (context.test !== true) {
		context.brokenForkContext.addAll(choiceContext.falseForkContext);
	}

	context.endOfTestSegments = choiceContext.trueForkContext.makeNext(0, -1);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A class which manages state to analyze code paths.
 */
class CodePathState {
	/**
	 * Creates a new instance.
	 * @param {IdGenerator} idGenerator An id generator to generate id for code
	 *   path segments.
	 * @param {Function} onLooped A callback function to notify looping.
	 */
	constructor(idGenerator, onLooped) {
		/**
		 * The ID generator to use when creating new segments.
		 * @type {IdGenerator}
		 */
		this.idGenerator = idGenerator;

		/**
		 * A callback function to call when there is a loop.
		 * @type {Function}
		 */
		this.notifyLooped = onLooped;

		/**
		 * The root fork context for this state.
		 * @type {ForkContext}
		 */
		this.forkContext = ForkContext.newRoot(idGenerator);

		/**
		 * Context for logical expressions, conditional expressions, `if` statements,
		 * and loops.
		 * @type {ChoiceContext}
		 */
		this.choiceContext = null;

		/**
		 * Context for `switch` statements.
		 * @type {SwitchContext}
		 */
		this.switchContext = null;

		/**
		 * Context for `try` statements.
		 * @type {TryContext}
		 */
		this.tryContext = null;

		/**
		 * Context for loop statements.
		 * @type {LoopContext}
		 */
		this.loopContext = null;

		/**
		 * Context for `break` statements.
		 * @type {BreakContext}
		 */
		this.breakContext = null;

		/**
		 * Context for `ChainExpression` nodes.
		 * @type {ChainContext}
		 */
		this.chainContext = null;

		/**
		 * An array that tracks the current segments in the state. The array
		 * starts empty and segments are added with each `onCodePathSegmentStart`
		 * event and removed with each `onCodePathSegmentEnd` event. Effectively,
		 * this is tracking the code path segment traversal as the state is
		 * modified.
		 * @type {Array<CodePathSegment>}
		 */
		this.currentSegments = [];

		/**
		 * Tracks the starting segment for this path. This value never changes.
		 * @type {CodePathSegment}
		 */
		this.initialSegment = this.forkContext.head[0];

		/**
		 * The final segments of the code path which are either `return` or `throw`.
		 * This is a union of the segments in `returnedForkContext` and `thrownForkContext`.
		 * @type {Array<CodePathSegment>}
		 */
		this.finalSegments = [];

		/**
		 * The final segments of the code path which are `return`. These
		 * segments are also contained in `finalSegments`.
		 * @type {Array<CodePathSegment>}
		 */
		this.returnedForkContext = [];

		/**
		 * The final segments of the code path which are `throw`. These
		 * segments are also contained in `finalSegments`.
		 * @type {Array<CodePathSegment>}
		 */
		this.thrownForkContext = [];

		/*
		 * We add an `add` method so that these look more like fork contexts and
		 * can be used interchangeably when a fork context is needed to add more
		 * segments to a path.
		 *
		 * Ultimately, we want anything added to `returned` or `thrown` to also
		 * be added to `final`. We only add reachable and used segments to these
		 * arrays.
		 */
		const final = this.finalSegments;
		const returned = this.returnedForkContext;
		const thrown = this.thrownForkContext;

		returned.add = addToReturnedOrThrown.bind(
			null,
			returned,
			thrown,
			final,
		);
		thrown.add = addToReturnedOrThrown.bind(null, thrown, returned, final);
	}

	/**
	 * A passthrough property exposing the current pointer as part of the API.
	 * @type {CodePathSegment[]}
	 */
	get headSegments() {
		return this.forkContext.head;
	}

	/**
	 * The parent forking context.
	 * This is used for the root of new forks.
	 * @type {ForkContext}
	 */
	get parentForkContext() {
		const current = this.forkContext;

		return current && current.upper;
	}

	/**
	 * Creates and stacks new forking context.
	 * @param {boolean} forkLeavingPath A flag which shows being in a
	 *   "finally" block.
	 * @returns {ForkContext} The created context.
	 */
	pushForkContext(forkLeavingPath) {
		this.forkContext = ForkContext.newEmpty(
			this.forkContext,
			forkLeavingPath,
		);

		return this.forkContext;
	}

	/**
	 * Pops and merges the last forking context.
	 * @returns {ForkContext} The last context.
	 */
	popForkContext() {
		const lastContext = this.forkContext;

		this.forkContext = lastContext.upper;
		this.forkContext.replaceHead(lastContext.makeNext(0, -1));

		return lastContext;
	}

	/**
	 * Creates a new path.
	 * @returns {void}
	 */
	forkPath() {
		this.forkContext.add(this.parentForkContext.makeNext(-1, -1));
	}

	/**
	 * Creates a bypass path.
	 * This is used for such as IfStatement which does not have "else" chunk.
	 * @returns {void}
	 */
	forkBypassPath() {
		this.forkContext.add(this.parentForkContext.head);
	}

	//--------------------------------------------------------------------------
	// ConditionalExpression, LogicalExpression, IfStatement
	//--------------------------------------------------------------------------

	/**
	 * Creates a context for ConditionalExpression, LogicalExpression, AssignmentExpression (logical assignments only),
	 * IfStatement, WhileStatement, DoWhileStatement, or ForStatement.
	 *
	 * LogicalExpressions have cases that it goes different paths between the
	 * `true` case and the `false` case.
	 *
	 * For Example:
	 *
	 *     if (a || b) {
	 *         foo();
	 *     } else {
	 *         bar();
	 *     }
	 *
	 * In this case, `b` is evaluated always in the code path of the `else`
	 * block, but it's not so in the code path of the `if` block.
	 * So there are 3 paths.
	 *
	 *     a -> foo();
	 *     a -> b -> foo();
	 *     a -> b -> bar();
	 * @param {string} kind A kind string.
	 *   If the new context is LogicalExpression's or AssignmentExpression's, this is `"&&"` or `"||"` or `"??"`.
	 *   If it's IfStatement's or ConditionalExpression's, this is `"test"`.
	 *   Otherwise, this is `"loop"`.
	 * @param {boolean} isForkingAsResult Indicates if the result of the choice
	 *      creates a fork.
	 * @returns {void}
	 */
	pushChoiceContext(kind, isForkingAsResult) {
		this.choiceContext = new ChoiceContext(
			this.choiceContext,
			kind,
			isForkingAsResult,
			this.forkContext,
		);
	}

	/**
	 * Pops the last choice context and finalizes it.
	 * This is called upon leaving a node that represents a choice.
	 * @throws {Error} (Unreachable.)
	 * @returns {ChoiceContext} The popped context.
	 */
	popChoiceContext() {
		const poppedChoiceContext = this.choiceContext;
		const forkContext = this.forkContext;
		const head = forkContext.head;

		this.choiceContext = poppedChoiceContext.upper;

		switch (poppedChoiceContext.kind) {
			case "&&":
			case "||":
			case "??":
				/*
				 * The `head` are the path of the right-hand operand.
				 * If we haven't previously added segments from child contexts,
				 * then we add these segments to all possible forks.
				 */
				if (!poppedChoiceContext.processed) {
					poppedChoiceContext.trueForkContext.add(head);
					poppedChoiceContext.falseForkContext.add(head);
					poppedChoiceContext.nullishForkContext.add(head);
				}

				/*
				 * If this context is the left (test) expression for another choice
				 * context, such as `a || b` in the expression `a || b || c`,
				 * then we take the segments for this context and move them up
				 * to the parent context.
				 */
				if (poppedChoiceContext.isForkingAsResult) {
					const parentContext = this.choiceContext;

					parentContext.trueForkContext.addAll(
						poppedChoiceContext.trueForkContext,
					);
					parentContext.falseForkContext.addAll(
						poppedChoiceContext.falseForkContext,
					);
					parentContext.nullishForkContext.addAll(
						poppedChoiceContext.nullishForkContext,
					);
					parentContext.processed = true;

					// Exit early so we don't collapse all paths into one.
					return poppedChoiceContext;
				}

				break;

			case "test":
				if (!poppedChoiceContext.processed) {
					/*
					 * The head segments are the path of the `if` block here.
					 * Updates the `true` path with the end of the `if` block.
					 */
					poppedChoiceContext.trueForkContext.clear();
					poppedChoiceContext.trueForkContext.add(head);
				} else {
					/*
					 * The head segments are the path of the `else` block here.
					 * Updates the `false` path with the end of the `else`
					 * block.
					 */
					poppedChoiceContext.falseForkContext.clear();
					poppedChoiceContext.falseForkContext.add(head);
				}

				break;

			case "loop":
				/*
				 * Loops are addressed in `popLoopContext()` so just return
				 * the context without modification.
				 */
				return poppedChoiceContext;

			/* c8 ignore next */
			default:
				throw new Error("unreachable");
		}

		/*
		 * Merge the true path with the false path to create a single path.
		 */
		const combinedForkContext = poppedChoiceContext.trueForkContext;

		combinedForkContext.addAll(poppedChoiceContext.falseForkContext);
		forkContext.replaceHead(combinedForkContext.makeNext(0, -1));

		return poppedChoiceContext;
	}

	/**
	 * Creates a code path segment to represent right-hand operand of a logical
	 * expression.
	 * This is called in the preprocessing phase when entering a node.
	 * @throws {Error} (Unreachable.)
	 * @returns {void}
	 */
	makeLogicalRight() {
		const currentChoiceContext = this.choiceContext;
		const forkContext = this.forkContext;

		if (currentChoiceContext.processed) {
			/*
			 * This context was already assigned segments from a child
			 * choice context. In this case, we are concerned only about
			 * the path that does not short-circuit and so ends up on the
			 * right-hand operand of the logical expression.
			 */
			let prevForkContext;

			switch (currentChoiceContext.kind) {
				case "&&": // if true then go to the right-hand side.
					prevForkContext = currentChoiceContext.trueForkContext;
					break;
				case "||": // if false then go to the right-hand side.
					prevForkContext = currentChoiceContext.falseForkContext;
					break;
				case "??": // Both true/false can short-circuit, so needs the third path to go to the right-hand side. That's nullishForkContext.
					prevForkContext = currentChoiceContext.nullishForkContext;
					break;
				default:
					throw new Error("unreachable");
			}

			/*
			 * Create the segment for the right-hand operand of the logical expression
			 * and adjust the fork context pointer to point there. The right-hand segment
			 * is added at the end of all segments in `prevForkContext`.
			 */
			forkContext.replaceHead(prevForkContext.makeNext(0, -1));

			/*
			 * We no longer need this list of segments.
			 *
			 * Reset `processed` because we've removed the segments from the child
			 * choice context. This allows `popChoiceContext()` to continue adding
			 * segments later.
			 */
			prevForkContext.clear();
			currentChoiceContext.processed = false;
		} else {
			/*
			 * This choice context was not assigned segments from a child
			 * choice context, which means that it's a terminal logical
			 * expression.
			 *
			 * `head` is the segments for the left-hand operand of the
			 * logical expression.
			 *
			 * Each of the fork contexts below are empty at this point. We choose
			 * the path(s) that will short-circuit and add the segment for the
			 * left-hand operand to it. Ultimately, this will be the only segment
			 * in that path due to the short-circuting, so we are just seeding
			 * these paths to start.
			 */
			switch (currentChoiceContext.kind) {
				case "&&":
					/*
					 * In most contexts, when a && expression evaluates to false,
					 * it short circuits, so we need to account for that by setting
					 * the `falseForkContext` to the left operand.
					 *
					 * When a && expression is the left-hand operand for a ??
					 * expression, such as `(a && b) ?? c`, a nullish value will
					 * also short-circuit in a different way than a false value,
					 * so we also set the `nullishForkContext` to the left operand.
					 * This path is only used with a ?? expression and is thrown
					 * away for any other type of logical expression, so it's safe
					 * to always add.
					 */
					currentChoiceContext.falseForkContext.add(forkContext.head);
					currentChoiceContext.nullishForkContext.add(
						forkContext.head,
					);
					break;
				case "||": // the true path can short-circuit.
					currentChoiceContext.trueForkContext.add(forkContext.head);
					break;
				case "??": // both can short-circuit.
					currentChoiceContext.trueForkContext.add(forkContext.head);
					currentChoiceContext.falseForkContext.add(forkContext.head);
					break;
				default:
					throw new Error("unreachable");
			}

			/*
			 * Create the segment for the right-hand operand of the logical expression
			 * and adjust the fork context pointer to point there.
			 */
			forkContext.replaceHead(forkContext.makeNext(-1, -1));
		}
	}

	/**
	 * Makes a code path segment of the `if` block.
	 * @returns {void}
	 */
	makeIfConsequent() {
		const context = this.choiceContext;
		const forkContext = this.forkContext;

		/*
		 * If any result were not transferred from child contexts,
		 * this sets the head segments to both cases.
		 * The head segments are the path of the test expression.
		 */
		if (!context.processed) {
			context.trueForkContext.add(forkContext.head);
			context.falseForkContext.add(forkContext.head);
			context.nullishForkContext.add(forkContext.head);
		}

		context.processed = false;

		// Creates new path from the `true` case.
		forkContext.replaceHead(context.trueForkContext.makeNext(0, -1));
	}

	/**
	 * Makes a code path segment of the `else` block.
	 * @returns {void}
	 */
	makeIfAlternate() {
		const context = this.choiceContext;
		const forkContext = this.forkContext;

		/*
		 * The head segments are the path of the `if` block.
		 * Updates the `true` path with the end of the `if` block.
		 */
		context.trueForkContext.clear();
		context.trueForkContext.add(forkContext.head);
		context.processed = true;

		// Creates new path from the `false` case.
		forkContext.replaceHead(context.falseForkContext.makeNext(0, -1));
	}

	//--------------------------------------------------------------------------
	// ChainExpression
	//--------------------------------------------------------------------------

	/**
	 * Pushes a new `ChainExpression` context to the stack. This method is
	 * called when entering a `ChainExpression` node. A chain context is used to
	 * count forking in the optional chain then merge them on the exiting from the
	 * `ChainExpression` node.
	 * @returns {void}
	 */
	pushChainContext() {
		this.chainContext = new ChainContext(this.chainContext);
	}

	/**
	 * Pop a `ChainExpression` context from the stack. This method is called on
	 * exiting from each `ChainExpression` node. This merges all forks of the
	 * last optional chaining.
	 * @returns {void}
	 */
	popChainContext() {
		const context = this.chainContext;

		this.chainContext = context.upper;

		// pop all choice contexts of this.
		for (let i = context.choiceContextCount; i > 0; --i) {
			this.popChoiceContext();
		}
	}

	/**
	 * Create a choice context for optional access.
	 * This method is called on entering to each `(Call|Member)Expression[optional=true]` node.
	 * This creates a choice context as similar to `LogicalExpression[operator="??"]` node.
	 * @returns {void}
	 */
	makeOptionalNode() {
		if (this.chainContext) {
			this.chainContext.choiceContextCount += 1;
			this.pushChoiceContext("??", false);
		}
	}

	/**
	 * Create a fork.
	 * This method is called on entering to the `arguments|property` property of each `(Call|Member)Expression` node.
	 * @returns {void}
	 */
	makeOptionalRight() {
		if (this.chainContext) {
			this.makeLogicalRight();
		}
	}

	//--------------------------------------------------------------------------
	// SwitchStatement
	//--------------------------------------------------------------------------

	/**
	 * Creates a context object of SwitchStatement and stacks it.
	 * @param {boolean} hasCase `true` if the switch statement has one or more
	 *   case parts.
	 * @param {string|null} label The label text.
	 * @returns {void}
	 */
	pushSwitchContext(hasCase, label) {
		this.switchContext = new SwitchContext(this.switchContext, hasCase);
		this.pushBreakContext(true, label);
	}

	/**
	 * Pops the last context of SwitchStatement and finalizes it.
	 *
	 * - Disposes all forking stack for `case` and `default`.
	 * - Creates the next code path segment from `context.brokenForkContext`.
	 * - If the last `SwitchCase` node is not a `default` part, creates a path
	 *   to the `default` body.
	 * @returns {void}
	 */
	popSwitchContext() {
		const context = this.switchContext;

		this.switchContext = context.upper;

		const forkContext = this.forkContext;
		const brokenForkContext = this.popBreakContext().brokenForkContext;

		if (context.forkCount === 0) {
			/*
			 * When there is only one `default` chunk and there is one or more
			 * `break` statements, even if forks are nothing, it needs to merge
			 * those.
			 */
			if (!brokenForkContext.empty) {
				brokenForkContext.add(forkContext.makeNext(-1, -1));
				forkContext.replaceHead(brokenForkContext.makeNext(0, -1));
			}

			return;
		}

		const lastSegments = forkContext.head;

		this.forkBypassPath();
		const lastCaseSegments = forkContext.head;

		/*
		 * `brokenForkContext` is used to make the next segment.
		 * It must add the last segment into `brokenForkContext`.
		 */
		brokenForkContext.add(lastSegments);

		/*
		 * Any value that doesn't match a `case` test should flow to the default
		 * case. That happens normally when the default case is last in the `switch`,
		 * but if it's not, we need to rewire some of the paths to be correct.
		 */
		if (!context.lastIsDefault) {
			if (context.defaultBodySegments) {
				/*
				 * There is a non-empty default case, so remove the path from the `default`
				 * label to its body for an accurate representation.
				 */
				disconnectSegments(
					context.defaultSegments,
					context.defaultBodySegments,
				);

				/*
				 * Connect the path from the last non-default case to the body of the
				 * default case.
				 */
				makeLooped(this, lastCaseSegments, context.defaultBodySegments);
			} else {
				/*
				 * There is no default case, so we treat this as if the last case
				 * had a `break` in it.
				 */
				brokenForkContext.add(lastCaseSegments);
			}
		}

		// Traverse up to the original fork context for the `switch` statement
		for (let i = 0; i < context.forkCount; ++i) {
			this.forkContext = this.forkContext.upper;
		}

		/*
		 * Creates a path from all `brokenForkContext` paths.
		 * This is a path after `switch` statement.
		 */
		this.forkContext.replaceHead(brokenForkContext.makeNext(0, -1));
	}

	/**
	 * Makes a code path segment for a `SwitchCase` node.
	 * @param {boolean} isCaseBodyEmpty `true` if the body is empty.
	 * @param {boolean} isDefaultCase `true` if the body is the default case.
	 * @returns {void}
	 */
	makeSwitchCaseBody(isCaseBodyEmpty, isDefaultCase) {
		const context = this.switchContext;

		if (!context.hasCase) {
			return;
		}

		/*
		 * Merge forks.
		 * The parent fork context has two segments.
		 * Those are from the current `case` and the body of the previous case.
		 */
		const parentForkContext = this.forkContext;
		const forkContext = this.pushForkContext();

		forkContext.add(parentForkContext.makeNext(0, -1));

		/*
		 * Add information about the default case.
		 *
		 * The purpose of this is to identify the starting segments for the
		 * default case to make sure there is a path there.
		 */
		if (isDefaultCase) {
			/*
			 * This is the default case in the `switch`.
			 *
			 * We first save the current pointer as `defaultSegments` to point
			 * to the `default` keyword.
			 */
			context.defaultSegments = parentForkContext.head;

			/*
			 * If the body of the case is empty then we just set
			 * `foundEmptyDefault` to true; otherwise, we save a reference
			 * to the current pointer as `defaultBodySegments`.
			 */
			if (isCaseBodyEmpty) {
				context.foundEmptyDefault = true;
			} else {
				context.defaultBodySegments = forkContext.head;
			}
		} else {
			/*
			 * This is not the default case in the `switch`.
			 *
			 * If it's not empty and there is already an empty default case found,
			 * that means the default case actually comes before this case,
			 * and that it will fall through to this case. So, we can now
			 * ignore the previous default case (reset `foundEmptyDefault` to false)
			 * and set `defaultBodySegments` to the current segments because this is
			 * effectively the new default case.
			 */
			if (!isCaseBodyEmpty && context.foundEmptyDefault) {
				context.foundEmptyDefault = false;
				context.defaultBodySegments = forkContext.head;
			}
		}

		// keep track if the default case ends up last
		context.lastIsDefault = isDefaultCase;
		context.forkCount += 1;
	}

	//--------------------------------------------------------------------------
	// TryStatement
	//--------------------------------------------------------------------------

	/**
	 * Creates a context object of TryStatement and stacks it.
	 * @param {boolean} hasFinalizer `true` if the try statement has a
	 *   `finally` block.
	 * @returns {void}
	 */
	pushTryContext(hasFinalizer) {
		this.tryContext = new TryContext(
			this.tryContext,
			hasFinalizer,
			this.forkContext,
		);
	}

	/**
	 * Pops the last context of TryStatement and finalizes it.
	 * @returns {void}
	 */
	popTryContext() {
		const context = this.tryContext;

		this.tryContext = context.upper;

		/*
		 * If we're inside the `catch` block, that means there is no `finally`,
		 * so we can process the `try` and `catch` blocks the simple way and
		 * merge their two paths.
		 */
		if (context.position === "catch") {
			this.popForkContext();
			return;
		}

		/*
		 * The following process is executed only when there is a `finally`
		 * block.
		 */

		const originalReturnedForkContext = context.returnedForkContext;
		const originalThrownForkContext = context.thrownForkContext;

		// no `return` or `throw` in `try` or `catch` so there's nothing left to do
		if (
			originalReturnedForkContext.empty &&
			originalThrownForkContext.empty
		) {
			return;
		}

		/*
		 * The following process is executed only when there is a `finally`
		 * block and there was a `return` or `throw` in the `try` or `catch`
		 * blocks.
		 */

		// Separate head to normal paths and leaving paths.
		const headSegments = this.forkContext.head;

		this.forkContext = this.forkContext.upper;
		const normalSegments = headSegments.slice(
			0,
			(headSegments.length / 2) | 0,
		);
		const leavingSegments = headSegments.slice(
			(headSegments.length / 2) | 0,
		);

		// Forwards the leaving path to upper contexts.
		if (!originalReturnedForkContext.empty) {
			getReturnContext(this).returnedForkContext.add(leavingSegments);
		}
		if (!originalThrownForkContext.empty) {
			getThrowContext(this).thrownForkContext.add(leavingSegments);
		}

		// Sets the normal path as the next.
		this.forkContext.replaceHead(normalSegments);

		/*
		 * If both paths of the `try` block and the `catch` block are
		 * unreachable, the next path becomes unreachable as well.
		 */
		if (!context.lastOfTryIsReachable && !context.lastOfCatchIsReachable) {
			this.forkContext.makeUnreachable();
		}
	}

	/**
	 * Makes a code path segment for a `catch` block.
	 * @returns {void}
	 */
	makeCatchBlock() {
		const context = this.tryContext;
		const forkContext = this.forkContext;
		const originalThrownForkContext = context.thrownForkContext;

		/*
		 * We are now in a catch block so we need to update the context
		 * with that information. This includes creating a new fork
		 * context in case we encounter any `throw` statements here.
		 */
		context.position = "catch";
		context.thrownForkContext = ForkContext.newEmpty(forkContext);
		context.lastOfTryIsReachable = forkContext.reachable;

		// Merge the thrown paths from the `try` and `catch` blocks
		originalThrownForkContext.add(forkContext.head);
		const thrownSegments = originalThrownForkContext.makeNext(0, -1);

		// Fork to a bypass and the merged thrown path.
		this.pushForkContext();
		this.forkBypassPath();
		this.forkContext.add(thrownSegments);
	}

	/**
	 * Makes a code path segment for a `finally` block.
	 *
	 * In the `finally` block, parallel paths are created. The parallel paths
	 * are used as leaving-paths. The leaving-paths are paths from `return`
	 * statements and `throw` statements in a `try` block or a `catch` block.
	 * @returns {void}
	 */
	makeFinallyBlock() {
		const context = this.tryContext;
		let forkContext = this.forkContext;
		const originalReturnedForkContext = context.returnedForkContext;
		const originalThrownForContext = context.thrownForkContext;
		const headOfLeavingSegments = forkContext.head;

		// Update state.
		if (context.position === "catch") {
			// Merges two paths from the `try` block and `catch` block.
			this.popForkContext();
			forkContext = this.forkContext;

			context.lastOfCatchIsReachable = forkContext.reachable;
		} else {
			context.lastOfTryIsReachable = forkContext.reachable;
		}

		context.position = "finally";

		/*
		 * If there was no `return` or `throw` in either the `try` or `catch`
		 * blocks, then there's no further code paths to create for `finally`.
		 */
		if (
			originalReturnedForkContext.empty &&
			originalThrownForContext.empty
		) {
			// This path does not leave.
			return;
		}

		/*
		 * Create a parallel segment from merging returned and thrown.
		 * This segment will leave at the end of this `finally` block.
		 */
		const segments = forkContext.makeNext(-1, -1);

		for (let i = 0; i < forkContext.count; ++i) {
			const prevSegsOfLeavingSegment = [headOfLeavingSegments[i]];

			for (
				let j = 0;
				j < originalReturnedForkContext.segmentsList.length;
				++j
			) {
				prevSegsOfLeavingSegment.push(
					originalReturnedForkContext.segmentsList[j][i],
				);
			}
			for (
				let j = 0;
				j < originalThrownForContext.segmentsList.length;
				++j
			) {
				prevSegsOfLeavingSegment.push(
					originalThrownForContext.segmentsList[j][i],
				);
			}

			segments.push(
				CodePathSegment.newNext(
					this.idGenerator.next(),
					prevSegsOfLeavingSegment,
				),
			);
		}

		this.pushForkContext(true);
		this.forkContext.add(segments);
	}

	/**
	 * Makes a code path segment from the first throwable node to the `catch`
	 * block or the `finally` block.
	 * @returns {void}
	 */
	makeFirstThrowablePathInTryBlock() {
		const forkContext = this.forkContext;

		if (!forkContext.reachable) {
			return;
		}

		const context = getThrowContext(this);

		if (
			context === this ||
			context.position !== "try" ||
			!context.thrownForkContext.empty
		) {
			return;
		}

		context.thrownForkContext.add(forkContext.head);
		forkContext.replaceHead(forkContext.makeNext(-1, -1));
	}

	//--------------------------------------------------------------------------
	// Loop Statements
	//--------------------------------------------------------------------------

	/**
	 * Creates a context object of a loop statement and stacks it.
	 * @param {string} type The type of the node which was triggered. One of
	 *   `WhileStatement`, `DoWhileStatement`, `ForStatement`, `ForInStatement`,
	 *   and `ForStatement`.
	 * @param {string|null} label A label of the node which was triggered.
	 * @throws {Error} (Unreachable - unknown type.)
	 * @returns {void}
	 */
	pushLoopContext(type, label) {
		const forkContext = this.forkContext;

		// All loops need a path to account for `break` statements
		const breakContext = this.pushBreakContext(true, label);

		switch (type) {
			case "WhileStatement":
				this.pushChoiceContext("loop", false);
				this.loopContext = new WhileLoopContext(
					this.loopContext,
					label,
					breakContext,
				);
				break;

			case "DoWhileStatement":
				this.pushChoiceContext("loop", false);
				this.loopContext = new DoWhileLoopContext(
					this.loopContext,
					label,
					breakContext,
					forkContext,
				);
				break;

			case "ForStatement":
				this.pushChoiceContext("loop", false);
				this.loopContext = new ForLoopContext(
					this.loopContext,
					label,
					breakContext,
				);
				break;

			case "ForInStatement":
				this.loopContext = new ForInLoopContext(
					this.loopContext,
					label,
					breakContext,
				);
				break;

			case "ForOfStatement":
				this.loopContext = new ForOfLoopContext(
					this.loopContext,
					label,
					breakContext,
				);
				break;

			/* c8 ignore next */
			default:
				throw new Error(`unknown type: "${type}"`);
		}
	}

	/**
	 * Pops the last context of a loop statement and finalizes it.
	 * @throws {Error} (Unreachable - unknown type.)
	 * @returns {void}
	 */
	popLoopContext() {
		const context = this.loopContext;

		this.loopContext = context.upper;

		const forkContext = this.forkContext;
		const brokenForkContext = this.popBreakContext().brokenForkContext;

		// Creates a looped path.
		switch (context.type) {
			case "WhileStatement":
			case "ForStatement":
				this.popChoiceContext();

				/*
				 * Creates the path from the end of the loop body up to the
				 * location where `continue` would jump to.
				 */
				makeLooped(
					this,
					forkContext.head,
					context.continueDestSegments,
				);
				break;

			case "DoWhileStatement": {
				const choiceContext = this.popChoiceContext();

				if (!choiceContext.processed) {
					choiceContext.trueForkContext.add(forkContext.head);
					choiceContext.falseForkContext.add(forkContext.head);
				}

				/*
				 * If this isn't a hardcoded `true` condition, then `break`
				 * should continue down the path as if the condition evaluated
				 * to false.
				 */
				if (context.test !== true) {
					brokenForkContext.addAll(choiceContext.falseForkContext);
				}

				/*
				 * When the condition is true, the loop continues back to the top,
				 * so create a path from each possible true condition back to the
				 * top of the loop.
				 */
				const segmentsList = choiceContext.trueForkContext.segmentsList;

				for (let i = 0; i < segmentsList.length; ++i) {
					makeLooped(this, segmentsList[i], context.entrySegments);
				}
				break;
			}

			case "ForInStatement":
			case "ForOfStatement":
				brokenForkContext.add(forkContext.head);

				/*
				 * Creates the path from the end of the loop body up to the
				 * left expression (left of `in` or `of`) of the loop.
				 */
				makeLooped(this, forkContext.head, context.leftSegments);
				break;

			/* c8 ignore next */
			default:
				throw new Error("unreachable");
		}

		/*
		 * If there wasn't a `break` statement in the loop, then we're at
		 * the end of the loop's path, so we make an unreachable segment
		 * to mark that.
		 *
		 * If there was a `break` statement, then we continue on into the
		 * `brokenForkContext`.
		 */
		if (brokenForkContext.empty) {
			forkContext.replaceHead(forkContext.makeUnreachable(-1, -1));
		} else {
			forkContext.replaceHead(brokenForkContext.makeNext(0, -1));
		}
	}

	/**
	 * Makes a code path segment for the test part of a WhileStatement.
	 * @param {boolean|undefined} test The test value (only when constant).
	 * @returns {void}
	 */
	makeWhileTest(test) {
		const context = this.loopContext;
		const forkContext = this.forkContext;
		const testSegments = forkContext.makeNext(0, -1);

		// Update state.
		context.test = test;
		context.continueDestSegments = testSegments;
		forkContext.replaceHead(testSegments);
	}

	/**
	 * Makes a code path segment for the body part of a WhileStatement.
	 * @returns {void}
	 */
	makeWhileBody() {
		const context = this.loopContext;
		const choiceContext = this.choiceContext;
		const forkContext = this.forkContext;

		if (!choiceContext.processed) {
			choiceContext.trueForkContext.add(forkContext.head);
			choiceContext.falseForkContext.add(forkContext.head);
		}

		/*
		 * If this isn't a hardcoded `true` condition, then `break`
		 * should continue down the path as if the condition evaluated
		 * to false.
		 */
		if (context.test !== true) {
			context.brokenForkContext.addAll(choiceContext.falseForkContext);
		}
		forkContext.replaceHead(choiceContext.trueForkContext.makeNext(0, -1));
	}

	/**
	 * Makes a code path segment for the body part of a DoWhileStatement.
	 * @returns {void}
	 */
	makeDoWhileBody() {
		const context = this.loopContext;
		const forkContext = this.forkContext;
		const bodySegments = forkContext.makeNext(-1, -1);

		// Update state.
		context.entrySegments = bodySegments;
		forkContext.replaceHead(bodySegments);
	}

	/**
	 * Makes a code path segment for the test part of a DoWhileStatement.
	 * @param {boolean|undefined} test The test value (only when constant).
	 * @returns {void}
	 */
	makeDoWhileTest(test) {
		const context = this.loopContext;
		const forkContext = this.forkContext;

		context.test = test;

		/*
		 * If there is a `continue` statement in the loop then `continueForkContext`
		 * won't be empty. We wire up the path from `continue` to the loop
		 * test condition and then continue the traversal in the root fork context.
		 */
		if (!context.continueForkContext.empty) {
			context.continueForkContext.add(forkContext.head);
			const testSegments = context.continueForkContext.makeNext(0, -1);

			forkContext.replaceHead(testSegments);
		}
	}

	/**
	 * Makes a code path segment for the test part of a ForStatement.
	 * @param {boolean|undefined} test The test value (only when constant).
	 * @returns {void}
	 */
	makeForTest(test) {
		const context = this.loopContext;
		const forkContext = this.forkContext;
		const endOfInitSegments = forkContext.head;
		const testSegments = forkContext.makeNext(-1, -1);

		/*
		 * Update the state.
		 *
		 * The `continueDestSegments` are set to `testSegments` because we
		 * don't yet know if there is an update expression in this loop. So,
		 * from what we already know at this point, a `continue` statement
		 * will jump back to the test expression.
		 */
		context.test = test;
		context.endOfInitSegments = endOfInitSegments;
		context.continueDestSegments = context.testSegments = testSegments;
		forkContext.replaceHead(testSegments);
	}

	/**
	 * Makes a code path segment for the update part of a ForStatement.
	 * @returns {void}
	 */
	makeForUpdate() {
		const context = this.loopContext;
		const choiceContext = this.choiceContext;
		const forkContext = this.forkContext;

		// Make the next paths of the test.
		if (context.testSegments) {
			finalizeTestSegmentsOfFor(context, choiceContext, forkContext.head);
		} else {
			context.endOfInitSegments = forkContext.head;
		}

		/*
		 * Update the state.
		 *
		 * The `continueDestSegments` are now set to `updateSegments` because we
		 * know there is an update expression in this loop. So, a `continue` statement
		 * in the loop will jump to the update expression first, and then to any
		 * test expression the loop might have.
		 */
		const updateSegments = forkContext.makeDisconnected(-1, -1);

		context.continueDestSegments = context.updateSegments = updateSegments;
		forkContext.replaceHead(updateSegments);
	}

	/**
	 * Makes a code path segment for the body part of a ForStatement.
	 * @returns {void}
	 */
	makeForBody() {
		const context = this.loopContext;
		const choiceContext = this.choiceContext;
		const forkContext = this.forkContext;

		/*
		 * Determine what to do based on which part of the `for` loop are present.
		 * 1. If there is an update expression, then `updateSegments` is not null and
		 *    we need to assign `endOfUpdateSegments`, and if there is a test
		 *    expression, we then need to create the looped path to get back to
		 *    the test condition.
		 * 2. If there is no update expression but there is a test expression,
		 *    then we only need to update the test segment information.
		 * 3. If there is no update expression and no test expression, then we
		 *    just save `endOfInitSegments`.
		 */
		if (context.updateSegments) {
			context.endOfUpdateSegments = forkContext.head;

			/*
			 * In a `for` loop that has both an update expression and a test
			 * condition, execution flows from the test expression into the
			 * loop body, to the update expression, and then back to the test
			 * expression to determine if the loop should continue.
			 *
			 * To account for that, we need to make a path from the end of the
			 * update expression to the start of the test expression. This is
			 * effectively what creates the loop in the code path.
			 */
			if (context.testSegments) {
				makeLooped(
					this,
					context.endOfUpdateSegments,
					context.testSegments,
				);
			}
		} else if (context.testSegments) {
			finalizeTestSegmentsOfFor(context, choiceContext, forkContext.head);
		} else {
			context.endOfInitSegments = forkContext.head;
		}

		let bodySegments = context.endOfTestSegments;

		/*
		 * If there is a test condition, then there `endOfTestSegments` is also
		 * the start of the loop body. If there isn't a test condition then
		 * `bodySegments` will be null and we need to look elsewhere to find
		 * the start of the body.
		 *
		 * The body starts at the end of the init expression and ends at the end
		 * of the update expression, so we use those locations to determine the
		 * body segments.
		 */
		if (!bodySegments) {
			const prevForkContext = ForkContext.newEmpty(forkContext);

			prevForkContext.add(context.endOfInitSegments);
			if (context.endOfUpdateSegments) {
				prevForkContext.add(context.endOfUpdateSegments);
			}

			bodySegments = prevForkContext.makeNext(0, -1);
		}

		/*
		 * If there was no test condition and no update expression, then
		 * `continueDestSegments` will be null. In that case, a
		 * `continue` should skip directly to the body of the loop.
		 * Otherwise, we want to keep the current `continueDestSegments`.
		 */
		context.continueDestSegments =
			context.continueDestSegments || bodySegments;

		// move pointer to the body
		forkContext.replaceHead(bodySegments);
	}

	/**
	 * Makes a code path segment for the left part of a ForInStatement and a
	 * ForOfStatement.
	 * @returns {void}
	 */
	makeForInOfLeft() {
		const context = this.loopContext;
		const forkContext = this.forkContext;
		const leftSegments = forkContext.makeDisconnected(-1, -1);

		// Update state.
		context.prevSegments = forkContext.head;
		context.leftSegments = context.continueDestSegments = leftSegments;
		forkContext.replaceHead(leftSegments);
	}

	/**
	 * Makes a code path segment for the right part of a ForInStatement and a
	 * ForOfStatement.
	 * @returns {void}
	 */
	makeForInOfRight() {
		const context = this.loopContext;
		const forkContext = this.forkContext;
		const temp = ForkContext.newEmpty(forkContext);

		temp.add(context.prevSegments);
		const rightSegments = temp.makeNext(-1, -1);

		// Update state.
		context.endOfLeftSegments = forkContext.head;
		forkContext.replaceHead(rightSegments);
	}

	/**
	 * Makes a code path segment for the body part of a ForInStatement and a
	 * ForOfStatement.
	 * @returns {void}
	 */
	makeForInOfBody() {
		const context = this.loopContext;
		const forkContext = this.forkContext;
		const temp = ForkContext.newEmpty(forkContext);

		temp.add(context.endOfLeftSegments);
		const bodySegments = temp.makeNext(-1, -1);

		// Make a path: `right` -> `left`.
		makeLooped(this, forkContext.head, context.leftSegments);

		// Update state.
		context.brokenForkContext.add(forkContext.head);
		forkContext.replaceHead(bodySegments);
	}

	//--------------------------------------------------------------------------
	// Control Statements
	//--------------------------------------------------------------------------

	/**
	 * Creates new context in which a `break` statement can be used. This occurs inside of a loop,
	 * labeled statement, or switch statement.
	 * @param {boolean} breakable Indicates if we are inside a statement where
	 *      `break` without a label will exit the statement.
	 * @param {string|null} label The label associated with the statement.
	 * @returns {BreakContext} The new context.
	 */
	pushBreakContext(breakable, label) {
		this.breakContext = new BreakContext(
			this.breakContext,
			breakable,
			label,
			this.forkContext,
		);
		return this.breakContext;
	}

	/**
	 * Removes the top item of the break context stack.
	 * @returns {Object} The removed context.
	 */
	popBreakContext() {
		const context = this.breakContext;
		const forkContext = this.forkContext;

		this.breakContext = context.upper;

		// Process this context here for other than switches and loops.
		if (!context.breakable) {
			const brokenForkContext = context.brokenForkContext;

			if (!brokenForkContext.empty) {
				brokenForkContext.add(forkContext.head);
				forkContext.replaceHead(brokenForkContext.makeNext(0, -1));
			}
		}

		return context;
	}

	/**
	 * Makes a path for a `break` statement.
	 *
	 * It registers the head segment to a context of `break`.
	 * It makes new unreachable segment, then it set the head with the segment.
	 * @param {string|null} label A label of the break statement.
	 * @returns {void}
	 */
	makeBreak(label) {
		const forkContext = this.forkContext;

		if (!forkContext.reachable) {
			return;
		}

		const context = getBreakContext(this, label);

		if (context) {
			context.brokenForkContext.add(forkContext.head);
		}

		/* c8 ignore next */
		forkContext.replaceHead(forkContext.makeUnreachable(-1, -1));
	}

	/**
	 * Makes a path for a `continue` statement.
	 *
	 * It makes a looping path.
	 * It makes new unreachable segment, then it set the head with the segment.
	 * @param {string|null} label A label of the continue statement.
	 * @returns {void}
	 */
	makeContinue(label) {
		const forkContext = this.forkContext;

		if (!forkContext.reachable) {
			return;
		}

		const context = getContinueContext(this, label);

		if (context) {
			if (context.continueDestSegments) {
				makeLooped(
					this,
					forkContext.head,
					context.continueDestSegments,
				);

				// If the context is a for-in/of loop, this affects a break also.
				if (
					context.type === "ForInStatement" ||
					context.type === "ForOfStatement"
				) {
					context.brokenForkContext.add(forkContext.head);
				}
			} else {
				context.continueForkContext.add(forkContext.head);
			}
		}
		forkContext.replaceHead(forkContext.makeUnreachable(-1, -1));
	}

	/**
	 * Makes a path for a `return` statement.
	 *
	 * It registers the head segment to a context of `return`.
	 * It makes new unreachable segment, then it set the head with the segment.
	 * @returns {void}
	 */
	makeReturn() {
		const forkContext = this.forkContext;

		if (forkContext.reachable) {
			getReturnContext(this).returnedForkContext.add(forkContext.head);
			forkContext.replaceHead(forkContext.makeUnreachable(-1, -1));
		}
	}

	/**
	 * Makes a path for a `throw` statement.
	 *
	 * It registers the head segment to a context of `throw`.
	 * It makes new unreachable segment, then it set the head with the segment.
	 * @returns {void}
	 */
	makeThrow() {
		const forkContext = this.forkContext;

		if (forkContext.reachable) {
			getThrowContext(this).thrownForkContext.add(forkContext.head);
			forkContext.replaceHead(forkContext.makeUnreachable(-1, -1));
		}
	}

	/**
	 * Makes the final path.
	 * @returns {void}
	 */
	makeFinal() {
		const segments = this.currentSegments;

		if (segments.length > 0 && segments[0].reachable) {
			this.returnedForkContext.add(segments);
		}
	}
}

module.exports = CodePathState;
