import MagicString from 'magic-string';
import { e as esmWalker } from './chunk-automock.js';

// AST walker module for ESTree compatible trees


function makeTest(test) {
  if (typeof test === "string")
    { return function (type) { return type === test; } }
  else if (!test)
    { return function () { return true; } }
  else
    { return test }
}

var Found = function Found(node, state) { this.node = node; this.state = state; };

// Find the innermost node of a given type that contains the given
// position. Interface similar to findNodeAt.
function findNodeAround(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) { baseVisitor = base; }
  try {
    (function c(node, st, override) {
      var type = override || node.type;
      if (node.start > pos || node.end < pos) { return }
      visitNode(baseVisitor, type, node, st, c);
      if (test(type, node)) { throw new Found(node, st) }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

function skipThrough(node, st, c) { c(node, st); }
function ignore(_node, _st, _c) {}

function visitNode(baseVisitor, type, node, st, c) {
  if (baseVisitor[type] == null) { throw new Error(("No walker function defined for node type " + type)) }
  baseVisitor[type](node, st, c);
}

// Node walkers.

var base = {};

base.Program = base.BlockStatement = base.StaticBlock = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var stmt = list[i];

    c(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression =
  function (node, st, c) { return c(node.expression, st, "Expression"); };
base.IfStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) { c(node.alternate, st, "Statement"); }
};
base.LabeledStatement = function (node, st, c) { return c(node.body, st, "Statement"); };
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function (node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function (node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i = 0, list = node.cases; i < list.length; i += 1) {
    var cs = list[i];

    c(cs, st);
  }
};
base.SwitchCase = function (node, st, c) {
  if (node.test) { c(node.test, st, "Expression"); }
  for (var i = 0, list = node.consequent; i < list.length; i += 1)
    {
    var cons = list[i];

    c(cons, st, "Statement");
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function (node, st, c) {
  if (node.argument) { c(node.argument, st, "Expression"); }
};
base.ThrowStatement = base.SpreadElement =
  function (node, st, c) { return c(node.argument, st, "Expression"); };
base.TryStatement = function (node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) { c(node.handler, st); }
  if (node.finalizer) { c(node.finalizer, st, "Statement"); }
};
base.CatchClause = function (node, st, c) {
  if (node.param) { c(node.param, st, "Pattern"); }
  c(node.body, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function (node, st, c) {
  if (node.init) { c(node.init, st, "ForInit"); }
  if (node.test) { c(node.test, st, "Expression"); }
  if (node.update) { c(node.update, st, "Expression"); }
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function (node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function (node, st, c) {
  if (node.type === "VariableDeclaration") { c(node, st); }
  else { c(node, st, "Expression"); }
};
base.DebuggerStatement = ignore;

base.FunctionDeclaration = function (node, st, c) { return c(node, st, "Function"); };
base.VariableDeclaration = function (node, st, c) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1)
    {
    var decl = list[i];

    c(decl, st);
  }
};
base.VariableDeclarator = function (node, st, c) {
  c(node.id, st, "Pattern");
  if (node.init) { c(node.init, st, "Expression"); }
};

base.Function = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    c(param, st, "Pattern");
  }
  c(node.body, st, node.expression ? "Expression" : "Statement");
};

base.Pattern = function (node, st, c) {
  if (node.type === "Identifier")
    { c(node, st, "VariablePattern"); }
  else if (node.type === "MemberExpression")
    { c(node, st, "MemberPattern"); }
  else
    { c(node, st); }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function (node, st, c) { return c(node.argument, st, "Pattern"); };
base.ArrayPattern = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Pattern"); }
  }
};
base.ObjectPattern = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];

    if (prop.type === "Property") {
      if (prop.computed) { c(prop.key, st, "Expression"); }
      c(prop.value, st, "Pattern");
    } else if (prop.type === "RestElement") {
      c(prop.argument, st, "Pattern");
    }
  }
};

base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Expression"); }
  }
};
base.ObjectExpression = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1)
    {
    var prop = list[i];

    c(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = function (node, st, c) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1)
    {
    var expr = list[i];

    c(expr, st, "Expression");
  }
};
base.TemplateLiteral = function (node, st, c) {
  for (var i = 0, list = node.quasis; i < list.length; i += 1)
    {
    var quasi = list[i];

    c(quasi, st);
  }

  for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1)
    {
    var expr = list$1[i$1];

    c(expr, st, "Expression");
  }
};
base.TemplateElement = ignore;
base.UnaryExpression = base.UpdateExpression = function (node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function (node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function (node, st, c) {
  c(node.left, st, "Pattern");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function (node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments)
    { for (var i = 0, list = node.arguments; i < list.length; i += 1)
      {
        var arg = list[i];

        c(arg, st, "Expression");
      } }
};
base.MemberExpression = function (node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) { c(node.property, st, "Expression"); }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function (node, st, c) {
  if (node.declaration)
    { c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression"); }
  if (node.source) { c(node.source, st, "Expression"); }
  if (node.attributes)
    { for (var i = 0, list = node.attributes; i < list.length; i += 1)
      {
        var attr = list[i];

        c(attr, st);
      } }
};
base.ExportAllDeclaration = function (node, st, c) {
  if (node.exported)
    { c(node.exported, st); }
  c(node.source, st, "Expression");
  if (node.attributes)
    { for (var i = 0, list = node.attributes; i < list.length; i += 1)
      {
        var attr = list[i];

        c(attr, st);
      } }
};
base.ImportAttribute = function (node, st, c) {
  c(node.value, st, "Expression");
};
base.ImportDeclaration = function (node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1)
    {
    var spec = list[i];

    c(spec, st);
  }
  c(node.source, st, "Expression");
  if (node.attributes)
    { for (var i$1 = 0, list$1 = node.attributes; i$1 < list$1.length; i$1 += 1)
      {
        var attr = list$1[i$1];

        c(attr, st);
      } }
};
base.ImportExpression = function (node, st, c) {
  c(node.source, st, "Expression");
  if (node.options) { c(node.options, st, "Expression"); }
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore;

base.TaggedTemplateExpression = function (node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st, "Expression");
};
base.ClassDeclaration = base.ClassExpression = function (node, st, c) { return c(node, st, "Class"); };
base.Class = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  if (node.superClass) { c(node.superClass, st, "Expression"); }
  c(node.body, st);
};
base.ClassBody = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var elt = list[i];

    c(elt, st);
  }
};
base.MethodDefinition = base.PropertyDefinition = base.Property = function (node, st, c) {
  if (node.computed) { c(node.key, st, "Expression"); }
  if (node.value) { c(node.value, st, "Expression"); }
};

const API_NOT_FOUND_ERROR = `There are some problems in resolving the mocks API.
You may encounter this issue when importing the mocks API from another module other than 'vitest'.
To fix this issue you can either:
- import the mocks API directly from 'vitest'
- enable the 'globals' option`;
function API_NOT_FOUND_CHECK(names) {
	return `\nif (${names.map((name) => `typeof globalThis["${name}"] === "undefined"`).join(" && ")}) ` + `{ throw new Error(${JSON.stringify(API_NOT_FOUND_ERROR)}) }\n`;
}
function isIdentifier(node) {
	return node.type === "Identifier";
}
function getNodeTail(code, node) {
	let end = node.end;
	if (code[node.end] === ";") {
		end += 1;
	}
	if (code[node.end] === "\n") {
		return end + 1;
	}
	if (code[node.end + 1] === "\n") {
		end += 1;
	}
	return end;
}
const regexpHoistable = /\b(?:vi|vitest)\s*\.\s*(?:mock|unmock|hoisted|doMock|doUnmock)\s*\(/;
const hashbangRE = /^#!.*\n/;
// this is a fork of Vite SSR transform
function hoistMocks(code, id, parse, options = {}) {
	const needHoisting = (options.regexpHoistable || regexpHoistable).test(code);
	if (!needHoisting) {
		return;
	}
	const s = options.magicString?.() || new MagicString(code);
	let ast;
	try {
		ast = parse(code);
	} catch (err) {
		console.error(`Cannot parse ${id}:\n${err.message}.`);
		return;
	}
	const { hoistableMockMethodNames = ["mock", "unmock"], dynamicImportMockMethodNames = [
		"mock",
		"unmock",
		"doMock",
		"doUnmock"
	], hoistedMethodNames = ["hoisted"], utilsObjectNames = ["vi", "vitest"], hoistedModule = "vitest" } = options;
	// hoist at the start of the file, after the hashbang
	const hashbangEnd = hashbangRE.exec(code)?.[0].length ?? 0;
	let hoistIndex = hashbangEnd;
	let hoistedModuleImported = false;
	let uid = 0;
	const idToImportMap = new Map();
	const imports = [];
	// this will transform import statements into dynamic ones, if there are imports
	// it will keep the import as is, if we don't need to mock anything
	// in browser environment it will wrap the module value with "vitest_wrap_module" function
	// that returns a proxy to the module so that named exports can be mocked
	function defineImport(importNode) {
		const source = importNode.source.value;
		// always hoist vitest import to top of the file, so
		// "vi" helpers can access it
		if (hoistedModule === source) {
			hoistedModuleImported = true;
			return;
		}
		const importId = `__vi_import_${uid++}__`;
		imports.push({
			id: importId,
			node: importNode
		});
		return importId;
	}
	// 1. check all import statements and record id -> importName map
	for (const node of ast.body) {
		// import foo from 'foo' --> foo -> __import_foo__.default
		// import { baz } from 'foo' --> baz -> __import_foo__.baz
		// import * as ok from 'foo' --> ok -> __import_foo__
		if (node.type === "ImportDeclaration") {
			const importId = defineImport(node);
			if (!importId) {
				continue;
			}
			for (const spec of node.specifiers) {
				if (spec.type === "ImportSpecifier") {
					if (spec.imported.type === "Identifier") {
						idToImportMap.set(spec.local.name, `${importId}.${spec.imported.name}`);
					} else {
						idToImportMap.set(spec.local.name, `${importId}[${JSON.stringify(spec.imported.value)}]`);
					}
				} else if (spec.type === "ImportDefaultSpecifier") {
					idToImportMap.set(spec.local.name, `${importId}.default`);
				} else {
					// namespace specifier
					idToImportMap.set(spec.local.name, importId);
				}
			}
		}
	}
	const declaredConst = new Set();
	const hoistedNodes = new Set();
	function createSyntaxError(node, message) {
		const _error = new SyntaxError(message);
		Error.captureStackTrace(_error, createSyntaxError);
		const serializedError = {
			name: "SyntaxError",
			message: _error.message,
			stack: _error.stack
		};
		if (options.codeFrameGenerator) {
			serializedError.frame = options.codeFrameGenerator(node, id, code);
		}
		return serializedError;
	}
	function assertNotDefaultExport(node, error) {
		const defaultExport = findNodeAround(ast, node.start, "ExportDefaultDeclaration")?.node;
		if (defaultExport?.declaration === node || defaultExport?.declaration.type === "AwaitExpression" && defaultExport.declaration.argument === node) {
			throw createSyntaxError(defaultExport, error);
		}
	}
	function assertNotNamedExport(node, error) {
		const nodeExported = findNodeAround(ast, node.start, "ExportNamedDeclaration")?.node;
		if (nodeExported?.declaration === node) {
			throw createSyntaxError(nodeExported, error);
		}
	}
	function getVariableDeclaration(node) {
		const declarationNode = findNodeAround(ast, node.start, "VariableDeclaration")?.node;
		const init = declarationNode?.declarations[0]?.init;
		if (init && (init === node || init.type === "AwaitExpression" && init.argument === node)) {
			return declarationNode;
		}
	}
	const usedUtilityExports = new Set();
	let hasImportMetaVitest = false;
	esmWalker(ast, {
		onImportMeta(node) {
			const property = code.slice(node.end, node.end + 7);
			if (property === ".vitest") {
				hasImportMetaVitest = true;
			}
		},
		onIdentifier(id, info, parentStack) {
			const binding = idToImportMap.get(id.name);
			if (!binding) {
				return;
			}
			if (info.hasBindingShortcut) {
				s.appendLeft(id.end, `: ${binding}`);
			} else if (info.classDeclaration) {
				if (!declaredConst.has(id.name)) {
					declaredConst.add(id.name);
					// locate the top-most node containing the class declaration
					const topNode = parentStack[parentStack.length - 2];
					s.prependRight(topNode.start, `const ${id.name} = ${binding};\n`);
				}
			} else if (!info.classExpression) {
				s.update(id.start, id.end, binding);
			}
		},
		onDynamicImport(_node) {
			// TODO: vi.mock(import) breaks it, and vi.mock('', () => import) also does,
			// only move imports that are outside of vi.mock
			// backwards compat, don't do if not passed
			// if (!options.globalThisAccessor) {
			//   return
			// }
			// const globalThisAccessor = options.globalThisAccessor
			// const replaceString = `globalThis[${globalThisAccessor}].wrapDynamicImport(() => import(`
			// const importSubstring = code.substring(node.start, node.end)
			// const hasIgnore = importSubstring.includes('/* @vite-ignore */')
			// s.overwrite(
			//   node.start,
			//   (node.source as Positioned<Expression>).start,
			//   replaceString + (hasIgnore ? '/* @vite-ignore */ ' : ''),
			// )
			// s.overwrite(node.end - 1, node.end, '))')
		},
		onCallExpression(node) {
			if (node.callee.type === "MemberExpression" && isIdentifier(node.callee.object) && utilsObjectNames.includes(node.callee.object.name) && isIdentifier(node.callee.property)) {
				const methodName = node.callee.property.name;
				usedUtilityExports.add(node.callee.object.name);
				if (hoistableMockMethodNames.includes(methodName)) {
					const method = `${node.callee.object.name}.${methodName}`;
					assertNotDefaultExport(node, `Cannot export the result of "${method}". Remove export declaration because "${method}" doesn\'t return anything.`);
					const declarationNode = getVariableDeclaration(node);
					if (declarationNode) {
						assertNotNamedExport(declarationNode, `Cannot export the result of "${method}". Remove export declaration because "${method}" doesn\'t return anything.`);
					}
					// rewrite vi.mock(import('..')) into vi.mock('..')
					if (node.type === "CallExpression" && node.callee.type === "MemberExpression" && dynamicImportMockMethodNames.includes(node.callee.property.name)) {
						const moduleInfo = node.arguments[0];
						// vi.mock(import('./path')) -> vi.mock('./path')
						if (moduleInfo.type === "ImportExpression") {
							const source = moduleInfo.source;
							s.overwrite(moduleInfo.start, moduleInfo.end, s.slice(source.start, source.end));
						}
						// vi.mock(await import('./path')) -> vi.mock('./path')
						if (moduleInfo.type === "AwaitExpression" && moduleInfo.argument.type === "ImportExpression") {
							const source = moduleInfo.argument.source;
							s.overwrite(moduleInfo.start, moduleInfo.end, s.slice(source.start, source.end));
						}
					}
					hoistedNodes.add(node);
				} else if (dynamicImportMockMethodNames.includes(methodName)) {
					const moduleInfo = node.arguments[0];
					let source = null;
					if (moduleInfo.type === "ImportExpression") {
						source = moduleInfo.source;
					}
					if (moduleInfo.type === "AwaitExpression" && moduleInfo.argument.type === "ImportExpression") {
						source = moduleInfo.argument.source;
					}
					if (source) {
						s.overwrite(moduleInfo.start, moduleInfo.end, s.slice(source.start, source.end));
					}
				}
				if (hoistedMethodNames.includes(methodName)) {
					assertNotDefaultExport(node, "Cannot export hoisted variable. You can control hoisting behavior by placing the import from this file first.");
					const declarationNode = getVariableDeclaration(node);
					if (declarationNode) {
						assertNotNamedExport(declarationNode, "Cannot export hoisted variable. You can control hoisting behavior by placing the import from this file first.");
						// hoist "const variable = vi.hoisted(() => {})"
						hoistedNodes.add(declarationNode);
					} else {
						const awaitedExpression = findNodeAround(ast, node.start, "AwaitExpression")?.node;
						// hoist "await vi.hoisted(async () => {})" or "vi.hoisted(() => {})"
						const moveNode = awaitedExpression?.argument === node ? awaitedExpression : node;
						hoistedNodes.add(moveNode);
					}
				}
			}
		}
	});
	function getNodeName(node) {
		const callee = node.callee || {};
		if (callee.type === "MemberExpression" && isIdentifier(callee.property) && isIdentifier(callee.object)) {
			const argument = node.arguments[0];
			const argStr = argument.type === "Literal" || argument.type === "ImportExpression" ? code.slice(argument.start, argument.end) : "";
			return `${callee.object.name}.${callee.property.name}(${argStr})`;
		}
		return "\"hoisted method\"";
	}
	function getNodeCall(node) {
		if (node.type === "CallExpression") {
			return node;
		}
		if (node.type === "VariableDeclaration") {
			const { declarations } = node;
			const init = declarations[0].init;
			if (init) {
				return getNodeCall(init);
			}
		}
		if (node.type === "AwaitExpression") {
			const { argument } = node;
			if (argument.type === "CallExpression") {
				return getNodeCall(argument);
			}
		}
		return node;
	}
	function createError(outsideNode, insideNode) {
		const outsideCall = getNodeCall(outsideNode);
		const insideCall = getNodeCall(insideNode);
		throw createSyntaxError(insideCall, `Cannot call ${getNodeName(insideCall)} inside ${getNodeName(outsideCall)}: both methods are hoisted to the top of the file and not actually called inside each other.`);
	}
	// validate hoistedNodes doesn't have nodes inside other nodes
	const arrayNodes = Array.from(hoistedNodes);
	for (let i = 0; i < arrayNodes.length; i++) {
		const node = arrayNodes[i];
		for (let j = i + 1; j < arrayNodes.length; j++) {
			const otherNode = arrayNodes[j];
			if (node.start >= otherNode.start && node.end <= otherNode.end) {
				throw createError(otherNode, node);
			}
			if (otherNode.start >= node.start && otherNode.end <= node.end) {
				throw createError(node, otherNode);
			}
		}
	}
	// validate that hoisted nodes are defined on the top level
	// ignore `import.meta.vitest` because it needs to be inside an IfStatement
	// and it can be used anywhere in the code (inside methods too)
	if (!hasImportMetaVitest) {
		for (const node of ast.body) {
			hoistedNodes.delete(node);
			if (node.type === "ExpressionStatement") {
				hoistedNodes.delete(node.expression);
			}
		}
		for (const invalidNode of hoistedNodes) {
			console.warn(`Warning: A ${getNodeName(getNodeCall(invalidNode))} call in "${id}" is not at the top level of the module. ` + `Although it appears nested, it will be hoisted and executed before any tests run. ` + `Move it to the top level to reflect its actual execution order. This will become an error in a future version.\n` + `See: https://vitest.dev/guide/mocking/modules#how-it-works`);
		}
	}
	// hoist vi.mock/vi.hoisted
	for (const node of arrayNodes) {
		const end = getNodeTail(code, node);
		// don't hoist into itself if it's already at the top
		if (hoistIndex === end || hoistIndex === node.start) {
			hoistIndex = end;
		} else {
			s.move(node.start, end, hoistIndex);
		}
	}
	// hoist actual dynamic imports last so they are inserted after all hoisted mocks
	for (const { node: importNode, id: importId } of imports) {
		const source = importNode.source.value;
		const sourceString = JSON.stringify(source);
		let importLine = `const ${importId} = await `;
		if (options.globalThisAccessor) {
			importLine += `globalThis[${options.globalThisAccessor}].wrapDynamicImport(() => import(${sourceString}));\n`;
		} else {
			importLine += `import(${sourceString});\n`;
		}
		s.update(importNode.start, importNode.end, importLine);
		if (importNode.start === hoistIndex) {
			// no need to hoist, but update hoistIndex to keep the order
			hoistIndex = importNode.end;
		} else {
			// There will be an error if the module is called before it is imported,
			// so the module import statement is hoisted to the top
			s.move(importNode.start, importNode.end, hoistIndex);
		}
	}
	if (!hoistedModuleImported && arrayNodes.length > 0) {
		const utilityImports = [...usedUtilityExports];
		// "vi" or "vitest" is imported from a module other than "vitest"
		if (utilityImports.some((name) => idToImportMap.has(name))) {
			s.appendLeft(hashbangEnd, API_NOT_FOUND_CHECK(utilityImports));
		} else if (utilityImports.length) {
			s.appendLeft(hashbangEnd, `import { ${[...usedUtilityExports].join(", ")} } from ${JSON.stringify(hoistedModule)}\n`);
		}
	}
	return s;
}

export { hoistMocks as h };
