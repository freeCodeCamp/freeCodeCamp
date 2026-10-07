/**
Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

@category Type
*/
type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

/**
Matches a JSON object.

This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.

@category JSON
*/
type JsonObject = {[Key in string]: JsonValue} & {[Key in string]?: JsonValue | undefined};

/**
Matches a JSON array.

@category JSON
*/
type JsonArray = JsonValue[] | readonly JsonValue[];

/**
Matches any valid JSON primitive value.

@category JSON
*/
type JsonPrimitive = string | number | boolean | null;

/**
Matches any valid JSON value.

@see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.

@category JSON
*/
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

declare global {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- It has to be an `interface` so that it can be merged.
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

/**
Remove spaces from the left side.
*/
type TrimLeft<V extends string> = V extends `${Whitespace}${infer R}` ? TrimLeft<R> : V;

/**
Remove spaces from the right side.
*/
type TrimRight<V extends string> = V extends `${infer R}${Whitespace}` ? TrimRight<R> : V;

/**
Remove leading and trailing spaces from a string.

@example
```
import type {Trim} from 'type-fest';

Trim<' foo '>
//=> 'foo'
```

@category String
@category Template literal
*/
type Trim<V extends string> = TrimLeft<TrimRight<V>>;

type Whitespace =
	| '\u{9}' // '\t'
	| '\u{A}' // '\n'
	| '\u{B}' // '\v'
	| '\u{C}' // '\f'
	| '\u{D}' // '\r'
	| '\u{20}' // ' '
	| '\u{85}'
	| '\u{A0}'
	| '\u{1680}'
	| '\u{2000}'
	| '\u{2001}'
	| '\u{2002}'
	| '\u{2003}'
	| '\u{2004}'
	| '\u{2005}'
	| '\u{2006}'
	| '\u{2007}'
	| '\u{2008}'
	| '\u{2009}'
	| '\u{200A}'
	| '\u{2028}'
	| '\u{2029}'
	| '\u{202F}'
	| '\u{205F}'
	| '\u{3000}'
	| '\u{FEFF}';

type WordSeparators = '-' | '_' | Whitespace;

/**
Returns a boolean for whether the string is lowercased.
*/
type IsLowerCase<T extends string> = T extends Lowercase<T> ? true : false;

/**
Returns a boolean for whether the string is uppercased.
*/
type IsUpperCase<T extends string> = T extends Uppercase<T> ? true : false;

/**
Returns a boolean for whether the string is numeric.

This type is a workaround for [Microsoft/TypeScript#46109](https://github.com/microsoft/TypeScript/issues/46109#issuecomment-930307987).
*/
type IsNumeric<T extends string> = T extends `${number}`
	? Trim<T> extends T
		? true
		: false
	: false;

/**
Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.

Currently, when a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals. Thus, when such type is used in an IDE with autocompletion, no suggestions are made for the declared literals.

This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729). It will be removed as soon as it's not needed anymore.

@example
```
import type {LiteralUnion} from 'type-fest';

// Before

type Pet = 'dog' | 'cat' | string;

const pet: Pet = '';
// Start typing in your TypeScript-enabled IDE.
// You **will not** get auto-completion for `dog` and `cat` literals.

// After

type Pet2 = LiteralUnion<'dog' | 'cat', string>;

const pet: Pet2 = '';
// You **will** get auto-completion for `dog` and `cat` literals.
```

@category Type
*/
type LiteralUnion<
	LiteralType,
	BaseType extends Primitive,
> = LiteralType | (BaseType & Record<never, never>);

type SkipEmptyWord<Word extends string> = Word extends '' ? [] : [Word];

type RemoveLastCharacter<Sentence extends string, Character extends string> = Sentence extends `${infer LeftSide}${Character}`
	? SkipEmptyWord<LeftSide>
	: never;

/**
Split a string (almost) like Lodash's `_.words()` function.

- Split on each word that begins with a capital letter.
- Split on each {@link WordSeparators}.
- Split on numeric sequence.

@example
```
type Words0 = SplitWords<'helloWorld'>; // ['hello', 'World']
type Words1 = SplitWords<'helloWORLD'>; // ['hello', 'WORLD']
type Words2 = SplitWords<'hello-world'>; // ['hello', 'world']
type Words3 = SplitWords<'--hello the_world'>; // ['hello', 'the', 'world']
type Words4 = SplitWords<'lifeIs42'>; // ['life', 'Is', '42']
```

@internal
@category Change case
@category Template literal
*/
type SplitWords<
	Sentence extends string,
	LastCharacter extends string = '',
	CurrentWord extends string = '',
> = Sentence extends `${infer FirstCharacter}${infer RemainingCharacters}`
	? FirstCharacter extends WordSeparators
		// Skip word separator
		? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters>]
		: LastCharacter extends ''
			// Fist char of word
			? SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>
			// Case change: non-numeric to numeric, push word
			: [false, true] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
				? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
				// Case change: numeric to non-numeric, push word
				: [true, false] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
					? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
					// No case change: concat word
					: [true, true] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
						? SplitWords<RemainingCharacters, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
					// Case change: lower to upper, push word
						: [true, true] extends [IsLowerCase<LastCharacter>, IsUpperCase<FirstCharacter>]
							? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
						// Case change: upper to lower, brings back the last character, push word
							: [true, true] extends [IsUpperCase<LastCharacter>, IsLowerCase<FirstCharacter>]
								? [...RemoveLastCharacter<CurrentWord, LastCharacter>, ...SplitWords<RemainingCharacters, FirstCharacter, `${LastCharacter}${FirstCharacter}`>]
							// No case change: concat word
								: SplitWords<RemainingCharacters, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
	: [...SkipEmptyWord<CurrentWord>];

/**
CamelCase options.

@see {@link CamelCase}
*/
type CamelCaseOptions = {
	/**
	Whether to preserved consecutive uppercase letter.

	@default true
	*/
	preserveConsecutiveUppercase?: boolean;
};

/**
Convert an array of words to camel-case.
*/
type CamelCaseFromArray<
	Words extends string[],
	Options extends CamelCaseOptions,
	OutputString extends string = '',
> = Words extends [
	infer FirstWord extends string,
	...infer RemainingWords extends string[],
]
	? Options['preserveConsecutiveUppercase'] extends true
		? `${Capitalize<FirstWord>}${CamelCaseFromArray<RemainingWords, Options>}`
		: `${Capitalize<Lowercase<FirstWord>>}${CamelCaseFromArray<RemainingWords, Options>}`
	: OutputString;

/**
Convert a string literal to camel-case.

This can be useful when, for example, converting some kebab-cased command-line flags or a snake-cased database result.

By default, consecutive uppercase letter are preserved. See {@link CamelCaseOptions.preserveConsecutiveUppercase preserveConsecutiveUppercase} option to change this behaviour.

@example
```
import type {CamelCase} from 'type-fest';

// Simple

const someVariable: CamelCase<'foo-bar'> = 'fooBar';

// Advanced

type CamelCasedProperties<T> = {
	[K in keyof T as CamelCase<K>]: T[K]
};

interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
	BAR: string;
	QUZ_QUX: number;
	'OTHER-FIELD': boolean;
}

const dbResult: CamelCasedProperties<RawOptions> = {
	dryRun: true,
	fullFamilyName: 'bar.js',
	foo: 123,
	bar: 'foo',
	quzQux: 6,
	otherField: false
};
```

@category Change case
@category Template literal
*/
type CamelCase<Type, Options extends CamelCaseOptions = {preserveConsecutiveUppercase: true}> = Type extends string
	? string extends Type
		? Type
		: Uncapitalize<CamelCaseFromArray<SplitWords<Type extends Uppercase<Type> ? Lowercase<Type> : Type>, Options>>
	: Type;

/**
Convert object properties to camel case but not recursively.

This can be useful when, for example, converting some API types from a different style.

@see CamelCasedPropertiesDeep
@see CamelCase

@example
```
import type {CamelCasedProperties} from 'type-fest';

interface User {
	UserId: number;
	UserName: string;
}

const result: CamelCasedProperties<User> = {
	userId: 1,
	userName: 'Tom',
};
```

@category Change case
@category Template literal
@category Object
*/
type CamelCasedProperties<Value, Options extends CamelCaseOptions = {preserveConsecutiveUppercase: true}> = Value extends Function
	? Value
	: Value extends Array<infer U>
		? Value
		: {
			[K in keyof Value as CamelCase<K, Options>]: Value[K];
		};

declare namespace PackageJson {
	/**
	A person who has been involved in creating or maintaining the package.
	*/
	export type Person =
		| string
		| {
			name: string;
			url?: string;
			email?: string;
		};

	export type BugsLocation =
		| string
		| {
			/**
			The URL to the package's issue tracker.
			*/
			url?: string;

			/**
			The email address to which issues should be reported.
			*/
			email?: string;
		};

	export type DirectoryLocations = {
		[directoryType: string]: JsonValue | undefined;

		/**
		Location for executable scripts. Sugar to generate entries in the `bin` property by walking the folder.
		*/
		bin?: string;

		/**
		Location for Markdown files.
		*/
		doc?: string;

		/**
		Location for example scripts.
		*/
		example?: string;

		/**
		Location for the bulk of the library.
		*/
		lib?: string;

		/**
		Location for man pages. Sugar to generate a `man` array by walking the folder.
		*/
		man?: string;

		/**
		Location for test files.
		*/
		test?: string;
	};

	export type Scripts = {
		/**
		Run **before** the package is published (Also run on local `npm install` without any arguments).
		*/
		prepublish?: string;

		/**
		Run both **before** the package is packed and published, and on local `npm install` without any arguments. This is run **after** `prepublish`, but **before** `prepublishOnly`.
		*/
		prepare?: string;

		/**
		Run **before** the package is prepared and packed, **only** on `npm publish`.
		*/
		prepublishOnly?: string;

		/**
		Run **before** a tarball is packed (on `npm pack`, `npm publish`, and when installing git dependencies).
		*/
		prepack?: string;

		/**
		Run **after** the tarball has been generated and moved to its final destination.
		*/
		postpack?: string;

		/**
		Run **after** the package is published.
		*/
		publish?: string;

		/**
		Run **after** the package is published.
		*/
		postpublish?: string;

		/**
		Run **before** the package is installed.
		*/
		preinstall?: string;

		/**
		Run **after** the package is installed.
		*/
		install?: string;

		/**
		Run **after** the package is installed and after `install`.
		*/
		postinstall?: string;

		/**
		Run **before** the package is uninstalled and before `uninstall`.
		*/
		preuninstall?: string;

		/**
		Run **before** the package is uninstalled.
		*/
		uninstall?: string;

		/**
		Run **after** the package is uninstalled.
		*/
		postuninstall?: string;

		/**
		Run **before** bump the package version and before `version`.
		*/
		preversion?: string;

		/**
		Run **before** bump the package version.
		*/
		version?: string;

		/**
		Run **after** bump the package version.
		*/
		postversion?: string;

		/**
		Run with the `npm test` command, before `test`.
		*/
		pretest?: string;

		/**
		Run with the `npm test` command.
		*/
		test?: string;

		/**
		Run with the `npm test` command, after `test`.
		*/
		posttest?: string;

		/**
		Run with the `npm stop` command, before `stop`.
		*/
		prestop?: string;

		/**
		Run with the `npm stop` command.
		*/
		stop?: string;

		/**
		Run with the `npm stop` command, after `stop`.
		*/
		poststop?: string;

		/**
		Run with the `npm start` command, before `start`.
		*/
		prestart?: string;

		/**
		Run with the `npm start` command.
		*/
		start?: string;

		/**
		Run with the `npm start` command, after `start`.
		*/
		poststart?: string;

		/**
		Run with the `npm restart` command, before `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
		*/
		prerestart?: string;

		/**
		Run with the `npm restart` command. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
		*/
		restart?: string;

		/**
		Run with the `npm restart` command, after `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
		*/
		postrestart?: string;
	} & Partial<Record<string, string>>;

	/**
	Dependencies of the package. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or Git URL.
	*/
	export type Dependency = Partial<Record<string, string>>;

	/**
	A mapping of conditions and the paths to which they resolve.
	*/
	type ExportConditions = { // eslint-disable-line @typescript-eslint/consistent-indexed-object-style
		[condition: string]: Exports;
	};

	/**
	Entry points of a module, optionally with conditions and subpath exports.
	*/
	export type Exports =
	| null
	| string
	| Array<string | ExportConditions>
	| ExportConditions;

	/**
	Import map entries of a module, optionally with conditions and subpath imports.
	*/
	export type Imports = { // eslint-disable-line @typescript-eslint/consistent-indexed-object-style
		[key: `#${string}`]: Exports;
	};

	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	export interface NonStandardEntryPoints {
		/**
		An ECMAScript module ID that is the primary entry point to the program.
		*/
		module?: string;

		/**
		A module ID with untranspiled code that is the primary entry point to the program.
		*/
		esnext?:
		| string
		| {
			[moduleName: string]: string | undefined;
			main?: string;
			browser?: string;
		};

		/**
		A hint to JavaScript bundlers or component tools when packaging modules for client side use.
		*/
		browser?:
		| string
		| Partial<Record<string, string | false>>;

		/**
		Denote which files in your project are "pure" and therefore safe for Webpack to prune if unused.

		[Read more.](https://webpack.js.org/guides/tree-shaking/)
		*/
		sideEffects?: boolean | string[];
	}

	export type TypeScriptConfiguration = {
		/**
		Location of the bundled TypeScript declaration file.
		*/
		types?: string;

		/**
		Version selection map of TypeScript.
		*/
		typesVersions?: Partial<Record<string, Partial<Record<string, string[]>>>>;

		/**
		Location of the bundled TypeScript declaration file. Alias of `types`.
		*/
		typings?: string;
	};

	/**
	An alternative configuration for workspaces.
	*/
	export type WorkspaceConfig = {
		/**
		An array of workspace pattern strings which contain the workspace packages.
		*/
		packages?: WorkspacePattern[];

		/**
		Designed to solve the problem of packages which break when their `node_modules` are moved to the root workspace directory - a process known as hoisting. For these packages, both within your workspace, and also some that have been installed via `node_modules`, it is important to have a mechanism for preventing the default Yarn workspace behavior. By adding workspace pattern strings here, Yarn will resume non-workspace behavior for any package which matches the defined patterns.

		[Supported](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/) by Yarn.
		[Not supported](https://github.com/npm/rfcs/issues/287) by npm.
		*/
		nohoist?: WorkspacePattern[];
	};

	/**
	A workspace pattern points to a directory or group of directories which contain packages that should be included in the workspace installation process.

	The patterns are handled with [minimatch](https://github.com/isaacs/minimatch).

	@example
	`docs` → Include the docs directory and install its dependencies.
	`packages/*` → Include all nested directories within the packages directory, like `packages/cli` and `packages/core`.
	*/
	type WorkspacePattern = string;

	export type YarnConfiguration = {
		/**
		If your package only allows one version of a given dependency, and you’d like to enforce the same behavior as `yarn install --flat` on the command-line, set this to `true`.

		Note that if your `package.json` contains `"flat": true` and other packages depend on yours (e.g. you are building a library rather than an app), those other packages will also need `"flat": true` in their `package.json` or be installed with `yarn install --flat` on the command-line.
		*/
		flat?: boolean;

		/**
		Selective version resolutions. Allows the definition of custom package versions inside dependencies without manual edits in the `yarn.lock` file.
		*/
		resolutions?: Dependency;
	};

	export type JSPMConfiguration = {
		/**
		JSPM configuration.
		*/
		jspm?: PackageJson;
	};

	/**
	Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Containing standard npm properties.
	*/
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	export interface PackageJsonStandard {
		/**
		The name of the package.
		*/
		name?: string;

		/**
		Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).
		*/
		version?: string;

		/**
		Package description, listed in `npm search`.
		*/
		description?: string;

		/**
		Keywords associated with package, listed in `npm search`.
		*/
		keywords?: string[];

		/**
		The URL to the package's homepage.
		*/
		homepage?: LiteralUnion<'.', string>;

		/**
		The URL to the package's issue tracker and/or the email address to which issues should be reported.
		*/
		bugs?: BugsLocation;

		/**
		The license for the package.
		*/
		license?: string;

		/**
		The licenses for the package.
		*/
		licenses?: Array<{
			type?: string;
			url?: string;
		}>;

		author?: Person;

		/**
		A list of people who contributed to the package.
		*/
		contributors?: Person[];

		/**
		A list of people who maintain the package.
		*/
		maintainers?: Person[];

		/**
		The files included in the package.
		*/
		files?: string[];

		/**
		Resolution algorithm for importing ".js" files from the package's scope.

		[Read more.](https://nodejs.org/api/esm.html#esm_package_json_type_field)
		*/
		type?: 'module' | 'commonjs';

		/**
		The module ID that is the primary entry point to the program.
		*/
		main?: string;

		/**
		Subpath exports to define entry points of the package.

		[Read more.](https://nodejs.org/api/packages.html#subpath-exports)
		*/
		exports?: Exports;

		/**
		Subpath imports to define internal package import maps that only apply to import specifiers from within the package itself.

		[Read more.](https://nodejs.org/api/packages.html#subpath-imports)
		*/
		imports?: Imports;

		/**
		The executable files that should be installed into the `PATH`.
		*/
		bin?:
		| string
		| Partial<Record<string, string>>;

		/**
		Filenames to put in place for the `man` program to find.
		*/
		man?: string | string[];

		/**
		Indicates the structure of the package.
		*/
		directories?: DirectoryLocations;

		/**
		Location for the code repository.
		*/
		repository?:
		| string
		| {
			type: string;
			url: string;

			/**
			Relative path to package.json if it is placed in non-root directory (for example if it is part of a monorepo).

			[Read more.](https://github.com/npm/rfcs/blob/latest/implemented/0010-monorepo-subdirectory-declaration.md)
			*/
			directory?: string;
		};

		/**
		Script commands that are run at various times in the lifecycle of the package. The key is the lifecycle event, and the value is the command to run at that point.
		*/
		scripts?: Scripts;

		/**
		Is used to set configuration parameters used in package scripts that persist across upgrades.
		*/
		config?: JsonObject;

		/**
		The dependencies of the package.
		*/
		dependencies?: Dependency;

		/**
		Additional tooling dependencies that are not required for the package to work. Usually test, build, or documentation tooling.
		*/
		devDependencies?: Dependency;

		/**
		Dependencies that are skipped if they fail to install.
		*/
		optionalDependencies?: Dependency;

		/**
		Dependencies that will usually be required by the package user directly or via another dependency.
		*/
		peerDependencies?: Dependency;

		/**
		Indicate peer dependencies that are optional.
		*/
		peerDependenciesMeta?: Partial<Record<string, {optional: true}>>;

		/**
		Package names that are bundled when the package is published.
		*/
		bundledDependencies?: string[];

		/**
		Alias of `bundledDependencies`.
		*/
		bundleDependencies?: string[];

		/**
		Engines that this package runs on.
		*/
		engines?: {
			[EngineName in 'npm' | 'node' | string]?: string;
		};

		/**
		@deprecated
		*/
		engineStrict?: boolean;

		/**
		Operating systems the module runs on.
		*/
		os?: Array<LiteralUnion<
		| 'aix'
		| 'darwin'
		| 'freebsd'
		| 'linux'
		| 'openbsd'
		| 'sunos'
		| 'win32'
		| '!aix'
		| '!darwin'
		| '!freebsd'
		| '!linux'
		| '!openbsd'
		| '!sunos'
		| '!win32',
		string
		>>;

		/**
		CPU architectures the module runs on.
		*/
		cpu?: Array<LiteralUnion<
		| 'arm'
		| 'arm64'
		| 'ia32'
		| 'mips'
		| 'mipsel'
		| 'ppc'
		| 'ppc64'
		| 's390'
		| 's390x'
		| 'x32'
		| 'x64'
		| '!arm'
		| '!arm64'
		| '!ia32'
		| '!mips'
		| '!mipsel'
		| '!ppc'
		| '!ppc64'
		| '!s390'
		| '!s390x'
		| '!x32'
		| '!x64',
		string
		>>;

		/**
		If set to `true`, a warning will be shown if package is installed locally. Useful if the package is primarily a command-line application that should be installed globally.

		@deprecated
		*/
		preferGlobal?: boolean;

		/**
		If set to `true`, then npm will refuse to publish it.
		*/
		private?: boolean;

		/**
		A set of config values that will be used at publish-time. It's especially handy to set the tag, registry or access, to ensure that a given package is not tagged with 'latest', published to the global public registry or that a scoped module is private by default.
		*/
		publishConfig?: PublishConfig;

		/**
		Describes and notifies consumers of a package's monetary support information.

		[Read more.](https://github.com/npm/rfcs/blob/latest/accepted/0017-add-funding-support.md)
		*/
		funding?: string | {
			/**
			The type of funding.
			*/
			type?: LiteralUnion<
			| 'github'
			| 'opencollective'
			| 'patreon'
			| 'individual'
			| 'foundation'
			| 'corporation',
			string
			>;

			/**
			The URL to the funding page.
			*/
			url: string;
		};

		/**
		Used to configure [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) / [Yarn workspaces](https://classic.yarnpkg.com/docs/workspaces/).

		Workspaces allow you to manage multiple packages within the same repository in such a way that you only need to run your install command once in order to install all of them in a single pass.

		Please note that the top-level `private` property of `package.json` **must** be set to `true` in order to use workspaces.
		*/
		workspaces?: WorkspacePattern[] | WorkspaceConfig;
	}

	/**
	Type for [`package.json` file used by the Node.js runtime](https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions).
	*/
	export type NodeJsStandard = {
		/**
		Defines which package manager is expected to be used when working on the current project. It can set to any of the [supported package managers](https://nodejs.org/api/corepack.html#supported-package-managers), and will ensure that your teams use the exact same package manager versions without having to install anything else than Node.js.

		__This field is currently experimental and needs to be opted-in; check the [Corepack](https://nodejs.org/api/corepack.html) page for details about the procedure.__

		@example
		```json
		{
			"packageManager": "<package manager name>@<version>"
		}
		```
		*/
		packageManager?: string;
	};

	export type PublishConfig = {
		/**
		Additional, less common properties from the [npm docs on `publishConfig`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#publishconfig).
		*/
		[additionalProperties: string]: JsonValue | undefined;

		/**
		When publishing scoped packages, the access level defaults to restricted. If you want your scoped package to be publicly viewable (and installable) set `--access=public`. The only valid values for access are public and restricted. Unscoped packages always have an access level of public.
		*/
		access?: 'public' | 'restricted';

		/**
		The base URL of the npm registry.

		Default: `'https://registry.npmjs.org/'`
		*/
		registry?: string;

		/**
		The tag to publish the package under.

		Default: `'latest'`
		*/
		tag?: string;
	};
}

/**
Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript and Yarn.

@category File
*/
type PackageJson =
JsonObject &
PackageJson.NodeJsStandard &
PackageJson.PackageJsonStandard &
PackageJson.NonStandardEntryPoints &
PackageJson.TypeScriptConfiguration &
PackageJson.YarnConfiguration &
PackageJson.JSPMConfiguration;

type FlagType = 'string' | 'boolean' | 'number';

/**
Callback function to determine if a flag is required during runtime.

@param flags - Contains the flags converted to camel-case excluding aliases.
@param input - Contains the non-flag arguments.

@returns True if the flag is required, otherwise false.
*/
type IsRequiredPredicate = (flags: Readonly<AnyFlags>, input: readonly string[]) => boolean;

type Flag<PrimitiveType extends FlagType, Type, IsMultiple = false> = {
	/**
	Type of value. (Possible values: `string` `boolean` `number`)
	*/
	readonly type?: PrimitiveType;

	/**
	Limit valid values to a predefined set of choices.

	@example
	```
	unicorn: {
		isMultiple: true,
		choices: ['rainbow', 'cat', 'unicorn']
	}
	```
	*/
	readonly choices?: Type extends unknown[] ? Type : Type[];

	/**
	Default value when the flag is not specified.

	@example
	```
	unicorn: {
		type: 'boolean',
		default: true
	}
	```
	*/
	readonly default?: Type;

	/**
	A short flag alias.

	@example
	```
	unicorn: {
		shortFlag: 'u'
	}
	```
	*/
	readonly shortFlag?: string;

	/**
	Other names for the flag.

	@example
	```
	unicorn: {
		aliases: ['unicorns', 'uni']
	}
	```
	*/
	readonly aliases?: string[];

	/**
	Indicates a flag can be set multiple times. Values are turned into an array.

	Multiple values are provided by specifying the flag multiple times, for example, `$ foo -u rainbow -u cat`. Space- or comma-separated values [currently *not* supported](https://github.com/sindresorhus/meow/issues/164).

	@default false
	*/
	readonly isMultiple?: IsMultiple;

	/**
	Determine if the flag is required.

	If it's only known at runtime whether the flag is required or not you can pass a Function instead of a boolean, which based on the given flags and other non-flag arguments should decide if the flag is required.

	- The first argument is the **flags** object, which contains the flags converted to camel-case excluding aliases.
	- The second argument is the **input** string array, which contains the non-flag arguments.
	- The function should return a `boolean`, true if the flag is required, otherwise false.

	@default false

	@example
	```
	isRequired: (flags, input) => {
		if (flags.otherFlag) {
			return true;
		}

		return false;
	}
	```
	*/
	readonly isRequired?: boolean | IsRequiredPredicate;
};

type StringFlag = Flag<'string', string> | Flag<'string', string[], true>;
type BooleanFlag = Flag<'boolean', boolean> | Flag<'boolean', boolean[], true>;
type NumberFlag = Flag<'number', number> | Flag<'number', number[], true>;
type AnyFlag = StringFlag | BooleanFlag | NumberFlag;
type AnyFlags = Record<string, AnyFlag>;

type Options<Flags extends AnyFlags> = {
	/**
	Pass in [`import.meta`](https://nodejs.org/dist/latest/docs/api/esm.html#esm_import_meta). This is used to find the correct package.json file.
	*/
	readonly importMeta: ImportMeta;

	/**
	Define argument flags.

	The key is the flag name in camel-case and the value is an object with any of:

	- `type`: Type of value. (Possible values: `string` `boolean` `number`)
	- `choices`: Limit valid values to a predefined set of choices.
	- `default`: Default value when the flag is not specified.
	- `shortFlag`: A short flag alias.
	- `aliases`: Other names for the flag.
	- `isMultiple`: Indicates a flag can be set multiple times. Values are turned into an array. (Default: false)
		- Multiple values are provided by specifying the flag multiple times, for example, `$ foo -u rainbow -u cat`. Space- or comma-separated values [currently *not* supported](https://github.com/sindresorhus/meow/issues/164).
	- `isRequired`: Determine if the flag is required. (Default: false)
		- If it's only known at runtime whether the flag is required or not, you can pass a `Function` instead of a `boolean`, which based on the given flags and other non-flag arguments, should decide if the flag is required. Two arguments are passed to the function:
		- The first argument is the **flags** object, which contains the flags converted to camel-case excluding aliases.
		- The second argument is the **input** string array, which contains the non-flag arguments.
		- The function should return a `boolean`, true if the flag is required, otherwise false.

	Note that flags are always defined using a camel-case key (`myKey`), but will match arguments in kebab-case (`--my-key`).

	@example
	```
	flags: {
		unicorn: {
			type: 'string',
			choices: ['rainbow', 'cat', 'unicorn'],
			default: ['rainbow', 'cat'],
			shortFlag: 'u',
			aliases: ['unicorns']
			isMultiple: true,
			isRequired: (flags, input) => {
				if (flags.otherFlag) {
					return true;
				}

				return false;
			}
		}
	}
	```
	*/
	readonly flags?: Flags;

	/**
	Description to show above the help text. Default: The package.json `"description"` property.

	Set it to `false` to disable it altogether.
	*/
	readonly description?: string | false;

	/**
	The help text you want shown.

	The input is reindented and starting/ending newlines are trimmed which means you can use a [template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings) without having to care about using the correct amount of indent.

	The description will be shown above your help text automatically.

	Set it to `false` to disable it altogether.
	*/
	readonly help?: string | false;

	/**
	Set a custom version output. Default: The package.json `"version"` property.

	Set it to `false` to disable it altogether.
	*/
	readonly version?: string | false;

	/**
	Automatically show the help text when the `--help` flag is present. Useful to set this value to `false` when a CLI manages child CLIs with their own help text.

	This option is only considered when there is only one argument in `process.argv`.
	*/
	readonly autoHelp?: boolean;

	/**
	Automatically show the version text when the `--version` flag is present. Useful to set this value to `false` when a CLI manages child CLIs with their own version text.

	This option is only considered when there is only one argument in `process.argv`.
	*/
	readonly autoVersion?: boolean;

	/**
	`package.json` as an `Object`. Default: Closest `package.json` upwards.

	Note: Setting this stops `meow` from finding a package.json.

	_You most likely don't need this option._
	*/
	readonly pkg?: Record<string, unknown>;

	/**
	Custom arguments object.

	@default process.argv.slice(2)
	*/
	readonly argv?: readonly string[];

	/**
	Infer the argument type.

	By default, the argument `5` in `$ foo 5` becomes a string. Enabling this would infer it as a number.

	@default false
	*/
	readonly inferType?: boolean;

	/**
	Value of `boolean` flags not defined in `argv`.

	If set to `undefined`, the flags not defined in `argv` will be excluded from the result. The `default` value set in `boolean` flags take precedence over `booleanDefault`.

	_Note: If used in conjunction with `isMultiple`, the default flag value is set to `[]`._

	__Caution: Explicitly specifying `undefined` for `booleanDefault` has different meaning from omitting key itself.__

	@example
	```
	import meow from 'meow';

	const cli = meow(`
		Usage
			$ foo

		Options
			--rainbow, -r  Include a rainbow
			--unicorn, -u  Include a unicorn
			--no-sparkles  Exclude sparkles

		Examples
			$ foo
			🌈 unicorns✨🌈
	`, {
		importMeta: import.meta,
		booleanDefault: undefined,
		flags: {
			rainbow: {
				type: 'boolean',
				default: true,
				shortFlag: 'r'
			},
				unicorn: {
				type: 'boolean',
				default: false,
				shortFlag: 'u'
			},
			cake: {
				type: 'boolean',
				shortFlag: 'c'
			},
			sparkles: {
				type: 'boolean',
				default: true
			}
		}
	});

	//{
	//	flags: {
	//		rainbow: true,
	//		unicorn: false,
	//		sparkles: true
	//	},
	//	unnormalizedFlags: {
	//		rainbow: true,
	//		r: true,
	//		unicorn: false,
	//		u: false,
	//		sparkles: true
	//	},
	//	…
	//}
	```
	*/
	// eslint-disable-next-line @typescript-eslint/ban-types
	readonly booleanDefault?: boolean | null | undefined;

	// TODO: Remove this in meow 14.
	/**
	Whether to use [hard-rejection](https://github.com/sindresorhus/hard-rejection) or not. Disabling this can be useful if you need to handle `process.on('unhandledRejection')` yourself.

	@deprecated This is the default behavior since Node.js 16, so this option is moot.
	@default true
	*/
	readonly hardRejection?: boolean;

	/**
	Whether to allow unknown flags or not.

	@default true
	*/
	readonly allowUnknownFlags?: boolean;

	/**
	The number of spaces to use for indenting the help text.

	@default 2
	*/
	readonly helpIndent?: number;
};

type TypedFlag<Flag extends AnyFlag> =
		Flag extends {type: 'number'}
			? number
			: Flag extends {type: 'string'}
				? string
				: Flag extends {type: 'boolean'}
					? boolean
					: unknown;

type PossiblyOptionalFlag<Flag extends AnyFlag, FlagType> =
		Flag extends {isRequired: true}
			? FlagType
			: Flag extends {default: any}
				? FlagType
				: FlagType | undefined;

type TypedFlags<Flags extends AnyFlags> = {
	[F in keyof Flags]: Flags[F] extends {isMultiple: true}
		? PossiblyOptionalFlag<Flags[F], Array<TypedFlag<Flags[F]>>>
		: PossiblyOptionalFlag<Flags[F], TypedFlag<Flags[F]>>
};

type Result<Flags extends AnyFlags> = {
	/**
	Non-flag arguments.
	*/
	input: string[];

	/**
	Flags converted to camelCase excluding aliases.
	*/
	flags: CamelCasedProperties<TypedFlags<Flags>> & Record<string, unknown>;

	/**
	Flags converted camelCase including aliases.
	*/
	unnormalizedFlags: TypedFlags<Flags> & Record<string, unknown>;

	/**
	The `package.json` object.
	*/
	pkg: PackageJson;

	/**
	The help text used with `--help`.
	*/
	help: string;

	/**
	Show the help text and exit with code.

	@param exitCode - The exit code to use. Default: `2`.
	*/
	showHelp: (exitCode?: number) => never;

	/**
	Show the version text and exit.
	*/
	showVersion: () => void;
};
/**
@param helpMessage - Shortcut for the `help` option.

@example
```
#!/usr/bin/env node
import meow from 'meow';
import foo from './index.js';

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`, {
	importMeta: import.meta,
	flags: {
		rainbow: {
			type: 'boolean',
			shortFlag: 'r'
		}
	}
});

//{
//	input: ['unicorns'],
//	flags: {rainbow: true},
//	...
//}

foo(cli.input.at(0), cli.flags);
```
*/
declare function meow<Flags extends AnyFlags>(helpMessage: string, options?: Options<Flags>): Result<Flags>;
declare function meow<Flags extends AnyFlags>(options?: Options<Flags>): Result<Flags>;

export { type Flag, type FlagType, type IsRequiredPredicate, type Options, type Result, type TypedFlags, meow as default };
