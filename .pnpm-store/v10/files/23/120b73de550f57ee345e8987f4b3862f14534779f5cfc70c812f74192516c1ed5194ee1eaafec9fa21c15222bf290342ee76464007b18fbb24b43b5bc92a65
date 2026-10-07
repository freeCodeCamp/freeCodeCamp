Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const node = require('./node.js');
const worldwide = require('./worldwide.js');

function isBrowser() {
  return typeof window !== "undefined" && (!node.isNodeEnv() || isElectronNodeRenderer());
}
function isElectronNodeRenderer() {
  const process = worldwide.GLOBAL_OBJ.process;
  return process?.type === "renderer";
}

exports.isBrowser = isBrowser;
//# sourceMappingURL=isBrowser.js.map
