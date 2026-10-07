import nodeos__default from 'node:os';
import { performance } from 'node:perf_hooks';
import { TraceMap, generatedPositionFor, eachMapping } from '@vitest/utils/source-map';
import { relative, basename, resolve, join } from 'pathe';
import { x } from 'tinyexec';
import { distDir } from '../path.js';
import { getTests, generateHash, calculateSuiteHash, someTasksAreOnly, interpretTaskModes } from '@vitest/runner/utils';
import '@vitest/utils';
import { parseAstAsync } from 'vite';

function hasFailedSnapshot(suite) {
	return getTests(suite).some((s) => {
		return s.result?.errors?.some((e) => typeof e?.message === "string" && e.message.match(/Snapshot .* mismatched/));
	});
}
function convertTasksToEvents(file, onTask) {
	const packs = [];
	const events = [];
	function visit(suite) {
		onTask?.(suite);
		packs.push([
			suite.id,
			suite.result,
			suite.meta
		]);
		events.push([
			suite.id,
			"suite-prepare",
			void 0
		]);
		suite.tasks.forEach((task) => {
			if (task.type === "suite") visit(task);
			else {
				onTask?.(task);
				if (suite.mode !== "skip" && suite.mode !== "todo") {
					packs.push([
						task.id,
						task.result,
						task.meta
					]);
					events.push([
						task.id,
						"test-prepare",
						void 0
					]);
					task.annotations.forEach((annotation) => {
						events.push([
							task.id,
							"test-annotation",
							{ annotation }
						]);
					});
					events.push([
						task.id,
						"test-finished",
						void 0
					]);
				}
			}
		});
		events.push([
			suite.id,
			"suite-finished",
			void 0
		]);
	}
	visit(file);
	return {
		packs,
		events
	};
}

const REGEXP_WRAP_PREFIX = "$$vitest:";
function getOutputFile(config, reporter) {
	if (!config?.outputFile) return;
	if (typeof config.outputFile === "string") return config.outputFile;
	return config.outputFile[reporter];
}
/**
* Prepares `SerializedConfig` for serialization, e.g. `node:v8.serialize`
*/
function wrapSerializableConfig(config) {
	let testNamePattern = config.testNamePattern;
	let defines = config.defines;
	// v8 serialize does not support regex
	if (testNamePattern && typeof testNamePattern !== "string") testNamePattern = `${REGEXP_WRAP_PREFIX}${testNamePattern.toString()}`;
	// v8 serialize drops properties with undefined value
	if (defines) defines = {
		keys: Object.keys(defines),
		original: defines
	};
	return {
		...config,
		testNamePattern,
		defines
	};
}

// AST walker module for ESTree compatible trees


// An ancestor walk keeps an array of ancestor nodes (including the
// current node) and passes them to the callback as third parameter
// (and also as state parameter when no other state is present).
function ancestor(node, visitors, baseVisitor, state, override) {
  var ancestors = [];
  if (!baseVisitor) { baseVisitor = base
  ; }(function c(node, st, override) {
    var type = override || node.type;
    var isNew = node !== ancestors[ancestors.length - 1];
    if (isNew) { ancestors.push(node); }
    baseVisitor[type](node, st, c);
    if (visitors[type]) { visitors[type](node, st || ancestors, ancestors); }
    if (isNew) { ancestors.pop(); }
  })(node, state, override);
}

function skipThrough(node, st, c) { c(node, st); }
function ignore(_node, _st, _c) {}

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
};
base.ExportAllDeclaration = function (node, st, c) {
  if (node.exported)
    { c(node.exported, st); }
  c(node.source, st, "Expression");
};
base.ImportDeclaration = function (node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1)
    {
    var spec = list[i];

    c(spec, st);
  }
  c(node.source, st, "Expression");
};
base.ImportExpression = function (node, st, c) {
  c(node.source, st, "Expression");
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

async function collectTests(ctx, filepath) {
	const request = await ctx.vitenode.transformRequest(filepath, filepath);
	if (!request) return null;
	const ast = await parseAstAsync(request.code);
	const testFilepath = relative(ctx.config.root, filepath);
	const projectName = ctx.name;
	const typecheckSubprojectName = projectName ? `${projectName}:__typecheck__` : "__typecheck__";
	const file = {
		filepath,
		type: "suite",
		id: generateHash(`${testFilepath}${typecheckSubprojectName}`),
		name: testFilepath,
		mode: "run",
		tasks: [],
		start: ast.start,
		end: ast.end,
		projectName,
		meta: { typecheck: true },
		file: null
	};
	file.file = file;
	const definitions = [];
	const getName = (callee) => {
		if (!callee) return null;
		if (callee.type === "Identifier") return callee.name;
		if (callee.type === "CallExpression") return getName(callee.callee);
		if (callee.type === "TaggedTemplateExpression") return getName(callee.tag);
		if (callee.type === "MemberExpression") {
			if (callee.object?.type === "Identifier" && [
				"it",
				"test",
				"describe",
				"suite"
			].includes(callee.object.name)) return callee.object?.name;
			// direct call as `__vite_ssr_exports_0__.test()`
			if (callee.object?.name?.startsWith("__vite_ssr_")) return getName(callee.property);
			// call as `__vite_ssr__.test.skip()`
			return getName(callee.object?.property);
		}
		// unwrap (0, ...)
		if (callee.type === "SequenceExpression" && callee.expressions.length === 2) {
			const [e0, e1] = callee.expressions;
			if (e0.type === "Literal" && e0.value === 0) return getName(e1);
		}
		return null;
	};
	ancestor(ast, { CallExpression(node) {
		const { callee } = node;
		const name = getName(callee);
		if (!name) return;
		if (![
			"it",
			"test",
			"describe",
			"suite"
		].includes(name)) return;
		const property = callee?.property?.name;
		let mode = !property || property === name ? "run" : property;
		// they will be picked up in the next iteration
		if ([
			"each",
			"for",
			"skipIf",
			"runIf"
		].includes(mode)) return;
		let start;
		const end = node.end;
		// .each
		if (callee.type === "CallExpression") start = callee.end;
		else if (callee.type === "TaggedTemplateExpression") start = callee.end + 1;
		else start = node.start;
		const { arguments: [messageNode] } = node;
		const isQuoted = messageNode?.type === "Literal" || messageNode?.type === "TemplateLiteral";
		const message = isQuoted ? request.code.slice(messageNode.start + 1, messageNode.end - 1) : request.code.slice(messageNode.start, messageNode.end);
		// cannot statically analyze, so we always skip it
		if (mode === "skipIf" || mode === "runIf") mode = "skip";
		definitions.push({
			start,
			end,
			name: message,
			type: name === "it" || name === "test" ? "test" : "suite",
			mode,
			task: null
		});
	} });
	let lastSuite = file;
	const updateLatestSuite = (index) => {
		while (lastSuite.suite && lastSuite.end < index) lastSuite = lastSuite.suite;
		return lastSuite;
	};
	definitions.sort((a, b) => a.start - b.start).forEach((definition) => {
		const latestSuite = updateLatestSuite(definition.start);
		let mode = definition.mode;
		if (latestSuite.mode !== "run")
 // inherit suite mode, if it's set
		mode = latestSuite.mode;
		if (definition.type === "suite") {
			const task = {
				type: definition.type,
				id: "",
				suite: latestSuite,
				file,
				tasks: [],
				mode,
				name: definition.name,
				end: definition.end,
				start: definition.start,
				meta: { typecheck: true }
			};
			definition.task = task;
			latestSuite.tasks.push(task);
			lastSuite = task;
			return;
		}
		const task = {
			type: definition.type,
			id: "",
			suite: latestSuite,
			file,
			mode,
			timeout: 0,
			context: {},
			name: definition.name,
			end: definition.end,
			start: definition.start,
			annotations: [],
			meta: { typecheck: true }
		};
		definition.task = task;
		latestSuite.tasks.push(task);
	});
	calculateSuiteHash(file);
	const hasOnly = someTasksAreOnly(file);
	interpretTaskModes(file, ctx.config.testNamePattern, void 0, hasOnly, false, ctx.config.allowOnly);
	return {
		file,
		parsed: request.code,
		filepath,
		map: request.map,
		definitions
	};
}

const newLineRegExp = /\r?\n/;
const errCodeRegExp = /error TS(?<errCode>\d+)/;
async function makeTscErrorInfo(errInfo) {
	const [errFilePathPos = "", ...errMsgRawArr] = errInfo.split(":");
	if (!errFilePathPos || errMsgRawArr.length === 0 || errMsgRawArr.join("").length === 0) return ["unknown filepath", null];
	const errMsgRaw = errMsgRawArr.join("").trim();
	// get filePath, line, col
	const [errFilePath, errPos] = errFilePathPos.slice(0, -1).split("(");
	if (!errFilePath || !errPos) return ["unknown filepath", null];
	const [errLine, errCol] = errPos.split(",");
	if (!errLine || !errCol) return [errFilePath, null];
	// get errCode, errMsg
	const execArr = errCodeRegExp.exec(errMsgRaw);
	if (!execArr) return [errFilePath, null];
	const errCodeStr = execArr.groups?.errCode ?? "";
	if (!errCodeStr) return [errFilePath, null];
	const line = Number(errLine);
	const col = Number(errCol);
	const errCode = Number(errCodeStr);
	return [errFilePath, {
		filePath: errFilePath,
		errCode,
		line,
		column: col,
		errMsg: errMsgRaw.slice(`error TS${errCode} `.length)
	}];
}
async function getRawErrsMapFromTsCompile(tscErrorStdout) {
	const rawErrsMap = /* @__PURE__ */ new Map();
	// Merge details line with main line (i.e. which contains file path)
	const infos = await Promise.all(tscErrorStdout.split(newLineRegExp).reduce((prev, next) => {
		if (!next) return prev;
		else if (!next.startsWith(" ")) prev.push(next);
		else prev[prev.length - 1] += `\n${next}`;
		return prev;
	}, []).map((errInfoLine) => makeTscErrorInfo(errInfoLine)));
	infos.forEach(([errFilePath, errInfo]) => {
		if (!errInfo) return;
		if (!rawErrsMap.has(errFilePath)) rawErrsMap.set(errFilePath, [errInfo]);
		else rawErrsMap.get(errFilePath)?.push(errInfo);
	});
	return rawErrsMap;
}

function createIndexMap(source) {
	const map = /* @__PURE__ */ new Map();
	let index = 0;
	let line = 1;
	let column = 1;
	for (const char of source) {
		map.set(`${line}:${column}`, index++);
		if (char === "\n" || char === "\r\n") {
			line++;
			column = 0;
		} else column++;
	}
	return map;
}

class TypeCheckError extends Error {
	name = "TypeCheckError";
	constructor(message, stacks) {
		super(message);
		this.message = message;
		this.stacks = stacks;
	}
}
class Typechecker {
	_onParseStart;
	_onParseEnd;
	_onWatcherRerun;
	_result = {
		files: [],
		sourceErrors: [],
		time: 0
	};
	_startTime = 0;
	_output = "";
	_tests = {};
	process;
	files = [];
	constructor(project) {
		this.project = project;
	}
	setFiles(files) {
		this.files = files;
	}
	onParseStart(fn) {
		this._onParseStart = fn;
	}
	onParseEnd(fn) {
		this._onParseEnd = fn;
	}
	onWatcherRerun(fn) {
		this._onWatcherRerun = fn;
	}
	async collectFileTests(filepath) {
		return collectTests(this.project, filepath);
	}
	getFiles() {
		return this.files;
	}
	async collectTests() {
		const tests = (await Promise.all(this.getFiles().map((filepath) => this.collectFileTests(filepath)))).reduce((acc, data) => {
			if (!data) return acc;
			acc[data.filepath] = data;
			return acc;
		}, {});
		this._tests = tests;
		return tests;
	}
	markPassed(file) {
		if (!file.result?.state) file.result = { state: "pass" };
		const markTasks = (tasks) => {
			for (const task of tasks) {
				if ("tasks" in task) markTasks(task.tasks);
				if (!task.result?.state && (task.mode === "run" || task.mode === "queued")) task.result = { state: "pass" };
			}
		};
		markTasks(file.tasks);
	}
	async prepareResults(output) {
		const typeErrors = await this.parseTscLikeOutput(output);
		const testFiles = new Set(this.getFiles());
		if (!this._tests) this._tests = await this.collectTests();
		const sourceErrors = [];
		const files = [];
		testFiles.forEach((path) => {
			const { file, definitions, map, parsed } = this._tests[path];
			const errors = typeErrors.get(path);
			files.push(file);
			if (!errors) {
				this.markPassed(file);
				return;
			}
			const sortedDefinitions = [...definitions.sort((a, b) => b.start - a.start)];
			// has no map for ".js" files that use // @ts-check
			const traceMap = map && new TraceMap(map);
			const indexMap = createIndexMap(parsed);
			const markState = (task, state) => {
				task.result = { state: task.mode === "run" || task.mode === "only" ? state : task.mode };
				if (task.suite) markState(task.suite, state);
				else if (task.file && task !== task.file) markState(task.file, state);
			};
			errors.forEach(({ error, originalError }) => {
				const processedPos = traceMap ? findGeneratedPosition(traceMap, {
					line: originalError.line,
					column: originalError.column,
					source: basename(path)
				}) : originalError;
				const line = processedPos.line ?? originalError.line;
				const column = processedPos.column ?? originalError.column;
				const index = indexMap.get(`${line}:${column}`);
				const definition = index != null && sortedDefinitions.find((def) => def.start <= index && def.end >= index);
				const suite = definition ? definition.task : file;
				const state = suite.mode === "run" || suite.mode === "only" ? "fail" : suite.mode;
				const errors = suite.result?.errors || [];
				suite.result = {
					state,
					errors
				};
				errors.push(error);
				if (state === "fail") {
					if (suite.suite) markState(suite.suite, "fail");
					else if (suite.file && suite !== suite.file) markState(suite.file, "fail");
				}
			});
			this.markPassed(file);
		});
		typeErrors.forEach((errors, path) => {
			if (!testFiles.has(path)) sourceErrors.push(...errors.map(({ error }) => error));
		});
		return {
			files,
			sourceErrors,
			time: performance.now() - this._startTime
		};
	}
	async parseTscLikeOutput(output) {
		const errorsMap = await getRawErrsMapFromTsCompile(output);
		const typesErrors = /* @__PURE__ */ new Map();
		errorsMap.forEach((errors, path) => {
			const filepath = resolve(this.project.config.root, path);
			const suiteErrors = errors.map((info) => {
				const limit = Error.stackTraceLimit;
				Error.stackTraceLimit = 0;
				// Some expect-type errors have the most useful information on the second line e.g. `This expression is not callable.\n  Type 'ExpectString<number>' has no call signatures.`
				const errMsg = info.errMsg.replace(/\r?\n\s*(Type .* has no call signatures)/g, " $1");
				const error = new TypeCheckError(errMsg, [{
					file: filepath,
					line: info.line,
					column: info.column,
					method: ""
				}]);
				Error.stackTraceLimit = limit;
				return {
					originalError: info,
					error: {
						name: error.name,
						message: errMsg,
						stacks: error.stacks,
						stack: ""
					}
				};
			});
			typesErrors.set(filepath, suiteErrors);
		});
		return typesErrors;
	}
	async stop() {
		this.process?.kill();
		this.process = void 0;
	}
	async ensurePackageInstalled(ctx, checker) {
		if (checker !== "tsc" && checker !== "vue-tsc") return;
		const packageName = checker === "tsc" ? "typescript" : "vue-tsc";
		await ctx.packageInstaller.ensureInstalled(packageName, ctx.config.root);
	}
	getExitCode() {
		return this.process?.exitCode != null && this.process.exitCode;
	}
	getOutput() {
		return this._output;
	}
	async spawn() {
		const { root, watch, typecheck } = this.project.config;
		const args = [
			"--noEmit",
			"--pretty",
			"false",
			"--incremental",
			"--tsBuildInfoFile",
			join(process.versions.pnp ? join(nodeos__default.tmpdir(), this.project.hash) : distDir, "tsconfig.tmp.tsbuildinfo")
		];
		// use builtin watcher because it's faster
		if (watch) args.push("--watch");
		if (typecheck.allowJs) args.push("--allowJs", "--checkJs");
		if (typecheck.tsconfig) args.push("-p", resolve(root, typecheck.tsconfig));
		this._output = "";
		this._startTime = performance.now();
		const child = x(typecheck.checker, args, {
			nodeOptions: {
				cwd: root,
				stdio: "pipe"
			},
			throwOnError: false
		});
		this.process = child.process;
		let rerunTriggered = false;
		let dataReceived = false;
		return new Promise((resolve, reject) => {
			if (!child.process || !child.process.stdout) {
				reject(new Error(`Failed to initialize ${typecheck.checker}. This is a bug in Vitest - please, open an issue with reproduction.`));
				return;
			}
			child.process.stdout.on("data", (chunk) => {
				dataReceived = true;
				this._output += chunk;
				if (!watch) return;
				if (this._output.includes("File change detected") && !rerunTriggered) {
					this._onWatcherRerun?.();
					this._startTime = performance.now();
					this._result.sourceErrors = [];
					this._result.files = [];
					this._tests = null;
					rerunTriggered = true;
				}
				if (/Found \w+ errors*. Watching for/.test(this._output)) {
					rerunTriggered = false;
					this.prepareResults(this._output).then((result) => {
						this._result = result;
						this._onParseEnd?.(result);
					});
					this._output = "";
				}
			});
			const timeout = setTimeout(() => reject(new Error(`${typecheck.checker} spawn timed out`)), this.project.config.typecheck.spawnTimeout);
			function onError(cause) {
				clearTimeout(timeout);
				reject(new Error("Spawning typechecker failed - is typescript installed?", { cause }));
			}
			child.process.once("spawn", () => {
				this._onParseStart?.();
				child.process?.off("error", onError);
				clearTimeout(timeout);
				if (process.platform === "win32")
 // on Windows, the process might be spawned but fail to start
				// we wait for a potential error here. if "close" event didn't trigger,
				// we resolve the promise
				setTimeout(() => {
					resolve({ result: child });
				}, 200);
				else resolve({ result: child });
			});
			if (process.platform === "win32") child.process.once("close", (code) => {
				if (code != null && code !== 0 && !dataReceived) onError(new Error(`The ${typecheck.checker} command exited with code ${code}.`));
			});
			child.process.once("error", onError);
		});
	}
	async start() {
		if (this.process) return;
		const { watch } = this.project.config;
		const { result: child } = await this.spawn();
		if (!watch) {
			await child;
			this._result = await this.prepareResults(this._output);
			await this._onParseEnd?.(this._result);
		}
	}
	getResult() {
		return this._result;
	}
	getTestFiles() {
		return Object.values(this._tests || {}).map((i) => i.file);
	}
	getTestPacksAndEvents() {
		const packs = [];
		const events = [];
		for (const { file } of Object.values(this._tests || {})) {
			const result = convertTasksToEvents(file);
			packs.push(...result.packs);
			events.push(...result.events);
		}
		return {
			packs,
			events
		};
	}
}
function findGeneratedPosition(traceMap, { line, column, source }) {
	const found = generatedPositionFor(traceMap, {
		line,
		column,
		source
	});
	if (found.line !== null) return found;
	// find the next source token position when the exact error position doesn't exist in source map.
	// this can happen, for example, when the type error is in the comment "// @ts-expect-error"
	// and comments are stripped away in the generated code.
	const mappings = [];
	eachMapping(traceMap, (m) => {
		if (m.source === source && m.originalLine !== null && m.originalColumn !== null && (line === m.originalLine ? column < m.originalColumn : line < m.originalLine)) mappings.push(m);
	});
	const next = mappings.sort((a, b) => a.originalLine === b.originalLine ? a.originalColumn - b.originalColumn : a.originalLine - b.originalLine).at(0);
	if (next) return {
		line: next.generatedLine,
		column: next.generatedColumn
	};
	return {
		line: null,
		column: null
	};
}

export { TypeCheckError as T, Typechecker as a, convertTasksToEvents as c, getOutputFile as g, hasFailedSnapshot as h, wrapSerializableConfig as w };
