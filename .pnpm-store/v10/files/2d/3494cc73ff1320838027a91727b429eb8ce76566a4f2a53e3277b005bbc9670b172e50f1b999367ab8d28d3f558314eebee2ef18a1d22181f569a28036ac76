import path from "path";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default function (
  moduleName: string,
  dirname: string,
  absoluteRuntime: string | boolean,
) {
  if (absoluteRuntime === false) return moduleName;

  return resolveAbsoluteRuntime(
    moduleName,
    path.resolve(dirname, absoluteRuntime === true ? "." : absoluteRuntime),
  );
}

function resolveAbsoluteRuntime(moduleName: string, dirname: string) {
  try {
    return path
      .dirname(
        require.resolve(`${moduleName}/package.json`, { paths: [dirname] }),
      )
      .replace(/\\/g, "/");
  } catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") throw err;

    throw Object.assign(
      new Error(`Failed to resolve "${moduleName}" relative to "${dirname}"`),
      {
        code: "BABEL_RUNTIME_NOT_FOUND",
        runtime: moduleName,
        dirname,
      },
    );
  }
}

export function resolveFSPath(path: string) {
  return require.resolve(path).replace(/\\/g, "/");
}
