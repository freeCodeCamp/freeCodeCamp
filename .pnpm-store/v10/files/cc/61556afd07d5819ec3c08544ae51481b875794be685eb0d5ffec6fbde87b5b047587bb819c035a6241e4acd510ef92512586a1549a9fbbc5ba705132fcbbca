import type { BundlerState, ClientOptions, ListenerFunction, SandboxSetup, SandpackError, UnsubscribeFunction } from "../../types";
import { SandpackClient } from "../base";
import Protocol from "./file-resolver-protocol";
import { IFrameProtocol } from "./iframe-protocol";
import { type SandpackRuntimeMessage } from "./types";
export declare class SandpackRuntime extends SandpackClient {
    fileResolverProtocol?: Protocol;
    bundlerURL: string;
    bundlerState?: BundlerState;
    errors: SandpackError[];
    selector: string;
    element: Element;
    unsubscribeGlobalListener: UnsubscribeFunction;
    unsubscribeChannelListener: UnsubscribeFunction;
    iframeProtocol: IFrameProtocol;
    constructor(selector: string | HTMLIFrameElement, sandboxSetup: SandboxSetup, options?: ClientOptions);
    private createBundlerURL;
    private serviceWorkerHandshake;
    private handleWorkerRequest;
    setLocationURLIntoIFrame(): void;
    destroy(): void;
    updateOptions(options: ClientOptions): void;
    updateSandbox(sandboxSetup?: SandboxSetup, isInitializationCompile?: boolean): void;
    dispatch(message: SandpackRuntimeMessage): void;
    listen(listener: ListenerFunction): UnsubscribeFunction;
    /**
     * Get the URL of the contents of the current sandbox
     */
    getCodeSandboxURL(): Promise<{
        sandboxId: string;
        editorUrl: string;
        embedUrl: string;
    }>;
    getTranspilerContext: () => Promise<Record<string, Record<string, unknown>>>;
    getTranspiledFiles: () => Promise<Array<{
        path: string;
        code: string;
    }>>;
    private getFiles;
    private initializeElement;
}
