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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodMiniISODuration = exports.ZodMiniISOTime = exports.ZodMiniISODate = exports.ZodMiniISODateTime = void 0;
exports.datetime = datetime;
exports.date = date;
exports.time = time;
exports.duration = duration;
const core = __importStar(require("../core/index.cjs"));
const schemas = __importStar(require("./schemas.cjs"));
exports.ZodMiniISODateTime = core.$constructor("$ZodISODateTime", (inst, def) => {
    core.$ZodISODateTime.init(inst, def);
    schemas.ZodMiniStringFormat.init(inst, def);
});
function datetime(params) {
    return core._isoDateTime(exports.ZodMiniISODateTime, params);
}
exports.ZodMiniISODate = core.$constructor("$ZodISODate", (inst, def) => {
    core.$ZodISODate.init(inst, def);
    schemas.ZodMiniStringFormat.init(inst, def);
});
function date(params) {
    return core._isoDate(exports.ZodMiniISODate, params);
}
exports.ZodMiniISOTime = core.$constructor("$ZodISOTime", (inst, def) => {
    core.$ZodISOTime.init(inst, def);
    schemas.ZodMiniStringFormat.init(inst, def);
});
function time(params) {
    return core._isoTime(exports.ZodMiniISOTime, params);
}
exports.ZodMiniISODuration = core.$constructor("$ZodISODuration", (inst, def) => {
    core.$ZodISODuration.init(inst, def);
    schemas.ZodMiniStringFormat.init(inst, def);
});
function duration(params) {
    return core._isoDuration(exports.ZodMiniISODuration, params);
}
