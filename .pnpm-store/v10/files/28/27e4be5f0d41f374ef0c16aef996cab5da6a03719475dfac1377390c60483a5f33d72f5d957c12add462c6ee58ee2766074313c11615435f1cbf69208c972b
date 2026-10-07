import { isNodeEnv } from './node.js';
import { GLOBAL_OBJ } from './worldwide.js';

function isBrowser() {
  return typeof window !== "undefined" && (!isNodeEnv() || isElectronNodeRenderer());
}
function isElectronNodeRenderer() {
  const process = GLOBAL_OBJ.process;
  return process?.type === "renderer";
}

export { isBrowser };
//# sourceMappingURL=isBrowser.js.map
