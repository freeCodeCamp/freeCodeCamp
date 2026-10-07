//#region src/index.d.ts
type UntilResult<RejectionReason, ResolveData> = [reason: RejectionReason, data: null] | [reason: null, data: ResolveData];
/**
 * Gracefully handles a callback that returns a promise.
 *
 * @example
 * await until(() => Promise.resolve(123))
 * // [null, 123]
 *
 * await until(() => Promise.reject(new Error('Oops!')))
 * // [new Error('Oops!'), null]
 */
declare function until<RejectionReason = Error, ResolveData = unknown>(callback: () => Promise<ResolveData>): Promise<UntilResult<RejectionReason, ResolveData>>;
//#endregion
export { UntilResult, until };
//# sourceMappingURL=index.d.ts.map