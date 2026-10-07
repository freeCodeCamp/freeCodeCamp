import { Range, Position, DocumentUri, MarkupContent, MarkupKind, Color, ColorInformation, ColorPresentation, FoldingRange, FoldingRangeKind, SelectionRange, Diagnostic, DiagnosticSeverity, CompletionItem, CompletionItemKind, CompletionList, CompletionItemTag, InsertTextFormat, DefinitionLink, SymbolInformation, SymbolKind, DocumentSymbol, Location, Hover, MarkedString, CodeActionContext, Command, CodeAction, DocumentHighlight, DocumentLink, WorkspaceEdit, TextEdit, CodeActionKind, TextDocumentEdit, VersionedTextDocumentIdentifier, DocumentHighlightKind } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';
export { TextDocument, Range, Position, DocumentUri, MarkupContent, MarkupKind, Color, ColorInformation, ColorPresentation, FoldingRange, FoldingRangeKind, SelectionRange, Diagnostic, DiagnosticSeverity, CompletionItem, CompletionItemKind, CompletionList, CompletionItemTag, InsertTextFormat, DefinitionLink, SymbolInformation, SymbolKind, DocumentSymbol, Location, Hover, MarkedString, CodeActionContext, Command, CodeAction, DocumentHighlight, DocumentLink, WorkspaceEdit, TextEdit, CodeActionKind, TextDocumentEdit, VersionedTextDocumentIdentifier, DocumentHighlightKind };
export type LintSettings = {
    [key: string]: any;
};
export interface CompletionSettings {
    triggerPropertyValueCompletion: boolean;
    completePropertyWithSemicolon?: boolean;
}
export interface LanguageSettings {
    validate?: boolean;
    lint?: LintSettings;
    completion?: CompletionSettings;
    hover?: HoverSettings;
    importAliases?: AliasSettings;
}
export interface AliasSettings {
    [key: string]: string;
}
export interface HoverSettings {
    documentation?: boolean;
    references?: boolean;
}
export interface PropertyCompletionContext {
    propertyName: string;
    range: Range;
}
export interface PropertyValueCompletionContext {
    propertyName: string;
    propertyValue?: string;
    range: Range;
}
export interface URILiteralCompletionContext {
    uriValue: string;
    position: Position;
    range: Range;
}
export interface ImportPathCompletionContext {
    pathValue: string;
    position: Position;
    range: Range;
}
export interface MixinReferenceCompletionContext {
    mixinName: string;
    range: Range;
}
export interface ICompletionParticipant {
    onCssProperty?: (context: PropertyCompletionContext) => void;
    onCssPropertyValue?: (context: PropertyValueCompletionContext) => void;
    onCssURILiteralValue?: (context: URILiteralCompletionContext) => void;
    onCssImportPath?: (context: ImportPathCompletionContext) => void;
    onCssMixinReference?: (context: MixinReferenceCompletionContext) => void;
}
export interface DocumentContext {
    resolveReference(ref: string, baseUrl: string): string | undefined;
}
/**
 * Describes what LSP capabilities the client supports
 */
export interface ClientCapabilities {
    /**
     * The text document client capabilities
     */
    textDocument?: {
        /**
         * Capabilities specific to completions.
         */
        completion?: {
            /**
             * The client supports the following `CompletionItem` specific
             * capabilities.
             */
            completionItem?: {
                /**
                 * Client supports the follow content formats for the documentation
                 * property. The order describes the preferred format of the client.
                 */
                documentationFormat?: MarkupKind[];
            };
        };
        /**
         * Capabilities specific to hovers.
         */
        hover?: {
            /**
             * Client supports the follow content formats for the content
             * property. The order describes the preferred format of the client.
             */
            contentFormat?: MarkupKind[];
        };
    };
}
export declare namespace ClientCapabilities {
    const LATEST: ClientCapabilities;
}
export interface LanguageServiceOptions {
    /**
     * Unless set to false, the default CSS data provider will be used
     * along with the providers from customDataProviders.
     * Defaults to true.
     */
    useDefaultDataProvider?: boolean;
    /**
     * Provide data that could enhance the service's understanding of
     * CSS property / at-rule / pseudo-class / pseudo-element
     */
    customDataProviders?: ICSSDataProvider[];
    /**
     * Abstract file system access away from the service.
     * Used for dynamic link resolving, path completion, etc.
     */
    fileSystemProvider?: FileSystemProvider;
    /**
     * Describes the LSP capabilities the client supports.
     */
    clientCapabilities?: ClientCapabilities;
}
export type EntryStatus = 'standard' | 'experimental' | 'nonstandard' | 'obsolete';
export interface IReference {
    name: string;
    url: string;
}
export interface IPropertyData {
    name: string;
    description?: string | MarkupContent;
    browsers?: string[];
    baseline?: BaselineStatus;
    restrictions?: string[];
    status?: EntryStatus;
    syntax?: string;
    values?: IValueData[];
    references?: IReference[];
    relevance?: number;
    atRule?: string;
}
export interface IDescriptorData {
    name: string;
    description?: string;
    references?: IReference[];
    syntax?: string;
    type?: string;
    values?: IValueData[];
    browsers?: string[];
    baseline?: BaselineStatus;
    status?: EntryStatus;
}
export interface IAtDirectiveData {
    name: string;
    description?: string | MarkupContent;
    browsers?: string[];
    baseline?: BaselineStatus;
    status?: EntryStatus;
    references?: IReference[];
    descriptors?: IDescriptorData[];
}
export interface IPseudoClassData {
    name: string;
    description?: string | MarkupContent;
    browsers?: string[];
    baseline?: BaselineStatus;
    status?: EntryStatus;
    references?: IReference[];
}
export interface IPseudoElementData {
    name: string;
    description?: string | MarkupContent;
    browsers?: string[];
    baseline?: BaselineStatus;
    status?: EntryStatus;
    references?: IReference[];
}
export interface IValueData {
    name: string;
    description?: string | MarkupContent;
    browsers?: string[];
    baseline?: BaselineStatus;
    status?: EntryStatus;
    references?: IReference[];
}
export interface CSSDataV1 {
    version: 1 | 1.1;
    properties?: IPropertyData[];
    atDirectives?: IAtDirectiveData[];
    pseudoClasses?: IPseudoClassData[];
    pseudoElements?: IPseudoElementData[];
}
export interface BaselineStatus {
    status: Baseline;
    baseline_low_date?: string;
    baseline_high_date?: string;
}
export type Baseline = 'false' | 'low' | 'high';
export interface ICSSDataProvider {
    provideProperties(): IPropertyData[];
    provideAtDirectives(): IAtDirectiveData[];
    providePseudoClasses(): IPseudoClassData[];
    providePseudoElements(): IPseudoElementData[];
}
export declare enum FileType {
    /**
     * The file type is unknown.
     */
    Unknown = 0,
    /**
     * A regular file.
     */
    File = 1,
    /**
     * A directory.
     */
    Directory = 2,
    /**
     * A symbolic link to a file.
     */
    SymbolicLink = 64
}
export interface FileStat {
    /**
     * The type of the file, e.g. is a regular file, a directory, or symbolic link
     * to a file.
     */
    type: FileType;
    /**
     * The creation timestamp in milliseconds elapsed since January 1, 1970 00:00:00 UTC.
     */
    ctime: number;
    /**
     * The modification timestamp in milliseconds elapsed since January 1, 1970 00:00:00 UTC.
     */
    mtime: number;
    /**
     * The size in bytes.
     */
    size: number;
}
export interface FileSystemProvider {
    stat(uri: DocumentUri): Promise<FileStat>;
    readDirectory?(uri: DocumentUri): Promise<[string, FileType][]>;
    getContent?(uri: DocumentUri, encoding?: string): Promise<string>;
}
export interface CSSFormatConfiguration {
    /** indentation size. Default: 4 */
    tabSize?: number;
    /** Whether to use spaces or tabs */
    insertSpaces?: boolean;
    /** end with a newline: Default: false */
    insertFinalNewline?: boolean;
    /** separate selectors with newline (e.g. "a,\nbr" or "a, br"): Default: true */
    newlineBetweenSelectors?: boolean;
    /** add a new line after every css rule: Default: true */
    newlineBetweenRules?: boolean;
    /** ensure space around selector separators:  '>', '+', '~' (e.g. "a>b" -> "a > b"): Default: false */
    spaceAroundSelectorSeparator?: boolean;
    /** put braces on the same line as rules (`collapse`), or put braces on own line, Allman / ANSI style (`expand`). Default `collapse` */
    braceStyle?: 'collapse' | 'expand';
    /** whether existing line breaks before elements should be preserved. Default: true */
    preserveNewLines?: boolean;
    /** maximum number of line breaks to be preserved in one chunk. Default: unlimited */
    maxPreserveNewLines?: number;
    /** maximum amount of characters per line (0/undefined = disabled). Default: disabled. */
    wrapLineLength?: number;
    /** add indenting whitespace to empty lines. Default: false */
    indentEmptyLines?: boolean;
    /** @deprecated Use newlineBetweenSelectors instead*/
    selectorSeparatorNewline?: boolean;
}
