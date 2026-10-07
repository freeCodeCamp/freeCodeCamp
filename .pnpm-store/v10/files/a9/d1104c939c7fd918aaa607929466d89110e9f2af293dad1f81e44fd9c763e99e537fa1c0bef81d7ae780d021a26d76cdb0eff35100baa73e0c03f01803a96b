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
function createPool(size) {
    let pendingPromises = [];
    const pool = {
        submit(task) {
            return __awaiter(this, void 0, void 0, function* () {
                while (pendingPromises.length >= pool.size) {
                    yield Promise.race(pendingPromises).catch(() => undefined);
                }
                let resolve;
                let reject;
                const taskPromise = new Promise((taskResolve, taskReject) => {
                    resolve = taskResolve;
                    reject = taskReject;
                });
                const donePromise = new Promise((doneResolve) => {
                    task(() => {
                        doneResolve(undefined);
                        pendingPromises = pendingPromises.filter((pendingPromise) => pendingPromise !== donePromise);
                    })
                        .then(resolve)
                        .catch(reject);
                });
                pendingPromises.push(donePromise);
                return taskPromise;
            });
        },
        size,
        get pending() {
            return pendingPromises.length;
        },
    };
    return pool;
}
exports.createPool = createPool;
