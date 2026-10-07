"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const index_1 = __importDefault(require("./index"));
const memory_code_points_1 = require("./memory-code-points");
const code_points_data_1 = __importDefault(require("./code-points-data"));
const codePoints = (0, memory_code_points_1.createMemoryCodePoints)(code_points_data_1.default);
function saslprep(input, opts) {
    return (0, index_1.default)(codePoints, input, opts);
}
saslprep.saslprep = saslprep;
saslprep.default = saslprep;
module.exports = saslprep;
//# sourceMappingURL=node.js.map