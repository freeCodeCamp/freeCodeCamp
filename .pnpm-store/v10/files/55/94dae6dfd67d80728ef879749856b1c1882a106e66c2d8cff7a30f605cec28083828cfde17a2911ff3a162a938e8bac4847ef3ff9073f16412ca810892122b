import { Dictionary } from './common-types';
import { UsageInstance } from './usage';
import { YargsInstance, Arguments } from './yargs';
import { DetailedArguments } from 'yargs-parser';
import { Y18N } from 'y18n';
export declare function validation(yargs: YargsInstance, usage: UsageInstance, y18n: Y18N): ValidationInstance;
/** Instance of the validation module. */
export interface ValidationInstance {
    check(f: CustomCheck['func'], global: boolean): void;
    conflicting(argv: Arguments): void;
    conflicts(key: string | Dictionary<string | string[]>, value?: string | string[]): void;
    customChecks(argv: Arguments, aliases: DetailedArguments['aliases']): void;
    freeze(): void;
    getConflicting(): Dictionary<(string | undefined)[]>;
    getImplied(): Dictionary<KeyOrPos[]>;
    implications(argv: Arguments): void;
    implies(key: string | Dictionary<KeyOrPos | KeyOrPos[]>, value?: KeyOrPos | KeyOrPos[]): void;
    isValidAndSomeAliasIsNotNew(key: string, aliases: DetailedArguments['aliases']): boolean;
    limitedChoices(argv: Arguments): void;
    nonOptionCount(argv: Arguments): void;
    positionalCount(required: number, observed: number): void;
    recommendCommands(cmd: string, potentialCommands: string[]): void;
    requiredArguments(argv: Arguments): void;
    reset(localLookup: Dictionary): ValidationInstance;
    unfreeze(): void;
    unknownArguments(argv: Arguments, aliases: DetailedArguments['aliases'], positionalMap: Dictionary, isDefaultCommand: boolean): void;
    unknownCommands(argv: Arguments): boolean;
}
interface CustomCheck {
    func: (argv: Arguments, aliases: DetailedArguments['aliases']) => any;
    global: boolean;
}
export declare type KeyOrPos = string | number;
export {};
