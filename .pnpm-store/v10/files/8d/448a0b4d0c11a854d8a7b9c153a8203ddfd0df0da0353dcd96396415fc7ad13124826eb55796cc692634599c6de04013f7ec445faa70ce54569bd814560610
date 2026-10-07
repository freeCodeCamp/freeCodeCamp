import type { ClientOptions, ListenerFunction, SandboxSetup, UnsubscribeFunction } from "../..";
import { SandpackClient } from "../base";
import type { SandpackNodeMessage } from "../node/types";
export declare class SandpackStatic extends SandpackClient {
    private emitter;
    private previewController;
    private files;
    iframe: HTMLIFrameElement;
    selector: string;
    element: Element;
    constructor(selector: string | HTMLIFrameElement, sandboxSetup: SandboxSetup, options?: ClientOptions);
    private injectContentIntoHead;
    private injectProtocolScript;
    private injectExternalResources;
    private injectScriptIntoHead;
    updateSandbox(setup?: SandboxSetup, _isInitializationCompile?: boolean): void;
    private compile;
    private eventListener;
    /**
     * Bundler communication
     */
    dispatch(message: SandpackNodeMessage): void;
    listen(listener: ListenerFunction): UnsubscribeFunction;
    destroy(): void;
}
