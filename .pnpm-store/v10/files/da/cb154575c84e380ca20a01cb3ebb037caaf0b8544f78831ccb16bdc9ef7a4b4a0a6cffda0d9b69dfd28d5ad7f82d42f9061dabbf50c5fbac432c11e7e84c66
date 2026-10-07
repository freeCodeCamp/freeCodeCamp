import { l as loadConfig, S as SUPPORTED_EXTENSIONS } from './shared/c12.BXpNC6YI.mjs';
export { a as loadDotenv, s as setupDotenv } from './shared/c12.BXpNC6YI.mjs';
import { debounce } from 'perfect-debounce';
import { resolve } from 'pathe';
import 'node:fs';
import 'node:fs/promises';
import 'node:url';
import 'node:os';
import 'exsolve';
import 'jiti';
import 'rc9';
import 'defu';
import 'pkg-types';
import 'dotenv';

function createDefineConfig() {
  return (input) => input;
}

const eventMap = {
  add: "created",
  change: "updated",
  unlink: "removed"
};
async function watchConfig(options) {
  let config = await loadConfig(options);
  const configName = options.name || "config";
  const configFileName = options.configFile ?? (options.name === "config" ? "config" : `${options.name}.config`);
  const watchingFiles = [
    ...new Set(
      (config.layers || []).filter((l) => l.cwd).flatMap((l) => [
        ...SUPPORTED_EXTENSIONS.flatMap((ext) => [
          resolve(l.cwd, configFileName + ext),
          resolve(l.cwd, ".config", configFileName + ext),
          resolve(
            l.cwd,
            ".config",
            configFileName.replace(/\.config$/, "") + ext
          )
        ]),
        l.source && resolve(l.cwd, l.source),
        // TODO: Support watching rc from home and workspace
        options.rcFile && resolve(
          l.cwd,
          typeof options.rcFile === "string" ? options.rcFile : `.${configName}rc`
        ),
        options.packageJson && resolve(l.cwd, "package.json")
      ]).filter(Boolean)
    )
  ];
  const watch = await import('chokidar').then((r) => r.watch || r.default || r);
  const { diff } = await import('ohash/utils');
  const _fswatcher = watch(watchingFiles, {
    ignoreInitial: true,
    ...options.chokidarOptions
  });
  const onChange = async (event, path) => {
    const type = eventMap[event];
    if (!type) {
      return;
    }
    if (options.onWatch) {
      await options.onWatch({
        type,
        path
      });
    }
    const oldConfig = config;
    try {
      config = await loadConfig(options);
    } catch (error) {
      console.warn(`Failed to load config ${path}
${error}`);
      return;
    }
    const changeCtx = {
      newConfig: config,
      oldConfig,
      getDiff: () => diff(oldConfig.config, config.config)
    };
    if (options.acceptHMR) {
      const changeHandled = await options.acceptHMR(changeCtx);
      if (changeHandled) {
        return;
      }
    }
    if (options.onUpdate) {
      await options.onUpdate(changeCtx);
    }
  };
  if (options.debounce === false) {
    _fswatcher.on("all", onChange);
  } else {
    _fswatcher.on("all", debounce(onChange, options.debounce ?? 100));
  }
  const utils = {
    watchingFiles,
    unwatch: async () => {
      await _fswatcher.close();
    }
  };
  return new Proxy(utils, {
    get(_, prop) {
      if (prop in utils) {
        return utils[prop];
      }
      return config[prop];
    }
  });
}

export { SUPPORTED_EXTENSIONS, createDefineConfig, loadConfig, watchConfig };
