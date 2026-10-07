import { asyncToStringMethod, toStringMethod } from '../../../utils/stringify.js';
import type { ICommand } from '../command/ICommand.js';
/**
 * Wrapper around commands used internally by fast-check to wrap existing commands
 * in order to add them a flag to know whether or not they already have been executed
 */
export declare class CommandWrapper<Model extends object, Real, RunResult, CheckAsync extends boolean> implements ICommand<Model, Real, RunResult, CheckAsync> {
    readonly cmd: ICommand<Model, Real, RunResult, CheckAsync>;
    [toStringMethod]?: () => string;
    [asyncToStringMethod]?: () => Promise<string>;
    hasRan: boolean;
    constructor(cmd: ICommand<Model, Real, RunResult, CheckAsync>);
    check(m: Readonly<Model>): CheckAsync extends false ? boolean : Promise<boolean>;
    run(m: Model, r: Real): RunResult;
    clone(): CommandWrapper<Model, Real, RunResult, CheckAsync>;
    toString(): string;
}
