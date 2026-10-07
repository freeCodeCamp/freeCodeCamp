import { InternalModuleFormat } from "rolldown";

//#region src/utils/types.d.ts
type Overwrite<T, U> = Omit<T, keyof U> & U;
type Awaitable<T> = T | Promise<T>;
type MarkPartial<T, K extends keyof T> = Omit<Required<T>, K> & Partial<Pick<T, K>>;
type Arrayable<T> = T | T[];
//#endregion
//#region src/utils/logger.d.ts
type LogType = "error" | "warn" | "info";
type LogLevel = LogType | "silent";
interface LoggerOptions {
  allowClearScreen?: boolean;
  customLogger?: Logger;
  console?: Console;
  failOnWarn?: boolean;
}
interface Logger {
  level: LogLevel;
  options?: LoggerOptions;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  warnOnce: (...args: any[]) => void;
  error: (...args: any[]) => void;
  success: (...args: any[]) => void;
  clearScreen: (type: LogType) => void;
}
declare const globalLogger: Logger;
//#endregion
//#region node_modules/.pnpm/pkg-types@2.3.0/node_modules/pkg-types/dist/index.d.mts
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
type PackageJsonScripts = { [P in PackageJsonScriptName]?: string };
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
type PackageJsonExportsObject = { [P in PackageJsonExportKey]?: string | PackageJsonExportsObject | Array<string | PackageJsonExportsObject> };
type PackageJsonExports = string | PackageJsonExportsObject | Array<string | PackageJsonExportsObject>;
/**
 * Defines a PackageJson structure.
 * @param pkg - The `package.json` content as an object. See {@link PackageJson}.
 * @returns the same `package.json` object.
 */
//#endregion
export { Arrayable as a, Overwrite as c, globalLogger as i, LogLevel as n, Awaitable as o, Logger as r, MarkPartial as s, PackageJson as t };