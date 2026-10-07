import { t as require_binding } from "./binding-BeU_1iEk.mjs";
//#region src/types/sourcemap.ts
function bindingifySourcemap(map) {
	if (map == null) return;
	return { inner: typeof map === "string" ? map : {
		file: map.file ?? void 0,
		mappings: map.mappings,
		sourceRoot: "sourceRoot" in map ? map.sourceRoot ?? void 0 : void 0,
		sources: map.sources?.map((s) => s ?? void 0),
		sourcesContent: map.sourcesContent?.map((s) => s ?? void 0),
		names: map.names,
		x_google_ignoreList: map.x_google_ignoreList,
		debugId: "debugId" in map ? map.debugId : void 0
	} };
}
require_binding();
function unwrapBindingResult(container) {
	if (typeof container === "object" && container !== null && "isBindingErrors" in container && container.isBindingErrors) throw aggregateBindingErrorsIntoJsError(container.errors);
	return container;
}
function normalizeBindingResult(container) {
	if (typeof container === "object" && container !== null && "isBindingErrors" in container && container.isBindingErrors) return aggregateBindingErrorsIntoJsError(container.errors);
	return container;
}
function normalizeBindingError(e) {
	return e.type === "JsError" ? e.field0 : Object.assign(/* @__PURE__ */ new Error(), {
		code: e.field0.kind,
		kind: e.field0.kind,
		message: e.field0.message,
		id: e.field0.id,
		exporter: e.field0.exporter,
		loc: e.field0.loc,
		pos: e.field0.pos,
		stack: void 0
	});
}
function aggregateBindingErrorsIntoJsError(rawErrors) {
	const errors = rawErrors.map(normalizeBindingError);
	let summary = `Build failed with ${errors.length} error${errors.length < 2 ? "" : "s"}:\n`;
	for (let i = 0; i < errors.length; i++) {
		summary += "\n";
		if (i >= 5) {
			summary += "...";
			break;
		}
		summary += getErrorMessage(errors[i]);
	}
	const wrapper = new Error(summary);
	Object.defineProperty(wrapper, "errors", {
		configurable: true,
		enumerable: true,
		get: () => errors,
		set: (value) => Object.defineProperty(wrapper, "errors", {
			configurable: true,
			enumerable: true,
			value
		})
	});
	return wrapper;
}
function getErrorMessage(e) {
	if (Object.hasOwn(e, "kind")) return e.message;
	let s = "";
	if (e.plugin) s += `[plugin ${e.plugin}]`;
	const id = e.id ?? e.loc?.file;
	if (id) {
		s += " " + id;
		if (e.loc) s += `:${e.loc.line}:${e.loc.column}`;
	}
	if (s) s += "\n";
	const message = `${e.name ?? "Error"}: ${e.message}`;
	s += message;
	if (e.frame) s = joinNewLine(s, e.frame);
	if (e.stack) s = joinNewLine(s, e.stack.replace(message, ""));
	if (e.cause) {
		s = joinNewLine(s, "Caused by:");
		s = joinNewLine(s, getErrorMessage(e.cause).split("\n").map((line) => "  " + line).join("\n"));
	}
	return s;
}
function joinNewLine(s1, s2) {
	return s1.replace(/\n+$/, "") + "\n" + s2.replace(/^\n+/, "");
}
//#endregion
export { bindingifySourcemap as a, unwrapBindingResult as i, normalizeBindingError as n, normalizeBindingResult as r, aggregateBindingErrorsIntoJsError as t };
