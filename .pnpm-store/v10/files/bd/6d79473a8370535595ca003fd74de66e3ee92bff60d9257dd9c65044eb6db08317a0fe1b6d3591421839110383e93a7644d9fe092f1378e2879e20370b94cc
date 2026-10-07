import * as React from "react";
import type { SandpackConsoleData } from "./utils/getType";
interface SandpackConsoleProps {
    clientId?: string;
    showHeader?: boolean;
    showSyntaxError?: boolean;
    showSetupProgress?: boolean;
    showRestartButton?: boolean;
    showResetConsoleButton?: boolean;
    maxMessageCount?: number;
    onLogsChange?: (logs: SandpackConsoleData) => void;
    resetOnPreviewRestart?: boolean;
    standalone?: boolean;
    actionsChildren?: JSX.Element;
}
export interface SandpackConsoleRef {
    reset: () => void;
}
/**
 * `SandpackConsole` is a Sandpack devtool that allows printing
 * the console logs from a Sandpack client. It is designed to be
 * a light version of a browser console, which means that it's
 * limited to a set of common use cases you may encounter when coding.
 */
export declare const SandpackConsole: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & SandpackConsoleProps & React.RefAttributes<SandpackConsoleRef>>;
export {};
