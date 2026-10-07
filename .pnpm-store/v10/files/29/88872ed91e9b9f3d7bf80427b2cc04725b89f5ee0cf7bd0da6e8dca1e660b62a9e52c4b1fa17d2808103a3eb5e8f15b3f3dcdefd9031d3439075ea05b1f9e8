import type { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import type { KeyBinding } from "@codemirror/view";
import * as React from "react";
import type { CustomLanguage, EditorState as SandpackEditorState, SandpackInitMode } from "../../types";
export type Decorators = Array<{
    className?: string;
    line: number;
    startColumn?: number;
    endColumn?: number;
    elementAttributes?: Record<string, string>;
}>;
interface CodeMirrorProps {
    code: string;
    filePath?: string;
    fileType?: string;
    onCodeUpdate?: (newCode: string) => void;
    showLineNumbers?: boolean;
    showInlineErrors?: boolean;
    wrapContent?: boolean;
    editorState?: SandpackEditorState;
    /**
     * This disables editing of content by the user in all files.
     */
    readOnly?: boolean;
    /**
     * Controls the visibility of Read-only label, which will only
     * appears when `readOnly` is `true`
     */
    showReadOnly?: boolean;
    /**
     * Provides a way to draw or style a piece of the content.
     */
    decorators?: Decorators;
    initMode: SandpackInitMode;
    extensions?: Extension[];
    extensionsKeymap?: KeyBinding[];
    /**
     * Provides a way to add custom language modes by supplying a language
     * type, applicable file extensions, and a LanguageSupport instance
     * for that syntax mode
     */
    additionalLanguages?: CustomLanguage[];
}
export interface CodeMirrorRef {
    getCodemirror: () => EditorView | undefined;
}
export declare const CodeMirror: React.ForwardRefExoticComponent<CodeMirrorProps & React.RefAttributes<CodeMirrorRef>>;
export {};
