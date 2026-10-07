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
Object.defineProperty(exports, "__esModule", { value: true });
const OperationCanceledError_1 = require("../error/OperationCanceledError");
const FilesChange_1 = require("./FilesChange");
/**
 * This higher order reporter aggregates too frequent getReport requests to avoid unnecessary computation.
 */
function createAggregatedReporter(reporter) {
    let pendingPromise;
    let queuedIndex = 0;
    let queuedChanges = [];
    const aggregatedReporter = Object.assign(Object.assign({}, reporter), { getReport: (change) => __awaiter(this, void 0, void 0, function* () {
            if (!pendingPromise) {
                let resolvePending;
                pendingPromise = new Promise((resolve) => {
                    resolvePending = () => {
                        resolve();
                        pendingPromise = undefined;
                    };
                });
                return reporter
                    .getReport(change)
                    .then((report) => (Object.assign(Object.assign({}, report), { close() {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield report.close();
                            resolvePending();
                        });
                    } })))
                    .catch((error) => {
                    resolvePending();
                    throw error;
                });
            }
            else {
                const currentIndex = ++queuedIndex;
                queuedChanges.push(change);
                return pendingPromise.then(() => {
                    if (queuedIndex === currentIndex) {
                        const change = FilesChange_1.aggregateFilesChanges(queuedChanges);
                        queuedChanges = [];
                        return aggregatedReporter.getReport(change);
                    }
                    else {
                        throw new OperationCanceledError_1.OperationCanceledError('getReport canceled - new report requested.');
                    }
                });
            }
        }) });
    return aggregatedReporter;
}
exports.createAggregatedReporter = createAggregatedReporter;
