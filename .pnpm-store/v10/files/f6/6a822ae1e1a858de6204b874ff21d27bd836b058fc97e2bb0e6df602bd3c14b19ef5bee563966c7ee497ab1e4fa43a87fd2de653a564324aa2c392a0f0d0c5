import { Dictionary } from './common-types';
import { YargsInstance } from './yargs';
import { YError } from './yerror';
import { Y18N } from 'y18n';
export declare function usage(yargs: YargsInstance, y18n: Y18N): UsageInstance;
/** Instance of the usage module. */
export interface UsageInstance {
    cacheHelpMessage(): void;
    clearCachedHelpMessage(): void;
    command(cmd: string, description: string | undefined, isDefault: boolean, aliases: string[], deprecated?: boolean): void;
    deferY18nLookup(str: string): string;
    describe(keys: string | string[] | Dictionary<string>, desc?: string): void;
    epilog(msg: string): void;
    example(cmd: string, description?: string): void;
    fail(msg?: string | null, err?: YError | string): void;
    failFn(f: FailureFunction): void;
    freeze(): void;
    functionDescription(fn: {
        name?: string;
    }): string;
    getCommands(): [string, string, boolean, string[], boolean][];
    getDescriptions(): Dictionary<string | undefined>;
    getPositionalGroupName(): string;
    getUsage(): [string, string][];
    getUsageDisabled(): boolean;
    help(): string;
    reset(localLookup: Dictionary<boolean>): UsageInstance;
    showHelp(level: 'error' | 'log' | ((message: string) => void)): void;
    showHelpOnFail(enabled?: boolean | string, message?: string): UsageInstance;
    showVersion(): void;
    stringifiedValues(values?: any[], separator?: string): string;
    unfreeze(): void;
    usage(msg: string | null, description?: string | false): UsageInstance;
    version(ver: any): void;
    wrap(cols: number | null | undefined): void;
}
export interface FailureFunction {
    (msg: string | undefined | null, err: YError | string | undefined, usage: UsageInstance): void;
}
export interface FrozenUsageInstance {
    failMessage: string | undefined | null;
    failureOutput: boolean;
    usages: [string, string][];
    usageDisabled: boolean;
    epilogs: string[];
    examples: [string, string][];
    commands: [string, string, boolean, string[], boolean][];
    descriptions: Dictionary<string | undefined>;
}
