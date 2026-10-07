import * as React from "react";
import type { CustomLanguage, SandpackInitMode } from "../..";
import type { Decorators } from "../CodeEditor/CodeMirror";
export interface CodeViewerProps {
    showTabs?: boolean;
    showLineNumbers?: boolean;
    /**
     * Provides a way to draw or style a piece of the content.
     */
    decorators?: Decorators;
    code?: string;
    wrapContent?: boolean;
    /**
     * This provides a way to control how some components are going to
     * be initialized on the page. The CodeEditor and the Preview components
     * are quite expensive and might overload the memory usage, so this gives
     * a certain control of when to initialize them.
     */
    initMode?: SandpackInitMode;
    /**
     * Provides a way to add custom language modes by supplying a language
     * type, applicable file extensions, and a LanguageSupport instance
     * for that syntax mode
     */
    additionalLanguages?: CustomLanguage[];
}
export declare const SandpackCodeViewer: React.ForwardRefExoticComponent<CodeViewerProps & React.RefAttributes<import("../CodeEditor/CodeMirror").CodeMirrorRef>>;
