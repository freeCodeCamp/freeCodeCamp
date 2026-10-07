import { LanguageSettings, ICompletionParticipant, DocumentContext, LanguageServiceOptions, Diagnostic, Position, CompletionList, Hover, Location, DocumentHighlight, DocumentLink, SymbolInformation, Range, CodeActionContext, Command, CodeAction, ColorInformation, Color, ColorPresentation, WorkspaceEdit, FoldingRange, SelectionRange, TextDocument, ICSSDataProvider, CSSDataV1, HoverSettings, CompletionSettings, TextEdit, CSSFormatConfiguration, DocumentSymbol } from './cssLanguageTypes';
export type Stylesheet = {};
export * from './cssLanguageTypes';
export interface LanguageService {
    configure(raw?: LanguageSettings): void;
    setDataProviders(useDefaultDataProvider: boolean, customDataProviders: ICSSDataProvider[]): void;
    doValidation(document: TextDocument, stylesheet: Stylesheet, documentSettings?: LanguageSettings): Diagnostic[];
    parseStylesheet(document: TextDocument): Stylesheet;
    doComplete(document: TextDocument, position: Position, stylesheet: Stylesheet, settings?: CompletionSettings): CompletionList;
    doComplete2(document: TextDocument, position: Position, stylesheet: Stylesheet, documentContext: DocumentContext, settings?: CompletionSettings): Promise<CompletionList>;
    setCompletionParticipants(registeredCompletionParticipants: ICompletionParticipant[]): void;
    doHover(document: TextDocument, position: Position, stylesheet: Stylesheet, settings?: HoverSettings): Hover | null;
    findDefinition(document: TextDocument, position: Position, stylesheet: Stylesheet): Location | null;
    findReferences(document: TextDocument, position: Position, stylesheet: Stylesheet): Location[];
    findDocumentHighlights(document: TextDocument, position: Position, stylesheet: Stylesheet): DocumentHighlight[];
    findDocumentLinks(document: TextDocument, stylesheet: Stylesheet, documentContext: DocumentContext): DocumentLink[];
    /**
     * Return statically resolved links, and dynamically resolved links if `fsProvider` is proved.
     */
    findDocumentLinks2(document: TextDocument, stylesheet: Stylesheet, documentContext: DocumentContext): Promise<DocumentLink[]>;
    findDocumentSymbols(document: TextDocument, stylesheet: Stylesheet): SymbolInformation[];
    findDocumentSymbols2(document: TextDocument, stylesheet: Stylesheet): DocumentSymbol[];
    doCodeActions(document: TextDocument, range: Range, context: CodeActionContext, stylesheet: Stylesheet): Command[];
    doCodeActions2(document: TextDocument, range: Range, context: CodeActionContext, stylesheet: Stylesheet): CodeAction[];
    findDocumentColors(document: TextDocument, stylesheet: Stylesheet): ColorInformation[];
    getColorPresentations(document: TextDocument, stylesheet: Stylesheet, color: Color, range: Range): ColorPresentation[];
    prepareRename(document: TextDocument, position: Position, stylesheet: Stylesheet): Range | undefined;
    doRename(document: TextDocument, position: Position, newName: string, stylesheet: Stylesheet): WorkspaceEdit;
    getFoldingRanges(document: TextDocument, context?: {
        rangeLimit?: number;
    }): FoldingRange[];
    getSelectionRanges(document: TextDocument, positions: Position[], stylesheet: Stylesheet): SelectionRange[];
    format(document: TextDocument, range: Range | undefined, options: CSSFormatConfiguration): TextEdit[];
}
export declare function getDefaultCSSDataProvider(): ICSSDataProvider;
export declare function newCSSDataProvider(data: CSSDataV1): ICSSDataProvider;
export declare function getCSSLanguageService(options?: LanguageServiceOptions): LanguageService;
export declare function getSCSSLanguageService(options?: LanguageServiceOptions): LanguageService;
export declare function getLESSLanguageService(options?: LanguageServiceOptions): LanguageService;
