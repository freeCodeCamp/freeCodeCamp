import type { TestError } from "@codesandbox/sandpack-client";
import * as React from "react";
import type { Describe } from "./Describes";
import type { Status } from "./SandpackTests";
export type Spec = {
    error?: TestError;
} & Describe;
interface Props {
    specs: Spec[];
    verbose: boolean;
    status: Status;
    openSpec: (name: string) => void;
    hideTestsAndSupressLogs?: boolean;
}
export declare const Specs: React.FC<Props>;
export {};
