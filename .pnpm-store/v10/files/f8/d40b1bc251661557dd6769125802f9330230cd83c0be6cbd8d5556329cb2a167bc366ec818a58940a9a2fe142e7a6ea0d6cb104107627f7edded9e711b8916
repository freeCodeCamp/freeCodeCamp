import { n as __toESM, t as require_binding } from "./binding-BeU_1iEk.mjs";
//#region ../../node_modules/.pnpm/oxc-parser@0.127.0/node_modules/oxc-parser/src-js/wrap.js
var import_binding = /* @__PURE__ */ __toESM(require_binding(), 1);
function wrap(result) {
	let program, module, comments, errors;
	return {
		get program() {
			if (!program) program = jsonParseAst(result.program);
			return program;
		},
		get module() {
			if (!module) module = result.module;
			return module;
		},
		get comments() {
			if (!comments) comments = result.comments;
			return comments;
		},
		get errors() {
			if (!errors) errors = result.errors;
			return errors;
		}
	};
}
function jsonParseAst(programJson) {
	const { node: program, fixes } = JSON.parse(programJson);
	for (const fixPath of fixes) applyFix(program, fixPath);
	return program;
}
function applyFix(program, fixPath) {
	let node = program;
	for (const key of fixPath) node = node[key];
	if (node.bigint) node.value = BigInt(node.bigint);
	else try {
		node.value = RegExp(node.regex.pattern, node.regex.flags);
	} catch {}
}
//#endregion
//#region src/utils/parse.ts
/**
* Parse JS/TS source asynchronously on a separate thread.
*
* Note that not all of the workload can happen on a separate thread.
* Parsing on Rust side does happen in a separate thread, but deserialization of the AST to JS objects
* has to happen on current thread. This synchronous deserialization work typically outweighs
* the asynchronous parsing by a factor of between 3 and 20.
*
* i.e. the majority of the workload cannot be parallelized by using this method.
*
* Generally {@linkcode parseSync} is preferable to use as it does not have the overhead of spawning a thread.
* If you need to parallelize parsing multiple files, it is recommended to use worker threads.
*
* @category Utilities
*/
async function parse(filename, sourceText, options) {
	return wrap(await (0, import_binding.parse)(filename, sourceText, options));
}
/**
* Parse JS/TS source synchronously on current thread.
*
* This is generally preferable over {@linkcode parse} (async) as it does not have the overhead
* of spawning a thread, and the majority of the workload cannot be parallelized anyway
* (see {@linkcode parse} documentation for details).
*
* If you need to parallelize parsing multiple files, it is recommended to use worker threads
* with {@linkcode parseSync} rather than using {@linkcode parse}.
*
* @category Utilities
*/
function parseSync(filename, sourceText, options) {
	return wrap((0, import_binding.parseSync)(filename, sourceText, options));
}
//#endregion
export { parseSync as n, parse as t };
