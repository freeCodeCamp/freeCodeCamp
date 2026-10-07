import { ResolveOptions as ResolveOptions$1 } from 'exsolve';
import { CompilerOptions, TypeAcquisition } from 'typescript';

/**
 * Represents the options for resolving paths with additional file finding capabilities.
 */
type ResolveOptions = Omit<FindFileOptions, "startingFrom"> & ResolveOptions$1 & {
    /** @deprecated: use `from` */
    url?: string;
    /** @deprecated: use `from` */
    parent?: string;
};
/**
 * Options for reading files with optional caching.
 */
type ReadOptions = {
    /**
     * Specifies whether the read results should be cached.
     * Can be a boolean or a map to hold the cached data.
     */
    cache?: boolean | Map<string, Record<string, any>>;
};
interface FindFileOptions {
    /**
     * The starting directory for the search.
     * @default . (same as `process.cwd()`)
     */
    startingFrom?: string;
    /**
     * A pattern to match a path segment above which you don't want to ascend
     * @default /^node_modules$/
     */
    rootPattern?: RegExp;
    /**
     * If true, search starts from root level descending into subdirectories
     */
    reverse?: boolean;
    /**
     * A matcher that can evaluate whether the given path is a valid file (for example,
     * by testing whether the file path exists.
     *
     * @default fs.statSync(path).isFile()
     */
    test?: (filePath: string) => boolean | undefined | Promise<boolean | undefined>;
}

/**
 * Asynchronously finds a file by name, starting from the specified directory and traversing up (or down if reverse).
 * @param filename - The name of the file to find.
 * @param _options - Options to customise the search behaviour.
 * @returns a promise that resolves to the path of the file found.
 * @throws Will throw an error if the file cannot be found.
 */
declare function findFile(filename: string | string[], _options?: FindFileOptions): Promise<string>;
/**
 * Asynchronously finds the next file with the given name, starting in the given directory and moving up.
 * Alias for findFile without reversing the search.
 * @param filename - The name of the file to find.
 * @param options - Options to customise the search behaviour.
 * @returns A promise that resolves to the path of the next file found.
 */
declare function findNearestFile(filename: string | string[], options?: FindFileOptions): Promise<string>;
/**
 * Asynchronously finds the furthest file with the given name, starting from the root directory and moving downwards.
 * This is essentially the reverse of `findNearestFile'.
 * @param filename - The name of the file to find.
 * @param options - Options to customise the search behaviour, with reverse set to true.
 * @returns A promise that resolves to the path of the farthest file found.
 */
declare function findFarthestFile(filename: string | string[], options?: FindFileOptions): Promise<string>;

type StripEnums<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends boolean ? T[K] : T[K] extends string ? T[K] : T[K] extends object ? T[K] : T[K] extends Array<any> ? T[K] : T[K] extends undefined ? undefined : any;
};
interface TSConfig {
    compilerOptions?: StripEnums<CompilerOptions>;
    exclude?: string[];
    compileOnSave?: boolean;
    extends?: string | string[];
    files?: string[];
    include?: string[];
    typeAcquisition?: TypeAcquisition;
    references?: {
        path: string;
    }[];
}

/**
 * Defines a TSConfig structure.
 * @param tsconfig - The contents of `tsconfig.json` as an object. See {@link TSConfig}.
 * @returns the same `tsconfig.json` object.
 */
declare function defineTSConfig(tsconfig: TSConfig): TSConfig;
/**
 * Asynchronously reads a `tsconfig.json` file.
 * @param id - The path to the `tsconfig.json` file, defaults to the current working directory.
 * @param options - The options for resolving and reading the file. See {@link ResolveOptions}.
 * @returns a promise resolving to the parsed `tsconfig.json` object.
 */
declare function readTSConfig(id?: string, options?: ResolveOptions & ReadOptions): Promise<TSConfig>;
/**
 * Asynchronously writes data to a `tsconfig.json` file.
 * @param path - The path to the file where the `tsconfig.json` is written.
 * @param tsconfig - The `tsconfig.json` object to write. See {@link TSConfig}.
 */
declare function writeTSConfig(path: string, tsconfig: TSConfig): Promise<void>;
/**
 * Resolves the path to the nearest `tsconfig.json` file from a given directory.
 * @param id - The base path for the search, defaults to the current working directory.
 * @param options - Options to modify the search behaviour. See {@link ResolveOptions}.
 * @returns A promise resolving to the path of the nearest `tsconfig.json` file.
 */
declare function resolveTSConfig(id?: string, options?: ResolveOptions): Promise<string>;

interface PackageJson {
    /**
     * The name is what your thing is called.
     * Some rules:
     * - The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
     * - The name can’t start with a dot or an underscore.
     * - New packages must not have uppercase letters in the name.
     * - The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can’t contain any non-URL-safe characters.
     */
    name?: string;
    /**
     * Version must be parseable by `node-semver`, which is bundled with npm as a dependency. (`npm install semver` to use it yourself.)
     */
    version?: string;
    /**
     * Put a description in it. It’s a string. This helps people discover your package, as it’s listed in `npm search`.
     */
    description?: string;
    /**
     * Put keywords in it. It’s an array of strings. This helps people discover your package as it’s listed in `npm search`.
     */
    keywords?: string[];
    /**
     * The url to the project homepage.
     */
    homepage?: string;
    /**
     * The url to your project’s issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.
     */
    bugs?: string | {
        url?: string;
        email?: string;
    };
    /**
     * You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you’re placing on it.
     */
    license?: string;
    /**
     * Specify the place where your code lives. This is helpful for people who want to contribute. If the git repo is on GitHub, then the `npm docs` command will be able to find you.
     * For GitHub, GitHub gist, Bitbucket, or GitLab repositories you can use the same shortcut syntax you use for npm install:
     */
    repository?: string | {
        type: string;
        url: string;
        /**
         * If the `package.json` for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives:
         */
        directory?: string;
    };
    /**
     * The `scripts` field is a dictionary containing script commands that are run at various times in the lifecycle of your package.
     */
    scripts?: PackageJsonScripts;
    /**
     * If you set `"private": true` in your package.json, then npm will refuse to publish it.
     */
    private?: boolean;
    /**
     * The “author” is one person.
     */
    author?: PackageJsonPerson;
    /**
     * “contributors” is an array of people.
     */
    contributors?: PackageJsonPerson[];
    /**
     * An object containing a URL that provides up-to-date information
     * about ways to help fund development of your package,
     * a string URL, or an array of objects and string URLs
     */
    funding?: PackageJsonFunding | PackageJsonFunding[];
    /**
     * The optional `files` field is an array of file patterns that describes the entries to be included when your package is installed as a dependency. File patterns follow a similar syntax to `.gitignore`, but reversed: including a file, directory, or glob pattern (`*`, `**\/*`, and such) will make it so that file is included in the tarball when it’s packed. Omitting the field will make it default to `["*"]`, which means it will include all files.
     */
    files?: string[];
    /**
     * The main field is a module ID that is the primary entry point to your program. That is, if your package is named `foo`, and a user installs it, and then does `require("foo")`, then your main module’s exports object will be returned.
     * This should be a module ID relative to the root of your package folder.
     * For most modules, it makes the most sense to have a main script and often not much else.
     */
    main?: string;
    /**
     * If your module is meant to be used client-side the browser field should be used instead of the main field. This is helpful to hint users that it might rely on primitives that aren’t available in Node.js modules. (e.g. window)
     */
    browser?: string | Record<string, string | false>;
    /**
     * The `unpkg` field is used to specify the URL to a UMD module for your package. This is used by default in the unpkg.com CDN service.
     */
    unpkg?: string;
    /**
     * A map of command name to local file name. On install, npm will symlink that file into `prefix/bin` for global installs, or `./node_modules/.bin/` for local installs.
     */
    bin?: string | Record<string, string>;
    /**
     * Specify either a single file or an array of filenames to put in place for the `man` program to find.
     */
    man?: string | string[];
    /**
     * Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.
     */
    dependencies?: Record<string, string>;
    /**
     * If someone is planning on downloading and using your module in their program, then they probably don’t want or need to download and build the external test or documentation framework that you use.
     * In this case, it’s best to map these additional items in a `devDependencies` object.
     */
    devDependencies?: Record<string, string>;
    /**
     * If a dependency can be used, but you would like npm to proceed if it cannot be found or fails to install, then you may put it in the `optionalDependencies` object. This is a map of package name to version or url, just like the `dependencies` object. The difference is that build failures do not cause installation to fail.
     */
    optionalDependencies?: Record<string, string>;
    /**
     * In some cases, you want to express the compatibility of your package with a host tool or library, while not necessarily doing a `require` of this host. This is usually referred to as a plugin. Notably, your module may be exposing a specific interface, expected and specified by the host documentation.
     */
    peerDependencies?: Record<string, string>;
    /**
     * TypeScript typings, typically ending by `.d.ts`.
     */
    types?: string;
    /**
     * This field is synonymous with `types`.
     */
    typings?: string;
    /**
     * Non-Standard Node.js alternate entry-point to main.
     * An initial implementation for supporting CJS packages (from main), and use module for ESM modules.
     */
    module?: string;
    /**
     * Make main entry-point be loaded as an ESM module, support "export" syntax instead of "require"
     *
     * Docs:
     * - https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_package_json_type_field
     *
     * @default 'commonjs'
     * @since Node.js v14
     */
    type?: "module" | "commonjs";
    /**
     * Alternate and extensible alternative to "main" entry point.
     *
     * When using `{type: "module"}`, any ESM module file MUST end with `.mjs` extension.
     *
     * Docs:
     * - https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_exports_sugar
     *
     * @since Node.js v12.7
     */
    exports?: PackageJsonExports;
    /**
     *  Docs:
     *  - https://nodejs.org/api/packages.html#imports
     */
    imports?: Record<string, string | Record<string, string>>;
    /**
     * The field is used to define a set of sub-packages (or workspaces) within a monorepo.
     *
     * This field is an array of glob patterns or an object with specific configurations for managing
     * multiple packages in a single repository.
     */
    workspaces?: string[] | {
        /**
         * Workspace package paths. Glob patterns are supported.
         */
        packages?: string[];
        /**
         * Packages to block from hoisting to the workspace root.
         * Uses glob patterns to match module paths in the dependency tree.
         *
         * Docs:
         * - https://classic.yarnpkg.com/blog/2018/02/15/nohoist/
         */
        nohoist?: string[];
    };
    /**
     * The field is used to specify different TypeScript declaration files for
     * different versions of TypeScript, allowing for version-specific type definitions.
     */
    typesVersions?: Record<string, Record<string, string[]>>;
    /**
     * You can specify which operating systems your module will run on:
     * ```json
     * {
     *   "os": ["darwin", "linux"]
     * }
     * ```
     * You can also block instead of allowing operating systems, just prepend the blocked os with a '!':
     * ```json
     * {
     *   "os": ["!win32"]
     * }
     * ```
     * The host operating system is determined by `process.platform`
     * It is allowed to both block and allow an item, although there isn't any good reason to do this.
     */
    os?: string[];
    /**
     * If your code only runs on certain cpu architectures, you can specify which ones.
     * ```json
     * {
     *   "cpu": ["x64", "ia32"]
     * }
     * ```
     * Like the `os` option, you can also block architectures:
     * ```json
     * {
     *   "cpu": ["!arm", "!mips"]
     * }
     * ```
     * The host architecture is determined by `process.arch`
     */
    cpu?: string[];
    /**
     * This is a set of config values that will be used at publish-time.
     */
    publishConfig?: {
        /**
         * The registry that will be used if the package is published.
         */
        registry?: string;
        /**
         * The tag that will be used if the package is published.
         */
        tag?: string;
        /**
         * The access level that will be used if the package is published.
         */
        access?: "public" | "restricted";
        /**
         * **pnpm-only**
         *
         * By default, for portability reasons, no files except those listed in
         * the bin field will be marked as executable in the resulting package
         * archive. The executableFiles field lets you declare additional fields
         * that must have the executable flag (+x) set even if
         * they aren't directly accessible through the bin field.
         */
        executableFiles?: string[];
        /**
         * **pnpm-only**
         *
         * You also can use the field `publishConfig.directory` to customize
         * the published subdirectory relative to the current `package.json`.
         *
         * It is expected to have a modified version of the current package in
         * the specified directory (usually using third party build tools).
         */
        directory?: string;
        /**
         * **pnpm-only**
         *
         * When set to `true`, the project will be symlinked from the
         * `publishConfig.directory` location during local development.
         * @default true
         */
        linkDirectory?: boolean;
    } & Pick<PackageJson, "bin" | "main" | "exports" | "types" | "typings" | "module" | "browser" | "unpkg" | "typesVersions" | "os" | "cpu">;
    /**
     * See: https://nodejs.org/api/packages.html#packagemanager
     * This field defines which package manager is expected to be used when working on the current project.
     * Should be of the format: `<name>@<version>[#hash]`
     */
    packageManager?: string;
    [key: string]: any;
}
/**
 * See: https://docs.npmjs.com/cli/v11/using-npm/scripts#pre--post-scripts
 */
type PackageJsonScriptWithPreAndPost<S extends string> = S | `${"pre" | "post"}${S}`;
/**
 * See: https://docs.npmjs.com/cli/v11/using-npm/scripts#life-cycle-operation-order
 */
type PackageJsonNpmLifeCycleScripts = "dependencies" | "prepublishOnly" | PackageJsonScriptWithPreAndPost<"install" | "pack" | "prepare" | "publish" | "restart" | "start" | "stop" | "test" | "version">;
/**
 * See: https://pnpm.io/scripts#lifecycle-scripts
 */
type PackageJsonPnpmLifeCycleScripts = "pnpm:devPreinstall";
type PackageJsonCommonScripts = "build" | "coverage" | "deploy" | "dev" | "format" | "lint" | "preview" | "release" | "typecheck" | "watch";
type PackageJsonScriptName = PackageJsonCommonScripts | PackageJsonNpmLifeCycleScripts | PackageJsonPnpmLifeCycleScripts | (string & {});
type PackageJsonScripts = {
    [P in PackageJsonScriptName]?: string;
};
/**
 * A “person” is an object with a “name” field and optionally “url” and “email”. Or you can shorten that all into a single string, and npm will parse it for you.
 */
type PackageJsonPerson = string | {
    name: string;
    email?: string;
    url?: string;
};
type PackageJsonFunding = string | {
    url: string;
    type?: string;
};
type PackageJsonExportKey = "." | "import" | "require" | "types" | "node" | "browser" | "default" | (string & {});
type PackageJsonExportsObject = {
    [P in PackageJsonExportKey]?: string | PackageJsonExportsObject | Array<string | PackageJsonExportsObject>;
};
type PackageJsonExports = string | PackageJsonExportsObject | Array<string | PackageJsonExportsObject>;

/**
 * Defines a PackageJson structure.
 * @param pkg - The `package.json` content as an object. See {@link PackageJson}.
 * @returns the same `package.json` object.
 */
declare function definePackageJSON(pkg: PackageJson): PackageJson;
/**
 * Finds the nearest package file (package.json, package.json5, or package.yaml).
 * @param id - The base path for the search, defaults to the current working directory.
 * @param options - Options to modify the search behaviour. See {@link ResolveOptions}.
 * @returns A promise resolving to the path of the nearest package file.
 */
declare function findPackage(id?: string, options?: ResolveOptions): Promise<string>;
/**
 * Reads any package file format (package.json, package.json5, or package.yaml).
 * @param id - The path identifier for the package file, defaults to the current working directory.
 * @param options - The options for resolving and reading the file. See {@link ResolveOptions}.
 * @returns a promise resolving to the parsed `package.json` object.
 */
declare function readPackage(id?: string, options?: ResolveOptions & ReadOptions): Promise<PackageJson>;
/**
 * Writes data to a package file with format detection based on file extension.
 * @param path - The path to the file where the package data is written.
 * @param pkg - The package object to write. See {@link PackageJson}.
 */
declare function writePackage(path: string, pkg: PackageJson): Promise<void>;
/**
 * Asynchronously reads a `package.json` file.
 * @param id - The path identifier for the package.json, defaults to the current working directory.
 * @param options - The options for resolving and reading the file. See {@link ResolveOptions}.
 * @returns a promise resolving to the parsed `package.json` object.
 */
declare function readPackageJSON(id?: string, options?: ResolveOptions & ReadOptions): Promise<PackageJson>;
/**
 * Asynchronously writes data to a `package.json` file.
 * @param path - The path to the file where the `package.json` is written.
 * @param pkg - The `package.json` object to write. See {@link PackageJson}.
 */
declare function writePackageJSON(path: string, pkg: PackageJson): Promise<void>;
/**
 * Resolves the path to the nearest `package.json` file from a given directory.
 * @param id - The base path for the search, defaults to the current working directory.
 * @param options - Options to modify the search behaviour. See {@link ResolveOptions}.
 * @returns A promise resolving to the path of the nearest `package.json` file.
 */
declare function resolvePackageJSON(id?: string, options?: ResolveOptions): Promise<string>;
/**
 * Resolves the path to the nearest lockfile from a given directory.
 * @param id - The base path for the search, defaults to the current working directory.
 * @param options - Options to modify the search behaviour. See {@link ResolveOptions}.
 * @returns A promise resolving to the path of the nearest lockfile.
 */
declare function resolveLockfile(id?: string, options?: ResolveOptions): Promise<string>;
type WorkspaceTestName = "workspaceFile" | "gitConfig" | "lockFile" | "packageJson";
/**
 * Detects the workspace directory based on common project markers .
 * Throws an error if the workspace root cannot be detected.
 *
 * @param id - The base path to search, defaults to the current working directory.
 * @param options - Options to modify the search behaviour. See {@link ResolveOptions}.
 * @returns a promise resolving to the path of the detected workspace directory.
 */
declare function findWorkspaceDir(id?: string, options?: ResolveOptions & Partial<Record<WorkspaceTestName, boolean | "closest" | "furthest">> & {
    tests?: WorkspaceTestName[];
}): Promise<string>;
declare function updatePackage(id: string, callback: (pkg: PackageJson) => PackageJson | void | Promise<PackageJson | void>, options?: ResolveOptions & ReadOptions): Promise<void>;
declare function sortPackage(pkg: PackageJson): PackageJson;
declare function normalizePackage(pkg: PackageJson): PackageJson;

interface GitRemote {
    [key: string]: unknown;
    name?: string;
    url?: string;
    fetch?: string;
}
interface GitBranch {
    [key: string]: unknown;
    remote?: string;
    merge?: string;
    description?: string;
    rebase?: boolean;
}
interface GitCoreConfig {
    [key: string]: unknown;
}
interface GitConfigUser {
    [key: string]: unknown;
    name?: string;
    email?: string;
}
interface GitConfig {
    [key: string]: unknown;
    core?: GitCoreConfig;
    user?: GitConfigUser;
    remote?: Record<string, GitRemote>;
    branch?: Record<string, GitBranch>;
}

/**
 * Defines a git config object.
 */
declare function defineGitConfig(config: GitConfig): GitConfig;
/**
 * Finds closest `.git/config` file.
 */
declare function resolveGitConfig(dir: string, opts?: ResolveOptions): Promise<string>;
/**
 * Finds and reads closest `.git/config` file into a JS object.
 */
declare function readGitConfig(dir: string, opts?: ResolveOptions): Promise<GitConfig>;
/**
 * Stringifies git config object into INI text format and writes it to a file.
 */
declare function writeGitConfig(path: string, config: GitConfig): Promise<void>;
/**
 * Parses a git config file in INI text format into a JavaScript object.
 */
declare function parseGitConfig(ini: string): GitConfig;
/**
 * Stringifies a git config object into a git config file INI text format.
 */
declare function stringifyGitConfig(config: GitConfig): string;

export { defineGitConfig, definePackageJSON, defineTSConfig, findFarthestFile, findFile, findNearestFile, findPackage, findWorkspaceDir, normalizePackage, parseGitConfig, readGitConfig, readPackage, readPackageJSON, readTSConfig, resolveGitConfig, resolveLockfile, resolvePackageJSON, resolveTSConfig, sortPackage, stringifyGitConfig, updatePackage, writeGitConfig, writePackage, writePackageJSON, writeTSConfig };
export type { FindFileOptions, GitBranch, GitConfig, GitConfigUser, GitCoreConfig, GitRemote, PackageJson, PackageJsonExports, PackageJsonPerson, ReadOptions, ResolveOptions, TSConfig };
