"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const EsLintReporter_1 = require("./EsLintReporter");
const reporter_1 = require("../../reporter");
const rpc_ipc_1 = require("../../rpc/rpc-ipc");
const service = reporter_1.registerReporterRpcService(rpc_ipc_1.createRpcIpcMessagePort(process_1.default), EsLintReporter_1.createEsLintReporter);
service.open();
