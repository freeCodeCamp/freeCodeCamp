"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeof_1 = __importDefault(require("./typeof"));
const instanceof_1 = __importDefault(require("./instanceof"));
const range_1 = __importDefault(require("./range"));
const exclusiveRange_1 = __importDefault(require("./exclusiveRange"));
const regexp_1 = __importDefault(require("./regexp"));
const transform_1 = __importDefault(require("./transform"));
const uniqueItemProperties_1 = __importDefault(require("./uniqueItemProperties"));
const allRequired_1 = __importDefault(require("./allRequired"));
const anyRequired_1 = __importDefault(require("./anyRequired"));
const oneRequired_1 = __importDefault(require("./oneRequired"));
const patternRequired_1 = __importDefault(require("./patternRequired"));
const prohibited_1 = __importDefault(require("./prohibited"));
const deepProperties_1 = __importDefault(require("./deepProperties"));
const deepRequired_1 = __importDefault(require("./deepRequired"));
const dynamicDefaults_1 = __importDefault(require("./dynamicDefaults"));
const select_1 = __importDefault(require("./select"));
const definitions = [
    typeof_1.default,
    instanceof_1.default,
    range_1.default,
    exclusiveRange_1.default,
    regexp_1.default,
    transform_1.default,
    uniqueItemProperties_1.default,
    allRequired_1.default,
    anyRequired_1.default,
    oneRequired_1.default,
    patternRequired_1.default,
    prohibited_1.default,
    deepProperties_1.default,
    deepRequired_1.default,
    dynamicDefaults_1.default,
];
function ajvKeywords(opts) {
    return definitions.map((d) => d(opts)).concat((0, select_1.default)(opts));
}
exports.default = ajvKeywords;
module.exports = ajvKeywords;
//# sourceMappingURL=index.js.map