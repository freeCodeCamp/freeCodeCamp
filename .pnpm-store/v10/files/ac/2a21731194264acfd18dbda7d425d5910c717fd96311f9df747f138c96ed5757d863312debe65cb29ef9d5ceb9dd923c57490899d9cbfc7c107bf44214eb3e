let _typescript_eslint_utils = require("@typescript-eslint/utils");
let node_path = require("node:path");
let node_module = require("node:module");
let _typescript_eslint_scope_manager = require("@typescript-eslint/scope-manager");

//#region package.json
var version = "1.6.16";

//#endregion
//#region src/utils/index.ts
const createEslintRule = _typescript_eslint_utils.ESLintUtils.RuleCreator((name) => `https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/${name}.md`);
const joinNames = (a, b) => a && b ? `${a}.${b}` : null;
const isFunction = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.FunctionExpression || node.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrowFunctionExpression;
function getNodeName(node) {
	if (isSupportedAccessor(node)) return getAccessorValue(node);
	switch (node.type) {
		case _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression: return getNodeName(node.tag);
		case _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression: return joinNames(getNodeName(node.object), getNodeName(node.property));
		case _typescript_eslint_utils.AST_NODE_TYPES.NewExpression:
		case _typescript_eslint_utils.AST_NODE_TYPES.CallExpression: return getNodeName(node.callee);
	}
	return null;
}
const isSupportedAccessor = (node, value) => {
	return isIdentifier(node, value) || isStringNode(node, value);
};
/**
* Checks if the given `node` is an `Identifier`.
*
* If a `name` is provided, & the `node` is an `Identifier`,
* the `name` will be compared to that of the `identifier`.
*/
const isIdentifier = (node, name) => {
	return node.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && (name === void 0 || node.name === name);
};
/**
* Checks if the given `node` is a `TemplateLiteral`.
*
* Complex `TemplateLiteral`s are not considered specific, and so will return `false`.
*
* If a `value` is provided & the `node` is a `TemplateLiteral`,
* the `value` will be compared to that of the `TemplateLiteral`.
*/
const isTemplateLiteral = (node, value) => {
	return node.type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral && node.quasis.length === 1 && (value === void 0 || node.quasis[0].value.raw === value);
};
/**
* Checks if the given `node` is a `StringLiteral`.
*
* If a `value` is provided & the `node` is a `StringLiteral`,
* the `value` will be compared to that of the `StringLiteral`.
*/
const isStringLiteral = (node, value) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof node.value === "string" && (value === void 0 || node.value === value);
/**
* Checks if the given `node` is a {@link StringNode}.
*/
const isStringNode = (node, specifics) => isStringLiteral(node, specifics) || isTemplateLiteral(node, specifics);
/**
* Gets the value of the given `AccessorNode`,
* account for the different node types.
*/
const getAccessorValue = (accessor) => accessor.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier ? accessor.name : getStringValue(accessor);
/**
* Gets the value of the given `StringNode`.
*
* If the `node` is a `TemplateLiteral`, the `raw` value is used;
* otherwise, `value` is returned instead.
*/
const getStringValue = (node) => node?.type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral ? node.quasis[0].value.raw : node?.value;
const replaceAccessorFixer = (fixer, node, text) => {
	return fixer.replaceText(node, node.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier ? text : `'${text}'`);
};
const removeExtraArgumentsFixer = (fixer, context, func, from) => {
	const firstArg = func.arguments[from];
	const lastArg = func.arguments[func.arguments.length - 1];
	const { sourceCode } = context;
	let tokenAfterLastParam = sourceCode.getTokenAfter(lastArg);
	if (tokenAfterLastParam.value === ",") tokenAfterLastParam = sourceCode.getTokenAfter(tokenAfterLastParam);
	return fixer.removeRange([firstArg.range[0], tokenAfterLastParam.range[0]]);
};
const isParsedInstanceOfMatcherCall = (expectFnCall, classArg) => {
	return getAccessorValue(expectFnCall.matcher) === "toBeInstanceOf" && expectFnCall.args.length === 1 && isSupportedAccessor(expectFnCall.args[0], classArg);
};

//#endregion
//#region src/utils/types.ts
let UtilName = /* @__PURE__ */ function(UtilName) {
	UtilName["vi"] = "vi";
	UtilName["vitest"] = "vitest";
	return UtilName;
}({});
let DescribeAlias = /* @__PURE__ */ function(DescribeAlias) {
	DescribeAlias["describe"] = "describe";
	DescribeAlias["fdescribe"] = "fdescribe";
	DescribeAlias["xdescribe"] = "xdescribe";
	return DescribeAlias;
}({});
let TestCaseName = /* @__PURE__ */ function(TestCaseName) {
	TestCaseName["fit"] = "fit";
	TestCaseName["it"] = "it";
	TestCaseName["test"] = "test";
	TestCaseName["xit"] = "xit";
	TestCaseName["xtest"] = "xtest";
	TestCaseName["bench"] = "bench";
	return TestCaseName;
}({});
let HookName = /* @__PURE__ */ function(HookName) {
	HookName["beforeAll"] = "beforeAll";
	HookName["beforeEach"] = "beforeEach";
	HookName["afterAll"] = "afterAll";
	HookName["afterEach"] = "afterEach";
	return HookName;
}({});
let ModifierName = /* @__PURE__ */ function(ModifierName) {
	ModifierName["to"] = "to";
	ModifierName["have"] = "have";
	ModifierName["not"] = "not";
	ModifierName["rejects"] = "rejects";
	ModifierName["resolves"] = "resolves";
	ModifierName["returns"] = "returns";
	ModifierName["branded"] = "branded";
	ModifierName["asserts"] = "asserts";
	ModifierName["constructorParameters"] = "constructorParameters";
	ModifierName["parameters"] = "parameters";
	ModifierName["thisParameter"] = "thisParameter";
	ModifierName["guards"] = "guards";
	ModifierName["instance"] = "instance";
	ModifierName["items"] = "items";
	return ModifierName;
}({});
let EqualityMatcher = /* @__PURE__ */ function(EqualityMatcher) {
	EqualityMatcher["toBe"] = "toBe";
	EqualityMatcher["toEqual"] = "toEqual";
	EqualityMatcher["toStrictEqual"] = "toStrictEqual";
	return EqualityMatcher;
}({});
function isClassOrFunctionType(type) {
	return type.getCallSignatures().length > 0 || type.getConstructSignatures().length > 0;
}

//#endregion
//#region src/utils/valid-vitest-fn-call-chains.ts
const ValidVitestFnCallChains = new Set([
	"beforeEach",
	"beforeAll",
	"afterEach",
	"afterAll",
	"it",
	"it.extend",
	"it.scoped",
	"it.skip",
	"it.only",
	"it.concurrent",
	"it.sequential",
	"it.todo",
	"it.fails",
	"it.skipIf",
	"it.runIf",
	"it.each",
	"it.for",
	"it.skip.only",
	"it.skip.concurrent",
	"it.skip.sequential",
	"it.skip.todo",
	"it.skip.fails",
	"it.only.skip",
	"it.only.concurrent",
	"it.only.sequential",
	"it.only.todo",
	"it.only.fails",
	"it.concurrent.skip",
	"it.concurrent.only",
	"it.concurrent.sequential",
	"it.concurrent.todo",
	"it.concurrent.fails",
	"it.sequential.skip",
	"it.sequential.only",
	"it.sequential.concurrent",
	"it.sequential.todo",
	"it.sequential.fails",
	"it.todo.skip",
	"it.todo.only",
	"it.todo.concurrent",
	"it.todo.sequential",
	"it.todo.fails",
	"it.fails.skip",
	"it.fails.only",
	"it.fails.concurrent",
	"it.fails.sequential",
	"it.fails.todo",
	"it.skipIf.skip",
	"it.skipIf.only",
	"it.skipIf.concurrent",
	"it.skipIf.sequential",
	"it.skipIf.todo",
	"it.skipIf.fails",
	"it.runIf.skip",
	"it.runIf.only",
	"it.runIf.concurrent",
	"it.runIf.sequential",
	"it.runIf.todo",
	"it.runIf.fails",
	"it.skip.each",
	"it.only.each",
	"it.concurrent.each",
	"it.sequential.each",
	"it.todo.each",
	"it.fails.each",
	"it.skip.for",
	"it.only.for",
	"it.concurrent.for",
	"it.sequential.for",
	"it.todo.for",
	"it.fails.for",
	"it.skipIf.each",
	"it.skipIf.for",
	"it.runIf.each",
	"it.runIf.for",
	"it.skip.only.concurrent",
	"it.skip.only.sequential",
	"it.skip.only.todo",
	"it.skip.only.fails",
	"it.skip.concurrent.only",
	"it.skip.concurrent.sequential",
	"it.skip.concurrent.todo",
	"it.skip.concurrent.fails",
	"it.skip.sequential.only",
	"it.skip.sequential.concurrent",
	"it.skip.sequential.todo",
	"it.skip.sequential.fails",
	"it.skip.todo.only",
	"it.skip.todo.concurrent",
	"it.skip.todo.sequential",
	"it.skip.todo.fails",
	"it.skip.fails.only",
	"it.skip.fails.concurrent",
	"it.skip.fails.sequential",
	"it.skip.fails.todo",
	"it.only.skip.concurrent",
	"it.only.skip.sequential",
	"it.only.skip.todo",
	"it.only.skip.fails",
	"it.only.concurrent.skip",
	"it.only.concurrent.sequential",
	"it.only.concurrent.todo",
	"it.only.concurrent.fails",
	"it.only.sequential.skip",
	"it.only.sequential.concurrent",
	"it.only.sequential.todo",
	"it.only.sequential.fails",
	"it.only.todo.skip",
	"it.only.todo.concurrent",
	"it.only.todo.sequential",
	"it.only.todo.fails",
	"it.only.fails.skip",
	"it.only.fails.concurrent",
	"it.only.fails.sequential",
	"it.only.fails.todo",
	"it.concurrent.skip.only",
	"it.concurrent.skip.sequential",
	"it.concurrent.skip.todo",
	"it.concurrent.skip.fails",
	"it.concurrent.only.skip",
	"it.concurrent.only.sequential",
	"it.concurrent.only.todo",
	"it.concurrent.only.fails",
	"it.concurrent.sequential.skip",
	"it.concurrent.sequential.only",
	"it.concurrent.sequential.todo",
	"it.concurrent.sequential.fails",
	"it.concurrent.todo.skip",
	"it.concurrent.todo.only",
	"it.concurrent.todo.sequential",
	"it.concurrent.todo.fails",
	"it.concurrent.fails.skip",
	"it.concurrent.fails.only",
	"it.concurrent.fails.sequential",
	"it.concurrent.fails.todo",
	"it.sequential.skip.only",
	"it.sequential.skip.concurrent",
	"it.sequential.skip.todo",
	"it.sequential.skip.fails",
	"it.sequential.only.skip",
	"it.sequential.only.concurrent",
	"it.sequential.only.todo",
	"it.sequential.only.fails",
	"it.sequential.concurrent.skip",
	"it.sequential.concurrent.only",
	"it.sequential.concurrent.todo",
	"it.sequential.concurrent.fails",
	"it.sequential.todo.skip",
	"it.sequential.todo.only",
	"it.sequential.todo.concurrent",
	"it.sequential.todo.fails",
	"it.sequential.fails.skip",
	"it.sequential.fails.only",
	"it.sequential.fails.concurrent",
	"it.sequential.fails.todo",
	"it.todo.skip.only",
	"it.todo.skip.concurrent",
	"it.todo.skip.sequential",
	"it.todo.skip.fails",
	"it.todo.only.skip",
	"it.todo.only.concurrent",
	"it.todo.only.sequential",
	"it.todo.only.fails",
	"it.todo.concurrent.skip",
	"it.todo.concurrent.only",
	"it.todo.concurrent.sequential",
	"it.todo.concurrent.fails",
	"it.todo.sequential.skip",
	"it.todo.sequential.only",
	"it.todo.sequential.concurrent",
	"it.todo.sequential.fails",
	"it.todo.fails.skip",
	"it.todo.fails.only",
	"it.todo.fails.concurrent",
	"it.todo.fails.sequential",
	"it.fails.skip.only",
	"it.fails.skip.concurrent",
	"it.fails.skip.sequential",
	"it.fails.skip.todo",
	"it.fails.only.skip",
	"it.fails.only.concurrent",
	"it.fails.only.sequential",
	"it.fails.only.todo",
	"it.fails.concurrent.skip",
	"it.fails.concurrent.only",
	"it.fails.concurrent.sequential",
	"it.fails.concurrent.todo",
	"it.fails.sequential.skip",
	"it.fails.sequential.only",
	"it.fails.sequential.concurrent",
	"it.fails.sequential.todo",
	"it.fails.todo.skip",
	"it.fails.todo.only",
	"it.fails.todo.concurrent",
	"it.fails.todo.sequential",
	"it.skipIf.skip.only",
	"it.skipIf.skip.concurrent",
	"it.skipIf.skip.sequential",
	"it.skipIf.skip.todo",
	"it.skipIf.skip.fails",
	"it.skipIf.only.skip",
	"it.skipIf.only.concurrent",
	"it.skipIf.only.sequential",
	"it.skipIf.only.todo",
	"it.skipIf.only.fails",
	"it.skipIf.concurrent.skip",
	"it.skipIf.concurrent.only",
	"it.skipIf.concurrent.sequential",
	"it.skipIf.concurrent.todo",
	"it.skipIf.concurrent.fails",
	"it.skipIf.sequential.skip",
	"it.skipIf.sequential.only",
	"it.skipIf.sequential.concurrent",
	"it.skipIf.sequential.todo",
	"it.skipIf.sequential.fails",
	"it.skipIf.todo.skip",
	"it.skipIf.todo.only",
	"it.skipIf.todo.concurrent",
	"it.skipIf.todo.sequential",
	"it.skipIf.todo.fails",
	"it.skipIf.fails.skip",
	"it.skipIf.fails.only",
	"it.skipIf.fails.concurrent",
	"it.skipIf.fails.sequential",
	"it.skipIf.fails.todo",
	"it.runIf.skip.only",
	"it.runIf.skip.concurrent",
	"it.runIf.skip.sequential",
	"it.runIf.skip.todo",
	"it.runIf.skip.fails",
	"it.runIf.only.skip",
	"it.runIf.only.concurrent",
	"it.runIf.only.sequential",
	"it.runIf.only.todo",
	"it.runIf.only.fails",
	"it.runIf.concurrent.skip",
	"it.runIf.concurrent.only",
	"it.runIf.concurrent.sequential",
	"it.runIf.concurrent.todo",
	"it.runIf.concurrent.fails",
	"it.runIf.sequential.skip",
	"it.runIf.sequential.only",
	"it.runIf.sequential.concurrent",
	"it.runIf.sequential.todo",
	"it.runIf.sequential.fails",
	"it.runIf.todo.skip",
	"it.runIf.todo.only",
	"it.runIf.todo.concurrent",
	"it.runIf.todo.sequential",
	"it.runIf.todo.fails",
	"it.runIf.fails.skip",
	"it.runIf.fails.only",
	"it.runIf.fails.concurrent",
	"it.runIf.fails.sequential",
	"it.runIf.fails.todo",
	"it.skip.only.each",
	"it.skip.concurrent.each",
	"it.skip.sequential.each",
	"it.skip.todo.each",
	"it.skip.fails.each",
	"it.only.skip.each",
	"it.only.concurrent.each",
	"it.only.sequential.each",
	"it.only.todo.each",
	"it.only.fails.each",
	"it.concurrent.skip.each",
	"it.concurrent.only.each",
	"it.concurrent.sequential.each",
	"it.concurrent.todo.each",
	"it.concurrent.fails.each",
	"it.sequential.skip.each",
	"it.sequential.only.each",
	"it.sequential.concurrent.each",
	"it.sequential.todo.each",
	"it.sequential.fails.each",
	"it.todo.skip.each",
	"it.todo.only.each",
	"it.todo.concurrent.each",
	"it.todo.sequential.each",
	"it.todo.fails.each",
	"it.fails.skip.each",
	"it.fails.only.each",
	"it.fails.concurrent.each",
	"it.fails.sequential.each",
	"it.fails.todo.each",
	"it.skip.only.for",
	"it.skip.concurrent.for",
	"it.skip.sequential.for",
	"it.skip.todo.for",
	"it.skip.fails.for",
	"it.only.skip.for",
	"it.only.concurrent.for",
	"it.only.sequential.for",
	"it.only.todo.for",
	"it.only.fails.for",
	"it.concurrent.skip.for",
	"it.concurrent.only.for",
	"it.concurrent.sequential.for",
	"it.concurrent.todo.for",
	"it.concurrent.fails.for",
	"it.sequential.skip.for",
	"it.sequential.only.for",
	"it.sequential.concurrent.for",
	"it.sequential.todo.for",
	"it.sequential.fails.for",
	"it.todo.skip.for",
	"it.todo.only.for",
	"it.todo.concurrent.for",
	"it.todo.sequential.for",
	"it.todo.fails.for",
	"it.fails.skip.for",
	"it.fails.only.for",
	"it.fails.concurrent.for",
	"it.fails.sequential.for",
	"it.fails.todo.for",
	"it.skipIf.skip.each",
	"it.skipIf.only.each",
	"it.skipIf.concurrent.each",
	"it.skipIf.sequential.each",
	"it.skipIf.todo.each",
	"it.skipIf.fails.each",
	"it.skipIf.skip.for",
	"it.skipIf.only.for",
	"it.skipIf.concurrent.for",
	"it.skipIf.sequential.for",
	"it.skipIf.todo.for",
	"it.skipIf.fails.for",
	"it.runIf.skip.each",
	"it.runIf.only.each",
	"it.runIf.concurrent.each",
	"it.runIf.sequential.each",
	"it.runIf.todo.each",
	"it.runIf.fails.each",
	"it.runIf.skip.for",
	"it.runIf.only.for",
	"it.runIf.concurrent.for",
	"it.runIf.sequential.for",
	"it.runIf.todo.for",
	"it.runIf.fails.for",
	"test",
	"test.extend",
	"test.scoped",
	"test.skip",
	"test.only",
	"test.concurrent",
	"test.sequential",
	"test.todo",
	"test.fails",
	"test.skipIf",
	"test.runIf",
	"test.each",
	"test.for",
	"test.skip.only",
	"test.skip.concurrent",
	"test.skip.sequential",
	"test.skip.todo",
	"test.skip.fails",
	"test.only.skip",
	"test.only.concurrent",
	"test.only.sequential",
	"test.only.todo",
	"test.only.fails",
	"test.concurrent.skip",
	"test.concurrent.only",
	"test.concurrent.sequential",
	"test.concurrent.todo",
	"test.concurrent.fails",
	"test.sequential.skip",
	"test.sequential.only",
	"test.sequential.concurrent",
	"test.sequential.todo",
	"test.sequential.fails",
	"test.todo.skip",
	"test.todo.only",
	"test.todo.concurrent",
	"test.todo.sequential",
	"test.todo.fails",
	"test.fails.skip",
	"test.fails.only",
	"test.fails.concurrent",
	"test.fails.sequential",
	"test.fails.todo",
	"test.skipIf.skip",
	"test.skipIf.only",
	"test.skipIf.concurrent",
	"test.skipIf.sequential",
	"test.skipIf.todo",
	"test.skipIf.fails",
	"test.runIf.skip",
	"test.runIf.only",
	"test.runIf.concurrent",
	"test.runIf.sequential",
	"test.runIf.todo",
	"test.runIf.fails",
	"test.skip.each",
	"test.only.each",
	"test.concurrent.each",
	"test.sequential.each",
	"test.todo.each",
	"test.fails.each",
	"test.skip.for",
	"test.only.for",
	"test.concurrent.for",
	"test.sequential.for",
	"test.todo.for",
	"test.fails.for",
	"test.skipIf.each",
	"test.skipIf.for",
	"test.runIf.each",
	"test.runIf.for",
	"test.skip.only.concurrent",
	"test.skip.only.sequential",
	"test.skip.only.todo",
	"test.skip.only.fails",
	"test.skip.concurrent.only",
	"test.skip.concurrent.sequential",
	"test.skip.concurrent.todo",
	"test.skip.concurrent.fails",
	"test.skip.sequential.only",
	"test.skip.sequential.concurrent",
	"test.skip.sequential.todo",
	"test.skip.sequential.fails",
	"test.skip.todo.only",
	"test.skip.todo.concurrent",
	"test.skip.todo.sequential",
	"test.skip.todo.fails",
	"test.skip.fails.only",
	"test.skip.fails.concurrent",
	"test.skip.fails.sequential",
	"test.skip.fails.todo",
	"test.only.skip.concurrent",
	"test.only.skip.sequential",
	"test.only.skip.todo",
	"test.only.skip.fails",
	"test.only.concurrent.skip",
	"test.only.concurrent.sequential",
	"test.only.concurrent.todo",
	"test.only.concurrent.fails",
	"test.only.sequential.skip",
	"test.only.sequential.concurrent",
	"test.only.sequential.todo",
	"test.only.sequential.fails",
	"test.only.todo.skip",
	"test.only.todo.concurrent",
	"test.only.todo.sequential",
	"test.only.todo.fails",
	"test.only.fails.skip",
	"test.only.fails.concurrent",
	"test.only.fails.sequential",
	"test.only.fails.todo",
	"test.concurrent.skip.only",
	"test.concurrent.skip.sequential",
	"test.concurrent.skip.todo",
	"test.concurrent.skip.fails",
	"test.concurrent.only.skip",
	"test.concurrent.only.sequential",
	"test.concurrent.only.todo",
	"test.concurrent.only.fails",
	"test.concurrent.sequential.skip",
	"test.concurrent.sequential.only",
	"test.concurrent.sequential.todo",
	"test.concurrent.sequential.fails",
	"test.concurrent.todo.skip",
	"test.concurrent.todo.only",
	"test.concurrent.todo.sequential",
	"test.concurrent.todo.fails",
	"test.concurrent.fails.skip",
	"test.concurrent.fails.only",
	"test.concurrent.fails.sequential",
	"test.concurrent.fails.todo",
	"test.sequential.skip.only",
	"test.sequential.skip.concurrent",
	"test.sequential.skip.todo",
	"test.sequential.skip.fails",
	"test.sequential.only.skip",
	"test.sequential.only.concurrent",
	"test.sequential.only.todo",
	"test.sequential.only.fails",
	"test.sequential.concurrent.skip",
	"test.sequential.concurrent.only",
	"test.sequential.concurrent.todo",
	"test.sequential.concurrent.fails",
	"test.sequential.todo.skip",
	"test.sequential.todo.only",
	"test.sequential.todo.concurrent",
	"test.sequential.todo.fails",
	"test.sequential.fails.skip",
	"test.sequential.fails.only",
	"test.sequential.fails.concurrent",
	"test.sequential.fails.todo",
	"test.todo.skip.only",
	"test.todo.skip.concurrent",
	"test.todo.skip.sequential",
	"test.todo.skip.fails",
	"test.todo.only.skip",
	"test.todo.only.concurrent",
	"test.todo.only.sequential",
	"test.todo.only.fails",
	"test.todo.concurrent.skip",
	"test.todo.concurrent.only",
	"test.todo.concurrent.sequential",
	"test.todo.concurrent.fails",
	"test.todo.sequential.skip",
	"test.todo.sequential.only",
	"test.todo.sequential.concurrent",
	"test.todo.sequential.fails",
	"test.todo.fails.skip",
	"test.todo.fails.only",
	"test.todo.fails.concurrent",
	"test.todo.fails.sequential",
	"test.fails.skip.only",
	"test.fails.skip.concurrent",
	"test.fails.skip.sequential",
	"test.fails.skip.todo",
	"test.fails.only.skip",
	"test.fails.only.concurrent",
	"test.fails.only.sequential",
	"test.fails.only.todo",
	"test.fails.concurrent.skip",
	"test.fails.concurrent.only",
	"test.fails.concurrent.sequential",
	"test.fails.concurrent.todo",
	"test.fails.sequential.skip",
	"test.fails.sequential.only",
	"test.fails.sequential.concurrent",
	"test.fails.sequential.todo",
	"test.fails.todo.skip",
	"test.fails.todo.only",
	"test.fails.todo.concurrent",
	"test.fails.todo.sequential",
	"test.skipIf.skip.only",
	"test.skipIf.skip.concurrent",
	"test.skipIf.skip.sequential",
	"test.skipIf.skip.todo",
	"test.skipIf.skip.fails",
	"test.skipIf.only.skip",
	"test.skipIf.only.concurrent",
	"test.skipIf.only.sequential",
	"test.skipIf.only.todo",
	"test.skipIf.only.fails",
	"test.skipIf.concurrent.skip",
	"test.skipIf.concurrent.only",
	"test.skipIf.concurrent.sequential",
	"test.skipIf.concurrent.todo",
	"test.skipIf.concurrent.fails",
	"test.skipIf.sequential.skip",
	"test.skipIf.sequential.only",
	"test.skipIf.sequential.concurrent",
	"test.skipIf.sequential.todo",
	"test.skipIf.sequential.fails",
	"test.skipIf.todo.skip",
	"test.skipIf.todo.only",
	"test.skipIf.todo.concurrent",
	"test.skipIf.todo.sequential",
	"test.skipIf.todo.fails",
	"test.skipIf.fails.skip",
	"test.skipIf.fails.only",
	"test.skipIf.fails.concurrent",
	"test.skipIf.fails.sequential",
	"test.skipIf.fails.todo",
	"test.runIf.skip.only",
	"test.runIf.skip.concurrent",
	"test.runIf.skip.sequential",
	"test.runIf.skip.todo",
	"test.runIf.skip.fails",
	"test.runIf.only.skip",
	"test.runIf.only.concurrent",
	"test.runIf.only.sequential",
	"test.runIf.only.todo",
	"test.runIf.only.fails",
	"test.runIf.concurrent.skip",
	"test.runIf.concurrent.only",
	"test.runIf.concurrent.sequential",
	"test.runIf.concurrent.todo",
	"test.runIf.concurrent.fails",
	"test.runIf.sequential.skip",
	"test.runIf.sequential.only",
	"test.runIf.sequential.concurrent",
	"test.runIf.sequential.todo",
	"test.runIf.sequential.fails",
	"test.runIf.todo.skip",
	"test.runIf.todo.only",
	"test.runIf.todo.concurrent",
	"test.runIf.todo.sequential",
	"test.runIf.todo.fails",
	"test.runIf.fails.skip",
	"test.runIf.fails.only",
	"test.runIf.fails.concurrent",
	"test.runIf.fails.sequential",
	"test.runIf.fails.todo",
	"test.skip.only.each",
	"test.skip.concurrent.each",
	"test.skip.sequential.each",
	"test.skip.todo.each",
	"test.skip.fails.each",
	"test.only.skip.each",
	"test.only.concurrent.each",
	"test.only.sequential.each",
	"test.only.todo.each",
	"test.only.fails.each",
	"test.concurrent.skip.each",
	"test.concurrent.only.each",
	"test.concurrent.sequential.each",
	"test.concurrent.todo.each",
	"test.concurrent.fails.each",
	"test.sequential.skip.each",
	"test.sequential.only.each",
	"test.sequential.concurrent.each",
	"test.sequential.todo.each",
	"test.sequential.fails.each",
	"test.todo.skip.each",
	"test.todo.only.each",
	"test.todo.concurrent.each",
	"test.todo.sequential.each",
	"test.todo.fails.each",
	"test.fails.skip.each",
	"test.fails.only.each",
	"test.fails.concurrent.each",
	"test.fails.sequential.each",
	"test.fails.todo.each",
	"test.skip.only.for",
	"test.skip.concurrent.for",
	"test.skip.sequential.for",
	"test.skip.todo.for",
	"test.skip.fails.for",
	"test.only.skip.for",
	"test.only.concurrent.for",
	"test.only.sequential.for",
	"test.only.todo.for",
	"test.only.fails.for",
	"test.concurrent.skip.for",
	"test.concurrent.only.for",
	"test.concurrent.sequential.for",
	"test.concurrent.todo.for",
	"test.concurrent.fails.for",
	"test.sequential.skip.for",
	"test.sequential.only.for",
	"test.sequential.concurrent.for",
	"test.sequential.todo.for",
	"test.sequential.fails.for",
	"test.todo.skip.for",
	"test.todo.only.for",
	"test.todo.concurrent.for",
	"test.todo.sequential.for",
	"test.todo.fails.for",
	"test.fails.skip.for",
	"test.fails.only.for",
	"test.fails.concurrent.for",
	"test.fails.sequential.for",
	"test.fails.todo.for",
	"test.skipIf.skip.each",
	"test.skipIf.only.each",
	"test.skipIf.concurrent.each",
	"test.skipIf.sequential.each",
	"test.skipIf.todo.each",
	"test.skipIf.fails.each",
	"test.skipIf.skip.for",
	"test.skipIf.only.for",
	"test.skipIf.concurrent.for",
	"test.skipIf.sequential.for",
	"test.skipIf.todo.for",
	"test.skipIf.fails.for",
	"test.runIf.skip.each",
	"test.runIf.only.each",
	"test.runIf.concurrent.each",
	"test.runIf.sequential.each",
	"test.runIf.todo.each",
	"test.runIf.fails.each",
	"test.runIf.skip.for",
	"test.runIf.only.for",
	"test.runIf.concurrent.for",
	"test.runIf.sequential.for",
	"test.runIf.todo.for",
	"test.runIf.fails.for",
	"bench",
	"bench.skip",
	"bench.only",
	"bench.todo",
	"bench.skipIf",
	"bench.runIf",
	"bench.skip.only",
	"bench.skip.todo",
	"bench.only.skip",
	"bench.only.todo",
	"bench.todo.skip",
	"bench.todo.only",
	"bench.skipIf.skip",
	"bench.skipIf.only",
	"bench.skipIf.todo",
	"bench.runIf.skip",
	"bench.runIf.only",
	"bench.runIf.todo",
	"bench.skip.only.todo",
	"bench.skip.todo.only",
	"bench.only.skip.todo",
	"bench.only.todo.skip",
	"bench.todo.skip.only",
	"bench.todo.only.skip",
	"bench.skipIf.skip.only",
	"bench.skipIf.skip.todo",
	"bench.skipIf.only.skip",
	"bench.skipIf.only.todo",
	"bench.skipIf.todo.skip",
	"bench.skipIf.todo.only",
	"bench.runIf.skip.only",
	"bench.runIf.skip.todo",
	"bench.runIf.only.skip",
	"bench.runIf.only.todo",
	"bench.runIf.todo.skip",
	"bench.runIf.todo.only",
	"describe",
	"describe.skip",
	"describe.only",
	"describe.concurrent",
	"describe.sequential",
	"describe.shuffle",
	"describe.todo",
	"describe.skipIf",
	"describe.runIf",
	"describe.each",
	"describe.for",
	"describe.skip.only",
	"describe.skip.concurrent",
	"describe.skip.sequential",
	"describe.skip.shuffle",
	"describe.skip.todo",
	"describe.only.skip",
	"describe.only.concurrent",
	"describe.only.sequential",
	"describe.only.shuffle",
	"describe.only.todo",
	"describe.concurrent.skip",
	"describe.concurrent.only",
	"describe.concurrent.sequential",
	"describe.concurrent.shuffle",
	"describe.concurrent.todo",
	"describe.sequential.skip",
	"describe.sequential.only",
	"describe.sequential.concurrent",
	"describe.sequential.shuffle",
	"describe.sequential.todo",
	"describe.shuffle.skip",
	"describe.shuffle.only",
	"describe.shuffle.concurrent",
	"describe.shuffle.sequential",
	"describe.shuffle.todo",
	"describe.todo.skip",
	"describe.todo.only",
	"describe.todo.concurrent",
	"describe.todo.sequential",
	"describe.todo.shuffle",
	"describe.skipIf.skip",
	"describe.skipIf.only",
	"describe.skipIf.concurrent",
	"describe.skipIf.sequential",
	"describe.skipIf.shuffle",
	"describe.skipIf.todo",
	"describe.runIf.skip",
	"describe.runIf.only",
	"describe.runIf.concurrent",
	"describe.runIf.sequential",
	"describe.runIf.shuffle",
	"describe.runIf.todo",
	"describe.skip.each",
	"describe.only.each",
	"describe.concurrent.each",
	"describe.sequential.each",
	"describe.shuffle.each",
	"describe.todo.each",
	"describe.skip.for",
	"describe.only.for",
	"describe.concurrent.for",
	"describe.sequential.for",
	"describe.shuffle.for",
	"describe.todo.for",
	"describe.skipIf.each",
	"describe.skipIf.for",
	"describe.runIf.each",
	"describe.runIf.for",
	"describe.skip.only.concurrent",
	"describe.skip.only.sequential",
	"describe.skip.only.shuffle",
	"describe.skip.only.todo",
	"describe.skip.concurrent.only",
	"describe.skip.concurrent.sequential",
	"describe.skip.concurrent.shuffle",
	"describe.skip.concurrent.todo",
	"describe.skip.sequential.only",
	"describe.skip.sequential.concurrent",
	"describe.skip.sequential.shuffle",
	"describe.skip.sequential.todo",
	"describe.skip.shuffle.only",
	"describe.skip.shuffle.concurrent",
	"describe.skip.shuffle.sequential",
	"describe.skip.shuffle.todo",
	"describe.skip.todo.only",
	"describe.skip.todo.concurrent",
	"describe.skip.todo.sequential",
	"describe.skip.todo.shuffle",
	"describe.only.skip.concurrent",
	"describe.only.skip.sequential",
	"describe.only.skip.shuffle",
	"describe.only.skip.todo",
	"describe.only.concurrent.skip",
	"describe.only.concurrent.sequential",
	"describe.only.concurrent.shuffle",
	"describe.only.concurrent.todo",
	"describe.only.sequential.skip",
	"describe.only.sequential.concurrent",
	"describe.only.sequential.shuffle",
	"describe.only.sequential.todo",
	"describe.only.shuffle.skip",
	"describe.only.shuffle.concurrent",
	"describe.only.shuffle.sequential",
	"describe.only.shuffle.todo",
	"describe.only.todo.skip",
	"describe.only.todo.concurrent",
	"describe.only.todo.sequential",
	"describe.only.todo.shuffle",
	"describe.concurrent.skip.only",
	"describe.concurrent.skip.sequential",
	"describe.concurrent.skip.shuffle",
	"describe.concurrent.skip.todo",
	"describe.concurrent.only.skip",
	"describe.concurrent.only.sequential",
	"describe.concurrent.only.shuffle",
	"describe.concurrent.only.todo",
	"describe.concurrent.sequential.skip",
	"describe.concurrent.sequential.only",
	"describe.concurrent.sequential.shuffle",
	"describe.concurrent.sequential.todo",
	"describe.concurrent.shuffle.skip",
	"describe.concurrent.shuffle.only",
	"describe.concurrent.shuffle.sequential",
	"describe.concurrent.shuffle.todo",
	"describe.concurrent.todo.skip",
	"describe.concurrent.todo.only",
	"describe.concurrent.todo.sequential",
	"describe.concurrent.todo.shuffle",
	"describe.sequential.skip.only",
	"describe.sequential.skip.concurrent",
	"describe.sequential.skip.shuffle",
	"describe.sequential.skip.todo",
	"describe.sequential.only.skip",
	"describe.sequential.only.concurrent",
	"describe.sequential.only.shuffle",
	"describe.sequential.only.todo",
	"describe.sequential.concurrent.skip",
	"describe.sequential.concurrent.only",
	"describe.sequential.concurrent.shuffle",
	"describe.sequential.concurrent.todo",
	"describe.sequential.shuffle.skip",
	"describe.sequential.shuffle.only",
	"describe.sequential.shuffle.concurrent",
	"describe.sequential.shuffle.todo",
	"describe.sequential.todo.skip",
	"describe.sequential.todo.only",
	"describe.sequential.todo.concurrent",
	"describe.sequential.todo.shuffle",
	"describe.shuffle.skip.only",
	"describe.shuffle.skip.concurrent",
	"describe.shuffle.skip.sequential",
	"describe.shuffle.skip.todo",
	"describe.shuffle.only.skip",
	"describe.shuffle.only.concurrent",
	"describe.shuffle.only.sequential",
	"describe.shuffle.only.todo",
	"describe.shuffle.concurrent.skip",
	"describe.shuffle.concurrent.only",
	"describe.shuffle.concurrent.sequential",
	"describe.shuffle.concurrent.todo",
	"describe.shuffle.sequential.skip",
	"describe.shuffle.sequential.only",
	"describe.shuffle.sequential.concurrent",
	"describe.shuffle.sequential.todo",
	"describe.shuffle.todo.skip",
	"describe.shuffle.todo.only",
	"describe.shuffle.todo.concurrent",
	"describe.shuffle.todo.sequential",
	"describe.todo.skip.only",
	"describe.todo.skip.concurrent",
	"describe.todo.skip.sequential",
	"describe.todo.skip.shuffle",
	"describe.todo.only.skip",
	"describe.todo.only.concurrent",
	"describe.todo.only.sequential",
	"describe.todo.only.shuffle",
	"describe.todo.concurrent.skip",
	"describe.todo.concurrent.only",
	"describe.todo.concurrent.sequential",
	"describe.todo.concurrent.shuffle",
	"describe.todo.sequential.skip",
	"describe.todo.sequential.only",
	"describe.todo.sequential.concurrent",
	"describe.todo.sequential.shuffle",
	"describe.todo.shuffle.skip",
	"describe.todo.shuffle.only",
	"describe.todo.shuffle.concurrent",
	"describe.todo.shuffle.sequential",
	"describe.skipIf.skip.only",
	"describe.skipIf.skip.concurrent",
	"describe.skipIf.skip.sequential",
	"describe.skipIf.skip.shuffle",
	"describe.skipIf.skip.todo",
	"describe.skipIf.only.skip",
	"describe.skipIf.only.concurrent",
	"describe.skipIf.only.sequential",
	"describe.skipIf.only.shuffle",
	"describe.skipIf.only.todo",
	"describe.skipIf.concurrent.skip",
	"describe.skipIf.concurrent.only",
	"describe.skipIf.concurrent.sequential",
	"describe.skipIf.concurrent.shuffle",
	"describe.skipIf.concurrent.todo",
	"describe.skipIf.sequential.skip",
	"describe.skipIf.sequential.only",
	"describe.skipIf.sequential.concurrent",
	"describe.skipIf.sequential.shuffle",
	"describe.skipIf.sequential.todo",
	"describe.skipIf.shuffle.skip",
	"describe.skipIf.shuffle.only",
	"describe.skipIf.shuffle.concurrent",
	"describe.skipIf.shuffle.sequential",
	"describe.skipIf.shuffle.todo",
	"describe.skipIf.todo.skip",
	"describe.skipIf.todo.only",
	"describe.skipIf.todo.concurrent",
	"describe.skipIf.todo.sequential",
	"describe.skipIf.todo.shuffle",
	"describe.runIf.skip.only",
	"describe.runIf.skip.concurrent",
	"describe.runIf.skip.sequential",
	"describe.runIf.skip.shuffle",
	"describe.runIf.skip.todo",
	"describe.runIf.only.skip",
	"describe.runIf.only.concurrent",
	"describe.runIf.only.sequential",
	"describe.runIf.only.shuffle",
	"describe.runIf.only.todo",
	"describe.runIf.concurrent.skip",
	"describe.runIf.concurrent.only",
	"describe.runIf.concurrent.sequential",
	"describe.runIf.concurrent.shuffle",
	"describe.runIf.concurrent.todo",
	"describe.runIf.sequential.skip",
	"describe.runIf.sequential.only",
	"describe.runIf.sequential.concurrent",
	"describe.runIf.sequential.shuffle",
	"describe.runIf.sequential.todo",
	"describe.runIf.shuffle.skip",
	"describe.runIf.shuffle.only",
	"describe.runIf.shuffle.concurrent",
	"describe.runIf.shuffle.sequential",
	"describe.runIf.shuffle.todo",
	"describe.runIf.todo.skip",
	"describe.runIf.todo.only",
	"describe.runIf.todo.concurrent",
	"describe.runIf.todo.sequential",
	"describe.runIf.todo.shuffle",
	"describe.skip.only.each",
	"describe.skip.concurrent.each",
	"describe.skip.sequential.each",
	"describe.skip.shuffle.each",
	"describe.skip.todo.each",
	"describe.only.skip.each",
	"describe.only.concurrent.each",
	"describe.only.sequential.each",
	"describe.only.shuffle.each",
	"describe.only.todo.each",
	"describe.concurrent.skip.each",
	"describe.concurrent.only.each",
	"describe.concurrent.sequential.each",
	"describe.concurrent.shuffle.each",
	"describe.concurrent.todo.each",
	"describe.sequential.skip.each",
	"describe.sequential.only.each",
	"describe.sequential.concurrent.each",
	"describe.sequential.shuffle.each",
	"describe.sequential.todo.each",
	"describe.shuffle.skip.each",
	"describe.shuffle.only.each",
	"describe.shuffle.concurrent.each",
	"describe.shuffle.sequential.each",
	"describe.shuffle.todo.each",
	"describe.todo.skip.each",
	"describe.todo.only.each",
	"describe.todo.concurrent.each",
	"describe.todo.sequential.each",
	"describe.todo.shuffle.each",
	"describe.skip.only.for",
	"describe.skip.concurrent.for",
	"describe.skip.sequential.for",
	"describe.skip.shuffle.for",
	"describe.skip.todo.for",
	"describe.only.skip.for",
	"describe.only.concurrent.for",
	"describe.only.sequential.for",
	"describe.only.shuffle.for",
	"describe.only.todo.for",
	"describe.concurrent.skip.for",
	"describe.concurrent.only.for",
	"describe.concurrent.sequential.for",
	"describe.concurrent.shuffle.for",
	"describe.concurrent.todo.for",
	"describe.sequential.skip.for",
	"describe.sequential.only.for",
	"describe.sequential.concurrent.for",
	"describe.sequential.shuffle.for",
	"describe.sequential.todo.for",
	"describe.shuffle.skip.for",
	"describe.shuffle.only.for",
	"describe.shuffle.concurrent.for",
	"describe.shuffle.sequential.for",
	"describe.shuffle.todo.for",
	"describe.todo.skip.for",
	"describe.todo.only.for",
	"describe.todo.concurrent.for",
	"describe.todo.sequential.for",
	"describe.todo.shuffle.for",
	"describe.skipIf.skip.each",
	"describe.skipIf.only.each",
	"describe.skipIf.concurrent.each",
	"describe.skipIf.sequential.each",
	"describe.skipIf.shuffle.each",
	"describe.skipIf.todo.each",
	"describe.skipIf.skip.for",
	"describe.skipIf.only.for",
	"describe.skipIf.concurrent.for",
	"describe.skipIf.sequential.for",
	"describe.skipIf.shuffle.for",
	"describe.skipIf.todo.for",
	"describe.runIf.skip.each",
	"describe.runIf.only.each",
	"describe.runIf.concurrent.each",
	"describe.runIf.sequential.each",
	"describe.runIf.shuffle.each",
	"describe.runIf.todo.each",
	"describe.runIf.skip.for",
	"describe.runIf.only.for",
	"describe.runIf.concurrent.for",
	"describe.runIf.sequential.for",
	"describe.runIf.shuffle.for",
	"describe.runIf.todo.for",
	"suite",
	"suite.skip",
	"suite.only",
	"suite.concurrent",
	"suite.sequential",
	"suite.shuffle",
	"suite.todo",
	"suite.skipIf",
	"suite.runIf",
	"suite.each",
	"suite.for",
	"suite.skip.only",
	"suite.skip.concurrent",
	"suite.skip.sequential",
	"suite.skip.shuffle",
	"suite.skip.todo",
	"suite.only.skip",
	"suite.only.concurrent",
	"suite.only.sequential",
	"suite.only.shuffle",
	"suite.only.todo",
	"suite.concurrent.skip",
	"suite.concurrent.only",
	"suite.concurrent.sequential",
	"suite.concurrent.shuffle",
	"suite.concurrent.todo",
	"suite.sequential.skip",
	"suite.sequential.only",
	"suite.sequential.concurrent",
	"suite.sequential.shuffle",
	"suite.sequential.todo",
	"suite.shuffle.skip",
	"suite.shuffle.only",
	"suite.shuffle.concurrent",
	"suite.shuffle.sequential",
	"suite.shuffle.todo",
	"suite.todo.skip",
	"suite.todo.only",
	"suite.todo.concurrent",
	"suite.todo.sequential",
	"suite.todo.shuffle",
	"suite.skipIf.skip",
	"suite.skipIf.only",
	"suite.skipIf.concurrent",
	"suite.skipIf.sequential",
	"suite.skipIf.shuffle",
	"suite.skipIf.todo",
	"suite.runIf.skip",
	"suite.runIf.only",
	"suite.runIf.concurrent",
	"suite.runIf.sequential",
	"suite.runIf.shuffle",
	"suite.runIf.todo",
	"suite.skip.each",
	"suite.only.each",
	"suite.concurrent.each",
	"suite.sequential.each",
	"suite.shuffle.each",
	"suite.todo.each",
	"suite.skip.for",
	"suite.only.for",
	"suite.concurrent.for",
	"suite.sequential.for",
	"suite.shuffle.for",
	"suite.todo.for",
	"suite.skipIf.each",
	"suite.skipIf.for",
	"suite.runIf.each",
	"suite.runIf.for",
	"suite.skip.only.concurrent",
	"suite.skip.only.sequential",
	"suite.skip.only.shuffle",
	"suite.skip.only.todo",
	"suite.skip.concurrent.only",
	"suite.skip.concurrent.sequential",
	"suite.skip.concurrent.shuffle",
	"suite.skip.concurrent.todo",
	"suite.skip.sequential.only",
	"suite.skip.sequential.concurrent",
	"suite.skip.sequential.shuffle",
	"suite.skip.sequential.todo",
	"suite.skip.shuffle.only",
	"suite.skip.shuffle.concurrent",
	"suite.skip.shuffle.sequential",
	"suite.skip.shuffle.todo",
	"suite.skip.todo.only",
	"suite.skip.todo.concurrent",
	"suite.skip.todo.sequential",
	"suite.skip.todo.shuffle",
	"suite.only.skip.concurrent",
	"suite.only.skip.sequential",
	"suite.only.skip.shuffle",
	"suite.only.skip.todo",
	"suite.only.concurrent.skip",
	"suite.only.concurrent.sequential",
	"suite.only.concurrent.shuffle",
	"suite.only.concurrent.todo",
	"suite.only.sequential.skip",
	"suite.only.sequential.concurrent",
	"suite.only.sequential.shuffle",
	"suite.only.sequential.todo",
	"suite.only.shuffle.skip",
	"suite.only.shuffle.concurrent",
	"suite.only.shuffle.sequential",
	"suite.only.shuffle.todo",
	"suite.only.todo.skip",
	"suite.only.todo.concurrent",
	"suite.only.todo.sequential",
	"suite.only.todo.shuffle",
	"suite.concurrent.skip.only",
	"suite.concurrent.skip.sequential",
	"suite.concurrent.skip.shuffle",
	"suite.concurrent.skip.todo",
	"suite.concurrent.only.skip",
	"suite.concurrent.only.sequential",
	"suite.concurrent.only.shuffle",
	"suite.concurrent.only.todo",
	"suite.concurrent.sequential.skip",
	"suite.concurrent.sequential.only",
	"suite.concurrent.sequential.shuffle",
	"suite.concurrent.sequential.todo",
	"suite.concurrent.shuffle.skip",
	"suite.concurrent.shuffle.only",
	"suite.concurrent.shuffle.sequential",
	"suite.concurrent.shuffle.todo",
	"suite.concurrent.todo.skip",
	"suite.concurrent.todo.only",
	"suite.concurrent.todo.sequential",
	"suite.concurrent.todo.shuffle",
	"suite.sequential.skip.only",
	"suite.sequential.skip.concurrent",
	"suite.sequential.skip.shuffle",
	"suite.sequential.skip.todo",
	"suite.sequential.only.skip",
	"suite.sequential.only.concurrent",
	"suite.sequential.only.shuffle",
	"suite.sequential.only.todo",
	"suite.sequential.concurrent.skip",
	"suite.sequential.concurrent.only",
	"suite.sequential.concurrent.shuffle",
	"suite.sequential.concurrent.todo",
	"suite.sequential.shuffle.skip",
	"suite.sequential.shuffle.only",
	"suite.sequential.shuffle.concurrent",
	"suite.sequential.shuffle.todo",
	"suite.sequential.todo.skip",
	"suite.sequential.todo.only",
	"suite.sequential.todo.concurrent",
	"suite.sequential.todo.shuffle",
	"suite.shuffle.skip.only",
	"suite.shuffle.skip.concurrent",
	"suite.shuffle.skip.sequential",
	"suite.shuffle.skip.todo",
	"suite.shuffle.only.skip",
	"suite.shuffle.only.concurrent",
	"suite.shuffle.only.sequential",
	"suite.shuffle.only.todo",
	"suite.shuffle.concurrent.skip",
	"suite.shuffle.concurrent.only",
	"suite.shuffle.concurrent.sequential",
	"suite.shuffle.concurrent.todo",
	"suite.shuffle.sequential.skip",
	"suite.shuffle.sequential.only",
	"suite.shuffle.sequential.concurrent",
	"suite.shuffle.sequential.todo",
	"suite.shuffle.todo.skip",
	"suite.shuffle.todo.only",
	"suite.shuffle.todo.concurrent",
	"suite.shuffle.todo.sequential",
	"suite.todo.skip.only",
	"suite.todo.skip.concurrent",
	"suite.todo.skip.sequential",
	"suite.todo.skip.shuffle",
	"suite.todo.only.skip",
	"suite.todo.only.concurrent",
	"suite.todo.only.sequential",
	"suite.todo.only.shuffle",
	"suite.todo.concurrent.skip",
	"suite.todo.concurrent.only",
	"suite.todo.concurrent.sequential",
	"suite.todo.concurrent.shuffle",
	"suite.todo.sequential.skip",
	"suite.todo.sequential.only",
	"suite.todo.sequential.concurrent",
	"suite.todo.sequential.shuffle",
	"suite.todo.shuffle.skip",
	"suite.todo.shuffle.only",
	"suite.todo.shuffle.concurrent",
	"suite.todo.shuffle.sequential",
	"suite.skipIf.skip.only",
	"suite.skipIf.skip.concurrent",
	"suite.skipIf.skip.sequential",
	"suite.skipIf.skip.shuffle",
	"suite.skipIf.skip.todo",
	"suite.skipIf.only.skip",
	"suite.skipIf.only.concurrent",
	"suite.skipIf.only.sequential",
	"suite.skipIf.only.shuffle",
	"suite.skipIf.only.todo",
	"suite.skipIf.concurrent.skip",
	"suite.skipIf.concurrent.only",
	"suite.skipIf.concurrent.sequential",
	"suite.skipIf.concurrent.shuffle",
	"suite.skipIf.concurrent.todo",
	"suite.skipIf.sequential.skip",
	"suite.skipIf.sequential.only",
	"suite.skipIf.sequential.concurrent",
	"suite.skipIf.sequential.shuffle",
	"suite.skipIf.sequential.todo",
	"suite.skipIf.shuffle.skip",
	"suite.skipIf.shuffle.only",
	"suite.skipIf.shuffle.concurrent",
	"suite.skipIf.shuffle.sequential",
	"suite.skipIf.shuffle.todo",
	"suite.skipIf.todo.skip",
	"suite.skipIf.todo.only",
	"suite.skipIf.todo.concurrent",
	"suite.skipIf.todo.sequential",
	"suite.skipIf.todo.shuffle",
	"suite.runIf.skip.only",
	"suite.runIf.skip.concurrent",
	"suite.runIf.skip.sequential",
	"suite.runIf.skip.shuffle",
	"suite.runIf.skip.todo",
	"suite.runIf.only.skip",
	"suite.runIf.only.concurrent",
	"suite.runIf.only.sequential",
	"suite.runIf.only.shuffle",
	"suite.runIf.only.todo",
	"suite.runIf.concurrent.skip",
	"suite.runIf.concurrent.only",
	"suite.runIf.concurrent.sequential",
	"suite.runIf.concurrent.shuffle",
	"suite.runIf.concurrent.todo",
	"suite.runIf.sequential.skip",
	"suite.runIf.sequential.only",
	"suite.runIf.sequential.concurrent",
	"suite.runIf.sequential.shuffle",
	"suite.runIf.sequential.todo",
	"suite.runIf.shuffle.skip",
	"suite.runIf.shuffle.only",
	"suite.runIf.shuffle.concurrent",
	"suite.runIf.shuffle.sequential",
	"suite.runIf.shuffle.todo",
	"suite.runIf.todo.skip",
	"suite.runIf.todo.only",
	"suite.runIf.todo.concurrent",
	"suite.runIf.todo.sequential",
	"suite.runIf.todo.shuffle",
	"suite.skip.only.each",
	"suite.skip.concurrent.each",
	"suite.skip.sequential.each",
	"suite.skip.shuffle.each",
	"suite.skip.todo.each",
	"suite.only.skip.each",
	"suite.only.concurrent.each",
	"suite.only.sequential.each",
	"suite.only.shuffle.each",
	"suite.only.todo.each",
	"suite.concurrent.skip.each",
	"suite.concurrent.only.each",
	"suite.concurrent.sequential.each",
	"suite.concurrent.shuffle.each",
	"suite.concurrent.todo.each",
	"suite.sequential.skip.each",
	"suite.sequential.only.each",
	"suite.sequential.concurrent.each",
	"suite.sequential.shuffle.each",
	"suite.sequential.todo.each",
	"suite.shuffle.skip.each",
	"suite.shuffle.only.each",
	"suite.shuffle.concurrent.each",
	"suite.shuffle.sequential.each",
	"suite.shuffle.todo.each",
	"suite.todo.skip.each",
	"suite.todo.only.each",
	"suite.todo.concurrent.each",
	"suite.todo.sequential.each",
	"suite.todo.shuffle.each",
	"suite.skip.only.for",
	"suite.skip.concurrent.for",
	"suite.skip.sequential.for",
	"suite.skip.shuffle.for",
	"suite.skip.todo.for",
	"suite.only.skip.for",
	"suite.only.concurrent.for",
	"suite.only.sequential.for",
	"suite.only.shuffle.for",
	"suite.only.todo.for",
	"suite.concurrent.skip.for",
	"suite.concurrent.only.for",
	"suite.concurrent.sequential.for",
	"suite.concurrent.shuffle.for",
	"suite.concurrent.todo.for",
	"suite.sequential.skip.for",
	"suite.sequential.only.for",
	"suite.sequential.concurrent.for",
	"suite.sequential.shuffle.for",
	"suite.sequential.todo.for",
	"suite.shuffle.skip.for",
	"suite.shuffle.only.for",
	"suite.shuffle.concurrent.for",
	"suite.shuffle.sequential.for",
	"suite.shuffle.todo.for",
	"suite.todo.skip.for",
	"suite.todo.only.for",
	"suite.todo.concurrent.for",
	"suite.todo.sequential.for",
	"suite.todo.shuffle.for",
	"suite.skipIf.skip.each",
	"suite.skipIf.only.each",
	"suite.skipIf.concurrent.each",
	"suite.skipIf.sequential.each",
	"suite.skipIf.shuffle.each",
	"suite.skipIf.todo.each",
	"suite.skipIf.skip.for",
	"suite.skipIf.only.for",
	"suite.skipIf.concurrent.for",
	"suite.skipIf.sequential.for",
	"suite.skipIf.shuffle.for",
	"suite.skipIf.todo.for",
	"suite.runIf.skip.each",
	"suite.runIf.only.each",
	"suite.runIf.concurrent.each",
	"suite.runIf.sequential.each",
	"suite.runIf.shuffle.each",
	"suite.runIf.todo.each",
	"suite.runIf.skip.for",
	"suite.runIf.only.for",
	"suite.runIf.concurrent.for",
	"suite.runIf.sequential.for",
	"suite.runIf.shuffle.for",
	"suite.runIf.todo.for",
	"xtest",
	"xtest.each",
	"xit",
	"xit.each",
	"fit",
	"xdescribe",
	"xdescribe.each",
	"fdescribe"
]);

//#endregion
//#region src/utils/scope.ts
function getScope(context, node) {
	return context.sourceCode.getScope ? context.sourceCode.getScope(node) : context.getScope();
}
function getModuleScope(context, node) {
	let scope = getScope(context, node);
	while (scope) {
		if (scope.type === "module") return scope;
		scope = scope.upper;
	}
	return scope;
}

//#endregion
//#region src/utils/parse-vitest-fn-call.ts
const isTypeOfVitestFnCall = (node, context, types) => {
	const vitestFnCall = parseVitestFnCall(node, context);
	return vitestFnCall !== null && types.includes(vitestFnCall.type);
};
const parseVitestFnCall = (node, context) => {
	const vitestFnCall = parseVitestFnCallWithReason(node, context);
	if (typeof vitestFnCall === "string") return null;
	return vitestFnCall;
};
const parseVitestFnCallCache = /* @__PURE__ */ new WeakMap();
const parseVitestFnCallWithReason = (node, context) => {
	let parsedVitestFnCall = parseVitestFnCallCache.get(node);
	if (parsedVitestFnCall) return parsedVitestFnCall;
	parsedVitestFnCall = parseVitestFnCallWithReasonInner(node, context);
	parseVitestFnCallCache.set(node, parsedVitestFnCall);
	return parsedVitestFnCall;
};
const determineVitestFnType = (name) => {
	if (name === "expect") return "expect";
	if (name === "expectTypeOf") return "expectTypeOf";
	if (name === "vi" || name === "vitest") return "vi";
	if (Object.prototype.hasOwnProperty.call(DescribeAlias, name)) return "describe";
	if (Object.prototype.hasOwnProperty.call(TestCaseName, name)) return "test";
	if (Object.prototype.hasOwnProperty.call(HookName, name)) return "hook";
	return "unknown";
};
const findModifiersAndMatcher = (members) => {
	const modifiers = [];
	for (const member of members) {
		if (member.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && member.parent.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return {
			matcher: member,
			args: member.parent.parent.arguments,
			modifiers
		};
		const name = getAccessorValue(member);
		if (modifiers.length === 0) {
			if (!Object.prototype.hasOwnProperty.call(ModifierName, name)) return "modifier-unknown";
		} else if (modifiers.length === 1) {
			if (name !== ModifierName.not && name != ModifierName.have) return "modifier-unknown";
			const firstModifier = getAccessorValue(modifiers[0]);
			if (firstModifier !== ModifierName.resolves && firstModifier !== ModifierName.rejects && firstModifier !== ModifierName.to) return "modifier-unknown";
		} else return "modifier-unknown";
		modifiers.push(member);
	}
	return "matcher-not-found";
};
const parseVitestExpectCall = (typelessParsedVitestFnCall, type) => {
	const modifiersMatcher = findModifiersAndMatcher(typelessParsedVitestFnCall.members);
	if (typeof modifiersMatcher === "string") return modifiersMatcher;
	return {
		...typelessParsedVitestFnCall,
		type,
		...modifiersMatcher
	};
};
const findTopMostCallExpression = (node) => {
	let topMostCallExpression = node;
	let { parent } = node;
	while (parent) {
		if (parent.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) {
			topMostCallExpression = parent;
			parent = parent.parent;
			continue;
		}
		if (parent.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) break;
		parent = parent.parent;
	}
	return topMostCallExpression;
};
const parseVitestFnCallWithReasonInner = (node, context) => {
	const chain = getNodeChain(node);
	if (!chain?.length) return null;
	const [first, ...rest] = chain;
	const lastLink = getAccessorValue(chain[chain.length - 1]);
	if (lastLink === "each") {
		if (node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression) return null;
	}
	if (node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression && lastLink !== "each") return null;
	const resolved = resolveVitestFn(context, node, getAccessorValue(first));
	if (!resolved) return null;
	const name = resolved.original ?? resolved.local;
	const links = [name, ...rest.map(getAccessorValue)];
	if (resolved.type !== "testContext" && name !== "vi" && name !== "vitest" && name !== "expect" && name !== "expectTypeOf" && !ValidVitestFnCallChains.has(links.join("."))) return null;
	const parsedVitestFnCall = {
		name,
		head: {
			...resolved,
			node: first
		},
		members: rest
	};
	const type = determineVitestFnType(name);
	if (type === "expect" || type === "expectTypeOf") {
		const result = parseVitestExpectCall(parsedVitestFnCall, type);
		if (typeof result === "string" && findTopMostCallExpression(node) !== node) return null;
		if (result === "matcher-not-found") {
			if (node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return "matcher-not-called";
		}
		return result;
	}
	if (chain.slice(0, chain.length - 1).some((node) => node.parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression)) return null;
	if (node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression || node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return null;
	return {
		...parsedVitestFnCall,
		type
	};
};
const joinChains = (a, b) => a && b ? [...a, ...b] : null;
function getNodeChain(node) {
	if (isSupportedAccessor(node)) return [node];
	switch (node.type) {
		case _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression: return getNodeChain(node.tag);
		case _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression: return joinChains(getNodeChain(node.object), getNodeChain(node.property));
		case _typescript_eslint_utils.AST_NODE_TYPES.CallExpression: return getNodeChain(node.callee);
	}
	return null;
}
const resolveVitestFn = (context, node, identifier) => {
	const maybeImport = resolveScope(getScope(context, node), identifier);
	if (maybeImport === "local") return null;
	if (maybeImport === "testContext") return {
		local: identifier,
		original: null,
		type: "testContext"
	};
	if (maybeImport) {
		const vitestImports = context.settings.vitest?.vitestImports ?? [];
		if (maybeImport.source === "vitest" || vitestImports.some((importName) => importName instanceof RegExp ? importName.test(maybeImport.source) : maybeImport.source === importName)) return {
			original: maybeImport.imported,
			local: maybeImport.local,
			type: "import"
		};
		return null;
	}
	return {
		original: resolvePossibleAliasedGlobal(identifier, context),
		local: identifier,
		type: "global"
	};
};
const resolvePossibleAliasedGlobal = (global, context) => {
	const globalAliases = context.settings.vitest?.globalAliases ?? {};
	const alias = Object.entries(globalAliases).find(([_, aliases]) => aliases.includes(global));
	if (alias) return alias[0];
	return null;
};
const isAncestorTestCaseCall = ({ parent }) => {
	return parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && parent.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && Object.prototype.hasOwnProperty.call(TestCaseName, parent.callee.name);
};
const resolveScope = (scope, identifier) => {
	let currentScope = scope;
	while (currentScope !== null) {
		const ref = currentScope.set.get(identifier);
		if (ref && ref.defs.length > 0) {
			const def = ref.defs[ref.defs.length - 1];
			const objectParam = isFunction(def.node) ? def.node.params.find((params) => params.type === _typescript_eslint_utils.AST_NODE_TYPES.ObjectPattern) : void 0;
			if (objectParam) {
				const property = objectParam.properties.find((property) => property.type === _typescript_eslint_utils.AST_NODE_TYPES.Property);
				if ((property?.key.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier ? property.key : void 0)?.name === identifier) return "testContext";
			}
			/** if detect test function is created with `.extend()` */
			if (def.node.type === _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclarator && def.node.id.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && def.node.init?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && def.node.init.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isIdentifier(def.node.init.callee.property, "extend")) {
				const rootName = getNodeName(def.node.init.callee.object)?.split(".")[0];
				if (rootName && rootName !== identifier) {
					const resolved = resolveScope(currentScope, rootName);
					if (resolved && typeof resolved === "object" && Object.hasOwn(TestCaseName, resolved.imported)) return {
						...resolved,
						local: identifier
					};
				}
			}
			const namedParam = isFunction(def.node) ? def.node.params.find((params) => params.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) : void 0;
			if (namedParam && isAncestorTestCaseCall(namedParam.parent)) return "testContext";
			const importDetails = describePossibleImportDef(def);
			if (importDetails?.local === identifier) return importDetails;
			return "local";
		}
		currentScope = currentScope.upper;
	}
	return null;
};
/**
* Attempts to find the node that represents the import source for the
* given expression node, if it looks like it's an import.
*
* If no such node can be found (e.g. because the expression doesn't look
* like an import), then `null` is returned instead.
*/
const findImportSourceNode = (node) => {
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression) {
		if (node.argument.type === _typescript_eslint_utils.AST_NODE_TYPES.ImportExpression) return node.argument.source;
		return null;
	}
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && isIdentifier(node.callee, "require")) return node.arguments[0] ?? null;
	return null;
};
const describeImportDefAsImport = (def) => {
	if (def.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.TSImportEqualsDeclaration) return null;
	if (def.node.type !== _typescript_eslint_utils.AST_NODE_TYPES.ImportSpecifier) return null;
	if (def.node.imported.type != _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return null;
	if (def.parent.importKind === "type") return null;
	return {
		source: def.parent.source.value,
		imported: def.node.imported.name,
		local: def.node.local.name
	};
};
const describePossibleImportDef = (def) => {
	if (def.type === "Variable") return describeVariableDefAsImport(def);
	if (def.type === "ImportBinding") return describeImportDefAsImport(def);
	return null;
};
const describeVariableDefAsImport = (def) => {
	if (!def.node.init) return null;
	const sourceNode = findImportSourceNode(def.node.init);
	if (!sourceNode || !isStringNode(sourceNode)) return null;
	if (def.name.parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.Property) return null;
	if (!isSupportedAccessor(def.name.parent.key)) return null;
	return {
		source: getStringValue(sourceNode),
		imported: getAccessorValue(def.name.parent.key),
		local: def.name.name
	};
};
const getTestCallExpressionsFromDeclaredVariables = (declaredVariables, context) => {
	return declaredVariables.reduce((acc, { references }) => acc.concat(references.map(({ identifier }) => identifier.parent).filter((node) => node?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && isTypeOfVitestFnCall(node, context, ["test"]))), []);
};
const getFirstMatcherArg = (expectFnCall) => {
	const [firstArg] = expectFnCall.args;
	if (firstArg.type === _typescript_eslint_utils.AST_NODE_TYPES.SpreadElement) return firstArg;
	return followTypeAssertionChain$1(firstArg);
};
const isTypeCastExpression$1 = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.TSAsExpression || node.type === _typescript_eslint_utils.AST_NODE_TYPES.TSTypeAssertion;
const followTypeAssertionChain$1 = (expression) => isTypeCastExpression$1(expression) ? followTypeAssertionChain$1(expression.expression) : expression;

//#endregion
//#region src/rules/consistent-each-for.ts
const RULE_NAME$81 = "consistent-each-for";
const BASE_FN_NAMES = [
	"test",
	"it",
	"describe",
	"suite"
];
var consistent_each_for_default = createEslintRule({
	name: RULE_NAME$81,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `.each` or `.for` consistently",
			recommended: false
		},
		messages: { consistentMethod: "Prefer using `{{ functionName }}.{{ preferred }}` over `{{ functionName }}.{{ actual }}`" },
		schema: [{
			type: "object",
			properties: {
				test: {
					description: "Preferred method for `test`.",
					type: "string",
					enum: ["each", "for"]
				},
				it: {
					description: "Preferred method for `it`.",
					type: "string",
					enum: ["each", "for"]
				},
				describe: {
					description: "Preferred method for `describe`.",
					type: "string",
					enum: ["each", "for"]
				},
				suite: {
					description: "Preferred method for `suite`.",
					type: "string",
					enum: ["each", "for"]
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{}]
	},
	create(context, [options]) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (!vitestFnCall) return;
			const baseFunctionName = vitestFnCall.name.replace(/^[fx]/, "");
			if (!BASE_FN_NAMES.includes(baseFunctionName)) return;
			const eachMember = vitestFnCall.members.find((member) => getAccessorValue(member) === "each");
			const forMember = vitestFnCall.members.find((member) => getAccessorValue(member) === "for");
			if (!eachMember && !forMember) return;
			const preference = options[baseFunctionName];
			if (!preference) return;
			const actual = eachMember ? "each" : "for";
			if (actual !== preference) context.report({
				node: eachMember || forMember,
				messageId: "consistentMethod",
				data: {
					functionName: vitestFnCall.name,
					preferred: preference,
					actual
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/consistent-test-filename.ts
const RULE_NAME$80 = "consistent-test-filename";
const defaultPattern = /.*\.test\.[tj]sx?$/;
const defaultTestsPattern = /.*\.(test|spec)\.[tj]sx?$/;
var consistent_test_filename_default = createEslintRule({
	name: RULE_NAME$80,
	meta: {
		type: "problem",
		docs: {
			recommended: false,
			requiresTypeChecking: false,
			description: "require test file pattern"
		},
		messages: { consistentTestFilename: "Use test file name pattern {{ pattern }}" },
		schema: [{
			type: "object",
			additionalProperties: false,
			properties: {
				pattern: {
					description: "Regex pattern for files that should be treated as tests.",
					type: "string",
					format: "regex"
				},
				allTestPattern: {
					description: "Regex pattern used to identify all possible test files.",
					type: "string",
					format: "regex"
				}
			}
		}],
		defaultOptions: [{
			pattern: defaultPattern.source,
			allTestPattern: defaultTestsPattern.source
		}]
	},
	create: (context, options) => {
		const { pattern: patternRaw, allTestPattern: allTestPatternRaw } = options[0];
		const pattern = new RegExp(patternRaw);
		const allTestPattern = new RegExp(allTestPatternRaw);
		const { filename } = context;
		if (!allTestPattern.test(filename)) return {};
		return { Program: (p) => {
			if (!pattern.test(filename)) context.report({
				node: p,
				messageId: "consistentTestFilename",
				data: { pattern: patternRaw }
			});
		} };
	}
});

//#endregion
//#region src/rules/consistent-test-it.ts
const RULE_NAME$79 = "consistent-test-it";
const buildFixer = (callee, nodeName, preferredTestKeyword) => (fixer) => [fixer.replaceText(callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression ? callee.object : callee, getPreferredNodeName(nodeName, preferredTestKeyword))];
function getPreferredNodeName(nodeName, preferredTestKeyword) {
	if (nodeName === TestCaseName.fit) return "test.only";
	return nodeName.startsWith("f") || nodeName.startsWith("x") ? nodeName.charAt(0) + preferredTestKeyword : preferredTestKeyword;
}
function getOppositeTestKeyword(test) {
	if (test === TestCaseName.test) return TestCaseName.it;
	return TestCaseName.test;
}
var consistent_test_it_default = createEslintRule({
	name: RULE_NAME$79,
	meta: {
		type: "suggestion",
		fixable: "code",
		docs: {
			description: "enforce using test or it but not both",
			recommended: false
		},
		messages: {
			consistentMethod: "Prefer using {{ testFnKeyWork }} instead of {{ oppositeTestKeyword }}",
			consistentMethodWithinDescribe: "Prefer using {{ testKeywordWithinDescribe }} instead of {{ oppositeTestKeyword }} within describe"
		},
		schema: [{
			type: "object",
			properties: {
				fn: {
					description: "Preferred global test function keyword.",
					type: "string",
					enum: [TestCaseName.test, TestCaseName.it]
				},
				withinDescribe: {
					description: "Preferred test function keyword inside `describe`.",
					type: "string",
					enum: [TestCaseName.test, TestCaseName.it]
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{}]
	},
	create(context, options) {
		const { fn, withinDescribe } = options[0];
		const testFnKeyWork = fn || TestCaseName.test;
		const testKeywordWithinDescribe = withinDescribe || fn || TestCaseName.it;
		const testFnDisabled = testFnKeyWork === testKeywordWithinDescribe ? testFnKeyWork : void 0;
		const { sourceCode } = context;
		let describeNestingLevel = 0;
		return {
			ImportDeclaration(node) {
				if (testFnDisabled == null) return;
				if (node.source.type !== "Literal" || node.source.value !== "vitest") return;
				const oppositeTestKeyword = getOppositeTestKeyword(testFnDisabled);
				for (const specifier of node.specifiers) {
					if (specifier.type !== "ImportSpecifier") continue;
					if (specifier.imported.type !== "Identifier") continue;
					if (specifier.imported.name !== oppositeTestKeyword) continue;
					context.report({
						node: specifier,
						data: {
							testFnKeyWork,
							oppositeTestKeyword
						},
						messageId: "consistentMethod",
						fix: (fixer) => {
							const remainingSpecifiers = node.specifiers.filter((spec) => spec !== specifier);
							if (remainingSpecifiers.length > 0) {
								const hasPreferredSpecifier = remainingSpecifiers.some((spec) => spec.type === _typescript_eslint_utils.AST_NODE_TYPES.ImportSpecifier && spec.imported.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && spec.imported.name === testFnDisabled);
								const importNames = remainingSpecifiers.map((spec) => sourceCode.getText(spec));
								if (!hasPreferredSpecifier) importNames.push(testFnDisabled);
								const importText = importNames.join(", ");
								const lastSpecifierRange = node.specifiers.at(-1)?.range;
								if (!lastSpecifierRange) return null;
								return fixer.replaceTextRange([node.specifiers[0].range[0], lastSpecifierRange[1]], importText);
							}
							return fixer.replaceText(specifier, testFnDisabled);
						}
					});
				}
			},
			CallExpression(node) {
				if (node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && node.callee.name === "bench") return;
				const vitestFnCall = parseVitestFnCall(node, context);
				if (!vitestFnCall) return;
				if (vitestFnCall.type === "describe") {
					describeNestingLevel++;
					return;
				}
				const funcNode = node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;
				if (vitestFnCall.type === "test" && describeNestingLevel === 0 && !vitestFnCall.name.endsWith(testFnKeyWork)) {
					const oppositeTestKeyword = getOppositeTestKeyword(testFnKeyWork);
					context.report({
						node: node.callee,
						data: {
							testFnKeyWork,
							oppositeTestKeyword
						},
						messageId: "consistentMethod",
						fix: buildFixer(funcNode, vitestFnCall.name, testFnKeyWork)
					});
				} else if (vitestFnCall.type === "test" && describeNestingLevel > 0 && !vitestFnCall.name.endsWith(testKeywordWithinDescribe)) {
					const oppositeTestKeyword = getOppositeTestKeyword(testKeywordWithinDescribe);
					context.report({
						messageId: "consistentMethodWithinDescribe",
						node: node.callee,
						data: {
							testKeywordWithinDescribe,
							oppositeTestKeyword
						},
						fix: buildFixer(funcNode, vitestFnCall.name, testKeywordWithinDescribe)
					});
				}
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["describe"])) describeNestingLevel--;
			}
		};
	}
});

//#endregion
//#region src/rules/consistent-vitest-vi.ts
const RULE_NAME$78 = "consistent-vitest-vi";
const getOppositeVitestUtilKeyword = (util) => util === UtilName.vi ? UtilName.vitest : UtilName.vi;
var consistent_vitest_vi_default = createEslintRule({
	name: RULE_NAME$78,
	meta: {
		type: "suggestion",
		fixable: "code",
		docs: {
			description: "enforce using vitest or vi but not both",
			recommended: false
		},
		messages: { consistentUtil: "Prefer using {{ utilKeyword }} instead of {{ oppositeUtilKeyword }}" },
		schema: [{
			type: "object",
			properties: { fn: {
				description: "Preferred utility keyword to enforce.",
				type: "string",
				enum: [UtilName.vi, UtilName.vitest]
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ fn: UtilName.vi }]
	},
	create(context, options) {
		const utilKeyword = options[0].fn;
		const oppositeUtilKeyword = getOppositeVitestUtilKeyword(utilKeyword);
		return {
			ImportDeclaration(node) {
				if (node.source.type !== _typescript_eslint_utils.AST_NODE_TYPES.Literal || node.source.value !== "vitest") return;
				for (const specifier of node.specifiers) {
					if (specifier.type !== _typescript_eslint_utils.AST_NODE_TYPES.ImportSpecifier) continue;
					if (specifier.imported.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) continue;
					if (specifier.local.name !== specifier.imported.name) continue;
					if (specifier.imported.name === oppositeUtilKeyword) context.report({
						node: specifier,
						messageId: "consistentUtil",
						data: {
							utilKeyword,
							oppositeUtilKeyword
						},
						fix: (fixer) => {
							const remainingSpecifiers = node.specifiers.filter((spec) => spec.local.name !== oppositeUtilKeyword);
							if (remainingSpecifiers.length > 0) {
								const importText = remainingSpecifiers.map((spec) => spec.local.name).join(", ");
								const lastSpecifierRange = node.specifiers.at(-1)?.range;
								if (!lastSpecifierRange) return null;
								return fixer.replaceTextRange([node.specifiers[0].range[0], lastSpecifierRange[1]], importText);
							}
							return fixer.replaceText(specifier.local, utilKeyword);
						}
					});
				}
			},
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type !== "vi") return;
				if (!isSupportedAccessor(vitestFnCall.head.node, oppositeUtilKeyword)) return;
				const replaceNode = node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression ? node.callee.object : node.callee;
				context.report({
					node: replaceNode,
					data: {
						utilKeyword,
						oppositeUtilKeyword
					},
					messageId: "consistentUtil",
					fix: (fixer) => fixer.replaceText(replaceNode, utilKeyword)
				});
			}
		};
	}
});

//#endregion
//#region src/utils/parse-plugin-settings.ts
const DEFAULTS = { typecheck: false };
function parsePluginSettings(settings) {
	const pluginSettings = typeof settings.vitest !== "object" || settings.vitest === null ? {} : settings.vitest;
	return {
		...DEFAULTS,
		...pluginSettings
	};
}

//#endregion
//#region src/rules/expect-expect.ts
const RULE_NAME$77 = "expect-expect";
var expect_expect_default = createEslintRule({
	name: RULE_NAME$77,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce having expectation in test body",
			recommended: false
		},
		schema: [{
			type: "object",
			properties: {
				assertFunctionNames: {
					description: "List of function names treated as assertions.",
					type: "array",
					items: { type: "string" }
				},
				additionalTestBlockFunctions: {
					description: "Additional functions that should be treated as test blocks.",
					type: "array",
					items: { type: "string" }
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{
			assertFunctionNames: ["expect", "assert"],
			additionalTestBlockFunctions: []
		}],
		messages: { noAssertions: "Test has no assertions" }
	},
	create(context, [{ assertFunctionNames = ["expect"], additionalTestBlockFunctions = [] }]) {
		const unchecked = [];
		if (parsePluginSettings(context.settings).typecheck) assertFunctionNames.push("expectTypeOf", "assertType");
		const assertFunctionRegexps = assertFunctionNames.map(buildPatternRegexp);
		function checkCallExpression(nodes) {
			for (const node of nodes) {
				const index = node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression ? unchecked.indexOf(node) : -1;
				if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.FunctionDeclaration) checkCallExpression(getTestCallExpressionsFromDeclaredVariables(context.sourceCode.getDeclaredVariables(node), context));
				if (index !== -1) {
					unchecked.splice(index, 1);
					break;
				}
			}
		}
		return {
			CallExpression(node) {
				if (node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && node.callee.name === "bench") return;
				if (node?.callee?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && node.callee.property.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && [
					"skip",
					"extend",
					"scoped"
				].includes(node.callee.property.name)) return;
				const name = getNodeName(node) ?? "";
				if (isTypeOfVitestFnCall(node, context, ["test"]) || additionalTestBlockFunctions.includes(name)) {
					if (node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.callee.property, "todo")) return;
					unchecked.push(node);
				} else if (assertFunctionRegexps.some((p) => p.test(name))) checkCallExpression(context.sourceCode.getAncestors(node));
			},
			"Program:exit"() {
				unchecked.forEach((node) => {
					context.report({
						node: node.callee,
						messageId: "noAssertions"
					});
				});
			}
		};
	}
});
function buildPatternRegexp(pattern) {
	const parts = pattern.split(".").map((x) => {
		if (x === "**") return "[_a-z\\d\\.]*";
		return x.replace(/\*/gu, "[a-z\\d]*");
	});
	return new RegExp(`^${parts.join("\\.")}(\\.|$)`, "ui");
}

//#endregion
//#region src/rules/hoisted-apis-on-top.ts
const RULE_NAME$76 = "hoisted-apis-on-top";
const hoistedAPIs = [
	"mock",
	"hoisted",
	"unmock"
];
var hoisted_apis_on_top_default = createEslintRule({
	name: RULE_NAME$76,
	meta: {
		hasSuggestions: true,
		type: "suggestion",
		docs: { description: "enforce hoisted APIs to be on top of the file" },
		messages: {
			hoistedApisOnTop: `Hoisted API is used in a runtime location in this file, but it is actually executed before this file is loaded.`,
			suggestMoveHoistedApiToTop: "Move this hoisted API to the top of the file to better reflect its behavior.",
			suggestReplaceMockWithDoMock: "Replace 'vi.mock()' with 'vi.doMock()', which is not hoisted."
		},
		schema: []
	},
	create(context) {
		let lastImportEnd = null;
		const nodesToReport = [];
		return {
			ImportDeclaration(node) {
				if (node.parent.type !== _typescript_eslint_utils.AST_NODE_TYPES.Program) return;
				lastImportEnd = node.range[1];
			},
			CallExpression(node) {
				if (node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return;
				const { object, property } = node.callee;
				if (object.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier || object.name !== "vi" || property.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return;
				const apiName = property.name;
				if (!hoistedAPIs.includes(apiName)) return;
				if (apiName === "hoisted") {
					let parent = node.parent;
					if (parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression) parent = parent.parent;
					if (parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclarator) parent = parent.parent;
					if ((parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement || parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclaration) && parent.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.Program) return;
				} else if (node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement && node.parent.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.Program) return;
				nodesToReport.push(node);
			},
			"Program:exit"() {
				for (const node of nodesToReport) {
					const suggestions = [];
					suggestions.push({
						messageId: "suggestMoveHoistedApiToTop",
						*fix(fixer) {
							if (node.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement) yield fixer.remove(node);
							else yield fixer.replaceText(node, "undefined");
							if (lastImportEnd != null) yield fixer.insertTextAfterRange([lastImportEnd, lastImportEnd], "\n" + context.sourceCode.getText(node) + ";");
							else yield fixer.insertTextAfterRange([0, 0], context.sourceCode.getText(node) + ";\n");
						}
					});
					const property = node.callee.property;
					if (property.name === "mock") suggestions.push({
						messageId: "suggestReplaceMockWithDoMock",
						fix(fixer) {
							return fixer.replaceText(property, "doMock");
						}
					});
					context.report({
						node,
						messageId: "hoistedApisOnTop",
						suggest: suggestions
					});
				}
			}
		};
	}
});

//#endregion
//#region src/rules/max-expects.ts
const RULE_NAME$75 = "max-expects";
var max_expects_default = createEslintRule({
	name: RULE_NAME$75,
	meta: {
		docs: {
			requiresTypeChecking: false,
			recommended: false,
			description: "enforce a maximum number of expect per test"
		},
		messages: { maxExpect: "Too many assertion calls ({{ count }}) - maximum allowed is {{ max }}" },
		type: "suggestion",
		schema: [{
			type: "object",
			properties: { max: {
				description: "Maximum number of `expect` calls allowed in a test.",
				type: "number"
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ max: 5 }]
	},
	create(context, [{ max }]) {
		let assertsCount = 0;
		const resetAssertCount = (node) => {
			if (node.parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression || isTypeOfVitestFnCall(node.parent, context, ["test"])) assertsCount = 0;
		};
		return {
			FunctionExpression: resetAssertCount,
			"FunctionExpression:exit": resetAssertCount,
			ArrowFunctionExpression: resetAssertCount,
			"ArrowFunctionExpression:exit": resetAssertCount,
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type !== "expect" || vitestFnCall.head.node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return;
				assertsCount += 1;
				if (assertsCount > max) context.report({
					node,
					messageId: "maxExpect",
					data: {
						count: assertsCount,
						max
					}
				});
			}
		};
	}
});

//#endregion
//#region src/rules/max-nested-describe.ts
const RULE_NAME$74 = "max-nested-describe";
var max_nested_describe_default = createEslintRule({
	name: RULE_NAME$74,
	meta: {
		type: "problem",
		docs: {
			description: "require describe block to be less than set max value or default value",
			recommended: false
		},
		schema: [{
			type: "object",
			properties: { max: {
				description: "Maximum allowed nesting depth for `describe` blocks.",
				type: "number"
			} },
			additionalProperties: false
		}],
		messages: { maxNestedDescribe: "Nested describe block should be less than set max value" },
		defaultOptions: [{ max: 5 }]
	},
	create(context, [{ max }]) {
		const stack = [];
		function pushStack(node) {
			if (node.parent?.type !== "CallExpression") return;
			if (node.parent.callee.type !== "Identifier" || node.parent.callee.name !== "describe") return;
			stack.push(0);
			if (stack.length > max) context.report({
				node: node.parent,
				messageId: "maxNestedDescribe"
			});
		}
		function popStack(node) {
			if (node.parent?.type !== "CallExpression") return;
			if (node.parent.callee.type !== "Identifier" || node.parent.callee.name !== "describe") return;
			stack.pop();
		}
		return {
			FunctionExpression: pushStack,
			"FunctionExpression:exit": popStack,
			ArrowFunctionExpression: pushStack,
			"ArrowFunctionExpression:exit": popStack
		};
	}
});

//#endregion
//#region src/rules/no-alias-methods.ts
const RULE_NAME$73 = "no-alias-methods";
var no_alias_methods_default = createEslintRule({
	name: RULE_NAME$73,
	meta: {
		docs: {
			description: "disallow alias methods",
			requiresTypeChecking: false,
			recommended: false
		},
		messages: { noAliasMethods: "Replace {{ alias }}() with its canonical name {{ canonical }}()" },
		type: "suggestion",
		fixable: "code",
		schema: []
	},
	create(context) {
		const methodNames = {
			toBeCalled: "toHaveBeenCalled",
			toBeCalledTimes: "toHaveBeenCalledTimes",
			toBeCalledWith: "toHaveBeenCalledWith",
			lastCalledWith: "toHaveBeenLastCalledWith",
			nthCalledWith: "toHaveBeenNthCalledWith",
			toReturn: "toHaveReturned",
			toReturnTimes: "toHaveReturnedTimes",
			toReturnWith: "toHaveReturnedWith",
			lastReturnedWith: "toHaveLastReturnedWith",
			nthReturnedWith: "toHaveNthReturnedWith",
			toThrowError: "toThrow"
		};
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { matcher } = vitestFnCall;
			const alias = getAccessorValue(matcher);
			if (alias in methodNames) {
				const canonical = methodNames[alias];
				context.report({
					messageId: "noAliasMethods",
					data: {
						alias,
						canonical
					},
					node: matcher,
					fix: (fixer) => [replaceAccessorFixer(fixer, matcher, canonical)]
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/no-commented-out-tests.ts
const RULE_NAME$72 = "no-commented-out-tests";
function hasTests(node) {
	return /^\s*[xf]?(test|it|describe)(\.\w+|\[['"]\w+['"]\])?\s*\(/mu.test(node.value);
}
var no_commented_out_tests_default = createEslintRule({
	name: RULE_NAME$72,
	meta: {
		docs: {
			description: "disallow commented out tests",
			requiresTypeChecking: false,
			recommended: false
		},
		messages: { noCommentedOutTests: "Remove commented out tests - you may want to use `skip` or `only` instead" },
		schema: [],
		type: "suggestion"
	},
	create(context) {
		const { sourceCode } = context;
		function checkNodeForCommentedOutTests(node) {
			if (!hasTests(node)) return;
			context.report({
				messageId: "noCommentedOutTests",
				node
			});
		}
		return { Program() {
			sourceCode.getAllComments().forEach(checkNodeForCommentedOutTests);
		} };
	}
});

//#endregion
//#region src/rules/no-conditional-expect.ts
const RULE_NAME$71 = "no-conditional-expect";
const isCatchCall = (node) => node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.callee.property, "catch");
var no_conditional_expect_default = createEslintRule({
	name: RULE_NAME$71,
	meta: {
		type: "problem",
		docs: {
			description: "disallow conditional expects",
			requiresTypeChecking: false,
			recommended: false
		},
		messages: { noConditionalExpect: "Avoid calling `expect` inside conditional statements" },
		schema: [{
			type: "object",
			additionalProperties: false,
			properties: { expectAssertions: {
				description: "Enable/disable whether expect.assertions() is taken into account",
				type: "boolean"
			} }
		}],
		defaultOptions: [{ expectAssertions: false }]
	},
	create(context, [options]) {
		let conditionalDepth = 0;
		let inTestCase = false;
		let inPromiseCatch = false;
		let expectAssertions = 0;
		const increaseConditionalDepth = () => inTestCase && conditionalDepth++;
		const decreaseConditionalDepth = () => inTestCase && conditionalDepth--;
		return {
			FunctionDeclaration(node) {
				if (getTestCallExpressionsFromDeclaredVariables(context.sourceCode.getDeclaredVariables(node), context).length > 0) inTestCase = true;
			},
			CallExpression(node) {
				const { type: vitestFnCallType } = parseVitestFnCall(node, context) ?? {};
				if (vitestFnCallType === "test") inTestCase = true;
				if (isCatchCall(node)) inPromiseCatch = true;
				if (options.expectAssertions && inTestCase) {
					if (node.callee.type === "MemberExpression") {
						if (node.callee.object.type === "Identifier" && node.callee.object.name === "expect") {
							if (node.callee.property.type === "Identifier" && node.callee.property.name === "assertions") {
								if (node.arguments.length === 1) {
									const assertions = node.arguments[0];
									if (assertions.type === "Literal") expectAssertions = Number(assertions.value);
								}
							}
						}
					}
				}
				if (inTestCase && vitestFnCallType === "expect" && conditionalDepth > 0 && expectAssertions === 0) context.report({
					messageId: "noConditionalExpect",
					node
				});
				if (inPromiseCatch && vitestFnCallType === "expect") context.report({
					messageId: "noConditionalExpect",
					node
				});
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["test"])) {
					inTestCase = false;
					expectAssertions = 0;
				}
				if (isCatchCall(node)) inPromiseCatch = false;
			},
			CatchClause: increaseConditionalDepth,
			"CatchClause:exit": decreaseConditionalDepth,
			IfStatement: increaseConditionalDepth,
			"IfStatement:exit": decreaseConditionalDepth,
			SwitchStatement: increaseConditionalDepth,
			"SwitchStatement:exit": decreaseConditionalDepth,
			ConditionalExpression: increaseConditionalDepth,
			"ConditionalExpression:exit": decreaseConditionalDepth,
			LogicalExpression: increaseConditionalDepth,
			"LogicalExpression:exit": decreaseConditionalDepth
		};
	}
});

//#endregion
//#region src/rules/no-conditional-in-test.ts
const RULE_NAME$70 = "no-conditional-in-test";
var no_conditional_in_test_default = createEslintRule({
	name: RULE_NAME$70,
	meta: {
		docs: {
			description: "disallow conditional tests",
			requiresTypeChecking: false,
			recommended: false
		},
		messages: { noConditionalInTest: "Remove conditional tests" },
		schema: [],
		type: "problem"
	},
	create(context) {
		return { IfStatement(node) {
			if (node.parent?.parent?.parent?.type === "CallExpression" && isTypeOfVitestFnCall(node.parent?.parent?.parent, context, ["test", "it"])) context.report({
				messageId: "noConditionalInTest",
				node
			});
		} };
	}
});

//#endregion
//#region src/rules/no-conditional-tests.ts
const RULE_NAME$69 = "no-conditional-tests";
var no_conditional_tests_default = createEslintRule({
	name: RULE_NAME$69,
	meta: {
		type: "problem",
		docs: {
			description: "disallow conditional tests",
			recommended: false
		},
		schema: [],
		messages: { noConditionalTests: "Avoid using if conditions in a test" }
	},
	create(context) {
		return { Identifier: function(node) {
			if ([
				"test",
				"it",
				"describe"
			].includes(node.name)) {
				if (node.parent?.parent?.parent?.parent?.type === "IfStatement") context.report({
					node,
					messageId: "noConditionalTests"
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/no-disabled-tests.ts
const RULE_NAME$68 = "no-disabled-tests";
var no_disabled_tests_default = createEslintRule({
	name: RULE_NAME$68,
	meta: {
		type: "suggestion",
		docs: {
			description: "disallow disabled tests",
			recommended: false
		},
		messages: {
			missingFunction: "Test is missing function argument",
			pending: "Call to pending()",
			pendingSuite: "Call to pending() within test suite",
			pendingTest: "Call to pending() within test",
			disabledSuite: "Disabled test suite - if you want to skip a test suite temporarily, use .todo() instead",
			disabledTest: "Disabled test - if you want to skip a test temporarily, use .todo() instead"
		},
		schema: []
	},
	create(context) {
		let suiteDepth = 0;
		let testDepth = 0;
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (!vitestFnCall) return;
				if (vitestFnCall.type === "describe") suiteDepth++;
				if (vitestFnCall.type === "test") {
					testDepth++;
					if (node.arguments.length < 2 && vitestFnCall.members.every((s) => getAccessorValue(s) === "skip")) context.report({
						messageId: "missingFunction",
						node
					});
				}
				const skipMember = vitestFnCall.members.find((s) => getAccessorValue(s) === "skip");
				if (vitestFnCall.name.startsWith("x") || skipMember !== void 0) context.report({
					messageId: vitestFnCall.type === "describe" ? "disabledSuite" : "disabledTest",
					node: skipMember ?? vitestFnCall.head.node
				});
			},
			"CallExpression:exit"(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (!vitestFnCall) return;
				if (vitestFnCall.type === "describe") suiteDepth--;
				if (vitestFnCall.type === "test") testDepth--;
			},
			"CallExpression[callee.name=\"pending\"]"(node) {
				if (resolveScope(getScope(context, node), "pending")) return;
				if (testDepth > 0) context.report({
					messageId: "pendingTest",
					node
				});
				else if (suiteDepth > 0) context.report({
					messageId: "pendingSuite",
					node
				});
				else context.report({
					messageId: "pending",
					node
				});
			}
		};
	}
});

//#endregion
//#region src/rules/no-done-callback.ts
const RULE_NAME$67 = "no-done-callback";
const findCallbackArg = (node, isVitestEach, context) => {
	if (isVitestEach) return node.arguments[1];
	const vitestFnCall = parseVitestFnCall(node, context);
	if (vitestFnCall?.type === "hook" && node.arguments.length >= 1) return node.arguments[0];
	if (vitestFnCall?.type === "test" && node.arguments.length >= 2) return node.arguments[1];
	return null;
};
var no_done_callback_default = createEslintRule({
	name: RULE_NAME$67,
	meta: {
		type: "suggestion",
		docs: {
			description: "disallow using a callback in asynchronous tests and hooks",
			recommended: false
		},
		deprecated: true,
		schema: [],
		messages: {
			noDoneCallback: "Return a promise instead of relying on callback parameter",
			suggestWrappingInPromise: "Wrap in `new Promise({{ callback }} => ...`",
			useAwaitInsteadOfCallback: "Use `await` instead of callback in async function"
		},
		hasSuggestions: true
	},
	create(context) {
		return { CallExpression(node) {
			const isVitestEach = /\.each$|\.for$|\.concurrent$/.test(getNodeName(node.callee) ?? "");
			if (isVitestEach && node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression) return;
			if (context.sourceCode.getAncestors(node).some((ancestor) => {
				if (ancestor.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return false;
				if (!isTypeOfVitestFnCall(ancestor, context, ["describe", "test"])) return false;
				return ancestor.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(ancestor.callee.property, "concurrent");
			})) return;
			const callback = findCallbackArg(node, isVitestEach, context);
			const callbackArgIndex = Number(isVitestEach);
			if (!callback || !isFunction(callback) || callback.params.length !== 1 + callbackArgIndex) return;
			const argument = callback.params[callbackArgIndex];
			if (argument.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
				context.report({
					node: argument,
					messageId: "noDoneCallback"
				});
				return;
			}
			if (callback.async) {
				context.report({
					node: argument,
					messageId: "useAwaitInsteadOfCallback"
				});
				return;
			}
			context.report({
				node,
				messageId: "noDoneCallback",
				suggest: [{
					messageId: "suggestWrappingInPromise",
					data: { callback: argument.name },
					fix(fixer) {
						const { body, params } = callback;
						const { sourceCode } = context;
						const firstBodyToken = sourceCode.getFirstToken(body);
						const lastBodyToken = sourceCode.getLastToken(body);
						const [firstParam] = params;
						const lastParam = params[params.length - 1];
						const tokenBeforeFirstParam = sourceCode.getTokenBefore(firstParam);
						let tokenAfterLastParam = sourceCode.getTokenAfter(lastParam);
						if (tokenAfterLastParam?.value === ",") tokenAfterLastParam = sourceCode.getTokenAfter(tokenAfterLastParam);
						if (!firstBodyToken || !lastBodyToken || !tokenBeforeFirstParam || !tokenAfterLastParam) throw new Error(`Unexpected null when attempting to fix ${context.filename} - please file an issue at https://github/veritem/eslint-plugin-vitest`);
						let argumentFix = fixer.replaceText(firstParam, "()");
						if (tokenBeforeFirstParam.value === "(" && tokenAfterLastParam.value === ")") argumentFix = fixer.removeRange([tokenBeforeFirstParam.range[1], tokenAfterLastParam.range[0]]);
						let beforeReplacement = `new Promise(${argument.name} => `;
						let afterReplacement = ")";
						let replaceBefore = true;
						if (body.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) {
							beforeReplacement = `return ${beforeReplacement}{`;
							afterReplacement += "}";
							replaceBefore = false;
						}
						return [
							argumentFix,
							replaceBefore ? fixer.insertTextBefore(firstBodyToken, beforeReplacement) : fixer.insertTextAfter(firstBodyToken, beforeReplacement),
							fixer.insertTextAfter(lastBodyToken, afterReplacement)
						];
					}
				}]
			});
		} };
	}
});

//#endregion
//#region src/rules/no-duplicate-hooks.ts
const RULE_NAME$66 = "no-duplicate-hooks";
var no_duplicate_hooks_default = createEslintRule({
	name: RULE_NAME$66,
	meta: {
		docs: {
			recommended: false,
			description: "disallow duplicate hooks and teardown hooks",
			requiresTypeChecking: false
		},
		messages: { noDuplicateHooks: "Duplicate {{ hook }} in describe block" },
		schema: [],
		type: "suggestion"
	},
	create(context) {
		const hooksContexts = [{}];
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type === "describe") hooksContexts.push({});
				if (vitestFnCall?.type !== "hook") return;
				const currentLayer = hooksContexts[hooksContexts.length - 1];
				currentLayer[vitestFnCall.name] ||= 0;
				currentLayer[vitestFnCall.name] += 1;
				if (currentLayer[vitestFnCall.name] > 1) context.report({
					messageId: "noDuplicateHooks",
					data: { hook: vitestFnCall.name },
					node
				});
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["describe"])) hooksContexts.pop();
			}
		};
	}
});

//#endregion
//#region src/rules/no-focused-tests.ts
const RULE_NAME$65 = "no-focused-tests";
var no_focused_tests_default = createEslintRule({
	name: RULE_NAME$65,
	meta: {
		type: "problem",
		docs: {
			description: "disallow focused tests",
			recommended: false
		},
		fixable: "code",
		schema: [{
			type: "object",
			properties: { fixable: {
				description: "Whether the rule should provide an autofix.",
				type: "boolean"
			} },
			additionalProperties: false
		}],
		messages: { noFocusedTests: "Focused tests are not allowed" },
		defaultOptions: [{ fixable: true }]
	},
	create: (context, options) => {
		const fixable = options[0].fixable;
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (!vitestFnCall) return;
			const isTestOrDescribe = [
				"it",
				"test",
				"describe"
			].includes(vitestFnCall.name);
			const onlyNode = vitestFnCall.members.find((m) => getAccessorValue(m) === "only");
			if (isTestOrDescribe && onlyNode) context.report({
				node: onlyNode,
				messageId: "noFocusedTests",
				fix: (fixer) => fixable ? fixer.removeRange([onlyNode.range[0] - 1, onlyNode.range[1]]) : null
			});
		} };
	}
});

//#endregion
//#region src/rules/no-hooks.ts
const RULE_NAME$64 = "no-hooks";
var no_hooks_default = createEslintRule({
	name: RULE_NAME$64,
	meta: {
		type: "suggestion",
		docs: {
			description: "disallow setup and teardown hooks",
			recommended: false
		},
		schema: [{
			type: "object",
			properties: { allow: {
				type: "array",
				items: {
					type: "string",
					enum: [
						HookName.beforeAll,
						HookName.beforeEach,
						HookName.afterAll,
						HookName.afterEach
					]
				},
				additionalItems: false,
				uniqueItems: true,
				description: "This array option controls which Vitest hooks are checked by this rule."
			} },
			additionalProperties: false
		}],
		messages: { unexpectedHook: "Unexpected '{{ hookName }}' hook" },
		defaultOptions: [{ allow: [] }]
	},
	create(context, [{ allow = [] }]) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type === "hook" && !allow.includes(vitestFnCall.name)) context.report({
				node,
				messageId: "unexpectedHook",
				data: { hookName: vitestFnCall.name }
			});
		} };
	}
});

//#endregion
//#region src/rules/no-identical-title.ts
const RULE_NAME$63 = "no-identical-title";
const newDescribeContext = () => ({
	describeTitles: [],
	testTitles: []
});
var no_identical_title_default = createEslintRule({
	name: RULE_NAME$63,
	meta: {
		type: "problem",
		docs: {
			description: "disallow identical titles",
			recommended: false
		},
		fixable: "code",
		schema: [],
		messages: {
			multipleTestTitle: "Test is used multiple times in the same describe(suite) block",
			multipleDescribeTitle: "Describe is used multiple times in the same describe(suite) block"
		}
	},
	create(context) {
		const stack = [newDescribeContext()];
		return {
			CallExpression(node) {
				const currentStack = stack[stack.length - 1];
				const vitestFnCall = parseVitestFnCall(node, context);
				if (!vitestFnCall) return;
				if (vitestFnCall.name === "describe" || vitestFnCall.name === "suite") stack.push(newDescribeContext());
				if (vitestFnCall.members.some((member) => ["each", "for"].some((accessor) => isSupportedAccessor(member, accessor)))) return;
				const [argument] = node.arguments;
				if (!argument || !isStringNode(argument)) return;
				const title = getStringValue(argument);
				if (vitestFnCall.type === "test") {
					if (currentStack?.testTitles.includes(title)) context.report({
						node,
						messageId: "multipleTestTitle"
					});
					currentStack?.testTitles.push(title);
				}
				if (vitestFnCall.type !== "describe") return;
				if (currentStack?.describeTitles.includes(title)) context.report({
					node,
					messageId: "multipleDescribeTitle"
				});
				currentStack?.describeTitles.push(title);
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["describe"])) stack.pop();
			}
		};
	}
});

//#endregion
//#region src/rules/no-import-node-test.ts
const RULE_NAME$62 = "no-import-node-test";
var no_import_node_test_default = createEslintRule({
	name: RULE_NAME$62,
	meta: {
		docs: {
			description: "disallow importing `node:test`",
			recommended: false
		},
		type: "suggestion",
		messages: { noImportNodeTest: "Import from `vitest` instead of `node:test`" },
		fixable: "code",
		schema: []
	},
	create(context) {
		return { ImportDeclaration(node) {
			if (node.source.value === "node:test") context.report({
				messageId: "noImportNodeTest",
				node,
				fix: (fixer) => fixer.replaceText(node.source, node.source.raw.replace("node:test", "vitest"))
			});
		} };
	}
});

//#endregion
//#region src/utils/valid-vitest-globals.ts
const VITEST_GLOBALS = new Set([
	"suite",
	"test",
	"chai",
	"describe",
	"it",
	"expectTypeOf",
	"assertType",
	"expect",
	"assert",
	"vitest",
	"vi",
	"beforeAll",
	"afterAll",
	"beforeEach",
	"afterEach",
	"onTestFailed",
	"onTestFinished"
]);

//#endregion
//#region src/utils/guards.ts
const isVitestImport = (node) => {
	return node.source.value === "vitest";
};
const isVitestGlobalsImportSpecifier = (specifier) => {
	return specifier.type === _typescript_eslint_utils.AST_NODE_TYPES.ImportSpecifier && specifier.imported.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && VITEST_GLOBALS.has(specifier.imported.name);
};
const isVitestGlobalsProperty = (prop) => {
	return prop.type === _typescript_eslint_utils.AST_NODE_TYPES.Property && prop.key.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && VITEST_GLOBALS.has(prop.key.name);
};
const isVitestGlobalsFunction = (node) => {
	return node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && VITEST_GLOBALS.has(node.callee.name);
};
const isRequireVitestCall = (node) => {
	if (node?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression || node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier || node.callee.name !== "require") return false;
	const args = node.arguments;
	return args.length === 1 && args[0].type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && args[0].value === "vitest";
};
const isObjectPattern = (node) => {
	return node.type === _typescript_eslint_utils.AST_NODE_TYPES.ObjectPattern;
};

//#endregion
//#region src/utils/fixer-utils.ts
const removeVariableDeclarator = (fixer, node) => {
	const variableDeclaration = node.parent;
	const declarators = variableDeclaration.declarations;
	if (declarators.length === 1) return fixer.remove(variableDeclaration);
	const declaratorIndex = declarators.findIndex((dec) => dec.range[0] === node.range[0] && dec.range[1] === node.range[1]);
	if (declaratorIndex === 0) {
		const nextDeclarator = declarators[1];
		return fixer.removeRange([node.range[0], nextDeclarator.range[0]]);
	} else {
		const prevDeclarator = declarators[declaratorIndex - 1];
		return fixer.removeRange([prevDeclarator.range[1], node.range[1]]);
	}
};
const removeNodeFromArray = (fixer, nodes, target) => {
	const index = nodes.indexOf(target);
	if (index === -1) throw new Error("Target node not found in nodes array");
	if (index === 0) {
		const next = nodes[1];
		return fixer.removeRange([target.range[0], next.range[0]]);
	} else {
		const prev = nodes[index - 1];
		return fixer.removeRange([prev.range[1], target.range[1]]);
	}
};

//#endregion
//#region src/rules/no-importing-vitest-globals.ts
const RULE_NAME$61 = "no-importing-vitest-globals";
var no_importing_vitest_globals_default = createEslintRule({
	name: RULE_NAME$61,
	meta: {
		type: "suggestion",
		docs: {
			description: "disallow importing Vitest globals",
			recommended: false
		},
		messages: {
			noImportingVitestGlobals: "Do not import '{{name}}' from 'vitest'. Use globals configuration instead.",
			noRequiringVitestGlobals: "Do not require '{{name}}' from 'vitest'. Use globals configuration instead."
		},
		fixable: "code",
		schema: []
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (!isVitestImport(node)) return;
				const specifiers = node.specifiers;
				for (const specifier of specifiers) {
					if (!isVitestGlobalsImportSpecifier(specifier)) continue;
					context.report({
						node: specifier,
						messageId: "noImportingVitestGlobals",
						data: { name: specifier.imported.name },
						fix(fixer) {
							if (specifiers.every((spec) => isVitestGlobalsImportSpecifier(spec))) return fixer.remove(node);
							return removeNodeFromArray(fixer, specifiers, specifier);
						}
					});
				}
			},
			VariableDeclarator(node) {
				if (!isRequireVitestCall(node.init)) return;
				if (!isObjectPattern(node.id)) return;
				const properties = node.id.properties;
				for (const prop of properties) {
					if (!isVitestGlobalsProperty(prop)) continue;
					context.report({
						node: prop,
						messageId: "noRequiringVitestGlobals",
						data: { name: prop.key.name },
						fix(fixer) {
							if (properties.every((p) => isVitestGlobalsProperty(p))) return removeVariableDeclarator(fixer, node);
							return removeNodeFromArray(fixer, properties, prop);
						}
					});
				}
			}
		};
	}
});

//#endregion
//#region src/rules/no-interpolation-in-snapshots.ts
const RULE_NAME$60 = "no-interpolation-in-snapshots";
var no_interpolation_in_snapshots_default = createEslintRule({
	name: RULE_NAME$60,
	meta: {
		type: "problem",
		docs: {
			description: "disallow string interpolation in snapshots",
			recommended: false
		},
		fixable: "code",
		schema: [],
		messages: { noInterpolationInSnapshots: "Do not use string interpolation in snapshots" }
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			if (["toMatchInlineSnapshot", "toThrowErrorMatchingInlineSnapshot"].includes(getAccessorValue(vitestFnCall.matcher))) vitestFnCall.args.forEach((argument) => {
				if (argument.type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral && argument.expressions.length > 0) context.report({
					messageId: "noInterpolationInSnapshots",
					node: argument
				});
			});
		} };
	}
});

//#endregion
//#region src/rules/no-large-snapshots.ts
const RULE_NAME$59 = "no-large-snapshots";
const reportOnViolation = (context, node, { maxSize: lineLimit = 50, allowedSnapshots = {} }) => {
	const startLine = node.loc.start.line;
	const lineCount = node.loc.end.line - startLine;
	if (!Object.keys(allowedSnapshots).every(node_path.isAbsolute)) throw new Error("All paths for allowedSnapshots must be absolute. You can use JS config and `path.resolve`");
	let isAllowed = false;
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement && "left" in node.expression && node.expression.left.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.expression.left.property)) {
		const allowedSnapshotsInFile = allowedSnapshots[context.filename];
		if (allowedSnapshotsInFile) {
			const snapshotName = getAccessorValue(node.expression.left.property);
			isAllowed = allowedSnapshotsInFile.some((name) => {
				if (name instanceof RegExp) return name.test(snapshotName);
				return snapshotName === name;
			});
		}
	}
	if (!isAllowed && lineCount > lineLimit) context.report({
		node,
		messageId: lineLimit === 0 ? "noSnapShot" : "tooLongSnapShot",
		data: {
			lineCount,
			lineLimit
		}
	});
};
var no_large_snapshots_default = createEslintRule({
	name: RULE_NAME$59,
	meta: {
		docs: {
			description: "disallow large snapshots",
			recommended: false
		},
		messages: {
			noSnapShot: "`{{ lineCount }}`s should begin with lowercase",
			tooLongSnapShot: "Expected vitest snapshot to be smaller than {{ lineLimit }} lines but was {{ lineCount }} lines long"
		},
		type: "suggestion",
		schema: [{
			type: "object",
			properties: {
				maxSize: {
					description: "Maximum number of lines allowed in external snapshots.",
					type: "number"
				},
				inlineMaxSize: {
					description: "Maximum number of lines allowed in inline snapshots.",
					type: "number"
				},
				allowedSnapshots: {
					description: "Allowed snapshot names by absolute snapshot file path.",
					type: "object",
					additionalProperties: { type: "array" }
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{}]
	},
	create(context, [options]) {
		if (context.filename.endsWith(".snap")) return { ExpressionStatement(node) {
			reportOnViolation(context, node, options);
		} };
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			if (["toMatchInlineSnapshot", "toThrowErrorMatchingInlineSnapshot"].includes(getAccessorValue(vitestFnCall.matcher)) && vitestFnCall.args.length) reportOnViolation(context, vitestFnCall.args[0], {
				...options,
				maxSize: options.inlineMaxSize ?? options.maxSize
			});
		} };
	}
});

//#endregion
//#region src/rules/no-mocks-import.ts
const mocksDirName = "__mocks__";
const isMockPath = (path) => path.split(node_path.posix.sep).includes(mocksDirName);
const isMockImportLiteral = (expression) => isStringNode(expression) && isMockPath(getStringValue(expression));
const RULE_NAME$58 = "no-mocks-import";
var no_mocks_import_default = createEslintRule({
	name: RULE_NAME$58,
	meta: {
		type: "problem",
		docs: {
			description: "disallow importing from __mocks__ directory",
			recommended: false
		},
		messages: { noMocksImport: `Mocks should not be manually imported from a ${mocksDirName} directory. Instead use \`vi.mock\` and import from the original module path` },
		schema: []
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (isMockImportLiteral(node.source)) context.report({
					node,
					messageId: "noMocksImport"
				});
			},
			"CallExpression[callee.name=\"require\"]"(node) {
				const [args] = node.arguments;
				if (args && isMockImportLiteral(args)) context.report({
					node: args,
					messageId: "noMocksImport"
				});
			}
		};
	}
});

//#endregion
//#region src/rules/no-restricted-matchers.ts
const RULE_NAME$57 = "no-restricted-matchers";
const isChainRestricted = (chain, restriction) => {
	if (Object.prototype.hasOwnProperty.call(ModifierName, restriction) || restriction.endsWith(".not")) return chain.startsWith(restriction);
	return chain === restriction;
};
var no_restricted_matchers_default = createEslintRule({
	name: RULE_NAME$57,
	meta: {
		docs: {
			description: "disallow the use of certain matchers",
			recommended: false
		},
		type: "suggestion",
		schema: [{
			description: "Restricted matcher chains mapped to optional custom messages.",
			type: "object",
			additionalProperties: { type: ["string", "null"] }
		}],
		defaultOptions: [{}],
		messages: {
			restrictedChain: "use of {{ restriction }} is disallowed",
			restrictedChainWithMessage: "{{ message }}"
		}
	},
	create(context, [restrictedChains]) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const chain = vitestFnCall.members.map((node) => getAccessorValue(node)).join(".");
			for (const [restriction, message] of Object.entries(restrictedChains)) if (isChainRestricted(chain, restriction)) {
				context.report({
					messageId: message ? "restrictedChainWithMessage" : "restrictedChain",
					data: {
						message,
						restriction
					},
					loc: {
						start: vitestFnCall.members[0].loc.start,
						end: vitestFnCall.members[vitestFnCall.members.length - 1].loc.end
					}
				});
				break;
			}
		} };
	}
});

//#endregion
//#region src/rules/no-restricted-vi-methods.ts
const RULE_NAME$56 = "no-restricted-vi-methods";
var no_restricted_vi_methods_default = createEslintRule({
	name: RULE_NAME$56,
	meta: {
		type: "suggestion",
		docs: {
			description: "disallow specific `vi.` methods",
			recommended: false
		},
		schema: [{
			description: "Restricted `vi` methods mapped to optional custom messages.",
			type: "object",
			additionalProperties: { type: ["string", "null"] }
		}],
		messages: {
			restrictedViMethod: "Use of `{{ restriction }}` is disallowed",
			restrictedViMethodWithMessage: "{{ message }}"
		},
		defaultOptions: [{}]
	},
	create(context, [restrictedMethods]) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "vi" || vitestFnCall.members.length === 0) return;
			const method = getAccessorValue(vitestFnCall.members[0]);
			if (method in restrictedMethods) {
				const message = restrictedMethods[method];
				context.report({
					messageId: message ? "restrictedViMethodWithMessage" : "restrictedViMethod",
					data: {
						message,
						restriction: method
					},
					loc: {
						start: vitestFnCall.members[0].loc.start,
						end: vitestFnCall.members[vitestFnCall.members.length - 1].loc.end
					}
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/no-standalone-expect.ts
const RULE_NAME$55 = "no-standalone-expect";
const getBlockType = (statement, context) => {
	const func = statement.parent;
	if (!func) throw new Error("Unexpected block statement. If you feel like this is a bug report https://github.com/veritem/eslint-plugin-vitest/issues/new");
	if (func.type === _typescript_eslint_utils.AST_NODE_TYPES.FunctionDeclaration) return "function";
	if (isFunction(func) && func.parent) {
		const expr = func.parent;
		if (expr.type === _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclarator) return "function";
		if (expr.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && isTypeOfVitestFnCall(expr, context, ["describe"])) return "describe";
	}
	return null;
};
var no_standalone_expect_default = createEslintRule({
	name: RULE_NAME$55,
	meta: {
		docs: {
			description: "disallow using `expect` outside of `it` or `test` blocks",
			recommended: false
		},
		type: "suggestion",
		messages: { noStandaloneExpect: "Expect must be called inside a test block" },
		schema: [{
			type: "object",
			properties: { additionalTestBlockFunctions: {
				description: "Additional functions that should be treated as test blocks.",
				type: "array",
				items: { type: "string" }
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ additionalTestBlockFunctions: [] }]
	},
	create(context, [{ additionalTestBlockFunctions = [] }]) {
		const callStack = [];
		const isCustomTestBlockFunction = (node) => additionalTestBlockFunctions.includes(getNodeName(node) || "");
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type === "expect") {
					if (vitestFnCall.head.node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && vitestFnCall.members.length === 1 && !["assertions", "hasAssertions"].includes(getAccessorValue(vitestFnCall.members[0]))) return;
					const parent = callStack[callStack.length - 1];
					if (!parent || parent === DescribeAlias.describe) context.report({
						node,
						messageId: "noStandaloneExpect"
					});
					return;
				}
				if (vitestFnCall?.type === "test" || isCustomTestBlockFunction(node)) callStack.push("test");
				if (node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression) callStack.push("template");
			},
			"CallExpression:exit"(node) {
				const top = callStack[callStack.length - 1];
				if (top === "test" && (isTypeOfVitestFnCall(node, context, ["test"]) || isCustomTestBlockFunction(node)) && node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || top === "template" && node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression) callStack.pop();
			},
			BlockStatement(statement) {
				const blockType = getBlockType(statement, context);
				if (blockType) callStack.push(blockType);
			},
			"BlockStatement:exit"(statement) {
				if (getBlockType(statement, context)) callStack.pop();
			},
			ArrowFunctionExpression(node) {
				if (node.parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) callStack.push("arrow");
			},
			"ArrowFunctionExpression:exit"() {
				if (callStack[callStack.length - 1] === "arrow") callStack.pop();
			}
		};
	}
});

//#endregion
//#region src/rules/no-test-prefixes.ts
const RULE_NAME$54 = "no-test-prefixes";
var no_test_prefixes_default = createEslintRule({
	name: RULE_NAME$54,
	meta: {
		docs: {
			description: "disallow using the `f` and `x` prefixes in favour of `.only` and `.skip`",
			recommended: false
		},
		type: "suggestion",
		messages: { usePreferredName: "Use \"{{ preferredNodeName }}\" instead" },
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "describe" && vitestFnCall?.type !== "test") return;
			if (vitestFnCall.name[0] !== "f" && vitestFnCall.name[0] !== "x") return;
			const preferredNodeName = [
				vitestFnCall.name.slice(1),
				vitestFnCall.name[0] === "f" ? "only" : "skip",
				...vitestFnCall.members.map((m) => getAccessorValue(m))
			].join(".");
			const funcNode = node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;
			context.report({
				messageId: "usePreferredName",
				node: node.callee,
				data: { preferredNodeName },
				fix: (fixer) => [fixer.replaceText(funcNode, preferredNodeName)]
			});
		} };
	}
});

//#endregion
//#region src/rules/no-test-return-statement.ts
const RULE_NAME$53 = "no-test-return-statement";
const getBody = (args) => {
	const [, secondArg] = args;
	if (secondArg && isFunction(secondArg) && secondArg.body.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) return secondArg.body.body;
	return [];
};
var no_test_return_statement_default = createEslintRule({
	name: RULE_NAME$53,
	meta: {
		type: "problem",
		docs: {
			description: "disallow return statements in tests",
			recommended: false
		},
		schema: [],
		messages: { noTestReturnStatement: "Return statements are not allowed in tests" }
	},
	create(context) {
		return {
			CallExpression(node) {
				if (!isTypeOfVitestFnCall(node, context, ["test"])) return;
				const returnStmt = getBody(node.arguments).find((stmt) => stmt.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement);
				if (!returnStmt) return;
				context.report({
					messageId: "noTestReturnStatement",
					node: returnStmt
				});
			},
			FunctionDeclaration(node) {
				if (getTestCallExpressionsFromDeclaredVariables(context.sourceCode.getDeclaredVariables(node), context).length === 0) return;
				const returnStmt = node.body.body.find((stmt) => stmt.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement);
				if (!returnStmt) return;
				context.report({
					messageId: "noTestReturnStatement",
					node: returnStmt
				});
			}
		};
	}
});

//#endregion
//#region src/rules/no-unneeded-async-expect-function.ts
const RULE_NAME$52 = "no-unneeded-async-expect-function";
const getAwaitedCallExpression = (expression) => {
	if (!expression.async) return null;
	if (expression.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrowFunctionExpression && expression.body.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression && expression.body.argument.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return expression.body.argument;
	if (expression.body.type !== _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement || expression.body.body.length !== 1) return null;
	const [callback] = expression.body.body;
	if (callback.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement && callback.expression.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression && callback.expression.argument.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return callback.expression.argument;
	return null;
};
var no_unneeded_async_expect_function_default = createEslintRule({
	name: RULE_NAME$52,
	meta: {
		docs: { description: "Disallow unnecessary async function wrapper for expected promises" },
		fixable: "code",
		messages: { noAsyncWrapperForExpectedPromise: "Unnecessary async function wrapper" },
		schema: [],
		type: "suggestion"
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { parent } = vitestFnCall.head.node;
			if (parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const [awaitNode] = parent.arguments;
			if (!awaitNode || !isFunction(awaitNode)) return;
			const innerAsyncFuncCall = getAwaitedCallExpression(awaitNode);
			if (!innerAsyncFuncCall) return;
			context.report({
				node: awaitNode,
				messageId: "noAsyncWrapperForExpectedPromise",
				fix(fixer) {
					const { sourceCode } = context;
					return [fixer.replaceTextRange(awaitNode.range, sourceCode.getText(innerAsyncFuncCall))];
				}
			});
		} };
	}
});

//#endregion
//#region src/utils/ast-utils.ts
const eslintRequire = (0, node_module.createRequire)((0, node_module.createRequire)(require("url").pathToFileURL(__filename).href).resolve("eslint"));
const espreeParser = eslintRequire.resolve("espree");
const STATEMENT_LIST_PARENTS = new Set([
	_typescript_eslint_utils.AST_NODE_TYPES.Program,
	_typescript_eslint_utils.AST_NODE_TYPES.BlockStatement,
	_typescript_eslint_utils.AST_NODE_TYPES.SwitchCase,
	_typescript_eslint_utils.AST_NODE_TYPES.SwitchStatement
]);
const isValidParent = (parentType) => {
	return STATEMENT_LIST_PARENTS.has(parentType);
};
const isTokenASemicolon = (token) => token.value === ";" && token.type === _typescript_eslint_utils.AST_TOKEN_TYPES.Punctuator;
/**
* Gets the actual last token.
*
* If a semicolon is semicolon-less style's semicolon, this ignores it.
* For example:
*
*     foo()
*     ;[1, 2, 3].forEach(bar)
*/
const getActualLastToken = (sourceCode, node) => {
	const semiToken = sourceCode.getLastToken(node);
	const prevToken = sourceCode.getTokenBefore(semiToken);
	const nextToken = sourceCode.getTokenAfter(semiToken);
	return Boolean(prevToken && nextToken && prevToken.range[0] >= node.range[0] && isTokenASemicolon(semiToken) && semiToken.loc.start.line !== prevToken.loc.end.line && semiToken.loc.end.line === nextToken.loc.start.line) ? prevToken : semiToken;
};
const getPaddingLineSequences = (prevNode, nextNode, sourceCode) => {
	const pairs = [];
	const includeComments = true;
	let prevToken = getActualLastToken(sourceCode, prevNode);
	if (nextNode.loc.start.line - prevNode.loc.end.line >= 2) do {
		const token = sourceCode.getTokenAfter(prevToken, { includeComments });
		if (token.loc.start.line - prevToken.loc.end.line >= 2) pairs.push([prevToken, token]);
		prevToken = token;
	} while (prevToken.range[0] < nextNode.range[0]);
	return pairs;
};
const areTokensOnSameLine = (left, right) => left.loc.end.line === right.loc.start.line;
const isTypeCastExpression = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.TSAsExpression || node.type === _typescript_eslint_utils.AST_NODE_TYPES.TSTypeAssertion;
const followTypeAssertionChain = (expression) => isTypeCastExpression(expression) ? followTypeAssertionChain(expression.expression) : expression;

//#endregion
//#region src/utils/padding.ts
let PaddingType = /* @__PURE__ */ function(PaddingType) {
	PaddingType[PaddingType["Any"] = 0] = "Any";
	PaddingType[PaddingType["Always"] = 1] = "Always";
	return PaddingType;
}({});
let StatementType = /* @__PURE__ */ function(StatementType) {
	StatementType[StatementType["Any"] = 0] = "Any";
	StatementType[StatementType["AfterAllToken"] = 1] = "AfterAllToken";
	StatementType[StatementType["AfterEachToken"] = 2] = "AfterEachToken";
	StatementType[StatementType["BeforeAllToken"] = 3] = "BeforeAllToken";
	StatementType[StatementType["BeforeEachToken"] = 4] = "BeforeEachToken";
	StatementType[StatementType["DescribeToken"] = 5] = "DescribeToken";
	StatementType[StatementType["ExpectToken"] = 6] = "ExpectToken";
	StatementType[StatementType["ExpectTypeOfToken"] = 7] = "ExpectTypeOfToken";
	StatementType[StatementType["FdescribeToken"] = 8] = "FdescribeToken";
	StatementType[StatementType["FitToken"] = 9] = "FitToken";
	StatementType[StatementType["ItToken"] = 10] = "ItToken";
	StatementType[StatementType["TestToken"] = 11] = "TestToken";
	StatementType[StatementType["XdescribeToken"] = 12] = "XdescribeToken";
	StatementType[StatementType["XitToken"] = 13] = "XitToken";
	StatementType[StatementType["XtestToken"] = 14] = "XtestToken";
	return StatementType;
}({});
const paddingAlwaysTester = (prevNode, nextNode, paddingContext) => {
	const { sourceCode, ruleContext } = paddingContext;
	if (getPaddingLineSequences(prevNode, nextNode, sourceCode).length > 0) return;
	ruleContext.report({
		node: nextNode,
		messageId: "missingPadding",
		fix(fixer) {
			let prevToken = getActualLastToken(sourceCode, prevNode);
			const nextToken = sourceCode.getFirstTokenBetween(prevToken, nextNode, {
				includeComments: true,
				filter(token) {
					if (areTokensOnSameLine(prevToken, token)) {
						prevToken = token;
						return false;
					}
					return true;
				}
			}) || nextNode;
			const insertText = areTokensOnSameLine(prevToken, nextToken) ? "\n\n" : "\n";
			return fixer.insertTextAfter(prevToken, insertText);
		}
	});
};
const paddingTesters = {
	[PaddingType.Any]: () => true,
	[PaddingType.Always]: paddingAlwaysTester
};
const createScopeInfo = () => {
	let scope = null;
	return {
		get prevNode() {
			return scope.prevNode;
		},
		set prevNode(node) {
			scope.prevNode = node;
		},
		enter() {
			scope = {
				upper: scope,
				prevNode: null
			};
		},
		exit() {
			scope = scope.upper;
		}
	};
};
const createTokenTester = (tokenName) => {
	return (node, sourceCode) => {
		let activeNode = node;
		if (activeNode.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement) {
			if (activeNode.expression.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression) activeNode = activeNode.expression.argument;
			const token = sourceCode.getFirstToken(activeNode);
			return token?.type === _typescript_eslint_utils.AST_TOKEN_TYPES.Identifier && token.value === tokenName;
		}
		return false;
	};
};
const statementTesters = {
	[StatementType.Any]: () => true,
	[StatementType.AfterAllToken]: createTokenTester("afterAll"),
	[StatementType.AfterEachToken]: createTokenTester("afterEach"),
	[StatementType.BeforeAllToken]: createTokenTester("beforeAll"),
	[StatementType.BeforeEachToken]: createTokenTester("beforeEach"),
	[StatementType.DescribeToken]: createTokenTester("describe"),
	[StatementType.ExpectToken]: createTokenTester("expect"),
	[StatementType.ExpectTypeOfToken]: createTokenTester("expectTypeOf"),
	[StatementType.FdescribeToken]: createTokenTester("fdescribe"),
	[StatementType.FitToken]: createTokenTester("fit"),
	[StatementType.ItToken]: createTokenTester("it"),
	[StatementType.TestToken]: createTokenTester("test"),
	[StatementType.XdescribeToken]: createTokenTester("xdescribe"),
	[StatementType.XitToken]: createTokenTester("xit"),
	[StatementType.XtestToken]: createTokenTester("xtest")
};
/**
* Check whether the given node matches the statement type
*/
const nodeMatchesType = (node, statementType, paddingContext) => {
	let innerStatementNode = node;
	const { sourceCode } = paddingContext;
	while (innerStatementNode.type === _typescript_eslint_utils.AST_NODE_TYPES.LabeledStatement) innerStatementNode = innerStatementNode.body;
	if (Array.isArray(statementType)) return statementType.some((type) => nodeMatchesType(innerStatementNode, type, paddingContext));
	return statementTesters[statementType](innerStatementNode, sourceCode);
};
const testPadding = (prevNode, nextNode, paddingContext) => {
	const { configs } = paddingContext;
	const testType = (type) => paddingTesters[type](prevNode, nextNode, paddingContext);
	for (let i = configs.length - 1; i >= 0; --i) {
		const { prevStatementType: prevType, nextStatementType: nextType, paddingType } = configs[i];
		if (nodeMatchesType(prevNode, prevType, paddingContext) && nodeMatchesType(nextNode, nextType, paddingContext)) return testType(paddingType);
	}
	return testType(PaddingType.Any);
};
const verifyNode = (node, paddingContext) => {
	const { scopeInfo } = paddingContext;
	if (node.parent && !isValidParent(node.parent.type)) return;
	if (scopeInfo.prevNode) testPadding(scopeInfo.prevNode, node, paddingContext);
	scopeInfo.prevNode = node;
};
/**
* Creates an ESLint rule for a given set of padding Config objects.
*
* The algorithm is approximately this:
*
* For each 'scope' in the program
* - Enter the scope (store the parent scope and previous node)
* - For each statement in the scope
*   - Check the current node and previous node against the Config objects
*   - If the current node and previous node match a Config, check the padding.
*     Otherwise, ignore it.
*   - If the padding is missing (and required), report and fix
*   - Store the current node as the previous
*   - Repeat
* - Exit scope (return to parent scope and clear previous node)
*
* The items we're looking for with this rule are ExpressionStatement nodes
* where the first token is an Identifier with a name matching one of the vitest
* functions. It's not foolproof, of course, but it's probably good enough for
* almost all cases.
*
* The Config objects specify a padding type, a previous statement type, and a
* next statement type. Wildcard statement types and padding types are
* supported. The current node and previous node are checked against the
* statement types. If they match then the specified padding type is
* tested/enforced.
*/
const createPaddingRule = (name, description, configs, deprecated = false) => {
	return createEslintRule({
		name,
		meta: {
			docs: { description },
			fixable: "whitespace",
			deprecated,
			messages: { missingPadding: "expect blank line before this statement" },
			schema: [],
			type: "suggestion",
			defaultOptions: []
		},
		create(context) {
			const paddingContext = {
				ruleContext: context,
				sourceCode: context.sourceCode ?? context.getSourceCode(),
				scopeInfo: createScopeInfo(),
				configs
			};
			const { scopeInfo } = paddingContext;
			return {
				Program: scopeInfo.enter,
				"Program:exit": scopeInfo.exit,
				BlockStatement: scopeInfo.enter,
				"BlockStatement:exit": scopeInfo.exit,
				SwitchStatement: scopeInfo.enter,
				"SwitchStatement:exit": scopeInfo.exit,
				":statement": (node) => verifyNode(node, paddingContext),
				SwitchCase(node) {
					verifyNode(node, paddingContext);
					scopeInfo.enter();
				},
				"SwitchCase:exit": scopeInfo.exit
			};
		}
	});
};

//#endregion
//#region src/rules/padding-around-after-all-blocks.ts
const RULE_NAME$51 = "padding-around-after-all-blocks";
const config$6 = [{
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.Any,
	nextStatementType: StatementType.AfterAllToken
}, {
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.AfterAllToken,
	nextStatementType: StatementType.Any
}];
var padding_around_after_all_blocks_default = createPaddingRule(RULE_NAME$51, "Enforce padding around `afterAll` blocks", config$6);

//#endregion
//#region src/rules/padding-around-after-each-blocks.ts
const RULE_NAME$50 = "padding-around-after-each-blocks";
const config$5 = [{
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.Any,
	nextStatementType: StatementType.AfterEachToken
}, {
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.AfterEachToken,
	nextStatementType: StatementType.Any
}];
var padding_around_after_each_blocks_default = createPaddingRule(RULE_NAME$50, "Enforce padding around `afterEach` blocks", config$5);

//#endregion
//#region src/rules/padding-around-before-all-blocks.ts
const RULE_NAME$49 = "padding-around-before-all-blocks";
const config$4 = [{
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.Any,
	nextStatementType: StatementType.BeforeAllToken
}, {
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.BeforeAllToken,
	nextStatementType: StatementType.Any
}];
var padding_around_before_all_blocks_default = createPaddingRule(RULE_NAME$49, "Enforce padding around `beforeAll` blocks", config$4);

//#endregion
//#region src/rules/padding-around-before-each-blocks.ts
const RULE_NAME$48 = "padding-around-before-each-blocks";
const config$3 = [{
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.Any,
	nextStatementType: StatementType.BeforeEachToken
}, {
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.BeforeEachToken,
	nextStatementType: StatementType.Any
}];
var padding_around_before_each_blocks_default = createPaddingRule(RULE_NAME$48, "Enforce padding around `beforeEach` blocks", config$3);

//#endregion
//#region src/rules/padding-around-describe-blocks.ts
const RULE_NAME$47 = "padding-around-describe-blocks";
const config$2 = [{
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.Any,
	nextStatementType: [
		StatementType.DescribeToken,
		StatementType.FdescribeToken,
		StatementType.XdescribeToken
	]
}, {
	paddingType: PaddingType.Always,
	prevStatementType: [
		StatementType.DescribeToken,
		StatementType.FdescribeToken,
		StatementType.XdescribeToken
	],
	nextStatementType: StatementType.Any
}];
var padding_around_describe_blocks_default = createPaddingRule(RULE_NAME$47, "Enforce padding around `describe` blocks", config$2);

//#endregion
//#region src/rules/padding-around-expect-groups.ts
const RULE_NAME$46 = "padding-around-expect-groups";
const config$1 = [
	{
		paddingType: PaddingType.Always,
		prevStatementType: StatementType.Any,
		nextStatementType: StatementType.ExpectToken
	},
	{
		paddingType: PaddingType.Always,
		prevStatementType: StatementType.ExpectToken,
		nextStatementType: StatementType.Any
	},
	{
		paddingType: PaddingType.Any,
		prevStatementType: StatementType.ExpectToken,
		nextStatementType: StatementType.ExpectToken
	},
	{
		paddingType: PaddingType.Always,
		prevStatementType: StatementType.Any,
		nextStatementType: StatementType.ExpectTypeOfToken
	},
	{
		paddingType: PaddingType.Always,
		prevStatementType: StatementType.ExpectTypeOfToken,
		nextStatementType: StatementType.Any
	},
	{
		paddingType: PaddingType.Any,
		prevStatementType: StatementType.ExpectTypeOfToken,
		nextStatementType: StatementType.ExpectTypeOfToken
	}
];
var padding_around_expect_groups_default = createPaddingRule(RULE_NAME$46, "Enforce padding around `expect` groups", config$1);

//#endregion
//#region src/rules/padding-around-test-blocks.ts
const RULE_NAME$45 = "padding-around-test-blocks";
const config = [{
	paddingType: PaddingType.Always,
	prevStatementType: StatementType.Any,
	nextStatementType: [
		StatementType.TestToken,
		StatementType.ItToken,
		StatementType.FitToken,
		StatementType.XitToken,
		StatementType.XtestToken
	]
}, {
	paddingType: PaddingType.Always,
	prevStatementType: [
		StatementType.TestToken,
		StatementType.ItToken,
		StatementType.FitToken,
		StatementType.XitToken,
		StatementType.XtestToken
	],
	nextStatementType: StatementType.Any
}];
var padding_around_test_blocks_default = createPaddingRule(RULE_NAME$45, "Enforce padding around `test` blocks", config);

//#endregion
//#region src/rules/padding-around-all.ts
const RULE_NAME$44 = "padding-around-all";
var padding_around_all_default = createPaddingRule(RULE_NAME$44, "Enforce padding around vitest functions", [
	...config$6,
	...config$5,
	...config$4,
	...config$3,
	...config$2,
	...config$1,
	...config
]);

//#endregion
//#region src/rules/prefer-called-exactly-once-with.ts
const RULE_NAME$43 = "prefer-called-exactly-once-with";
const MATCHERS_TO_COMBINE = ["toHaveBeenCalledOnce", "toHaveBeenCalledWith"];
const MOCK_CALL_RESET_METHODS = [
	"mockClear",
	"mockReset",
	"mockRestore"
];
const hasMatchersToCombine = (target) => MATCHERS_TO_COMBINE.some((matcher) => matcher === target);
const getExpectText = (callee, source) => {
	if (callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return null;
	return source.getText(callee.object);
};
const getArgumentsText = (callExpression, source) => callExpression.arguments.map((arg) => source.getText(arg)).join(", ");
const getValidExpectCall = (vitestFnCall) => {
	if (vitestFnCall?.type !== "expect") return null;
	if (vitestFnCall.modifiers.some((modifier) => getAccessorValue(modifier) === "not")) return null;
	return vitestFnCall;
};
const getMatcherName = (vitestFnCall) => {
	const validExpectCall = getValidExpectCall(vitestFnCall);
	return validExpectCall ? getAccessorValue(validExpectCall.matcher) : null;
};
const getExpectArgText = ({ callee }) => {
	if (callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return null;
	const { object } = callee;
	if (object.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return null;
	const [firstArgument] = object.arguments;
	if (firstArgument.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return null;
	return firstArgument.name;
};
const getSharedExpectArgText = (firstCallExpression, secondCallExpression) => {
	const firstArgText = getExpectArgText(firstCallExpression);
	if (!firstArgText) return null;
	if (firstArgText !== getExpectArgText(secondCallExpression)) return null;
	return firstArgText;
};
const isTargetMockResetCall = (statement, expectArgText, minLine, maxLine) => {
	if (statement.type !== _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement) return false;
	if (statement.expression.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return false;
	const statementLine = statement.loc.start.line;
	if (statementLine <= minLine || statementLine >= maxLine) return false;
	const { callee } = statement.expression;
	if (callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return false;
	const { object, property } = callee;
	if (object.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return false;
	if (object.name !== expectArgText) return false;
	if (property.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return false;
	return MOCK_CALL_RESET_METHODS.some((method) => method === property.name);
};
const hasMockResetBetween = (body, firstCallExpression, secondCallExpression) => {
	const firstLine = firstCallExpression.loc.start.line;
	const secondLine = secondCallExpression.loc.start.line;
	const [minLine, maxLine] = firstLine < secondLine ? [firstLine, secondLine] : [secondLine, firstLine];
	const expectArgText = getSharedExpectArgText(firstCallExpression, secondCallExpression);
	if (!expectArgText) return false;
	return body.some((statement) => isTargetMockResetCall(statement, expectArgText, minLine, maxLine));
};
const getMemberProperty = (expression) => expression.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression ? expression.callee.property : null;
var prefer_called_exactly_once_with_default = createEslintRule({
	name: RULE_NAME$43,
	meta: {
		docs: { description: "Prefer `toHaveBeenCalledExactlyOnceWith` over `toHaveBeenCalledOnce` and `toHaveBeenCalledWith`" },
		messages: { preferCalledExactlyOnceWith: "Using `toHaveBeenCalledOnce` and `toHaveBeenCalledWith` on the same target; prefer `toHaveBeenCalledExactlyOnceWith` instead." },
		type: "suggestion",
		fixable: "code",
		schema: []
	},
	create(context) {
		const { sourceCode } = context;
		const getCallExpressions = (body) => body.filter((node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement).flatMap((node) => node.expression.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression ? node.expression : []);
		const checkBlockBody = (body) => {
			const callExpressions = getCallExpressions(body);
			const expectMatcherMap = /* @__PURE__ */ new Map();
			for (const callExpression of callExpressions) {
				const matcherName = getMatcherName(parseVitestFnCall(callExpression, context));
				const expectedText = getExpectText(callExpression.callee, sourceCode);
				if (!matcherName || !hasMatchersToCombine(matcherName) || !expectedText) continue;
				const newTargetNodes = [...expectMatcherMap.get(expectedText) ?? [], {
					matcherName,
					callExpression
				}];
				expectMatcherMap.set(expectedText, newTargetNodes);
			}
			for (const [expectedText, matcherReferences] of expectMatcherMap.entries()) {
				if (matcherReferences.length !== 2) continue;
				if (!matcherReferences.some((reference) => reference.matcherName === "toHaveBeenCalledOnce")) continue;
				const targetArgNode = matcherReferences.find((reference) => reference.matcherName === "toHaveBeenCalledWith");
				if (!targetArgNode) continue;
				const argsText = getArgumentsText(targetArgNode.callExpression, sourceCode);
				const [firstMatcherReference, secondMatcherReference] = matcherReferences;
				const targetNode = getMemberProperty(secondMatcherReference.callExpression);
				if (!targetNode) continue;
				const { callExpression: firstCallExpression } = firstMatcherReference;
				const { callExpression: secondCallExpression } = secondMatcherReference;
				if (hasMockResetBetween(body, firstCallExpression, secondCallExpression)) continue;
				context.report({
					messageId: "preferCalledExactlyOnceWith",
					node: targetNode,
					fix(fixer) {
						const replacement = `${sourceCode.text.slice(firstCallExpression.parent.range[0], firstCallExpression.range[0])}${expectedText}.toHaveBeenCalledExactlyOnceWith${targetArgNode.callExpression.typeArguments ? sourceCode.text.slice(targetArgNode.callExpression.typeArguments.range[0], targetArgNode.callExpression.typeArguments.range[1]) : ""}(${argsText})`;
						const lineStart = sourceCode.getIndexFromLoc({
							line: secondCallExpression.parent.loc.start.line,
							column: 0
						});
						const lineEnd = sourceCode.getIndexFromLoc({
							line: secondCallExpression.parent.loc.end.line + 1,
							column: 0
						});
						return [fixer.replaceText(firstCallExpression, replacement), fixer.removeRange([lineStart, lineEnd])];
					}
				});
			}
		};
		return {
			Program(node) {
				checkBlockBody(node.body);
			},
			BlockStatement(node) {
				checkBlockBody(node.body);
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-called-once.ts
const RULE_NAME$42 = "prefer-called-once";
const isOneLiteral = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && node.value === 1;
var prefer_called_once_default = createEslintRule({
	name: RULE_NAME$42,
	meta: {
		docs: {
			description: "enforce using `toBeCalledOnce()` or `toHaveBeenCalledOnce()`",
			recommended: false
		},
		messages: { preferCalledOnce: "Prefer {{ replacedMatcherName }}()" },
		type: "suggestion",
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { matcher } = vitestFnCall;
			const matcherName = getAccessorValue(matcher);
			if (["toBeCalledTimes", "toHaveBeenCalledTimes"].includes(matcherName) && vitestFnCall.args.length === 1 && isOneLiteral(getFirstMatcherArg(vitestFnCall))) {
				const replacedMatcherName = matcherName.replace("Times", "Once");
				context.report({
					data: { replacedMatcherName },
					messageId: "preferCalledOnce",
					node: matcher,
					fix: (fixer) => [fixer.replaceText(matcher, replacedMatcherName), fixer.remove(vitestFnCall.args[0])]
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/prefer-called-times.ts
const RULE_NAME$41 = "prefer-called-times";
var prefer_called_times_default = createEslintRule({
	name: RULE_NAME$41,
	meta: {
		docs: {
			description: "enforce using `toBeCalledTimes(1)` or `toHaveBeenCalledTimes(1)`",
			recommended: false
		},
		messages: { preferCalledTimes: "Prefer {{ replacedMatcherName }}(1)" },
		type: "suggestion",
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { matcher } = vitestFnCall;
			const matcherName = getAccessorValue(matcher);
			if (["toBeCalledOnce", "toHaveBeenCalledOnce"].includes(matcherName)) {
				const replacedMatcherName = matcherName.replace("Once", "Times");
				context.report({
					data: { replacedMatcherName },
					messageId: "preferCalledTimes",
					node: matcher,
					fix: (fixer) => [fixer.replaceText(matcher, replacedMatcherName), fixer.insertTextAfterRange([vitestFnCall.matcher.range[0], vitestFnCall.matcher.range[1] + 1], "1")]
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/prefer-called-with.ts
const RULE_NAME$40 = "prefer-called-with";
var prefer_called_with_default = createEslintRule({
	name: RULE_NAME$40,
	meta: {
		docs: {
			description: "enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`",
			recommended: false
		},
		messages: { preferCalledWith: "Prefer {{ matcherName }}With(/* expected args */)" },
		type: "suggestion",
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			if (vitestFnCall.modifiers.some((node) => getAccessorValue(node) === "not")) return;
			const { matcher } = vitestFnCall;
			const matcherName = getAccessorValue(matcher);
			if (["toBeCalled", "toHaveBeenCalled"].includes(matcherName)) context.report({
				data: { matcherName },
				messageId: "preferCalledWith",
				node: matcher,
				fix: (fixer) => [fixer.replaceText(matcher, `${matcherName}With`)]
			});
		} };
	}
});

//#endregion
//#region src/utils/msc.ts
const isBooleanLiteral = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof node.value === "boolean";
/**
* Checks if the given `ParsedExpectMatcher` is either a call to one of the equality matchers,
* with a boolean` literal as the sole argument, *or* is a call to `toBeTruthy` or `toBeFalsy`.
*/
const isBooleanEqualityMatcher = (expectFnCall) => {
	const matcherName = getAccessorValue(expectFnCall.matcher);
	if (["toBeTruthy", "toBeFalsy"].includes(matcherName)) return true;
	if (expectFnCall.args.length !== 1) return false;
	const arg = getFirstMatcherArg(expectFnCall);
	return Object.prototype.hasOwnProperty.call(EqualityMatcher, matcherName) && isBooleanLiteral(arg);
};
const isInstanceOfBinaryExpression = (node, className) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.BinaryExpression && node.operator === "instanceof" && isSupportedAccessor(node.right, className);
const hasOnlyOneArgument = (call) => call.arguments.length === 1;

//#endregion
//#region src/rules/prefer-comparison-matcher.ts
const RULE_NAME$39 = "prefer-comparison-matcher";
const isString = (node) => {
	return isStringNode(node) || node?.type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral;
};
const isComparingToString = (expression) => {
	return isString(expression.left) || isString(expression.right);
};
const invertOperator = (operator) => {
	switch (operator) {
		case ">": return "<=";
		case "<": return ">=";
		case ">=": return "<";
		case "<=": return ">";
	}
	return null;
};
const determineMatcher = (operator, negated) => {
	switch (negated ? invertOperator(operator) : operator) {
		case ">": return "toBeGreaterThan";
		case "<": return "toBeLessThan";
		case ">=": return "toBeGreaterThanOrEqual";
		case "<=": return "toBeLessThanOrEqual";
	}
	return null;
};
var prefer_comparison_matcher_default = createEslintRule({
	name: RULE_NAME$39,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using the built-in comparison matchers",
			recommended: false
		},
		schema: [],
		fixable: "code",
		messages: { useToBeComparison: "Prefer using `{{ preferredMatcher }}` instead" }
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect" || vitestFnCall.args.length === 0) return;
			const { parent: expect } = vitestFnCall.head.node;
			if (expect?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const { arguments: [comparison], range: [, expectCallEnd] } = expect;
			const { matcher } = vitestFnCall;
			const matcherArg = getFirstMatcherArg(vitestFnCall);
			if (comparison?.type !== _typescript_eslint_utils.AST_NODE_TYPES.BinaryExpression || isComparingToString(comparison) || !Object.prototype.hasOwnProperty.call(EqualityMatcher, getAccessorValue(matcher)) || !isBooleanLiteral(matcherArg)) return;
			const [modifier] = vitestFnCall.modifiers;
			const hasNot = vitestFnCall.modifiers.some((nod) => getAccessorValue(nod) === "not");
			const preferredMatcher = determineMatcher(comparison.operator, matcherArg.value === hasNot);
			if (!preferredMatcher) return;
			context.report({
				fix(fixer) {
					const { sourceCode } = context;
					const modifierText = modifier && getAccessorValue(modifier) !== "not" ? `.${getAccessorValue(modifier)}` : "";
					return [
						fixer.replaceText(comparison, sourceCode.getText(comparison.left)),
						fixer.replaceTextRange([expectCallEnd, matcher.parent.range[1]], `${modifierText}.${preferredMatcher}`),
						fixer.replaceText(matcherArg, sourceCode.getText(comparison.right))
					];
				},
				messageId: "useToBeComparison",
				data: { preferredMatcher },
				node: matcher
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-describe-function-title.ts
const RULE_NAME$38 = "prefer-describe-function-title";
var prefer_describe_function_title_default = createEslintRule({
	name: RULE_NAME$38,
	meta: {
		type: "problem",
		docs: {
			description: "enforce using a function as a describe title over an equivalent string",
			recommended: false
		},
		fixable: "code",
		schema: [],
		messages: { preferFunction: "Enforce using a function over an equivalent string" }
	},
	create(context) {
		return { CallExpression(node) {
			if (node.arguments.length < 2) return;
			const scope = getModuleScope(context, node);
			const [argument] = node.arguments;
			if (argument.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && argument.object.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && argument.property.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
				const identifierName = argument.object.name;
				if ((scope?.set.get(identifierName)?.defs[0])?.type !== _typescript_eslint_scope_manager.DefinitionType.ImportBinding || argument.property.name !== "name") return;
				context.report({
					node: argument,
					messageId: "preferFunction",
					fix(fixer) {
						return fixer.replaceText(argument, identifierName);
					}
				});
				return;
			}
			if (argument.type !== _typescript_eslint_utils.AST_NODE_TYPES.Literal || typeof argument.value !== "string") return;
			const describedTitle = argument.value;
			if (parseVitestFnCall(node, context)?.type !== "describe") return;
			const scopedFunction = scope?.set.get(describedTitle)?.defs[0];
			if (scopedFunction?.type !== _typescript_eslint_scope_manager.DefinitionType.ImportBinding) return;
			if (parsePluginSettings(context.settings).typecheck) {
				if (!isClassOrFunctionType(_typescript_eslint_utils.ESLintUtils.getParserServices(context).getTypeAtLocation(scopedFunction.node))) return;
			}
			context.report({
				node: argument,
				messageId: "preferFunction",
				fix(fixer) {
					return fixer.replaceText(argument, describedTitle);
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-each.ts
const RULE_NAME$37 = "prefer-each";
var prefer_each_default = createEslintRule({
	name: RULE_NAME$37,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `each` rather than manual loops",
			recommended: false
		},
		schema: [],
		messages: { preferEach: "Prefer using `{{ fn }}.each` rather than a manual loop" }
	},
	create(context) {
		const vitestFnCalls = [];
		let inTestCaseCall = false;
		const recommendFn = () => {
			if (vitestFnCalls.length === 1 && vitestFnCalls[0] === "test") return "it";
			return "describe";
		};
		const enterForLoop = () => {
			if (vitestFnCalls.length === 0 || inTestCaseCall) return;
			vitestFnCalls.length = 0;
		};
		const exitForLoop = (node) => {
			if (vitestFnCalls.length === 0 || inTestCaseCall) return;
			context.report({
				node,
				messageId: "preferEach",
				data: { fn: recommendFn() }
			});
			vitestFnCalls.length = 0;
		};
		return {
			ForStatement: enterForLoop,
			"ForStatement:exit": exitForLoop,
			ForInStatement: enterForLoop,
			"ForInStatement:exit": exitForLoop,
			ForOfStatement: enterForLoop,
			"ForOfStatement:exit": exitForLoop,
			CallExpression(node) {
				const { type: vitestFnCallType } = parseVitestFnCall(node, context) ?? {};
				if (vitestFnCallType === "hook" || vitestFnCallType === "describe" || vitestFnCallType === "test") vitestFnCalls.push(vitestFnCallType);
				if (vitestFnCallType === "test") inTestCaseCall = true;
			},
			"CallExpression:exit"(node) {
				const { type: vitestFnCallType } = parseVitestFnCall(node, context) ?? {};
				if (vitestFnCallType === "test") inTestCaseCall = false;
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-equality-matcher.ts
const RULE_NAME$36 = "prefer-equality-matcher";
var prefer_equality_matcher_default = createEslintRule({
	name: RULE_NAME$36,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using the built-in equality matchers",
			recommended: false
		},
		messages: {
			useEqualityMatcher: "Prefer using one of the equality matchers instead",
			suggestEqualityMatcher: "Use `{{ equalityMatcher }}`"
		},
		hasSuggestions: true,
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect" || vitestFnCall.args.length === 0) return;
			const { parent: expect } = vitestFnCall.head.node;
			if (expect?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const { arguments: [comparison], range: [, expectCallEnd] } = expect;
			const { matcher } = vitestFnCall;
			const matcherArg = getFirstMatcherArg(vitestFnCall);
			if (comparison?.type !== _typescript_eslint_utils.AST_NODE_TYPES.BinaryExpression || comparison.operator !== "===" && comparison.operator !== "!==" || !Object.prototype.hasOwnProperty.call(EqualityMatcher, getAccessorValue(matcher)) || !isBooleanLiteral(matcherArg)) return;
			const matcherValue = matcherArg.value;
			const [modifier] = vitestFnCall.modifiers;
			const hasNot = vitestFnCall.modifiers.some((nod) => getAccessorValue(nod) === "not");
			const addNotModifier = (comparison.operator === "!==" ? !matcherValue : matcherValue) === hasNot;
			const buildFixer = (equalityMatcher) => (fixer) => {
				const { sourceCode } = context;
				let modifierText = modifier && getAccessorValue(modifier) !== "not" ? `.${getAccessorValue(modifier)}` : "";
				if (addNotModifier) modifierText += `.${ModifierName.not}`;
				return [
					fixer.replaceText(comparison, sourceCode.getText(comparison.left)),
					fixer.replaceTextRange([expectCallEnd, matcher.parent.range[1]], `${modifierText}.${equalityMatcher}`),
					fixer.replaceText(matcherArg, sourceCode.getText(comparison.right))
				];
			};
			context.report({
				messageId: "useEqualityMatcher",
				suggest: [
					"toBe",
					"toEqual",
					"toStrictEqual"
				].map((equalityMatcher) => ({
					messageId: "suggestEqualityMatcher",
					data: { equalityMatcher },
					fix: buildFixer(equalityMatcher)
				})),
				node: matcher
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-expect-assertions.ts
const RULE_NAME$35 = "prefer-expect-assertions";
const isFirstStatement = (node) => {
	let parent = node;
	while (parent) {
		if (parent.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) return parent.parent.body[0] === parent;
		if (parent.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrowFunctionExpression) return true;
		parent = parent.parent;
	}
	throw new Error("Could not find parent block statement");
};
const suggestRemovingExtraArguments = (context, func, from) => ({
	messageId: "suggestRemovingExtraArguments",
	fix: (fixer) => removeExtraArgumentsFixer(fixer, context, func, from)
});
var prefer_expect_assertions_default = createEslintRule({
	name: RULE_NAME$35,
	meta: {
		docs: {
			description: "enforce using expect assertions instead of callbacks",
			recommended: false
		},
		messages: {
			hasAssertionsTakesNoArguments: "`expect.hasAssertions` expects no arguments",
			assertionsRequiresOneArgument: "`expect.assertions` excepts a single argument of type number",
			assertionsRequiresNumberArgument: "This argument should be a number",
			haveExpectAssertions: "Every test should have either `expect.assertions(<number of assertions>)` or `expect.hasAssertions()` as its first expression",
			suggestAddingHasAssertions: "Add `expect.hasAssertions()`",
			suggestAddingAssertions: "Add `expect.assertions(<number of assertions>)`",
			suggestRemovingExtraArguments: "Remove extra arguments"
		},
		type: "suggestion",
		hasSuggestions: true,
		schema: [{
			type: "object",
			properties: {
				onlyFunctionsWithAsyncKeyword: {
					description: "Only check test functions declared with the async keyword.",
					type: "boolean"
				},
				onlyFunctionsWithExpectInLoop: {
					description: "Only check test functions that contain `expect` inside loops.",
					type: "boolean"
				},
				onlyFunctionsWithExpectInCallback: {
					description: "Only check test functions that contain `expect` in callbacks.",
					type: "boolean"
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{
			onlyFunctionsWithAsyncKeyword: false,
			onlyFunctionsWithExpectInCallback: false,
			onlyFunctionsWithExpectInLoop: false
		}]
	},
	create(context, [options]) {
		let expressionDepth = 0;
		let hasExpectInCallBack = false;
		let hasExpectInLoop = false;
		let hasExpectAssertAsFirstStatement = false;
		let testContextName = null;
		let inTestCaseCall = false;
		let inForLoop = false;
		const shouldCheckFunction = (testFunction) => {
			if (!options.onlyFunctionsWithAsyncKeyword && !options.onlyFunctionsWithExpectInCallback && !options.onlyFunctionsWithExpectInLoop) return true;
			if (options.onlyFunctionsWithAsyncKeyword) {
				if (testFunction.async) return true;
			}
			if (options.onlyFunctionsWithExpectInCallback) {
				if (hasExpectInCallBack) return true;
			}
			if (options.onlyFunctionsWithExpectInLoop) {
				if (hasExpectInLoop) return true;
			}
			return false;
		};
		function checkExpectHasAssertions(expectFnCall, func) {
			if (getAccessorValue(expectFnCall.members[0]) === "hasAssertions") {
				if (expectFnCall.args.length) context.report({
					messageId: "hasAssertionsTakesNoArguments",
					node: expectFnCall.matcher,
					suggest: [suggestRemovingExtraArguments(context, func, 0)]
				});
				return;
			}
			if (expectFnCall.args.length !== 1) {
				let { loc } = expectFnCall.matcher;
				const suggestions = [];
				if (expectFnCall.args.length) {
					loc = expectFnCall.args[1].loc;
					suggestions.push(suggestRemovingExtraArguments(context, func, 1));
				}
				context.report({
					messageId: "assertionsRequiresOneArgument",
					suggest: suggestions,
					loc
				});
				return;
			}
			const [arg] = expectFnCall.args;
			if (arg.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof arg.value === "number" && Number.isInteger(arg.value)) return;
			context.report({
				messageId: "assertionsRequiresNumberArgument",
				node: arg
			});
		}
		const enterExpression = () => inTestCaseCall && expressionDepth++;
		const exitExpression = () => inTestCaseCall && expressionDepth--;
		const enterForLoop = () => inForLoop = true;
		const exitForLoop = () => inForLoop = false;
		return {
			FunctionExpression: enterExpression,
			"FunctionExpression:exit": exitExpression,
			ArrowFunctionExpression: enterExpression,
			"ArrowFunctionExpression:exit": exitExpression,
			ForStatement: enterForLoop,
			"ForStatement:exit": exitForLoop,
			ForInStatement: enterForLoop,
			"ForInStatement:exit": exitForLoop,
			ForOfStatement: enterForLoop,
			"ForOfStatement:exit": exitForLoop,
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type === "test") {
					inTestCaseCall = true;
					return;
				}
				if (vitestFnCall?.head.type === "testContext" && vitestFnCall.members[0] && vitestFnCall.members[0].type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && vitestFnCall.members[0].name === "expect") testContextName = `${vitestFnCall.head.local}`;
				if (vitestFnCall?.type === "expect" && inTestCaseCall) {
					if (expressionDepth === 1 && isFirstStatement(node) && vitestFnCall.head.node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && vitestFnCall.members.length === 1 && ["assertions", "hasAssertions"].includes(getAccessorValue(vitestFnCall.members[0]))) {
						checkExpectHasAssertions(vitestFnCall, node);
						hasExpectAssertAsFirstStatement = true;
					}
					if (inForLoop) hasExpectInLoop = true;
					if (expressionDepth > 1) hasExpectInCallBack = true;
				}
			},
			"CallExpression:exit"(node) {
				if (!isTypeOfVitestFnCall(node, context, ["test"])) return;
				inTestCaseCall = false;
				if (node.arguments.length < 2) return;
				const [, secondArg] = node.arguments;
				if (!isFunction(secondArg) || !shouldCheckFunction(secondArg)) return;
				hasExpectInLoop = false;
				hasExpectInCallBack = false;
				if (hasExpectAssertAsFirstStatement) {
					hasExpectAssertAsFirstStatement = false;
					return;
				}
				const suggestions = [];
				if (secondArg.body.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) {
					const prefix = testContextName ? `${testContextName}.` : "";
					suggestions.push(["suggestAddingHasAssertions", `${prefix}expect.hasAssertions();`], ["suggestAddingAssertions", `${prefix}expect.assertions();`]);
				}
				context.report({
					messageId: "haveExpectAssertions",
					node,
					suggest: suggestions.map(([messageId, text]) => ({
						messageId,
						fix: (fixer) => fixer.insertTextBeforeRange([secondArg.body.range[0] + 1, secondArg.body.range[1]], text)
					}))
				});
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-expect-resolves.ts
const RULE_NAME$34 = "prefer-expect-resolves";
var prefer_expect_resolves_default = createEslintRule({
	name: RULE_NAME$34,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `expect().resolves` over `expect(await ...)` syntax",
			recommended: false
		},
		fixable: "code",
		messages: { expectResolves: "Use `expect().resolves` instead" },
		schema: []
	},
	create: (context) => ({ CallExpression(node) {
		const vitestFnCall = parseVitestFnCall(node, context);
		if (vitestFnCall?.type !== "expect") return;
		const { parent } = vitestFnCall.head.node;
		if (parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
		const [awaitNode] = parent.arguments;
		if (awaitNode?.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression) context.report({
			node: awaitNode,
			messageId: "expectResolves",
			fix(fixer) {
				return [
					fixer.insertTextBefore(parent, "await "),
					fixer.removeRange([awaitNode.range[0], awaitNode.argument.range[0]]),
					fixer.insertTextAfter(parent, ".resolves")
				];
			}
		});
	} })
});

//#endregion
//#region src/rules/prefer-expect-type-of.ts
const RULE_NAME$33 = "prefer-expect-type-of";
const typeMatchers = {
	string: "toBeString",
	number: "toBeNumber",
	boolean: "toBeBoolean",
	object: "toBeObject",
	function: "toBeFunction",
	symbol: "toBeSymbol",
	bigint: "toBeBigInt",
	undefined: "toBeUndefined"
};
var prefer_expect_type_of_default = createEslintRule({
	name: RULE_NAME$33,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `expectTypeOf` instead of `expect(typeof ...)`",
			recommended: false
		},
		schema: [],
		fixable: "code",
		messages: { preferExpectTypeOf: "Use `expectTypeOf({{ value }}).{{ matcher }}()` instead of `expect(typeof {{ value }}).toBe(\"{{ type }}\")`" }
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			if (vitestFnCall.head.node.parent?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const [firstArg] = vitestFnCall.head.node.parent.arguments;
			if (!firstArg || firstArg.type !== _typescript_eslint_utils.AST_NODE_TYPES.UnaryExpression) return;
			if (firstArg.operator !== "typeof") return;
			const matcherName = getAccessorValue(vitestFnCall.matcher);
			if (matcherName !== "toBe" && matcherName !== "toEqual") return;
			const [matcherArg] = vitestFnCall.args;
			if (!matcherArg || matcherArg.type !== _typescript_eslint_utils.AST_NODE_TYPES.Literal) return;
			if (typeof matcherArg.value !== "string") return;
			const typeString = matcherArg.value;
			const expectTypeOfMatcher = typeMatchers[typeString];
			if (!expectTypeOfMatcher) return;
			const valueText = context.sourceCode.getText(firstArg.argument);
			const modifierText = vitestFnCall.modifiers.map((mod) => getAccessorValue(mod)).join(".");
			const modifierPrefix = modifierText ? `.${modifierText}` : "";
			context.report({
				node,
				messageId: "preferExpectTypeOf",
				data: {
					value: valueText,
					matcher: expectTypeOfMatcher,
					type: typeString
				},
				fix(fixer) {
					return fixer.replaceText(node, `expectTypeOf(${valueText})${modifierPrefix}.${expectTypeOfMatcher}()`);
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-hooks-in-order.ts
const RULE_NAME$32 = "prefer-hooks-in-order";
const HooksOrder = [
	"beforeAll",
	"beforeEach",
	"afterEach",
	"afterAll"
];
var prefer_hooks_in_order_default = createEslintRule({
	name: RULE_NAME$32,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce having hooks in consistent order",
			recommended: false
		},
		messages: { reorderHooks: "`{{ currentHook }}` hooks should be before any `{{ previousHook }}` hooks" },
		schema: []
	},
	create(context) {
		let previousHookIndex = -1;
		let inHook = false;
		return {
			CallExpression(node) {
				if (inHook) return;
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type !== "hook") {
					previousHookIndex = -1;
					return;
				}
				inHook = true;
				const currentHook = vitestFnCall.name;
				const currentHookIndex = HooksOrder.indexOf(currentHook);
				if (currentHookIndex < previousHookIndex) {
					context.report({
						messageId: "reorderHooks",
						data: {
							previousHook: HooksOrder[previousHookIndex],
							currentHook
						},
						node
					});
					inHook = false;
					return;
				}
				previousHookIndex = currentHookIndex;
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["hook"])) {
					inHook = false;
					return;
				}
				if (inHook) return;
				previousHookIndex = -1;
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-hooks-on-top.ts
const RULE_NAME$31 = "prefer-hooks-on-top";
var prefer_hooks_on_top_default = createEslintRule({
	name: RULE_NAME$31,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce having hooks before any test cases",
			recommended: false
		},
		messages: { noHookOnTop: "Hooks should come before test cases" },
		schema: []
	},
	create(context) {
		const hooksContext = [false];
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				const hasExemptModifier = vitestFnCall?.members?.some((member) => ["extend", "scoped"].includes(getAccessorValue(member)));
				if (vitestFnCall?.type && ["test", "it"].includes(vitestFnCall.type) && !hasExemptModifier) hooksContext[hooksContext.length - 1] = true;
				if (hooksContext[hooksContext.length - 1] && isTypeOfVitestFnCall(node, context, ["hook"])) context.report({
					messageId: "noHookOnTop",
					node
				});
				hooksContext.push(false);
			},
			"CallExpression:exit"() {
				hooksContext.pop();
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-import-in-mock.ts
const RULE_NAME$30 = "prefer-import-in-mock";
const MOCK_METHODS = new Set(["mock", "doMock"]);
var prefer_import_in_mock_default = createEslintRule({
	name: RULE_NAME$30,
	meta: {
		fixable: "code",
		type: "suggestion",
		docs: { description: "prefer dynamic import in mock" },
		messages: { preferImport: "Replace '{{path}}' with import('{{path}}')" },
		schema: [{
			type: "object",
			properties: { fixable: {
				description: "Whether the rule should provide an autofix.",
				type: "boolean"
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ fixable: true }]
	},
	create(context, options) {
		const fixable = options[0].fixable;
		return { CallExpression(node) {
			if (node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return;
			if (parseVitestFnCall(node, context)?.type !== "vi") return false;
			const { property } = node.callee;
			if (property.type != _typescript_eslint_utils.AST_NODE_TYPES.Identifier || !MOCK_METHODS.has(property.name)) return;
			const pathArg = node.arguments[0];
			if (pathArg && pathArg.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal) context.report({
				messageId: "preferImport",
				data: { path: pathArg.value },
				node,
				fix(fixer) {
					if (!fixable) return null;
					return fixer.replaceText(pathArg, `import('${pathArg.value}')`);
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-importing-vitest-globals.ts
const RULE_NAME$29 = "prefer-importing-vitest-globals";
var prefer_importing_vitest_globals_default = createEslintRule({
	name: RULE_NAME$29,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce importing Vitest globals",
			recommended: false
		},
		messages: { preferImportingVitestGlobals: "Import '{{name}}' from 'vitest'" },
		schema: [],
		fixable: "code"
	},
	create(context) {
		const importedNames = /* @__PURE__ */ new Set();
		let vitestImportSpecifiers;
		let vitestRequireProperties;
		return {
			ImportDeclaration(node) {
				if (!isVitestImport(node)) return;
				const specifiers = node.specifiers;
				for (const specifier of specifiers) if (isVitestGlobalsImportSpecifier(specifier)) {
					const importedName = specifier.imported.name;
					importedNames.add(importedName);
				}
				vitestImportSpecifiers = node.specifiers;
			},
			VariableDeclarator(node) {
				if (!isRequireVitestCall(node.init)) return;
				if (!isObjectPattern(node.id)) return;
				const properties = node.id.properties;
				for (const prop of properties) if (isVitestGlobalsProperty(prop)) {
					const importedName = prop.key.name;
					importedNames.add(importedName);
				}
				vitestRequireProperties = properties;
			},
			CallExpression(node) {
				if (!isVitestGlobalsFunction(node)) return;
				const name = node.callee.name;
				if (importedNames.has(name)) return;
				const variable = context.sourceCode.getScope(node).set.get(name);
				if (variable && variable.defs.length > 0) {
					if (variable.defs.some((def) => {
						if (def.type === "ImportBinding") return false;
						if (def.type === "Variable" && def.node.init && isRequireVitestCall(def.node.init)) return false;
						return true;
					})) return;
				}
				context.report({
					node: node.callee,
					messageId: "preferImportingVitestGlobals",
					data: { name },
					fix(fixer) {
						const program = context.sourceCode.ast;
						if (!vitestImportSpecifiers) if (!vitestRequireProperties) return fixer.insertTextBefore(program.body[0], `import { ${name} } from 'vitest';\n`);
						else {
							const lastProp = vitestRequireProperties[vitestRequireProperties.length - 1];
							return fixer.insertTextAfter(lastProp, `, ${name}`);
						}
						if (vitestImportSpecifiers.find((s) => s.type === "ImportNamespaceSpecifier")) return fixer.insertTextBefore(program.body[0], `import { ${name} } from 'vitest';\n`);
						const defaultImport = vitestImportSpecifiers.find((s) => s.type === "ImportDefaultSpecifier");
						if (defaultImport) return fixer.insertTextAfter(defaultImport, `, { ${name} }`);
						const lastSpecifier = vitestImportSpecifiers[vitestImportSpecifiers.length - 1];
						return fixer.insertTextAfter(lastSpecifier, `, ${name}`);
					}
				});
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-lowercase-title.ts
const RULE_NAME$28 = "prefer-lowercase-title";
const hasStringAsFirstArgument = (node) => node.arguments[0] && isStringNode(node.arguments[0]);
const populateIgnores = (ignore) => {
	const ignores = [];
	if (ignore.includes(DescribeAlias.describe)) ignores.push(...Object.keys(DescribeAlias));
	if (ignore.includes(TestCaseName.test)) ignores.push(...Object.keys(TestCaseName).filter((k) => k.endsWith(TestCaseName.test)));
	if (ignore.includes(TestCaseName.it)) ignores.push(...Object.keys(TestCaseName).filter((k) => k.endsWith(TestCaseName.it)));
	return ignores;
};
var prefer_lowercase_title_default = createEslintRule({
	name: RULE_NAME$28,
	meta: {
		type: "problem",
		docs: {
			description: "enforce lowercase titles",
			recommended: false
		},
		fixable: "code",
		messages: {
			lowerCaseTitle: "`{{ method }}`s should begin with lowercase",
			fullyLowerCaseTitle: "`{{ method }}`s should be lowercase"
		},
		schema: [{
			type: "object",
			properties: {
				ignore: {
					description: "Functions whose titles should be ignored when checking case.",
					type: "array",
					items: {
						type: "string",
						enum: [
							DescribeAlias.describe,
							TestCaseName.test,
							TestCaseName.it
						]
					}
				},
				allowedPrefixes: {
					description: "Title prefixes that are exempt from this rule.",
					type: "array",
					items: { type: "string" },
					additionalItems: false
				},
				ignoreTopLevelDescribe: {
					description: "Ignore the first top-level `describe` title.",
					type: "boolean"
				},
				lowercaseFirstCharacterOnly: {
					description: "Only require the first character to be lowercase.",
					type: "boolean"
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{
			ignore: [],
			allowedPrefixes: [],
			ignoreTopLevelDescribe: false,
			lowercaseFirstCharacterOnly: true
		}]
	},
	create: (context, [{ ignore = [], allowedPrefixes = [], ignoreTopLevelDescribe = false, lowercaseFirstCharacterOnly = false }]) => {
		const ignores = populateIgnores(ignore);
		let numberOfDescribeBlocks = 0;
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (!vitestFnCall || !hasStringAsFirstArgument(node)) return;
				if (vitestFnCall?.type === "describe") {
					numberOfDescribeBlocks++;
					if (ignoreTopLevelDescribe && numberOfDescribeBlocks === 1) return;
				} else if (vitestFnCall?.type !== "test") return;
				const [firstArgument] = node.arguments;
				const description = getStringValue(firstArgument);
				if (typeof description !== "string") return;
				if (allowedPrefixes.some((prefix) => description.startsWith(prefix))) return;
				const firstCharacter = description.charAt(0);
				if (ignores.includes(vitestFnCall.name) || lowercaseFirstCharacterOnly && (!firstCharacter || firstCharacter === firstCharacter.toLowerCase()) || !lowercaseFirstCharacterOnly && description === description.toLowerCase()) return;
				context.report({
					messageId: lowercaseFirstCharacterOnly ? "lowerCaseTitle" : "fullyLowerCaseTitle",
					node: node.arguments[0],
					data: { method: vitestFnCall.name },
					fix: (fixer) => {
						const description = getStringValue(firstArgument);
						const rangeIgnoreQuotes = [firstArgument.range[0] + 1, firstArgument.range[1] - 1];
						const newDescription = lowercaseFirstCharacterOnly ? description.substring(0, 1).toLowerCase() + description.substring(1) : description.toLowerCase();
						return [fixer.replaceTextRange(rangeIgnoreQuotes, newDescription)];
					}
				});
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["describe"])) numberOfDescribeBlocks--;
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-mock-promise-shorthand.ts
const RULE_NAME$27 = "prefer-mock-promise-shorthand";
const withOnce$1 = (name, addOnce) => {
	return `${name}${addOnce ? "Once" : ""}`;
};
const findSingleReturnArgumentNode$1 = (fnNode) => {
	if (fnNode.body.type !== _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) return fnNode.body;
	if (fnNode.body.body[0]?.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement) return fnNode.body.body[0].argument;
	return null;
};
var prefer_mock_promise_shorthand_default = createEslintRule({
	name: RULE_NAME$27,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce mock resolved/rejected shorthands for promises",
			recommended: false
		},
		messages: { useMockShorthand: "Prefer {{ replacement }}" },
		schema: [],
		fixable: "code"
	},
	create(context) {
		const report = (property, isOnce, outerArgNode, innerArgNode = outerArgNode) => {
			if (innerArgNode?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const argName = getNodeName(innerArgNode);
			if (argName !== "Promise.resolve" && argName !== "Promise.reject") return;
			const replacement = withOnce$1(argName.endsWith("reject") ? "mockRejectedValue" : "mockResolvedValue", isOnce);
			context.report({
				node: property,
				messageId: "useMockShorthand",
				data: { replacement },
				fix(fixer) {
					const { sourceCode } = context;
					if (innerArgNode.arguments.length > 1) return null;
					return [fixer.replaceText(property, replacement), fixer.replaceText(outerArgNode, innerArgNode.arguments.length === 1 ? sourceCode.getText(innerArgNode.arguments[0]) : "undefined")];
				}
			});
		};
		return { CallExpression(node) {
			if (node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || !isSupportedAccessor(node.callee.property) || node.arguments.length === 0) return;
			const mockFnName = getAccessorValue(node.callee.property);
			const isOnce = mockFnName.endsWith("Once");
			if (mockFnName === withOnce$1("mockReturnValue", isOnce)) report(node.callee.property, isOnce, node.arguments[0]);
			else if (mockFnName === withOnce$1("mockImplementation", isOnce)) {
				const [arg] = node.arguments;
				if (!isFunction(arg) || arg.params.length !== 0) return;
				report(node.callee.property, isOnce, arg, findSingleReturnArgumentNode$1(arg));
			}
		} };
	}
});

//#endregion
//#region src/rules/prefer-mock-return-shorthand.ts
const RULE_NAME$26 = "prefer-mock-return-shorthand";
const withOnce = (name, addOnce) => {
	return `${name}${addOnce ? "Once" : ""}`;
};
const findSingleReturnArgumentNode = (fnNode) => {
	if (fnNode.body.type !== _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) return fnNode.body;
	if (fnNode.body.body[0]?.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement) return fnNode.body.body[0].argument;
	return null;
};
var prefer_mock_return_shorthand_default = createEslintRule({
	name: RULE_NAME$26,
	meta: {
		docs: {
			description: "Prefer mock return shorthands",
			recommended: false
		},
		messages: { useMockShorthand: "Prefer {{ replacement }}" },
		schema: [],
		type: "suggestion",
		fixable: "code"
	},
	create(context) {
		return { CallExpression(node) {
			if (node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || !isSupportedAccessor(node.callee.property) || node.arguments.length === 0) return;
			const { property } = node.callee;
			const mockFnName = getAccessorValue(property);
			const isOnce = mockFnName.endsWith("Once");
			if (mockFnName !== withOnce("mockImplementation", isOnce)) return;
			const [arg] = node.arguments;
			if (!isFunction(arg) || arg.params.length !== 0 || arg.async) return;
			const replacement = withOnce("mockReturnValue", isOnce);
			const returnNode = findSingleReturnArgumentNode(arg);
			if (!returnNode || returnNode.type === _typescript_eslint_utils.AST_NODE_TYPES.UpdateExpression) return;
			if (returnNode.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
				if (context.sourceCode.getScope(returnNode).through.some((v) => v.resolved?.defs.some((n) => n.type === "Variable" && n.parent.kind !== "const"))) return;
			}
			context.report({
				node: property,
				messageId: "useMockShorthand",
				data: { replacement },
				fix(fixer) {
					return [fixer.replaceText(property, replacement), fixer.replaceText(arg, context.sourceCode.getText(returnNode))];
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-snapshot-hint.ts
const RULE_NAME$25 = "prefer-snapshot-hint";
const snapshotMatcherNames = ["toMatchSnapshot", "toThrowErrorMatchingSnapshot"];
const isSnapshotMatcherWithoutHint = (expectFnCall) => {
	if (expectFnCall.args.length === 0) return true;
	if (!isSupportedAccessor(expectFnCall.matcher, "toMatchSnapshot")) return expectFnCall.args.length !== 1;
	if (expectFnCall.args.length === 2) return false;
	const [arg] = expectFnCall.args;
	return !isStringNode(arg);
};
var prefer_snapshot_hint_default = createEslintRule({
	name: RULE_NAME$25,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce including a hint with external snapshots",
			recommended: false
		},
		messages: { missingHint: "You should provide a hint for this snapshot" },
		schema: [{
			description: "When to require snapshot hints.",
			type: "string",
			enum: ["always", "multi"]
		}],
		defaultOptions: ["multi"]
	},
	create(context, [mode]) {
		const snapshotMatchers = [];
		let expressionDepth = 0;
		const depths = [];
		const reportSnapshotMatchersWithoutHints = () => {
			for (const snapshotMatcher of snapshotMatchers) if (isSnapshotMatcherWithoutHint(snapshotMatcher)) context.report({
				messageId: "missingHint",
				node: snapshotMatcher.matcher
			});
		};
		const enterExpression = () => {
			expressionDepth++;
		};
		const exitExpression = () => {
			expressionDepth--;
			if (mode === "always") {
				reportSnapshotMatchersWithoutHints();
				snapshotMatchers.length = 0;
			}
			if (mode === "multi" && expressionDepth === 0) {
				if (snapshotMatchers.length > 1) reportSnapshotMatchersWithoutHints();
				snapshotMatchers.length = 0;
			}
		};
		return {
			"Program:exit"() {
				enterExpression();
				exitExpression();
			},
			FunctionExpression: enterExpression,
			"FunctionExpression:exit": exitExpression,
			ArrowFunctionExpression: enterExpression,
			"ArrowFunctionExpression:exit": exitExpression,
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["describe", "test"])) expressionDepth = depths.pop() ?? 0;
			},
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (vitestFnCall?.type !== "expect") {
					if (vitestFnCall?.type === "describe" || vitestFnCall?.type === "test") {
						depths.push(expressionDepth);
						expressionDepth = 0;
					}
					return;
				}
				const matcherName = getAccessorValue(vitestFnCall.matcher);
				if (!snapshotMatcherNames.includes(matcherName)) return;
				snapshotMatchers.push(vitestFnCall);
			}
		};
	}
});

//#endregion
//#region src/rules/prefer-spy-on.ts
const RULE_NAME$24 = "prefer-spy-on";
const findNodeObject = (node) => {
	if ("object" in node) return node.object;
	if (node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return node.callee.object;
	return null;
};
const getVitestFnCall = (node) => {
	if (node.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && node.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return null;
	const obj = findNodeObject(node);
	if (!obj) return null;
	if (obj.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && getNodeName(node.callee) === "vi.fn" ? node : null;
	return getVitestFnCall(obj);
};
const getAutoFixMockImplementation = (vitestFnCall, context) => {
	if (vitestFnCall.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && vitestFnCall.parent.property.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && vitestFnCall.parent.property.name === "mockImplementation") return "";
	const [arg] = vitestFnCall.arguments;
	const argSource = arg && context.sourceCode.getText(arg);
	return argSource ? `.mockImplementation(${argSource})` : ".mockImplementation()";
};
var prefer_spy_on_default = createEslintRule({
	name: RULE_NAME$24,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `vi.spyOn`",
			recommended: false
		},
		messages: { useViSpayOn: "Use `vi.spyOn` instead" },
		fixable: "code",
		schema: []
	},
	create(context) {
		return { AssignmentExpression(node) {
			const { left, right } = node;
			if (left.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return;
			const vitestFnCall = getVitestFnCall(right);
			if (!vitestFnCall) return;
			context.report({
				node,
				messageId: "useViSpayOn",
				fix(fixer) {
					const lefPropQuote = left.property.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && !left.computed ? "'" : "";
					const mockImplementation = getAutoFixMockImplementation(vitestFnCall, context);
					return [
						fixer.insertTextBefore(left, "vi.spyOn("),
						fixer.replaceTextRange([left.object.range[1], left.property.range[0]], `, ${lefPropQuote}`),
						fixer.replaceTextRange([left.property.range[1], vitestFnCall.range[1]], `${lefPropQuote})${mockImplementation}`)
					];
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-strict-boolean-matchers.ts
const RULE_NAME$23 = "prefer-strict-boolean-matchers";
var prefer_strict_boolean_matchers_default = createEslintRule({
	name: RULE_NAME$23,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `toBe(true)` and `toBe(false)` over matchers that coerce types to boolean",
			recommended: false
		},
		messages: {
			preferToBeTrue: "Prefer using `toBe(true)` to test value is `true`",
			preferToBeFalse: "Prefer using `toBe(false)` to test value is `false`"
		},
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (!(vitestFnCall?.type === "expect" || vitestFnCall?.type === "expectTypeOf")) return;
			const accessor = getAccessorValue(vitestFnCall.matcher);
			if (accessor === "toBeFalsy") context.report({
				node: vitestFnCall.matcher,
				messageId: "preferToBeFalse",
				fix: (fixer) => [fixer.replaceText(vitestFnCall.matcher, "toBe"), fixer.insertTextAfterRange([vitestFnCall.matcher.range[0], vitestFnCall.matcher.range[1] + 1], "false")]
			});
			if (accessor === "toBeTruthy") context.report({
				node: vitestFnCall.matcher,
				messageId: "preferToBeTrue",
				fix: (fixer) => [fixer.replaceText(vitestFnCall.matcher, "toBe"), fixer.insertTextAfterRange([vitestFnCall.matcher.range[0], vitestFnCall.matcher.range[1] + 1], "true")]
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-strict-equal.ts
const RULE_NAME$22 = "prefer-strict-equal";
var prefer_strict_equal_default = createEslintRule({
	name: RULE_NAME$22,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce strict equal over equal",
			recommended: false
		},
		messages: {
			useToStrictEqual: "Use `toStrictEqual()` instead",
			suggestReplaceWithStrictEqual: "Replace with `toStrictEqual()`"
		},
		schema: [],
		hasSuggestions: true
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { matcher } = vitestFnCall;
			if (isSupportedAccessor(matcher, "toEqual")) context.report({
				messageId: "useToStrictEqual",
				node: matcher,
				suggest: [{
					messageId: "suggestReplaceWithStrictEqual",
					fix: (fixer) => [replaceAccessorFixer(fixer, matcher, EqualityMatcher.toStrictEqual)]
				}]
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-be-falsy.ts
const RULE_NAME$21 = "prefer-to-be-falsy";
const isFalseLiteral = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && node.value === false;
var prefer_to_be_falsy_default = createEslintRule({
	name: RULE_NAME$21,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using toBeFalsy()",
			recommended: false
		},
		fixable: "code",
		schema: [],
		messages: { preferToBeFalsy: "Prefer using toBeFalsy()" }
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (!(vitestFnCall?.type === "expect" || vitestFnCall?.type === "expectTypeOf")) return;
			if (vitestFnCall.args.length === 1 && isFalseLiteral(getFirstMatcherArg(vitestFnCall)) && Object.prototype.hasOwnProperty.call(EqualityMatcher, getAccessorValue(vitestFnCall.matcher))) context.report({
				node: vitestFnCall.matcher,
				messageId: "preferToBeFalsy",
				fix: (fixer) => [fixer.replaceText(vitestFnCall.matcher, "toBeFalsy"), fixer.remove(vitestFnCall.args[0])]
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-be-object.ts
const RULE_NAME$20 = "prefer-to-be-object";
var prefer_to_be_object_default = createEslintRule({
	name: RULE_NAME$20,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using toBeObject()",
			recommended: false
		},
		fixable: "code",
		messages: { preferToBeObject: "Prefer toBeObject() to test if a value is an object" },
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expectTypeOf") return;
			if (isParsedInstanceOfMatcherCall(vitestFnCall, "Object")) {
				context.report({
					node: vitestFnCall.matcher,
					messageId: "preferToBeObject",
					fix: (fixer) => [fixer.replaceTextRange([vitestFnCall.matcher.range[0], vitestFnCall.matcher.range[1] + 8], "toBeObject()")]
				});
				return;
			}
			const { parent: expectTypeOf } = vitestFnCall.head.node;
			if (expectTypeOf?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const [expectTypeOfArgs] = expectTypeOf.arguments;
			if (!expectTypeOfArgs || !isBooleanEqualityMatcher(vitestFnCall) || !isInstanceOfBinaryExpression(expectTypeOfArgs, "Object")) return;
			context.report({
				node: vitestFnCall.matcher,
				messageId: "preferToBeObject",
				fix(fixer) {
					const fixes = [fixer.replaceText(vitestFnCall.matcher, "toBeObject"), fixer.removeRange([expectTypeOfArgs.left.range[1], expectTypeOfArgs.range[1]])];
					let invertCondition = getAccessorValue(vitestFnCall.matcher) === "toBeFalsy";
					if (vitestFnCall.args.length) {
						const [matcherArg] = vitestFnCall.args;
						fixes.push(fixer.remove(matcherArg));
						invertCondition = matcherArg.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && followTypeAssertionChain$1(matcherArg).value === false;
					}
					if (invertCondition) {
						const notModifier = vitestFnCall.modifiers.find((node) => getAccessorValue(node) === "not");
						fixes.push(notModifier ? fixer.removeRange([notModifier.range[0] - 1, notModifier.range[1]]) : fixer.insertTextBefore(vitestFnCall.matcher, "not."));
					}
					return fixes;
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-be-truthy.ts
const RULE_NAME$19 = "prefer-to-be-truthy";
const isTrueLiteral = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && node.value === true;
var prefer_to_be_truthy_default = createEslintRule({
	name: RULE_NAME$19,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using `toBeTruthy`",
			recommended: false
		},
		messages: { preferToBeTruthy: "Prefer using `toBeTruthy` to test value is `true`" },
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (!(vitestFnCall?.type === "expect" || vitestFnCall?.type === "expectTypeOf")) return;
			if (vitestFnCall.args.length === 1 && isTrueLiteral(getFirstMatcherArg(vitestFnCall)) && Object.prototype.hasOwnProperty.call(EqualityMatcher, getAccessorValue(vitestFnCall.matcher))) context.report({
				node: vitestFnCall.matcher,
				messageId: "preferToBeTruthy",
				fix: (fixer) => [fixer.replaceText(vitestFnCall.matcher, "toBeTruthy"), fixer.remove(vitestFnCall.args[0])]
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-be.ts
const RULE_NAME$18 = "prefer-to-be";
const isNullLiteral = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && node.value === null;
const isNullEqualityMatcher = (expectFnCall) => isNullLiteral(getFirstMatcherArg(expectFnCall));
const isFirstArgumentIdentifier = (expectFnCall, name) => isIdentifier(getFirstMatcherArg(expectFnCall), name);
const isFloat = (v) => Math.floor(v) !== Math.ceil(v);
const shouldUseToBe = (expectFnCall) => {
	let firstArg = getFirstMatcherArg(expectFnCall);
	if (firstArg.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof firstArg.value === "number" && isFloat(firstArg.value)) return false;
	if (firstArg.type === _typescript_eslint_utils.AST_NODE_TYPES.UnaryExpression && firstArg.operator === "-") firstArg = firstArg.argument;
	if (firstArg.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal) return !("regex" in firstArg);
	return firstArg.type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral;
};
const reportPreferToBe = (context, whatToBe, expectFnCall, func, modifierNode) => {
	context.report({
		messageId: `useToBe${whatToBe}`,
		fix(fixer) {
			const fixes = [replaceAccessorFixer(fixer, expectFnCall.matcher, `toBe${whatToBe}`)];
			if (expectFnCall.args?.length && whatToBe !== "") fixes.push(removeExtraArgumentsFixer(fixer, context, func, 0));
			if (modifierNode) fixes.push(fixer.removeRange([modifierNode.range[0] - 1, modifierNode.range[1]]));
			return fixes;
		},
		node: expectFnCall.matcher
	});
};
var prefer_to_be_default = createEslintRule({
	name: RULE_NAME$18,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using toBe()",
			recommended: false
		},
		schema: [],
		fixable: "code",
		messages: {
			useToBe: "Use `toBe` instead",
			useToBeUndefined: "Use `toBeUndefined()` instead",
			useToBeDefined: "Use `toBeDefined()` instead",
			useToBeNull: "Use `toBeNull()` instead",
			useToBeNaN: "Use `toBeNaN()` instead"
		}
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const matcherName = getAccessorValue(vitestFnCall.matcher);
			const notModifier = vitestFnCall.modifiers.find((node) => getAccessorValue(node) === "not");
			if (notModifier && ["toBeUndefined", "toBeDefined"].includes(matcherName)) {
				reportPreferToBe(context, matcherName === "toBeDefined" ? "Undefined" : "Defined", vitestFnCall, node, notModifier);
				return;
			}
			if (!Object.prototype.hasOwnProperty.call(EqualityMatcher, matcherName) || vitestFnCall.args.length === 0) return;
			if (isNullEqualityMatcher(vitestFnCall)) {
				reportPreferToBe(context, "Null", vitestFnCall, node);
				return;
			}
			if (isFirstArgumentIdentifier(vitestFnCall, "undefined")) {
				reportPreferToBe(context, notModifier ? "Defined" : "Undefined", vitestFnCall, node);
				return;
			}
			if (isFirstArgumentIdentifier(vitestFnCall, "NaN")) {
				reportPreferToBe(context, "NaN", vitestFnCall, node);
				return;
			}
			if (shouldUseToBe(vitestFnCall) && matcherName !== EqualityMatcher.toBe) reportPreferToBe(context, "", vitestFnCall, node);
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-contain.ts
const RULE_NAME$17 = "prefer-to-contain";
const isFixableIncludesCallExpression = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.callee.property, "includes") && hasOnlyOneArgument(node) && node.arguments[0].type !== _typescript_eslint_utils.AST_NODE_TYPES.SpreadElement;
var prefer_to_contain_default = createEslintRule({
	name: RULE_NAME$17,
	meta: {
		docs: {
			description: "enforce using toContain()",
			recommended: false
		},
		messages: { useToContain: "Use toContain() instead" },
		fixable: "code",
		type: "suggestion",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect" || vitestFnCall.args.length === 0) return;
			const { parent: expect } = vitestFnCall.head.node;
			if (expect?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const { arguments: [includesCall], range: [, expectCallEnd] } = expect;
			const { matcher } = vitestFnCall;
			const matcherArg = getFirstMatcherArg(vitestFnCall);
			if (!includesCall || matcherArg.type === _typescript_eslint_utils.AST_NODE_TYPES.SpreadElement || !Object.prototype.hasOwnProperty.call(EqualityMatcher, getAccessorValue(matcher)) || !isBooleanLiteral(matcherArg) || !isFixableIncludesCallExpression(includesCall)) return;
			const hasNot = vitestFnCall.modifiers.some((nod) => getAccessorValue(nod) === "not");
			context.report({
				fix(fixer) {
					const { sourceCode } = context;
					const addNotModifier = matcherArg.value === hasNot;
					return [
						fixer.removeRange([includesCall.callee.property.range[0] - 1, includesCall.range[1]]),
						fixer.replaceTextRange([expectCallEnd, matcher.parent.range[1]], addNotModifier ? `.${ModifierName.not}.toContain` : ".toContain"),
						fixer.replaceText(vitestFnCall.args[0], sourceCode.getText(includesCall.arguments[0]))
					];
				},
				messageId: "useToContain",
				node: matcher
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-have-been-called-times.ts
const RULE_NAME$16 = "prefer-to-have-been-called-times";
var prefer_to_have_been_called_times_default = createEslintRule({
	name: RULE_NAME$16,
	meta: {
		fixable: "code",
		docs: { description: "Suggest using `toHaveBeenCalledTimes()`" },
		messages: { preferMatcher: "Prefer `toHaveBeenCalledTimes`" },
		type: "suggestion",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { parent: expect } = vitestFnCall.head.node;
			if (expect?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const { matcher } = vitestFnCall;
			if (!isSupportedAccessor(matcher, "toHaveLength")) return;
			const [argument] = expect.arguments;
			if (argument?.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || !isSupportedAccessor(argument.property, "calls")) return;
			const { object } = argument;
			if (object.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || !isSupportedAccessor(object.property, "mock")) return;
			context.report({
				messageId: "preferMatcher",
				node: matcher,
				fix(fixer) {
					return [fixer.removeRange([object.property.range[0] - 1, argument.range[1]]), fixer.replaceTextRange([matcher.parent.object.range[1], matcher.parent.range[1]], ".toHaveBeenCalledTimes")];
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-to-have-length.ts
const RULE_NAME$15 = "prefer-to-have-length";
var prefer_to_have_length_default = createEslintRule({
	name: RULE_NAME$15,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using toHaveLength()",
			recommended: false
		},
		fixable: "code",
		messages: { preferToHaveLength: "Prefer toHaveLength()" },
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { parent: expect } = vitestFnCall.head.node;
			if (expect?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
			const [argument] = expect.arguments;
			const { matcher } = vitestFnCall;
			if (!Object.prototype.hasOwnProperty.call(EqualityMatcher, getAccessorValue(matcher)) || argument?.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || !isSupportedAccessor(argument.property, "length")) return;
			context.report({
				node: matcher,
				messageId: "preferToHaveLength",
				fix(fixer) {
					return [fixer.removeRange([argument.property.range[0] - 1, argument.range[1]]), fixer.replaceTextRange([matcher.parent.object.range[1], matcher.parent.range[1]], ".toHaveLength")];
				}
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-todo.ts
const RULE_NAME$14 = "prefer-todo";
const isTargetedTestCase = (vitestFnCall) => {
	if (vitestFnCall.members.some((s) => getAccessorValue(s) !== "skip")) return false;
	if (vitestFnCall.name.startsWith("x")) return false;
	return !vitestFnCall.name.startsWith("f");
};
function isEmptyFunction(node) {
	if (!isFunction(node)) return false;
	return node.body.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement && !node.body.body.length;
}
function createTodoFixer(vitestFnCall, fixer) {
	if (vitestFnCall.members.length) return replaceAccessorFixer(fixer, vitestFnCall.members[0], "todo");
	return fixer.replaceText(vitestFnCall.head.node, `${vitestFnCall.head.local}.todo`);
}
var prefer_todo_default = createEslintRule({
	name: RULE_NAME$14,
	meta: {
		type: "layout",
		docs: {
			description: "enforce using `test.todo`",
			recommended: false
		},
		messages: {
			emptyTest: "Prefer todo test case over empty test case",
			unimplementedTest: "Prefer todo test case over unimplemented test case"
		},
		fixable: "code",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const [title, callback] = node.arguments;
			const vitestFnCall = parseVitestFnCall(node, context);
			if (!title || vitestFnCall?.type !== "test" || !isTargetedTestCase(vitestFnCall) || !isStringNode(title)) return;
			if (callback && isEmptyFunction(callback)) context.report({
				messageId: "emptyTest",
				node,
				fix: (fixer) => [fixer.removeRange([title.range[1], callback.range[1]]), createTodoFixer(vitestFnCall, fixer)]
			});
			if (hasOnlyOneArgument(node)) context.report({
				messageId: "unimplementedTest",
				node,
				fix: (fixer) => createTodoFixer(vitestFnCall, fixer)
			});
		} };
	}
});

//#endregion
//#region src/rules/prefer-vi-mocked.ts
const RULE_NAME$13 = "prefer-vi-mocked";
const mockTypes = [
	"Mock",
	"MockedFunction",
	"MockedClass",
	"MockedObject"
];
var prefer_vi_mocked_default = createEslintRule({
	name: RULE_NAME$13,
	meta: {
		type: "suggestion",
		docs: {
			description: "require `vi.mocked()` over `fn as Mock`",
			requiresTypeChecking: true,
			recommended: false
		},
		fixable: "code",
		messages: { useViMocked: "Prefer `vi.mocked()`" },
		schema: []
	},
	create(context) {
		function check(node) {
			const { typeAnnotation } = node;
			if (typeAnnotation.type !== _typescript_eslint_utils.AST_NODE_TYPES.TSTypeReference) return;
			const { typeName } = typeAnnotation;
			if (typeName.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return;
			if (!mockTypes.includes(typeName.name)) return;
			const fnName = context.sourceCode.text.slice(...followTypeAssertionChain(node.expression).range);
			context.report({
				node,
				messageId: "useViMocked",
				fix(fixer) {
					return fixer.replaceText(node, `vi.mocked(${fnName})`);
				}
			});
		}
		return {
			TSAsExpression(node) {
				if (node.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.TSAsExpression) return;
				check(node);
			},
			TSTypeAssertion(node) {
				check(node);
			}
		};
	}
});

//#endregion
//#region src/rules/require-awaited-expect-poll.ts
const RULE_NAME$12 = "require-awaited-expect-poll";
var require_awaited_expect_poll_default = createEslintRule({
	name: RULE_NAME$12,
	meta: {
		docs: {
			requiresTypeChecking: false,
			recommended: false,
			description: "ensure that every `expect.poll` call is awaited"
		},
		messages: { notAwaited: "`{{ method }}` calls should be awaited" },
		type: "problem",
		schema: []
	},
	create(context) {
		const reported = /* @__PURE__ */ new Set();
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect" || !vitestFnCall.members.length || !memberRequiresAwait(vitestFnCall.members[0])) return;
			const nodeToReport = vitestFnCall.members[0].parent;
			if (reported.has(nodeToReport)) return;
			const topMostNode = skipSequenceExpressions(skipMatchersAndModifiers(vitestFnCall.head.node));
			if (topMostNode.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression || topMostNode.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement) return;
			context.report({
				node: nodeToReport,
				messageId: "notAwaited",
				data: { method: `expect.${getAccessorValue(vitestFnCall.members[0])}` }
			});
			reported.add(nodeToReport);
		} };
	}
});
const awaitedMembers = ["poll", "element"];
function memberRequiresAwait(member) {
	return awaitedMembers.includes(getAccessorValue(member));
}
function skipMatchersAndModifiers(node) {
	let currentNode = node;
	while (currentNode.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression || currentNode.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) currentNode = currentNode.parent;
	return currentNode;
}
function skipSequenceExpressions(node) {
	let currentNode = node;
	while (currentNode.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.SequenceExpression && currentNode.parent.expressions.at(-1) === currentNode) currentNode = currentNode.parent;
	return currentNode;
}

//#endregion
//#region src/rules/require-hook.ts
const RULE_NAME$11 = "require-hook";
const isVitestFnCall = (node, context) => {
	if (parseVitestFnCall(node, context)) return true;
	return !!getNodeName(node)?.startsWith("vi");
};
const isNullOrUndefined = (node) => {
	return node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && node.value === null || isIdentifier(node, "undefined");
};
const shouldBeInHook = (node, context, allowedFunctionCalls = []) => {
	switch (node.type) {
		case _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement: return shouldBeInHook(node.expression, context, allowedFunctionCalls);
		case _typescript_eslint_utils.AST_NODE_TYPES.CallExpression: return !(isVitestFnCall(node, context) || allowedFunctionCalls.includes(getNodeName(node)));
		case _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclaration:
			if (node.kind === "const") return false;
			return node.declarations.some(({ init }) => init !== null && !isNullOrUndefined(init));
		default: return false;
	}
};
var require_hook_default = createEslintRule({
	name: RULE_NAME$11,
	meta: {
		docs: {
			description: "require setup and teardown to be within a hook",
			recommended: false
		},
		messages: { useHook: "This should be done within a hook" },
		type: "suggestion",
		schema: [{
			type: "object",
			properties: { allowedFunctionCalls: {
				description: "Function calls that are allowed outside of hooks.",
				type: "array",
				items: { type: "string" }
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ allowedFunctionCalls: [] }]
	},
	create(context, options) {
		const checkBlockBody = (body) => {
			for (const statement of body) if (shouldBeInHook(statement, context, options[0].allowedFunctionCalls)) context.report({
				node: statement,
				messageId: "useHook"
			});
		};
		return {
			Program(program) {
				checkBlockBody(program.body);
			},
			CallExpression(node) {
				if (!isTypeOfVitestFnCall(node, context, ["describe"]) || node.arguments.length < 2) return;
				const [, testFn] = node.arguments;
				if (!isFunction(testFn) || testFn.body.type !== _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) return;
				checkBlockBody(testFn.body.body);
			}
		};
	}
});

//#endregion
//#region src/rules/require-local-test-context-for-concurrent-snapshots.ts
const RULE_NAME$10 = "require-local-test-context-for-concurrent-snapshots";
var require_local_test_context_for_concurrent_snapshots_default = createEslintRule({
	name: RULE_NAME$10,
	meta: {
		docs: {
			description: "require local Test Context for concurrent snapshot tests",
			recommended: false
		},
		messages: { requireLocalTestContext: "Use local Test Context instead" },
		type: "problem",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall === null) return;
			if (vitestFnCall.type !== "expect") return;
			if (vitestFnCall.type === "expect" && vitestFnCall.head.type === "testContext") return;
			if (node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) return;
			if (node.callee.property.type !== _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return;
			if (![
				"toMatchSnapshot",
				"toMatchInlineSnapshot",
				"toMatchFileSnapshot",
				"toThrowErrorMatchingSnapshot",
				"toThrowErrorMatchingInlineSnapshot"
			].includes(node.callee.property.name)) return;
			if (!context.sourceCode.getAncestors(node).some((ancestor) => {
				if (ancestor.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return false;
				if (!isTypeOfVitestFnCall(ancestor, context, ["describe", "test"])) return false;
				return ancestor.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(ancestor.callee.property, "concurrent");
			})) return;
			context.report({
				node,
				messageId: "requireLocalTestContext"
			});
		} };
	}
});

//#endregion
//#region src/rules/require-mock-type-parameters.ts
const RULE_NAME$9 = "require-mock-type-parameters";
var require_mock_type_parameters_default = createEslintRule({
	name: RULE_NAME$9,
	meta: {
		type: "suggestion",
		docs: {
			description: "enforce using type parameters with vitest mock functions",
			recommended: false
		},
		messages: { noTypeParameter: "Missing type parameters" },
		fixable: "code",
		schema: [{
			type: "object",
			properties: { checkImportFunctions: {
				description: "Also require type parameters for `importActual` and `importMock`.",
				type: "boolean"
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ checkImportFunctions: false }]
	},
	create(context, [options]) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "vi") return;
			for (const member of vitestFnCall.members) {
				if (!("name" in member) || member.parent.parent.typeArguments !== void 0) continue;
				if (member.name === "fn") context.report({
					node: member,
					messageId: "noTypeParameter"
				});
				if (options.checkImportFunctions && ["importActual", "importMock"].includes(member.name)) context.report({
					node: member,
					messageId: "noTypeParameter"
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/require-test-timeout.ts
const RULE_NAME$8 = "require-test-timeout";
var require_test_timeout_default = createEslintRule({
	name: RULE_NAME$8,
	meta: {
		type: "suggestion",
		docs: {
			description: "require tests to declare a timeout",
			recommended: false
		},
		messages: { missingTimeout: "Test is missing a timeout. Add an explicit timeout." },
		schema: []
	},
	create(context) {
		function resolveConstTimeout(node, propName = "timeout") {
			if (!node) return void 0;
			if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof node.value === "number") return node.value;
			if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.UnaryExpression && (node.operator === "-" || node.operator === "+") && node.argument.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof node.argument.value === "number") return node.operator === "-" ? -node.argument.value : node.argument.value;
			if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.ObjectExpression) {
				for (const prop of node.properties) {
					if (prop.type !== _typescript_eslint_utils.AST_NODE_TYPES.Property) continue;
					const key = prop.key;
					if (key.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && key.name === propName || key.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && key.value === propName) {
						if (prop.value.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof prop.value.value === "number") return prop.value.value;
						if (prop.value.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
							const nested = resolveConstTimeout(prop.value, propName);
							if (nested !== void 0) return nested;
						}
						return NaN;
					}
				}
				return;
			}
			if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
				let currentScope = getScope(context, node);
				let variable;
				while (currentScope !== null) {
					const ref = currentScope.set.get(node.name);
					if (ref && ref.defs && ref.defs.length > 0) {
						variable = ref;
						break;
					}
					currentScope = currentScope.upper;
				}
				if (!variable || !variable.defs || variable.defs.length === 0) return void 0;
				for (const def of variable.defs) {
					if (def.type !== "Variable") continue;
					const parent = def.parent;
					if (!isVariableDeclaration(parent) || parent.kind !== "const") continue;
					const declaratorNode = def.node;
					if (!isVariableDeclarator(declaratorNode) || !declaratorNode.init) continue;
					const init = declaratorNode.init;
					if (init.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof init.value === "number") return init.value;
					if (init.type === _typescript_eslint_utils.AST_NODE_TYPES.ObjectExpression) for (const p of init.properties) {
						if (p.type !== _typescript_eslint_utils.AST_NODE_TYPES.Property) continue;
						const key = p.key;
						if (key.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && key.name === propName || key.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && key.value === propName) {
							if (p.value.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof p.value.value === "number") return p.value.value;
							if (p.value.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
								const nested = resolveConstTimeout(p.value, propName);
								if (nested !== void 0) return nested;
							}
							return NaN;
						}
					}
				}
			}
		}
		/**
		* Track positions (character offsets) of vi.setConfig({ testTimeout })
		* calls so we only exempt tests that appear _after_ the call. We use the
		* call's end offset and the test's start offset so that a setConfig on the
		* same line but before the test still exempts it.
		*/
		const setConfigPositions = [];
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall && vitestFnCall.type === "vi") {
				const firstMember = vitestFnCall.members[0];
				if (firstMember && getAccessorValue(firstMember) === "setConfig") {
					const arg = node.arguments[0];
					if (arg && arg.type === _typescript_eslint_utils.AST_NODE_TYPES.ObjectExpression) {
						for (const prop of arg.properties) if (prop.type === _typescript_eslint_utils.AST_NODE_TYPES.Property) {
							const key = prop.key;
							if (key.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && key.name === "testTimeout" || key.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && key.value === "testTimeout") {
								const resolved = resolveConstTimeout(prop.value, "testTimeout");
								if (resolved !== void 0 && !Number.isNaN(resolved) && resolved >= 0) {
									const endOffset = node.range ? node.range[1] : 0;
									setConfigPositions.push(endOffset);
									break;
								}
							}
						}
					}
				}
			}
			if (!vitestFnCall) return;
			if (vitestFnCall.type !== "test" && vitestFnCall.type !== "it") return;
			if (vitestFnCall.members.some((m) => {
				const v = getAccessorValue(m);
				return v === "todo" || v === "skip";
			}) || vitestFnCall.name.startsWith("x")) return;
			const args = node.arguments;
			if (!args.some((a) => a.type === _typescript_eslint_utils.AST_NODE_TYPES.FunctionExpression || a.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrowFunctionExpression)) return;
			/**
			* If there is a setConfig call *before* this test that sets testTimeout,
			* exempt this test. Note: we compare source positions (character offsets)
			* so that a later setConfig call does not affect earlier tests.
			*/
			const testPos = node.range ? node.range[0] : 0;
			if (setConfigPositions.some((p) => p <= testPos)) return;
			let foundNumericTimeout = false;
			let foundObjectTimeout = false;
			for (const a of args) {
				if (a.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof a.value === "number") if (a.value >= 0) foundNumericTimeout = true;
				else {
					context.report({
						node,
						messageId: "missingTimeout"
					});
					return;
				}
				if (a.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) {
					const resolved = resolveConstTimeout(a, "timeout");
					if (resolved !== void 0) {
						if (Number.isNaN(resolved)) {
							context.report({
								node,
								messageId: "missingTimeout"
							});
							return;
						}
						if (resolved >= 0) foundNumericTimeout = true;
						else {
							context.report({
								node,
								messageId: "missingTimeout"
							});
							return;
						}
					}
				}
				if (a.type === _typescript_eslint_utils.AST_NODE_TYPES.ObjectExpression) for (const prop of a.properties) {
					if (prop.type !== _typescript_eslint_utils.AST_NODE_TYPES.Property) continue;
					const key = prop.key;
					if (key.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && key.name === "timeout" || key.type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && key.value === "timeout") {
						const resolved = resolveConstTimeout(prop.value, "timeout");
						if (resolved !== void 0) {
							if (Number.isNaN(resolved)) {
								context.report({
									node,
									messageId: "missingTimeout"
								});
								return;
							}
							if (resolved >= 0) foundObjectTimeout = true;
							else {
								context.report({
									node,
									messageId: "missingTimeout"
								});
								return;
							}
						}
					}
				}
			}
			if (foundNumericTimeout || foundObjectTimeout) return;
			context.report({
				node,
				messageId: "missingTimeout"
			});
		} };
	}
});
function isVariableDeclaration(node) {
	return !!node && node.type === _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclaration;
}
function isVariableDeclarator(node) {
	return !!node && node.type === _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclarator;
}

//#endregion
//#region src/rules/require-to-throw-message.ts
const RULE_NAME$7 = "require-to-throw-message";
var require_to_throw_message_default = createEslintRule({
	name: RULE_NAME$7,
	meta: {
		type: "suggestion",
		docs: {
			description: "require toThrow() to be called with an error message",
			recommended: false
		},
		schema: [],
		messages: { addErrorMessage: "Add an error message to {{ matcherName }}()" }
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "expect") return;
			const { matcher } = vitestFnCall;
			const matcherName = getAccessorValue(matcher);
			if (vitestFnCall.args.length === 0 && ["toThrow", "toThrowError"].includes(matcherName) && !vitestFnCall.modifiers.some((nod) => getAccessorValue(nod) === "not")) context.report({
				messageId: "addErrorMessage",
				data: { matcherName },
				node: matcher
			});
		} };
	}
});

//#endregion
//#region src/rules/require-top-level-describe.ts
const RULE_NAME$6 = "require-top-level-describe";
var require_top_level_describe_default = createEslintRule({
	name: RULE_NAME$6,
	meta: {
		docs: {
			description: "enforce that all tests are in a top-level describe",
			recommended: false
		},
		messages: {
			tooManyDescribes: "There should not be more than {{ max }} describe{{ s }} at the top level",
			unexpectedTestCase: "All test cases must be wrapped in a describe block",
			unexpectedHook: "All hooks must be wrapped in a describe block"
		},
		type: "suggestion",
		schema: [{
			type: "object",
			properties: { maxNumberOfTopLevelDescribes: {
				description: "Maximum number of `describe` blocks allowed at the top level.",
				type: "number",
				minimum: 1
			} },
			additionalProperties: false
		}],
		defaultOptions: [{ maxNumberOfTopLevelDescribes: Infinity }]
	},
	create(context, options) {
		const maxNumberOfTopLevelDescribes = options[0].maxNumberOfTopLevelDescribes;
		let numberOfTopLevelDescribeBlocks = 0;
		let numberOfDescribeBlocks = 0;
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCall(node, context);
				if (!vitestFnCall) return;
				if (vitestFnCall.type === "describe") {
					numberOfDescribeBlocks++;
					if (numberOfDescribeBlocks === 1) {
						numberOfTopLevelDescribeBlocks++;
						if (numberOfTopLevelDescribeBlocks > maxNumberOfTopLevelDescribes) context.report({
							node,
							messageId: "tooManyDescribes",
							data: {
								max: maxNumberOfTopLevelDescribes,
								s: maxNumberOfTopLevelDescribes === 1 ? "" : "s"
							}
						});
					}
					return;
				}
				if (numberOfDescribeBlocks === 0) {
					if (vitestFnCall.type === "test" && (vitestFnCall.members.length === 0 || !vitestFnCall.members.every((m) => "name" in m && m.name === "extend"))) {
						context.report({
							node,
							messageId: "unexpectedTestCase"
						});
						return;
					}
					if (vitestFnCall.type === "hook") context.report({
						node,
						messageId: "unexpectedHook"
					});
				}
			},
			"CallExpression:exit"(node) {
				if (isTypeOfVitestFnCall(node, context, ["describe"])) numberOfDescribeBlocks--;
			}
		};
	}
});

//#endregion
//#region src/rules/unbound-method.ts
const require$2 = (0, node_module.createRequire)(require("url").pathToFileURL(__filename).href);
const RULE_NAME$5 = "unbound-method";
const toThrowMatchers = [
	"toThrow",
	"toThrowError",
	"toThrowErrorMatchingSnapshot",
	"toThrowErrorMatchingInlineSnapshot"
];
const DEFAULT_MESSAGE = "This rule requires `@typescript-eslint/eslint-plugin`";
const baseRule = (() => {
	try {
		return require$2("@typescript-eslint/eslint-plugin").rules["unbound-method"];
	} catch (error) {
		const errorCode = typeof error === "object" && error !== null && "code" in error ? error.code : void 0;
		if (errorCode === "MODULE_NOT_FOUND" || errorCode === "ERR_REQUIRE_ESM") return null;
		throw error;
	}
})();
var unbound_method_default = createEslintRule({
	name: RULE_NAME$5,
	meta: {
		messages: {
			unbound: DEFAULT_MESSAGE,
			unboundWithoutThisAnnotation: DEFAULT_MESSAGE
		},
		schema: [{
			type: "object",
			properties: { ignoreStatic: {
				description: "Ignore unbound warnings for static methods.",
				type: "boolean"
			} },
			additionalProperties: false
		}],
		type: "problem",
		...baseRule?.meta,
		docs: {
			...baseRule?.meta.docs,
			description: "enforce unbound methods are called with their expected scope",
			recommended: false,
			requiresTypeChecking: true
		},
		defaultOptions: [{ ignoreStatic: false }]
	},
	create(context) {
		const baseSelectors = baseRule?.create(context);
		if (!baseSelectors) return {};
		return {
			...baseSelectors,
			MemberExpression(node) {
				if (node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) {
					const vitestFnCall = parseVitestFnCall(findTopMostCallExpression(node.parent), context);
					if (vitestFnCall?.type === "vi" && vitestFnCall.members.length >= 1 && isIdentifier(vitestFnCall.members[0], "mocked")) return;
					if (vitestFnCall?.type === "expect") {
						const { matcher } = vitestFnCall;
						if (!toThrowMatchers.includes(getAccessorValue(matcher))) return;
					}
				}
				baseSelectors?.MemberExpression?.(node);
			}
		};
	}
});

//#endregion
//#region src/rules/valid-describe-callback.ts
const RULE_NAME$4 = "valid-describe-callback";
const paramsLocation = (params) => {
	const [first] = params;
	const last = params[params.length - 1];
	return {
		start: first.loc.start,
		end: last.loc.end
	};
};
const hasNonEachMembersAndParams = (vitestFnCall, functionExpression) => {
	return vitestFnCall.members.every((s) => !["each", "for"].includes(getAccessorValue(s))) && functionExpression.params.length;
};
const reportUnexpectedReturnInDescribe = (blockStatement, context) => {
	blockStatement.body.forEach((node) => {
		if (node.type !== _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement) return;
		context.report({
			messageId: "unexpectedReturnInDescribe",
			node
		});
	});
};
var valid_describe_callback_default = createEslintRule({
	name: RULE_NAME$4,
	meta: {
		type: "problem",
		docs: {
			description: "enforce valid describe callback",
			recommended: false
		},
		messages: {
			nameAndCallback: "Describe requires a name and callback arguments",
			secondArgumentMustBeFunction: "Second argument must be a function",
			unexpectedDescribeArgument: "Unexpected argument in describe callback",
			unexpectedReturnInDescribe: "Unexpected return statement in describe callback"
		},
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "describe") return;
			if (vitestFnCall?.members[0]?.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && vitestFnCall.members[0].name === "todo") return;
			if (node.arguments.length < 1) return context.report({
				messageId: "nameAndCallback",
				loc: node.loc
			});
			const [, arg2, arg3] = node.arguments;
			if (!arg2) {
				context.report({
					messageId: "nameAndCallback",
					loc: paramsLocation(node.arguments)
				});
				return;
			}
			if (!isFunction(arg2)) {
				if (arg3 && isFunction(arg3)) {
					if (hasNonEachMembersAndParams(vitestFnCall, arg3)) context.report({
						messageId: "unexpectedDescribeArgument",
						node: arg3
					});
					if (arg3.body.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) context.report({
						messageId: "unexpectedReturnInDescribe",
						node: arg3
					});
					if (arg3.body.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) reportUnexpectedReturnInDescribe(arg3.body, context);
					return;
				}
				context.report({
					messageId: "secondArgumentMustBeFunction",
					loc: paramsLocation(node.arguments)
				});
				return;
			}
			if (hasNonEachMembersAndParams(vitestFnCall, arg2)) context.report({
				messageId: "unexpectedDescribeArgument",
				node: arg2
			});
			if (arg2.body.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) context.report({
				messageId: "unexpectedReturnInDescribe",
				node: arg2
			});
			if (arg2.body.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) reportUnexpectedReturnInDescribe(arg2.body, context);
		} };
	}
});

//#endregion
//#region src/rules/valid-expect-in-promise.ts
const RULE_NAME$3 = "valid-expect-in-promise";
const isPromiseChainCall = (node) => {
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.callee.property)) {
		if (node.arguments.length === 0) return false;
		switch (getAccessorValue(node.callee.property)) {
			case "then": return node.arguments.length < 3;
			case "catch":
			case "finally": return node.arguments.length < 2;
		}
	}
	return false;
};
const isTestCaseCallWithCallbackArg = (node, context) => {
	const vitestCallFn = parseVitestFnCall(node, context);
	if (vitestCallFn?.type !== "test") return false;
	const isVitestEach = vitestCallFn.members.some((s) => getAccessorValue(s) === "each");
	if (isVitestEach && node.callee.type !== _typescript_eslint_utils.AST_NODE_TYPES.TaggedTemplateExpression) return true;
	const [, callback] = node.arguments;
	const callbackArgIndex = Number(isVitestEach);
	return callback && isFunction(callback) && callback.params.length === 1 + callbackArgIndex;
};
const isPromiseMethodThatUsesValue = (node, identifier) => {
	const { name } = identifier;
	if (node.argument === null) return false;
	if (node.argument.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && node.argument.arguments.length > 0) {
		const nodeName = getNodeName(node.argument);
		if (["Promise.all", "Promise.allSettled"].includes(nodeName)) {
			const [firstArg] = node.argument.arguments;
			if (firstArg.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrayExpression && firstArg.elements.some((nod) => nod && isIdentifier(nod, name))) return true;
		}
		if (["Promise.resolve", "Promise.reject"].includes(nodeName) && node.argument.arguments.length === 1) return isIdentifier(node.argument.arguments[0], name);
	}
	return isIdentifier(node.argument, name);
};
/**
* Attempts to determine if the runtime value represented by the given `identifier`
* is `await`ed within the given array of elements
*/
const isValueAwaitedInElements = (name, elements) => {
	for (const element of elements) {
		if (element?.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression && isIdentifier(element.argument, name)) return true;
		if (element?.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrayExpression && isValueAwaitedInElements(name, element.elements)) return true;
	}
	return false;
};
/**
* Attempts to determine if the runtime value represented by the given `identifier`
* is `await`ed as an argument along the given call expression
*/
const isValueAwaitedInArguments = (name, call) => {
	let node = call;
	while (node) {
		if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) {
			if (isValueAwaitedInElements(name, node.arguments)) return true;
			node = node.callee;
		}
		if (node.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) break;
		node = node.object;
	}
	return false;
};
const getLeftMostCallExpression = (call) => {
	let leftMostCallExpression = call;
	let node = call;
	while (node) {
		if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) {
			leftMostCallExpression = node;
			node = node.callee;
		}
		if (node.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) break;
		node = node.object;
	}
	return leftMostCallExpression;
};
/**
* Attempts to determine if the runtime value represented by the given `identifier`
* is `await`ed or `return`ed within the given `body` of statements
*/
const isValueAwaitedOrReturned = (identifier, body, context) => {
	const { name } = identifier;
	for (const node of body) {
		if (node.range[0] <= identifier.range[0]) continue;
		if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement) return isPromiseMethodThatUsesValue(node, identifier);
		if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement) {
			if (node.expression.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) {
				if (isValueAwaitedInArguments(name, node.expression)) return true;
				const leftMostCall = getLeftMostCallExpression(node.expression);
				const vitestFnCall = parseVitestFnCall(node.expression, context);
				if (vitestFnCall?.type === "expect" && leftMostCall.arguments.length > 0 && isIdentifier(leftMostCall.arguments[0], name)) {
					if (vitestFnCall.members.some((m) => {
						const v = getAccessorValue(m);
						return v === ModifierName.resolves || v === ModifierName.rejects;
					})) return true;
				}
			}
			if (node.expression.type === _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression && isPromiseMethodThatUsesValue(node.expression, identifier)) return true;
			if (node.expression.type === _typescript_eslint_utils.AST_NODE_TYPES.AssignmentExpression) {
				if (isIdentifier(node.expression.left, name) && getNodeName(node.expression.right)?.startsWith(`${name}.`) && isPromiseChainCall(node.expression.right)) continue;
				break;
			}
		}
		if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement && isValueAwaitedOrReturned(identifier, node.body, context)) return true;
	}
	return false;
};
const findFirstBlockBodyUp = (node) => {
	let parent = node;
	while (parent) {
		if (parent.type === _typescript_eslint_utils.AST_NODE_TYPES.BlockStatement) return parent.body;
		parent = parent.parent;
	}
	/* istanbul ignore next */
	throw new Error(`Could not find BlockStatement - please file a github issue at https://github.com/vitest-dev/eslint-plugin-vitest`);
};
const isDirectlyWithinTestCaseCall = (node, context) => {
	let parent = node;
	while (parent) {
		if (isFunction(parent)) {
			parent = parent.parent;
			return parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && isTypeOfVitestFnCall(parent, context, ["test"]);
		}
		parent = parent.parent;
	}
	return false;
};
const isVariableAwaitedOrReturned = (variable, context) => {
	const body = findFirstBlockBodyUp(variable);
	if (!isIdentifier(variable.id)) return true;
	return isValueAwaitedOrReturned(variable.id, body, context);
};
var valid_expect_in_promise_default = createEslintRule({
	name: RULE_NAME$3,
	meta: {
		docs: { description: "require promises that have expectations in their chain to be valid" },
		messages: { expectInFloatingPromise: "This promise should either be returned or awaited to ensure the expects in its chain are called" },
		type: "suggestion",
		schema: []
	},
	create(context) {
		let inTestCaseWithDoneCallback = false;
		const chains = [];
		return {
			CallExpression(node) {
				if (isTestCaseCallWithCallbackArg(node, context)) {
					inTestCaseWithDoneCallback = true;
					return;
				}
				if (isPromiseChainCall(node)) {
					chains.unshift(false);
					return;
				}
				if (chains.length > 0 && isTypeOfVitestFnCall(node, context, ["expect"])) chains[0] = true;
			},
			"CallExpression:exit"(node) {
				if (inTestCaseWithDoneCallback) {
					if (isTypeOfVitestFnCall(node, context, ["test"])) inTestCaseWithDoneCallback = false;
					return;
				}
				if (!isPromiseChainCall(node)) return;
				if (!chains.shift()) return;
				const { parent } = findTopMostCallExpression(node);
				if (!parent || !isDirectlyWithinTestCaseCall(parent, context)) return;
				switch (parent.type) {
					case _typescript_eslint_utils.AST_NODE_TYPES.VariableDeclarator:
						if (isVariableAwaitedOrReturned(parent, context)) return;
						break;
					case _typescript_eslint_utils.AST_NODE_TYPES.AssignmentExpression:
						if (parent.left.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && isValueAwaitedOrReturned(parent.left, findFirstBlockBodyUp(parent), context)) return;
						break;
					case _typescript_eslint_utils.AST_NODE_TYPES.ExpressionStatement: break;
					case _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement:
					case _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression:
					default: return;
				}
				context.report({
					messageId: "expectInFloatingPromise",
					node: parent
				});
			}
		};
	}
});

//#endregion
//#region src/rules/valid-expect.ts
const RULE_NAME$2 = "valid-expect";
const defaultAsyncMatchers = ["toReject", "toResolve"];
/**
* Async assertions might be called in Promise
* methods like `Promise.x(expect1)` or `Promise.x([expect1, expect2])`.
* If that's the case, Promise node have to be awaited or returned.
*
* @Returns CallExpressionNode
*/
const getPromiseCallExpressionNode = (node) => {
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrayExpression && node.parent && node.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) node = node.parent;
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && node.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.callee.object, "Promise") && node.parent) return node;
	return null;
};
const promiseArrayExceptionKey = ({ start, end }) => `${start.line}:${start.column}-${end.line}:${end.column}`;
const getNormalizeFunctionExpression = (functionExpression) => {
	if (functionExpression.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.Property && functionExpression.type === _typescript_eslint_utils.AST_NODE_TYPES.FunctionExpression) return functionExpression.parent;
	return functionExpression;
};
function getParentIfThenified(node) {
	const grandParentNode = node.parent?.parent;
	if (grandParentNode && grandParentNode.type === _typescript_eslint_utils.AST_NODE_TYPES.CallExpression && grandParentNode.callee.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(grandParentNode.callee.property) && ["then", "catch"].includes(getAccessorValue(grandParentNode.callee.property)) && grandParentNode.parent) return getParentIfThenified(grandParentNode);
	return node;
}
const findPromiseCallExpressionNode = (node) => node.parent?.parent && [_typescript_eslint_utils.AST_NODE_TYPES.CallExpression, _typescript_eslint_utils.AST_NODE_TYPES.ArrayExpression].includes(node.parent.type) ? getPromiseCallExpressionNode(node.parent) : null;
const findFirstFunctionExpression = ({ parent }) => {
	if (!parent) return null;
	return isFunction(parent) ? parent : findFirstFunctionExpression(parent);
};
const isAcceptableReturnNode = (node, allowReturn) => {
	if (allowReturn && node.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement) return true;
	if (node.type === _typescript_eslint_utils.AST_NODE_TYPES.ConditionalExpression && node.parent) return isAcceptableReturnNode(node.parent, allowReturn);
	return [_typescript_eslint_utils.AST_NODE_TYPES.ArrowFunctionExpression, _typescript_eslint_utils.AST_NODE_TYPES.AwaitExpression].includes(node.type);
};
var valid_expect_default = createEslintRule({
	name: RULE_NAME$2,
	meta: {
		docs: {
			description: "enforce valid `expect()` usage",
			recommended: false
		},
		messages: {
			tooManyArgs: "Expect takes at most {{ amount}} argument{{ s }}",
			notEnoughArgs: "Expect requires at least {{ amount }} argument{{ s }}",
			modifierUnknown: "Expect has an unknown modifier",
			matcherNotFound: "Expect must have a corresponding matcher call",
			matcherNotCalled: "Matchers must be called to assert",
			asyncMustBeAwaited: "Async assertions must be awaited{{ orReturned }}",
			promisesWithAsyncAssertionsMustBeAwaited: "Promises which return async assertions must be awaited{{ orReturned }}"
		},
		type: "suggestion",
		fixable: "code",
		schema: [{
			type: "object",
			properties: {
				alwaysAwait: {
					description: "Require awaiting every async assertion.",
					type: "boolean"
				},
				asyncMatchers: {
					description: "Matchers that should be considered async assertions.",
					type: "array",
					items: { type: "string" }
				},
				minArgs: {
					description: "Minimum number of arguments allowed for `expect`.",
					type: "number",
					minimum: 1
				},
				maxArgs: {
					description: "Maximum number of arguments allowed for `expect`.",
					type: "number",
					minimum: 1
				}
			},
			additionalProperties: false
		}],
		defaultOptions: [{
			alwaysAwait: false,
			asyncMatchers: defaultAsyncMatchers,
			minArgs: 1,
			maxArgs: 1
		}]
	},
	create: (context, [{ alwaysAwait, asyncMatchers = defaultAsyncMatchers, minArgs = 1, maxArgs = 1 }]) => {
		const arrayExceptions = /* @__PURE__ */ new Set();
		const descriptors = [];
		const pushPromiseArrayException = (loc) => arrayExceptions.add(promiseArrayExceptionKey(loc));
		/**
		* Promise method that accepts an array of promises,
		* (eg. Promise.all), will throw warnings for the each
		* unawaited or non-returned promise. To avoid throwing
		* multiple warnings, we check if there is a warning in
		* the given location.
		*/
		const promiseArrayExceptionExists = (loc) => arrayExceptions.has(promiseArrayExceptionKey(loc));
		const findTopMostMemberExpression = (node) => {
			let topMostMemberExpression = node;
			let { parent } = node;
			while (parent) {
				if (parent.type !== _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression) break;
				topMostMemberExpression = parent;
				parent = parent.parent;
			}
			return topMostMemberExpression;
		};
		return {
			CallExpression(node) {
				const vitestFnCall = parseVitestFnCallWithReason(node, context);
				const settings = parsePluginSettings(context.settings);
				if (typeof vitestFnCall === "string") {
					const reportingNode = node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.MemberExpression ? findTopMostMemberExpression(node.parent).property : node;
					if (vitestFnCall === "matcher-not-found") {
						context.report({
							messageId: "matcherNotFound",
							node: reportingNode
						});
						return;
					}
					if (vitestFnCall === "matcher-not-called") context.report({
						messageId: isSupportedAccessor(reportingNode) && Object.prototype.hasOwnProperty.call(ModifierName, getAccessorValue(reportingNode)) ? "matcherNotFound" : "matcherNotCalled",
						node: reportingNode
					});
					if (vitestFnCall === "modifier-unknown") {
						context.report({
							messageId: "modifierUnknown",
							node: reportingNode
						});
						return;
					}
					return;
				} else if (vitestFnCall?.type === "expectTypeOf" && settings.typecheck) return;
				else if (vitestFnCall?.type !== "expect") return;
				else if (vitestFnCall.modifiers.some((mod) => mod.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier && mod.name == "to")) return;
				const { parent: expect } = vitestFnCall.head.node;
				if (expect?.type !== _typescript_eslint_utils.AST_NODE_TYPES.CallExpression) return;
				if (expect.arguments.length < minArgs) {
					const expectLength = getAccessorValue(vitestFnCall.head.node).length;
					const loc = {
						start: {
							column: expect.loc.start.column + expectLength,
							line: expect.loc.start.line
						},
						end: {
							column: expect.loc.start.column + expectLength + 1,
							line: expect.loc.start.line
						}
					};
					context.report({
						messageId: "notEnoughArgs",
						data: {
							amount: minArgs,
							s: minArgs === 1 ? "" : "s"
						},
						node: expect,
						loc
					});
				}
				if (expect.arguments.length > maxArgs) {
					if (expect.arguments.length === 2) {
						const isSecondArgString = expect.arguments[1].type === _typescript_eslint_utils.AST_NODE_TYPES.Literal && typeof expect.arguments[1].value === "string";
						const isSecondArgTemplateLiteral = expect.arguments[1].type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral;
						if (isSecondArgString || isSecondArgTemplateLiteral) return;
					}
					const { start } = expect.arguments[maxArgs].loc;
					const { end } = expect.arguments[expect.arguments.length - 1].loc;
					const loc = {
						start,
						end: {
							column: end.column + 1,
							line: end.line
						}
					};
					context.report({
						messageId: "tooManyArgs",
						data: {
							amount: maxArgs,
							s: maxArgs === 1 ? "" : "s"
						},
						node: expect,
						loc
					});
				}
				const { matcher } = vitestFnCall;
				const parentNode = matcher.parent.parent;
				const shouldBeAwaited = vitestFnCall.modifiers.some((nod) => getAccessorValue(nod) !== "not") || asyncMatchers.includes(getAccessorValue(matcher));
				if (!parentNode?.parent || !shouldBeAwaited) return;
				const isParentArrayExpression = parentNode.parent.type === _typescript_eslint_utils.AST_NODE_TYPES.ArrayExpression;
				const targetNode = getParentIfThenified(parentNode);
				const finalNode = findPromiseCallExpressionNode(targetNode) || targetNode;
				if (finalNode.parent && !isAcceptableReturnNode(finalNode.parent, !alwaysAwait) && !promiseArrayExceptionExists(finalNode.loc)) {
					descriptors.push({
						messageId: finalNode === targetNode ? "asyncMustBeAwaited" : "promisesWithAsyncAssertionsMustBeAwaited",
						node: finalNode
					});
					if (isParentArrayExpression) pushPromiseArrayException(finalNode.loc);
				}
			},
			"Program:exit"() {
				const fixes = [];
				descriptors.forEach(({ node, messageId }, index) => {
					const orReturned = alwaysAwait ? "" : " or returned";
					context.report({
						loc: node.loc,
						data: { orReturned },
						messageId,
						node,
						fix(fixer) {
							const functionExpression = findFirstFunctionExpression(node);
							if (!functionExpression) return null;
							const foundAsyncFixer = fixes.some((fix) => fix.text === "async ");
							if (!functionExpression.async && !foundAsyncFixer) {
								const targetFunction = getNormalizeFunctionExpression(functionExpression);
								fixes.push(fixer.insertTextBefore(targetFunction, "async "));
							}
							const returnStatement = node.parent?.type === _typescript_eslint_utils.AST_NODE_TYPES.ReturnStatement ? node.parent : null;
							if (alwaysAwait && returnStatement) {
								const replacedText = context.sourceCode.getText(returnStatement).replace("return", "await");
								fixes.push(fixer.replaceText(returnStatement, replacedText));
							} else fixes.push(fixer.insertTextBefore(node, "await "));
							return index === descriptors.length - 1 ? fixes : null;
						}
					});
				});
			}
		};
	}
});

//#endregion
//#region src/utils/require.ts
const require$1 = (0, node_module.createRequire)(require("url").pathToFileURL(__filename).href);

//#endregion
//#region src/rules/valid-title.ts
const RULE_NAME$1 = "valid-title";
const trimFXPrefix = (word) => ["f", "x"].includes(word.charAt(0)) ? word.substring(1) : word;
const quoteStringValue = (node) => node.type === _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral ? `\`${node.quasis[0].value.raw}\`` : node.raw;
const MatcherAndMessageSchema = {
	type: "array",
	items: { type: "string" },
	minItems: 1,
	maxItems: 2,
	additionalItems: false
};
const compileMatcherPattern = (matcherMaybeWithMessage) => {
	const [matcher, message] = Array.isArray(matcherMaybeWithMessage) ? matcherMaybeWithMessage : [matcherMaybeWithMessage];
	return [new RegExp(matcher, "u"), message];
};
function isStringLikeType(type) {
	const ts = require$1("typescript");
	return !!(type.flags & ts.TypeFlags.StringLike);
}
const compileMatcherPatterns = (matchers) => {
	if (typeof matchers === "string" || Array.isArray(matchers)) {
		const compiledMatcher = compileMatcherPattern(matchers);
		return {
			describe: compiledMatcher,
			test: compiledMatcher,
			it: compiledMatcher
		};
	}
	return {
		describe: matchers.describe ? compileMatcherPattern(matchers.describe) : null,
		test: matchers.test ? compileMatcherPattern(matchers.test) : null,
		it: matchers.it ? compileMatcherPattern(matchers.it) : null
	};
};
const doesBinaryExpressionContainStringNode = (binaryExp) => {
	if (isStringNode(binaryExp.right)) return true;
	if (binaryExp.left.type === _typescript_eslint_utils.AST_NODE_TYPES.BinaryExpression) return doesBinaryExpressionContainStringNode(binaryExp.left);
	return isStringNode(binaryExp.left);
};
var valid_title_default = createEslintRule({
	name: RULE_NAME$1,
	meta: {
		docs: {
			description: "enforce valid titles",
			recommended: false
		},
		messages: {
			titleMustBeString: "Test title must be a string, a function or class name",
			emptyTitle: "{{ functionName }} should not have an empty title",
			duplicatePrefix: "should not have duplicate prefix",
			accidentalSpace: "should not have leading or trailing spaces",
			disallowedWord: "\"{{ word }}\" is not allowed in test title",
			mustNotMatch: "{{ functionName }} should not match {{ pattern }}",
			mustMatch: "{{ functionName }} should match {{ pattern }}",
			mustNotMatchCustom: "{{ message }}",
			mustMatchCustom: "{{ message }}"
		},
		type: "suggestion",
		schema: [{
			type: "object",
			properties: {
				ignoreTypeOfDescribeName: {
					description: "Skip validating `describe` titles that come from `typeof`.",
					type: "boolean"
				},
				allowArguments: {
					description: "Allow dynamic arguments as titles.",
					type: "boolean"
				},
				disallowedWords: {
					description: "Words that are not allowed in test titles.",
					type: "array",
					items: { type: "string" }
				}
			},
			patternProperties: { [/^must(?:Not)?Match$/u.source]: { oneOf: [
				{ type: "string" },
				MatcherAndMessageSchema,
				{
					type: "object",
					propertyNames: {
						type: "string",
						enum: [
							"describe",
							"test",
							"it"
						]
					},
					additionalProperties: { oneOf: [{ type: "string" }, MatcherAndMessageSchema] }
				}
			] } },
			additionalProperties: false
		}],
		defaultOptions: [{
			ignoreTypeOfDescribeName: false,
			allowArguments: false,
			disallowedWords: []
		}],
		fixable: "code"
	},
	create(context, [{ ignoreTypeOfDescribeName, allowArguments, disallowedWords = [], mustNotMatch, mustMatch }]) {
		const disallowedWordsRegexp = new RegExp(`\\b(${disallowedWords.join("|")})\\b`, "iu");
		const mustNotMatchPatterns = compileMatcherPatterns(mustNotMatch ?? {});
		const mustMatchPatterns = compileMatcherPatterns(mustMatch ?? {});
		const settings = parsePluginSettings(context.settings);
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "describe" && vitestFnCall?.type !== "test" && vitestFnCall?.type !== "it") return;
			if (vitestFnCall.members.some((member) => ["extend", "scoped"].includes(getAccessorValue(member)))) return;
			const reportEmptyTitle = (node) => {
				context.report({
					messageId: "emptyTitle",
					data: { functionName: vitestFnCall.type === "describe" ? DescribeAlias.describe : TestCaseName.test },
					node
				});
			};
			const [argument] = node.arguments;
			const getArgumentType = () => {
				if (!settings.typecheck) return null;
				return _typescript_eslint_utils.ESLintUtils.getParserServices(context).getTypeAtLocation(argument);
			};
			const type = getArgumentType();
			if (type && isClassOrFunctionType(type)) return;
			if (!argument || allowArguments && argument.type === _typescript_eslint_utils.AST_NODE_TYPES.Identifier) return;
			if (!isStringNode(argument)) {
				if (argument.type === _typescript_eslint_utils.AST_NODE_TYPES.BinaryExpression && doesBinaryExpressionContainStringNode(argument) || type && isStringLikeType(type)) return;
				if (argument.type !== _typescript_eslint_utils.AST_NODE_TYPES.TemplateLiteral && !(ignoreTypeOfDescribeName && vitestFnCall.type === "describe")) context.report({
					messageId: "titleMustBeString",
					loc: argument.loc
				});
				return;
			}
			const title = getStringValue(argument);
			if (!title) {
				reportEmptyTitle(node);
				return;
			}
			if (disallowedWords.length > 0) {
				const disallowedMatch = disallowedWordsRegexp.exec(title);
				if (disallowedMatch) {
					context.report({
						messageId: "disallowedWord",
						data: { word: disallowedMatch[1] },
						node: argument
					});
					return;
				}
			}
			if (title.trim().length !== title.length) context.report({
				messageId: "accidentalSpace",
				node: argument,
				fix: (fixer) => [fixer.replaceTextRange(argument.range, quoteStringValue(argument).replace(/^([`'"]) +?/u, "$1").replace(/ +?([`'"])$/u, "$1"))]
			});
			const unPrefixedName = trimFXPrefix(vitestFnCall.name);
			const [firstWord] = title.split(" ");
			if (firstWord.toLowerCase() === unPrefixedName) context.report({
				messageId: "duplicatePrefix",
				node: argument,
				fix: (fixer) => [fixer.replaceTextRange(argument.range, quoteStringValue(argument).replace(/^([`'"]).+? /u, "$1"))]
			});
			const vitestFnName = unPrefixedName;
			const [mustNotMatchPattern, mustNotMatchMessage] = mustNotMatchPatterns[vitestFnName] ?? [];
			if (mustNotMatchPattern) {
				if (mustNotMatchPattern.test(title)) {
					context.report({
						messageId: mustNotMatchMessage ? "mustNotMatchCustom" : "mustNotMatch",
						node: argument,
						data: {
							functionName: vitestFnName,
							pattern: mustNotMatchPattern,
							message: mustNotMatchMessage
						}
					});
					return;
				}
			}
			const [mustMatchPattern, mustMatchMessage] = mustMatchPatterns[vitestFnName] ?? [];
			if (mustMatchPattern) {
				if (!mustMatchPattern.test(title)) context.report({
					messageId: mustMatchMessage ? "mustMatchCustom" : "mustMatch",
					node: argument,
					data: {
						functionName: vitestFnName,
						pattern: mustMatchPattern,
						message: mustMatchMessage
					}
				});
			}
		} };
	}
});

//#endregion
//#region src/rules/warn-todo.ts
const RULE_NAME = "warn-todo";
var warn_todo_default = createEslintRule({
	name: RULE_NAME,
	meta: {
		docs: {
			description: "disallow `.todo` usage",
			recommended: false
		},
		messages: { warnTodo: "The use of `.todo` is not recommended." },
		type: "suggestion",
		schema: []
	},
	create(context) {
		return { CallExpression(node) {
			const vitestFnCall = parseVitestFnCall(node, context);
			if (vitestFnCall?.type !== "describe" && vitestFnCall?.type !== "test" && vitestFnCall?.type !== "it") return;
			const todoMember = vitestFnCall.members.find((m) => m.type === "Identifier" && m.name === "todo");
			if (!todoMember) return;
			context.report({
				messageId: "warnTodo",
				node: todoMember
			});
		} };
	}
});

//#endregion
//#region src/rules/index.ts
const rules = {
	"consistent-each-for": consistent_each_for_default,
	"consistent-test-filename": consistent_test_filename_default,
	"consistent-test-it": consistent_test_it_default,
	"consistent-vitest-vi": consistent_vitest_vi_default,
	"expect-expect": expect_expect_default,
	"hoisted-apis-on-top": hoisted_apis_on_top_default,
	"max-expects": max_expects_default,
	"max-nested-describe": max_nested_describe_default,
	"no-alias-methods": no_alias_methods_default,
	"no-commented-out-tests": no_commented_out_tests_default,
	"no-conditional-expect": no_conditional_expect_default,
	"no-conditional-in-test": no_conditional_in_test_default,
	"no-conditional-tests": no_conditional_tests_default,
	"no-disabled-tests": no_disabled_tests_default,
	"no-done-callback": no_done_callback_default,
	"no-duplicate-hooks": no_duplicate_hooks_default,
	"no-focused-tests": no_focused_tests_default,
	"no-hooks": no_hooks_default,
	"no-identical-title": no_identical_title_default,
	"no-import-node-test": no_import_node_test_default,
	"no-importing-vitest-globals": no_importing_vitest_globals_default,
	"no-interpolation-in-snapshots": no_interpolation_in_snapshots_default,
	"no-large-snapshots": no_large_snapshots_default,
	"no-mocks-import": no_mocks_import_default,
	"no-restricted-matchers": no_restricted_matchers_default,
	"no-restricted-vi-methods": no_restricted_vi_methods_default,
	"no-standalone-expect": no_standalone_expect_default,
	"no-test-prefixes": no_test_prefixes_default,
	"no-test-return-statement": no_test_return_statement_default,
	"no-unneeded-async-expect-function": no_unneeded_async_expect_function_default,
	"padding-around-after-all-blocks": padding_around_after_all_blocks_default,
	"padding-around-after-each-blocks": padding_around_after_each_blocks_default,
	"padding-around-all": padding_around_all_default,
	"padding-around-before-all-blocks": padding_around_before_all_blocks_default,
	"padding-around-before-each-blocks": padding_around_before_each_blocks_default,
	"padding-around-describe-blocks": padding_around_describe_blocks_default,
	"padding-around-expect-groups": padding_around_expect_groups_default,
	"padding-around-test-blocks": padding_around_test_blocks_default,
	"prefer-called-exactly-once-with": prefer_called_exactly_once_with_default,
	"prefer-called-once": prefer_called_once_default,
	"prefer-called-times": prefer_called_times_default,
	"prefer-called-with": prefer_called_with_default,
	"prefer-comparison-matcher": prefer_comparison_matcher_default,
	"prefer-describe-function-title": prefer_describe_function_title_default,
	"prefer-each": prefer_each_default,
	"prefer-equality-matcher": prefer_equality_matcher_default,
	"prefer-expect-assertions": prefer_expect_assertions_default,
	"prefer-expect-resolves": prefer_expect_resolves_default,
	"prefer-expect-type-of": prefer_expect_type_of_default,
	"prefer-hooks-in-order": prefer_hooks_in_order_default,
	"prefer-hooks-on-top": prefer_hooks_on_top_default,
	"prefer-import-in-mock": prefer_import_in_mock_default,
	"prefer-importing-vitest-globals": prefer_importing_vitest_globals_default,
	"prefer-lowercase-title": prefer_lowercase_title_default,
	"prefer-mock-promise-shorthand": prefer_mock_promise_shorthand_default,
	"prefer-mock-return-shorthand": prefer_mock_return_shorthand_default,
	"prefer-snapshot-hint": prefer_snapshot_hint_default,
	"prefer-spy-on": prefer_spy_on_default,
	"prefer-strict-boolean-matchers": prefer_strict_boolean_matchers_default,
	"prefer-strict-equal": prefer_strict_equal_default,
	"prefer-to-be-falsy": prefer_to_be_falsy_default,
	"prefer-to-be-object": prefer_to_be_object_default,
	"prefer-to-be-truthy": prefer_to_be_truthy_default,
	"prefer-to-be": prefer_to_be_default,
	"prefer-to-contain": prefer_to_contain_default,
	"prefer-to-have-been-called-times": prefer_to_have_been_called_times_default,
	"prefer-to-have-length": prefer_to_have_length_default,
	"prefer-todo": prefer_todo_default,
	"prefer-vi-mocked": prefer_vi_mocked_default,
	"require-awaited-expect-poll": require_awaited_expect_poll_default,
	"require-hook": require_hook_default,
	"require-local-test-context-for-concurrent-snapshots": require_local_test_context_for_concurrent_snapshots_default,
	"require-mock-type-parameters": require_mock_type_parameters_default,
	"require-test-timeout": require_test_timeout_default,
	"require-to-throw-message": require_to_throw_message_default,
	"require-top-level-describe": require_top_level_describe_default,
	"unbound-method": unbound_method_default,
	"valid-describe-callback": valid_describe_callback_default,
	"valid-expect-in-promise": valid_expect_in_promise_default,
	"valid-expect": valid_expect_default,
	"valid-title": valid_title_default,
	"warn-todo": warn_todo_default
};

//#endregion
//#region src/index.ts
const createConfig = (rules) => Object.keys(rules).reduce((acc, ruleName) => {
	return {
		...acc,
		[`vitest/${ruleName}`]: rules[ruleName]
	};
}, {});
const createConfigLegacy = (rules) => ({
	plugins: ["@vitest"],
	rules: Object.keys(rules).reduce((acc, ruleName) => {
		return {
			...acc,
			[`@vitest/${ruleName}`]: rules[ruleName]
		};
	}, {})
});
const allRules = {
	"consistent-each-for": "warn",
	"consistent-test-filename": "warn",
	"consistent-test-it": "warn",
	"consistent-vitest-vi": "warn",
	"expect-expect": "warn",
	"hoisted-apis-on-top": "warn",
	"max-expects": "warn",
	"max-nested-describe": "warn",
	"no-alias-methods": "warn",
	"no-commented-out-tests": "warn",
	"no-conditional-expect": "warn",
	"no-conditional-in-test": "warn",
	"no-conditional-tests": "warn",
	"no-disabled-tests": "warn",
	"no-duplicate-hooks": "warn",
	"no-focused-tests": "warn",
	"no-hooks": "warn",
	"no-identical-title": "warn",
	"no-import-node-test": "warn",
	"no-importing-vitest-globals": "off",
	"no-interpolation-in-snapshots": "warn",
	"no-large-snapshots": "warn",
	"no-mocks-import": "warn",
	"no-restricted-matchers": "warn",
	"no-restricted-vi-methods": "warn",
	"no-standalone-expect": "warn",
	"no-test-prefixes": "warn",
	"no-test-return-statement": "warn",
	"no-unneeded-async-expect-function": "warn",
	"padding-around-after-all-blocks": "warn",
	"padding-around-after-each-blocks": "warn",
	"padding-around-all": "warn",
	"padding-around-before-all-blocks": "warn",
	"padding-around-before-each-blocks": "warn",
	"padding-around-describe-blocks": "warn",
	"padding-around-expect-groups": "warn",
	"padding-around-test-blocks": "warn",
	"prefer-called-exactly-once-with": "warn",
	"prefer-called-once": "off",
	"prefer-called-times": "warn",
	"prefer-called-with": "warn",
	"prefer-comparison-matcher": "warn",
	"prefer-describe-function-title": "warn",
	"prefer-each": "warn",
	"prefer-equality-matcher": "warn",
	"prefer-expect-assertions": "warn",
	"prefer-expect-resolves": "warn",
	"prefer-expect-type-of": "warn",
	"prefer-hooks-in-order": "warn",
	"prefer-hooks-on-top": "warn",
	"prefer-import-in-mock": "warn",
	"prefer-importing-vitest-globals": "warn",
	"prefer-lowercase-title": "warn",
	"prefer-mock-promise-shorthand": "warn",
	"prefer-snapshot-hint": "warn",
	"prefer-spy-on": "warn",
	"prefer-strict-boolean-matchers": "warn",
	"prefer-strict-equal": "warn",
	"prefer-to-be-falsy": "off",
	"prefer-to-be-object": "warn",
	"prefer-to-be-truthy": "off",
	"prefer-to-be": "warn",
	"prefer-to-contain": "warn",
	"prefer-to-have-been-called-times": "warn",
	"prefer-to-have-length": "warn",
	"prefer-todo": "warn",
	"prefer-vi-mocked": "warn",
	"require-awaited-expect-poll": "warn",
	"require-hook": "warn",
	"require-local-test-context-for-concurrent-snapshots": "warn",
	"require-mock-type-parameters": "warn",
	"require-test-timeout": "off",
	"require-to-throw-message": "warn",
	"require-top-level-describe": "warn",
	"unbound-method": "warn",
	"valid-describe-callback": "warn",
	"valid-expect-in-promise": "warn",
	"valid-expect": "warn",
	"valid-title": "warn"
};
const recommendedRules = {
	"expect-expect": "error",
	"no-commented-out-tests": "error",
	"no-conditional-expect": "error",
	"no-disabled-tests": "warn",
	"no-focused-tests": "error",
	"no-identical-title": "error",
	"no-import-node-test": "error",
	"no-interpolation-in-snapshots": "error",
	"no-mocks-import": "error",
	"no-standalone-expect": "error",
	"no-unneeded-async-expect-function": "error",
	"prefer-called-exactly-once-with": "error",
	"require-local-test-context-for-concurrent-snapshots": "error",
	"valid-describe-callback": "error",
	"valid-expect": "error",
	"valid-expect-in-promise": "error",
	"valid-title": "error"
};
const plugin = {
	meta: {
		name: "vitest",
		version
	},
	rules,
	environments: { env: { globals: {
		suite: true,
		test: true,
		describe: true,
		it: true,
		expectTypeOf: true,
		assertType: true,
		expect: true,
		assert: true,
		chai: true,
		vitest: true,
		vi: true,
		beforeAll: true,
		afterAll: true,
		beforeEach: true,
		afterEach: true,
		onTestFailed: true,
		onTestFinished: true
	} } },
	configs: {
		"legacy-recommended": createConfigLegacy(recommendedRules),
		"legacy-all": createConfigLegacy(allRules),
		recommended: {
			name: "vitest/recommended",
			plugins: { get vitest() {
				return plugin;
			} },
			rules: createConfig(recommendedRules)
		},
		all: {
			name: "vitest/all",
			plugins: { get vitest() {
				return plugin;
			} },
			rules: createConfig(allRules)
		},
		env: {
			name: "vitest/env",
			languageOptions: { globals: {
				suite: "writable",
				test: "writable",
				describe: "writable",
				it: "writable",
				expectTypeOf: "writable",
				assertType: "writable",
				expect: "writable",
				assert: "writable",
				chai: "writable",
				vitest: "writable",
				vi: "writable",
				beforeAll: "writable",
				afterAll: "writable",
				beforeEach: "writable",
				afterEach: "writable",
				onTestFailed: "writable",
				onTestFinished: "writable"
			} }
		}
	}
};

//#endregion
module.exports = plugin;