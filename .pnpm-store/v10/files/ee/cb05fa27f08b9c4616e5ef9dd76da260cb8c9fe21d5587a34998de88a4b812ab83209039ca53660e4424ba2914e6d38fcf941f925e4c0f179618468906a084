"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNullishAndReport = checkNullishAndReport;
const type_utils_1 = require("@typescript-eslint/type-utils");
const ts_api_utils_1 = require("ts-api-utils");
const ts = __importStar(require("typescript"));
function checkNullishAndReport(context, parserServices, { requireNullish }, maybeNullishNodes, descriptor) {
    if (!requireNullish ||
        maybeNullishNodes.some(node => (0, ts_api_utils_1.unionConstituents)(parserServices.getTypeAtLocation(node)).some(t => (0, type_utils_1.isTypeFlagSet)(t, ts.TypeFlags.Null | ts.TypeFlags.Undefined)))) {
        context.report(descriptor);
    }
}
//# sourceMappingURL=checkNullishAndReport.js.map