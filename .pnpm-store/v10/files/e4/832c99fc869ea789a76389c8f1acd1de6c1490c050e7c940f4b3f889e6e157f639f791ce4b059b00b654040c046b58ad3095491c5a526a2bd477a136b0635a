import type { ListenerFunction, SandpackClient, SandpackMessage, UnsubscribeFunction } from "@codesandbox/sandpack-client";
import * as React from "react";
import type { ClientPropsOverride } from "../contexts/utils/useClient";
import type { SandpackState } from "../types";
interface UseSandpackClient {
    sandpack: SandpackState;
    getClient: () => InstanceType<typeof SandpackClient> | null;
    iframe: React.MutableRefObject<HTMLIFrameElement | null>;
    listen: (listener: ListenerFunction) => UnsubscribeFunction;
    dispatch: (message: SandpackMessage) => void;
    clientId: string;
}
/**
 * It registers a new sandpack client and returns its instance,
 * listeners, and dispatch function. Using it when creating a custom
 * component to interact directly with the client is recommended.
 * For other cases, use `useSandpack` instead.
 *
 * @category Hooks
 */
export declare const useSandpackClient: (clientPropsOverride?: ClientPropsOverride) => UseSandpackClient;
export {};
