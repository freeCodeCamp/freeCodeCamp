import { type TSchema } from '../../types/schema.mjs';
import { type TNever } from '../../types/never.mjs';
import { type TCompare, type TCompareResult, ResultLeftInside, ResultRightInside, ResultEqual } from './compare.mjs';
export type TNarrow<Left extends TSchema, Right extends TSchema, Result extends TCompareResult = TCompare<Left, Right>> = (Result extends typeof ResultLeftInside ? Left : Result extends typeof ResultRightInside ? Right : Result extends typeof ResultEqual ? Right : TNever);
export declare function Narrow<Left extends TSchema, Right extends TSchema>(left: Left, right: Right): TNarrow<Left, Right>;
