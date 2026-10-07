import { RootResult } from './result/RootResult';
export type ParseMode = 'closure' | 'jsdoc' | 'typescript';
/**
 * This function parses the given expression in the given mode and produces a {@link RootResult}.
 * @param expression
 * @param mode
 */
export declare function parse(expression: string, mode: ParseMode): RootResult;
/**
 * This function tries to parse the given expression in multiple modes and returns the first successful
 * {@link RootResult}. By default it tries `'typescript'`, `'closure'` and `'jsdoc'` in this order. If
 * no mode was successful it throws the error that was produced by the last parsing attempt.
 * @param expression
 * @param modes
 */
export declare function tryParse(expression: string, modes?: ParseMode[]): RootResult;
