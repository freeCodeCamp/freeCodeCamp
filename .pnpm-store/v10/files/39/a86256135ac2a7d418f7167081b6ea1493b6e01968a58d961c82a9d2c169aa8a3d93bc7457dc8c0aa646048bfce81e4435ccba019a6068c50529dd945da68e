import { createRequire as __cjs_createRequire } from "node:module";
const __cjs_require = __cjs_createRequire(import.meta.url);
import { a as RE_JSON, c as RE_TS, d as filename_js_to_dts, f as filename_to_dts, i as RE_JS, l as RE_VUE, m as resolveTemplateFn, n as RE_DTS, o as RE_NODE_MODULES, p as replaceTemplateName, r as RE_DTS_MAP, s as RE_ROLLDOWN_RUNTIME, t as RE_CSS, u as filename_dts_to } from "./filename-DQnUJlio.mjs";
import { createContext, globalContext, invalidateContextFile } from "./tsc-context.mjs";
import { createDebug } from "obug";
import { importerId, include } from "rolldown/filter";
import { generate } from "@babel/generator";
import { isIdentifierName } from "@babel/helper-validator-identifier";
import { parse } from "@babel/parser";
import * as t from "@babel/types";
import { isDeclarationType, isIdentifierOf, isTypeOf, resolveString, walkAST } from "ast-kit";
import { fork, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import path from "node:path";
const picomatch = __cjs_require("picomatch");
import { ResolverFactory, isolatedDeclarationSync } from "rolldown/experimental";
import { tmpdir } from "node:os";
import process from "node:process";
import { getTsconfig, parseTsconfig } from "get-tsconfig";
import { createResolver } from "dts-resolver";
//#region src/dts-input.ts
function createDtsInputPlugin({ sideEffects }) {
	return {
		name: "rolldown-plugin-dts:dts-input",
		options: sideEffects === false ? (options) => {
			return {
				treeshake: options.treeshake === false ? false : {
					...options.treeshake === true ? {} : options.treeshake,
					moduleSideEffects: false
				},
				...options
			};
		} : void 0,
		outputOptions(options) {
			return {
				...options,
				entryFileNames(chunk) {
					const { entryFileNames } = options;
					if (entryFileNames) {
						const nameTemplate = resolveTemplateFn(entryFileNames, chunk);
						const renderedName = replaceTemplateName(nameTemplate, chunk.name);
						if (RE_DTS.test(renderedName)) return nameTemplate;
						const renderedNameWithD = replaceTemplateName(nameTemplate, `${chunk.name}.d`);
						if (RE_DTS.test(renderedNameWithD)) return renderedNameWithD;
					}
					if (RE_DTS.test(chunk.name)) return chunk.name;
					if (chunk.name.endsWith(".d")) return "[name].ts";
					return "[name].d.ts";
				}
			};
		}
	};
}
//#endregion
//#region src/fake-js.ts
function createFakeJsPlugin({ sourcemap, cjsDefault, sideEffects }) {
	let declarationIdx = 0;
	const declarationMap = /* @__PURE__ */ new Map();
	const commentsMap = /* @__PURE__ */ new Map();
	const typeOnlyMap = /* @__PURE__ */ new Map();
	return {
		name: "rolldown-plugin-dts:fake-js",
		outputOptions(options) {
			if (options.format === "cjs" || options.format === "commonjs") throw new Error("[rolldown-plugin-dts] Cannot bundle dts files with `cjs` format.");
			const { chunkFileNames, entryFileNames } = options;
			return {
				...options,
				sourcemap: options.sourcemap || sourcemap,
				chunkFileNames(chunk) {
					const nameTemplate = resolveTemplateFn(chunk.isEntry ? entryFileNames || "[name].js" : chunkFileNames || "[name]-[hash].js", chunk);
					if (chunk.name.endsWith(".d")) {
						const renderedNameWithoutD = filename_js_to_dts(replaceTemplateName(nameTemplate, chunk.name.slice(0, -2)));
						if (RE_DTS.test(renderedNameWithoutD)) return renderedNameWithoutD;
						const renderedName = filename_js_to_dts(replaceTemplateName(nameTemplate, chunk.name));
						if (RE_DTS.test(renderedName)) return renderedName;
					}
					return nameTemplate;
				}
			};
		},
		transform: {
			filter: { id: RE_DTS },
			handler: transform
		},
		renderChunk,
		generateBundle(options, bundle) {
			for (const chunk of Object.values(bundle)) {
				if (!RE_DTS_MAP.test(chunk.fileName)) continue;
				if (sourcemap) {
					if (chunk.type === "chunk" || typeof chunk.source !== "string") continue;
					const map = JSON.parse(chunk.source);
					map.sourcesContent = void 0;
					chunk.source = JSON.stringify(map);
				} else delete bundle[chunk.fileName];
			}
		}
	};
	function transform(code, id) {
		let file;
		try {
			file = parse(code, {
				plugins: [["typescript", { dts: true }], "decoratorAutoAccessors"],
				sourceType: "module",
				errorRecovery: true,
				createParenthesizedExpressions: true
			});
		} catch (error) {
			throw new Error(`Failed to parse ${id}. This may be caused by a syntax error in the declaration file or a bug in the plugin. Please report this issue to https://github.com/sxzz/rolldown-plugin-dts\n${error}`, { cause: error });
		}
		const { program, comments } = file;
		const typeOnlyIds = [];
		const identifierMap = Object.create(null);
		if (comments) {
			const directives = collectReferenceDirectives(comments);
			commentsMap.set(id, directives);
		}
		const appendStmts = [];
		const namespaceStmts = /* @__PURE__ */ new Map();
		for (const [i, stmt] of program.body.entries()) {
			const setStmt = (stmt) => program.body[i] = stmt;
			if (rewriteImportExport(stmt, setStmt, typeOnlyIds)) continue;
			const sideEffect = stmt.type === "TSModuleDeclaration" && stmt.kind !== "namespace";
			if (sideEffect && stmt.id.type === "StringLiteral" && stmt.id.value[0] === ".") this.warn(`\`declare module ${JSON.stringify(stmt.id.value)}\` will be kept as-is in the output. Relative module declaration may cause unexpected issues. Found in ${id}.`);
			if (sideEffect && id.endsWith(".vue.d.ts") && code.slice(stmt.start, stmt.end).includes("__VLS_")) continue;
			const isDefaultExport = stmt.type === "ExportDefaultDeclaration";
			const isExportDecl = isTypeOf(stmt, ["ExportNamedDeclaration", "ExportDefaultDeclaration"]) && !!stmt.declaration;
			const decl = isExportDecl ? stmt.declaration : stmt;
			const setDecl = isExportDecl ? (decl) => stmt.declaration = decl : setStmt;
			if (decl.type !== "TSDeclareFunction" && !isDeclarationType(decl)) continue;
			if (isTypeOf(decl, [
				"TSEnumDeclaration",
				"ClassDeclaration",
				"FunctionDeclaration",
				"TSDeclareFunction",
				"TSModuleDeclaration",
				"VariableDeclaration"
			])) decl.declare = true;
			const bindings = [];
			if (decl.type === "VariableDeclaration") bindings.push(...decl.declarations.map((decl) => decl.id));
			else if ("id" in decl && decl.id) {
				let binding = decl.id;
				if (binding.type === "TSQualifiedName") binding = getIdFromTSEntityName(binding);
				binding = sideEffect ? t.identifier(`_${getIdentifierIndex(identifierMap, "")}`) : binding;
				if (binding.type !== "Identifier") throw new Error(`Unexpected ${binding.type} declaration id`);
				bindings.push(binding);
			} else {
				const binding = t.identifier("export_default");
				bindings.push(binding);
				decl.id = binding;
			}
			const params = collectParams(decl);
			const childrenSet = /* @__PURE__ */ new Set();
			const deps = collectDependencies(decl, namespaceStmts, childrenSet, identifierMap);
			const children = Array.from(childrenSet).filter((child) => bindings.every((b) => child !== b));
			if (decl !== stmt) decl.leadingComments = stmt.leadingComments;
			const declarationId = registerDeclaration({
				decl,
				deps,
				bindings,
				params,
				children
			});
			const declarationIdNode = t.numericLiteral(declarationId);
			const depsNode = t.arrowFunctionExpression(params.map(({ name }) => t.identifier(name)), t.arrayExpression(deps));
			const childrenNode = t.arrayExpression(children.map((node) => ({
				type: "StringLiteral",
				value: "",
				start: node.start,
				end: node.end,
				loc: node.loc
			})));
			const sideEffectNode = sideEffect && t.callExpression(t.identifier("sideEffect"), [bindings[0]]);
			const runtimeArrayNode = runtimeBindingArrayExpression([
				declarationIdNode,
				depsNode,
				childrenNode,
				...sideEffectNode ? [sideEffectNode] : []
			]);
			const runtimeAssignment = {
				type: "VariableDeclaration",
				kind: "var",
				declarations: [{
					type: "VariableDeclarator",
					id: {
						...bindings[0],
						typeAnnotation: null
					},
					init: runtimeArrayNode
				}, ...bindings.slice(1).map((binding) => ({
					type: "VariableDeclarator",
					id: {
						...binding,
						typeAnnotation: null
					}
				}))]
			};
			if (isDefaultExport) {
				appendStmts.push(t.exportNamedDeclaration(null, [t.exportSpecifier(bindings[0], t.identifier("default"))]));
				setStmt(runtimeAssignment);
			} else setDecl(runtimeAssignment);
		}
		if (sideEffects) appendStmts.push(t.expressionStatement(t.callExpression(t.identifier("sideEffect"), [])));
		program.body = [
			...Array.from(namespaceStmts.values()).map(({ stmt }) => stmt),
			...program.body,
			...appendStmts
		];
		typeOnlyMap.set(id, typeOnlyIds);
		const result = generate(file, {
			comments: false,
			sourceMaps: sourcemap,
			sourceFileName: id
		});
		return {
			code: result.code,
			map: result.map
		};
	}
	function renderChunk(code, chunk) {
		if (!RE_DTS.test(chunk.fileName)) return;
		const typeOnlyIds = [];
		for (const module of chunk.moduleIds) {
			const ids = typeOnlyMap.get(module);
			if (ids) typeOnlyIds.push(...ids);
		}
		let file;
		try {
			file = parse(code, { sourceType: "module" });
		} catch (error) {
			throw new Error(`Failed to parse generated code for chunk ${chunk.fileName}. This may be caused by a bug in the plugin. Please report this issue to https://github.com/sxzz/rolldown-plugin-dts\n${error}`, { cause: error });
		}
		const { program } = file;
		program.body = patchTsNamespace(program.body);
		program.body = patchReExport(program.body);
		program.body = program.body.map((node) => {
			if (isHelperImport(node)) return null;
			if (node.type === "ExpressionStatement") return null;
			const newNode = patchImportExport(node, typeOnlyIds, cjsDefault);
			if (newNode || newNode === false) return newNode;
			if (node.type !== "VariableDeclaration") return node;
			if (!isRuntimeBindingVariableDeclaration(node)) return null;
			const [declarationIdNode, depsFn, children] = node.declarations[0].init.elements;
			const declarationId = declarationIdNode.value;
			const declaration = getDeclaration(declarationId);
			walkAST(declaration.decl, { enter(node) {
				if (node.type === "CommentBlock") return;
				delete node.loc;
			} });
			for (const [i, decl] of node.declarations.entries()) {
				const transformedBinding = {
					...decl.id,
					typeAnnotation: declaration.bindings[i].typeAnnotation
				};
				overwriteNode(declaration.bindings[i], transformedBinding);
			}
			for (const [i, child] of children.elements.entries()) Object.assign(declaration.children[i], { loc: child.loc });
			const transformedParams = depsFn.params;
			for (const [i, transformedParam] of transformedParams.entries()) {
				const transformedName = transformedParam.name;
				for (const originalTypeParam of declaration.params[i].typeParams) originalTypeParam.name = transformedName;
			}
			const transformedDeps = depsFn.body.elements;
			for (const [i, originalDep] of declaration.deps.entries()) {
				let transformedDep = transformedDeps[i];
				if (transformedDep.type === "UnaryExpression" && transformedDep.operator === "void") transformedDep = {
					...t.identifier("undefined"),
					loc: transformedDep.loc,
					start: transformedDep.start,
					end: transformedDep.end
				};
				else if (isInfer(transformedDep)) transformedDep.name = "__Infer";
				if (originalDep.replace) originalDep.replace(transformedDep);
				else Object.assign(originalDep, transformedDep);
			}
			return inheritNodeComments(node, declaration.decl);
		}).filter((node) => !!node);
		if (program.body.length === 0) return "export { };";
		const comments = /* @__PURE__ */ new Set();
		const commentsValue = /* @__PURE__ */ new Set();
		for (const id of chunk.moduleIds) {
			const preserveComments = commentsMap.get(id);
			if (preserveComments) {
				preserveComments.forEach((c) => {
					const id = c.type + c.value;
					if (commentsValue.has(id)) return;
					commentsValue.add(id);
					comments.add(c);
				});
				commentsMap.delete(id);
			}
		}
		if (comments.size) {
			program.body[0].leadingComments ||= [];
			program.body[0].leadingComments.unshift(...comments);
		}
		const result = generate(file, {
			sourceMaps: sourcemap,
			sourceFileName: chunk.fileName
		});
		return {
			code: result.code,
			map: result.map
		};
	}
	function getIdentifierIndex(identifierMap, name) {
		if (name in identifierMap) return ++identifierMap[name];
		return identifierMap[name] = 0;
	}
	function registerDeclaration(info) {
		const declarationId = declarationIdx++;
		declarationMap.set(declarationId, info);
		return declarationId;
	}
	function getDeclaration(declarationId) {
		return declarationMap.get(declarationId);
	}
	/**
	* Collects all TSTypeParameter nodes from the given node and groups them by
	* their name. One name can associate with one or more type parameters. These
	* names will be used as the parameter name in the generated JavaScript
	* dependency function.
	*/
	function collectParams(node) {
		const typeParams = [];
		walkAST(node, { leave(node) {
			if ("typeParameters" in node && node.typeParameters?.type === "TSTypeParameterDeclaration") typeParams.push(...node.typeParameters.params.map(({ name }) => typeof name === "string" ? t.identifier(name) : name));
		} });
		const paramMap = /* @__PURE__ */ new Map();
		for (const typeParam of typeParams) {
			const name = typeParam.name;
			const group = paramMap.get(name);
			if (group) group.push(typeParam);
			else paramMap.set(name, [typeParam]);
		}
		return Array.from(paramMap.entries()).map(([name, typeParams]) => ({
			name,
			typeParams
		}));
	}
	function collectDependencies(node, namespaceStmts, children, identifierMap) {
		const deps = /* @__PURE__ */ new Set();
		const seen = /* @__PURE__ */ new Set();
		const inferredStack = [];
		let currentInferred = /* @__PURE__ */ new Set();
		function isInferred(node) {
			return node.type === "Identifier" && currentInferred.has(node.name);
		}
		walkAST(node, {
			enter(node) {
				if (node.type === "TSConditionalType") {
					const inferred = collectInferredNames(node.extendsType);
					inferredStack.push(inferred);
				}
			},
			leave(node, parent) {
				if (node.type === "TSConditionalType") inferredStack.pop();
				else if (parent?.type === "TSConditionalType") {
					const trueBranch = parent.trueType === node;
					currentInferred = new Set((trueBranch ? inferredStack : inferredStack.slice(0, -1)).flat());
				} else currentInferred = /* @__PURE__ */ new Set();
				if (node.type === "ExportNamedDeclaration") {
					for (const specifier of node.specifiers) if (specifier.type === "ExportSpecifier") addDependency(specifier.local);
				} else if (node.type === "TSInterfaceDeclaration" && node.extends) for (const heritage of node.extends || []) addDependency(heritage.expression);
				else if (node.type === "ClassDeclaration") {
					if (node.superClass) addDependency(node.superClass);
					if (node.implements) for (const implement of node.implements) {
						if (implement.type === "ClassImplements") throw new Error("Unexpected Flow syntax");
						addDependency(implement.expression);
					}
				} else if (isTypeOf(node, [
					"ObjectMethod",
					"ObjectProperty",
					"ClassProperty",
					"TSPropertySignature",
					"TSDeclareMethod"
				])) {
					if (node.computed && isReferenceId(node.key)) addDependency(node.key);
					if ("value" in node && isReferenceId(node.value)) addDependency(node.value);
				} else switch (node.type) {
					case "TSTypeReference":
						addDependency(TSEntityNameToRuntime(node.typeName));
						break;
					case "TSTypeQuery":
						if (seen.has(node.exprName)) return;
						if (node.exprName.type === "TSImportType") break;
						addDependency(TSEntityNameToRuntime(node.exprName));
						break;
					case "TSImportType": {
						seen.add(node);
						const { source, qualifier } = node;
						addDependency(importNamespace(node, qualifier, source, namespaceStmts, identifierMap));
						break;
					}
				}
				if (parent && !deps.has(node) && isChildSymbol(node, parent)) children.add(node);
			}
		});
		return Array.from(deps);
		function addDependency(node) {
			if (isThisExpression(node) || isInferred(node)) return;
			deps.add(node);
		}
	}
	function importNamespace(node, imported, source, namespaceStmts, identifierMap) {
		const sourceText = source.value.replaceAll(/\W/g, "_");
		const localName = `_$${isIdentifierName(source.value) ? source.value : `${sourceText}${getIdentifierIndex(identifierMap, sourceText)}`}`;
		let local = t.identifier(localName);
		if (namespaceStmts.has(source.value)) local = namespaceStmts.get(source.value).local;
		else namespaceStmts.set(source.value, {
			stmt: t.importDeclaration([t.importNamespaceSpecifier(local)], source),
			local
		});
		if (imported) {
			const importedLeft = getIdFromTSEntityName(imported);
			if (imported.type === "ThisExpression" || importedLeft.type === "ThisExpression") throw new Error("Cannot import `this` from module.");
			overwriteNode(importedLeft, t.tsQualifiedName(local, { ...importedLeft }));
			local = imported;
		}
		let replacement = node;
		if (node.typeArguments) {
			overwriteNode(node, t.tsTypeReference(local, node.typeArguments));
			replacement = local;
		} else overwriteNode(node, local);
		return {
			...TSEntityNameToRuntime(local),
			replace(newNode) {
				overwriteNode(replacement, newNode);
			}
		};
	}
}
function isChildSymbol(node, parent) {
	if (node.type === "Identifier") return true;
	if (isTypeOf(parent, ["TSPropertySignature", "TSMethodSignature"]) && parent.key === node) return true;
	return false;
}
function collectInferredNames(node) {
	const inferred = [];
	walkAST(node, { enter(node) {
		if (node.type === "TSInferType" && node.typeParameter) inferred.push(node.typeParameter.name.name);
	} });
	return inferred;
}
const REFERENCE_RE = /\/\s*<reference\s+(?:path|types)=/;
function collectReferenceDirectives(comment, negative = false) {
	return comment.filter((c) => REFERENCE_RE.test(c.value) !== negative);
}
/**
* Check if the given node is a {@link RuntimeBindingVariableDeclration}
*/
function isRuntimeBindingVariableDeclaration(node) {
	return node?.type === "VariableDeclaration" && node.declarations.length > 0 && node.declarations[0].type === "VariableDeclarator" && isRuntimeBindingArrayExpression(node.declarations[0].init);
}
/**
* Check if the given node is a {@link RuntimeBindingArrayExpression}
*/
function isRuntimeBindingArrayExpression(node) {
	return node?.type === "ArrayExpression" && isRuntimeBindingArrayElements(node.elements);
}
/**
* Check if the given array is a {@link RuntimeBindingArrayElements}
*/
function isRuntimeBindingArrayElements(elements) {
	const [declarationId, deps, children, effect] = elements;
	return declarationId?.type === "NumericLiteral" && deps?.type === "ArrowFunctionExpression" && children?.type === "ArrayExpression" && (!effect || effect.type === "CallExpression");
}
function runtimeBindingArrayExpression(elements) {
	return t.arrayExpression(elements);
}
function isThisExpression(node) {
	return isIdentifierOf(node, "this") || node.type === "ThisExpression" || node.type === "MemberExpression" && isThisExpression(node.object);
}
function isInfer(node) {
	return isIdentifierOf(node, "infer");
}
function TSEntityNameToRuntime(node) {
	if (node.type === "Identifier" || node.type === "ThisExpression") return node;
	const left = TSEntityNameToRuntime(node.left);
	return Object.assign(node, t.memberExpression(left, node.right));
}
function getIdFromTSEntityName(node) {
	if (node.type === "Identifier" || node.type === "ThisExpression") return node;
	return getIdFromTSEntityName(node.left);
}
function isReferenceId(node) {
	return isTypeOf(node, ["Identifier", "MemberExpression"]);
}
function isHelperImport(node) {
	return node.type === "ImportDeclaration" && node.specifiers.every((spec) => spec.type === "ImportSpecifier" && spec.imported.type === "Identifier" && ["__exportAll", "__reExport"].includes(spec.local.name));
}
/**
* patch `.d.ts` suffix in import source to `.js`
*/
function patchImportExport(node, typeOnlyIds, cjsDefault) {
	if (node.type === "ExportNamedDeclaration" && !node.declaration && !node.source && !node.specifiers.length && !node.attributes?.length) return false;
	if (node.type === "ImportDeclaration" && node.specifiers.length) {
		for (const specifier of node.specifiers) if (isInfer(specifier.local)) specifier.local.name = "__Infer";
	}
	if (isTypeOf(node, [
		"ImportDeclaration",
		"ExportAllDeclaration",
		"ExportNamedDeclaration"
	])) {
		if (node.type === "ExportNamedDeclaration" && typeOnlyIds.length) for (const spec of node.specifiers) {
			const name = resolveString(spec.exported);
			if (typeOnlyIds.includes(name)) if (spec.type === "ExportSpecifier") spec.exportKind = "type";
			else node.exportKind = "type";
		}
		if (node.source?.value && RE_DTS.test(node.source.value)) {
			node.source.value = filename_dts_to(node.source.value, "js");
			return node;
		}
		if (cjsDefault && node.type === "ExportNamedDeclaration" && !node.source && node.specifiers.length === 1 && node.specifiers[0].type === "ExportSpecifier" && resolveString(node.specifiers[0].exported) === "default") return {
			type: "TSExportAssignment",
			expression: node.specifiers[0].local
		};
	}
}
/**
* Handle `__exportAll` call
*/
function patchTsNamespace(nodes) {
	const removed = /* @__PURE__ */ new Set();
	for (const [i, node] of nodes.entries()) {
		const result = handleExport(node);
		if (!result) continue;
		const [binding, exports] = result;
		if (!exports.properties.length) continue;
		nodes[i] = {
			type: "TSModuleDeclaration",
			id: binding,
			kind: "namespace",
			declare: true,
			body: {
				type: "TSModuleBlock",
				body: [{
					type: "ExportNamedDeclaration",
					specifiers: exports.properties.filter((property) => property.type === "ObjectProperty").map((property) => {
						const local = property.value.body;
						const exported = property.key;
						return t.exportSpecifier(local, exported);
					}),
					source: null,
					declaration: null
				}]
			}
		};
	}
	return nodes.filter((node) => !removed.has(node));
	function handleExport(node) {
		if (node.type !== "VariableDeclaration" || node.declarations.length !== 1 || node.declarations[0].id.type !== "Identifier" || node.declarations[0].init?.type !== "CallExpression" || node.declarations[0].init.callee.type !== "Identifier" || node.declarations[0].init.callee.name !== "__exportAll" || node.declarations[0].init.arguments.length !== 1 || node.declarations[0].init.arguments[0].type !== "ObjectExpression") return false;
		return [node.declarations[0].id, node.declarations[0].init.arguments[0]];
	}
}
/**
* Handle `__reExport` call
*/
function patchReExport(nodes) {
	const exportsNames = /* @__PURE__ */ new Map();
	for (const [i, node] of nodes.entries()) if (node.type === "ImportDeclaration" && node.specifiers.length === 1 && node.specifiers[0].type === "ImportSpecifier" && node.specifiers[0].local.type === "Identifier" && node.specifiers[0].local.name.endsWith("_exports")) exportsNames.set(node.specifiers[0].local.name, node.specifiers[0].local.name);
	else if (node.type === "ExpressionStatement" && node.expression.type === "CallExpression" && isIdentifierOf(node.expression.callee, "__reExport")) {
		const args = node.expression.arguments;
		exportsNames.set(args[0].name, args[1].name);
	} else if (node.type === "VariableDeclaration" && node.declarations.length === 1 && node.declarations[0].init?.type === "MemberExpression" && node.declarations[0].init.object.type === "Identifier" && exportsNames.has(node.declarations[0].init.object.name)) nodes[i] = {
		type: "TSTypeAliasDeclaration",
		id: {
			type: "Identifier",
			name: node.declarations[0].id.name
		},
		typeAnnotation: {
			type: "TSTypeReference",
			typeName: {
				type: "TSQualifiedName",
				left: {
					type: "Identifier",
					name: exportsNames.get(node.declarations[0].init.object.name)
				},
				right: {
					type: "Identifier",
					name: node.declarations[0].init.property.name
				}
			}
		}
	};
	else if (node.type === "ExportNamedDeclaration" && node.specifiers.length === 1 && node.specifiers[0].type === "ExportSpecifier" && node.specifiers[0].local.type === "Identifier" && exportsNames.has(node.specifiers[0].local.name)) node.specifiers[0].local.name = exportsNames.get(node.specifiers[0].local.name);
	return nodes;
}
function rewriteImportExport(node, set, typeOnlyIds) {
	if (node.type === "ImportDeclaration" || node.type === "ExportNamedDeclaration" && !node.declaration) {
		for (const specifier of node.specifiers) {
			if ("exportKind" in specifier && specifier.exportKind === "type" || "exportKind" in node && node.exportKind === "type") typeOnlyIds.push(resolveString(specifier.exported));
			if (specifier.type === "ImportSpecifier") specifier.importKind = "value";
			else if (specifier.type === "ExportSpecifier") specifier.exportKind = "value";
		}
		if (node.type === "ImportDeclaration") node.importKind = "value";
		else if (node.type === "ExportNamedDeclaration") node.exportKind = "value";
		return true;
	} else if (node.type === "ExportAllDeclaration") {
		node.exportKind = "value";
		return true;
	} else if (node.type === "TSImportEqualsDeclaration") {
		if (node.moduleReference.type === "TSExternalModuleReference") set({
			type: "ImportDeclaration",
			specifiers: [{
				type: "ImportDefaultSpecifier",
				local: node.id
			}],
			source: node.moduleReference.expression
		});
		return true;
	} else if (node.type === "TSExportAssignment" && node.expression.type === "Identifier") {
		set({
			type: "ExportNamedDeclaration",
			specifiers: [{
				type: "ExportSpecifier",
				local: node.expression,
				exported: {
					type: "Identifier",
					name: "default"
				}
			}]
		});
		return true;
	} else if (node.type === "ExportDefaultDeclaration" && node.declaration.type === "Identifier") {
		set({
			type: "ExportNamedDeclaration",
			specifiers: [{
				type: "ExportSpecifier",
				local: node.declaration,
				exported: t.identifier("default")
			}]
		});
		return true;
	}
	return false;
}
function overwriteNode(node, newNode) {
	for (const key of Object.keys(node)) delete node[key];
	Object.assign(node, newNode);
	return node;
}
function inheritNodeComments(oldNode, newNode) {
	newNode.leadingComments ||= [];
	const leadingComments = oldNode.leadingComments?.filter((comment) => comment.value.startsWith("#"));
	if (leadingComments) newNode.leadingComments.unshift(...leadingComments);
	newNode.leadingComments = collectReferenceDirectives(newNode.leadingComments, true);
	return newNode;
}
//#endregion
//#region src/tsgo.ts
const debug$3 = createDebug("rolldown-plugin-dts:tsgo");
const spawnAsync = (...args) => new Promise((resolve, reject) => {
	const child = spawn(...args);
	child.on("close", () => resolve());
	child.on("error", (error) => reject(error));
});
async function getTsgoPathFromNodeModules() {
	const tsgoPkg = import.meta.resolve("@typescript/native-preview/package.json");
	const { default: getExePath } = await import(new URL("lib/getExePath.js", tsgoPkg).href);
	return getExePath();
}
async function runTsgo(rootDir, tsconfig, sourcemap, tsgoPath) {
	debug$3("[tsgo] rootDir", rootDir);
	let tsgo;
	if (tsgoPath) {
		tsgo = tsgoPath;
		debug$3("[tsgo] using custom path", tsgo);
	} else {
		tsgo = await getTsgoPathFromNodeModules();
		debug$3("[tsgo] using tsgo from node_modules", tsgo);
	}
	const tsgoDist = await mkdtemp(path.join(tmpdir(), "rolldown-plugin-dts-"));
	debug$3("[tsgo] tsgoDist", tsgoDist);
	const args = [
		"--noEmit",
		"false",
		"--declaration",
		"--emitDeclarationOnly",
		...tsconfig ? ["-p", tsconfig] : [],
		"--outDir",
		tsgoDist,
		"--rootDir",
		rootDir,
		"--noCheck",
		...sourcemap ? ["--declarationMap"] : []
	];
	debug$3("[tsgo] args %o", args);
	await spawnAsync(tsgo, args, { stdio: "inherit" });
	return tsgoDist;
}
//#endregion
//#region src/generate.ts
const debug$2 = createDebug("rolldown-plugin-dts:generate");
const WORKER_URL = "./tsc-worker.mjs";
function createGeneratePlugin({ entry, tsconfig, tsconfigRaw, build, incremental, cwd, oxc, emitDtsOnly, vue, tsMacro, parallel, eager, tsgo, newContext, emitJs, sourcemap }) {
	const entryMatcher = entry ? picomatch(entry, { ignore: entry.filter((p) => p.startsWith("!")).map((p) => p.slice(1)) }) : void 0;
	const dtsMap = /* @__PURE__ */ new Map();
	/**
	* A map of input id to output file name
	*
	* @example
	*
	* inputAlias = new Map([
	*   ['/absolute/path/to/src/source_file.ts', 'dist/foo/index'],
	* ])
	*/
	const inputAliasMap = /* @__PURE__ */ new Map();
	let childProcess;
	let rpc;
	let tscModule;
	let tscContext;
	let tsgoDist;
	const rootDir = tsconfig ? path.dirname(tsconfig) : cwd;
	return {
		name: "rolldown-plugin-dts:generate",
		async buildStart(options) {
			if (tsgo) tsgoDist = await runTsgo(rootDir, tsconfig, sourcemap, tsgo.path);
			else if (!oxc) if (parallel) {
				childProcess = fork(new URL(WORKER_URL, import.meta.url), { stdio: "inherit" });
				rpc = (await import("birpc")).createBirpc({}, {
					post: (data) => childProcess.send(data),
					on: (fn) => childProcess.on("message", fn)
				});
			} else {
				tscModule = await import("./tsc.mjs");
				if (newContext) tscContext = createContext();
			}
			if (!Array.isArray(options.input)) for (const [name, id] of Object.entries(options.input)) {
				debug$2("resolving input alias %s -> %s", name, id);
				let resolved = await this.resolve(id);
				if (!id.startsWith("./")) resolved ||= await this.resolve(`./${id}`);
				const resolvedId = resolved?.id || id;
				debug$2("resolved input alias %s -> %s", id, resolvedId);
				inputAliasMap.set(resolvedId, name);
			}
		},
		outputOptions(options) {
			return {
				...options,
				entryFileNames(chunk) {
					const { entryFileNames } = options;
					const nameTemplate = resolveTemplateFn(entryFileNames || "[name].js", chunk);
					if (chunk.name.endsWith(".d")) {
						if (RE_DTS.test(nameTemplate)) return replaceTemplateName(nameTemplate, chunk.name.slice(0, -2));
						if (RE_JS.test(nameTemplate)) return nameTemplate.replace(RE_JS, ".$1ts");
					}
					return nameTemplate;
				}
			};
		},
		resolveId(id) {
			if (dtsMap.has(id)) {
				debug$2("resolve dts id %s", id);
				return { id };
			}
		},
		transform: {
			order: "pre",
			filter: { id: {
				include: [
					RE_JS,
					RE_TS,
					RE_VUE,
					RE_JSON
				],
				exclude: [
					RE_DTS,
					RE_NODE_MODULES,
					RE_ROLLDOWN_RUNTIME
				]
			} },
			handler(code, id) {
				if (!RE_JS.test(id) || emitJs) {
					const mod = this.getModuleInfo(id);
					const isEntry = entryMatcher ? entryMatcher(path.relative(cwd, id)) : !!mod?.isEntry;
					const dtsId = filename_to_dts(id);
					dtsMap.set(dtsId, {
						code,
						id,
						isEntry
					});
					debug$2("register dts source: %s", id);
					if (isEntry) {
						const name = inputAliasMap.get(id);
						this.emitFile({
							type: "chunk",
							id: dtsId,
							name: name ? `${name}.d` : void 0
						});
					}
				}
				if (emitDtsOnly) {
					if (RE_JSON.test(id)) return "{}";
					return "export { }";
				}
			}
		},
		load: {
			filter: { id: {
				include: [RE_DTS],
				exclude: [RE_NODE_MODULES]
			} },
			async handler(dtsId) {
				if (!dtsMap.has(dtsId)) return;
				const { code, id } = dtsMap.get(dtsId);
				let dtsCode;
				let map;
				debug$2("generate dts %s from %s", dtsId, id);
				if (tsgo) {
					if (RE_VUE.test(id)) throw new Error("tsgo does not support Vue files.");
					const dtsPath = path.resolve(tsgoDist, path.relative(path.resolve(rootDir), filename_to_dts(id)));
					if (!existsSync(dtsPath)) {
						debug$2("[tsgo]", dtsPath, "is missing");
						throw new Error(`tsgo did not generate dts file for ${id}, please check your tsconfig.`);
					}
					dtsCode = await readFile(dtsPath, "utf8");
					const mapPath = `${dtsPath}.map`;
					if (existsSync(mapPath)) {
						const mapRaw = await readFile(mapPath, "utf8");
						map = {
							...JSON.parse(mapRaw),
							sources: [id]
						};
					}
				} else if (oxc && !RE_VUE.test(id)) {
					const result = isolatedDeclarationSync(id, code, oxc);
					if (result.errors.length) {
						const [error] = result.errors;
						return this.error({
							message: error.message,
							frame: error.codeframe || void 0
						});
					}
					dtsCode = result.code;
					if (result.map) {
						map = result.map;
						map.sourcesContent = void 0;
					}
				} else {
					const options = {
						tsconfig,
						tsconfigRaw,
						build,
						incremental,
						cwd,
						entries: eager ? void 0 : Array.from(dtsMap.values()).filter((v) => v.isEntry).map((v) => v.id),
						id,
						sourcemap,
						vue,
						tsMacro,
						context: tscContext
					};
					let result;
					if (parallel) result = await rpc.tscEmit(options);
					else result = tscModule.tscEmit(options);
					if (result.error) return this.error(result.error);
					dtsCode = result.code;
					map = result.map;
					if (dtsCode && RE_JSON.test(id)) if (dtsCode.includes("declare const _exports")) {
						if (dtsCode.includes("declare const _exports: {") && !dtsCode.includes("\n}[];")) {
							const exports = collectJsonExports(dtsCode);
							let i = 0;
							dtsCode += exports.map((e) => {
								const valid = `_${e.replaceAll(/[^\w$]/g, "_")}${i++}`;
								const jsonKey = JSON.stringify(e);
								return `declare let ${valid}: typeof _exports[${jsonKey}]\nexport { ${valid} as ${jsonKey} }`;
							}).join("\n");
						}
					} else {
						const exportMap = collectJsonExportMap(dtsCode);
						dtsCode += `
declare namespace __json_default_export {
  export { ${Array.from(exportMap.entries()).map(([exported, local]) => exported === local ? exported : `${local} as ${exported}`).join(", ")} }
}
export { __json_default_export as default }`;
					}
				}
				return {
					code: dtsCode || "",
					map
				};
			}
		},
		generateBundle: emitDtsOnly ? (options, bundle) => {
			for (const fileName of Object.keys(bundle)) if (bundle[fileName].type === "chunk" && !RE_DTS.test(fileName) && !RE_DTS_MAP.test(fileName)) delete bundle[fileName];
		} : void 0,
		async buildEnd() {
			childProcess?.kill();
			if (!debug$2.enabled && tsgoDist) await rm(tsgoDist, {
				recursive: true,
				force: true
			}).catch(() => {});
			tsgoDist = void 0;
			if (newContext) tscContext = void 0;
		},
		watchChange(id) {
			if (tscModule) invalidateContextFile(tscContext || globalContext, id);
		}
	};
}
function collectJsonExportMap(code) {
	const exportMap = /* @__PURE__ */ new Map();
	const { program } = parse(code, {
		sourceType: "module",
		plugins: [["typescript", { dts: true }]],
		errorRecovery: true
	});
	for (const decl of program.body) if (decl.type === "ExportNamedDeclaration") {
		if (decl.declaration) {
			if (decl.declaration.type === "VariableDeclaration") {
				for (const vdecl of decl.declaration.declarations) if (vdecl.id.type === "Identifier") exportMap.set(vdecl.id.name, vdecl.id.name);
			} else if (decl.declaration.type === "TSModuleDeclaration" && decl.declaration.id.type === "Identifier") exportMap.set(decl.declaration.id.name, decl.declaration.id.name);
		} else if (decl.specifiers.length) {
			for (const spec of decl.specifiers) if (spec.type === "ExportSpecifier" && spec.exported.type === "Identifier") exportMap.set(spec.exported.name, spec.local.type === "Identifier" ? spec.local.name : spec.exported.name);
		}
	}
	return exportMap;
}
/** `declare const _exports` mode */
function collectJsonExports(code) {
	const exports = [];
	const { program } = parse(code, {
		sourceType: "module",
		plugins: [["typescript", { dts: true }]]
	});
	const members = program.body[0].declarations[0].id.typeAnnotation.typeAnnotation.members;
	for (const member of members) if (member.key.type === "Identifier") exports.push(member.key.name);
	else if (member.key.type === "StringLiteral") exports.push(member.key.value);
	return exports;
}
//#endregion
//#region src/options.ts
let warnedTsgo = false;
function resolveOptions({ entry, cwd = process.cwd(), dtsInput = false, emitDtsOnly = false, tsconfig, tsconfigRaw: overriddenTsconfigRaw = {}, compilerOptions = {}, sourcemap, resolver = "oxc", cjsDefault = false, sideEffects = false, build = false, incremental = false, vue = false, tsMacro = false, parallel = false, eager = false, newContext = false, emitJs, oxc, tsgo = false }) {
	if (tsgo === true) tsgo = {};
	else if (typeof tsgo === "object" && tsgo.enabled === false) tsgo = false;
	let resolvedTsconfig;
	if (tsconfig === true || tsconfig == null) {
		const { config, path } = getTsconfig(cwd) || {};
		tsconfig = path;
		resolvedTsconfig = config;
	} else if (typeof tsconfig === "string") {
		tsconfig = path.resolve(cwd || process.cwd(), tsconfig);
		resolvedTsconfig = parseTsconfig(tsconfig);
	} else tsconfig = void 0;
	compilerOptions = {
		...resolvedTsconfig?.compilerOptions,
		...compilerOptions
	};
	incremental ||= compilerOptions.incremental || !!compilerOptions.tsBuildInfoFile;
	sourcemap ??= !!compilerOptions.declarationMap;
	compilerOptions.declarationMap = sourcemap;
	const tsconfigRaw = {
		...resolvedTsconfig,
		...overriddenTsconfigRaw,
		compilerOptions
	};
	oxc ??= !!(compilerOptions?.isolatedDeclarations && !vue && !tsgo && !tsMacro);
	if (oxc === true) oxc = {};
	if (oxc) {
		oxc.stripInternal ??= !!compilerOptions?.stripInternal;
		oxc.sourcemap = !!compilerOptions.declarationMap;
	}
	emitJs ??= !!(compilerOptions.checkJs || compilerOptions.allowJs);
	if (tsgo) {
		if (vue) throw new Error("[rolldown-plugin-dts] The `tsgo` option is not compatible with the `vue` option. Please disable one of them.");
		if (tsMacro) throw new Error("[rolldown-plugin-dts] The `tsgo` option is not compatible with the `tsMacro` option. Please disable one of them.");
		if (oxc) throw new Error("[rolldown-plugin-dts] The `tsgo` option is not compatible with the `oxc` option. Please disable one of them.");
	}
	if (oxc && vue) throw new Error("[rolldown-plugin-dts] The `oxc` option is not compatible with the `vue` option. Please disable one of them.");
	if (oxc && tsMacro) throw new Error("[rolldown-plugin-dts] The `oxc` option is not compatible with the `tsMacro` option. Please disable one of them.");
	if (tsgo && !warnedTsgo) {
		console.warn("The `tsgo` option is experimental and may change in the future.");
		warnedTsgo = true;
	}
	return {
		entry: entry ? Array.isArray(entry) ? entry : [entry] : void 0,
		cwd,
		dtsInput,
		emitDtsOnly,
		tsconfig,
		tsconfigRaw,
		sourcemap,
		resolver,
		cjsDefault,
		sideEffects,
		build,
		incremental,
		vue,
		tsMacro,
		parallel,
		eager,
		newContext,
		emitJs,
		oxc,
		tsgo
	};
}
//#endregion
//#region src/resolver.ts
const debug$1 = createDebug("rolldown-plugin-dts:resolver");
function isSourceFile(id) {
	return RE_TS.test(id) || RE_VUE.test(id) || RE_JSON.test(id);
}
function createDtsResolvePlugin({ cwd, tsconfig, tsconfigRaw, resolver, sideEffects }) {
	const baseDtsResolver = createResolver({
		tsconfig,
		resolveNodeModules: true,
		ResolverFactory
	});
	const moduleSideEffects = sideEffects ? true : null;
	return {
		name: "rolldown-plugin-dts:resolver",
		resolveId: {
			order: "pre",
			filter: [include(importerId(RE_DTS))],
			async handler(id, importer, options) {
				if (!importer) return;
				const external = {
					id,
					external: true,
					moduleSideEffects: sideEffects
				};
				const rolldownResolution = await this.resolve(id, importer, options);
				debug$1("Rolldown resolution for dts import %O from %O: %O", id, importer, rolldownResolution);
				if (rolldownResolution?.external) {
					debug$1("Rolldown marked dts import as external:", id);
					return rolldownResolution;
				}
				const dtsResolution = await resolveDtsPath(id, importer, rolldownResolution);
				debug$1("Dts resolution for dts import %O from %O: %O", id, importer, dtsResolution);
				if (!dtsResolution) {
					if (RE_CSS.test(id)) {
						debug$1("Externalizing css import:", id);
						return external;
					}
					debug$1("Unresolvable dts import:", id, "from", importer);
					return isFilePath(id) ? null : external;
				}
				if (RE_DTS.test(dtsResolution)) {
					debug$1("Resolving dts import to declaration file:", id);
					return {
						id: dtsResolution,
						moduleSideEffects
					};
				}
				if (isSourceFile(dtsResolution)) {
					debug$1("Resolving dts import to source file:", id);
					await this.load({ id: dtsResolution });
					return {
						id: filename_to_dts(dtsResolution),
						moduleSideEffects
					};
				}
			}
		}
	};
	async function resolveDtsPath(id, importer, rolldownResolution) {
		let dtsPath;
		if (resolver === "tsc") {
			const { tscResolve } = await import("./resolver-DkvdaW3s.mjs");
			dtsPath = tscResolve(id, importer, cwd, tsconfig, tsconfigRaw);
		} else dtsPath = baseDtsResolver(id, importer);
		debug$1("Using %s for dts import: %O -> %O", resolver, id, dtsPath);
		if (dtsPath) dtsPath = path.normalize(dtsPath);
		if (!dtsPath || !isSourceFile(dtsPath)) {
			if (rolldownResolution && isFilePath(rolldownResolution.id) && isSourceFile(rolldownResolution.id) && !rolldownResolution.external) return rolldownResolution.id;
			return null;
		}
		return dtsPath;
	}
}
function isFilePath(id) {
	return id.startsWith(".") || path.isAbsolute(id);
}
//#endregion
//#region src/index.ts
const debug = createDebug("rolldown-plugin-dts:options");
function dts(options = {}) {
	debug("resolving dts options");
	const resolved = resolveOptions(options);
	debug("resolved dts options %o", resolved);
	const plugins = [];
	if (options.dtsInput) plugins.push(createDtsInputPlugin(resolved));
	else plugins.push(createGeneratePlugin(resolved));
	plugins.push(createDtsResolvePlugin(resolved), createFakeJsPlugin(resolved));
	return plugins;
}
//#endregion
export { createFakeJsPlugin, createGeneratePlugin, dts, resolveOptions };
