import { statSync, promises, existsSync } from 'node:fs';
import { rm, readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { homedir } from 'node:os';
import { resolve, join, dirname, basename, extname, normalize } from 'pathe';
import { resolveModulePath } from 'exsolve';
import { createJiti } from 'jiti';
import * as rc9 from 'rc9';
import { defu } from 'defu';
import { findWorkspaceDir, readPackageJSON } from 'pkg-types';
import * as dotenv from 'dotenv';

async function setupDotenv(options) {
  const targetEnvironment = options.env ?? process.env;
  const environment = await loadDotenv({
    cwd: options.cwd,
    fileName: options.fileName ?? ".env",
    env: targetEnvironment,
    interpolate: options.interpolate ?? true
  });
  const dotenvVars = getDotEnvVars(targetEnvironment);
  for (const key in environment) {
    if (key.startsWith("_")) {
      continue;
    }
    if (targetEnvironment[key] === void 0 || dotenvVars.has(key)) {
      targetEnvironment[key] = environment[key];
    }
  }
  return environment;
}
async function loadDotenv(options) {
  const environment = /* @__PURE__ */ Object.create(null);
  const dotenvFile = resolve(options.cwd, options.fileName);
  const dotenvVars = getDotEnvVars(options.env || {});
  Object.assign(environment, options.env);
  if (statSync(dotenvFile, { throwIfNoEntry: false })?.isFile()) {
    const parsed = dotenv.parse(await promises.readFile(dotenvFile, "utf8"));
    for (const key in parsed) {
      if (key in environment && !dotenvVars.has(key)) {
        continue;
      }
      environment[key] = parsed[key];
      dotenvVars.add(key);
    }
  }
  if (options.interpolate) {
    interpolate(environment);
  }
  return environment;
}
function interpolate(target, source = {}, parse = (v) => v) {
  function getValue(key) {
    return source[key] === void 0 ? target[key] : source[key];
  }
  function interpolate2(value, parents = []) {
    if (typeof value !== "string") {
      return value;
    }
    const matches = value.match(/(.?\${?(?:[\w:]+)?}?)/g) || [];
    return parse(
      // eslint-disable-next-line unicorn/no-array-reduce
      matches.reduce((newValue, match) => {
        const parts = /(.?)\${?([\w:]+)?}?/g.exec(match) || [];
        const prefix = parts[1];
        let value2, replacePart;
        if (prefix === "\\") {
          replacePart = parts[0] || "";
          value2 = replacePart.replace(String.raw`\$`, "$");
        } else {
          const key = parts[2];
          replacePart = (parts[0] || "").slice(prefix.length);
          if (parents.includes(key)) {
            console.warn(
              `Please avoid recursive environment variables ( loop: ${parents.join(
                " > "
              )} > ${key} )`
            );
            return "";
          }
          value2 = getValue(key);
          value2 = interpolate2(value2, [...parents, key]);
        }
        return value2 === void 0 ? newValue : newValue.replace(replacePart, value2);
      }, value)
    );
  }
  for (const key in target) {
    target[key] = interpolate2(getValue(key));
  }
}
function getDotEnvVars(targetEnvironment) {
  const globalRegistry = globalThis.__c12_dotenv_vars__ ||= /* @__PURE__ */ new Map();
  if (!globalRegistry.has(targetEnvironment)) {
    globalRegistry.set(targetEnvironment, /* @__PURE__ */ new Set());
  }
  return globalRegistry.get(targetEnvironment);
}

const _normalize = (p) => p?.replace(/\\/g, "/");
const ASYNC_LOADERS = {
  ".yaml": () => import('confbox/yaml').then((r) => r.parseYAML),
  ".yml": () => import('confbox/yaml').then((r) => r.parseYAML),
  ".jsonc": () => import('confbox/jsonc').then((r) => r.parseJSONC),
  ".json5": () => import('confbox/json5').then((r) => r.parseJSON5),
  ".toml": () => import('confbox/toml').then((r) => r.parseTOML)
};
const SUPPORTED_EXTENSIONS = Object.freeze([
  // with jiti
  ".js",
  ".ts",
  ".mjs",
  ".cjs",
  ".mts",
  ".cts",
  ".json",
  // with confbox
  ".jsonc",
  ".json5",
  ".yaml",
  ".yml",
  ".toml"
]);
async function loadConfig(options) {
  options.cwd = resolve(process.cwd(), options.cwd || ".");
  options.name = options.name || "config";
  options.envName = options.envName ?? process.env.NODE_ENV;
  options.configFile = options.configFile ?? (options.name === "config" ? "config" : `${options.name}.config`);
  options.rcFile = options.rcFile ?? `.${options.name}rc`;
  if (options.extend !== false) {
    options.extend = {
      extendKey: "extends",
      ...options.extend
    };
  }
  const _merger = options.merger || defu;
  options.jiti = options.jiti || createJiti(join(options.cwd, options.configFile), {
    interopDefault: true,
    moduleCache: false,
    extensions: [...SUPPORTED_EXTENSIONS],
    ...options.jitiOptions
  });
  const r = {
    config: {},
    cwd: options.cwd,
    configFile: resolve(options.cwd, options.configFile),
    layers: []
  };
  const rawConfigs = {
    overrides: options.overrides,
    main: void 0,
    rc: void 0,
    packageJson: void 0,
    defaultConfig: options.defaultConfig
  };
  if (options.dotenv) {
    await setupDotenv({
      cwd: options.cwd,
      ...options.dotenv === true ? {} : options.dotenv
    });
  }
  const _mainConfig = await resolveConfig(".", options);
  if (_mainConfig.configFile) {
    rawConfigs.main = _mainConfig.config;
    r.configFile = _mainConfig.configFile;
  }
  if (_mainConfig.meta) {
    r.meta = _mainConfig.meta;
  }
  if (options.rcFile) {
    const rcSources = [];
    rcSources.push(rc9.read({ name: options.rcFile, dir: options.cwd }));
    if (options.globalRc) {
      const workspaceDir = await findWorkspaceDir(options.cwd).catch(() => {
      });
      if (workspaceDir) {
        rcSources.push(rc9.read({ name: options.rcFile, dir: workspaceDir }));
      }
      rcSources.push(rc9.readUser({ name: options.rcFile, dir: options.cwd }));
    }
    rawConfigs.rc = _merger({}, ...rcSources);
  }
  if (options.packageJson) {
    const keys = (Array.isArray(options.packageJson) ? options.packageJson : [
      typeof options.packageJson === "string" ? options.packageJson : options.name
    ]).filter((t) => t && typeof t === "string");
    const pkgJsonFile = await readPackageJSON(options.cwd).catch(() => {
    });
    const values = keys.map((key) => pkgJsonFile?.[key]);
    rawConfigs.packageJson = _merger({}, ...values);
  }
  const configs = {};
  for (const key in rawConfigs) {
    const value = rawConfigs[key];
    configs[key] = await (typeof value === "function" ? value({ configs, rawConfigs }) : value);
  }
  r.config = _merger(
    configs.overrides,
    configs.main,
    configs.rc,
    configs.packageJson,
    configs.defaultConfig
  );
  if (options.extend) {
    await extendConfig(r.config, options);
    r.layers = r.config._layers;
    delete r.config._layers;
    r.config = _merger(r.config, ...r.layers.map((e) => e.config));
  }
  const baseLayers = [
    configs.overrides && {
      config: configs.overrides,
      configFile: void 0,
      cwd: void 0
    },
    { config: configs.main, configFile: options.configFile, cwd: options.cwd },
    configs.rc && { config: configs.rc, configFile: options.rcFile },
    configs.packageJson && {
      config: configs.packageJson,
      configFile: "package.json"
    }
  ].filter((l) => l && l.config);
  r.layers = [...baseLayers, ...r.layers];
  if (options.defaults) {
    r.config = _merger(r.config, options.defaults);
  }
  if (options.omit$Keys) {
    for (const key in r.config) {
      if (key.startsWith("$")) {
        delete r.config[key];
      }
    }
  }
  return r;
}
async function extendConfig(config, options) {
  config._layers = config._layers || [];
  if (!options.extend) {
    return;
  }
  let keys = options.extend.extendKey;
  if (typeof keys === "string") {
    keys = [keys];
  }
  const extendSources = [];
  for (const key of keys) {
    extendSources.push(
      ...(Array.isArray(config[key]) ? config[key] : [config[key]]).filter(
        Boolean
      )
    );
    delete config[key];
  }
  for (let extendSource of extendSources) {
    const originalExtendSource = extendSource;
    let sourceOptions = {};
    if (extendSource.source) {
      sourceOptions = extendSource.options || {};
      extendSource = extendSource.source;
    }
    if (Array.isArray(extendSource)) {
      sourceOptions = extendSource[1] || {};
      extendSource = extendSource[0];
    }
    if (typeof extendSource !== "string") {
      console.warn(
        `Cannot extend config from \`${JSON.stringify(
          originalExtendSource
        )}\` in ${options.cwd}`
      );
      continue;
    }
    const _config = await resolveConfig(extendSource, options, sourceOptions);
    if (!_config.config) {
      console.warn(
        `Cannot extend config from \`${extendSource}\` in ${options.cwd}`
      );
      continue;
    }
    await extendConfig(_config.config, { ...options, cwd: _config.cwd });
    config._layers.push(_config);
    if (_config.config._layers) {
      config._layers.push(..._config.config._layers);
      delete _config.config._layers;
    }
  }
}
const GIGET_PREFIXES = [
  "gh:",
  "github:",
  "gitlab:",
  "bitbucket:",
  "https://",
  "http://"
];
const NPM_PACKAGE_RE = /^(@[\da-z~-][\d._a-z~-]*\/)?[\da-z~-][\d._a-z~-]*($|\/.*)/;
async function resolveConfig(source, options, sourceOptions = {}) {
  if (options.resolve) {
    const res2 = await options.resolve(source, options);
    if (res2) {
      return res2;
    }
  }
  const _merger = options.merger || defu;
  const customProviderKeys = Object.keys(
    sourceOptions.giget?.providers || {}
  ).map((key) => `${key}:`);
  const gigetPrefixes = customProviderKeys.length > 0 ? [.../* @__PURE__ */ new Set([...customProviderKeys, ...GIGET_PREFIXES])] : GIGET_PREFIXES;
  if (options.giget !== false && gigetPrefixes.some((prefix) => source.startsWith(prefix))) {
    const { downloadTemplate } = await import('giget');
    const { digest } = await import('ohash');
    const cloneName = source.replace(/\W+/g, "_").split("_").splice(0, 3).join("_") + "_" + digest(source).slice(0, 10).replace(/[-_]/g, "");
    let cloneDir;
    const localNodeModules = resolve(options.cwd, "node_modules");
    const parentDir = dirname(options.cwd);
    if (basename(parentDir) === ".c12") {
      cloneDir = join(parentDir, cloneName);
    } else if (existsSync(localNodeModules)) {
      cloneDir = join(localNodeModules, ".c12", cloneName);
    } else {
      cloneDir = process.env.XDG_CACHE_HOME ? resolve(process.env.XDG_CACHE_HOME, "c12", cloneName) : resolve(homedir(), ".cache/c12", cloneName);
    }
    if (existsSync(cloneDir) && !sourceOptions.install) {
      await rm(cloneDir, { recursive: true });
    }
    const cloned = await downloadTemplate(source, {
      dir: cloneDir,
      install: sourceOptions.install,
      force: sourceOptions.install,
      auth: sourceOptions.auth,
      ...options.giget,
      ...sourceOptions.giget
    });
    source = cloned.dir;
  }
  if (NPM_PACKAGE_RE.test(source)) {
    source = tryResolve(source, options) || source;
  }
  const ext = extname(source);
  const isDir = !ext || ext === basename(source);
  const cwd = resolve(options.cwd, isDir ? source : dirname(source));
  if (isDir) {
    source = options.configFile;
  }
  const res = {
    config: void 0,
    configFile: void 0,
    cwd,
    source,
    sourceOptions
  };
  res.configFile = tryResolve(resolve(cwd, source), options) || tryResolve(
    resolve(cwd, ".config", source.replace(/\.config$/, "")),
    options
  ) || tryResolve(resolve(cwd, ".config", source), options) || source;
  if (!existsSync(res.configFile)) {
    return res;
  }
  const configFileExt = extname(res.configFile) || "";
  if (configFileExt in ASYNC_LOADERS) {
    const asyncLoader = await ASYNC_LOADERS[configFileExt]();
    const contents = await readFile(res.configFile, "utf8");
    res.config = asyncLoader(contents);
  } else {
    res.config = await options.jiti.import(res.configFile, {
      default: true
    });
  }
  if (typeof res.config === "function") {
    res.config = await res.config();
  }
  if (options.envName) {
    const envConfig = {
      ...res.config["$" + options.envName],
      ...res.config.$env?.[options.envName]
    };
    if (Object.keys(envConfig).length > 0) {
      res.config = _merger(envConfig, res.config);
    }
  }
  res.meta = defu(res.sourceOptions.meta, res.config.$meta);
  delete res.config.$meta;
  if (res.sourceOptions.overrides) {
    res.config = _merger(res.sourceOptions.overrides, res.config);
  }
  res.configFile = _normalize(res.configFile);
  res.source = _normalize(res.source);
  return res;
}
function tryResolve(id, options) {
  const res = resolveModulePath(id, {
    try: true,
    from: pathToFileURL(join(options.cwd || ".", options.configFile || "/")),
    suffixes: ["", "/index"],
    extensions: SUPPORTED_EXTENSIONS,
    cache: false
  });
  return res ? normalize(res) : void 0;
}

export { SUPPORTED_EXTENSIONS as S, loadDotenv as a, loadConfig as l, setupDotenv as s };
