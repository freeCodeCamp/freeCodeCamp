import { DefaultEventMap, Emitter } from 'rettime';
import { HandlersController, AnyHandler } from './experimental/handlers-controller.js';

type AnyNetworkFrame = NetworkFrame<string, unknown, any>;
type ExtractFrameEvents<Frame> = Frame extends NetworkFrame<any, any, infer Events> ? Events : never;
interface NetworkFrameResolutionContext {
    baseUrl?: string | URL;
    quiet?: boolean;
}
/**
 * The base for the network frames. Extend this abstract class
 * to implement custom network frames.
 */
declare abstract class NetworkFrame<Protocol extends string, Data, Events extends DefaultEventMap> {
    readonly protocol: Protocol;
    readonly data: Data;
    events: Emitter<Events>;
    constructor(protocol: Protocol, data: Data);
    abstract getHandlers(controller: HandlersController): Array<AnyHandler>;
    /**
     * Resolve the current frame against the given list of handlers.
     * Optionally, use a custom resolution context to control behaviors
     * like `baseUrl`.
     *
     * Returns `true` if the frame was handled, `false` if it wasn't, and `null`
     * if its handling was skipped (e.g. the frame was bypassed).
     */
    abstract resolve(handlers: Array<AnyHandler>, onUnhandledFrame: UnhandledFrameHandle, resolutionContext?: NetworkFrameResolutionContext): Promise<boolean | null>;
    /**
     * Perform this network frame as-is.
     */
    abstract passthrough(): void;
    /**
     * Error the underling network frame.
     * @param reason The reason for the error.
     */
    abstract errorWith(reason?: unknown): void;
    /**
     * Get a message to be used when this frame is unhandled.
     */
    abstract getUnhandledMessage(): Promise<string>;
}

type UnhandledFrameHandle = UnhandledFrameStrategy | UnhandledFrameCallback;
type UnhandledFrameStrategy = 'bypass' | 'warn' | 'error';
type UnhandledFrameCallback = (args: {
    frame: AnyNetworkFrame;
    defaults: UnhandledFrameDefaults;
}) => Promise<void> | void;
type UnhandledFrameDefaults = {
    warn: () => void;
    error: () => void;
};
declare function executeUnhandledFrameHandle(frame: AnyNetworkFrame, handle: UnhandledFrameHandle): Promise<void>;

export { type AnyNetworkFrame as A, type ExtractFrameEvents as E, NetworkFrame as N, type UnhandledFrameCallback as U, type NetworkFrameResolutionContext as a, type UnhandledFrameHandle as b, type UnhandledFrameStrategy as c, type UnhandledFrameDefaults as d, executeUnhandledFrameHandle as e };
