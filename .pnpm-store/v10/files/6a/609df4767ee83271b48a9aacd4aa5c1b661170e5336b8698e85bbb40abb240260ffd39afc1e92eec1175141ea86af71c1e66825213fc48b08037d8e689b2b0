/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { Parser: AcornParser, tokTypes } = require("acorn");
const { SyncBailHook, HookMap } = require("tapable");
const vm = require("vm");
const Parser = require("../Parser");
const StackedMap = require("../util/StackedMap");
const binarySearchBounds = require("../util/binarySearchBounds");
const {
	webpackCommentRegExp,
	createMagicCommentContext
} = require("../util/magicComment");
const memoize = require("../util/memoize");
const BasicEvaluatedExpression = require("./BasicEvaluatedExpression");

/** @typedef {import("acorn").Options} AcornOptions */
/** @typedef {import("estree").AssignmentExpression} AssignmentExpression */
/** @typedef {import("estree").BinaryExpression} BinaryExpression */
/** @typedef {import("estree").BlockStatement} BlockStatement */
/** @typedef {import("estree").SequenceExpression} SequenceExpression */
/** @typedef {import("estree").CallExpression} CallExpression */
/** @typedef {import("estree").BaseCallExpression} BaseCallExpression */
/** @typedef {import("estree").StaticBlock} StaticBlock */
/** @typedef {import("estree").ClassDeclaration} ClassDeclaration */
/** @typedef {import("estree").ForStatement} ForStatement */
/** @typedef {import("estree").SwitchStatement} SwitchStatement */
/** @typedef {import("estree").ClassExpression} ClassExpression */
/** @typedef {import("estree").Comment} Comment */
/** @typedef {import("estree").ConditionalExpression} ConditionalExpression */
/** @typedef {import("estree").Declaration} Declaration */
/** @typedef {import("estree").PrivateIdentifier} PrivateIdentifier */
/** @typedef {import("estree").PropertyDefinition} PropertyDefinition */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {import("estree").VariableDeclaration} VariableDeclaration */
/** @typedef {import("estree").IfStatement} IfStatement */
/** @typedef {import("estree").LabeledStatement} LabeledStatement */
/** @typedef {import("estree").Literal} Literal */
/** @typedef {import("estree").LogicalExpression} LogicalExpression */
/** @typedef {import("estree").ChainExpression} ChainExpression */
/** @typedef {import("estree").MemberExpression} MemberExpression */
/** @typedef {import("estree").YieldExpression} YieldExpression */
/** @typedef {import("estree").MetaProperty} MetaProperty */
/** @typedef {import("estree").Property} Property */
/** @typedef {import("estree").AssignmentPattern} AssignmentPattern */
/** @typedef {import("estree").ChainElement} ChainElement */
/** @typedef {import("estree").Pattern} Pattern */
/** @typedef {import("estree").UpdateExpression} UpdateExpression */
/** @typedef {import("estree").ObjectExpression} ObjectExpression */
/** @typedef {import("estree").UnaryExpression} UnaryExpression */
/** @typedef {import("estree").ArrayExpression} ArrayExpression */
/** @typedef {import("estree").ArrayPattern} ArrayPattern */
/** @typedef {import("estree").AwaitExpression} AwaitExpression */
/** @typedef {import("estree").ThisExpression} ThisExpression */
/** @typedef {import("estree").RestElement} RestElement */
/** @typedef {import("estree").ObjectPattern} ObjectPattern */
/** @typedef {import("estree").SwitchCase} SwitchCase */
/** @typedef {import("estree").CatchClause} CatchClause */
/** @typedef {import("estree").VariableDeclarator} VariableDeclarator */
/** @typedef {import("estree").ForInStatement} ForInStatement */
/** @typedef {import("estree").ForOfStatement} ForOfStatement */
/** @typedef {import("estree").ReturnStatement} ReturnStatement */
/** @typedef {import("estree").WithStatement} WithStatement */
/** @typedef {import("estree").ThrowStatement} ThrowStatement */
/** @typedef {import("estree").MethodDefinition} MethodDefinition */
/** @typedef {import("estree").NewExpression} NewExpression */
/** @typedef {import("estree").SpreadElement} SpreadElement */
/** @typedef {import("estree").FunctionExpression} FunctionExpression */
/** @typedef {import("estree").WhileStatement} WhileStatement */
/** @typedef {import("estree").ArrowFunctionExpression} ArrowFunctionExpression */
/** @typedef {import("estree").ExpressionStatement} ExpressionStatement */
/** @typedef {import("estree").FunctionDeclaration} FunctionDeclaration */
/** @typedef {import("estree").DoWhileStatement} DoWhileStatement */
/** @typedef {import("estree").TryStatement} TryStatement */
/** @typedef {import("estree").Node} Node */
/** @typedef {import("estree").Program} Program */
/** @typedef {import("estree").Directive} Directive */
/** @typedef {import("estree").Statement} Statement */
/** @typedef {import("estree").ExportDefaultDeclaration} ExportDefaultDeclaration */
/** @typedef {import("estree").Super} Super */
/** @typedef {import("estree").TaggedTemplateExpression} TaggedTemplateExpression */
/** @typedef {import("estree").TemplateLiteral} TemplateLiteral */
/** @typedef {import("estree").AssignmentProperty} AssignmentProperty */
/**
 * @template T
 * @typedef {import("tapable").AsArray<T>} AsArray<T>
 */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */
/** @typedef {{declaredScope: ScopeInfo, freeName: string | true | undefined, tagInfo: TagInfo | undefined}} VariableInfoInterface */
/** @typedef {{ name: string | VariableInfo, rootInfo: string | VariableInfo, getMembers: () => string[], getMembersOptionals: () => boolean[], getMemberRanges: () => Range[] }} GetInfoResult */
/** @typedef {Statement | ModuleDeclaration | Expression} StatementPathItem */
/** @typedef {function(string): void} OnIdentString */
/** @typedef {function(string, Identifier): void} OnIdent */
/** @typedef {StatementPathItem[]} StatementPath */

// TODO remove cast when @types/estree has been updated to import assertions
/** @typedef {import("estree").BaseNode & { type: "ImportAttribute", key: Identifier | Literal, value: Literal }} ImportAttribute */
/** @typedef {import("estree").ImportDeclaration & { attributes?: Array<ImportAttribute> }} ImportDeclaration */
/** @typedef {import("estree").ExportNamedDeclaration & { attributes?: Array<ImportAttribute> }} ExportNamedDeclaration */
/** @typedef {import("estree").ExportAllDeclaration & { attributes?: Array<ImportAttribute> }} ExportAllDeclaration */
/** @typedef {import("estree").ImportExpression & { options?: Expression | null }} ImportExpression */
/** @typedef {ImportDeclaration | ExportNamedDeclaration | ExportDefaultDeclaration | ExportAllDeclaration} ModuleDeclaration */

/** @type {string[]} */
const EMPTY_ARRAY = [];
const ALLOWED_MEMBER_TYPES_CALL_EXPRESSION = 0b01;
const ALLOWED_MEMBER_TYPES_EXPRESSION = 0b10;
const ALLOWED_MEMBER_TYPES_ALL = 0b11;

const LEGACY_ASSERT_ATTRIBUTES = Symbol("assert");

/**
 * @param {any} Parser parser
 * @returns {typeof AcornParser} extender acorn parser
 */
const importAssertions = Parser =>
	/** @type {typeof AcornParser} */ (
		/** @type {unknown} */ (
			class extends Parser {
				parseWithClause() {
					const nodes = [];

					const isAssertLegacy = this.value === "assert";

					if (isAssertLegacy) {
						if (!this.eat(tokTypes.name)) {
							return nodes;
						}
					} else if (!this.eat(tokTypes._with)) {
						return nodes;
					}

					this.expect(tokTypes.braceL);

					const attributeKeys = {};
					let first = true;

					while (!this.eat(tokTypes.braceR)) {
						if (!first) {
							this.expect(tokTypes.comma);
							if (this.afterTrailingComma(tokTypes.braceR)) {
								break;
							}
						} else {
							first = false;
						}

						const attr = this.parseImportAttribute();
						const keyName =
							attr.key.type === "Identifier" ? attr.key.name : attr.key.value;

						if (Object.prototype.hasOwnProperty.call(attributeKeys, keyName)) {
							this.raiseRecoverable(
								attr.key.start,
								`Duplicate attribute key '${keyName}'`
							);
						}

						attributeKeys[keyName] = true;
						nodes.push(attr);
					}

					if (isAssertLegacy) {
						nodes[LEGACY_ASSERT_ATTRIBUTES] = true;
					}

					return nodes;
				}
			}
		)
	);

// Syntax: https://developer.mozilla.org/en/SpiderMonkey/Parser_API
const parser = AcornParser.extend(importAssertions);

/** @typedef {Record<string, string> & { _isLegacyAssert?: boolean }} ImportAttributes */

/**
 * @param {ImportDeclaration | ExportNamedDeclaration | ExportAllDeclaration | ImportExpression} node node with assertions
 * @returns {ImportAttributes | undefined} import attributes
 */
const getImportAttributes = node => {
	if (node.type === "ImportExpression") {
		if (
			node.options &&
			node.options.type === "ObjectExpression" &&
			node.options.properties[0] &&
			node.options.properties[0].type === "Property" &&
			node.options.properties[0].key.type === "Identifier" &&
			(node.options.properties[0].key.name === "with" ||
				node.options.properties[0].key.name === "assert") &&
			node.options.properties[0].value.type === "ObjectExpression" &&
			node.options.properties[0].value.properties.length > 0
		) {
			const properties =
				/** @type {Property[]} */
				(node.options.properties[0].value.properties);
			const result = /** @type {ImportAttributes} */ ({});
			for (const property of properties) {
				const key =
					/** @type {string} */
					(
						property.key.type === "Identifier"
							? property.key.name
							: /** @type {Literal} */ (property.key).value
					);
				result[key] =
					/** @type {string} */
					(/** @type {Literal} */ (property.value).value);
			}
			const key =
				node.options.properties[0].key.type === "Identifier"
					? node.options.properties[0].key.name
					: /** @type {Literal} */ (node.options.properties[0].key).value;

			if (key === "assert") {
				result._isLegacyAssert = true;
			}

			return result;
		}

		return;
	}

	if (node.attributes === undefined || node.attributes.length === 0) {
		return;
	}

	const result = /** @type {ImportAttributes} */ ({});

	for (const attribute of node.attributes) {
		const key =
			/** @type {string} */
			(
				attribute.key.type === "Identifier"
					? attribute.key.name
					: attribute.key.value
			);

		result[key] = /** @type {string} */ (attribute.value.value);
	}

	if (node.attributes[LEGACY_ASSERT_ATTRIBUTES]) {
		result._isLegacyAssert = true;
	}

	return result;
};

class VariableInfo {
	/**
	 * @param {ScopeInfo} declaredScope scope in which the variable is declared
	 * @param {string | true | undefined} freeName which free name the variable aliases, or true when none
	 * @param {TagInfo | undefined} tagInfo info about tags
	 */
	constructor(declaredScope, freeName, tagInfo) {
		this.declaredScope = declaredScope;
		this.freeName = freeName;
		this.tagInfo = tagInfo;
	}
}

/** @typedef {string | ScopeInfo | VariableInfo} ExportedVariableInfo */
/** @typedef {Literal | string | null | undefined} ImportSource */
/** @typedef {Omit<AcornOptions, "sourceType" | "ecmaVersion"> & { sourceType: "module" | "script" | "auto", ecmaVersion?: AcornOptions["ecmaVersion"] }} ParseOptions */

/**
 * @typedef {object} TagInfo
 * @property {any} tag
 * @property {any} data
 * @property {TagInfo | undefined} next
 */

/**
 * @typedef {object} ScopeInfo
 * @property {StackedMap<string, VariableInfo | ScopeInfo>} definitions
 * @property {boolean | "arrow"} topLevelScope
 * @property {boolean | string} inShorthand
 * @property {boolean} inTaggedTemplateTag
 * @property {boolean} inTry
 * @property {boolean} isStrict
 * @property {boolean} isAsmJs
 */

/** @typedef {[number, number]} Range */

/**
 * @typedef {object} DestructuringAssignmentProperty
 * @property {string} id
 * @property {Range | undefined=} range
 * @property {boolean | string} shorthand
 */

/**
 * Helper function for joining two ranges into a single range. This is useful
 * when working with AST nodes, as it allows you to combine the ranges of child nodes
 * to create the range of the _parent node_.
 * @param {[number, number]} startRange start range to join
 * @param {[number, number]} endRange end range to join
 * @returns {[number, number]} joined range
 * @example
 * ```js
 * 	const startRange = [0, 5];
 * 	const endRange = [10, 15];
 * 	const joinedRange = joinRanges(startRange, endRange);
 * 	console.log(joinedRange); // [0, 15]
 * ```
 */
const joinRanges = (startRange, endRange) => {
	if (!endRange) return startRange;
	if (!startRange) return endRange;
	return [startRange[0], endRange[1]];
};

/**
 * Helper function used to generate a string representation of a
 * [member expression](https://github.com/estree/estree/blob/master/es5.md#memberexpression).
 * @param {string} object object to name
 * @param {string[]} membersReversed reversed list of members
 * @returns {string} member expression as a string
 * @example
 * ```js
 * const membersReversed = ["property1", "property2", "property3"]; // Members parsed from the AST
 * const name = objectAndMembersToName("myObject", membersReversed);
 *
 * console.log(name); // "myObject.property1.property2.property3"
 * ```
 */
const objectAndMembersToName = (object, membersReversed) => {
	let name = object;
	for (let i = membersReversed.length - 1; i >= 0; i--) {
		name = `${name}.${membersReversed[i]}`;
	}
	return name;
};

/**
 * Grabs the name of a given expression and returns it as a string or undefined. Has particular
 * handling for [Identifiers](https://github.com/estree/estree/blob/master/es5.md#identifier),
 * [ThisExpressions](https://github.com/estree/estree/blob/master/es5.md#identifier), and
 * [MetaProperties](https://github.com/estree/estree/blob/master/es2015.md#metaproperty) which is
 * specifically for handling the `new.target` meta property.
 * @param {Expression | SpreadElement | Super} expression expression
 * @returns {string | "this" | undefined} name or variable info
 */
const getRootName = expression => {
	switch (expression.type) {
		case "Identifier":
			return expression.name;
		case "ThisExpression":
			return "this";
		case "MetaProperty":
			return `${expression.meta.name}.${expression.property.name}`;
		default:
			return undefined;
	}
};

/** @type {AcornOptions} */
const defaultParserOptions = {
	ranges: true,
	locations: true,
	ecmaVersion: "latest",
	sourceType: "module",
	// https://github.com/tc39/proposal-hashbang
	allowHashBang: true,
	onComment: undefined
};

const EMPTY_COMMENT_OPTIONS = {
	options: null,
	errors: null
};

class JavascriptParser extends Parser {
	/**
	 * @param {"module" | "script" | "auto"} sourceType default source type
	 */
	constructor(sourceType = "auto") {
		super();
		this.hooks = Object.freeze({
			/** @type {HookMap<SyncBailHook<[UnaryExpression], BasicEvaluatedExpression | null | undefined>>} */
			evaluateTypeof: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {HookMap<SyncBailHook<[Expression | SpreadElement | PrivateIdentifier], BasicEvaluatedExpression | null | undefined>>} */
			evaluate: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {HookMap<SyncBailHook<[Identifier | ThisExpression | MemberExpression | MetaProperty], BasicEvaluatedExpression | null | undefined>>} */
			evaluateIdentifier: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {HookMap<SyncBailHook<[Identifier | ThisExpression | MemberExpression], BasicEvaluatedExpression | null | undefined>>} */
			evaluateDefinedIdentifier: new HookMap(
				() => new SyncBailHook(["expression"])
			),
			/** @type {HookMap<SyncBailHook<[NewExpression], BasicEvaluatedExpression | null | undefined>>} */
			evaluateNewExpression: new HookMap(
				() => new SyncBailHook(["expression"])
			),
			/** @type {HookMap<SyncBailHook<[CallExpression], BasicEvaluatedExpression | null | undefined>>} */
			evaluateCallExpression: new HookMap(
				() => new SyncBailHook(["expression"])
			),
			/** @type {HookMap<SyncBailHook<[CallExpression, BasicEvaluatedExpression], BasicEvaluatedExpression | null | undefined>>} */
			evaluateCallExpressionMember: new HookMap(
				() => new SyncBailHook(["expression", "param"])
			),
			/** @type {HookMap<SyncBailHook<[Expression | Declaration | PrivateIdentifier, number], boolean | void>>} */
			isPure: new HookMap(
				() => new SyncBailHook(["expression", "commentsStartPosition"])
			),
			/** @type {SyncBailHook<[Statement | ModuleDeclaration], boolean | void>} */
			preStatement: new SyncBailHook(["statement"]),

			/** @type {SyncBailHook<[Statement | ModuleDeclaration], boolean | void>} */
			blockPreStatement: new SyncBailHook(["declaration"]),
			/** @type {SyncBailHook<[Statement | ModuleDeclaration], boolean | void>} */
			statement: new SyncBailHook(["statement"]),
			/** @type {SyncBailHook<[IfStatement], boolean | void>} */
			statementIf: new SyncBailHook(["statement"]),
			/** @type {SyncBailHook<[Expression, ClassExpression | ClassDeclaration], boolean | void>} */
			classExtendsExpression: new SyncBailHook([
				"expression",
				"classDefinition"
			]),
			/** @type {SyncBailHook<[MethodDefinition | PropertyDefinition | StaticBlock, ClassExpression | ClassDeclaration], boolean | void>} */
			classBodyElement: new SyncBailHook(["element", "classDefinition"]),
			/** @type {SyncBailHook<[Expression, MethodDefinition | PropertyDefinition, ClassExpression | ClassDeclaration], boolean | void>} */
			classBodyValue: new SyncBailHook([
				"expression",
				"element",
				"classDefinition"
			]),
			/** @type {HookMap<SyncBailHook<[LabeledStatement], boolean | void>>} */
			label: new HookMap(() => new SyncBailHook(["statement"])),
			/** @type {SyncBailHook<[ImportDeclaration, ImportSource], boolean | void>} */
			import: new SyncBailHook(["statement", "source"]),
			/** @type {SyncBailHook<[ImportDeclaration, ImportSource, string | null, string], boolean | void>} */
			importSpecifier: new SyncBailHook([
				"statement",
				"source",
				"exportName",
				"identifierName"
			]),
			/** @type {SyncBailHook<[ExportDefaultDeclaration | ExportNamedDeclaration], boolean | void>} */
			export: new SyncBailHook(["statement"]),
			/** @type {SyncBailHook<[ExportNamedDeclaration | ExportAllDeclaration, ImportSource], boolean | void>} */
			exportImport: new SyncBailHook(["statement", "source"]),
			/** @type {SyncBailHook<[ExportDefaultDeclaration | ExportNamedDeclaration | ExportAllDeclaration, Declaration], boolean | void>} */
			exportDeclaration: new SyncBailHook(["statement", "declaration"]),
			/** @type {SyncBailHook<[ExportDefaultDeclaration, FunctionDeclaration | ClassDeclaration], boolean | void>} */
			exportExpression: new SyncBailHook(["statement", "declaration"]),
			/** @type {SyncBailHook<[ExportDefaultDeclaration | ExportNamedDeclaration | ExportAllDeclaration, string, string, number | undefined], boolean | void>} */
			exportSpecifier: new SyncBailHook([
				"statement",
				"identifierName",
				"exportName",
				"index"
			]),
			/** @type {SyncBailHook<[ExportNamedDeclaration | ExportAllDeclaration, ImportSource, string | null, string | null, number | undefined], boolean | void>} */
			exportImportSpecifier: new SyncBailHook([
				"statement",
				"source",
				"identifierName",
				"exportName",
				"index"
			]),
			/** @type {SyncBailHook<[VariableDeclarator, Statement], boolean | void>} */
			preDeclarator: new SyncBailHook(["declarator", "statement"]),
			/** @type {SyncBailHook<[VariableDeclarator, Statement], boolean | void>} */
			declarator: new SyncBailHook(["declarator", "statement"]),
			/** @type {HookMap<SyncBailHook<[Declaration], boolean | void>>} */
			varDeclaration: new HookMap(() => new SyncBailHook(["declaration"])),
			/** @type {HookMap<SyncBailHook<[Declaration], boolean | void>>} */
			varDeclarationLet: new HookMap(() => new SyncBailHook(["declaration"])),
			/** @type {HookMap<SyncBailHook<[Declaration], boolean | void>>} */
			varDeclarationConst: new HookMap(() => new SyncBailHook(["declaration"])),
			/** @type {HookMap<SyncBailHook<[Declaration], boolean | void>>} */
			varDeclarationVar: new HookMap(() => new SyncBailHook(["declaration"])),
			/** @type {HookMap<SyncBailHook<[Identifier], boolean | void>>} */
			pattern: new HookMap(() => new SyncBailHook(["pattern"])),
			/** @type {HookMap<SyncBailHook<[Expression], boolean | void>>} */
			canRename: new HookMap(() => new SyncBailHook(["initExpression"])),
			/** @type {HookMap<SyncBailHook<[Expression], boolean | void>>} */
			rename: new HookMap(() => new SyncBailHook(["initExpression"])),
			/** @type {HookMap<SyncBailHook<[AssignmentExpression], boolean | void>>} */
			assign: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {HookMap<SyncBailHook<[AssignmentExpression, string[]], boolean | void>>} */
			assignMemberChain: new HookMap(
				() => new SyncBailHook(["expression", "members"])
			),
			/** @type {HookMap<SyncBailHook<[Expression], boolean | void>>} */
			typeof: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {SyncBailHook<[ImportExpression], boolean | void>} */
			importCall: new SyncBailHook(["expression"]),
			/** @type {SyncBailHook<[Expression | ForOfStatement], boolean | void>} */
			topLevelAwait: new SyncBailHook(["expression"]),
			/** @type {HookMap<SyncBailHook<[CallExpression], boolean | void>>} */
			call: new HookMap(() => new SyncBailHook(["expression"])),
			/** Something like "a.b()" */
			/** @type {HookMap<SyncBailHook<[CallExpression, string[], boolean[], Range[]], boolean | void>>} */
			callMemberChain: new HookMap(
				() =>
					new SyncBailHook([
						"expression",
						"members",
						"membersOptionals",
						"memberRanges"
					])
			),
			/** Something like "a.b().c.d" */
			/** @type {HookMap<SyncBailHook<[Expression, string[], CallExpression, string[], Range[]], boolean | void>>} */
			memberChainOfCallMemberChain: new HookMap(
				() =>
					new SyncBailHook([
						"expression",
						"calleeMembers",
						"callExpression",
						"members",
						"memberRanges"
					])
			),
			/** Something like "a.b().c.d()"" */
			/** @type {HookMap<SyncBailHook<[CallExpression, string[], CallExpression, string[], Range[]], boolean | void>>} */
			callMemberChainOfCallMemberChain: new HookMap(
				() =>
					new SyncBailHook([
						"expression",
						"calleeMembers",
						"innerCallExpression",
						"members",
						"memberRanges"
					])
			),
			/** @type {SyncBailHook<[ChainExpression], boolean | void>} */
			optionalChaining: new SyncBailHook(["optionalChaining"]),
			/** @type {HookMap<SyncBailHook<[NewExpression], boolean | void>>} */
			new: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {SyncBailHook<[BinaryExpression], boolean | void>} */
			binaryExpression: new SyncBailHook(["binaryExpression"]),
			/** @type {HookMap<SyncBailHook<[Expression], boolean | void>>} */
			expression: new HookMap(() => new SyncBailHook(["expression"])),
			/** @type {HookMap<SyncBailHook<[MemberExpression, string[], boolean[], Range[]], boolean | void>>} */
			expressionMemberChain: new HookMap(
				() =>
					new SyncBailHook([
						"expression",
						"members",
						"membersOptionals",
						"memberRanges"
					])
			),
			/** @type {HookMap<SyncBailHook<[MemberExpression, string[]], boolean | void>>} */
			unhandledExpressionMemberChain: new HookMap(
				() => new SyncBailHook(["expression", "members"])
			),
			/** @type {SyncBailHook<[ConditionalExpression], boolean | void>} */
			expressionConditionalOperator: new SyncBailHook(["expression"]),
			/** @type {SyncBailHook<[LogicalExpression], boolean | void>} */
			expressionLogicalOperator: new SyncBailHook(["expression"]),
			/** @type {SyncBailHook<[Program, Comment[]], boolean | void>} */
			program: new SyncBailHook(["ast", "comments"]),
			/** @type {SyncBailHook<[Program, Comment[]], boolean | void>} */
			finish: new SyncBailHook(["ast", "comments"])
		});
		this.sourceType = sourceType;
		/** @type {ScopeInfo} */
		this.scope = undefined;
		/** @type {ParserState} */
		this.state = undefined;
		/** @type {Comment[] | undefined} */
		this.comments = undefined;
		/** @type {Set<number> | undefined} */
		this.semicolons = undefined;
		/** @type {StatementPath | undefined} */
		this.statementPath = undefined;
		/** @type {Statement | ModuleDeclaration | Expression | undefined} */
		this.prevStatement = undefined;
		/** @type {WeakMap<Expression, Set<DestructuringAssignmentProperty>> | undefined} */
		this.destructuringAssignmentProperties = undefined;
		this.currentTagData = undefined;
		this.magicCommentContext = createMagicCommentContext();
		this._initializeEvaluating();
	}

	_initializeEvaluating() {
		this.hooks.evaluate.for("Literal").tap("JavascriptParser", _expr => {
			const expr = /** @type {Literal} */ (_expr);

			switch (typeof expr.value) {
				case "number":
					return new BasicEvaluatedExpression()
						.setNumber(expr.value)
						.setRange(/** @type {Range} */ (expr.range));
				case "bigint":
					return new BasicEvaluatedExpression()
						.setBigInt(expr.value)
						.setRange(/** @type {Range} */ (expr.range));
				case "string":
					return new BasicEvaluatedExpression()
						.setString(expr.value)
						.setRange(/** @type {Range} */ (expr.range));
				case "boolean":
					return new BasicEvaluatedExpression()
						.setBoolean(expr.value)
						.setRange(/** @type {Range} */ (expr.range));
			}
			if (expr.value === null) {
				return new BasicEvaluatedExpression()
					.setNull()
					.setRange(/** @type {Range} */ (expr.range));
			}
			if (expr.value instanceof RegExp) {
				return new BasicEvaluatedExpression()
					.setRegExp(expr.value)
					.setRange(/** @type {Range} */ (expr.range));
			}
		});
		this.hooks.evaluate.for("NewExpression").tap("JavascriptParser", _expr => {
			const expr = /** @type {NewExpression} */ (_expr);
			const callee = expr.callee;
			if (callee.type !== "Identifier") return;
			if (callee.name !== "RegExp") {
				return this.callHooksForName(
					this.hooks.evaluateNewExpression,
					callee.name,
					expr
				);
			} else if (
				expr.arguments.length > 2 ||
				this.getVariableInfo("RegExp") !== "RegExp"
			)
				return;

			let regExp;
			const arg1 = expr.arguments[0];

			if (arg1) {
				if (arg1.type === "SpreadElement") return;

				const evaluatedRegExp = this.evaluateExpression(arg1);

				if (!evaluatedRegExp) return;

				regExp = evaluatedRegExp.asString();

				if (!regExp) return;
			} else {
				return (
					new BasicEvaluatedExpression()
						// eslint-disable-next-line prefer-regex-literals
						.setRegExp(new RegExp(""))
						.setRange(/** @type {Range} */ (expr.range))
				);
			}

			let flags;
			const arg2 = expr.arguments[1];

			if (arg2) {
				if (arg2.type === "SpreadElement") return;

				const evaluatedFlags = this.evaluateExpression(arg2);

				if (!evaluatedFlags) return;

				if (!evaluatedFlags.isUndefined()) {
					flags = evaluatedFlags.asString();

					if (
						flags === undefined ||
						!BasicEvaluatedExpression.isValidRegExpFlags(flags)
					)
						return;
				}
			}

			return new BasicEvaluatedExpression()
				.setRegExp(flags ? new RegExp(regExp, flags) : new RegExp(regExp))
				.setRange(/** @type {Range} */ (expr.range));
		});
		this.hooks.evaluate
			.for("LogicalExpression")
			.tap("JavascriptParser", _expr => {
				const expr = /** @type {LogicalExpression} */ (_expr);

				const left = this.evaluateExpression(expr.left);
				let returnRight = false;
				/** @type {boolean | undefined} */
				let allowedRight;
				if (expr.operator === "&&") {
					const leftAsBool = left.asBool();
					if (leftAsBool === false)
						return left.setRange(/** @type {Range} */ (expr.range));
					returnRight = leftAsBool === true;
					allowedRight = false;
				} else if (expr.operator === "||") {
					const leftAsBool = left.asBool();
					if (leftAsBool === true)
						return left.setRange(/** @type {Range} */ (expr.range));
					returnRight = leftAsBool === false;
					allowedRight = true;
				} else if (expr.operator === "??") {
					const leftAsNullish = left.asNullish();
					if (leftAsNullish === false)
						return left.setRange(/** @type {Range} */ (expr.range));
					if (leftAsNullish !== true) return;
					returnRight = true;
				} else return;
				const right = this.evaluateExpression(expr.right);
				if (returnRight) {
					if (left.couldHaveSideEffects()) right.setSideEffects();
					return right.setRange(/** @type {Range} */ (expr.range));
				}

				const asBool = right.asBool();

				if (allowedRight === true && asBool === true) {
					return new BasicEvaluatedExpression()
						.setRange(/** @type {Range} */ (expr.range))
						.setTruthy();
				} else if (allowedRight === false && asBool === false) {
					return new BasicEvaluatedExpression()
						.setRange(/** @type {Range} */ (expr.range))
						.setFalsy();
				}
			});

		/**
		 * In simple logical cases, we can use valueAsExpression to assist us in evaluating the expression on
		 * either side of a [BinaryExpression](https://github.com/estree/estree/blob/master/es5.md#binaryexpression).
		 * This supports scenarios in webpack like conditionally `import()`'ing modules based on some simple evaluation:
		 *
		 * ```js
		 * if (1 === 3) {
		 *  import("./moduleA"); // webpack will auto evaluate this and not import the modules
		 * }
		 * ```
		 *
		 * Additional scenarios include evaluation of strings inside of dynamic import statements:
		 *
		 * ```js
		 * const foo = "foo";
		 * const bar = "bar";
		 *
		 * import("./" + foo + bar); // webpack will auto evaluate this into import("./foobar")
		 * ```
		 * @param {boolean | number | bigint | string} value the value to convert to an expression
		 * @param {BinaryExpression | UnaryExpression} expr the expression being evaluated
		 * @param {boolean} sideEffects whether the expression has side effects
		 * @returns {BasicEvaluatedExpression | undefined} the evaluated expression
		 * @example
		 *
		 * ```js
		 * const binaryExpr = new BinaryExpression("+",
		 * 	{ type: "Literal", value: 2 },
		 * 	{ type: "Literal", value: 3 }
		 * );
		 *
		 * const leftValue = 2;
		 * const rightValue = 3;
		 *
		 * const leftExpr = valueAsExpression(leftValue, binaryExpr.left, false);
		 * const rightExpr = valueAsExpression(rightValue, binaryExpr.right, false);
		 * const result = new BasicEvaluatedExpression()
		 * 	.setNumber(leftExpr.number + rightExpr.number)
		 * 	.setRange(binaryExpr.range);
		 *
		 * console.log(result.number); // Output: 5
		 * ```
		 */
		const valueAsExpression = (value, expr, sideEffects) => {
			switch (typeof value) {
				case "boolean":
					return new BasicEvaluatedExpression()
						.setBoolean(value)
						.setSideEffects(sideEffects)
						.setRange(/** @type {Range} */ (expr.range));
				case "number":
					return new BasicEvaluatedExpression()
						.setNumber(value)
						.setSideEffects(sideEffects)
						.setRange(/** @type {Range} */ (expr.range));
				case "bigint":
					return new BasicEvaluatedExpression()
						.setBigInt(value)
						.setSideEffects(sideEffects)
						.setRange(/** @type {Range} */ (expr.range));
				case "string":
					return new BasicEvaluatedExpression()
						.setString(value)
						.setSideEffects(sideEffects)
						.setRange(/** @type {Range} */ (expr.range));
			}
		};

		this.hooks.evaluate
			.for("BinaryExpression")
			.tap("JavascriptParser", _expr => {
				const expr = /** @type {BinaryExpression} */ (_expr);

				/**
				 * Evaluates a binary expression if and only if it is a const operation (e.g. 1 + 2, "a" + "b", etc.).
				 * @template T
				 * @param {(leftOperand: T, rightOperand: T) => boolean | number | bigint | string} operandHandler the handler for the operation (e.g. (a, b) => a + b)
				 * @returns {BasicEvaluatedExpression | undefined} the evaluated expression
				 */
				const handleConstOperation = operandHandler => {
					const left = this.evaluateExpression(expr.left);
					if (!left.isCompileTimeValue()) return;

					const right = this.evaluateExpression(expr.right);
					if (!right.isCompileTimeValue()) return;

					const result = operandHandler(
						left.asCompileTimeValue(),
						right.asCompileTimeValue()
					);
					return valueAsExpression(
						result,
						expr,
						left.couldHaveSideEffects() || right.couldHaveSideEffects()
					);
				};

				/**
				 * Helper function to determine if two booleans are always different. This is used in `handleStrictEqualityComparison`
				 * to determine if an expressions boolean or nullish conversion is equal or not.
				 * @param {boolean} a first boolean to compare
				 * @param {boolean} b second boolean to compare
				 * @returns {boolean} true if the two booleans are always different, false otherwise
				 */
				const isAlwaysDifferent = (a, b) =>
					(a === true && b === false) || (a === false && b === true);

				/**
				 * @param {BasicEvaluatedExpression} left left
				 * @param {BasicEvaluatedExpression} right right
				 * @param {BasicEvaluatedExpression} res res
				 * @param {boolean} eql true for "===" and false for "!=="
				 * @returns {BasicEvaluatedExpression | undefined} result
				 */
				const handleTemplateStringCompare = (left, right, res, eql) => {
					/**
					 * @param {BasicEvaluatedExpression[]} parts parts
					 * @returns {string} value
					 */
					const getPrefix = parts => {
						let value = "";
						for (const p of parts) {
							const v = p.asString();
							if (v !== undefined) value += v;
							else break;
						}
						return value;
					};
					/**
					 * @param {BasicEvaluatedExpression[]} parts parts
					 * @returns {string} value
					 */
					const getSuffix = parts => {
						let value = "";
						for (let i = parts.length - 1; i >= 0; i--) {
							const v = parts[i].asString();
							if (v !== undefined) value = v + value;
							else break;
						}
						return value;
					};
					const leftPrefix = getPrefix(
						/** @type {BasicEvaluatedExpression[]} */ (left.parts)
					);
					const rightPrefix = getPrefix(
						/** @type {BasicEvaluatedExpression[]} */ (right.parts)
					);
					const leftSuffix = getSuffix(
						/** @type {BasicEvaluatedExpression[]} */ (left.parts)
					);
					const rightSuffix = getSuffix(
						/** @type {BasicEvaluatedExpression[]} */ (right.parts)
					);
					const lenPrefix = Math.min(leftPrefix.length, rightPrefix.length);
					const lenSuffix = Math.min(leftSuffix.length, rightSuffix.length);
					const prefixMismatch =
						lenPrefix > 0 &&
						leftPrefix.slice(0, lenPrefix) !== rightPrefix.slice(0, lenPrefix);
					const suffixMismatch =
						lenSuffix > 0 &&
						leftSuffix.slice(-lenSuffix) !== rightSuffix.slice(-lenSuffix);
					if (prefixMismatch || suffixMismatch) {
						return res
							.setBoolean(!eql)
							.setSideEffects(
								left.couldHaveSideEffects() || right.couldHaveSideEffects()
							);
					}
				};

				/**
				 * Helper function to handle BinaryExpressions using strict equality comparisons (e.g. "===" and "!==").
				 * @param {boolean} eql true for "===" and false for "!=="
				 * @returns {BasicEvaluatedExpression | undefined} the evaluated expression
				 */
				const handleStrictEqualityComparison = eql => {
					const left = this.evaluateExpression(expr.left);
					const right = this.evaluateExpression(expr.right);
					const res = new BasicEvaluatedExpression();
					res.setRange(/** @type {Range} */ (expr.range));

					const leftConst = left.isCompileTimeValue();
					const rightConst = right.isCompileTimeValue();

					if (leftConst && rightConst) {
						return res
							.setBoolean(
								eql ===
									(left.asCompileTimeValue() === right.asCompileTimeValue())
							)
							.setSideEffects(
								left.couldHaveSideEffects() || right.couldHaveSideEffects()
							);
					}

					if (left.isArray() && right.isArray()) {
						return res
							.setBoolean(!eql)
							.setSideEffects(
								left.couldHaveSideEffects() || right.couldHaveSideEffects()
							);
					}
					if (left.isTemplateString() && right.isTemplateString()) {
						return handleTemplateStringCompare(left, right, res, eql);
					}

					const leftPrimitive = left.isPrimitiveType();
					const rightPrimitive = right.isPrimitiveType();

					if (
						// Primitive !== Object or
						// compile-time object types are never equal to something at runtime
						(leftPrimitive === false &&
							(leftConst || rightPrimitive === true)) ||
						(rightPrimitive === false &&
							(rightConst || leftPrimitive === true)) ||
						// Different nullish or boolish status also means not equal
						isAlwaysDifferent(
							/** @type {boolean} */ (left.asBool()),
							/** @type {boolean} */ (right.asBool())
						) ||
						isAlwaysDifferent(
							/** @type {boolean} */ (left.asNullish()),
							/** @type {boolean} */ (right.asNullish())
						)
					) {
						return res
							.setBoolean(!eql)
							.setSideEffects(
								left.couldHaveSideEffects() || right.couldHaveSideEffects()
							);
					}
				};

				/**
				 * Helper function to handle BinaryExpressions using abstract equality comparisons (e.g. "==" and "!=").
				 * @param {boolean} eql true for "==" and false for "!="
				 * @returns {BasicEvaluatedExpression | undefined} the evaluated expression
				 */
				const handleAbstractEqualityComparison = eql => {
					const left = this.evaluateExpression(expr.left);
					const right = this.evaluateExpression(expr.right);
					const res = new BasicEvaluatedExpression();
					res.setRange(/** @type {Range} */ (expr.range));

					const leftConst = left.isCompileTimeValue();
					const rightConst = right.isCompileTimeValue();

					if (leftConst && rightConst) {
						return res
							.setBoolean(
								eql ===
									// eslint-disable-next-line eqeqeq
									(left.asCompileTimeValue() == right.asCompileTimeValue())
							)
							.setSideEffects(
								left.couldHaveSideEffects() || right.couldHaveSideEffects()
							);
					}

					if (left.isArray() && right.isArray()) {
						return res
							.setBoolean(!eql)
							.setSideEffects(
								left.couldHaveSideEffects() || right.couldHaveSideEffects()
							);
					}
					if (left.isTemplateString() && right.isTemplateString()) {
						return handleTemplateStringCompare(left, right, res, eql);
					}
				};

				if (expr.operator === "+") {
					const left = this.evaluateExpression(expr.left);
					const right = this.evaluateExpression(expr.right);
					const res = new BasicEvaluatedExpression();
					if (left.isString()) {
						if (right.isString()) {
							res.setString(
								/** @type {string} */ (left.string) +
									/** @type {string} */ (right.string)
							);
						} else if (right.isNumber()) {
							res.setString(/** @type {string} */ (left.string) + right.number);
						} else if (
							right.isWrapped() &&
							right.prefix &&
							right.prefix.isString()
						) {
							// "left" + ("prefix" + inner + "postfix")
							// => ("leftPrefix" + inner + "postfix")
							res.setWrapped(
								new BasicEvaluatedExpression()
									.setString(
										/** @type {string} */ (left.string) +
											/** @type {string} */ (right.prefix.string)
									)
									.setRange(
										joinRanges(
											/** @type {Range} */ (left.range),
											/** @type {Range} */ (right.prefix.range)
										)
									),
								right.postfix,
								right.wrappedInnerExpressions
							);
						} else if (right.isWrapped()) {
							// "left" + ([null] + inner + "postfix")
							// => ("left" + inner + "postfix")
							res.setWrapped(
								left,
								right.postfix,
								right.wrappedInnerExpressions
							);
						} else {
							// "left" + expr
							// => ("left" + expr + "")
							res.setWrapped(left, null, [right]);
						}
					} else if (left.isNumber()) {
						if (right.isString()) {
							res.setString(left.number + /** @type {string} */ (right.string));
						} else if (right.isNumber()) {
							res.setNumber(
								/** @type {number} */ (left.number) +
									/** @type {number} */ (right.number)
							);
						} else {
							return;
						}
					} else if (left.isBigInt()) {
						if (right.isBigInt()) {
							res.setBigInt(
								/** @type {bigint} */ (left.bigint) +
									/** @type {bigint} */ (right.bigint)
							);
						}
					} else if (left.isWrapped()) {
						if (left.postfix && left.postfix.isString() && right.isString()) {
							// ("prefix" + inner + "postfix") + "right"
							// => ("prefix" + inner + "postfixRight")
							res.setWrapped(
								left.prefix,
								new BasicEvaluatedExpression()
									.setString(
										/** @type {string} */ (left.postfix.string) +
											/** @type {string} */ (right.string)
									)
									.setRange(
										joinRanges(
											/** @type {Range} */ (left.postfix.range),
											/** @type {Range} */ (right.range)
										)
									),
								left.wrappedInnerExpressions
							);
						} else if (
							left.postfix &&
							left.postfix.isString() &&
							right.isNumber()
						) {
							// ("prefix" + inner + "postfix") + 123
							// => ("prefix" + inner + "postfix123")
							res.setWrapped(
								left.prefix,
								new BasicEvaluatedExpression()
									.setString(
										/** @type {string} */ (left.postfix.string) +
											/** @type {number} */ (right.number)
									)
									.setRange(
										joinRanges(
											/** @type {Range} */ (left.postfix.range),
											/** @type {Range} */ (right.range)
										)
									),
								left.wrappedInnerExpressions
							);
						} else if (right.isString()) {
							// ("prefix" + inner + [null]) + "right"
							// => ("prefix" + inner + "right")
							res.setWrapped(left.prefix, right, left.wrappedInnerExpressions);
						} else if (right.isNumber()) {
							// ("prefix" + inner + [null]) + 123
							// => ("prefix" + inner + "123")
							res.setWrapped(
								left.prefix,
								new BasicEvaluatedExpression()
									.setString(String(right.number))
									.setRange(/** @type {Range} */ (right.range)),
								left.wrappedInnerExpressions
							);
						} else if (right.isWrapped()) {
							// ("prefix1" + inner1 + "postfix1") + ("prefix2" + inner2 + "postfix2")
							// ("prefix1" + inner1 + "postfix1" + "prefix2" + inner2 + "postfix2")
							res.setWrapped(
								left.prefix,
								right.postfix,
								left.wrappedInnerExpressions &&
									right.wrappedInnerExpressions &&
									left.wrappedInnerExpressions
										.concat(left.postfix ? [left.postfix] : [])
										.concat(right.prefix ? [right.prefix] : [])
										.concat(right.wrappedInnerExpressions)
							);
						} else {
							// ("prefix" + inner + postfix) + expr
							// => ("prefix" + inner + postfix + expr + [null])
							res.setWrapped(
								left.prefix,
								null,
								left.wrappedInnerExpressions &&
									left.wrappedInnerExpressions.concat(
										left.postfix ? [left.postfix, right] : [right]
									)
							);
						}
					} else if (right.isString()) {
						// left + "right"
						// => ([null] + left + "right")
						res.setWrapped(null, right, [left]);
					} else if (right.isWrapped()) {
						// left + (prefix + inner + "postfix")
						// => ([null] + left + prefix + inner + "postfix")
						res.setWrapped(
							null,
							right.postfix,
							right.wrappedInnerExpressions &&
								(right.prefix ? [left, right.prefix] : [left]).concat(
									right.wrappedInnerExpressions
								)
						);
					} else {
						return;
					}
					if (left.couldHaveSideEffects() || right.couldHaveSideEffects())
						res.setSideEffects();
					res.setRange(/** @type {Range} */ (expr.range));
					return res;
				} else if (expr.operator === "-") {
					return handleConstOperation((l, r) => l - r);
				} else if (expr.operator === "*") {
					return handleConstOperation((l, r) => l * r);
				} else if (expr.operator === "/") {
					return handleConstOperation((l, r) => l / r);
				} else if (expr.operator === "**") {
					return handleConstOperation((l, r) => l ** r);
				} else if (expr.operator === "===") {
					return handleStrictEqualityComparison(true);
				} else if (expr.operator === "==") {
					return handleAbstractEqualityComparison(true);
				} else if (expr.operator === "!==") {
					return handleStrictEqualityComparison(false);
				} else if (expr.operator === "!=") {
					return handleAbstractEqualityComparison(false);
				} else if (expr.operator === "&") {
					return handleConstOperation((l, r) => l & r);
				} else if (expr.operator === "|") {
					return handleConstOperation((l, r) => l | r);
				} else if (expr.operator === "^") {
					return handleConstOperation((l, r) => l ^ r);
				} else if (expr.operator === ">>>") {
					return handleConstOperation((l, r) => l >>> r);
				} else if (expr.operator === ">>") {
					return handleConstOperation((l, r) => l >> r);
				} else if (expr.operator === "<<") {
					return handleConstOperation((l, r) => l << r);
				} else if (expr.operator === "<") {
					return handleConstOperation((l, r) => l < r);
				} else if (expr.operator === ">") {
					return handleConstOperation((l, r) => l > r);
				} else if (expr.operator === "<=") {
					return handleConstOperation((l, r) => l <= r);
				} else if (expr.operator === ">=") {
					return handleConstOperation((l, r) => l >= r);
				}
			});
		this.hooks.evaluate
			.for("UnaryExpression")
			.tap("JavascriptParser", _expr => {
				const expr = /** @type {UnaryExpression} */ (_expr);

				/**
				 * Evaluates a UnaryExpression if and only if it is a basic const operator (e.g. +a, -a, ~a).
				 * @template T
				 * @param {(operand: T) => boolean | number | bigint | string} operandHandler handler for the operand
				 * @returns {BasicEvaluatedExpression | undefined} evaluated expression
				 */
				const handleConstOperation = operandHandler => {
					const argument = this.evaluateExpression(expr.argument);
					if (!argument.isCompileTimeValue()) return;
					const result = operandHandler(argument.asCompileTimeValue());
					return valueAsExpression(
						result,
						expr,
						argument.couldHaveSideEffects()
					);
				};

				if (expr.operator === "typeof") {
					switch (expr.argument.type) {
						case "Identifier": {
							const res = this.callHooksForName(
								this.hooks.evaluateTypeof,
								expr.argument.name,
								expr
							);
							if (res !== undefined) return res;
							break;
						}
						case "MetaProperty": {
							const res = this.callHooksForName(
								this.hooks.evaluateTypeof,
								/** @type {string} */ (getRootName(expr.argument)),
								expr
							);
							if (res !== undefined) return res;
							break;
						}
						case "MemberExpression": {
							const res = this.callHooksForExpression(
								this.hooks.evaluateTypeof,
								expr.argument,
								expr
							);
							if (res !== undefined) return res;
							break;
						}
						case "ChainExpression": {
							const res = this.callHooksForExpression(
								this.hooks.evaluateTypeof,
								expr.argument.expression,
								expr
							);
							if (res !== undefined) return res;
							break;
						}
						case "FunctionExpression": {
							return new BasicEvaluatedExpression()
								.setString("function")
								.setRange(/** @type {Range} */ (expr.range));
						}
					}
					const arg = this.evaluateExpression(expr.argument);
					if (arg.isUnknown()) return;
					if (arg.isString()) {
						return new BasicEvaluatedExpression()
							.setString("string")
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isWrapped()) {
						return new BasicEvaluatedExpression()
							.setString("string")
							.setSideEffects()
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isUndefined()) {
						return new BasicEvaluatedExpression()
							.setString("undefined")
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isNumber()) {
						return new BasicEvaluatedExpression()
							.setString("number")
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isBigInt()) {
						return new BasicEvaluatedExpression()
							.setString("bigint")
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isBoolean()) {
						return new BasicEvaluatedExpression()
							.setString("boolean")
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isConstArray() || arg.isRegExp() || arg.isNull()) {
						return new BasicEvaluatedExpression()
							.setString("object")
							.setRange(/** @type {Range} */ (expr.range));
					}
					if (arg.isArray()) {
						return new BasicEvaluatedExpression()
							.setString("object")
							.setSideEffects(arg.couldHaveSideEffects())
							.setRange(/** @type {Range} */ (expr.range));
					}
				} else if (expr.operator === "!") {
					const argument = this.evaluateExpression(expr.argument);
					const bool = argument.asBool();
					if (typeof bool !== "boolean") return;
					return new BasicEvaluatedExpression()
						.setBoolean(!bool)
						.setSideEffects(argument.couldHaveSideEffects())
						.setRange(/** @type {Range} */ (expr.range));
				} else if (expr.operator === "~") {
					return handleConstOperation(v => ~v);
				} else if (expr.operator === "+") {
					// eslint-disable-next-line no-implicit-coercion
					return handleConstOperation(v => +v);
				} else if (expr.operator === "-") {
					return handleConstOperation(v => -v);
				}
			});
		this.hooks.evaluateTypeof
			.for("undefined")
			.tap("JavascriptParser", expr =>
				new BasicEvaluatedExpression()
					.setString("undefined")
					.setRange(/** @type {Range} */ (expr.range))
			);
		this.hooks.evaluate.for("Identifier").tap("JavascriptParser", expr => {
			if (/** @type {Identifier} */ (expr).name === "undefined") {
				return new BasicEvaluatedExpression()
					.setUndefined()
					.setRange(/** @type {Range} */ (expr.range));
			}
		});
		/**
		 * @param {"Identifier" | "ThisExpression" | "MemberExpression"} exprType expression type name
		 * @param {function(Expression | SpreadElement): GetInfoResult | undefined} getInfo get info
		 * @returns {void}
		 */
		const tapEvaluateWithVariableInfo = (exprType, getInfo) => {
			/** @type {Expression | undefined} */
			let cachedExpression;
			/** @type {GetInfoResult | undefined} */
			let cachedInfo;
			this.hooks.evaluate.for(exprType).tap("JavascriptParser", expr => {
				const expression =
					/** @type {Identifier | ThisExpression | MemberExpression} */ (expr);

				const info = getInfo(expression);
				if (info !== undefined) {
					return this.callHooksForInfoWithFallback(
						this.hooks.evaluateIdentifier,
						info.name,
						name => {
							cachedExpression = expression;
							cachedInfo = info;
						},
						name => {
							const hook = this.hooks.evaluateDefinedIdentifier.get(name);
							if (hook !== undefined) {
								return hook.call(expression);
							}
						},
						expression
					);
				}
			});
			this.hooks.evaluate
				.for(exprType)
				.tap({ name: "JavascriptParser", stage: 100 }, expr => {
					const expression =
						/** @type {Identifier | ThisExpression | MemberExpression} */
						(expr);
					const info =
						cachedExpression === expression ? cachedInfo : getInfo(expression);
					if (info !== undefined) {
						return new BasicEvaluatedExpression()
							.setIdentifier(
								info.name,
								info.rootInfo,
								info.getMembers,
								info.getMembersOptionals,
								info.getMemberRanges
							)
							.setRange(/** @type {Range} */ (expression.range));
					}
				});
			this.hooks.finish.tap("JavascriptParser", () => {
				// Cleanup for GC
				cachedExpression = cachedInfo = undefined;
			});
		};
		tapEvaluateWithVariableInfo("Identifier", expr => {
			const info = this.getVariableInfo(/** @type {Identifier} */ (expr).name);
			if (
				typeof info === "string" ||
				(info instanceof VariableInfo && typeof info.freeName === "string")
			) {
				return {
					name: info,
					rootInfo: info,
					getMembers: () => [],
					getMembersOptionals: () => [],
					getMemberRanges: () => []
				};
			}
		});
		tapEvaluateWithVariableInfo("ThisExpression", expr => {
			const info = this.getVariableInfo("this");
			if (
				typeof info === "string" ||
				(info instanceof VariableInfo && typeof info.freeName === "string")
			) {
				return {
					name: info,
					rootInfo: info,
					getMembers: () => [],
					getMembersOptionals: () => [],
					getMemberRanges: () => []
				};
			}
		});
		this.hooks.evaluate.for("MetaProperty").tap("JavascriptParser", expr => {
			const metaProperty = /** @type {MetaProperty} */ (expr);

			return this.callHooksForName(
				this.hooks.evaluateIdentifier,
				/** @type {string} */ (getRootName(metaProperty)),
				metaProperty
			);
		});
		tapEvaluateWithVariableInfo("MemberExpression", expr =>
			this.getMemberExpressionInfo(
				/** @type {MemberExpression} */ (expr),
				ALLOWED_MEMBER_TYPES_EXPRESSION
			)
		);

		this.hooks.evaluate.for("CallExpression").tap("JavascriptParser", _expr => {
			const expr = /** @type {CallExpression} */ (_expr);
			if (
				expr.callee.type === "MemberExpression" &&
				expr.callee.property.type ===
					(expr.callee.computed ? "Literal" : "Identifier")
			) {
				// type Super also possible here
				const param = this.evaluateExpression(
					/** @type {Expression} */ (expr.callee.object)
				);
				const property =
					expr.callee.property.type === "Literal"
						? `${expr.callee.property.value}`
						: expr.callee.property.name;
				const hook = this.hooks.evaluateCallExpressionMember.get(property);
				if (hook !== undefined) {
					return hook.call(expr, param);
				}
			} else if (expr.callee.type === "Identifier") {
				return this.callHooksForName(
					this.hooks.evaluateCallExpression,
					expr.callee.name,
					expr
				);
			}
		});
		this.hooks.evaluateCallExpressionMember
			.for("indexOf")
			.tap("JavascriptParser", (expr, param) => {
				if (!param.isString()) return;
				if (expr.arguments.length === 0) return;
				const [arg1, arg2] = expr.arguments;
				if (arg1.type === "SpreadElement") return;
				const arg1Eval = this.evaluateExpression(arg1);
				if (!arg1Eval.isString()) return;
				const arg1Value = /** @type {string} */ (arg1Eval.string);

				let result;
				if (arg2) {
					if (arg2.type === "SpreadElement") return;
					const arg2Eval = this.evaluateExpression(arg2);
					if (!arg2Eval.isNumber()) return;
					result = /** @type {string} */ (param.string).indexOf(
						arg1Value,
						arg2Eval.number
					);
				} else {
					result = /** @type {string} */ (param.string).indexOf(arg1Value);
				}
				return new BasicEvaluatedExpression()
					.setNumber(result)
					.setSideEffects(param.couldHaveSideEffects())
					.setRange(/** @type {Range} */ (expr.range));
			});
		this.hooks.evaluateCallExpressionMember
			.for("replace")
			.tap("JavascriptParser", (expr, param) => {
				if (!param.isString()) return;
				if (expr.arguments.length !== 2) return;
				if (expr.arguments[0].type === "SpreadElement") return;
				if (expr.arguments[1].type === "SpreadElement") return;
				const arg1 = this.evaluateExpression(expr.arguments[0]);
				const arg2 = this.evaluateExpression(expr.arguments[1]);
				if (!arg1.isString() && !arg1.isRegExp()) return;
				const arg1Value = /** @type {string | RegExp} */ (
					arg1.regExp || arg1.string
				);
				if (!arg2.isString()) return;
				const arg2Value = /** @type {string} */ (arg2.string);
				return new BasicEvaluatedExpression()
					.setString(
						/** @type {string} */ (param.string).replace(arg1Value, arg2Value)
					)
					.setSideEffects(param.couldHaveSideEffects())
					.setRange(/** @type {Range} */ (expr.range));
			});
		for (const fn of ["substr", "substring", "slice"]) {
			this.hooks.evaluateCallExpressionMember
				.for(fn)
				.tap("JavascriptParser", (expr, param) => {
					if (!param.isString()) return;
					let arg1;
					let result;
					const str = /** @type {string} */ (param.string);
					switch (expr.arguments.length) {
						case 1:
							if (expr.arguments[0].type === "SpreadElement") return;
							arg1 = this.evaluateExpression(expr.arguments[0]);
							if (!arg1.isNumber()) return;
							result = str[
								/** @type {"substr" | "substring" | "slice"} */ (fn)
							](/** @type {number} */ (arg1.number));
							break;
						case 2: {
							if (expr.arguments[0].type === "SpreadElement") return;
							if (expr.arguments[1].type === "SpreadElement") return;
							arg1 = this.evaluateExpression(expr.arguments[0]);
							const arg2 = this.evaluateExpression(expr.arguments[1]);
							if (!arg1.isNumber()) return;
							if (!arg2.isNumber()) return;
							result = str[
								/** @type {"substr" | "substring" | "slice"} */ (fn)
							](
								/** @type {number} */ (arg1.number),
								/** @type {number} */ (arg2.number)
							);
							break;
						}
						default:
							return;
					}
					return new BasicEvaluatedExpression()
						.setString(result)
						.setSideEffects(param.couldHaveSideEffects())
						.setRange(/** @type {Range} */ (expr.range));
				});
		}

		/**
		 * @param {"cooked" | "raw"} kind kind of values to get
		 * @param {TemplateLiteral} templateLiteralExpr TemplateLiteral expr
		 * @returns {{quasis: BasicEvaluatedExpression[], parts: BasicEvaluatedExpression[]}} Simplified template
		 */
		const getSimplifiedTemplateResult = (kind, templateLiteralExpr) => {
			/** @type {BasicEvaluatedExpression[]} */
			const quasis = [];
			/** @type {BasicEvaluatedExpression[]} */
			const parts = [];

			for (let i = 0; i < templateLiteralExpr.quasis.length; i++) {
				const quasiExpr = templateLiteralExpr.quasis[i];
				const quasi = quasiExpr.value[kind];

				if (i > 0) {
					const prevExpr = parts[parts.length - 1];
					const expr = this.evaluateExpression(
						templateLiteralExpr.expressions[i - 1]
					);
					const exprAsString = expr.asString();
					if (
						typeof exprAsString === "string" &&
						!expr.couldHaveSideEffects()
					) {
						// We can merge quasi + expr + quasi when expr
						// is a const string

						prevExpr.setString(prevExpr.string + exprAsString + quasi);
						prevExpr.setRange([
							/** @type {Range} */ (prevExpr.range)[0],
							/** @type {Range} */ (quasiExpr.range)[1]
						]);
						// We unset the expression as it doesn't match to a single expression
						prevExpr.setExpression(undefined);
						continue;
					}
					parts.push(expr);
				}

				const part = new BasicEvaluatedExpression()
					.setString(/** @type {string} */ (quasi))
					.setRange(/** @type {Range} */ (quasiExpr.range))
					.setExpression(quasiExpr);
				quasis.push(part);
				parts.push(part);
			}
			return {
				quasis,
				parts
			};
		};

		this.hooks.evaluate
			.for("TemplateLiteral")
			.tap("JavascriptParser", _node => {
				const node = /** @type {TemplateLiteral} */ (_node);

				const { quasis, parts } = getSimplifiedTemplateResult("cooked", node);
				if (parts.length === 1) {
					return parts[0].setRange(/** @type {Range} */ (node.range));
				}
				return new BasicEvaluatedExpression()
					.setTemplateString(quasis, parts, "cooked")
					.setRange(/** @type {Range} */ (node.range));
			});
		this.hooks.evaluate
			.for("TaggedTemplateExpression")
			.tap("JavascriptParser", _node => {
				const node = /** @type {TaggedTemplateExpression} */ (_node);
				const tag = this.evaluateExpression(node.tag);

				if (tag.isIdentifier() && tag.identifier === "String.raw") {
					const { quasis, parts } = getSimplifiedTemplateResult(
						"raw",
						node.quasi
					);
					return new BasicEvaluatedExpression()
						.setTemplateString(quasis, parts, "raw")
						.setRange(/** @type {Range} */ (node.range));
				}
			});

		this.hooks.evaluateCallExpressionMember
			.for("concat")
			.tap("JavascriptParser", (expr, param) => {
				if (!param.isString() && !param.isWrapped()) return;
				let stringSuffix = null;
				let hasUnknownParams = false;
				const innerExpressions = [];
				for (let i = expr.arguments.length - 1; i >= 0; i--) {
					const arg = expr.arguments[i];
					if (arg.type === "SpreadElement") return;
					const argExpr = this.evaluateExpression(arg);
					if (
						hasUnknownParams ||
						(!argExpr.isString() && !argExpr.isNumber())
					) {
						hasUnknownParams = true;
						innerExpressions.push(argExpr);
						continue;
					}

					/** @type {string} */
					const value = argExpr.isString()
						? /** @type {string} */ (argExpr.string)
						: String(/** @type {number} */ (argExpr.number));

					/** @type {string} */
					const newString = value + (stringSuffix ? stringSuffix.string : "");
					const newRange = /** @type {Range} */ ([
						/** @type {Range} */ (argExpr.range)[0],
						/** @type {Range} */ ((stringSuffix || argExpr).range)[1]
					]);
					stringSuffix = new BasicEvaluatedExpression()
						.setString(newString)
						.setSideEffects(
							(stringSuffix && stringSuffix.couldHaveSideEffects()) ||
								argExpr.couldHaveSideEffects()
						)
						.setRange(newRange);
				}

				if (hasUnknownParams) {
					const prefix = param.isString() ? param : param.prefix;
					const inner =
						param.isWrapped() && param.wrappedInnerExpressions
							? param.wrappedInnerExpressions.concat(innerExpressions.reverse())
							: innerExpressions.reverse();
					return new BasicEvaluatedExpression()
						.setWrapped(prefix, stringSuffix, inner)
						.setRange(/** @type {Range} */ (expr.range));
				} else if (param.isWrapped()) {
					const postfix = stringSuffix || param.postfix;
					const inner = param.wrappedInnerExpressions
						? param.wrappedInnerExpressions.concat(innerExpressions.reverse())
						: innerExpressions.reverse();
					return new BasicEvaluatedExpression()
						.setWrapped(param.prefix, postfix, inner)
						.setRange(/** @type {Range} */ (expr.range));
				}
				const newString =
					/** @type {string} */ (param.string) +
					(stringSuffix ? stringSuffix.string : "");
				return new BasicEvaluatedExpression()
					.setString(newString)
					.setSideEffects(
						(stringSuffix && stringSuffix.couldHaveSideEffects()) ||
							param.couldHaveSideEffects()
					)
					.setRange(/** @type {Range} */ (expr.range));
			});
		this.hooks.evaluateCallExpressionMember
			.for("split")
			.tap("JavascriptParser", (expr, param) => {
				if (!param.isString()) return;
				if (expr.arguments.length !== 1) return;
				if (expr.arguments[0].type === "SpreadElement") return;
				let result;
				const arg = this.evaluateExpression(expr.arguments[0]);
				if (arg.isString()) {
					result =
						/** @type {string} */
						(param.string).split(/** @type {string} */ (arg.string));
				} else if (arg.isRegExp()) {
					result = /** @type {string} */ (param.string).split(
						/** @type {RegExp} */ (arg.regExp)
					);
				} else {
					return;
				}
				return new BasicEvaluatedExpression()
					.setArray(result)
					.setSideEffects(param.couldHaveSideEffects())
					.setRange(/** @type {Range} */ (expr.range));
			});
		this.hooks.evaluate
			.for("ConditionalExpression")
			.tap("JavascriptParser", _expr => {
				const expr = /** @type {ConditionalExpression} */ (_expr);

				const condition = this.evaluateExpression(expr.test);
				const conditionValue = condition.asBool();
				let res;
				if (conditionValue === undefined) {
					const consequent = this.evaluateExpression(expr.consequent);
					const alternate = this.evaluateExpression(expr.alternate);
					res = new BasicEvaluatedExpression();
					if (consequent.isConditional()) {
						res.setOptions(
							/** @type {BasicEvaluatedExpression[]} */ (consequent.options)
						);
					} else {
						res.setOptions([consequent]);
					}
					if (alternate.isConditional()) {
						res.addOptions(
							/** @type {BasicEvaluatedExpression[]} */ (alternate.options)
						);
					} else {
						res.addOptions([alternate]);
					}
				} else {
					res = this.evaluateExpression(
						conditionValue ? expr.consequent : expr.alternate
					);
					if (condition.couldHaveSideEffects()) res.setSideEffects();
				}
				res.setRange(/** @type {Range} */ (expr.range));
				return res;
			});
		this.hooks.evaluate
			.for("ArrayExpression")
			.tap("JavascriptParser", _expr => {
				const expr = /** @type {ArrayExpression} */ (_expr);

				const items = expr.elements.map(
					element =>
						element !== null &&
						element.type !== "SpreadElement" &&
						this.evaluateExpression(element)
				);
				if (!items.every(Boolean)) return;
				return new BasicEvaluatedExpression()
					.setItems(/** @type {BasicEvaluatedExpression[]} */ (items))
					.setRange(/** @type {Range} */ (expr.range));
			});
		this.hooks.evaluate
			.for("ChainExpression")
			.tap("JavascriptParser", _expr => {
				const expr = /** @type {ChainExpression} */ (_expr);
				/** @type {Expression[]} */
				const optionalExpressionsStack = [];
				/** @type {Expression|Super} */
				let next = expr.expression;

				while (
					next.type === "MemberExpression" ||
					next.type === "CallExpression"
				) {
					if (next.type === "MemberExpression") {
						if (next.optional) {
							// SuperNode can not be optional
							optionalExpressionsStack.push(
								/** @type {Expression} */ (next.object)
							);
						}
						next = next.object;
					} else {
						if (next.optional) {
							// SuperNode can not be optional
							optionalExpressionsStack.push(
								/** @type {Expression} */ (next.callee)
							);
						}
						next = next.callee;
					}
				}

				while (optionalExpressionsStack.length > 0) {
					const expression =
						/** @type {Expression} */
						(optionalExpressionsStack.pop());
					const evaluated = this.evaluateExpression(expression);

					if (evaluated.asNullish()) {
						return evaluated.setRange(/** @type {Range} */ (_expr.range));
					}
				}
				return this.evaluateExpression(expr.expression);
			});
	}

	/**
	 * @param {Expression} node node
	 * @returns {Set<DestructuringAssignmentProperty> | undefined} destructured identifiers
	 */
	destructuringAssignmentPropertiesFor(node) {
		if (!this.destructuringAssignmentProperties) return;
		return this.destructuringAssignmentProperties.get(node);
	}

	/**
	 * @param {Expression | SpreadElement} expr expression
	 * @returns {string | VariableInfoInterface | undefined} identifier
	 */
	getRenameIdentifier(expr) {
		const result = this.evaluateExpression(expr);
		if (result.isIdentifier()) {
			return result.identifier;
		}
	}

	/**
	 * @param {ClassExpression | ClassDeclaration} classy a class node
	 * @returns {void}
	 */
	walkClass(classy) {
		if (
			classy.superClass &&
			!this.hooks.classExtendsExpression.call(classy.superClass, classy)
		) {
			this.walkExpression(classy.superClass);
		}
		if (classy.body && classy.body.type === "ClassBody") {
			const scopeParams = [];
			// Add class name in scope for recursive calls
			if (classy.id) {
				scopeParams.push(classy.id);
			}
			this.inClassScope(true, scopeParams, () => {
				for (const classElement of /** @type {TODO} */ (classy.body.body)) {
					if (!this.hooks.classBodyElement.call(classElement, classy)) {
						if (classElement.computed && classElement.key) {
							this.walkExpression(classElement.key);
						}
						if (classElement.value) {
							if (
								!this.hooks.classBodyValue.call(
									classElement.value,
									classElement,
									classy
								)
							) {
								const wasTopLevel = this.scope.topLevelScope;
								this.scope.topLevelScope = false;
								this.walkExpression(classElement.value);
								this.scope.topLevelScope = wasTopLevel;
							}
						} else if (classElement.type === "StaticBlock") {
							const wasTopLevel = this.scope.topLevelScope;
							this.scope.topLevelScope = false;
							this.walkBlockStatement(classElement);
							this.scope.topLevelScope = wasTopLevel;
						}
					}
				}
			});
		}
	}

	/**
	 * Pre walking iterates the scope for variable declarations
	 * @param {(Statement | ModuleDeclaration)[]} statements statements
	 */
	preWalkStatements(statements) {
		for (let index = 0, len = statements.length; index < len; index++) {
			const statement = statements[index];
			this.preWalkStatement(statement);
		}
	}

	/**
	 * Block pre walking iterates the scope for block variable declarations
	 * @param {(Statement | ModuleDeclaration)[]} statements statements
	 */
	blockPreWalkStatements(statements) {
		for (let index = 0, len = statements.length; index < len; index++) {
			const statement = statements[index];
			this.blockPreWalkStatement(statement);
		}
	}

	/**
	 * Walking iterates the statements and expressions and processes them
	 * @param {(Statement | ModuleDeclaration)[]} statements statements
	 */
	walkStatements(statements) {
		for (let index = 0, len = statements.length; index < len; index++) {
			const statement = statements[index];
			this.walkStatement(statement);
		}
	}

	/**
	 * Walking iterates the statements and expressions and processes them
	 * @param {Statement | ModuleDeclaration} statement statement
	 */
	preWalkStatement(statement) {
		/** @type {StatementPath} */
		(this.statementPath).push(statement);
		if (this.hooks.preStatement.call(statement)) {
			this.prevStatement =
				/** @type {StatementPath} */
				(this.statementPath).pop();
			return;
		}
		switch (statement.type) {
			case "BlockStatement":
				this.preWalkBlockStatement(statement);
				break;
			case "DoWhileStatement":
				this.preWalkDoWhileStatement(statement);
				break;
			case "ForInStatement":
				this.preWalkForInStatement(statement);
				break;
			case "ForOfStatement":
				this.preWalkForOfStatement(statement);
				break;
			case "ForStatement":
				this.preWalkForStatement(statement);
				break;
			case "FunctionDeclaration":
				this.preWalkFunctionDeclaration(statement);
				break;
			case "IfStatement":
				this.preWalkIfStatement(statement);
				break;
			case "LabeledStatement":
				this.preWalkLabeledStatement(statement);
				break;
			case "SwitchStatement":
				this.preWalkSwitchStatement(statement);
				break;
			case "TryStatement":
				this.preWalkTryStatement(statement);
				break;
			case "VariableDeclaration":
				this.preWalkVariableDeclaration(statement);
				break;
			case "WhileStatement":
				this.preWalkWhileStatement(statement);
				break;
			case "WithStatement":
				this.preWalkWithStatement(statement);
				break;
		}
		this.prevStatement =
			/** @type {StatementPath} */
			(this.statementPath).pop();
	}

	/**
	 * @param {Statement | ModuleDeclaration} statement statement
	 */
	blockPreWalkStatement(statement) {
		/** @type {StatementPath} */
		(this.statementPath).push(statement);
		if (this.hooks.blockPreStatement.call(statement)) {
			this.prevStatement =
				/** @type {StatementPath} */
				(this.statementPath).pop();
			return;
		}
		switch (statement.type) {
			case "ImportDeclaration":
				this.blockPreWalkImportDeclaration(statement);
				break;
			case "ExportAllDeclaration":
				this.blockPreWalkExportAllDeclaration(statement);
				break;
			case "ExportDefaultDeclaration":
				this.blockPreWalkExportDefaultDeclaration(statement);
				break;
			case "ExportNamedDeclaration":
				this.blockPreWalkExportNamedDeclaration(statement);
				break;
			case "VariableDeclaration":
				this.blockPreWalkVariableDeclaration(statement);
				break;
			case "ClassDeclaration":
				this.blockPreWalkClassDeclaration(statement);
				break;
			case "ExpressionStatement":
				this.blockPreWalkExpressionStatement(statement);
		}
		this.prevStatement =
			/** @type {StatementPath} */
			(this.statementPath).pop();
	}

	/**
	 * @param {Statement | ModuleDeclaration} statement statement
	 */
	walkStatement(statement) {
		/** @type {StatementPath} */
		(this.statementPath).push(statement);
		if (this.hooks.statement.call(statement) !== undefined) {
			this.prevStatement =
				/** @type {StatementPath} */
				(this.statementPath).pop();
			return;
		}
		switch (statement.type) {
			case "BlockStatement":
				this.walkBlockStatement(statement);
				break;
			case "ClassDeclaration":
				this.walkClassDeclaration(statement);
				break;
			case "DoWhileStatement":
				this.walkDoWhileStatement(statement);
				break;
			case "ExportDefaultDeclaration":
				this.walkExportDefaultDeclaration(statement);
				break;
			case "ExportNamedDeclaration":
				this.walkExportNamedDeclaration(statement);
				break;
			case "ExpressionStatement":
				this.walkExpressionStatement(statement);
				break;
			case "ForInStatement":
				this.walkForInStatement(statement);
				break;
			case "ForOfStatement":
				this.walkForOfStatement(statement);
				break;
			case "ForStatement":
				this.walkForStatement(statement);
				break;
			case "FunctionDeclaration":
				this.walkFunctionDeclaration(statement);
				break;
			case "IfStatement":
				this.walkIfStatement(statement);
				break;
			case "LabeledStatement":
				this.walkLabeledStatement(statement);
				break;
			case "ReturnStatement":
				this.walkReturnStatement(statement);
				break;
			case "SwitchStatement":
				this.walkSwitchStatement(statement);
				break;
			case "ThrowStatement":
				this.walkThrowStatement(statement);
				break;
			case "TryStatement":
				this.walkTryStatement(statement);
				break;
			case "VariableDeclaration":
				this.walkVariableDeclaration(statement);
				break;
			case "WhileStatement":
				this.walkWhileStatement(statement);
				break;
			case "WithStatement":
				this.walkWithStatement(statement);
				break;
		}
		this.prevStatement =
			/** @type {StatementPath} */
			(this.statementPath).pop();
	}

	/**
	 * Walks a statements that is nested within a parent statement
	 * and can potentially be a non-block statement.
	 * This enforces the nested statement to never be in ASI position.
	 * @param {Statement} statement the nested statement
	 */
	walkNestedStatement(statement) {
		this.prevStatement = undefined;
		this.walkStatement(statement);
	}

	// Real Statements
	/**
	 * @param {BlockStatement} statement block statement
	 */
	preWalkBlockStatement(statement) {
		this.preWalkStatements(statement.body);
	}

	/**
	 * @param {BlockStatement} statement block statement
	 */
	walkBlockStatement(statement) {
		this.inBlockScope(() => {
			const body = statement.body;
			const prev = this.prevStatement;
			this.blockPreWalkStatements(body);
			this.prevStatement = prev;
			this.walkStatements(body);
		});
	}

	/**
	 * @param {ExpressionStatement} statement expression statement
	 */
	walkExpressionStatement(statement) {
		this.walkExpression(statement.expression);
	}

	/**
	 * @param {IfStatement} statement if statement
	 */
	preWalkIfStatement(statement) {
		this.preWalkStatement(statement.consequent);
		if (statement.alternate) {
			this.preWalkStatement(statement.alternate);
		}
	}

	/**
	 * @param {IfStatement} statement if statement
	 */
	walkIfStatement(statement) {
		const result = this.hooks.statementIf.call(statement);
		if (result === undefined) {
			this.walkExpression(statement.test);
			this.walkNestedStatement(statement.consequent);
			if (statement.alternate) {
				this.walkNestedStatement(statement.alternate);
			}
		} else if (result) {
			this.walkNestedStatement(statement.consequent);
		} else if (statement.alternate) {
			this.walkNestedStatement(statement.alternate);
		}
	}

	/**
	 * @param {LabeledStatement} statement with statement
	 */
	preWalkLabeledStatement(statement) {
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {LabeledStatement} statement with statement
	 */
	walkLabeledStatement(statement) {
		const hook = this.hooks.label.get(statement.label.name);
		if (hook !== undefined) {
			const result = hook.call(statement);
			if (result === true) return;
		}
		this.walkNestedStatement(statement.body);
	}

	/**
	 * @param {WithStatement} statement with statement
	 */
	preWalkWithStatement(statement) {
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {WithStatement} statement with statement
	 */
	walkWithStatement(statement) {
		this.walkExpression(statement.object);
		this.walkNestedStatement(statement.body);
	}

	/**
	 * @param {SwitchStatement} statement switch statement
	 */
	preWalkSwitchStatement(statement) {
		this.preWalkSwitchCases(statement.cases);
	}

	/**
	 * @param {SwitchStatement} statement switch statement
	 */
	walkSwitchStatement(statement) {
		this.walkExpression(statement.discriminant);
		this.walkSwitchCases(statement.cases);
	}

	/**
	 * @param {ReturnStatement | ThrowStatement} statement return or throw statement
	 */
	walkTerminatingStatement(statement) {
		if (statement.argument) this.walkExpression(statement.argument);
	}

	/**
	 * @param {ReturnStatement} statement return statement
	 */
	walkReturnStatement(statement) {
		this.walkTerminatingStatement(statement);
	}

	/**
	 * @param {ThrowStatement} statement return statement
	 */
	walkThrowStatement(statement) {
		this.walkTerminatingStatement(statement);
	}

	/**
	 * @param {TryStatement} statement try statement
	 */
	preWalkTryStatement(statement) {
		this.preWalkStatement(statement.block);
		if (statement.handler) this.preWalkCatchClause(statement.handler);
		if (statement.finalizer) this.preWalkStatement(statement.finalizer);
	}

	/**
	 * @param {TryStatement} statement try statement
	 */
	walkTryStatement(statement) {
		if (this.scope.inTry) {
			this.walkStatement(statement.block);
		} else {
			this.scope.inTry = true;
			this.walkStatement(statement.block);
			this.scope.inTry = false;
		}
		if (statement.handler) this.walkCatchClause(statement.handler);
		if (statement.finalizer) this.walkStatement(statement.finalizer);
	}

	/**
	 * @param {WhileStatement} statement while statement
	 */
	preWalkWhileStatement(statement) {
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {WhileStatement} statement while statement
	 */
	walkWhileStatement(statement) {
		this.walkExpression(statement.test);
		this.walkNestedStatement(statement.body);
	}

	/**
	 * @param {DoWhileStatement} statement do while statement
	 */
	preWalkDoWhileStatement(statement) {
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {DoWhileStatement} statement do while statement
	 */
	walkDoWhileStatement(statement) {
		this.walkNestedStatement(statement.body);
		this.walkExpression(statement.test);
	}

	/**
	 * @param {ForStatement} statement for statement
	 */
	preWalkForStatement(statement) {
		if (statement.init && statement.init.type === "VariableDeclaration") {
			this.preWalkStatement(statement.init);
		}
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {ForStatement} statement for statement
	 */
	walkForStatement(statement) {
		this.inBlockScope(() => {
			if (statement.init) {
				if (statement.init.type === "VariableDeclaration") {
					this.blockPreWalkVariableDeclaration(statement.init);
					this.prevStatement = undefined;
					this.walkStatement(statement.init);
				} else {
					this.walkExpression(statement.init);
				}
			}
			if (statement.test) {
				this.walkExpression(statement.test);
			}
			if (statement.update) {
				this.walkExpression(statement.update);
			}
			const body = statement.body;
			if (body.type === "BlockStatement") {
				// no need to add additional scope
				const prev = this.prevStatement;
				this.blockPreWalkStatements(body.body);
				this.prevStatement = prev;
				this.walkStatements(body.body);
			} else {
				this.walkNestedStatement(body);
			}
		});
	}

	/**
	 * @param {ForInStatement} statement for statement
	 */
	preWalkForInStatement(statement) {
		if (statement.left.type === "VariableDeclaration") {
			this.preWalkVariableDeclaration(statement.left);
		}
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {ForInStatement} statement for statement
	 */
	walkForInStatement(statement) {
		this.inBlockScope(() => {
			if (statement.left.type === "VariableDeclaration") {
				this.blockPreWalkVariableDeclaration(statement.left);
				this.walkVariableDeclaration(statement.left);
			} else {
				this.walkPattern(statement.left);
			}
			this.walkExpression(statement.right);
			const body = statement.body;
			if (body.type === "BlockStatement") {
				// no need to add additional scope
				const prev = this.prevStatement;
				this.blockPreWalkStatements(body.body);
				this.prevStatement = prev;
				this.walkStatements(body.body);
			} else {
				this.walkNestedStatement(body);
			}
		});
	}

	/**
	 * @param {ForOfStatement} statement statement
	 */
	preWalkForOfStatement(statement) {
		if (statement.await && this.scope.topLevelScope === true) {
			this.hooks.topLevelAwait.call(statement);
		}
		if (statement.left.type === "VariableDeclaration") {
			this.preWalkVariableDeclaration(statement.left);
		}
		this.preWalkStatement(statement.body);
	}

	/**
	 * @param {ForOfStatement} statement for statement
	 */
	walkForOfStatement(statement) {
		this.inBlockScope(() => {
			if (statement.left.type === "VariableDeclaration") {
				this.blockPreWalkVariableDeclaration(statement.left);
				this.walkVariableDeclaration(statement.left);
			} else {
				this.walkPattern(statement.left);
			}
			this.walkExpression(statement.right);
			const body = statement.body;
			if (body.type === "BlockStatement") {
				// no need to add additional scope
				const prev = this.prevStatement;
				this.blockPreWalkStatements(body.body);
				this.prevStatement = prev;
				this.walkStatements(body.body);
			} else {
				this.walkNestedStatement(body);
			}
		});
	}

	/**
	 * @param {FunctionDeclaration} statement function declaration
	 */
	preWalkFunctionDeclaration(statement) {
		if (statement.id) {
			this.defineVariable(statement.id.name);
		}
	}

	/**
	 * @param {FunctionDeclaration} statement function declaration
	 */
	walkFunctionDeclaration(statement) {
		const wasTopLevel = this.scope.topLevelScope;
		this.scope.topLevelScope = false;
		this.inFunctionScope(true, statement.params, () => {
			for (const param of statement.params) {
				this.walkPattern(param);
			}
			if (statement.body.type === "BlockStatement") {
				this.detectMode(statement.body.body);
				const prev = this.prevStatement;
				this.preWalkStatement(statement.body);
				this.prevStatement = prev;
				this.walkStatement(statement.body);
			} else {
				this.walkExpression(statement.body);
			}
		});
		this.scope.topLevelScope = wasTopLevel;
	}

	/**
	 * @param {ExpressionStatement} statement expression statement
	 */
	blockPreWalkExpressionStatement(statement) {
		const expression = statement.expression;
		switch (expression.type) {
			case "AssignmentExpression":
				this.preWalkAssignmentExpression(expression);
		}
	}

	/**
	 * @param {AssignmentExpression} expression assignment expression
	 */
	preWalkAssignmentExpression(expression) {
		if (
			expression.left.type !== "ObjectPattern" ||
			!this.destructuringAssignmentProperties
		)
			return;
		const keys = this._preWalkObjectPattern(expression.left);
		if (!keys) return;

		// check multiple assignments
		if (this.destructuringAssignmentProperties.has(expression)) {
			const set =
				/** @type {Set<DestructuringAssignmentProperty>} */
				(this.destructuringAssignmentProperties.get(expression));
			this.destructuringAssignmentProperties.delete(expression);
			for (const id of set) keys.add(id);
		}

		this.destructuringAssignmentProperties.set(
			expression.right.type === "AwaitExpression"
				? expression.right.argument
				: expression.right,
			keys
		);

		if (expression.right.type === "AssignmentExpression") {
			this.preWalkAssignmentExpression(expression.right);
		}
	}

	/**
	 * @param {ImportDeclaration} statement statement
	 */
	blockPreWalkImportDeclaration(statement) {
		const source = /** @type {ImportSource} */ (statement.source.value);
		this.hooks.import.call(statement, source);
		for (const specifier of statement.specifiers) {
			const name = specifier.local.name;
			switch (specifier.type) {
				case "ImportDefaultSpecifier":
					if (
						!this.hooks.importSpecifier.call(statement, source, "default", name)
					) {
						this.defineVariable(name);
					}
					break;
				case "ImportSpecifier":
					if (
						!this.hooks.importSpecifier.call(
							statement,
							source,
							/** @type {Identifier} */
							(specifier.imported).name ||
								/** @type {string} */
								(
									/** @type {Literal} */
									(specifier.imported).value
								),
							name
						)
					) {
						this.defineVariable(name);
					}
					break;
				case "ImportNamespaceSpecifier":
					if (!this.hooks.importSpecifier.call(statement, source, null, name)) {
						this.defineVariable(name);
					}
					break;
				default:
					this.defineVariable(name);
			}
		}
	}

	/**
	 * @param {Declaration} declaration declaration
	 * @param {OnIdent} onIdent on ident callback
	 */
	enterDeclaration(declaration, onIdent) {
		switch (declaration.type) {
			case "VariableDeclaration":
				for (const declarator of declaration.declarations) {
					switch (declarator.type) {
						case "VariableDeclarator": {
							this.enterPattern(declarator.id, onIdent);
							break;
						}
					}
				}
				break;
			case "FunctionDeclaration":
				this.enterPattern(declaration.id, onIdent);
				break;
			case "ClassDeclaration":
				this.enterPattern(declaration.id, onIdent);
				break;
		}
	}

	/**
	 * @param {ExportNamedDeclaration} statement statement
	 */
	blockPreWalkExportNamedDeclaration(statement) {
		let source;
		if (statement.source) {
			source = /** @type {ImportSource} */ (statement.source.value);
			this.hooks.exportImport.call(statement, source);
		} else {
			this.hooks.export.call(statement);
		}
		if (
			statement.declaration &&
			!this.hooks.exportDeclaration.call(statement, statement.declaration)
		) {
			const prev = this.prevStatement;
			this.preWalkStatement(statement.declaration);
			this.prevStatement = prev;
			this.blockPreWalkStatement(statement.declaration);
			let index = 0;
			this.enterDeclaration(statement.declaration, def => {
				this.hooks.exportSpecifier.call(statement, def, def, index++);
			});
		}
		if (statement.specifiers) {
			for (
				let specifierIndex = 0;
				specifierIndex < statement.specifiers.length;
				specifierIndex++
			) {
				const specifier = statement.specifiers[specifierIndex];
				switch (specifier.type) {
					case "ExportSpecifier": {
						const localName =
							/** @type {Identifier} */ (specifier.local).name ||
							/** @type {string} */ (
								/** @type {Literal} */ (specifier.local).value
							);
						const name =
							/** @type {Identifier} */
							(specifier.exported).name ||
							/** @type {string} */
							(/** @type {Literal} */ (specifier.exported).value);
						if (source) {
							this.hooks.exportImportSpecifier.call(
								statement,
								source,
								localName,
								name,
								specifierIndex
							);
						} else {
							this.hooks.exportSpecifier.call(
								statement,
								localName,
								name,
								specifierIndex
							);
						}
						break;
					}
				}
			}
		}
	}

	/**
	 * @param {ExportNamedDeclaration} statement the statement
	 */
	walkExportNamedDeclaration(statement) {
		if (statement.declaration) {
			this.walkStatement(statement.declaration);
		}
	}

	/**
	 * @param {TODO} statement statement
	 */
	blockPreWalkExportDefaultDeclaration(statement) {
		const prev = this.prevStatement;
		this.preWalkStatement(statement.declaration);
		this.prevStatement = prev;
		this.blockPreWalkStatement(statement.declaration);
		if (
			/** @type {FunctionDeclaration | ClassDeclaration} */ (
				statement.declaration
			).id &&
			statement.declaration.type !== "FunctionExpression" &&
			statement.declaration.type !== "ClassExpression"
		) {
			const declaration =
				/** @type {FunctionDeclaration | ClassDeclaration} */
				(statement.declaration);
			this.hooks.exportSpecifier.call(
				statement,
				declaration.id.name,
				"default",
				undefined
			);
		}
	}

	/**
	 * @param {ExportDefaultDeclaration} statement statement
	 */
	walkExportDefaultDeclaration(statement) {
		this.hooks.export.call(statement);
		if (
			/** @type {FunctionDeclaration | ClassDeclaration} */ (
				statement.declaration
			).id &&
			statement.declaration.type !== "FunctionExpression" &&
			statement.declaration.type !== "ClassExpression"
		) {
			const declaration =
				/** @type {FunctionDeclaration | ClassDeclaration} */
				(statement.declaration);
			if (!this.hooks.exportDeclaration.call(statement, declaration)) {
				this.walkStatement(declaration);
			}
		} else {
			// Acorn parses `export default function() {}` as `FunctionDeclaration` and
			// `export default class {}` as `ClassDeclaration`, both with `id = null`.
			// These nodes must be treated as expressions.
			if (
				statement.declaration.type === "FunctionDeclaration" ||
				statement.declaration.type === "ClassDeclaration"
			) {
				this.walkStatement(
					/** @type {FunctionDeclaration | ClassDeclaration} */
					(statement.declaration)
				);
			} else {
				this.walkExpression(statement.declaration);
			}

			if (
				!this.hooks.exportExpression.call(
					statement,
					/** @type {TODO} */ (statement).declaration
				)
			) {
				this.hooks.exportSpecifier.call(
					statement,
					/** @type {TODO} */ (statement.declaration),
					"default",
					undefined
				);
			}
		}
	}

	/**
	 * @param {ExportAllDeclaration} statement statement
	 */
	blockPreWalkExportAllDeclaration(statement) {
		const source = /** @type {ImportSource} */ (statement.source.value);
		const name = statement.exported
			? /** @type {Identifier} */
				(statement.exported).name ||
				/** @type {string} */
				(/** @type {Literal} */ (statement.exported).value)
			: null;
		this.hooks.exportImport.call(statement, source);
		this.hooks.exportImportSpecifier.call(statement, source, null, name, 0);
	}

	/**
	 * @param {VariableDeclaration} statement variable declaration
	 */
	preWalkVariableDeclaration(statement) {
		if (statement.kind !== "var") return;
		this._preWalkVariableDeclaration(statement, this.hooks.varDeclarationVar);
	}

	/**
	 * @param {VariableDeclaration} statement variable declaration
	 */
	blockPreWalkVariableDeclaration(statement) {
		if (statement.kind === "var") return;
		const hookMap =
			statement.kind === "const"
				? this.hooks.varDeclarationConst
				: this.hooks.varDeclarationLet;
		this._preWalkVariableDeclaration(statement, hookMap);
	}

	/**
	 * @param {VariableDeclaration} statement variable declaration
	 * @param {TODO} hookMap map of hooks
	 */
	_preWalkVariableDeclaration(statement, hookMap) {
		for (const declarator of statement.declarations) {
			switch (declarator.type) {
				case "VariableDeclarator": {
					this.preWalkVariableDeclarator(declarator);
					if (!this.hooks.preDeclarator.call(declarator, statement)) {
						this.enterPattern(declarator.id, (name, decl) => {
							let hook = hookMap.get(name);
							if (hook === undefined || !hook.call(decl)) {
								hook = this.hooks.varDeclaration.get(name);
								if (hook === undefined || !hook.call(decl)) {
									this.defineVariable(name);
								}
							}
						});
					}
					break;
				}
			}
		}
	}

	/**
	 * @param {ObjectPattern} objectPattern object pattern
	 * @returns {Set<DestructuringAssignmentProperty> | undefined} set of names or undefined if not all keys are identifiers
	 */
	_preWalkObjectPattern(objectPattern) {
		/** @type {Set<DestructuringAssignmentProperty>} */
		const props = new Set();
		const properties = objectPattern.properties;
		for (let i = 0; i < properties.length; i++) {
			const property = properties[i];
			if (property.type !== "Property") return;
			if (property.shorthand && property.value.type === "Identifier") {
				this.scope.inShorthand = property.value.name;
			}
			const key = property.key;
			if (key.type === "Identifier") {
				props.add({
					id: key.name,
					range: key.range,
					shorthand: this.scope.inShorthand
				});
			} else {
				const id = this.evaluateExpression(key);
				const str = id.asString();
				if (str) {
					props.add({
						id: str,
						range: key.range,
						shorthand: this.scope.inShorthand
					});
				} else {
					// could not evaluate key
					return;
				}
			}
			this.scope.inShorthand = false;
		}

		return props;
	}

	/**
	 * @param {VariableDeclarator} declarator variable declarator
	 */
	preWalkVariableDeclarator(declarator) {
		if (
			!declarator.init ||
			declarator.id.type !== "ObjectPattern" ||
			!this.destructuringAssignmentProperties
		)
			return;
		const keys = this._preWalkObjectPattern(declarator.id);

		if (!keys) return;
		this.destructuringAssignmentProperties.set(
			declarator.init.type === "AwaitExpression"
				? declarator.init.argument
				: declarator.init,
			keys
		);

		if (declarator.init.type === "AssignmentExpression") {
			this.preWalkAssignmentExpression(declarator.init);
		}
	}

	/**
	 * @param {VariableDeclaration} statement variable declaration
	 */
	walkVariableDeclaration(statement) {
		for (const declarator of statement.declarations) {
			switch (declarator.type) {
				case "VariableDeclarator": {
					const renameIdentifier =
						declarator.init && this.getRenameIdentifier(declarator.init);
					if (renameIdentifier && declarator.id.type === "Identifier") {
						const hook = this.hooks.canRename.get(renameIdentifier);
						if (
							hook !== undefined &&
							hook.call(/** @type {Expression} */ (declarator.init))
						) {
							// renaming with "var a = b;"
							const hook = this.hooks.rename.get(renameIdentifier);
							if (
								hook === undefined ||
								!hook.call(/** @type {Expression} */ (declarator.init))
							) {
								this.setVariable(declarator.id.name, renameIdentifier);
							}
							break;
						}
					}
					if (!this.hooks.declarator.call(declarator, statement)) {
						this.walkPattern(declarator.id);
						if (declarator.init) this.walkExpression(declarator.init);
					}
					break;
				}
			}
		}
	}

	/**
	 * @param {ClassDeclaration} statement class declaration
	 */
	blockPreWalkClassDeclaration(statement) {
		if (statement.id) {
			this.defineVariable(statement.id.name);
		}
	}

	/**
	 * @param {ClassDeclaration} statement class declaration
	 */
	walkClassDeclaration(statement) {
		this.walkClass(statement);
	}

	/**
	 * @param {SwitchCase[]} switchCases switch statement
	 */
	preWalkSwitchCases(switchCases) {
		for (let index = 0, len = switchCases.length; index < len; index++) {
			const switchCase = switchCases[index];
			this.preWalkStatements(switchCase.consequent);
		}
	}

	/**
	 * @param {SwitchCase[]} switchCases switch statement
	 */
	walkSwitchCases(switchCases) {
		this.inBlockScope(() => {
			const len = switchCases.length;

			// we need to pre walk all statements first since we can have invalid code
			// import A from "module";
			// switch(1) {
			//    case 1:
			//      console.log(A); // should fail at runtime
			//    case 2:
			//      const A = 1;
			// }
			for (let index = 0; index < len; index++) {
				const switchCase = switchCases[index];

				if (switchCase.consequent.length > 0) {
					const prev = this.prevStatement;
					this.blockPreWalkStatements(switchCase.consequent);
					this.prevStatement = prev;
				}
			}

			for (let index = 0; index < len; index++) {
				const switchCase = switchCases[index];

				if (switchCase.test) {
					this.walkExpression(switchCase.test);
				}
				if (switchCase.consequent.length > 0) {
					this.walkStatements(switchCase.consequent);
				}
			}
		});
	}

	/**
	 * @param {CatchClause} catchClause catch clause
	 */
	preWalkCatchClause(catchClause) {
		this.preWalkStatement(catchClause.body);
	}

	/**
	 * @param {CatchClause} catchClause catch clause
	 */
	walkCatchClause(catchClause) {
		this.inBlockScope(() => {
			// Error binding is optional in catch clause since ECMAScript 2019
			if (catchClause.param !== null) {
				this.enterPattern(catchClause.param, ident => {
					this.defineVariable(ident);
				});
				this.walkPattern(catchClause.param);
			}
			const prev = this.prevStatement;
			this.blockPreWalkStatement(catchClause.body);
			this.prevStatement = prev;
			this.walkStatement(catchClause.body);
		});
	}

	/**
	 * @param {Pattern} pattern pattern
	 */
	walkPattern(pattern) {
		switch (pattern.type) {
			case "ArrayPattern":
				this.walkArrayPattern(pattern);
				break;
			case "AssignmentPattern":
				this.walkAssignmentPattern(pattern);
				break;
			case "MemberExpression":
				this.walkMemberExpression(pattern);
				break;
			case "ObjectPattern":
				this.walkObjectPattern(pattern);
				break;
			case "RestElement":
				this.walkRestElement(pattern);
				break;
		}
	}

	/**
	 * @param {AssignmentPattern} pattern assignment pattern
	 */
	walkAssignmentPattern(pattern) {
		this.walkExpression(pattern.right);
		this.walkPattern(pattern.left);
	}

	/**
	 * @param {ObjectPattern} pattern pattern
	 */
	walkObjectPattern(pattern) {
		for (let i = 0, len = pattern.properties.length; i < len; i++) {
			const prop = pattern.properties[i];
			if (prop) {
				if (prop.type === "RestElement") {
					continue;
				}
				if (prop.computed) this.walkExpression(prop.key);
				if (prop.value) this.walkPattern(prop.value);
			}
		}
	}

	/**
	 * @param {ArrayPattern} pattern array pattern
	 */
	walkArrayPattern(pattern) {
		for (let i = 0, len = pattern.elements.length; i < len; i++) {
			const element = pattern.elements[i];
			if (element) this.walkPattern(element);
		}
	}

	/**
	 * @param {RestElement} pattern rest element
	 */
	walkRestElement(pattern) {
		this.walkPattern(pattern.argument);
	}

	/**
	 * @param {(Expression | SpreadElement | null)[]} expressions expressions
	 */
	walkExpressions(expressions) {
		for (const expression of expressions) {
			if (expression) {
				this.walkExpression(expression);
			}
		}
	}

	/**
	 * @param {TODO} expression expression
	 */
	walkExpression(expression) {
		switch (expression.type) {
			case "ArrayExpression":
				this.walkArrayExpression(expression);
				break;
			case "ArrowFunctionExpression":
				this.walkArrowFunctionExpression(expression);
				break;
			case "AssignmentExpression":
				this.walkAssignmentExpression(expression);
				break;
			case "AwaitExpression":
				this.walkAwaitExpression(expression);
				break;
			case "BinaryExpression":
				this.walkBinaryExpression(expression);
				break;
			case "CallExpression":
				this.walkCallExpression(expression);
				break;
			case "ChainExpression":
				this.walkChainExpression(expression);
				break;
			case "ClassExpression":
				this.walkClassExpression(expression);
				break;
			case "ConditionalExpression":
				this.walkConditionalExpression(expression);
				break;
			case "FunctionExpression":
				this.walkFunctionExpression(expression);
				break;
			case "Identifier":
				this.walkIdentifier(expression);
				break;
			case "ImportExpression":
				this.walkImportExpression(expression);
				break;
			case "LogicalExpression":
				this.walkLogicalExpression(expression);
				break;
			case "MetaProperty":
				this.walkMetaProperty(expression);
				break;
			case "MemberExpression":
				this.walkMemberExpression(expression);
				break;
			case "NewExpression":
				this.walkNewExpression(expression);
				break;
			case "ObjectExpression":
				this.walkObjectExpression(expression);
				break;
			case "SequenceExpression":
				this.walkSequenceExpression(expression);
				break;
			case "SpreadElement":
				this.walkSpreadElement(expression);
				break;
			case "TaggedTemplateExpression":
				this.walkTaggedTemplateExpression(expression);
				break;
			case "TemplateLiteral":
				this.walkTemplateLiteral(expression);
				break;
			case "ThisExpression":
				this.walkThisExpression(expression);
				break;
			case "UnaryExpression":
				this.walkUnaryExpression(expression);
				break;
			case "UpdateExpression":
				this.walkUpdateExpression(expression);
				break;
			case "YieldExpression":
				this.walkYieldExpression(expression);
				break;
		}
	}

	/**
	 * @param {AwaitExpression} expression await expression
	 */
	walkAwaitExpression(expression) {
		if (this.scope.topLevelScope === true)
			this.hooks.topLevelAwait.call(expression);
		this.walkExpression(expression.argument);
	}

	/**
	 * @param {ArrayExpression} expression array expression
	 */
	walkArrayExpression(expression) {
		if (expression.elements) {
			this.walkExpressions(expression.elements);
		}
	}

	/**
	 * @param {SpreadElement} expression spread element
	 */
	walkSpreadElement(expression) {
		if (expression.argument) {
			this.walkExpression(expression.argument);
		}
	}

	/**
	 * @param {ObjectExpression} expression object expression
	 */
	walkObjectExpression(expression) {
		for (
			let propIndex = 0, len = expression.properties.length;
			propIndex < len;
			propIndex++
		) {
			const prop = expression.properties[propIndex];
			this.walkProperty(prop);
		}
	}

	/**
	 * @param {Property | SpreadElement} prop property or spread element
	 */
	walkProperty(prop) {
		if (prop.type === "SpreadElement") {
			this.walkExpression(prop.argument);
			return;
		}
		if (prop.computed) {
			this.walkExpression(prop.key);
		}
		if (prop.shorthand && prop.value && prop.value.type === "Identifier") {
			this.scope.inShorthand = prop.value.name;
			this.walkIdentifier(prop.value);
			this.scope.inShorthand = false;
		} else {
			this.walkExpression(prop.value);
		}
	}

	/**
	 * @param {FunctionExpression} expression arrow function expression
	 */
	walkFunctionExpression(expression) {
		const wasTopLevel = this.scope.topLevelScope;
		this.scope.topLevelScope = false;
		const scopeParams = [...expression.params];

		// Add function name in scope for recursive calls
		if (expression.id) {
			scopeParams.push(expression.id);
		}

		this.inFunctionScope(true, scopeParams, () => {
			for (const param of expression.params) {
				this.walkPattern(param);
			}
			if (expression.body.type === "BlockStatement") {
				this.detectMode(expression.body.body);
				const prev = this.prevStatement;
				this.preWalkStatement(expression.body);
				this.prevStatement = prev;
				this.walkStatement(expression.body);
			} else {
				this.walkExpression(expression.body);
			}
		});
		this.scope.topLevelScope = wasTopLevel;
	}

	/**
	 * @param {ArrowFunctionExpression} expression arrow function expression
	 */
	walkArrowFunctionExpression(expression) {
		const wasTopLevel = this.scope.topLevelScope;
		this.scope.topLevelScope = wasTopLevel ? "arrow" : false;
		this.inFunctionScope(false, expression.params, () => {
			for (const param of expression.params) {
				this.walkPattern(param);
			}
			if (expression.body.type === "BlockStatement") {
				this.detectMode(expression.body.body);
				const prev = this.prevStatement;
				this.preWalkStatement(expression.body);
				this.prevStatement = prev;
				this.walkStatement(expression.body);
			} else {
				this.walkExpression(expression.body);
			}
		});
		this.scope.topLevelScope = wasTopLevel;
	}

	/**
	 * @param {SequenceExpression} expression the sequence
	 */
	walkSequenceExpression(expression) {
		if (!expression.expressions) return;
		// We treat sequence expressions like statements when they are one statement level
		// This has some benefits for optimizations that only work on statement level
		const currentStatement =
			/** @type {StatementPath} */
			(this.statementPath)[
				/** @type {StatementPath} */
				(this.statementPath).length - 1
			];
		if (
			currentStatement === expression ||
			(currentStatement.type === "ExpressionStatement" &&
				currentStatement.expression === expression)
		) {
			const old =
				/** @type {StatementPathItem} */
				(/** @type {StatementPath} */ (this.statementPath).pop());
			const prev = this.prevStatement;
			for (const expr of expression.expressions) {
				/** @type {StatementPath} */
				(this.statementPath).push(expr);
				this.walkExpression(expr);
				this.prevStatement =
					/** @type {StatementPath} */
					(this.statementPath).pop();
			}
			this.prevStatement = prev;
			/** @type {StatementPath} */
			(this.statementPath).push(old);
		} else {
			this.walkExpressions(expression.expressions);
		}
	}

	/**
	 * @param {UpdateExpression} expression the update expression
	 */
	walkUpdateExpression(expression) {
		this.walkExpression(expression.argument);
	}

	/**
	 * @param {UnaryExpression} expression the unary expression
	 */
	walkUnaryExpression(expression) {
		if (expression.operator === "typeof") {
			const result = this.callHooksForExpression(
				this.hooks.typeof,
				expression.argument,
				expression
			);
			if (result === true) return;
			if (expression.argument.type === "ChainExpression") {
				const result = this.callHooksForExpression(
					this.hooks.typeof,
					expression.argument.expression,
					expression
				);
				if (result === true) return;
			}
		}
		this.walkExpression(expression.argument);
	}

	/**
	 * @param {LogicalExpression | BinaryExpression} expression the expression
	 */
	walkLeftRightExpression(expression) {
		this.walkExpression(expression.left);
		this.walkExpression(expression.right);
	}

	/**
	 * @param {BinaryExpression} expression the binary expression
	 */
	walkBinaryExpression(expression) {
		if (this.hooks.binaryExpression.call(expression) === undefined) {
			this.walkLeftRightExpression(expression);
		}
	}

	/**
	 * @param {LogicalExpression} expression the logical expression
	 */
	walkLogicalExpression(expression) {
		const result = this.hooks.expressionLogicalOperator.call(expression);
		if (result === undefined) {
			this.walkLeftRightExpression(expression);
		} else if (result) {
			this.walkExpression(expression.right);
		}
	}

	/**
	 * @param {AssignmentExpression} expression assignment expression
	 */
	walkAssignmentExpression(expression) {
		if (expression.left.type === "Identifier") {
			const renameIdentifier = this.getRenameIdentifier(expression.right);
			if (
				renameIdentifier &&
				this.callHooksForInfo(
					this.hooks.canRename,
					renameIdentifier,
					expression.right
				)
			) {
				// renaming "a = b;"
				if (
					!this.callHooksForInfo(
						this.hooks.rename,
						renameIdentifier,
						expression.right
					)
				) {
					this.setVariable(
						expression.left.name,
						typeof renameIdentifier === "string"
							? this.getVariableInfo(renameIdentifier)
							: renameIdentifier
					);
				}
				return;
			}
			this.walkExpression(expression.right);
			this.enterPattern(expression.left, (name, decl) => {
				if (!this.callHooksForName(this.hooks.assign, name, expression)) {
					this.walkExpression(expression.left);
				}
			});
			return;
		}
		if (expression.left.type.endsWith("Pattern")) {
			this.walkExpression(expression.right);
			this.enterPattern(expression.left, (name, decl) => {
				if (!this.callHooksForName(this.hooks.assign, name, expression)) {
					this.defineVariable(name);
				}
			});
			this.walkPattern(expression.left);
		} else if (expression.left.type === "MemberExpression") {
			const exprName = this.getMemberExpressionInfo(
				expression.left,
				ALLOWED_MEMBER_TYPES_EXPRESSION
			);
			if (
				exprName &&
				this.callHooksForInfo(
					this.hooks.assignMemberChain,
					exprName.rootInfo,
					expression,
					exprName.getMembers()
				)
			) {
				return;
			}
			this.walkExpression(expression.right);
			this.walkExpression(expression.left);
		} else {
			this.walkExpression(expression.right);
			this.walkExpression(expression.left);
		}
	}

	/**
	 * @param {ConditionalExpression} expression conditional expression
	 */
	walkConditionalExpression(expression) {
		const result = this.hooks.expressionConditionalOperator.call(expression);
		if (result === undefined) {
			this.walkExpression(expression.test);
			this.walkExpression(expression.consequent);
			if (expression.alternate) {
				this.walkExpression(expression.alternate);
			}
		} else if (result) {
			this.walkExpression(expression.consequent);
		} else if (expression.alternate) {
			this.walkExpression(expression.alternate);
		}
	}

	/**
	 * @param {NewExpression} expression new expression
	 */
	walkNewExpression(expression) {
		const result = this.callHooksForExpression(
			this.hooks.new,
			expression.callee,
			expression
		);
		if (result === true) return;
		this.walkExpression(expression.callee);
		if (expression.arguments) {
			this.walkExpressions(expression.arguments);
		}
	}

	/**
	 * @param {YieldExpression} expression yield expression
	 */
	walkYieldExpression(expression) {
		if (expression.argument) {
			this.walkExpression(expression.argument);
		}
	}

	/**
	 * @param {TemplateLiteral} expression template literal
	 */
	walkTemplateLiteral(expression) {
		if (expression.expressions) {
			this.walkExpressions(expression.expressions);
		}
	}

	/**
	 * @param {TaggedTemplateExpression} expression tagged template expression
	 */
	walkTaggedTemplateExpression(expression) {
		if (expression.tag) {
			this.scope.inTaggedTemplateTag = true;
			this.walkExpression(expression.tag);
			this.scope.inTaggedTemplateTag = false;
		}
		if (expression.quasi && expression.quasi.expressions) {
			this.walkExpressions(expression.quasi.expressions);
		}
	}

	/**
	 * @param {ClassExpression} expression the class expression
	 */
	walkClassExpression(expression) {
		this.walkClass(expression);
	}

	/**
	 * @param {ChainExpression} expression expression
	 */
	walkChainExpression(expression) {
		const result = this.hooks.optionalChaining.call(expression);

		if (result === undefined) {
			if (expression.expression.type === "CallExpression") {
				this.walkCallExpression(expression.expression);
			} else {
				this.walkMemberExpression(expression.expression);
			}
		}
	}

	/**
	 * @private
	 * @param {FunctionExpression | ArrowFunctionExpression} functionExpression function expression
	 * @param {(Expression | SpreadElement)[]} options options
	 * @param {Expression | SpreadElement | null} currentThis current this
	 */
	_walkIIFE(functionExpression, options, currentThis) {
		/**
		 * @param {Expression | SpreadElement} argOrThis arg or this
		 * @returns {string | VariableInfoInterface | undefined} var info
		 */
		const getVarInfo = argOrThis => {
			const renameIdentifier = this.getRenameIdentifier(argOrThis);
			if (
				renameIdentifier &&
				this.callHooksForInfo(
					this.hooks.canRename,
					renameIdentifier,
					/** @type {Expression} */
					(argOrThis)
				) &&
				!this.callHooksForInfo(
					this.hooks.rename,
					renameIdentifier,
					/** @type {Expression} */
					(argOrThis)
				)
			) {
				return typeof renameIdentifier === "string"
					? /** @type {string} */ (this.getVariableInfo(renameIdentifier))
					: renameIdentifier;
			}
			this.walkExpression(argOrThis);
		};
		const { params, type } = functionExpression;
		const arrow = type === "ArrowFunctionExpression";
		const renameThis = currentThis ? getVarInfo(currentThis) : null;
		const varInfoForArgs = options.map(getVarInfo);
		const wasTopLevel = this.scope.topLevelScope;
		this.scope.topLevelScope = wasTopLevel && arrow ? "arrow" : false;
		const scopeParams =
			/** @type {(Identifier | string)[]} */
			(params.filter((identifier, idx) => !varInfoForArgs[idx]));

		// Add function name in scope for recursive calls
		if (
			functionExpression.type === "FunctionExpression" &&
			functionExpression.id
		) {
			scopeParams.push(functionExpression.id.name);
		}

		this.inFunctionScope(true, scopeParams, () => {
			if (renameThis && !arrow) {
				this.setVariable("this", renameThis);
			}
			for (let i = 0; i < varInfoForArgs.length; i++) {
				const varInfo = varInfoForArgs[i];
				if (!varInfo) continue;
				if (!params[i] || params[i].type !== "Identifier") continue;
				this.setVariable(/** @type {Identifier} */ (params[i]).name, varInfo);
			}
			if (functionExpression.body.type === "BlockStatement") {
				this.detectMode(functionExpression.body.body);
				const prev = this.prevStatement;
				this.preWalkStatement(functionExpression.body);
				this.prevStatement = prev;
				this.walkStatement(functionExpression.body);
			} else {
				this.walkExpression(functionExpression.body);
			}
		});
		this.scope.topLevelScope = wasTopLevel;
	}

	/**
	 * @param {ImportExpression} expression import expression
	 */
	walkImportExpression(expression) {
		const result = this.hooks.importCall.call(expression);
		if (result === true) return;

		this.walkExpression(expression.source);
	}

	/**
	 * @param {CallExpression} expression expression
	 */
	walkCallExpression(expression) {
		/**
		 * @param {FunctionExpression | ArrowFunctionExpression} fn function
		 * @returns {boolean} true when simple function
		 */
		const isSimpleFunction = fn =>
			fn.params.every(p => p.type === "Identifier");
		if (
			expression.callee.type === "MemberExpression" &&
			expression.callee.object.type.endsWith("FunctionExpression") &&
			!expression.callee.computed &&
			// eslint-disable-next-line no-warning-comments
			// @ts-ignore
			// TODO check me and handle more cases
			(expression.callee.property.name === "call" ||
				// eslint-disable-next-line no-warning-comments
				// @ts-ignore
				expression.callee.property.name === "bind") &&
			expression.arguments.length > 0 &&
			isSimpleFunction(
				/** @type {FunctionExpression | ArrowFunctionExpression} */
				(expression.callee.object)
			)
		) {
			// (function(…) { }.call/bind(?, …))
			this._walkIIFE(
				/** @type {FunctionExpression | ArrowFunctionExpression} */
				(expression.callee.object),
				expression.arguments.slice(1),
				expression.arguments[0]
			);
		} else if (
			expression.callee.type.endsWith("FunctionExpression") &&
			isSimpleFunction(
				/** @type {FunctionExpression | ArrowFunctionExpression} */
				(expression.callee)
			)
		) {
			// (function(…) { }(…))
			this._walkIIFE(
				/** @type {FunctionExpression | ArrowFunctionExpression} */
				(expression.callee),
				expression.arguments,
				null
			);
		} else {
			if (expression.callee.type === "MemberExpression") {
				const exprInfo = this.getMemberExpressionInfo(
					expression.callee,
					ALLOWED_MEMBER_TYPES_CALL_EXPRESSION
				);
				if (exprInfo && exprInfo.type === "call") {
					const result = this.callHooksForInfo(
						this.hooks.callMemberChainOfCallMemberChain,
						exprInfo.rootInfo,
						expression,
						exprInfo.getCalleeMembers(),
						exprInfo.call,
						exprInfo.getMembers(),
						exprInfo.getMemberRanges()
					);
					if (result === true) return;
				}
			}
			const callee = this.evaluateExpression(
				/** @type {TODO} */ (expression.callee)
			);
			if (callee.isIdentifier()) {
				const result1 = this.callHooksForInfo(
					this.hooks.callMemberChain,
					/** @type {NonNullable<BasicEvaluatedExpression["rootInfo"]>} */
					(callee.rootInfo),
					expression,
					/** @type {NonNullable<BasicEvaluatedExpression["getMembers"]>} */
					(callee.getMembers)(),
					callee.getMembersOptionals
						? callee.getMembersOptionals()
						: /** @type {NonNullable<BasicEvaluatedExpression["getMembers"]>} */
							(callee.getMembers)().map(() => false),
					callee.getMemberRanges ? callee.getMemberRanges() : []
				);
				if (result1 === true) return;
				const result2 = this.callHooksForInfo(
					this.hooks.call,
					/** @type {NonNullable<BasicEvaluatedExpression["identifier"]>} */
					(callee.identifier),
					expression
				);
				if (result2 === true) return;
			}

			if (expression.callee) {
				if (expression.callee.type === "MemberExpression") {
					// because of call context we need to walk the call context as expression
					this.walkExpression(expression.callee.object);
					if (expression.callee.computed === true)
						this.walkExpression(expression.callee.property);
				} else {
					this.walkExpression(expression.callee);
				}
			}
			if (expression.arguments) this.walkExpressions(expression.arguments);
		}
	}

	/**
	 * @param {MemberExpression} expression member expression
	 */
	walkMemberExpression(expression) {
		const exprInfo = this.getMemberExpressionInfo(
			expression,
			ALLOWED_MEMBER_TYPES_ALL
		);
		if (exprInfo) {
			switch (exprInfo.type) {
				case "expression": {
					const result1 = this.callHooksForInfo(
						this.hooks.expression,
						exprInfo.name,
						expression
					);
					if (result1 === true) return;
					const members = exprInfo.getMembers();
					const membersOptionals = exprInfo.getMembersOptionals();
					const memberRanges = exprInfo.getMemberRanges();
					const result2 = this.callHooksForInfo(
						this.hooks.expressionMemberChain,
						exprInfo.rootInfo,
						expression,
						members,
						membersOptionals,
						memberRanges
					);
					if (result2 === true) return;
					this.walkMemberExpressionWithExpressionName(
						expression,
						exprInfo.name,
						exprInfo.rootInfo,
						members.slice(),
						() =>
							this.callHooksForInfo(
								this.hooks.unhandledExpressionMemberChain,
								exprInfo.rootInfo,
								expression,
								members
							)
					);
					return;
				}
				case "call": {
					const result = this.callHooksForInfo(
						this.hooks.memberChainOfCallMemberChain,
						exprInfo.rootInfo,
						expression,
						exprInfo.getCalleeMembers(),
						exprInfo.call,
						exprInfo.getMembers(),
						exprInfo.getMemberRanges()
					);
					if (result === true) return;
					// Fast skip over the member chain as we already called memberChainOfCallMemberChain
					// and call computed property are literals anyway
					this.walkExpression(exprInfo.call);
					return;
				}
			}
		}
		this.walkExpression(expression.object);
		if (expression.computed === true) this.walkExpression(expression.property);
	}

	/**
	 * @param {TODO} expression member expression
	 * @param {string} name name
	 * @param {string | VariableInfo} rootInfo root info
	 * @param {string[]} members members
	 * @param {TODO} onUnhandled on unhandled callback
	 */
	walkMemberExpressionWithExpressionName(
		expression,
		name,
		rootInfo,
		members,
		onUnhandled
	) {
		if (expression.object.type === "MemberExpression") {
			// optimize the case where expression.object is a MemberExpression too.
			// we can keep info here when calling walkMemberExpression directly
			const property =
				expression.property.name || `${expression.property.value}`;
			name = name.slice(0, -property.length - 1);
			members.pop();
			const result = this.callHooksForInfo(
				this.hooks.expression,
				name,
				expression.object
			);
			if (result === true) return;
			this.walkMemberExpressionWithExpressionName(
				expression.object,
				name,
				rootInfo,
				members,
				onUnhandled
			);
		} else if (!onUnhandled || !onUnhandled()) {
			this.walkExpression(expression.object);
		}
		if (expression.computed === true) this.walkExpression(expression.property);
	}

	/**
	 * @param {ThisExpression} expression this expression
	 */
	walkThisExpression(expression) {
		this.callHooksForName(this.hooks.expression, "this", expression);
	}

	/**
	 * @param {Identifier} expression identifier
	 */
	walkIdentifier(expression) {
		this.callHooksForName(this.hooks.expression, expression.name, expression);
	}

	/**
	 * @param {MetaProperty} metaProperty meta property
	 */
	walkMetaProperty(metaProperty) {
		this.hooks.expression.for(getRootName(metaProperty)).call(metaProperty);
	}

	/**
	 * @template T
	 * @template R
	 * @param {HookMap<SyncBailHook<T, R>>} hookMap hooks the should be called
	 * @param {Expression | Super} expr expression
	 * @param {AsArray<T>} args args for the hook
	 * @returns {R | undefined} result of hook
	 */
	callHooksForExpression(hookMap, expr, ...args) {
		return this.callHooksForExpressionWithFallback(
			hookMap,
			expr,
			undefined,
			undefined,
			...args
		);
	}

	/**
	 * @template T
	 * @template R
	 * @param {HookMap<SyncBailHook<T, R>>} hookMap hooks the should be called
	 * @param {Expression | Super} expr expression info
	 * @param {(function(string, string | ScopeInfo | VariableInfo, function(): string[]): any) | undefined} fallback callback when variable in not handled by hooks
	 * @param {(function(string): any) | undefined} defined callback when variable is defined
	 * @param {AsArray<T>} args args for the hook
	 * @returns {R | undefined} result of hook
	 */
	callHooksForExpressionWithFallback(
		hookMap,
		expr,
		fallback,
		defined,
		...args
	) {
		const exprName = this.getMemberExpressionInfo(
			expr,
			ALLOWED_MEMBER_TYPES_EXPRESSION
		);
		if (exprName !== undefined) {
			const members = exprName.getMembers();
			return this.callHooksForInfoWithFallback(
				hookMap,
				members.length === 0 ? exprName.rootInfo : exprName.name,
				fallback &&
					(name => fallback(name, exprName.rootInfo, exprName.getMembers)),
				defined && (() => defined(exprName.name)),
				...args
			);
		}
	}

	/**
	 * @template T
	 * @template R
	 * @param {HookMap<SyncBailHook<T, R>>} hookMap hooks the should be called
	 * @param {string} name key in map
	 * @param {AsArray<T>} args args for the hook
	 * @returns {R | undefined} result of hook
	 */
	callHooksForName(hookMap, name, ...args) {
		return this.callHooksForNameWithFallback(
			hookMap,
			name,
			undefined,
			undefined,
			...args
		);
	}

	/**
	 * @template T
	 * @template R
	 * @param {HookMap<SyncBailHook<T, R>>} hookMap hooks that should be called
	 * @param {ExportedVariableInfo} info variable info
	 * @param  {AsArray<T>} args args for the hook
	 * @returns {R | undefined} result of hook
	 */
	callHooksForInfo(hookMap, info, ...args) {
		return this.callHooksForInfoWithFallback(
			hookMap,
			info,
			undefined,
			undefined,
			...args
		);
	}

	/**
	 * @template T
	 * @template R
	 * @param {HookMap<SyncBailHook<T, R>>} hookMap hooks the should be called
	 * @param {ExportedVariableInfo} info variable info
	 * @param {(function(string): any) | undefined} fallback callback when variable in not handled by hooks
	 * @param {(function(string=): any) | undefined} defined callback when variable is defined
	 * @param {AsArray<T>} args args for the hook
	 * @returns {R | undefined} result of hook
	 */
	callHooksForInfoWithFallback(hookMap, info, fallback, defined, ...args) {
		let name;
		if (typeof info === "string") {
			name = info;
		} else {
			if (!(info instanceof VariableInfo)) {
				if (defined !== undefined) {
					return defined();
				}
				return;
			}
			let tagInfo = info.tagInfo;
			while (tagInfo !== undefined) {
				const hook = hookMap.get(tagInfo.tag);
				if (hook !== undefined) {
					this.currentTagData = tagInfo.data;
					const result = hook.call(...args);
					this.currentTagData = undefined;
					if (result !== undefined) return result;
				}
				tagInfo = tagInfo.next;
			}
			if (info.freeName === true) {
				if (defined !== undefined) {
					return defined();
				}
				return;
			}
			name = info.freeName;
		}
		const hook = hookMap.get(name);
		if (hook !== undefined) {
			const result = hook.call(...args);
			if (result !== undefined) return result;
		}
		if (fallback !== undefined) {
			return fallback(/** @type {string} */ (name));
		}
	}

	/**
	 * @template T
	 * @template R
	 * @param {HookMap<SyncBailHook<T, R>>} hookMap hooks the should be called
	 * @param {string} name key in map
	 * @param {(function(string): any) | undefined} fallback callback when variable in not handled by hooks
	 * @param {(function(): any) | undefined} defined callback when variable is defined
	 * @param {AsArray<T>} args args for the hook
	 * @returns {R | undefined} result of hook
	 */
	callHooksForNameWithFallback(hookMap, name, fallback, defined, ...args) {
		return this.callHooksForInfoWithFallback(
			hookMap,
			this.getVariableInfo(name),
			fallback,
			defined,
			...args
		);
	}

	/**
	 * @deprecated
	 * @param {any} params scope params
	 * @param {function(): void} fn inner function
	 * @returns {void}
	 */
	inScope(params, fn) {
		const oldScope = this.scope;
		this.scope = {
			topLevelScope: oldScope.topLevelScope,
			inTry: false,
			inShorthand: false,
			inTaggedTemplateTag: false,
			isStrict: oldScope.isStrict,
			isAsmJs: oldScope.isAsmJs,
			definitions: oldScope.definitions.createChild()
		};

		this.undefineVariable("this");

		this.enterPatterns(params, ident => {
			this.defineVariable(ident);
		});

		fn();

		this.scope = oldScope;
	}

	/**
	 * @param {boolean} hasThis true, when this is defined
	 * @param {Identifier[]} params scope params
	 * @param {function(): void} fn inner function
	 * @returns {void}
	 */
	inClassScope(hasThis, params, fn) {
		const oldScope = this.scope;
		this.scope = {
			topLevelScope: oldScope.topLevelScope,
			inTry: false,
			inShorthand: false,
			inTaggedTemplateTag: false,
			isStrict: oldScope.isStrict,
			isAsmJs: oldScope.isAsmJs,
			definitions: oldScope.definitions.createChild()
		};

		if (hasThis) {
			this.undefineVariable("this");
		}

		this.enterPatterns(params, ident => {
			this.defineVariable(ident);
		});

		fn();

		this.scope = oldScope;
	}

	/**
	 * @param {boolean} hasThis true, when this is defined
	 * @param {(Pattern | string)[]} params scope params
	 * @param {function(): void} fn inner function
	 * @returns {void}
	 */
	inFunctionScope(hasThis, params, fn) {
		const oldScope = this.scope;
		this.scope = {
			topLevelScope: oldScope.topLevelScope,
			inTry: false,
			inShorthand: false,
			inTaggedTemplateTag: false,
			isStrict: oldScope.isStrict,
			isAsmJs: oldScope.isAsmJs,
			definitions: oldScope.definitions.createChild()
		};

		if (hasThis) {
			this.undefineVariable("this");
		}

		this.enterPatterns(params, ident => {
			this.defineVariable(ident);
		});

		fn();

		this.scope = oldScope;
	}

	/**
	 * @param {function(): void} fn inner function
	 * @returns {void}
	 */
	inBlockScope(fn) {
		const oldScope = this.scope;
		this.scope = {
			topLevelScope: oldScope.topLevelScope,
			inTry: oldScope.inTry,
			inShorthand: false,
			inTaggedTemplateTag: false,
			isStrict: oldScope.isStrict,
			isAsmJs: oldScope.isAsmJs,
			definitions: oldScope.definitions.createChild()
		};

		fn();

		this.scope = oldScope;
	}

	/**
	 * @param {Array<Directive | Statement | ModuleDeclaration>} statements statements
	 */
	detectMode(statements) {
		const isLiteral =
			statements.length >= 1 &&
			statements[0].type === "ExpressionStatement" &&
			statements[0].expression.type === "Literal";
		if (
			isLiteral &&
			/** @type {Literal} */
			(/** @type {ExpressionStatement} */ (statements[0]).expression).value ===
				"use strict"
		) {
			this.scope.isStrict = true;
		}
		if (
			isLiteral &&
			/** @type {Literal} */
			(/** @type {ExpressionStatement} */ (statements[0]).expression).value ===
				"use asm"
		) {
			this.scope.isAsmJs = true;
		}
	}

	/**
	 * @param {(string | Pattern | Property)[]} patterns patterns
	 * @param {OnIdentString} onIdent on ident callback
	 */
	enterPatterns(patterns, onIdent) {
		for (const pattern of patterns) {
			if (typeof pattern !== "string") {
				this.enterPattern(pattern, onIdent);
			} else if (pattern) {
				onIdent(pattern);
			}
		}
	}

	/**
	 * @param {Pattern | Property} pattern pattern
	 * @param {OnIdent} onIdent on ident callback
	 */
	enterPattern(pattern, onIdent) {
		if (!pattern) return;
		switch (pattern.type) {
			case "ArrayPattern":
				this.enterArrayPattern(pattern, onIdent);
				break;
			case "AssignmentPattern":
				this.enterAssignmentPattern(pattern, onIdent);
				break;
			case "Identifier":
				this.enterIdentifier(pattern, onIdent);
				break;
			case "ObjectPattern":
				this.enterObjectPattern(pattern, onIdent);
				break;
			case "RestElement":
				this.enterRestElement(pattern, onIdent);
				break;
			case "Property":
				if (pattern.shorthand && pattern.value.type === "Identifier") {
					this.scope.inShorthand = pattern.value.name;
					this.enterIdentifier(pattern.value, onIdent);
					this.scope.inShorthand = false;
				} else {
					this.enterPattern(/** @type {Pattern} */ (pattern.value), onIdent);
				}
				break;
		}
	}

	/**
	 * @param {Identifier} pattern identifier pattern
	 * @param {OnIdent} onIdent callback
	 */
	enterIdentifier(pattern, onIdent) {
		if (!this.callHooksForName(this.hooks.pattern, pattern.name, pattern)) {
			onIdent(pattern.name, pattern);
		}
	}

	/**
	 * @param {ObjectPattern} pattern object pattern
	 * @param {OnIdent} onIdent callback
	 */
	enterObjectPattern(pattern, onIdent) {
		for (
			let propIndex = 0, len = pattern.properties.length;
			propIndex < len;
			propIndex++
		) {
			const prop = pattern.properties[propIndex];
			this.enterPattern(prop, onIdent);
		}
	}

	/**
	 * @param {ArrayPattern} pattern object pattern
	 * @param {OnIdent} onIdent callback
	 */
	enterArrayPattern(pattern, onIdent) {
		for (
			let elementIndex = 0, len = pattern.elements.length;
			elementIndex < len;
			elementIndex++
		) {
			const element = pattern.elements[elementIndex];

			if (element) {
				this.enterPattern(element, onIdent);
			}
		}
	}

	/**
	 * @param {RestElement} pattern object pattern
	 * @param {OnIdent} onIdent callback
	 */
	enterRestElement(pattern, onIdent) {
		this.enterPattern(pattern.argument, onIdent);
	}

	/**
	 * @param {AssignmentPattern} pattern object pattern
	 * @param {OnIdent} onIdent callback
	 */
	enterAssignmentPattern(pattern, onIdent) {
		this.enterPattern(pattern.left, onIdent);
	}

	/**
	 * @param {Expression | SpreadElement | PrivateIdentifier} expression expression node
	 * @returns {BasicEvaluatedExpression} evaluation result
	 */
	evaluateExpression(expression) {
		try {
			const hook = this.hooks.evaluate.get(expression.type);
			if (hook !== undefined) {
				const result = hook.call(expression);
				if (result !== undefined && result !== null) {
					result.setExpression(expression);
					return result;
				}
			}
		} catch (err) {
			console.warn(err);
			// ignore error
		}
		return new BasicEvaluatedExpression()
			.setRange(/** @type {Range} */ (expression.range))
			.setExpression(expression);
	}

	/**
	 * @param {Expression} expression expression
	 * @returns {string} parsed string
	 */
	parseString(expression) {
		switch (expression.type) {
			case "BinaryExpression":
				if (expression.operator === "+") {
					return (
						this.parseString(/** @type {Expression} */ (expression.left)) +
						this.parseString(expression.right)
					);
				}
				break;
			case "Literal":
				return String(expression.value);
		}
		throw new Error(
			`${expression.type} is not supported as parameter for require`
		);
	}

	/**
	 * @param {Expression} expression expression
	 * @returns {{ range?: Range, value: string, code: boolean, conditional: TODO }} result
	 */
	parseCalculatedString(expression) {
		switch (expression.type) {
			case "BinaryExpression":
				if (expression.operator === "+") {
					const left = this.parseCalculatedString(
						/** @type {Expression} */
						(expression.left)
					);
					const right = this.parseCalculatedString(expression.right);
					if (left.code) {
						return {
							range: left.range,
							value: left.value,
							code: true,
							conditional: false
						};
					} else if (right.code) {
						return {
							range: [
								/** @type {Range} */
								(left.range)[0],
								right.range
									? right.range[1]
									: /** @type {Range} */ (left.range)[1]
							],
							value: left.value + right.value,
							code: true,
							conditional: false
						};
					}
					return {
						range: [
							/** @type {Range} */
							(left.range)[0],
							/** @type {Range} */
							(right.range)[1]
						],
						value: left.value + right.value,
						code: false,
						conditional: false
					};
				}
				break;
			case "ConditionalExpression": {
				const consequent = this.parseCalculatedString(expression.consequent);
				const alternate = this.parseCalculatedString(expression.alternate);
				const items = [];
				if (consequent.conditional) {
					items.push(...consequent.conditional);
				} else if (!consequent.code) {
					items.push(consequent);
				} else {
					break;
				}
				if (alternate.conditional) {
					items.push(...alternate.conditional);
				} else if (!alternate.code) {
					items.push(alternate);
				} else {
					break;
				}
				return {
					range: undefined,
					value: "",
					code: true,
					conditional: items
				};
			}
			case "Literal":
				return {
					range: expression.range,
					value: String(expression.value),
					code: false,
					conditional: false
				};
		}
		return {
			range: undefined,
			value: "",
			code: true,
			conditional: false
		};
	}

	/**
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		let ast;
		/** @type {import("acorn").Comment[]} */
		let comments;
		const semicolons = new Set();
		if (source === null) {
			throw new Error("source must not be null");
		}
		if (Buffer.isBuffer(source)) {
			source = source.toString("utf-8");
		}
		if (typeof source === "object") {
			ast = /** @type {Program} */ (source);
			comments = source.comments;
		} else {
			comments = [];
			ast = JavascriptParser._parse(source, {
				sourceType: this.sourceType,
				onComment: comments,
				onInsertedSemicolon: pos => semicolons.add(pos)
			});
		}

		const oldScope = this.scope;
		const oldState = this.state;
		const oldComments = this.comments;
		const oldSemicolons = this.semicolons;
		const oldStatementPath = this.statementPath;
		const oldPrevStatement = this.prevStatement;
		this.scope = {
			topLevelScope: true,
			inTry: false,
			inShorthand: false,
			inTaggedTemplateTag: false,
			isStrict: false,
			isAsmJs: false,
			definitions: new StackedMap()
		};
		/** @type {ParserState} */
		this.state = state;
		this.comments = comments;
		this.semicolons = semicolons;
		this.statementPath = [];
		this.prevStatement = undefined;
		if (this.hooks.program.call(ast, comments) === undefined) {
			this.destructuringAssignmentProperties = new WeakMap();
			this.detectMode(ast.body);
			this.preWalkStatements(ast.body);
			this.prevStatement = undefined;
			this.blockPreWalkStatements(ast.body);
			this.prevStatement = undefined;
			this.walkStatements(ast.body);
			this.destructuringAssignmentProperties = undefined;
		}
		this.hooks.finish.call(ast, comments);
		this.scope = oldScope;
		/** @type {ParserState} */
		this.state = oldState;
		this.comments = oldComments;
		this.semicolons = oldSemicolons;
		this.statementPath = oldStatementPath;
		this.prevStatement = oldPrevStatement;
		return state;
	}

	/**
	 * @param {string} source source code
	 * @returns {BasicEvaluatedExpression} evaluation result
	 */
	evaluate(source) {
		const ast = JavascriptParser._parse(`(${source})`, {
			sourceType: this.sourceType,
			locations: false
		});
		if (ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement") {
			throw new Error("evaluate: Source is not a expression");
		}
		return this.evaluateExpression(ast.body[0].expression);
	}

	/**
	 * @param {Expression | Declaration | PrivateIdentifier | null | undefined} expr an expression
	 * @param {number} commentsStartPos source position from which annotation comments are checked
	 * @returns {boolean} true, when the expression is pure
	 */
	isPure(expr, commentsStartPos) {
		if (!expr) return true;
		const result = this.hooks.isPure
			.for(expr.type)
			.call(expr, commentsStartPos);
		if (typeof result === "boolean") return result;
		switch (expr.type) {
			// TODO handle more cases
			case "ClassDeclaration":
			case "ClassExpression": {
				if (expr.body.type !== "ClassBody") return false;
				if (
					expr.superClass &&
					!this.isPure(expr.superClass, /** @type {Range} */ (expr.range)[0])
				) {
					return false;
				}
				const items =
					/** @type {TODO[]} */
					(expr.body.body);
				return items.every(item => {
					if (
						item.computed &&
						item.key &&
						!this.isPure(item.key, item.range[0])
					) {
						return false;
					}

					if (
						item.static &&
						item.value &&
						!this.isPure(
							item.value,
							item.key ? item.key.range[1] : item.range[0]
						)
					) {
						return false;
					}

					if (item.type === "StaticBlock") {
						return false;
					}

					if (
						expr.superClass &&
						item.type === "MethodDefinition" &&
						item.kind === "constructor"
					) {
						return false;
					}

					return true;
				});
			}

			case "FunctionDeclaration":
			case "FunctionExpression":
			case "ArrowFunctionExpression":
			case "ThisExpression":
			case "Literal":
			case "TemplateLiteral":
			case "Identifier":
			case "PrivateIdentifier":
				return true;

			case "VariableDeclaration":
				return expr.declarations.every(decl =>
					this.isPure(decl.init, /** @type {Range} */ (decl.range)[0])
				);

			case "ConditionalExpression":
				return (
					this.isPure(expr.test, commentsStartPos) &&
					this.isPure(
						expr.consequent,
						/** @type {Range} */ (expr.test.range)[1]
					) &&
					this.isPure(
						expr.alternate,
						/** @type {Range} */ (expr.consequent.range)[1]
					)
				);

			case "LogicalExpression":
				return (
					this.isPure(expr.left, commentsStartPos) &&
					this.isPure(expr.right, /** @type {Range} */ (expr.left.range)[1])
				);

			case "SequenceExpression":
				return expr.expressions.every(expr => {
					const pureFlag = this.isPure(expr, commentsStartPos);
					commentsStartPos = /** @type {Range} */ (expr.range)[1];
					return pureFlag;
				});

			case "CallExpression": {
				const pureFlag =
					/** @type {Range} */ (expr.range)[0] - commentsStartPos > 12 &&
					this.getComments([
						commentsStartPos,
						/** @type {Range} */ (expr.range)[0]
					]).some(
						comment =>
							comment.type === "Block" &&
							/^\s*(#|@)__PURE__\s*$/.test(comment.value)
					);
				if (!pureFlag) return false;
				commentsStartPos = /** @type {Range} */ (expr.callee.range)[1];
				return expr.arguments.every(arg => {
					if (arg.type === "SpreadElement") return false;
					const pureFlag = this.isPure(arg, commentsStartPos);
					commentsStartPos = /** @type {Range} */ (arg.range)[1];
					return pureFlag;
				});
			}
		}
		const evaluated = this.evaluateExpression(expr);
		return !evaluated.couldHaveSideEffects();
	}

	/**
	 * @param {Range} range range
	 * @returns {Comment[]} comments in the range
	 */
	getComments(range) {
		const [rangeStart, rangeEnd] = range;
		/**
		 * @param {Comment} comment comment
		 * @param {number} needle needle
		 * @returns {number} compared
		 */
		const compare = (comment, needle) =>
			/** @type {Range} */ (comment.range)[0] - needle;
		const comments = /** @type {Comment[]} */ (this.comments);
		let idx = binarySearchBounds.ge(comments, rangeStart, compare);
		/** @type {Comment[]} */
		const commentsInRange = [];
		while (
			comments[idx] &&
			/** @type {Range} */ (comments[idx].range)[1] <= rangeEnd
		) {
			commentsInRange.push(comments[idx]);
			idx++;
		}

		return commentsInRange;
	}

	/**
	 * @param {number} pos source code position
	 * @returns {boolean} true when a semicolon has been inserted before this position, false if not
	 */
	isAsiPosition(pos) {
		const currentStatement =
			/** @type {StatementPath} */
			(this.statementPath)[
				/** @type {StatementPath} */
				(this.statementPath).length - 1
			];
		if (currentStatement === undefined) throw new Error("Not in statement");
		const range = /** @type {Range} */ (currentStatement.range);

		return (
			// Either asking directly for the end position of the current statement
			(range[1] === pos &&
				/** @type {Set<number>} */ (this.semicolons).has(pos)) ||
			// Or asking for the start position of the current statement,
			// here we have to check multiple things
			(range[0] === pos &&
				// is there a previous statement which might be relevant?
				this.prevStatement !== undefined &&
				// is the end position of the previous statement an ASI position?
				/** @type {Set<number>} */ (this.semicolons).has(
					/** @type {Range} */ (this.prevStatement.range)[1]
				))
		);
	}

	/**
	 * @param {number} pos source code position
	 * @returns {void}
	 */
	setAsiPosition(pos) {
		/** @type {Set<number>} */ (this.semicolons).add(pos);
	}

	/**
	 * @param {number} pos source code position
	 * @returns {void}
	 */
	unsetAsiPosition(pos) {
		/** @type {Set<number>} */ (this.semicolons).delete(pos);
	}

	/**
	 * @param {Expression} expr expression
	 * @returns {boolean} true, when the expression is a statement level expression
	 */
	isStatementLevelExpression(expr) {
		const currentStatement =
			/** @type {StatementPath} */
			(this.statementPath)[
				/** @type {StatementPath} */
				(this.statementPath).length - 1
			];
		return (
			expr === currentStatement ||
			(currentStatement.type === "ExpressionStatement" &&
				currentStatement.expression === expr)
		);
	}

	/**
	 * @param {string} name name
	 * @param {symbol} tag tag info
	 * @returns {TODO} tag data
	 */
	getTagData(name, tag) {
		const info = this.scope.definitions.get(name);
		if (info instanceof VariableInfo) {
			let tagInfo = info.tagInfo;
			while (tagInfo !== undefined) {
				if (tagInfo.tag === tag) return tagInfo.data;
				tagInfo = tagInfo.next;
			}
		}
	}

	/**
	 * @param {string} name name
	 * @param {symbol} tag tag info
	 * @param {TODO=} data data
	 */
	tagVariable(name, tag, data) {
		const oldInfo = this.scope.definitions.get(name);
		/** @type {VariableInfo} */
		let newInfo;
		if (oldInfo === undefined) {
			newInfo = new VariableInfo(this.scope, name, {
				tag,
				data,
				next: undefined
			});
		} else if (oldInfo instanceof VariableInfo) {
			newInfo = new VariableInfo(oldInfo.declaredScope, oldInfo.freeName, {
				tag,
				data,
				next: oldInfo.tagInfo
			});
		} else {
			newInfo = new VariableInfo(oldInfo, true, {
				tag,
				data,
				next: undefined
			});
		}
		this.scope.definitions.set(name, newInfo);
	}

	/**
	 * @param {string} name variable name
	 */
	defineVariable(name) {
		const oldInfo = this.scope.definitions.get(name);
		// Don't redefine variable in same scope to keep existing tags
		if (oldInfo instanceof VariableInfo && oldInfo.declaredScope === this.scope)
			return;
		this.scope.definitions.set(name, this.scope);
	}

	/**
	 * @param {string} name variable name
	 */
	undefineVariable(name) {
		this.scope.definitions.delete(name);
	}

	/**
	 * @param {string} name variable name
	 * @returns {boolean} true, when variable is defined
	 */
	isVariableDefined(name) {
		const info = this.scope.definitions.get(name);
		if (info === undefined) return false;
		if (info instanceof VariableInfo) {
			return info.freeName === true;
		}
		return true;
	}

	/**
	 * @param {string} name variable name
	 * @returns {string | ExportedVariableInfo} info for this variable
	 */
	getVariableInfo(name) {
		const value = this.scope.definitions.get(name);
		if (value === undefined) {
			return name;
		}
		return value;
	}

	/**
	 * @param {string} name variable name
	 * @param {string | ExportedVariableInfo} variableInfo new info for this variable
	 * @returns {void}
	 */
	setVariable(name, variableInfo) {
		if (typeof variableInfo === "string") {
			if (variableInfo === name) {
				this.scope.definitions.delete(name);
			} else {
				this.scope.definitions.set(
					name,
					new VariableInfo(this.scope, variableInfo, undefined)
				);
			}
		} else {
			this.scope.definitions.set(name, variableInfo);
		}
	}

	/**
	 * @param {TagInfo} tagInfo tag info
	 * @returns {VariableInfo} variable info
	 */
	evaluatedVariable(tagInfo) {
		return new VariableInfo(this.scope, undefined, tagInfo);
	}

	/**
	 * @param {Range} range range of the comment
	 * @returns {{ options: Record<string, any> | null, errors: (Error & { comment: Comment })[] | null }} result
	 */
	parseCommentOptions(range) {
		const comments = this.getComments(range);
		if (comments.length === 0) {
			return EMPTY_COMMENT_OPTIONS;
		}
		/** @type {Record<string, EXPECTED_ANY> } */
		const options = {};
		/** @type {(Error & { comment: Comment })[]} */
		const errors = [];
		for (const comment of comments) {
			const { value } = comment;
			if (value && webpackCommentRegExp.test(value)) {
				// try compile only if webpack options comment is present
				try {
					for (let [key, val] of Object.entries(
						vm.runInContext(
							`(function(){return {${value}};})()`,
							this.magicCommentContext
						)
					)) {
						if (typeof val === "object" && val !== null) {
							val =
								val.constructor.name === "RegExp"
									? new RegExp(val)
									: JSON.parse(JSON.stringify(val));
						}
						options[key] = val;
					}
				} catch (err) {
					const newErr = new Error(String(/** @type {Error} */ (err).message));
					newErr.stack = String(/** @type {Error} */ (err).stack);
					Object.assign(newErr, { comment });
					errors.push(/** @type {(Error & { comment: Comment })} */ (newErr));
				}
			}
		}
		return { options, errors };
	}

	/**
	 * @param {Expression | Super} expression a member expression
	 * @returns {{ members: string[], object: Expression | Super, membersOptionals: boolean[], memberRanges: Range[] }} member names (reverse order) and remaining object
	 */
	extractMemberExpressionChain(expression) {
		/** @type {Node} */
		let expr = expression;
		const members = [];
		const membersOptionals = [];
		const memberRanges = [];
		while (expr.type === "MemberExpression") {
			if (expr.computed) {
				if (expr.property.type !== "Literal") break;
				members.push(`${expr.property.value}`); // the literal
				memberRanges.push(/** @type {Range} */ (expr.object.range)); // the range of the expression fragment before the literal
			} else {
				if (expr.property.type !== "Identifier") break;
				members.push(expr.property.name); // the identifier
				memberRanges.push(/** @type {Range} */ (expr.object.range)); // the range of the expression fragment before the identifier
			}
			membersOptionals.push(expr.optional);
			expr = expr.object;
		}

		return {
			members,
			membersOptionals,
			memberRanges,
			object: expr
		};
	}

	/**
	 * @param {string} varName variable name
	 * @returns {{name: string, info: VariableInfo | string} | undefined} name of the free variable and variable info for that
	 */
	getFreeInfoFromVariable(varName) {
		const info = this.getVariableInfo(varName);
		let name;
		if (info instanceof VariableInfo) {
			name = info.freeName;
			if (typeof name !== "string") return;
		} else if (typeof info !== "string") {
			return;
		} else {
			name = info;
		}
		return { info, name };
	}

	/** @typedef {{ type: "call", call: CallExpression, calleeName: string, rootInfo: string | VariableInfo, getCalleeMembers: () => string[], name: string, getMembers: () => string[], getMembersOptionals: () => boolean[], getMemberRanges: () => Range[]}} CallExpressionInfo */
	/** @typedef {{ type: "expression", rootInfo: string | VariableInfo, name: string, getMembers: () => string[], getMembersOptionals: () => boolean[], getMemberRanges: () => Range[]}} ExpressionExpressionInfo */

	/**
	 * @param {Expression | Super} expression a member expression
	 * @param {number} allowedTypes which types should be returned, presented in bit mask
	 * @returns {CallExpressionInfo | ExpressionExpressionInfo | undefined} expression info
	 */
	getMemberExpressionInfo(expression, allowedTypes) {
		const { object, members, membersOptionals, memberRanges } =
			this.extractMemberExpressionChain(expression);
		switch (object.type) {
			case "CallExpression": {
				if ((allowedTypes & ALLOWED_MEMBER_TYPES_CALL_EXPRESSION) === 0) return;
				let callee = object.callee;
				let rootMembers = EMPTY_ARRAY;
				if (callee.type === "MemberExpression") {
					({ object: callee, members: rootMembers } =
						this.extractMemberExpressionChain(callee));
				}
				const rootName = getRootName(callee);
				if (!rootName) return;
				const result = this.getFreeInfoFromVariable(rootName);
				if (!result) return;
				const { info: rootInfo, name: resolvedRoot } = result;
				const calleeName = objectAndMembersToName(resolvedRoot, rootMembers);
				return {
					type: "call",
					call: object,
					calleeName,
					rootInfo,
					getCalleeMembers: memoize(() => rootMembers.reverse()),
					name: objectAndMembersToName(`${calleeName}()`, members),
					getMembers: memoize(() => members.reverse()),
					getMembersOptionals: memoize(() => membersOptionals.reverse()),
					getMemberRanges: memoize(() => memberRanges.reverse())
				};
			}
			case "Identifier":
			case "MetaProperty":
			case "ThisExpression": {
				if ((allowedTypes & ALLOWED_MEMBER_TYPES_EXPRESSION) === 0) return;
				const rootName = getRootName(object);
				if (!rootName) return;

				const result = this.getFreeInfoFromVariable(rootName);
				if (!result) return;
				const { info: rootInfo, name: resolvedRoot } = result;
				return {
					type: "expression",
					name: objectAndMembersToName(resolvedRoot, members),
					rootInfo,
					getMembers: memoize(() => members.reverse()),
					getMembersOptionals: memoize(() => membersOptionals.reverse()),
					getMemberRanges: memoize(() => memberRanges.reverse())
				};
			}
		}
	}

	/**
	 * @param {MemberExpression} expression an expression
	 * @returns {{ name: string, rootInfo: ExportedVariableInfo, getMembers: () => string[]} | undefined} name info
	 */
	getNameForExpression(expression) {
		return this.getMemberExpressionInfo(
			expression,
			ALLOWED_MEMBER_TYPES_EXPRESSION
		);
	}

	/**
	 * @param {string} code source code
	 * @param {ParseOptions} options parsing options
	 * @returns {Program} parsed ast
	 */
	static _parse(code, options) {
		const type = options ? options.sourceType : "module";
		/** @type {AcornOptions} */
		const parserOptions = {
			...defaultParserOptions,
			allowReturnOutsideFunction: type === "script",
			...options,
			sourceType: type === "auto" ? "module" : type
		};

		/** @type {import("acorn").Program | undefined} */
		let ast;
		let error;
		let threw = false;
		try {
			ast = parser.parse(code, parserOptions);
		} catch (err) {
			error = err;
			threw = true;
		}

		if (threw && type === "auto") {
			parserOptions.sourceType = "script";
			if (!("allowReturnOutsideFunction" in options)) {
				parserOptions.allowReturnOutsideFunction = true;
			}
			if (Array.isArray(parserOptions.onComment)) {
				parserOptions.onComment.length = 0;
			}
			try {
				ast = parser.parse(code, parserOptions);
				threw = false;
			} catch (_err) {
				// we use the error from first parse try
				// so nothing to do here
			}
		}

		if (threw) {
			throw error;
		}

		return /** @type {Program} */ (ast);
	}
}

module.exports = JavascriptParser;
module.exports.ALLOWED_MEMBER_TYPES_ALL = ALLOWED_MEMBER_TYPES_ALL;
module.exports.ALLOWED_MEMBER_TYPES_EXPRESSION =
	ALLOWED_MEMBER_TYPES_EXPRESSION;
module.exports.ALLOWED_MEMBER_TYPES_CALL_EXPRESSION =
	ALLOWED_MEMBER_TYPES_CALL_EXPRESSION;
module.exports.getImportAttributes = getImportAttributes;
module.exports.VariableInfo = VariableInfo;
