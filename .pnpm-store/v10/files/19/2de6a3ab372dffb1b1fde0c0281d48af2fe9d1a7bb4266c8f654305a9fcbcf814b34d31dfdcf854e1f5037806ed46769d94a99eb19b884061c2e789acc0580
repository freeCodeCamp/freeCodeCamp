export type UntilResult<RejectionReason, ResolveData> =
  | [reason: RejectionReason, data: null]
  | [reason: null, data: ResolveData]

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
export async function until<RejectionReason = Error, ResolveData = unknown>(
  callback: () => Promise<ResolveData>,
): Promise<UntilResult<RejectionReason, ResolveData>> {
  try {
    const data = await callback().catch((error) => {
      throw error
    })
    return [null, data]
  } catch (error: any) {
    return [error, null]
  }
}
