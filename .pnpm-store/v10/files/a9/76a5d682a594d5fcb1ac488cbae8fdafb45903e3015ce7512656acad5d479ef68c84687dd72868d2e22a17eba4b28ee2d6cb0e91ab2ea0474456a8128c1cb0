import { readdir, readFile } from 'node:fs';
import type { AppContext, Contexts, DeviceContext } from '@sentry/core';
export declare const readFileAsync: typeof readFile.__promisify__;
export declare const readDirAsync: typeof readdir.__promisify__;
interface DeviceContextOptions {
    cpu?: boolean;
    memory?: boolean;
}
interface ContextOptions {
    app?: boolean;
    os?: boolean;
    device?: DeviceContextOptions | boolean;
    culture?: boolean;
    cloudResource?: boolean;
}
/**
 * Capture context about the environment and the device that the client is running on, to events.
 */
export declare const nodeContextIntegration: (options?: ContextOptions | undefined) => import("@sentry/core").Integration;
export declare function contextsToSpanAttributes(contexts: Contexts): Record<string, unknown>;
export declare function getDynamicSpanAttributes(appContext: AppContext | undefined, deviceContext: DeviceContext | undefined): Record<string, unknown>;
/**
 * Get app context information from process
 */
export declare function getAppContext(): AppContext;
/**
 * Gets device information from os
 */
export declare function getDeviceContext(deviceOpt: DeviceContextOptions | true): DeviceContext;
export {};
//# sourceMappingURL=context.d.ts.map