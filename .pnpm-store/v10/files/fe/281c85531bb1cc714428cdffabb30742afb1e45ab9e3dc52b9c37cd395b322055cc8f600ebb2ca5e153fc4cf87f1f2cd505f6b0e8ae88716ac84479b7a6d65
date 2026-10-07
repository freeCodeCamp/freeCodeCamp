import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ASTUtils, AST_NODE_TYPES, ESLintUtils, TSESTree } from "@typescript-eslint/utils";
import { DefinitionType, ScopeType } from "@typescript-eslint/scope-manager";
import { isAwaitExpression, isIdentifier } from "@typescript-eslint/utils/ast-utils";
//#region src/configs/angular.ts
var angular_default = { rules: {
	"testing-library/await-async-events": ["error", { eventModule: "userEvent" }],
	"testing-library/await-async-queries": "error",
	"testing-library/await-async-utils": "error",
	"testing-library/no-await-sync-events": ["error", { eventModules: ["fire-event"] }],
	"testing-library/no-await-sync-queries": "error",
	"testing-library/no-container": "error",
	"testing-library/no-debugging-utils": "warn",
	"testing-library/no-dom-import": ["error", "angular"],
	"testing-library/no-global-regexp-flag-in-query": "error",
	"testing-library/no-node-access": "error",
	"testing-library/no-promise-in-fire-event": "error",
	"testing-library/no-render-in-lifecycle": "error",
	"testing-library/no-wait-for-multiple-assertions": "error",
	"testing-library/no-wait-for-side-effects": "error",
	"testing-library/no-wait-for-snapshot": "error",
	"testing-library/prefer-find-by": "error",
	"testing-library/prefer-presence-queries": "error",
	"testing-library/prefer-query-by-disappearance": "error",
	"testing-library/prefer-screen-queries": "error",
	"testing-library/render-result-naming-convention": "error"
} };
//#endregion
//#region src/configs/dom.ts
var dom_default = { rules: {
	"testing-library/await-async-events": ["error", { eventModule: "userEvent" }],
	"testing-library/await-async-queries": "error",
	"testing-library/await-async-utils": "error",
	"testing-library/no-await-sync-events": ["error", { eventModules: ["fire-event"] }],
	"testing-library/no-await-sync-queries": "error",
	"testing-library/no-global-regexp-flag-in-query": "error",
	"testing-library/no-node-access": "error",
	"testing-library/no-promise-in-fire-event": "error",
	"testing-library/no-wait-for-multiple-assertions": "error",
	"testing-library/no-wait-for-side-effects": "error",
	"testing-library/no-wait-for-snapshot": "error",
	"testing-library/prefer-find-by": "error",
	"testing-library/prefer-presence-queries": "error",
	"testing-library/prefer-query-by-disappearance": "error",
	"testing-library/prefer-screen-queries": "error"
} };
//#endregion
//#region src/configs/marko.ts
var marko_default = { rules: {
	"testing-library/await-async-events": ["error", { eventModule: ["fireEvent", "userEvent"] }],
	"testing-library/await-async-queries": "error",
	"testing-library/await-async-utils": "error",
	"testing-library/no-await-sync-queries": "error",
	"testing-library/no-container": "error",
	"testing-library/no-debugging-utils": "warn",
	"testing-library/no-dom-import": ["error", "marko"],
	"testing-library/no-global-regexp-flag-in-query": "error",
	"testing-library/no-node-access": "error",
	"testing-library/no-promise-in-fire-event": "error",
	"testing-library/no-render-in-lifecycle": "error",
	"testing-library/no-unnecessary-act": "error",
	"testing-library/no-wait-for-multiple-assertions": "error",
	"testing-library/no-wait-for-side-effects": "error",
	"testing-library/no-wait-for-snapshot": "error",
	"testing-library/prefer-find-by": "error",
	"testing-library/prefer-presence-queries": "error",
	"testing-library/prefer-query-by-disappearance": "error",
	"testing-library/prefer-screen-queries": "error",
	"testing-library/render-result-naming-convention": "error"
} };
//#endregion
//#region src/configs/react.ts
var react_default = { rules: {
	"testing-library/await-async-events": ["error", { eventModule: "userEvent" }],
	"testing-library/await-async-queries": "error",
	"testing-library/await-async-utils": "error",
	"testing-library/no-await-sync-events": ["error", { eventModules: ["fire-event"] }],
	"testing-library/no-await-sync-queries": "error",
	"testing-library/no-container": "error",
	"testing-library/no-debugging-utils": "warn",
	"testing-library/no-dom-import": ["error", "react"],
	"testing-library/no-global-regexp-flag-in-query": "error",
	"testing-library/no-manual-cleanup": "error",
	"testing-library/no-node-access": "error",
	"testing-library/no-promise-in-fire-event": "error",
	"testing-library/no-render-in-lifecycle": "error",
	"testing-library/no-unnecessary-act": "error",
	"testing-library/no-wait-for-multiple-assertions": "error",
	"testing-library/no-wait-for-side-effects": "error",
	"testing-library/no-wait-for-snapshot": "error",
	"testing-library/prefer-find-by": "error",
	"testing-library/prefer-presence-queries": "error",
	"testing-library/prefer-query-by-disappearance": "error",
	"testing-library/prefer-screen-queries": "error",
	"testing-library/render-result-naming-convention": "error"
} };
//#endregion
//#region src/configs/svelte.ts
var svelte_default = { rules: {
	"testing-library/await-async-events": ["error", { eventModule: ["fireEvent", "userEvent"] }],
	"testing-library/await-async-queries": "error",
	"testing-library/await-async-utils": "error",
	"testing-library/no-await-sync-queries": "error",
	"testing-library/no-container": "error",
	"testing-library/no-debugging-utils": "warn",
	"testing-library/no-dom-import": ["error", "svelte"],
	"testing-library/no-global-regexp-flag-in-query": "error",
	"testing-library/no-manual-cleanup": "error",
	"testing-library/no-node-access": "error",
	"testing-library/no-promise-in-fire-event": "error",
	"testing-library/no-render-in-lifecycle": "error",
	"testing-library/no-wait-for-multiple-assertions": "error",
	"testing-library/no-wait-for-side-effects": "error",
	"testing-library/no-wait-for-snapshot": "error",
	"testing-library/prefer-find-by": "error",
	"testing-library/prefer-presence-queries": "error",
	"testing-library/prefer-query-by-disappearance": "error",
	"testing-library/prefer-screen-queries": "error",
	"testing-library/render-result-naming-convention": "error"
} };
//#endregion
//#region src/configs/index.ts
const baseConfigs = {
	dom: dom_default,
	angular: angular_default,
	react: react_default,
	vue: { rules: {
		"testing-library/await-async-events": ["error", { eventModule: ["fireEvent", "userEvent"] }],
		"testing-library/await-async-queries": "error",
		"testing-library/await-async-utils": "error",
		"testing-library/no-await-sync-queries": "error",
		"testing-library/no-container": "error",
		"testing-library/no-debugging-utils": "warn",
		"testing-library/no-dom-import": ["error", "vue"],
		"testing-library/no-global-regexp-flag-in-query": "error",
		"testing-library/no-manual-cleanup": "error",
		"testing-library/no-node-access": "error",
		"testing-library/no-promise-in-fire-event": "error",
		"testing-library/no-render-in-lifecycle": "error",
		"testing-library/no-wait-for-multiple-assertions": "error",
		"testing-library/no-wait-for-side-effects": "error",
		"testing-library/no-wait-for-snapshot": "error",
		"testing-library/prefer-find-by": "error",
		"testing-library/prefer-presence-queries": "error",
		"testing-library/prefer-query-by-disappearance": "error",
		"testing-library/prefer-screen-queries": "error",
		"testing-library/render-result-naming-convention": "error"
	} },
	svelte: svelte_default,
	marko: marko_default
};
//#endregion
//#region src/utils/compat.ts
/* istanbul ignore next */
const getFilename = (context) => {
	return context.filename ?? context.getFilename();
};
/* istanbul ignore next */
const getSourceCode = (context) => {
	return context.sourceCode ?? context.getSourceCode();
};
/* istanbul ignore next */
const getScope = (context, node) => {
	return getSourceCode(context).getScope?.(node) ?? context.getScope();
};
/* istanbul ignore next */
const getDeclaredVariables = (context, node) => {
	return getSourceCode(context).getDeclaredVariables?.(node) ?? context.getDeclaredVariables(node);
};
//#endregion
//#region src/node-utils/is-node-of-type.ts
const isArrayExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.ArrayExpression);
const isArrowFunctionExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.ArrowFunctionExpression);
const isBlockStatement = ASTUtils.isNodeOfType(AST_NODE_TYPES.BlockStatement);
const isCallExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.CallExpression);
const isExpressionStatement = ASTUtils.isNodeOfType(AST_NODE_TYPES.ExpressionStatement);
const isVariableDeclaration$1 = ASTUtils.isNodeOfType(AST_NODE_TYPES.VariableDeclaration);
const isAssignmentExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.AssignmentExpression);
const isChainExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.ChainExpression);
const isSequenceExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.SequenceExpression);
const isImportDeclaration = ASTUtils.isNodeOfType(AST_NODE_TYPES.ImportDeclaration);
const isImportDefaultSpecifier = ASTUtils.isNodeOfType(AST_NODE_TYPES.ImportDefaultSpecifier);
const isTSImportEqualsDeclaration = ASTUtils.isNodeOfType(AST_NODE_TYPES.TSImportEqualsDeclaration);
const isImportExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.ImportExpression);
const isImportNamespaceSpecifier = ASTUtils.isNodeOfType(AST_NODE_TYPES.ImportNamespaceSpecifier);
const isImportSpecifier = ASTUtils.isNodeOfType(AST_NODE_TYPES.ImportSpecifier);
const isJSXAttribute = ASTUtils.isNodeOfType(AST_NODE_TYPES.JSXAttribute);
const isLiteral = ASTUtils.isNodeOfType(AST_NODE_TYPES.Literal);
const isTemplateLiteral = ASTUtils.isNodeOfType(AST_NODE_TYPES.TemplateLiteral);
const isMemberExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.MemberExpression);
const isNewExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.NewExpression);
const isObjectExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.ObjectExpression);
const isObjectPattern = ASTUtils.isNodeOfType(AST_NODE_TYPES.ObjectPattern);
const isProperty = ASTUtils.isNodeOfType(AST_NODE_TYPES.Property);
const isReturnStatement = ASTUtils.isNodeOfType(AST_NODE_TYPES.ReturnStatement);
const isFunctionExpression = ASTUtils.isNodeOfType(AST_NODE_TYPES.FunctionExpression);
const isFunctionDeclaration = ASTUtils.isNodeOfType(AST_NODE_TYPES.FunctionDeclaration);
//#endregion
//#region src/node-utils/index.ts
const ValidLeftHandSideExpressions = [
	AST_NODE_TYPES.CallExpression,
	AST_NODE_TYPES.ClassExpression,
	AST_NODE_TYPES.ClassDeclaration,
	AST_NODE_TYPES.FunctionExpression,
	AST_NODE_TYPES.Literal,
	AST_NODE_TYPES.TemplateLiteral,
	AST_NODE_TYPES.MemberExpression,
	AST_NODE_TYPES.ArrayExpression,
	AST_NODE_TYPES.ArrayPattern,
	AST_NODE_TYPES.ClassExpression,
	AST_NODE_TYPES.FunctionExpression,
	AST_NODE_TYPES.Identifier,
	AST_NODE_TYPES.JSXElement,
	AST_NODE_TYPES.JSXFragment,
	AST_NODE_TYPES.JSXOpeningElement,
	AST_NODE_TYPES.MetaProperty,
	AST_NODE_TYPES.ObjectExpression,
	AST_NODE_TYPES.ObjectPattern,
	AST_NODE_TYPES.Super,
	AST_NODE_TYPES.ThisExpression,
	AST_NODE_TYPES.TSNullKeyword,
	AST_NODE_TYPES.TaggedTemplateExpression,
	AST_NODE_TYPES.TSNonNullExpression,
	AST_NODE_TYPES.TSAsExpression,
	AST_NODE_TYPES.ArrowFunctionExpression
];
/**
* Finds the closest CallExpression node for a given node.
* @param node
* @param shouldRestrictInnerScope - If true, CallExpression must belong to innermost scope of given node
*/
function findClosestCallExpressionNode(node, shouldRestrictInnerScope = false) {
	if (isCallExpression(node)) return node;
	if (!node?.parent) return null;
	if (shouldRestrictInnerScope && !ValidLeftHandSideExpressions.includes(node.parent.type)) return null;
	return findClosestCallExpressionNode(node.parent, shouldRestrictInnerScope);
}
function findClosestVariableDeclaratorNode(node) {
	if (!node) return null;
	if (ASTUtils.isVariableDeclarator(node)) return node;
	return findClosestVariableDeclaratorNode(node.parent);
}
function findClosestFunctionExpressionNode(node) {
	if (!node) return null;
	if (isArrowFunctionExpression(node) || isFunctionExpression(node) || isFunctionDeclaration(node)) return node;
	return findClosestFunctionExpressionNode(node.parent);
}
/**
* TODO: remove this one in favor of {@link findClosestCallExpressionNode}
*/
function findClosestCallNode(node, name) {
	if (!node.parent) return null;
	if (isCallExpression(node) && ASTUtils.isIdentifier(node.callee) && node.callee.name === name) return node;
	else return findClosestCallNode(node.parent, name);
}
function hasThenProperty(node) {
	return isMemberExpression(node) && ASTUtils.isIdentifier(node.property) && node.property.name === "then";
}
function hasPromiseHandlerProperty(node) {
	return isMemberExpression(node) && ASTUtils.isIdentifier(node.property) && [
		"then",
		"catch",
		"finally"
	].includes(node.property.name);
}
function hasChainedPromiseHandler(node) {
	const parent = node.parent;
	if (isCallExpression(parent) && parent.parent) return hasPromiseHandlerProperty(parent.parent);
	return !!parent && hasPromiseHandlerProperty(parent);
}
function isPromiseIdentifier(node) {
	return ASTUtils.isIdentifier(node) && node.name === "Promise";
}
function isPromiseAll(node) {
	return isMemberExpression(node.callee) && isPromiseIdentifier(node.callee.object) && ASTUtils.isIdentifier(node.callee.property) && node.callee.property.name === "all";
}
function isPromiseAllSettled(node) {
	return isMemberExpression(node.callee) && isPromiseIdentifier(node.callee.object) && ASTUtils.isIdentifier(node.callee.property) && node.callee.property.name === "allSettled";
}
/**
* Determines whether a given node belongs to handled `Promise.all` or `Promise.allSettled`
* array expression.
*/
function isPromisesArrayResolved(node) {
	const closestCallExpression = findClosestCallExpressionNode(node, true);
	if (!closestCallExpression) return false;
	return !!closestCallExpression.parent && isArrayExpression(closestCallExpression.parent) && isCallExpression(closestCallExpression.parent.parent) && (isPromiseAll(closestCallExpression.parent.parent) || isPromiseAllSettled(closestCallExpression.parent.parent));
}
/**
* Determines whether an Identifier related to a promise is considered as handled.
*
* It will be considered as handled if:
* - it belongs to the `await` expression
* - it belongs to the `Promise.all` method
* - it belongs to the `Promise.allSettled` method
* - it's chained with the `then`, `catch`, `finally` method
* - it's returned from a function
* - has `resolves` or `rejects` jest methods
* - has `toResolve` or `toReject` jest-extended matchers
* - has a jasmine async matcher
*/
function isPromiseHandled(nodeIdentifier) {
	const closestCallExpressionNode = findClosestCallExpressionNode(nodeIdentifier, true);
	return [nodeIdentifier, closestCallExpressionNode == null ? null : getRootExpression(closestCallExpressionNode)].filter((node) => node != null).some((node) => {
		if (!node.parent) return false;
		if (ASTUtils.isAwaitExpression(node.parent)) return true;
		if (isArrowFunctionExpression(node.parent) || isReturnStatement(node.parent)) return true;
		if (hasClosestExpectHandlesPromise(node.parent)) return true;
		if (hasChainedPromiseHandler(node)) return true;
		if (isPromisesArrayResolved(node)) return true;
	});
}
/**
* For an expression in a parent that evaluates to the expression or another child returns the parent node recursively.
*/
function getRootExpression(expression) {
	const { parent } = expression;
	if (parent == null) return expression;
	switch (parent.type) {
		case AST_NODE_TYPES.ConditionalExpression: return getRootExpression(parent);
		case AST_NODE_TYPES.LogicalExpression: {
			let rootExpression;
			switch (parent.operator) {
				case "??":
				case "||":
					rootExpression = getRootExpression(parent);
					break;
				case "&&":
					rootExpression = parent.right === expression ? getRootExpression(parent) : expression;
					break;
			}
			return rootExpression ?? expression;
		}
		case AST_NODE_TYPES.SequenceExpression: return parent.expressions[parent.expressions.length - 1] === expression ? getRootExpression(parent) : expression;
		case AST_NODE_TYPES.ChainExpression: return getRootExpression(parent);
		default: return expression;
	}
}
function getVariableReferences(context, node) {
	if (ASTUtils.isVariableDeclarator(node)) return getDeclaredVariables(context, node)[0]?.references?.slice(1) ?? [];
	return [];
}
function getInnermostFunctionScope(context, asyncQueryNode) {
	const innermostScope = ASTUtils.getInnermostScope(getScope(context, asyncQueryNode), asyncQueryNode);
	if (innermostScope.type === ScopeType.function && ASTUtils.isFunction(innermostScope.block)) return innermostScope;
	return null;
}
function getFunctionReturnStatementNode(functionNode) {
	if (isBlockStatement(functionNode.body)) {
		const returnStatementNode = functionNode.body.body.find((statement) => isReturnStatement(statement));
		if (!returnStatementNode) return null;
		return returnStatementNode.argument;
	} else if (functionNode.expression) return functionNode.body;
	return null;
}
/**
* Gets the property identifier node of a given property node.
*
* Not to be confused with {@link getDeepestIdentifierNode}
*
* An example:
* Having `const a = rtl.within('foo').getByRole('button')`:
*  if we call `getPropertyIdentifierNode` with `rtl` property node,
*  it will return `rtl` identifier node
*/
function getPropertyIdentifierNode(node) {
	if (ASTUtils.isIdentifier(node)) return node;
	if (isMemberExpression(node)) return getPropertyIdentifierNode(node.object);
	if (isCallExpression(node)) return getPropertyIdentifierNode(node.callee);
	if (isExpressionStatement(node) || isChainExpression(node)) return getPropertyIdentifierNode(node.expression);
	if (ASTUtils.isAwaitExpression(node)) return getPropertyIdentifierNode(node.argument);
	return null;
}
/**
* Gets the deepest identifier node in the expression from a given node.
*
* Opposite of {@link getReferenceNode}
*
* An example:
* Having `const a = rtl.within('foo').getByRole('button')`:
*  if we call `getDeepestIdentifierNode` with `rtl` node,
*  it will return `getByRole` identifier
*/
function getDeepestIdentifierNode(node) {
	if (ASTUtils.isIdentifier(node)) return node;
	if (isChainExpression(node)) return getDeepestIdentifierNode(node.expression);
	if (isMemberExpression(node) && ASTUtils.isIdentifier(node.property)) return node.property;
	if (isCallExpression(node)) return getDeepestIdentifierNode(node.callee);
	if (ASTUtils.isAwaitExpression(node)) return getDeepestIdentifierNode(node.argument);
	return null;
}
/**
* Gets the farthest node in the expression from a given node.
*
* Opposite of {@link getDeepestIdentifierNode}

* An example:
* Having `const a = rtl.within('foo').getByRole('button')`:
*  if we call `getReferenceNode` with `getByRole` identifier,
*  it will return `rtl` node
*/
function getReferenceNode(node) {
	if (node.parent && (isMemberExpression(node.parent) || isCallExpression(node.parent))) return getReferenceNode(node.parent);
	return node;
}
function getFunctionName(node) {
	return ASTUtils.getFunctionNameWithKind(node).match(/('\w+')/g)?.[0].replace(/'/g, "") ?? "";
}
function getImportModuleName(node) {
	if (isImportDeclaration(node) && typeof node.source.value === "string") return node.source.value;
	if (isCallExpression(node) && isLiteral(node.arguments[0]) && typeof node.arguments[0].value === "string") return node.arguments[0].value;
}
/**
* Extracts matcher info from MemberExpression node representing an assert.
*/
function getAssertNodeInfo(node) {
	const emptyInfo = {
		matcher: null,
		isNegated: false
	};
	if (!isCallExpression(node.object) || !ASTUtils.isIdentifier(node.object.callee)) return emptyInfo;
	if (node.object.callee.name !== "expect") return emptyInfo;
	let matcher = ASTUtils.getPropertyName(node);
	const isNegated = matcher === "not";
	if (isNegated) matcher = node.parent && isMemberExpression(node.parent) ? ASTUtils.getPropertyName(node.parent) : null;
	if (!matcher) return emptyInfo;
	return {
		matcher,
		isNegated
	};
}
const matcherNamesHandlePromise = [
	"resolves",
	"rejects",
	"toResolve",
	"toReject",
	"toBeRejected",
	"toBeRejectedWith",
	"toBeRejectedWithError",
	"toBePending",
	"toBeResolved",
	"toBeResolvedTo"
];
/**
* Determines whether a node belongs to an async assertion that is fulfilled by:
* - `resolves` or `rejects` properties
* - `toResolve` or `toReject` jest-extended matchers
* - jasmine async matchers
*/
function hasClosestExpectHandlesPromise(node) {
	if (isCallExpression(node) && ASTUtils.isIdentifier(node.callee) && node.parent && isMemberExpression(node.parent) && ["expect", "expectAsync"].includes(node.callee.name)) {
		const expectMatcher = node.parent.property;
		return ASTUtils.isIdentifier(expectMatcher) && matcherNamesHandlePromise.includes(expectMatcher.name);
	}
	if (!node.parent) return false;
	return hasClosestExpectHandlesPromise(node.parent);
}
/**
* Gets the Function node which returns the given Identifier.
*/
function getInnermostReturningFunction(context, node) {
	const functionScope = getInnermostFunctionScope(context, node);
	if (!functionScope) return;
	const returnStatementNode = getFunctionReturnStatementNode(functionScope.block);
	if (!returnStatementNode) return;
	if (getDeepestIdentifierNode(returnStatementNode)?.name !== node.name) return;
	return functionScope.block;
}
function hasImportMatch(importNode, identifierName) {
	if (ASTUtils.isIdentifier(importNode)) return importNode.name === identifierName;
	return importNode.local.name === identifierName;
}
function getCallExpressionFromNode(node) {
	if (isCallExpression(node)) return node;
	if (isChainExpression(node)) return getCallExpressionFromNode(node.expression);
	if (ASTUtils.isAwaitExpression(node)) return getCallExpressionFromNode(node.argument);
	if (isAssignmentExpression(node)) return getCallExpressionFromNode(node.right);
	return null;
}
function getStatementCallExpression(statement) {
	if (isExpressionStatement(statement)) return getCallExpressionFromNode(statement.expression);
	if (isReturnStatement(statement)) return getCallExpressionFromNode(statement.argument);
	if (isVariableDeclaration$1(statement)) for (const declaration of statement.declarations) return getCallExpressionFromNode(declaration.init);
	return null;
}
/**
* Determines whether a given function node is considered as empty function or not.
*
* A function is considered empty if its body is empty.
*
* Note that comments don't affect the check.
*
* If node given is not a function, `false` will be returned.
*/
function isEmptyFunction(node) {
	if (ASTUtils.isFunction(node) && isBlockStatement(node.body)) return node.body.body.length === 0;
	return false;
}
/**
* Finds the import specifier matching a given name for a given import module node.
*/
function findImportSpecifier(specifierName, node) {
	if (isImportDeclaration(node)) {
		const namedExport = node.specifiers.find((n) => {
			return isImportSpecifier(n) && ASTUtils.isIdentifier(n.imported) && [n.imported.name, n.local.name].includes(specifierName);
		});
		if (namedExport) return namedExport;
		return node.specifiers.find((n) => isImportNamespaceSpecifier(n));
	} else {
		if (!ASTUtils.isVariableDeclarator(node.parent)) return;
		const requireNode = node.parent;
		if (ASTUtils.isIdentifier(requireNode.id)) return requireNode.id;
		if (!isObjectPattern(requireNode.id)) return;
		const property = requireNode.id.properties.find((n) => isProperty(n) && ASTUtils.isIdentifier(n.key) && n.key.name === specifierName);
		if (!property) return;
		return property.key;
	}
}
//#endregion
//#region src/utils/is-testing-library-module.ts
const isOfficialTestingLibraryModule = (importSourceName) => [
	...OLD_LIBRARY_MODULES,
	...LIBRARY_MODULES,
	USER_EVENT_MODULE
].includes(importSourceName);
const isCustomTestingLibraryModule = (importSourceName, customModuleSetting) => typeof customModuleSetting === "string" && importSourceName.endsWith(customModuleSetting);
const isTestingLibraryModule = (importSourceName, customModuleSetting) => isOfficialTestingLibraryModule(importSourceName) || isCustomTestingLibraryModule(importSourceName, customModuleSetting);
//#endregion
//#region src/node-utils/accessors.ts
/**
* Checks if the given `node` is a `StringLiteral`.
*
* If a `value` is provided & the `node` is a `StringLiteral`,
* the `value` will be compared to that of the `StringLiteral`.
*/
const isStringLiteral = (node, value) => isLiteral(node) && typeof node.value === "string" && (value === void 0 || node.value === value);
/**
* Checks if the given `node` is a `TemplateLiteral`.
*
* Complex `TemplateLiteral`s are not considered specific, and so will return `false`.
*
* If a `value` is provided & the `node` is a `TemplateLiteral`,
* the `value` will be compared to that of the `TemplateLiteral`.
*/
const isSimpleTemplateLiteral = (node, value) => isTemplateLiteral(node) && node.quasis.length === 1 && (value === void 0 || node.quasis[0]?.value.raw === value);
/**
* Checks if the given `node` is a {@link StringNode}.
*/
const isStringNode = (node, specifics) => isStringLiteral(node, specifics) || isSimpleTemplateLiteral(node, specifics);
/**
* Gets the value of the given `StringNode`.
*
* If the `node` is a `TemplateLiteral`, the `raw` value is used;
* otherwise, `value` is returned instead.
*/
const getStringValue = (node) => isSimpleTemplateLiteral(node) ? node.quasis[0].value.raw : node.value;
/**
* Checks if the given `node` is an `Identifier`.
*
* If a `name` is provided, & the `node` is an `Identifier`,
* the `name` will be compared to that of the `identifier`.
*/
const isIdentifier$1 = (node, name) => ASTUtils.isIdentifier(node) && (name === void 0 || node.name === name);
/**
* Checks if the given `node` is a "supported accessor".
*
* This means that it's a node can be used to access properties,
* and who's "value" can be statically determined.
*
* `MemberExpression` nodes most commonly contain accessors,
* but it's possible for other nodes to contain them.
*
* If a `value` is provided & the `node` is an `AccessorNode`,
* the `value` will be compared to that of the `AccessorNode`.
*
* Note that `value` here refers to the normalised value.
* The property that holds the value is not always called `name`.
*/
const isSupportedAccessor = (node, value) => isIdentifier$1(node, value) || isStringNode(node, value);
/**
* Gets the value of the given `AccessorNode`,
* account for the different node types.
*/
const getAccessorValue = (accessor) => accessor.type === AST_NODE_TYPES.Identifier ? accessor.name : getStringValue(accessor);
//#endregion
//#region src/utils/resolve-to-testing-library-fn.ts
const describeImportDefAsImport = (def) => {
	if (isTSImportEqualsDeclaration(def.parent)) return null;
	if (isImportDefaultSpecifier(def.node)) return {
		source: def.parent.source.value,
		imported: null,
		local: def.node.local.name
	};
	if (!isImportSpecifier(def.node)) return null;
	if (def.parent.importKind === "type") return null;
	return {
		source: def.parent.source.value,
		imported: "name" in def.node.imported ? def.node.imported.name : def.node.imported.value,
		local: def.node.local.name
	};
};
const describeVariableDefAsImport = (def) => {
	if (!def.node.init) return null;
	const sourceNode = isCallExpression(def.node.init) && isIdentifier$1(def.node.init.callee, "require") ? def.node.init.arguments[0] : ASTUtils.isAwaitExpression(def.node.init) && isImportExpression(def.node.init.argument) ? def.node.init.argument.source : null;
	if (!sourceNode || !isStringNode(sourceNode)) return null;
	if (!isProperty(def.name.parent)) return null;
	if (!isSupportedAccessor(def.name.parent.key)) return null;
	return {
		source: getStringValue(sourceNode),
		imported: getAccessorValue(def.name.parent.key),
		local: def.name.name
	};
};
const describePossibleImportDef = (def) => {
	if (def.type === DefinitionType.Variable) return describeVariableDefAsImport(def);
	if (def.type === DefinitionType.ImportBinding) return describeImportDefAsImport(def);
	return null;
};
const resolveScope = (scope, identifier) => {
	let currentScope = scope;
	while (currentScope !== null) {
		const ref = currentScope.set.get(identifier);
		if (ref && ref.defs.length > 0) {
			const def = ref.defs[ref.defs.length - 1];
			const importDetails = def ? describePossibleImportDef(def) : null;
			if (importDetails?.local === identifier) return importDetails;
			return "local";
		}
		currentScope = currentScope.upper;
	}
	return null;
};
const joinChains = (a, b) => a && b ? [...a, ...b] : null;
const getNodeChain = (node) => {
	if (isSupportedAccessor(node)) return [node];
	switch (node.type) {
		case AST_NODE_TYPES.MemberExpression: return joinChains(getNodeChain(node.object), getNodeChain(node.property));
		case AST_NODE_TYPES.CallExpression: return getNodeChain(node.callee);
	}
	return null;
};
const resolveToTestingLibraryFn = (node, context) => {
	const chain = getNodeChain(node);
	if (!chain?.length) return null;
	const identifier = chain[0];
	if (!identifier) return null;
	const maybeImport = resolveScope(context.sourceCode.getScope(identifier), getAccessorValue(identifier));
	if (maybeImport === "local" || maybeImport === null) return null;
	const customModuleSetting = context.settings["testing-library/utils-module"];
	if (isTestingLibraryModule(maybeImport.source, customModuleSetting)) return {
		original: maybeImport.imported,
		local: maybeImport.local
	};
	return null;
};
//#endregion
//#region src/utils/index.ts
const combineQueries = (variants, methods) => {
	const combinedQueries = [];
	variants.forEach((variant) => {
		const variantPrefix = variant.replace("By", "");
		methods.forEach((method) => {
			combinedQueries.push(`${variantPrefix}${method}`);
		});
	});
	return combinedQueries;
};
const getDocsUrl = (ruleName) => `https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/${ruleName}.md`;
const LIBRARY_MODULES = [
	"@testing-library/dom",
	"@testing-library/angular",
	"@testing-library/react",
	"@testing-library/preact",
	"@testing-library/vue",
	"@testing-library/svelte",
	"@marko/testing-library"
];
const USER_EVENT_MODULE = "@testing-library/user-event";
const OLD_LIBRARY_MODULES = [
	"dom-testing-library",
	"vue-testing-library",
	"react-testing-library"
];
const SYNC_QUERIES_VARIANTS = [
	"getBy",
	"getAllBy",
	"queryBy",
	"queryAllBy"
];
const ASYNC_QUERIES_VARIANTS = ["findBy", "findAllBy"];
const ALL_QUERIES_VARIANTS = [...SYNC_QUERIES_VARIANTS, ...ASYNC_QUERIES_VARIANTS];
const ALL_QUERIES_METHODS = [
	"ByLabelText",
	"ByPlaceholderText",
	"ByText",
	"ByAltText",
	"ByTitle",
	"ByDisplayValue",
	"ByRole",
	"ByTestId"
];
const SYNC_QUERIES_COMBINATIONS = combineQueries(SYNC_QUERIES_VARIANTS, ALL_QUERIES_METHODS);
const ASYNC_QUERIES_COMBINATIONS = combineQueries(ASYNC_QUERIES_VARIANTS, ALL_QUERIES_METHODS);
const ALL_QUERIES_COMBINATIONS = [...SYNC_QUERIES_COMBINATIONS, ...ASYNC_QUERIES_COMBINATIONS];
const ASYNC_UTILS = ["waitFor", "waitForElementToBeRemoved"];
const DEBUG_UTILS = [
	"debug",
	"logTestingPlaygroundURL",
	"prettyDOM",
	"logRoles",
	"logDOM",
	"prettyFormat"
];
const EVENTS_SIMULATORS = ["fireEvent", "userEvent"];
const TESTING_FRAMEWORK_SETUP_HOOKS = ["beforeEach", "beforeAll"];
const PROPERTIES_RETURNING_NODES = [
	"activeElement",
	"children",
	"childElementCount",
	"firstChild",
	"firstElementChild",
	"fullscreenElement",
	"lastChild",
	"lastElementChild",
	"nextElementSibling",
	"nextSibling",
	"parentElement",
	"parentNode",
	"pointerLockElement",
	"previousElementSibling",
	"previousSibling",
	"rootNode",
	"scripts"
];
const METHODS_RETURNING_NODES = [
	"closest",
	"getElementById",
	"getElementsByClassName",
	"getElementsByName",
	"getElementsByTagName",
	"getElementsByTagNameNS",
	"querySelector",
	"querySelectorAll"
];
const EVENT_HANDLER_METHODS = [
	"click",
	"select",
	"submit"
];
const ALL_RETURNING_NODES = [...PROPERTIES_RETURNING_NODES, ...METHODS_RETURNING_NODES];
const PRESENCE_MATCHERS = [
	"toBeOnTheScreen",
	"toBeInTheDocument",
	"toBeTruthy",
	"toBeDefined"
];
const ABSENCE_MATCHERS = ["toBeNull", "toBeFalsy"];
//#endregion
//#region src/create-testing-library-rule/detect-testing-library-utils.ts
const SETTING_OPTION_OFF = "off";
const REACT_DOM_TEST_UTILS_PACKAGE = "react-dom/test-utils";
const FIRE_EVENT_NAME$1 = "fireEvent";
const CREATE_EVENT_NAME = "createEvent";
const USER_EVENT_NAME$2 = "userEvent";
const RENDER_NAME = "render";
/**
* Enhances a given rule `create` with helpers to detect Testing Library utils.
*/
function detectTestingLibraryUtils(ruleCreate, { skipRuleReportingCheck = false } = {}) {
	return (context, optionsWithDefault) => {
		const importedTestingLibraryNodes = [];
		let importedCustomModuleNode = null;
		let importedUserEventLibraryNode = null;
		let importedReactDomTestUtilsNode = null;
		const customModuleSetting = context.settings["testing-library/utils-module"];
		const customRendersSetting = context.settings["testing-library/custom-renders"];
		const customQueriesSetting = context.settings["testing-library/custom-queries"];
		/**
		* Small method to extract common checks to determine whether a node is
		* related to Testing Library or not.
		*
		* To determine whether a node is a valid Testing Library util, there are
		* two conditions to match:
		* - it's named in a particular way (decided by given callback)
		* - it's imported from valid Testing Library module (depends on aggressive
		*    reporting)
		*/
		function isPotentialTestingLibraryFunction(node, isPotentialFunctionCallback) {
			if (!node) return false;
			const referenceNodeIdentifier = getPropertyIdentifierNode(getReferenceNode(node));
			if (!referenceNodeIdentifier) return false;
			const importedUtilSpecifier = getTestingLibraryImportedUtilSpecifier(referenceNodeIdentifier);
			const originalNodeName = isImportSpecifier(importedUtilSpecifier) && ASTUtils.isIdentifier(importedUtilSpecifier.imported) && importedUtilSpecifier.local.name !== importedUtilSpecifier.imported.name ? importedUtilSpecifier.imported.name : void 0;
			if (!isPotentialFunctionCallback(node.name, originalNodeName)) return false;
			if (isAggressiveModuleReportingEnabled()) return true;
			return isNodeComingFromTestingLibrary(referenceNodeIdentifier);
		}
		/**
		* Determines whether aggressive module reporting is enabled or not.
		*
		* This aggressive reporting mechanism is considered as enabled when custom
		* module is not set, so we need to assume everything matching Testing
		* Library utils is related to Testing Library no matter from where module
		* they are coming from. Otherwise, this aggressive reporting mechanism is
		* opted-out in favour to report only those utils coming from Testing
		* Library package or custom module set up on settings.
		*/
		const isAggressiveModuleReportingEnabled = () => !customModuleSetting;
		/**
		* Determines whether aggressive render reporting is enabled or not.
		*
		* This aggressive reporting mechanism is considered as enabled when custom
		* renders are not set, so we need to assume every method containing
		* "render" is a valid Testing Library `render`. Otherwise, this aggressive
		* reporting mechanism is opted-out in favour to report only `render` or
		* names set up on custom renders setting.
		*/
		const isAggressiveRenderReportingEnabled = () => {
			const isSwitchedOff = customRendersSetting === SETTING_OPTION_OFF;
			const hasCustomOptions = Array.isArray(customRendersSetting) && customRendersSetting.length > 0;
			return !isSwitchedOff && !hasCustomOptions;
		};
		/**
		* Determines whether Aggressive Reporting for queries is enabled or not.
		*
		* This Aggressive Reporting mechanism is considered as enabled when custom-queries setting is not set,
		* so the plugin needs to report both built-in and custom queries.
		* Otherwise, this Aggressive Reporting mechanism is opted-out in favour of reporting only built-in queries + those
		* indicated in custom-queries setting.
		*/
		const isAggressiveQueryReportingEnabled = () => {
			const isSwitchedOff = customQueriesSetting === SETTING_OPTION_OFF;
			const hasCustomOptions = Array.isArray(customQueriesSetting) && customQueriesSetting.length > 0;
			return !isSwitchedOff && !hasCustomOptions;
		};
		const getCustomModule = () => {
			if (!isAggressiveModuleReportingEnabled() && customModuleSetting !== SETTING_OPTION_OFF) return customModuleSetting;
		};
		const getCustomRenders = () => {
			if (!isAggressiveRenderReportingEnabled() && customRendersSetting !== SETTING_OPTION_OFF) return customRendersSetting;
			return [];
		};
		const getCustomQueries = () => {
			if (!isAggressiveQueryReportingEnabled() && customQueriesSetting !== SETTING_OPTION_OFF) return customQueriesSetting;
			return [];
		};
		const getTestingLibraryImportNode = () => {
			return importedTestingLibraryNodes[0] ?? null;
		};
		const getAllTestingLibraryImportNodes = () => {
			return importedTestingLibraryNodes;
		};
		const getCustomModuleImportNode = () => {
			return importedCustomModuleNode;
		};
		const getTestingLibraryImportName = () => {
			return getImportModuleName(importedTestingLibraryNodes[0]);
		};
		const getCustomModuleImportName = () => {
			return getImportModuleName(importedCustomModuleNode);
		};
		/**
		* Determines whether Testing Library utils are imported or not for
		* current file being analyzed.
		*
		* By default, it is ALWAYS considered as imported. This is what we call
		* "aggressive reporting" so we don't miss TL utils reexported from
		* custom modules.
		*
		* However, there is a setting to customize the module where TL utils can
		* be imported from: "testing-library/utils-module". If this setting is enabled,
		* then this method will return `true` ONLY IF a testing-library package
		* or custom module are imported.
		*/
		const isTestingLibraryImported = (isStrict = false) => {
			const isSomeModuleImported = importedTestingLibraryNodes.length !== 0 || !!importedCustomModuleNode;
			return !isStrict && isAggressiveModuleReportingEnabled() || isSomeModuleImported;
		};
		/**
		* Determines whether a given node is a reportable query,
		* either a built-in or a custom one.
		*
		* Depending on Aggressive Query Reporting setting, custom queries will be
		* reportable or not.
		*/
		const isQuery = (node) => {
			if (!/^(get|query|find)(All)?By.+$/.test(node.name)) return false;
			if (isAggressiveQueryReportingEnabled()) return true;
			const customQueries = getCustomQueries();
			const isBuiltInQuery = ALL_QUERIES_COMBINATIONS.includes(node.name);
			const isReportableCustomQuery = customQueries.some((pattern) => new RegExp(pattern).test(node.name));
			return isBuiltInQuery || isReportableCustomQuery;
		};
		/**
		* Determines whether a given node is `get*` query variant or not.
		*/
		const isGetQueryVariant = (node) => {
			return isQuery(node) && node.name.startsWith("get");
		};
		/**
		* Determines whether a given node is `query*` query variant or not.
		*/
		const isQueryQueryVariant = (node) => {
			return isQuery(node) && node.name.startsWith("query");
		};
		/**
		* Determines whether a given node is `find*` query variant or not.
		*/
		const isFindQueryVariant = (node) => {
			return isQuery(node) && node.name.startsWith("find");
		};
		/**
		* Determines whether a given node is sync query or not.
		*/
		const isSyncQuery = (node) => {
			return isGetQueryVariant(node) || isQueryQueryVariant(node);
		};
		/**
		* Determines whether a given node is async query or not.
		*/
		const isAsyncQuery = (node) => {
			return isFindQueryVariant(node);
		};
		const isCustomQuery = (node) => {
			return isQuery(node) && !ALL_QUERIES_COMBINATIONS.includes(node.name);
		};
		const isBuiltInQuery = (node) => {
			return isQuery(node) && ALL_QUERIES_COMBINATIONS.includes(node.name);
		};
		/**
		* Determines whether a given node is a valid async util or not.
		*
		* A node will be interpreted as a valid async util based on two conditions:
		* the name matches with some Testing Library async util, and the node is
		* coming from Testing Library module.
		*
		* The latter depends on Aggressive module reporting:
		* if enabled, then it doesn't matter from where the given node was imported
		* from as it will be considered part of Testing Library.
		* Otherwise, it means `custom-module` has been set up, so only those nodes
		* coming from Testing Library will be considered as valid.
		*/
		const isAsyncUtil = (node, validNames = ASYNC_UTILS) => {
			return isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
				return validNames.includes(identifierNodeName) || !!originalNodeName && validNames.includes(originalNodeName);
			});
		};
		/**
		* Determines whether a given node is fireEvent util itself or not.
		*
		* Not to be confused with {@link isFireEventMethod}
		*/
		const isFireEventUtil = (node) => {
			return isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
				return [identifierNodeName, originalNodeName].includes("fireEvent");
			});
		};
		/**
		* Determines whether a given node is userEvent util itself or not.
		*
		* Not to be confused with {@link isUserEventMethod}
		*/
		const isUserEventUtil = (node) => {
			const userEvent = findImportedUserEventSpecifier();
			let userEventName;
			if (userEvent) userEventName = ASTUtils.isIdentifier(userEvent) ? userEvent.name : userEvent.local.name;
			else if (isAggressiveModuleReportingEnabled()) userEventName = USER_EVENT_NAME$2;
			if (!userEventName) return false;
			return node.name === userEventName;
		};
		/**
		* Determines whether a given node is fireEvent method or not
		*/
		const isFireEventMethod = (node) => {
			const fireEventUtil = findImportedTestingLibraryUtilSpecifier(FIRE_EVENT_NAME$1);
			let fireEventUtilName;
			if (fireEventUtil) fireEventUtilName = ASTUtils.isIdentifier(fireEventUtil) ? fireEventUtil.name : fireEventUtil.local.name;
			else if (isAggressiveModuleReportingEnabled()) fireEventUtilName = FIRE_EVENT_NAME$1;
			if (!fireEventUtilName) return false;
			const parentMemberExpression = node.parent && isMemberExpression(node.parent) ? node.parent : void 0;
			const parentCallExpression = node.parent && isCallExpression(node.parent) ? node.parent : void 0;
			if (!parentMemberExpression && !parentCallExpression) return false;
			if (parentCallExpression) return [fireEventUtilName, FIRE_EVENT_NAME$1].includes(node.name);
			const definedParentMemberExpression = parentMemberExpression;
			const regularCall = ASTUtils.isIdentifier(definedParentMemberExpression.object) && isCallExpression(definedParentMemberExpression.parent) && definedParentMemberExpression.object.name === fireEventUtilName && node.name !== FIRE_EVENT_NAME$1 && node.name !== fireEventUtilName;
			const wildcardCall = isMemberExpression(definedParentMemberExpression.object) && ASTUtils.isIdentifier(definedParentMemberExpression.object.object) && definedParentMemberExpression.object.object.name === fireEventUtilName && ASTUtils.isIdentifier(definedParentMemberExpression.object.property) && definedParentMemberExpression.object.property.name === FIRE_EVENT_NAME$1 && node.name !== FIRE_EVENT_NAME$1 && node.name !== fireEventUtilName;
			const wildcardCallWithCallExpression = ASTUtils.isIdentifier(definedParentMemberExpression.object) && definedParentMemberExpression.object.name === fireEventUtilName && ASTUtils.isIdentifier(definedParentMemberExpression.property) && definedParentMemberExpression.property.name === FIRE_EVENT_NAME$1 && !isMemberExpression(definedParentMemberExpression.parent) && node.name === FIRE_EVENT_NAME$1 && node.name !== fireEventUtilName;
			return regularCall || wildcardCall || wildcardCallWithCallExpression;
		};
		const isUserEventMethod = (node, userEventSetupVars) => {
			const userEvent = findImportedUserEventSpecifier();
			let userEventName;
			if (userEvent) userEventName = ASTUtils.isIdentifier(userEvent) ? userEvent.name : userEvent.local.name;
			else if (isAggressiveModuleReportingEnabled()) userEventName = USER_EVENT_NAME$2;
			const parentMemberExpression = node.parent && isMemberExpression(node.parent) ? node.parent : void 0;
			if (!parentMemberExpression) return false;
			if (userEventName && [userEventName, USER_EVENT_NAME$2].includes(node.name) || ASTUtils.isIdentifier(parentMemberExpression.object) && parentMemberExpression.object.name === node.name) return false;
			if (userEventName && ASTUtils.isIdentifier(parentMemberExpression.object) && parentMemberExpression.object.name === userEventName) return true;
			if (userEventSetupVars && ASTUtils.isIdentifier(parentMemberExpression.object) && userEventSetupVars.has(parentMemberExpression.object.name)) return true;
			return false;
		};
		/**
		* Determines whether a given node is a valid render util or not.
		*
		* A node will be interpreted as a valid render based on two conditions:
		* the name matches with a valid "render" option, and the node is coming
		* from Testing Library module. This depends on:
		*
		* - Aggressive render reporting: if enabled, then every node name
		* containing "render" will be assumed as Testing Library render util.
		* Otherwise, it means `custom-modules` has been set up, so only those nodes
		* named as "render" or some of the `custom-modules` options will be
		* considered as Testing Library render util.
		* - Aggressive module reporting: if enabled, then it doesn't matter from
		* where the given node was imported from as it will be considered part of
		* Testing Library. Otherwise, it means `custom-module` has been set up, so
		* only those nodes coming from Testing Library will be considered as valid.
		*/
		const isRenderUtil = (node) => isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
			if (isAggressiveRenderReportingEnabled()) return identifierNodeName.toLowerCase().includes(RENDER_NAME);
			return [RENDER_NAME, ...getCustomRenders()].some((validRenderName) => validRenderName === identifierNodeName || Boolean(originalNodeName) && validRenderName === originalNodeName);
		});
		const isCreateEventUtil = (node) => {
			const isCreateEventCallback = (identifierNodeName, originalNodeName) => [identifierNodeName, originalNodeName].includes(CREATE_EVENT_NAME);
			if (isCallExpression(node) && isMemberExpression(node.callee) && ASTUtils.isIdentifier(node.callee.object)) return isPotentialTestingLibraryFunction(node.callee.object, isCreateEventCallback);
			if (isCallExpression(node) && isMemberExpression(node.callee) && isMemberExpression(node.callee.object) && ASTUtils.isIdentifier(node.callee.object.property)) return isPotentialTestingLibraryFunction(node.callee.object.property, isCreateEventCallback);
			return isPotentialTestingLibraryFunction(getDeepestIdentifierNode(node), isCreateEventCallback);
		};
		const isRenderVariableDeclarator = (node) => {
			if (!node.init) return false;
			const initIdentifierNode = getDeepestIdentifierNode(node.init);
			if (!initIdentifierNode) return false;
			return isRenderUtil(initIdentifierNode);
		};
		const isDebugUtil = (identifierNode, validNames = DEBUG_UTILS) => {
			return !(isMemberExpression(identifierNode.parent) && ASTUtils.isIdentifier(identifierNode.parent.object) && identifierNode.parent.object.name === "console") && isPotentialTestingLibraryFunction(identifierNode, (identifierNodeName, originalNodeName) => {
				return validNames.includes(identifierNodeName) || !!originalNodeName && validNames.includes(originalNodeName);
			});
		};
		/**
		* Determines whether a given node is some reportable `act` util.
		*
		* An `act` is reportable if some of these conditions is met:
		* - it's related to Testing Library module (this depends on Aggressive Reporting)
		* - it's related to React DOM Test Utils
		*/
		const isActUtil = (node) => {
			const isTestingLibraryAct = isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
				return [identifierNodeName, originalNodeName].filter(Boolean).includes("act");
			});
			const isReactDomTestUtilsAct = (() => {
				if (!importedReactDomTestUtilsNode) return false;
				const referenceNodeIdentifier = getPropertyIdentifierNode(getReferenceNode(node));
				if (!referenceNodeIdentifier) return false;
				const importedUtilSpecifier = findImportSpecifier(node.name, importedReactDomTestUtilsNode);
				if (!importedUtilSpecifier) return false;
				const importDeclaration = (() => {
					if (isImportDeclaration(importedUtilSpecifier.parent)) return importedUtilSpecifier.parent;
					const variableDeclarator = findClosestVariableDeclaratorNode(importedUtilSpecifier);
					if (isCallExpression(variableDeclarator?.init)) return variableDeclarator?.init;
				})();
				if (!importDeclaration) return false;
				const importDeclarationName = getImportModuleName(importDeclaration);
				if (!importDeclarationName) return false;
				if (importDeclarationName !== REACT_DOM_TEST_UTILS_PACKAGE) return false;
				return hasImportMatch(importedUtilSpecifier, referenceNodeIdentifier.name);
			})();
			return isTestingLibraryAct || isReactDomTestUtilsAct;
		};
		const isTestingLibraryUtil = (node) => {
			return isAsyncUtil(node) || isQuery(node) || isRenderUtil(node) || isFireEventMethod(node) || isUserEventMethod(node) || isActUtil(node) || isCreateEventUtil(node);
		};
		/**
		* Determines whether a given MemberExpression node is a presence assert
		*
		* Presence asserts could have shape of:
		*  - expect(element).toBeInTheDocument()
		*  - expect(element).not.toBeNull()
		*/
		const isPresenceAssert = (node) => {
			const { matcher, isNegated } = getAssertNodeInfo(node);
			if (!matcher) return false;
			return isNegated ? ABSENCE_MATCHERS.some((absenceMather) => absenceMather === matcher) : PRESENCE_MATCHERS.some((presenceMather) => presenceMather === matcher);
		};
		/**
		* Determines whether a given MemberExpression node is an absence assert
		*
		* Absence asserts could have shape of:
		*  - expect(element).toBeNull()
		*  - expect(element).not.toBeInTheDocument()
		*/
		const isAbsenceAssert = (node) => {
			const { matcher, isNegated } = getAssertNodeInfo(node);
			if (!matcher) return false;
			return isNegated ? PRESENCE_MATCHERS.some((presenceMather) => presenceMather === matcher) : ABSENCE_MATCHERS.some((absenceMather) => absenceMather === matcher);
		};
		const isMatchingAssert = (node, matcherName) => {
			const { matcher } = getAssertNodeInfo(node);
			if (!matcher) return false;
			return matcher === matcherName;
		};
		/**
		* Finds the import util specifier related to Testing Library for a given name.
		*/
		const findImportedTestingLibraryUtilSpecifier = (specifierName) => {
			const node = getCustomModuleImportNode() ?? getTestingLibraryImportNode();
			if (!node) return;
			return findImportSpecifier(specifierName, node);
		};
		const findImportedUserEventSpecifier = () => {
			if (!importedUserEventLibraryNode) {
				const customModuleNode = getCustomModuleImportNode();
				if (customModuleNode) return findImportSpecifier(USER_EVENT_NAME$2, customModuleNode) ?? null;
				return null;
			}
			if (isImportDeclaration(importedUserEventLibraryNode)) {
				const userEventIdentifier = importedUserEventLibraryNode.specifiers.find((specifier) => isImportDefaultSpecifier(specifier));
				if (userEventIdentifier) return userEventIdentifier.local;
			} else {
				if (!ASTUtils.isVariableDeclarator(importedUserEventLibraryNode.parent)) return null;
				const requireNode = importedUserEventLibraryNode.parent;
				if (!ASTUtils.isIdentifier(requireNode.id)) return null;
				return requireNode.id;
			}
			return null;
		};
		const getTestingLibraryImportedUtilSpecifier = (node) => {
			const identifierName = getPropertyIdentifierNode(node)?.name;
			if (!identifierName) return;
			return findImportedTestingLibraryUtilSpecifier(identifierName);
		};
		/**
		* Determines if file inspected meets all conditions to be reported by rules or not.
		*/
		const canReportErrors = () => {
			return skipRuleReportingCheck || isTestingLibraryImported();
		};
		/**
		* Determines whether a node is imported from a valid Testing Library module
		*
		* This method will try to find any import matching the given node name,
		* and also make sure the name is a valid match in case it's been renamed.
		*/
		const isNodeComingFromTestingLibrary = (node) => {
			const importNode = getTestingLibraryImportedUtilSpecifier(node);
			if (!importNode) return false;
			if (!getPropertyIdentifierNode(getReferenceNode(node))) return false;
			const importDeclaration = (() => {
				if (isImportDeclaration(importNode.parent)) return importNode.parent;
				const variableDeclarator = findClosestVariableDeclaratorNode(importNode);
				if (isCallExpression(variableDeclarator?.init)) return variableDeclarator?.init;
			})();
			if (!importDeclaration) return false;
			const importDeclarationName = getImportModuleName(importDeclaration);
			if (!importDeclarationName) return false;
			const identifierName = getPropertyIdentifierNode(node)?.name;
			if (!identifierName) return false;
			return hasImportMatch(importNode, identifierName) && isTestingLibraryModule(importDeclarationName, customModuleSetting);
		};
		const helpers = {
			getTestingLibraryImportNode,
			getAllTestingLibraryImportNodes,
			getCustomModuleImportNode,
			getTestingLibraryImportName,
			getCustomModuleImportName,
			isTestingLibraryImported,
			isTestingLibraryUtil,
			isGetQueryVariant,
			isQueryQueryVariant,
			isFindQueryVariant,
			isSyncQuery,
			isAsyncQuery,
			isQuery,
			isCustomQuery,
			isBuiltInQuery,
			isAsyncUtil,
			isFireEventUtil,
			isUserEventUtil,
			isFireEventMethod,
			isUserEventMethod,
			isRenderUtil,
			isCreateEventUtil,
			isRenderVariableDeclarator,
			isDebugUtil,
			isActUtil,
			isPresenceAssert,
			isMatchingAssert,
			isAbsenceAssert,
			canReportErrors,
			findImportedTestingLibraryUtilSpecifier,
			isNodeComingFromTestingLibrary
		};
		const detectionInstructions = {
			ImportDeclaration(node) {
				if (typeof node.source.value !== "string") return;
				if (isOfficialTestingLibraryModule(node.source.value)) importedTestingLibraryNodes.push(node);
				const customModule = getCustomModule();
				if (!importedCustomModuleNode && isCustomTestingLibraryModule(node.source.value, customModule)) importedCustomModuleNode = node;
				if (!importedUserEventLibraryNode && node.source.value === "@testing-library/user-event") importedUserEventLibraryNode = node;
				if (!importedUserEventLibraryNode && node.source.value === REACT_DOM_TEST_UTILS_PACKAGE) importedReactDomTestUtilsNode = node;
			},
			[`CallExpression > Identifier[name="require"]`](node) {
				const callExpression = node.parent;
				const { arguments: args } = callExpression;
				if (args.some((arg) => isLiteral(arg) && typeof arg.value === "string" && isOfficialTestingLibraryModule(arg.value))) importedTestingLibraryNodes.push(callExpression);
				const customModule = getCustomModule();
				if (!importedCustomModuleNode && args.some((arg) => isLiteral(arg) && typeof arg.value === "string" && isCustomTestingLibraryModule(arg.value, customModule))) importedCustomModuleNode = callExpression;
				if (!importedCustomModuleNode && args.some((arg) => isLiteral(arg) && typeof arg.value === "string" && arg.value === "@testing-library/user-event")) importedUserEventLibraryNode = callExpression;
				if (!importedReactDomTestUtilsNode && args.some((arg) => isLiteral(arg) && typeof arg.value === "string" && arg.value === REACT_DOM_TEST_UTILS_PACKAGE)) importedReactDomTestUtilsNode = callExpression;
			}
		};
		const ruleInstructions = ruleCreate(context, optionsWithDefault, helpers);
		const enhancedRuleInstructions = {};
		new Set(Object.keys(detectionInstructions).concat(Object.keys(ruleInstructions))).forEach((instruction) => {
			enhancedRuleInstructions[instruction] = (node) => {
				if (instruction in detectionInstructions) detectionInstructions[instruction]?.(node);
				if (canReportErrors() && ruleInstructions[instruction]) return ruleInstructions[instruction]?.(node);
			};
		});
		return enhancedRuleInstructions;
	};
}
//#endregion
//#region src/create-testing-library-rule/index.ts
const createTestingLibraryRule = ({ create, detectionOptions = {}, ...remainingConfig }) => {
	const rule = ESLintUtils.RuleCreator(getDocsUrl)({
		...remainingConfig,
		create: detectTestingLibraryUtils(create, detectionOptions)
	});
	const { docs } = rule.meta;
	if (docs === void 0) throw new Error("Rule metadata must contain `docs` property");
	return {
		...rule,
		meta: {
			...rule.meta,
			docs
		}
	};
};
//#endregion
//#region src/rules/await-async-events.ts
const RULE_NAME$28 = "await-async-events";
const FIRE_EVENT_NAME = "fireEvent";
const USER_EVENT_NAME$1 = "userEvent";
const USER_EVENT_SETUP_FUNCTION_NAME = "setup";
var await_async_events_default = createTestingLibraryRule({
	name: RULE_NAME$28,
	meta: {
		type: "problem",
		docs: {
			description: "Enforce promises from async event methods are handled",
			recommendedConfig: {
				dom: ["error", { eventModule: "userEvent" }],
				angular: ["error", { eventModule: "userEvent" }],
				react: ["error", { eventModule: "userEvent" }],
				vue: ["error", { eventModule: ["fireEvent", "userEvent"] }],
				svelte: ["error", { eventModule: ["fireEvent", "userEvent"] }],
				marko: ["error", { eventModule: ["fireEvent", "userEvent"] }]
			}
		},
		messages: {
			awaitAsyncEvent: "Promise returned from async event method `{{ name }}` must be handled",
			awaitAsyncEventWrapper: "Promise returned from `{{ name }}` wrapper over async event method must be handled"
		},
		fixable: "code",
		schema: [{
			type: "object",
			default: {},
			additionalProperties: false,
			properties: { eventModule: {
				default: USER_EVENT_NAME$1,
				oneOf: [{
					enum: EVENTS_SIMULATORS.concat(),
					type: "string"
				}, {
					items: {
						type: "string",
						enum: EVENTS_SIMULATORS.concat()
					},
					type: "array"
				}]
			} }
		}]
	},
	defaultOptions: [{ eventModule: USER_EVENT_NAME$1 }],
	create(context, [options], helpers) {
		const functionWrappersNames = [];
		const userEventSetupVars = /* @__PURE__ */ new Set();
		const setupFunctions = /* @__PURE__ */ new Map();
		function reportUnhandledNode({ node, closestCallExpression, messageId = "awaitAsyncEvent", fix }) {
			if (!isPromiseHandled(node)) context.report({
				node: closestCallExpression.callee,
				messageId,
				data: { name: node.name },
				fix
			});
		}
		function detectEventMethodWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) functionWrappersNames.push(getFunctionName(innerFunction));
		}
		function isUserEventSetupCall(node) {
			return node.type === AST_NODE_TYPES.CallExpression && node.callee.type === AST_NODE_TYPES.MemberExpression && node.callee.object.type === AST_NODE_TYPES.Identifier && node.callee.object.name === USER_EVENT_NAME$1 && node.callee.property.type === AST_NODE_TYPES.Identifier && node.callee.property.name === USER_EVENT_SETUP_FUNCTION_NAME;
		}
		const eventModules = typeof options.eventModule === "string" ? [options.eventModule] : options.eventModule;
		const isFireEventEnabled = eventModules.includes(FIRE_EVENT_NAME);
		const isUserEventEnabled = eventModules.includes(USER_EVENT_NAME$1);
		return {
			VariableDeclarator(node) {
				if (!isUserEventEnabled) return;
				if (node.init && isUserEventSetupCall(node.init) && node.id.type === AST_NODE_TYPES.Identifier) userEventSetupVars.add(node.id.name);
				if (node.id.type === AST_NODE_TYPES.ObjectPattern && node.init && node.init.type === AST_NODE_TYPES.CallExpression && node.init.callee.type === AST_NODE_TYPES.Identifier) {
					const functionName = node.init.callee.name;
					const setupProps = setupFunctions.get(functionName);
					if (setupProps) {
						for (const prop of node.id.properties) if (prop.type === AST_NODE_TYPES.Property && prop.key.type === AST_NODE_TYPES.Identifier && setupProps.has(prop.key.name) && prop.value.type === AST_NODE_TYPES.Identifier) userEventSetupVars.add(prop.value.name);
					}
				}
			},
			ReturnStatement(node) {
				if (!isUserEventEnabled || !node.argument || node.argument.type !== AST_NODE_TYPES.ObjectExpression) return;
				const setupProps = /* @__PURE__ */ new Set();
				for (const prop of node.argument.properties) if (prop.type === AST_NODE_TYPES.Property && prop.key.type === AST_NODE_TYPES.Identifier) {
					if (isUserEventSetupCall(prop.value)) setupProps.add(prop.key.name);
					else if (prop.value.type === AST_NODE_TYPES.Identifier && userEventSetupVars.has(prop.value.name)) setupProps.add(prop.key.name);
				}
				if (setupProps.size > 0) {
					const functionNode = findClosestFunctionExpressionNode(node);
					if (functionNode) {
						const functionName = getFunctionName(functionNode);
						setupFunctions.set(functionName, setupProps);
					}
				}
			},
			"CallExpression Identifier"(node) {
				if (isFireEventEnabled && helpers.isFireEventMethod(node) || isUserEventEnabled && helpers.isUserEventMethod(node, userEventSetupVars)) {
					if (node.name === USER_EVENT_SETUP_FUNCTION_NAME) return;
					detectEventMethodWrapper(node);
					const closestCallExpression = findClosestCallExpressionNode(node, true);
					if (!closestCallExpression?.parent) return;
					const references = getVariableReferences(context, closestCallExpression.parent);
					if (references.length === 0) reportUnhandledNode({
						node,
						closestCallExpression,
						fix: (fixer) => {
							if (isMemberExpression(node.parent)) {
								const functionExpression = findClosestFunctionExpressionNode(node);
								if (functionExpression) {
									if (getDeepestIdentifierNode(functionExpression.parent)?.name === "forEach") return null;
									const memberExpressionFixer = fixer.insertTextBefore(node.parent, "await ");
									if (functionExpression.async) return memberExpressionFixer;
									else {
										functionExpression.async = true;
										return [memberExpressionFixer, fixer.insertTextBefore(functionExpression, "async ")];
									}
								}
							}
							return null;
						}
					});
					else for (const reference of references) if (ASTUtils.isIdentifier(reference.identifier)) reportUnhandledNode({
						node: reference.identifier,
						closestCallExpression
					});
				} else if (functionWrappersNames.includes(node.name)) {
					const closestCallExpression = findClosestCallExpressionNode(node, true);
					if (!closestCallExpression) return;
					reportUnhandledNode({
						node,
						closestCallExpression,
						messageId: "awaitAsyncEventWrapper",
						fix: (fixer) => {
							const functionExpression = findClosestFunctionExpressionNode(node);
							if (functionExpression) {
								const nodeFixer = fixer.insertTextBefore(node, "await ");
								if (functionExpression.async) return nodeFixer;
								else {
									functionExpression.async = true;
									return [nodeFixer, fixer.insertTextBefore(functionExpression, "async ")];
								}
							}
							return null;
						}
					});
				}
			}
		};
	}
});
//#endregion
//#region src/utils/add-async-to-function-fix.ts
const addAsyncToFunctionFix = (fixer, ruleFix, functionExpression) => {
	if (functionExpression && !functionExpression.async) {
		/**
		* Mutate the actual node so if other nodes exist in this
		* function expression body they don't also try to fix it.
		*/
		functionExpression.async = true;
		return [ruleFix, fixer.insertTextBefore(functionExpression, "async ")];
	}
	return ruleFix;
};
var await_async_queries_default = createTestingLibraryRule({
	name: "await-async-queries",
	meta: {
		type: "problem",
		docs: {
			description: "Enforce promises from async queries to be handled",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: {
			awaitAsyncQuery: "promise returned from `{{ name }}` query must be handled",
			asyncQueryWrapper: "promise returned from `{{ name }}` wrapper over async query must be handled"
		},
		fixable: "code",
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const functionWrappersNames = [];
		function detectAsyncQueryWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) functionWrappersNames.push(getFunctionName(innerFunction));
		}
		return { CallExpression(node) {
			const identifierNode = getDeepestIdentifierNode(node);
			if (!identifierNode) return;
			if (helpers.isAsyncQuery(identifierNode)) {
				detectAsyncQueryWrapper(identifierNode);
				const closestCallExpressionNode = findClosestCallExpressionNode(node, true);
				if (!closestCallExpressionNode?.parent) return;
				const references = getVariableReferences(context, closestCallExpressionNode.parent);
				if (references.length === 0) {
					if (!isPromiseHandled(identifierNode)) {
						context.report({
							node: identifierNode,
							messageId: "awaitAsyncQuery",
							data: { name: identifierNode.name },
							fix: (fixer) => {
								if (isMemberExpression(identifierNode.parent) && ASTUtils.isIdentifier(identifierNode.parent.object)) return fixer.insertTextBefore(identifierNode.parent, "await ");
								return fixer.insertTextBefore(identifierNode, "await ");
							}
						});
						return;
					}
				}
				for (const reference of references) if (ASTUtils.isIdentifier(reference.identifier) && !isPromiseHandled(reference.identifier)) {
					context.report({
						node: identifierNode,
						messageId: "awaitAsyncQuery",
						data: { name: identifierNode.name },
						fix: (fixer) => references.map((ref) => fixer.insertTextBefore(ref.identifier, "await "))
					});
					return;
				}
			} else if (functionWrappersNames.includes(identifierNode.name) && !isPromiseHandled(identifierNode)) context.report({
				node: identifierNode,
				messageId: "asyncQueryWrapper",
				data: { name: identifierNode.name },
				fix: (fixer) => {
					const functionExpression = findClosestFunctionExpressionNode(node);
					if (!functionExpression) return null;
					let IdentifierNodeFixer;
					if (isMemberExpression(identifierNode.parent))
 /**
					* If the wrapper is a property of an object,
					* add 'await' before the object, e.g.:
					* const obj = { wrapper: () => screen.findByText(/foo/i) };
					* await obj.wrapper();
					*/
					IdentifierNodeFixer = fixer.insertTextBefore(identifierNode.parent, "await ");
					else
 /**
					* Add 'await' before the wrapper function, e.g.:
					* const wrapper = () => screen.findByText(/foo/i);
					* await wrapper();
					*/
					IdentifierNodeFixer = fixer.insertTextBefore(identifierNode, "await ");
					return addAsyncToFunctionFix(fixer, IdentifierNodeFixer, functionExpression);
				}
			});
		} };
	}
});
var await_async_utils_default = createTestingLibraryRule({
	name: "await-async-utils",
	meta: {
		type: "problem",
		docs: {
			description: "Enforce promises from async utils to be awaited properly",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: {
			awaitAsyncUtil: "Promise returned from `{{ name }}` must be handled",
			asyncUtilWrapper: "Promise returned from {{ name }} wrapper over async util must be handled"
		},
		schema: [],
		fixable: "code"
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const functionWrappersNames = [];
		function detectAsyncUtilWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (!innerFunction) return;
			const functionName = getFunctionName(innerFunction);
			if (functionName.length === 0) return;
			functionWrappersNames.push(functionName);
		}
		function detectDestructuredAsyncUtilWrapperAliases(node) {
			for (const property of node.properties) {
				if (!isProperty(property)) continue;
				if (!ASTUtils.isIdentifier(property.key) || !ASTUtils.isIdentifier(property.value)) continue;
				if (functionWrappersNames.includes(property.key.name)) {
					if (property.key.name !== property.value.name) functionWrappersNames.push(property.value.name);
				}
			}
		}
		function insertAwaitBeforeNode(fixer, node) {
			return fixer.insertTextBefore(node, "await ");
		}
		const getMessageId = (node) => {
			if (helpers.isAsyncUtil(node)) return "awaitAsyncUtil";
			return "asyncUtilWrapper";
		};
		return {
			VariableDeclarator(node) {
				if (isObjectPattern(node.id)) {
					detectDestructuredAsyncUtilWrapperAliases(node.id);
					return;
				}
				if (ASTUtils.isIdentifier(node.id) && node.init !== null && !isCallExpression(node.init) && !ASTUtils.isAwaitExpression(node.init) && functionWrappersNames.includes(getDeepestIdentifierNode(node.init)?.name ?? "")) functionWrappersNames.push(node.id.name);
			},
			CallExpression(node) {
				const callExpressionIdentifier = getDeepestIdentifierNode(node);
				if (!callExpressionIdentifier) return;
				if (!(helpers.isAsyncUtil(callExpressionIdentifier) || functionWrappersNames.includes(callExpressionIdentifier.name))) return;
				if (helpers.isAsyncUtil(callExpressionIdentifier)) detectAsyncUtilWrapper(callExpressionIdentifier);
				const closestCallExpression = findClosestCallExpressionNode(callExpressionIdentifier, true);
				if (!closestCallExpression?.parent) return;
				const references = getVariableReferences(context, closestCallExpression.parent);
				const functionExpression = findClosestFunctionExpressionNode(node);
				if (references.length === 0) {
					if (!isPromiseHandled(callExpressionIdentifier)) context.report({
						node: callExpressionIdentifier,
						messageId: getMessageId(callExpressionIdentifier),
						data: { name: callExpressionIdentifier.name },
						fix: (fixer) => {
							return addAsyncToFunctionFix(fixer, insertAwaitBeforeNode(fixer, getReferenceNode(callExpressionIdentifier)), functionExpression);
						}
					});
				} else for (const reference of references) {
					const referenceNode = reference.identifier;
					if (!isPromiseHandled(referenceNode)) {
						context.report({
							node: callExpressionIdentifier,
							messageId: getMessageId(callExpressionIdentifier),
							data: { name: callExpressionIdentifier.name },
							fix: (fixer) => {
								return addAsyncToFunctionFix(fixer, insertAwaitBeforeNode(fixer, referenceNode), functionExpression);
							}
						});
						return;
					}
				}
			}
		};
	}
});
//#endregion
//#region src/rules/consistent-data-testid.ts
const RULE_NAME$25 = "consistent-data-testid";
const FILENAME_PLACEHOLDER = "{fileName}";
var consistent_data_testid_default = createTestingLibraryRule({
	name: RULE_NAME$25,
	meta: {
		type: "suggestion",
		docs: {
			description: "Ensures consistent usage of `data-testid`",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: {
			consistentDataTestId: "`{{attr}}` \"{{value}}\" should match `{{regex}}`",
			consistentDataTestIdCustomMessage: "`{{message}}`"
		},
		schema: [{
			type: "object",
			default: {},
			additionalProperties: false,
			required: ["testIdPattern"],
			properties: {
				testIdPattern: { type: "string" },
				testIdAttribute: {
					default: "data-testid",
					oneOf: [{ type: "string" }, {
						type: "array",
						items: { type: "string" }
					}]
				},
				customMessage: {
					default: void 0,
					type: "string"
				}
			}
		}]
	},
	defaultOptions: [{
		testIdPattern: "",
		testIdAttribute: "data-testid",
		customMessage: void 0
	}],
	detectionOptions: { skipRuleReportingCheck: true },
	create: (context, [options]) => {
		const { testIdPattern, testIdAttribute: attr, customMessage } = options;
		function getFileNameData() {
			const splitPath = getFilename(context).split("/");
			const fileNameWithExtension = splitPath.pop() ?? "";
			if (fileNameWithExtension.includes("[") || fileNameWithExtension.includes("]")) return { fileName: void 0 };
			const parent = splitPath.pop();
			const fileName = fileNameWithExtension.split(".").shift();
			return { fileName: fileName === "index" ? parent : fileName };
		}
		function getTestIdValidator(fileName) {
			return new RegExp(testIdPattern.replace(FILENAME_PLACEHOLDER, fileName));
		}
		function isTestIdAttribute(name) {
			if (typeof attr === "string") return attr === name;
			else return attr?.includes(name) ?? false;
		}
		function getErrorMessageId() {
			if (customMessage === void 0) return "consistentDataTestId";
			return "consistentDataTestIdCustomMessage";
		}
		return { JSXIdentifier: (node) => {
			if (!node.parent || !isJSXAttribute(node.parent) || !isLiteral(node.parent.value) || !isTestIdAttribute(node.name)) return;
			const value = node.parent.value.value;
			const { fileName } = getFileNameData();
			const regex = getTestIdValidator(fileName ?? "");
			if (value && typeof value === "string" && !regex.test(value)) context.report({
				node,
				messageId: getErrorMessageId(),
				data: {
					attr: node.name,
					value,
					regex,
					message: customMessage
				}
			});
		} };
	}
});
//#endregion
//#region src/rules/no-await-sync-events.ts
const USER_EVENT_ASYNC_EXCEPTIONS = ["type", "keyboard"];
const FIRE_EVENT_OPTION = "fire-event";
const USER_EVENT_OPTION = "user-event";
const VALID_EVENT_MODULES = [FIRE_EVENT_OPTION, USER_EVENT_OPTION];
const DEFAULT_EVENT_MODULES = [FIRE_EVENT_OPTION];
var no_await_sync_events_default = createTestingLibraryRule({
	name: "no-await-sync-events",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow unnecessary `await` for sync events",
			recommendedConfig: {
				dom: ["error", { eventModules: DEFAULT_EVENT_MODULES }],
				angular: ["error", { eventModules: DEFAULT_EVENT_MODULES }],
				react: ["error", { eventModules: DEFAULT_EVENT_MODULES }],
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: { noAwaitSyncEvents: "`{{ name }}` is sync and does not need `await` operator" },
		schema: [{
			type: "object",
			properties: { eventModules: {
				type: "array",
				items: {
					type: "string",
					enum: VALID_EVENT_MODULES
				},
				minItems: 1,
				default: DEFAULT_EVENT_MODULES
			} },
			additionalProperties: false
		}]
	},
	defaultOptions: [{ eventModules: DEFAULT_EVENT_MODULES }],
	create(context, [options], helpers) {
		const { eventModules = DEFAULT_EVENT_MODULES } = options;
		let hasDelayDeclarationOrAssignmentGTZero;
		return {
			VariableDeclaration(node) {
				hasDelayDeclarationOrAssignmentGTZero = node.declarations.some((property) => ASTUtils.isIdentifier(property.id) && property.id.name === "delay" && isLiteral(property.init) && property.init.value && Number.isInteger(property.init.value) && Number(property.init.value) > 0);
			},
			AssignmentExpression(node) {
				if (ASTUtils.isIdentifier(node.left) && node.left.name === "delay" && isLiteral(node.right) && node.right.value !== null) hasDelayDeclarationOrAssignmentGTZero = Number.isInteger(node.right.value) && Number(node.right.value) > 0;
			},
			"AwaitExpression > CallExpression"(node) {
				const simulateEventFunctionIdentifier = getDeepestIdentifierNode(node);
				if (!simulateEventFunctionIdentifier) return;
				const isUserEventMethod = helpers.isUserEventMethod(simulateEventFunctionIdentifier);
				const isFireEventMethod = helpers.isFireEventMethod(simulateEventFunctionIdentifier);
				if (!(isUserEventMethod || isFireEventMethod)) return;
				if (isFireEventMethod && !eventModules.includes(FIRE_EVENT_OPTION)) return;
				if (isUserEventMethod && !eventModules.includes(USER_EVENT_OPTION)) return;
				const lastArg = node.arguments[node.arguments.length - 1];
				const hasDelayProperty = isObjectExpression(lastArg) && lastArg.properties.some((property) => isProperty(property) && ASTUtils.isIdentifier(property.key) && property.key.name === "delay");
				const hasDelayLiteralGTZero = isObjectExpression(lastArg) && lastArg.properties.some((property) => isProperty(property) && ASTUtils.isIdentifier(property.key) && property.key.name === "delay" && isLiteral(property.value) && !!property.value.value && Number.isInteger(property.value.value) && Number(property.value.value) > 0);
				const simulateEventFunctionName = simulateEventFunctionIdentifier.name;
				if (USER_EVENT_ASYNC_EXCEPTIONS.includes(simulateEventFunctionName) && hasDelayProperty && (hasDelayDeclarationOrAssignmentGTZero || hasDelayLiteralGTZero)) return;
				const eventModuleName = getPropertyIdentifierNode(node)?.name;
				const eventFullName = eventModuleName ? `${eventModuleName}.${simulateEventFunctionName}` : simulateEventFunctionName;
				context.report({
					node,
					messageId: "noAwaitSyncEvents",
					data: { name: eventFullName }
				});
			}
		};
	}
});
var no_await_sync_queries_default = createTestingLibraryRule({
	name: "no-await-sync-queries",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow unnecessary `await` for sync queries",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noAwaitSyncQuery: "`{{ name }}` query is sync so it does not need to be awaited" },
		schema: [],
		fixable: "code"
	},
	defaultOptions: [],
	create(context, _, helpers) {
		return { "AwaitExpression > CallExpression"(node) {
			const awaitExpression = node.parent;
			const deepestIdentifierNode = getDeepestIdentifierNode(node);
			if (!deepestIdentifierNode) return;
			if (helpers.isSyncQuery(deepestIdentifierNode)) context.report({
				node: deepestIdentifierNode,
				messageId: "noAwaitSyncQuery",
				data: { name: deepestIdentifierNode.name },
				fix: (fixer) => {
					const awaitToken = getSourceCode(context).getFirstToken(awaitExpression);
					return awaitToken ? fixer.remove(awaitToken) : null;
				}
			});
		} };
	}
});
var no_container_default = createTestingLibraryRule({
	name: "no-container",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow the use of `container` methods",
			recommendedConfig: {
				dom: false,
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noContainer: "Avoid using container methods. Prefer using the methods from Testing Library, such as \"getByRole()\"" },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const destructuredContainerPropNames = [];
		const renderWrapperNames = [];
		let renderResultVarName = null;
		let containerName = null;
		let containerCallsMethod = false;
		function detectRenderWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) renderWrapperNames.push(getFunctionName(innerFunction));
		}
		function showErrorIfChainedContainerMethod(innerNode) {
			if (isMemberExpression(innerNode)) {
				if (ASTUtils.isIdentifier(innerNode.object)) {
					if (innerNode.object.name === containerName) {
						context.report({
							node: innerNode,
							messageId: "noContainer"
						});
						return;
					}
					const isRenderWrapper = innerNode.object.name === renderResultVarName;
					containerCallsMethod = ASTUtils.isIdentifier(innerNode.property) && innerNode.property.name === "container" && isRenderWrapper;
					if (containerCallsMethod) {
						context.report({
							node: innerNode.property,
							messageId: "noContainer"
						});
						return;
					}
				}
				showErrorIfChainedContainerMethod(innerNode.object);
			}
		}
		return {
			CallExpression(node) {
				const callExpressionIdentifier = getDeepestIdentifierNode(node);
				if (!callExpressionIdentifier) return;
				if (helpers.isRenderUtil(callExpressionIdentifier)) detectRenderWrapper(callExpressionIdentifier);
				if (isMemberExpression(node.callee)) showErrorIfChainedContainerMethod(node.callee);
				else if (ASTUtils.isIdentifier(node.callee) && destructuredContainerPropNames.includes(node.callee.name)) context.report({
					node,
					messageId: "noContainer"
				});
			},
			VariableDeclarator(node) {
				if (!node.init) return;
				const initIdentifierNode = getDeepestIdentifierNode(node.init);
				if (!initIdentifierNode) return;
				const isRenderWrapperVariableDeclarator = renderWrapperNames.includes(initIdentifierNode.name);
				if (!helpers.isRenderVariableDeclarator(node) && !isRenderWrapperVariableDeclarator) return;
				if (isObjectPattern(node.id)) {
					const containerIndex = node.id.properties.findIndex((property) => isProperty(property) && ASTUtils.isIdentifier(property.key) && property.key.name === "container");
					const nodeValue = containerIndex !== -1 && node.id.properties[containerIndex]?.value;
					if (!nodeValue) return;
					if (ASTUtils.isIdentifier(nodeValue)) containerName = nodeValue.name;
					else if (isObjectPattern(nodeValue)) nodeValue.properties.forEach((property) => isProperty(property) && ASTUtils.isIdentifier(property.key) && destructuredContainerPropNames.push(property.key.name));
				} else if (ASTUtils.isIdentifier(node.id)) renderResultVarName = node.id.name;
			}
		};
	}
});
var no_debugging_utils_default = createTestingLibraryRule({
	name: "no-debugging-utils",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow the use of debugging utilities like `debug`",
			recommendedConfig: {
				dom: false,
				angular: "warn",
				react: "warn",
				vue: "warn",
				svelte: "warn",
				marko: "warn"
			}
		},
		messages: { noDebug: "Unexpected debug statement" },
		schema: [{
			type: "object",
			properties: { utilsToCheckFor: {
				type: "object",
				properties: DEBUG_UTILS.reduce((obj, name) => ({
					[name]: { type: "boolean" },
					...obj
				}), {}),
				additionalProperties: false
			} },
			additionalProperties: false
		}]
	},
	defaultOptions: [{ utilsToCheckFor: {
		debug: true,
		logTestingPlaygroundURL: true,
		prettyDOM: true,
		logRoles: true,
		logDOM: true,
		prettyFormat: true
	} }],
	create(context, [{ utilsToCheckFor = {} }], helpers) {
		const suspiciousDebugVariableNames = [];
		const suspiciousReferenceNodes = [];
		const renderWrapperNames = [];
		const builtInConsoleNodes = [];
		const utilsToReport = Object.entries(utilsToCheckFor).filter(([, shouldCheckFor]) => shouldCheckFor).map(([name]) => name);
		function detectRenderWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) renderWrapperNames.push(getFunctionName(innerFunction));
		}
		return {
			VariableDeclarator(node) {
				if (!node.init) return;
				const initIdentifierNode = getDeepestIdentifierNode(node.init);
				if (!initIdentifierNode) return;
				if (initIdentifierNode.name === "console") {
					builtInConsoleNodes.push(node);
					return;
				}
				const isRenderWrapperVariableDeclarator = renderWrapperNames.includes(initIdentifierNode.name);
				if (!helpers.isRenderVariableDeclarator(node) && !isRenderWrapperVariableDeclarator) return;
				if (isObjectPattern(node.id)) {
					for (const property of node.id.properties) if (isProperty(property) && ASTUtils.isIdentifier(property.key) && utilsToReport.includes(property.key.name)) {
						const identifierNode = getDeepestIdentifierNode(property.value);
						if (identifierNode) suspiciousDebugVariableNames.push(identifierNode.name);
					}
				}
				if (ASTUtils.isIdentifier(node.id)) suspiciousReferenceNodes.push(node.id);
			},
			CallExpression(node) {
				const callExpressionIdentifier = getDeepestIdentifierNode(node);
				if (!callExpressionIdentifier) return;
				if (helpers.isRenderUtil(callExpressionIdentifier)) detectRenderWrapper(callExpressionIdentifier);
				const referenceIdentifier = getPropertyIdentifierNode(getReferenceNode(node));
				if (!referenceIdentifier) return;
				const isDebugUtil = helpers.isDebugUtil(callExpressionIdentifier, utilsToReport);
				const isDeclaredDebugVariable = suspiciousDebugVariableNames.includes(callExpressionIdentifier.name);
				const isChainedReferenceDebug = suspiciousReferenceNodes.some((suspiciousReferenceIdentifier) => {
					return utilsToReport.includes(callExpressionIdentifier.name) && suspiciousReferenceIdentifier.name === referenceIdentifier.name;
				});
				if (!builtInConsoleNodes.some((variableDeclarator) => {
					return getDeclaredVariables(context, variableDeclarator).some(({ name }) => name === callExpressionIdentifier.name && isCallExpression(callExpressionIdentifier.parent));
				}) && (isDebugUtil || isDeclaredDebugVariable || isChainedReferenceDebug)) context.report({
					node: callExpressionIdentifier,
					messageId: "noDebug"
				});
			}
		};
	}
});
//#endregion
//#region src/rules/no-dom-import.ts
const RULE_NAME$20 = "no-dom-import";
const DOM_TESTING_LIBRARY_MODULES = ["dom-testing-library", "@testing-library/dom"];
const CORRECT_MODULE_NAME_BY_FRAMEWORK = {
	angular: "@testing-library/angular",
	marko: "@marko/testing-library"
};
const getCorrectModuleName = (moduleName, framework) => {
	return CORRECT_MODULE_NAME_BY_FRAMEWORK[framework] ?? moduleName.replace("dom", framework);
};
var no_dom_import_default = createTestingLibraryRule({
	name: RULE_NAME$20,
	meta: {
		type: "problem",
		docs: {
			description: "Disallow importing from DOM Testing Library",
			recommendedConfig: {
				dom: false,
				angular: ["error", "angular"],
				react: ["error", "react"],
				vue: ["error", "vue"],
				svelte: ["error", "svelte"],
				marko: ["error", "marko"]
			}
		},
		messages: {
			noDomImport: "import from DOM Testing Library is restricted, import from corresponding Testing Library framework instead",
			noDomImportFramework: "import from DOM Testing Library is restricted, import from {{module}} instead"
		},
		fixable: "code",
		schema: [{ type: "string" }]
	},
	defaultOptions: [""],
	create(context, [framework], helpers) {
		function report(node, moduleName) {
			if (!framework) return context.report({
				node,
				messageId: "noDomImport"
			});
			const correctModuleName = getCorrectModuleName(moduleName, framework);
			context.report({
				data: { module: correctModuleName },
				fix(fixer) {
					if (isCallExpression(node)) {
						const name = node.arguments[0];
						return fixer.replaceText(name, name.raw.replace(moduleName, correctModuleName));
					} else {
						const name = node.source;
						return fixer.replaceText(name, name.raw.replace(moduleName, correctModuleName));
					}
				},
				messageId: "noDomImportFramework",
				node
			});
		}
		return { "Program:exit"() {
			let importName;
			helpers.getAllTestingLibraryImportNodes().forEach((importNode) => {
				importName = getImportModuleName(importNode);
				const domModuleName = DOM_TESTING_LIBRARY_MODULES.find((module) => module === importName);
				if (!domModuleName) return;
				report(importNode, domModuleName);
			});
		} };
	}
});
var no_global_regexp_flag_in_query_default = createTestingLibraryRule({
	name: "no-global-regexp-flag-in-query",
	meta: {
		type: "suggestion",
		docs: {
			description: "Disallow the use of the global RegExp flag (/g) in queries",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noGlobalRegExpFlagInQuery: "Avoid using the global RegExp flag (/g) in queries" },
		fixable: "code",
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		/**
		* Checks if node is reportable (has a regex that contains 'g') and if it is, reports it with `context.report()`.
		*
		* @param literalNode Literal node under to be
		* @returns {Boolean} indicatinf if literal was reported
		*/
		function reportLiteralWithRegex(literalNode) {
			if (isLiteral(literalNode) && "regex" in literalNode && literalNode.regex.flags.includes("g")) {
				context.report({
					node: literalNode,
					messageId: "noGlobalRegExpFlagInQuery",
					fix(fixer) {
						const splitter = literalNode.raw.lastIndexOf("/");
						const raw = literalNode.raw.substring(0, splitter);
						const flagsWithoutGlobal = literalNode.raw.substring(splitter + 1).replace("g", "");
						return fixer.replaceText(literalNode, `${raw}/${flagsWithoutGlobal}`);
					}
				});
				return true;
			}
			return false;
		}
		function getArguments(identifierNode) {
			if (isCallExpression(identifierNode.parent)) return identifierNode.parent.arguments;
			else if (isMemberExpression(identifierNode.parent) && isCallExpression(identifierNode.parent.parent)) return identifierNode.parent.parent.arguments;
			return [];
		}
		const variableNodesWithRegexs = [];
		function hasRegexInVariable(identifier) {
			return variableNodesWithRegexs.find((varNode) => {
				if (ASTUtils.isVariableDeclarator(varNode) && ASTUtils.isIdentifier(varNode.id)) return varNode.id.name === identifier.name;
			});
		}
		return {
			VariableDeclarator(node) {
				if (ASTUtils.isVariableDeclarator(node) && isLiteral(node.init) && "regex" in node.init && node.init.regex.flags.includes("g")) variableNodesWithRegexs.push(node);
			},
			CallExpression(node) {
				const identifierNode = getDeepestIdentifierNode(node);
				if (!identifierNode || !helpers.isQuery(identifierNode)) return;
				const [firstArg, secondArg] = getArguments(identifierNode);
				if (firstArg ? reportLiteralWithRegex(firstArg) : false) return;
				if (ASTUtils.isIdentifier(firstArg)) {
					const regexVariableNode = hasRegexInVariable(firstArg);
					if (regexVariableNode !== void 0) context.report({
						node: firstArg,
						messageId: "noGlobalRegExpFlagInQuery",
						fix(fixer) {
							if (ASTUtils.isVariableDeclarator(regexVariableNode) && isLiteral(regexVariableNode.init) && "regex" in regexVariableNode.init && regexVariableNode.init.regex.flags.includes("g")) {
								const splitter = regexVariableNode.init.raw.lastIndexOf("/");
								const raw = regexVariableNode.init.raw.substring(0, splitter);
								const flagsWithoutGlobal = regexVariableNode.init.raw.substring(splitter + 1).replace("g", "");
								return fixer.replaceText(regexVariableNode.init, `${raw}/${flagsWithoutGlobal}`);
							}
							return null;
						}
					});
				}
				if (isObjectExpression(secondArg)) {
					const namePropertyNode = secondArg.properties.find((p) => isProperty(p) && ASTUtils.isIdentifier(p.key) && p.key.name === "name" && isLiteral(p.value));
					if (namePropertyNode) reportLiteralWithRegex(namePropertyNode.value);
				}
			}
		};
	}
});
//#endregion
//#region src/rules/no-manual-cleanup.ts
const RULE_NAME$18 = "no-manual-cleanup";
const CLEANUP_LIBRARY_REGEXP = /(@testing-library\/(preact|react|svelte|vue))|@marko\/testing-library/;
var no_manual_cleanup_default = createTestingLibraryRule({
	name: RULE_NAME$18,
	meta: {
		type: "problem",
		docs: {
			description: "Disallow the use of `cleanup`",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: "error",
				vue: "error",
				svelte: "error",
				marko: false
			}
		},
		messages: { noManualCleanup: "`cleanup` is performed automatically by your test runner, you don't need manual cleanups." },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		function reportImportReferences(references) {
			for (const reference of references) {
				const utilsUsage = reference.identifier.parent;
				if (utilsUsage && isMemberExpression(utilsUsage) && ASTUtils.isIdentifier(utilsUsage.property) && utilsUsage.property.name === "cleanup") context.report({
					node: utilsUsage.property,
					messageId: "noManualCleanup"
				});
			}
		}
		function reportCandidateModule(moduleNode) {
			if (isImportDeclaration(moduleNode)) {
				if (isImportDefaultSpecifier(moduleNode.specifiers[0])) {
					const declaredVariables = getDeclaredVariables(context, moduleNode)[0];
					if (declaredVariables) reportImportReferences(declaredVariables.references);
				}
				const cleanupSpecifier = moduleNode.specifiers.find((specifier) => isImportSpecifier(specifier) && ASTUtils.isIdentifier(specifier.imported) && specifier.imported.name === "cleanup");
				if (cleanupSpecifier) context.report({
					node: cleanupSpecifier,
					messageId: "noManualCleanup"
				});
			} else {
				const declaratorNode = moduleNode.parent;
				if (isObjectPattern(declaratorNode.id)) {
					const cleanupProperty = declaratorNode.id.properties.find((property) => isProperty(property) && ASTUtils.isIdentifier(property.key) && property.key.name === "cleanup");
					if (cleanupProperty) context.report({
						node: cleanupProperty,
						messageId: "noManualCleanup"
					});
				} else reportImportReferences(getVariableReferences(context, declaratorNode));
			}
		}
		return { "Program:exit"() {
			const customModuleImportNode = helpers.getCustomModuleImportNode();
			for (const testingLibraryImportNode of helpers.getAllTestingLibraryImportNodes()) if (getImportModuleName(testingLibraryImportNode)?.match(CLEANUP_LIBRARY_REGEXP)) reportCandidateModule(testingLibraryImportNode);
			if (customModuleImportNode) reportCandidateModule(customModuleImportNode);
		} };
	}
});
var no_node_access_default = createTestingLibraryRule({
	name: "no-node-access",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow direct Node access",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noNodeAccess: "Avoid direct Node access. Prefer using the methods from Testing Library." },
		schema: [{
			type: "object",
			properties: { allowContainerFirstChild: { type: "boolean" } },
			additionalProperties: false
		}]
	},
	defaultOptions: [{ allowContainerFirstChild: false }],
	create(context, [{ allowContainerFirstChild = false }], helpers) {
		function showErrorForNodeAccess(node) {
			if (!helpers.isTestingLibraryImported(true)) return;
			if (isMemberExpression(node.parent) && node.parent.object === node) return;
			const propertyName = ASTUtils.isIdentifier(node.property) ? node.property.name : null;
			if (propertyName && ALL_RETURNING_NODES.some((allReturningNode) => allReturningNode === propertyName)) {
				if (allowContainerFirstChild && propertyName === "firstChild") return;
				if (ASTUtils.isIdentifier(node.object) && node.object.name === "props") return;
				context.report({
					node,
					loc: node.property.loc.start,
					messageId: "noNodeAccess"
				});
			}
		}
		function getProperty(node) {
			if (isLiteral(node)) return node;
			return getDeepestIdentifierNode(node);
		}
		return {
			CallExpression(node) {
				if (!isMemberExpression(node.callee)) return;
				const { callee } = node;
				if (!EVENT_HANDLER_METHODS.some((method) => method === ASTUtils.getPropertyName(callee))) return;
				const identifier = getDeepestIdentifierNode(callee.object);
				if (!identifier || !ALL_QUERIES_COMBINATIONS.includes(identifier.name)) return;
				if (resolveToTestingLibraryFn(node, context)) {
					const property = getProperty(callee.property);
					context.report({
						node,
						loc: property?.loc.start,
						messageId: "noNodeAccess"
					});
				}
			},
			"ExpressionStatement MemberExpression": showErrorForNodeAccess,
			"VariableDeclarator MemberExpression": showErrorForNodeAccess
		};
	}
});
var no_promise_in_fire_event_default = createTestingLibraryRule({
	name: "no-promise-in-fire-event",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow the use of promises passed to a `fireEvent` method",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noPromiseInFireEvent: "A promise shouldn't be passed to a `fireEvent` method, instead pass the DOM element" },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		function checkSuspiciousNode(node, originalNode) {
			if (ASTUtils.isAwaitExpression(node)) return;
			if (isNewExpression(node)) {
				if (isPromiseIdentifier(node.callee)) {
					context.report({
						node: originalNode ?? node,
						messageId: "noPromiseInFireEvent"
					});
					return;
				}
			}
			if (isCallExpression(node)) {
				const domElementIdentifier = getDeepestIdentifierNode(node);
				if (!domElementIdentifier) return;
				if (helpers.isAsyncQuery(domElementIdentifier) || isPromiseIdentifier(domElementIdentifier)) {
					context.report({
						node: originalNode ?? node,
						messageId: "noPromiseInFireEvent"
					});
					return;
				}
			}
			if (ASTUtils.isIdentifier(node)) {
				const nodeVariable = ASTUtils.findVariable(getScope(context, node), node.name);
				if (!nodeVariable) return;
				for (const definition of nodeVariable.defs) {
					const variableDeclarator = definition.node;
					if (variableDeclarator.init) checkSuspiciousNode(variableDeclarator.init, node);
				}
			}
		}
		return { "CallExpression Identifier"(node) {
			if (!helpers.isFireEventMethod(node)) return;
			const closestCallExpression = findClosestCallExpressionNode(node, true);
			if (!closestCallExpression) return;
			const domElementArgument = closestCallExpression.arguments[0];
			if (!domElementArgument) return;
			checkSuspiciousNode(domElementArgument);
		} };
	}
});
//#endregion
//#region src/rules/no-render-in-lifecycle.ts
const RULE_NAME$15 = "no-render-in-lifecycle";
function findClosestBeforeHook(node, testingFrameworkSetupHooksToFilter) {
	if (node === null) return null;
	if (isCallExpression(node) && ASTUtils.isIdentifier(node.callee) && testingFrameworkSetupHooksToFilter.includes(node.callee.name)) return node.callee;
	if (node.parent) return findClosestBeforeHook(node.parent, testingFrameworkSetupHooksToFilter);
	return null;
}
var no_render_in_lifecycle_default = createTestingLibraryRule({
	name: RULE_NAME$15,
	meta: {
		type: "problem",
		docs: {
			description: "Disallow the use of `render` in testing frameworks setup functions",
			recommendedConfig: {
				dom: false,
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noRenderInSetup: "Forbidden usage of `render` within testing framework `{{ name }}` setup" },
		schema: [{
			type: "object",
			properties: { allowTestingFrameworkSetupHook: {
				enum: [...TESTING_FRAMEWORK_SETUP_HOOKS],
				type: "string"
			} },
			additionalProperties: false
		}]
	},
	defaultOptions: [{ allowTestingFrameworkSetupHook: "" }],
	create(context, [{ allowTestingFrameworkSetupHook }], helpers) {
		const renderWrapperNames = [];
		function detectRenderWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) renderWrapperNames.push(getFunctionName(innerFunction));
		}
		return { CallExpression(node) {
			const testingFrameworkSetupHooksToFilter = TESTING_FRAMEWORK_SETUP_HOOKS.filter((hook) => hook !== allowTestingFrameworkSetupHook);
			const callExpressionIdentifier = getDeepestIdentifierNode(node);
			if (!callExpressionIdentifier) return;
			const isRenderIdentifier = helpers.isRenderUtil(callExpressionIdentifier);
			if (isRenderIdentifier) detectRenderWrapper(callExpressionIdentifier);
			if (!isRenderIdentifier && !renderWrapperNames.includes(callExpressionIdentifier.name)) return;
			const beforeHook = findClosestBeforeHook(node, testingFrameworkSetupHooksToFilter);
			if (!beforeHook) return;
			context.report({
				node: callExpressionIdentifier,
				messageId: "noRenderInSetup",
				data: { name: beforeHook.name }
			});
		} };
	}
});
//#endregion
//#region src/rules/no-test-id-queries.ts
const RULE_NAME$14 = "no-test-id-queries";
const QUERIES_REGEX = `/^(${ALL_QUERIES_VARIANTS.join("|")})TestId$/`;
var no_test_id_queries_default = createTestingLibraryRule({
	name: RULE_NAME$14,
	meta: {
		type: "problem",
		docs: {
			description: "Ensure no `data-testid` queries are used",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: { noTestIdQueries: "Using `data-testid` queries is not recommended. Use a more descriptive query instead." },
		schema: []
	},
	defaultOptions: [],
	create(context) {
		return { [`CallExpression[callee.property.name=${QUERIES_REGEX}], CallExpression[callee.name=${QUERIES_REGEX}]`](node) {
			context.report({
				node,
				messageId: "noTestIdQueries"
			});
		} };
	}
});
var no_unnecessary_act_default = createTestingLibraryRule({
	name: "no-unnecessary-act",
	meta: {
		type: "problem",
		docs: {
			description: "Disallow wrapping Testing Library utils or empty callbacks in `act`",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: "error",
				vue: false,
				svelte: false,
				marko: "error"
			}
		},
		messages: {
			noUnnecessaryActTestingLibraryUtil: "Avoid wrapping Testing Library util calls in `act`",
			noUnnecessaryActEmptyFunction: "Avoid wrapping empty function in `act`"
		},
		schema: [{
			type: "object",
			properties: { isStrict: { type: "boolean" } },
			additionalProperties: false
		}]
	},
	defaultOptions: [{ isStrict: true }],
	create(context, [{ isStrict = true }], helpers) {
		const userEventInstanceNames = /* @__PURE__ */ new Set();
		function getStatementIdentifier(statement) {
			const callExpression = getStatementCallExpression(statement);
			if (!callExpression && !isExpressionStatement(statement) && !isReturnStatement(statement)) return null;
			if (callExpression) return getDeepestIdentifierNode(callExpression);
			if (isExpressionStatement(statement) && ASTUtils.isAwaitExpression(statement.expression)) return getPropertyIdentifierNode(statement.expression.argument);
			if (isReturnStatement(statement) && statement.argument) return getPropertyIdentifierNode(statement.argument);
			return null;
		}
		function hasUserEventInstanceName(identifier) {
			if (!isMemberExpression(identifier.parent)) return false;
			const propertyIdentifier = getPropertyIdentifierNode(identifier.parent);
			return userEventInstanceNames.has(propertyIdentifier?.name ?? "");
		}
		function hasStatementReference(statements, predicate) {
			return statements.some((statement) => {
				const identifier = getStatementIdentifier(statement);
				if (!identifier) return false;
				return predicate(identifier);
			});
		}
		/**
		* Determines whether some call is non Testing Library related for a given list of statements.
		*/
		function hasSomeNonTestingLibraryCall(statements) {
			return hasStatementReference(statements, (identifier) => !helpers.isTestingLibraryUtil(identifier) && !hasUserEventInstanceName(identifier));
		}
		function hasTestingLibraryCall(statements) {
			return hasStatementReference(statements, (identifier) => helpers.isTestingLibraryUtil(identifier) || hasUserEventInstanceName(identifier));
		}
		function checkNoUnnecessaryActFromBlockStatement(blockStatementNode) {
			const functionNode = blockStatementNode.parent;
			const callExpressionNode = functionNode?.parent;
			if (!callExpressionNode || !functionNode) return;
			const identifierNode = getDeepestIdentifierNode(callExpressionNode);
			if (!identifierNode) return;
			if (!helpers.isActUtil(identifierNode)) return;
			if (isEmptyFunction(functionNode)) {
				context.report({
					node: identifierNode,
					messageId: "noUnnecessaryActEmptyFunction"
				});
				return;
			}
			if (isStrict ? hasTestingLibraryCall(blockStatementNode.body) : !hasSomeNonTestingLibraryCall(blockStatementNode.body)) context.report({
				node: identifierNode,
				messageId: "noUnnecessaryActTestingLibraryUtil"
			});
		}
		function checkNoUnnecessaryActFromImplicitReturn(node) {
			const nodeIdentifier = getDeepestIdentifierNode(node);
			if (!nodeIdentifier) return;
			const parentCallExpression = node.parent?.parent;
			if (!parentCallExpression) return;
			const identifierNode = getDeepestIdentifierNode(parentCallExpression);
			if (!identifierNode) return;
			if (!helpers.isActUtil(identifierNode)) return;
			if (!helpers.isTestingLibraryUtil(nodeIdentifier)) return;
			context.report({
				node: identifierNode,
				messageId: "noUnnecessaryActTestingLibraryUtil"
			});
		}
		function registerUserEventInstance(node) {
			const propertyIdentifier = getPropertyIdentifierNode(node);
			const deepestIdentifier = getDeepestIdentifierNode(node);
			const testingLibraryFn = resolveToTestingLibraryFn(node, context);
			if (propertyIdentifier?.name === testingLibraryFn?.local && deepestIdentifier?.name === "setup" && ASTUtils.isIdentifier(node.parent?.id)) userEventInstanceNames.add(node.parent.id.name);
		}
		return {
			"VariableDeclarator > CallExpression": registerUserEventInstance,
			"CallExpression > ArrowFunctionExpression > BlockStatement": checkNoUnnecessaryActFromBlockStatement,
			"CallExpression > FunctionExpression > BlockStatement": checkNoUnnecessaryActFromBlockStatement,
			"CallExpression > ArrowFunctionExpression > CallExpression": checkNoUnnecessaryActFromImplicitReturn
		};
	}
});
var no_wait_for_multiple_assertions_default = createTestingLibraryRule({
	name: "no-wait-for-multiple-assertions",
	meta: {
		type: "suggestion",
		docs: {
			description: "Disallow the use of multiple `expect` calls inside `waitFor`",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noWaitForMultipleAssertion: "Avoid using multiple assertions within `waitFor` callback" },
		schema: [],
		fixable: "code"
	},
	defaultOptions: [],
	create(context, _, helpers) {
		function getExpectNodes(body) {
			return body.filter((node) => {
				const expressionIdentifier = getPropertyIdentifierNode(node);
				if (!expressionIdentifier) return false;
				return expressionIdentifier.name === "expect";
			});
		}
		function getExpectArgument(expression) {
			if (!isCallExpression(expression)) return null;
			const { callee } = expression;
			if (!isMemberExpression(callee)) return null;
			const { object } = callee;
			if (!isCallExpression(object) || object.arguments.length === 0) return null;
			return object.arguments[0];
		}
		function reportMultipleAssertion(node) {
			if (!node.parent) return;
			const callExpressionNode = node.parent.parent;
			const callExpressionIdentifier = getPropertyIdentifierNode(callExpressionNode);
			if (!callExpressionIdentifier) return;
			if (!helpers.isAsyncUtil(callExpressionIdentifier, ["waitFor"])) return;
			const expectNodes = getExpectNodes(node.body);
			const expectArgumentMap = /* @__PURE__ */ new Map();
			for (const expectNode of expectNodes) {
				const argument = getExpectArgument(expectNode.expression);
				if (!argument) continue;
				const argumentText = getSourceCode(context).getText(argument);
				const newTargetNodes = [...expectArgumentMap.get(argumentText) ?? [], expectNode];
				expectArgumentMap.set(argumentText, newTargetNodes);
			}
			for (const expressionStatements of expectArgumentMap.values()) for (const expressionStatement of expressionStatements.slice(1)) context.report({
				node: expressionStatement,
				messageId: "noWaitForMultipleAssertion",
				fix(fixer) {
					const sourceCode = getSourceCode(context);
					const lineStart = sourceCode.getIndexFromLoc({
						line: expressionStatement.loc.start.line,
						column: 0
					});
					const lineEnd = sourceCode.getIndexFromLoc({
						line: expressionStatement.loc.end.line + 1,
						column: 0
					});
					const lines = sourceCode.getText().split("\n");
					const indent = lines[callExpressionNode.loc.start.line - 1]?.match(/^\s*/)?.[0] ?? "";
					const statementText = lines.slice(expressionStatement.loc.start.line - 1, expressionStatement.loc.end.line).join("\n").trimStart();
					return [fixer.removeRange([lineStart, lineEnd]), fixer.insertTextAfter(callExpressionNode, `\n${indent}${statementText}`)];
				}
			});
		}
		return {
			"CallExpression > ArrowFunctionExpression > BlockStatement": reportMultipleAssertion,
			"CallExpression > FunctionExpression > BlockStatement": reportMultipleAssertion
		};
	}
});
var no_wait_for_side_effects_default = createTestingLibraryRule({
	name: "no-wait-for-side-effects",
	meta: {
		type: "suggestion",
		docs: {
			description: "Disallow the use of side effects in `waitFor`",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noSideEffectsWaitFor: "Avoid using side effects within `waitFor` callback" },
		schema: [],
		fixable: "code"
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const sourceCode = getSourceCode(context);
		function isCallerWaitFor(node) {
			if (!node.parent) return false;
			const callExpressionNode = node.parent.parent;
			const callExpressionIdentifier = getPropertyIdentifierNode(callExpressionNode);
			return !!callExpressionIdentifier && helpers.isAsyncUtil(callExpressionIdentifier, ["waitFor"]);
		}
		function isCallerThen(node) {
			if (!node.parent) return false;
			const callExpressionNode = node.parent.parent;
			return hasThenProperty(callExpressionNode.callee);
		}
		function isRenderInVariableDeclaration(node) {
			return isVariableDeclaration$1(node) && node.declarations.some(helpers.isRenderVariableDeclarator);
		}
		function isRenderInExpressionStatement(node) {
			if (!isExpressionStatement(node) || !isAssignmentExpression(node.expression)) return false;
			const expressionIdentifier = getPropertyIdentifierNode(node.expression.right);
			if (!expressionIdentifier) return false;
			return helpers.isRenderUtil(expressionIdentifier);
		}
		function isRenderInAssignmentExpression(node) {
			if (!isAssignmentExpression(node)) return false;
			const expressionIdentifier = getPropertyIdentifierNode(node.right);
			if (!expressionIdentifier) return false;
			return helpers.isRenderUtil(expressionIdentifier);
		}
		function isRenderInSequenceAssignment(node) {
			if (!isSequenceExpression(node)) return false;
			return node.expressions.some(isRenderInAssignmentExpression);
		}
		/**
		* Checks if there are side effects in variable declarations.
		*
		* For example, these variable declarations have side effects:
		* const a = userEvent.doubleClick(button);
		* const b = fireEvent.click(button);
		* const wrapper = render(<Component />);
		*
		* @param node
		* @returns {Boolean} Boolean indicating if variable declarataion has side effects
		*/
		function isSideEffectInVariableDeclaration(node) {
			return node.declarations.some((declaration) => {
				if (isCallExpression(declaration.init)) {
					const test = getPropertyIdentifierNode(declaration.init);
					if (!test) return false;
					return helpers.isFireEventUtil(test) || helpers.isUserEventUtil(test) || helpers.isRenderUtil(test);
				}
				return false;
			});
		}
		function getSideEffectNodes(body) {
			return body.filter((node) => {
				if (!isExpressionStatement(node) && !isVariableDeclaration$1(node)) return false;
				if (isRenderInVariableDeclaration(node) || isRenderInExpressionStatement(node)) return true;
				if (isVariableDeclaration$1(node) && isSideEffectInVariableDeclaration(node)) return true;
				const expressionIdentifier = getPropertyIdentifierNode(node);
				if (!expressionIdentifier) return false;
				return helpers.isFireEventUtil(expressionIdentifier) || helpers.isUserEventUtil(expressionIdentifier) || helpers.isRenderUtil(expressionIdentifier);
			});
		}
		function reportSideEffects(node) {
			if (!isCallerWaitFor(node)) return;
			if (isCallerThen(node)) return;
			const sideEffects = getSideEffectNodes(node.body);
			sideEffects.forEach((sideEffectNode) => context.report({
				node: sideEffectNode,
				messageId: "noSideEffectsWaitFor",
				fix(fixer) {
					const { parent: callExpressionNode } = node.parent;
					const targetNode = isAwaitExpression(callExpressionNode.parent) ? callExpressionNode.parent : callExpressionNode;
					const lines = sourceCode.getText().split("\n");
					const indent = lines[targetNode.loc.start.line - 1]?.match(/^\s*/)?.[0] ?? "";
					const sideEffectNodeText = lines.slice(sideEffectNode.loc.start.line - 1, sideEffectNode.loc.end.line).join("\n").trimStart();
					if (sideEffects.length === node.body.length && sideEffects.length === 1) {
						const tokenAfter = sourceCode.getTokenAfter(targetNode);
						return [fixer.insertTextBefore(targetNode, sideEffectNodeText), tokenAfter?.value === ";" ? fixer.removeRange([targetNode.range[0], tokenAfter.range[1]]) : fixer.remove(targetNode)];
					}
					const lineStart = sourceCode.getIndexFromLoc({
						line: sideEffectNode.loc.start.line,
						column: 0
					});
					const lineEnd = sourceCode.getIndexFromLoc({
						line: sideEffectNode.loc.end.line + 1,
						column: 0
					});
					return [fixer.insertTextBefore(targetNode, sideEffectNodeText + "\n" + indent), fixer.removeRange([lineStart, lineEnd])];
				}
			}));
		}
		function reportImplicitReturnSideEffect(node) {
			if (!isCallerWaitFor(node)) return;
			const expressionIdentifier = isCallExpression(node) ? getPropertyIdentifierNode(node.callee) : null;
			if (!expressionIdentifier && !isRenderInAssignmentExpression(node) && !isRenderInSequenceAssignment(node)) return;
			if (expressionIdentifier && !helpers.isFireEventUtil(expressionIdentifier) && !helpers.isUserEventUtil(expressionIdentifier) && !helpers.isRenderUtil(expressionIdentifier)) return;
			context.report({
				node,
				messageId: "noSideEffectsWaitFor",
				fix: (fixer) => {
					const { parent: callExpressionNode } = node.parent;
					const targetNode = isAwaitExpression(callExpressionNode.parent) ? callExpressionNode.parent : callExpressionNode;
					return fixer.replaceText(targetNode, sourceCode.getText(node));
				}
			});
		}
		return {
			"CallExpression > ArrowFunctionExpression > BlockStatement": reportSideEffects,
			"CallExpression > ArrowFunctionExpression > CallExpression": reportImplicitReturnSideEffect,
			"CallExpression > ArrowFunctionExpression > AssignmentExpression": reportImplicitReturnSideEffect,
			"CallExpression > ArrowFunctionExpression > SequenceExpression": reportImplicitReturnSideEffect,
			"CallExpression > FunctionExpression > BlockStatement": reportSideEffects
		};
	}
});
//#endregion
//#region src/rules/no-wait-for-snapshot.ts
const RULE_NAME$10 = "no-wait-for-snapshot";
const SNAPSHOT_REGEXP = /^(toMatchSnapshot|toMatchInlineSnapshot)$/;
var no_wait_for_snapshot_default = createTestingLibraryRule({
	name: RULE_NAME$10,
	meta: {
		type: "problem",
		docs: {
			description: "Ensures no snapshot is generated inside of a `waitFor` call",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { noWaitForSnapshot: "A snapshot can't be generated inside of a `{{ name }}` call" },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		function getClosestAsyncUtil(node) {
			let n = node;
			do {
				const callExpression = findClosestCallExpressionNode(n);
				if (!callExpression) return null;
				if (ASTUtils.isIdentifier(callExpression.callee) && helpers.isAsyncUtil(callExpression.callee)) return callExpression.callee;
				if (isMemberExpression(callExpression.callee) && ASTUtils.isIdentifier(callExpression.callee.property) && helpers.isAsyncUtil(callExpression.callee.property)) return callExpression.callee.property;
				if (callExpression.parent) n = findClosestCallExpressionNode(callExpression.parent);
			} while (n !== null);
			return null;
		}
		return { [`Identifier[name=${String(SNAPSHOT_REGEXP)}]`](node) {
			const closestAsyncUtil = getClosestAsyncUtil(node);
			if (closestAsyncUtil === null) return;
			context.report({
				node,
				messageId: "noWaitForSnapshot",
				data: { name: closestAsyncUtil.name }
			});
		} };
	}
});
//#endregion
//#region src/rules/prefer-explicit-assert.ts
const RULE_NAME$9 = "prefer-explicit-assert";
const isAtTopLevel = (node) => !!node.parent?.parent && node.parent.parent.type === TSESTree.AST_NODE_TYPES.ExpressionStatement || node.parent?.parent?.type === TSESTree.AST_NODE_TYPES.AwaitExpression && !!node.parent.parent.parent && node.parent.parent.parent.type === TSESTree.AST_NODE_TYPES.ExpressionStatement;
const isVariableDeclaration = (node) => {
	if (isCallExpression(node.parent) && ASTUtils.isAwaitExpression(node.parent.parent) && ASTUtils.isVariableDeclarator(node.parent.parent.parent)) return true;
	if (isCallExpression(node.parent) && ASTUtils.isVariableDeclarator(node.parent.parent)) return true;
	if (isMemberExpression(node.parent) && isCallExpression(node.parent.parent) && ASTUtils.isAwaitExpression(node.parent.parent.parent) && ASTUtils.isVariableDeclarator(node.parent.parent.parent.parent)) return true;
	if (isMemberExpression(node.parent) && isCallExpression(node.parent.parent) && ASTUtils.isVariableDeclarator(node.parent.parent.parent)) return true;
	return false;
};
var prefer_explicit_assert_default = createTestingLibraryRule({
	name: RULE_NAME$9,
	meta: {
		type: "suggestion",
		docs: {
			description: "Suggest using explicit assertions rather than standalone queries",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: {
			preferExplicitAssert: "Wrap stand-alone `{{queryType}}` query with `expect` function for better explicit assertion",
			preferExplicitAssertAssertion: "`getBy*` queries must be asserted with `{{assertion}}`"
		},
		schema: [{
			type: "object",
			additionalProperties: false,
			properties: {
				assertion: {
					type: "string",
					enum: [...PRESENCE_MATCHERS]
				},
				includeFindQueries: { type: "boolean" }
			}
		}]
	},
	defaultOptions: [{ includeFindQueries: true }],
	create(context, [options], helpers) {
		const { assertion, includeFindQueries } = options;
		const getQueryCalls = [];
		const findQueryCalls = [];
		return {
			"CallExpression Identifier"(node) {
				if (helpers.isGetQueryVariant(node)) getQueryCalls.push(node);
				if (helpers.isFindQueryVariant(node)) findQueryCalls.push(node);
			},
			"Program:exit"() {
				if (includeFindQueries) findQueryCalls.forEach((queryCall) => {
					const memberExpression = isMemberExpression(queryCall.parent) ? queryCall.parent : queryCall;
					if (isVariableDeclaration(queryCall) || !isAtTopLevel(memberExpression)) return;
					context.report({
						node: queryCall,
						messageId: "preferExplicitAssert",
						data: { queryType: "findBy*" }
					});
				});
				getQueryCalls.forEach((queryCall) => {
					const node = isMemberExpression(queryCall.parent) ? queryCall.parent : queryCall;
					if (isAtTopLevel(node)) context.report({
						node: queryCall,
						messageId: "preferExplicitAssert",
						data: { queryType: "getBy*" }
					});
					if (assertion) {
						const expectCallNode = findClosestCallNode(node, "expect");
						if (!expectCallNode) return;
						const expectStatement = expectCallNode.parent;
						if (!isMemberExpression(expectStatement)) return;
						const property = expectStatement.property;
						if (!ASTUtils.isIdentifier(property)) return;
						let matcher = property.name;
						let isNegatedMatcher = false;
						if (matcher === "not" && isMemberExpression(expectStatement.parent) && ASTUtils.isIdentifier(expectStatement.parent.property)) {
							isNegatedMatcher = true;
							matcher = expectStatement.parent.property.name;
						}
						if ((!isNegatedMatcher && PRESENCE_MATCHERS.some((presenceMather) => presenceMather === matcher) || isNegatedMatcher && ABSENCE_MATCHERS.some((absenceMather) => absenceMather === matcher)) && matcher !== assertion) context.report({
							node: property,
							messageId: "preferExplicitAssertAssertion",
							data: { assertion }
						});
					}
				});
			}
		};
	}
});
//#endregion
//#region src/rules/prefer-find-by.ts
const RULE_NAME$8 = "prefer-find-by";
function getFindByQueryVariant(queryMethod) {
	return queryMethod.includes("All") ? "findAllBy" : "findBy";
}
function findRenderDefinitionDeclaration(scope, query) {
	if (!scope) return null;
	const variable = scope.variables.find((v) => v.name === query);
	if (variable) return variable.defs.map(({ name }) => name).filter(ASTUtils.isIdentifier).find(({ name }) => name === query) ?? null;
	return findRenderDefinitionDeclaration(scope.upper, query);
}
var prefer_find_by_default = createTestingLibraryRule({
	name: RULE_NAME$8,
	meta: {
		type: "suggestion",
		docs: {
			description: "Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { preferFindBy: "Prefer `{{queryVariant}}{{queryMethod}}` query over using `waitFor` + `{{prevQuery}}`" },
		fixable: "code",
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const sourceCode = getSourceCode(context);
		/**
		* Reports the invalid usage of wait* plus getBy/QueryBy methods and automatically fixes the scenario
		* @param node - The CallExpression node that contains the waitFor method
		* @param replacementParams - Object with info for error message and autofix:
		* @param replacementParams.queryVariant - The variant method used to query: findBy/findAllBy.
		* @param replacementParams.prevQuery - The query originally used inside `waitFor`
		* @param replacementParams.queryMethod - Suffix string to build the query method (the query-part that comes after the "By"): LabelText, Placeholder, Text, Role, Title, etc.
		* @param replacementParams.fix - Function that applies the fix to correct the code
		*/
		function reportInvalidUsage(node, replacementParams) {
			const { queryMethod, queryVariant, prevQuery, fix } = replacementParams;
			context.report({
				node,
				messageId: "preferFindBy",
				data: {
					queryVariant,
					queryMethod,
					prevQuery
				},
				fix
			});
		}
		function getWrongQueryNameInAssertion(node) {
			if (!isCallExpression(node.body) || !isMemberExpression(node.body.callee)) return null;
			if (isCallExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.arguments[0]) && ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee)) return node.body.callee.object.arguments[0].callee;
			if (!ASTUtils.isIdentifier(node.body.callee.property)) return null;
			if (isCallExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.arguments[0]) && isMemberExpression(node.body.callee.object.arguments[0].callee) && ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee.property)) return node.body.callee.object.arguments[0].callee.property;
			if (isMemberExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.object) && isCallExpression(node.body.callee.object.object.arguments[0]) && isMemberExpression(node.body.callee.object.object.arguments[0].callee) && ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee.property)) return node.body.callee.object.object.arguments[0].callee.property;
			if (isMemberExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.object) && isCallExpression(node.body.callee.object.object.arguments[0]) && ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee)) return node.body.callee.object.object.arguments[0].callee;
			return node.body.callee.property;
		}
		function getWrongQueryName(node) {
			if (!isCallExpression(node.body)) return null;
			if (ASTUtils.isIdentifier(node.body.callee) && helpers.isSyncQuery(node.body.callee)) return node.body.callee;
			return getWrongQueryNameInAssertion(node);
		}
		function getCaller(node) {
			if (!isCallExpression(node.body) || !isMemberExpression(node.body.callee)) return null;
			if (ASTUtils.isIdentifier(node.body.callee.object)) return node.body.callee.object.name;
			if (isCallExpression(node.body.callee.object) && ASTUtils.isIdentifier(node.body.callee.object.callee) && isCallExpression(node.body.callee.object.arguments[0]) && isMemberExpression(node.body.callee.object.arguments[0].callee) && ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee.object)) return node.body.callee.object.arguments[0].callee.object.name;
			if (isMemberExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.object) && isCallExpression(node.body.callee.object.object.arguments[0]) && isMemberExpression(node.body.callee.object.object.arguments[0].callee) && ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee.object)) return node.body.callee.object.object.arguments[0].callee.object.name;
			return null;
		}
		function isSyncQuery(node) {
			if (!isCallExpression(node.body)) return false;
			const isQuery = ASTUtils.isIdentifier(node.body.callee) && helpers.isSyncQuery(node.body.callee);
			const isWrappedInPresenceAssert = isMemberExpression(node.body.callee) && isCallExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.arguments[0]) && ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee) && helpers.isSyncQuery(node.body.callee.object.arguments[0].callee) && helpers.isPresenceAssert(node.body.callee);
			const isWrappedInNegatedPresenceAssert = isMemberExpression(node.body.callee) && isMemberExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.object) && isCallExpression(node.body.callee.object.object.arguments[0]) && ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee) && helpers.isSyncQuery(node.body.callee.object.object.arguments[0].callee) && helpers.isPresenceAssert(node.body.callee.object);
			return isQuery || isWrappedInPresenceAssert || isWrappedInNegatedPresenceAssert;
		}
		function isScreenSyncQuery(node) {
			if (!isArrowFunctionExpression(node) || !isCallExpression(node.body)) return false;
			if (!isMemberExpression(node.body.callee) || !ASTUtils.isIdentifier(node.body.callee.property)) return false;
			if (!ASTUtils.isIdentifier(node.body.callee.object) && !isCallExpression(node.body.callee.object) && !isMemberExpression(node.body.callee.object)) return false;
			const isWrappedInPresenceAssert = helpers.isPresenceAssert(node.body.callee) && isCallExpression(node.body.callee.object) && isCallExpression(node.body.callee.object.arguments[0]) && isMemberExpression(node.body.callee.object.arguments[0].callee) && ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee.object);
			const isWrappedInNegatedPresenceAssert = isMemberExpression(node.body.callee.object) && helpers.isPresenceAssert(node.body.callee.object) && isCallExpression(node.body.callee.object.object) && isCallExpression(node.body.callee.object.object.arguments[0]) && isMemberExpression(node.body.callee.object.object.arguments[0].callee);
			return helpers.isSyncQuery(node.body.callee.property) || isWrappedInPresenceAssert || isWrappedInNegatedPresenceAssert;
		}
		function getQueryArguments(node) {
			if (isMemberExpression(node.callee) && isCallExpression(node.callee.object) && isCallExpression(node.callee.object.arguments[0])) return node.callee.object.arguments[0].arguments;
			if (isMemberExpression(node.callee) && isMemberExpression(node.callee.object) && isCallExpression(node.callee.object.object) && isCallExpression(node.callee.object.object.arguments[0])) return node.callee.object.object.arguments[0].arguments;
			return node.arguments;
		}
		return { "AwaitExpression > CallExpression"(node) {
			if (!ASTUtils.isIdentifier(node.callee) || !helpers.isAsyncUtil(node.callee, ["waitFor"])) return;
			const argument = node.arguments[0];
			if (!isArrowFunctionExpression(argument)) return;
			if (isBlockStatement(argument.body) && argument.async) {
				const { body } = argument.body;
				const findByDeclarator = (body.filter(isVariableDeclaration$1)?.flatMap((declaration) => declaration.declarations)).find((declaration) => {
					if (!ASTUtils.isAwaitExpression(declaration.init) || !isCallExpression(declaration.init.argument)) return false;
					const { callee } = declaration.init.argument;
					const node = getDeepestIdentifierNode(callee);
					return node ? helpers.isFindQueryVariant(node) : false;
				});
				const init = ASTUtils.isAwaitExpression(findByDeclarator?.init) ? findByDeclarator.init.argument : null;
				if (!isCallExpression(init)) return;
				const queryIdentifier = getDeepestIdentifierNode(init.callee);
				if (!queryIdentifier || !helpers.isAsyncQuery(queryIdentifier)) return;
				const fullQueryMethod = queryIdentifier.name;
				const queryMethod = fullQueryMethod.split("By")[1];
				const queryVariant = getFindByQueryVariant(fullQueryMethod);
				if (!queryMethod) throw Error("Query method could not be determined.");
				reportInvalidUsage(node, {
					queryMethod,
					queryVariant,
					prevQuery: fullQueryMethod,
					fix(fixer) {
						const { parent: expressionStatement } = node.parent;
						const bodyText = sourceCode.getText(argument.body).slice(1, -1).trim();
						const { line, column } = expressionStatement.loc.start;
						const indent = sourceCode.getLines()[line - 1]?.slice(0, column);
						const newText = bodyText.split("\n").map((line) => line.trim()).join(`\n${indent}`);
						return fixer.replaceText(expressionStatement, newText);
					}
				});
				return;
			}
			const argumentBody = argument.body;
			if (!isCallExpression(argumentBody)) return;
			if (isScreenSyncQuery(argument)) {
				const caller = getCaller(argument);
				if (!caller) return;
				const fullQueryMethodNode = getWrongQueryName(argument);
				if (!fullQueryMethodNode) return;
				const fullQueryMethod = fullQueryMethodNode.name;
				const waitOptions = node.arguments[1];
				let waitOptionsSourceCode = "";
				if (isObjectExpression(waitOptions)) waitOptionsSourceCode = `, ${sourceCode.getText(waitOptions)}`;
				const queryVariant = getFindByQueryVariant(fullQueryMethod);
				const callArguments = getQueryArguments(argumentBody);
				const queryMethod = fullQueryMethod.split("By")[1];
				if (!queryMethod) return;
				reportInvalidUsage(node, {
					queryMethod,
					queryVariant,
					prevQuery: fullQueryMethod,
					fix(fixer) {
						const findByCallText = `${caller}.${queryVariant}${queryMethod}(${callArguments.map((callArgNode) => sourceCode.getText(callArgNode)).join(", ")}${waitOptionsSourceCode})`;
						if (!isMemberExpression(argumentBody.callee)) return null;
						const { property, object } = argumentBody.callee;
						if (ASTUtils.isVariableDeclarator(node.parent.parent)) {
							if (isIdentifier(property) && helpers.isCustomQuery(property)) return null;
							return fixer.replaceText(node, findByCallText);
						}
						if (!isCallExpression(object)) return null;
						const originalExpect = sourceCode.getText(argumentBody);
						const awaited = `await ${findByCallText}`;
						const newExpect = originalExpect.replace(sourceCode.getText(object.arguments[0]), awaited);
						const output = originalExpect.replace(originalExpect, newExpect);
						return fixer.replaceText(node.parent, output);
					}
				});
				return;
			}
			if (!isSyncQuery(argument)) return;
			const fullQueryMethodNode = getWrongQueryName(argument);
			if (!fullQueryMethodNode) return;
			const fullQueryMethod = fullQueryMethodNode.name;
			const queryMethod = fullQueryMethod.split("By")[1];
			const queryVariant = getFindByQueryVariant(fullQueryMethod);
			const callArguments = getQueryArguments(argumentBody);
			if (!queryMethod) throw Error("Query method could not be determined.");
			reportInvalidUsage(node, {
				queryMethod,
				queryVariant,
				prevQuery: fullQueryMethod,
				fix(fixer) {
					if (helpers.isCustomQuery(argumentBody.callee)) return null;
					const findByMethod = `${queryVariant}${queryMethod}`;
					const allFixes = [];
					const newCode = `${findByMethod}(${callArguments.map((callArgNode) => sourceCode.getText(callArgNode)).join(", ")})`;
					allFixes.push(fixer.replaceText(node, newCode));
					const definition = findRenderDefinitionDeclaration(getScope(context, fullQueryMethodNode), fullQueryMethod);
					if (!definition) return allFixes;
					if (definition.parent && isObjectPattern(definition.parent.parent)) {
						const allVariableDeclarations = definition.parent.parent;
						if (allVariableDeclarations.properties.some((p) => isProperty(p) && ASTUtils.isIdentifier(p.key) && p.key.name === findByMethod)) return allFixes;
						const text = sourceCode.getText(allVariableDeclarations).replace(/(\s*})$/, `, ${findByMethod}$1`);
						allFixes.push(fixer.replaceText(allVariableDeclarations, text));
					}
					return allFixes;
				}
			});
		} };
	}
});
//#endregion
//#region src/rules/prefer-implicit-assert.ts
const RULE_NAME$7 = "prefer-implicit-assert";
const isCalledUsingSomeObject = (node) => isMemberExpression(node.parent) && node.parent.object.type === AST_NODE_TYPES.Identifier;
const isCalledInExpect = (node, isAsyncQuery) => {
	if (isAsyncQuery) return isCallExpression(node.parent) && ASTUtils.isAwaitExpression(node.parent.parent) && isCallExpression(node.parent.parent.parent) && ASTUtils.isIdentifier(node.parent.parent.parent.callee) && node.parent.parent.parent.callee.name === "expect";
	return isCallExpression(node.parent) && isCallExpression(node.parent.parent) && ASTUtils.isIdentifier(node.parent.parent.callee) && node.parent.parent.callee.name === "expect";
};
const reportError = (context, node, queryType) => {
	if (node) return context.report({
		node,
		messageId: "preferImplicitAssert",
		data: { queryType }
	});
};
var prefer_implicit_assert_default = createTestingLibraryRule({
	name: RULE_NAME$7,
	meta: {
		type: "suggestion",
		docs: {
			description: "Suggest using implicit assertions for getBy* & findBy* queries",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: { preferImplicitAssert: "Don't wrap `{{queryType}}` query with `expect` & presence matchers like `toBeInTheDocument` or `not.toBeNull` as `{{queryType}}` queries fail implicitly when element is not found" },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const findQueryCalls = [];
		const getQueryCalls = [];
		return {
			"CallExpression Identifier"(node) {
				if (helpers.isFindQueryVariant(node)) findQueryCalls.push(node);
				if (helpers.isGetQueryVariant(node)) getQueryCalls.push(node);
			},
			"Program:exit"() {
				findQueryCalls.forEach((queryCall) => {
					const isAsyncQuery = true;
					const node = isCalledUsingSomeObject(queryCall) ? queryCall.parent : queryCall;
					if (node) {
						if (isCalledInExpect(node, isAsyncQuery)) {
							if (isMemberExpression(node.parent?.parent?.parent?.parent) && node.parent?.parent?.parent?.parent.property.type === AST_NODE_TYPES.Identifier && helpers.isPresenceAssert(node.parent.parent.parent.parent)) return reportError(context, node, "findBy*");
						}
					}
				});
				getQueryCalls.forEach((queryCall) => {
					const isAsyncQuery = false;
					const node = isCalledUsingSomeObject(queryCall) ? queryCall.parent : queryCall;
					if (node) {
						if (isCalledInExpect(node, isAsyncQuery)) {
							if (isMemberExpression(node.parent?.parent?.parent) && node.parent?.parent?.parent.property.type === AST_NODE_TYPES.Identifier && helpers.isPresenceAssert(node.parent.parent.parent)) return reportError(context, node, "getBy*");
						}
					}
				});
			}
		};
	}
});
var prefer_presence_queries_default = createTestingLibraryRule({
	name: "prefer-presence-queries",
	meta: {
		docs: {
			description: "Ensure appropriate `get*`/`query*` queries are used with their respective matchers",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: {
			wrongPresenceQuery: "Use `getBy*` queries rather than `queryBy*` for checking element is present",
			wrongAbsenceQuery: "Use `queryBy*` queries rather than `getBy*` for checking element is NOT present"
		},
		fixable: "code",
		schema: [{
			type: "object",
			additionalProperties: false,
			properties: {
				presence: { type: "boolean" },
				absence: { type: "boolean" }
			}
		}],
		type: "suggestion"
	},
	defaultOptions: [{
		presence: true,
		absence: true
	}],
	create(context, [{ absence = true, presence = true }], helpers) {
		return { "CallExpression Identifier"(node) {
			const expectCallNode = findClosestCallNode(node, "expect");
			const withinCallNode = findClosestCallNode(node, "within");
			if (!isMemberExpression(expectCallNode?.parent)) return;
			if (!helpers.isSyncQuery(node)) return;
			const isPresenceQuery = helpers.isGetQueryVariant(node);
			const expectStatement = expectCallNode.parent;
			const isPresenceAssert = helpers.isPresenceAssert(expectStatement);
			const isAbsenceAssert = helpers.isAbsenceAssert(expectStatement);
			if (!isPresenceAssert && !isAbsenceAssert) return;
			if (presence && (withinCallNode || isPresenceAssert) && !isPresenceQuery) {
				const newQueryName = node.name.replace(/^query/, "get");
				context.report({
					node,
					messageId: "wrongPresenceQuery",
					fix: (fixer) => fixer.replaceText(node, newQueryName)
				});
			} else if (!withinCallNode && absence && isAbsenceAssert && isPresenceQuery) {
				const newQueryName = node.name.replace(/^get/, "query");
				context.report({
					node,
					messageId: "wrongAbsenceQuery",
					fix: (fixer) => fixer.replaceText(node, newQueryName)
				});
			}
		} };
	}
});
var prefer_query_by_disappearance_default = createTestingLibraryRule({
	name: "prefer-query-by-disappearance",
	meta: {
		type: "problem",
		docs: {
			description: "Suggest using `queryBy*` queries when waiting for disappearance",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { preferQueryByDisappearance: "Prefer using queryBy* when waiting for disappearance" },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		function isWaitForElementToBeRemoved(node) {
			const identifierNode = getPropertyIdentifierNode(node);
			if (!identifierNode) return false;
			return helpers.isAsyncUtil(identifierNode, ["waitForElementToBeRemoved"]);
		}
		/**
		* Checks if node is reportable (starts with "get" or "find") and if it is, reports it with `context.report()`.
		*
		* @param {TSESTree.Expression} node - Node to be tested
		* @returns {Boolean} Boolean indicating if expression was reported
		*/
		function reportExpression(node) {
			const argumentProperty = isMemberExpression(node) ? getPropertyIdentifierNode(node.property) : getPropertyIdentifierNode(node);
			if (!argumentProperty) return false;
			if (helpers.isGetQueryVariant(argumentProperty) || helpers.isFindQueryVariant(argumentProperty)) {
				context.report({
					node: argumentProperty,
					messageId: "preferQueryByDisappearance"
				});
				return true;
			}
			return false;
		}
		function checkNonCallbackViolation(node) {
			if (!isCallExpression(node)) return false;
			if (!isMemberExpression(node.callee) && !getPropertyIdentifierNode(node.callee)) return false;
			return reportExpression(node.callee);
		}
		function isReturnViolation(node) {
			if (!isReturnStatement(node) || !isCallExpression(node.argument)) return false;
			return reportExpression(node.argument.callee);
		}
		function isNonReturnViolation(node) {
			if (!isExpressionStatement(node) || !isCallExpression(node.expression)) return false;
			if (!isMemberExpression(node.expression.callee) && !getPropertyIdentifierNode(node.expression.callee)) return false;
			return reportExpression(node.expression.callee);
		}
		function isStatementViolation(statement) {
			return isReturnViolation(statement) || isNonReturnViolation(statement);
		}
		function checkFunctionExpressionViolation(node) {
			if (!isFunctionExpression(node)) return false;
			return node.body.body.some((statement) => isStatementViolation(statement));
		}
		function isArrowFunctionBodyViolation(node) {
			if (!isArrowFunctionExpression(node) || !isBlockStatement(node.body)) return false;
			return node.body.body.some((statement) => isStatementViolation(statement));
		}
		function isArrowFunctionImplicitReturnViolation(node) {
			if (!isArrowFunctionExpression(node) || !isCallExpression(node.body)) return false;
			if (!isMemberExpression(node.body.callee) && !getPropertyIdentifierNode(node.body.callee)) return false;
			return reportExpression(node.body.callee);
		}
		function checkArrowFunctionViolation(node) {
			return isArrowFunctionBodyViolation(node) || isArrowFunctionImplicitReturnViolation(node);
		}
		function check(node) {
			if (!isWaitForElementToBeRemoved(node)) return;
			const argumentNode = node.arguments[0];
			if (!argumentNode) return;
			checkNonCallbackViolation(argumentNode);
			checkArrowFunctionViolation(argumentNode);
			checkFunctionExpressionViolation(argumentNode);
		}
		return { CallExpression: check };
	}
});
var prefer_query_matchers_default = createTestingLibraryRule({
	name: "prefer-query-matchers",
	meta: {
		docs: {
			description: "Ensure the configured `get*`/`query*` query is used with the corresponding matchers",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: { wrongQueryForMatcher: "Use `{{ query }}By*` queries for {{ matcher }}" },
		schema: [{
			type: "object",
			additionalProperties: false,
			properties: { validEntries: {
				type: "array",
				items: {
					type: "object",
					properties: {
						query: {
							type: "string",
							enum: ["get", "query"]
						},
						matcher: { type: "string" }
					},
					additionalProperties: false
				}
			} }
		}],
		type: "suggestion"
	},
	defaultOptions: [{ validEntries: [] }],
	create(context, [{ validEntries }], helpers) {
		return { "CallExpression Identifier"(node) {
			const expectCallNode = findClosestCallNode(node, "expect");
			if (!expectCallNode || !isMemberExpression(expectCallNode.parent)) return;
			if (!helpers.isSyncQuery(node)) return;
			const isGetBy = helpers.isGetQueryVariant(node);
			const expectStatement = expectCallNode.parent;
			for (const entry of validEntries) {
				const { query, matcher } = entry;
				if (!helpers.isMatchingAssert(expectStatement, matcher)) continue;
				if (query !== (isGetBy ? "get" : "query")) context.report({
					node,
					messageId: "wrongQueryForMatcher",
					data: {
						query,
						matcher
					}
				});
			}
		} };
	}
});
//#endregion
//#region src/rules/prefer-screen-queries.ts
const RULE_NAME$3 = "prefer-screen-queries";
const ALLOWED_RENDER_PROPERTIES_FOR_DESTRUCTURING = ["container", "baseElement"];
function usesContainerOrBaseElement(node) {
	const secondArgument = node.arguments[1];
	return isObjectExpression(secondArgument) && secondArgument.properties.some((property) => isProperty(property) && ASTUtils.isIdentifier(property.key) && ALLOWED_RENDER_PROPERTIES_FOR_DESTRUCTURING.includes(property.key.name));
}
var prefer_screen_queries_default = createTestingLibraryRule({
	name: RULE_NAME$3,
	meta: {
		type: "suggestion",
		docs: {
			description: "Suggest using `screen` while querying",
			recommendedConfig: {
				dom: "error",
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { preferScreenQueries: "Avoid destructuring queries from `render` result, use `screen.{{ name }}` instead" },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const renderWrapperNames = [];
		function detectRenderWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) renderWrapperNames.push(getFunctionName(innerFunction));
		}
		function isReportableRender(node) {
			return helpers.isRenderUtil(node) || renderWrapperNames.includes(node.name);
		}
		function reportInvalidUsage(node) {
			context.report({
				node,
				messageId: "preferScreenQueries",
				data: { name: node.name }
			});
		}
		function saveSafeDestructuredQueries(node) {
			if (isObjectPattern(node.id)) {
				for (const property of node.id.properties) if (isProperty(property) && ASTUtils.isIdentifier(property.key) && helpers.isBuiltInQuery(property.key)) safeDestructuredQueries.push(property.key.name);
			}
		}
		function isIdentifierAllowed(name) {
			return ["screen", ...withinDeclaredVariables].includes(name);
		}
		const safeDestructuredQueries = [];
		const withinDeclaredVariables = [];
		return {
			VariableDeclarator(node) {
				if (!isCallExpression(node.init) || !ASTUtils.isIdentifier(node.init.callee)) return;
				const isComingFromValidRender = isReportableRender(node.init.callee);
				if (!isComingFromValidRender) saveSafeDestructuredQueries(node);
				const isWithinFunction = node.init.callee.name === "within";
				const usesRenderOptions = isComingFromValidRender && usesContainerOrBaseElement(node.init);
				if (!isWithinFunction && !usesRenderOptions) return;
				if (isObjectPattern(node.id)) saveSafeDestructuredQueries(node);
				else if (ASTUtils.isIdentifier(node.id)) withinDeclaredVariables.push(node.id.name);
			},
			CallExpression(node) {
				const identifierNode = getDeepestIdentifierNode(node);
				if (!identifierNode) return;
				if (helpers.isRenderUtil(identifierNode)) detectRenderWrapper(identifierNode);
				if (!helpers.isBuiltInQuery(identifierNode)) return;
				if (!isMemberExpression(identifierNode.parent)) {
					if (safeDestructuredQueries.some((queryName) => queryName === identifierNode.name)) return;
					reportInvalidUsage(identifierNode);
					return;
				}
				const memberExpressionNode = identifierNode.parent;
				if (isCallExpression(memberExpressionNode.object) && ASTUtils.isIdentifier(memberExpressionNode.object.callee) && memberExpressionNode.object.callee.name !== "within" && isReportableRender(memberExpressionNode.object.callee) && !usesContainerOrBaseElement(memberExpressionNode.object)) {
					reportInvalidUsage(identifierNode);
					return;
				}
				const testingLibraryFn = resolveToTestingLibraryFn(node, context);
				if (ASTUtils.isIdentifier(memberExpressionNode.object) && !isIdentifierAllowed(memberExpressionNode.object.name) && !isIdentifierAllowed(testingLibraryFn?.original ?? "")) reportInvalidUsage(identifierNode);
			}
		};
	}
});
//#endregion
//#region src/rules/prefer-user-event.ts
const RULE_NAME$2 = "prefer-user-event";
const MAPPING_TO_USER_EVENT = {
	click: [
		"click",
		"type",
		"selectOptions",
		"deselectOptions"
	],
	change: [
		"upload",
		"type",
		"clear",
		"selectOptions",
		"deselectOptions"
	],
	dblClick: ["dblClick"],
	input: [
		"type",
		"upload",
		"selectOptions",
		"deselectOptions",
		"paste"
	],
	keyDown: ["type", "tab"],
	keyPress: ["type"],
	keyUp: ["type", "tab"],
	mouseDown: [
		"click",
		"dblClick",
		"selectOptions",
		"deselectOptions"
	],
	mouseEnter: [
		"hover",
		"selectOptions",
		"deselectOptions"
	],
	mouseLeave: ["unhover"],
	mouseMove: [
		"hover",
		"unhover",
		"selectOptions",
		"deselectOptions"
	],
	mouseOut: ["unhover"],
	mouseOver: [
		"hover",
		"selectOptions",
		"deselectOptions"
	],
	mouseUp: [
		"click",
		"dblClick",
		"selectOptions",
		"deselectOptions"
	],
	paste: ["paste"],
	pointerDown: [
		"click",
		"dblClick",
		"selectOptions",
		"deselectOptions"
	],
	pointerEnter: [
		"hover",
		"selectOptions",
		"deselectOptions"
	],
	pointerLeave: ["unhover"],
	pointerMove: [
		"hover",
		"unhover",
		"selectOptions",
		"deselectOptions"
	],
	pointerOut: ["unhover"],
	pointerOver: [
		"hover",
		"selectOptions",
		"deselectOptions"
	],
	pointerUp: [
		"click",
		"dblClick",
		"selectOptions",
		"deselectOptions"
	]
};
function buildErrorMessage(fireEventMethod) {
	return (MAPPING_TO_USER_EVENT[fireEventMethod]?.map((methodName) => `userEvent.${methodName}`) ?? []).join(", ").replace(/, ([a-zA-Z.]+)$/, ", or $1");
}
const fireEventMappedMethods = Object.keys(MAPPING_TO_USER_EVENT);
var prefer_user_event_default = createTestingLibraryRule({
	name: RULE_NAME$2,
	meta: {
		type: "suggestion",
		docs: {
			description: "Suggest using `userEvent` over `fireEvent` for simulating user interactions",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: { preferUserEvent: "Prefer using {{userEventMethods}} over fireEvent.{{fireEventMethod}}" },
		schema: [{
			type: "object",
			properties: { allowedMethods: { type: "array" } },
			additionalProperties: false
		}]
	},
	defaultOptions: [{ allowedMethods: [] }],
	create(context, [options], helpers) {
		const { allowedMethods } = options;
		const createEventVariables = {};
		const isfireEventMethodAllowed = (methodName) => !fireEventMappedMethods.includes(methodName) || allowedMethods.includes(methodName);
		const getFireEventMethodName = (callExpressionNode, node) => {
			if (!ASTUtils.isIdentifier(callExpressionNode.callee) && !isMemberExpression(callExpressionNode.callee)) return node.name;
			const secondArgument = callExpressionNode.arguments[1];
			if (ASTUtils.isIdentifier(secondArgument) && createEventVariables[secondArgument.name] !== void 0) return createEventVariables[secondArgument.name];
			if (!isCallExpression(secondArgument) || !helpers.isCreateEventUtil(secondArgument)) return node.name;
			if (ASTUtils.isIdentifier(secondArgument.callee)) return secondArgument.arguments[0].value;
			return secondArgument.callee.property.name;
		};
		return {
			"CallExpression Identifier"(node) {
				if (!helpers.isFireEventMethod(node)) return;
				const closestCallExpression = findClosestCallExpressionNode(node, true);
				if (!closestCallExpression) return;
				const fireEventMethodName = getFireEventMethodName(closestCallExpression, node);
				if (!fireEventMethodName || isfireEventMethodAllowed(fireEventMethodName)) return;
				context.report({
					node: closestCallExpression.callee,
					messageId: "preferUserEvent",
					data: {
						userEventMethods: buildErrorMessage(fireEventMethodName),
						fireEventMethod: fireEventMethodName
					}
				});
			},
			VariableDeclarator(node) {
				if (!isCallExpression(node.init) || !helpers.isCreateEventUtil(node.init) || !ASTUtils.isIdentifier(node.id)) return;
				let fireEventMethodName = "";
				if (isMemberExpression(node.init.callee) && ASTUtils.isIdentifier(node.init.callee.property)) fireEventMethodName = node.init.callee.property.name;
				else if (node.init.arguments.length > 0) fireEventMethodName = node.init.arguments[0].value;
				if (!isfireEventMethodAllowed(fireEventMethodName)) createEventVariables[node.id.name] = fireEventMethodName;
			}
		};
	}
});
//#endregion
//#region src/rules/prefer-user-event-setup.ts
const RULE_NAME$1 = "prefer-user-event-setup";
const USER_EVENT_PACKAGE = "@testing-library/user-event";
const USER_EVENT_NAME = "userEvent";
const SETUP_METHOD_NAME = "setup";
var prefer_user_event_setup_default = createTestingLibraryRule({
	name: RULE_NAME$1,
	meta: {
		type: "suggestion",
		docs: {
			description: "Suggest using userEvent with setup() instead of direct methods",
			recommendedConfig: {
				dom: false,
				angular: false,
				react: false,
				vue: false,
				svelte: false,
				marko: false
			}
		},
		messages: { preferUserEventSetup: "Prefer using userEvent with setup() instead of direct {{method}}() call. Use: const user = userEvent.setup(); await user.{{method}}(...)" },
		schema: []
	},
	defaultOptions: [],
	create(context, options, helpers) {
		const userEventSetupVars = /* @__PURE__ */ new Set();
		const setupFunctions = /* @__PURE__ */ new Map();
		let userEventIdentifier = null;
		function isUserEventSetupCall(node) {
			return node.type === AST_NODE_TYPES.CallExpression && node.callee.type === AST_NODE_TYPES.MemberExpression && node.callee.object.type === AST_NODE_TYPES.Identifier && node.callee.object.name === userEventIdentifier && node.callee.property.type === AST_NODE_TYPES.Identifier && node.callee.property.name === SETUP_METHOD_NAME;
		}
		return {
			ImportDeclaration(node) {
				if (node.source.value === USER_EVENT_PACKAGE) {
					const defaultImport = node.specifiers.find((spec) => spec.type === AST_NODE_TYPES.ImportDefaultSpecifier);
					if (defaultImport) userEventIdentifier = defaultImport.local.name;
					const namedImport = node.specifiers.find((spec) => spec.type === AST_NODE_TYPES.ImportSpecifier && spec.imported.type === AST_NODE_TYPES.Identifier && spec.imported.name === USER_EVENT_NAME);
					if (namedImport && namedImport.type === AST_NODE_TYPES.ImportSpecifier) userEventIdentifier = namedImport.local.name;
				}
			},
			VariableDeclarator(node) {
				if (!userEventIdentifier || !node.init) return;
				if (isUserEventSetupCall(node.init) && node.id.type === AST_NODE_TYPES.Identifier) userEventSetupVars.add(node.id.name);
				if (node.id.type === AST_NODE_TYPES.ObjectPattern && node.init.type === AST_NODE_TYPES.CallExpression && node.init.callee.type === AST_NODE_TYPES.Identifier) {
					const functionName = node.init.callee.name;
					const setupProps = setupFunctions.get(functionName);
					if (setupProps) {
						for (const prop of node.id.properties) if (prop.type === AST_NODE_TYPES.Property && prop.key.type === AST_NODE_TYPES.Identifier && setupProps.has(prop.key.name) && prop.value.type === AST_NODE_TYPES.Identifier) userEventSetupVars.add(prop.value.name);
					}
				}
			},
			FunctionDeclaration(node) {
				if (!userEventIdentifier || !node.id) return;
				if (node.body && node.body.type === AST_NODE_TYPES.BlockStatement) {
					for (const statement of node.body.body) if (statement.type === AST_NODE_TYPES.ReturnStatement) {
						const ret = statement;
						if (ret.argument && ret.argument.type === AST_NODE_TYPES.ObjectExpression) {
							const props = /* @__PURE__ */ new Set();
							for (const prop of ret.argument.properties) if (prop.type === AST_NODE_TYPES.Property && prop.key.type === AST_NODE_TYPES.Identifier && prop.value && isUserEventSetupCall(prop.value)) props.add(prop.key.name);
							if (props.size > 0) setupFunctions.set(node.id.name, props);
						}
					}
				}
			},
			CallExpression(node) {
				if (!userEventIdentifier) return;
				if (node.callee.type === AST_NODE_TYPES.MemberExpression && node.callee.property.type === AST_NODE_TYPES.Identifier && helpers.isUserEventMethod(node.callee.property)) {
					const methodName = node.callee.property.name;
					if (methodName === SETUP_METHOD_NAME) return;
					if (!(node.callee.object.type === AST_NODE_TYPES.Identifier && userEventSetupVars.has(node.callee.object.name))) context.report({
						node: node.callee,
						messageId: "preferUserEventSetup",
						data: { method: methodName }
					});
				}
			}
		};
	}
});
//#endregion
//#region src/rules/render-result-naming-convention.ts
const RULE_NAME = "render-result-naming-convention";
const ALLOWED_VAR_NAMES = ["view", "utils"];
var render_result_naming_convention_default = createTestingLibraryRule({
	name: RULE_NAME,
	meta: {
		type: "suggestion",
		docs: {
			description: "Enforce a valid naming for return value from `render`",
			recommendedConfig: {
				dom: false,
				angular: "error",
				react: "error",
				vue: "error",
				svelte: "error",
				marko: "error"
			}
		},
		messages: { renderResultNamingConvention: `\`{{ renderResultName }}\` is not a recommended name for \`render\` returned value. Instead, you should destructure it, or name it using one of: ${ALLOWED_VAR_NAMES.map((name) => `\`${name}\``).join(", ").replace(/, ([^,]*)$/, ", or $1")}` },
		schema: []
	},
	defaultOptions: [],
	create(context, _, helpers) {
		const renderWrapperNames = [];
		function detectRenderWrapper(node) {
			const innerFunction = getInnermostReturningFunction(context, node);
			if (innerFunction) renderWrapperNames.push(getFunctionName(innerFunction));
		}
		return {
			CallExpression(node) {
				const callExpressionIdentifier = getDeepestIdentifierNode(node);
				if (!callExpressionIdentifier) return;
				if (helpers.isRenderUtil(callExpressionIdentifier)) detectRenderWrapper(callExpressionIdentifier);
			},
			VariableDeclarator(node) {
				if (!node.init) return;
				const initIdentifierNode = getDeepestIdentifierNode(node.init);
				if (!initIdentifierNode) return;
				if (!helpers.isRenderVariableDeclarator(node) && !renderWrapperNames.includes(initIdentifierNode.name)) return;
				if (isObjectPattern(node.id)) return;
				const renderResultName = ASTUtils.isIdentifier(node.id) && node.id.name;
				if (!renderResultName) return;
				if (ALLOWED_VAR_NAMES.includes(renderResultName)) return;
				context.report({
					node,
					messageId: "renderResultNamingConvention",
					data: { renderResultName }
				});
			}
		};
	}
});
//#endregion
//#region src/rules/index.ts
const rules = {
	"await-async-events": await_async_events_default,
	"await-async-queries": await_async_queries_default,
	"await-async-utils": await_async_utils_default,
	"consistent-data-testid": consistent_data_testid_default,
	"no-await-sync-events": no_await_sync_events_default,
	"no-await-sync-queries": no_await_sync_queries_default,
	"no-container": no_container_default,
	"no-debugging-utils": no_debugging_utils_default,
	"no-dom-import": no_dom_import_default,
	"no-global-regexp-flag-in-query": no_global_regexp_flag_in_query_default,
	"no-manual-cleanup": no_manual_cleanup_default,
	"no-node-access": no_node_access_default,
	"no-promise-in-fire-event": no_promise_in_fire_event_default,
	"no-render-in-lifecycle": no_render_in_lifecycle_default,
	"no-test-id-queries": no_test_id_queries_default,
	"no-unnecessary-act": no_unnecessary_act_default,
	"no-wait-for-multiple-assertions": no_wait_for_multiple_assertions_default,
	"no-wait-for-side-effects": no_wait_for_side_effects_default,
	"no-wait-for-snapshot": no_wait_for_snapshot_default,
	"prefer-explicit-assert": prefer_explicit_assert_default,
	"prefer-find-by": prefer_find_by_default,
	"prefer-implicit-assert": prefer_implicit_assert_default,
	"prefer-presence-queries": prefer_presence_queries_default,
	"prefer-query-by-disappearance": prefer_query_by_disappearance_default,
	"prefer-query-matchers": prefer_query_matchers_default,
	"prefer-screen-queries": prefer_screen_queries_default,
	"prefer-user-event": prefer_user_event_default,
	"prefer-user-event-setup": prefer_user_event_setup_default,
	"render-result-naming-convention": render_result_naming_convention_default
};
//#endregion
//#region src/index.ts
const { name: packageName, version: packageVersion } = createRequire(import.meta.url)(resolve(dirname(fileURLToPath(import.meta.url)), "../package.json"));
const PLUGIN_NAME = "testing-library";
function createPluginFlatConfigs() {
	return Object.entries(baseConfigs).reduce((acc, [configName, configRecord]) => {
		const flatName = `flat/${configName}`;
		return {
			...acc,
			[flatName]: {
				name: `${PLUGIN_NAME}/${configName}`,
				plugins: { get "testing-library"() {
					return testingLibraryPlugin;
				} },
				rules: configRecord.rules
			}
		};
	}, {});
}
function createPluginLegacyConfigs() {
	return Object.entries(baseConfigs).reduce((acc, [configName, configRecord]) => {
		return {
			...acc,
			[configName]: {
				plugins: [PLUGIN_NAME],
				rules: configRecord.rules
			}
		};
	}, {});
}
const testingLibraryPlugin = {
	meta: {
		name: packageName,
		version: packageVersion
	},
	rules,
	configs: {
		...createPluginFlatConfigs(),
		...createPluginLegacyConfigs()
	}
};
//#endregion
export { testingLibraryPlugin as default };
