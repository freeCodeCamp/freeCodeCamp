import { Span } from '@opentelemetry/api';
import { HandleFunction, NextFunction, Server, Use } from './internal-types';
import { InstrumentationBase, InstrumentationConfig, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
export declare const ANONYMOUS_NAME = "anonymous";
/** Connect instrumentation for OpenTelemetry */
export declare class ConnectInstrumentation extends InstrumentationBase {
    constructor(config?: InstrumentationConfig);
    init(): InstrumentationNodeModuleDefinition[];
    private _patchApp;
    private _patchConstructor;
    _patchNext(next: NextFunction, finishSpan: () => void): NextFunction;
    _startSpan(routeName: string, middleWare: HandleFunction): Span;
    _patchMiddleware(routeName: string, middleWare: HandleFunction): HandleFunction;
    _patchUse(original: Server['use']): Use;
    _patchHandle(original: Server['handle']): Server['handle'];
    _patchOut(out: NextFunction, completeStack: () => void): NextFunction;
}
//# sourceMappingURL=instrumentation.d.ts.map
