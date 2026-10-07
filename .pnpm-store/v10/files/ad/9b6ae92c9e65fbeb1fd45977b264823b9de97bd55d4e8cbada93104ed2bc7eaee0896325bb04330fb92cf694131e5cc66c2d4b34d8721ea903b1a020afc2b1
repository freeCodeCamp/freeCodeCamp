import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TFromType } from './from_type.mjs';
import { type TCyclicTarget } from '../cyclic/target.mjs';
export type TFromCyclic<Defs extends TProperties, Ref extends string, Target extends TSchema = TCyclicTarget<Defs, Ref>, Result extends string[] = TFromType<Target>> = Result;
export declare function FromCyclic<Defs extends TProperties, Ref extends string>(defs: Defs, ref: Ref): TFromCyclic<Defs, Ref>;
