import { createMatchPath } from "./match-path-sync";
import { configLoader, ExplicitParams } from "./config-loader";
import { options } from "./options";

const noOp = (): void => void 0;

function getCoreModules(
  builtinModules: string[] | undefined
): { [key: string]: boolean } {
  builtinModules = builtinModules || [
    "assert",
    "buffer",
    "child_process",
    "cluster",
    "crypto",
    "dgram",
    "dns",
    "domain",
    "events",
    "fs",
    "http",
    "https",
    "net",
    "os",
    "path",
    "punycode",
    "querystring",
    "readline",
    "stream",
    "string_decoder",
    "tls",
    "tty",
    "url",
    "util",
    "v8",
    "vm",
    "zlib",
  ];

  const coreModules: { [key: string]: boolean } = {};
  for (let module of builtinModules) {
    coreModules[module] = true;
  }

  return coreModules;
}

/**
 * Installs a custom module load function that can adhere to paths in tsconfig.
 * Returns a function to undo paths registration.
 */
export function register(explicitParams: ExplicitParams): () => void {
  const configLoaderResult = configLoader({
    cwd: options.cwd,
    explicitParams,
  });

  if (configLoaderResult.resultType === "failed") {
    console.warn(
      `${configLoaderResult.message}. tsconfig-paths will be skipped`
    );

    return noOp;
  }

  const matchPath = createMatchPath(
    configLoaderResult.absoluteBaseUrl,
    configLoaderResult.paths,
    configLoaderResult.mainFields,
    configLoaderResult.addMatchAll
  );

  // Patch node's module loading
  // tslint:disable-next-line:no-require-imports variable-name
  const Module = require("module");
  const originalResolveFilename = Module._resolveFilename;
  const coreModules = getCoreModules(Module.builtinModules);
  // tslint:disable-next-line:no-any
  Module._resolveFilename = function (request: string, _parent: any): string {
    const isCoreModule = coreModules.hasOwnProperty(request);
    if (!isCoreModule) {
      const found = matchPath(request);
      if (found) {
        const modifiedArguments = [found, ...[].slice.call(arguments, 1)]; // Passes all arguments. Even those that is not specified above.
        // tslint:disable-next-line:no-invalid-this
        return originalResolveFilename.apply(this, modifiedArguments);
      }
    }
    // tslint:disable-next-line:no-invalid-this
    return originalResolveFilename.apply(this, arguments);
  };

  return () => {
    // Return node's module loading to original state.
    Module._resolveFilename = originalResolveFilename;
  };
}
