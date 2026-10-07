import { resolveModulePath } from 'exsolve';
import { S as SUPPORTED_EXTENSIONS } from './shared/c12.BXpNC6YI.mjs';
import { join, normalize } from 'pathe';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { dirname, extname } from 'node:path';
import 'node:fs';
import 'node:url';
import 'node:os';
import 'jiti';
import 'rc9';
import 'defu';
import 'pkg-types';
import 'dotenv';

const UPDATABLE_EXTS = [".js", ".ts", ".mjs", ".cjs", ".mts", ".cts"];
async function updateConfig(opts) {
  const { parseModule } = await import('magicast');
  let configFile = tryResolve(`./${opts.configFile}`, opts.cwd, SUPPORTED_EXTENSIONS) || tryResolve(
    `./.config/${opts.configFile}`,
    opts.cwd,
    SUPPORTED_EXTENSIONS
  ) || tryResolve(
    `./.config/${opts.configFile.split(".")[0]}`,
    opts.cwd,
    SUPPORTED_EXTENSIONS
  );
  let created = false;
  if (!configFile) {
    configFile = join(
      opts.cwd,
      opts.configFile + (opts.createExtension || ".ts")
    );
    const createResult = await opts.onCreate?.({ configFile }) ?? true;
    if (!createResult) {
      throw new Error("Config file creation aborted.");
    }
    const content = typeof createResult === "string" ? createResult : `export default {}
`;
    await mkdir(dirname(configFile), { recursive: true });
    await writeFile(configFile, content, "utf8");
    created = true;
  }
  const ext = extname(configFile);
  if (!UPDATABLE_EXTS.includes(ext)) {
    throw new Error(
      `Unsupported config file extension: ${ext} (${configFile}) (supported: ${UPDATABLE_EXTS.join(", ")})`
    );
  }
  const contents = await readFile(configFile, "utf8");
  const _module = parseModule(contents, opts.magicast);
  const defaultExport = _module.exports.default;
  if (!defaultExport) {
    throw new Error("Default export is missing in the config file!");
  }
  const configObj = defaultExport.$type === "function-call" ? defaultExport.$args[0] : defaultExport;
  await opts.onUpdate?.(configObj);
  await writeFile(configFile, _module.generate().code);
  return {
    configFile,
    created
  };
}
function tryResolve(path, cwd, extensions) {
  const res = resolveModulePath(path, {
    try: true,
    from: join(cwd, "/"),
    extensions,
    suffixes: ["", "/index"],
    cache: false
  });
  return res ? normalize(res) : void 0;
}

export { updateConfig };
