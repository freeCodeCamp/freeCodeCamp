/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("./DefaultStatsFactoryPlugin").KnownStatsChunkGroup} KnownStatsChunkGroup */
/** @typedef {import("./StatsPrinter")} StatsPrinter */
/** @typedef {import("./StatsPrinter").KnownStatsPrinterColorFn} KnownStatsPrinterColorFn */
/** @typedef {import("./StatsPrinter").KnownStatsPrinterFormaters} KnownStatsPrinterFormaters */
/** @typedef {import("./StatsPrinter").StatsPrinterContext} StatsPrinterContext */

const DATA_URI_CONTENT_LENGTH = 16;
const MAX_MODULE_IDENTIFIER_LENGTH = 80;

/**
 * @param {number} n a number
 * @param {string} singular singular
 * @param {string} plural plural
 * @returns {string} if n is 1, singular, else plural
 */
const plural = (n, singular, plural) => (n === 1 ? singular : plural);

/**
 * @param {Record<string, number>} sizes sizes by source type
 * @param {StatsPrinterContext} options options
 * @returns {string | undefined} text
 */
const printSizes = (sizes, { formatSize = n => `${n}` }) => {
	const keys = Object.keys(sizes);
	if (keys.length > 1) {
		return keys.map(key => `${formatSize(sizes[key])} (${key})`).join(" ");
	} else if (keys.length === 1) {
		return formatSize(sizes[keys[0]]);
	}
};

/**
 * @param {string} resource resource
 * @returns {string} resource name for display
 */
const getResourceName = resource => {
	const dataUrl = /^data:[^,]+,/.exec(resource);
	if (!dataUrl) return resource;

	const len = dataUrl[0].length + DATA_URI_CONTENT_LENGTH;
	if (resource.length < len) return resource;
	return `${resource.slice(
		0,
		Math.min(resource.length - /* '..'.length */ 2, len)
	)}..`;
};

/**
 * @param {string} name module name
 * @returns {[string,string]} prefix and module name
 */
const getModuleName = name => {
	const [, prefix, resource] =
		/** @type {[any, string, string]} */
		(/** @type {unknown} */ (/^(.*!)?([^!]*)$/.exec(name)));

	if (resource.length > MAX_MODULE_IDENTIFIER_LENGTH) {
		const truncatedResource = `${resource.slice(
			0,
			Math.min(
				resource.length - /* '...(truncated)'.length */ 14,
				MAX_MODULE_IDENTIFIER_LENGTH
			)
		)}...(truncated)`;

		return [prefix, getResourceName(truncatedResource)];
	}

	return [prefix, getResourceName(resource)];
};

/**
 * @param {string} str string
 * @param {function(string): string} fn function to apply to each line
 * @returns {string} joined string
 */
const mapLines = (str, fn) => str.split("\n").map(fn).join("\n");

/**
 * @param {number} n a number
 * @returns {string} number as two digit string, leading 0
 */
const twoDigit = n => (n >= 10 ? `${n}` : `0${n}`);

/**
 * @param {string | number} id an id
 * @returns {boolean | string} is i
 */
const isValidId = id => typeof id === "number" || id;

/**
 * @template T
 * @param {Array<T> | undefined} list of items
 * @param {number} count number of items to show
 * @returns {string} string representation of list
 */
const moreCount = (list, count) =>
	list && list.length > 0 ? `+ ${count}` : `${count}`;

/**
 * @template T
 * @template {keyof T} K
 * @typedef {{ [P in K]-?: T[P] }} WithRequired
 */

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation">, printer: StatsPrinter) => string | undefined>} */
const COMPILATION_SIMPLE_PRINTERS = {
	"compilation.summary!": (
		_,
		{
			type,
			bold,
			green,
			red,
			yellow,
			formatDateTime,
			formatTime,
			compilation: {
				name,
				hash,
				version,
				time,
				builtAt,
				errorsCount,
				warningsCount
			}
		}
	) => {
		const root = type === "compilation.summary!";
		const warningsMessage =
			/** @type {number} */ (warningsCount) > 0
				? yellow(
						`${warningsCount} ${plural(/** @type {number} */ (warningsCount), "warning", "warnings")}`
					)
				: "";
		const errorsMessage =
			/** @type {number} */ (errorsCount) > 0
				? red(
						`${errorsCount} ${plural(/** @type {number} */ (errorsCount), "error", "errors")}`
					)
				: "";
		const timeMessage = root && time ? ` in ${formatTime(time)}` : "";
		const hashMessage = hash ? ` (${hash})` : "";
		const builtAtMessage =
			root && builtAt ? `${formatDateTime(builtAt)}: ` : "";
		const versionMessage = root && version ? `webpack ${version}` : "";
		const nameMessage =
			root && name
				? bold(name)
				: name
					? `Child ${bold(name)}`
					: root
						? ""
						: "Child";
		const subjectMessage =
			nameMessage && versionMessage
				? `${nameMessage} (${versionMessage})`
				: versionMessage || nameMessage || "webpack";
		let statusMessage;
		if (errorsMessage && warningsMessage) {
			statusMessage = `compiled with ${errorsMessage} and ${warningsMessage}`;
		} else if (errorsMessage) {
			statusMessage = `compiled with ${errorsMessage}`;
		} else if (warningsMessage) {
			statusMessage = `compiled with ${warningsMessage}`;
		} else if (errorsCount === 0 && warningsCount === 0) {
			statusMessage = `compiled ${green("successfully")}`;
		} else {
			statusMessage = "compiled";
		}
		if (
			builtAtMessage ||
			versionMessage ||
			errorsMessage ||
			warningsMessage ||
			(errorsCount === 0 && warningsCount === 0) ||
			timeMessage ||
			hashMessage
		)
			return `${builtAtMessage}${subjectMessage} ${statusMessage}${timeMessage}${hashMessage}`;
	},
	"compilation.filteredWarningDetailsCount": count =>
		count
			? `${count} ${plural(
					count,
					"warning has",
					"warnings have"
				)} detailed information that is not shown.\nUse 'stats.errorDetails: true' resp. '--stats-error-details' to show it.`
			: undefined,
	"compilation.filteredErrorDetailsCount": (count, { yellow }) =>
		count
			? yellow(
					`${count} ${plural(
						count,
						"error has",
						"errors have"
					)} detailed information that is not shown.\nUse 'stats.errorDetails: true' resp. '--stats-error-details' to show it.`
				)
			: undefined,
	"compilation.env": (env, { bold }) =>
		env
			? `Environment (--env): ${bold(JSON.stringify(env, null, 2))}`
			: undefined,
	"compilation.publicPath": (publicPath, { bold }) =>
		`PublicPath: ${bold(publicPath || "(none)")}`,
	"compilation.entrypoints": (entrypoints, context, printer) =>
		Array.isArray(entrypoints)
			? undefined
			: printer.print(context.type, Object.values(entrypoints), {
					...context,
					chunkGroupKind: "Entrypoint"
				}),
	"compilation.namedChunkGroups": (namedChunkGroups, context, printer) => {
		if (!Array.isArray(namedChunkGroups)) {
			const {
				compilation: { entrypoints }
			} = context;
			let chunkGroups = Object.values(namedChunkGroups);
			if (entrypoints) {
				chunkGroups = chunkGroups.filter(
					group =>
						!Object.prototype.hasOwnProperty.call(entrypoints, group.name)
				);
			}
			return printer.print(context.type, chunkGroups, {
				...context,
				chunkGroupKind: "Chunk Group"
			});
		}
	},
	"compilation.assetsByChunkName": () => "",

	"compilation.filteredModules": (
		filteredModules,
		{ compilation: { modules } }
	) =>
		filteredModules > 0
			? `${moreCount(modules, filteredModules)} ${plural(
					filteredModules,
					"module",
					"modules"
				)}`
			: undefined,
	"compilation.filteredAssets": (
		filteredAssets,
		{ compilation: { assets } }
	) =>
		filteredAssets > 0
			? `${moreCount(assets, filteredAssets)} ${plural(
					filteredAssets,
					"asset",
					"assets"
				)}`
			: undefined,
	"compilation.logging": (logging, context, printer) =>
		Array.isArray(logging)
			? undefined
			: printer.print(
					context.type,
					Object.entries(logging).map(([name, value]) => ({ ...value, name })),
					context
				),
	"compilation.warningsInChildren!": (_, { yellow, compilation }) => {
		if (
			!compilation.children &&
			/** @type {number} */ (compilation.warningsCount) > 0 &&
			compilation.warnings
		) {
			const childWarnings =
				/** @type {number} */ (compilation.warningsCount) -
				compilation.warnings.length;
			if (childWarnings > 0) {
				return yellow(
					`${childWarnings} ${plural(
						childWarnings,
						"WARNING",
						"WARNINGS"
					)} in child compilations${
						compilation.children
							? ""
							: " (Use 'stats.children: true' resp. '--stats-children' for more details)"
					}`
				);
			}
		}
	},
	"compilation.errorsInChildren!": (_, { red, compilation }) => {
		if (
			!compilation.children &&
			/** @type {number} */ (compilation.errorsCount) > 0 &&
			compilation.errors
		) {
			const childErrors =
				/** @type {number} */ (compilation.errorsCount) -
				compilation.errors.length;
			if (childErrors > 0) {
				return red(
					`${childErrors} ${plural(
						childErrors,
						"ERROR",
						"ERRORS"
					)} in child compilations${
						compilation.children
							? ""
							: " (Use 'stats.children: true' resp. '--stats-children' for more details)"
					}`
				);
			}
		}
	}
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "asset">, printer: StatsPrinter) => string | undefined>} */
const ASSET_SIMPLE_PRINTERS = {
	"asset.type": type => type,
	"asset.name": (name, { formatFilename, asset: { isOverSizeLimit } }) =>
		formatFilename(name, isOverSizeLimit),
	"asset.size": (size, { asset: { isOverSizeLimit }, yellow, formatSize }) =>
		isOverSizeLimit ? yellow(formatSize(size)) : formatSize(size),
	"asset.emitted": (emitted, { green, formatFlag }) =>
		emitted ? green(formatFlag("emitted")) : undefined,
	"asset.comparedForEmit": (comparedForEmit, { yellow, formatFlag }) =>
		comparedForEmit ? yellow(formatFlag("compared for emit")) : undefined,
	"asset.cached": (cached, { green, formatFlag }) =>
		cached ? green(formatFlag("cached")) : undefined,
	"asset.isOverSizeLimit": (isOverSizeLimit, { yellow, formatFlag }) =>
		isOverSizeLimit ? yellow(formatFlag("big")) : undefined,

	"asset.info.immutable": (immutable, { green, formatFlag }) =>
		immutable ? green(formatFlag("immutable")) : undefined,
	"asset.info.javascriptModule": (javascriptModule, { formatFlag }) =>
		javascriptModule ? formatFlag("javascript module") : undefined,
	"asset.info.sourceFilename": (sourceFilename, { formatFlag }) =>
		sourceFilename
			? formatFlag(
					sourceFilename === true
						? "from source file"
						: `from: ${sourceFilename}`
				)
			: undefined,
	"asset.info.development": (development, { green, formatFlag }) =>
		development ? green(formatFlag("dev")) : undefined,
	"asset.info.hotModuleReplacement": (
		hotModuleReplacement,
		{ green, formatFlag }
	) => (hotModuleReplacement ? green(formatFlag("hmr")) : undefined),
	"asset.separator!": () => "\n",
	"asset.filteredRelated": (filteredRelated, { asset: { related } }) =>
		filteredRelated > 0
			? `${moreCount(related, filteredRelated)} related ${plural(
					filteredRelated,
					"asset",
					"assets"
				)}`
			: undefined,
	"asset.filteredChildren": (filteredChildren, { asset: { children } }) =>
		filteredChildren > 0
			? `${moreCount(children, filteredChildren)} ${plural(
					filteredChildren,
					"asset",
					"assets"
				)}`
			: undefined,

	assetChunk: (id, { formatChunkId }) => formatChunkId(id),

	assetChunkName: name => name,
	assetChunkIdHint: name => name
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "module">, printer: StatsPrinter) => string | undefined>} */
const MODULE_SIMPLE_PRINTERS = {
	"module.type": type => (type !== "module" ? type : undefined),
	"module.id": (id, { formatModuleId }) =>
		isValidId(id) ? formatModuleId(id) : undefined,
	"module.name": (name, { bold }) => {
		const [prefix, resource] = getModuleName(name);
		return `${prefix || ""}${bold(resource || "")}`;
	},
	"module.identifier": identifier => undefined,
	"module.layer": (layer, { formatLayer }) =>
		layer ? formatLayer(layer) : undefined,
	"module.sizes": printSizes,
	"module.chunks[]": (id, { formatChunkId }) => formatChunkId(id),
	"module.depth": (depth, { formatFlag }) =>
		depth !== null ? formatFlag(`depth ${depth}`) : undefined,
	"module.cacheable": (cacheable, { formatFlag, red }) =>
		cacheable === false ? red(formatFlag("not cacheable")) : undefined,
	"module.orphan": (orphan, { formatFlag, yellow }) =>
		orphan ? yellow(formatFlag("orphan")) : undefined,
	"module.runtime": (runtime, { formatFlag, yellow }) =>
		runtime ? yellow(formatFlag("runtime")) : undefined,
	"module.optional": (optional, { formatFlag, yellow }) =>
		optional ? yellow(formatFlag("optional")) : undefined,
	"module.dependent": (dependent, { formatFlag, cyan }) =>
		dependent ? cyan(formatFlag("dependent")) : undefined,
	"module.built": (built, { formatFlag, yellow }) =>
		built ? yellow(formatFlag("built")) : undefined,
	"module.codeGenerated": (codeGenerated, { formatFlag, yellow }) =>
		codeGenerated ? yellow(formatFlag("code generated")) : undefined,
	"module.buildTimeExecuted": (buildTimeExecuted, { formatFlag, green }) =>
		buildTimeExecuted ? green(formatFlag("build time executed")) : undefined,
	"module.cached": (cached, { formatFlag, green }) =>
		cached ? green(formatFlag("cached")) : undefined,
	"module.assets": (assets, { formatFlag, magenta }) =>
		assets && assets.length
			? magenta(
					formatFlag(
						`${assets.length} ${plural(assets.length, "asset", "assets")}`
					)
				)
			: undefined,
	"module.warnings": (warnings, { formatFlag, yellow }) =>
		warnings === true
			? yellow(formatFlag("warnings"))
			: warnings
				? yellow(
						formatFlag(`${warnings} ${plural(warnings, "warning", "warnings")}`)
					)
				: undefined,
	"module.errors": (errors, { formatFlag, red }) =>
		errors === true
			? red(formatFlag("errors"))
			: errors
				? red(formatFlag(`${errors} ${plural(errors, "error", "errors")}`))
				: undefined,
	"module.providedExports": (providedExports, { formatFlag, cyan }) => {
		if (Array.isArray(providedExports)) {
			if (providedExports.length === 0) return cyan(formatFlag("no exports"));
			return cyan(formatFlag(`exports: ${providedExports.join(", ")}`));
		}
	},
	"module.usedExports": (usedExports, { formatFlag, cyan, module }) => {
		if (usedExports !== true) {
			if (usedExports === null) return cyan(formatFlag("used exports unknown"));
			if (usedExports === false) return cyan(formatFlag("module unused"));
			if (Array.isArray(usedExports)) {
				if (usedExports.length === 0)
					return cyan(formatFlag("no exports used"));
				const providedExportsCount = Array.isArray(module.providedExports)
					? module.providedExports.length
					: null;
				if (
					providedExportsCount !== null &&
					providedExportsCount === usedExports.length
				) {
					return cyan(formatFlag("all exports used"));
				}

				return cyan(
					formatFlag(`only some exports used: ${usedExports.join(", ")}`)
				);
			}
		}
	},
	"module.optimizationBailout[]": (optimizationBailout, { yellow }) =>
		yellow(optimizationBailout),
	"module.issuerPath": (issuerPath, { module }) =>
		module.profile ? undefined : "",
	"module.profile": profile => undefined,
	"module.filteredModules": (filteredModules, { module: { modules } }) =>
		filteredModules > 0
			? `${moreCount(modules, filteredModules)} nested ${plural(
					filteredModules,
					"module",
					"modules"
				)}`
			: undefined,
	"module.filteredReasons": (filteredReasons, { module: { reasons } }) =>
		filteredReasons > 0
			? `${moreCount(reasons, filteredReasons)} ${plural(
					filteredReasons,
					"reason",
					"reasons"
				)}`
			: undefined,
	"module.filteredChildren": (filteredChildren, { module: { children } }) =>
		filteredChildren > 0
			? `${moreCount(children, filteredChildren)} ${plural(
					filteredChildren,
					"module",
					"modules"
				)}`
			: undefined,
	"module.separator!": () => "\n"
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleIssuer">, printer: StatsPrinter) => string | undefined>} */
const MODULE_ISSUER_PRINTERS = {
	"moduleIssuer.id": (id, { formatModuleId }) => formatModuleId(id),
	"moduleIssuer.profile.total": (value, { formatTime }) => formatTime(value)
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleReason">, printer: StatsPrinter) => string | undefined>} */
const MODULE_REASON_PRINTERS = {
	"moduleReason.type": type => type,
	"moduleReason.userRequest": (userRequest, { cyan }) =>
		cyan(getResourceName(userRequest)),
	"moduleReason.moduleId": (moduleId, { formatModuleId }) =>
		isValidId(moduleId) ? formatModuleId(moduleId) : undefined,
	"moduleReason.module": (module, { magenta }) => magenta(module),
	"moduleReason.loc": loc => loc,
	"moduleReason.explanation": (explanation, { cyan }) => cyan(explanation),
	"moduleReason.active": (active, { formatFlag }) =>
		active ? undefined : formatFlag("inactive"),
	"moduleReason.resolvedModule": (module, { magenta }) => magenta(module),
	"moduleReason.filteredChildren": (
		filteredChildren,
		{ moduleReason: { children } }
	) =>
		filteredChildren > 0
			? `${moreCount(children, filteredChildren)} ${plural(
					filteredChildren,
					"reason",
					"reasons"
				)}`
			: undefined
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "profile">, printer: StatsPrinter) => string | undefined>} */
const MODULE_PROFILE_PRINTERS = {
	"module.profile.total": (value, { formatTime }) => formatTime(value),
	"module.profile.resolving": (value, { formatTime }) =>
		`resolving: ${formatTime(value)}`,
	"module.profile.restoring": (value, { formatTime }) =>
		`restoring: ${formatTime(value)}`,
	"module.profile.integration": (value, { formatTime }) =>
		`integration: ${formatTime(value)}`,
	"module.profile.building": (value, { formatTime }) =>
		`building: ${formatTime(value)}`,
	"module.profile.storing": (value, { formatTime }) =>
		`storing: ${formatTime(value)}`,
	"module.profile.additionalResolving": (value, { formatTime }) =>
		value ? `additional resolving: ${formatTime(value)}` : undefined,
	"module.profile.additionalIntegration": (value, { formatTime }) =>
		value ? `additional integration: ${formatTime(value)}` : undefined
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "chunkGroupKind" | "chunkGroup">, printer: StatsPrinter) => string | undefined>} */
const CHUNK_GROUP_PRINTERS = {
	"chunkGroup.kind!": (_, { chunkGroupKind }) => chunkGroupKind,
	"chunkGroup.separator!": () => "\n",
	"chunkGroup.name": (name, { bold }) => bold(name),
	"chunkGroup.isOverSizeLimit": (isOverSizeLimit, { formatFlag, yellow }) =>
		isOverSizeLimit ? yellow(formatFlag("big")) : undefined,
	"chunkGroup.assetsSize": (size, { formatSize }) =>
		size ? formatSize(size) : undefined,
	"chunkGroup.auxiliaryAssetsSize": (size, { formatSize }) =>
		size ? `(${formatSize(size)})` : undefined,
	"chunkGroup.filteredAssets": (n, { chunkGroup: { assets } }) =>
		n > 0
			? `${moreCount(assets, n)} ${plural(n, "asset", "assets")}`
			: undefined,
	"chunkGroup.filteredAuxiliaryAssets": (
		n,
		{ chunkGroup: { auxiliaryAssets } }
	) =>
		n > 0
			? `${moreCount(auxiliaryAssets, n)} auxiliary ${plural(
					n,
					"asset",
					"assets"
				)}`
			: undefined,
	"chunkGroup.is!": () => "=",
	"chunkGroupAsset.name": (asset, { green }) => green(asset),
	"chunkGroupAsset.size": (size, { formatSize, chunkGroup }) =>
		chunkGroup.assets &&
		(chunkGroup.assets.length > 1 ||
		(chunkGroup.auxiliaryAssets && chunkGroup.auxiliaryAssets.length > 0)
			? formatSize(size)
			: undefined),
	"chunkGroup.children": (children, context, printer) =>
		Array.isArray(children)
			? undefined
			: printer.print(
					context.type,
					Object.keys(children).map(key => ({
						type: key,
						children: children[key]
					})),
					context
				),
	"chunkGroupChildGroup.type": type => `${type}:`,
	"chunkGroupChild.assets[]": (file, { formatFilename }) =>
		formatFilename(file),
	"chunkGroupChild.chunks[]": (id, { formatChunkId }) => formatChunkId(id),
	"chunkGroupChild.name": name => (name ? `(name: ${name})` : undefined)
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "chunk">, printer: StatsPrinter) => string | undefined>} */
const CHUNK_PRINTERS = {
	"chunk.id": (id, { formatChunkId }) => formatChunkId(id),
	"chunk.files[]": (file, { formatFilename }) => formatFilename(file),
	"chunk.names[]": name => name,
	"chunk.idHints[]": name => name,
	"chunk.runtime[]": name => name,
	"chunk.sizes": (sizes, context) => printSizes(sizes, context),
	"chunk.parents[]": (parents, context) =>
		context.formatChunkId(parents, "parent"),
	"chunk.siblings[]": (siblings, context) =>
		context.formatChunkId(siblings, "sibling"),
	"chunk.children[]": (children, context) =>
		context.formatChunkId(children, "child"),
	"chunk.childrenByOrder": (childrenByOrder, context, printer) =>
		Array.isArray(childrenByOrder)
			? undefined
			: printer.print(
					context.type,
					Object.keys(childrenByOrder).map(key => ({
						type: key,
						children: childrenByOrder[key]
					})),
					context
				),
	"chunk.childrenByOrder[].type": type => `${type}:`,
	"chunk.childrenByOrder[].children[]": (id, { formatChunkId }) =>
		isValidId(id) ? formatChunkId(id) : undefined,
	"chunk.entry": (entry, { formatFlag, yellow }) =>
		entry ? yellow(formatFlag("entry")) : undefined,
	"chunk.initial": (initial, { formatFlag, yellow }) =>
		initial ? yellow(formatFlag("initial")) : undefined,
	"chunk.rendered": (rendered, { formatFlag, green }) =>
		rendered ? green(formatFlag("rendered")) : undefined,
	"chunk.recorded": (recorded, { formatFlag, green }) =>
		recorded ? green(formatFlag("recorded")) : undefined,
	"chunk.reason": (reason, { yellow }) => (reason ? yellow(reason) : undefined),
	"chunk.filteredModules": (filteredModules, { chunk: { modules } }) =>
		filteredModules > 0
			? `${moreCount(modules, filteredModules)} chunk ${plural(
					filteredModules,
					"module",
					"modules"
				)}`
			: undefined,
	"chunk.separator!": () => "\n",

	"chunkOrigin.request": request => request,
	"chunkOrigin.moduleId": (moduleId, { formatModuleId }) =>
		isValidId(moduleId) ? formatModuleId(moduleId) : undefined,
	"chunkOrigin.moduleName": (moduleName, { bold }) => bold(moduleName),
	"chunkOrigin.loc": loc => loc
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "error">, printer: StatsPrinter) => string | undefined>} */
const ERROR_PRINTERS = {
	"error.compilerPath": (compilerPath, { bold }) =>
		compilerPath ? bold(`(${compilerPath})`) : undefined,
	"error.chunkId": (chunkId, { formatChunkId }) =>
		isValidId(chunkId) ? formatChunkId(chunkId) : undefined,
	"error.chunkEntry": (chunkEntry, { formatFlag }) =>
		chunkEntry ? formatFlag("entry") : undefined,
	"error.chunkInitial": (chunkInitial, { formatFlag }) =>
		chunkInitial ? formatFlag("initial") : undefined,
	"error.file": (file, { bold }) => bold(file),
	"error.moduleName": (moduleName, { bold }) =>
		moduleName.includes("!")
			? `${bold(moduleName.replace(/^(\s|\S)*!/, ""))} (${moduleName})`
			: `${bold(moduleName)}`,
	"error.loc": (loc, { green }) => green(loc),
	"error.message": (message, { bold, formatError }) =>
		message.includes("\u001B[") ? message : bold(formatError(message)),
	"error.details": (details, { formatError }) => formatError(details),
	"error.filteredDetails": filteredDetails =>
		filteredDetails ? `+ ${filteredDetails} hidden lines` : undefined,
	"error.stack": stack => stack,
	"error.moduleTrace": moduleTrace => undefined,
	"error.separator!": () => "\n"
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "logging">, printer: StatsPrinter) => string | undefined>} */
const LOG_ENTRY_PRINTERS = {
	"loggingEntry(error).loggingEntry.message": (message, { red }) =>
		mapLines(message, x => `<e> ${red(x)}`),
	"loggingEntry(warn).loggingEntry.message": (message, { yellow }) =>
		mapLines(message, x => `<w> ${yellow(x)}`),
	"loggingEntry(info).loggingEntry.message": (message, { green }) =>
		mapLines(message, x => `<i> ${green(x)}`),
	"loggingEntry(log).loggingEntry.message": (message, { bold }) =>
		mapLines(message, x => `    ${bold(x)}`),
	"loggingEntry(debug).loggingEntry.message": message =>
		mapLines(message, x => `    ${x}`),
	"loggingEntry(trace).loggingEntry.message": message =>
		mapLines(message, x => `    ${x}`),
	"loggingEntry(status).loggingEntry.message": (message, { magenta }) =>
		mapLines(message, x => `<s> ${magenta(x)}`),
	"loggingEntry(profile).loggingEntry.message": (message, { magenta }) =>
		mapLines(message, x => `<p> ${magenta(x)}`),
	"loggingEntry(profileEnd).loggingEntry.message": (message, { magenta }) =>
		mapLines(message, x => `</p> ${magenta(x)}`),
	"loggingEntry(time).loggingEntry.message": (message, { magenta }) =>
		mapLines(message, x => `<t> ${magenta(x)}`),
	"loggingEntry(group).loggingEntry.message": (message, { cyan }) =>
		mapLines(message, x => `<-> ${cyan(x)}`),
	"loggingEntry(groupCollapsed).loggingEntry.message": (message, { cyan }) =>
		mapLines(message, x => `<+> ${cyan(x)}`),
	"loggingEntry(clear).loggingEntry": () => "    -------",
	"loggingEntry(groupCollapsed).loggingEntry.children": () => "",
	"loggingEntry.trace[]": trace =>
		trace ? mapLines(trace, x => `| ${x}`) : undefined,

	loggingGroup: loggingGroup =>
		loggingGroup.entries.length === 0 ? "" : undefined,
	"loggingGroup.debug": (flag, { red }) => (flag ? red("DEBUG") : undefined),
	"loggingGroup.name": (name, { bold }) => bold(`LOG from ${name}`),
	"loggingGroup.separator!": () => "\n",
	"loggingGroup.filteredEntries": filteredEntries =>
		filteredEntries > 0 ? `+ ${filteredEntries} hidden lines` : undefined
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleTraceItem">, printer: StatsPrinter) => string | undefined>} */
const MODULE_TRACE_ITEM_PRINTERS = {
	"moduleTraceItem.originName": originName => originName
};

/** @type {Record<string, (thing: any, context: Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleTraceDependency">, printer: StatsPrinter) => string | undefined>} */
const MODULE_TRACE_DEPENDENCY_PRINTERS = {
	"moduleTraceDependency.loc": loc => loc
};

/** @type {Record<string, string | function(any): string>} */
const ITEM_NAMES = {
	"compilation.assets[]": "asset",
	"compilation.modules[]": "module",
	"compilation.chunks[]": "chunk",
	"compilation.entrypoints[]": "chunkGroup",
	"compilation.namedChunkGroups[]": "chunkGroup",
	"compilation.errors[]": "error",
	"compilation.warnings[]": "error",
	"compilation.logging[]": "loggingGroup",
	"compilation.children[]": "compilation",
	"asset.related[]": "asset",
	"asset.children[]": "asset",
	"asset.chunks[]": "assetChunk",
	"asset.auxiliaryChunks[]": "assetChunk",
	"asset.chunkNames[]": "assetChunkName",
	"asset.chunkIdHints[]": "assetChunkIdHint",
	"asset.auxiliaryChunkNames[]": "assetChunkName",
	"asset.auxiliaryChunkIdHints[]": "assetChunkIdHint",
	"chunkGroup.assets[]": "chunkGroupAsset",
	"chunkGroup.auxiliaryAssets[]": "chunkGroupAsset",
	"chunkGroupChild.assets[]": "chunkGroupAsset",
	"chunkGroupChild.auxiliaryAssets[]": "chunkGroupAsset",
	"chunkGroup.children[]": "chunkGroupChildGroup",
	"chunkGroupChildGroup.children[]": "chunkGroupChild",
	"module.modules[]": "module",
	"module.children[]": "module",
	"module.reasons[]": "moduleReason",
	"moduleReason.children[]": "moduleReason",
	"module.issuerPath[]": "moduleIssuer",
	"chunk.origins[]": "chunkOrigin",
	"chunk.modules[]": "module",
	"loggingGroup.entries[]": logEntry =>
		`loggingEntry(${logEntry.type}).loggingEntry`,
	"loggingEntry.children[]": logEntry =>
		`loggingEntry(${logEntry.type}).loggingEntry`,
	"error.moduleTrace[]": "moduleTraceItem",
	"moduleTraceItem.dependencies[]": "moduleTraceDependency"
};

const ERROR_PREFERRED_ORDER = [
	"compilerPath",
	"chunkId",
	"chunkEntry",
	"chunkInitial",
	"file",
	"separator!",
	"moduleName",
	"loc",
	"separator!",
	"message",
	"separator!",
	"details",
	"separator!",
	"filteredDetails",
	"separator!",
	"stack",
	"separator!",
	"missing",
	"separator!",
	"moduleTrace"
];

/** @type {Record<string, string[]>} */
const PREFERRED_ORDERS = {
	compilation: [
		"name",
		"hash",
		"version",
		"time",
		"builtAt",
		"env",
		"publicPath",
		"assets",
		"filteredAssets",
		"entrypoints",
		"namedChunkGroups",
		"chunks",
		"modules",
		"filteredModules",
		"children",
		"logging",
		"warnings",
		"warningsInChildren!",
		"filteredWarningDetailsCount",
		"errors",
		"errorsInChildren!",
		"filteredErrorDetailsCount",
		"summary!",
		"needAdditionalPass"
	],
	asset: [
		"type",
		"name",
		"size",
		"chunks",
		"auxiliaryChunks",
		"emitted",
		"comparedForEmit",
		"cached",
		"info",
		"isOverSizeLimit",
		"chunkNames",
		"auxiliaryChunkNames",
		"chunkIdHints",
		"auxiliaryChunkIdHints",
		"related",
		"filteredRelated",
		"children",
		"filteredChildren"
	],
	"asset.info": [
		"immutable",
		"sourceFilename",
		"javascriptModule",
		"development",
		"hotModuleReplacement"
	],
	chunkGroup: [
		"kind!",
		"name",
		"isOverSizeLimit",
		"assetsSize",
		"auxiliaryAssetsSize",
		"is!",
		"assets",
		"filteredAssets",
		"auxiliaryAssets",
		"filteredAuxiliaryAssets",
		"separator!",
		"children"
	],
	chunkGroupAsset: ["name", "size"],
	chunkGroupChildGroup: ["type", "children"],
	chunkGroupChild: ["assets", "chunks", "name"],
	module: [
		"type",
		"name",
		"identifier",
		"id",
		"layer",
		"sizes",
		"chunks",
		"depth",
		"cacheable",
		"orphan",
		"runtime",
		"optional",
		"dependent",
		"built",
		"codeGenerated",
		"cached",
		"assets",
		"failed",
		"warnings",
		"errors",
		"children",
		"filteredChildren",
		"providedExports",
		"usedExports",
		"optimizationBailout",
		"reasons",
		"filteredReasons",
		"issuerPath",
		"profile",
		"modules",
		"filteredModules"
	],
	moduleReason: [
		"active",
		"type",
		"userRequest",
		"moduleId",
		"module",
		"resolvedModule",
		"loc",
		"explanation",
		"children",
		"filteredChildren"
	],
	"module.profile": [
		"total",
		"separator!",
		"resolving",
		"restoring",
		"integration",
		"building",
		"storing",
		"additionalResolving",
		"additionalIntegration"
	],
	chunk: [
		"id",
		"runtime",
		"files",
		"names",
		"idHints",
		"sizes",
		"parents",
		"siblings",
		"children",
		"childrenByOrder",
		"entry",
		"initial",
		"rendered",
		"recorded",
		"reason",
		"separator!",
		"origins",
		"separator!",
		"modules",
		"separator!",
		"filteredModules"
	],
	chunkOrigin: ["request", "moduleId", "moduleName", "loc"],
	error: ERROR_PREFERRED_ORDER,
	warning: ERROR_PREFERRED_ORDER,
	"chunk.childrenByOrder[]": ["type", "children"],
	loggingGroup: [
		"debug",
		"name",
		"separator!",
		"entries",
		"separator!",
		"filteredEntries"
	],
	loggingEntry: ["message", "trace", "children"]
};

/** @typedef {(items: string[]) => string | undefined} SimpleItemsJoiner */

/** @type {SimpleItemsJoiner} */
const itemsJoinOneLine = items => items.filter(Boolean).join(" ");
/** @type {SimpleItemsJoiner} */
const itemsJoinOneLineBrackets = items =>
	items.length > 0 ? `(${items.filter(Boolean).join(" ")})` : undefined;
/** @type {SimpleItemsJoiner} */
const itemsJoinMoreSpacing = items => items.filter(Boolean).join("\n\n");
/** @type {SimpleItemsJoiner} */
const itemsJoinComma = items => items.filter(Boolean).join(", ");
/** @type {SimpleItemsJoiner} */
const itemsJoinCommaBrackets = items =>
	items.length > 0 ? `(${items.filter(Boolean).join(", ")})` : undefined;
/** @type {function(string): SimpleItemsJoiner} */
const itemsJoinCommaBracketsWithName = name => items =>
	items.length > 0
		? `(${name}: ${items.filter(Boolean).join(", ")})`
		: undefined;

/** @type {Record<string, SimpleItemsJoiner>} */
const SIMPLE_ITEMS_JOINER = {
	"chunk.parents": itemsJoinOneLine,
	"chunk.siblings": itemsJoinOneLine,
	"chunk.children": itemsJoinOneLine,
	"chunk.names": itemsJoinCommaBrackets,
	"chunk.idHints": itemsJoinCommaBracketsWithName("id hint"),
	"chunk.runtime": itemsJoinCommaBracketsWithName("runtime"),
	"chunk.files": itemsJoinComma,
	"chunk.childrenByOrder": itemsJoinOneLine,
	"chunk.childrenByOrder[].children": itemsJoinOneLine,
	"chunkGroup.assets": itemsJoinOneLine,
	"chunkGroup.auxiliaryAssets": itemsJoinOneLineBrackets,
	"chunkGroupChildGroup.children": itemsJoinComma,
	"chunkGroupChild.assets": itemsJoinOneLine,
	"chunkGroupChild.auxiliaryAssets": itemsJoinOneLineBrackets,
	"asset.chunks": itemsJoinComma,
	"asset.auxiliaryChunks": itemsJoinCommaBrackets,
	"asset.chunkNames": itemsJoinCommaBracketsWithName("name"),
	"asset.auxiliaryChunkNames": itemsJoinCommaBracketsWithName("auxiliary name"),
	"asset.chunkIdHints": itemsJoinCommaBracketsWithName("id hint"),
	"asset.auxiliaryChunkIdHints":
		itemsJoinCommaBracketsWithName("auxiliary id hint"),
	"module.chunks": itemsJoinOneLine,
	"module.issuerPath": items =>
		items
			.filter(Boolean)
			.map(item => `${item} ->`)
			.join(" "),
	"compilation.errors": itemsJoinMoreSpacing,
	"compilation.warnings": itemsJoinMoreSpacing,
	"compilation.logging": itemsJoinMoreSpacing,
	"compilation.children": items =>
		indent(/** @type {string} */ (itemsJoinMoreSpacing(items)), "  "),
	"moduleTraceItem.dependencies": itemsJoinOneLine,
	"loggingEntry.children": items =>
		indent(items.filter(Boolean).join("\n"), "  ", false)
};

/**
 * @param {Item[]} items items
 * @returns {string} result
 */
const joinOneLine = items =>
	items
		.map(item => item.content)
		.filter(Boolean)
		.join(" ");

/**
 * @param {Item[]} items items
 * @returns {string} result
 */
const joinInBrackets = items => {
	const res = [];
	let mode = 0;
	for (const item of items) {
		if (item.element === "separator!") {
			switch (mode) {
				case 0:
				case 1:
					mode += 2;
					break;
				case 4:
					res.push(")");
					mode = 3;
					break;
			}
		}
		if (!item.content) continue;
		switch (mode) {
			case 0:
				mode = 1;
				break;
			case 1:
				res.push(" ");
				break;
			case 2:
				res.push("(");
				mode = 4;
				break;
			case 3:
				res.push(" (");
				mode = 4;
				break;
			case 4:
				res.push(", ");
				break;
		}
		res.push(item.content);
	}
	if (mode === 4) res.push(")");
	return res.join("");
};

/**
 * @param {string} str a string
 * @param {string} prefix prefix
 * @param {boolean=} noPrefixInFirstLine need prefix in the first line?
 * @returns {string} result
 */
const indent = (str, prefix, noPrefixInFirstLine) => {
	const rem = str.replace(/\n([^\n])/g, `\n${prefix}$1`);
	if (noPrefixInFirstLine) return rem;
	const ind = str[0] === "\n" ? "" : prefix;
	return ind + rem;
};

/**
 * @param {(false | Item)[]} items items
 * @param {string} indenter indenter
 * @returns {string} result
 */
const joinExplicitNewLine = (items, indenter) => {
	let firstInLine = true;
	let first = true;
	return items
		.map(item => {
			if (!item || !item.content) return;
			let content = indent(item.content, first ? "" : indenter, !firstInLine);
			if (firstInLine) {
				content = content.replace(/^\n+/, "");
			}
			if (!content) return;
			first = false;
			const noJoiner = firstInLine || content.startsWith("\n");
			firstInLine = content.endsWith("\n");
			return noJoiner ? content : ` ${content}`;
		})
		.filter(Boolean)
		.join("")
		.trim();
};

/**
 * @param {boolean} error is an error
 * @returns {SimpleElementJoiner} joiner
 */
const joinError =
	error =>
	/**
	 * @param {Item[]} items items
	 * @param {Required<StatsPrinterContext>} ctx context
	 * @returns {string} result
	 */
	(items, { red, yellow }) =>
		`${error ? red("ERROR") : yellow("WARNING")} in ${joinExplicitNewLine(
			items,
			""
		)}`;

/** @typedef {{ element: string, content: string }} Item */
/** @typedef {(items: Item[], context: Required<StatsPrinterContext>) => string} SimpleElementJoiner */

/** @type {Record<string, SimpleElementJoiner>} */
const SIMPLE_ELEMENT_JOINERS = {
	compilation: items => {
		const result = [];
		let lastNeedMore = false;
		for (const item of items) {
			if (!item.content) continue;
			const needMoreSpace =
				item.element === "warnings" ||
				item.element === "filteredWarningDetailsCount" ||
				item.element === "errors" ||
				item.element === "filteredErrorDetailsCount" ||
				item.element === "logging";
			if (result.length !== 0) {
				result.push(needMoreSpace || lastNeedMore ? "\n\n" : "\n");
			}
			result.push(item.content);
			lastNeedMore = needMoreSpace;
		}
		if (lastNeedMore) result.push("\n");
		return result.join("");
	},
	asset: items =>
		joinExplicitNewLine(
			items.map(item => {
				if (
					(item.element === "related" || item.element === "children") &&
					item.content
				) {
					return {
						...item,
						content: `\n${item.content}\n`
					};
				}
				return item;
			}),
			"  "
		),
	"asset.info": joinOneLine,
	module: (items, { module }) => {
		let hasName = false;
		return joinExplicitNewLine(
			items.map(item => {
				switch (item.element) {
					case "id":
						if (module.id === module.name) {
							if (hasName) return false;
							if (item.content) hasName = true;
						}
						break;
					case "name":
						if (hasName) return false;
						if (item.content) hasName = true;
						break;
					case "providedExports":
					case "usedExports":
					case "optimizationBailout":
					case "reasons":
					case "issuerPath":
					case "profile":
					case "children":
					case "modules":
						if (item.content) {
							return {
								...item,
								content: `\n${item.content}\n`
							};
						}
						break;
				}
				return item;
			}),
			"  "
		);
	},
	chunk: items => {
		let hasEntry = false;
		return `chunk ${joinExplicitNewLine(
			items.filter(item => {
				switch (item.element) {
					case "entry":
						if (item.content) hasEntry = true;
						break;
					case "initial":
						if (hasEntry) return false;
						break;
				}
				return true;
			}),
			"  "
		)}`;
	},
	"chunk.childrenByOrder[]": items => `(${joinOneLine(items)})`,
	chunkGroup: items => joinExplicitNewLine(items, "  "),
	chunkGroupAsset: joinOneLine,
	chunkGroupChildGroup: joinOneLine,
	chunkGroupChild: joinOneLine,
	// moduleReason: (items, { moduleReason }) => {
	// 	let hasName = false;
	// 	return joinOneLine(
	// 		items.filter(item => {
	// 			switch (item.element) {
	// 				case "moduleId":
	// 					if (moduleReason.moduleId === moduleReason.module && item.content)
	// 						hasName = true;
	// 					break;
	// 				case "module":
	// 					if (hasName) return false;
	// 					break;
	// 				case "resolvedModule":
	// 					return (
	// 						moduleReason.module !== moduleReason.resolvedModule &&
	// 						item.content
	// 					);
	// 			}
	// 			return true;
	// 		})
	// 	);
	// },
	moduleReason: (items, { moduleReason }) => {
		let hasName = false;
		return joinExplicitNewLine(
			items.map(item => {
				switch (item.element) {
					case "moduleId":
						if (moduleReason.moduleId === moduleReason.module && item.content)
							hasName = true;
						break;
					case "module":
						if (hasName) return false;
						break;
					case "resolvedModule":
						if (moduleReason.module === moduleReason.resolvedModule)
							return false;
						break;
					case "children":
						if (item.content) {
							return {
								...item,
								content: `\n${item.content}\n`
							};
						}
						break;
				}
				return item;
			}),
			"  "
		);
	},
	"module.profile": joinInBrackets,
	moduleIssuer: joinOneLine,
	chunkOrigin: items => `> ${joinOneLine(items)}`,
	"errors[].error": joinError(true),
	"warnings[].error": joinError(false),
	loggingGroup: items => joinExplicitNewLine(items, "").trimEnd(),
	moduleTraceItem: items => ` @ ${joinOneLine(items)}`,
	moduleTraceDependency: joinOneLine
};

/** @typedef {"bold" | "yellow" | "red" | "green" | "cyan" | "magenta"} ColorNames */

/** @type {Record<ColorNames, string>} */
const AVAILABLE_COLORS = {
	bold: "\u001B[1m",
	yellow: "\u001B[1m\u001B[33m",
	red: "\u001B[1m\u001B[31m",
	green: "\u001B[1m\u001B[32m",
	cyan: "\u001B[1m\u001B[36m",
	magenta: "\u001B[1m\u001B[35m"
};

/** @type {Record<string, function(any, Required<KnownStatsPrinterColorFn> & StatsPrinterContext, ...any): string>} */
const AVAILABLE_FORMATS = {
	formatChunkId: (id, { yellow }, direction) => {
		switch (direction) {
			case "parent":
				return `<{${yellow(id)}}>`;
			case "sibling":
				return `={${yellow(id)}}=`;
			case "child":
				return `>{${yellow(id)}}<`;
			default:
				return `{${yellow(id)}}`;
		}
	},
	formatModuleId: id => `[${id}]`,
	formatFilename: (filename, { green, yellow }, oversize) =>
		(oversize ? yellow : green)(filename),
	formatFlag: flag => `[${flag}]`,
	formatLayer: layer => `(in ${layer})`,
	formatSize: require("../SizeFormatHelpers").formatSize,
	formatDateTime: (dateTime, { bold }) => {
		const d = new Date(dateTime);
		const x = twoDigit;
		const date = `${d.getFullYear()}-${x(d.getMonth() + 1)}-${x(d.getDate())}`;
		const time = `${x(d.getHours())}:${x(d.getMinutes())}:${x(d.getSeconds())}`;
		return `${date} ${bold(time)}`;
	},
	formatTime: (
		time,
		{ timeReference, bold, green, yellow, red },
		boldQuantity
	) => {
		const unit = " ms";
		if (timeReference && time !== timeReference) {
			const times = [
				timeReference / 2,
				timeReference / 4,
				timeReference / 8,
				timeReference / 16
			];
			if (time < times[3]) return `${time}${unit}`;
			else if (time < times[2]) return bold(`${time}${unit}`);
			else if (time < times[1]) return green(`${time}${unit}`);
			else if (time < times[0]) return yellow(`${time}${unit}`);
			return red(`${time}${unit}`);
		}
		return `${boldQuantity ? bold(time) : time}${unit}`;
	},
	formatError: (message, { green, yellow, red }) => {
		if (message.includes("\u001B[")) return message;
		const highlights = [
			{ regExp: /(Did you mean .+)/g, format: green },
			{
				regExp: /(Set 'mode' option to 'development' or 'production')/g,
				format: green
			},
			{ regExp: /(\(module has no exports\))/g, format: red },
			{ regExp: /\(possible exports: (.+)\)/g, format: green },
			{ regExp: /(?:^|\n)(.* doesn't exist)/g, format: red },
			{ regExp: /('\w+' option has not been set)/g, format: red },
			{
				regExp: /(Emitted value instead of an instance of Error)/g,
				format: yellow
			},
			{ regExp: /(Used? .+ instead)/gi, format: yellow },
			{ regExp: /\b(deprecated|must|required)\b/g, format: yellow },
			{
				regExp: /\b(BREAKING CHANGE)\b/gi,
				format: red
			},
			{
				regExp:
					/\b(error|failed|unexpected|invalid|not found|not supported|not available|not possible|not implemented|doesn't support|conflict|conflicting|not existing|duplicate)\b/gi,
				format: red
			}
		];
		for (const { regExp, format } of highlights) {
			message = message.replace(
				regExp,
				/**
				 * @param {string} match match
				 * @param {string} content content
				 * @returns {string} result
				 */
				(match, content) => match.replace(content, format(content))
			);
		}
		return message;
	}
};

/** @typedef {function(string): string} ResultModifierFn */
/** @type {Record<string, ResultModifierFn>} */
const RESULT_MODIFIER = {
	"module.modules": result => indent(result, "| ")
};

/**
 * @param {string[]} array array
 * @param {string[]} preferredOrder preferred order
 * @returns {string[]} result
 */
const createOrder = (array, preferredOrder) => {
	const originalArray = array.slice();
	/** @type {Set<string>} */
	const set = new Set(array);
	/** @type {Set<string>} */
	const usedSet = new Set();
	array.length = 0;
	for (const element of preferredOrder) {
		if (element.endsWith("!") || set.has(element)) {
			array.push(element);
			usedSet.add(element);
		}
	}
	for (const element of originalArray) {
		if (!usedSet.has(element)) {
			array.push(element);
		}
	}
	return array;
};

class DefaultStatsPrinterPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("DefaultStatsPrinterPlugin", compilation => {
			compilation.hooks.statsPrinter.tap(
				"DefaultStatsPrinterPlugin",
				(stats, options) => {
					// Put colors into context
					stats.hooks.print
						.for("compilation")
						.tap("DefaultStatsPrinterPlugin", (compilation, context) => {
							for (const color of Object.keys(AVAILABLE_COLORS)) {
								const name = /** @type {ColorNames} */ (color);
								/** @type {string | undefined} */
								let start;
								if (options.colors) {
									if (
										typeof options.colors === "object" &&
										typeof options.colors[name] === "string"
									) {
										start = options.colors[name];
									} else {
										start = AVAILABLE_COLORS[name];
									}
								}
								if (start) {
									/**
									 * @param {string} str string
									 * @returns {string} string with color
									 */
									context[color] = str =>
										`${start}${
											typeof str === "string"
												? str.replace(
														/((\u001B\[39m|\u001B\[22m|\u001B\[0m)+)/g,
														`$1${start}`
													)
												: str
										}\u001B[39m\u001B[22m`;
								} else {
									/**
									 * @param {string} str string
									 * @returns {string} str string
									 */
									context[color] = str => str;
								}
							}
							for (const format of Object.keys(AVAILABLE_FORMATS)) {
								context[format] =
									/**
									 * @param {string | number} content content
									 * @param {...TODO} args args
									 * @returns {string} result
									 */
									(content, ...args) =>
										AVAILABLE_FORMATS[format](
											content,
											/** @type {Required<KnownStatsPrinterColorFn> & StatsPrinterContext} */
											(context),
											...args
										);
							}
							context.timeReference = compilation.time;
						});

					for (const key of Object.keys(COMPILATION_SIMPLE_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								COMPILATION_SIMPLE_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(ASSET_SIMPLE_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								ASSET_SIMPLE_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "asset">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(MODULE_SIMPLE_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								MODULE_SIMPLE_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "module">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(MODULE_ISSUER_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								MODULE_ISSUER_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleIssuer">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(MODULE_REASON_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								MODULE_REASON_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleReason">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(MODULE_PROFILE_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								MODULE_PROFILE_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "profile">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(CHUNK_GROUP_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								CHUNK_GROUP_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "chunkGroupKind" | "chunkGroup">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(CHUNK_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								CHUNK_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "chunk">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(ERROR_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								ERROR_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "error">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(LOG_ENTRY_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								LOG_ENTRY_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "logging">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(MODULE_TRACE_DEPENDENCY_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								MODULE_TRACE_DEPENDENCY_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleTraceDependency">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(MODULE_TRACE_ITEM_PRINTERS)) {
						stats.hooks.print
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (obj, ctx) =>
								MODULE_TRACE_ITEM_PRINTERS[key](
									obj,
									/** @type {Required<KnownStatsPrinterColorFn> & Required<KnownStatsPrinterFormaters> & WithRequired<StatsPrinterContext, "type" | "compilation" | "moduleTraceItem">} */
									(ctx),
									stats
								)
							);
					}

					for (const key of Object.keys(PREFERRED_ORDERS)) {
						const preferredOrder = PREFERRED_ORDERS[key];
						stats.hooks.sortElements
							.for(key)
							.tap("DefaultStatsPrinterPlugin", (elements, context) => {
								createOrder(elements, preferredOrder);
							});
					}

					for (const key of Object.keys(ITEM_NAMES)) {
						const itemName = ITEM_NAMES[key];
						stats.hooks.getItemName
							.for(key)
							.tap(
								"DefaultStatsPrinterPlugin",
								typeof itemName === "string" ? () => itemName : itemName
							);
					}

					for (const key of Object.keys(SIMPLE_ITEMS_JOINER)) {
						const joiner = SIMPLE_ITEMS_JOINER[key];
						stats.hooks.printItems
							.for(key)
							.tap("DefaultStatsPrinterPlugin", joiner);
					}

					for (const key of Object.keys(SIMPLE_ELEMENT_JOINERS)) {
						const joiner = SIMPLE_ELEMENT_JOINERS[key];
						stats.hooks.printElements
							.for(key)
							.tap("DefaultStatsPrinterPlugin", /** @type {TODO} */ (joiner));
					}

					for (const key of Object.keys(RESULT_MODIFIER)) {
						const modifier = RESULT_MODIFIER[key];
						stats.hooks.result
							.for(key)
							.tap("DefaultStatsPrinterPlugin", modifier);
					}
				}
			);
		});
	}
}
module.exports = DefaultStatsPrinterPlugin;
