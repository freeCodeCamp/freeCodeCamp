"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreconditionFailure = void 0;
class PreconditionFailure extends Error {
    constructor(interruptExecution = false) {
        super();
        this.interruptExecution = interruptExecution;
        this.footprint = PreconditionFailure.SharedFootPrint;
    }
    static isFailure(err) {
        return err != null && err.footprint === PreconditionFailure.SharedFootPrint;
    }
}
exports.PreconditionFailure = PreconditionFailure;
PreconditionFailure.SharedFootPrint = Symbol.for('fast-check/PreconditionFailure');
