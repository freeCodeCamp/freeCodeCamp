/// <reference types="react" />
import type { Extension } from "@codemirror/state";
import type { KeyBinding } from "@codemirror/view";
import type { CustomLanguage, SandpackInitMode } from "../../types";
import { CodeMirror } from "./CodeMirror";
import type { CodeMirrorRef } from "./CodeMirror";
export type CodeEditorRef = CodeMirrorRef;
export interface CodeEditorProps {
    style?: React.CSSProperties;
    className?: string;
    showTabs?: boolean;
    showLineNumbers?: boolean;
    showInlineErrors?: boolean;
    showRunButton?: boolean;
    wrapContent?: boolean;
    closableTabs?: boolean;
    /**
     * This provides a way to control how some components are going to
     * be initialized on the page. The CodeEditor and the Preview components
     * are quite expensive and might overload the memory usage, so this gives
     * a certain control of when to initialize them.
     */
    initMode?: SandpackInitMode;
    /**
     * CodeMirror extensions for the editor state, which can
     * provide extra features and functionalities to the editor component.
     */
    extensions?: Extension[];
    /**
     * Property to register CodeMirror extension keymap.
     */
    extensionsKeymap?: KeyBinding[];
    /**
     * This disables editing of the editor content by the user.
     */
    readOnly?: boolean;
    /**
     * Controls the visibility of Read-only label, which will only
     * appears when `readOnly` is `true`
     */
    showReadOnly?: boolean;
    /**
     * Provides a way to add custom language modes by supplying a language
     * type, applicable file extensions, and a LanguageSupport instance
     * for that syntax mode
     */
    additionalLanguages?: CustomLanguage[];
}
export { CodeMirror as CodeEditor };
export declare const SandpackCodeEditor: import("react").ForwardRefExoticComponent<CodeEditorProps & import("react").RefAttributes<CodeMirrorRef>>;
