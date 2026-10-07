export type UnlockFn = () => Promise<void>;
export declare const createServiceLock: (programPath: string, serviceName: string, content: Record<string, any>) => Promise<UnlockFn | null>;
export declare const getService: <T = Record<string, unknown>>(programPath: string, serviceName: string, ignoreLockfile?: boolean) => Promise<T | null>;
export declare const getServices: (programPath: string) => Promise<any>;
