import { IEvent as IEvent$1, IDisposable as IDisposable$2, Uri, editor } from './editor.api.js';
export { CancellationToken, CancellationTokenSource, Emitter, Environment, IKeyboardEvent, IMarkdownString, IMouseEvent, IPosition, IRange, IScrollEvent, ISelection, ITrustedTypePolicy, ITrustedTypePolicyOptions, KeyCode, KeyMod, MarkdownStringTrustedOptions, MarkerSeverity, MarkerTag, Position, Range, Selection, SelectionDirection, Thenable, Token, UriComponents, languages, worker } from './editor.api.js';

interface CSSFormatConfiguration {
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
}
interface Options$1 {
    readonly validate?: boolean;
    readonly lint?: {
        readonly compatibleVendorPrefixes?: 'ignore' | 'warning' | 'error';
        readonly vendorPrefix?: 'ignore' | 'warning' | 'error';
        readonly duplicateProperties?: 'ignore' | 'warning' | 'error';
        readonly emptyRules?: 'ignore' | 'warning' | 'error';
        readonly importStatement?: 'ignore' | 'warning' | 'error';
        readonly boxModel?: 'ignore' | 'warning' | 'error';
        readonly universalSelector?: 'ignore' | 'warning' | 'error';
        readonly zeroUnits?: 'ignore' | 'warning' | 'error';
        readonly fontFaceProperties?: 'ignore' | 'warning' | 'error';
        readonly hexColorLength?: 'ignore' | 'warning' | 'error';
        readonly argumentsInColorFunction?: 'ignore' | 'warning' | 'error';
        readonly unknownProperties?: 'ignore' | 'warning' | 'error';
        readonly ieHack?: 'ignore' | 'warning' | 'error';
        readonly unknownVendorSpecificProperties?: 'ignore' | 'warning' | 'error';
        readonly propertyIgnoredDueToDisplay?: 'ignore' | 'warning' | 'error';
        readonly important?: 'ignore' | 'warning' | 'error';
        readonly float?: 'ignore' | 'warning' | 'error';
        readonly idSelector?: 'ignore' | 'warning' | 'error';
    };
    /**
     * Configures the CSS data types known by the langauge service.
     */
    readonly data?: CSSDataConfiguration;
    /**
     * Settings for the CSS formatter.
     */
    readonly format?: CSSFormatConfiguration;
}
interface ModeConfiguration$3 {
    /**
     * Defines whether the built-in completionItemProvider is enabled.
     */
    readonly completionItems?: boolean;
    /**
     * Defines whether the built-in hoverProvider is enabled.
     */
    readonly hovers?: boolean;
    /**
     * Defines whether the built-in documentSymbolProvider is enabled.
     */
    readonly documentSymbols?: boolean;
    /**
     * Defines whether the built-in definitions provider is enabled.
     */
    readonly definitions?: boolean;
    /**
     * Defines whether the built-in references provider is enabled.
     */
    readonly references?: boolean;
    /**
     * Defines whether the built-in references provider is enabled.
     */
    readonly documentHighlights?: boolean;
    /**
     * Defines whether the built-in rename provider is enabled.
     */
    readonly rename?: boolean;
    /**
     * Defines whether the built-in color provider is enabled.
     */
    readonly colors?: boolean;
    /**
     * Defines whether the built-in foldingRange provider is enabled.
     */
    readonly foldingRanges?: boolean;
    /**
     * Defines whether the built-in diagnostic provider is enabled.
     */
    readonly diagnostics?: boolean;
    /**
     * Defines whether the built-in selection range provider is enabled.
     */
    readonly selectionRanges?: boolean;
    /**
     * Defines whether the built-in document formatting edit provider is enabled.
     */
    readonly documentFormattingEdits?: boolean;
    /**
     * Defines whether the built-in document formatting range edit provider is enabled.
     */
    readonly documentRangeFormattingEdits?: boolean;
}
interface LanguageServiceDefaults$3 {
    readonly languageId: string;
    readonly onDidChange: IEvent$1<LanguageServiceDefaults$3>;
    readonly modeConfiguration: ModeConfiguration$3;
    readonly options: Options$1;
    setOptions(options: Options$1): void;
    setModeConfiguration(modeConfiguration: ModeConfiguration$3): void;
    /** @deprecated Use options instead */
    readonly diagnosticsOptions: DiagnosticsOptions$2;
    /** @deprecated Use setOptions instead */
    setDiagnosticsOptions(options: DiagnosticsOptions$2): void;
}
/** @deprecated Use Options instead */
type DiagnosticsOptions$2 = Options$1;
declare const cssDefaults: LanguageServiceDefaults$3;
declare const scssDefaults: LanguageServiceDefaults$3;
declare const lessDefaults: LanguageServiceDefaults$3;
interface CSSDataConfiguration {
    /**
     * Defines whether the standard CSS properties, at-directives, pseudoClasses and pseudoElements are shown.
     */
    useDefaultDataProvider?: boolean;
    /**
     * Provides a set of custom data providers.
     */
    dataProviders?: {
        [providerId: string]: CSSDataV1;
    };
}
/**
 * Custom CSS properties, at-directives, pseudoClasses and pseudoElements
 * https://github.com/microsoft/vscode-css-languageservice/blob/main/docs/customData.md
 */
interface CSSDataV1 {
    version: 1 | 1.1;
    properties?: IPropertyData[];
    atDirectives?: IAtDirectiveData[];
    pseudoClasses?: IPseudoClassData[];
    pseudoElements?: IPseudoElementData[];
}
type EntryStatus = 'standard' | 'experimental' | 'nonstandard' | 'obsolete';
interface IReference$1 {
    name: string;
    url: string;
}
interface IPropertyData {
    name: string;
    description?: string | MarkupContent$1;
    browsers?: string[];
    restrictions?: string[];
    status?: EntryStatus;
    syntax?: string;
    values?: IValueData$1[];
    references?: IReference$1[];
    relevance?: number;
}
interface IAtDirectiveData {
    name: string;
    description?: string | MarkupContent$1;
    browsers?: string[];
    status?: EntryStatus;
    references?: IReference$1[];
}
interface IPseudoClassData {
    name: string;
    description?: string | MarkupContent$1;
    browsers?: string[];
    status?: EntryStatus;
    references?: IReference$1[];
}
interface IPseudoElementData {
    name: string;
    description?: string | MarkupContent$1;
    browsers?: string[];
    status?: EntryStatus;
    references?: IReference$1[];
}
interface IValueData$1 {
    name: string;
    description?: string | MarkupContent$1;
    browsers?: string[];
    status?: EntryStatus;
    references?: IReference$1[];
}
interface MarkupContent$1 {
    kind: MarkupKind$1;
    value: string;
}
declare type MarkupKind$1 = 'plaintext' | 'markdown';

type monaco_contribution$3_CSSDataConfiguration = CSSDataConfiguration;
type monaco_contribution$3_CSSDataV1 = CSSDataV1;
type monaco_contribution$3_CSSFormatConfiguration = CSSFormatConfiguration;
type monaco_contribution$3_EntryStatus = EntryStatus;
type monaco_contribution$3_IAtDirectiveData = IAtDirectiveData;
type monaco_contribution$3_IPropertyData = IPropertyData;
type monaco_contribution$3_IPseudoClassData = IPseudoClassData;
type monaco_contribution$3_IPseudoElementData = IPseudoElementData;
declare const monaco_contribution$3_cssDefaults: typeof cssDefaults;
declare const monaco_contribution$3_lessDefaults: typeof lessDefaults;
declare const monaco_contribution$3_scssDefaults: typeof scssDefaults;
declare namespace monaco_contribution$3 {
  export { monaco_contribution$3_cssDefaults as cssDefaults, monaco_contribution$3_lessDefaults as lessDefaults, monaco_contribution$3_scssDefaults as scssDefaults };
  export type { monaco_contribution$3_CSSDataConfiguration as CSSDataConfiguration, monaco_contribution$3_CSSDataV1 as CSSDataV1, monaco_contribution$3_CSSFormatConfiguration as CSSFormatConfiguration, DiagnosticsOptions$2 as DiagnosticsOptions, monaco_contribution$3_EntryStatus as EntryStatus, monaco_contribution$3_IAtDirectiveData as IAtDirectiveData, monaco_contribution$3_IPropertyData as IPropertyData, monaco_contribution$3_IPseudoClassData as IPseudoClassData, monaco_contribution$3_IPseudoElementData as IPseudoElementData, IReference$1 as IReference, IValueData$1 as IValueData, LanguageServiceDefaults$3 as LanguageServiceDefaults, MarkupContent$1 as MarkupContent, MarkupKind$1 as MarkupKind, ModeConfiguration$3 as ModeConfiguration, Options$1 as Options };
}

interface HTMLFormatConfiguration {
    readonly tabSize: number;
    readonly insertSpaces: boolean;
    readonly wrapLineLength: number;
    readonly unformatted: string;
    readonly contentUnformatted: string;
    readonly indentInnerHtml: boolean;
    readonly preserveNewLines: boolean;
    readonly maxPreserveNewLines: number | undefined;
    readonly indentHandlebars: boolean;
    readonly endWithNewline: boolean;
    readonly extraLiners: string;
    readonly wrapAttributes: 'auto' | 'force' | 'force-aligned' | 'force-expand-multiline';
}
interface CompletionConfiguration {
    readonly [providerId: string]: boolean;
}
interface Options {
    /**
     * Settings for the HTML formatter.
     */
    readonly format?: HTMLFormatConfiguration;
    /**
     * Code completion settings.
     */
    readonly suggest?: CompletionConfiguration;
    /**
     * Configures the HTML data types known by the HTML langauge service.
     */
    readonly data?: HTMLDataConfiguration;
}
interface ModeConfiguration$2 {
    /**
     * Defines whether the built-in completionItemProvider is enabled.
     */
    readonly completionItems?: boolean;
    /**
     * Defines whether the built-in hoverProvider is enabled.
     */
    readonly hovers?: boolean;
    /**
     * Defines whether the built-in documentSymbolProvider is enabled.
     */
    readonly documentSymbols?: boolean;
    /**
     * Defines whether the built-in definitions provider is enabled.
     */
    readonly links?: boolean;
    /**
     * Defines whether the built-in references provider is enabled.
     */
    readonly documentHighlights?: boolean;
    /**
     * Defines whether the built-in rename provider is enabled.
     */
    readonly rename?: boolean;
    /**
     * Defines whether the built-in color provider is enabled.
     */
    readonly colors?: boolean;
    /**
     * Defines whether the built-in foldingRange provider is enabled.
     */
    readonly foldingRanges?: boolean;
    /**
     * Defines whether the built-in diagnostic provider is enabled.
     */
    readonly diagnostics?: boolean;
    /**
     * Defines whether the built-in selection range provider is enabled.
     */
    readonly selectionRanges?: boolean;
    /**
     * Defines whether the built-in documentFormattingEdit provider is enabled.
     */
    readonly documentFormattingEdits?: boolean;
    /**
     * Defines whether the built-in documentRangeFormattingEdit provider is enabled.
     */
    readonly documentRangeFormattingEdits?: boolean;
}
interface LanguageServiceDefaults$2 {
    readonly languageId: string;
    readonly modeConfiguration: ModeConfiguration$2;
    readonly onDidChange: IEvent$1<LanguageServiceDefaults$2>;
    readonly options: Options;
    setOptions(options: Options): void;
    setModeConfiguration(modeConfiguration: ModeConfiguration$2): void;
}
declare const htmlLanguageService: LanguageServiceRegistration;
declare const htmlDefaults: LanguageServiceDefaults$2;
declare const handlebarLanguageService: LanguageServiceRegistration;
declare const handlebarDefaults: LanguageServiceDefaults$2;
declare const razorLanguageService: LanguageServiceRegistration;
declare const razorDefaults: LanguageServiceDefaults$2;
interface LanguageServiceRegistration extends IDisposable$2 {
    readonly defaults: LanguageServiceDefaults$2;
}
/**
 * Registers a new HTML language service for the languageId.
 * Note: 'html', 'handlebar' and 'razor' are registered by default.
 *
 * Use this method to register additional language ids with a HTML service.
 * The language server has to be registered before an editor model is opened.
 */
declare function registerHTMLLanguageService(languageId: string, options?: Options, modeConfiguration?: ModeConfiguration$2): LanguageServiceRegistration;
interface HTMLDataConfiguration {
    /**
     * Defines whether the standard HTML tags and attributes are shown
     */
    readonly useDefaultDataProvider?: boolean;
    /**
     * Provides a set of custom data providers.
     */
    readonly dataProviders?: {
        [providerId: string]: HTMLDataV1;
    };
}
/**
 * Custom HTML tags attributes and attribute values
 * https://github.com/microsoft/vscode-html-languageservice/blob/main/docs/customData.md
 */
interface HTMLDataV1 {
    readonly version: 1 | 1.1;
    readonly tags?: ITagData[];
    readonly globalAttributes?: IAttributeData[];
    readonly valueSets?: IValueSet[];
}
interface IReference {
    readonly name: string;
    readonly url: string;
}
interface ITagData {
    readonly name: string;
    readonly description?: string | MarkupContent;
    readonly attributes: IAttributeData[];
    readonly references?: IReference[];
}
interface IAttributeData {
    readonly name: string;
    readonly description?: string | MarkupContent;
    readonly valueSet?: string;
    readonly values?: IValueData[];
    readonly references?: IReference[];
}
interface IValueData {
    readonly name: string;
    readonly description?: string | MarkupContent;
    readonly references?: IReference[];
}
interface IValueSet {
    readonly name: string;
    readonly values: IValueData[];
}
interface MarkupContent {
    readonly kind: MarkupKind;
    readonly value: string;
}
declare type MarkupKind = 'plaintext' | 'markdown';

type monaco_contribution$2_CompletionConfiguration = CompletionConfiguration;
type monaco_contribution$2_HTMLDataConfiguration = HTMLDataConfiguration;
type monaco_contribution$2_HTMLDataV1 = HTMLDataV1;
type monaco_contribution$2_HTMLFormatConfiguration = HTMLFormatConfiguration;
type monaco_contribution$2_IAttributeData = IAttributeData;
type monaco_contribution$2_IReference = IReference;
type monaco_contribution$2_ITagData = ITagData;
type monaco_contribution$2_IValueData = IValueData;
type monaco_contribution$2_IValueSet = IValueSet;
type monaco_contribution$2_LanguageServiceRegistration = LanguageServiceRegistration;
type monaco_contribution$2_MarkupContent = MarkupContent;
type monaco_contribution$2_MarkupKind = MarkupKind;
type monaco_contribution$2_Options = Options;
declare const monaco_contribution$2_handlebarDefaults: typeof handlebarDefaults;
declare const monaco_contribution$2_handlebarLanguageService: typeof handlebarLanguageService;
declare const monaco_contribution$2_htmlDefaults: typeof htmlDefaults;
declare const monaco_contribution$2_htmlLanguageService: typeof htmlLanguageService;
declare const monaco_contribution$2_razorDefaults: typeof razorDefaults;
declare const monaco_contribution$2_razorLanguageService: typeof razorLanguageService;
declare const monaco_contribution$2_registerHTMLLanguageService: typeof registerHTMLLanguageService;
declare namespace monaco_contribution$2 {
  export { monaco_contribution$2_handlebarDefaults as handlebarDefaults, monaco_contribution$2_handlebarLanguageService as handlebarLanguageService, monaco_contribution$2_htmlDefaults as htmlDefaults, monaco_contribution$2_htmlLanguageService as htmlLanguageService, monaco_contribution$2_razorDefaults as razorDefaults, monaco_contribution$2_razorLanguageService as razorLanguageService, monaco_contribution$2_registerHTMLLanguageService as registerHTMLLanguageService };
  export type { monaco_contribution$2_CompletionConfiguration as CompletionConfiguration, monaco_contribution$2_HTMLDataConfiguration as HTMLDataConfiguration, monaco_contribution$2_HTMLDataV1 as HTMLDataV1, monaco_contribution$2_HTMLFormatConfiguration as HTMLFormatConfiguration, monaco_contribution$2_IAttributeData as IAttributeData, monaco_contribution$2_IReference as IReference, monaco_contribution$2_ITagData as ITagData, monaco_contribution$2_IValueData as IValueData, monaco_contribution$2_IValueSet as IValueSet, LanguageServiceDefaults$2 as LanguageServiceDefaults, monaco_contribution$2_LanguageServiceRegistration as LanguageServiceRegistration, monaco_contribution$2_MarkupContent as MarkupContent, monaco_contribution$2_MarkupKind as MarkupKind, ModeConfiguration$2 as ModeConfiguration, monaco_contribution$2_Options as Options };
}

interface BaseASTNode {
    readonly type: 'object' | 'array' | 'property' | 'string' | 'number' | 'boolean' | 'null';
    readonly parent?: ASTNode;
    readonly offset: number;
    readonly length: number;
    readonly children?: ASTNode[];
    readonly value?: string | boolean | number | null;
}
interface ObjectASTNode extends BaseASTNode {
    readonly type: 'object';
    readonly properties: PropertyASTNode[];
    readonly children: ASTNode[];
}
interface PropertyASTNode extends BaseASTNode {
    readonly type: 'property';
    readonly keyNode: StringASTNode;
    readonly valueNode?: ASTNode;
    readonly colonOffset?: number;
    readonly children: ASTNode[];
}
interface ArrayASTNode extends BaseASTNode {
    readonly type: 'array';
    readonly items: ASTNode[];
    readonly children: ASTNode[];
}
interface StringASTNode extends BaseASTNode {
    readonly type: 'string';
    readonly value: string;
}
interface NumberASTNode extends BaseASTNode {
    readonly type: 'number';
    readonly value: number;
    readonly isInteger: boolean;
}
interface BooleanASTNode extends BaseASTNode {
    readonly type: 'boolean';
    readonly value: boolean;
}
interface NullASTNode extends BaseASTNode {
    readonly type: 'null';
    readonly value: null;
}
type ASTNode = ObjectASTNode | PropertyASTNode | ArrayASTNode | StringASTNode | NumberASTNode | BooleanASTNode | NullASTNode;
type JSONDocument = {
    root: ASTNode | undefined;
    getNodeFromOffset(offset: number, includeRightBound?: boolean): ASTNode | undefined;
};
type JSONSchemaRef = JSONSchema | boolean;
interface JSONSchemaMap {
    [name: string]: JSONSchemaRef;
}
interface JSONSchema {
    id?: string;
    $id?: string;
    $schema?: string;
    type?: string | string[];
    title?: string;
    default?: any;
    definitions?: {
        [name: string]: JSONSchema;
    };
    description?: string;
    properties?: JSONSchemaMap;
    patternProperties?: JSONSchemaMap;
    additionalProperties?: boolean | JSONSchemaRef;
    minProperties?: number;
    maxProperties?: number;
    dependencies?: JSONSchemaMap | {
        [prop: string]: string[];
    };
    items?: JSONSchemaRef | JSONSchemaRef[];
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    additionalItems?: boolean | JSONSchemaRef;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: boolean | number;
    exclusiveMaximum?: boolean | number;
    multipleOf?: number;
    required?: string[];
    $ref?: string;
    anyOf?: JSONSchemaRef[];
    allOf?: JSONSchemaRef[];
    oneOf?: JSONSchemaRef[];
    not?: JSONSchemaRef;
    enum?: any[];
    format?: string;
    const?: any;
    contains?: JSONSchemaRef;
    propertyNames?: JSONSchemaRef;
    examples?: any[];
    $comment?: string;
    if?: JSONSchemaRef;
    then?: JSONSchemaRef;
    else?: JSONSchemaRef;
    defaultSnippets?: {
        label?: string;
        description?: string;
        markdownDescription?: string;
        body?: any;
        bodyText?: string;
    }[];
    errorMessage?: string;
    patternErrorMessage?: string;
    deprecationMessage?: string;
    enumDescriptions?: string[];
    markdownEnumDescriptions?: string[];
    markdownDescription?: string;
    doNotSuggest?: boolean;
    suggestSortText?: string;
    allowComments?: boolean;
    allowTrailingCommas?: boolean;
}
interface MatchingSchema {
    node: ASTNode;
    schema: JSONSchema;
}
interface DiagnosticsOptions$1 {
    /**
     * If set, the validator will be enabled and perform syntax and schema based validation,
     * unless `DiagnosticsOptions.schemaValidation` is set to `ignore`.
     */
    readonly validate?: boolean;
    /**
     * If set, comments are tolerated. If set to false, syntax errors will be emitted for comments.
     * `DiagnosticsOptions.allowComments` will override this setting.
     */
    readonly allowComments?: boolean;
    /**
     * A list of known schemas and/or associations of schemas to file names.
     */
    readonly schemas?: {
        /**
         * The URI of the schema, which is also the identifier of the schema.
         */
        readonly uri: string;
        /**
         * A list of glob patterns that describe for which file URIs the JSON schema will be used.
         * '*' and '**' wildcards are supported. Exclusion patterns start with '!'.
         * For example '*.schema.json', 'package.json', '!foo*.schema.json', 'foo/**\/BADRESP.json'.
         * A match succeeds when there is at least one pattern matching and last matching pattern does not start with '!'.
         */
        readonly fileMatch?: string[];
        /**
         * The schema for the given URI.
         */
        readonly schema?: any;
    }[];
    /**
     *  If set, the schema service would load schema content on-demand with 'fetch' if available
     */
    readonly enableSchemaRequest?: boolean;
    /**
     * The severity of problems from schema validation. If set to 'ignore', schema validation will be skipped. If not set, 'warning' is used.
     */
    readonly schemaValidation?: SeverityLevel;
    /**
     * The severity of problems that occurred when resolving and loading schemas. If set to 'ignore', schema resolving problems are not reported. If not set, 'warning' is used.
     */
    readonly schemaRequest?: SeverityLevel;
    /**
     * The severity of reported trailing commas. If not set, trailing commas will be reported as errors.
     */
    readonly trailingCommas?: SeverityLevel;
    /**
     * The severity of reported comments. If not set, 'DiagnosticsOptions.allowComments' defines whether comments are ignored or reported as errors.
     */
    readonly comments?: SeverityLevel;
}
declare type SeverityLevel = 'error' | 'warning' | 'ignore';
interface ModeConfiguration$1 {
    /**
     * Defines whether the built-in documentFormattingEdit provider is enabled.
     */
    readonly documentFormattingEdits?: boolean;
    /**
     * Defines whether the built-in documentRangeFormattingEdit provider is enabled.
     */
    readonly documentRangeFormattingEdits?: boolean;
    /**
     * Defines whether the built-in completionItemProvider is enabled.
     */
    readonly completionItems?: boolean;
    /**
     * Defines whether the built-in hoverProvider is enabled.
     */
    readonly hovers?: boolean;
    /**
     * Defines whether the built-in documentSymbolProvider is enabled.
     */
    readonly documentSymbols?: boolean;
    /**
     * Defines whether the built-in tokens provider is enabled.
     */
    readonly tokens?: boolean;
    /**
     * Defines whether the built-in color provider is enabled.
     */
    readonly colors?: boolean;
    /**
     * Defines whether the built-in foldingRange provider is enabled.
     */
    readonly foldingRanges?: boolean;
    /**
     * Defines whether the built-in diagnostic provider is enabled.
     */
    readonly diagnostics?: boolean;
    /**
     * Defines whether the built-in selection range provider is enabled.
     */
    readonly selectionRanges?: boolean;
}
interface LanguageServiceDefaults$1 {
    readonly languageId: string;
    readonly onDidChange: IEvent$1<LanguageServiceDefaults$1>;
    readonly diagnosticsOptions: DiagnosticsOptions$1;
    readonly modeConfiguration: ModeConfiguration$1;
    setDiagnosticsOptions(options: DiagnosticsOptions$1): void;
    setModeConfiguration(modeConfiguration: ModeConfiguration$1): void;
}
declare const jsonDefaults: LanguageServiceDefaults$1;
interface IJSONWorker {
    parseJSONDocument(uri: string): Promise<JSONDocument | null>;
    getMatchingSchemas(uri: string): Promise<MatchingSchema[]>;
}
declare const getWorker: () => Promise<(...uris: Uri[]) => Promise<IJSONWorker>>;

type monaco_contribution$1_ASTNode = ASTNode;
type monaco_contribution$1_ArrayASTNode = ArrayASTNode;
type monaco_contribution$1_BaseASTNode = BaseASTNode;
type monaco_contribution$1_BooleanASTNode = BooleanASTNode;
type monaco_contribution$1_IJSONWorker = IJSONWorker;
type monaco_contribution$1_JSONDocument = JSONDocument;
type monaco_contribution$1_JSONSchema = JSONSchema;
type monaco_contribution$1_JSONSchemaMap = JSONSchemaMap;
type monaco_contribution$1_JSONSchemaRef = JSONSchemaRef;
type monaco_contribution$1_MatchingSchema = MatchingSchema;
type monaco_contribution$1_NullASTNode = NullASTNode;
type monaco_contribution$1_NumberASTNode = NumberASTNode;
type monaco_contribution$1_ObjectASTNode = ObjectASTNode;
type monaco_contribution$1_PropertyASTNode = PropertyASTNode;
type monaco_contribution$1_SeverityLevel = SeverityLevel;
type monaco_contribution$1_StringASTNode = StringASTNode;
declare const monaco_contribution$1_getWorker: typeof getWorker;
declare const monaco_contribution$1_jsonDefaults: typeof jsonDefaults;
declare namespace monaco_contribution$1 {
  export { monaco_contribution$1_getWorker as getWorker, monaco_contribution$1_jsonDefaults as jsonDefaults };
  export type { monaco_contribution$1_ASTNode as ASTNode, monaco_contribution$1_ArrayASTNode as ArrayASTNode, monaco_contribution$1_BaseASTNode as BaseASTNode, monaco_contribution$1_BooleanASTNode as BooleanASTNode, DiagnosticsOptions$1 as DiagnosticsOptions, monaco_contribution$1_IJSONWorker as IJSONWorker, monaco_contribution$1_JSONDocument as JSONDocument, monaco_contribution$1_JSONSchema as JSONSchema, monaco_contribution$1_JSONSchemaMap as JSONSchemaMap, monaco_contribution$1_JSONSchemaRef as JSONSchemaRef, LanguageServiceDefaults$1 as LanguageServiceDefaults, monaco_contribution$1_MatchingSchema as MatchingSchema, ModeConfiguration$1 as ModeConfiguration, monaco_contribution$1_NullASTNode as NullASTNode, monaco_contribution$1_NumberASTNode as NumberASTNode, monaco_contribution$1_ObjectASTNode as ObjectASTNode, monaco_contribution$1_PropertyASTNode as PropertyASTNode, monaco_contribution$1_SeverityLevel as SeverityLevel, monaco_contribution$1_StringASTNode as StringASTNode };
}

declare enum ModuleKind {
    None = 0,
    CommonJS = 1,
    AMD = 2,
    UMD = 3,
    System = 4,
    ES2015 = 5,
    ESNext = 99
}
declare enum JsxEmit {
    None = 0,
    Preserve = 1,
    React = 2,
    ReactNative = 3,
    ReactJSX = 4,
    ReactJSXDev = 5
}
declare enum NewLineKind {
    CarriageReturnLineFeed = 0,
    LineFeed = 1
}
declare enum ScriptTarget {
    ES3 = 0,
    ES5 = 1,
    ES2015 = 2,
    ES2016 = 3,
    ES2017 = 4,
    ES2018 = 5,
    ES2019 = 6,
    ES2020 = 7,
    ESNext = 99,
    JSON = 100,
    Latest = 99
}
declare enum ModuleResolutionKind {
    Classic = 1,
    NodeJs = 2
}
interface MapLike<T> {
    [index: string]: T;
}
type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | null | undefined;
interface CompilerOptions {
    allowJs?: boolean;
    allowSyntheticDefaultImports?: boolean;
    allowUmdGlobalAccess?: boolean;
    allowUnreachableCode?: boolean;
    allowUnusedLabels?: boolean;
    alwaysStrict?: boolean;
    baseUrl?: string;
    charset?: string;
    checkJs?: boolean;
    declaration?: boolean;
    declarationMap?: boolean;
    emitDeclarationOnly?: boolean;
    declarationDir?: string;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDecoratorMetadata?: boolean;
    experimentalDecorators?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    importHelpers?: boolean;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    isolatedModules?: boolean;
    jsx?: JsxEmit;
    keyofStringsOnly?: boolean;
    lib?: string[];
    locale?: string;
    mapRoot?: string;
    maxNodeModuleJsDepth?: number;
    module?: ModuleKind;
    moduleResolution?: ModuleResolutionKind;
    newLine?: NewLineKind;
    noEmit?: boolean;
    noEmitHelpers?: boolean;
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean;
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean;
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
    noImplicitUseStrict?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    out?: string;
    outDir?: string;
    outFile?: string;
    paths?: MapLike<string[]>;
    preserveConstEnums?: boolean;
    preserveSymlinks?: boolean;
    project?: string;
    reactNamespace?: string;
    jsxFactory?: string;
    composite?: boolean;
    removeComments?: boolean;
    rootDir?: string;
    rootDirs?: string[];
    skipLibCheck?: boolean;
    skipDefaultLibCheck?: boolean;
    sourceMap?: boolean;
    sourceRoot?: string;
    strict?: boolean;
    strictFunctionTypes?: boolean;
    strictBindCallApply?: boolean;
    strictNullChecks?: boolean;
    strictPropertyInitialization?: boolean;
    stripInternal?: boolean;
    suppressExcessPropertyErrors?: boolean;
    suppressImplicitAnyIndexErrors?: boolean;
    target?: ScriptTarget;
    traceResolution?: boolean;
    resolveJsonModule?: boolean;
    types?: string[];
    /** Paths used to compute primary types search locations */
    typeRoots?: string[];
    esModuleInterop?: boolean;
    useDefineForClassFields?: boolean;
    [option: string]: CompilerOptionsValue | undefined;
}
interface DiagnosticsOptions {
    noSemanticValidation?: boolean;
    noSyntaxValidation?: boolean;
    noSuggestionDiagnostics?: boolean;
    /**
     * Limit diagnostic computation to only visible files.
     * Defaults to false.
     */
    onlyVisible?: boolean;
    diagnosticCodesToIgnore?: number[];
}
interface WorkerOptions {
    /** A full HTTP path to a JavaScript file which adds a function `customTSWorkerFactory` to the self inside a web-worker */
    customWorkerPath?: string;
}
interface InlayHintsOptions {
    readonly includeInlayParameterNameHints?: 'none' | 'literals' | 'all';
    readonly includeInlayParameterNameHintsWhenArgumentMatchesName?: boolean;
    readonly includeInlayFunctionParameterTypeHints?: boolean;
    readonly includeInlayVariableTypeHints?: boolean;
    readonly includeInlayPropertyDeclarationTypeHints?: boolean;
    readonly includeInlayFunctionLikeReturnTypeHints?: boolean;
    readonly includeInlayEnumMemberValueHints?: boolean;
}
interface IExtraLib {
    content: string;
    version: number;
}
interface IExtraLibs {
    [path: string]: IExtraLib;
}
/**
 * A linked list of formatted diagnostic messages to be used as part of a multiline message.
 * It is built from the bottom up, leaving the head to be the "main" diagnostic.
 */
interface DiagnosticMessageChain {
    messageText: string;
    /** Diagnostic category: warning = 0, error = 1, suggestion = 2, message = 3 */
    category: 0 | 1 | 2 | 3;
    code: number;
    next?: DiagnosticMessageChain[];
}
interface Diagnostic extends DiagnosticRelatedInformation {
    /** May store more in future. For now, this will simply be `true` to indicate when a diagnostic is an unused-identifier diagnostic. */
    reportsUnnecessary?: {};
    reportsDeprecated?: {};
    source?: string;
    relatedInformation?: DiagnosticRelatedInformation[];
}
interface DiagnosticRelatedInformation {
    /** Diagnostic category: warning = 0, error = 1, suggestion = 2, message = 3 */
    category: 0 | 1 | 2 | 3;
    code: number;
    /** TypeScriptWorker removes all but the `fileName` property to avoid serializing circular JSON structures. */
    file: {
        fileName: string;
    } | undefined;
    start: number | undefined;
    length: number | undefined;
    messageText: string | DiagnosticMessageChain;
}
interface EmitOutput {
    outputFiles: OutputFile[];
    emitSkipped: boolean;
    diagnostics?: Diagnostic[];
}
interface OutputFile {
    name: string;
    writeByteOrderMark: boolean;
    text: string;
}
interface ModeConfiguration {
    /**
     * Defines whether the built-in completionItemProvider is enabled.
     */
    readonly completionItems?: boolean;
    /**
     * Defines whether the built-in hoverProvider is enabled.
     */
    readonly hovers?: boolean;
    /**
     * Defines whether the built-in documentSymbolProvider is enabled.
     */
    readonly documentSymbols?: boolean;
    /**
     * Defines whether the built-in definitions provider is enabled.
     */
    readonly definitions?: boolean;
    /**
     * Defines whether the built-in references provider is enabled.
     */
    readonly references?: boolean;
    /**
     * Defines whether the built-in references provider is enabled.
     */
    readonly documentHighlights?: boolean;
    /**
     * Defines whether the built-in rename provider is enabled.
     */
    readonly rename?: boolean;
    /**
     * Defines whether the built-in diagnostic provider is enabled.
     */
    readonly diagnostics?: boolean;
    /**
     * Defines whether the built-in document formatting range edit provider is enabled.
     */
    readonly documentRangeFormattingEdits?: boolean;
    /**
     * Defines whether the built-in signature help provider is enabled.
     */
    readonly signatureHelp?: boolean;
    /**
     * Defines whether the built-in onType formatting edit provider is enabled.
     */
    readonly onTypeFormattingEdits?: boolean;
    /**
     * Defines whether the built-in code actions provider is enabled.
     */
    readonly codeActions?: boolean;
    /**
     * Defines whether the built-in inlay hints provider is enabled.
     */
    readonly inlayHints?: boolean;
}
interface LanguageServiceDefaults {
    /**
     * Event fired when compiler options or diagnostics options are changed.
     */
    readonly onDidChange: IEvent$1<void>;
    /**
     * Event fired when extra libraries registered with the language service change.
     */
    readonly onDidExtraLibsChange: IEvent$1<void>;
    readonly workerOptions: WorkerOptions;
    readonly inlayHintsOptions: InlayHintsOptions;
    readonly modeConfiguration: ModeConfiguration;
    setModeConfiguration(modeConfiguration: ModeConfiguration): void;
    /**
     * Get the current extra libs registered with the language service.
     */
    getExtraLibs(): IExtraLibs;
    /**
     * Add an additional source file to the language service. Use this
     * for typescript (definition) files that won't be loaded as editor
     * documents, like `jquery.d.ts`.
     *
     * @param content The file content
     * @param filePath An optional file path
     * @returns A disposable which will remove the file from the
     * language service upon disposal.
     */
    addExtraLib(content: string, filePath?: string): IDisposable$2;
    /**
     * Remove all existing extra libs and set the additional source
     * files to the language service. Use this for typescript definition
     * files that won't be loaded as editor documents, like `jquery.d.ts`.
     * @param libs An array of entries to register.
     */
    setExtraLibs(libs: {
        content: string;
        filePath?: string;
    }[]): void;
    /**
     * Get current TypeScript compiler options for the language service.
     */
    getCompilerOptions(): CompilerOptions;
    /**
     * Set TypeScript compiler options.
     */
    setCompilerOptions(options: CompilerOptions): void;
    /**
     * Get the current diagnostics options for the language service.
     */
    getDiagnosticsOptions(): DiagnosticsOptions;
    /**
     * Configure whether syntactic and/or semantic validation should
     * be performed
     */
    setDiagnosticsOptions(options: DiagnosticsOptions): void;
    /**
     * Configure webworker options
     */
    setWorkerOptions(options: WorkerOptions): void;
    /**
     * No-op.
     */
    setMaximumWorkerIdleTime(value: number): void;
    /**
     * Configure if all existing models should be eagerly sync'd
     * to the worker on start or restart.
     */
    setEagerModelSync(value: boolean): void;
    /**
     * Get the current setting for whether all existing models should be eagerly sync'd
     * to the worker on start or restart.
     */
    getEagerModelSync(): boolean;
    /**
     * Configure inlay hints options.
     */
    setInlayHintsOptions(options: InlayHintsOptions): void;
}
interface TypeScriptWorker {
    /**
     * Get diagnostic messages for any syntax issues in the given file.
     */
    getSyntacticDiagnostics(fileName: string): Promise<Diagnostic[]>;
    /**
     * Get diagnostic messages for any semantic issues in the given file.
     */
    getSemanticDiagnostics(fileName: string): Promise<Diagnostic[]>;
    /**
     * Get diagnostic messages for any suggestions related to the given file.
     */
    getSuggestionDiagnostics(fileName: string): Promise<Diagnostic[]>;
    /**
     * Get the content of a given file.
     */
    getScriptText(fileName: string): Promise<string | undefined>;
    /**
     * Get diagnostic messages related to the current compiler options.
     * @param fileName Not used
     */
    getCompilerOptionsDiagnostics(fileName: string): Promise<Diagnostic[]>;
    /**
     * Get code completions for the given file and position.
     * @returns `Promise<typescript.CompletionInfo | undefined>`
     */
    getCompletionsAtPosition(fileName: string, position: number): Promise<any | undefined>;
    /**
     * Get code completion details for the given file, position, and entry.
     * @returns `Promise<typescript.CompletionEntryDetails | undefined>`
     */
    getCompletionEntryDetails(fileName: string, position: number, entry: string): Promise<any | undefined>;
    /**
     * Get signature help items for the item at the given file and position.
     * @returns `Promise<typescript.SignatureHelpItems | undefined>`
     */
    getSignatureHelpItems(fileName: string, position: number, options: any): Promise<any | undefined>;
    /**
     * Get quick info for the item at the given position in the file.
     * @returns `Promise<typescript.QuickInfo | undefined>`
     */
    getQuickInfoAtPosition(fileName: string, position: number): Promise<any | undefined>;
    getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): Promise<ReadonlyArray<any> | undefined>;
    /**
     * Get the definition of the item at the given position in the file.
     * @returns `Promise<ReadonlyArray<typescript.DefinitionInfo> | undefined>`
     */
    getDefinitionAtPosition(fileName: string, position: number): Promise<ReadonlyArray<any> | undefined>;
    /**
     * Get references to the item at the given position in the file.
     * @returns `Promise<typescript.ReferenceEntry[] | undefined>`
     */
    getReferencesAtPosition(fileName: string, position: number): Promise<any[] | undefined>;
    /**
     * Get outline entries for the item at the given position in the file.
     * @returns `Promise<typescript.NavigationTree | undefined>`
     */
    getNavigationTree(fileName: string): Promise<any | undefined>;
    /**
     * Get changes which should be applied to format the given file.
     * @param options `typescript.FormatCodeOptions`
     * @returns `Promise<typescript.TextChange[]>`
     */
    getFormattingEditsForDocument(fileName: string, options: any): Promise<any[]>;
    /**
     * Get changes which should be applied to format the given range in the file.
     * @param options `typescript.FormatCodeOptions`
     * @returns `Promise<typescript.TextChange[]>`
     */
    getFormattingEditsForRange(fileName: string, start: number, end: number, options: any): Promise<any[]>;
    /**
     * Get formatting changes which should be applied after the given keystroke.
     * @param options `typescript.FormatCodeOptions`
     * @returns `Promise<typescript.TextChange[]>`
     */
    getFormattingEditsAfterKeystroke(fileName: string, postion: number, ch: string, options: any): Promise<any[]>;
    /**
     * Get other occurrences which should be updated when renaming the item at the given file and position.
     * @returns `Promise<readonly typescript.RenameLocation[] | undefined>`
     */
    findRenameLocations(fileName: string, positon: number, findInStrings: boolean, findInComments: boolean, providePrefixAndSuffixTextForRename: boolean): Promise<readonly any[] | undefined>;
    /**
     * Get edits which should be applied to rename the item at the given file and position (or a failure reason).
     * @param options `typescript.RenameInfoOptions`
     * @returns `Promise<typescript.RenameInfo>`
     */
    getRenameInfo(fileName: string, positon: number, options: any): Promise<any>;
    /**
     * Get transpiled output for the given file.
     * @returns `typescript.EmitOutput`
     */
    getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean, forceDtsEmit?: boolean): Promise<EmitOutput>;
    /**
     * Get possible code fixes at the given position in the file.
     * @param formatOptions `typescript.FormatCodeOptions`
     * @returns `Promise<ReadonlyArray<typescript.CodeFixAction>>`
     */
    getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: number[], formatOptions: any): Promise<ReadonlyArray<any>>;
    /**
     * Get inlay hints in the range of the file.
     * @param fileName
     * @returns `Promise<typescript.InlayHint[]>`
     */
    provideInlayHints(fileName: string, start: number, end: number): Promise<ReadonlyArray<any>>;
}
declare const typescriptVersion: string;
declare const typescriptDefaults: LanguageServiceDefaults;
declare const javascriptDefaults: LanguageServiceDefaults;
declare const getTypeScriptWorker: () => Promise<(...uris: Uri[]) => Promise<TypeScriptWorker>>;
declare const getJavaScriptWorker: () => Promise<(...uris: Uri[]) => Promise<TypeScriptWorker>>;

type monaco_contribution_CompilerOptions = CompilerOptions;
type monaco_contribution_Diagnostic = Diagnostic;
type monaco_contribution_DiagnosticRelatedInformation = DiagnosticRelatedInformation;
type monaco_contribution_DiagnosticsOptions = DiagnosticsOptions;
type monaco_contribution_EmitOutput = EmitOutput;
type monaco_contribution_IExtraLibs = IExtraLibs;
type monaco_contribution_JsxEmit = JsxEmit;
declare const monaco_contribution_JsxEmit: typeof JsxEmit;
type monaco_contribution_LanguageServiceDefaults = LanguageServiceDefaults;
type monaco_contribution_ModeConfiguration = ModeConfiguration;
type monaco_contribution_ModuleKind = ModuleKind;
declare const monaco_contribution_ModuleKind: typeof ModuleKind;
type monaco_contribution_ModuleResolutionKind = ModuleResolutionKind;
declare const monaco_contribution_ModuleResolutionKind: typeof ModuleResolutionKind;
type monaco_contribution_NewLineKind = NewLineKind;
declare const monaco_contribution_NewLineKind: typeof NewLineKind;
type monaco_contribution_ScriptTarget = ScriptTarget;
declare const monaco_contribution_ScriptTarget: typeof ScriptTarget;
type monaco_contribution_TypeScriptWorker = TypeScriptWorker;
type monaco_contribution_WorkerOptions = WorkerOptions;
declare const monaco_contribution_getJavaScriptWorker: typeof getJavaScriptWorker;
declare const monaco_contribution_getTypeScriptWorker: typeof getTypeScriptWorker;
declare const monaco_contribution_javascriptDefaults: typeof javascriptDefaults;
declare const monaco_contribution_typescriptDefaults: typeof typescriptDefaults;
declare const monaco_contribution_typescriptVersion: typeof typescriptVersion;
declare namespace monaco_contribution {
  export { monaco_contribution_JsxEmit as JsxEmit, monaco_contribution_ModuleKind as ModuleKind, monaco_contribution_ModuleResolutionKind as ModuleResolutionKind, monaco_contribution_NewLineKind as NewLineKind, monaco_contribution_ScriptTarget as ScriptTarget, monaco_contribution_getJavaScriptWorker as getJavaScriptWorker, monaco_contribution_getTypeScriptWorker as getTypeScriptWorker, monaco_contribution_javascriptDefaults as javascriptDefaults, monaco_contribution_typescriptDefaults as typescriptDefaults, monaco_contribution_typescriptVersion as typescriptVersion };
  export type { monaco_contribution_CompilerOptions as CompilerOptions, monaco_contribution_Diagnostic as Diagnostic, monaco_contribution_DiagnosticRelatedInformation as DiagnosticRelatedInformation, monaco_contribution_DiagnosticsOptions as DiagnosticsOptions, monaco_contribution_EmitOutput as EmitOutput, monaco_contribution_IExtraLibs as IExtraLibs, monaco_contribution_LanguageServiceDefaults as LanguageServiceDefaults, monaco_contribution_ModeConfiguration as ModeConfiguration, monaco_contribution_TypeScriptWorker as TypeScriptWorker, monaco_contribution_WorkerOptions as WorkerOptions };
}

//#region node_modules/@hediet/json-rpc/dist/JsonRpcTypes.d.ts
type JSONObject = {
  [key: string]: JSONValue | undefined;
};
interface JSONArray extends Array<JSONValue> {}
type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
type Message = IRequestMessage | IResponseMessage;
/**
 * Represents a request or a notification.
 */
interface IRequestMessage {
  jsonrpc: "2.0";
  /**  must not match `rpc\..*` */
  method: string;
  params?: JSONArray | JSONObject;
  /** Is not set if and only if the request is a notification. */
  id?: RequestId;
  /** Requests don't have a result. */
  result?: never;
}
type RequestId = number | string;
/**
 * Either result or error is set.
 */
interface IResponseMessage {
  jsonrpc: "2.0";
  /**
   * This member is REQUIRED on success.
   * This member MUST NOT exist if there was an error invoking the method.
   * The value of this member is determined by the method invoked on the Server.
   */
  result?: JSONValue;
  /**
   * This member is REQUIRED on error.
   * This member MUST NOT exist if there was no error triggered during invocation.
   */
  error?: ErrorObject;
  /**
   * If there was an error in detecting the id in the Request object
   * (e.g. Parse error/Invalid Request), it MUST be Null.
   */
  id: RequestId | null;
  method?: never;
}
interface ErrorObject {
  /** A Number that indicates the error type that occurred. */
  code: ErrorCode;
  /** The message SHOULD be limited to a concise single sentence. */
  message: string;
  /**
   * A Primitive or Structured value that contains additional information about the error.
   * This may be omitted.
   * The value of this member is defined by the Server (e.g. detailed error information, nested errors etc.).
   */
  data?: JSONValue;
}
declare namespace ErrorObject {
  function create(obj: ErrorObject): ErrorObject;
}
interface ErrorCode extends Number {}
declare namespace ErrorCode {
  /**
   * Invalid JSON was received by the server.
   * An error occurred on the server while parsing the JSON text.
   */
  const parseError: ErrorCode;
  /**
   * The JSON sent is not a valid Request object.
   */
  const invalidRequest: ErrorCode;
  /**
   * The method does not exist/is not available.
   */
  const methodNotFound: ErrorCode;
  /**
   * Invalid method parameter(s).
   */
  const invalidParams: ErrorCode;
  /**
   * 	Internal JSON-RPC error.
   */
  const internalError: ErrorCode;
  /**
   * implementation-defined server-errors.
   */
  function isServerError(code: number): boolean;
  /**
   * implementation-defined server-errors.
   */
  function serverError(code: number): ErrorCode;
  /**
   * Non-spec.
   */
  const unexpectedServerError: ErrorCode;
  function isApplicationError(code: number): boolean;
  function applicationError(code: number): ErrorCode;
  /**
   * Non-spec.
   */
  const genericApplicationError: ErrorCode;
}
//#endregion
//#region node_modules/@hediet/json-rpc/dist/common.d.ts
interface IDisposable$1 {
  dispose(): void;
}
type IEvent<T> = (listener: (e: T) => void) => IDisposable$1;
declare class EventEmitter<T> {
  private listeners;
  readonly event: IEvent<T>;
  fire(args: T): void;
}
interface IValueWithChangeEvent<T> {
  get value(): T;
  get onChange(): IEvent<T>;
}
declare class ValueWithChangeEvent<T> implements IValueWithChangeEvent<T> {
  private _value;
  private eventEmitter;
  constructor(initialValue: T);
  get value(): T;
  set value(newValue: T);
  get onChange(): IEvent<T>;
}
//#endregion
//#region node_modules/@hediet/json-rpc/dist/MessageTransport.d.ts
/**
 * Represents a mechanism to send and receive messages.
 */
interface IMessageTransport {
  get state(): IValueWithChangeEvent<ConnectionState>;
  send(message: Message): Promise<void>;
  /**
   * Sets a listener for received messages.
   * The listener might be called multiple times before this function returns.
   * The method allows reentrancy.
   */
  setListener(listener: MessageListener | undefined): void;
  /**
   * Returns a human readable representation of this stream.
   */
  toString(): string;
}
type ConnectionState = {
  state: "connecting";
} | {
  state: "open";
} | {
  state: "closed";
  error: Error | undefined;
};
type MessageListener = (message: Message) => void;
/**
 * Base class for implementing a MessageStream.
 * Provides an unreadMessage queue.
 */
declare abstract class BaseMessageTransport implements IMessageTransport {
  private static id;
  private readonly _unprocessedMessages;
  private _messageListener;
  protected readonly id: number;
  private readonly _state;
  readonly state: ValueWithChangeEvent<ConnectionState>;
  /**
   * Sets a callback for incoming messages.
   */
  setListener(listener: MessageListener | undefined): void;
  /**
   * Writes a message to the stream.
   */
  send(message: Message): Promise<void>;
  protected abstract _sendImpl(message: Message): Promise<void>;
  /**
   * Returns human readable information of this message stream.
   */
  abstract toString(): string;
  /**
   * Call this in derived classes to signal a new message.
   */
  protected _dispatchReceivedMessage(message: Message): void;
  /**
   * Call this in derived classes to signal that the connection closed.
   */
  protected _onConnectionClosed(): void;
  log(logger?: IMessageLogger): IMessageTransport;
}
/**
 * Used by `StreamLogger` to log messages.
 */
interface IMessageLogger {
  log(stream: IMessageTransport, type: "incoming" | "outgoing", message: Message): void;
}
//#endregion
//#region node_modules/@hediet/json-rpc/dist/typedChannel/serializerMapping.d.ts
declare global {
  interface JsonRpcSerializerMapper<T> {}
}
//#endregion
//#region src/utils.d.ts
interface IDisposable {
  dispose(): void;
}
//#endregion
//#region src/adapters/LspClient.d.ts
declare class MonacoLspClient {
  private _connection;
  private readonly _capabilitiesRegistry;
  private readonly _bridge;
  private _initPromise;
  constructor(transport: IMessageTransport);
  private _init;
  protected createFeatures(): IDisposable;
}
//#endregion
//#region node_modules/@hediet/json-rpc-websocket/dist/index.d.ts
type NormalizedWebSocketOptions = {
  address: string;
};
type WebSocketOptions = NormalizedWebSocketOptions | {
  host: string;
  port: number;
  forceTls?: boolean;
};
/**
 * Represents a stream through a web socket.
 * Use the static `connectTo` method to get a stream to a web socket server.
 */
declare class WebSocketTransport extends BaseMessageTransport {
  private readonly socket;
  static connectTo(options: WebSocketOptions): Promise<WebSocketTransport>;
  static fromWebSocket(socket: unknown): WebSocketTransport;
  private readonly errorEmitter;
  readonly onError: EventEmitter<{
    error: unknown;
  }>;
  private constructor();
  /**
   * Closes the underlying socket.
   */
  close(): void;
  /**
   * Same as `close`.
   */
  dispose(): void;
  _sendImpl(message: Message): Promise<void>;
  toString(): string;
}
//#endregion
//#region node_modules/@hediet/json-rpc-browser/dist/worker.d.ts
/**
 * Gets a stream that uses `worker.postMessage` to write
 * and `worker.addEventListener` to read messages.
 */
declare function createTransportToWorker(worker: Worker): BaseMessageTransport;
//#endregion
//#region node_modules/@hediet/json-rpc-browser/dist/iframe.d.ts
/**
 * Gets a stream that uses `worker.postMessage` to write
 * and `worker.addEventListener` to read messages.
 */
declare function createTransportToIFrame(iframe: HTMLIFrameElement): BaseMessageTransport;

type index_d_MonacoLspClient = MonacoLspClient;
declare const index_d_MonacoLspClient: typeof MonacoLspClient;
type index_d_WebSocketTransport = WebSocketTransport;
declare const index_d_WebSocketTransport: typeof WebSocketTransport;
declare const index_d_createTransportToIFrame: typeof createTransportToIFrame;
declare const index_d_createTransportToWorker: typeof createTransportToWorker;
declare namespace index_d {
  export {
    index_d_MonacoLspClient as MonacoLspClient,
    index_d_WebSocketTransport as WebSocketTransport,
    index_d_createTransportToIFrame as createTransportToIFrame,
    index_d_createTransportToWorker as createTransportToWorker,
  };
}

declare function createWebWorker<T extends object>(opts: IWebWorkerOptions): editor.MonacoWebWorker<T>;
interface IWebWorkerOptions {
    /**
     * The AMD moduleId to load.
     * It should export a function `create` that should return the exported proxy.
     */
    moduleId: string;
    createWorker?: () => Worker;
    /**
     * The data to send over when calling create on the module.
     */
    createData?: any;
    /**
     * A label to be used to identify the web worker for debugging purposes.
     */
    label?: string;
    /**
     * An object that can be used by the web worker to make calls back to the main thread.
     */
    host?: any;
    /**
     * Keep idle models.
     * Defaults to false, which means that idle models will stop syncing after a while.
     */
    keepIdleModels?: boolean;
}

export { IDisposable$2 as IDisposable, IEvent$1 as IEvent, Uri, createWebWorker, monaco_contribution$3 as css, editor, monaco_contribution$2 as html, monaco_contribution$1 as json, index_d as lsp, monaco_contribution as typescript };
export type { IWebWorkerOptions };
