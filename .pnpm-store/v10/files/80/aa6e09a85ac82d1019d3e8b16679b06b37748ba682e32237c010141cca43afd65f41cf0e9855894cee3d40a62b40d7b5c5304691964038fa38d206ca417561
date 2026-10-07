type AnyFunction = (...args: any[]) => any;
/**
 * Designed to approximate the behavior on `experimental_useEffectEvent` as best
 * as possible until its stable release, and back-fill it as a shim as needed.
 */
declare function useEffectEvent<T extends AnyFunction>(callback?: T): T;

export { useEffectEvent };
