import * as api from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import type { FMember, FPMember, CreateHook, EndHook, FsInstrumentationConfig } from './types';
export declare class FsInstrumentation extends InstrumentationBase<FsInstrumentationConfig> {
    constructor(config?: FsInstrumentationConfig);
    init(): (InstrumentationNodeModuleDefinition | InstrumentationNodeModuleDefinition)[];
    protected _patchSyncFunction<T extends (...args: any[]) => ReturnType<T>>(functionName: FMember, original: T): T;
    protected _patchCallbackFunction<T extends (...args: any[]) => ReturnType<T>>(functionName: FMember, original: T): T;
    protected _patchExistsCallbackFunction<T extends (...args: any[]) => ReturnType<T>>(functionName: 'exists', original: T): T;
    protected _patchPromiseFunction<T extends (...args: any[]) => ReturnType<T>>(functionName: FPMember, original: T): T;
    protected _runCreateHook(...args: Parameters<CreateHook>): ReturnType<CreateHook>;
    protected _runEndHook(...args: Parameters<EndHook>): ReturnType<EndHook>;
    protected _shouldTrace(context: api.Context): boolean;
}
//# sourceMappingURL=instrumentation.d.ts.map