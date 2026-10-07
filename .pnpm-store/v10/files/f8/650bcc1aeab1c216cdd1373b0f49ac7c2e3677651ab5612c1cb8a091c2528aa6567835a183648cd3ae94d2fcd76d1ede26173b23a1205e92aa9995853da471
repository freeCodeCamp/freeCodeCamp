import { CommandInstance } from './command';
import { UsageInstance } from './usage';
import { YargsInstance } from './yargs';
import { Arguments, DetailedArguments } from 'yargs-parser';
export declare function completion(yargs: YargsInstance, usage: UsageInstance, command: CommandInstance): CompletionInstance;
/** Instance of the completion module. */
export interface CompletionInstance {
    completionKey: string;
    generateCompletionScript($0: string, cmd: string): string;
    getCompletion(args: string[], done: (completions: string[]) => any): any;
    registerFunction(fn: CompletionFunction): void;
    setParsed(parsed: DetailedArguments): void;
}
export declare type CompletionFunction = SyncCompletionFunction | AsyncCompletionFunction;
interface SyncCompletionFunction {
    (current: string, argv: Arguments): string[] | Promise<string[]>;
}
interface AsyncCompletionFunction {
    (current: string, argv: Arguments, done: (completions: string[]) => any): any;
}
export {};
