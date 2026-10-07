import { cloneMethod } from '../../symbols.js';
import type { CommandWrapper } from './CommandWrapper.js';
/**
 * Iterable datastructure accepted as input for asyncModelRun and modelRun
 */
export declare class CommandsIterable<Model extends object, Real, RunResult, CheckAsync extends boolean = false> implements Iterable<CommandWrapper<Model, Real, RunResult, CheckAsync>> {
    readonly commands: CommandWrapper<Model, Real, RunResult, CheckAsync>[];
    readonly metadataForReplay: () => string;
    constructor(commands: CommandWrapper<Model, Real, RunResult, CheckAsync>[], metadataForReplay: () => string);
    [Symbol.iterator](): Iterator<CommandWrapper<Model, Real, RunResult, CheckAsync>>;
    [cloneMethod](): CommandsIterable<Model, Real, RunResult, CheckAsync>;
    toString(): string;
}
