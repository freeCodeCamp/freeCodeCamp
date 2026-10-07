import { extname } from "pathe";
import { parse, parseExpression } from "@babel/parser";
import { asyncWalk, walk } from "estree-walker";

//#region src/check.ts
/**
* Checks if the given node matches the specified type(s).
*
* @param node - The node to check.
* @param types - The type(s) to match against. It can be a single type or an array of types.
* @returns True if the node matches the specified type(s), false otherwise.
*/
function isTypeOf(node, types) {
	if (!node) return false;
	return [].concat(types).some((type) => {
		switch (type) {
			case "Function": return isFunctionType(node);
			case "Literal": return isLiteralType(node);
			case "Expression": return isExpressionType(node);
			default: return node.type === type;
		}
	});
}
/**
* Checks if the given node is a CallExpression with the specified callee.
*
* @param node - The node to check.
* @param test - The callee to compare against. It can be a string, an array of strings, or a function that takes a string and returns a boolean.
* @returns True if the node is a CallExpression with the specified callee, false otherwise.
*/
function isCallOf(node, test) {
	return !!node && node.type === "CallExpression" && isIdentifierOf(node.callee, test);
}
/**
* Checks if the given node is a TaggedTemplateExpression with the specified callee.
*
* @param node - The node to check.
* @param test - The callee to compare against. It can be a string, an array of strings, or a function that takes a string and returns a boolean.
* @returns True if the node is a TaggedTemplateExpression with the specified callee, false otherwise.
*/
function isTaggedFunctionCallOf(node, test) {
	return !!node && node.type === "TaggedTemplateExpression" && isIdentifierOf(node.tag, test);
}
/**
* Checks if the given node is an Identifier with the specified name.
*
* @param node - The node to check.
* @param test - The name to compare against. It can be a string or an array of strings.
* @returns True if the node is an Identifier with the specified name, false otherwise.
*/
function isIdentifierOf(node, test) {
	return isIdentifier(node) && match(node.name, test);
}
/**
* Checks if the given node is a literal type.
*
* @param node - The node to check.
* @returns True if the node is a literal type, false otherwise.
*/
function isLiteralType(node) {
	return !!node && node.type.endsWith("Literal");
}
/**
* Checks if the given node is a function type.
*
* @param node - The node to check.
* @returns True if the node is a function type, false otherwise.
*/
function isFunctionType(node) {
	return !!node && !node.type.startsWith("TS") && /Function(?:Expression|Declaration)$|Method$/.test(node.type);
}
/**
* Checks if the given node is a declaration type.
*
* @param node - The node to check.
* @returns True if the node is a declaration type, false otherwise.
*/
function isDeclarationType(node) {
	if (!node) return false;
	switch (node.type) {
		case "FunctionDeclaration":
		case "VariableDeclaration":
		case "ClassDeclaration":
		case "ExportAllDeclaration":
		case "ExportDefaultDeclaration":
		case "ExportNamedDeclaration":
		case "ImportDeclaration":
		case "DeclareClass":
		case "DeclareFunction":
		case "DeclareInterface":
		case "DeclareModule":
		case "DeclareModuleExports":
		case "DeclareTypeAlias":
		case "DeclareOpaqueType":
		case "DeclareVariable":
		case "DeclareExportDeclaration":
		case "DeclareExportAllDeclaration":
		case "InterfaceDeclaration":
		case "OpaqueType":
		case "TypeAlias":
		case "EnumDeclaration":
		case "TSDeclareFunction":
		case "TSInterfaceDeclaration":
		case "TSTypeAliasDeclaration":
		case "TSEnumDeclaration":
		case "TSModuleDeclaration": return true;
		case "Placeholder": if (node.expectedNode === "Declaration") return true;
	}
	return false;
}
/**
* Checks if the given node is an expression type.
*
* @param node - The node to check.
* @returns True if the node is an expression type, false otherwise.
*/
function isExpressionType(node) {
	return !!node && (node.type.endsWith("Expression") || isLiteralType(node) || [
		"Identifier",
		"MetaProperty",
		"Super",
		"Import",
		"JSXElement",
		"JSXFragment",
		"TopicReference",
		"PipelineBareFunction",
		"PipelinePrimaryTopicReference",
		"TSTypeAssertion"
	].includes(node.type));
}
function match(value, test) {
	if (Array.isArray(test)) return test.includes(value);
	if (typeof test === "function") return test(value);
	return value === test;
}
/**
* Checks if the input `node` is a reference to a bound variable.
*
* Copied from https://github.com/babel/babel/blob/main/packages/babel-types/src/validators/isReferenced.ts
*
* To avoid runtime dependency on `@babel/types` (which includes process references)
* This file should not change very often in babel but we may need to keep it
* up-to-date from time to time.
*
* @param node - The node to check.
* @param parent - The parent node of the input `node`.
* @param grandparent - The grandparent node of the input `node`.
* @returns True if the input `node` is a reference to a bound variable, false otherwise.
*/
/* v8 ignore next */
function isReferenced(node, parent, grandparent) {
	switch (parent.type) {
		case "MemberExpression":
		case "OptionalMemberExpression":
			if (parent.property === node) return !!parent.computed;
			return parent.object === node;
		case "JSXMemberExpression": return parent.object === node;
		case "VariableDeclarator": return parent.init === node;
		case "ArrowFunctionExpression": return parent.body === node;
		case "PrivateName": return false;
		case "ClassMethod":
		case "ClassPrivateMethod":
		case "ObjectMethod":
			if (parent.key === node) return !!parent.computed;
			return false;
		case "ObjectProperty":
			if (parent.key === node) return !!parent.computed;
			return !grandparent || grandparent.type !== "ObjectPattern";
		case "ClassProperty":
		case "ClassAccessorProperty":
			if (parent.key === node) return !!parent.computed;
			return true;
		case "ClassPrivateProperty": return parent.key !== node;
		case "ClassDeclaration":
		case "ClassExpression": return parent.superClass === node;
		case "AssignmentExpression": return parent.right === node;
		case "AssignmentPattern": return parent.right === node;
		case "LabeledStatement": return false;
		case "CatchClause": return false;
		case "RestElement": return false;
		case "BreakStatement":
		case "ContinueStatement": return false;
		case "FunctionDeclaration":
		case "FunctionExpression": return false;
		case "ExportNamespaceSpecifier":
		case "ExportDefaultSpecifier": return false;
		case "ExportSpecifier":
			if (grandparent?.source) return false;
			return parent.local === node;
		case "ImportDefaultSpecifier":
		case "ImportNamespaceSpecifier":
		case "ImportSpecifier": return false;
		case "ImportAttribute": return false;
		case "JSXAttribute":
		case "JSXNamespacedName": return false;
		case "ObjectPattern":
		case "ArrayPattern": return false;
		case "MetaProperty": return false;
		case "ObjectTypeProperty": return parent.key !== node;
		case "TSEnumMember": return parent.id !== node;
		case "TSPropertySignature":
			if (parent.key === node) return !!parent.computed;
			return true;
	}
	return true;
}
function isIdentifier(node) {
	return !!node && (node.type === "Identifier" || node.type === "JSXIdentifier");
}
function isStaticProperty(node) {
	return !!node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
}
function isStaticPropertyKey(node, parent) {
	return isStaticProperty(parent) && parent.key === node;
}
function isForStatement(stmt) {
	return stmt.type === "ForOfStatement" || stmt.type === "ForInStatement" || stmt.type === "ForStatement";
}
function isReferencedIdentifier(id, parent, parentStack) {
	if (!parent) return true;
	if (id.name === "arguments") return false;
	if (isReferenced(id, parent, parentStack.at(-2))) return true;
	switch (parent.type) {
		case "AssignmentExpression":
		case "AssignmentPattern": return true;
		case "ObjectProperty": return parent.key !== id && isInDestructureAssignment(parent, parentStack);
		case "ArrayPattern": return isInDestructureAssignment(parent, parentStack);
	}
	return false;
}
function isInDestructureAssignment(parent, parentStack) {
	if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
		let i = parentStack.length;
		while (i--) {
			const p = parentStack[i];
			if (p.type === "AssignmentExpression") return true;
			else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) break;
		}
	}
	return false;
}
function isInNewExpression(parentStack) {
	let i = parentStack.length;
	while (i--) {
		const p = parentStack[i];
		if (p.type === "NewExpression") return true;
		else if (p.type !== "MemberExpression") break;
	}
	return false;
}

//#endregion
//#region src/create.ts
/**
* Creates a string literal AST node.
*
* @param value - The value of the string literal.
* @returns The string literal AST node.
*/
function createStringLiteral(value) {
	return {
		type: "StringLiteral",
		value,
		extra: {
			rawValue: value,
			raw: JSON.stringify(value)
		}
	};
}
/**
* Creates a TypeScript union type AST node.
*
* @param types - An array of TypeScript types.
* @returns The TypeScript union type AST node.
*/
function createTSUnionType(types) {
	return {
		type: "TSUnionType",
		types
	};
}
/**
* Creates a TypeScript literal type AST node.
*
* @param literal - The literal value.
* @returns The TypeScript literal type AST node.
*/
function createTSLiteralType(literal) {
	return {
		type: "TSLiteralType",
		literal
	};
}

//#endregion
//#region src/extract.ts
/**
* Extract identifiers of the given node.
* @param node The node to extract.
* @param identifiers The array to store the extracted identifiers.
* @see https://github.com/vuejs/core/blob/1f6a1102aa09960f76a9af2872ef01e7da8538e3/packages/compiler-core/src/babelUtils.ts#L208
*/
function extractIdentifiers(node, identifiers = []) {
	switch (node.type) {
		case "Identifier":
		case "JSXIdentifier":
			identifiers.push(node);
			break;
		case "MemberExpression":
		case "JSXMemberExpression": {
			let object = node;
			while (object.type === "MemberExpression") object = object.object;
			identifiers.push(object);
			break;
		}
		case "ObjectPattern":
			for (const prop of node.properties) if (prop.type === "RestElement") extractIdentifiers(prop.argument, identifiers);
			else extractIdentifiers(prop.value, identifiers);
			break;
		case "ArrayPattern":
			node.elements.forEach((element) => {
				element && extractIdentifiers(element, identifiers);
			});
			break;
		case "RestElement":
			extractIdentifiers(node.argument, identifiers);
			break;
		case "AssignmentPattern":
			extractIdentifiers(node.left, identifiers);
			break;
	}
	return identifiers;
}

//#endregion
//#region src/lang.ts
const REGEX_DTS = /\.d\.[cm]?ts(\?.*)?$/;
const REGEX_LANG_TS = /^[cm]?tsx?$/;
const REGEX_LANG_JSX = /^[cm]?[jt]sx$/;
/**
* Returns the language (extension name) of a given filename.
* @param filename - The name of the file.
* @returns The language of the file.
*/
function getLang(filename) {
	if (isDts(filename)) return "dts";
	return extname(filename).replace(/^\./, "").replace(/\?.*$/, "");
}
/**
* Checks if a filename represents a TypeScript declaration file (.d.ts).
* @param filename - The name of the file to check.
* @returns A boolean value indicating whether the filename is a TypeScript declaration file.
*/
function isDts(filename) {
	return REGEX_DTS.test(filename);
}
/**
* Checks if the given language (ts, mts, cjs, dts, tsx...) is TypeScript.
* @param lang - The language to check.
* @returns A boolean indicating whether the language is TypeScript.
*/
function isTs(lang) {
	return !!lang && (lang === "dts" || REGEX_LANG_TS.test(lang));
}

//#endregion
//#region src/loc.ts
/**
* Locates the trailing comma in the given code within the specified range.
*
* @param code - The code to search for the trailing comma.
* @param start - The start index of the range to search within.
* @param end - The end index of the range to search within.
* @param comments - Optional array of comments to exclude from the search range.
* @returns The index of the trailing comma, or -1 if not found.
*/
function locateTrailingComma(code, start, end, comments = []) {
	let i = start;
	while (i < end) {
		if (comments.some((c) => i >= c.start && i < c.end)) {
			i++;
			continue;
		}
		const char = code[i];
		if (["}", ")"].includes(char)) return -1;
		if (char === ",") return i;
		i++;
	}
	return -1;
}

//#endregion
//#region src/parse.ts
function hasPlugin(plugins, plugin) {
	return plugins.some((p) => (Array.isArray(p) ? p[0] : p) === plugin);
}
/**
* Gets the Babel parser options for the given language.
* @param lang - The language of the code (optional).
* @param options - The parser options (optional).
* @returns The Babel parser options for the given language.
*/
function getBabelParserOptions(lang, options = {}) {
	const plugins = [...options.plugins || []];
	if (isTs(lang)) {
		if (!hasPlugin(plugins, "typescript")) plugins.push(lang === "dts" ? ["typescript", { dts: true }] : "typescript");
		if (!hasPlugin(plugins, "decorators") && !hasPlugin(plugins, "decorators-legacy")) plugins.push("decorators-legacy");
		if (REGEX_LANG_JSX.test(lang) && !hasPlugin(plugins, "jsx")) plugins.push("jsx");
	} else if (!hasPlugin(plugins, "jsx")) plugins.push("jsx");
	return {
		sourceType: "module",
		...options,
		plugins
	};
}
/**
* Parses the given code using Babel parser.
*
* @param code - The code to parse.
* @param lang - The language of the code (optional).
* @param options - The parser options (optional).
* @param options.cache - Whether to cache the result (optional).
* @returns The parse result, including the program, errors, and comments.
*/
function babelParse(code, lang, { cache, ...options } = {}) {
	let result;
	if (cache) result = parseCache.get(code);
	if (!result) {
		result = parse(code, getBabelParserOptions(lang, options));
		if (cache) parseCache.set(code, result);
	}
	const { program, type, ...rest } = result;
	return {
		...program,
		...rest
	};
}
const parseCache = /* @__PURE__ */ new Map();
/**
* Parses the given code using the Babel parser as an expression.
*
* @template T - The type of the parsed AST node.
* @param {string} code - The code to parse.
* @param {string} [lang] - The language to parse. Defaults to undefined.
* @param {ParserOptions} [options] - The options to configure the parser. Defaults to an empty object.
* @returns {ParseResult<T>} - The result of the parsing operation.
*/
function babelParseExpression(code, lang, options = {}) {
	return parseExpression(code, getBabelParserOptions(lang, options));
}

//#endregion
//#region src/resolve.ts
/**
* Resolves a string representation of the given node.
* @param node The node to resolve.
* @param computed Whether the node is computed or not.
* @returns The resolved string representation of the node.
*/
function resolveString(node, computed = false) {
	if (typeof node === "string") return node;
	else switch (node.type) {
		case "Identifier":
			if (computed) throw new TypeError("Invalid Identifier");
			return node.name;
		case "PrivateName": return `#${node.id.name}`;
		case "ThisExpression": return "this";
		case "Super": return "super";
	}
	return String(resolveLiteral(node));
}
/**
* Resolves the value of a literal node.
* @param node The literal node to resolve.
* @returns The resolved value of the literal node.
*/
function resolveLiteral(node) {
	switch (node.type) {
		case "TemplateLiteral": return resolveTemplateLiteral(node);
		case "NullLiteral": return null;
		case "BigIntLiteral": return BigInt(node.value);
		case "RegExpLiteral": return new RegExp(node.pattern, node.flags);
		case "BooleanLiteral":
		case "NumericLiteral":
		case "StringLiteral": return node.value;
	}
}
/**
* Resolves a template literal node into a string.
* @param node The template literal node to resolve.
* @returns The resolved string representation of the template literal.
*/
function resolveTemplateLiteral(node) {
	return node.quasis.reduce((prev, curr, idx) => {
		const expr = node.expressions[idx];
		if (expr) {
			if (!isLiteralType(expr)) throw new TypeError("TemplateLiteral expression must be a literal");
			return prev + curr.value.cooked + resolveLiteral(expr);
		}
		return prev + curr.value.cooked;
	}, "");
}
/**
* Resolves the identifier node into an array of strings.
* @param node The identifier node to resolve.
* @returns An array of resolved strings representing the identifier.
* @throws TypeError If the identifier is invalid.
*/
function resolveIdentifier(node) {
	if (isTypeOf(node, [
		"Identifier",
		"PrivateName",
		"ThisExpression",
		"Super"
	])) return [resolveString(node)];
	const left = node.type === "TSQualifiedName" ? node.left : node.object;
	const right = node.type === "TSQualifiedName" ? node.right : node.property;
	const computed = node.type === "TSQualifiedName" ? false : node.computed;
	if (isTypeOf(left, [
		"Identifier",
		"MemberExpression",
		"ThisExpression",
		"Super",
		"TSQualifiedName"
	])) {
		const keys = resolveIdentifier(left);
		if (isTypeOf(right, [
			"Identifier",
			"PrivateName",
			"Literal"
		])) keys.push(resolveString(right, computed));
		else throw new TypeError("Invalid Identifier");
		return keys;
	}
	throw new TypeError("Invalid Identifier");
}
function tryResolveIdentifier(...args) {
	try {
		return resolveIdentifier(...args);
	} catch {
		return;
	}
}
function resolveObjectKey(node, raw = false) {
	const { key, computed } = node;
	switch (key.type) {
		case "StringLiteral":
		case "NumericLiteral": return raw ? key.extra.raw : key.value;
		case "Identifier":
			if (!computed) return raw ? `"${key.name}"` : key.name;
			throw "Cannot resolve computed Identifier";
		default: throw new SyntaxError(`Unexpected node type: ${key.type}`);
	}
}

//#endregion
//#region src/utils.ts
const TS_NODE_TYPES = [
	"TSAsExpression",
	"TSTypeAssertion",
	"TSNonNullExpression",
	"TSInstantiationExpression",
	"TSSatisfiesExpression"
];
/**
* Unwraps a TypeScript node by recursively traversing the AST until a non-TypeScript node is found.
* @param node - The TypeScript node to unwrap.
* @returns The unwrapped node.
*/
function unwrapTSNode(node) {
	if (isTypeOf(node, TS_NODE_TYPES)) return unwrapTSNode(node.expression);
	else return node;
}
/**
* Escapes a raw key by checking if it needs to be wrapped with quotes or not.
*
* @param rawKey - The raw key to escape.
* @returns The escaped key.
*/
function escapeKey(rawKey) {
	if (String(+rawKey) === rawKey) return rawKey;
	try {
		if (parseExpression(`({${rawKey}: 1})`).properties[0].key.type === "Identifier") return rawKey;
	} catch {}
	return JSON.stringify(rawKey);
}

//#endregion
//#region src/walk.ts
/**
* Walks the AST and applies the provided handlers.
*
* @template T - The type of the AST node.
* @param {T} node - The root node of the AST.
* @param {WalkHandlers<T, void>} hooks - The handlers to be applied during the walk.
* @returns {T | null} - The modified AST node or null if the node is removed.
*/
const walkAST = walk;
/**
* Asynchronously walks the AST starting from the given node,
* applying the provided handlers to each node encountered.
*
* @template T - The type of the AST node.
* @param {T} node - The root node of the AST.
* @param {WalkHandlers<T, Promise<void>>} handlers - The handlers to be applied to each node.
* @returns {Promise<T | null>} - A promise that resolves to the modified AST or null if the AST is empty.
*/
const walkASTAsync = asyncWalk;
/**
* Walks through an ImportDeclaration node and populates the provided imports object.
*
* @param imports - The object to store the import bindings.
* @param node - The ImportDeclaration node to walk through.
*/
function walkImportDeclaration(imports, node) {
	if (node.importKind === "type") return;
	const source = node.source.value;
	for (const specifier of node.specifiers) {
		const isType = specifier.type === "ImportSpecifier" && specifier.importKind === "type";
		const local = specifier.local.name;
		imports[local] = {
			source,
			local,
			imported: specifier.type === "ImportSpecifier" ? resolveString(specifier.imported) : specifier.type === "ImportNamespaceSpecifier" ? "*" : "default",
			specifier,
			isType
		};
	}
}
/**
* Walks through an ExportDeclaration node and populates the exports object with the relevant information.
* @param exports - The object to store the export information.
* @param node - The ExportDeclaration node to process.
*/
function walkExportDeclaration(exports, node) {
	let local;
	let exported;
	let isType;
	let source;
	let specifier;
	let declaration;
	function setExport() {
		exports[exported] = {
			source,
			local,
			exported,
			specifier,
			isType,
			declaration
		};
	}
	if (node.type === "ExportNamedDeclaration") {
		if (node.specifiers.length) for (const s of node.specifiers) {
			const isExportSpecifier = s.type === "ExportSpecifier";
			isType = node.exportKind === "type" || isExportSpecifier && s.exportKind === "type";
			local = isExportSpecifier ? s.local.name : s.type === "ExportNamespaceSpecifier" ? "*" : "default";
			source = node.source ? node.source.value : null;
			exported = isExportSpecifier ? resolveString(s.exported) : s.exported.name;
			declaration = null;
			specifier = s;
			setExport();
		}
		else if (!node.specifiers.length && node.declaration) {
			/* v8 ignore else */
			if (node.declaration.type === "VariableDeclaration") for (const decl of node.declaration.declarations) {
				/* v8 ignore if */
				if (decl.id.type !== "Identifier") continue;
				local = resolveString(decl.id);
				source = null;
				exported = local;
				isType = node.exportKind === "type";
				declaration = node.declaration;
				specifier = null;
				setExport();
			}
			else if ("id" in node.declaration && node.declaration.id && node.declaration.id.type === "Identifier") {
				local = resolveString(node.declaration.id);
				source = null;
				exported = local;
				isType = node.exportKind === "type";
				declaration = node.declaration;
				specifier = null;
				setExport();
			}
		}
		return;
	} else if (node.type === "ExportDefaultDeclaration") {
		if (isExpressionType(node.declaration)) local = "name" in node.declaration ? node.declaration.name : "default";
		else local = resolveString(node.declaration.id || "default");
		source = null;
		exported = "default";
		isType = false;
		declaration = node.declaration;
		specifier = null;
	} else {
		local = "*";
		source = resolveString(node.source);
		exported = "*";
		isType = node.exportKind === "type";
		specifier = null;
		declaration = null;
	}
	setExport();
}
/**
* Modified from https://github.com/vuejs/core/blob/main/packages/compiler-core/src/babelUtils.ts
* To support browser environments and JSX.
*
* https://github.com/vuejs/core/blob/main/LICENSE
*/
/**
* Return value indicates whether the AST walked can be a constant
*/
function walkIdentifiers(root, onIdentifier, includeAll = false, parentStack = [], knownIds = Object.create(null)) {
	const rootExp = root.type === "Program" ? root.body[0].type === "ExpressionStatement" && root.body[0].expression : root;
	walkAST(root, {
		enter(node, parent) {
			parent && parentStack.push(parent);
			if (parent && parent.type.startsWith("TS") && !TS_NODE_TYPES.includes(parent.type)) return this.skip();
			if (isIdentifier(node)) {
				const isLocal = !!knownIds[node.name];
				const isRefed = isReferencedIdentifier(node, parent, parentStack);
				if (includeAll || isRefed && !isLocal) onIdentifier(node, parent, parentStack, isRefed, isLocal);
			} else if (node.type === "ObjectProperty" && parent?.type === "ObjectPattern") node.inPattern = true;
			else if (isFunctionType(node))
 /* v8 ignore if */
			if (node.scopeIds) node.scopeIds.forEach((id) => markKnownIds(id, knownIds));
			else walkFunctionParams(node, (id) => markScopeIdentifier(node, id, knownIds));
			else if (node.type === "BlockStatement")
 /* v8 ignore if */
			if (node.scopeIds) node.scopeIds.forEach((id) => markKnownIds(id, knownIds));
			else walkBlockDeclarations(node, (id) => markScopeIdentifier(node, id, knownIds));
			else if (node.type === "CatchClause" && node.param) for (const id of extractIdentifiers(node.param)) markScopeIdentifier(node, id, knownIds);
			else if (isForStatement(node)) walkForStatement(node, false, (id) => markScopeIdentifier(node, id, knownIds));
		},
		leave(node, parent) {
			parent && parentStack.pop();
			if (node !== rootExp && node.scopeIds) for (const id of node.scopeIds) {
				knownIds[id]--;
				if (knownIds[id] === 0) delete knownIds[id];
			}
		}
	});
}
function walkFunctionParams(node, onIdent) {
	for (const p of node.params) for (const id of extractIdentifiers(p)) onIdent(id);
}
function walkBlockDeclarations(block, onIdent) {
	for (const stmt of block.body) if (stmt.type === "VariableDeclaration") {
		if (stmt.declare) continue;
		for (const decl of stmt.declarations) for (const id of extractIdentifiers(decl.id)) onIdent(id);
	} else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
		/* v8 ignore if */
		if (stmt.declare || !stmt.id) continue;
		onIdent(stmt.id);
	} else if (isForStatement(stmt)) walkForStatement(stmt, true, onIdent);
}
function walkForStatement(stmt, isVar, onIdent) {
	const variable = stmt.type === "ForStatement" ? stmt.init : stmt.left;
	if (variable && variable.type === "VariableDeclaration" && (variable.kind === "var" ? isVar : !isVar)) for (const decl of variable.declarations) for (const id of extractIdentifiers(decl.id)) onIdent(id);
}
function markKnownIds(name, knownIds) {
	if (name in knownIds) knownIds[name]++;
	else knownIds[name] = 1;
}
function markScopeIdentifier(node, child, knownIds) {
	const { name } = child;
	/* v8 ignore if */
	if (node.scopeIds && node.scopeIds.has(name)) return;
	markKnownIds(name, knownIds);
	(node.scopeIds || (node.scopeIds = /* @__PURE__ */ new Set())).add(name);
}

//#endregion
//#region src/scope.ts
/* v8 ignore file */
const extractors = {
	ArrayPattern(names, param) {
		for (const element of param.elements) if (element) extractors[element.type](names, element);
	},
	AssignmentPattern(names, param) {
		extractors[param.left.type](names, param.left);
	},
	Identifier(names, param) {
		names.push(param.name);
	},
	MemberExpression() {},
	ObjectPattern(names, param) {
		for (const prop of param.properties) if (prop.type === "RestElement") extractors.RestElement(names, prop);
		else extractors[prop.value.type](names, prop.value);
	},
	RestElement(names, param) {
		extractors[param.argument.type](names, param.argument);
	}
};
function extractAssignedNames(param) {
	const names = [];
	extractors[param.type](names, param);
	return names;
}
const blockDeclarations = {
	const: true,
	let: true
};
/**
* Represents a scope.
*/
var Scope = class {
	parent;
	isBlockScope;
	declarations;
	constructor(options = {}) {
		this.parent = options.parent;
		this.isBlockScope = !!options.block;
		this.declarations = Object.create(null);
		if (options.params) options.params.forEach((param) => {
			extractAssignedNames(param).forEach((name) => {
				this.declarations[name] = true;
			});
		});
	}
	addDeclaration(node, isBlockDeclaration, isVar) {
		if (!isBlockDeclaration && this.isBlockScope) this.parent.addDeclaration(node, isBlockDeclaration, isVar);
		else if (node.id) extractAssignedNames(node.id).forEach((name) => {
			this.declarations[name] = true;
		});
	}
	contains(name) {
		return this.declarations[name] || (this.parent ? this.parent.contains(name) : false);
	}
};
/**
* Attaches scopes to the given AST
*
* @param ast - The AST to attach scopes to.
* @param propertyName - The name of the property to attach the scopes to. Default is 'scope'.
* @returns The root scope of the AST.
*/
function attachScopes(ast, propertyName = "scope") {
	let scope = new Scope();
	walkAST(ast, {
		enter(node, parent) {
			if (/(?:Function|Class)Declaration/.test(node.type)) scope.addDeclaration(node, false, false);
			if (node.type === "VariableDeclaration") {
				const { kind } = node;
				const isBlockDeclaration = blockDeclarations[kind];
				node.declarations.forEach((declaration) => {
					scope.addDeclaration(declaration, isBlockDeclaration, true);
				});
			}
			let newScope;
			if (/Function/.test(node.type)) {
				const func = node;
				newScope = new Scope({
					parent: scope,
					block: false,
					params: func.params
				});
				if (func.type === "FunctionExpression" && func.id) newScope.addDeclaration(func, false, false);
			}
			if (/For(?:In|Of)?Statement/.test(node.type)) newScope = new Scope({
				parent: scope,
				block: true
			});
			if (node.type === "BlockStatement" && !/Function/.test(parent.type)) newScope = new Scope({
				parent: scope,
				block: true
			});
			if (node.type === "CatchClause") newScope = new Scope({
				parent: scope,
				params: node.param ? [node.param] : [],
				block: true
			});
			if (newScope) {
				Object.defineProperty(node, propertyName, {
					value: newScope,
					configurable: true
				});
				scope = newScope;
			}
		},
		leave(node) {
			if (node[propertyName]) scope = scope.parent;
		}
	});
	return scope;
}

//#endregion
export { REGEX_DTS, REGEX_LANG_JSX, REGEX_LANG_TS, Scope, TS_NODE_TYPES, attachScopes, babelParse, babelParseExpression, parse as babelParseFile, createStringLiteral, createTSLiteralType, createTSUnionType, escapeKey, extractIdentifiers, getBabelParserOptions, getLang, isCallOf, isDeclarationType, isDts, isExpressionType, isForStatement, isFunctionType, isIdentifier, isIdentifierOf, isInDestructureAssignment, isInNewExpression, isLiteralType, isReferenced, isReferencedIdentifier, isStaticProperty, isStaticPropertyKey, isTaggedFunctionCallOf, isTs, isTypeOf, locateTrailingComma, parseCache, resolveIdentifier, resolveLiteral, resolveObjectKey, resolveString, resolveTemplateLiteral, tryResolveIdentifier, unwrapTSNode, walkAST, walkASTAsync, walkBlockDeclarations, walkExportDeclaration, walkFunctionParams, walkIdentifiers, walkImportDeclaration };