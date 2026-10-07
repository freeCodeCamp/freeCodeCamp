declare function createError<C extends string, SC extends number, Arg extends unknown[] = [any?, any?, any?]> (
  code: C,
  message: string,
  statusCode: SC,
  Base?: ErrorConstructor
): createError.FastifyErrorConstructor<{ code: C, statusCode: SC }, Arg>

declare function createError<C extends string, Arg extends unknown[] = [any?, any?, any?]> (
  code: C,
  message: string,
  statusCode?: number,
  Base?: ErrorConstructor
): createError.FastifyErrorConstructor<{ code: C }, Arg>

declare function createError<Arg extends unknown[] = [any?, any?, any?]> (
  code: string,
  message: string,
  statusCode?: number,
  Base?: ErrorConstructor
): createError.FastifyErrorConstructor<{ code: string }, Arg>

type CreateError = typeof createError

declare namespace createError {
  export interface FastifyError extends Error {
    code: string
    name: string
    statusCode?: number
  }

  export interface FastifyErrorConstructor<
    E extends { code: string, statusCode?: number } = { code: string, statusCode?: number },
    T extends unknown[] = [any?, any?, any?]
  > {
    new(...arg: T): FastifyError & E
    (...arg: T): FastifyError & E
    readonly prototype: FastifyError & E
  }

  export const createError: CreateError
  export { createError as default }
}

export = createError
