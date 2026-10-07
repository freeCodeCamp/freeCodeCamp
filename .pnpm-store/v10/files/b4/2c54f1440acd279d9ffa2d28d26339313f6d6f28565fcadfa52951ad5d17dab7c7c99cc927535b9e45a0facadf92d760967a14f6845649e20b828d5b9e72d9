"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  PrismaConfigEnvError: () => PrismaConfigEnvError,
  defaultTestConfig: () => defaultTestConfig,
  defineConfig: () => defineConfig,
  env: () => env,
  loadConfigFromFile: () => loadConfigFromFile,
  loadConfigFromPackageJson: () => loadConfigFromPackageJson
});
module.exports = __toCommonJS(index_exports);

// ../debug/dist/index.mjs
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var colors_exports = {};
__export2(colors_exports, {
  $: () => $,
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  cyan: () => cyan,
  dim: () => dim,
  gray: () => gray,
  green: () => green,
  grey: () => grey,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  strikethrough: () => strikethrough,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var MAX_ARGS_HISTORY = 100;
var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
  enable(namespace) {
    if (typeof namespace === "string") {
      globalThis.DEBUG = namespace;
    }
  },
  disable() {
    const prev = globalThis.DEBUG;
    globalThis.DEBUG = "";
    return prev;
  },
  // this is the core logic to check if logging should happen or not
  enabled(namespace) {
    const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    });
    const isListened = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
      return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
    });
    const isExcluded = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
      return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
    });
    return isListened && !isExcluded;
  },
  log: (...args) => {
    const [namespace, format, ...rest] = args;
    const logWithFormatting = console.warn ?? console.log;
    logWithFormatting(`${namespace} ${format}`, ...rest);
  },
  formatters: {}
  // not implemented
};
function debugCreate(namespace) {
  const instanceProps = {
    color: COLORS[lastColor++ % COLORS.length],
    enabled: topProps.enabled(namespace),
    namespace,
    log: topProps.log,
    extend: () => {
    }
    // not implemented
  };
  const debugCall = (...args) => {
    const { enabled, namespace: namespace2, color, log } = instanceProps;
    if (args.length !== 0) {
      argsHistory.push([namespace2, ...args]);
    }
    if (argsHistory.length > MAX_ARGS_HISTORY) {
      argsHistory.shift();
    }
    if (topProps.enabled(namespace2) || enabled) {
      const stringArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg;
        }
        return safeStringify(arg);
      });
      const ms = `+${Date.now() - lastTimestamp}ms`;
      lastTimestamp = Date.now();
      if (globalThis.DEBUG_COLORS) {
        log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
      } else {
        log(namespace2, ...stringArgs, ms);
      }
    }
  };
  return new Proxy(debugCall, {
    get: (_, prop) => instanceProps[prop],
    set: (_, prop, value) => instanceProps[prop] = value
  });
}
var Debug = new Proxy(debugCreate, {
  get: (_, prop) => topProps[prop],
  set: (_, prop, value) => topProps[prop] = value
});
function safeStringify(value, indent = 2) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(
    value,
    (key, value2) => {
      if (typeof value2 === "object" && value2 !== null) {
        if (cache.has(value2)) {
          return `[Circular *]`;
        }
        cache.add(value2);
      } else if (typeof value2 === "bigint") {
        return value2.toString();
      }
      return value2;
    },
    indent
  );
}

// ../driver-adapter-utils/dist/index.mjs
function isDriverAdapterError(error) {
  return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
function ok(value) {
  return {
    ok: true,
    value,
    map(fn) {
      return ok(fn(value));
    },
    flatMap(fn) {
      return fn(value);
    }
  };
}
function err(error) {
  return {
    ok: false,
    error,
    map() {
      return err(error);
    },
    flatMap() {
      return err(error);
    }
  };
}
var debug = Debug("driver-adapter-utils");
var ErrorRegistryInternal = class {
  registeredErrors = [];
  consumeError(id) {
    return this.registeredErrors[id];
  }
  registerNewError(error) {
    let i = 0;
    while (this.registeredErrors[i] !== void 0) {
      i++;
    }
    this.registeredErrors[i] = { error };
    return i;
  }
};
function copySymbolsFromSource(source, target) {
  const symbols = Object.getOwnPropertySymbols(source);
  const symbolObject = Object.fromEntries(symbols.map((symbol) => [symbol, true]));
  Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory) => {
  const errorRegistry = new ErrorRegistryInternal();
  const boundFactory = {
    adapterName: adapterFactory.adapterName,
    provider: adapterFactory.provider,
    errorRegistry,
    connect: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
      return ctx.map((ctx2) => bindAdapter(ctx2, errorRegistry));
    },
    connectToShadowDb: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
      return ctx.map((ctx2) => bindAdapter(ctx2, errorRegistry));
    }
  };
  copySymbolsFromSource(adapterFactory, boundFactory);
  return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal()) => {
  const boundAdapter = {
    adapterName: adapter.adapterName,
    errorRegistry,
    queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
    executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
    executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
    dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
    provider: adapter.provider,
    startTransaction: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
      return ctx.map((ctx2) => bindTransaction(errorRegistry, ctx2));
    }
  };
  if (adapter.getConnectionInfo) {
    boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
  }
  return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction) => {
  return {
    adapterName: transaction.adapterName,
    provider: transaction.provider,
    options: transaction.options,
    queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
    executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
    commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
    rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
  };
};
function wrapAsync(registry, fn) {
  return async (...args) => {
    try {
      return ok(await fn(...args));
    } catch (error) {
      debug("[error@wrapAsync]", error);
      if (isDriverAdapterError(error)) {
        return err(error.cause);
      }
      const id = registry.registerNewError(error);
      return err({ kind: "GenericJs", id });
    }
  };
}
function wrapSync(registry, fn) {
  return (...args) => {
    try {
      return ok(fn(...args));
    } catch (error) {
      debug("[error@wrapSync]", error);
      if (isDriverAdapterError(error)) {
        return err(error.cause);
      }
      const id = registry.registerNewError(error);
      return err({ kind: "GenericJs", id });
    }
  };
}
var mockAdapterErrors = {
  queryRaw: new Error("Not implemented: queryRaw"),
  executeRaw: new Error("Not implemented: executeRaw"),
  startTransaction: new Error("Not implemented: startTransaction"),
  executeScript: new Error("Not implemented: executeScript"),
  dispose: new Error("Not implemented: dispose")
};

// src/PrismaConfig.ts
var import_effect3 = require("effect");
var import_Function = require("effect/Function");

// src/defineConfig.ts
var import_effect = require("effect");

// src/defaultConfig.ts
function defaultConfig() {
  return makePrismaConfigInternal({
    loadedFromFile: null,
    deprecatedPackageJson: null
  });
}

// src/defineConfig.ts
function validateExperimentalFeatures(config) {
  const experimental = config.experimental || {};
  if (config.engine === "js" && !experimental.adapter) {
    return import_effect.Either.left(
      new Error('The `engine === "js"` configuration requires `experimental.adapter` to be set to `true`.')
    );
  }
  if (config.studio && !experimental.studio) {
    return import_effect.Either.left(new Error("The `studio` configuration requires `experimental.studio` to be set to `true`."));
  }
  if (config.tables?.external && !experimental.externalTables) {
    return import_effect.Either.left(
      new Error("The `tables.external` configuration requires `experimental.externalTables` to be set to `true`.")
    );
  }
  if (config.migrations?.initShadowDb && !experimental.externalTables) {
    return import_effect.Either.left(
      new Error(
        "The `migrations.initShadowDb` configuration requires `experimental.externalTables` to be set to `true`."
      )
    );
  }
  if (config["extensions"] !== void 0 && !experimental.extensions) {
    return import_effect.Either.left(
      new Error("The `extensions` configuration requires `experimental.extensions` to be set to `true`.")
    );
  }
  return import_effect.Either.right(config);
}
var debug2 = Debug("prisma:config:defineConfig");
function defineConfig(configInput) {
  const validationResult = validateExperimentalFeatures(configInput);
  if (validationResult._tag === "Left") {
    throw validationResult.left;
  }
  const config = defaultConfig();
  debug2("[default]: %o", config);
  defineExperimentalConfig(config, configInput);
  defineSchemaConfig(config, configInput);
  defineEngineConfig(config, configInput);
  defineStudioConfig(config, configInput);
  defineMigrationsConfig(config, configInput);
  defineTablesConfig(config, configInput);
  defineEnumsConfig(config, configInput);
  defineTypedSqlConfig(config, configInput);
  defineViewsConfig(config, configInput);
  defineExtensionsConfig(config, configInput);
  return config;
}
function defineExperimentalConfig(config, configInput) {
  if (!configInput.experimental) {
    return;
  }
  config.experimental = configInput.experimental;
  debug2("[config.experimental]: %o", config.experimental);
}
function defineSchemaConfig(config, configInput) {
  if (!configInput.schema) {
    return;
  }
  config.schema = configInput.schema;
  debug2("[config.schema]: %o", config.schema);
}
function defineMigrationsConfig(config, configInput) {
  if (!configInput.migrations) {
    return;
  }
  config.migrations = configInput.migrations;
  debug2("[config.migrations]: %o", config.migrations);
}
function defineTypedSqlConfig(config, configInput) {
  if (!configInput.typedSql) {
    return;
  }
  config.typedSql = configInput.typedSql;
  debug2("[config.typedSql]: %o", config.typedSql);
}
function defineViewsConfig(config, configInput) {
  if (!configInput.views) {
    return;
  }
  config.views = configInput.views;
  debug2("[config.views]: %o", config.views);
}
function defineTablesConfig(config, configInput) {
  if (!configInput.tables) {
    return;
  }
  config.tables = configInput.tables;
  debug2("[config.tables]: %o", config.tables);
}
function defineEnumsConfig(config, configInput) {
  if (!configInput.enums) {
    return;
  }
  config.enums = configInput.enums;
  debug2("[config.enums]: %o", config.enums);
}
function defineStudioConfig(config, configInput) {
  if (!configInput.studio?.adapter) {
    return;
  }
  const { adapter: getAdapterFactory } = configInput.studio;
  config.studio = {
    adapter: async () => {
      const adapterFactory = await getAdapterFactory();
      debug2("[config.studio.adapter]: %o", adapterFactory.adapterName);
      return adapterFactory;
    }
  };
  debug2("[config.studio]: %o", config.studio);
}
function defineEngineConfig(config, configInput) {
  if (configInput.engine === void 0) {
    return;
  } else if (configInput.engine === "js") {
    const { engine, adapter: getAdapterFactory } = configInput;
    const adapter = async () => {
      const adapterFactory = await getAdapterFactory();
      debug2("[config.adapter]: %o", adapterFactory.adapterName);
      return bindMigrationAwareSqlAdapterFactory(adapterFactory);
    };
    Object.assign(config, { engine, adapter });
    debug2("[config.engine]: %o", engine);
    debug2("[config.adapter]: %o", adapter);
  } else if (configInput.engine === "classic") {
    const { engine, datasource } = configInput;
    Object.assign(config, { engine, datasource });
    debug2("[config.engine]: %o", engine);
    debug2("[config.datasource]: %o", datasource);
  }
}
function defineExtensionsConfig(config, configInput) {
  if (!configInput["extensions"]) {
    return;
  }
  config["extensions"] = configInput["extensions"];
  debug2("[config.extensions]: %o", config["extensions"]);
}

// src/loadConfigFromPackageJson.ts
var import_promises = require("node:fs/promises");
var import_node_process = __toESM(require("node:process"));
var import_effect2 = require("effect");
var import_package = require("empathic/package");
var PrismaConfigPackageJsonShape = import_effect2.Schema.Struct({
  schema: import_effect2.Schema.optional(import_effect2.Schema.String),
  seed: import_effect2.Schema.optional(import_effect2.Schema.NonEmptyString)
});
async function loadConfigFromPackageJson(cwd = import_node_process.default.cwd()) {
  const pkgPath = (0, import_package.up)({ cwd });
  if (pkgPath === void 0) {
    return null;
  }
  const pkgJson = await (0, import_promises.readFile)(pkgPath, { encoding: "utf-8" }).then((p) => JSON.parse(p));
  const deprecatedConfig = pkgJson["prisma"];
  if (deprecatedConfig === void 0) {
    return null;
  }
  if (Object.keys(deprecatedConfig).length === 1 && deprecatedConfig["prismaCommit"] !== void 0) {
    return null;
  }
  return {
    config: deprecatedConfig,
    loadedFromFile: pkgPath
  };
}

// src/PrismaConfig.ts
var debug3 = Debug("prisma:config:PrismaConfig");
var SqlMigrationAwareDriverAdapterFactoryShape = import_effect3.Schema.declare(
  (input) => {
    return typeof input === "function";
  },
  {
    identifier: "SqlMigrationAwareDriverAdapterFactory",
    encode: import_effect3.identity,
    decode: import_effect3.identity
  }
);
var ErrorCapturingSqlMigrationAwareDriverAdapterFactoryShape = import_effect3.Schema.declare(
  (input) => {
    return typeof input === "function";
  },
  {
    identifier: "ErrorCapturingSqlMigrationAwareDriverAdapterFactory",
    encode: import_effect3.identity,
    decode: import_effect3.identity
  }
);
var SchemaEngineConfigClassicShape = import_effect3.Schema.Struct({
  engine: import_effect3.Schema.Literal("classic"),
  datasource: import_effect3.Schema.Struct({
    url: import_effect3.Schema.String,
    directUrl: import_effect3.Schema.optional(import_effect3.Schema.String),
    shadowDatabaseUrl: import_effect3.Schema.optional(import_effect3.Schema.String)
  })
});
var SchemaEngineConfigJsShape = import_effect3.Schema.Struct({
  engine: import_effect3.Schema.Literal("js"),
  adapter: SqlMigrationAwareDriverAdapterFactoryShape
});
var SchemaEngineConfigAbsentShape = import_effect3.Schema.Struct({
  engine: import_effect3.Schema.optional(import_effect3.Schema.Never)
});
var SchemaEngineConfigShape = import_effect3.Schema.Union(
  SchemaEngineConfigClassicShape,
  SchemaEngineConfigJsShape,
  SchemaEngineConfigAbsentShape
);
var SchemaEngineConfigJsInternal = import_effect3.Schema.Struct({
  engine: import_effect3.Schema.Literal("js"),
  adapter: ErrorCapturingSqlMigrationAwareDriverAdapterFactoryShape
});
var SchemaEngineConfigInternal = import_effect3.Schema.Union(
  SchemaEngineConfigClassicShape,
  SchemaEngineConfigJsInternal,
  SchemaEngineConfigAbsentShape
);
var ExperimentalConfigShape = import_effect3.Schema.Struct({
  adapter: import_effect3.Schema.optional(import_effect3.Schema.Boolean),
  studio: import_effect3.Schema.optional(import_effect3.Schema.Boolean),
  externalTables: import_effect3.Schema.optional(import_effect3.Schema.Boolean),
  extensions: import_effect3.Schema.optional(import_effect3.Schema.Boolean)
});
if (false) {
  __testExperimentalConfigShapeValueA;
  __testExperimentalConfigShapeValueB;
}
var MigrationsConfigShape = import_effect3.Schema.Struct({
  path: import_effect3.Schema.optional(import_effect3.Schema.String),
  initShadowDb: import_effect3.Schema.optional(import_effect3.Schema.String),
  seed: import_effect3.Schema.optional(import_effect3.Schema.NonEmptyString)
});
if (false) {
  __testMigrationsConfigShapeValueA;
  __testMigrationsConfigShapeValueB;
}
var TablesConfigShape = import_effect3.Schema.Struct({
  external: import_effect3.Schema.optional(import_effect3.Schema.mutable(import_effect3.Schema.Array(import_effect3.Schema.String)))
});
if (false) {
  __testTablesConfigShapeValueA;
  __testTablesConfigShapeValueB;
}
var EnumsConfigShape = import_effect3.Schema.Struct({
  external: import_effect3.Schema.optional(import_effect3.Schema.mutable(import_effect3.Schema.Array(import_effect3.Schema.String)))
});
if (false) {
  __testEnumsConfigShapeValueA;
  __testEnumsConfigShapeValueB;
}
var ViewsConfigShape = import_effect3.Schema.Struct({
  path: import_effect3.Schema.optional(import_effect3.Schema.String)
});
if (false) {
  __testViewsConfigShapeValueA;
  __testViewsConfigShapeValueB;
}
var TypedSqlConfigShape = import_effect3.Schema.Struct({
  path: import_effect3.Schema.optional(import_effect3.Schema.String)
});
if (false) {
  __testTypedSqlConfigShapeValueA;
  __testTypedSqlConfigShapeValueB;
}
var PrismaStudioConfigShape = import_effect3.Schema.Struct({
  /**
   * Instantiates the Prisma driver adapter to use for Prisma Studio.
   */
  adapter: SqlMigrationAwareDriverAdapterFactoryShape
});
if (false) {
  __testPrismaStudioConfigShapeValueA;
  __testPrismaStudioConfigShapeValueB;
}
if (false) {
  __testPrismaConfig;
  __testPrismaConfigInternal;
}
var PrismaConfigUnconditionalShape = import_effect3.Schema.Struct({
  experimental: import_effect3.Schema.optional(ExperimentalConfigShape),
  schema: import_effect3.Schema.optional(import_effect3.Schema.String),
  studio: import_effect3.Schema.optional(PrismaStudioConfigShape),
  migrations: import_effect3.Schema.optional(MigrationsConfigShape),
  tables: import_effect3.Schema.optional(TablesConfigShape),
  enums: import_effect3.Schema.optional(EnumsConfigShape),
  views: import_effect3.Schema.optional(ViewsConfigShape),
  typedSql: import_effect3.Schema.optional(TypedSqlConfigShape),
  extensions: import_effect3.Schema.optional(import_effect3.Schema.Any)
});
var PrismaConfigShape = import_effect3.Schema.extend(SchemaEngineConfigShape, PrismaConfigUnconditionalShape);
if (false) {
  __testPrismaConfigValueA;
  __testPrismaConfigValueB;
}
function validateExperimentalFeatures2(config) {
  const experimental = config.experimental || {};
  if (config.engine === "js" && !experimental.adapter) {
    return import_effect3.Either.left(
      new Error("The `engine === 'js'` configuration requires `experimental.adapter` to be set to `true`.")
    );
  }
  if (config.studio && !experimental.studio) {
    return import_effect3.Either.left(new Error("The `studio` configuration requires `experimental.studio` to be set to `true`."));
  }
  if (config.tables?.external && !experimental.externalTables) {
    return import_effect3.Either.left(
      new Error("The `tables.external` configuration requires `experimental.externalTables` to be set to `true`.")
    );
  }
  if (config.enums?.external && !experimental.externalTables) {
    return import_effect3.Either.left(
      new Error("The `enums.external` configuration requires `experimental.externalTables` to be set to `true`.")
    );
  }
  if (config.migrations?.initShadowDb && !experimental.externalTables) {
    return import_effect3.Either.left(
      new Error(
        "The `migrations.initShadowDb` configuration requires `experimental.externalTables` to be set to `true`."
      )
    );
  }
  if (config["extensions"] && !experimental.extensions) {
    return import_effect3.Either.left(
      new Error("The `extensions` configuration requires `experimental.extensions` to be set to `true`.")
    );
  }
  return import_effect3.Either.right(config);
}
function parsePrismaConfigShape(input) {
  return (0, import_Function.pipe)(
    import_effect3.Schema.decodeUnknownEither(PrismaConfigShape, {})(input, {
      onExcessProperty: "error"
    }),
    import_effect3.Either.flatMap(validateExperimentalFeatures2)
  );
}
var PRISMA_CONFIG_INTERNAL_BRAND = Symbol.for("PrismaConfigInternal");
var PrismaConfigInternalShape = import_effect3.Schema.extend(
  PrismaConfigUnconditionalShape,
  import_effect3.Schema.extend(
    SchemaEngineConfigInternal,
    import_effect3.Schema.Struct({
      loadedFromFile: import_effect3.Schema.NullOr(import_effect3.Schema.String),
      deprecatedPackageJson: import_effect3.Schema.NullOr(
        import_effect3.Schema.Struct({
          config: PrismaConfigPackageJsonShape,
          loadedFromFile: import_effect3.Schema.String
        })
      )
    })
  )
);
function brandPrismaConfigInternal(config) {
  Object.defineProperty(config, "__brand", {
    value: PRISMA_CONFIG_INTERNAL_BRAND,
    writable: true,
    configurable: true,
    enumerable: false
  });
  return config;
}
function parsePrismaConfigInternalShape(input) {
  debug3("Parsing PrismaConfigInternal: %o", input);
  if (typeof input === "object" && input !== null && input["__brand"] === PRISMA_CONFIG_INTERNAL_BRAND) {
    debug3("Short-circuit: input is already a PrismaConfigInternal object");
    return import_effect3.Either.right(input);
  }
  return (0, import_Function.pipe)(
    import_effect3.Schema.decodeUnknownEither(PrismaConfigInternalShape, {})(input, {
      onExcessProperty: "error"
    }),
    // Brand the output type to make `PrismaConfigInternal` opaque, without exposing the `Effect/Brand` type
    // to the public API.
    // This is done to work around the following issues:
    // - https://github.com/microsoft/rushstack/issues/1308
    // - https://github.com/microsoft/rushstack/issues/4034
    // - https://github.com/microsoft/TypeScript/issues/58914
    import_effect3.Either.map(brandPrismaConfigInternal)
  );
}
function makePrismaConfigInternal(makeArgs) {
  return brandPrismaConfigInternal(makeArgs);
}
function parseDefaultExport(defaultExport) {
  const parseResultEither = (0, import_Function.pipe)(
    // If the given config conforms to the `PrismaConfig` shape, feed it to `defineConfig`.
    parsePrismaConfigShape(defaultExport),
    import_effect3.Either.map((config) => {
      debug3("Parsed `PrismaConfig` shape: %o", config);
      return defineConfig(config);
    }),
    // Otherwise, try to parse it as a `PrismaConfigInternal` shape.
    import_effect3.Either.orElse(() => parsePrismaConfigInternalShape(defaultExport))
  );
  if (import_effect3.Either.isLeft(parseResultEither)) {
    throw parseResultEither.left;
  }
  return parseResultEither.right;
}

// src/defaultTestConfig.ts
function defaultTestConfig() {
  return makePrismaConfigInternal({
    loadedFromFile: null,
    deprecatedPackageJson: null
  });
}

// src/env.ts
var PrismaConfigEnvError = class extends Error {
  constructor(name) {
    super(`Missing required environment variable: ${name}`);
    this.name = "PrismaConfigEnvError";
  }
};
function env(name) {
  const value = process.env[name];
  if (!value) {
    throw new PrismaConfigEnvError(name);
  }
  return value;
}

// src/loadConfigFromFile.ts
var import_node_path = __toESM(require("node:path"));
var import_node_process2 = __toESM(require("node:process"));
var debug4 = Debug("prisma:config:loadConfigFromFile");
var SUPPORTED_EXTENSIONS = [".js", ".ts", ".mjs", ".cjs", ".mts", ".cts"];
async function loadConfigFromFile({
  configFile,
  configRoot = import_node_process2.default.cwd()
}) {
  const start = performance.now();
  const getTime = () => `${(performance.now() - start).toFixed(2)}ms`;
  const diagnostics = [];
  const deprecatedPrismaConfigFromJson = await loadConfigFromPackageJson(configRoot);
  if (deprecatedPrismaConfigFromJson) {
    diagnostics.push({
      _tag: "warn",
      value: ({ warn, link }) => () => warn(
        `The configuration property \`package.json#prisma\` is deprecated and will be removed in Prisma 7. Please migrate to a Prisma config file (e.g., \`prisma.config.ts\`).
For more information, see: ${link("https://pris.ly/prisma-config")}
`
      )
    });
  }
  try {
    const { configModule, resolvedPath, error } = await loadConfigTsOrJs(configRoot, configFile);
    if (error) {
      return {
        resolvedPath,
        error,
        diagnostics
      };
    }
    debug4(`Config file loaded in %s`, getTime());
    if (resolvedPath === null) {
      debug4(`No config file found in the current working directory %s`, configRoot);
      return { resolvedPath: null, config: defaultConfig(), diagnostics };
    }
    let parsedConfig;
    try {
      parsedConfig = parseDefaultExport(configModule);
    } catch (e) {
      const error2 = e;
      return {
        resolvedPath,
        error: {
          _tag: "ConfigFileSyntaxError",
          error: error2
        },
        diagnostics
      };
    }
    diagnostics.push({
      _tag: "log",
      value: ({ log, dim: dim2 }) => () => log(dim2(`Loaded Prisma config from ${import_node_path.default.relative(configRoot, resolvedPath)}.
`))
    });
    const prismaConfig = transformPathsInConfigToAbsolute(parsedConfig, resolvedPath);
    if (deprecatedPrismaConfigFromJson) {
      diagnostics.push({
        _tag: "warn",
        value: ({ warn, link }) => () => warn(`The Prisma config file in ${import_node_path.default.relative(
          configRoot,
          resolvedPath
        )} overrides the deprecated \`package.json#prisma\` property in ${import_node_path.default.relative(
          configRoot,
          deprecatedPrismaConfigFromJson.loadedFromFile
        )}.
  For more information, see: ${link("https://pris.ly/prisma-config")}
`)
      });
    }
    return {
      config: {
        ...prismaConfig,
        loadedFromFile: resolvedPath
      },
      resolvedPath,
      diagnostics
    };
  } catch (e) {
    const error = e;
    return {
      resolvedPath: configRoot,
      error: {
        _tag: "UnknownError",
        error
      },
      diagnostics
    };
  }
}
async function loadConfigTsOrJs(configRoot, configFile) {
  const { loadConfig: loadConfigWithC12 } = await import("c12");
  const { deepmerge } = await import("deepmerge-ts");
  try {
    const {
      config,
      configFile: _resolvedPath,
      meta
    } = await loadConfigWithC12({
      cwd: configRoot,
      // configuration base name
      name: "prisma",
      // the config file to load (without file extensions), defaulting to `${cwd}.${name}`
      configFile,
      // do not load .env files
      dotenv: false,
      // do not load RC config
      rcFile: false,
      // do not extend remote config files
      giget: false,
      // do not extend the default config
      extend: false,
      // do not load from nearest package.json
      packageJson: false,
      // @ts-expect-error: this is a type-error in `c12` itself
      merger: deepmerge,
      jitiOptions: {
        interopDefault: true,
        moduleCache: false,
        extensions: SUPPORTED_EXTENSIONS
      }
    });
    const resolvedPath = _resolvedPath ? import_node_path.default.normalize(_resolvedPath) : void 0;
    const doesConfigFileExist = resolvedPath !== void 0 && meta !== void 0;
    if (configFile && !doesConfigFileExist) {
      debug4(`The given config file was not found at %s`, resolvedPath);
      return {
        require: null,
        resolvedPath: import_node_path.default.join(configRoot, configFile),
        error: { _tag: "ConfigFileNotFound" }
      };
    }
    if (doesConfigFileExist) {
      const extension = import_node_path.default.extname(import_node_path.default.basename(resolvedPath));
      if (!SUPPORTED_EXTENSIONS.includes(extension)) {
        return {
          configModule: config,
          resolvedPath,
          error: {
            _tag: "ConfigLoadError",
            error: new Error(`Unsupported Prisma config file extension: ${extension}`)
          }
        };
      }
    }
    return {
      configModule: config,
      resolvedPath: doesConfigFileExist ? resolvedPath : null,
      error: null
    };
  } catch (e) {
    const error = e;
    debug4("jiti import failed: %s", error.message);
    const configFileMatch = error.message.match(/prisma\.config\.(\w+)/);
    const extension = configFileMatch?.[1];
    const filenameWithExtension = import_node_path.default.join(configRoot, extension ? `prisma.config.${extension}` : "");
    debug4("faulty config file: %s", filenameWithExtension);
    return {
      error: {
        _tag: "ConfigLoadError",
        error
      },
      resolvedPath: filenameWithExtension
    };
  }
}
function transformPathsInConfigToAbsolute(prismaConfig, resolvedPath) {
  function resolvePath(value) {
    if (!value) {
      return void 0;
    }
    return import_node_path.default.resolve(import_node_path.default.dirname(resolvedPath), value);
  }
  return {
    ...prismaConfig,
    schema: resolvePath(prismaConfig.schema),
    migrations: {
      ...prismaConfig.migrations,
      path: resolvePath(prismaConfig.migrations?.path)
    },
    typedSql: {
      ...prismaConfig.typedSql,
      path: resolvePath(prismaConfig.typedSql?.path)
    },
    views: {
      ...prismaConfig.views,
      path: resolvePath(prismaConfig.views?.path)
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrismaConfigEnvError,
  defaultTestConfig,
  defineConfig,
  env,
  loadConfigFromFile,
  loadConfigFromPackageJson
});
