Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const env = require('./env.js');

function isNodeEnv() {
  return !env.isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}
function dynamicRequire(mod, request) {
  return mod.require(request);
}
function loadModule(moduleName, existingModule = module) {
  let mod;
  try {
    mod = dynamicRequire(existingModule, moduleName);
  } catch {
  }
  if (!mod) {
    try {
      const { cwd } = dynamicRequire(existingModule, "process");
      mod = dynamicRequire(existingModule, `${cwd()}/node_modules/${moduleName}`);
    } catch {
    }
  }
  return mod;
}

exports.isNodeEnv = isNodeEnv;
exports.loadModule = loadModule;
//# sourceMappingURL=node.js.map
