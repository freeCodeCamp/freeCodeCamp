export class PreconditionFailure extends Error {
    constructor(interruptExecution = false) {
        super();
        this.interruptExecution = interruptExecution;
        this.footprint = PreconditionFailure.SharedFootPrint;
    }
    static isFailure(err) {
        return err != null && err.footprint === PreconditionFailure.SharedFootPrint;
    }
}
PreconditionFailure.SharedFootPrint = Symbol.for('fast-check/PreconditionFailure');
