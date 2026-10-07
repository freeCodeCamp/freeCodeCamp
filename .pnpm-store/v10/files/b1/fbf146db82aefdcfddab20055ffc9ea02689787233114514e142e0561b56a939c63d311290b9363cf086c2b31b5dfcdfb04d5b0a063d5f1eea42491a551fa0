export type RandomSafeContextRunner = <T>(callback: () => T) => T;
/**
 * Simple wrapper that allows SDKs to *secretly* set context wrapper to generate safe random IDs in cache components contexts
 */
export declare function withRandomSafeContext<T>(cb: () => T): T;
/**
 * Identical to Math.random() but wrapped in withRandomSafeContext
 * to ensure safe random number generation in certain contexts (e.g., Next.js Cache Components).
 */
export declare function safeMathRandom(): number;
/**
 * Identical to Date.now() but wrapped in withRandomSafeContext
 * to ensure safe time value generation in certain contexts (e.g., Next.js Cache Components).
 */
export declare function safeDateNow(): number;
//# sourceMappingURL=randomSafeContext.d.ts.map