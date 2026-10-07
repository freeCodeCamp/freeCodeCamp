import { i as __require, t as __commonJSMin } from "./chunk.js";
import { t as require_lib } from "./lib.js";

//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/format-import-prelude.js
var require_format_import_prelude = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function formatImportPrelude$2(layer, media, supports) {
		const parts = [];
		if (typeof layer !== "undefined") {
			let layerParams = "layer";
			if (layer) layerParams = `layer(${layer})`;
			parts.push(layerParams);
		}
		if (typeof supports !== "undefined") parts.push(`supports(${supports})`);
		if (typeof media !== "undefined") parts.push(media);
		return parts.join(" ");
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/base64-encoded-import.js
var require_base64_encoded_import = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const formatImportPrelude$1 = require_format_import_prelude();
	module.exports = function base64EncodedConditionalImport$1(prelude, conditions) {
		if (!conditions?.length) return prelude;
		conditions.reverse();
		const first = conditions.pop();
		let params = `${prelude} ${formatImportPrelude$1(first.layer, first.media, first.supports)}`;
		for (const condition of conditions) params = `'data:text/css;base64,${Buffer.from(`@import ${params}`).toString("base64")}' ${formatImportPrelude$1(condition.layer, condition.media, condition.supports)}`;
		return params;
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/apply-conditions.js
var require_apply_conditions = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const base64EncodedConditionalImport = require_base64_encoded_import();
	module.exports = function applyConditions$1(bundle, atRule) {
		const firstImportStatementIndex = bundle.findIndex((stmt) => stmt.type === "import");
		const lastImportStatementIndex = bundle.findLastIndex((stmt) => stmt.type === "import");
		bundle.forEach((stmt, index) => {
			if (stmt.type === "charset" || stmt.type === "warning") return;
			if (stmt.type === "layer" && (index < lastImportStatementIndex && stmt.conditions?.length || index > firstImportStatementIndex && index < lastImportStatementIndex)) {
				stmt.type = "import";
				stmt.node = stmt.node.clone({
					name: "import",
					params: base64EncodedConditionalImport(`'data:text/css;base64,${Buffer.from(stmt.node.toString()).toString("base64")}'`, stmt.conditions)
				});
				return;
			}
			if (!stmt.conditions?.length) return;
			if (stmt.type === "import") {
				stmt.node.params = base64EncodedConditionalImport(stmt.fullUri, stmt.conditions);
				return;
			}
			let nodes;
			let parent;
			if (stmt.type === "layer") {
				nodes = [stmt.node];
				parent = stmt.node.parent;
			} else {
				nodes = stmt.nodes;
				parent = nodes[0].parent;
			}
			const atRules = [];
			for (const condition of stmt.conditions) {
				if (typeof condition.media !== "undefined") {
					const mediaNode = atRule({
						name: "media",
						params: condition.media,
						source: parent.source
					});
					atRules.push(mediaNode);
				}
				if (typeof condition.supports !== "undefined") {
					const supportsNode = atRule({
						name: "supports",
						params: `(${condition.supports})`,
						source: parent.source
					});
					atRules.push(supportsNode);
				}
				if (typeof condition.layer !== "undefined") {
					const layerNode = atRule({
						name: "layer",
						params: condition.layer,
						source: parent.source
					});
					atRules.push(layerNode);
				}
			}
			const outerAtRule = atRules.shift();
			const innerAtRule = atRules.reduce((previous, next) => {
				previous.append(next);
				return next;
			}, outerAtRule);
			parent.insertBefore(nodes[0], outerAtRule);
			nodes.forEach((node) => {
				node.parent = void 0;
			});
			nodes[0].raws.before = nodes[0].raws.before || "\n";
			innerAtRule.append(nodes);
			stmt.type = "nodes";
			stmt.nodes = [outerAtRule];
			delete stmt.node;
		});
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/apply-raws.js
var require_apply_raws = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function applyRaws$1(bundle) {
		bundle.forEach((stmt, index) => {
			if (index === 0) return;
			if (stmt.parent) {
				const { before } = stmt.parent.node.raws;
				if (stmt.type === "nodes") stmt.nodes[0].raws.before = before;
				else stmt.node.raws.before = before;
			} else if (stmt.type === "nodes") stmt.nodes[0].raws.before = stmt.nodes[0].raws.before || "\n";
		});
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/apply-styles.js
var require_apply_styles = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function applyStyles$1(bundle, styles) {
		styles.nodes = [];
		bundle.forEach((stmt) => {
			if ([
				"charset",
				"import",
				"layer"
			].includes(stmt.type)) {
				stmt.node.parent = void 0;
				styles.append(stmt.node);
			} else if (stmt.type === "nodes") stmt.nodes.forEach((node) => {
				node.parent = void 0;
				styles.append(node);
			});
		});
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/data-url.js
var require_data_url = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const anyDataURLRegexp = /^data:text\/css(?:;(base64|plain))?,/i;
	const base64DataURLRegexp = /^data:text\/css;base64,/i;
	const plainDataURLRegexp = /^data:text\/css;plain,/i;
	function isValid(url) {
		return anyDataURLRegexp.test(url);
	}
	function contents(url) {
		if (base64DataURLRegexp.test(url)) return Buffer.from(url.slice(21), "base64").toString();
		if (plainDataURLRegexp.test(url)) return decodeURIComponent(url.slice(20));
		return decodeURIComponent(url.slice(14));
	}
	module.exports = {
		isValid,
		contents
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/parse-statements.js
var require_parse_statements = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const valueParser = require_lib();
	const { stringify } = valueParser;
	module.exports = function parseStatements$1(result, styles, conditions, from) {
		const statements = [];
		let nodes = [];
		let encounteredNonImportNodes = false;
		styles.each((node) => {
			let stmt;
			if (node.type === "atrule") {
				if (node.name === "import") stmt = parseImport(result, node, conditions, from);
				else if (node.name === "charset") stmt = parseCharset(result, node, conditions, from);
				else if (node.name === "layer" && !encounteredNonImportNodes && !node.nodes) stmt = parseLayer(result, node, conditions, from);
			} else if (node.type !== "comment") encounteredNonImportNodes = true;
			if (stmt) {
				if (nodes.length) {
					statements.push({
						type: "nodes",
						nodes,
						conditions: [...conditions],
						from
					});
					nodes = [];
				}
				statements.push(stmt);
			} else nodes.push(node);
		});
		if (nodes.length) statements.push({
			type: "nodes",
			nodes,
			conditions: [...conditions],
			from
		});
		return statements;
	};
	function parseCharset(result, atRule, conditions, from) {
		if (atRule.prev()) return result.warn("@charset must precede all other statements", { node: atRule });
		return {
			type: "charset",
			node: atRule,
			conditions: [...conditions],
			from
		};
	}
	function parseImport(result, atRule, conditions, from) {
		let prev = atRule.prev();
		if (prev) do {
			if (prev.type === "comment" || prev.type === "atrule" && prev.name === "import") {
				prev = prev.prev();
				continue;
			}
			break;
		} while (prev);
		if (prev) do {
			if (prev.type === "comment" || prev.type === "atrule" && (prev.name === "charset" || prev.name === "layer" && !prev.nodes)) {
				prev = prev.prev();
				continue;
			}
			return result.warn("@import must precede all other statements (besides @charset or empty @layer)", { node: atRule });
		} while (prev);
		if (atRule.nodes) return result.warn("It looks like you didn't end your @import statement correctly. Child nodes are attached to it.", { node: atRule });
		const params = valueParser(atRule.params).nodes;
		const stmt = {
			type: "import",
			uri: "",
			fullUri: "",
			node: atRule,
			conditions: [...conditions],
			from
		};
		let layer;
		let media;
		let supports;
		for (let i = 0; i < params.length; i++) {
			const node = params[i];
			if (node.type === "space" || node.type === "comment") continue;
			if (node.type === "string") {
				if (stmt.uri) return result.warn(`Multiple url's in '${atRule.toString()}'`, { node: atRule });
				if (!node.value) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
				stmt.uri = node.value;
				stmt.fullUri = stringify(node);
				continue;
			}
			if (node.type === "function" && /^url$/i.test(node.value)) {
				if (stmt.uri) return result.warn(`Multiple url's in '${atRule.toString()}'`, { node: atRule });
				if (!node.nodes?.[0]?.value) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
				stmt.uri = node.nodes[0].value;
				stmt.fullUri = stringify(node);
				continue;
			}
			if (!stmt.uri) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
			if ((node.type === "word" || node.type === "function") && /^layer$/i.test(node.value)) {
				if (typeof layer !== "undefined") return result.warn(`Multiple layers in '${atRule.toString()}'`, { node: atRule });
				if (typeof supports !== "undefined") return result.warn(`layers must be defined before support conditions in '${atRule.toString()}'`, { node: atRule });
				if (node.nodes) layer = stringify(node.nodes);
				else layer = "";
				continue;
			}
			if (node.type === "function" && /^supports$/i.test(node.value)) {
				if (typeof supports !== "undefined") return result.warn(`Multiple support conditions in '${atRule.toString()}'`, { node: atRule });
				supports = stringify(node.nodes);
				continue;
			}
			media = stringify(params.slice(i));
			break;
		}
		if (!stmt.uri) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
		if (typeof media !== "undefined" || typeof layer !== "undefined" || typeof supports !== "undefined") stmt.conditions.push({
			layer,
			media,
			supports
		});
		return stmt;
	}
	function parseLayer(result, atRule, conditions, from) {
		return {
			type: "layer",
			node: atRule,
			conditions: [...conditions],
			from
		};
	}
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/process-content.js
var require_process_content = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$2 = __require("path");
	let sugarss;
	module.exports = function processContent$1(result, content, filename, options, postcss) {
		const { plugins } = options;
		const ext = path$2.extname(filename);
		const parserList = [];
		if (ext === ".sss") {
			if (!sugarss)
 /* c8 ignore next 3 */
			try {
				sugarss = __require("sugarss");
			} catch {}
			if (sugarss) return runPostcss(postcss, content, filename, plugins, [sugarss]);
		}
		if (result.opts.syntax?.parse) parserList.push(result.opts.syntax.parse);
		if (result.opts.parser) parserList.push(result.opts.parser);
		parserList.push(null);
		return runPostcss(postcss, content, filename, plugins, parserList);
	};
	function runPostcss(postcss, content, filename, plugins, parsers, index) {
		if (!index) index = 0;
		return postcss(plugins).process(content, {
			from: filename,
			parser: parsers[index]
		}).catch((err) => {
			index++;
			if (index === parsers.length) throw err;
			return runPostcss(postcss, content, filename, plugins, parsers, index);
		});
	}
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/lib/parse-styles.js
var require_parse_styles = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$1 = __require("path");
	const dataURL = require_data_url();
	const parseStatements = require_parse_statements();
	const processContent = require_process_content();
	const resolveId$1 = (id) => id;
	const formatImportPrelude = require_format_import_prelude();
	async function parseStyles$1(result, styles, options, state, conditions, from, postcss) {
		const statements = parseStatements(result, styles, conditions, from);
		for (const stmt of statements) {
			if (stmt.type !== "import" || !isProcessableURL(stmt.uri)) continue;
			if (options.filter && !options.filter(stmt.uri)) continue;
			await resolveImportId(result, stmt, options, state, postcss);
		}
		let charset;
		const beforeBundle = [];
		const bundle = [];
		function handleCharset(stmt) {
			if (!charset) charset = stmt;
			else if (stmt.node.params.toLowerCase() !== charset.node.params.toLowerCase()) throw stmt.node.error(`Incompatible @charset statements:
  ${stmt.node.params} specified in ${stmt.node.source.input.file}
  ${charset.node.params} specified in ${charset.node.source.input.file}`);
		}
		statements.forEach((stmt) => {
			if (stmt.type === "charset") handleCharset(stmt);
			else if (stmt.type === "import") if (stmt.children) stmt.children.forEach((child, index) => {
				if (child.type === "import") beforeBundle.push(child);
				else if (child.type === "layer") beforeBundle.push(child);
				else if (child.type === "charset") handleCharset(child);
				else bundle.push(child);
				if (index === 0) child.parent = stmt;
			});
			else beforeBundle.push(stmt);
			else if (stmt.type === "layer") beforeBundle.push(stmt);
			else if (stmt.type === "nodes") bundle.push(stmt);
		});
		return charset ? [charset, ...beforeBundle.concat(bundle)] : beforeBundle.concat(bundle);
	}
	async function resolveImportId(result, stmt, options, state, postcss) {
		if (dataURL.isValid(stmt.uri)) {
			stmt.children = await loadImportContent(result, stmt, stmt.uri, options, state, postcss);
			return;
		} else if (dataURL.isValid(stmt.from.slice(-1))) throw stmt.node.error(`Unable to import '${stmt.uri}' from a stylesheet that is embedded in a data url`);
		const atRule = stmt.node;
		let sourceFile;
		if (atRule.source?.input?.file) sourceFile = atRule.source.input.file;
		const base = sourceFile ? path$1.dirname(atRule.source.input.file) : options.root;
		const paths = [await options.resolve(stmt.uri, base, options, atRule)].flat();
		const resolved = await Promise.all(paths.map((file) => {
			return !path$1.isAbsolute(file) ? resolveId$1(file, base, options, atRule) : file;
		}));
		resolved.forEach((file) => {
			result.messages.push({
				type: "dependency",
				plugin: "postcss-import",
				file,
				parent: sourceFile
			});
		});
		stmt.children = (await Promise.all(resolved.map((file) => {
			return loadImportContent(result, stmt, file, options, state, postcss);
		}))).flat().filter((x) => !!x);
	}
	async function loadImportContent(result, stmt, filename, options, state, postcss) {
		const atRule = stmt.node;
		const { conditions, from } = stmt;
		const stmtDuplicateCheckKey = conditions.map((condition) => formatImportPrelude(condition.layer, condition.media, condition.supports)).join(":");
		if (options.skipDuplicates) {
			if (state.importedFiles[filename]?.[stmtDuplicateCheckKey]) return;
			if (!state.importedFiles[filename]) state.importedFiles[filename] = {};
			state.importedFiles[filename][stmtDuplicateCheckKey] = true;
		}
		if (from.includes(filename)) return;
		const content = await options.load(filename, options);
		if (content.trim() === "" && options.warnOnEmpty) {
			result.warn(`${filename} is empty`, { node: atRule });
			return;
		}
		if (options.skipDuplicates && state.hashFiles[content]?.[stmtDuplicateCheckKey]) return;
		const importedResult = await processContent(result, content, filename, options, postcss);
		const styles = importedResult.root;
		result.messages = result.messages.concat(importedResult.messages);
		if (options.skipDuplicates) {
			if (!styles.some((child) => {
				return child.type === "atrule" && child.name === "import";
			})) {
				if (!state.hashFiles[content]) state.hashFiles[content] = {};
				state.hashFiles[content][stmtDuplicateCheckKey] = true;
			}
		}
		return parseStyles$1(result, styles, options, state, conditions, [...from, filename], postcss);
	}
	function isProcessableURL(uri) {
		if (/^(?:[a-z]+:)?\/\//i.test(uri)) return false;
		try {
			if (new URL(uri, "https://example.com").search) return false;
		} catch {}
		return true;
	}
	module.exports = parseStyles$1;
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-import@16.1.1_postcss@8.5.6/node_modules/postcss-import/index.js
var require_postcss_import = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path = __require("path");
	const applyConditions = require_apply_conditions();
	const applyRaws = require_apply_raws();
	const applyStyles = require_apply_styles();
	const loadContent = () => "";
	const parseStyles = require_parse_styles();
	const resolveId = (id) => id;
	function AtImport(options) {
		options = {
			root: process.cwd(),
			path: [],
			skipDuplicates: true,
			resolve: resolveId,
			load: loadContent,
			plugins: [],
			addModulesDirectories: [],
			warnOnEmpty: true,
			...options
		};
		options.root = path.resolve(options.root);
		if (typeof options.path === "string") options.path = [options.path];
		if (!Array.isArray(options.path)) options.path = [];
		options.path = options.path.map((p) => path.resolve(options.root, p));
		return {
			postcssPlugin: "postcss-import",
			async Once(styles, { result, atRule, postcss }) {
				const state = {
					importedFiles: {},
					hashFiles: {}
				};
				if (styles.source?.input?.file) state.importedFiles[styles.source.input.file] = {};
				if (options.plugins && !Array.isArray(options.plugins)) throw new Error("plugins option must be an array");
				const bundle = await parseStyles(result, styles, options, state, [], [], postcss);
				applyRaws(bundle);
				applyConditions(bundle, atRule);
				applyStyles(bundle, styles);
			}
		};
	}
	AtImport.postcss = true;
	module.exports = AtImport;
}));

//#endregion
export default require_postcss_import();

export {  };