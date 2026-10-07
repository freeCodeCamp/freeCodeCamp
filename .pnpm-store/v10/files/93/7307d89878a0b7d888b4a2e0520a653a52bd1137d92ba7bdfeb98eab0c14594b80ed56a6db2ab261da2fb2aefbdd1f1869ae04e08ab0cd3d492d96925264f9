import type { SandpackBundlerFiles } from "@codesandbox/sandpack-client";
import type { SandboxEnvironment, SandpackFiles, SandpackPredefinedTemplate, SandpackProviderProps, TemplateFiles } from "../..";
export interface FilesState {
    files: SandpackBundlerFiles;
    environment?: SandboxEnvironment;
    visibleFiles: Array<TemplateFiles<SandpackPredefinedTemplate> | string>;
    activeFile: TemplateFiles<SandpackPredefinedTemplate> | string;
    shouldUpdatePreview: boolean;
}
interface FilesOperations {
    openFile: (path: string) => void;
    resetFile: (path: string) => void;
    resetAllFiles: () => void;
    setActiveFile: (path: string) => void;
    updateCurrentFile: (code: string, shouldUpdatePreview?: boolean) => void;
    updateFile: (pathOrFiles: string | SandpackFiles, code?: string, shouldUpdatePreview?: boolean) => void;
    addFile: (pathOrFiles: string | SandpackFiles, code?: string, shouldUpdatePreview?: boolean) => void;
    closeFile: (path: string) => void;
    deleteFile: (path: string, shouldUpdatePreview?: boolean) => void;
}
export type UseFiles = (props: SandpackProviderProps) => [
    FilesState & {
        visibleFilesFromProps: Array<TemplateFiles<SandpackPredefinedTemplate> | string>;
    },
    FilesOperations
];
export declare const useFiles: UseFiles;
export {};
