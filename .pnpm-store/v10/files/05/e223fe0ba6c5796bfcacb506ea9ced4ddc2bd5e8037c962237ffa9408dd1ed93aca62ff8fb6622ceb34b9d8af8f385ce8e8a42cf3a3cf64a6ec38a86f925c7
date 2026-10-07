/**
 * The type of a function that can be converted to FP.
 */
export type FPFnInput = (...args: any[]) => any;
/**
 * The supported arity type.
 */
export type FPArity = 1 | 2 | 3 | 4;
/**
 * FP function interface. It infers the arity of the function and returns the
 * corresponding FP function interface.
 */
export type FPFn<Fn extends FPFnInput, Arity extends FPArity> = Arity extends 4
  ? FPFn4<
      ReturnType<Fn>,
      Parameters<Fn>[3],
      Parameters<Fn>[2],
      Parameters<Fn>[1],
      Parameters<Fn>[0]
    >
  : Arity extends 3
    ? FPFn3<
        ReturnType<Fn>,
        Parameters<Fn>[2],
        Parameters<Fn>[1],
        Parameters<Fn>[0]
      >
    : Arity extends 2
      ? FPFn2<ReturnType<Fn>, Parameters<Fn>[1], Parameters<Fn>[0]>
      : Arity extends 1
        ? FPFn1<ReturnType<Fn>, Parameters<Fn>[0]>
        : never;
/**
 * FP function interface with 1 arguments.
 */
export interface FPFn1<Result, Arg> {
  /**
   * Curried version of the function. Returns itself.
   */
  (): FPFn1<Result, Arg>;
  /**
   * Returns the result of the function call.
   */
  (arg: Arg): Result;
}
/**
 * FP function interface with 2 arguments.
 */
export interface FPFn2<Result, Arg2, Arg1> {
  /**
   * Curried version of the function. Returns itself.
   */
  (): FPFn2<Result, Arg2, Arg1>;
  /**
   * Curried version of the function. Returns a function that accepts the rest
   * arguments.
   */
  (arg2: Arg2): FPFn1<Result, Arg1>;
  /**
   * Returns the result of the function call.
   */
  (arg2: Arg2, arg1: Arg1): Result;
}
/**
 * FP function interface with 3 arguments.
 */
export interface FPFn3<Result, Arg3, Arg2, Arg1> {
  /**
   * Curried version of the function. Returns itself.
   */
  (): FPFn3<Result, Arg3, Arg2, Arg1>;
  /**
   * Curried version of the function. Returns a function that accepts the rest
   * arguments.
   */
  (arg3: Arg3): FPFn2<Result, Arg2, Arg1>;
  /**
   * Curried version of the function. Returns a function that accepts the rest
   * arguments.
   */
  (arg3: Arg3, arg2: Arg2): FPFn1<Result, Arg1>;
  /**
   * Returns the result of the function call.
   */
  (arg3: Arg3, arg2: Arg2, arg1: Arg1): Result;
}
/**
 * FP function interface with 4 arguments.
 */
export interface FPFn4<Result, Arg4, Arg3, Arg2, Arg1> {
  /**
   * Curried version of the function. Returns itself.
   */
  (): FPFn4<Result, Arg4, Arg3, Arg2, Arg1>;
  /**
   * Curried version of the function. Returns a function that accepts the rest
   * arguments.
   */
  (arg4: Arg4): FPFn3<Result, Arg3, Arg2, Arg1>;
  /**
   * Curried version of the function. Returns a function that accepts the rest
   * arguments.
   */
  (arg4: Arg4, arg3: Arg3): FPFn2<Result, Arg2, Arg1>;
  /**
   * Curried version of the function. Returns a function that accepts the rest
   * arguments.
   */
  (arg4: Arg4, arg3: Arg3, arg2: Arg2): FPFn1<Result, Arg1>;
  /**
   * Returns the result of the function call.
   */
  (arg4: Arg4, arg3: Arg3, arg2: Arg2, arg1: Arg1): Result;
}
