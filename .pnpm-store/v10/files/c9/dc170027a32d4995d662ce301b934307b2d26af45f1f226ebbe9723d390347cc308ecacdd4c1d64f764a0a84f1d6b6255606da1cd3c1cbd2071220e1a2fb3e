import type { LanguageSupport } from "@codemirror/language";
import type { BundlerState, ListenerFunction, ReactDevToolsMode, SandpackBundlerFiles, SandpackClient, SandpackError, SandpackMessage, UnsubscribeFunction, SandpackLogLevel, NpmRegistry } from "@codesandbox/sandpack-client";
import type React from "react";
import type { ClientPropsOverride } from "./contexts/utils/useClient";
import type { SANDBOX_TEMPLATES } from "./templates";
import type { CodeEditorProps } from ".";
/**
 * ------------------------ Public documentation ------------------------
 *
 * From this section on, all types are artificially created and maintained
 * for public documentation purposes. So, this might not reflect precisely
 * the component behavior, but it still needs to be reliable and clear for
 * general usage.
 */
export interface SandpackProps {
    /**
     * It accepts an object, where each key is the relative
     * path of that file in the sandbox folder structure. Files passed in
     * through the files prop override those in the template structure.
     *
     * Since each template uses the same type to define the files, you can
     * overwrite the contents of any of the template files.
     *
     * Example:
     * ```js
     * {
     *  "/App.js": "export default () => 'foo'"
     * }
     * ```
     */
    files?: SandpackFiles;
    /**
     * Set of presets to easily initialize sandboxes. Each template contains
     * its files, environment and dependencies, and you can overwrite it
     * using `customSetup` or `dependencies`.
     */
    template?: SandpackPredefinedTemplate;
    /**
     * Pass custom properties to set your own Sandpack environment.
     *
     * Since each template uses the same type to define the files, you can
     * overwrite the contents of any of the template files.
     */
    customSetup?: SandpackSetup;
    /**
     * The theme specifies the color set of the components, syntax highlight,
     * and typography. Use this prop in order to match the design aspect of your website.
     *
     * Set as `auto` to turn it color scheme sensitive
     */
    theme?: SandpackThemeProp;
    /**
     * Pass custom properties to customize the interface and the behavior
     * of the sandbox, such as initialization mode, recompile mode, files resolver, etc.
     */
    options?: SandpackOptions;
    /**
     * CodeSandbox team id: with this information, bundler can connect to CodeSandbox
     * and unlock a few capabilities, like private dependencies.
     */
    teamId?: string;
}
/**
 * @category Setup
 */
export interface SandpackOptions {
    /**
     * List of files that will be visible for the user interacts with.
     * It defaults to the main file from a given template.
     */
    visibleFiles?: string[];
    /**
     * Use this to set a file as active by default in the editor component.
     * It defaults to the main file from a given template.
     */
    activeFile?: string;
    editorWidthPercentage?: number;
    editorHeight?: React.CSSProperties["height"];
    classes?: Record<string, string>;
    /**
     * right to left layout
     * @default false
     */
    rtl?: boolean;
    showNavigator?: boolean;
    showLineNumbers?: boolean;
    showInlineErrors?: boolean;
    showRefreshButton?: boolean;
    showTabs?: boolean;
    showConsoleButton?: boolean;
    showConsole?: boolean;
    closableTabs?: boolean;
    wrapContent?: boolean;
    resizablePanels?: boolean;
    codeEditor?: SandpackCodeOptions;
    /**
     * This disables editing of content by the user in all files.
     */
    readOnly?: boolean;
    /**
     * Controls the visibility of Read-only label, which will only
     * appears when `readOnly` is `true`
     */
    showReadOnly?: boolean;
    layout?: "preview" | "tests" | "console";
    /**
     * This provides a way to control how some components are going to
     * be initialized on the page. The CodeEditor and the Preview components
     * are quite expensive and might overload the memory usage, so this gives
     * a certain control of when to initialize them.
     */
    initMode?: SandpackInitMode;
    initModeObserverOptions?: IntersectionObserverInit;
    /**
     * Determines whether or not the bundling process should start automatically
     *  for a component in Sandpack. By default, when the component gets closer
     *  to the viewport or when the page loads and the component is already in
     *  the viewport, the bundling process will start automatically. However,
     *  if this prop is set to false, the bundling process will only start when
     *  triggered manually by the user.
     */
    autorun?: boolean;
    /**
     * Determines whether or not the component should automatically reload when
     *  changes are made to the code. When this prop is set to true, any changes
     *  made to the code will trigger an automatic reload of the component,
     * allowing the user to see the changes immediately. However, if this prop
     *  is set to false, the component will need to be manually reloaded by the
     *  user to see the changes.
     */
    autoReload?: boolean;
    recompileMode?: "immediate" | "delayed";
    recompileDelay?: number;
    /**
     * By default, Sandpack generates a random value to use as an id.
     * Use this to override this value if you need predictable values.
     */
    id?: string;
    logLevel?: SandpackLogLevel;
    bundlerURL?: string;
    startRoute?: string;
    skipEval?: boolean;
    fileResolver?: FileResolver;
    externalResources?: string[];
}
/**
 * @category Setup
 */
export interface SandpackSetup {
    /**
     * Any template will include the needed dependencies,
     * but you can specify any additional dependencies. The key
     * should be the name of the package, while the value is the version,
     * in exactly the same format as it would be inside package.json.
     *
     * Examples:
     * ```js
     * {
     *  "react": "latest",
     *  "@material-ui/core": "4.12.3",
     * }
     * ```
     */
    dependencies?: Record<string, string>;
    /**
     * Sandpack doesn't install devDependencies, because most tools in there
     * were build tools, which is not necessary to properly run a sandbox,
     * but maybe required for running locally or export to CodeSandbox.
     *
     * Examples:
     * ```js
     * {
     *  "@types/react": "latest",
     * }
     * ```
     */
    devDependencies?: Record<string, string>;
    /**
     * The entry file is the starting point of the bundle process.
     *
     * If you change the path of the entry file, make sure you control
     * all the files that go into the bundle process, as prexisting
     * settings in the template might not work anymore.
     */
    entry?: string;
    /**
     * Each sandbox has its own bundler attached to them which are configured
     * to support a specific framework and emulate their official CLI tools.
     * They are not one-to-one implementations and thus do not support advanced
     * configuration like custom webpack configurations or ejecting. However,
     * they are designed to mirror the default behavior of the framework
     */
    environment?: SandboxEnvironment;
    /**
     * The custom private npm registry setting makes it possible
     * to retrieve npm packages from your own npm registry.
     *
     * Examples:
     * ```js
     * {
     *   enabledScopes: ["@codesandbox"],
     *   registryUrl: "//my-registry.domain.com",
     *   limitToScopes: true, // if false all packages will be fetched from custom registry
     *   registryAuthToken: "SECRET" // optional value, if public
     * }
     * ```
     */
    npmRegistries?: NpmRegistry[];
    exportOptions?: SandpackExportOptions;
}
interface SandpackExportOptions {
    /**
     * Workspace API key from codesandbox.io/t/permissions.
     * When set, the sandbox will be create inside the given workspace id.
     */
    apiToken: string;
    /**
     * The default visibility of the new sandboxes inside the workspace.
     *
     * @note Use `private` if there is a private registry or private NPM
     * configured in your workspace.
     */
    privacy: "private" | "public";
}
/**
 * @category Setup
 */
export type SandboxEnvironment = "angular-cli" | "create-react-app" | "create-react-app-typescript" | "svelte" | "parcel" | "vue-cli" | "static" | "solid" | "node";
/**
 * @category Setup
 */
export type SandpackPredefinedTemplate = keyof typeof SANDBOX_TEMPLATES;
/**
 * @category Setup
 */
export interface SandpackFile {
    code: string;
    hidden?: boolean;
    active?: boolean;
    readOnly?: boolean;
}
/**
 * `immediate`: It immediately mounts all components, such as the code-editor
 * and the preview - this option might overload the memory usage
 * and resource from the browser on a page with multiple instances;
 *
 * `lazy`: Only initialize the components when the user is about to scroll
 * them to the viewport and keep these components mounted until the user
 * leaves the page - this is the default value;
 *
 * `user-visible`: Only initialize the components when the user is about
 * to scroll them to the viewport, but differently from lazy, this option
 * unmounts those components once it's no longer in the viewport.
 *
 * @category Setup
 */
export type SandpackInitMode = "immediate" | "lazy" | "user-visible";
/**
 * @category Setup
 */
export interface CustomLanguage {
    name: string;
    extensions: string[];
    language: LanguageSupport;
}
/**
 * @category Theme
 */
export type SandpackPredefinedTheme = "light" | "dark" | "auto";
/**
 * @category Theme
 */
export interface SandpackTheme {
    colors: {
        surface1: string;
        surface2: string;
        surface3: string;
        disabled: string;
        base: string;
        clickable: string;
        hover: string;
        accent: string;
        error?: string;
        errorSurface?: string;
        warning?: string;
        warningSurface?: string;
    };
    syntax: {
        plain: string | SandpackSyntaxStyle;
        comment: string | SandpackSyntaxStyle;
        keyword: string | SandpackSyntaxStyle;
        definition: string | SandpackSyntaxStyle;
        punctuation: string | SandpackSyntaxStyle;
        property: string | SandpackSyntaxStyle;
        tag: string | SandpackSyntaxStyle;
        static: string | SandpackSyntaxStyle;
        string?: string | SandpackSyntaxStyle;
    };
    font: {
        body: string;
        mono: string;
        size: string;
        lineHeight: string;
    };
}
/**
 * @category Theme
 */
interface SandpackSyntaxStyle {
    color?: string;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    textDecoration?: "none" | "underline" | "line-through" | "underline line-through";
}
/**
 * @category Theme
 */
export type SandpackThemeProp = SandpackPredefinedTheme | DeepPartial<SandpackTheme>;
/**
 *
 * ------------------------ Internal types ---------------------------
 *
 * From this section on, all types are hidden because most of them are
 * strictly related to the internal typing system, and they are not
 * helpful for public documentation.
 *
 * For public purpose use SandpackProps instead.
 */
export type TemplateFiles<Name extends SandpackPredefinedTemplate> = keyof typeof SANDBOX_TEMPLATES[Name]["files"];
export interface SandpackInternal {
    <Files extends SandpackFiles | any, TemplateName extends SandpackPredefinedTemplate = "vanilla">(props: SandpackInternalProps<Files, TemplateName> & {
        files?: Files;
        template?: TemplateName;
    }): JSX.Element;
}
export interface SandpackInternalProvider {
    <Files extends SandpackFiles, TemplateName extends SandpackPredefinedTemplate>(
    /**
     * Infer files & template values
     */
    props: React.PropsWithChildren<SandpackProviderProps<Files, TemplateName> & {
        files?: Files;
        template?: TemplateName;
    }>): React.ReactElement<SandpackProviderProps, React.Provider<SandpackProviderState>> | null;
}
interface SandpackRootProps<Files extends SandpackFiles | any, TemplateName extends SandpackPredefinedTemplate> {
    files?: Files;
    template?: TemplateName;
    customSetup?: SandpackSetup;
    theme?: SandpackThemeProp;
    teamId?: string;
    sandboxId?: string;
}
export interface SandpackInternalOptions<Files extends SandpackFiles | any = any, TemplateName extends SandpackPredefinedTemplate = SandpackPredefinedTemplate> {
    visibleFiles?: Array<Files extends SandpackFiles ? TemplateFiles<TemplateName> | keyof Files : TemplateFiles<TemplateName>>;
    activeFile?: Files extends SandpackFiles ? TemplateFiles<TemplateName> | keyof Files : TemplateFiles<TemplateName>;
    initMode?: SandpackInitMode;
    initModeObserverOptions?: IntersectionObserverInit;
    autorun?: boolean;
    autoReload?: boolean;
    recompileMode?: "immediate" | "delayed";
    recompileDelay?: number;
    id?: string;
    logLevel?: SandpackLogLevel;
    bundlerURL?: string;
    bundlerTimeOut?: number;
    startRoute?: string;
    skipEval?: boolean;
    fileResolver?: FileResolver;
    externalResources?: string[];
    classes?: Record<string, string>;
    experimental_enableServiceWorker?: boolean;
    experimental_enableStableServiceWorkerId?: boolean;
}
interface SandpackInternalProps<Files extends SandpackFiles | any, TemplateName extends SandpackPredefinedTemplate> extends SandpackRootProps<Files, TemplateName> {
    options?: SandpackInternalOptions<Files, TemplateName> & {
        editorWidthPercentage?: number;
        editorHeight?: React.CSSProperties["height"];
        /**
         * right to left layout
         * @default false
         */
        rtl?: boolean;
        showNavigator?: boolean;
        showLineNumbers?: boolean;
        showInlineErrors?: boolean;
        showRefreshButton?: boolean;
        showTabs?: boolean;
        showConsoleButton?: boolean;
        showConsole?: boolean;
        closableTabs?: boolean;
        wrapContent?: boolean;
        resizablePanels?: boolean;
        codeEditor?: SandpackCodeOptions;
        /**
         * This disables editing of content by the user in all files.
         */
        readOnly?: boolean;
        /**
         * Controls the visibility of Read-only label, which will only
         * appears when `readOnly` is `true`
         */
        showReadOnly?: boolean;
        layout?: "preview" | "tests" | "console";
    };
}
export interface SandpackProviderProps<Files extends SandpackFiles = SandpackFiles, TemplateName extends SandpackPredefinedTemplate = SandpackPredefinedTemplate> extends SandpackRootProps<Files, TemplateName>, React.HTMLAttributes<HTMLDivElement> {
    options?: SandpackInternalOptions<Files, TemplateName>;
    children?: React.ReactNode;
}
export type SandpackClientDispatch = (msg: SandpackMessage, clientId?: string) => void;
export type SandpackClientListen = (listener: ListenerFunction, clientId?: string) => UnsubscribeFunction;
export type SandpackContext = SandpackState & {
    dispatch: SandpackClientDispatch;
    listen: SandpackClientListen;
};
export interface SandpackState {
    bundlerState: BundlerState | undefined;
    /**
     * List the file path listed in the file tab,
     * which will allow the user to interact with.
     */
    visibleFiles: string[];
    /**
     * List the file path listed in the file tab,
     * Can only be changed through the properties of SandpackProvider (files/options)
     *
     * @internal
     */
    visibleFilesFromProps: string[];
    /**
     * Path to the file will be open in the code editor
     * when the component mounts
     */
    activeFile: string;
    startRoute?: string;
    autoReload: boolean;
    /**
     * Returns the current state of the editor, meaning that any
     * changes from the original `files` must return a `dirty` value;
     * otherwise, it'll return `pristine`
     */
    editorState: EditorState;
    teamId?: string;
    exportOptions?: SandpackExportOptions;
    error: SandpackError | null;
    files: SandpackBundlerFiles;
    environment?: SandboxEnvironment;
    status: SandpackStatus;
    initMode: SandpackInitMode;
    clients: Record<string, InstanceType<typeof SandpackClient>>;
    runSandpack: () => Promise<void>;
    registerBundler: (iframe: HTMLIFrameElement, clientId: string, clientPropsOverride?: ClientPropsOverride) => Promise<void>;
    unregisterBundler: (clientId: string) => void;
    updateFile: (pathOrFiles: string | SandpackFiles, code?: string, shouldUpdatePreview?: boolean) => void;
    addFile: (pathOrFiles: string | SandpackFiles, code?: string, shouldUpdatePreview?: boolean) => void;
    updateCurrentFile: (newCode: string, shouldUpdatePreview?: boolean) => void;
    openFile: (path: string) => void;
    closeFile: (path: string) => void;
    deleteFile: (path: string, shouldUpdatePreview?: boolean) => void;
    setActiveFile: (path: string) => void;
    resetFile: (path: string) => void;
    resetAllFiles: () => void;
    registerReactDevTools: (value: ReactDevToolsMode) => void;
    /**
     * Element refs
     * Different components inside the SandpackProvider might register certain elements of interest for sandpack
     * eg: lazy anchor - if no component registers this, then the sandpack runs on mount, without lazy mode
     */
    lazyAnchorRef: React.RefObject<HTMLDivElement>;
    unsubscribeClientListenersRef: React.MutableRefObject<Record<string, Record<string, UnsubscribeFunction>>>;
    queuedListenersRef: React.MutableRefObject<Record<string, Record<string, ListenerFunction>>>;
}
export type SandpackStatus = "initial" | "idle" | "running" | "timeout" | "done";
export type EditorState = "pristine" | "dirty";
export interface SandboxTemplate {
    files: SandpackBundlerFiles;
    dependencies: Record<string, string>;
    devDependencies?: Record<string, string>;
    entry?: string;
    main: string;
    environment: SandboxEnvironment;
}
export type SandpackFiles = Record<string, string | SandpackFile>;
/**
 * Custom properties to be used in the SandpackCodeEditor component,
 * some of which are exclusive to customize the CodeMirror instance.
 * @hidden
 */
export interface SandpackCodeOptions {
    /**
     * CodeMirror extensions for the editor state, which can
     * provide extra features and functionalities to the editor component.
     */
    extensions?: CodeEditorProps["extensions"];
    /**
     * Property to register CodeMirror extension keymap.
     */
    extensionsKeymap?: CodeEditorProps["extensionsKeymap"];
    /**
     * Provides a way to add custom language modes by supplying a language
     * type, applicable file extensions, and a LanguageSupport instance
     * for that syntax mode
     */
    additionalLanguages?: CodeEditorProps["additionalLanguages"];
}
export type DeepPartial<Type> = {
    [Property in keyof Type]?: DeepPartial<Type[Property]>;
};
export interface FileResolver {
    isFile: (path: string) => Promise<boolean>;
    readFile: (path: string) => Promise<string>;
}
export interface SandpackProviderState {
    files: SandpackBundlerFiles;
    environment?: SandboxEnvironment;
    visibleFiles: Array<TemplateFiles<SandpackPredefinedTemplate> | string>;
    visibleFilesFromProps: Array<TemplateFiles<SandpackPredefinedTemplate> | string>;
    activeFile: TemplateFiles<SandpackPredefinedTemplate> | string;
    startRoute?: string;
    initMode: SandpackInitMode;
    bundlerState?: BundlerState;
    error: SandpackError | null;
    sandpackStatus: SandpackStatus;
    editorState: EditorState;
    reactDevTools?: ReactDevToolsMode;
}
export {};
