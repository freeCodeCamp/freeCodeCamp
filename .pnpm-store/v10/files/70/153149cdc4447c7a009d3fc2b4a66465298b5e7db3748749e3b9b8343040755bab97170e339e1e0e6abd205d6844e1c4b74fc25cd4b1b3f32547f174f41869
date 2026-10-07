import { type Instrumentation } from '@opentelemetry/instrumentation';
/** Exported only for tests. */
export declare const INSTRUMENTED: Record<string, Instrumentation>;
export declare function generateInstrumentOnce<Options, InstrumentationClass extends new (...args: any[]) => Instrumentation>(name: string, instrumentationClass: InstrumentationClass, optionsCallback: (options: Options) => ConstructorParameters<InstrumentationClass>[0]): ((options: Options) => InstanceType<InstrumentationClass>) & {
    id: string;
};
export declare function generateInstrumentOnce<Options = unknown, InstrumentationInstance extends Instrumentation = Instrumentation>(name: string, creator: (options?: Options) => InstrumentationInstance): ((options?: Options) => InstrumentationInstance) & {
    id: string;
};
/**
 * Ensure a given callback is called when the instrumentation is actually wrapping something.
 * This can be used to ensure some logic is only called when the instrumentation is actually active.
 *
 * This function returns a function that can be invoked with a callback.
 * This callback will either be invoked immediately
 * (e.g. if the instrumentation was already wrapped, or if _wrap could not be patched),
 * or once the instrumentation is actually wrapping something.
 *
 * Make sure to call this function right after adding the instrumentation, otherwise it may be too late!
 * The returned callback can be used any time, and also multiple times.
 */
export declare function instrumentWhenWrapped<T extends Instrumentation>(instrumentation: T): (callback: () => void) => void;
//# sourceMappingURL=instrument.d.ts.map