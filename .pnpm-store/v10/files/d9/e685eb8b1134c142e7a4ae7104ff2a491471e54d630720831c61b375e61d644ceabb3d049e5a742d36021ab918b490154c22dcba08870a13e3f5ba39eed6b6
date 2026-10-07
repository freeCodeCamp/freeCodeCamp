/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

// eslint-disable-next-line n/prefer-global/process
const { versions } = require("process");

const AliasFieldPlugin = require("./AliasFieldPlugin");
const AliasPlugin = require("./AliasPlugin");
const AppendPlugin = require("./AppendPlugin");
const ConditionalPlugin = require("./ConditionalPlugin");
const DescriptionFilePlugin = require("./DescriptionFilePlugin");
const DirectoryExistsPlugin = require("./DirectoryExistsPlugin");
const ExportsFieldPlugin = require("./ExportsFieldPlugin");
const ExtensionAliasPlugin = require("./ExtensionAliasPlugin");
const FileExistsPlugin = require("./FileExistsPlugin");
const ImportsFieldPlugin = require("./ImportsFieldPlugin");
const JoinRequestPartPlugin = require("./JoinRequestPartPlugin");
const JoinRequestPlugin = require("./JoinRequestPlugin");
const MainFieldPlugin = require("./MainFieldPlugin");
const ModulesInHierarchicalDirectoriesPlugin = require("./ModulesInHierarchicalDirectoriesPlugin");
const ModulesInRootPlugin = require("./ModulesInRootPlugin");
const NextPlugin = require("./NextPlugin");
const ParsePlugin = require("./ParsePlugin");
const PnpPlugin = require("./PnpPlugin");
const Resolver = require("./Resolver");
const RestrictionsPlugin = require("./RestrictionsPlugin");
const ResultPlugin = require("./ResultPlugin");
const RootsPlugin = require("./RootsPlugin");
const SelfReferencePlugin = require("./SelfReferencePlugin");
const SymlinkPlugin = require("./SymlinkPlugin");
const SyncAsyncFileSystemDecorator = require("./SyncAsyncFileSystemDecorator");
const TryNextPlugin = require("./TryNextPlugin");
const TsconfigPathsPlugin = require("./TsconfigPathsPlugin");
const UnsafeCachePlugin = require("./UnsafeCachePlugin");
const UseFilePlugin = require("./UseFilePlugin");
const { PathType, getType } = require("./util/path");

/** @typedef {import("./AliasPlugin").AliasOption} AliasOptionEntry */
/** @typedef {import("./ExtensionAliasPlugin").ExtensionAliasOption} ExtensionAliasOption */
/** @typedef {import("./PnpPlugin").PnpApiImpl} PnpApi */
/** @typedef {import("./Resolver").EnsuredHooks} EnsuredHooks */
/** @typedef {import("./Resolver").FileSystem} FileSystem */
/** @typedef {import("./Resolver").KnownHooks} KnownHooks */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").SyncFileSystem} SyncFileSystem */
/** @typedef {import("./UnsafeCachePlugin").Cache} Cache */

/** @typedef {string | string[] | false} AliasOptionNewRequest */
/** @typedef {{ [k: string]: AliasOptionNewRequest }} AliasOptions */
/** @typedef {{ [k: string]: string | string[] }} ExtensionAliasOptions */
/** @typedef {false | 0 | "" | null | undefined} Falsy */
/** @typedef {{ apply: (resolver: Resolver) => void } | ((this: Resolver, resolver: Resolver) => void) | Falsy} Plugin */

/**
 * @typedef {object} TsconfigOptions
 * @property {string=} configFile A relative path to the tsconfig file based on cwd, or an absolute path of tsconfig file
 * @property {string[] | "auto"=} references References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths
 * @property {string=} baseUrl Override baseUrl from tsconfig.json. If provided, this value will be used instead of the baseUrl in the tsconfig file
 */

/**
 * @typedef {object} UserResolveOptions
 * @property {(AliasOptions | AliasOptionEntry[])=} alias A list of module alias configurations or an object which maps key to value
 * @property {(AliasOptions | AliasOptionEntry[])=} fallback A list of module alias configurations or an object which maps key to value, applied only after modules option
 * @property {ExtensionAliasOptions=} extensionAlias An object which maps extension to extension aliases
 * @property {(string | string[])[]=} aliasFields A list of alias fields in description files
 * @property {((predicate: ResolveRequest) => boolean)=} cachePredicate A function which decides whether a request should be cached or not. An object is passed with at least `path` and `request` properties.
 * @property {boolean=} cacheWithContext Whether or not the unsafeCache should include request context as part of the cache key.
 * @property {string[]=} descriptionFiles A list of description files to read from
 * @property {string[]=} conditionNames A list of exports field condition names.
 * @property {boolean=} enforceExtension Enforce that a extension from extensions must be used
 * @property {(string | string[])[]=} exportsFields A list of exports fields in description files
 * @property {(string | string[])[]=} importsFields A list of imports fields in description files
 * @property {string[]=} extensions A list of extensions which should be tried for files
 * @property {FileSystem} fileSystem The file system which should be used
 * @property {(Cache | boolean)=} unsafeCache Use this cache object to unsafely cache the successful requests
 * @property {boolean=} symlinks Resolve symlinks to their symlinked location
 * @property {Resolver=} resolver A prepared Resolver to which the plugins are attached
 * @property {string[] | string=} modules A list of directories to resolve modules from, can be absolute path or folder name
 * @property {(string | string[] | { name: string | string[], forceRelative: boolean })[]=} mainFields A list of main fields in description files
 * @property {string[]=} mainFiles A list of main files in directories
 * @property {Plugin[]=} plugins A list of additional resolve plugins which should be applied
 * @property {PnpApi | null=} pnpApi A PnP API that should be used - null is "never", undefined is "auto"
 * @property {string[]=} roots A list of root paths
 * @property {boolean=} fullySpecified The request is already fully specified and no extensions or directories are resolved for it
 * @property {boolean=} resolveToContext Resolve to a context instead of a file
 * @property {(string | RegExp)[]=} restrictions A list of resolve restrictions
 * @property {boolean=} useSyncFileSystemCalls Use only the sync constraints of the file system calls
 * @property {boolean=} preferRelative Prefer to resolve module requests as relative requests before falling back to modules
 * @property {boolean=} preferAbsolute Prefer to resolve server-relative urls as absolute paths before falling back to resolve in roots
 * @property {string | boolean | TsconfigOptions=} tsconfig TypeScript config file path or config object with configFile and references
 */

/**
 * @typedef {object} ResolveOptions
 * @property {AliasOptionEntry[]} alias alias
 * @property {AliasOptionEntry[]} fallback fallback
 * @property {Set<string | string[]>} aliasFields alias fields
 * @property {ExtensionAliasOption[]} extensionAlias extension alias
 * @property {(predicate: ResolveRequest) => boolean} cachePredicate cache predicate
 * @property {boolean} cacheWithContext cache with context
 * @property {Set<string>} conditionNames A list of exports field condition names.
 * @property {string[]} descriptionFiles description files
 * @property {boolean} enforceExtension enforce extension
 * @property {Set<string | string[]>} exportsFields exports fields
 * @property {Set<string | string[]>} importsFields imports fields
 * @property {Set<string>} extensions extensions
 * @property {FileSystem} fileSystem fileSystem
 * @property {Cache | false} unsafeCache unsafe cache
 * @property {boolean} symlinks symlinks
 * @property {Resolver=} resolver resolver
 * @property {(string | string[])[]} modules modules
 * @property {{ name: string[], forceRelative: boolean }[]} mainFields main fields
 * @property {Set<string>} mainFiles main files
 * @property {Plugin[]} plugins plugins
 * @property {PnpApi | null} pnpApi pnp API
 * @property {Set<string>} roots roots
 * @property {boolean} fullySpecified fully specified
 * @property {boolean} resolveToContext resolve to context
 * @property {Set<string | RegExp>} restrictions restrictions
 * @property {boolean} preferRelative prefer relative
 * @property {boolean} preferAbsolute prefer absolute
 * @property {string | boolean | TsconfigOptions} tsconfig tsconfig file path or config object
 */

/**
 * @param {PnpApi | null=} option option
 * @returns {PnpApi | null} processed option
 */
function processPnpApiOption(option) {
	if (
		option === undefined &&
		/** @type {NodeJS.ProcessVersions & { pnp: string }} */ versions.pnp
	) {
		const _findPnpApi =
			/** @type {(issuer: string) => PnpApi | null}} */
			(
				// @ts-expect-error maybe nothing
				require("module").findPnpApi
			);

		if (_findPnpApi) {
			return {
				resolveToUnqualified(request, issuer, opts) {
					const pnpapi = _findPnpApi(issuer);

					if (!pnpapi) {
						// Issuer isn't managed by PnP
						return null;
					}

					return pnpapi.resolveToUnqualified(request, issuer, opts);
				},
			};
		}
	}

	return option || null;
}

/**
 * @param {AliasOptions | AliasOptionEntry[] | undefined} alias alias
 * @returns {AliasOptionEntry[]} normalized aliases
 */
function normalizeAlias(alias) {
	return typeof alias === "object" && !Array.isArray(alias) && alias !== null
		? Object.keys(alias).map((key) => {
				/** @type {AliasOptionEntry} */
				const obj = { name: key, onlyModule: false, alias: alias[key] };

				if (/\$$/.test(key)) {
					obj.onlyModule = true;
					obj.name = key.slice(0, -1);
				}

				return obj;
			})
		: /** @type {AliasOptionEntry[]} */ (alias) || [];
}

/**
 * Merging filtered elements
 * @param {string[]} array source array
 * @param {(item: string) => boolean} filter predicate
 * @returns {(string | string[])[]} merge result
 */
function mergeFilteredToArray(array, filter) {
	/** @type {(string | string[])[]} */
	const result = [];
	const set = new Set(array);

	for (const item of set) {
		if (filter(item)) {
			const lastElement =
				result.length > 0 ? result[result.length - 1] : undefined;
			if (Array.isArray(lastElement)) {
				lastElement.push(item);
			} else {
				result.push([item]);
			}
		} else {
			result.push(item);
		}
	}

	return result;
}

/**
 * @param {UserResolveOptions} options input options
 * @returns {ResolveOptions} output options
 */
function createOptions(options) {
	const mainFieldsSet = new Set(options.mainFields || ["main"]);
	/** @type {ResolveOptions["mainFields"]} */
	const mainFields = [];

	for (const item of mainFieldsSet) {
		if (typeof item === "string") {
			mainFields.push({
				name: [item],
				forceRelative: true,
			});
		} else if (Array.isArray(item)) {
			mainFields.push({
				name: item,
				forceRelative: true,
			});
		} else {
			mainFields.push({
				name: Array.isArray(item.name) ? item.name : [item.name],
				forceRelative: item.forceRelative,
			});
		}
	}

	return {
		alias: normalizeAlias(options.alias),
		fallback: normalizeAlias(options.fallback),
		aliasFields: new Set(options.aliasFields),
		cachePredicate:
			options.cachePredicate ||
			function trueFn() {
				return true;
			},
		cacheWithContext:
			typeof options.cacheWithContext !== "undefined"
				? options.cacheWithContext
				: true,
		exportsFields: new Set(options.exportsFields || ["exports"]),
		importsFields: new Set(options.importsFields || ["imports"]),
		conditionNames: new Set(options.conditionNames),
		descriptionFiles: [
			...new Set(options.descriptionFiles || ["package.json"]),
		],
		enforceExtension:
			options.enforceExtension === undefined
				? Boolean(options.extensions && options.extensions.includes(""))
				: options.enforceExtension,
		extensions: new Set(options.extensions || [".js", ".json", ".node"]),
		extensionAlias: options.extensionAlias
			? Object.keys(options.extensionAlias).map((k) => ({
					extension: k,
					alias: /** @type {ExtensionAliasOptions} */ (options.extensionAlias)[
						k
					],
				}))
			: [],
		fileSystem: options.useSyncFileSystemCalls
			? new SyncAsyncFileSystemDecorator(
					/** @type {SyncFileSystem} */ (
						/** @type {unknown} */ (options.fileSystem)
					),
				)
			: options.fileSystem,
		unsafeCache:
			options.unsafeCache && typeof options.unsafeCache !== "object"
				? /** @type {Cache} */ ({})
				: options.unsafeCache || false,
		symlinks: typeof options.symlinks !== "undefined" ? options.symlinks : true,
		resolver: options.resolver,
		modules: mergeFilteredToArray(
			Array.isArray(options.modules)
				? options.modules
				: options.modules
					? [options.modules]
					: ["node_modules"],
			(item) => {
				const type = getType(item);
				return type === PathType.Normal || type === PathType.Relative;
			},
		),
		mainFields,
		mainFiles: new Set(options.mainFiles || ["index"]),
		plugins: options.plugins || [],
		pnpApi: processPnpApiOption(options.pnpApi),
		roots: new Set(options.roots || undefined),
		fullySpecified: options.fullySpecified || false,
		resolveToContext: options.resolveToContext || false,
		preferRelative: options.preferRelative || false,
		preferAbsolute: options.preferAbsolute || false,
		restrictions: new Set(options.restrictions),
		tsconfig:
			typeof options.tsconfig === "undefined" ? false : options.tsconfig,
	};
}

/**
 * @param {UserResolveOptions} options resolve options
 * @returns {Resolver} created resolver
 */
module.exports.createResolver = function createResolver(options) {
	const normalizedOptions = createOptions(options);

	const {
		alias,
		fallback,
		aliasFields,
		cachePredicate,
		cacheWithContext,
		conditionNames,
		descriptionFiles,
		enforceExtension,
		exportsFields,
		extensionAlias,
		importsFields,
		extensions,
		fileSystem,
		fullySpecified,
		mainFields,
		mainFiles,
		modules,
		plugins: userPlugins,
		pnpApi,
		resolveToContext,
		preferRelative,
		preferAbsolute,
		symlinks,
		unsafeCache,
		resolver: customResolver,
		restrictions,
		roots,
		tsconfig,
	} = normalizedOptions;

	const plugins = [...userPlugins];

	const resolver =
		customResolver || new Resolver(fileSystem, normalizedOptions);

	// // pipeline ////

	resolver.ensureHook("resolve");
	resolver.ensureHook("internalResolve");
	resolver.ensureHook("newInternalResolve");
	resolver.ensureHook("parsedResolve");
	resolver.ensureHook("describedResolve");
	resolver.ensureHook("rawResolve");
	resolver.ensureHook("normalResolve");
	resolver.ensureHook("internal");
	resolver.ensureHook("rawModule");
	resolver.ensureHook("alternateRawModule");
	resolver.ensureHook("module");
	resolver.ensureHook("resolveAsModule");
	resolver.ensureHook("undescribedResolveInPackage");
	resolver.ensureHook("resolveInPackage");
	resolver.ensureHook("resolveInExistingDirectory");
	resolver.ensureHook("relative");
	resolver.ensureHook("describedRelative");
	resolver.ensureHook("directory");
	resolver.ensureHook("undescribedExistingDirectory");
	resolver.ensureHook("existingDirectory");
	resolver.ensureHook("undescribedRawFile");
	resolver.ensureHook("rawFile");
	resolver.ensureHook("file");
	resolver.ensureHook("finalFile");
	resolver.ensureHook("existingFile");
	resolver.ensureHook("resolved");

	// TODO remove in next major
	// cspell:word Interal
	// Backward-compat
	// @ts-expect-error
	resolver.hooks.newInteralResolve = resolver.hooks.newInternalResolve;

	// resolve
	for (const { source, resolveOptions } of [
		{ source: "resolve", resolveOptions: { fullySpecified } },
		{ source: "internal-resolve", resolveOptions: { fullySpecified: false } },
	]) {
		plugins.push(new ParsePlugin(source, resolveOptions, "parsed-resolve"));
	}

	// parsed-resolve
	plugins.push(
		new DescriptionFilePlugin(
			"parsed-resolve",
			descriptionFiles,
			false,
			"described-resolve",
		),
	);
	plugins.push(new NextPlugin("after-parsed-resolve", "described-resolve"));

	// described-resolve
	if (unsafeCache) {
		plugins.push(
			new UnsafeCachePlugin(
				"described-resolve",
				cachePredicate,
				/** @type {import("./UnsafeCachePlugin").Cache} */ (unsafeCache),
				cacheWithContext,
				"raw-resolve",
			),
		);
	} else {
		plugins.push(new NextPlugin("described-resolve", "raw-resolve"));
	}
	if (fallback.length > 0) {
		plugins.push(
			new AliasPlugin("described-resolve", fallback, "internal-resolve"),
		);
	}
	// raw-resolve
	if (alias.length > 0) {
		plugins.push(new AliasPlugin("raw-resolve", alias, "internal-resolve"));
	}
	if (tsconfig) {
		plugins.push(new TsconfigPathsPlugin(tsconfig));
	}
	for (const item of aliasFields) {
		plugins.push(new AliasFieldPlugin("raw-resolve", item, "internal-resolve"));
	}
	for (const item of extensionAlias) {
		plugins.push(
			new ExtensionAliasPlugin("raw-resolve", item, "normal-resolve"),
		);
	}
	plugins.push(new NextPlugin("raw-resolve", "normal-resolve"));

	// normal-resolve
	if (preferRelative) {
		plugins.push(new JoinRequestPlugin("after-normal-resolve", "relative"));
	}
	plugins.push(
		new ConditionalPlugin(
			"after-normal-resolve",
			{ module: true },
			"resolve as module",
			false,
			"raw-module",
		),
	);
	plugins.push(
		new ConditionalPlugin(
			"after-normal-resolve",
			{ internal: true },
			"resolve as internal import",
			false,
			"internal",
		),
	);
	if (preferAbsolute) {
		plugins.push(new JoinRequestPlugin("after-normal-resolve", "relative"));
	}
	if (roots.size > 0) {
		plugins.push(new RootsPlugin("after-normal-resolve", roots, "relative"));
	}
	if (!preferRelative && !preferAbsolute) {
		plugins.push(new JoinRequestPlugin("after-normal-resolve", "relative"));
	}

	// internal
	for (const importsField of importsFields) {
		plugins.push(
			new ImportsFieldPlugin(
				"internal",
				conditionNames,
				importsField,
				"relative",
				"internal-resolve",
			),
		);
	}

	// raw-module
	for (const exportsField of exportsFields) {
		plugins.push(
			new SelfReferencePlugin("raw-module", exportsField, "resolve-as-module"),
		);
	}
	for (const item of modules) {
		if (Array.isArray(item)) {
			if (item.includes("node_modules") && pnpApi) {
				plugins.push(
					new ModulesInHierarchicalDirectoriesPlugin(
						"raw-module",
						item.filter((i) => i !== "node_modules"),
						"module",
					),
				);
				plugins.push(
					new PnpPlugin(
						"raw-module",
						pnpApi,
						"undescribed-resolve-in-package",
						"alternate-raw-module",
					),
				);

				plugins.push(
					new ModulesInHierarchicalDirectoriesPlugin(
						"alternate-raw-module",
						["node_modules"],
						"module",
					),
				);
			} else {
				plugins.push(
					new ModulesInHierarchicalDirectoriesPlugin(
						"raw-module",
						item,
						"module",
					),
				);
			}
		} else {
			plugins.push(new ModulesInRootPlugin("raw-module", item, "module"));
		}
	}

	// module
	plugins.push(new JoinRequestPartPlugin("module", "resolve-as-module"));

	// resolve-as-module
	if (!resolveToContext) {
		plugins.push(
			new ConditionalPlugin(
				"resolve-as-module",
				{ directory: false, request: "." },
				"single file module",
				true,
				"undescribed-raw-file",
			),
		);
	}
	plugins.push(
		new DirectoryExistsPlugin(
			"resolve-as-module",
			"undescribed-resolve-in-package",
		),
	);

	// undescribed-resolve-in-package
	plugins.push(
		new DescriptionFilePlugin(
			"undescribed-resolve-in-package",
			descriptionFiles,
			false,
			"resolve-in-package",
		),
	);
	plugins.push(
		new NextPlugin(
			"after-undescribed-resolve-in-package",
			"resolve-in-package",
		),
	);

	// resolve-in-package
	for (const exportsField of exportsFields) {
		plugins.push(
			new ExportsFieldPlugin(
				"resolve-in-package",
				conditionNames,
				exportsField,
				"relative",
			),
		);
	}
	plugins.push(
		new NextPlugin("resolve-in-package", "resolve-in-existing-directory"),
	);

	// resolve-in-existing-directory
	plugins.push(
		new JoinRequestPlugin("resolve-in-existing-directory", "relative"),
	);

	// relative
	plugins.push(
		new DescriptionFilePlugin(
			"relative",
			descriptionFiles,
			true,
			"described-relative",
		),
	);
	plugins.push(new NextPlugin("after-relative", "described-relative"));

	// described-relative
	if (resolveToContext) {
		plugins.push(new NextPlugin("described-relative", "directory"));
	} else {
		plugins.push(
			new ConditionalPlugin(
				"described-relative",
				{ directory: false },
				null,
				true,
				"raw-file",
			),
		);
		plugins.push(
			new ConditionalPlugin(
				"described-relative",
				{ fullySpecified: false },
				"as directory",
				true,
				"directory",
			),
		);
	}

	// directory
	plugins.push(
		new DirectoryExistsPlugin("directory", "undescribed-existing-directory"),
	);

	if (resolveToContext) {
		// undescribed-existing-directory
		plugins.push(new NextPlugin("undescribed-existing-directory", "resolved"));
	} else {
		// undescribed-existing-directory
		plugins.push(
			new DescriptionFilePlugin(
				"undescribed-existing-directory",
				descriptionFiles,
				false,
				"existing-directory",
			),
		);
		for (const item of mainFiles) {
			plugins.push(
				new UseFilePlugin(
					"undescribed-existing-directory",
					item,
					"undescribed-raw-file",
				),
			);
		}

		// described-existing-directory
		for (const item of mainFields) {
			plugins.push(
				new MainFieldPlugin(
					"existing-directory",
					item,
					"resolve-in-existing-directory",
				),
			);
		}
		for (const item of mainFiles) {
			plugins.push(
				new UseFilePlugin("existing-directory", item, "undescribed-raw-file"),
			);
		}

		// undescribed-raw-file
		plugins.push(
			new DescriptionFilePlugin(
				"undescribed-raw-file",
				descriptionFiles,
				true,
				"raw-file",
			),
		);
		plugins.push(new NextPlugin("after-undescribed-raw-file", "raw-file"));

		// raw-file
		plugins.push(
			new ConditionalPlugin(
				"raw-file",
				{ fullySpecified: true },
				null,
				false,
				"file",
			),
		);
		if (!enforceExtension) {
			plugins.push(new TryNextPlugin("raw-file", "no extension", "file"));
		}
		for (const item of extensions) {
			plugins.push(new AppendPlugin("raw-file", item, "file"));
		}

		// file
		if (alias.length > 0) {
			plugins.push(new AliasPlugin("file", alias, "internal-resolve"));
		}
		for (const item of aliasFields) {
			plugins.push(new AliasFieldPlugin("file", item, "internal-resolve"));
		}
		plugins.push(new NextPlugin("file", "final-file"));

		// final-file
		plugins.push(new FileExistsPlugin("final-file", "existing-file"));

		// existing-file
		if (symlinks) {
			plugins.push(new SymlinkPlugin("existing-file", "existing-file"));
		}
		plugins.push(new NextPlugin("existing-file", "resolved"));
	}

	const { resolved } =
		/** @type {KnownHooks & EnsuredHooks} */
		(resolver.hooks);

	// resolved
	if (restrictions.size > 0) {
		plugins.push(new RestrictionsPlugin(resolved, restrictions));
	}

	plugins.push(new ResultPlugin(resolved));

	// // RESOLVER ////

	for (const plugin of plugins) {
		if (typeof plugin === "function") {
			/** @type {(this: Resolver, resolver: Resolver) => void} */
			(plugin).call(resolver, resolver);
		} else if (plugin) {
			plugin.apply(resolver);
		}
	}

	return resolver;
};
