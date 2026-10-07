"use strict";

const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 12 || major === 12 && minor < 3) {
  throw new Error("@babel/register/experimental-worker requires Node.js >= 12.3.0");
}
const hook = require("./hook.js");
const {
  WorkerClient
} = require("./worker-client.js");
let client;
function register(opts) {
  client || (client = new WorkerClient());
  return hook.register(client, opts);
}
module.exports = Object.assign(register, {
  revert: hook.revert,
  default: register,
  __esModule: true
});
if (!require("./is-in-register-worker.js").isInRegisterWorker) {
  register();
}

//# sourceMappingURL=experimental-worker.js.map
