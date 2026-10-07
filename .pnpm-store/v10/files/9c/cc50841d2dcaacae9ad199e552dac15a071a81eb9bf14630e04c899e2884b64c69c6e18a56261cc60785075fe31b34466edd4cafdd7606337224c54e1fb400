"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const agent_1 = __importDefault(require("./agent"));
function createHttpProxyAgent(opts) {
    return new agent_1.default(opts);
}
(function (createHttpProxyAgent) {
    createHttpProxyAgent.HttpProxyAgent = agent_1.default;
    createHttpProxyAgent.prototype = agent_1.default.prototype;
})(createHttpProxyAgent || (createHttpProxyAgent = {}));
module.exports = createHttpProxyAgent;
//# sourceMappingURL=index.js.map