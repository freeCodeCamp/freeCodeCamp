"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rpc_1 = require("../../rpc");
const ReporterRpcProcedure_1 = require("./ReporterRpcProcedure");
const flatten_1 = __importDefault(require("../../utils/array/flatten"));
function createReporterRpcClient(channel, configuration) {
    const rpcClient = rpc_1.createRpcClient(channel.clientPort);
    return {
        isConnected: () => channel.isOpen() && rpcClient.isConnected(),
        connect: () => __awaiter(this, void 0, void 0, function* () {
            if (!channel.isOpen()) {
                yield channel.open();
            }
            if (!rpcClient.isConnected()) {
                try {
                    yield rpcClient.connect();
                    yield rpcClient.dispatchCall(ReporterRpcProcedure_1.configure, configuration);
                }
                catch (error) {
                    // connect or configure was not successful -
                    // close the reporter and re-throw an error
                    yield rpcClient.disconnect();
                    yield channel.close();
                    throw error;
                }
            }
        }),
        disconnect: () => __awaiter(this, void 0, void 0, function* () {
            if (rpcClient.isConnected()) {
                yield rpcClient.disconnect();
            }
            if (channel.isOpen()) {
                yield channel.close();
            }
        }),
        getReport: (change) => __awaiter(this, void 0, void 0, function* () {
            const reportId = yield rpcClient.dispatchCall(ReporterRpcProcedure_1.getReport, change);
            return {
                getDependencies() {
                    return rpcClient.dispatchCall(ReporterRpcProcedure_1.getDependencies, reportId);
                },
                getIssues() {
                    return rpcClient.dispatchCall(ReporterRpcProcedure_1.getIssues, reportId);
                },
                close() {
                    return rpcClient.dispatchCall(ReporterRpcProcedure_1.closeReport, reportId);
                },
            };
        }),
    };
}
exports.createReporterRpcClient = createReporterRpcClient;
function composeReporterRpcClients(clients) {
    return {
        isConnected: () => clients.every((client) => client.isConnected()),
        connect: () => Promise.all(clients.map((client) => client.connect())).then(() => undefined),
        disconnect: () => Promise.all(clients.map((client) => client.disconnect())).then(() => undefined),
        getReport: (change) => Promise.all(clients.map((client) => client.getReport(change))).then((reports) => ({
            getDependencies: () => Promise.all(reports.map((report) => report.getDependencies())).then((dependencies) => dependencies.reduce((mergedDependencies, singleDependencies) => ({
                files: Array.from(new Set([...mergedDependencies.files, ...singleDependencies.files])),
                dirs: Array.from(new Set([...mergedDependencies.dirs, ...singleDependencies.dirs])),
                excluded: Array.from(new Set([...mergedDependencies.excluded, ...singleDependencies.excluded])),
                extensions: Array.from(new Set([...mergedDependencies.extensions, ...singleDependencies.extensions])),
            }), { files: [], dirs: [], excluded: [], extensions: [] })),
            getIssues: () => Promise.all(reports.map((report) => report.getIssues())).then((issues) => flatten_1.default(issues)),
            close: () => Promise.all(reports.map((report) => report.close())).then(() => undefined),
        })),
    };
}
exports.composeReporterRpcClients = composeReporterRpcClients;
