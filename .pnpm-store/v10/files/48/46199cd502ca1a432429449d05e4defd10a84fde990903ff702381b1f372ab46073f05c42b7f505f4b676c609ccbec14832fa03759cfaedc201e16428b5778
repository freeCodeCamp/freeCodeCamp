/**
 * We could use NoInfer typescript build-in utility
 * introduced in typescript 5.4, however at the moment of creation
 * the supported ts versions are >=4.8.4 <5.7.0
 * so for the moment we have to stick to this polyfill.
 *
 * @see https://github.com/millsp/ts-toolbelt/blob/master/sources/Function/NoInfer.ts
 */
export type NoInfer<A> = [A][A extends unknown ? 0 : never];
