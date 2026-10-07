/// <reference types="node" />
import { Dictionary } from './common-types';
import { Middleware } from './middleware';
import { Positional } from './parse-command';
import { RequireDirectoryOptions } from 'require-directory';
import { UsageInstance } from './usage';
import { ValidationInstance } from './validation';
import { YargsInstance, Options, OptionDefinition, Context, Arguments, DetailedArguments } from './yargs';
export declare function command(yargs: YargsInstance, usage: UsageInstance, validation: ValidationInstance, globalMiddleware?: Middleware[]): CommandInstance;
/** Instance of the command module. */
export interface CommandInstance {
    addDirectory(dir: string, context: Context, req: NodeRequireFunction, callerFile: string, opts?: RequireDirectoryOptions<any>): void;
    addHandler(handler: CommandHandlerDefinition): void;
    addHandler(cmd: string | string[], description: CommandHandler['description'], builder?: CommandBuilderDefinition | CommandBuilder, handler?: CommandHandlerCallback, commandMiddleware?: Middleware[], deprecated?: boolean): void;
    cmdToParseOptions(cmdString: string): Positionals;
    freeze(): void;
    getCommandHandlers(): Dictionary<CommandHandler>;
    getCommands(): string[];
    hasDefaultCommand(): boolean;
    reset(): CommandInstance;
    runCommand(command: string | null, yargs: YargsInstance, parsed: DetailedArguments, commandIndex?: number): Arguments | Promise<Arguments>;
    runDefaultBuilderOn(yargs: YargsInstance): void;
    unfreeze(): void;
}
export interface CommandHandlerDefinition extends Partial<Pick<CommandHandler, 'deprecated' | 'description' | 'handler' | 'middlewares'>> {
    aliases?: string[];
    builder?: CommandBuilder | CommandBuilderDefinition;
    command?: string | string[];
    desc?: CommandHandler['description'];
    describe?: CommandHandler['description'];
}
export declare function isCommandHandlerDefinition(cmd: string | string[] | CommandHandlerDefinition): cmd is CommandHandlerDefinition;
export interface CommandBuilderDefinition {
    builder?: CommandBuilder;
    deprecated?: boolean;
    handler: CommandHandlerCallback;
    middlewares?: Middleware[];
}
export declare function isCommandBuilderDefinition(builder?: CommandBuilder | CommandBuilderDefinition): builder is CommandBuilderDefinition;
export interface CommandHandlerCallback {
    (argv: Arguments): any;
}
export interface CommandHandler {
    builder: CommandBuilder;
    demanded: Positional[];
    deprecated?: boolean;
    description?: string | false;
    handler: CommandHandlerCallback;
    middlewares: Middleware[];
    optional: Positional[];
    original: string;
}
export declare type CommandBuilder = CommandBuilderCallback | Dictionary<OptionDefinition>;
interface CommandBuilderCallback {
    (y: YargsInstance): YargsInstance | void;
}
export declare function isCommandBuilderCallback(builder: CommandBuilder): builder is CommandBuilderCallback;
interface Positionals extends Pick<Options, 'alias' | 'array' | 'default'> {
    demand: Dictionary<boolean>;
}
export interface FinishCommandHandler {
    (handlerResult: any): any;
}
export {};
