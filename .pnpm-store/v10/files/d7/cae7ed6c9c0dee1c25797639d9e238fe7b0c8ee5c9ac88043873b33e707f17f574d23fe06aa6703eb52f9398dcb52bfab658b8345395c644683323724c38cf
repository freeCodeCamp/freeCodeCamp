import type { ClientStatus } from "..";
import type { ClientOptions, SandboxSetup, ListenerFunction, SandpackMessage, UnsubscribeFunction } from "../types";
export declare class SandpackClient {
    /**
     * Sandbox configuration: files, setup, customizations;
     */
    sandboxSetup: SandboxSetup;
    options: ClientOptions;
    /**
     * DOM bindings
     */
    iframe: HTMLIFrameElement;
    iframeSelector: string | HTMLIFrameElement;
    status: ClientStatus;
    constructor(iframeSelector: string | HTMLIFrameElement, sandboxSetup: SandboxSetup, options?: ClientOptions);
    /**
     * Clients handles
     */
    updateOptions(options: ClientOptions): void;
    updateSandbox(_sandboxSetup?: SandboxSetup, _isInitializationCompile?: boolean): void;
    destroy(): void;
    /**
     * Bundler communication
     */
    dispatch(_message: SandpackMessage): void;
    listen(_listener: ListenerFunction): UnsubscribeFunction;
}
