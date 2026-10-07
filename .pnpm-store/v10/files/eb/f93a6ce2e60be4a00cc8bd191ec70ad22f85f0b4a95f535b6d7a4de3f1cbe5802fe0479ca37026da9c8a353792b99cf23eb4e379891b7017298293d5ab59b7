import { InputOptions, OutputOptions } from "rolldown";

//#region src/options.d.ts
interface Options {
  /**
  * The path to the file to be imported. Supports filesystem paths, file URLs or URL objects.
  * @default 'index.ts'
  */
  path?: string | URL;
  /**
  * Debug mode.
  * Wether or not to keep temporary files to help with debugging.
  * Temporary files are stored in `node_modules/.unrun/` if possible,
  * otherwise in the OS temporary directory.
  * @default false
  */
  debug?: boolean;
  /**
  * The preset to use for bundling and output format.
  * @default 'none'
  */
  preset?: "none" | "jiti" | "bundle-require";
  /**
  * Additional rolldown input options. These options will be merged with the
  * defaults provided by unrun, with these options always taking precedence.
  */
  inputOptions?: InputOptions;
  /**
  * Additional rolldown output options. These options will be merged with the
  * defaults provided by unrun, with these options always taking precedence.
  */
  outputOptions?: OutputOptions;
}
//#endregion
//#region src/types.d.ts
interface Result<T = unknown> {
  /**
  * The module that was loaded.
  * You can specify the type of the module by providing a type argument when using the `unrun` function.
  */
  module: T;
  /**
  * The dependencies involved when loading the targeted module.
  * Note: this only includes local file dependencies, npm-resolved dependencies are excluded.
  */
  dependencies: string[];
}
interface CliResult {
  /**
  * The exit code of the CLI execution.
  */
  exitCode: number;
}
//#endregion
//#region src/index.d.ts
/**
* Loads a module with JIT transpilation based on the provided options.
*
* @param options - The options for loading the module.
* @returns A promise that resolves to the loaded module.
*/
declare function unrun<T>(options: Options): Promise<Result<T>>;
/**
* Loads a module with JIT transpilation based on the provided options.
* This function runs synchronously using a worker thread.
*
* @param options - The options for loading the module.
* @returns The loaded module.
*/
declare function unrunSync<T>(options: Options): Result<T>;
/**
* Runs a given module with JIT transpilation based on the provided options.
* This function does not return the module, as it simply executes it.
* Corresponds to the CLI behavior.
*
* @param options - The options for running the module.
* @param args - Additional command-line arguments to pass to the module.
*/
declare function unrunCli(options: Options, args?: string[]): Promise<CliResult>;
//#endregion
export { type CliResult, type Options, type Result, unrun, unrunCli, unrunSync };