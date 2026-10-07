import { isBrowserBundle } from './env.js';

function isNodeEnv() {
  return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
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

export { isNodeEnv, loadModule };
//# sourceMappingURL=node.js.map
