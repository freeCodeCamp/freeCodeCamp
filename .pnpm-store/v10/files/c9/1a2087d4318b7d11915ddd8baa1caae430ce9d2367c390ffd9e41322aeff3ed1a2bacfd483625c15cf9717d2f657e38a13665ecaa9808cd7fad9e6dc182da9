import { NotEmptyArray } from './common-types';
export declare function parseCommand(cmd: string): ParsedCommand;
export interface ParsedCommand {
    cmd: string;
    demanded: Positional[];
    optional: Positional[];
}
export interface Positional {
    cmd: NotEmptyArray<string>;
    variadic: boolean;
}
