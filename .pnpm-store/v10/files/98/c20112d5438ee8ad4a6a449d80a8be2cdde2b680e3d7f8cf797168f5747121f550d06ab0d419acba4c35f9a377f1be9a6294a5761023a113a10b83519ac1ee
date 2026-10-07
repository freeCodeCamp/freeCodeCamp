import fs from 'node:fs';
import module from 'node:module';
import path from 'node:path';
import isNodeCoreModule from '@nolyfill/is-core-module';
import debug from 'debug';
import { getTsconfig, createPathsMatcher } from 'get-tsconfig';
import { isBunModule } from 'is-bun-module';
import { stableHash } from 'stable-hash';
import { globSync, isDynamicPattern } from 'tinyglobby';
import { ResolverFactory } from 'unrs-resolver';

const IMPORTER_NAME = "eslint-import-resolver-typescript";
const log = debug(IMPORTER_NAME);
const defaultConditionNames = [
  "types",
  "import",
  // APF: https://angular.io/guide/angular-package-format
  "esm2020",
  "es2020",
  "es2015",
  "require",
  "node",
  "node-addons",
  "browser",
  "default"
];
const defaultExtensions = [
  ".ts",
  ".tsx",
  ".d.ts",
  ".js",
  ".jsx",
  ".json",
  ".node"
];
const defaultExtensionAlias = {
  ".js": [
    ".ts",
    // `.tsx` can also be compiled as `.js`
    ".tsx",
    ".d.ts",
    ".js"
  ],
  ".jsx": [".tsx", ".d.ts", ".jsx"],
  ".cjs": [".cts", ".d.cts", ".cjs"],
  ".mjs": [".mts", ".d.mts", ".mjs"]
};
const defaultMainFields = [
  "types",
  "typings",
  // APF: https://angular.io/guide/angular-package-format
  "fesm2020",
  "fesm2015",
  "esm2020",
  "es2020",
  "module",
  "jsnext:main",
  "main"
];
const interfaceVersion = 2;
const JS_EXT_PATTERN = /\.(?:[cm]js|jsx?)$/;
const RELATIVE_PATH_PATTERN = /^\.{1,2}(?:\/.*)?$/;
let previousOptionsHash;
let optionsHash;
let cachedOptions;
let cachedCwd;
let mappersCachedOptions;
let mappers = [];
let resolverCachedOptions;
let cachedResolver;
function resolve(source, file, options, resolver) {
  if (!cachedOptions || previousOptionsHash !== (optionsHash = stableHash(options))) {
    previousOptionsHash = optionsHash;
    cachedOptions = {
      ...options,
      conditionNames: options?.conditionNames ?? defaultConditionNames,
      extensions: options?.extensions ?? defaultExtensions,
      extensionAlias: options?.extensionAlias ?? defaultExtensionAlias,
      mainFields: options?.mainFields ?? defaultMainFields
    };
  }
  if (!resolver) {
    if (!cachedResolver || resolverCachedOptions !== cachedOptions) {
      cachedResolver = new ResolverFactory(cachedOptions);
      resolverCachedOptions = cachedOptions;
    }
    resolver = cachedResolver;
  }
  log("looking for", source, "in", file);
  source = removeQuerystring(source);
  if (isNodeCoreModule(source) || isBunModule(source)) {
    log("matched core:", source);
    return {
      found: true,
      path: null
    };
  }
  if (process.versions.pnp && source === "pnpapi") {
    return {
      found: true,
      path: module.findPnpApi(file).resolveToUnqualified(source, file, {
        considerBuiltins: false
      })
    };
  }
  initMappers(cachedOptions);
  let mappedPaths = getMappedPaths(source, file, cachedOptions.extensions, true);
  if (mappedPaths.length > 0) {
    log("matched ts path:", ...mappedPaths);
  } else {
    mappedPaths = [source];
  }
  let foundNodePath;
  for (const mappedPath of mappedPaths) {
    try {
      const resolved = resolver.sync(
        path.dirname(path.resolve(file)),
        mappedPath
      );
      if (resolved.path) {
        foundNodePath = resolved.path;
        break;
      }
    } catch {
      log("failed to resolve with", mappedPath);
    }
  }
  if ((JS_EXT_PATTERN.test(foundNodePath) || cachedOptions.alwaysTryTypes && !foundNodePath) && !/^@types[/\\]/.test(source) && !path.isAbsolute(source) && !source.startsWith(".")) {
    const definitelyTyped = resolve(
      "@types" + path.sep + mangleScopedPackage(source),
      file,
      options
    );
    if (definitelyTyped.found) {
      return definitelyTyped;
    }
  }
  if (foundNodePath) {
    log("matched node path:", foundNodePath);
    return {
      found: true,
      path: foundNodePath
    };
  }
  log("didn't find ", source);
  return {
    found: false
  };
}
function createTypeScriptImportResolver(options) {
  const resolver = new ResolverFactory({
    ...options,
    conditionNames: options?.conditionNames ?? defaultConditionNames,
    extensions: options?.extensions ?? defaultExtensions,
    extensionAlias: options?.extensionAlias ?? defaultExtensionAlias,
    mainFields: options?.mainFields ?? defaultMainFields
  });
  return {
    interfaceVersion: 3,
    name: IMPORTER_NAME,
    resolve(source, file) {
      return resolve(source, file, options, resolver);
    }
  };
}
function removeQuerystring(id) {
  const querystringIndex = id.lastIndexOf("?");
  if (querystringIndex !== -1) {
    return id.slice(0, querystringIndex);
  }
  return id;
}
const isFile = (path2) => {
  try {
    return !!(path2 && fs.statSync(path2, { throwIfNoEntry: false })?.isFile());
  } catch {
    return false;
  }
};
const isModule = (modulePath) => !!modulePath && isFile(path.resolve(modulePath, "package.json"));
function getMappedPaths(source, file, extensions = defaultExtensions, retry) {
  const originalExtensions = extensions;
  extensions = ["", ...extensions];
  let paths = [];
  if (RELATIVE_PATH_PATTERN.test(source)) {
    const resolved = path.resolve(path.dirname(file), source);
    if (isFile(resolved)) {
      paths = [resolved];
    }
  } else {
    let mapperFns = mappers.filter(({ files }) => files.has(file)).map(({ mapperFn }) => mapperFn);
    if (mapperFns.length === 0) {
      mapperFns = mappers.map((mapper) => ({
        mapperFn: mapper.mapperFn,
        counter: equalChars(path.dirname(file), path.dirname(mapper.path))
      })).sort(
        (a, b) => (
          // Sort in descending order where the nearest one has the longest counter
          b.counter - a.counter
        )
      ).map(({ mapperFn }) => mapperFn);
    }
    paths = mapperFns.map(
      (mapperFn) => mapperFn(source).map((item) => [
        ...extensions.map((ext) => `${item}${ext}`),
        ...originalExtensions.map((ext) => `${item}/index${ext}`)
      ])
    ).flat(
      /* The depth is always 2 */
      2
    ).map(toNativePathSeparator).filter((mappedPath) => {
      try {
        const stat = fs.statSync(mappedPath, { throwIfNoEntry: false });
        if (stat === void 0) {
          return false;
        }
        if (stat.isFile()) {
          return true;
        }
        if (stat.isDirectory()) {
          return isModule(mappedPath);
        }
      } catch {
        return false;
      }
      return false;
    });
  }
  if (retry && paths.length === 0) {
    const isJs = JS_EXT_PATTERN.test(source);
    if (isJs) {
      const jsExt = path.extname(source);
      const tsExt = jsExt.replace("js", "ts");
      const basename = source.replace(JS_EXT_PATTERN, "");
      let resolved = getMappedPaths(basename + tsExt, file);
      if (resolved.length === 0 && jsExt === ".js") {
        const tsxExt = jsExt.replace("js", "tsx");
        resolved = getMappedPaths(basename + tsxExt, file);
      }
      if (resolved.length === 0) {
        resolved = getMappedPaths(
          basename + ".d" + (tsExt === ".tsx" ? ".ts" : tsExt),
          file
        );
      }
      if (resolved.length > 0) {
        return resolved;
      }
    }
    for (const ext of extensions) {
      const mappedPaths = isJs ? [] : getMappedPaths(source + ext, file);
      const resolved = mappedPaths.length > 0 ? mappedPaths : getMappedPaths(source + `/index${ext}`, file);
      if (resolved.length > 0) {
        return resolved;
      }
    }
  }
  return paths;
}
function initMappers(options) {
  if (mappers.length > 0 && mappersCachedOptions === options && cachedCwd === process.cwd()) {
    return;
  }
  cachedCwd = process.cwd();
  const configPaths = (typeof options.project === "string" ? [options.project] : (
    // eslint-disable-next-line sonarjs/no-nested-conditional
    Array.isArray(options.project) ? options.project : [cachedCwd]
  )).map((config) => replacePathSeparator(config, path.sep, path.posix.sep));
  const defaultInclude = ["**/*"];
  const defaultIgnore = ["**/node_modules/**"];
  const projectPaths = [
    .../* @__PURE__ */ new Set([
      ...configPaths.filter((p) => !isDynamicPattern(p)).map((p) => path.resolve(process.cwd(), p)),
      ...globSync(
        configPaths.filter((path2) => isDynamicPattern(path2)),
        {
          absolute: true,
          dot: true,
          expandDirectories: false,
          ignore: defaultIgnore
        }
      )
    ])
  ];
  mappers = projectPaths.map((projectPath) => {
    let tsconfigResult;
    if (isFile(projectPath)) {
      const { dir, base } = path.parse(projectPath);
      tsconfigResult = getTsconfig(dir, base);
    } else {
      tsconfigResult = getTsconfig(projectPath);
    }
    if (!tsconfigResult) {
      return;
    }
    const mapperFn = createPathsMatcher(tsconfigResult);
    if (!mapperFn) {
      return;
    }
    const files = tsconfigResult.config.files == null && tsconfigResult.config.include == null ? (
      // Include everything if no files or include options
      globSync(defaultInclude, {
        absolute: true,
        cwd: path.dirname(tsconfigResult.path),
        dot: true,
        ignore: [
          ...tsconfigResult.config.exclude ?? [],
          ...defaultIgnore
        ]
      })
    ) : [
      // https://www.typescriptlang.org/tsconfig/#files
      ...tsconfigResult.config.files != null && tsconfigResult.config.files.length > 0 ? tsconfigResult.config.files.map(
        (file) => path.normalize(
          path.resolve(path.dirname(tsconfigResult.path), file)
        )
      ) : [],
      // https://www.typescriptlang.org/tsconfig/#include
      ...tsconfigResult.config.include != null && tsconfigResult.config.include.length > 0 ? globSync(tsconfigResult.config.include, {
        absolute: true,
        cwd: path.dirname(tsconfigResult.path),
        dot: true,
        ignore: [
          ...tsconfigResult.config.exclude ?? [],
          ...defaultIgnore
        ]
      }) : []
    ];
    return {
      path: toNativePathSeparator(tsconfigResult.path),
      files: new Set(files.map(toNativePathSeparator)),
      mapperFn
    };
  }).filter(Boolean);
  mappersCachedOptions = options;
}
function mangleScopedPackage(moduleName) {
  if (moduleName.startsWith("@")) {
    const replaceSlash = moduleName.replace(path.sep, "__");
    if (replaceSlash !== moduleName) {
      return replaceSlash.slice(1);
    }
  }
  return moduleName;
}
function replacePathSeparator(p, from, to) {
  return from === to ? p : p.replaceAll(from, to);
}
function toNativePathSeparator(p) {
  return replacePathSeparator(
    p,
    path[process.platform === "win32" ? "posix" : "win32"].sep,
    path[process.platform === "win32" ? "win32" : "posix"].sep
  );
}
function equalChars(a, b) {
  if (a.length === 0 || b.length === 0) {
    return 0;
  }
  let i = 0;
  const length = Math.min(a.length, b.length);
  while (i < length && a.charAt(i) === b.charAt(i)) {
    i += 1;
  }
  return i;
}

export { createTypeScriptImportResolver, defaultConditionNames, defaultExtensionAlias, defaultExtensions, defaultMainFields, interfaceVersion, resolve };
