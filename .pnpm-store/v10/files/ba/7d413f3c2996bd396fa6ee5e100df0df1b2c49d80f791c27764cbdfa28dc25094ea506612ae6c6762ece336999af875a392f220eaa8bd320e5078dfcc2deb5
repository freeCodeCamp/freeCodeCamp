import Tracer from './tracer';

const noopTracer = new Tracer();
let _globalTracer: Tracer | null = null;

// Allows direct importing/requiring of the global tracer:
//
// let globalTracer = require('opentracing/global');
//      OR
// import globalTracer from 'opentracing/global';
//
// Acts a bridge to the global tracer that can be safely called before the
// global tracer is initialized. The purpose of the delegation is to avoid the
// sometimes nearly intractible initialization order problems that can arise in
// applications with a complex set of dependencies, while also avoiding the
// case where
class GlobalTracerDelegate extends Tracer {

    startSpan(): any {
        const tracer = _globalTracer || noopTracer;
        return tracer.startSpan.apply(tracer, arguments);
    }

    inject(): any {
        const tracer = _globalTracer || noopTracer;
        return tracer.inject.apply(tracer, arguments);
    }

    extract(): any {
        const tracer = _globalTracer || noopTracer;
        return tracer.extract.apply(tracer, arguments);
    }
}

const globalTracerDelegate = new GlobalTracerDelegate();

/**
 * Set the global Tracer.
 *
 * The behavior is undefined if this function is called more than once.
 *
 * @param {Tracer} tracer - the Tracer implementation
 */
export function initGlobalTracer(tracer: Tracer): void {
    _globalTracer = tracer;
}

/**
 * Returns the global tracer.
 */
export function globalTracer(): Tracer {
    // Return the delegate.  Since the global tracer is largely a convenience
    // (the user can always create their own tracers), the delegate is used to
    // give the added convenience of not needing to worry about initialization
    // order.
    return globalTracerDelegate;
}
