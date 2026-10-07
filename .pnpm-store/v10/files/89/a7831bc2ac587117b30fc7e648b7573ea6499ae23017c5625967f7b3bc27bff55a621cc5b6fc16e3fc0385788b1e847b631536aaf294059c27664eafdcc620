import { l as locate, n as error, s as logParseError, t as augmentCodeLocation, u as getCodeFrame } from "./shared/logs-D80CXhvg.mjs";
import { n as parseSync, t as parse } from "./shared/parse-B_ZnWxLZ.mjs";
//#region src/parse-ast-index.ts
function wrap(result, filename, sourceText) {
	if (result.errors.length > 0) return normalizeParseError(filename, sourceText, result.errors);
	return result.program;
}
function normalizeParseError(filename, sourceText, errors) {
	let message = `Parse failed with ${errors.length} error${errors.length < 2 ? "" : "s"}:\n`;
	const pos = errors[0]?.labels?.[0]?.start;
	for (let i = 0; i < errors.length; i++) {
		if (i >= 5) {
			message += "\n...";
			break;
		}
		const e = errors[i];
		message += e.message + "\n" + e.labels.map((label) => {
			const location = locate(sourceText, label.start, { offsetLine: 1 });
			if (!location) return;
			return getCodeFrame(sourceText, location.line, location.column);
		}).filter(Boolean).join("\n");
	}
	const log = logParseError(message, filename, pos);
	if (pos !== void 0 && filename) augmentCodeLocation(log, pos, sourceText, filename);
	return error(log);
}
const defaultParserOptions = {
	lang: "js",
	preserveParens: false
};
/**
* Parse code synchronously and return the AST.
*
* This function is similar to Rollup's `parseAst` function.
* Prefer using {@linkcode parseSync} instead of this function as it has more information in the return value.
*
* @category Utilities
*/
function parseAst(sourceText, options, filename) {
	return wrap(parseSync(filename ?? "file.js", sourceText, {
		...defaultParserOptions,
		...options
	}), filename, sourceText);
}
/**
* Parse code asynchronously and return the AST.
*
* This function is similar to Rollup's `parseAstAsync` function.
* Prefer using {@linkcode parseAsync} instead of this function as it has more information in the return value.
*
* @category Utilities
*/
async function parseAstAsync(sourceText, options, filename) {
	return wrap(await parse(filename ?? "file.js", sourceText, {
		...defaultParserOptions,
		...options
	}), filename, sourceText);
}
//#endregion
export { parseAst, parseAstAsync };
