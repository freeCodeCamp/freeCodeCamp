/**
 * Error type produced whenever a precondition fails
 * @remarks Since 2.2.0
 * @public
 */
export declare class PreconditionFailure extends Error {
    readonly interruptExecution: boolean;
    constructor(interruptExecution?: boolean);
    static isFailure(err: unknown): err is PreconditionFailure;
}
