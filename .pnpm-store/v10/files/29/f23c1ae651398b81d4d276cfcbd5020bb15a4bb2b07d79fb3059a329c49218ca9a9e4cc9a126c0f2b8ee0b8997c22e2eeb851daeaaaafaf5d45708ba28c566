import type * as STM from "../../STM.js";
import type * as Types from "../../Types.js";
export declare const bind: (<N extends string, K, A, E2, R2>(tag: Exclude<N, keyof K>, f: (_: K) => STM.STM<A, E2, R2>) => <E, R>(self: STM.STM<K, E, R>) => STM.STM<Types.MergeRecord<K, { [k in N]: A; }>, E | E2, R | R2>) & (<K, E, R, N extends string, A, E2, R2>(self: STM.STM<K, E, R>, tag: Exclude<N, keyof K>, f: (_: K) => STM.STM<A, E2, R2>) => STM.STM<Types.MergeRecord<K, { [k in N]: A; }>, E | E2, R | R2>);
export { 
/** @internal */
void_ as void };
//# sourceMappingURL=stm.d.ts.map