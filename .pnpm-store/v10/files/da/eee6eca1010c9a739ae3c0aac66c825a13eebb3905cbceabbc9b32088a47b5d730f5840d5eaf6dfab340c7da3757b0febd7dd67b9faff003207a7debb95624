import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TProperties, type TPropertyKeys } from '../../types/properties.mjs';
import { type TCyclicCheck } from './check.mjs';
type TResolveCandidateKeys<Context extends TProperties, Keys extends string[], Result extends string[] = []> = (Keys extends [infer Left extends string, ...infer Right extends string[]] ? Left extends keyof Context ? TCyclicCheck<[Left], Context, Context[Left]> extends true ? TResolveCandidateKeys<Context, Right, [...Result, Left]> : TResolveCandidateKeys<Context, Right, Result> : TUnreachable : Result);
/** Returns keys for context types that need to be transformed to TCyclic. */
export type TCyclicCandidates<Context extends TProperties, Keys extends string[] = TPropertyKeys<Context>, Result extends string[] = TResolveCandidateKeys<Context, Keys>> = Result;
/** Returns keys for context types that need to be transformed to TCyclic. */
export declare function CyclicCandidates<Context extends TProperties>(context: Context): TCyclicCandidates<Context>;
export {};
