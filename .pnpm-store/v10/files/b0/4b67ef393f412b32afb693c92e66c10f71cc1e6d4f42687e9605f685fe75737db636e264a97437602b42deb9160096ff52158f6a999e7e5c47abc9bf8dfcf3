export {};

import * as promises from "node:timers/promises";

// Note: The timer function definitions allow a single void-accepting argument
// to be optional in arguments lists. This allows usage such as
// `new Promise(resolve => setTimeout(resolve, ms))` (#54258)
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type MakeVoidParameterOptional<TArgs extends any[]> = [void] extends TArgs ? Partial<TArgs> : TArgs;

declare global {
    function setImmediate<TArgs extends any[]>(
        callback: (...args: TArgs) => void,
        ...args: MakeVoidParameterOptional<TArgs>
    ): NodeJS.Immediate;
    namespace setImmediate {
        import __promisify__ = promises.setImmediate;
        export { __promisify__ };
    }

    function setInterval<TArgs extends any[]>(
        callback: (...args: TArgs) => void,
        delay?: number,
        ...args: MakeVoidParameterOptional<TArgs>
    ): NodeJS.Timeout;

    function setTimeout<TArgs extends any[]>(
        callback: (...args: TArgs) => void,
        delay?: number,
        ...args: MakeVoidParameterOptional<TArgs>
    ): NodeJS.Timeout;
    namespace setTimeout {
        import __promisify__ = promises.setTimeout;
        export { __promisify__ };
    }

    function clearImmediate(immediate: NodeJS.Immediate | undefined): void;

    function clearInterval(timeout: NodeJS.Timeout | string | number | undefined): void;

    function clearTimeout(timeout: NodeJS.Timeout | string | number | undefined): void;

    function queueMicrotask(callback: () => void): void;
}
