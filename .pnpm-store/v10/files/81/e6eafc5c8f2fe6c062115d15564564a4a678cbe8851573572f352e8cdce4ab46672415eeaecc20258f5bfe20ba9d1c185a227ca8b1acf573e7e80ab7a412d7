import type { ClientOptions, ListenerFunction, SandboxSetup, UnsubscribeFunction } from "../..";
import { SandpackClient } from "../base";
import type { SandpackNodeMessage } from "./types";
export declare class SandpackNode extends SandpackClient {
    private emitter;
    private emulatorIframe;
    private emulator;
    private emulatorShellProcess;
    private emulatorCommand;
    private iframePreviewUrl;
    private _modulesCache;
    private messageChannelId;
    iframe: HTMLIFrameElement;
    private _initPromise;
    constructor(selector: string | HTMLIFrameElement, sandboxInfo: SandboxSetup, options?: ClientOptions);
    private _init;
    /**
     * It initializes the emulator and provide it with files, template and script to run
     */
    private compile;
    /**
     * It creates a new shell and run the starting task
     */
    private createShellProcessFromTask;
    private createPreviewURLFromId;
    /**
     * Nodebox needs to handle two types of iframes at the same time:
     *
     * 1. Runtime iframe: where the emulator process runs, which is responsible
     *    for creating the other iframes (hidden);
     * 2. Preview iframes: any other node process that contains a PORT (public);
     */
    private manageIframes;
    private setLocationURLIntoIFrame;
    /**
     * Send all messages and events to tell to the
     * consumer that the bundler is ready without any error
     */
    private dispatchDoneMessage;
    private globalListeners;
    /**
     * PUBLIC Methods
     */
    restartShellProcess(): Promise<void>;
    updateSandbox(setup: SandboxSetup): void;
    dispatch(message: SandpackNodeMessage): Promise<void>;
    listen(listener: ListenerFunction): UnsubscribeFunction;
    destroy(): void;
}
