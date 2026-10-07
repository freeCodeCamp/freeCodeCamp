import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { ExpressIntegrationOptions, ExpressHandlerOptions } from '@sentry/core';
export { expressErrorHandler } from '@sentry/core';
export declare function setupExpressErrorHandler(app: {
    use: (middleware: any) => unknown;
}, options?: ExpressHandlerOptions): void;
export type ExpressInstrumentationConfig = InstrumentationConfig & Pick<ExpressIntegrationOptions, Exclude<keyof ExpressIntegrationOptions, 'express' | 'onRouteResolved'>>;
export declare const instrumentExpress: ((options?: ExpressInstrumentationConfig | undefined) => ExpressInstrumentation) & {
    id: string;
};
export declare class ExpressInstrumentation extends InstrumentationBase<ExpressInstrumentationConfig> {
    constructor(config?: ExpressInstrumentationConfig);
    init(): InstrumentationNodeModuleDefinition;
}
export declare const expressIntegration: (options?: ExpressInstrumentationConfig | undefined) => import("@sentry/core").Integration;
//# sourceMappingURL=express.d.ts.map
