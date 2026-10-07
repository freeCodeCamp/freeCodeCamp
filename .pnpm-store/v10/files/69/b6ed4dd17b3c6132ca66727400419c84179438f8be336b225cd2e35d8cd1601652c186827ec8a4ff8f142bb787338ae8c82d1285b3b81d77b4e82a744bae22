declare namespace TsConfigJson {
	namespace CompilerOptions {
		export type JSX =
			| 'preserve'
			| 'react'
			| 'react-jsx'
			| 'react-jsxdev'
			| 'react-native';

		export type Module =
			| 'CommonJS'
			| 'AMD'
			| 'System'
			| 'UMD'
			| 'ES6'
			| 'ES2015'
			| 'ES2020'
			| 'ES2022'
			| 'ESNext'
			| 'None'
			// Lowercase alternatives
			| 'commonjs'
			| 'amd'
			| 'system'
			| 'umd'
			| 'es6'
			| 'es2015'
			| 'es2020'
			| 'es2022'
			| 'esnext'
			| 'none';

		export type NewLine =
			| 'CRLF'
			| 'LF'
			// Lowercase alternatives
			| 'crlf'
			| 'lf';

		export type Target =
			| 'ES3'
			| 'ES5'
			| 'ES6'
			| 'ES2015'
			| 'ES2016'
			| 'ES2017'
			| 'ES2018'
			| 'ES2019'
			| 'ES2020'
			| 'ES2021'
			| 'ESNext'
			// Lowercase alternatives
			| 'es3'
			| 'es5'
			| 'es6'
			| 'es2015'
			| 'es2016'
			| 'es2017'
			| 'es2018'
			| 'es2019'
			| 'es2020'
			| 'es2021'
			| 'esnext';

		export type Lib =
			| 'ES5'
			| 'ES6'
			| 'ES7'
			| 'ES2015'
			| 'ES2015.Collection'
			| 'ES2015.Core'
			| 'ES2015.Generator'
			| 'ES2015.Iterable'
			| 'ES2015.Promise'
			| 'ES2015.Proxy'
			| 'ES2015.Reflect'
			| 'ES2015.Symbol.WellKnown'
			| 'ES2015.Symbol'
			| 'ES2016'
			| 'ES2016.Array.Include'
			| 'ES2017'
			| 'ES2017.Intl'
			| 'ES2017.Object'
			| 'ES2017.SharedMemory'
			| 'ES2017.String'
			| 'ES2017.TypedArrays'
			| 'ES2018'
			| 'ES2018.AsyncGenerator'
			| 'ES2018.AsyncIterable'
			| 'ES2018.Intl'
			| 'ES2018.Promise'
			| 'ES2018.Regexp'
			| 'ES2019'
			| 'ES2019.Array'
			| 'ES2019.Object'
			| 'ES2019.String'
			| 'ES2019.Symbol'
			| 'ES2020'
			| 'ES2020.BigInt'
			| 'ES2020.Promise'
			| 'ES2020.String'
			| 'ES2020.Symbol.WellKnown'
			| 'ES2020.SharedMemory'
			| 'ES2020.Intl'
			| 'ES2021'
			| 'ES2021.Promise'
			| 'ES2021.String'
			| 'ES2021.WeakRef'
			| 'ESNext'
			| 'ESNext.Array'
			| 'ESNext.AsyncIterable'
			| 'ESNext.BigInt'
			| 'ESNext.Intl'
			| 'ESNext.Promise'
			| 'ESNext.String'
			| 'ESNext.Symbol'
			| 'ESNext.WeakRef'
			| 'DOM'
			| 'DOM.Iterable'
			| 'ScriptHost'
			| 'WebWorker'
			| 'WebWorker.ImportScripts'
			| 'WebWorker.Iterable'
			// Lowercase alternatives
			| 'es5'
			| 'es6'
			| 'es7'
			| 'es2015'
			| 'es2015.collection'
			| 'es2015.core'
			| 'es2015.generator'
			| 'es2015.iterable'
			| 'es2015.promise'
			| 'es2015.proxy'
			| 'es2015.reflect'
			| 'es2015.symbol.wellknown'
			| 'es2015.symbol'
			| 'es2016'
			| 'es2016.array.include'
			| 'es2017'
			| 'es2017.intl'
			| 'es2017.object'
			| 'es2017.sharedmemory'
			| 'es2017.string'
			| 'es2017.typedarrays'
			| 'es2018'
			| 'es2018.asyncgenerator'
			| 'es2018.asynciterable'
			| 'es2018.intl'
			| 'es2018.promise'
			| 'es2018.regexp'
			| 'es2019'
			| 'es2019.array'
			| 'es2019.object'
			| 'es2019.string'
			| 'es2019.symbol'
			| 'es2020'
			| 'es2020.bigint'
			| 'es2020.promise'
			| 'es2020.string'
			| 'es2020.symbol.wellknown'
			| 'es2020.sharedmemory'
			| 'es2020.intl'
			| 'es2021'
			| 'es2021.promise'
			| 'es2021.string'
			| 'es2021.weakref'
			| 'esnext'
			| 'esnext.array'
			| 'esnext.asynciterable'
			| 'esnext.bigint'
			| 'esnext.intl'
			| 'esnext.promise'
			| 'esnext.string'
			| 'esnext.symbol'
			| 'esnext.weakref'
			| 'dom'
			| 'dom.iterable'
			| 'scripthost'
			| 'webworker'
			| 'webworker.importscripts'
			| 'webworker.iterable';

		export interface Plugin {
			[key: string]: unknown;
			/**
			Plugin name.
			*/
			name?: string;
		}

		export type ImportsNotUsedAsValues =
			| 'remove'
			| 'preserve'
			| 'error';

		export type FallbackPolling =
			| 'fixedPollingInterval'
			| 'priorityPollingInterval'
			| 'dynamicPriorityPolling'
			| 'fixedInterval'
			| 'priorityInterval'
			| 'dynamicPriority'
			| 'fixedChunkSize';

		export type WatchDirectory =
			| 'useFsEvents'
			| 'fixedPollingInterval'
			| 'dynamicPriorityPolling'
			| 'fixedChunkSizePolling';

		export type WatchFile =
			| 'fixedPollingInterval'
			| 'priorityPollingInterval'
			| 'dynamicPriorityPolling'
			| 'useFsEvents'
			| 'useFsEventsOnParentDirectory'
			| 'fixedChunkSizePolling';

	}

	export interface CompilerOptions {
		/**
		The character set of the input files.

		@default 'utf8'
		*/
		charset?: string;

		/**
		Enables building for project references.

		@default true
		*/
		composite?: boolean;

		/**
		Generates corresponding d.ts files.

		@default false
		*/
		declaration?: boolean;

		/**
		Specify output directory for generated declaration files.

		Requires TypeScript version 2.0 or later.
		*/
		declarationDir?: string;

		/**
		Show diagnostic information.

		@default false
		*/
		diagnostics?: boolean;

		/**
		Reduce the number of projects loaded automatically by TypeScript.

		Requires TypeScript version 4.0 or later.

		@default false
		*/
		disableReferencedProjectLoad?: boolean;

		/**
		Enforces using indexed accessors for keys declared using an indexed type.

		Requires TypeScript version 4.2 or later.

		@default false
		*/
		noPropertyAccessFromIndexSignature?: boolean;

		/**
		Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.

		@default false
		*/
		emitBOM?: boolean;

		/**
		Only emit `.d.ts` declaration files.

		@default false
		*/
		emitDeclarationOnly?: boolean;

		/**
		Differentiate between undefined and not present when type checking.

		Requires TypeScript version 4.4 or later.

		@default false
		*/
		exactOptionalPropertyTypes?: boolean;

		/**
		Enable incremental compilation.

		@default `composite`
		*/
		incremental?: boolean;

		/**
		Specify file to store incremental compilation information.

		@default '.tsbuildinfo'
		*/
		tsBuildInfoFile?: string;

		/**
		Emit a single file with source maps instead of having a separate file.

		@default false
		*/
		inlineSourceMap?: boolean;

		/**
		Emit the source alongside the sourcemaps within a single file.

		Requires `--inlineSourceMap` to be set.

		@default false
		*/
		inlineSources?: boolean;

		/**
		Specify what JSX code is generated.

		@default 'preserve'
		*/
		jsx?: CompilerOptions.JSX;

		/**
		Specifies the object invoked for `createElement` and `__spread` when targeting `'react'` JSX emit.

		@default 'React'
		*/
		reactNamespace?: string;

		/**
		Specify the JSX factory function to use when targeting React JSX emit, e.g. `React.createElement` or `h`.

		Requires TypeScript version 2.1 or later.

		@default 'React.createElement'
		*/
		jsxFactory?: string;

		/**
		Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'.

		Requires TypeScript version 4.0 or later.

		@default 'React.Fragment'
		*/
		jsxFragmentFactory?: string;

		/**
		Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.

		Requires TypeScript version 4.1 or later.

		@default 'react'
		*/
		jsxImportSource?: string;

		/**
		Print names of files part of the compilation.

		@default false
		*/
		listFiles?: boolean;

		/**
		Specifies the location where debugger should locate map files instead of generated locations.
		*/
		mapRoot?: string;

		/**
		Specify module code generation: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015' or 'ESNext'. Only 'AMD' and 'System' can be used in conjunction with `--outFile`. 'ES6' and 'ES2015' values may be used when targeting 'ES5' or lower.

		@default ['ES3', 'ES5'].includes(target) ? 'CommonJS' : 'ES6'
		*/
		module?: CompilerOptions.Module;

		/**
		Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6).

		@default ['AMD', 'System', 'ES6'].includes(module) ? 'classic' : 'node'
		*/
		moduleResolution?: 'classic' | 'node';

		/**
		Specifies the end of line sequence to be used when emitting files: 'crlf' (Windows) or 'lf' (Unix).

		Default: Platform specific
		*/
		newLine?: CompilerOptions.NewLine;

		/**
		Do not emit output.

		@default false
		*/
		noEmit?: boolean;

		/**
		Do not generate custom helper functions like `__extends` in compiled output.

		@default false
		*/
		noEmitHelpers?: boolean;

		/**
		Do not emit outputs if any type checking errors were reported.

		@default false
		*/
		noEmitOnError?: boolean;

		/**
		Warn on expressions and declarations with an implied 'any' type.

		@default false
		*/
		noImplicitAny?: boolean;

		/**
		Raise error on 'this' expressions with an implied any type.

		@default false
		*/
		noImplicitThis?: boolean;

		/**
		Report errors on unused locals.

		Requires TypeScript version 2.0 or later.

		@default false
		*/
		noUnusedLocals?: boolean;

		/**
		Report errors on unused parameters.

		Requires TypeScript version 2.0 or later.

		@default false
		*/
		noUnusedParameters?: boolean;

		/**
		Do not include the default library file (lib.d.ts).

		@default false
		*/
		noLib?: boolean;

		/**
		Do not add triple-slash references or module import targets to the list of compiled files.

		@default false
		*/
		noResolve?: boolean;

		/**
		Disable strict checking of generic signatures in function types.

		@default false
		*/
		noStrictGenericChecks?: boolean;

		/**
		@deprecated use `skipLibCheck` instead.
		*/
		skipDefaultLibCheck?: boolean;

		/**
		Skip type checking of declaration files.

		Requires TypeScript version 2.0 or later.

		@default false
		*/
		skipLibCheck?: boolean;

		/**
		Concatenate and emit output to single file.
		*/
		outFile?: string;

		/**
		Redirect output structure to the directory.
		*/
		outDir?: string;

		/**
		Do not erase const enum declarations in generated code.

		@default false
		*/
		preserveConstEnums?: boolean;

		/**
		Do not resolve symlinks to their real path; treat a symlinked file like a real one.

		@default false
		*/
		preserveSymlinks?: boolean;

		/**
		Keep outdated console output in watch mode instead of clearing the screen.

		@default false
		*/
		preserveWatchOutput?: boolean;

		/**
		Stylize errors and messages using color and context (experimental).

		@default true // Unless piping to another program or redirecting output to a file.
		*/
		pretty?: boolean;

		/**
		Do not emit comments to output.

		@default false
		*/
		removeComments?: boolean;

		/**
		Specifies the root directory of input files.

		Use to control the output directory structure with `--outDir`.
		*/
		rootDir?: string;

		/**
		Unconditionally emit imports for unresolved files.

		@default false
		*/
		isolatedModules?: boolean;

		/**
		Generates corresponding '.map' file.

		@default false
		*/
		sourceMap?: boolean;

		/**
		Specifies the location where debugger should locate TypeScript files instead of source locations.
		*/
		sourceRoot?: string;

		/**
		Suppress excess property checks for object literals.

		@default false
		*/
		suppressExcessPropertyErrors?: boolean;

		/**
		Suppress noImplicitAny errors for indexing objects lacking index signatures.

		@default false
		*/
		suppressImplicitAnyIndexErrors?: boolean;

		/**
		Do not emit declarations for code that has an `@internal` annotation.
		*/
		stripInternal?: boolean;

		/**
		Specify ECMAScript target version.

		@default 'es3'
		*/
		target?: CompilerOptions.Target;

		/**
		Default catch clause variables as `unknown` instead of `any`.

		Requires TypeScript version 4.4 or later.

		@default false
		*/
		useUnknownInCatchVariables?: boolean;

		/**
		Watch input files.

		@default false
		@deprecated Use watchOptions instead.
		*/
		watch?: boolean;

		/**
		Specify the polling strategy to use when the system runs out of or doesn't support native file watchers.

		Requires TypeScript version 3.8 or later.

		@deprecated Use watchOptions.fallbackPolling instead.
		*/
		fallbackPolling?: CompilerOptions.FallbackPolling;

		/**
		Specify the strategy for watching directories under systems that lack recursive file-watching functionality.

		Requires TypeScript version 3.8 or later.

		@default 'useFsEvents'
		@deprecated Use watchOptions.watchDirectory instead.
		*/
		watchDirectory?: CompilerOptions.WatchDirectory;

		/**
		Specify the strategy for watching individual files.

		Requires TypeScript version 3.8 or later.

		@default 'useFsEvents'
		@deprecated Use watchOptions.watchFile instead.
		*/
		watchFile?: CompilerOptions.WatchFile;

		/**
		Enables experimental support for ES7 decorators.

		@default false
		*/
		experimentalDecorators?: boolean;

		/**
		Emit design-type metadata for decorated declarations in source.

		@default false
		*/
		emitDecoratorMetadata?: boolean;

		/**
		Do not report errors on unused labels.

		@default false
		*/
		allowUnusedLabels?: boolean;

		/**
		Report error when not all code paths in function return a value.

		@default false
		*/
		noImplicitReturns?: boolean;

		/**
		Add `undefined` to a type when accessed using an index.

		Requires TypeScript version 4.1 or later.

		@default false
		*/
		noUncheckedIndexedAccess?: boolean;

		/**
		Report errors for fallthrough cases in switch statement.

		@default false
		*/
		noFallthroughCasesInSwitch?: boolean;

		/**
		Ensure overriding members in derived classes are marked with an override modifier.

		@default false
		*/
		noImplicitOverride?: boolean;

		/**
		Do not report errors on unreachable code.

		@default false
		*/
		allowUnreachableCode?: boolean;

		/**
		Disallow inconsistently-cased references to the same file.

		@default false
		*/
		forceConsistentCasingInFileNames?: boolean;

		/**
		Emit a v8 CPU profile of the compiler run for debugging.

		Requires TypeScript version 3.7 or later.

		@default 'profile.cpuprofile'
		*/
		generateCpuProfile?: string;

		/**
		Base directory to resolve non-relative module names.
		*/
		baseUrl?: string;

		/**
		Specify path mapping to be computed relative to baseUrl option.
		*/
		paths?: Record<string, string[]>;

		/**
		List of TypeScript language server plugins to load.

		Requires TypeScript version 2.3 or later.
		*/
		plugins?: CompilerOptions.Plugin[];

		/**
		Specify list of root directories to be used when resolving modules.
		*/
		rootDirs?: string[];

		/**
		Specify list of directories for type definition files to be included.

		Requires TypeScript version 2.0 or later.
		*/
		typeRoots?: string[];

		/**
		Type declaration files to be included in compilation.

		Requires TypeScript version 2.0 or later.
		*/
		types?: string[];

		/**
		Enable tracing of the name resolution process.

		@default false
		*/
		traceResolution?: boolean;

		/**
		Allow javascript files to be compiled.

		@default false
		*/
		allowJs?: boolean;

		/**
		Do not truncate error messages.

		@default false
		*/
		noErrorTruncation?: boolean;

		/**
		Allow default imports from modules with no default export. This does not affect code emit, just typechecking.

		@default module === 'system' || esModuleInterop
		*/
		allowSyntheticDefaultImports?: boolean;

		/**
		Do not emit `'use strict'` directives in module output.

		@default false
		*/
		noImplicitUseStrict?: boolean;

		/**
		Enable to list all emitted files.

		Requires TypeScript version 2.0 or later.

		@default false
		*/
		listEmittedFiles?: boolean;

		/**
		Disable size limit for JavaScript project.

		Requires TypeScript version 2.0 or later.

		@default false
		*/
		disableSizeLimit?: boolean;

		/**
		List of library files to be included in the compilation.

		Requires TypeScript version 2.0 or later.
		*/
		lib?: CompilerOptions.Lib[];

		/**
		Enable strict null checks.

		Requires TypeScript version 2.0 or later.

		@default false
		*/
		strictNullChecks?: boolean;

		/**
		The maximum dependency depth to search under `node_modules` and load JavaScript files. Only applicable with `--allowJs`.

		@default 0
		*/
		maxNodeModuleJsDepth?: number;

		/**
		Import emit helpers (e.g. `__extends`, `__rest`, etc..) from tslib.

		Requires TypeScript version 2.1 or later.

		@default false
		*/
		importHelpers?: boolean;

		/**
		Specify emit/checking behavior for imports that are only used for types.

		@default 'remove'
		*/
		importsNotUsedAsValues?: CompilerOptions.ImportsNotUsedAsValues;

		/**
		Parse in strict mode and emit `'use strict'` for each source file.

		Requires TypeScript version 2.1 or later.

		@default false
		*/
		alwaysStrict?: boolean;

		/**
		Enable all strict type checking options.

		Requires TypeScript version 2.3 or later.

		@default false
		*/
		strict?: boolean;

		/**
		Enable stricter checking of of the `bind`, `call`, and `apply` methods on functions.

		@default false
		*/
		strictBindCallApply?: boolean;

		/**
		Provide full support for iterables in `for-of`, spread, and destructuring when targeting `ES5` or `ES3`.

		Requires TypeScript version 2.3 or later.

		@default false
		*/
		downlevelIteration?: boolean;

		/**
		Report errors in `.js` files.

		Requires TypeScript version 2.3 or later.

		@default false
		*/
		checkJs?: boolean;

		/**
		Disable bivariant parameter checking for function types.

		Requires TypeScript version 2.6 or later.

		@default false
		*/
		strictFunctionTypes?: boolean;

		/**
		Ensure non-undefined class properties are initialized in the constructor.

		Requires TypeScript version 2.7 or later.

		@default false
		*/
		strictPropertyInitialization?: boolean;

		/**
		Emit `__importStar` and `__importDefault` helpers for runtime Babel ecosystem compatibility and enable `--allowSyntheticDefaultImports` for typesystem compatibility.

		Requires TypeScript version 2.7 or later.

		@default false
		*/
		esModuleInterop?: boolean;

		/**
		Allow accessing UMD globals from modules.

		@default false
		*/
		allowUmdGlobalAccess?: boolean;

		/**
		Resolve `keyof` to string valued property names only (no numbers or symbols).

		Requires TypeScript version 2.9 or later.

		@default false
		*/
		keyofStringsOnly?: boolean;

		/**
		Emit ECMAScript standard class fields.

		Requires TypeScript version 3.7 or later.

		@default false
		*/
		useDefineForClassFields?: boolean;

		/**
		Generates a sourcemap for each corresponding `.d.ts` file.

		Requires TypeScript version 2.9 or later.

		@default false
		*/
		declarationMap?: boolean;

		/**
		Include modules imported with `.json` extension.

		Requires TypeScript version 2.9 or later.

		@default false
		*/
		resolveJsonModule?: boolean;

		/**
		Have recompiles in '--incremental' and '--watch' assume that changes within a file will only affect files directly depending on it.

		Requires TypeScript version 3.8 or later.

		@default false
		*/
		assumeChangesOnlyAffectDirectDependencies?: boolean;

		/**
		Output more detailed compiler performance information after building.

		@default false
		*/
		extendedDiagnostics?: boolean;

		/**
		Print names of files that are part of the compilation and then stop processing.

		@default false
		*/
		listFilesOnly?: boolean;

		/**
		Disable preferring source files instead of declaration files when referencing composite projects.

		@default true if composite, false otherwise
		*/
		disableSourceOfProjectReferenceRedirect?: boolean;

		/**
		Opt a project out of multi-project reference checking when editing.

		Requires TypeScript version 3.8 or later.

		@default false
		*/
		disableSolutionSearching?: boolean;

		/**
		Print names of files which TypeScript sees as a part of your project and the reason they are part of the compilation.

		Requires TypeScript version 4.2 or later.

		@default false
		*/
		explainFiles?: boolean;
	}

	namespace WatchOptions {
		export type WatchFileKind =
			| 'FixedPollingInterval'
			| 'PriorityPollingInterval'
			| 'DynamicPriorityPolling'
			| 'FixedChunkSizePolling'
			| 'UseFsEvents'
			| 'UseFsEventsOnParentDirectory';

		export type WatchDirectoryKind =
			| 'UseFsEvents'
			| 'FixedPollingInterval'
			| 'DynamicPriorityPolling'
			| 'FixedChunkSizePolling';

		export type PollingWatchKind =
			| 'FixedInterval'
			| 'PriorityInterval'
			| 'DynamicPriority'
			| 'FixedChunkSize';
	}

	export interface WatchOptions {

		/**
		Specify the strategy for watching individual files.

		Requires TypeScript version 3.8 or later.

		@default 'UseFsEvents'
		*/
		watchFile?: WatchOptions.WatchFileKind | Lowercase<WatchOptions.WatchFileKind>;

		/**
		Specify the strategy for watching directories under systems that lack recursive file-watching functionality.

		Requires TypeScript version 3.8 or later.

		@default 'UseFsEvents'
		*/
		watchDirectory?: WatchOptions.WatchDirectoryKind | Lowercase<WatchOptions.WatchDirectoryKind>;

		/**
		Specify the polling strategy to use when the system runs out of or doesn't support native file watchers.

		Requires TypeScript version 3.8 or later.
		*/
		fallbackPolling?: WatchOptions.PollingWatchKind | Lowercase<WatchOptions.PollingWatchKind>;

		/**
		Enable synchronous updates on directory watchers for platforms that don't support recursive watching natively.
		*/
		synchronousWatchDirectory?: boolean;

		/**
		Specifies a list of directories to exclude from watch
		*/
		excludeDirectories?: string[];

		/**
		Specifies a list of files to exclude from watch
		*/
		excludeFiles?: string[];
	}

	/**
	Auto type (.d.ts) acquisition options for this project.

	Requires TypeScript version 2.1 or later.
	*/
	export interface TypeAcquisition {
		/**
		Enable auto type acquisition.
		*/
		enable?: boolean;

		/**
		Specifies a list of type declarations to be included in auto type acquisition. For example, `['jquery', 'lodash']`.
		*/
		include?: string[];

		/**
		Specifies a list of type declarations to be excluded from auto type acquisition. For example, `['jquery', 'lodash']`.
		*/
		exclude?: string[];
	}

	export interface References {
		/**
		A normalized path on disk.
		*/
		path: string;

		/**
		The path as the user originally wrote it.
		*/
		originalPath?: string;

		/**
		True if the output of this reference should be prepended to the output of this project.

		Only valid for `--outFile` compilations.
		*/
		prepend?: boolean;

		/**
		True if it is intended that this reference form a circularity.
		*/
		circular?: boolean;
	}
}

/**
Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (TypeScript 3.7).

@category File
*/
export interface TsConfigJson {
	/**
	Instructs the TypeScript compiler how to compile `.ts` files.
	*/
	compilerOptions?: TsConfigJson.CompilerOptions;

	/**
	Instructs the TypeScript compiler how to watch files.
	*/
	watchOptions?: TsConfigJson.WatchOptions;

	/**
	Auto type (.d.ts) acquisition options for this project.

	Requires TypeScript version 2.1 or later.
	*/
	typeAcquisition?: TsConfigJson.TypeAcquisition;

	/**
	Enable Compile-on-Save for this project.
	*/
	compileOnSave?: boolean;

	/**
	Path to base configuration file to inherit from.

	Requires TypeScript version 2.1 or later.
	*/
	extends?: string;

	/**
	If no `files` or `include` property is present in a `tsconfig.json`, the compiler defaults to including all files in the containing directory and subdirectories except those specified by `exclude`. When a `files` property is specified, only those files and those specified by `include` are included.
	*/
	files?: string[];

	/**
	Specifies a list of files to be excluded from compilation. The `exclude` property only affects the files included via the `include` property and not the `files` property.

	Glob patterns require TypeScript version 2.0 or later.
	*/
	exclude?: string[];

	/**
	Specifies a list of glob patterns that match files to be included in compilation.

	If no `files` or `include` property is present in a `tsconfig.json`, the compiler defaults to including all files in the containing directory and subdirectories except those specified by `exclude`.

	Requires TypeScript version 2.0 or later.
	*/
	include?: string[];

	/**
	Referenced projects.

	Requires TypeScript version 3.0 or later.
	*/
	references?: TsConfigJson.References[];
}
