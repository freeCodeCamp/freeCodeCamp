type ArgType = "boolean" | "string" | "positional" | undefined;
type _ArgDef<T extends ArgType, VT extends boolean | string> = {
    type?: T;
    description?: string;
    valueHint?: string;
    alias?: string | string[];
    default?: VT;
    required?: boolean;
};
type BooleanArgDef = _ArgDef<"boolean", boolean>;
type StringArgDef = _ArgDef<"string", string>;
type PositionalArgDef = Omit<_ArgDef<"positional", string>, "alias">;
type ArgDef = BooleanArgDef | StringArgDef | PositionalArgDef;
type ArgsDef = Record<string, ArgDef>;
type Arg = ArgDef & {
    name: string;
    alias: string[];
};
type ParsedArgs<T extends ArgsDef = ArgsDef> = {
    _: string[];
} & Record<{
    [K in keyof T]: T[K] extends {
        type: "positional";
    } ? K : never;
}[keyof T], string> & Record<{
    [K in keyof T]: T[K] extends {
        type: "string";
    } ? K : never;
}[keyof T], string> & Record<{
    [K in keyof T]: T[K] extends {
        type: "boolean";
    } ? K : never;
}[keyof T], boolean> & Record<string, string | boolean | string[]>;
interface CommandMeta {
    name?: string;
    version?: string;
    description?: string;
}
type SubCommandsDef = Record<string, Resolvable<CommandDef<any>>>;
type CommandDef<T extends ArgsDef = ArgsDef> = {
    meta?: Resolvable<CommandMeta>;
    args?: Resolvable<T>;
    subCommands?: Resolvable<SubCommandsDef>;
    setup?: (context: CommandContext<T>) => any | Promise<any>;
    cleanup?: (context: CommandContext<T>) => any | Promise<any>;
    run?: (context: CommandContext<T>) => any | Promise<any>;
};
type CommandContext<T extends ArgsDef = ArgsDef> = {
    rawArgs: string[];
    args: ParsedArgs<T>;
    cmd: CommandDef<T>;
    subCommand?: CommandDef<T>;
    data?: any;
};
type Awaitable<T> = () => T | Promise<T>;
type Resolvable<T> = T | Promise<T> | (() => T) | (() => Promise<T>);

declare function defineCommand<T extends ArgsDef = ArgsDef>(def: CommandDef<T>): CommandDef<T>;
interface RunCommandOptions {
    rawArgs: string[];
    data?: any;
    showUsage?: boolean;
}
declare function runCommand<T extends ArgsDef = ArgsDef>(cmd: CommandDef<T>, opts: RunCommandOptions): Promise<{
    result: unknown;
}>;

declare function showUsage<T extends ArgsDef = ArgsDef>(cmd: CommandDef<T>, parent?: CommandDef<T>): Promise<void>;
declare function renderUsage<T extends ArgsDef = ArgsDef>(cmd: CommandDef<T>, parent?: CommandDef<T>): Promise<string>;

interface RunMainOptions {
    rawArgs?: string[];
    showUsage?: typeof showUsage;
}
declare function runMain<T extends ArgsDef = ArgsDef>(cmd: CommandDef<T>, opts?: RunMainOptions): Promise<void>;
declare function createMain<T extends ArgsDef = ArgsDef>(cmd: CommandDef<T>): (opts?: RunMainOptions) => Promise<void>;

declare function parseArgs<T extends ArgsDef = ArgsDef>(rawArgs: string[], argsDef: ArgsDef): ParsedArgs<T>;

export { type Arg, type ArgDef, type ArgType, type ArgsDef, type Awaitable, type BooleanArgDef, type CommandContext, type CommandDef, type CommandMeta, type ParsedArgs, type PositionalArgDef, type Resolvable, type RunCommandOptions, type RunMainOptions, type StringArgDef, type SubCommandsDef, type _ArgDef, createMain, defineCommand, parseArgs, renderUsage, runCommand, runMain, showUsage };
