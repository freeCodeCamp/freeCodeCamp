/* eslint-disable jsdoc/valid-types -- doesn't allow `readonly`.
   TODO: remove eslint-disable when https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/164 is fixed
*/
/**
 * @typedef {{ readonly [type: string]: ReadonlyArray<string> }} VisitorKeys
 */
/* eslint-enable jsdoc/valid-types -- doesn't allow `readonly string[]`. TODO: check why */

/**
 * @type {VisitorKeys}
 */
const KEYS = {
	ArrayExpression: ["elements"],
	ArrayPattern: ["elements"],
	ArrowFunctionExpression: ["params", "body"],
	AssignmentExpression: ["left", "right"],
	AssignmentPattern: ["left", "right"],
	AwaitExpression: ["argument"],
	BinaryExpression: ["left", "right"],
	BlockStatement: ["body"],
	BreakStatement: ["label"],
	CallExpression: ["callee", "arguments"],
	CatchClause: ["param", "body"],
	ChainExpression: ["expression"],
	ClassBody: ["body"],
	ClassDeclaration: ["id", "superClass", "body"],
	ClassExpression: ["id", "superClass", "body"],
	ConditionalExpression: ["test", "consequent", "alternate"],
	ContinueStatement: ["label"],
	DebuggerStatement: [],
	DoWhileStatement: ["body", "test"],
	EmptyStatement: [],
	ExperimentalRestProperty: ["argument"],
	ExperimentalSpreadProperty: ["argument"],
	ExportAllDeclaration: ["exported", "source", "attributes"],
	ExportDefaultDeclaration: ["declaration"],
	ExportNamedDeclaration: [
		"declaration",
		"specifiers",
		"source",
		"attributes",
	],
	ExportSpecifier: ["local", "exported"],
	ExpressionStatement: ["expression"],
	ForInStatement: ["left", "right", "body"],
	ForOfStatement: ["left", "right", "body"],
	ForStatement: ["init", "test", "update", "body"],
	FunctionDeclaration: ["id", "params", "body"],
	FunctionExpression: ["id", "params", "body"],
	Identifier: [],
	IfStatement: ["test", "consequent", "alternate"],
	ImportAttribute: ["key", "value"],
	ImportDeclaration: ["specifiers", "source", "attributes"],
	ImportDefaultSpecifier: ["local"],
	ImportExpression: ["source", "options"],
	ImportNamespaceSpecifier: ["local"],
	ImportSpecifier: ["imported", "local"],
	JSXAttribute: ["name", "value"],
	JSXClosingElement: ["name"],
	JSXClosingFragment: [],
	JSXElement: ["openingElement", "children", "closingElement"],
	JSXEmptyExpression: [],
	JSXExpressionContainer: ["expression"],
	JSXFragment: ["openingFragment", "children", "closingFragment"],
	JSXIdentifier: [],
	JSXMemberExpression: ["object", "property"],
	JSXNamespacedName: ["namespace", "name"],
	JSXOpeningElement: ["name", "attributes"],
	JSXOpeningFragment: [],
	JSXSpreadAttribute: ["argument"],
	JSXSpreadChild: ["expression"],
	JSXText: [],
	LabeledStatement: ["label", "body"],
	Literal: [],
	LogicalExpression: ["left", "right"],
	MemberExpression: ["object", "property"],
	MetaProperty: ["meta", "property"],
	MethodDefinition: ["key", "value"],
	NewExpression: ["callee", "arguments"],
	ObjectExpression: ["properties"],
	ObjectPattern: ["properties"],
	PrivateIdentifier: [],
	Program: ["body"],
	Property: ["key", "value"],
	PropertyDefinition: ["key", "value"],
	RestElement: ["argument"],
	ReturnStatement: ["argument"],
	SequenceExpression: ["expressions"],
	SpreadElement: ["argument"],
	StaticBlock: ["body"],
	Super: [],
	SwitchCase: ["test", "consequent"],
	SwitchStatement: ["discriminant", "cases"],
	TaggedTemplateExpression: ["tag", "quasi"],
	TemplateElement: [],
	TemplateLiteral: ["quasis", "expressions"],
	ThisExpression: [],
	ThrowStatement: ["argument"],
	TryStatement: ["block", "handler", "finalizer"],
	UnaryExpression: ["argument"],
	UpdateExpression: ["argument"],
	VariableDeclaration: ["declarations"],
	VariableDeclarator: ["id", "init"],
	WhileStatement: ["test", "body"],
	WithStatement: ["object", "body"],
	YieldExpression: ["argument"],
};

// Types.
const NODE_TYPES = Object.keys(KEYS);

// Freeze the keys.
for (const type of NODE_TYPES) {
	Object.freeze(KEYS[type]);
}
Object.freeze(KEYS);

export default KEYS;
