import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { isCjs } from '../utils/detection.js';

let moduleCache;
const INTEGRATION_NAME = "Modules";
const SERVER_MODULES = typeof __SENTRY_SERVER_MODULES__ === "undefined" ? {} : __SENTRY_SERVER_MODULES__;
const _modulesIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    processEvent(event) {
      event.modules = {
        ...event.modules,
        ..._getModules()
      };
      return event;
    },
    getModules: _getModules
  };
});
const modulesIntegration = _modulesIntegration;
function getRequireCachePaths() {
  try {
    return require.cache ? Object.keys(require.cache) : [];
  } catch {
    return [];
  }
}
function collectModules() {
  return {
    ...SERVER_MODULES,
    ...getModulesFromPackageJson(),
    ...isCjs() ? collectRequireModules() : {}
  };
}
function collectRequireModules() {
  const mainPaths = require.main?.paths || [];
  const paths = getRequireCachePaths();
  const infos = {};
  const seen = /* @__PURE__ */ new Set();
  paths.forEach((path) => {
    let dir = path;
    const updir = () => {
      const orig = dir;
      dir = dirname(orig);
      if (!dir || orig === dir || seen.has(orig)) {
        return void 0;
      }
      if (mainPaths.indexOf(dir) < 0) {
        return updir();
      }
      const pkgfile = join(orig, "package.json");
      seen.add(orig);
      if (!existsSync(pkgfile)) {
        return updir();
      }
      try {
        const info = JSON.parse(readFileSync(pkgfile, "utf8"));
        infos[info.name] = info.version;
      } catch {
      }
    };
    updir();
  });
  return infos;
}
function _getModules() {
  if (!moduleCache) {
    moduleCache = collectModules();
  }
  return moduleCache;
}
function getPackageJson() {
  try {
    const filePath = join(process.cwd(), "package.json");
    const packageJson = JSON.parse(readFileSync(filePath, "utf8"));
    return packageJson;
  } catch {
    return {};
  }
}
function getModulesFromPackageJson() {
  const packageJson = getPackageJson();
  return {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  };
}

export { modulesIntegration };
//# sourceMappingURL=modules.js.map
