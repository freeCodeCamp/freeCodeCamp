/// <reference types="react" />
import type { BundlerState, ListenerFunction, ReactDevToolsMode, SandpackError, SandpackMessage, UnsubscribeFunction, SandpackClient } from "@codesandbox/sandpack-client";
import type { SandpackInitMode, SandpackProviderProps, SandpackStatus } from "../..";
import type { FilesState } from "./useFiles";
type SandpackClientType = InstanceType<typeof SandpackClient>;
interface SandpackConfigState {
    reactDevTools?: ReactDevToolsMode;
    startRoute?: string;
    initMode: SandpackInitMode;
    bundlerState: BundlerState | undefined;
    error: SandpackError | null;
    status: SandpackStatus;
}
export interface ClientPropsOverride {
    startRoute?: string;
}
export interface UseClientOperations {
    clients: Record<string, SandpackClientType>;
    initializeSandpackIframe: () => void;
    runSandpack: () => Promise<void>;
    unregisterBundler: (clientId: string) => void;
    registerBundler: (iframe: HTMLIFrameElement, clientId: string, clientPropsOverride?: ClientPropsOverride) => Promise<void>;
    registerReactDevTools: (value: ReactDevToolsMode) => void;
    addListener: (listener: ListenerFunction, clientId?: string) => UnsubscribeFunction;
    dispatchMessage: (message: SandpackMessage, clientId?: string) => void;
    lazyAnchorRef: React.RefObject<HTMLDivElement>;
    unsubscribeClientListenersRef: React.MutableRefObject<Record<string, Record<string, UnsubscribeFunction>>>;
    queuedListenersRef: React.MutableRefObject<Record<string, Record<string, ListenerFunction>>>;
}
type UseClient = (props: SandpackProviderProps, filesState: FilesState) => [SandpackConfigState, UseClientOperations];
export declare const useClient: UseClient;
export {};
