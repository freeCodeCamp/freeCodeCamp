import * as React from "react";
import type { Spec } from "./Specs";
export type Status = "initialising" | "idle" | "running" | "complete";
export declare const SandpackTests: React.FC<{
    verbose?: boolean;
    watchMode?: boolean;
    onComplete?: (specs: Record<string, Spec>) => void;
    actionsChildren?: JSX.Element;
    showVerboseButton?: boolean;
    showWatchButton?: boolean;
    /**
     * Hide the tests and supress logs
     * If `true` the tests will be hidden and the logs will be supressed. This is useful when you want to run tests in the background and don't want to show the tests to the user.
     * @default false
     */
    hideTestsAndSupressLogs?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>>;
