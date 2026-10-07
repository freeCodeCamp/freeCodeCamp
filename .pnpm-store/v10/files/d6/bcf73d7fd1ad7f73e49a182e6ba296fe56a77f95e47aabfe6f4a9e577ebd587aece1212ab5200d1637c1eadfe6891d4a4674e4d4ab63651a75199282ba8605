import type { SandpackClient } from "@codesandbox/sandpack-client";
import * as React from "react";
export interface PreviewProps {
    style?: React.CSSProperties;
    showNavigator?: boolean;
    showOpenInCodeSandbox?: boolean;
    showRefreshButton?: boolean;
    showRestartButton?: boolean;
    /**
     * Whether to show the `<ErrorOverlay>` component on top of
     * the preview, if a runtime error happens.
     */
    showSandpackErrorOverlay?: boolean;
    showOpenNewtab?: boolean;
    actionsChildren?: JSX.Element;
    children?: JSX.Element;
    startRoute?: string;
}
export interface SandpackPreviewRef {
    /**
     * Retrieve the current Sandpack client instance from preview
     */
    getClient: () => InstanceType<typeof SandpackClient> | null;
    /**
     * Returns the client id, which will be used to
     * initialize a client in the main Sandpack context
     */
    clientId: string;
}
export declare const SandpackPreview: React.ForwardRefExoticComponent<PreviewProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<SandpackPreviewRef>>;
