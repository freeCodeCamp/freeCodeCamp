import type { SandpackBundlerFiles } from "@codesandbox/sandpack-client";
import * as React from "react";
import type { SandpackOptions } from "../../types";
import type { SandpackFileExplorerProp } from ".";
export interface ModuleListProps extends SandpackFileExplorerProp {
    prefixedPath: string;
    files: SandpackBundlerFiles;
    selectFile: (path: string) => void;
    activeFile: NonNullable<SandpackOptions["activeFile"]>;
    depth?: number;
    visibleFiles: NonNullable<SandpackOptions["visibleFiles"]>;
}
export declare const ModuleList: React.FC<ModuleListProps>;
