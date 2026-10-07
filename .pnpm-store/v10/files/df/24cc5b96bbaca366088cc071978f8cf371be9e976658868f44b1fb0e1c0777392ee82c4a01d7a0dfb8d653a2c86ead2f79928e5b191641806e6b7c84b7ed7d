import type { Client } from '../client';
import type { DebugImage } from './debugMeta';
import type { Integration } from './integration';
import type { MeasurementUnit } from './measurement';
export interface ContinuousProfiler<T extends Client> {
    initialize(client: T): void;
    start(): void;
    stop(): void;
}
export interface ProfilingIntegration<T extends Client = Client> extends Integration {
    _profiler: ContinuousProfiler<T>;
}
export interface Profiler {
    /**
     * Starts the profiler.
     */
    startProfiler(): void;
    /**
     * Stops the profiler.
     */
    stopProfiler(): void;
}
export type ThreadId = string;
export type FrameId = number;
export type StackId = number;
export interface ThreadCpuSample {
    stack_id: StackId;
    thread_id: ThreadId;
    queue_address?: string;
    elapsed_since_start_ns: string;
}
export interface ContinuousThreadCpuSample {
    stack_id: StackId;
    thread_id: ThreadId;
    queue_address?: string;
    timestamp: number;
}
export type ThreadCpuStack = FrameId[];
export type ThreadCpuFrame = {
    function?: string;
    file?: string;
    lineno?: number;
    colno?: number;
    abs_path?: string;
    platform?: string;
    instruction_addr?: string;
    module?: string;
    in_app?: boolean;
};
export interface ThreadCpuProfile {
    samples: ThreadCpuSample[];
    stacks: ThreadCpuStack[];
    frames: ThreadCpuFrame[];
    thread_metadata: Record<ThreadId, {
        name?: string;
        priority?: number;
    }>;
    queue_metadata?: Record<string, {
        label: string;
    }>;
}
export interface ContinuousThreadCpuProfile {
    samples: ContinuousThreadCpuSample[];
    stacks: ThreadCpuStack[];
    frames: ThreadCpuFrame[];
    thread_metadata: Record<ThreadId, {
        name?: string;
        priority?: number;
    }>;
    queue_metadata?: Record<string, {
        label: string;
    }>;
}
interface BaseProfile<T> {
    version: string;
    release: string;
    environment: string;
    platform: string;
    profile: T;
    debug_meta?: {
        images: DebugImage[];
    };
    measurements?: Record<string, {
        unit: MeasurementUnit;
        values: {
            elapsed_since_start_ns: number;
            value: number;
        }[];
    }>;
}
export interface Profile extends BaseProfile<ThreadCpuProfile> {
    event_id: string;
    version: string;
    os: {
        name: string;
        version: string;
        build_number?: string;
    };
    runtime: {
        name: string;
        version: string;
    };
    device: {
        architecture: string;
        is_emulator: boolean;
        locale: string;
        manufacturer: string;
        model: string;
    };
    timestamp: string;
    release: string;
    environment: string;
    platform: string;
    profile: ThreadCpuProfile;
    debug_meta?: {
        images: DebugImage[];
    };
    transaction?: {
        name: string;
        id: string;
        trace_id: string;
        active_thread_id: string;
    };
    transactions?: {
        name: string;
        id: string;
        trace_id: string;
        active_thread_id: string;
        relative_start_ns: string;
        relative_end_ns: string;
    }[];
    measurements?: Record<string, {
        unit: MeasurementUnit;
        values: {
            elapsed_since_start_ns: number;
            value: number;
        }[];
    }>;
}
export interface ProfileChunk extends BaseProfile<ContinuousThreadCpuProfile> {
    chunk_id: string;
    profiler_id: string;
    client_sdk: {
        name: string;
        version: string;
    };
}
export {};
//# sourceMappingURL=profiling.d.ts.map