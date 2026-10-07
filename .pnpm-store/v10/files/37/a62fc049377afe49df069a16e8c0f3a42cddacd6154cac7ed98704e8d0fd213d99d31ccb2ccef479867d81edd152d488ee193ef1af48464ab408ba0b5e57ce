import type { PrivateV8CpuProfilerBindings, ProfileFormat, RawChunkCpuProfile, RawThreadCpuProfile, V8CpuProfilerBindings } from './types';
/**
 *  Imports cpp bindings based on the current platform and architecture.
 */
export declare function importCppBindingsModule(): PrivateV8CpuProfilerBindings;
export declare const PrivateCpuProfilerBindings: PrivateV8CpuProfilerBindings;
declare class Bindings implements V8CpuProfilerBindings {
    startProfiling(name: string): void;
    stopProfiling(name: string, format: ProfileFormat.THREAD): RawThreadCpuProfile | null;
    stopProfiling(name: string, format: ProfileFormat.CHUNK): RawChunkCpuProfile | null;
}
export declare const CpuProfilerBindings: Bindings;
export * from './types';
//# sourceMappingURL=index.d.ts.map