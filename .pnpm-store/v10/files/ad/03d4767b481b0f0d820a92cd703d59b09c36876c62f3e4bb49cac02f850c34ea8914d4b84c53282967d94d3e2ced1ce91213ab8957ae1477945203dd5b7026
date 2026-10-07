/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

declare namespace ts {
    namespace server {
        namespace protocol {
            export import ApplicableRefactorInfo = ts.ApplicableRefactorInfo;
            export import ClassificationType = ts.ClassificationType;
            export import CompletionsTriggerCharacter = ts.CompletionsTriggerCharacter;
            export import CompletionTriggerKind = ts.CompletionTriggerKind;
            export import InlayHintKind = ts.InlayHintKind;
            export import OrganizeImportsMode = ts.OrganizeImportsMode;
            export import RefactorActionInfo = ts.RefactorActionInfo;
            export import RefactorTriggerReason = ts.RefactorTriggerReason;
            export import RenameInfoFailure = ts.RenameInfoFailure;
            export import SemicolonPreference = ts.SemicolonPreference;
            export import SignatureHelpCharacterTypedReason = ts.SignatureHelpCharacterTypedReason;
            export import SignatureHelpInvokedReason = ts.SignatureHelpInvokedReason;
            export import SignatureHelpParameter = ts.SignatureHelpParameter;
            export import SignatureHelpRetriggerCharacter = ts.SignatureHelpRetriggerCharacter;
            export import SignatureHelpRetriggeredReason = ts.SignatureHelpRetriggeredReason;
            export import SignatureHelpTriggerCharacter = ts.SignatureHelpTriggerCharacter;
            export import SignatureHelpTriggerReason = ts.SignatureHelpTriggerReason;
            export import SymbolDisplayPart = ts.SymbolDisplayPart;
            export import UserPreferences = ts.UserPreferences;
            type ChangePropertyTypes<
                T,
                Substitutions extends {
                    [K in keyof T]?: any;
                },
            > = {
                [K in keyof T]: K extends keyof Substitutions ? Substitutions[K] : T[K];
            };
            type ChangeStringIndexSignature<T, NewStringIndexSignatureType> = {
                [K in keyof T]: string extends K ? NewStringIndexSignatureType : T[K];
            };
            export enum CommandTypes {
                JsxClosingTag = "jsxClosingTag",
                LinkedEditingRange = "linkedEditingRange",
                Brace = "brace",
                BraceCompletion = "braceCompletion",
                GetSpanOfEnclosingComment = "getSpanOfEnclosingComment",
                Change = "change",
                Close = "close",
                /** @deprecated Prefer CompletionInfo -- see comment on CompletionsResponse */
                Completions = "completions",
                CompletionInfo = "completionInfo",
                CompletionDetails = "completionEntryDetails",
                CompileOnSaveAffectedFileList = "compileOnSaveAffectedFileList",
                CompileOnSaveEmitFile = "compileOnSaveEmitFile",
                Configure = "configure",
                Definition = "definition",
                DefinitionAndBoundSpan = "definitionAndBoundSpan",
                Implementation = "implementation",
                Exit = "exit",
                FileReferences = "fileReferences",
                Format = "format",
                Formatonkey = "formatonkey",
                Geterr = "geterr",
                GeterrForProject = "geterrForProject",
                SemanticDiagnosticsSync = "semanticDiagnosticsSync",
                SyntacticDiagnosticsSync = "syntacticDiagnosticsSync",
                SuggestionDiagnosticsSync = "suggestionDiagnosticsSync",
                NavBar = "navbar",
                Navto = "navto",
                NavTree = "navtree",
                NavTreeFull = "navtree-full",
                DocumentHighlights = "documentHighlights",
                Open = "open",
                Quickinfo = "quickinfo",
                References = "references",
                Reload = "reload",
                Rename = "rename",
                Saveto = "saveto",
                SignatureHelp = "signatureHelp",
                FindSourceDefinition = "findSourceDefinition",
                Status = "status",
                TypeDefinition = "typeDefinition",
                ProjectInfo = "projectInfo",
                ReloadProjects = "reloadProjects",
                Unknown = "unknown",
                OpenExternalProject = "openExternalProject",
                OpenExternalProjects = "openExternalProjects",
                CloseExternalProject = "closeExternalProject",
                UpdateOpen = "updateOpen",
                GetOutliningSpans = "getOutliningSpans",
                TodoComments = "todoComments",
                Indentation = "indentation",
                DocCommentTemplate = "docCommentTemplate",
                CompilerOptionsForInferredProjects = "compilerOptionsForInferredProjects",
                GetCodeFixes = "getCodeFixes",
                GetCombinedCodeFix = "getCombinedCodeFix",
                ApplyCodeActionCommand = "applyCodeActionCommand",
                GetSupportedCodeFixes = "getSupportedCodeFixes",
                GetApplicableRefactors = "getApplicableRefactors",
                GetEditsForRefactor = "getEditsForRefactor",
                GetMoveToRefactoringFileSuggestions = "getMoveToRefactoringFileSuggestions",
                PreparePasteEdits = "preparePasteEdits",
                GetPasteEdits = "getPasteEdits",
                OrganizeImports = "organizeImports",
                GetEditsForFileRename = "getEditsForFileRename",
                ConfigurePlugin = "configurePlugin",
                SelectionRange = "selectionRange",
                ToggleLineComment = "toggleLineComment",
                ToggleMultilineComment = "toggleMultilineComment",
                CommentSelection = "commentSelection",
                UncommentSelection = "uncommentSelection",
                PrepareCallHierarchy = "prepareCallHierarchy",
                ProvideCallHierarchyIncomingCalls = "provideCallHierarchyIncomingCalls",
                ProvideCallHierarchyOutgoingCalls = "provideCallHierarchyOutgoingCalls",
                ProvideInlayHints = "provideInlayHints",
                WatchChange = "watchChange",
                MapCode = "mapCode",
            }
            /**
             * A TypeScript Server message
             */
            export interface Message {
                /**
                 * Sequence number of the message
                 */
                seq: number;
                /**
                 * One of "request", "response", or "event"
                 */
                type: "request" | "response" | "event";
            }
            /**
             * Client-initiated request message
             */
            export interface Request extends Message {
                type: "request";
                /**
                 * The command to execute
                 */
                command: string;
                /**
                 * Object containing arguments for the command
                 */
                arguments?: any;
            }
            /**
             * Request to reload the project structure for all the opened files
             */
            export interface ReloadProjectsRequest extends Request {
                command: CommandTypes.ReloadProjects;
            }
            /**
             * Server-initiated event message
             */
            export interface Event extends Message {
                type: "event";
                /**
                 * Name of event
                 */
                event: string;
                /**
                 * Event-specific information
                 */
                body?: any;
            }
            /**
             * Response by server to client request message.
             */
            export interface Response extends Message {
                type: "response";
                /**
                 * Sequence number of the request message.
                 */
                request_seq: number;
                /**
                 * Outcome of the request.
                 */
                success: boolean;
                /**
                 * The command requested.
                 */
                command: string;
                /**
                 * If success === false, this should always be provided.
                 * Otherwise, may (or may not) contain a success message.
                 */
                message?: string;
                /**
                 * Contains message body if success === true.
                 */
                body?: any;
                /**
                 * Contains extra information that plugin can include to be passed on
                 */
                metadata?: unknown;
                /**
                 * Exposes information about the performance of this request-response pair.
                 */
                performanceData?: PerformanceData;
            }
            export interface PerformanceData {
                /**
                 * Time spent updating the program graph, in milliseconds.
                 */
                updateGraphDurationMs?: number;
                /**
                 * The time spent creating or updating the auto-import program, in milliseconds.
                 */
                createAutoImportProviderProgramDurationMs?: number;
                /**
                 * The time spent computing diagnostics, in milliseconds.
                 */
                diagnosticsDuration?: FileDiagnosticPerformanceData[];
            }
            /**
             * Time spent computing each kind of diagnostics, in milliseconds.
             */
            export type DiagnosticPerformanceData = {
                [Kind in DiagnosticEventKind]?: number;
            };
            export interface FileDiagnosticPerformanceData extends DiagnosticPerformanceData {
                /**
                 * The file for which the performance data is reported.
                 */
                file: string;
            }
            /**
             * Arguments for FileRequest messages.
             */
            export interface FileRequestArgs {
                /**
                 * The file for the request (absolute pathname required).
                 */
                file: string;
                projectFileName?: string;
            }
            export interface StatusRequest extends Request {
                command: CommandTypes.Status;
            }
            export interface StatusResponseBody {
                /**
                 * The TypeScript version (`ts.version`).
                 */
                version: string;
            }
            /**
             * Response to StatusRequest
             */
            export interface StatusResponse extends Response {
                body: StatusResponseBody;
            }
            /**
             * Requests a JS Doc comment template for a given position
             */
            export interface DocCommentTemplateRequest extends FileLocationRequest {
                command: CommandTypes.DocCommentTemplate;
            }
            /**
             * Response to DocCommentTemplateRequest
             */
            export interface DocCommandTemplateResponse extends Response {
                body?: TextInsertion;
            }
            /**
             * A request to get TODO comments from the file
             */
            export interface TodoCommentRequest extends FileRequest {
                command: CommandTypes.TodoComments;
                arguments: TodoCommentRequestArgs;
            }
            /**
             * Arguments for TodoCommentRequest request.
             */
            export interface TodoCommentRequestArgs extends FileRequestArgs {
                /**
                 * Array of target TodoCommentDescriptors that describes TODO comments to be found
                 */
                descriptors: TodoCommentDescriptor[];
            }
            /**
             * Response for TodoCommentRequest request.
             */
            export interface TodoCommentsResponse extends Response {
                body?: TodoComment[];
            }
            /**
             * A request to determine if the caret is inside a comment.
             */
            export interface SpanOfEnclosingCommentRequest extends FileLocationRequest {
                command: CommandTypes.GetSpanOfEnclosingComment;
                arguments: SpanOfEnclosingCommentRequestArgs;
            }
            export interface SpanOfEnclosingCommentRequestArgs extends FileLocationRequestArgs {
                /**
                 * Requires that the enclosing span be a multi-line comment, or else the request returns undefined.
                 */
                onlyMultiLine: boolean;
            }
            /**
             * Request to obtain outlining spans in file.
             */
            export interface OutliningSpansRequest extends FileRequest {
                command: CommandTypes.GetOutliningSpans;
            }
            export type OutliningSpan = ChangePropertyTypes<ts.OutliningSpan, {
                textSpan: TextSpan;
                hintSpan: TextSpan;
            }>;
            /**
             * Response to OutliningSpansRequest request.
             */
            export interface OutliningSpansResponse extends Response {
                body?: OutliningSpan[];
            }
            /**
             * A request to get indentation for a location in file
             */
            export interface IndentationRequest extends FileLocationRequest {
                command: CommandTypes.Indentation;
                arguments: IndentationRequestArgs;
            }
            /**
             * Response for IndentationRequest request.
             */
            export interface IndentationResponse extends Response {
                body?: IndentationResult;
            }
            /**
             * Indentation result representing where indentation should be placed
             */
            export interface IndentationResult {
                /**
                 * The base position in the document that the indent should be relative to
                 */
                position: number;
                /**
                 * The number of columns the indent should be at relative to the position's column.
                 */
                indentation: number;
            }
            /**
             * Arguments for IndentationRequest request.
             */
            export interface IndentationRequestArgs extends FileLocationRequestArgs {
                /**
                 * An optional set of settings to be used when computing indentation.
                 * If argument is omitted - then it will use settings for file that were previously set via 'configure' request or global settings.
                 */
                options?: EditorSettings;
            }
            /**
             * Arguments for ProjectInfoRequest request.
             */
            export interface ProjectInfoRequestArgs extends FileRequestArgs {
                /**
                 * Indicate if the file name list of the project is needed
                 */
                needFileNameList: boolean;
                /**
                 * if true returns details about default configured project calculation
                 */
                needDefaultConfiguredProjectInfo?: boolean;
            }
            /**
             * A request to get the project information of the current file.
             */
            export interface ProjectInfoRequest extends Request {
                command: CommandTypes.ProjectInfo;
                arguments: ProjectInfoRequestArgs;
            }
            /**
             * A request to retrieve compiler options diagnostics for a project
             */
            export interface CompilerOptionsDiagnosticsRequest extends Request {
                arguments: CompilerOptionsDiagnosticsRequestArgs;
            }
            /**
             * Arguments for CompilerOptionsDiagnosticsRequest request.
             */
            export interface CompilerOptionsDiagnosticsRequestArgs {
                /**
                 * Name of the project to retrieve compiler options diagnostics.
                 */
                projectFileName: string;
            }
            /**
             * Details about the default project for the file if tsconfig file is found
             */
            export interface DefaultConfiguredProjectInfo {
                /** List of config files looked and did not match because file was not part of root file names */
                notMatchedByConfig?: readonly string[];
                /** List of projects which were loaded but file was not part of the project or is file from referenced project */
                notInProject?: readonly string[];
                /** Configured project used as default */
                defaultProject?: string;
            }
            /**
             * Response message body for "projectInfo" request
             */
            export interface ProjectInfo {
                /**
                 * For configured project, this is the normalized path of the 'tsconfig.json' file
                 * For inferred project, this is undefined
                 */
                configFileName: string;
                /**
                 * The list of normalized file name in the project, including 'lib.d.ts'
                 */
                fileNames?: string[];
                /**
                 * Indicates if the project has a active language service instance
                 */
                languageServiceDisabled?: boolean;
                /**
                 * Information about default project
                 */
                configuredProjectInfo?: DefaultConfiguredProjectInfo;
            }
            /**
             * Represents diagnostic info that includes location of diagnostic in two forms
             * - start position and length of the error span
             * - startLocation and endLocation - a pair of Location objects that store start/end line and offset of the error span.
             */
            export interface DiagnosticWithLinePosition {
                message: string;
                start: number;
                length: number;
                startLocation: Location;
                endLocation: Location;
                category: string;
                code: number;
                /** May store more in future. For now, this will simply be `true` to indicate when a diagnostic is an unused-identifier diagnostic. */
                reportsUnnecessary?: {};
                reportsDeprecated?: {};
                relatedInformation?: DiagnosticRelatedInformation[];
            }
            /**
             * Response message for "projectInfo" request
             */
            export interface ProjectInfoResponse extends Response {
                body?: ProjectInfo;
            }
            /**
             * Request whose sole parameter is a file name.
             */
            export interface FileRequest extends Request {
                arguments: FileRequestArgs;
            }
            /**
             * Instances of this interface specify a location in a source file:
             * (file, line, character offset), where line and character offset are 1-based.
             */
            export interface FileLocationRequestArgs extends FileRequestArgs {
                /**
                 * The line number for the request (1-based).
                 */
                line: number;
                /**
                 * The character offset (on the line) for the request (1-based).
                 */
                offset: number;
            }
            export type FileLocationOrRangeRequestArgs = FileLocationRequestArgs | FileRangeRequestArgs;
            /**
             * Request refactorings at a given position or selection area.
             */
            export interface GetApplicableRefactorsRequest extends Request {
                command: CommandTypes.GetApplicableRefactors;
                arguments: GetApplicableRefactorsRequestArgs;
            }
            export type GetApplicableRefactorsRequestArgs = FileLocationOrRangeRequestArgs & {
                triggerReason?: RefactorTriggerReason;
                kind?: string;
                /**
                 * Include refactor actions that require additional arguments to be passed when
                 * calling 'GetEditsForRefactor'. When true, clients should inspect the
                 * `isInteractive` property of each returned `RefactorActionInfo`
                 * and ensure they are able to collect the appropriate arguments for any
                 * interactive refactor before offering it.
                 */
                includeInteractiveActions?: boolean;
            };
            /**
             * Response is a list of available refactorings.
             * Each refactoring exposes one or more "Actions"; a user selects one action to invoke a refactoring
             */
            export interface GetApplicableRefactorsResponse extends Response {
                body?: ApplicableRefactorInfo[];
            }
            /**
             * Request refactorings at a given position or selection area to move to an existing file.
             */
            export interface GetMoveToRefactoringFileSuggestionsRequest extends Request {
                command: CommandTypes.GetMoveToRefactoringFileSuggestions;
                arguments: GetMoveToRefactoringFileSuggestionsRequestArgs;
            }
            export type GetMoveToRefactoringFileSuggestionsRequestArgs = FileLocationOrRangeRequestArgs & {
                kind?: string;
            };
            /**
             * Response is a list of available files.
             * Each refactoring exposes one or more "Actions"; a user selects one action to invoke a refactoring
             */
            export interface GetMoveToRefactoringFileSuggestions extends Response {
                body: {
                    newFileName: string;
                    files: string[];
                };
            }
            /**
             * Request to check if `pasteEdits` should be provided for a given location post copying text from that location.
             */
            export interface PreparePasteEditsRequest extends FileRequest {
                command: CommandTypes.PreparePasteEdits;
                arguments: PreparePasteEditsRequestArgs;
            }
            export interface PreparePasteEditsRequestArgs extends FileRequestArgs {
                copiedTextSpan: TextSpan[];
            }
            export interface PreparePasteEditsResponse extends Response {
                body: boolean;
            }
            /**
             * Request refactorings at a given position post pasting text from some other location.
             */
            export interface GetPasteEditsRequest extends Request {
                command: CommandTypes.GetPasteEdits;
                arguments: GetPasteEditsRequestArgs;
            }
            export interface GetPasteEditsRequestArgs extends FileRequestArgs {
                /** The text that gets pasted in a file.  */
                pastedText: string[];
                /** Locations of where the `pastedText` gets added in a file. If the length of the `pastedText` and `pastedLocations` are not the same,
                 *  then the `pastedText` is combined into one and added at all the `pastedLocations`.
                 */
                pasteLocations: TextSpan[];
                /** The source location of each `pastedText`. If present, the length of `spans` must be equal to the length of `pastedText`. */
                copiedFrom?: {
                    file: string;
                    spans: TextSpan[];
                };
            }
            export interface GetPasteEditsResponse extends Response {
                body: PasteEditsAction;
            }
            export interface PasteEditsAction {
                edits: FileCodeEdits[];
                fixId?: {};
            }
            export interface GetEditsForRefactorRequest extends Request {
                command: CommandTypes.GetEditsForRefactor;
                arguments: GetEditsForRefactorRequestArgs;
            }
            /**
             * Request the edits that a particular refactoring action produces.
             * Callers must specify the name of the refactor and the name of the action.
             */
            export type GetEditsForRefactorRequestArgs = FileLocationOrRangeRequestArgs & {
                refactor: string;
                action: string;
                interactiveRefactorArguments?: InteractiveRefactorArguments;
            };
            export interface GetEditsForRefactorResponse extends Response {
                body?: RefactorEditInfo;
            }
            export interface RefactorEditInfo {
                edits: FileCodeEdits[];
                /**
                 * An optional location where the editor should start a rename operation once
                 * the refactoring edits have been applied
                 */
                renameLocation?: Location;
                renameFilename?: string;
                notApplicableReason?: string;
            }
            /**
             * Organize imports by:
             *   1) Removing unused imports
             *   2) Coalescing imports from the same module
             *   3) Sorting imports
             */
            export interface OrganizeImportsRequest extends Request {
                command: CommandTypes.OrganizeImports;
                arguments: OrganizeImportsRequestArgs;
            }
            export type OrganizeImportsScope = GetCombinedCodeFixScope;
            export interface OrganizeImportsRequestArgs {
                scope: OrganizeImportsScope;
                /** @deprecated Use `mode` instead */
                skipDestructiveCodeActions?: boolean;
                mode?: OrganizeImportsMode;
            }
            export interface OrganizeImportsResponse extends Response {
                body: readonly FileCodeEdits[];
            }
            export interface GetEditsForFileRenameRequest extends Request {
                command: CommandTypes.GetEditsForFileRename;
                arguments: GetEditsForFileRenameRequestArgs;
            }
            /** Note: Paths may also be directories. */
            export interface GetEditsForFileRenameRequestArgs {
                readonly oldFilePath: string;
                readonly newFilePath: string;
            }
            export interface GetEditsForFileRenameResponse extends Response {
                body: readonly FileCodeEdits[];
            }
            /**
             * Request for the available codefixes at a specific position.
             */
            export interface CodeFixRequest extends Request {
                command: CommandTypes.GetCodeFixes;
                arguments: CodeFixRequestArgs;
            }
            export interface GetCombinedCodeFixRequest extends Request {
                command: CommandTypes.GetCombinedCodeFix;
                arguments: GetCombinedCodeFixRequestArgs;
            }
            export interface GetCombinedCodeFixResponse extends Response {
                body: CombinedCodeActions;
            }
            export interface ApplyCodeActionCommandRequest extends Request {
                command: CommandTypes.ApplyCodeActionCommand;
                arguments: ApplyCodeActionCommandRequestArgs;
            }
            export interface ApplyCodeActionCommandResponse extends Response {
            }
            export interface FileRangeRequestArgs extends FileRequestArgs, FileRange {
            }
            /**
             * Instances of this interface specify errorcodes on a specific location in a sourcefile.
             */
            export interface CodeFixRequestArgs extends FileRangeRequestArgs {
                /**
                 * Errorcodes we want to get the fixes for.
                 */
                errorCodes: readonly number[];
            }
            export interface GetCombinedCodeFixRequestArgs {
                scope: GetCombinedCodeFixScope;
                fixId: {};
            }
            export interface GetCombinedCodeFixScope {
                type: "file";
                args: FileRequestArgs;
            }
            export interface ApplyCodeActionCommandRequestArgs {
                /** May also be an array of commands. */
                command: {};
            }
            /**
             * Response for GetCodeFixes request.
             */
            export interface GetCodeFixesResponse extends Response {
                body?: CodeAction[];
            }
            /**
             * A request whose arguments specify a file location (file, line, col).
             */
            export interface FileLocationRequest extends FileRequest {
                arguments: FileLocationRequestArgs;
            }
            /**
             * A request to get codes of supported code fixes.
             */
            export interface GetSupportedCodeFixesRequest extends Request {
                command: CommandTypes.GetSupportedCodeFixes;
                arguments?: Partial<FileRequestArgs>;
            }
            /**
             * A response for GetSupportedCodeFixesRequest request.
             */
            export interface GetSupportedCodeFixesResponse extends Response {
                /**
                 * List of error codes supported by the server.
                 */
                body?: string[];
            }
            /**
             * A request to get encoded semantic classifications for a span in the file
             */
            export interface EncodedSemanticClassificationsRequest extends FileRequest {
                arguments: EncodedSemanticClassificationsRequestArgs;
            }
            /**
             * Arguments for EncodedSemanticClassificationsRequest request.
             */
            export interface EncodedSemanticClassificationsRequestArgs extends FileRequestArgs {
                /**
                 * Start position of the span.
                 */
                start: number;
                /**
                 * Length of the span.
                 */
                length: number;
                /**
                 * Optional parameter for the semantic highlighting response, if absent it
                 * defaults to "original".
                 */
                format?: "original" | "2020";
            }
            /** The response for a EncodedSemanticClassificationsRequest */
            export interface EncodedSemanticClassificationsResponse extends Response {
                body?: EncodedSemanticClassificationsResponseBody;
            }
            /**
             * Implementation response message. Gives series of text spans depending on the format ar.
             */
            export interface EncodedSemanticClassificationsResponseBody {
                endOfLineState: EndOfLineState;
                spans: number[];
            }
            /**
             * Arguments in document highlight request; include: filesToSearch, file,
             * line, offset.
             */
            export interface DocumentHighlightsRequestArgs extends FileLocationRequestArgs {
                /**
                 * List of files to search for document highlights.
                 */
                filesToSearch: string[];
            }
            /**
             * Go to definition request; value of command field is
             * "definition". Return response giving the file locations that
             * define the symbol found in file at location line, col.
             */
            export interface DefinitionRequest extends FileLocationRequest {
                command: CommandTypes.Definition;
            }
            export interface DefinitionAndBoundSpanRequest extends FileLocationRequest {
                readonly command: CommandTypes.DefinitionAndBoundSpan;
            }
            export interface FindSourceDefinitionRequest extends FileLocationRequest {
                readonly command: CommandTypes.FindSourceDefinition;
            }
            export interface DefinitionAndBoundSpanResponse extends Response {
                readonly body: DefinitionInfoAndBoundSpan;
            }
            /**
             * Go to type request; value of command field is
             * "typeDefinition". Return response giving the file locations that
             * define the type for the symbol found in file at location line, col.
             */
            export interface TypeDefinitionRequest extends FileLocationRequest {
                command: CommandTypes.TypeDefinition;
            }
            /**
             * Go to implementation request; value of command field is
             * "implementation". Return response giving the file locations that
             * implement the symbol found in file at location line, col.
             */
            export interface ImplementationRequest extends FileLocationRequest {
                command: CommandTypes.Implementation;
            }
            /**
             * Location in source code expressed as (one-based) line and (one-based) column offset.
             */
            export interface Location {
                line: number;
                offset: number;
            }
            /**
             * Object found in response messages defining a span of text in source code.
             */
            export interface TextSpan {
                /**
                 * First character of the definition.
                 */
                start: Location;
                /**
                 * One character past last character of the definition.
                 */
                end: Location;
            }
            /**
             * Object found in response messages defining a span of text in a specific source file.
             */
            export interface FileSpan extends TextSpan {
                /**
                 * File containing text span.
                 */
                file: string;
            }
            export interface JSDocTagInfo {
                /** Name of the JSDoc tag */
                name: string;
                /**
                 * Comment text after the JSDoc tag -- the text after the tag name until the next tag or end of comment
                 * Display parts when UserPreferences.displayPartsForJSDoc is true, flattened to string otherwise.
                 */
                text?: string | SymbolDisplayPart[];
            }
            export interface TextSpanWithContext extends TextSpan {
                contextStart?: Location;
                contextEnd?: Location;
            }
            export interface FileSpanWithContext extends FileSpan, TextSpanWithContext {
            }
            export interface DefinitionInfo extends FileSpanWithContext {
                /**
                 * When true, the file may or may not exist.
                 */
                unverified?: boolean;
            }
            export interface DefinitionInfoAndBoundSpan {
                definitions: readonly DefinitionInfo[];
                textSpan: TextSpan;
            }
            /**
             * Definition response message.  Gives text range for definition.
             */
            export interface DefinitionResponse extends Response {
                body?: DefinitionInfo[];
            }
            export interface DefinitionInfoAndBoundSpanResponse extends Response {
                body?: DefinitionInfoAndBoundSpan;
            }
            /** @deprecated Use `DefinitionInfoAndBoundSpanResponse` instead. */
            export type DefinitionInfoAndBoundSpanReponse = DefinitionInfoAndBoundSpanResponse;
            /**
             * Definition response message.  Gives text range for definition.
             */
            export interface TypeDefinitionResponse extends Response {
                body?: FileSpanWithContext[];
            }
            /**
             * Implementation response message.  Gives text range for implementations.
             */
            export interface ImplementationResponse extends Response {
                body?: FileSpanWithContext[];
            }
            /**
             * Request to get brace completion for a location in the file.
             */
            export interface BraceCompletionRequest extends FileLocationRequest {
                command: CommandTypes.BraceCompletion;
                arguments: BraceCompletionRequestArgs;
            }
            /**
             * Argument for BraceCompletionRequest request.
             */
            export interface BraceCompletionRequestArgs extends FileLocationRequestArgs {
                /**
                 * Kind of opening brace
                 */
                openingBrace: string;
            }
            export interface JsxClosingTagRequest extends FileLocationRequest {
                readonly command: CommandTypes.JsxClosingTag;
                readonly arguments: JsxClosingTagRequestArgs;
            }
            export interface JsxClosingTagRequestArgs extends FileLocationRequestArgs {
            }
            export interface JsxClosingTagResponse extends Response {
                readonly body: TextInsertion;
            }
            export interface LinkedEditingRangeRequest extends FileLocationRequest {
                readonly command: CommandTypes.LinkedEditingRange;
            }
            export interface LinkedEditingRangesBody {
                ranges: TextSpan[];
                wordPattern?: string;
            }
            export interface LinkedEditingRangeResponse extends Response {
                readonly body: LinkedEditingRangesBody;
            }
            /**
             * Get document highlights request; value of command field is
             * "documentHighlights". Return response giving spans that are relevant
             * in the file at a given line and column.
             */
            export interface DocumentHighlightsRequest extends FileLocationRequest {
                command: CommandTypes.DocumentHighlights;
                arguments: DocumentHighlightsRequestArgs;
            }
            /**
             * Span augmented with extra information that denotes the kind of the highlighting to be used for span.
             */
            export interface HighlightSpan extends TextSpanWithContext {
                kind: HighlightSpanKind;
            }
            /**
             * Represents a set of highligh spans for a give name
             */
            export interface DocumentHighlightsItem {
                /**
                 * File containing highlight spans.
                 */
                file: string;
                /**
                 * Spans to highlight in file.
                 */
                highlightSpans: HighlightSpan[];
            }
            /**
             * Response for a DocumentHighlightsRequest request.
             */
            export interface DocumentHighlightsResponse extends Response {
                body?: DocumentHighlightsItem[];
            }
            /**
             * Find references request; value of command field is
             * "references". Return response giving the file locations that
             * reference the symbol found in file at location line, col.
             */
            export interface ReferencesRequest extends FileLocationRequest {
                command: CommandTypes.References;
            }
            export interface ReferencesResponseItem extends FileSpanWithContext {
                /**
                 * Text of line containing the reference. Including this
                 * with the response avoids latency of editor loading files
                 * to show text of reference line (the server already has loaded the referencing files).
                 *
                 * If {@link UserPreferences.disableLineTextInReferences} is enabled, the property won't be filled
                 */
                lineText?: string;
                /**
                 * True if reference is a write location, false otherwise.
                 */
                isWriteAccess: boolean;
                /**
                 * Present only if the search was triggered from a declaration.
                 * True indicates that the references refers to the same symbol
                 * (i.e. has the same meaning) as the declaration that began the
                 * search.
                 */
                isDefinition?: boolean;
            }
            /**
             * The body of a "references" response message.
             */
            export interface ReferencesResponseBody {
                /**
                 * The file locations referencing the symbol.
                 */
                refs: readonly ReferencesResponseItem[];
                /**
                 * The name of the symbol.
                 */
                symbolName: string;
                /**
                 * The start character offset of the symbol (on the line provided by the references request).
                 */
                symbolStartOffset: number;
                /**
                 * The full display name of the symbol.
                 */
                symbolDisplayString: string;
            }
            /**
             * Response to "references" request.
             */
            export interface ReferencesResponse extends Response {
                body?: ReferencesResponseBody;
            }
            export interface FileReferencesRequest extends FileRequest {
                command: CommandTypes.FileReferences;
            }
            export interface FileReferencesResponseBody {
                /**
                 * The file locations referencing the symbol.
                 */
                refs: readonly ReferencesResponseItem[];
                /**
                 * The name of the symbol.
                 */
                symbolName: string;
            }
            export interface FileReferencesResponse extends Response {
                body?: FileReferencesResponseBody;
            }
            /**
             * Argument for RenameRequest request.
             */
            export interface RenameRequestArgs extends FileLocationRequestArgs {
                /**
                 * Should text at specified location be found/changed in comments?
                 */
                findInComments?: boolean;
                /**
                 * Should text at specified location be found/changed in strings?
                 */
                findInStrings?: boolean;
            }
            /**
             * Rename request; value of command field is "rename". Return
             * response giving the file locations that reference the symbol
             * found in file at location line, col. Also return full display
             * name of the symbol so that client can print it unambiguously.
             */
            export interface RenameRequest extends FileLocationRequest {
                command: CommandTypes.Rename;
                arguments: RenameRequestArgs;
            }
            /**
             * Information about the item to be renamed.
             */
            export type RenameInfo = RenameInfoSuccess | RenameInfoFailure;
            export type RenameInfoSuccess = ChangePropertyTypes<ts.RenameInfoSuccess, {
                triggerSpan: TextSpan;
            }>;
            /**
             *  A group of text spans, all in 'file'.
             */
            export interface SpanGroup {
                /** The file to which the spans apply */
                file: string;
                /** The text spans in this group */
                locs: RenameTextSpan[];
            }
            export interface RenameTextSpan extends TextSpanWithContext {
                readonly prefixText?: string;
                readonly suffixText?: string;
            }
            export interface RenameResponseBody {
                /**
                 * Information about the item to be renamed.
                 */
                info: RenameInfo;
                /**
                 * An array of span groups (one per file) that refer to the item to be renamed.
                 */
                locs: readonly SpanGroup[];
            }
            /**
             * Rename response message.
             */
            export interface RenameResponse extends Response {
                body?: RenameResponseBody;
            }
            /**
             * Represents a file in external project.
             * External project is project whose set of files, compilation options and open\close state
             * is maintained by the client (i.e. if all this data come from .csproj file in Visual Studio).
             * External project will exist even if all files in it are closed and should be closed explicitly.
             * If external project includes one or more tsconfig.json/jsconfig.json files then tsserver will
             * create configured project for every config file but will maintain a link that these projects were created
             * as a result of opening external project so they should be removed once external project is closed.
             */
            export interface ExternalFile {
                /**
                 * Name of file file
                 */
                fileName: string;
                /**
                 * Script kind of the file
                 */
                scriptKind?: ScriptKindName | ScriptKind;
                /**
                 * Whether file has mixed content (i.e. .cshtml file that combines html markup with C#/JavaScript)
                 */
                hasMixedContent?: boolean;
                /**
                 * Content of the file
                 */
                content?: string;
            }
            /**
             * Represent an external project
             */
            export interface ExternalProject {
                /**
                 * Project name
                 */
                projectFileName: string;
                /**
                 * List of root files in project
                 */
                rootFiles: ExternalFile[];
                /**
                 * Compiler options for the project
                 */
                options: ExternalProjectCompilerOptions;
                /**
                 * Explicitly specified type acquisition for the project
                 */
                typeAcquisition?: TypeAcquisition;
            }
            export interface CompileOnSaveMixin {
                /**
                 * If compile on save is enabled for the project
                 */
                compileOnSave?: boolean;
            }
            /**
             * For external projects, some of the project settings are sent together with
             * compiler settings.
             */
            export type ExternalProjectCompilerOptions = CompilerOptions & CompileOnSaveMixin & WatchOptions;
            export interface FileWithProjectReferenceRedirectInfo {
                /**
                 * Name of file
                 */
                fileName: string;
                /**
                 * True if the file is primarily included in a referenced project
                 */
                isSourceOfProjectReferenceRedirect: boolean;
            }
            /**
             * Represents a set of changes that happen in project
             */
            export interface ProjectChanges {
                /**
                 * List of added files
                 */
                added: string[] | FileWithProjectReferenceRedirectInfo[];
                /**
                 * List of removed files
                 */
                removed: string[] | FileWithProjectReferenceRedirectInfo[];
                /**
                 * List of updated files
                 */
                updated: string[] | FileWithProjectReferenceRedirectInfo[];
                /**
                 * List of files that have had their project reference redirect status updated
                 * Only provided when the synchronizeProjectList request has includeProjectReferenceRedirectInfo set to true
                 */
                updatedRedirects?: FileWithProjectReferenceRedirectInfo[];
            }
            /**
             * Information found in a configure request.
             */
            export interface ConfigureRequestArguments {
                /**
                 * Information about the host, for example 'Emacs 24.4' or
                 * 'Sublime Text version 3075'
                 */
                hostInfo?: string;
                /**
                 * If present, tab settings apply only to this file.
                 */
                file?: string;
                /**
                 * The format options to use during formatting and other code editing features.
                 */
                formatOptions?: FormatCodeSettings;
                preferences?: UserPreferences;
                /**
                 * The host's additional supported .js file extensions
                 */
                extraFileExtensions?: FileExtensionInfo[];
                watchOptions?: WatchOptions;
            }
            export enum WatchFileKind {
                FixedPollingInterval = "FixedPollingInterval",
                PriorityPollingInterval = "PriorityPollingInterval",
                DynamicPriorityPolling = "DynamicPriorityPolling",
                FixedChunkSizePolling = "FixedChunkSizePolling",
                UseFsEvents = "UseFsEvents",
                UseFsEventsOnParentDirectory = "UseFsEventsOnParentDirectory",
            }
            export enum WatchDirectoryKind {
                UseFsEvents = "UseFsEvents",
                FixedPollingInterval = "FixedPollingInterval",
                DynamicPriorityPolling = "DynamicPriorityPolling",
                FixedChunkSizePolling = "FixedChunkSizePolling",
            }
            export enum PollingWatchKind {
                FixedInterval = "FixedInterval",
                PriorityInterval = "PriorityInterval",
                DynamicPriority = "DynamicPriority",
                FixedChunkSize = "FixedChunkSize",
            }
            export interface WatchOptions {
                watchFile?: WatchFileKind | ts.WatchFileKind;
                watchDirectory?: WatchDirectoryKind | ts.WatchDirectoryKind;
                fallbackPolling?: PollingWatchKind | ts.PollingWatchKind;
                synchronousWatchDirectory?: boolean;
                excludeDirectories?: string[];
                excludeFiles?: string[];
                [option: string]: CompilerOptionsValue | undefined;
            }
            /**
             *  Configure request; value of command field is "configure".  Specifies
             *  host information, such as host type, tab size, and indent size.
             */
            export interface ConfigureRequest extends Request {
                command: CommandTypes.Configure;
                arguments: ConfigureRequestArguments;
            }
            /**
             * Response to "configure" request.  This is just an acknowledgement, so
             * no body field is required.
             */
            export interface ConfigureResponse extends Response {
            }
            export interface ConfigurePluginRequestArguments {
                pluginName: string;
                configuration: any;
            }
            export interface ConfigurePluginRequest extends Request {
                command: CommandTypes.ConfigurePlugin;
                arguments: ConfigurePluginRequestArguments;
            }
            export interface ConfigurePluginResponse extends Response {
            }
            export interface SelectionRangeRequest extends FileRequest {
                command: CommandTypes.SelectionRange;
                arguments: SelectionRangeRequestArgs;
            }
            export interface SelectionRangeRequestArgs extends FileRequestArgs {
                locations: Location[];
            }
            export interface SelectionRangeResponse extends Response {
                body?: SelectionRange[];
            }
            export interface SelectionRange {
                textSpan: TextSpan;
                parent?: SelectionRange;
            }
            export interface ToggleLineCommentRequest extends FileRequest {
                command: CommandTypes.ToggleLineComment;
                arguments: FileRangeRequestArgs;
            }
            export interface ToggleMultilineCommentRequest extends FileRequest {
                command: CommandTypes.ToggleMultilineComment;
                arguments: FileRangeRequestArgs;
            }
            export interface CommentSelectionRequest extends FileRequest {
                command: CommandTypes.CommentSelection;
                arguments: FileRangeRequestArgs;
            }
            export interface UncommentSelectionRequest extends FileRequest {
                command: CommandTypes.UncommentSelection;
                arguments: FileRangeRequestArgs;
            }
            /**
             *  Information found in an "open" request.
             */
            export interface OpenRequestArgs extends FileRequestArgs {
                /**
                 * Used when a version of the file content is known to be more up to date than the one on disk.
                 * Then the known content will be used upon opening instead of the disk copy
                 */
                fileContent?: string;
                /**
                 * Used to specify the script kind of the file explicitly. It could be one of the following:
                 *      "TS", "JS", "TSX", "JSX"
                 */
                scriptKindName?: ScriptKindName;
                /**
                 * Used to limit the searching for project config file. If given the searching will stop at this
                 * root path; otherwise it will go all the way up to the dist root path.
                 */
                projectRootPath?: string;
            }
            export type ScriptKindName = "TS" | "JS" | "TSX" | "JSX";
            /**
             * Open request; value of command field is "open". Notify the
             * server that the client has file open.  The server will not
             * monitor the filesystem for changes in this file and will assume
             * that the client is updating the server (using the change and/or
             * reload messages) when the file changes. Server does not currently
             * send a response to an open request.
             */
            export interface OpenRequest extends Request {
                command: CommandTypes.Open;
                arguments: OpenRequestArgs;
            }
            /**
             * Request to open or update external project
             */
            export interface OpenExternalProjectRequest extends Request {
                command: CommandTypes.OpenExternalProject;
                arguments: OpenExternalProjectArgs;
            }
            /**
             * Arguments to OpenExternalProjectRequest request
             */
            export type OpenExternalProjectArgs = ExternalProject;
            /**
             * Request to open multiple external projects
             */
            export interface OpenExternalProjectsRequest extends Request {
                command: CommandTypes.OpenExternalProjects;
                arguments: OpenExternalProjectsArgs;
            }
            /**
             * Arguments to OpenExternalProjectsRequest
             */
            export interface OpenExternalProjectsArgs {
                /**
                 * List of external projects to open or update
                 */
                projects: ExternalProject[];
            }
            /**
             * Response to OpenExternalProjectRequest request. This is just an acknowledgement, so
             * no body field is required.
             */
            export interface OpenExternalProjectResponse extends Response {
            }
            /**
             * Response to OpenExternalProjectsRequest request. This is just an acknowledgement, so
             * no body field is required.
             */
            export interface OpenExternalProjectsResponse extends Response {
            }
            /**
             * Request to close external project.
             */
            export interface CloseExternalProjectRequest extends Request {
                command: CommandTypes.CloseExternalProject;
                arguments: CloseExternalProjectRequestArgs;
            }
            /**
             * Arguments to CloseExternalProjectRequest request
             */
            export interface CloseExternalProjectRequestArgs {
                /**
                 * Name of the project to close
                 */
                projectFileName: string;
            }
            /**
             * Response to CloseExternalProjectRequest request. This is just an acknowledgement, so
             * no body field is required.
             */
            export interface CloseExternalProjectResponse extends Response {
            }
            /**
             * Request to synchronize list of open files with the client
             */
            export interface UpdateOpenRequest extends Request {
                command: CommandTypes.UpdateOpen;
                arguments: UpdateOpenRequestArgs;
            }
            /**
             * Arguments to UpdateOpenRequest
             */
            export interface UpdateOpenRequestArgs {
                /**
                 * List of newly open files
                 */
                openFiles?: OpenRequestArgs[];
                /**
                 * List of open files files that were changes
                 */
                changedFiles?: FileCodeEdits[];
                /**
                 * List of files that were closed
                 */
                closedFiles?: string[];
            }
            /**
             * External projects have a typeAcquisition option so they need to be added separately to compiler options for inferred projects.
             */
            export type InferredProjectCompilerOptions = ExternalProjectCompilerOptions & TypeAcquisition;
            /**
             * Request to set compiler options for inferred projects.
             * External projects are opened / closed explicitly.
             * Configured projects are opened when user opens loose file that has 'tsconfig.json' or 'jsconfig.json' anywhere in one of containing folders.
             * This configuration file will be used to obtain a list of files and configuration settings for the project.
             * Inferred projects are created when user opens a loose file that is not the part of external project
             * or configured project and will contain only open file and transitive closure of referenced files if 'useOneInferredProject' is false,
             * or all open loose files and its transitive closure of referenced files if 'useOneInferredProject' is true.
             */
            export interface SetCompilerOptionsForInferredProjectsRequest extends Request {
                command: CommandTypes.CompilerOptionsForInferredProjects;
                arguments: SetCompilerOptionsForInferredProjectsArgs;
            }
            /**
             * Argument for SetCompilerOptionsForInferredProjectsRequest request.
             */
            export interface SetCompilerOptionsForInferredProjectsArgs {
                /**
                 * Compiler options to be used with inferred projects.
                 */
                options: InferredProjectCompilerOptions;
                /**
                 * Specifies the project root path used to scope compiler options.
                 * It is an error to provide this property if the server has not been started with
                 * `useInferredProjectPerProjectRoot` enabled.
                 */
                projectRootPath?: string;
            }
            /**
             * Response to SetCompilerOptionsForInferredProjectsResponse request. This is just an acknowledgement, so
             * no body field is required.
             */
            export interface SetCompilerOptionsForInferredProjectsResponse extends Response {
            }
            /**
             *  Exit request; value of command field is "exit".  Ask the server process
             *  to exit.
             */
            export interface ExitRequest extends Request {
                command: CommandTypes.Exit;
            }
            /**
             * Close request; value of command field is "close". Notify the
             * server that the client has closed a previously open file.  If
             * file is still referenced by open files, the server will resume
             * monitoring the filesystem for changes to file.  Server does not
             * currently send a response to a close request.
             */
            export interface CloseRequest extends FileRequest {
                command: CommandTypes.Close;
            }
            export interface WatchChangeRequest extends Request {
                command: CommandTypes.WatchChange;
                arguments: WatchChangeRequestArgs | readonly WatchChangeRequestArgs[];
            }
            export interface WatchChangeRequestArgs {
                id: number;
                created?: string[];
                deleted?: string[];
                updated?: string[];
            }
            /**
             * Request to obtain the list of files that should be regenerated if target file is recompiled.
             * NOTE: this us query-only operation and does not generate any output on disk.
             */
            export interface CompileOnSaveAffectedFileListRequest extends FileRequest {
                command: CommandTypes.CompileOnSaveAffectedFileList;
            }
            /**
             * Contains a list of files that should be regenerated in a project
             */
            export interface CompileOnSaveAffectedFileListSingleProject {
                /**
                 * Project name
                 */
                projectFileName: string;
                /**
                 * List of files names that should be recompiled
                 */
                fileNames: string[];
                /**
                 * true if project uses outFile or out compiler option
                 */
                projectUsesOutFile: boolean;
            }
            /**
             * Response for CompileOnSaveAffectedFileListRequest request;
             */
            export interface CompileOnSaveAffectedFileListResponse extends Response {
                body: CompileOnSaveAffectedFileListSingleProject[];
            }
            /**
             * Request to recompile the file. All generated outputs (.js, .d.ts or .js.map files) is written on disk.
             */
            export interface CompileOnSaveEmitFileRequest extends FileRequest {
                command: CommandTypes.CompileOnSaveEmitFile;
                arguments: CompileOnSaveEmitFileRequestArgs;
            }
            /**
             * Arguments for CompileOnSaveEmitFileRequest
             */
            export interface CompileOnSaveEmitFileRequestArgs extends FileRequestArgs {
                /**
                 * if true - then file should be recompiled even if it does not have any changes.
                 */
                forced?: boolean;
                includeLinePosition?: boolean;
                /** if true - return response as object with emitSkipped and diagnostics */
                richResponse?: boolean;
            }
            export interface CompileOnSaveEmitFileResponse extends Response {
                body: boolean | EmitResult;
            }
            export interface EmitResult {
                emitSkipped: boolean;
                diagnostics: Diagnostic[] | DiagnosticWithLinePosition[];
            }
            /**
             * Quickinfo request; value of command field is
             * "quickinfo". Return response giving a quick type and
             * documentation string for the symbol found in file at location
             * line, col.
             */
            export interface QuickInfoRequest extends FileLocationRequest {
                command: CommandTypes.Quickinfo;
                arguments: FileLocationRequestArgs;
            }
            export interface QuickInfoRequestArgs extends FileLocationRequestArgs {
                /**
                 * This controls how many levels of definitions will be expanded in the quick info response.
                 * The default value is 0.
                 */
                verbosityLevel?: number;
            }
            /**
             * Body of QuickInfoResponse.
             */
            export interface QuickInfoResponseBody {
                /**
                 * The symbol's kind (such as 'className' or 'parameterName' or plain 'text').
                 */
                kind: ScriptElementKind;
                /**
                 * Optional modifiers for the kind (such as 'public').
                 */
                kindModifiers: string;
                /**
                 * Starting file location of symbol.
                 */
                start: Location;
                /**
                 * One past last character of symbol.
                 */
                end: Location;
                /**
                 * Type and kind of symbol.
                 */
                displayString: string;
                /**
                 * Documentation associated with symbol.
                 * Display parts when UserPreferences.displayPartsForJSDoc is true, flattened to string otherwise.
                 */
                documentation: string | SymbolDisplayPart[];
                /**
                 * JSDoc tags associated with symbol.
                 */
                tags: JSDocTagInfo[];
                /**
                 * Whether the verbosity level can be increased for this quick info response.
                 */
                canIncreaseVerbosityLevel?: boolean;
            }
            /**
             * Quickinfo response message.
             */
            export interface QuickInfoResponse extends Response {
                body?: QuickInfoResponseBody;
            }
            /**
             * Arguments for format messages.
             */
            export interface FormatRequestArgs extends FileLocationRequestArgs {
                /**
                 * Last line of range for which to format text in file.
                 */
                endLine: number;
                /**
                 * Character offset on last line of range for which to format text in file.
                 */
                endOffset: number;
                /**
                 * Format options to be used.
                 */
                options?: FormatCodeSettings;
            }
            /**
             * Format request; value of command field is "format".  Return
             * response giving zero or more edit instructions.  The edit
             * instructions will be sorted in file order.  Applying the edit
             * instructions in reverse to file will result in correctly
             * reformatted text.
             */
            export interface FormatRequest extends FileLocationRequest {
                command: CommandTypes.Format;
                arguments: FormatRequestArgs;
            }
            /**
             * Object found in response messages defining an editing
             * instruction for a span of text in source code.  The effect of
             * this instruction is to replace the text starting at start and
             * ending one character before end with newText. For an insertion,
             * the text span is empty.  For a deletion, newText is empty.
             */
            export interface CodeEdit {
                /**
                 * First character of the text span to edit.
                 */
                start: Location;
                /**
                 * One character past last character of the text span to edit.
                 */
                end: Location;
                /**
                 * Replace the span defined above with this string (may be
                 * the empty string).
                 */
                newText: string;
            }
            export interface FileCodeEdits {
                fileName: string;
                textChanges: CodeEdit[];
            }
            export interface CodeFixResponse extends Response {
                /** The code actions that are available */
                body?: CodeFixAction[];
            }
            export interface CodeAction {
                /** Description of the code action to display in the UI of the editor */
                description: string;
                /** Text changes to apply to each file as part of the code action */
                changes: FileCodeEdits[];
                /** A command is an opaque object that should be passed to `ApplyCodeActionCommandRequestArgs` without modification.  */
                commands?: {}[];
            }
            export interface CombinedCodeActions {
                changes: readonly FileCodeEdits[];
                commands?: readonly {}[];
            }
            export interface CodeFixAction extends CodeAction {
                /** Short name to identify the fix, for use by telemetry. */
                fixName: string;
                /**
                 * If present, one may call 'getCombinedCodeFix' with this fixId.
                 * This may be omitted to indicate that the code fix can't be applied in a group.
                 */
                fixId?: {};
                /** Should be present if and only if 'fixId' is. */
                fixAllDescription?: string;
            }
            /**
             * Format and format on key response message.
             */
            export interface FormatResponse extends Response {
                body?: CodeEdit[];
            }
            /**
             * Arguments for format on key messages.
             */
            export interface FormatOnKeyRequestArgs extends FileLocationRequestArgs {
                /**
                 * Key pressed (';', '\n', or '}').
                 */
                key: string;
                options?: FormatCodeSettings;
            }
            /**
             * Format on key request; value of command field is
             * "formatonkey". Given file location and key typed (as string),
             * return response giving zero or more edit instructions.  The
             * edit instructions will be sorted in file order.  Applying the
             * edit instructions in reverse to file will result in correctly
             * reformatted text.
             */
            export interface FormatOnKeyRequest extends FileLocationRequest {
                command: CommandTypes.Formatonkey;
                arguments: FormatOnKeyRequestArgs;
            }
            /**
             * Arguments for completions messages.
             */
            export interface CompletionsRequestArgs extends FileLocationRequestArgs {
                /**
                 * Optional prefix to apply to possible completions.
                 */
                prefix?: string;
                /**
                 * Character that was responsible for triggering completion.
                 * Should be `undefined` if a user manually requested completion.
                 */
                triggerCharacter?: CompletionsTriggerCharacter;
                triggerKind?: CompletionTriggerKind;
                /**
                 * @deprecated Use UserPreferences.includeCompletionsForModuleExports
                 */
                includeExternalModuleExports?: boolean;
                /**
                 * @deprecated Use UserPreferences.includeCompletionsWithInsertText
                 */
                includeInsertTextCompletions?: boolean;
            }
            /**
             * Completions request; value of command field is "completions".
             * Given a file location (file, line, col) and a prefix (which may
             * be the empty string), return the possible completions that
             * begin with prefix.
             */
            export interface CompletionsRequest extends FileLocationRequest {
                command: CommandTypes.Completions | CommandTypes.CompletionInfo;
                arguments: CompletionsRequestArgs;
            }
            /**
             * Arguments for completion details request.
             */
            export interface CompletionDetailsRequestArgs extends FileLocationRequestArgs {
                /**
                 * Names of one or more entries for which to obtain details.
                 */
                entryNames: (string | CompletionEntryIdentifier)[];
            }
            export interface CompletionEntryIdentifier {
                name: string;
                source?: string;
                data?: unknown;
            }
            /**
             * Completion entry details request; value of command field is
             * "completionEntryDetails".  Given a file location (file, line,
             * col) and an array of completion entry names return more
             * detailed information for each completion entry.
             */
            export interface CompletionDetailsRequest extends FileLocationRequest {
                command: CommandTypes.CompletionDetails;
                arguments: CompletionDetailsRequestArgs;
            }
            /** A part of a symbol description that links from a jsdoc @link tag to a declaration */
            export interface JSDocLinkDisplayPart extends SymbolDisplayPart {
                /** The location of the declaration that the @link tag links to. */
                target: FileSpan;
            }
            export type CompletionEntry = ChangePropertyTypes<Omit<ts.CompletionEntry, "symbol">, {
                replacementSpan: TextSpan;
                data: unknown;
            }>;
            /**
             * Additional completion entry details, available on demand
             */
            export type CompletionEntryDetails = ChangePropertyTypes<ts.CompletionEntryDetails, {
                tags: JSDocTagInfo[];
                codeActions: CodeAction[];
            }>;
            /** @deprecated Prefer CompletionInfoResponse, which supports several top-level fields in addition to the array of entries. */
            export interface CompletionsResponse extends Response {
                body?: CompletionEntry[];
            }
            export interface CompletionInfoResponse extends Response {
                body?: CompletionInfo;
            }
            export type CompletionInfo = ChangePropertyTypes<ts.CompletionInfo, {
                entries: readonly CompletionEntry[];
                optionalReplacementSpan: TextSpan;
            }>;
            export interface CompletionDetailsResponse extends Response {
                body?: CompletionEntryDetails[];
            }
            /**
             * Represents a single signature to show in signature help.
             */
            export type SignatureHelpItem = ChangePropertyTypes<ts.SignatureHelpItem, {
                tags: JSDocTagInfo[];
            }>;
            /**
             * Signature help items found in the response of a signature help request.
             */
            export interface SignatureHelpItems {
                /**
                 * The signature help items.
                 */
                items: SignatureHelpItem[];
                /**
                 * The span for which signature help should appear on a signature
                 */
                applicableSpan: TextSpan;
                /**
                 * The item selected in the set of available help items.
                 */
                selectedItemIndex: number;
                /**
                 * The argument selected in the set of parameters.
                 */
                argumentIndex: number;
                /**
                 * The argument count
                 */
                argumentCount: number;
            }
            /**
             * Arguments of a signature help request.
             */
            export interface SignatureHelpRequestArgs extends FileLocationRequestArgs {
                /**
                 * Reason why signature help was invoked.
                 * See each individual possible
                 */
                triggerReason?: SignatureHelpTriggerReason;
            }
            /**
             * Signature help request; value of command field is "signatureHelp".
             * Given a file location (file, line, col), return the signature
             * help.
             */
            export interface SignatureHelpRequest extends FileLocationRequest {
                command: CommandTypes.SignatureHelp;
                arguments: SignatureHelpRequestArgs;
            }
            /**
             * Response object for a SignatureHelpRequest.
             */
            export interface SignatureHelpResponse extends Response {
                body?: SignatureHelpItems;
            }
            export interface InlayHintsRequestArgs extends FileRequestArgs {
                /**
                 * Start position of the span.
                 */
                start: number;
                /**
                 * Length of the span.
                 */
                length: number;
            }
            export interface InlayHintsRequest extends Request {
                command: CommandTypes.ProvideInlayHints;
                arguments: InlayHintsRequestArgs;
            }
            export type InlayHintItem = ChangePropertyTypes<ts.InlayHint, {
                position: Location;
                displayParts: InlayHintItemDisplayPart[];
            }>;
            export interface InlayHintItemDisplayPart {
                text: string;
                span?: FileSpan;
            }
            export interface InlayHintsResponse extends Response {
                body?: InlayHintItem[];
            }
            export interface MapCodeRequestArgs extends FileRequestArgs {
                /**
                 * The files and changes to try and apply/map.
                 */
                mapping: MapCodeRequestDocumentMapping;
            }
            export interface MapCodeRequestDocumentMapping {
                /**
                 * The specific code to map/insert/replace in the file.
                 */
                contents: string[];
                /**
                 * Areas of "focus" to inform the code mapper with. For example, cursor
                 * location, current selection, viewport, etc. Nested arrays denote
                 * priority: toplevel arrays are more important than inner arrays, and
                 * inner array priorities are based on items within that array. Items
                 * earlier in the arrays have higher priority.
                 */
                focusLocations?: TextSpan[][];
            }
            export interface MapCodeRequest extends FileRequest {
                command: CommandTypes.MapCode;
                arguments: MapCodeRequestArgs;
            }
            export interface MapCodeResponse extends Response {
                body: readonly FileCodeEdits[];
            }
            /**
             * Synchronous request for semantic diagnostics of one file.
             */
            export interface SemanticDiagnosticsSyncRequest extends FileRequest {
                command: CommandTypes.SemanticDiagnosticsSync;
                arguments: SemanticDiagnosticsSyncRequestArgs;
            }
            export interface SemanticDiagnosticsSyncRequestArgs extends FileRequestArgs {
                includeLinePosition?: boolean;
            }
            /**
             * Response object for synchronous sematic diagnostics request.
             */
            export interface SemanticDiagnosticsSyncResponse extends Response {
                body?: Diagnostic[] | DiagnosticWithLinePosition[];
            }
            export interface SuggestionDiagnosticsSyncRequest extends FileRequest {
                command: CommandTypes.SuggestionDiagnosticsSync;
                arguments: SuggestionDiagnosticsSyncRequestArgs;
            }
            export type SuggestionDiagnosticsSyncRequestArgs = SemanticDiagnosticsSyncRequestArgs;
            export type SuggestionDiagnosticsSyncResponse = SemanticDiagnosticsSyncResponse;
            /**
             * Synchronous request for syntactic diagnostics of one file.
             */
            export interface SyntacticDiagnosticsSyncRequest extends FileRequest {
                command: CommandTypes.SyntacticDiagnosticsSync;
                arguments: SyntacticDiagnosticsSyncRequestArgs;
            }
            export interface SyntacticDiagnosticsSyncRequestArgs extends FileRequestArgs {
                includeLinePosition?: boolean;
            }
            /**
             * Response object for synchronous syntactic diagnostics request.
             */
            export interface SyntacticDiagnosticsSyncResponse extends Response {
                body?: Diagnostic[] | DiagnosticWithLinePosition[];
            }
            /**
             * Arguments for GeterrForProject request.
             */
            export interface GeterrForProjectRequestArgs {
                /**
                 * the file requesting project error list
                 */
                file: string;
                /**
                 * Delay in milliseconds to wait before starting to compute
                 * errors for the files in the file list
                 */
                delay: number;
            }
            /**
             * GeterrForProjectRequest request; value of command field is
             * "geterrForProject". It works similarly with 'Geterr', only
             * it request for every file in this project.
             */
            export interface GeterrForProjectRequest extends Request {
                command: CommandTypes.GeterrForProject;
                arguments: GeterrForProjectRequestArgs;
            }
            /**
             * Arguments for geterr messages.
             */
            export interface GeterrRequestArgs {
                /**
                 * List of file names for which to compute compiler errors.
                 * The files will be checked in list order.
                 */
                files: (string | FileRangesRequestArgs)[];
                /**
                 * Delay in milliseconds to wait before starting to compute
                 * errors for the files in the file list
                 */
                delay: number;
            }
            /**
             * Geterr request; value of command field is "geterr". Wait for
             * delay milliseconds and then, if during the wait no change or
             * reload messages have arrived for the first file in the files
             * list, get the syntactic errors for the file, field requests,
             * and then get the semantic errors for the file.  Repeat with a
             * smaller delay for each subsequent file on the files list.  Best
             * practice for an editor is to send a file list containing each
             * file that is currently visible, in most-recently-used order.
             */
            export interface GeterrRequest extends Request {
                command: CommandTypes.Geterr;
                arguments: GeterrRequestArgs;
            }
            export interface FileRange {
                /**
                 * The line number for the request (1-based).
                 */
                startLine: number;
                /**
                 * The character offset (on the line) for the request (1-based).
                 */
                startOffset: number;
                /**
                 * The line number for the request (1-based).
                 */
                endLine: number;
                /**
                 * The character offset (on the line) for the request (1-based).
                 */
                endOffset: number;
            }
            export interface FileRangesRequestArgs extends Pick<FileRequestArgs, "file"> {
                ranges: FileRange[];
            }
            export type RequestCompletedEventName = "requestCompleted";
            /**
             * Event that is sent when server have finished processing request with specified id.
             */
            export interface RequestCompletedEvent extends Event {
                event: RequestCompletedEventName;
                body: RequestCompletedEventBody;
            }
            export interface RequestCompletedEventBody {
                request_seq: number;
                performanceData?: PerformanceData;
            }
            /**
             * Item of diagnostic information found in a DiagnosticEvent message.
             */
            export interface Diagnostic {
                /**
                 * Starting file location at which text applies.
                 */
                start: Location;
                /**
                 * The last file location at which the text applies.
                 */
                end: Location;
                /**
                 * Text of diagnostic message.
                 */
                text: string;
                /**
                 * The category of the diagnostic message, e.g. "error", "warning", or "suggestion".
                 */
                category: string;
                reportsUnnecessary?: {};
                reportsDeprecated?: {};
                /**
                 * Any related spans the diagnostic may have, such as other locations relevant to an error, such as declarartion sites
                 */
                relatedInformation?: DiagnosticRelatedInformation[];
                /**
                 * The error code of the diagnostic message.
                 */
                code?: number;
                /**
                 * The name of the plugin reporting the message.
                 */
                source?: string;
            }
            export interface DiagnosticWithFileName extends Diagnostic {
                /**
                 * Name of the file the diagnostic is in
                 */
                fileName: string;
            }
            /**
             * Represents additional spans returned with a diagnostic which are relevant to it
             */
            export interface DiagnosticRelatedInformation {
                /**
                 * The category of the related information message, e.g. "error", "warning", or "suggestion".
                 */
                category: string;
                /**
                 * The code used ot identify the related information
                 */
                code: number;
                /**
                 * Text of related or additional information.
                 */
                message: string;
                /**
                 * Associated location
                 */
                span?: FileSpan;
            }
            export interface DiagnosticEventBody {
                /**
                 * The file for which diagnostic information is reported.
                 */
                file: string;
                /**
                 * An array of diagnostic information items.
                 */
                diagnostics: Diagnostic[];
                /**
                 * Spans where the region diagnostic was requested, if this is a region semantic diagnostic event.
                 */
                spans?: TextSpan[];
            }
            export type DiagnosticEventKind = "semanticDiag" | "syntaxDiag" | "suggestionDiag" | "regionSemanticDiag";
            /**
             * Event message for DiagnosticEventKind event types.
             * These events provide syntactic and semantic errors for a file.
             */
            export interface DiagnosticEvent extends Event {
                body?: DiagnosticEventBody;
                event: DiagnosticEventKind;
            }
            export interface ConfigFileDiagnosticEventBody {
                /**
                 * The file which trigged the searching and error-checking of the config file
                 */
                triggerFile: string;
                /**
                 * The name of the found config file.
                 */
                configFile: string;
                /**
                 * An arry of diagnostic information items for the found config file.
                 */
                diagnostics: DiagnosticWithFileName[];
            }
            /**
             * Event message for "configFileDiag" event type.
             * This event provides errors for a found config file.
             */
            export interface ConfigFileDiagnosticEvent extends Event {
                body?: ConfigFileDiagnosticEventBody;
                event: "configFileDiag";
            }
            export type ProjectLanguageServiceStateEventName = "projectLanguageServiceState";
            export interface ProjectLanguageServiceStateEvent extends Event {
                event: ProjectLanguageServiceStateEventName;
                body?: ProjectLanguageServiceStateEventBody;
            }
            export interface ProjectLanguageServiceStateEventBody {
                /**
                 * Project name that has changes in the state of language service.
                 * For configured projects this will be the config file path.
                 * For external projects this will be the name of the projects specified when project was open.
                 * For inferred projects this event is not raised.
                 */
                projectName: string;
                /**
                 * True if language service state switched from disabled to enabled
                 * and false otherwise.
                 */
                languageServiceEnabled: boolean;
            }
            export type ProjectsUpdatedInBackgroundEventName = "projectsUpdatedInBackground";
            export interface ProjectsUpdatedInBackgroundEvent extends Event {
                event: ProjectsUpdatedInBackgroundEventName;
                body: ProjectsUpdatedInBackgroundEventBody;
            }
            export interface ProjectsUpdatedInBackgroundEventBody {
                /**
                 * Current set of open files
                 */
                openFiles: string[];
            }
            export type ProjectLoadingStartEventName = "projectLoadingStart";
            export interface ProjectLoadingStartEvent extends Event {
                event: ProjectLoadingStartEventName;
                body: ProjectLoadingStartEventBody;
            }
            export interface ProjectLoadingStartEventBody {
                /** name of the project */
                projectName: string;
                /** reason for loading */
                reason: string;
            }
            export type ProjectLoadingFinishEventName = "projectLoadingFinish";
            export interface ProjectLoadingFinishEvent extends Event {
                event: ProjectLoadingFinishEventName;
                body: ProjectLoadingFinishEventBody;
            }
            export interface ProjectLoadingFinishEventBody {
                /** name of the project */
                projectName: string;
            }
            export type SurveyReadyEventName = "surveyReady";
            export interface SurveyReadyEvent extends Event {
                event: SurveyReadyEventName;
                body: SurveyReadyEventBody;
            }
            export interface SurveyReadyEventBody {
                /** Name of the survey. This is an internal machine- and programmer-friendly name */
                surveyId: string;
            }
            export type LargeFileReferencedEventName = "largeFileReferenced";
            export interface LargeFileReferencedEvent extends Event {
                event: LargeFileReferencedEventName;
                body: LargeFileReferencedEventBody;
            }
            export interface LargeFileReferencedEventBody {
                /**
                 * name of the large file being loaded
                 */
                file: string;
                /**
                 * size of the file
                 */
                fileSize: number;
                /**
                 * max file size allowed on the server
                 */
                maxFileSize: number;
            }
            export type CreateFileWatcherEventName = "createFileWatcher";
            export interface CreateFileWatcherEvent extends Event {
                readonly event: CreateFileWatcherEventName;
                readonly body: CreateFileWatcherEventBody;
            }
            export interface CreateFileWatcherEventBody {
                readonly id: number;
                readonly path: string;
            }
            export type CreateDirectoryWatcherEventName = "createDirectoryWatcher";
            export interface CreateDirectoryWatcherEvent extends Event {
                readonly event: CreateDirectoryWatcherEventName;
                readonly body: CreateDirectoryWatcherEventBody;
            }
            export interface CreateDirectoryWatcherEventBody {
                readonly id: number;
                readonly path: string;
                readonly recursive: boolean;
                readonly ignoreUpdate?: boolean;
            }
            export type CloseFileWatcherEventName = "closeFileWatcher";
            export interface CloseFileWatcherEvent extends Event {
                readonly event: CloseFileWatcherEventName;
                readonly body: CloseFileWatcherEventBody;
            }
            export interface CloseFileWatcherEventBody {
                readonly id: number;
            }
            /**
             * Arguments for reload request.
             */
            export interface ReloadRequestArgs extends FileRequestArgs {
                /**
                 * Name of temporary file from which to reload file
                 * contents. May be same as file.
                 */
                tmpfile: string;
            }
            /**
             * Reload request message; value of command field is "reload".
             * Reload contents of file with name given by the 'file' argument
             * from temporary file with name given by the 'tmpfile' argument.
             * The two names can be identical.
             */
            export interface ReloadRequest extends FileRequest {
                command: CommandTypes.Reload;
                arguments: ReloadRequestArgs;
            }
            /**
             * Response to "reload" request. This is just an acknowledgement, so
             * no body field is required.
             */
            export interface ReloadResponse extends Response {
            }
            /**
             * Arguments for saveto request.
             */
            export interface SavetoRequestArgs extends FileRequestArgs {
                /**
                 * Name of temporary file into which to save server's view of
                 * file contents.
                 */
                tmpfile: string;
            }
            /**
             * Saveto request message; value of command field is "saveto".
             * For debugging purposes, save to a temporaryfile (named by
             * argument 'tmpfile') the contents of file named by argument
             * 'file'.  The server does not currently send a response to a
             * "saveto" request.
             */
            export interface SavetoRequest extends FileRequest {
                command: CommandTypes.Saveto;
                arguments: SavetoRequestArgs;
            }
            /**
             * Arguments for navto request message.
             */
            export interface NavtoRequestArgs {
                /**
                 * Search term to navigate to from current location; term can
                 * be '.*' or an identifier prefix.
                 */
                searchValue: string;
                /**
                 *  Optional limit on the number of items to return.
                 */
                maxResultCount?: number;
                /**
                 * The file for the request (absolute pathname required).
                 */
                file?: string;
                /**
                 * Optional flag to indicate we want results for just the current file
                 * or the entire project.
                 */
                currentFileOnly?: boolean;
                projectFileName?: string;
            }
            /**
             * Navto request message; value of command field is "navto".
             * Return list of objects giving file locations and symbols that
             * match the search term given in argument 'searchTerm'.  The
             * context for the search is given by the named file.
             */
            export interface NavtoRequest extends Request {
                command: CommandTypes.Navto;
                arguments: NavtoRequestArgs;
            }
            /**
             * An item found in a navto response.
             */
            export interface NavtoItem extends FileSpan {
                /**
                 * The symbol's name.
                 */
                name: string;
                /**
                 * The symbol's kind (such as 'className' or 'parameterName').
                 */
                kind: ScriptElementKind;
                /**
                 * exact, substring, or prefix.
                 */
                matchKind: string;
                /**
                 * If this was a case sensitive or insensitive match.
                 */
                isCaseSensitive: boolean;
                /**
                 * Optional modifiers for the kind (such as 'public').
                 */
                kindModifiers?: string;
                /**
                 * Name of symbol's container symbol (if any); for example,
                 * the class name if symbol is a class member.
                 */
                containerName?: string;
                /**
                 * Kind of symbol's container symbol (if any).
                 */
                containerKind?: ScriptElementKind;
            }
            /**
             * Navto response message. Body is an array of navto items.  Each
             * item gives a symbol that matched the search term.
             */
            export interface NavtoResponse extends Response {
                body?: NavtoItem[];
            }
            /**
             * Arguments for change request message.
             */
            export interface ChangeRequestArgs extends FormatRequestArgs {
                /**
                 * Optional string to insert at location (file, line, offset).
                 */
                insertString?: string;
            }
            /**
             * Change request message; value of command field is "change".
             * Update the server's view of the file named by argument 'file'.
             * Server does not currently send a response to a change request.
             */
            export interface ChangeRequest extends FileLocationRequest {
                command: CommandTypes.Change;
                arguments: ChangeRequestArgs;
            }
            /**
             * Response to "brace" request.
             */
            export interface BraceResponse extends Response {
                body?: TextSpan[];
            }
            /**
             * Brace matching request; value of command field is "brace".
             * Return response giving the file locations of matching braces
             * found in file at location line, offset.
             */
            export interface BraceRequest extends FileLocationRequest {
                command: CommandTypes.Brace;
            }
            /**
             * NavBar items request; value of command field is "navbar".
             * Return response giving the list of navigation bar entries
             * extracted from the requested file.
             */
            export interface NavBarRequest extends FileRequest {
                command: CommandTypes.NavBar;
            }
            /**
             * NavTree request; value of command field is "navtree".
             * Return response giving the navigation tree of the requested file.
             */
            export interface NavTreeRequest extends FileRequest {
                command: CommandTypes.NavTree;
            }
            export interface NavigationBarItem {
                /**
                 * The item's display text.
                 */
                text: string;
                /**
                 * The symbol's kind (such as 'className' or 'parameterName').
                 */
                kind: ScriptElementKind;
                /**
                 * Optional modifiers for the kind (such as 'public').
                 */
                kindModifiers?: string;
                /**
                 * The definition locations of the item.
                 */
                spans: TextSpan[];
                /**
                 * Optional children.
                 */
                childItems?: NavigationBarItem[];
                /**
                 * Number of levels deep this item should appear.
                 */
                indent: number;
            }
            /** protocol.NavigationTree is identical to ts.NavigationTree, except using protocol.TextSpan instead of ts.TextSpan */
            export interface NavigationTree {
                text: string;
                kind: ScriptElementKind;
                kindModifiers: string;
                spans: TextSpan[];
                nameSpan: TextSpan | undefined;
                childItems?: NavigationTree[];
            }
            export type TelemetryEventName = "telemetry";
            export interface TelemetryEvent extends Event {
                event: TelemetryEventName;
                body: TelemetryEventBody;
            }
            export interface TelemetryEventBody {
                telemetryEventName: string;
                payload: any;
            }
            export type TypesInstallerInitializationFailedEventName = "typesInstallerInitializationFailed";
            export interface TypesInstallerInitializationFailedEvent extends Event {
                event: TypesInstallerInitializationFailedEventName;
                body: TypesInstallerInitializationFailedEventBody;
            }
            export interface TypesInstallerInitializationFailedEventBody {
                message: string;
            }
            export type TypingsInstalledTelemetryEventName = "typingsInstalled";
            export interface TypingsInstalledTelemetryEventBody extends TelemetryEventBody {
                telemetryEventName: TypingsInstalledTelemetryEventName;
                payload: TypingsInstalledTelemetryEventPayload;
            }
            export interface TypingsInstalledTelemetryEventPayload {
                /**
                 * Comma separated list of installed typing packages
                 */
                installedPackages: string;
                /**
                 * true if install request succeeded, otherwise - false
                 */
                installSuccess: boolean;
                /**
                 * version of typings installer
                 */
                typingsInstallerVersion: string;
            }
            export type BeginInstallTypesEventName = "beginInstallTypes";
            export type EndInstallTypesEventName = "endInstallTypes";
            export interface BeginInstallTypesEvent extends Event {
                event: BeginInstallTypesEventName;
                body: BeginInstallTypesEventBody;
            }
            export interface EndInstallTypesEvent extends Event {
                event: EndInstallTypesEventName;
                body: EndInstallTypesEventBody;
            }
            export interface InstallTypesEventBody {
                /**
                 * correlation id to match begin and end events
                 */
                eventId: number;
                /**
                 * list of packages to install
                 */
                packages: readonly string[];
            }
            export interface BeginInstallTypesEventBody extends InstallTypesEventBody {
            }
            export interface EndInstallTypesEventBody extends InstallTypesEventBody {
                /**
                 * true if installation succeeded, otherwise false
                 */
                success: boolean;
            }
            export interface NavBarResponse extends Response {
                body?: NavigationBarItem[];
            }
            export interface NavTreeResponse extends Response {
                body?: NavigationTree;
            }
            export type CallHierarchyItem = ChangePropertyTypes<ts.CallHierarchyItem, {
                span: TextSpan;
                selectionSpan: TextSpan;
            }>;
            export interface CallHierarchyIncomingCall {
                from: CallHierarchyItem;
                fromSpans: TextSpan[];
            }
            export interface CallHierarchyOutgoingCall {
                to: CallHierarchyItem;
                fromSpans: TextSpan[];
            }
            export interface PrepareCallHierarchyRequest extends FileLocationRequest {
                command: CommandTypes.PrepareCallHierarchy;
            }
            export interface PrepareCallHierarchyResponse extends Response {
                readonly body: CallHierarchyItem | CallHierarchyItem[];
            }
            export interface ProvideCallHierarchyIncomingCallsRequest extends FileLocationRequest {
                command: CommandTypes.ProvideCallHierarchyIncomingCalls;
            }
            export interface ProvideCallHierarchyIncomingCallsResponse extends Response {
                readonly body: CallHierarchyIncomingCall[];
            }
            export interface ProvideCallHierarchyOutgoingCallsRequest extends FileLocationRequest {
                command: CommandTypes.ProvideCallHierarchyOutgoingCalls;
            }
            export interface ProvideCallHierarchyOutgoingCallsResponse extends Response {
                readonly body: CallHierarchyOutgoingCall[];
            }
            export enum IndentStyle {
                None = "None",
                Block = "Block",
                Smart = "Smart",
            }
            export type EditorSettings = ChangePropertyTypes<ts.EditorSettings, {
                indentStyle: IndentStyle | ts.IndentStyle;
            }>;
            export type FormatCodeSettings = ChangePropertyTypes<ts.FormatCodeSettings, {
                indentStyle: IndentStyle | ts.IndentStyle;
            }>;
            export type CompilerOptions = ChangePropertyTypes<ChangeStringIndexSignature<ts.CompilerOptions, CompilerOptionsValue>, {
                jsx: JsxEmit | ts.JsxEmit;
                module: ModuleKind | ts.ModuleKind;
                moduleResolution: ModuleResolutionKind | ts.ModuleResolutionKind;
                newLine: NewLineKind | ts.NewLineKind;
                target: ScriptTarget | ts.ScriptTarget;
            }>;
            export enum JsxEmit {
                None = "none",
                Preserve = "preserve",
                ReactNative = "react-native",
                React = "react",
                ReactJSX = "react-jsx",
                ReactJSXDev = "react-jsxdev",
            }
            export enum ModuleKind {
                None = "none",
                CommonJS = "commonjs",
                AMD = "amd",
                UMD = "umd",
                System = "system",
                ES6 = "es6",
                ES2015 = "es2015",
                ES2020 = "es2020",
                ES2022 = "es2022",
                ESNext = "esnext",
                Node16 = "node16",
                Node18 = "node18",
                Node20 = "node20",
                NodeNext = "nodenext",
                Preserve = "preserve",
            }
            export enum ModuleResolutionKind {
                Classic = "classic",
                /** @deprecated Renamed to `Node10` */
                Node = "node",
                /** @deprecated Renamed to `Node10` */
                NodeJs = "node",
                Node10 = "node10",
                Node16 = "node16",
                NodeNext = "nodenext",
                Bundler = "bundler",
            }
            export enum NewLineKind {
                Crlf = "Crlf",
                Lf = "Lf",
            }
            export enum ScriptTarget {
                /** @deprecated */
                ES3 = "es3",
                ES5 = "es5",
                ES6 = "es6",
                ES2015 = "es2015",
                ES2016 = "es2016",
                ES2017 = "es2017",
                ES2018 = "es2018",
                ES2019 = "es2019",
                ES2020 = "es2020",
                ES2021 = "es2021",
                ES2022 = "es2022",
                ES2023 = "es2023",
                ES2024 = "es2024",
                ESNext = "esnext",
                JSON = "json",
                Latest = "esnext",
            }
        }
        namespace typingsInstaller {
            interface Log {
                isEnabled(): boolean;
                writeLine(text: string): void;
            }
            type RequestCompletedAction = (success: boolean) => void;
            interface PendingRequest {
                requestId: number;
                packageNames: string[];
                cwd: string;
                onRequestCompleted: RequestCompletedAction;
            }
            abstract class TypingsInstaller {
                protected readonly installTypingHost: InstallTypingHost;
                private readonly globalCachePath;
                private readonly safeListPath;
                private readonly typesMapLocation;
                private readonly throttleLimit;
                protected readonly log: Log;
                private readonly packageNameToTypingLocation;
                private readonly missingTypingsSet;
                private readonly knownCachesSet;
                private readonly projectWatchers;
                private safeList;
                private pendingRunRequests;
                private installRunCount;
                private inFlightRequestCount;
                abstract readonly typesRegistry: Map<string, MapLike<string>>;
                constructor(installTypingHost: InstallTypingHost, globalCachePath: string, safeListPath: Path, typesMapLocation: Path, throttleLimit: number, log?: Log);
                closeProject(req: CloseProject): void;
                private closeWatchers;
                install(req: DiscoverTypings): void;
                private initializeSafeList;
                private processCacheLocation;
                private filterTypings;
                protected ensurePackageDirectoryExists(directory: string): void;
                private installTypings;
                private ensureDirectoryExists;
                private watchFiles;
                private createSetTypings;
                private installTypingsAsync;
                private executeWithThrottling;
                protected abstract installWorker(requestId: number, packageNames: string[], cwd: string, onRequestCompleted: RequestCompletedAction): void;
                protected abstract sendResponse(response: SetTypings | InvalidateCachedTypings | BeginInstallTypes | EndInstallTypes | WatchTypingLocations): void;
                protected readonly latestDistTag = "latest";
            }
        }
        type ActionSet = "action::set";
        type ActionInvalidate = "action::invalidate";
        type ActionPackageInstalled = "action::packageInstalled";
        type EventTypesRegistry = "event::typesRegistry";
        type EventBeginInstallTypes = "event::beginInstallTypes";
        type EventEndInstallTypes = "event::endInstallTypes";
        type EventInitializationFailed = "event::initializationFailed";
        type ActionWatchTypingLocations = "action::watchTypingLocations";
        interface TypingInstallerResponse {
            readonly kind: ActionSet | ActionInvalidate | EventTypesRegistry | ActionPackageInstalled | EventBeginInstallTypes | EventEndInstallTypes | EventInitializationFailed | ActionWatchTypingLocations;
        }
        interface TypingInstallerRequestWithProjectName {
            readonly projectName: string;
        }
        interface DiscoverTypings extends TypingInstallerRequestWithProjectName {
            readonly fileNames: string[];
            readonly projectRootPath: Path;
            readonly compilerOptions: CompilerOptions;
            readonly typeAcquisition: TypeAcquisition;
            readonly unresolvedImports: SortedReadonlyArray<string>;
            readonly cachePath?: string;
            readonly kind: "discover";
        }
        interface CloseProject extends TypingInstallerRequestWithProjectName {
            readonly kind: "closeProject";
        }
        interface TypesRegistryRequest {
            readonly kind: "typesRegistry";
        }
        interface InstallPackageRequest extends TypingInstallerRequestWithProjectName {
            readonly kind: "installPackage";
            readonly fileName: Path;
            readonly packageName: string;
            readonly projectRootPath: Path;
            readonly id: number;
        }
        interface PackageInstalledResponse extends ProjectResponse {
            readonly kind: ActionPackageInstalled;
            readonly id: number;
            readonly success: boolean;
            readonly message: string;
        }
        interface InitializationFailedResponse extends TypingInstallerResponse {
            readonly kind: EventInitializationFailed;
            readonly message: string;
            readonly stack?: string;
        }
        interface ProjectResponse extends TypingInstallerResponse {
            readonly projectName: string;
        }
        interface InvalidateCachedTypings extends ProjectResponse {
            readonly kind: ActionInvalidate;
        }
        interface InstallTypes extends ProjectResponse {
            readonly kind: EventBeginInstallTypes | EventEndInstallTypes;
            readonly eventId: number;
            readonly typingsInstallerVersion: string;
            readonly packagesToInstall: readonly string[];
        }
        interface BeginInstallTypes extends InstallTypes {
            readonly kind: EventBeginInstallTypes;
        }
        interface EndInstallTypes extends InstallTypes {
            readonly kind: EventEndInstallTypes;
            readonly installSuccess: boolean;
        }
        interface InstallTypingHost extends JsTyping.TypingResolutionHost {
            useCaseSensitiveFileNames: boolean;
            writeFile(path: string, content: string): void;
            createDirectory(path: string): void;
            getCurrentDirectory?(): string;
        }
        interface SetTypings extends ProjectResponse {
            readonly typeAcquisition: TypeAcquisition;
            readonly compilerOptions: CompilerOptions;
            readonly typings: string[];
            readonly unresolvedImports: SortedReadonlyArray<string>;
            readonly kind: ActionSet;
        }
        interface WatchTypingLocations extends ProjectResponse {
            /** if files is undefined, retain same set of watchers */
            readonly files: readonly string[] | undefined;
            readonly kind: ActionWatchTypingLocations;
        }
        interface CompressedData {
            length: number;
            compressionKind: string;
            data: any;
        }
        type ModuleImportResult = {
            module: {};
            error: undefined;
        } | {
            module: undefined;
            error: {
                stack?: string;
                message?: string;
            };
        };
        /** @deprecated Use {@link ModuleImportResult} instead. */
        type RequireResult = ModuleImportResult;
        interface ServerHost extends System {
            watchFile(path: string, callback: FileWatcherCallback, pollingInterval?: number, options?: WatchOptions): FileWatcher;
            watchDirectory(path: string, callback: DirectoryWatcherCallback, recursive?: boolean, options?: WatchOptions): FileWatcher;
            preferNonRecursiveWatch?: boolean;
            setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
            clearTimeout(timeoutId: any): void;
            setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
            clearImmediate(timeoutId: any): void;
            gc?(): void;
            trace?(s: string): void;
            require?(initialPath: string, moduleName: string): ModuleImportResult;
        }
        interface InstallPackageOptionsWithProject extends InstallPackageOptions {
            projectName: string;
            projectRootPath: Path;
        }
        interface ITypingsInstaller {
            isKnownTypesPackageName(name: string): boolean;
            installPackage(options: InstallPackageOptionsWithProject): Promise<ApplyCodeActionCommandResult>;
            enqueueInstallTypingsRequest(p: Project, typeAcquisition: TypeAcquisition, unresolvedImports: SortedReadonlyArray<string> | undefined): void;
            attach(projectService: ProjectService): void;
            onProjectClosed(p: Project): void;
            readonly globalTypingsCacheLocation: string | undefined;
        }
        function createInstallTypingsRequest(project: Project, typeAcquisition: TypeAcquisition, unresolvedImports: SortedReadonlyArray<string>, cachePath?: string): DiscoverTypings;
        function toNormalizedPath(fileName: string): NormalizedPath;
        function normalizedPathToPath(normalizedPath: NormalizedPath, currentDirectory: string, getCanonicalFileName: (f: string) => string): Path;
        function asNormalizedPath(fileName: string): NormalizedPath;
        function createNormalizedPathMap<T>(): NormalizedPathMap<T>;
        function isInferredProjectName(name: string): boolean;
        function makeInferredProjectName(counter: number): string;
        function createSortedArray<T>(): SortedArray<T>;
        enum LogLevel {
            terse = 0,
            normal = 1,
            requestTime = 2,
            verbose = 3,
        }
        const emptyArray: SortedReadonlyArray<never>;
        interface Logger {
            close(): void;
            hasLevel(level: LogLevel): boolean;
            loggingEnabled(): boolean;
            perftrc(s: string): void;
            info(s: string): void;
            startGroup(): void;
            endGroup(): void;
            msg(s: string, type?: Msg): void;
            getLogFileName(): string | undefined;
        }
        enum Msg {
            Err = "Err",
            Info = "Info",
            Perf = "Perf",
        }
        namespace Errors {
            function ThrowNoProject(): never;
            function ThrowProjectLanguageServiceDisabled(): never;
            function ThrowProjectDoesNotContainDocument(fileName: string, project: Project): never;
        }
        type NormalizedPath = string & {
            __normalizedPathTag: any;
        };
        interface NormalizedPathMap<T> {
            get(path: NormalizedPath): T | undefined;
            set(path: NormalizedPath, value: T): void;
            contains(path: NormalizedPath): boolean;
            remove(path: NormalizedPath): void;
        }
        function isDynamicFileName(fileName: NormalizedPath): boolean;
        class ScriptInfo {
            private readonly host;
            readonly fileName: NormalizedPath;
            readonly scriptKind: ScriptKind;
            readonly hasMixedContent: boolean;
            readonly path: Path;
            /**
             * All projects that include this file
             */
            readonly containingProjects: Project[];
            private formatSettings;
            private preferences;
            private realpath;
            constructor(host: ServerHost, fileName: NormalizedPath, scriptKind: ScriptKind, hasMixedContent: boolean, path: Path, initialVersion?: number);
            isScriptOpen(): boolean;
            open(newText: string | undefined): void;
            close(fileExists?: boolean): void;
            getSnapshot(): IScriptSnapshot;
            private ensureRealPath;
            getFormatCodeSettings(): FormatCodeSettings | undefined;
            getPreferences(): protocol.UserPreferences | undefined;
            attachToProject(project: Project): boolean;
            isAttached(project: Project): boolean;
            detachFromProject(project: Project): void;
            detachAllProjects(): void;
            getDefaultProject(): Project;
            registerFileUpdate(): void;
            setOptions(formatSettings: FormatCodeSettings, preferences: protocol.UserPreferences | undefined): void;
            getLatestVersion(): string;
            saveTo(fileName: string): void;
            reloadFromFile(tempFileName?: NormalizedPath): boolean;
            editContent(start: number, end: number, newText: string): void;
            markContainingProjectsAsDirty(): void;
            isOrphan(): boolean;
            /**
             *  @param line 1 based index
             */
            lineToTextSpan(line: number): TextSpan;
            /**
             * @param line 1 based index
             * @param offset 1 based index
             */
            lineOffsetToPosition(line: number, offset: number): number;
            positionToLineOffset(position: number): protocol.Location;
            isJavaScript(): boolean;
        }
        function allRootFilesAreJsOrDts(project: Project): boolean;
        function allFilesAreJsOrDts(project: Project): boolean;
        enum ProjectKind {
            Inferred = 0,
            Configured = 1,
            External = 2,
            AutoImportProvider = 3,
            Auxiliary = 4,
        }
        interface PluginCreateInfo {
            project: Project;
            languageService: LanguageService;
            languageServiceHost: LanguageServiceHost;
            serverHost: ServerHost;
            session?: Session<unknown>;
            config: any;
        }
        interface PluginModule {
            create(createInfo: PluginCreateInfo): LanguageService;
            getExternalFiles?(proj: Project, updateLevel: ProgramUpdateLevel): string[];
            onConfigurationChanged?(config: any): void;
        }
        interface PluginModuleWithName {
            name: string;
            module: PluginModule;
        }
        type PluginModuleFactory = (mod: {
            typescript: typeof ts;
        }) => PluginModule;
        abstract class Project implements LanguageServiceHost, ModuleResolutionHost {
            readonly projectKind: ProjectKind;
            readonly projectService: ProjectService;
            private compilerOptions;
            compileOnSaveEnabled: boolean;
            protected watchOptions: WatchOptions | undefined;
            private rootFilesMap;
            private program;
            private externalFiles;
            private missingFilesMap;
            private generatedFilesMap;
            private hasAddedorRemovedFiles;
            private hasAddedOrRemovedSymlinks;
            protected languageService: LanguageService;
            languageServiceEnabled: boolean;
            readonly trace?: (s: string) => void;
            readonly realpath?: (path: string) => string;
            private builderState;
            private updatedFileNames;
            private lastReportedFileNames;
            private lastReportedVersion;
            protected projectErrors: Diagnostic[] | undefined;
            private typingsCache;
            private typingWatchers;
            private readonly cancellationToken;
            isNonTsProject(): boolean;
            isJsOnlyProject(): boolean;
            static resolveModule(moduleName: string, initialDir: string, host: ServerHost, log: (message: string) => void): {} | undefined;
            private exportMapCache;
            private changedFilesForExportMapCache;
            private moduleSpecifierCache;
            private symlinks;
            readonly jsDocParsingMode: JSDocParsingMode | undefined;
            isKnownTypesPackageName(name: string): boolean;
            installPackage(options: InstallPackageOptions): Promise<ApplyCodeActionCommandResult>;
            getCompilationSettings(): CompilerOptions;
            getCompilerOptions(): CompilerOptions;
            getNewLine(): string;
            getProjectVersion(): string;
            getProjectReferences(): readonly ProjectReference[] | undefined;
            getScriptFileNames(): string[];
            private getOrCreateScriptInfoAndAttachToProject;
            getScriptKind(fileName: string): ScriptKind;
            getScriptVersion(filename: string): string;
            getScriptSnapshot(filename: string): IScriptSnapshot | undefined;
            getCancellationToken(): HostCancellationToken;
            getCurrentDirectory(): string;
            getDefaultLibFileName(): string;
            useCaseSensitiveFileNames(): boolean;
            readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
            readFile(fileName: string): string | undefined;
            writeFile(fileName: string, content: string): void;
            fileExists(file: string): boolean;
            directoryExists(path: string): boolean;
            getDirectories(path: string): string[];
            log(s: string): void;
            error(s: string): void;
            private setInternalCompilerOptionsForEmittingJsFiles;
            /**
             * Get the errors that dont have any file name associated
             */
            getGlobalProjectErrors(): readonly Diagnostic[];
            /**
             * Get all the project errors
             */
            getAllProjectErrors(): readonly Diagnostic[];
            setProjectErrors(projectErrors: Diagnostic[] | undefined): void;
            getLanguageService(ensureSynchronized?: boolean): LanguageService;
            getCompileOnSaveAffectedFileList(scriptInfo: ScriptInfo): string[];
            /**
             * Returns true if emit was conducted
             */
            emitFile(scriptInfo: ScriptInfo, writeFile: (path: string, data: string, writeByteOrderMark?: boolean) => void): EmitResult;
            enableLanguageService(): void;
            disableLanguageService(lastFileExceededProgramSize?: string): void;
            getProjectName(): string;
            protected removeLocalTypingsFromTypeAcquisition(newTypeAcquisition: TypeAcquisition): TypeAcquisition;
            getExternalFiles(updateLevel?: ProgramUpdateLevel): SortedReadonlyArray<string>;
            getSourceFile(path: Path): SourceFile | undefined;
            close(): void;
            private detachScriptInfoIfNotRoot;
            isClosed(): boolean;
            hasRoots(): boolean;
            getRootFiles(): NormalizedPath[];
            getRootScriptInfos(): ScriptInfo[];
            getScriptInfos(): ScriptInfo[];
            getExcludedFiles(): readonly NormalizedPath[];
            getFileNames(excludeFilesFromExternalLibraries?: boolean, excludeConfigFiles?: boolean): NormalizedPath[];
            hasConfigFile(configFilePath: NormalizedPath): boolean;
            containsScriptInfo(info: ScriptInfo): boolean;
            containsFile(filename: NormalizedPath, requireOpen?: boolean): boolean;
            isRoot(info: ScriptInfo): boolean;
            addRoot(info: ScriptInfo, fileName?: NormalizedPath): void;
            addMissingFileRoot(fileName: NormalizedPath): void;
            removeFile(info: ScriptInfo, fileExists: boolean, detachFromProject: boolean): void;
            registerFileUpdate(fileName: string): void;
            /**
             * Updates set of files that contribute to this project
             * @returns: true if set of files in the project stays the same and false - otherwise.
             */
            updateGraph(): boolean;
            private closeWatchingTypingLocations;
            private onTypingInstallerWatchInvoke;
            protected removeExistingTypings(include: string[]): string[];
            private updateGraphWorker;
            private detachScriptInfoFromProject;
            private addMissingFileWatcher;
            private isWatchedMissingFile;
            private createGeneratedFileWatcher;
            private isValidGeneratedFileWatcher;
            private clearGeneratedFileWatch;
            getScriptInfoForNormalizedPath(fileName: NormalizedPath): ScriptInfo | undefined;
            getScriptInfo(uncheckedFileName: string): ScriptInfo | undefined;
            filesToString(writeProjectFileNames: boolean): string;
            private filesToStringWorker;
            setCompilerOptions(compilerOptions: CompilerOptions): void;
            setTypeAcquisition(newTypeAcquisition: TypeAcquisition | undefined): void;
            getTypeAcquisition(): TypeAcquisition;
            protected removeRoot(info: ScriptInfo): void;
            protected enableGlobalPlugins(options: CompilerOptions): void;
            protected enablePlugin(pluginConfigEntry: PluginImport, searchPaths: string[]): void;
            /** Starts a new check for diagnostics. Call this if some file has updated that would cause diagnostics to be changed. */
            refreshDiagnostics(): void;
            private isDefaultProjectForOpenFiles;
        }
        /**
         * If a file is opened and no tsconfig (or jsconfig) is found,
         * the file and its imports/references are put into an InferredProject.
         */
        class InferredProject extends Project {
            private _isJsInferredProject;
            toggleJsInferredProject(isJsInferredProject: boolean): void;
            setCompilerOptions(options?: CompilerOptions): void;
            /** this is canonical project root path */
            readonly projectRootPath: string | undefined;
            addRoot(info: ScriptInfo): void;
            removeRoot(info: ScriptInfo): void;
            isProjectWithSingleRoot(): boolean;
            close(): void;
            getTypeAcquisition(): TypeAcquisition;
        }
        class AutoImportProviderProject extends Project {
            private hostProject;
            private static readonly maxDependencies;
            private rootFileNames;
            updateGraph(): boolean;
            hasRoots(): boolean;
            getScriptFileNames(): string[];
            getLanguageService(): never;
            getHostForAutoImportProvider(): never;
            getProjectReferences(): readonly ProjectReference[] | undefined;
        }
        /**
         * If a file is opened, the server will look for a tsconfig (or jsconfig)
         * and if successful create a ConfiguredProject for it.
         * Otherwise it will create an InferredProject.
         */
        class ConfiguredProject extends Project {
            readonly canonicalConfigFilePath: NormalizedPath;
            private projectReferences;
            private compilerHost?;
            private releaseParsedConfig;
            /**
             * If the project has reload from disk pending, it reloads (and then updates graph as part of that) instead of just updating the graph
             * @returns: true if set of files in the project stays the same and false - otherwise.
             */
            updateGraph(): boolean;
            getConfigFilePath(): NormalizedPath;
            getProjectReferences(): readonly ProjectReference[] | undefined;
            updateReferences(refs: readonly ProjectReference[] | undefined): void;
            /**
             * Get the errors that dont have any file name associated
             */
            getGlobalProjectErrors(): readonly Diagnostic[];
            /**
             * Get all the project errors
             */
            getAllProjectErrors(): readonly Diagnostic[];
            setProjectErrors(projectErrors: Diagnostic[]): void;
            close(): void;
            getEffectiveTypeRoots(): string[];
        }
        /**
         * Project whose configuration is handled externally, such as in a '.csproj'.
         * These are created only if a host explicitly calls `openExternalProject`.
         */
        class ExternalProject extends Project {
            externalProjectName: string;
            compileOnSaveEnabled: boolean;
            excludedFiles: readonly NormalizedPath[];
            updateGraph(): boolean;
            getExcludedFiles(): readonly NormalizedPath[];
        }
        function convertFormatOptions(protocolOptions: protocol.FormatCodeSettings): FormatCodeSettings;
        function convertCompilerOptions(protocolOptions: protocol.ExternalProjectCompilerOptions): CompilerOptions & protocol.CompileOnSaveMixin;
        function convertWatchOptions(protocolOptions: protocol.ExternalProjectCompilerOptions, currentDirectory?: string): WatchOptionsAndErrors | undefined;
        function convertTypeAcquisition(protocolOptions: protocol.InferredProjectCompilerOptions): TypeAcquisition | undefined;
        function tryConvertScriptKindName(scriptKindName: protocol.ScriptKindName | ScriptKind): ScriptKind;
        function convertScriptKindName(scriptKindName: protocol.ScriptKindName): ScriptKind;
        const maxProgramSizeForNonTsFiles: number;
        const ProjectsUpdatedInBackgroundEvent = "projectsUpdatedInBackground";
        interface ProjectsUpdatedInBackgroundEvent {
            eventName: typeof ProjectsUpdatedInBackgroundEvent;
            data: {
                openFiles: string[];
            };
        }
        const ProjectLoadingStartEvent = "projectLoadingStart";
        interface ProjectLoadingStartEvent {
            eventName: typeof ProjectLoadingStartEvent;
            data: {
                project: Project;
                reason: string;
            };
        }
        const ProjectLoadingFinishEvent = "projectLoadingFinish";
        interface ProjectLoadingFinishEvent {
            eventName: typeof ProjectLoadingFinishEvent;
            data: {
                project: Project;
            };
        }
        const LargeFileReferencedEvent = "largeFileReferenced";
        interface LargeFileReferencedEvent {
            eventName: typeof LargeFileReferencedEvent;
            data: {
                file: string;
                fileSize: number;
                maxFileSize: number;
            };
        }
        const ConfigFileDiagEvent = "configFileDiag";
        interface ConfigFileDiagEvent {
            eventName: typeof ConfigFileDiagEvent;
            data: {
                triggerFile: string;
                configFileName: string;
                diagnostics: readonly Diagnostic[];
            };
        }
        const ProjectLanguageServiceStateEvent = "projectLanguageServiceState";
        interface ProjectLanguageServiceStateEvent {
            eventName: typeof ProjectLanguageServiceStateEvent;
            data: {
                project: Project;
                languageServiceEnabled: boolean;
            };
        }
        const ProjectInfoTelemetryEvent = "projectInfo";
        /** This will be converted to the payload of a protocol.TelemetryEvent in session.defaultEventHandler. */
        interface ProjectInfoTelemetryEvent {
            readonly eventName: typeof ProjectInfoTelemetryEvent;
            readonly data: ProjectInfoTelemetryEventData;
        }
        const OpenFileInfoTelemetryEvent = "openFileInfo";
        /**
         * Info that we may send about a file that was just opened.
         * Info about a file will only be sent once per session, even if the file changes in ways that might affect the info.
         * Currently this is only sent for '.js' files.
         */
        interface OpenFileInfoTelemetryEvent {
            readonly eventName: typeof OpenFileInfoTelemetryEvent;
            readonly data: OpenFileInfoTelemetryEventData;
        }
        const CreateFileWatcherEvent: protocol.CreateFileWatcherEventName;
        interface CreateFileWatcherEvent {
            readonly eventName: protocol.CreateFileWatcherEventName;
            readonly data: protocol.CreateFileWatcherEventBody;
        }
        const CreateDirectoryWatcherEvent: protocol.CreateDirectoryWatcherEventName;
        interface CreateDirectoryWatcherEvent {
            readonly eventName: protocol.CreateDirectoryWatcherEventName;
            readonly data: protocol.CreateDirectoryWatcherEventBody;
        }
        const CloseFileWatcherEvent: protocol.CloseFileWatcherEventName;
        interface CloseFileWatcherEvent {
            readonly eventName: protocol.CloseFileWatcherEventName;
            readonly data: protocol.CloseFileWatcherEventBody;
        }
        interface ProjectInfoTelemetryEventData {
            /** Cryptographically secure hash of project file location. */
            readonly projectId: string;
            /** Count of file extensions seen in the project. */
            readonly fileStats: FileStats;
            /**
             * Any compiler options that might contain paths will be taken out.
             * Enum compiler options will be converted to strings.
             */
            readonly compilerOptions: CompilerOptions;
            readonly extends: boolean | undefined;
            readonly files: boolean | undefined;
            readonly include: boolean | undefined;
            readonly exclude: boolean | undefined;
            readonly compileOnSave: boolean;
            readonly typeAcquisition: ProjectInfoTypeAcquisitionData;
            readonly configFileName: "tsconfig.json" | "jsconfig.json" | "other";
            readonly projectType: "external" | "configured";
            readonly languageServiceEnabled: boolean;
            /** TypeScript version used by the server. */
            readonly version: string;
        }
        interface OpenFileInfoTelemetryEventData {
            readonly info: OpenFileInfo;
        }
        interface ProjectInfoTypeAcquisitionData {
            readonly enable: boolean | undefined;
            readonly include: boolean;
            readonly exclude: boolean;
        }
        interface FileStats {
            readonly js: number;
            readonly jsSize?: number;
            readonly jsx: number;
            readonly jsxSize?: number;
            readonly ts: number;
            readonly tsSize?: number;
            readonly tsx: number;
            readonly tsxSize?: number;
            readonly dts: number;
            readonly dtsSize?: number;
            readonly deferred: number;
            readonly deferredSize?: number;
        }
        interface OpenFileInfo {
            readonly checkJs: boolean;
        }
        type ProjectServiceEvent = LargeFileReferencedEvent | ProjectsUpdatedInBackgroundEvent | ProjectLoadingStartEvent | ProjectLoadingFinishEvent | ConfigFileDiagEvent | ProjectLanguageServiceStateEvent | ProjectInfoTelemetryEvent | OpenFileInfoTelemetryEvent | CreateFileWatcherEvent | CreateDirectoryWatcherEvent | CloseFileWatcherEvent;
        type ProjectServiceEventHandler = (event: ProjectServiceEvent) => void;
        interface SafeList {
            [name: string]: {
                match: RegExp;
                exclude?: (string | number)[][];
                types?: string[];
            };
        }
        interface TypesMapFile {
            typesMap: SafeList;
            simpleMap: {
                [libName: string]: string;
            };
        }
        interface HostConfiguration {
            formatCodeOptions: FormatCodeSettings;
            preferences: protocol.UserPreferences;
            hostInfo: string;
            extraFileExtensions?: FileExtensionInfo[];
            watchOptions?: WatchOptions;
        }
        interface OpenConfiguredProjectResult {
            configFileName?: NormalizedPath;
            configFileErrors?: readonly Diagnostic[];
        }
        const nullTypingsInstaller: ITypingsInstaller;
        interface ProjectServiceOptions {
            host: ServerHost;
            logger: Logger;
            cancellationToken: HostCancellationToken;
            useSingleInferredProject: boolean;
            useInferredProjectPerProjectRoot: boolean;
            typingsInstaller?: ITypingsInstaller;
            eventHandler?: ProjectServiceEventHandler;
            canUseWatchEvents?: boolean;
            suppressDiagnosticEvents?: boolean;
            throttleWaitMilliseconds?: number;
            globalPlugins?: readonly string[];
            pluginProbeLocations?: readonly string[];
            allowLocalPluginLoads?: boolean;
            typesMapLocation?: string;
            serverMode?: LanguageServiceMode;
            session: Session<unknown> | undefined;
            jsDocParsingMode?: JSDocParsingMode;
        }
        interface WatchOptionsAndErrors {
            watchOptions: WatchOptions;
            errors: Diagnostic[] | undefined;
        }
        class ProjectService {
            private readonly nodeModulesWatchers;
            private readonly filenameToScriptInfoVersion;
            private readonly allJsFilesForOpenFileTelemetry;
            private readonly externalProjectToConfiguredProjectMap;
            /**
             * external projects (configuration and list of root files is not controlled by tsserver)
             */
            readonly externalProjects: ExternalProject[];
            /**
             * projects built from openFileRoots
             */
            readonly inferredProjects: InferredProject[];
            /**
             * projects specified by a tsconfig.json file
             */
            readonly configuredProjects: Map<string, ConfiguredProject>;
            /**
             * Open files: with value being project root path, and key being Path of the file that is open
             */
            readonly openFiles: Map<Path, NormalizedPath | undefined>;
            private readonly configFileForOpenFiles;
            private rootOfInferredProjects;
            private readonly openFilesWithNonRootedDiskPath;
            private compilerOptionsForInferredProjects;
            private compilerOptionsForInferredProjectsPerProjectRoot;
            private watchOptionsForInferredProjects;
            private watchOptionsForInferredProjectsPerProjectRoot;
            private typeAcquisitionForInferredProjects;
            private typeAcquisitionForInferredProjectsPerProjectRoot;
            private readonly projectToSizeMap;
            private readonly hostConfiguration;
            private safelist;
            private readonly legacySafelist;
            private pendingProjectUpdates;
            private pendingOpenFileProjectUpdates?;
            readonly currentDirectory: NormalizedPath;
            readonly toCanonicalFileName: (f: string) => string;
            readonly host: ServerHost;
            readonly logger: Logger;
            readonly cancellationToken: HostCancellationToken;
            readonly useSingleInferredProject: boolean;
            readonly useInferredProjectPerProjectRoot: boolean;
            readonly typingsInstaller: ITypingsInstaller;
            private readonly globalCacheLocationDirectoryPath;
            readonly throttleWaitMilliseconds?: number;
            private readonly suppressDiagnosticEvents?;
            readonly globalPlugins: readonly string[];
            readonly pluginProbeLocations: readonly string[];
            readonly allowLocalPluginLoads: boolean;
            readonly typesMapLocation: string | undefined;
            readonly serverMode: LanguageServiceMode;
            private readonly seenProjects;
            private readonly sharedExtendedConfigFileWatchers;
            private readonly extendedConfigCache;
            private packageJsonFilesMap;
            private incompleteCompletionsCache;
            private performanceEventHandler?;
            private pendingPluginEnablements?;
            private currentPluginEnablementPromise?;
            readonly jsDocParsingMode: JSDocParsingMode | undefined;
            constructor(opts: ProjectServiceOptions);
            toPath(fileName: string): Path;
            private loadTypesMap;
            updateTypingsForProject(response: SetTypings | InvalidateCachedTypings | PackageInstalledResponse): void;
            private delayUpdateProjectGraph;
            private delayUpdateProjectGraphs;
            setCompilerOptionsForInferredProjects(projectCompilerOptions: protocol.InferredProjectCompilerOptions, projectRootPath?: string): void;
            findProject(projectName: string): Project | undefined;
            getDefaultProjectForFile(fileName: NormalizedPath, ensureProject: boolean): Project | undefined;
            private tryGetDefaultProjectForEnsuringConfiguredProjectForFile;
            private doEnsureDefaultProjectForFile;
            getScriptInfoEnsuringProjectsUptoDate(uncheckedFileName: string): ScriptInfo | undefined;
            private ensureProjectStructuresUptoDate;
            getFormatCodeOptions(file: NormalizedPath): FormatCodeSettings;
            getPreferences(file: NormalizedPath): protocol.UserPreferences;
            getHostFormatCodeOptions(): FormatCodeSettings;
            getHostPreferences(): protocol.UserPreferences;
            private onSourceFileChanged;
            private handleSourceMapProjects;
            private delayUpdateSourceInfoProjects;
            private delayUpdateProjectsOfScriptInfoPath;
            private handleDeletedFile;
            private watchWildcardDirectory;
            private onWildCardDirectoryWatcherInvoke;
            private delayUpdateProjectsFromParsedConfigOnConfigFileChange;
            private onConfigFileChanged;
            private removeProject;
            private assignOrphanScriptInfosToInferredProject;
            private closeOpenFile;
            private deleteScriptInfo;
            private configFileExists;
            private createConfigFileWatcherForParsedConfig;
            private ensureConfigFileWatcherForProject;
            private forEachConfigFileLocation;
            private getConfigFileNameForFileFromCache;
            private setConfigFileNameForFileInCache;
            private printProjects;
            private getConfiguredProjectByCanonicalConfigFilePath;
            private findExternalProjectByProjectName;
            private getFilenameForExceededTotalSizeLimitForNonTsFiles;
            private createExternalProject;
            private addFilesToNonInferredProject;
            private loadConfiguredProject;
            private updateNonInferredProjectFiles;
            private updateRootAndOptionsOfNonInferredProject;
            private reloadFileNamesOfParsedConfig;
            private setProjectForReload;
            private clearSemanticCache;
            private getOrCreateInferredProjectForProjectRootPathIfEnabled;
            private getOrCreateSingleInferredProjectIfEnabled;
            private getOrCreateSingleInferredWithoutProjectRoot;
            private createInferredProject;
            getScriptInfo(uncheckedFileName: string): ScriptInfo | undefined;
            private watchClosedScriptInfo;
            private createNodeModulesWatcher;
            private watchClosedScriptInfoInNodeModules;
            private getModifiedTime;
            private refreshScriptInfo;
            private refreshScriptInfosInDirectory;
            private stopWatchingScriptInfo;
            private getOrCreateScriptInfoNotOpenedByClientForNormalizedPath;
            getOrCreateScriptInfoForNormalizedPath(fileName: NormalizedPath, openedByClient: boolean, fileContent?: string, scriptKind?: ScriptKind, hasMixedContent?: boolean, hostToQueryFileExistsOn?: {
                fileExists(path: string): boolean;
            }): ScriptInfo | undefined;
            private getOrCreateScriptInfoWorker;
            /**
             * This gets the script info for the normalized path. If the path is not rooted disk path then the open script info with project root context is preferred
             */
            getScriptInfoForNormalizedPath(fileName: NormalizedPath): ScriptInfo | undefined;
            getScriptInfoForPath(fileName: Path): ScriptInfo | undefined;
            private addSourceInfoToSourceMap;
            private addMissingSourceMapFile;
            setHostConfiguration(args: protocol.ConfigureRequestArguments): void;
            private getWatchOptionsFromProjectWatchOptions;
            closeLog(): void;
            private sendSourceFileChange;
            /**
             * This function rebuilds the project for every file opened by the client
             * This does not reload contents of open files from disk. But we could do that if needed
             */
            reloadProjects(): void;
            private removeRootOfInferredProjectIfNowPartOfOtherProject;
            private ensureProjectForOpenFiles;
            /**
             * Open file whose contents is managed by the client
             * @param filename is absolute pathname
             * @param fileContent is a known version of the file content that is more up to date than the one on disk
             */
            openClientFile(fileName: string, fileContent?: string, scriptKind?: ScriptKind, projectRootPath?: string): OpenConfiguredProjectResult;
            private findExternalProjectContainingOpenScriptInfo;
            private getOrCreateOpenScriptInfo;
            private assignProjectToOpenedScriptInfo;
            private tryFindDefaultConfiguredProjectForOpenScriptInfo;
            private isMatchedByConfig;
            private tryFindDefaultConfiguredProjectForOpenScriptInfoOrClosedFileInfo;
            private tryFindDefaultConfiguredProjectAndLoadAncestorsForOpenScriptInfo;
            private ensureProjectChildren;
            private cleanupConfiguredProjects;
            private cleanupProjectsAndScriptInfos;
            private tryInvokeWildCardDirectories;
            openClientFileWithNormalizedPath(fileName: NormalizedPath, fileContent?: string, scriptKind?: ScriptKind, hasMixedContent?: boolean, projectRootPath?: NormalizedPath): OpenConfiguredProjectResult;
            private removeOrphanScriptInfos;
            private telemetryOnOpenFile;
            /**
             * Close file whose contents is managed by the client
             * @param filename is absolute pathname
             */
            closeClientFile(uncheckedFileName: string): void;
            private collectChanges;
            closeExternalProject(uncheckedFileName: string): void;
            openExternalProjects(projects: protocol.ExternalProject[]): void;
            private static readonly filenameEscapeRegexp;
            private static escapeFilenameForRegex;
            resetSafeList(): void;
            applySafeList(proj: protocol.ExternalProject): NormalizedPath[];
            private applySafeListWorker;
            openExternalProject(proj: protocol.ExternalProject): void;
            hasDeferredExtension(): boolean;
            private endEnablePlugin;
            private enableRequestedPluginsAsync;
            private enableRequestedPluginsWorker;
            configurePlugin(args: protocol.ConfigurePluginRequestArguments): void;
            private watchPackageJsonFile;
            private onPackageJsonChange;
        }
        function formatMessage<T extends protocol.Message>(msg: T, logger: Logger, byteLength: (s: string, encoding: BufferEncoding) => number, newLine: string): string;
        interface ServerCancellationToken extends HostCancellationToken {
            setRequest(requestId: number): void;
            resetRequest(requestId: number): void;
        }
        const nullCancellationToken: ServerCancellationToken;
        /** @deprecated use ts.server.protocol.CommandTypes */
        type CommandNames = protocol.CommandTypes;
        /** @deprecated use ts.server.protocol.CommandTypes */
        const CommandNames: any;
        type Event = <T extends object>(body: T, eventName: string) => void;
        interface EventSender {
            event: Event;
        }
        interface SessionOptions {
            host: ServerHost;
            cancellationToken: ServerCancellationToken;
            useSingleInferredProject: boolean;
            useInferredProjectPerProjectRoot: boolean;
            typingsInstaller?: ITypingsInstaller;
            byteLength: (buf: string, encoding?: BufferEncoding) => number;
            hrtime: (start?: [
                number,
                number,
            ]) => [
                number,
                number,
            ];
            logger: Logger;
            /**
             * If falsy, all events are suppressed.
             */
            canUseEvents: boolean;
            canUseWatchEvents?: boolean;
            eventHandler?: ProjectServiceEventHandler;
            /** Has no effect if eventHandler is also specified. */
            suppressDiagnosticEvents?: boolean;
            serverMode?: LanguageServiceMode;
            throttleWaitMilliseconds?: number;
            noGetErrOnBackgroundUpdate?: boolean;
            globalPlugins?: readonly string[];
            pluginProbeLocations?: readonly string[];
            allowLocalPluginLoads?: boolean;
            typesMapLocation?: string;
        }
        class Session<TMessage = string> implements EventSender {
            private readonly gcTimer;
            protected projectService: ProjectService;
            private changeSeq;
            private performanceData;
            private currentRequestId;
            private errorCheck;
            protected host: ServerHost;
            private readonly cancellationToken;
            protected readonly typingsInstaller: ITypingsInstaller;
            protected byteLength: (buf: string, encoding?: BufferEncoding) => number;
            private hrtime;
            protected logger: Logger;
            protected canUseEvents: boolean;
            private suppressDiagnosticEvents?;
            private eventHandler;
            private readonly noGetErrOnBackgroundUpdate?;
            constructor(opts: SessionOptions);
            private sendRequestCompletedEvent;
            private addPerformanceData;
            private addDiagnosticsPerformanceData;
            private performanceEventHandler;
            private defaultEventHandler;
            private projectsUpdatedInBackgroundEvent;
            logError(err: Error, cmd: string): void;
            private logErrorWorker;
            send(msg: protocol.Message): void;
            protected writeMessage(msg: protocol.Message): void;
            event<T extends object>(body: T, eventName: string): void;
            private semanticCheck;
            private syntacticCheck;
            private suggestionCheck;
            private regionSemanticCheck;
            private sendDiagnosticsEvent;
            private updateErrorCheck;
            private cleanProjects;
            private cleanup;
            private getEncodedSyntacticClassifications;
            private getEncodedSemanticClassifications;
            private getProject;
            private getConfigFileAndProject;
            private getConfigFileDiagnostics;
            private convertToDiagnosticsWithLinePositionFromDiagnosticFile;
            private getCompilerOptionsDiagnostics;
            private convertToDiagnosticsWithLinePosition;
            private getDiagnosticsWorker;
            private getDefinition;
            private mapDefinitionInfoLocations;
            private getDefinitionAndBoundSpan;
            private findSourceDefinition;
            private getEmitOutput;
            private mapJSDocTagInfo;
            private mapDisplayParts;
            private mapSignatureHelpItems;
            private mapDefinitionInfo;
            private static mapToOriginalLocation;
            private toFileSpan;
            private toFileSpanWithContext;
            private getTypeDefinition;
            private mapImplementationLocations;
            private getImplementation;
            private getSyntacticDiagnosticsSync;
            private getSemanticDiagnosticsSync;
            private getSuggestionDiagnosticsSync;
            private getJsxClosingTag;
            private getLinkedEditingRange;
            private getDocumentHighlights;
            private provideInlayHints;
            private mapCode;
            private getCopilotRelatedInfo;
            private setCompilerOptionsForInferredProjects;
            private getProjectInfo;
            private getProjectInfoWorker;
            private getDefaultConfiguredProjectInfo;
            private getRenameInfo;
            private getProjects;
            private getDefaultProject;
            private getRenameLocations;
            private mapRenameInfo;
            private toSpanGroups;
            private getReferences;
            private getFileReferences;
            private openClientFile;
            private getPosition;
            private getPositionInFile;
            private getFileAndProject;
            private getFileAndLanguageServiceForSyntacticOperation;
            private getFileAndProjectWorker;
            private getOutliningSpans;
            private getTodoComments;
            private getDocCommentTemplate;
            private getSpanOfEnclosingComment;
            private getIndentation;
            private getBreakpointStatement;
            private getNameOrDottedNameSpan;
            private isValidBraceCompletion;
            private getQuickInfoWorker;
            private getFormattingEditsForRange;
            private getFormattingEditsForRangeFull;
            private getFormattingEditsForDocumentFull;
            private getFormattingEditsAfterKeystrokeFull;
            private getFormattingEditsAfterKeystroke;
            private getCompletions;
            private getCompletionEntryDetails;
            private getCompileOnSaveAffectedFileList;
            private emitFile;
            private getSignatureHelpItems;
            private toPendingErrorCheck;
            private getDiagnostics;
            private change;
            private reload;
            private saveToTmp;
            private closeClientFile;
            private mapLocationNavigationBarItems;
            private getNavigationBarItems;
            private toLocationNavigationTree;
            private getNavigationTree;
            private getNavigateToItems;
            private getFullNavigateToItems;
            private getSupportedCodeFixes;
            private isLocation;
            private extractPositionOrRange;
            private getRange;
            private getApplicableRefactors;
            private getEditsForRefactor;
            private getMoveToRefactoringFileSuggestions;
            private preparePasteEdits;
            private getPasteEdits;
            private organizeImports;
            private getEditsForFileRename;
            private getCodeFixes;
            private getCombinedCodeFix;
            private applyCodeActionCommand;
            private getStartAndEndPosition;
            private mapCodeAction;
            private mapCodeFixAction;
            private mapPasteEditsAction;
            private mapTextChangesToCodeEdits;
            private mapTextChangeToCodeEdit;
            private convertTextChangeToCodeEdit;
            private getBraceMatching;
            private getDiagnosticsForProject;
            private configurePlugin;
            private getSmartSelectionRange;
            private toggleLineComment;
            private toggleMultilineComment;
            private commentSelection;
            private uncommentSelection;
            private mapSelectionRange;
            private getScriptInfoFromProjectService;
            private toProtocolCallHierarchyItem;
            private toProtocolCallHierarchyIncomingCall;
            private toProtocolCallHierarchyOutgoingCall;
            private prepareCallHierarchy;
            private provideCallHierarchyIncomingCalls;
            private provideCallHierarchyOutgoingCalls;
            getCanonicalFileName(fileName: string): string;
            exit(): void;
            private notRequired;
            private requiredResponse;
            private handlers;
            addProtocolHandler(command: string, handler: (request: protocol.Request) => HandlerResponse): void;
            private setCurrentRequest;
            private resetCurrentRequest;
            executeWithRequestId<T>(requestId: number, f: () => T): T;
            executeCommand(request: protocol.Request): HandlerResponse;
            onMessage(message: TMessage): void;
            protected parseMessage(message: TMessage): protocol.Request;
            protected toStringMessage(message: TMessage): string;
            private getFormatOptions;
            private getPreferences;
            private getHostFormatOptions;
            private getHostPreferences;
        }
        interface HandlerResponse {
            response?: {};
            responseRequired?: boolean;
        }
    }
    namespace JsTyping {
        interface TypingResolutionHost {
            directoryExists(path: string): boolean;
            fileExists(fileName: string): boolean;
            readFile(path: string, encoding?: string): string | undefined;
            readDirectory(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[] | undefined, depth?: number): string[];
        }
    }
    const versionMajorMinor = "5.9";
    /** The version of the TypeScript compiler release */
    const version: string;
    /**
     * Type of objects whose values are all of the same type.
     * The `in` and `for-in` operators can *not* be safely used,
     * since `Object.prototype` may be modified by outside code.
     */
    interface MapLike<T> {
        [index: string]: T;
    }
    interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
        " __sortedArrayBrand": any;
    }
    interface SortedArray<T> extends Array<T> {
        " __sortedArrayBrand": any;
    }
    type Path = string & {
        __pathBrand: any;
    };
    interface TextRange {
        pos: number;
        end: number;
    }
    interface ReadonlyTextRange {
        readonly pos: number;
        readonly end: number;
    }
    enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        ShebangTrivia = 6,
        ConflictMarkerTrivia = 7,
        NonTextFileMarkerTrivia = 8,
        NumericLiteral = 9,
        BigIntLiteral = 10,
        StringLiteral = 11,
        JsxText = 12,
        JsxTextAllWhiteSpaces = 13,
        RegularExpressionLiteral = 14,
        NoSubstitutionTemplateLiteral = 15,
        TemplateHead = 16,
        TemplateMiddle = 17,
        TemplateTail = 18,
        OpenBraceToken = 19,
        CloseBraceToken = 20,
        OpenParenToken = 21,
        CloseParenToken = 22,
        OpenBracketToken = 23,
        CloseBracketToken = 24,
        DotToken = 25,
        DotDotDotToken = 26,
        SemicolonToken = 27,
        CommaToken = 28,
        QuestionDotToken = 29,
        LessThanToken = 30,
        LessThanSlashToken = 31,
        GreaterThanToken = 32,
        LessThanEqualsToken = 33,
        GreaterThanEqualsToken = 34,
        EqualsEqualsToken = 35,
        ExclamationEqualsToken = 36,
        EqualsEqualsEqualsToken = 37,
        ExclamationEqualsEqualsToken = 38,
        EqualsGreaterThanToken = 39,
        PlusToken = 40,
        MinusToken = 41,
        AsteriskToken = 42,
        AsteriskAsteriskToken = 43,
        SlashToken = 44,
        PercentToken = 45,
        PlusPlusToken = 46,
        MinusMinusToken = 47,
        LessThanLessThanToken = 48,
        GreaterThanGreaterThanToken = 49,
        GreaterThanGreaterThanGreaterThanToken = 50,
        AmpersandToken = 51,
        BarToken = 52,
        CaretToken = 53,
        ExclamationToken = 54,
        TildeToken = 55,
        AmpersandAmpersandToken = 56,
        BarBarToken = 57,
        QuestionToken = 58,
        ColonToken = 59,
        AtToken = 60,
        QuestionQuestionToken = 61,
        /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
        BacktickToken = 62,
        /** Only the JSDoc scanner produces HashToken. The normal scanner produces PrivateIdentifier. */
        HashToken = 63,
        EqualsToken = 64,
        PlusEqualsToken = 65,
        MinusEqualsToken = 66,
        AsteriskEqualsToken = 67,
        AsteriskAsteriskEqualsToken = 68,
        SlashEqualsToken = 69,
        PercentEqualsToken = 70,
        LessThanLessThanEqualsToken = 71,
        GreaterThanGreaterThanEqualsToken = 72,
        GreaterThanGreaterThanGreaterThanEqualsToken = 73,
        AmpersandEqualsToken = 74,
        BarEqualsToken = 75,
        BarBarEqualsToken = 76,
        AmpersandAmpersandEqualsToken = 77,
        QuestionQuestionEqualsToken = 78,
        CaretEqualsToken = 79,
        Identifier = 80,
        PrivateIdentifier = 81,
        BreakKeyword = 83,
        CaseKeyword = 84,
        CatchKeyword = 85,
        ClassKeyword = 86,
        ConstKeyword = 87,
        ContinueKeyword = 88,
        DebuggerKeyword = 89,
        DefaultKeyword = 90,
        DeleteKeyword = 91,
        DoKeyword = 92,
        ElseKeyword = 93,
        EnumKeyword = 94,
        ExportKeyword = 95,
        ExtendsKeyword = 96,
        FalseKeyword = 97,
        FinallyKeyword = 98,
        ForKeyword = 99,
        FunctionKeyword = 100,
        IfKeyword = 101,
        ImportKeyword = 102,
        InKeyword = 103,
        InstanceOfKeyword = 104,
        NewKeyword = 105,
        NullKeyword = 106,
        ReturnKeyword = 107,
        SuperKeyword = 108,
        SwitchKeyword = 109,
        ThisKeyword = 110,
        ThrowKeyword = 111,
        TrueKeyword = 112,
        TryKeyword = 113,
        TypeOfKeyword = 114,
        VarKeyword = 115,
        VoidKeyword = 116,
        WhileKeyword = 117,
        WithKeyword = 118,
        ImplementsKeyword = 119,
        InterfaceKeyword = 120,
        LetKeyword = 121,
        PackageKeyword = 122,
        PrivateKeyword = 123,
        ProtectedKeyword = 124,
        PublicKeyword = 125,
        StaticKeyword = 126,
        YieldKeyword = 127,
        AbstractKeyword = 128,
        AccessorKeyword = 129,
        AsKeyword = 130,
        AssertsKeyword = 131,
        AssertKeyword = 132,
        AnyKeyword = 133,
        AsyncKeyword = 134,
        AwaitKeyword = 135,
        BooleanKeyword = 136,
        ConstructorKeyword = 137,
        DeclareKeyword = 138,
        GetKeyword = 139,
        InferKeyword = 140,
        IntrinsicKeyword = 141,
        IsKeyword = 142,
        KeyOfKeyword = 143,
        ModuleKeyword = 144,
        NamespaceKeyword = 145,
        NeverKeyword = 146,
        OutKeyword = 147,
        ReadonlyKeyword = 148,
        RequireKeyword = 149,
        NumberKeyword = 150,
        ObjectKeyword = 151,
        SatisfiesKeyword = 152,
        SetKeyword = 153,
        StringKeyword = 154,
        SymbolKeyword = 155,
        TypeKeyword = 156,
        UndefinedKeyword = 157,
        UniqueKeyword = 158,
        UnknownKeyword = 159,
        UsingKeyword = 160,
        FromKeyword = 161,
        GlobalKeyword = 162,
        BigIntKeyword = 163,
        OverrideKeyword = 164,
        OfKeyword = 165,
        DeferKeyword = 166,
        QualifiedName = 167,
        ComputedPropertyName = 168,
        TypeParameter = 169,
        Parameter = 170,
        Decorator = 171,
        PropertySignature = 172,
        PropertyDeclaration = 173,
        MethodSignature = 174,
        MethodDeclaration = 175,
        ClassStaticBlockDeclaration = 176,
        Constructor = 177,
        GetAccessor = 178,
        SetAccessor = 179,
        CallSignature = 180,
        ConstructSignature = 181,
        IndexSignature = 182,
        TypePredicate = 183,
        TypeReference = 184,
        FunctionType = 185,
        ConstructorType = 186,
        TypeQuery = 187,
        TypeLiteral = 188,
        ArrayType = 189,
        TupleType = 190,
        OptionalType = 191,
        RestType = 192,
        UnionType = 193,
        IntersectionType = 194,
        ConditionalType = 195,
        InferType = 196,
        ParenthesizedType = 197,
        ThisType = 198,
        TypeOperator = 199,
        IndexedAccessType = 200,
        MappedType = 201,
        LiteralType = 202,
        NamedTupleMember = 203,
        TemplateLiteralType = 204,
        TemplateLiteralTypeSpan = 205,
        ImportType = 206,
        ObjectBindingPattern = 207,
        ArrayBindingPattern = 208,
        BindingElement = 209,
        ArrayLiteralExpression = 210,
        ObjectLiteralExpression = 211,
        PropertyAccessExpression = 212,
        ElementAccessExpression = 213,
        CallExpression = 214,
        NewExpression = 215,
        TaggedTemplateExpression = 216,
        TypeAssertionExpression = 217,
        ParenthesizedExpression = 218,
        FunctionExpression = 219,
        ArrowFunction = 220,
        DeleteExpression = 221,
        TypeOfExpression = 222,
        VoidExpression = 223,
        AwaitExpression = 224,
        PrefixUnaryExpression = 225,
        PostfixUnaryExpression = 226,
        BinaryExpression = 227,
        ConditionalExpression = 228,
        TemplateExpression = 229,
        YieldExpression = 230,
        SpreadElement = 231,
        ClassExpression = 232,
        OmittedExpression = 233,
        ExpressionWithTypeArguments = 234,
        AsExpression = 235,
        NonNullExpression = 236,
        MetaProperty = 237,
        SyntheticExpression = 238,
        SatisfiesExpression = 239,
        TemplateSpan = 240,
        SemicolonClassElement = 241,
        Block = 242,
        EmptyStatement = 243,
        VariableStatement = 244,
        ExpressionStatement = 245,
        IfStatement = 246,
        DoStatement = 247,
        WhileStatement = 248,
        ForStatement = 249,
        ForInStatement = 250,
        ForOfStatement = 251,
        ContinueStatement = 252,
        BreakStatement = 253,
        ReturnStatement = 254,
        WithStatement = 255,
        SwitchStatement = 256,
        LabeledStatement = 257,
        ThrowStatement = 258,
        TryStatement = 259,
        DebuggerStatement = 260,
        VariableDeclaration = 261,
        VariableDeclarationList = 262,
        FunctionDeclaration = 263,
        ClassDeclaration = 264,
        InterfaceDeclaration = 265,
        TypeAliasDeclaration = 266,
        EnumDeclaration = 267,
        ModuleDeclaration = 268,
        ModuleBlock = 269,
        CaseBlock = 270,
        NamespaceExportDeclaration = 271,
        ImportEqualsDeclaration = 272,
        ImportDeclaration = 273,
        ImportClause = 274,
        NamespaceImport = 275,
        NamedImports = 276,
        ImportSpecifier = 277,
        ExportAssignment = 278,
        ExportDeclaration = 279,
        NamedExports = 280,
        NamespaceExport = 281,
        ExportSpecifier = 282,
        MissingDeclaration = 283,
        ExternalModuleReference = 284,
        JsxElement = 285,
        JsxSelfClosingElement = 286,
        JsxOpeningElement = 287,
        JsxClosingElement = 288,
        JsxFragment = 289,
        JsxOpeningFragment = 290,
        JsxClosingFragment = 291,
        JsxAttribute = 292,
        JsxAttributes = 293,
        JsxSpreadAttribute = 294,
        JsxExpression = 295,
        JsxNamespacedName = 296,
        CaseClause = 297,
        DefaultClause = 298,
        HeritageClause = 299,
        CatchClause = 300,
        ImportAttributes = 301,
        ImportAttribute = 302,
        /** @deprecated */ AssertClause = 301,
        /** @deprecated */ AssertEntry = 302,
        /** @deprecated */ ImportTypeAssertionContainer = 303,
        PropertyAssignment = 304,
        ShorthandPropertyAssignment = 305,
        SpreadAssignment = 306,
        EnumMember = 307,
        SourceFile = 308,
        Bundle = 309,
        JSDocTypeExpression = 310,
        JSDocNameReference = 311,
        JSDocMemberName = 312,
        JSDocAllType = 313,
        JSDocUnknownType = 314,
        JSDocNullableType = 315,
        JSDocNonNullableType = 316,
        JSDocOptionalType = 317,
        JSDocFunctionType = 318,
        JSDocVariadicType = 319,
        JSDocNamepathType = 320,
        JSDoc = 321,
        /** @deprecated Use SyntaxKind.JSDoc */
        JSDocComment = 321,
        JSDocText = 322,
        JSDocTypeLiteral = 323,
        JSDocSignature = 324,
        JSDocLink = 325,
        JSDocLinkCode = 326,
        JSDocLinkPlain = 327,
        JSDocTag = 328,
        JSDocAugmentsTag = 329,
        JSDocImplementsTag = 330,
        JSDocAuthorTag = 331,
        JSDocDeprecatedTag = 332,
        JSDocClassTag = 333,
        JSDocPublicTag = 334,
        JSDocPrivateTag = 335,
        JSDocProtectedTag = 336,
        JSDocReadonlyTag = 337,
        JSDocOverrideTag = 338,
        JSDocCallbackTag = 339,
        JSDocOverloadTag = 340,
        JSDocEnumTag = 341,
        JSDocParameterTag = 342,
        JSDocReturnTag = 343,
        JSDocThisTag = 344,
        JSDocTypeTag = 345,
        JSDocTemplateTag = 346,
        JSDocTypedefTag = 347,
        JSDocSeeTag = 348,
        JSDocPropertyTag = 349,
        JSDocThrowsTag = 350,
        JSDocSatisfiesTag = 351,
        JSDocImportTag = 352,
        SyntaxList = 353,
        NotEmittedStatement = 354,
        NotEmittedTypeElement = 355,
        PartiallyEmittedExpression = 356,
        CommaListExpression = 357,
        SyntheticReferenceExpression = 358,
        Count = 359,
        FirstAssignment = 64,
        LastAssignment = 79,
        FirstCompoundAssignment = 65,
        LastCompoundAssignment = 79,
        FirstReservedWord = 83,
        LastReservedWord = 118,
        FirstKeyword = 83,
        LastKeyword = 166,
        FirstFutureReservedWord = 119,
        LastFutureReservedWord = 127,
        FirstTypeNode = 183,
        LastTypeNode = 206,
        FirstPunctuation = 19,
        LastPunctuation = 79,
        FirstToken = 0,
        LastToken = 166,
        FirstTriviaToken = 2,
        LastTriviaToken = 7,
        FirstLiteralToken = 9,
        LastLiteralToken = 15,
        FirstTemplateToken = 15,
        LastTemplateToken = 18,
        FirstBinaryOperator = 30,
        LastBinaryOperator = 79,
        FirstStatement = 244,
        LastStatement = 260,
        FirstNode = 167,
        FirstJSDocNode = 310,
        LastJSDocNode = 352,
        FirstJSDocTagNode = 328,
        LastJSDocTagNode = 352,
    }
    type TriviaSyntaxKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia | SyntaxKind.NewLineTrivia | SyntaxKind.WhitespaceTrivia | SyntaxKind.ShebangTrivia | SyntaxKind.ConflictMarkerTrivia;
    type LiteralSyntaxKind = SyntaxKind.NumericLiteral | SyntaxKind.BigIntLiteral | SyntaxKind.StringLiteral | SyntaxKind.JsxText | SyntaxKind.JsxTextAllWhiteSpaces | SyntaxKind.RegularExpressionLiteral | SyntaxKind.NoSubstitutionTemplateLiteral;
    type PseudoLiteralSyntaxKind = SyntaxKind.TemplateHead | SyntaxKind.TemplateMiddle | SyntaxKind.TemplateTail;
    type PunctuationSyntaxKind =
        | SyntaxKind.OpenBraceToken
        | SyntaxKind.CloseBraceToken
        | SyntaxKind.OpenParenToken
        | SyntaxKind.CloseParenToken
        | SyntaxKind.OpenBracketToken
        | SyntaxKind.CloseBracketToken
        | SyntaxKind.DotToken
        | SyntaxKind.DotDotDotToken
        | SyntaxKind.SemicolonToken
        | SyntaxKind.CommaToken
        | SyntaxKind.QuestionDotToken
        | SyntaxKind.LessThanToken
        | SyntaxKind.LessThanSlashToken
        | SyntaxKind.GreaterThanToken
        | SyntaxKind.LessThanEqualsToken
        | SyntaxKind.GreaterThanEqualsToken
        | SyntaxKind.EqualsEqualsToken
        | SyntaxKind.ExclamationEqualsToken
        | SyntaxKind.EqualsEqualsEqualsToken
        | SyntaxKind.ExclamationEqualsEqualsToken
        | SyntaxKind.EqualsGreaterThanToken
        | SyntaxKind.PlusToken
        | SyntaxKind.MinusToken
        | SyntaxKind.AsteriskToken
        | SyntaxKind.AsteriskAsteriskToken
        | SyntaxKind.SlashToken
        | SyntaxKind.PercentToken
        | SyntaxKind.PlusPlusToken
        | SyntaxKind.MinusMinusToken
        | SyntaxKind.LessThanLessThanToken
        | SyntaxKind.GreaterThanGreaterThanToken
        | SyntaxKind.GreaterThanGreaterThanGreaterThanToken
        | SyntaxKind.AmpersandToken
        | SyntaxKind.BarToken
        | SyntaxKind.CaretToken
        | SyntaxKind.ExclamationToken
        | SyntaxKind.TildeToken
        | SyntaxKind.AmpersandAmpersandToken
        | SyntaxKind.AmpersandAmpersandEqualsToken
        | SyntaxKind.BarBarToken
        | SyntaxKind.BarBarEqualsToken
        | SyntaxKind.QuestionQuestionToken
        | SyntaxKind.QuestionQuestionEqualsToken
        | SyntaxKind.QuestionToken
        | SyntaxKind.ColonToken
        | SyntaxKind.AtToken
        | SyntaxKind.BacktickToken
        | SyntaxKind.HashToken
        | SyntaxKind.EqualsToken
        | SyntaxKind.PlusEqualsToken
        | SyntaxKind.MinusEqualsToken
        | SyntaxKind.AsteriskEqualsToken
        | SyntaxKind.AsteriskAsteriskEqualsToken
        | SyntaxKind.SlashEqualsToken
        | SyntaxKind.PercentEqualsToken
        | SyntaxKind.LessThanLessThanEqualsToken
        | SyntaxKind.GreaterThanGreaterThanEqualsToken
        | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken
        | SyntaxKind.AmpersandEqualsToken
        | SyntaxKind.BarEqualsToken
        | SyntaxKind.CaretEqualsToken;
    type KeywordSyntaxKind =
        | SyntaxKind.AbstractKeyword
        | SyntaxKind.AccessorKeyword
        | SyntaxKind.AnyKeyword
        | SyntaxKind.AsKeyword
        | SyntaxKind.AssertsKeyword
        | SyntaxKind.AssertKeyword
        | SyntaxKind.AsyncKeyword
        | SyntaxKind.AwaitKeyword
        | SyntaxKind.BigIntKeyword
        | SyntaxKind.BooleanKeyword
        | SyntaxKind.BreakKeyword
        | SyntaxKind.CaseKeyword
        | SyntaxKind.CatchKeyword
        | SyntaxKind.ClassKeyword
        | SyntaxKind.ConstKeyword
        | SyntaxKind.ConstructorKeyword
        | SyntaxKind.ContinueKeyword
        | SyntaxKind.DebuggerKeyword
        | SyntaxKind.DeclareKeyword
        | SyntaxKind.DefaultKeyword
        | SyntaxKind.DeferKeyword
        | SyntaxKind.DeleteKeyword
        | SyntaxKind.DoKeyword
        | SyntaxKind.ElseKeyword
        | SyntaxKind.EnumKeyword
        | SyntaxKind.ExportKeyword
        | SyntaxKind.ExtendsKeyword
        | SyntaxKind.FalseKeyword
        | SyntaxKind.FinallyKeyword
        | SyntaxKind.ForKeyword
        | SyntaxKind.FromKeyword
        | SyntaxKind.FunctionKeyword
        | SyntaxKind.GetKeyword
        | SyntaxKind.GlobalKeyword
        | SyntaxKind.IfKeyword
        | SyntaxKind.ImplementsKeyword
        | SyntaxKind.ImportKeyword
        | SyntaxKind.InferKeyword
        | SyntaxKind.InKeyword
        | SyntaxKind.InstanceOfKeyword
        | SyntaxKind.InterfaceKeyword
        | SyntaxKind.IntrinsicKeyword
        | SyntaxKind.IsKeyword
        | SyntaxKind.KeyOfKeyword
        | SyntaxKind.LetKeyword
        | SyntaxKind.ModuleKeyword
        | SyntaxKind.NamespaceKeyword
        | SyntaxKind.NeverKeyword
        | SyntaxKind.NewKeyword
        | SyntaxKind.NullKeyword
        | SyntaxKind.NumberKeyword
        | SyntaxKind.ObjectKeyword
        | SyntaxKind.OfKeyword
        | SyntaxKind.PackageKeyword
        | SyntaxKind.PrivateKeyword
        | SyntaxKind.ProtectedKeyword
        | SyntaxKind.PublicKeyword
        | SyntaxKind.ReadonlyKeyword
        | SyntaxKind.OutKeyword
        | SyntaxKind.OverrideKeyword
        | SyntaxKind.RequireKeyword
        | SyntaxKind.ReturnKeyword
        | SyntaxKind.SatisfiesKeyword
        | SyntaxKind.SetKeyword
        | SyntaxKind.StaticKeyword
        | SyntaxKind.StringKeyword
        | SyntaxKind.SuperKeyword
        | SyntaxKind.SwitchKeyword
        | SyntaxKind.SymbolKeyword
        | SyntaxKind.ThisKeyword
        | SyntaxKind.ThrowKeyword
        | SyntaxKind.TrueKeyword
        | SyntaxKind.TryKeyword
        | SyntaxKind.TypeKeyword
        | SyntaxKind.TypeOfKeyword
        | SyntaxKind.UndefinedKeyword
        | SyntaxKind.UniqueKeyword
        | SyntaxKind.UnknownKeyword
        | SyntaxKind.UsingKeyword
        | SyntaxKind.VarKeyword
        | SyntaxKind.VoidKeyword
        | SyntaxKind.WhileKeyword
        | SyntaxKind.WithKeyword
        | SyntaxKind.YieldKeyword;
    type ModifierSyntaxKind = SyntaxKind.AbstractKeyword | SyntaxKind.AccessorKeyword | SyntaxKind.AsyncKeyword | SyntaxKind.ConstKeyword | SyntaxKind.DeclareKeyword | SyntaxKind.DefaultKeyword | SyntaxKind.ExportKeyword | SyntaxKind.InKeyword | SyntaxKind.PrivateKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PublicKeyword | SyntaxKind.ReadonlyKeyword | SyntaxKind.OutKeyword | SyntaxKind.OverrideKeyword | SyntaxKind.StaticKeyword;
    type KeywordTypeSyntaxKind = SyntaxKind.AnyKeyword | SyntaxKind.BigIntKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.IntrinsicKeyword | SyntaxKind.NeverKeyword | SyntaxKind.NumberKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.UnknownKeyword | SyntaxKind.VoidKeyword;
    type TokenSyntaxKind = SyntaxKind.Unknown | SyntaxKind.EndOfFileToken | TriviaSyntaxKind | LiteralSyntaxKind | PseudoLiteralSyntaxKind | PunctuationSyntaxKind | SyntaxKind.Identifier | KeywordSyntaxKind;
    type JsxTokenSyntaxKind = SyntaxKind.LessThanSlashToken | SyntaxKind.EndOfFileToken | SyntaxKind.ConflictMarkerTrivia | SyntaxKind.JsxText | SyntaxKind.JsxTextAllWhiteSpaces | SyntaxKind.OpenBraceToken | SyntaxKind.LessThanToken;
    type JSDocSyntaxKind = SyntaxKind.EndOfFileToken | SyntaxKind.WhitespaceTrivia | SyntaxKind.AtToken | SyntaxKind.NewLineTrivia | SyntaxKind.AsteriskToken | SyntaxKind.OpenBraceToken | SyntaxKind.CloseBraceToken | SyntaxKind.LessThanToken | SyntaxKind.GreaterThanToken | SyntaxKind.OpenBracketToken | SyntaxKind.CloseBracketToken | SyntaxKind.OpenParenToken | SyntaxKind.CloseParenToken | SyntaxKind.EqualsToken | SyntaxKind.CommaToken | SyntaxKind.DotToken | SyntaxKind.Identifier | SyntaxKind.BacktickToken | SyntaxKind.HashToken | SyntaxKind.Unknown | KeywordSyntaxKind;
    enum NodeFlags {
        None = 0,
        Let = 1,
        Const = 2,
        Using = 4,
        AwaitUsing = 6,
        NestedNamespace = 8,
        Synthesized = 16,
        Namespace = 32,
        OptionalChain = 64,
        ExportContext = 128,
        ContainsThis = 256,
        HasImplicitReturn = 512,
        HasExplicitReturn = 1024,
        GlobalAugmentation = 2048,
        HasAsyncFunctions = 4096,
        DisallowInContext = 8192,
        YieldContext = 16384,
        DecoratorContext = 32768,
        AwaitContext = 65536,
        DisallowConditionalTypesContext = 131072,
        ThisNodeHasError = 262144,
        JavaScriptFile = 524288,
        ThisNodeOrAnySubNodesHasError = 1048576,
        HasAggregatedChildData = 2097152,
        JSDoc = 16777216,
        JsonFile = 134217728,
        BlockScoped = 7,
        Constant = 6,
        ReachabilityCheckFlags = 1536,
        ReachabilityAndEmitFlags = 5632,
        ContextFlags = 101441536,
        TypeExcludesFlags = 81920,
    }
    enum ModifierFlags {
        None = 0,
        Public = 1,
        Private = 2,
        Protected = 4,
        Readonly = 8,
        Override = 16,
        Export = 32,
        Abstract = 64,
        Ambient = 128,
        Static = 256,
        Accessor = 512,
        Async = 1024,
        Default = 2048,
        Const = 4096,
        In = 8192,
        Out = 16384,
        Decorator = 32768,
        Deprecated = 65536,
        HasComputedJSDocModifiers = 268435456,
        HasComputedFlags = 536870912,
        AccessibilityModifier = 7,
        ParameterPropertyModifier = 31,
        NonPublicAccessibilityModifier = 6,
        TypeScriptModifier = 28895,
        ExportDefault = 2080,
        All = 131071,
        Modifier = 98303,
    }
    enum JsxFlags {
        None = 0,
        /** An element from a named property of the JSX.IntrinsicElements interface */
        IntrinsicNamedElement = 1,
        /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
        IntrinsicIndexedElement = 2,
        IntrinsicElement = 3,
    }
    interface Node extends ReadonlyTextRange {
        readonly kind: SyntaxKind;
        readonly flags: NodeFlags;
        readonly parent: Node;
    }
    interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): readonly Node[];
        getStart(sourceFile?: SourceFile, includeJsDocComment?: boolean): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFileLike): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node | undefined;
        getLastToken(sourceFile?: SourceFile): Node | undefined;
        forEachChild<T>(cbNode: (node: Node) => T | undefined, cbNodeArray?: (nodes: NodeArray<Node>) => T | undefined): T | undefined;
    }
    interface JSDocContainer extends Node {
        _jsdocContainerBrand: any;
    }
    interface LocalsContainer extends Node {
        _localsContainerBrand: any;
    }
    interface FlowContainer extends Node {
        _flowContainerBrand: any;
    }
    type HasJSDoc =
        | AccessorDeclaration
        | ArrowFunction
        | BinaryExpression
        | Block
        | BreakStatement
        | CallSignatureDeclaration
        | CaseClause
        | ClassLikeDeclaration
        | ClassStaticBlockDeclaration
        | ConstructorDeclaration
        | ConstructorTypeNode
        | ConstructSignatureDeclaration
        | ContinueStatement
        | DebuggerStatement
        | DoStatement
        | ElementAccessExpression
        | EmptyStatement
        | EndOfFileToken
        | EnumDeclaration
        | EnumMember
        | ExportAssignment
        | ExportDeclaration
        | ExportSpecifier
        | ExpressionStatement
        | ForInStatement
        | ForOfStatement
        | ForStatement
        | FunctionDeclaration
        | FunctionExpression
        | FunctionTypeNode
        | Identifier
        | IfStatement
        | ImportDeclaration
        | ImportEqualsDeclaration
        | IndexSignatureDeclaration
        | InterfaceDeclaration
        | JSDocFunctionType
        | JSDocSignature
        | LabeledStatement
        | MethodDeclaration
        | MethodSignature
        | ModuleDeclaration
        | NamedTupleMember
        | NamespaceExportDeclaration
        | ObjectLiteralExpression
        | ParameterDeclaration
        | ParenthesizedExpression
        | PropertyAccessExpression
        | PropertyAssignment
        | PropertyDeclaration
        | PropertySignature
        | ReturnStatement
        | SemicolonClassElement
        | ShorthandPropertyAssignment
        | SpreadAssignment
        | SwitchStatement
        | ThrowStatement
        | TryStatement
        | TypeAliasDeclaration
        | TypeParameterDeclaration
        | VariableDeclaration
        | VariableStatement
        | WhileStatement
        | WithStatement;
    type HasType = SignatureDeclaration | VariableDeclaration | ParameterDeclaration | PropertySignature | PropertyDeclaration | TypePredicateNode | ParenthesizedTypeNode | TypeOperatorNode | MappedTypeNode | AssertionExpression | TypeAliasDeclaration | JSDocTypeExpression | JSDocNonNullableType | JSDocNullableType | JSDocOptionalType | JSDocVariadicType;
    type HasTypeArguments = CallExpression | NewExpression | TaggedTemplateExpression | JsxOpeningElement | JsxSelfClosingElement;
    type HasInitializer = HasExpressionInitializer | ForStatement | ForInStatement | ForOfStatement | JsxAttribute;
    type HasExpressionInitializer = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyDeclaration | PropertyAssignment | EnumMember;
    type HasDecorators = ParameterDeclaration | PropertyDeclaration | MethodDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | ClassExpression | ClassDeclaration;
    type HasModifiers = TypeParameterDeclaration | ParameterDeclaration | ConstructorTypeNode | PropertySignature | PropertyDeclaration | MethodSignature | MethodDeclaration | ConstructorDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | IndexSignatureDeclaration | FunctionExpression | ArrowFunction | ClassExpression | VariableStatement | FunctionDeclaration | ClassDeclaration | InterfaceDeclaration | TypeAliasDeclaration | EnumDeclaration | ModuleDeclaration | ImportEqualsDeclaration | ImportDeclaration | ExportAssignment | ExportDeclaration;
    interface NodeArray<T extends Node> extends ReadonlyArray<T>, ReadonlyTextRange {
        readonly hasTrailingComma: boolean;
    }
    interface Token<TKind extends SyntaxKind> extends Node {
        readonly kind: TKind;
    }
    type EndOfFileToken = Token<SyntaxKind.EndOfFileToken> & JSDocContainer;
    interface PunctuationToken<TKind extends PunctuationSyntaxKind> extends Token<TKind> {
    }
    type DotToken = PunctuationToken<SyntaxKind.DotToken>;
    type DotDotDotToken = PunctuationToken<SyntaxKind.DotDotDotToken>;
    type QuestionToken = PunctuationToken<SyntaxKind.QuestionToken>;
    type ExclamationToken = PunctuationToken<SyntaxKind.ExclamationToken>;
    type ColonToken = PunctuationToken<SyntaxKind.ColonToken>;
    type EqualsToken = PunctuationToken<SyntaxKind.EqualsToken>;
    type AmpersandAmpersandEqualsToken = PunctuationToken<SyntaxKind.AmpersandAmpersandEqualsToken>;
    type BarBarEqualsToken = PunctuationToken<SyntaxKind.BarBarEqualsToken>;
    type QuestionQuestionEqualsToken = PunctuationToken<SyntaxKind.QuestionQuestionEqualsToken>;
    type AsteriskToken = PunctuationToken<SyntaxKind.AsteriskToken>;
    type EqualsGreaterThanToken = PunctuationToken<SyntaxKind.EqualsGreaterThanToken>;
    type PlusToken = PunctuationToken<SyntaxKind.PlusToken>;
    type MinusToken = PunctuationToken<SyntaxKind.MinusToken>;
    type QuestionDotToken = PunctuationToken<SyntaxKind.QuestionDotToken>;
    interface KeywordToken<TKind extends KeywordSyntaxKind> extends Token<TKind> {
    }
    type AssertsKeyword = KeywordToken<SyntaxKind.AssertsKeyword>;
    type AssertKeyword = KeywordToken<SyntaxKind.AssertKeyword>;
    type AwaitKeyword = KeywordToken<SyntaxKind.AwaitKeyword>;
    type CaseKeyword = KeywordToken<SyntaxKind.CaseKeyword>;
    interface ModifierToken<TKind extends ModifierSyntaxKind> extends KeywordToken<TKind> {
    }
    type AbstractKeyword = ModifierToken<SyntaxKind.AbstractKeyword>;
    type AccessorKeyword = ModifierToken<SyntaxKind.AccessorKeyword>;
    type AsyncKeyword = ModifierToken<SyntaxKind.AsyncKeyword>;
    type ConstKeyword = ModifierToken<SyntaxKind.ConstKeyword>;
    type DeclareKeyword = ModifierToken<SyntaxKind.DeclareKeyword>;
    type DefaultKeyword = ModifierToken<SyntaxKind.DefaultKeyword>;
    type ExportKeyword = ModifierToken<SyntaxKind.ExportKeyword>;
    type InKeyword = ModifierToken<SyntaxKind.InKeyword>;
    type PrivateKeyword = ModifierToken<SyntaxKind.PrivateKeyword>;
    type ProtectedKeyword = ModifierToken<SyntaxKind.ProtectedKeyword>;
    type PublicKeyword = ModifierToken<SyntaxKind.PublicKeyword>;
    type ReadonlyKeyword = ModifierToken<SyntaxKind.ReadonlyKeyword>;
    type OutKeyword = ModifierToken<SyntaxKind.OutKeyword>;
    type OverrideKeyword = ModifierToken<SyntaxKind.OverrideKeyword>;
    type StaticKeyword = ModifierToken<SyntaxKind.StaticKeyword>;
    type Modifier = AbstractKeyword | AccessorKeyword | AsyncKeyword | ConstKeyword | DeclareKeyword | DefaultKeyword | ExportKeyword | InKeyword | PrivateKeyword | ProtectedKeyword | PublicKeyword | OutKeyword | OverrideKeyword | ReadonlyKeyword | StaticKeyword;
    type ModifierLike = Modifier | Decorator;
    type AccessibilityModifier = PublicKeyword | PrivateKeyword | ProtectedKeyword;
    type ParameterPropertyModifier = AccessibilityModifier | ReadonlyKeyword;
    type ClassMemberModifier = AccessibilityModifier | ReadonlyKeyword | StaticKeyword | AccessorKeyword;
    type ModifiersArray = NodeArray<Modifier>;
    enum GeneratedIdentifierFlags {
        None = 0,
        ReservedInNestedScopes = 8,
        Optimistic = 16,
        FileLevel = 32,
        AllowNameSubstitution = 64,
    }
    interface Identifier extends PrimaryExpression, Declaration, JSDocContainer, FlowContainer {
        readonly kind: SyntaxKind.Identifier;
        /**
         * Prefer to use `id.unescapedText`. (Note: This is available only in services, not internally to the TypeScript compiler.)
         * Text of identifier, but if the identifier begins with two underscores, this will begin with three.
         */
        readonly escapedText: __String;
    }
    interface Identifier {
        readonly text: string;
    }
    interface TransientIdentifier extends Identifier {
        resolvedSymbol: Symbol;
    }
    interface QualifiedName extends Node, FlowContainer {
        readonly kind: SyntaxKind.QualifiedName;
        readonly left: EntityName;
        readonly right: Identifier;
    }
    type EntityName = Identifier | QualifiedName;
    type PropertyName = Identifier | StringLiteral | NoSubstitutionTemplateLiteral | NumericLiteral | ComputedPropertyName | PrivateIdentifier | BigIntLiteral;
    type MemberName = Identifier | PrivateIdentifier;
    type DeclarationName = PropertyName | JsxAttributeName | StringLiteralLike | ElementAccessExpression | BindingPattern | EntityNameExpression;
    interface Declaration extends Node {
        _declarationBrand: any;
    }
    interface NamedDeclaration extends Declaration {
        readonly name?: DeclarationName;
    }
    interface DeclarationStatement extends NamedDeclaration, Statement {
        readonly name?: Identifier | StringLiteral | NumericLiteral;
    }
    interface ComputedPropertyName extends Node {
        readonly kind: SyntaxKind.ComputedPropertyName;
        readonly parent: Declaration;
        readonly expression: Expression;
    }
    interface PrivateIdentifier extends PrimaryExpression {
        readonly kind: SyntaxKind.PrivateIdentifier;
        readonly escapedText: __String;
    }
    interface PrivateIdentifier {
        readonly text: string;
    }
    interface Decorator extends Node {
        readonly kind: SyntaxKind.Decorator;
        readonly parent: NamedDeclaration;
        readonly expression: LeftHandSideExpression;
    }
    interface TypeParameterDeclaration extends NamedDeclaration, JSDocContainer {
        readonly kind: SyntaxKind.TypeParameter;
        readonly parent: DeclarationWithTypeParameterChildren | InferTypeNode;
        readonly modifiers?: NodeArray<Modifier>;
        readonly name: Identifier;
        /** Note: Consider calling `getEffectiveConstraintOfTypeParameter` */
        readonly constraint?: TypeNode;
        readonly default?: TypeNode;
        expression?: Expression;
    }
    interface SignatureDeclarationBase extends NamedDeclaration, JSDocContainer {
        readonly kind: SignatureDeclaration["kind"];
        readonly name?: PropertyName;
        readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
        readonly parameters: NodeArray<ParameterDeclaration>;
        readonly type?: TypeNode | undefined;
    }
    type SignatureDeclaration = CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | FunctionDeclaration | MethodDeclaration | ConstructorDeclaration | AccessorDeclaration | FunctionExpression | ArrowFunction;
    interface CallSignatureDeclaration extends SignatureDeclarationBase, TypeElement, LocalsContainer {
        readonly kind: SyntaxKind.CallSignature;
    }
    interface ConstructSignatureDeclaration extends SignatureDeclarationBase, TypeElement, LocalsContainer {
        readonly kind: SyntaxKind.ConstructSignature;
    }
    type BindingName = Identifier | BindingPattern;
    interface VariableDeclaration extends NamedDeclaration, JSDocContainer {
        readonly kind: SyntaxKind.VariableDeclaration;
        readonly parent: VariableDeclarationList | CatchClause;
        readonly name: BindingName;
        readonly exclamationToken?: ExclamationToken;
        readonly type?: TypeNode;
        readonly initializer?: Expression;
    }
    interface VariableDeclarationList extends Node {
        readonly kind: SyntaxKind.VariableDeclarationList;
        readonly parent: VariableStatement | ForStatement | ForOfStatement | ForInStatement;
        readonly declarations: NodeArray<VariableDeclaration>;
    }
    interface ParameterDeclaration extends NamedDeclaration, JSDocContainer {
        readonly kind: SyntaxKind.Parameter;
        readonly parent: SignatureDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly dotDotDotToken?: DotDotDotToken;
        readonly name: BindingName;
        readonly questionToken?: QuestionToken;
        readonly type?: TypeNode;
        readonly initializer?: Expression;
    }
    interface BindingElement extends NamedDeclaration, FlowContainer {
        readonly kind: SyntaxKind.BindingElement;
        readonly parent: BindingPattern;
        readonly propertyName?: PropertyName;
        readonly dotDotDotToken?: DotDotDotToken;
        readonly name: BindingName;
        readonly initializer?: Expression;
    }
    interface PropertySignature extends TypeElement, JSDocContainer {
        readonly kind: SyntaxKind.PropertySignature;
        readonly parent: TypeLiteralNode | InterfaceDeclaration;
        readonly modifiers?: NodeArray<Modifier>;
        readonly name: PropertyName;
        readonly questionToken?: QuestionToken;
        readonly type?: TypeNode;
    }
    interface PropertyDeclaration extends ClassElement, JSDocContainer {
        readonly kind: SyntaxKind.PropertyDeclaration;
        readonly parent: ClassLikeDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: PropertyName;
        readonly questionToken?: QuestionToken;
        readonly exclamationToken?: ExclamationToken;
        readonly type?: TypeNode;
        readonly initializer?: Expression;
    }
    interface AutoAccessorPropertyDeclaration extends PropertyDeclaration {
        _autoAccessorBrand: any;
    }
    interface ObjectLiteralElement extends NamedDeclaration {
        _objectLiteralBrand: any;
        readonly name?: PropertyName;
    }
    /** Unlike ObjectLiteralElement, excludes JSXAttribute and JSXSpreadAttribute. */
    type ObjectLiteralElementLike = PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | MethodDeclaration | AccessorDeclaration;
    interface PropertyAssignment extends ObjectLiteralElement, JSDocContainer {
        readonly kind: SyntaxKind.PropertyAssignment;
        readonly parent: ObjectLiteralExpression;
        readonly name: PropertyName;
        readonly initializer: Expression;
    }
    interface ShorthandPropertyAssignment extends ObjectLiteralElement, JSDocContainer {
        readonly kind: SyntaxKind.ShorthandPropertyAssignment;
        readonly parent: ObjectLiteralExpression;
        readonly name: Identifier;
        readonly equalsToken?: EqualsToken;
        readonly objectAssignmentInitializer?: Expression;
    }
    interface SpreadAssignment extends ObjectLiteralElement, JSDocContainer {
        readonly kind: SyntaxKind.SpreadAssignment;
        readonly parent: ObjectLiteralExpression;
        readonly expression: Expression;
    }
    type VariableLikeDeclaration = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyDeclaration | PropertyAssignment | PropertySignature | JsxAttribute | ShorthandPropertyAssignment | EnumMember | JSDocPropertyTag | JSDocParameterTag;
    interface ObjectBindingPattern extends Node {
        readonly kind: SyntaxKind.ObjectBindingPattern;
        readonly parent: VariableDeclaration | ParameterDeclaration | BindingElement;
        readonly elements: NodeArray<BindingElement>;
    }
    interface ArrayBindingPattern extends Node {
        readonly kind: SyntaxKind.ArrayBindingPattern;
        readonly parent: VariableDeclaration | ParameterDeclaration | BindingElement;
        readonly elements: NodeArray<ArrayBindingElement>;
    }
    type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
    type ArrayBindingElement = BindingElement | OmittedExpression;
    /**
     * Several node kinds share function-like features such as a signature,
     * a name, and a body. These nodes should extend FunctionLikeDeclarationBase.
     * Examples:
     * - FunctionDeclaration
     * - MethodDeclaration
     * - AccessorDeclaration
     */
    interface FunctionLikeDeclarationBase extends SignatureDeclarationBase {
        _functionLikeDeclarationBrand: any;
        readonly asteriskToken?: AsteriskToken | undefined;
        readonly questionToken?: QuestionToken | undefined;
        readonly exclamationToken?: ExclamationToken | undefined;
        readonly body?: Block | Expression | undefined;
    }
    type FunctionLikeDeclaration = FunctionDeclaration | MethodDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | ConstructorDeclaration | FunctionExpression | ArrowFunction;
    /** @deprecated Use SignatureDeclaration */
    type FunctionLike = SignatureDeclaration;
    interface FunctionDeclaration extends FunctionLikeDeclarationBase, DeclarationStatement, LocalsContainer {
        readonly kind: SyntaxKind.FunctionDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name?: Identifier;
        readonly body?: FunctionBody;
    }
    interface MethodSignature extends SignatureDeclarationBase, TypeElement, LocalsContainer {
        readonly kind: SyntaxKind.MethodSignature;
        readonly parent: TypeLiteralNode | InterfaceDeclaration;
        readonly modifiers?: NodeArray<Modifier>;
        readonly name: PropertyName;
    }
    interface MethodDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.MethodDeclaration;
        readonly parent: ClassLikeDeclaration | ObjectLiteralExpression;
        readonly modifiers?: NodeArray<ModifierLike> | undefined;
        readonly name: PropertyName;
        readonly body?: FunctionBody | undefined;
    }
    interface ConstructorDeclaration extends FunctionLikeDeclarationBase, ClassElement, JSDocContainer, LocalsContainer {
        readonly kind: SyntaxKind.Constructor;
        readonly parent: ClassLikeDeclaration;
        readonly modifiers?: NodeArray<ModifierLike> | undefined;
        readonly body?: FunctionBody | undefined;
    }
    /** For when we encounter a semicolon in a class declaration. ES6 allows these as class elements. */
    interface SemicolonClassElement extends ClassElement, JSDocContainer {
        readonly kind: SyntaxKind.SemicolonClassElement;
        readonly parent: ClassLikeDeclaration;
    }
    interface GetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, TypeElement, ObjectLiteralElement, JSDocContainer, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.GetAccessor;
        readonly parent: ClassLikeDeclaration | ObjectLiteralExpression | TypeLiteralNode | InterfaceDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: PropertyName;
        readonly body?: FunctionBody;
    }
    interface SetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, TypeElement, ObjectLiteralElement, JSDocContainer, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.SetAccessor;
        readonly parent: ClassLikeDeclaration | ObjectLiteralExpression | TypeLiteralNode | InterfaceDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: PropertyName;
        readonly body?: FunctionBody;
    }
    type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;
    interface IndexSignatureDeclaration extends SignatureDeclarationBase, ClassElement, TypeElement, LocalsContainer {
        readonly kind: SyntaxKind.IndexSignature;
        readonly parent: ObjectTypeDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly type: TypeNode;
    }
    interface ClassStaticBlockDeclaration extends ClassElement, JSDocContainer, LocalsContainer {
        readonly kind: SyntaxKind.ClassStaticBlockDeclaration;
        readonly parent: ClassDeclaration | ClassExpression;
        readonly body: Block;
    }
    interface TypeNode extends Node {
        _typeNodeBrand: any;
    }
    interface KeywordTypeNode<TKind extends KeywordTypeSyntaxKind = KeywordTypeSyntaxKind> extends KeywordToken<TKind>, TypeNode {
        readonly kind: TKind;
    }
    /** @deprecated */
    interface ImportTypeAssertionContainer extends Node {
        readonly kind: SyntaxKind.ImportTypeAssertionContainer;
        readonly parent: ImportTypeNode;
        /** @deprecated */ readonly assertClause: AssertClause;
        readonly multiLine?: boolean;
    }
    interface ImportTypeNode extends NodeWithTypeArguments {
        readonly kind: SyntaxKind.ImportType;
        readonly isTypeOf: boolean;
        readonly argument: TypeNode;
        /** @deprecated */ readonly assertions?: ImportTypeAssertionContainer;
        readonly attributes?: ImportAttributes;
        readonly qualifier?: EntityName;
    }
    interface ThisTypeNode extends TypeNode {
        readonly kind: SyntaxKind.ThisType;
    }
    type FunctionOrConstructorTypeNode = FunctionTypeNode | ConstructorTypeNode;
    interface FunctionOrConstructorTypeNodeBase extends TypeNode, SignatureDeclarationBase {
        readonly kind: SyntaxKind.FunctionType | SyntaxKind.ConstructorType;
        readonly type: TypeNode;
    }
    interface FunctionTypeNode extends FunctionOrConstructorTypeNodeBase, LocalsContainer {
        readonly kind: SyntaxKind.FunctionType;
    }
    interface ConstructorTypeNode extends FunctionOrConstructorTypeNodeBase, LocalsContainer {
        readonly kind: SyntaxKind.ConstructorType;
        readonly modifiers?: NodeArray<Modifier>;
    }
    interface NodeWithTypeArguments extends TypeNode {
        readonly typeArguments?: NodeArray<TypeNode>;
    }
    type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
    interface TypeReferenceNode extends NodeWithTypeArguments {
        readonly kind: SyntaxKind.TypeReference;
        readonly typeName: EntityName;
    }
    interface TypePredicateNode extends TypeNode {
        readonly kind: SyntaxKind.TypePredicate;
        readonly parent: SignatureDeclaration | JSDocTypeExpression;
        readonly assertsModifier?: AssertsKeyword;
        readonly parameterName: Identifier | ThisTypeNode;
        readonly type?: TypeNode;
    }
    interface TypeQueryNode extends NodeWithTypeArguments {
        readonly kind: SyntaxKind.TypeQuery;
        readonly exprName: EntityName;
    }
    interface TypeLiteralNode extends TypeNode, Declaration {
        readonly kind: SyntaxKind.TypeLiteral;
        readonly members: NodeArray<TypeElement>;
    }
    interface ArrayTypeNode extends TypeNode {
        readonly kind: SyntaxKind.ArrayType;
        readonly elementType: TypeNode;
    }
    interface TupleTypeNode extends TypeNode {
        readonly kind: SyntaxKind.TupleType;
        readonly elements: NodeArray<TypeNode | NamedTupleMember>;
    }
    interface NamedTupleMember extends TypeNode, Declaration, JSDocContainer {
        readonly kind: SyntaxKind.NamedTupleMember;
        readonly dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
        readonly name: Identifier;
        readonly questionToken?: Token<SyntaxKind.QuestionToken>;
        readonly type: TypeNode;
    }
    interface OptionalTypeNode extends TypeNode {
        readonly kind: SyntaxKind.OptionalType;
        readonly type: TypeNode;
    }
    interface RestTypeNode extends TypeNode {
        readonly kind: SyntaxKind.RestType;
        readonly type: TypeNode;
    }
    type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
    interface UnionTypeNode extends TypeNode {
        readonly kind: SyntaxKind.UnionType;
        readonly types: NodeArray<TypeNode>;
    }
    interface IntersectionTypeNode extends TypeNode {
        readonly kind: SyntaxKind.IntersectionType;
        readonly types: NodeArray<TypeNode>;
    }
    interface ConditionalTypeNode extends TypeNode, LocalsContainer {
        readonly kind: SyntaxKind.ConditionalType;
        readonly checkType: TypeNode;
        readonly extendsType: TypeNode;
        readonly trueType: TypeNode;
        readonly falseType: TypeNode;
    }
    interface InferTypeNode extends TypeNode {
        readonly kind: SyntaxKind.InferType;
        readonly typeParameter: TypeParameterDeclaration;
    }
    interface ParenthesizedTypeNode extends TypeNode {
        readonly kind: SyntaxKind.ParenthesizedType;
        readonly type: TypeNode;
    }
    interface TypeOperatorNode extends TypeNode {
        readonly kind: SyntaxKind.TypeOperator;
        readonly operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
        readonly type: TypeNode;
    }
    interface IndexedAccessTypeNode extends TypeNode {
        readonly kind: SyntaxKind.IndexedAccessType;
        readonly objectType: TypeNode;
        readonly indexType: TypeNode;
    }
    interface MappedTypeNode extends TypeNode, Declaration, LocalsContainer {
        readonly kind: SyntaxKind.MappedType;
        readonly readonlyToken?: ReadonlyKeyword | PlusToken | MinusToken;
        readonly typeParameter: TypeParameterDeclaration;
        readonly nameType?: TypeNode;
        readonly questionToken?: QuestionToken | PlusToken | MinusToken;
        readonly type?: TypeNode;
        /** Used only to produce grammar errors */
        readonly members?: NodeArray<TypeElement>;
    }
    interface LiteralTypeNode extends TypeNode {
        readonly kind: SyntaxKind.LiteralType;
        readonly literal: NullLiteral | BooleanLiteral | LiteralExpression | PrefixUnaryExpression;
    }
    interface StringLiteral extends LiteralExpression, Declaration {
        readonly kind: SyntaxKind.StringLiteral;
    }
    type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
    type PropertyNameLiteral = Identifier | StringLiteralLike | NumericLiteral | JsxNamespacedName | BigIntLiteral;
    interface TemplateLiteralTypeNode extends TypeNode {
        kind: SyntaxKind.TemplateLiteralType;
        readonly head: TemplateHead;
        readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
    }
    interface TemplateLiteralTypeSpan extends TypeNode {
        readonly kind: SyntaxKind.TemplateLiteralTypeSpan;
        readonly parent: TemplateLiteralTypeNode;
        readonly type: TypeNode;
        readonly literal: TemplateMiddle | TemplateTail;
    }
    interface Expression extends Node {
        _expressionBrand: any;
    }
    interface OmittedExpression extends Expression {
        readonly kind: SyntaxKind.OmittedExpression;
    }
    interface PartiallyEmittedExpression extends LeftHandSideExpression {
        readonly kind: SyntaxKind.PartiallyEmittedExpression;
        readonly expression: Expression;
    }
    interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }
    /** Deprecated, please use UpdateExpression */
    type IncrementExpression = UpdateExpression;
    interface UpdateExpression extends UnaryExpression {
        _updateExpressionBrand: any;
    }
    type PrefixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.TildeToken | SyntaxKind.ExclamationToken;
    interface PrefixUnaryExpression extends UpdateExpression {
        readonly kind: SyntaxKind.PrefixUnaryExpression;
        readonly operator: PrefixUnaryOperator;
        readonly operand: UnaryExpression;
    }
    type PostfixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken;
    interface PostfixUnaryExpression extends UpdateExpression {
        readonly kind: SyntaxKind.PostfixUnaryExpression;
        readonly operand: LeftHandSideExpression;
        readonly operator: PostfixUnaryOperator;
    }
    interface LeftHandSideExpression extends UpdateExpression {
        _leftHandSideExpressionBrand: any;
    }
    interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }
    interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }
    interface NullLiteral extends PrimaryExpression {
        readonly kind: SyntaxKind.NullKeyword;
    }
    interface TrueLiteral extends PrimaryExpression {
        readonly kind: SyntaxKind.TrueKeyword;
    }
    interface FalseLiteral extends PrimaryExpression {
        readonly kind: SyntaxKind.FalseKeyword;
    }
    type BooleanLiteral = TrueLiteral | FalseLiteral;
    interface ThisExpression extends PrimaryExpression, FlowContainer {
        readonly kind: SyntaxKind.ThisKeyword;
    }
    interface SuperExpression extends PrimaryExpression, FlowContainer {
        readonly kind: SyntaxKind.SuperKeyword;
    }
    interface ImportExpression extends PrimaryExpression {
        readonly kind: SyntaxKind.ImportKeyword;
    }
    interface DeleteExpression extends UnaryExpression {
        readonly kind: SyntaxKind.DeleteExpression;
        readonly expression: UnaryExpression;
    }
    interface TypeOfExpression extends UnaryExpression {
        readonly kind: SyntaxKind.TypeOfExpression;
        readonly expression: UnaryExpression;
    }
    interface VoidExpression extends UnaryExpression {
        readonly kind: SyntaxKind.VoidExpression;
        readonly expression: UnaryExpression;
    }
    interface AwaitExpression extends UnaryExpression {
        readonly kind: SyntaxKind.AwaitExpression;
        readonly expression: UnaryExpression;
    }
    interface YieldExpression extends Expression {
        readonly kind: SyntaxKind.YieldExpression;
        readonly asteriskToken?: AsteriskToken;
        readonly expression?: Expression;
    }
    interface SyntheticExpression extends Expression {
        readonly kind: SyntaxKind.SyntheticExpression;
        readonly isSpread: boolean;
        readonly type: Type;
        readonly tupleNameSource?: ParameterDeclaration | NamedTupleMember;
    }
    type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;
    type MultiplicativeOperator = SyntaxKind.AsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken;
    type MultiplicativeOperatorOrHigher = ExponentiationOperator | MultiplicativeOperator;
    type AdditiveOperator = SyntaxKind.PlusToken | SyntaxKind.MinusToken;
    type AdditiveOperatorOrHigher = MultiplicativeOperatorOrHigher | AdditiveOperator;
    type ShiftOperator = SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;
    type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
    type RelationalOperator = SyntaxKind.LessThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.InstanceOfKeyword | SyntaxKind.InKeyword;
    type RelationalOperatorOrHigher = ShiftOperatorOrHigher | RelationalOperator;
    type EqualityOperator = SyntaxKind.EqualsEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.ExclamationEqualsToken;
    type EqualityOperatorOrHigher = RelationalOperatorOrHigher | EqualityOperator;
    type BitwiseOperator = SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken;
    type BitwiseOperatorOrHigher = EqualityOperatorOrHigher | BitwiseOperator;
    type LogicalOperator = SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken;
    type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
    type CompoundAssignmentOperator = SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken | SyntaxKind.BarBarEqualsToken | SyntaxKind.AmpersandAmpersandEqualsToken | SyntaxKind.QuestionQuestionEqualsToken;
    type AssignmentOperator = SyntaxKind.EqualsToken | CompoundAssignmentOperator;
    type AssignmentOperatorOrHigher = SyntaxKind.QuestionQuestionToken | LogicalOperatorOrHigher | AssignmentOperator;
    type BinaryOperator = AssignmentOperatorOrHigher | SyntaxKind.CommaToken;
    type LogicalOrCoalescingAssignmentOperator = SyntaxKind.AmpersandAmpersandEqualsToken | SyntaxKind.BarBarEqualsToken | SyntaxKind.QuestionQuestionEqualsToken;
    type BinaryOperatorToken = Token<BinaryOperator>;
    interface BinaryExpression extends Expression, Declaration, JSDocContainer {
        readonly kind: SyntaxKind.BinaryExpression;
        readonly left: Expression;
        readonly operatorToken: BinaryOperatorToken;
        readonly right: Expression;
    }
    type AssignmentOperatorToken = Token<AssignmentOperator>;
    interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
        readonly left: LeftHandSideExpression;
        readonly operatorToken: TOperator;
    }
    interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        readonly left: ObjectLiteralExpression;
    }
    interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        readonly left: ArrayLiteralExpression;
    }
    type DestructuringAssignment = ObjectDestructuringAssignment | ArrayDestructuringAssignment;
    type BindingOrAssignmentElement = VariableDeclaration | ParameterDeclaration | ObjectBindingOrAssignmentElement | ArrayBindingOrAssignmentElement;
    type ObjectBindingOrAssignmentElement = BindingElement | PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment;
    type ArrayBindingOrAssignmentElement = BindingElement | OmittedExpression | SpreadElement | ArrayLiteralExpression | ObjectLiteralExpression | AssignmentExpression<EqualsToken> | Identifier | PropertyAccessExpression | ElementAccessExpression;
    type BindingOrAssignmentElementRestIndicator = DotDotDotToken | SpreadElement | SpreadAssignment;
    type BindingOrAssignmentElementTarget = BindingOrAssignmentPattern | Identifier | PropertyAccessExpression | ElementAccessExpression | OmittedExpression;
    type ObjectBindingOrAssignmentPattern = ObjectBindingPattern | ObjectLiteralExpression;
    type ArrayBindingOrAssignmentPattern = ArrayBindingPattern | ArrayLiteralExpression;
    type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;
    type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;
    interface ConditionalExpression extends Expression {
        readonly kind: SyntaxKind.ConditionalExpression;
        readonly condition: Expression;
        readonly questionToken: QuestionToken;
        readonly whenTrue: Expression;
        readonly colonToken: ColonToken;
        readonly whenFalse: Expression;
    }
    type FunctionBody = Block;
    type ConciseBody = FunctionBody | Expression;
    interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclarationBase, JSDocContainer, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.FunctionExpression;
        readonly modifiers?: NodeArray<Modifier>;
        readonly name?: Identifier;
        readonly body: FunctionBody;
    }
    interface ArrowFunction extends Expression, FunctionLikeDeclarationBase, JSDocContainer, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.ArrowFunction;
        readonly modifiers?: NodeArray<Modifier>;
        readonly equalsGreaterThanToken: EqualsGreaterThanToken;
        readonly body: ConciseBody;
        readonly name: never;
    }
    interface LiteralLikeNode extends Node {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
    }
    interface TemplateLiteralLikeNode extends LiteralLikeNode {
        rawText?: string;
    }
    interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
        _literalExpressionBrand: any;
    }
    interface RegularExpressionLiteral extends LiteralExpression {
        readonly kind: SyntaxKind.RegularExpressionLiteral;
    }
    interface NoSubstitutionTemplateLiteral extends LiteralExpression, TemplateLiteralLikeNode, Declaration {
        readonly kind: SyntaxKind.NoSubstitutionTemplateLiteral;
    }
    enum TokenFlags {
        None = 0,
        Scientific = 16,
        Octal = 32,
        HexSpecifier = 64,
        BinarySpecifier = 128,
        OctalSpecifier = 256,
    }
    interface NumericLiteral extends LiteralExpression, Declaration {
        readonly kind: SyntaxKind.NumericLiteral;
    }
    interface BigIntLiteral extends LiteralExpression {
        readonly kind: SyntaxKind.BigIntLiteral;
    }
    type LiteralToken = NumericLiteral | BigIntLiteral | StringLiteral | JsxText | RegularExpressionLiteral | NoSubstitutionTemplateLiteral;
    interface TemplateHead extends TemplateLiteralLikeNode {
        readonly kind: SyntaxKind.TemplateHead;
        readonly parent: TemplateExpression | TemplateLiteralTypeNode;
    }
    interface TemplateMiddle extends TemplateLiteralLikeNode {
        readonly kind: SyntaxKind.TemplateMiddle;
        readonly parent: TemplateSpan | TemplateLiteralTypeSpan;
    }
    interface TemplateTail extends TemplateLiteralLikeNode {
        readonly kind: SyntaxKind.TemplateTail;
        readonly parent: TemplateSpan | TemplateLiteralTypeSpan;
    }
    type PseudoLiteralToken = TemplateHead | TemplateMiddle | TemplateTail;
    type TemplateLiteralToken = NoSubstitutionTemplateLiteral | PseudoLiteralToken;
    interface TemplateExpression extends PrimaryExpression {
        readonly kind: SyntaxKind.TemplateExpression;
        readonly head: TemplateHead;
        readonly templateSpans: NodeArray<TemplateSpan>;
    }
    type TemplateLiteral = TemplateExpression | NoSubstitutionTemplateLiteral;
    interface TemplateSpan extends Node {
        readonly kind: SyntaxKind.TemplateSpan;
        readonly parent: TemplateExpression;
        readonly expression: Expression;
        readonly literal: TemplateMiddle | TemplateTail;
    }
    interface ParenthesizedExpression extends PrimaryExpression, JSDocContainer {
        readonly kind: SyntaxKind.ParenthesizedExpression;
        readonly expression: Expression;
    }
    interface ArrayLiteralExpression extends PrimaryExpression {
        readonly kind: SyntaxKind.ArrayLiteralExpression;
        readonly elements: NodeArray<Expression>;
    }
    interface SpreadElement extends Expression {
        readonly kind: SyntaxKind.SpreadElement;
        readonly parent: ArrayLiteralExpression | CallExpression | NewExpression;
        readonly expression: Expression;
    }
    /**
     * This interface is a base interface for ObjectLiteralExpression and JSXAttributes to extend from. JSXAttributes is similar to
     * ObjectLiteralExpression in that it contains array of properties; however, JSXAttributes' properties can only be
     * JSXAttribute or JSXSpreadAttribute. ObjectLiteralExpression, on the other hand, can only have properties of type
     * ObjectLiteralElement (e.g. PropertyAssignment, ShorthandPropertyAssignment etc.)
     */
    interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
        readonly properties: NodeArray<T>;
    }
    interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike>, JSDocContainer {
        readonly kind: SyntaxKind.ObjectLiteralExpression;
    }
    type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression;
    type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;
    type AccessExpression = PropertyAccessExpression | ElementAccessExpression;
    interface PropertyAccessExpression extends MemberExpression, NamedDeclaration, JSDocContainer, FlowContainer {
        readonly kind: SyntaxKind.PropertyAccessExpression;
        readonly expression: LeftHandSideExpression;
        readonly questionDotToken?: QuestionDotToken;
        readonly name: MemberName;
    }
    interface PropertyAccessChain extends PropertyAccessExpression {
        _optionalChainBrand: any;
        readonly name: MemberName;
    }
    interface SuperPropertyAccessExpression extends PropertyAccessExpression {
        readonly expression: SuperExpression;
    }
    /** Brand for a PropertyAccessExpression which, like a QualifiedName, consists of a sequence of identifiers separated by dots. */
    interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
        _propertyAccessExpressionLikeQualifiedNameBrand?: any;
        readonly expression: EntityNameExpression;
        readonly name: Identifier;
    }
    interface ElementAccessExpression extends MemberExpression, Declaration, JSDocContainer, FlowContainer {
        readonly kind: SyntaxKind.ElementAccessExpression;
        readonly expression: LeftHandSideExpression;
        readonly questionDotToken?: QuestionDotToken;
        readonly argumentExpression: Expression;
    }
    interface ElementAccessChain extends ElementAccessExpression {
        _optionalChainBrand: any;
    }
    interface SuperElementAccessExpression extends ElementAccessExpression {
        readonly expression: SuperExpression;
    }
    type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;
    interface CallExpression extends LeftHandSideExpression, Declaration {
        readonly kind: SyntaxKind.CallExpression;
        readonly expression: LeftHandSideExpression;
        readonly questionDotToken?: QuestionDotToken;
        readonly typeArguments?: NodeArray<TypeNode>;
        readonly arguments: NodeArray<Expression>;
    }
    interface CallChain extends CallExpression {
        _optionalChainBrand: any;
    }
    type OptionalChain = PropertyAccessChain | ElementAccessChain | CallChain | NonNullChain;
    interface SuperCall extends CallExpression {
        readonly expression: SuperExpression;
    }
    interface ImportCall extends CallExpression {
        readonly expression: ImportExpression | ImportDeferProperty;
    }
    interface ExpressionWithTypeArguments extends MemberExpression, NodeWithTypeArguments {
        readonly kind: SyntaxKind.ExpressionWithTypeArguments;
        readonly expression: LeftHandSideExpression;
    }
    interface NewExpression extends PrimaryExpression, Declaration {
        readonly kind: SyntaxKind.NewExpression;
        readonly expression: LeftHandSideExpression;
        readonly typeArguments?: NodeArray<TypeNode>;
        readonly arguments?: NodeArray<Expression>;
    }
    interface TaggedTemplateExpression extends MemberExpression {
        readonly kind: SyntaxKind.TaggedTemplateExpression;
        readonly tag: LeftHandSideExpression;
        readonly typeArguments?: NodeArray<TypeNode>;
        readonly template: TemplateLiteral;
    }
    interface InstanceofExpression extends BinaryExpression {
        readonly operatorToken: Token<SyntaxKind.InstanceOfKeyword>;
    }
    type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator | JsxCallLike | InstanceofExpression;
    interface AsExpression extends Expression {
        readonly kind: SyntaxKind.AsExpression;
        readonly expression: Expression;
        readonly type: TypeNode;
    }
    interface TypeAssertion extends UnaryExpression {
        readonly kind: SyntaxKind.TypeAssertionExpression;
        readonly type: TypeNode;
        readonly expression: UnaryExpression;
    }
    interface SatisfiesExpression extends Expression {
        readonly kind: SyntaxKind.SatisfiesExpression;
        readonly expression: Expression;
        readonly type: TypeNode;
    }
    type AssertionExpression = TypeAssertion | AsExpression;
    interface NonNullExpression extends LeftHandSideExpression {
        readonly kind: SyntaxKind.NonNullExpression;
        readonly expression: Expression;
    }
    interface NonNullChain extends NonNullExpression {
        _optionalChainBrand: any;
    }
    interface MetaProperty extends PrimaryExpression, FlowContainer {
        readonly kind: SyntaxKind.MetaProperty;
        readonly keywordToken: SyntaxKind.NewKeyword | SyntaxKind.ImportKeyword;
        readonly name: Identifier;
    }
    interface ImportDeferProperty extends MetaProperty {
        readonly keywordToken: SyntaxKind.ImportKeyword;
        readonly name: Identifier & {
            readonly escapedText: __String & "defer";
        };
    }
    interface JsxElement extends PrimaryExpression {
        readonly kind: SyntaxKind.JsxElement;
        readonly openingElement: JsxOpeningElement;
        readonly children: NodeArray<JsxChild>;
        readonly closingElement: JsxClosingElement;
    }
    type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
    type JsxCallLike = JsxOpeningLikeElement | JsxOpeningFragment;
    type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
    type JsxAttributeName = Identifier | JsxNamespacedName;
    type JsxTagNameExpression = Identifier | ThisExpression | JsxTagNamePropertyAccess | JsxNamespacedName;
    interface JsxTagNamePropertyAccess extends PropertyAccessExpression {
        readonly expression: Identifier | ThisExpression | JsxTagNamePropertyAccess;
    }
    interface JsxAttributes extends PrimaryExpression, Declaration {
        readonly properties: NodeArray<JsxAttributeLike>;
        readonly kind: SyntaxKind.JsxAttributes;
        readonly parent: JsxOpeningLikeElement;
    }
    interface JsxNamespacedName extends Node {
        readonly kind: SyntaxKind.JsxNamespacedName;
        readonly name: Identifier;
        readonly namespace: Identifier;
    }
    interface JsxOpeningElement extends Expression {
        readonly kind: SyntaxKind.JsxOpeningElement;
        readonly parent: JsxElement;
        readonly tagName: JsxTagNameExpression;
        readonly typeArguments?: NodeArray<TypeNode>;
        readonly attributes: JsxAttributes;
    }
    interface JsxSelfClosingElement extends PrimaryExpression {
        readonly kind: SyntaxKind.JsxSelfClosingElement;
        readonly tagName: JsxTagNameExpression;
        readonly typeArguments?: NodeArray<TypeNode>;
        readonly attributes: JsxAttributes;
    }
    interface JsxFragment extends PrimaryExpression {
        readonly kind: SyntaxKind.JsxFragment;
        readonly openingFragment: JsxOpeningFragment;
        readonly children: NodeArray<JsxChild>;
        readonly closingFragment: JsxClosingFragment;
    }
    interface JsxOpeningFragment extends Expression {
        readonly kind: SyntaxKind.JsxOpeningFragment;
        readonly parent: JsxFragment;
    }
    interface JsxClosingFragment extends Expression {
        readonly kind: SyntaxKind.JsxClosingFragment;
        readonly parent: JsxFragment;
    }
    interface JsxAttribute extends Declaration {
        readonly kind: SyntaxKind.JsxAttribute;
        readonly parent: JsxAttributes;
        readonly name: JsxAttributeName;
        readonly initializer?: JsxAttributeValue;
    }
    type JsxAttributeValue = StringLiteral | JsxExpression | JsxElement | JsxSelfClosingElement | JsxFragment;
    interface JsxSpreadAttribute extends ObjectLiteralElement {
        readonly kind: SyntaxKind.JsxSpreadAttribute;
        readonly parent: JsxAttributes;
        readonly expression: Expression;
    }
    interface JsxClosingElement extends Node {
        readonly kind: SyntaxKind.JsxClosingElement;
        readonly parent: JsxElement;
        readonly tagName: JsxTagNameExpression;
    }
    interface JsxExpression extends Expression {
        readonly kind: SyntaxKind.JsxExpression;
        readonly parent: JsxElement | JsxFragment | JsxAttributeLike;
        readonly dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
        readonly expression?: Expression;
    }
    interface JsxText extends LiteralLikeNode {
        readonly kind: SyntaxKind.JsxText;
        readonly parent: JsxElement | JsxFragment;
        readonly containsOnlyTriviaWhiteSpaces: boolean;
    }
    type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement | JsxFragment;
    interface Statement extends Node, JSDocContainer {
        _statementBrand: any;
    }
    interface NotEmittedStatement extends Statement {
        readonly kind: SyntaxKind.NotEmittedStatement;
    }
    interface NotEmittedTypeElement extends TypeElement {
        readonly kind: SyntaxKind.NotEmittedTypeElement;
    }
    /**
     * A list of comma-separated expressions. This node is only created by transformations.
     */
    interface CommaListExpression extends Expression {
        readonly kind: SyntaxKind.CommaListExpression;
        readonly elements: NodeArray<Expression>;
    }
    interface EmptyStatement extends Statement {
        readonly kind: SyntaxKind.EmptyStatement;
    }
    interface DebuggerStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.DebuggerStatement;
    }
    interface MissingDeclaration extends DeclarationStatement, PrimaryExpression {
        readonly kind: SyntaxKind.MissingDeclaration;
        readonly name?: Identifier;
    }
    type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
    interface Block extends Statement, LocalsContainer {
        readonly kind: SyntaxKind.Block;
        readonly statements: NodeArray<Statement>;
    }
    interface VariableStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.VariableStatement;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly declarationList: VariableDeclarationList;
    }
    interface ExpressionStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.ExpressionStatement;
        readonly expression: Expression;
    }
    interface IfStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.IfStatement;
        readonly expression: Expression;
        readonly thenStatement: Statement;
        readonly elseStatement?: Statement;
    }
    interface IterationStatement extends Statement {
        readonly statement: Statement;
    }
    interface DoStatement extends IterationStatement, FlowContainer {
        readonly kind: SyntaxKind.DoStatement;
        readonly expression: Expression;
    }
    interface WhileStatement extends IterationStatement, FlowContainer {
        readonly kind: SyntaxKind.WhileStatement;
        readonly expression: Expression;
    }
    type ForInitializer = VariableDeclarationList | Expression;
    interface ForStatement extends IterationStatement, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.ForStatement;
        readonly initializer?: ForInitializer;
        readonly condition?: Expression;
        readonly incrementor?: Expression;
    }
    type ForInOrOfStatement = ForInStatement | ForOfStatement;
    interface ForInStatement extends IterationStatement, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.ForInStatement;
        readonly initializer: ForInitializer;
        readonly expression: Expression;
    }
    interface ForOfStatement extends IterationStatement, LocalsContainer, FlowContainer {
        readonly kind: SyntaxKind.ForOfStatement;
        readonly awaitModifier?: AwaitKeyword;
        readonly initializer: ForInitializer;
        readonly expression: Expression;
    }
    interface BreakStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.BreakStatement;
        readonly label?: Identifier;
    }
    interface ContinueStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.ContinueStatement;
        readonly label?: Identifier;
    }
    type BreakOrContinueStatement = BreakStatement | ContinueStatement;
    interface ReturnStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.ReturnStatement;
        readonly expression?: Expression;
    }
    interface WithStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.WithStatement;
        readonly expression: Expression;
        readonly statement: Statement;
    }
    interface SwitchStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.SwitchStatement;
        readonly expression: Expression;
        readonly caseBlock: CaseBlock;
        possiblyExhaustive?: boolean;
    }
    interface CaseBlock extends Node, LocalsContainer {
        readonly kind: SyntaxKind.CaseBlock;
        readonly parent: SwitchStatement;
        readonly clauses: NodeArray<CaseOrDefaultClause>;
    }
    interface CaseClause extends Node, JSDocContainer {
        readonly kind: SyntaxKind.CaseClause;
        readonly parent: CaseBlock;
        readonly expression: Expression;
        readonly statements: NodeArray<Statement>;
    }
    interface DefaultClause extends Node {
        readonly kind: SyntaxKind.DefaultClause;
        readonly parent: CaseBlock;
        readonly statements: NodeArray<Statement>;
    }
    type CaseOrDefaultClause = CaseClause | DefaultClause;
    interface LabeledStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.LabeledStatement;
        readonly label: Identifier;
        readonly statement: Statement;
    }
    interface ThrowStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.ThrowStatement;
        readonly expression: Expression;
    }
    interface TryStatement extends Statement, FlowContainer {
        readonly kind: SyntaxKind.TryStatement;
        readonly tryBlock: Block;
        readonly catchClause?: CatchClause;
        readonly finallyBlock?: Block;
    }
    interface CatchClause extends Node, LocalsContainer {
        readonly kind: SyntaxKind.CatchClause;
        readonly parent: TryStatement;
        readonly variableDeclaration?: VariableDeclaration;
        readonly block: Block;
    }
    type ObjectTypeDeclaration = ClassLikeDeclaration | InterfaceDeclaration | TypeLiteralNode;
    type DeclarationWithTypeParameters = DeclarationWithTypeParameterChildren | JSDocTypedefTag | JSDocCallbackTag | JSDocSignature;
    type DeclarationWithTypeParameterChildren = SignatureDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | JSDocTemplateTag;
    interface ClassLikeDeclarationBase extends NamedDeclaration, JSDocContainer {
        readonly kind: SyntaxKind.ClassDeclaration | SyntaxKind.ClassExpression;
        readonly name?: Identifier;
        readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
        readonly heritageClauses?: NodeArray<HeritageClause>;
        readonly members: NodeArray<ClassElement>;
    }
    interface ClassDeclaration extends ClassLikeDeclarationBase, DeclarationStatement {
        readonly kind: SyntaxKind.ClassDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        /** May be undefined in `export default class { ... }`. */
        readonly name?: Identifier;
    }
    interface ClassExpression extends ClassLikeDeclarationBase, PrimaryExpression {
        readonly kind: SyntaxKind.ClassExpression;
        readonly modifiers?: NodeArray<ModifierLike>;
    }
    type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
    interface ClassElement extends NamedDeclaration {
        _classElementBrand: any;
        readonly name?: PropertyName;
    }
    interface TypeElement extends NamedDeclaration {
        _typeElementBrand: any;
        readonly name?: PropertyName;
        readonly questionToken?: QuestionToken | undefined;
    }
    interface InterfaceDeclaration extends DeclarationStatement, JSDocContainer {
        readonly kind: SyntaxKind.InterfaceDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: Identifier;
        readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
        readonly heritageClauses?: NodeArray<HeritageClause>;
        readonly members: NodeArray<TypeElement>;
    }
    interface HeritageClause extends Node {
        readonly kind: SyntaxKind.HeritageClause;
        readonly parent: InterfaceDeclaration | ClassLikeDeclaration;
        readonly token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword;
        readonly types: NodeArray<ExpressionWithTypeArguments>;
    }
    interface TypeAliasDeclaration extends DeclarationStatement, JSDocContainer, LocalsContainer {
        readonly kind: SyntaxKind.TypeAliasDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: Identifier;
        readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
        readonly type: TypeNode;
    }
    interface EnumMember extends NamedDeclaration, JSDocContainer {
        readonly kind: SyntaxKind.EnumMember;
        readonly parent: EnumDeclaration;
        readonly name: PropertyName;
        readonly initializer?: Expression;
    }
    interface EnumDeclaration extends DeclarationStatement, JSDocContainer {
        readonly kind: SyntaxKind.EnumDeclaration;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: Identifier;
        readonly members: NodeArray<EnumMember>;
    }
    type ModuleName = Identifier | StringLiteral;
    type ModuleBody = NamespaceBody | JSDocNamespaceBody;
    interface ModuleDeclaration extends DeclarationStatement, JSDocContainer, LocalsContainer {
        readonly kind: SyntaxKind.ModuleDeclaration;
        readonly parent: ModuleBody | SourceFile;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: ModuleName;
        readonly body?: ModuleBody | JSDocNamespaceDeclaration;
    }
    type NamespaceBody = ModuleBlock | NamespaceDeclaration;
    interface NamespaceDeclaration extends ModuleDeclaration {
        readonly name: Identifier;
        readonly body: NamespaceBody;
    }
    type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
    interface JSDocNamespaceDeclaration extends ModuleDeclaration {
        readonly name: Identifier;
        readonly body?: JSDocNamespaceBody;
    }
    interface ModuleBlock extends Node, Statement {
        readonly kind: SyntaxKind.ModuleBlock;
        readonly parent: ModuleDeclaration;
        readonly statements: NodeArray<Statement>;
    }
    type ModuleReference = EntityName | ExternalModuleReference;
    /**
     * One of:
     * - import x = require("mod");
     * - import x = M.x;
     */
    interface ImportEqualsDeclaration extends DeclarationStatement, JSDocContainer {
        readonly kind: SyntaxKind.ImportEqualsDeclaration;
        readonly parent: SourceFile | ModuleBlock;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly name: Identifier;
        readonly isTypeOnly: boolean;
        readonly moduleReference: ModuleReference;
    }
    interface ExternalModuleReference extends Node {
        readonly kind: SyntaxKind.ExternalModuleReference;
        readonly parent: ImportEqualsDeclaration;
        readonly expression: Expression;
    }
    interface ImportDeclaration extends Statement {
        readonly kind: SyntaxKind.ImportDeclaration;
        readonly parent: SourceFile | ModuleBlock;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly importClause?: ImportClause;
        /** If this is not a StringLiteral it will be a grammar error. */
        readonly moduleSpecifier: Expression;
        /** @deprecated */ readonly assertClause?: AssertClause;
        readonly attributes?: ImportAttributes;
    }
    type NamedImportBindings = NamespaceImport | NamedImports;
    type NamedExportBindings = NamespaceExport | NamedExports;
    interface ImportClause extends NamedDeclaration {
        readonly kind: SyntaxKind.ImportClause;
        readonly parent: ImportDeclaration | JSDocImportTag;
        /** @deprecated Use `phaseModifier` instead */
        readonly isTypeOnly: boolean;
        readonly phaseModifier: undefined | ImportPhaseModifierSyntaxKind;
        readonly name?: Identifier;
        readonly namedBindings?: NamedImportBindings;
    }
    type ImportPhaseModifierSyntaxKind = SyntaxKind.TypeKeyword | SyntaxKind.DeferKeyword;
    /** @deprecated */
    type AssertionKey = ImportAttributeName;
    /** @deprecated */
    interface AssertEntry extends ImportAttribute {
    }
    /** @deprecated */
    interface AssertClause extends ImportAttributes {
    }
    type ImportAttributeName = Identifier | StringLiteral;
    interface ImportAttribute extends Node {
        readonly kind: SyntaxKind.ImportAttribute;
        readonly parent: ImportAttributes;
        readonly name: ImportAttributeName;
        readonly value: Expression;
    }
    interface ImportAttributes extends Node {
        readonly token: SyntaxKind.WithKeyword | SyntaxKind.AssertKeyword;
        readonly kind: SyntaxKind.ImportAttributes;
        readonly parent: ImportDeclaration | ExportDeclaration;
        readonly elements: NodeArray<ImportAttribute>;
        readonly multiLine?: boolean;
    }
    interface NamespaceImport extends NamedDeclaration {
        readonly kind: SyntaxKind.NamespaceImport;
        readonly parent: ImportClause;
        readonly name: Identifier;
    }
    interface NamespaceExport extends NamedDeclaration {
        readonly kind: SyntaxKind.NamespaceExport;
        readonly parent: ExportDeclaration;
        readonly name: ModuleExportName;
    }
    interface NamespaceExportDeclaration extends DeclarationStatement, JSDocContainer {
        readonly kind: SyntaxKind.NamespaceExportDeclaration;
        readonly name: Identifier;
    }
    interface ExportDeclaration extends DeclarationStatement, JSDocContainer {
        readonly kind: SyntaxKind.ExportDeclaration;
        readonly parent: SourceFile | ModuleBlock;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly isTypeOnly: boolean;
        /** Will not be assigned in the case of `export * from "foo";` */
        readonly exportClause?: NamedExportBindings;
        /** If this is not a StringLiteral it will be a grammar error. */
        readonly moduleSpecifier?: Expression;
        /** @deprecated */ readonly assertClause?: AssertClause;
        readonly attributes?: ImportAttributes;
    }
    interface NamedImports extends Node {
        readonly kind: SyntaxKind.NamedImports;
        readonly parent: ImportClause;
        readonly elements: NodeArray<ImportSpecifier>;
    }
    interface NamedExports extends Node {
        readonly kind: SyntaxKind.NamedExports;
        readonly parent: ExportDeclaration;
        readonly elements: NodeArray<ExportSpecifier>;
    }
    type NamedImportsOrExports = NamedImports | NamedExports;
    interface ImportSpecifier extends NamedDeclaration {
        readonly kind: SyntaxKind.ImportSpecifier;
        readonly parent: NamedImports;
        readonly propertyName?: ModuleExportName;
        readonly name: Identifier;
        readonly isTypeOnly: boolean;
    }
    interface ExportSpecifier extends NamedDeclaration, JSDocContainer {
        readonly kind: SyntaxKind.ExportSpecifier;
        readonly parent: NamedExports;
        readonly isTypeOnly: boolean;
        readonly propertyName?: ModuleExportName;
        readonly name: ModuleExportName;
    }
    type ModuleExportName = Identifier | StringLiteral;
    type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
    type TypeOnlyCompatibleAliasDeclaration = ImportClause | ImportEqualsDeclaration | NamespaceImport | ImportOrExportSpecifier | ExportDeclaration | NamespaceExport;
    type TypeOnlyImportDeclaration =
        | ImportClause & {
            readonly isTypeOnly: true;
            readonly name: Identifier;
        }
        | ImportEqualsDeclaration & {
            readonly isTypeOnly: true;
        }
        | NamespaceImport & {
            readonly parent: ImportClause & {
                readonly isTypeOnly: true;
            };
        }
        | ImportSpecifier
            & ({
                readonly isTypeOnly: true;
            } | {
                readonly parent: NamedImports & {
                    readonly parent: ImportClause & {
                        readonly isTypeOnly: true;
                    };
                };
            });
    type TypeOnlyExportDeclaration =
        | ExportSpecifier
            & ({
                readonly isTypeOnly: true;
            } | {
                readonly parent: NamedExports & {
                    readonly parent: ExportDeclaration & {
                        readonly isTypeOnly: true;
                    };
                };
            })
        | ExportDeclaration & {
            readonly isTypeOnly: true;
            readonly moduleSpecifier: Expression;
        }
        | NamespaceExport & {
            readonly parent: ExportDeclaration & {
                readonly isTypeOnly: true;
                readonly moduleSpecifier: Expression;
            };
        };
    type TypeOnlyAliasDeclaration = TypeOnlyImportDeclaration | TypeOnlyExportDeclaration;
    /**
     * This is either an `export =` or an `export default` declaration.
     * Unless `isExportEquals` is set, this node was parsed as an `export default`.
     */
    interface ExportAssignment extends DeclarationStatement, JSDocContainer {
        readonly kind: SyntaxKind.ExportAssignment;
        readonly parent: SourceFile;
        readonly modifiers?: NodeArray<ModifierLike>;
        readonly isExportEquals?: boolean;
        readonly expression: Expression;
    }
    interface FileReference extends TextRange {
        fileName: string;
        resolutionMode?: ResolutionMode;
        preserve?: boolean;
    }
    interface CheckJsDirective extends TextRange {
        enabled: boolean;
    }
    type CommentKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia;
    interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: CommentKind;
    }
    interface SynthesizedComment extends CommentRange {
        text: string;
        pos: -1;
        end: -1;
        hasLeadingNewline?: boolean;
    }
    interface JSDocTypeExpression extends TypeNode {
        readonly kind: SyntaxKind.JSDocTypeExpression;
        readonly type: TypeNode;
    }
    interface JSDocNameReference extends Node {
        readonly kind: SyntaxKind.JSDocNameReference;
        readonly name: EntityName | JSDocMemberName;
    }
    /** Class#method reference in JSDoc */
    interface JSDocMemberName extends Node {
        readonly kind: SyntaxKind.JSDocMemberName;
        readonly left: EntityName | JSDocMemberName;
        readonly right: Identifier;
    }
    interface JSDocType extends TypeNode {
        _jsDocTypeBrand: any;
    }
    interface JSDocAllType extends JSDocType {
        readonly kind: SyntaxKind.JSDocAllType;
    }
    interface JSDocUnknownType extends JSDocType {
        readonly kind: SyntaxKind.JSDocUnknownType;
    }
    interface JSDocNonNullableType extends JSDocType {
        readonly kind: SyntaxKind.JSDocNonNullableType;
        readonly type: TypeNode;
        readonly postfix: boolean;
    }
    interface JSDocNullableType extends JSDocType {
        readonly kind: SyntaxKind.JSDocNullableType;
        readonly type: TypeNode;
        readonly postfix: boolean;
    }
    interface JSDocOptionalType extends JSDocType {
        readonly kind: SyntaxKind.JSDocOptionalType;
        readonly type: TypeNode;
    }
    interface JSDocFunctionType extends JSDocType, SignatureDeclarationBase, LocalsContainer {
        readonly kind: SyntaxKind.JSDocFunctionType;
    }
    interface JSDocVariadicType extends JSDocType {
        readonly kind: SyntaxKind.JSDocVariadicType;
        readonly type: TypeNode;
    }
    interface JSDocNamepathType extends JSDocType {
        readonly kind: SyntaxKind.JSDocNamepathType;
        readonly type: TypeNode;
    }
    type JSDocTypeReferencingNode = JSDocVariadicType | JSDocOptionalType | JSDocNullableType | JSDocNonNullableType;
    interface JSDoc extends Node {
        readonly kind: SyntaxKind.JSDoc;
        readonly parent: HasJSDoc;
        readonly tags?: NodeArray<JSDocTag>;
        readonly comment?: string | NodeArray<JSDocComment>;
    }
    interface JSDocTag extends Node {
        readonly parent: JSDoc | JSDocTypeLiteral;
        readonly tagName: Identifier;
        readonly comment?: string | NodeArray<JSDocComment>;
    }
    interface JSDocLink extends Node {
        readonly kind: SyntaxKind.JSDocLink;
        readonly name?: EntityName | JSDocMemberName;
        text: string;
    }
    interface JSDocLinkCode extends Node {
        readonly kind: SyntaxKind.JSDocLinkCode;
        readonly name?: EntityName | JSDocMemberName;
        text: string;
    }
    interface JSDocLinkPlain extends Node {
        readonly kind: SyntaxKind.JSDocLinkPlain;
        readonly name?: EntityName | JSDocMemberName;
        text: string;
    }
    type JSDocComment = JSDocText | JSDocLink | JSDocLinkCode | JSDocLinkPlain;
    interface JSDocText extends Node {
        readonly kind: SyntaxKind.JSDocText;
        text: string;
    }
    interface JSDocUnknownTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocTag;
    }
    /**
     * Note that `@extends` is a synonym of `@augments`.
     * Both tags are represented by this interface.
     */
    interface JSDocAugmentsTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocAugmentsTag;
        readonly class: ExpressionWithTypeArguments & {
            readonly expression: Identifier | PropertyAccessEntityNameExpression;
        };
    }
    interface JSDocImplementsTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocImplementsTag;
        readonly class: ExpressionWithTypeArguments & {
            readonly expression: Identifier | PropertyAccessEntityNameExpression;
        };
    }
    interface JSDocAuthorTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocAuthorTag;
    }
    interface JSDocDeprecatedTag extends JSDocTag {
        kind: SyntaxKind.JSDocDeprecatedTag;
    }
    interface JSDocClassTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocClassTag;
    }
    interface JSDocPublicTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocPublicTag;
    }
    interface JSDocPrivateTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocPrivateTag;
    }
    interface JSDocProtectedTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocProtectedTag;
    }
    interface JSDocReadonlyTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocReadonlyTag;
    }
    interface JSDocOverrideTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocOverrideTag;
    }
    interface JSDocEnumTag extends JSDocTag, Declaration, LocalsContainer {
        readonly kind: SyntaxKind.JSDocEnumTag;
        readonly parent: JSDoc;
        readonly typeExpression: JSDocTypeExpression;
    }
    interface JSDocThisTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocThisTag;
        readonly typeExpression: JSDocTypeExpression;
    }
    interface JSDocTemplateTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocTemplateTag;
        readonly constraint: JSDocTypeExpression | undefined;
        readonly typeParameters: NodeArray<TypeParameterDeclaration>;
    }
    interface JSDocSeeTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocSeeTag;
        readonly name?: JSDocNameReference;
    }
    interface JSDocReturnTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocReturnTag;
        readonly typeExpression?: JSDocTypeExpression;
    }
    interface JSDocTypeTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocTypeTag;
        readonly typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypedefTag extends JSDocTag, NamedDeclaration, LocalsContainer {
        readonly kind: SyntaxKind.JSDocTypedefTag;
        readonly parent: JSDoc;
        readonly fullName?: JSDocNamespaceDeclaration | Identifier;
        readonly name?: Identifier;
        readonly typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
    }
    interface JSDocCallbackTag extends JSDocTag, NamedDeclaration, LocalsContainer {
        readonly kind: SyntaxKind.JSDocCallbackTag;
        readonly parent: JSDoc;
        readonly fullName?: JSDocNamespaceDeclaration | Identifier;
        readonly name?: Identifier;
        readonly typeExpression: JSDocSignature;
    }
    interface JSDocOverloadTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocOverloadTag;
        readonly parent: JSDoc;
        readonly typeExpression: JSDocSignature;
    }
    interface JSDocThrowsTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocThrowsTag;
        readonly typeExpression?: JSDocTypeExpression;
    }
    interface JSDocSignature extends JSDocType, Declaration, JSDocContainer, LocalsContainer {
        readonly kind: SyntaxKind.JSDocSignature;
        readonly typeParameters?: readonly JSDocTemplateTag[];
        readonly parameters: readonly JSDocParameterTag[];
        readonly type: JSDocReturnTag | undefined;
    }
    interface JSDocPropertyLikeTag extends JSDocTag, Declaration {
        readonly parent: JSDoc;
        readonly name: EntityName;
        readonly typeExpression?: JSDocTypeExpression;
        /** Whether the property name came before the type -- non-standard for JSDoc, but Typescript-like */
        readonly isNameFirst: boolean;
        readonly isBracketed: boolean;
    }
    interface JSDocPropertyTag extends JSDocPropertyLikeTag {
        readonly kind: SyntaxKind.JSDocPropertyTag;
    }
    interface JSDocParameterTag extends JSDocPropertyLikeTag {
        readonly kind: SyntaxKind.JSDocParameterTag;
    }
    interface JSDocTypeLiteral extends JSDocType, Declaration {
        readonly kind: SyntaxKind.JSDocTypeLiteral;
        readonly jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
        /** If true, then this type literal represents an *array* of its type. */
        readonly isArrayType: boolean;
    }
    interface JSDocSatisfiesTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocSatisfiesTag;
        readonly typeExpression: JSDocTypeExpression;
    }
    interface JSDocImportTag extends JSDocTag {
        readonly kind: SyntaxKind.JSDocImportTag;
        readonly parent: JSDoc;
        readonly importClause?: ImportClause;
        readonly moduleSpecifier: Expression;
        readonly attributes?: ImportAttributes;
    }
    type FlowType = Type | IncompleteType;
    interface IncompleteType {
        flags: TypeFlags | 0;
        type: Type;
    }
    interface AmdDependency {
        path: string;
        name?: string;
    }
    /**
     * Subset of properties from SourceFile that are used in multiple utility functions
     */
    interface SourceFileLike {
        readonly text: string;
    }
    interface SourceFileLike {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }
    type ResolutionMode = ModuleKind.ESNext | ModuleKind.CommonJS | undefined;
    interface SourceFile extends Declaration, LocalsContainer {
        readonly kind: SyntaxKind.SourceFile;
        readonly statements: NodeArray<Statement>;
        readonly endOfFileToken: Token<SyntaxKind.EndOfFileToken>;
        fileName: string;
        text: string;
        amdDependencies: readonly AmdDependency[];
        moduleName?: string;
        referencedFiles: readonly FileReference[];
        typeReferenceDirectives: readonly FileReference[];
        libReferenceDirectives: readonly FileReference[];
        languageVariant: LanguageVariant;
        isDeclarationFile: boolean;
        /**
         * lib.d.ts should have a reference comment like
         *
         *  /// <reference no-default-lib="true"/>
         *
         * If any other file has this comment, it signals not to include lib.d.ts
         * because this containing file is intended to act as a default library.
         */
        hasNoDefaultLib: boolean;
        languageVersion: ScriptTarget;
        /**
         * When `module` is `Node16` or `NodeNext`, this field controls whether the
         * source file in question is an ESNext-output-format file, or a CommonJS-output-format
         * module. This is derived by the module resolver as it looks up the file, since
         * it is derived from either the file extension of the module, or the containing
         * `package.json` context, and affects both checking and emit.
         *
         * It is _public_ so that (pre)transformers can set this field,
         * since it switches the builtin `node` module transform. Generally speaking, if unset,
         * the field is treated as though it is `ModuleKind.CommonJS`.
         *
         * Note that this field is only set by the module resolution process when
         * `moduleResolution` is `Node16` or `NodeNext`, which is implied by the `module` setting
         * of `Node16` or `NodeNext`, respectively, but may be overriden (eg, by a `moduleResolution`
         * of `node`). If so, this field will be unset and source files will be considered to be
         * CommonJS-output-format by the node module transformer and type checker, regardless of extension or context.
         */
        impliedNodeFormat?: ResolutionMode;
    }
    interface SourceFile {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
        getLineEndOfPosition(pos: number): number;
        getLineStarts(): readonly number[];
        getPositionOfLineAndCharacter(line: number, character: number): number;
        update(newText: string, textChangeRange: TextChangeRange): SourceFile;
    }
    interface Bundle extends Node {
        readonly kind: SyntaxKind.Bundle;
        readonly sourceFiles: readonly SourceFile[];
    }
    interface JsonSourceFile extends SourceFile {
        readonly statements: NodeArray<JsonObjectExpressionStatement>;
    }
    interface TsConfigSourceFile extends JsonSourceFile {
        extendedSourceFiles?: string[];
    }
    interface JsonMinusNumericLiteral extends PrefixUnaryExpression {
        readonly kind: SyntaxKind.PrefixUnaryExpression;
        readonly operator: SyntaxKind.MinusToken;
        readonly operand: NumericLiteral;
    }
    type JsonObjectExpression = ObjectLiteralExpression | ArrayLiteralExpression | JsonMinusNumericLiteral | NumericLiteral | StringLiteral | BooleanLiteral | NullLiteral;
    interface JsonObjectExpressionStatement extends ExpressionStatement {
        readonly expression: JsonObjectExpression;
    }
    interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile | undefined;
        getSourceFileByPath(path: Path): SourceFile | undefined;
        getCurrentDirectory(): string;
    }
    interface ParseConfigHost extends ModuleResolutionHost {
        useCaseSensitiveFileNames: boolean;
        readDirectory(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): readonly string[];
        /**
         * Gets a value indicating whether the specified path exists and is a file.
         * @param path The path to test.
         */
        fileExists(path: string): boolean;
        readFile(path: string): string | undefined;
        trace?(s: string): void;
    }
    /**
     * Branded string for keeping track of when we've turned an ambiguous path
     * specified like "./blah" to an absolute path to an actual
     * tsconfig file, e.g. "/root/blah/tsconfig.json"
     */
    type ResolvedConfigFileName = string & {
        _isResolvedConfigFileName: never;
    };
    interface WriteFileCallbackData {
    }
    type WriteFileCallback = (fileName: string, text: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: readonly SourceFile[], data?: WriteFileCallbackData) => void;
    class OperationCanceledException {
    }
    interface CancellationToken {
        isCancellationRequested(): boolean;
        /** @throws OperationCanceledException if isCancellationRequested is true */
        throwIfCancellationRequested(): void;
    }
    interface Program extends ScriptReferenceHost {
        getCurrentDirectory(): string;
        /**
         * Get a list of root file names that were passed to a 'createProgram'
         */
        getRootFileNames(): readonly string[];
        /**
         * Get a list of files in the program
         */
        getSourceFiles(): readonly SourceFile[];
        /**
         * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
         * the JavaScript and declaration files will be produced for all the files in this program.
         * If targetSourceFile is specified, then only the JavaScript and declaration for that
         * specific file will be generated.
         *
         * If writeFile is not specified then the writeFile callback from the compiler host will be
         * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
         * will be invoked when writing the JavaScript and declaration files.
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        /** The first time this is called, it will return global diagnostics (no location). */
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        /**
         * Gets a type checker that can be used to semantically analyze source files in the program.
         */
        getTypeChecker(): TypeChecker;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        getInstantiationCount(): number;
        getRelationCacheSizes(): {
            assignable: number;
            identity: number;
            subtype: number;
            strictSubtype: number;
        };
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        isSourceFileDefaultLibrary(file: SourceFile): boolean;
        /**
         * Calculates the final resolution mode for a given module reference node. This function only returns a result when module resolution
         * settings allow differing resolution between ESM imports and CJS requires, or when a mode is explicitly provided via import attributes,
         * which cause an `import` or `require` condition to be used during resolution regardless of module resolution settings. In absence of
         * overriding attributes, and in modes that support differing resolution, the result indicates the syntax the usage would emit to JavaScript.
         * Some examples:
         *
         * ```ts
         * // tsc foo.mts --module nodenext
         * import {} from "mod";
         * // Result: ESNext - the import emits as ESM due to `impliedNodeFormat` set by .mts file extension
         *
         * // tsc foo.cts --module nodenext
         * import {} from "mod";
         * // Result: CommonJS - the import emits as CJS due to `impliedNodeFormat` set by .cts file extension
         *
         * // tsc foo.ts --module preserve --moduleResolution bundler
         * import {} from "mod";
         * // Result: ESNext - the import emits as ESM due to `--module preserve` and `--moduleResolution bundler`
         * // supports conditional imports/exports
         *
         * // tsc foo.ts --module preserve --moduleResolution node10
         * import {} from "mod";
         * // Result: undefined - the import emits as ESM due to `--module preserve`, but `--moduleResolution node10`
         * // does not support conditional imports/exports
         *
         * // tsc foo.ts --module commonjs --moduleResolution node10
         * import type {} from "mod" with { "resolution-mode": "import" };
         * // Result: ESNext - conditional imports/exports always supported with "resolution-mode" attribute
         * ```
         */
        getModeForUsageLocation(file: SourceFile, usage: StringLiteralLike): ResolutionMode;
        /**
         * Calculates the final resolution mode for an import at some index within a file's `imports` list. This function only returns a result
         * when module resolution settings allow differing resolution between ESM imports and CJS requires, or when a mode is explicitly provided
         * via import attributes, which cause an `import` or `require` condition to be used during resolution regardless of module resolution
         * settings. In absence of overriding attributes, and in modes that support differing resolution, the result indicates the syntax the
         * usage would emit to JavaScript. Some examples:
         *
         * ```ts
         * // tsc foo.mts --module nodenext
         * import {} from "mod";
         * // Result: ESNext - the import emits as ESM due to `impliedNodeFormat` set by .mts file extension
         *
         * // tsc foo.cts --module nodenext
         * import {} from "mod";
         * // Result: CommonJS - the import emits as CJS due to `impliedNodeFormat` set by .cts file extension
         *
         * // tsc foo.ts --module preserve --moduleResolution bundler
         * import {} from "mod";
         * // Result: ESNext - the import emits as ESM due to `--module preserve` and `--moduleResolution bundler`
         * // supports conditional imports/exports
         *
         * // tsc foo.ts --module preserve --moduleResolution node10
         * import {} from "mod";
         * // Result: undefined - the import emits as ESM due to `--module preserve`, but `--moduleResolution node10`
         * // does not support conditional imports/exports
         *
         * // tsc foo.ts --module commonjs --moduleResolution node10
         * import type {} from "mod" with { "resolution-mode": "import" };
         * // Result: ESNext - conditional imports/exports always supported with "resolution-mode" attribute
         * ```
         */
        getModeForResolutionAtIndex(file: SourceFile, index: number): ResolutionMode;
        getProjectReferences(): readonly ProjectReference[] | undefined;
        getResolvedProjectReferences(): readonly (ResolvedProjectReference | undefined)[] | undefined;
    }
    interface ResolvedProjectReference {
        commandLine: ParsedCommandLine;
        sourceFile: SourceFile;
        references?: readonly (ResolvedProjectReference | undefined)[];
    }
    type CustomTransformerFactory = (context: TransformationContext) => CustomTransformer;
    interface CustomTransformer {
        transformSourceFile(node: SourceFile): SourceFile;
        transformBundle(node: Bundle): Bundle;
    }
    interface CustomTransformers {
        /** Custom transformers to evaluate before built-in .js transformations. */
        before?: (TransformerFactory<SourceFile> | CustomTransformerFactory)[];
        /** Custom transformers to evaluate after built-in .js transformations. */
        after?: (TransformerFactory<SourceFile> | CustomTransformerFactory)[];
        /** Custom transformers to evaluate after built-in .d.ts transformations. */
        afterDeclarations?: (TransformerFactory<Bundle | SourceFile> | CustomTransformerFactory)[];
    }
    interface SourceMapSpan {
        /** Line number in the .js file. */
        emittedLine: number;
        /** Column number in the .js file. */
        emittedColumn: number;
        /** Line number in the .ts file. */
        sourceLine: number;
        /** Column number in the .ts file. */
        sourceColumn: number;
        /** Optional name (index into names array) associated with this span. */
        nameIndex?: number;
        /** .ts file (index into sources array) associated with this span */
        sourceIndex: number;
    }
    /** Return code used by getEmitOutput function to indicate status of the function */
    enum ExitStatus {
        Success = 0,
        DiagnosticsPresent_OutputsSkipped = 1,
        DiagnosticsPresent_OutputsGenerated = 2,
        InvalidProject_OutputsSkipped = 3,
        ProjectReferenceCycle_OutputsSkipped = 4,
    }
    interface EmitResult {
        emitSkipped: boolean;
        /** Contains declaration emit diagnostics */
        diagnostics: readonly Diagnostic[];
        emittedFiles?: string[];
    }
    interface TypeChecker {
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        getTypeOfSymbol(symbol: Symbol): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol | undefined;
        getPrivateIdentifierPropertyOfType(leftType: Type, name: string, location: Node): Symbol | undefined;
        getIndexInfoOfType(type: Type, kind: IndexKind): IndexInfo | undefined;
        getIndexInfosOfType(type: Type): readonly IndexInfo[];
        getIndexInfosOfIndexSymbol: (indexSymbol: Symbol, siblingSymbols?: Symbol[] | undefined) => IndexInfo[];
        getSignaturesOfType(type: Type, kind: SignatureKind): readonly Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type | undefined;
        getBaseTypes(type: InterfaceType): BaseType[];
        getBaseTypeOfLiteralType(type: Type): Type;
        getWidenedType(type: Type): Type;
        /**
         * Gets the "awaited type" of a type.
         *
         * If an expression has a Promise-like type, the "awaited type" of the expression is
         * derived from the type of the first argument of the fulfillment callback for that
         * Promise's `then` method. If the "awaited type" is itself a Promise-like, it is
         * recursively unwrapped in the same manner until a non-promise type is found.
         *
         * If an expression does not have a Promise-like type, its "awaited type" is the type
         * of the expression.
         *
         * If the resulting "awaited type" is a generic object type, then it is wrapped in
         * an `Awaited<T>`.
         *
         * In the event the "awaited type" circularly references itself, or is a non-Promise
         * object-type with a callable `then()` method, an "awaited type" cannot be determined
         * and the value `undefined` will be returned.
         *
         * This is used to reflect the runtime behavior of the `await` keyword.
         */
        getAwaitedType(type: Type): Type | undefined;
        getReturnTypeOfSignature(signature: Signature): Type;
        getNullableType(type: Type, flags: TypeFlags): Type;
        getNonNullableType(type: Type): Type;
        getTypeArguments(type: TypeReference): readonly Type[];
        /** Note that the resulting nodes cannot be checked. */
        typeToTypeNode(type: Type, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): TypeNode | undefined;
        /** Note that the resulting nodes cannot be checked. */
        signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined):
            | SignatureDeclaration & {
                typeArguments?: NodeArray<TypeNode>;
            }
            | undefined;
        /** Note that the resulting nodes cannot be checked. */
        indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): IndexSignatureDeclaration | undefined;
        /** Note that the resulting nodes cannot be checked. */
        symbolToEntityName(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): EntityName | undefined;
        /** Note that the resulting nodes cannot be checked. */
        symbolToExpression(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): Expression | undefined;
        /** Note that the resulting nodes cannot be checked. */
        symbolToTypeParameterDeclarations(symbol: Symbol, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): NodeArray<TypeParameterDeclaration> | undefined;
        /** Note that the resulting nodes cannot be checked. */
        symbolToParameterDeclaration(symbol: Symbol, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): ParameterDeclaration | undefined;
        /** Note that the resulting nodes cannot be checked. */
        typeParameterToDeclaration(parameter: TypeParameter, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): TypeParameterDeclaration | undefined;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolAtLocation(node: Node): Symbol | undefined;
        getSymbolsOfParameterPropertyDeclaration(parameter: ParameterDeclaration, parameterName: string): Symbol[];
        /**
         * The function returns the value (local variable) symbol of an identifier in the short-hand property assignment.
         * This is necessary as an identifier in short-hand property assignment can contains two meaning: property name and property value.
         */
        getShorthandAssignmentValueSymbol(location: Node | undefined): Symbol | undefined;
        getExportSpecifierLocalTargetSymbol(location: ExportSpecifier | Identifier): Symbol | undefined;
        /**
         * If a symbol is a local symbol with an associated exported symbol, returns the exported symbol.
         * Otherwise returns its input.
         * For example, at `export type T = number;`:
         *     - `getSymbolAtLocation` at the location `T` will return the exported symbol for `T`.
         *     - But the result of `getSymbolsInScope` will contain the *local* symbol for `T`, not the exported symbol.
         *     - Calling `getExportSymbolOfSymbol` on that local symbol will return the exported symbol.
         */
        getExportSymbolOfSymbol(symbol: Symbol): Symbol;
        getPropertySymbolOfDestructuringAssignment(location: Identifier): Symbol | undefined;
        getTypeOfAssignmentPattern(pattern: AssignmentPattern): Type;
        getTypeAtLocation(node: Node): Type;
        getTypeFromTypeNode(node: TypeNode): Type;
        signatureToString(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): string;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): string;
        typePredicateToString(predicate: TypePredicate, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): readonly Symbol[];
        getSymbolOfExpando(node: Node, allowDeclaration: boolean): Symbol | undefined;
        getContextualType(node: Expression): Type | undefined;
        /**
         * returns unknownSignature in the case of an error.
         * returns undefined if the node is not valid.
         * @param argumentCount Apparent number of arguments, passed in case of a possibly incomplete call. This should come from an ArgumentListInfo. See `signatureHelp.ts`.
         */
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature | undefined;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature | undefined;
        isImplementationOfOverload(node: SignatureDeclaration): boolean | undefined;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        isUnknownSymbol(symbol: Symbol): boolean;
        getMergedSymbol(symbol: Symbol): Symbol;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName | ImportTypeNode, propertyName: string): boolean;
        /** Follow all aliases to get the original symbol. */
        getAliasedSymbol(symbol: Symbol): Symbol;
        /** Follow a *single* alias to get the immediately aliased symbol. */
        getImmediateAliasedSymbol(symbol: Symbol): Symbol | undefined;
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
        getJsxIntrinsicTagNamesAt(location: Node): Symbol[];
        isOptionalParameter(node: ParameterDeclaration): boolean;
        getAmbientModules(): Symbol[];
        tryGetMemberInModuleExports(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
        getApparentType(type: Type): Type;
        getBaseConstraintOfType(type: Type): Type | undefined;
        getDefaultFromTypeParameter(type: Type): Type | undefined;
        /**
         * Gets the intrinsic `any` type. There are multiple types that act as `any` used internally in the compiler,
         * so the type returned by this function should not be used in equality checks to determine if another type
         * is `any`. Instead, use `type.flags & TypeFlags.Any`.
         */
        getAnyType(): Type;
        getStringType(): Type;
        getStringLiteralType(value: string): StringLiteralType;
        getNumberType(): Type;
        getNumberLiteralType(value: number): NumberLiteralType;
        getBigIntType(): Type;
        getBigIntLiteralType(value: PseudoBigInt): BigIntLiteralType;
        getBooleanType(): Type;
        getUnknownType(): Type;
        getFalseType(): Type;
        getTrueType(): Type;
        getVoidType(): Type;
        /**
         * Gets the intrinsic `undefined` type. There are multiple types that act as `undefined` used internally in the compiler
         * depending on compiler options, so the type returned by this function should not be used in equality checks to determine
         * if another type is `undefined`. Instead, use `type.flags & TypeFlags.Undefined`.
         */
        getUndefinedType(): Type;
        /**
         * Gets the intrinsic `null` type. There are multiple types that act as `null` used internally in the compiler,
         * so the type returned by this function should not be used in equality checks to determine if another type
         * is `null`. Instead, use `type.flags & TypeFlags.Null`.
         */
        getNullType(): Type;
        getESSymbolType(): Type;
        /**
         * Gets the intrinsic `never` type. There are multiple types that act as `never` used internally in the compiler,
         * so the type returned by this function should not be used in equality checks to determine if another type
         * is `never`. Instead, use `type.flags & TypeFlags.Never`.
         */
        getNeverType(): Type;
        /**
         * Gets the intrinsic `object` type.
         */
        getNonPrimitiveType(): Type;
        /**
         * Returns true if the "source" type is assignable to the "target" type.
         *
         * ```ts
         * declare const abcLiteral: ts.Type; // Type of "abc"
         * declare const stringType: ts.Type; // Type of string
         *
         * isTypeAssignableTo(abcLiteral, abcLiteral); // true; "abc" is assignable to "abc"
         * isTypeAssignableTo(abcLiteral, stringType); // true; "abc" is assignable to string
         * isTypeAssignableTo(stringType, abcLiteral); // false; string is not assignable to "abc"
         * isTypeAssignableTo(stringType, stringType); // true; string is assignable to string
         * ```
         */
        isTypeAssignableTo(source: Type, target: Type): boolean;
        /**
         * True if this type is the `Array` or `ReadonlyArray` type from lib.d.ts.
         * This function will _not_ return true if passed a type which
         * extends `Array` (for example, the TypeScript AST's `NodeArray` type).
         */
        isArrayType(type: Type): boolean;
        /**
         * True if this type is a tuple type. This function will _not_ return true if
         * passed a type which extends from a tuple.
         */
        isTupleType(type: Type): boolean;
        /**
         * True if this type is assignable to `ReadonlyArray<any>`.
         */
        isArrayLikeType(type: Type): boolean;
        resolveName(name: string, location: Node | undefined, meaning: SymbolFlags, excludeGlobals: boolean): Symbol | undefined;
        getTypePredicateOfSignature(signature: Signature): TypePredicate | undefined;
        /**
         * Depending on the operation performed, it may be appropriate to throw away the checker
         * if the cancellation token is triggered. Typically, if it is used for error checking
         * and the operation is cancelled, then it should be discarded, otherwise it is safe to keep.
         */
        runWithCancellationToken<T>(token: CancellationToken, cb: (checker: TypeChecker) => T): T;
        getTypeArgumentsForResolvedSignature(signature: Signature): readonly Type[] | undefined;
    }
    enum NodeBuilderFlags {
        None = 0,
        NoTruncation = 1,
        WriteArrayAsGenericType = 2,
        GenerateNamesForShadowedTypeParams = 4,
        UseStructuralFallback = 8,
        ForbidIndexedAccessSymbolReferences = 16,
        WriteTypeArgumentsOfSignature = 32,
        UseFullyQualifiedType = 64,
        UseOnlyExternalAliasing = 128,
        SuppressAnyReturnType = 256,
        WriteTypeParametersInQualifiedName = 512,
        MultilineObjectLiterals = 1024,
        WriteClassExpressionAsTypeLiteral = 2048,
        UseTypeOfFunction = 4096,
        OmitParameterModifiers = 8192,
        UseAliasDefinedOutsideCurrentScope = 16384,
        UseSingleQuotesForStringLiteralType = 268435456,
        NoTypeReduction = 536870912,
        OmitThisParameter = 33554432,
        AllowThisInObjectLiteral = 32768,
        AllowQualifiedNameInPlaceOfIdentifier = 65536,
        AllowAnonymousIdentifier = 131072,
        AllowEmptyUnionOrIntersection = 262144,
        AllowEmptyTuple = 524288,
        AllowUniqueESSymbolType = 1048576,
        AllowEmptyIndexInfoType = 2097152,
        AllowNodeModulesRelativePaths = 67108864,
        IgnoreErrors = 70221824,
        InObjectTypeLiteral = 4194304,
        InTypeAlias = 8388608,
        InInitialEntityName = 16777216,
    }
    enum TypeFormatFlags {
        None = 0,
        NoTruncation = 1,
        WriteArrayAsGenericType = 2,
        GenerateNamesForShadowedTypeParams = 4,
        UseStructuralFallback = 8,
        WriteTypeArgumentsOfSignature = 32,
        UseFullyQualifiedType = 64,
        SuppressAnyReturnType = 256,
        MultilineObjectLiterals = 1024,
        WriteClassExpressionAsTypeLiteral = 2048,
        UseTypeOfFunction = 4096,
        OmitParameterModifiers = 8192,
        UseAliasDefinedOutsideCurrentScope = 16384,
        UseSingleQuotesForStringLiteralType = 268435456,
        NoTypeReduction = 536870912,
        OmitThisParameter = 33554432,
        AllowUniqueESSymbolType = 1048576,
        AddUndefined = 131072,
        WriteArrowStyleSignature = 262144,
        InArrayType = 524288,
        InElementType = 2097152,
        InFirstTypeArgument = 4194304,
        InTypeAlias = 8388608,
        NodeBuilderFlagsMask = 848330095,
    }
    enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
        AllowAnyNodeKind = 4,
        UseAliasDefinedOutsideCurrentScope = 8,
    }
    enum TypePredicateKind {
        This = 0,
        Identifier = 1,
        AssertsThis = 2,
        AssertsIdentifier = 3,
    }
    interface TypePredicateBase {
        kind: TypePredicateKind;
        type: Type | undefined;
    }
    interface ThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.This;
        parameterName: undefined;
        parameterIndex: undefined;
        type: Type;
    }
    interface IdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.Identifier;
        parameterName: string;
        parameterIndex: number;
        type: Type;
    }
    interface AssertsThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.AssertsThis;
        parameterName: undefined;
        parameterIndex: undefined;
        type: Type | undefined;
    }
    interface AssertsIdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.AssertsIdentifier;
        parameterName: string;
        parameterIndex: number;
        type: Type | undefined;
    }
    type TypePredicate = ThisTypePredicate | IdentifierTypePredicate | AssertsThisTypePredicate | AssertsIdentifierTypePredicate;
    enum SymbolFlags {
        None = 0,
        FunctionScopedVariable = 1,
        BlockScopedVariable = 2,
        Property = 4,
        EnumMember = 8,
        Function = 16,
        Class = 32,
        Interface = 64,
        ConstEnum = 128,
        RegularEnum = 256,
        ValueModule = 512,
        NamespaceModule = 1024,
        TypeLiteral = 2048,
        ObjectLiteral = 4096,
        Method = 8192,
        Constructor = 16384,
        GetAccessor = 32768,
        SetAccessor = 65536,
        Signature = 131072,
        TypeParameter = 262144,
        TypeAlias = 524288,
        ExportValue = 1048576,
        Alias = 2097152,
        Prototype = 4194304,
        ExportStar = 8388608,
        Optional = 16777216,
        Transient = 33554432,
        Assignment = 67108864,
        ModuleExports = 134217728,
        All = -1,
        Enum = 384,
        Variable = 3,
        Value = 111551,
        Type = 788968,
        Namespace = 1920,
        Module = 1536,
        Accessor = 98304,
        FunctionScopedVariableExcludes = 111550,
        BlockScopedVariableExcludes = 111551,
        ParameterExcludes = 111551,
        PropertyExcludes = 0,
        EnumMemberExcludes = 900095,
        FunctionExcludes = 110991,
        ClassExcludes = 899503,
        InterfaceExcludes = 788872,
        RegularEnumExcludes = 899327,
        ConstEnumExcludes = 899967,
        ValueModuleExcludes = 110735,
        NamespaceModuleExcludes = 0,
        MethodExcludes = 103359,
        GetAccessorExcludes = 46015,
        SetAccessorExcludes = 78783,
        AccessorExcludes = 13247,
        TypeParameterExcludes = 526824,
        TypeAliasExcludes = 788968,
        AliasExcludes = 2097152,
        ModuleMember = 2623475,
        ExportHasLocal = 944,
        BlockScoped = 418,
        PropertyOrAccessor = 98308,
        ClassMember = 106500,
    }
    interface Symbol {
        flags: SymbolFlags;
        escapedName: __String;
        declarations?: Declaration[];
        valueDeclaration?: Declaration;
        members?: SymbolTable;
        exports?: SymbolTable;
        globalExports?: SymbolTable;
    }
    interface Symbol {
        readonly name: string;
        getFlags(): SymbolFlags;
        getEscapedName(): __String;
        getName(): string;
        getDeclarations(): Declaration[] | undefined;
        getDocumentationComment(typeChecker: TypeChecker | undefined): SymbolDisplayPart[];
        getJsDocTags(checker?: TypeChecker): JSDocTagInfo[];
    }
    enum InternalSymbolName {
        Call = "__call",
        Constructor = "__constructor",
        New = "__new",
        Index = "__index",
        ExportStar = "__export",
        Global = "__global",
        Missing = "__missing",
        Type = "__type",
        Object = "__object",
        JSXAttributes = "__jsxAttributes",
        Class = "__class",
        Function = "__function",
        Computed = "__computed",
        Resolving = "__resolving__",
        ExportEquals = "export=",
        Default = "default",
        This = "this",
        InstantiationExpression = "__instantiationExpression",
        ImportAttributes = "__importAttributes",
    }
    /**
     * This represents a string whose leading underscore have been escaped by adding extra leading underscores.
     * The shape of this brand is rather unique compared to others we've used.
     * Instead of just an intersection of a string and an object, it is that union-ed
     * with an intersection of void and an object. This makes it wholly incompatible
     * with a normal string (which is good, it cannot be misused on assignment or on usage),
     * while still being comparable with a normal string via === (also good) and castable from a string.
     */
    type __String =
        | (string & {
            __escapedIdentifier: void;
        })
        | (void & {
            __escapedIdentifier: void;
        })
        | InternalSymbolName;
    /** @deprecated Use ReadonlyMap<__String, T> instead. */
    type ReadonlyUnderscoreEscapedMap<T> = ReadonlyMap<__String, T>;
    /** @deprecated Use Map<__String, T> instead. */
    type UnderscoreEscapedMap<T> = Map<__String, T>;
    /** SymbolTable based on ES6 Map interface. */
    type SymbolTable = Map<__String, Symbol>;
    enum TypeFlags {
        Any = 1,
        Unknown = 2,
        String = 4,
        Number = 8,
        Boolean = 16,
        Enum = 32,
        BigInt = 64,
        StringLiteral = 128,
        NumberLiteral = 256,
        BooleanLiteral = 512,
        EnumLiteral = 1024,
        BigIntLiteral = 2048,
        ESSymbol = 4096,
        UniqueESSymbol = 8192,
        Void = 16384,
        Undefined = 32768,
        Null = 65536,
        Never = 131072,
        TypeParameter = 262144,
        Object = 524288,
        Union = 1048576,
        Intersection = 2097152,
        Index = 4194304,
        IndexedAccess = 8388608,
        Conditional = 16777216,
        Substitution = 33554432,
        NonPrimitive = 67108864,
        TemplateLiteral = 134217728,
        StringMapping = 268435456,
        Literal = 2944,
        Unit = 109472,
        Freshable = 2976,
        StringOrNumberLiteral = 384,
        PossiblyFalsy = 117724,
        StringLike = 402653316,
        NumberLike = 296,
        BigIntLike = 2112,
        BooleanLike = 528,
        EnumLike = 1056,
        ESSymbolLike = 12288,
        VoidLike = 49152,
        UnionOrIntersection = 3145728,
        StructuredType = 3670016,
        TypeVariable = 8650752,
        InstantiableNonPrimitive = 58982400,
        InstantiablePrimitive = 406847488,
        Instantiable = 465829888,
        StructuredOrInstantiable = 469499904,
        Narrowable = 536624127,
    }
    type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;
    interface Type {
        flags: TypeFlags;
        symbol: Symbol;
        pattern?: DestructuringPattern;
        aliasSymbol?: Symbol;
        aliasTypeArguments?: readonly Type[];
    }
    interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol | undefined;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol | undefined;
        getApparentProperties(): Symbol[];
        getCallSignatures(): readonly Signature[];
        getConstructSignatures(): readonly Signature[];
        getStringIndexType(): Type | undefined;
        getNumberIndexType(): Type | undefined;
        getBaseTypes(): BaseType[] | undefined;
        getNonNullableType(): Type;
        getConstraint(): Type | undefined;
        getDefault(): Type | undefined;
        isUnion(): this is UnionType;
        isIntersection(): this is IntersectionType;
        isUnionOrIntersection(): this is UnionOrIntersectionType;
        isLiteral(): this is LiteralType;
        isStringLiteral(): this is StringLiteralType;
        isNumberLiteral(): this is NumberLiteralType;
        isTypeParameter(): this is TypeParameter;
        isClassOrInterface(): this is InterfaceType;
        isClass(): this is InterfaceType;
        isIndexType(): this is IndexType;
    }
    interface FreshableType extends Type {
        freshType: FreshableType;
        regularType: FreshableType;
    }
    interface LiteralType extends FreshableType {
        value: string | number | PseudoBigInt;
    }
    interface UniqueESSymbolType extends Type {
        symbol: Symbol;
        escapedName: __String;
    }
    interface StringLiteralType extends LiteralType {
        value: string;
    }
    interface NumberLiteralType extends LiteralType {
        value: number;
    }
    interface BigIntLiteralType extends LiteralType {
        value: PseudoBigInt;
    }
    interface EnumType extends FreshableType {
    }
    enum ObjectFlags {
        None = 0,
        Class = 1,
        Interface = 2,
        Reference = 4,
        Tuple = 8,
        Anonymous = 16,
        Mapped = 32,
        Instantiated = 64,
        ObjectLiteral = 128,
        EvolvingArray = 256,
        ObjectLiteralPatternWithComputedProperties = 512,
        ReverseMapped = 1024,
        JsxAttributes = 2048,
        JSLiteral = 4096,
        FreshLiteral = 8192,
        ArrayLiteral = 16384,
        SingleSignatureType = 134217728,
        ClassOrInterface = 3,
        ContainsSpread = 2097152,
        ObjectRestType = 4194304,
        InstantiationExpressionType = 8388608,
    }
    interface ObjectType extends Type {
        objectFlags: ObjectFlags;
    }
    /** Class and interface types (ObjectFlags.Class and ObjectFlags.Interface). */
    interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[] | undefined;
        outerTypeParameters: TypeParameter[] | undefined;
        localTypeParameters: TypeParameter[] | undefined;
        thisType: TypeParameter | undefined;
    }
    type BaseType = ObjectType | IntersectionType | TypeVariable;
    interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredIndexInfos: IndexInfo[];
    }
    /**
     * Type references (ObjectFlags.Reference). When a class or interface has type parameters or
     * a "this" type, references to the class or interface are made using type references. The
     * typeArguments property specifies the types to substitute for the type parameters of the
     * class or interface and optionally includes an extra element that specifies the type to
     * substitute for "this" in the resulting instantiation. When no extra argument is present,
     * the type reference itself is substituted for "this". The typeArguments property is undefined
     * if the class or interface has no type parameters and the reference isn't specifying an
     * explicit "this" argument.
     */
    interface TypeReference extends ObjectType {
        target: GenericType;
        node?: TypeReferenceNode | ArrayTypeNode | TupleTypeNode;
    }
    interface TypeReference {
        typeArguments?: readonly Type[];
    }
    interface DeferredTypeReference extends TypeReference {
    }
    interface GenericType extends InterfaceType, TypeReference {
    }
    enum ElementFlags {
        Required = 1,
        Optional = 2,
        Rest = 4,
        Variadic = 8,
        Fixed = 3,
        Variable = 12,
        NonRequired = 14,
        NonRest = 11,
    }
    interface TupleType extends GenericType {
        elementFlags: readonly ElementFlags[];
        /** Number of required or variadic elements */
        minLength: number;
        /** Number of initial required or optional elements */
        fixedLength: number;
        /**
         * True if tuple has any rest or variadic elements
         *
         * @deprecated Use `.combinedFlags & ElementFlags.Variable` instead
         */
        hasRestElement: boolean;
        combinedFlags: ElementFlags;
        readonly: boolean;
        labeledElementDeclarations?: readonly (NamedTupleMember | ParameterDeclaration | undefined)[];
    }
    interface TupleTypeReference extends TypeReference {
        target: TupleType;
    }
    interface UnionOrIntersectionType extends Type {
        types: Type[];
    }
    interface UnionType extends UnionOrIntersectionType {
    }
    interface IntersectionType extends UnionOrIntersectionType {
    }
    type StructuredType = ObjectType | UnionType | IntersectionType;
    interface EvolvingArrayType extends ObjectType {
        elementType: Type;
        finalArrayType?: Type;
    }
    interface InstantiableType extends Type {
    }
    interface TypeParameter extends InstantiableType {
    }
    interface IndexedAccessType extends InstantiableType {
        objectType: Type;
        indexType: Type;
        constraint?: Type;
        simplifiedForReading?: Type;
        simplifiedForWriting?: Type;
    }
    type TypeVariable = TypeParameter | IndexedAccessType;
    interface IndexType extends InstantiableType {
        type: InstantiableType | UnionOrIntersectionType;
    }
    interface ConditionalRoot {
        node: ConditionalTypeNode;
        checkType: Type;
        extendsType: Type;
        isDistributive: boolean;
        inferTypeParameters?: TypeParameter[];
        outerTypeParameters?: TypeParameter[];
        instantiations?: Map<string, Type>;
        aliasSymbol?: Symbol;
        aliasTypeArguments?: Type[];
    }
    interface ConditionalType extends InstantiableType {
        root: ConditionalRoot;
        checkType: Type;
        extendsType: Type;
        resolvedTrueType?: Type;
        resolvedFalseType?: Type;
    }
    interface TemplateLiteralType extends InstantiableType {
        texts: readonly string[];
        types: readonly Type[];
    }
    interface StringMappingType extends InstantiableType {
        symbol: Symbol;
        type: Type;
    }
    interface SubstitutionType extends InstantiableType {
        objectFlags: ObjectFlags;
        baseType: Type;
        constraint: Type;
    }
    enum SignatureKind {
        Call = 0,
        Construct = 1,
    }
    interface Signature {
        declaration?: SignatureDeclaration | JSDocSignature;
        typeParameters?: readonly TypeParameter[];
        parameters: readonly Symbol[];
        thisParameter?: Symbol;
    }
    interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): TypeParameter[] | undefined;
        getParameters(): Symbol[];
        getTypeParameterAtPosition(pos: number): Type;
        getReturnType(): Type;
        getDocumentationComment(typeChecker: TypeChecker | undefined): SymbolDisplayPart[];
        getJsDocTags(): JSDocTagInfo[];
    }
    enum IndexKind {
        String = 0,
        Number = 1,
    }
    type ElementWithComputedPropertyName = (ClassElement | ObjectLiteralElement) & {
        name: ComputedPropertyName;
    };
    interface IndexInfo {
        keyType: Type;
        type: Type;
        isReadonly: boolean;
        declaration?: IndexSignatureDeclaration;
        components?: ElementWithComputedPropertyName[];
    }
    enum InferencePriority {
        None = 0,
        NakedTypeVariable = 1,
        SpeculativeTuple = 2,
        SubstituteSource = 4,
        HomomorphicMappedType = 8,
        PartialHomomorphicMappedType = 16,
        MappedTypeConstraint = 32,
        ContravariantConditional = 64,
        ReturnType = 128,
        LiteralKeyof = 256,
        NoConstraints = 512,
        AlwaysStrict = 1024,
        MaxValue = 2048,
        PriorityImpliesCombination = 416,
        Circularity = -1,
    }
    interface FileExtensionInfo {
        extension: string;
        isMixedContent: boolean;
        scriptKind?: ScriptKind;
    }
    interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
        message: string;
        reportsUnnecessary?: {};
        reportsDeprecated?: {};
    }
    /**
     * A linked list of formatted diagnostic messages to be used as part of a multiline message.
     * It is built from the bottom up, leaving the head to be the "main" diagnostic.
     * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
     * the difference is that messages are all preformatted in DMC.
     */
    interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
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
        category: DiagnosticCategory;
        code: number;
        file: SourceFile | undefined;
        start: number | undefined;
        length: number | undefined;
        messageText: string | DiagnosticMessageChain;
    }
    interface DiagnosticWithLocation extends Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
    }
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Suggestion = 2,
        Message = 3,
    }
    enum ModuleResolutionKind {
        Classic = 1,
        /**
         * @deprecated
         * `NodeJs` was renamed to `Node10` to better reflect the version of Node that it targets.
         * Use the new name or consider switching to a modern module resolution target.
         */
        NodeJs = 2,
        Node10 = 2,
        Node16 = 3,
        NodeNext = 99,
        Bundler = 100,
    }
    enum ModuleDetectionKind {
        /**
         * Files with imports, exports and/or import.meta are considered modules
         */
        Legacy = 1,
        /**
         * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
         */
        Auto = 2,
        /**
         * Consider all non-declaration files modules, regardless of present syntax
         */
        Force = 3,
    }
    interface PluginImport {
        name: string;
    }
    interface ProjectReference {
        /** A normalized path on disk */
        path: string;
        /** The path as the user originally wrote it */
        originalPath?: string;
        /** @deprecated */
        prepend?: boolean;
        /** True if it is intended that this reference form a circularity */
        circular?: boolean;
    }
    enum WatchFileKind {
        FixedPollingInterval = 0,
        PriorityPollingInterval = 1,
        DynamicPriorityPolling = 2,
        FixedChunkSizePolling = 3,
        UseFsEvents = 4,
        UseFsEventsOnParentDirectory = 5,
    }
    enum WatchDirectoryKind {
        UseFsEvents = 0,
        FixedPollingInterval = 1,
        DynamicPriorityPolling = 2,
        FixedChunkSizePolling = 3,
    }
    enum PollingWatchKind {
        FixedInterval = 0,
        PriorityInterval = 1,
        DynamicPriority = 2,
        FixedChunkSize = 3,
    }
    type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[] | ProjectReference[] | null | undefined;
    interface CompilerOptions {
        allowImportingTsExtensions?: boolean;
        allowJs?: boolean;
        allowArbitraryExtensions?: boolean;
        allowSyntheticDefaultImports?: boolean;
        allowUmdGlobalAccess?: boolean;
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;
        baseUrl?: string;
        /** @deprecated */
        charset?: string;
        checkJs?: boolean;
        customConditions?: string[];
        declaration?: boolean;
        declarationMap?: boolean;
        emitDeclarationOnly?: boolean;
        declarationDir?: string;
        disableSizeLimit?: boolean;
        disableSourceOfProjectReferenceRedirect?: boolean;
        disableSolutionSearching?: boolean;
        disableReferencedProjectLoad?: boolean;
        downlevelIteration?: boolean;
        emitBOM?: boolean;
        emitDecoratorMetadata?: boolean;
        exactOptionalPropertyTypes?: boolean;
        experimentalDecorators?: boolean;
        forceConsistentCasingInFileNames?: boolean;
        ignoreDeprecations?: string;
        importHelpers?: boolean;
        /** @deprecated */
        importsNotUsedAsValues?: ImportsNotUsedAsValues;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        isolatedModules?: boolean;
        isolatedDeclarations?: boolean;
        jsx?: JsxEmit;
        /** @deprecated */
        keyofStringsOnly?: boolean;
        lib?: string[];
        libReplacement?: boolean;
        locale?: string;
        mapRoot?: string;
        maxNodeModuleJsDepth?: number;
        module?: ModuleKind;
        moduleResolution?: ModuleResolutionKind;
        moduleSuffixes?: string[];
        moduleDetection?: ModuleDetectionKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        noCheck?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean;
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;
        /** @deprecated */
        noStrictGenericChecks?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        /** @deprecated */
        noImplicitUseStrict?: boolean;
        noPropertyAccessFromIndexSignature?: boolean;
        assumeChangesOnlyAffectDirectDependencies?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        noUncheckedIndexedAccess?: boolean;
        /** @deprecated */
        out?: string;
        outDir?: string;
        outFile?: string;
        paths?: MapLike<string[]>;
        preserveConstEnums?: boolean;
        noImplicitOverride?: boolean;
        preserveSymlinks?: boolean;
        /** @deprecated */
        preserveValueImports?: boolean;
        project?: string;
        reactNamespace?: string;
        jsxFactory?: string;
        jsxFragmentFactory?: string;
        jsxImportSource?: string;
        composite?: boolean;
        incremental?: boolean;
        tsBuildInfoFile?: string;
        removeComments?: boolean;
        resolvePackageJsonExports?: boolean;
        resolvePackageJsonImports?: boolean;
        rewriteRelativeImportExtensions?: boolean;
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
        strictBuiltinIteratorReturn?: boolean;
        stripInternal?: boolean;
        /** @deprecated */
        suppressExcessPropertyErrors?: boolean;
        /** @deprecated */
        suppressImplicitAnyIndexErrors?: boolean;
        target?: ScriptTarget;
        traceResolution?: boolean;
        useUnknownInCatchVariables?: boolean;
        noUncheckedSideEffectImports?: boolean;
        resolveJsonModule?: boolean;
        types?: string[];
        /** Paths used to compute primary types search locations */
        typeRoots?: string[];
        verbatimModuleSyntax?: boolean;
        erasableSyntaxOnly?: boolean;
        esModuleInterop?: boolean;
        useDefineForClassFields?: boolean;
        [option: string]: CompilerOptionsValue | TsConfigSourceFile | undefined;
    }
    interface WatchOptions {
        watchFile?: WatchFileKind;
        watchDirectory?: WatchDirectoryKind;
        fallbackPolling?: PollingWatchKind;
        synchronousWatchDirectory?: boolean;
        excludeDirectories?: string[];
        excludeFiles?: string[];
        [option: string]: CompilerOptionsValue | undefined;
    }
    interface TypeAcquisition {
        enable?: boolean;
        include?: string[];
        exclude?: string[];
        disableFilenameBasedTypeAcquisition?: boolean;
        [option: string]: CompilerOptionsValue | undefined;
    }
    enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
        ES2015 = 5,
        ES2020 = 6,
        ES2022 = 7,
        ESNext = 99,
        Node16 = 100,
        Node18 = 101,
        Node20 = 102,
        NodeNext = 199,
        Preserve = 200,
    }
    enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
        ReactNative = 3,
        ReactJSX = 4,
        ReactJSXDev = 5,
    }
    /** @deprecated */
    enum ImportsNotUsedAsValues {
        Remove = 0,
        Preserve = 1,
        Error = 2,
    }
    enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1,
    }
    interface LineAndCharacter {
        /** 0-based. */
        line: number;
        character: number;
    }
    enum ScriptKind {
        Unknown = 0,
        JS = 1,
        JSX = 2,
        TS = 3,
        TSX = 4,
        External = 5,
        JSON = 6,
        /**
         * Used on extensions that doesn't define the ScriptKind but the content defines it.
         * Deferred extensions are going to be included in all project contexts.
         */
        Deferred = 7,
    }
    enum ScriptTarget {
        /** @deprecated */
        ES3 = 0,
        ES5 = 1,
        ES2015 = 2,
        ES2016 = 3,
        ES2017 = 4,
        ES2018 = 5,
        ES2019 = 6,
        ES2020 = 7,
        ES2021 = 8,
        ES2022 = 9,
        ES2023 = 10,
        ES2024 = 11,
        ESNext = 99,
        JSON = 100,
        Latest = 99,
    }
    enum LanguageVariant {
        Standard = 0,
        JSX = 1,
    }
    /** Either a parsed command line or a parsed tsconfig.json */
    interface ParsedCommandLine {
        options: CompilerOptions;
        typeAcquisition?: TypeAcquisition;
        fileNames: string[];
        projectReferences?: readonly ProjectReference[];
        watchOptions?: WatchOptions;
        raw?: any;
        errors: Diagnostic[];
        wildcardDirectories?: MapLike<WatchDirectoryFlags>;
        compileOnSave?: boolean;
    }
    enum WatchDirectoryFlags {
        None = 0,
        Recursive = 1,
    }
    interface CreateProgramOptions {
        rootNames: readonly string[];
        options: CompilerOptions;
        projectReferences?: readonly ProjectReference[];
        host?: CompilerHost;
        oldProgram?: Program;
        configFileParsingDiagnostics?: readonly Diagnostic[];
    }
    interface ModuleResolutionHost {
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
        trace?(s: string): void;
        directoryExists?(directoryName: string): boolean;
        /**
         * Resolve a symbolic link.
         * @see https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options
         */
        realpath?(path: string): string;
        getCurrentDirectory?(): string;
        getDirectories?(path: string): string[];
        useCaseSensitiveFileNames?: boolean | (() => boolean) | undefined;
    }
    /**
     * Used by services to specify the minimum host area required to set up source files under any compilation settings
     */
    interface MinimalResolutionCacheHost extends ModuleResolutionHost {
        getCompilationSettings(): CompilerOptions;
        getCompilerHost?(): CompilerHost | undefined;
    }
    /**
     * Represents the result of module resolution.
     * Module resolution will pick up tsx/jsx/js files even if '--jsx' and '--allowJs' are turned off.
     * The Program will then filter results based on these flags.
     *
     * Prefer to return a `ResolvedModuleFull` so that the file type does not have to be inferred.
     */
    interface ResolvedModule {
        /** Path of the file the module was resolved to. */
        resolvedFileName: string;
        /** True if `resolvedFileName` comes from `node_modules`. */
        isExternalLibraryImport?: boolean;
        /**
         * True if the original module reference used a .ts extension to refer directly to a .ts file,
         * which should produce an error during checking if emit is enabled.
         */
        resolvedUsingTsExtension?: boolean;
    }
    /**
     * ResolvedModule with an explicitly provided `extension` property.
     * Prefer this over `ResolvedModule`.
     * If changing this, remember to change `moduleResolutionIsEqualTo`.
     */
    interface ResolvedModuleFull extends ResolvedModule {
        /**
         * Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
         * This is optional for backwards-compatibility, but will be added if not provided.
         */
        extension: string;
        packageId?: PackageId;
    }
    /**
     * Unique identifier with a package name and version.
     * If changing this, remember to change `packageIdIsEqual`.
     */
    interface PackageId {
        /**
         * Name of the package.
         * Should not include `@types`.
         * If accessing a non-index file, this should include its name e.g. "foo/bar".
         */
        name: string;
        /**
         * Name of a submodule within this package.
         * May be "".
         */
        subModuleName: string;
        /** Version of the package, e.g. "1.2.3" */
        version: string;
    }
    enum Extension {
        Ts = ".ts",
        Tsx = ".tsx",
        Dts = ".d.ts",
        Js = ".js",
        Jsx = ".jsx",
        Json = ".json",
        TsBuildInfo = ".tsbuildinfo",
        Mjs = ".mjs",
        Mts = ".mts",
        Dmts = ".d.mts",
        Cjs = ".cjs",
        Cts = ".cts",
        Dcts = ".d.cts",
    }
    interface ResolvedModuleWithFailedLookupLocations {
        readonly resolvedModule: ResolvedModuleFull | undefined;
    }
    interface ResolvedTypeReferenceDirective {
        primary: boolean;
        resolvedFileName: string | undefined;
        packageId?: PackageId;
        /** True if `resolvedFileName` comes from `node_modules`. */
        isExternalLibraryImport?: boolean;
    }
    interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
        readonly resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective | undefined;
    }
    interface CompilerHost extends ModuleResolutionHost {
        getSourceFile(fileName: string, languageVersionOrOptions: ScriptTarget | CreateSourceFileOptions, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
        getSourceFileByPath?(fileName: string, path: Path, languageVersionOrOptions: ScriptTarget | CreateSourceFileOptions, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
        getCancellationToken?(): CancellationToken;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        readDirectory?(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): string[];
        /** @deprecated supply resolveModuleNameLiterals instead for resolution that can handle newer resolution modes like nodenext */
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile?: SourceFile): (ResolvedModule | undefined)[];
        /**
         * Returns the module resolution cache used by a provided `resolveModuleNames` implementation so that any non-name module resolution operations (eg, package.json lookup) can reuse it
         */
        getModuleResolutionCache?(): ModuleResolutionCache | undefined;
        /**
         * @deprecated supply resolveTypeReferenceDirectiveReferences instead for resolution that can handle newer resolution modes like nodenext
         *
         * This method is a companion for 'resolveModuleNames' and is used to resolve 'types' references to actual type declaration files
         */
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[] | readonly FileReference[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingFileMode?: ResolutionMode): (ResolvedTypeReferenceDirective | undefined)[];
        resolveModuleNameLiterals?(moduleLiterals: readonly StringLiteralLike[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile, reusedNames: readonly StringLiteralLike[] | undefined): readonly ResolvedModuleWithFailedLookupLocations[];
        resolveTypeReferenceDirectiveReferences?<T extends FileReference | string>(typeDirectiveReferences: readonly T[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile | undefined, reusedNames: readonly T[] | undefined): readonly ResolvedTypeReferenceDirectiveWithFailedLookupLocations[];
        getEnvironmentVariable?(name: string): string | undefined;
        /** If provided along with custom resolveModuleNames or resolveTypeReferenceDirectives, used to determine if unchanged file path needs to re-resolve modules/type reference directives */
        hasInvalidatedResolutions?(filePath: Path): boolean;
        createHash?(data: string): string;
        getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
        jsDocParsingMode?: JSDocParsingMode;
    }
    interface SourceMapRange extends TextRange {
        source?: SourceMapSource;
    }
    interface SourceMapSource {
        fileName: string;
        text: string;
        skipTrivia?: (pos: number) => number;
    }
    interface SourceMapSource {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }
    enum EmitFlags {
        None = 0,
        SingleLine = 1,
        MultiLine = 2,
        AdviseOnEmitNode = 4,
        NoSubstitution = 8,
        CapturesThis = 16,
        NoLeadingSourceMap = 32,
        NoTrailingSourceMap = 64,
        NoSourceMap = 96,
        NoNestedSourceMaps = 128,
        NoTokenLeadingSourceMaps = 256,
        NoTokenTrailingSourceMaps = 512,
        NoTokenSourceMaps = 768,
        NoLeadingComments = 1024,
        NoTrailingComments = 2048,
        NoComments = 3072,
        NoNestedComments = 4096,
        HelperName = 8192,
        ExportName = 16384,
        LocalName = 32768,
        InternalName = 65536,
        Indented = 131072,
        NoIndentation = 262144,
        AsyncFunctionBody = 524288,
        ReuseTempVariableScope = 1048576,
        CustomPrologue = 2097152,
        NoHoisting = 4194304,
        Iterator = 8388608,
        NoAsciiEscaping = 16777216,
    }
    interface EmitHelperBase {
        readonly name: string;
        readonly scoped: boolean;
        readonly text: string | ((node: EmitHelperUniqueNameCallback) => string);
        readonly priority?: number;
        readonly dependencies?: EmitHelper[];
    }
    interface ScopedEmitHelper extends EmitHelperBase {
        readonly scoped: true;
    }
    interface UnscopedEmitHelper extends EmitHelperBase {
        readonly scoped: false;
        readonly text: string;
    }
    type EmitHelper = ScopedEmitHelper | UnscopedEmitHelper;
    type EmitHelperUniqueNameCallback = (name: string) => string;
    enum EmitHint {
        SourceFile = 0,
        Expression = 1,
        IdentifierName = 2,
        MappedTypeParameter = 3,
        Unspecified = 4,
        EmbeddedStatement = 5,
        JsxAttributeValue = 6,
        ImportTypeNodeAttributes = 7,
    }
    enum OuterExpressionKinds {
        Parentheses = 1,
        TypeAssertions = 2,
        NonNullAssertions = 4,
        PartiallyEmittedExpressions = 8,
        ExpressionsWithTypeArguments = 16,
        Satisfies = 32,
        Assertions = 38,
        All = 63,
        ExcludeJSDocTypeAssertion = -2147483648,
    }
    type ImmediatelyInvokedFunctionExpression = CallExpression & {
        readonly expression: FunctionExpression;
    };
    type ImmediatelyInvokedArrowFunction = CallExpression & {
        readonly expression: ParenthesizedExpression & {
            readonly expression: ArrowFunction;
        };
    };
    interface NodeFactory {
        createNodeArray<T extends Node>(elements?: readonly T[], hasTrailingComma?: boolean): NodeArray<T>;
        createNumericLiteral(value: string | number, numericLiteralFlags?: TokenFlags): NumericLiteral;
        createBigIntLiteral(value: string | PseudoBigInt): BigIntLiteral;
        createStringLiteral(text: string, isSingleQuote?: boolean): StringLiteral;
        createStringLiteralFromNode(sourceNode: PropertyNameLiteral | PrivateIdentifier, isSingleQuote?: boolean): StringLiteral;
        createRegularExpressionLiteral(text: string): RegularExpressionLiteral;
        createIdentifier(text: string): Identifier;
        /**
         * Create a unique temporary variable.
         * @param recordTempVariable An optional callback used to record the temporary variable name. This
         * should usually be a reference to `hoistVariableDeclaration` from a `TransformationContext`, but
         * can be `undefined` if you plan to record the temporary variable manually.
         * @param reservedInNestedScopes When `true`, reserves the temporary variable name in all nested scopes
         * during emit so that the variable can be referenced in a nested function body. This is an alternative to
         * setting `EmitFlags.ReuseTempVariableScope` on the nested function itself.
         */
        createTempVariable(recordTempVariable: ((node: Identifier) => void) | undefined, reservedInNestedScopes?: boolean): Identifier;
        /**
         * Create a unique temporary variable for use in a loop.
         * @param reservedInNestedScopes When `true`, reserves the temporary variable name in all nested scopes
         * during emit so that the variable can be referenced in a nested function body. This is an alternative to
         * setting `EmitFlags.ReuseTempVariableScope` on the nested function itself.
         */
        createLoopVariable(reservedInNestedScopes?: boolean): Identifier;
        /** Create a unique name based on the supplied text. */
        createUniqueName(text: string, flags?: GeneratedIdentifierFlags): Identifier;
        /** Create a unique name generated for a node. */
        getGeneratedNameForNode(node: Node | undefined, flags?: GeneratedIdentifierFlags): Identifier;
        createPrivateIdentifier(text: string): PrivateIdentifier;
        createUniquePrivateName(text?: string): PrivateIdentifier;
        getGeneratedPrivateNameForNode(node: Node): PrivateIdentifier;
        createToken(token: SyntaxKind.SuperKeyword): SuperExpression;
        createToken(token: SyntaxKind.ThisKeyword): ThisExpression;
        createToken(token: SyntaxKind.NullKeyword): NullLiteral;
        createToken(token: SyntaxKind.TrueKeyword): TrueLiteral;
        createToken(token: SyntaxKind.FalseKeyword): FalseLiteral;
        createToken(token: SyntaxKind.EndOfFileToken): EndOfFileToken;
        createToken(token: SyntaxKind.Unknown): Token<SyntaxKind.Unknown>;
        createToken<TKind extends PunctuationSyntaxKind>(token: TKind): PunctuationToken<TKind>;
        createToken<TKind extends KeywordTypeSyntaxKind>(token: TKind): KeywordTypeNode<TKind>;
        createToken<TKind extends ModifierSyntaxKind>(token: TKind): ModifierToken<TKind>;
        createToken<TKind extends KeywordSyntaxKind>(token: TKind): KeywordToken<TKind>;
        createSuper(): SuperExpression;
        createThis(): ThisExpression;
        createNull(): NullLiteral;
        createTrue(): TrueLiteral;
        createFalse(): FalseLiteral;
        createModifier<T extends ModifierSyntaxKind>(kind: T): ModifierToken<T>;
        createModifiersFromModifierFlags(flags: ModifierFlags): Modifier[] | undefined;
        createQualifiedName(left: EntityName, right: string | Identifier): QualifiedName;
        updateQualifiedName(node: QualifiedName, left: EntityName, right: Identifier): QualifiedName;
        createComputedPropertyName(expression: Expression): ComputedPropertyName;
        updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName;
        createTypeParameterDeclaration(modifiers: readonly Modifier[] | undefined, name: string | Identifier, constraint?: TypeNode, defaultType?: TypeNode): TypeParameterDeclaration;
        updateTypeParameterDeclaration(node: TypeParameterDeclaration, modifiers: readonly Modifier[] | undefined, name: Identifier, constraint: TypeNode | undefined, defaultType: TypeNode | undefined): TypeParameterDeclaration;
        createParameterDeclaration(modifiers: readonly ModifierLike[] | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken?: QuestionToken, type?: TypeNode, initializer?: Expression): ParameterDeclaration;
        updateParameterDeclaration(node: ParameterDeclaration, modifiers: readonly ModifierLike[] | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): ParameterDeclaration;
        createDecorator(expression: Expression): Decorator;
        updateDecorator(node: Decorator, expression: Expression): Decorator;
        createPropertySignature(modifiers: readonly Modifier[] | undefined, name: PropertyName | string, questionToken: QuestionToken | undefined, type: TypeNode | undefined): PropertySignature;
        updatePropertySignature(node: PropertySignature, modifiers: readonly Modifier[] | undefined, name: PropertyName, questionToken: QuestionToken | undefined, type: TypeNode | undefined): PropertySignature;
        createPropertyDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | PropertyName, questionOrExclamationToken: QuestionToken | ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
        updatePropertyDeclaration(node: PropertyDeclaration, modifiers: readonly ModifierLike[] | undefined, name: string | PropertyName, questionOrExclamationToken: QuestionToken | ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
        createMethodSignature(modifiers: readonly Modifier[] | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): MethodSignature;
        updateMethodSignature(node: MethodSignature, modifiers: readonly Modifier[] | undefined, name: PropertyName, questionToken: QuestionToken | undefined, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): MethodSignature;
        createMethodDeclaration(modifiers: readonly ModifierLike[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
        updateMethodDeclaration(node: MethodDeclaration, modifiers: readonly ModifierLike[] | undefined, asteriskToken: AsteriskToken | undefined, name: PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
        createConstructorDeclaration(modifiers: readonly ModifierLike[] | undefined, parameters: readonly ParameterDeclaration[], body: Block | undefined): ConstructorDeclaration;
        updateConstructorDeclaration(node: ConstructorDeclaration, modifiers: readonly ModifierLike[] | undefined, parameters: readonly ParameterDeclaration[], body: Block | undefined): ConstructorDeclaration;
        createGetAccessorDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | PropertyName, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
        updateGetAccessorDeclaration(node: GetAccessorDeclaration, modifiers: readonly ModifierLike[] | undefined, name: PropertyName, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
        createSetAccessorDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | PropertyName, parameters: readonly ParameterDeclaration[], body: Block | undefined): SetAccessorDeclaration;
        updateSetAccessorDeclaration(node: SetAccessorDeclaration, modifiers: readonly ModifierLike[] | undefined, name: PropertyName, parameters: readonly ParameterDeclaration[], body: Block | undefined): SetAccessorDeclaration;
        createCallSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): CallSignatureDeclaration;
        updateCallSignature(node: CallSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): CallSignatureDeclaration;
        createConstructSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): ConstructSignatureDeclaration;
        updateConstructSignature(node: ConstructSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): ConstructSignatureDeclaration;
        createIndexSignature(modifiers: readonly ModifierLike[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): IndexSignatureDeclaration;
        updateIndexSignature(node: IndexSignatureDeclaration, modifiers: readonly ModifierLike[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): IndexSignatureDeclaration;
        createTemplateLiteralTypeSpan(type: TypeNode, literal: TemplateMiddle | TemplateTail): TemplateLiteralTypeSpan;
        updateTemplateLiteralTypeSpan(node: TemplateLiteralTypeSpan, type: TypeNode, literal: TemplateMiddle | TemplateTail): TemplateLiteralTypeSpan;
        createClassStaticBlockDeclaration(body: Block): ClassStaticBlockDeclaration;
        updateClassStaticBlockDeclaration(node: ClassStaticBlockDeclaration, body: Block): ClassStaticBlockDeclaration;
        createKeywordTypeNode<TKind extends KeywordTypeSyntaxKind>(kind: TKind): KeywordTypeNode<TKind>;
        createTypePredicateNode(assertsModifier: AssertsKeyword | undefined, parameterName: Identifier | ThisTypeNode | string, type: TypeNode | undefined): TypePredicateNode;
        updateTypePredicateNode(node: TypePredicateNode, assertsModifier: AssertsKeyword | undefined, parameterName: Identifier | ThisTypeNode, type: TypeNode | undefined): TypePredicateNode;
        createTypeReferenceNode(typeName: string | EntityName, typeArguments?: readonly TypeNode[]): TypeReferenceNode;
        updateTypeReferenceNode(node: TypeReferenceNode, typeName: EntityName, typeArguments: NodeArray<TypeNode> | undefined): TypeReferenceNode;
        createFunctionTypeNode(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): FunctionTypeNode;
        updateFunctionTypeNode(node: FunctionTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode): FunctionTypeNode;
        createConstructorTypeNode(modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): ConstructorTypeNode;
        updateConstructorTypeNode(node: ConstructorTypeNode, modifiers: readonly Modifier[] | undefined, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode): ConstructorTypeNode;
        createTypeQueryNode(exprName: EntityName, typeArguments?: readonly TypeNode[]): TypeQueryNode;
        updateTypeQueryNode(node: TypeQueryNode, exprName: EntityName, typeArguments?: readonly TypeNode[]): TypeQueryNode;
        createTypeLiteralNode(members: readonly TypeElement[] | undefined): TypeLiteralNode;
        updateTypeLiteralNode(node: TypeLiteralNode, members: NodeArray<TypeElement>): TypeLiteralNode;
        createArrayTypeNode(elementType: TypeNode): ArrayTypeNode;
        updateArrayTypeNode(node: ArrayTypeNode, elementType: TypeNode): ArrayTypeNode;
        createTupleTypeNode(elements: readonly (TypeNode | NamedTupleMember)[]): TupleTypeNode;
        updateTupleTypeNode(node: TupleTypeNode, elements: readonly (TypeNode | NamedTupleMember)[]): TupleTypeNode;
        createNamedTupleMember(dotDotDotToken: DotDotDotToken | undefined, name: Identifier, questionToken: QuestionToken | undefined, type: TypeNode): NamedTupleMember;
        updateNamedTupleMember(node: NamedTupleMember, dotDotDotToken: DotDotDotToken | undefined, name: Identifier, questionToken: QuestionToken | undefined, type: TypeNode): NamedTupleMember;
        createOptionalTypeNode(type: TypeNode): OptionalTypeNode;
        updateOptionalTypeNode(node: OptionalTypeNode, type: TypeNode): OptionalTypeNode;
        createRestTypeNode(type: TypeNode): RestTypeNode;
        updateRestTypeNode(node: RestTypeNode, type: TypeNode): RestTypeNode;
        createUnionTypeNode(types: readonly TypeNode[]): UnionTypeNode;
        updateUnionTypeNode(node: UnionTypeNode, types: NodeArray<TypeNode>): UnionTypeNode;
        createIntersectionTypeNode(types: readonly TypeNode[]): IntersectionTypeNode;
        updateIntersectionTypeNode(node: IntersectionTypeNode, types: NodeArray<TypeNode>): IntersectionTypeNode;
        createConditionalTypeNode(checkType: TypeNode, extendsType: TypeNode, trueType: TypeNode, falseType: TypeNode): ConditionalTypeNode;
        updateConditionalTypeNode(node: ConditionalTypeNode, checkType: TypeNode, extendsType: TypeNode, trueType: TypeNode, falseType: TypeNode): ConditionalTypeNode;
        createInferTypeNode(typeParameter: TypeParameterDeclaration): InferTypeNode;
        updateInferTypeNode(node: InferTypeNode, typeParameter: TypeParameterDeclaration): InferTypeNode;
        createImportTypeNode(argument: TypeNode, attributes?: ImportAttributes, qualifier?: EntityName, typeArguments?: readonly TypeNode[], isTypeOf?: boolean): ImportTypeNode;
        updateImportTypeNode(node: ImportTypeNode, argument: TypeNode, attributes: ImportAttributes | undefined, qualifier: EntityName | undefined, typeArguments: readonly TypeNode[] | undefined, isTypeOf?: boolean): ImportTypeNode;
        createParenthesizedType(type: TypeNode): ParenthesizedTypeNode;
        updateParenthesizedType(node: ParenthesizedTypeNode, type: TypeNode): ParenthesizedTypeNode;
        createThisTypeNode(): ThisTypeNode;
        createTypeOperatorNode(operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword, type: TypeNode): TypeOperatorNode;
        updateTypeOperatorNode(node: TypeOperatorNode, type: TypeNode): TypeOperatorNode;
        createIndexedAccessTypeNode(objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
        updateIndexedAccessTypeNode(node: IndexedAccessTypeNode, objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
        createMappedTypeNode(readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined, typeParameter: TypeParameterDeclaration, nameType: TypeNode | undefined, questionToken: QuestionToken | PlusToken | MinusToken | undefined, type: TypeNode | undefined, members: NodeArray<TypeElement> | undefined): MappedTypeNode;
        updateMappedTypeNode(node: MappedTypeNode, readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined, typeParameter: TypeParameterDeclaration, nameType: TypeNode | undefined, questionToken: QuestionToken | PlusToken | MinusToken | undefined, type: TypeNode | undefined, members: NodeArray<TypeElement> | undefined): MappedTypeNode;
        createLiteralTypeNode(literal: LiteralTypeNode["literal"]): LiteralTypeNode;
        updateLiteralTypeNode(node: LiteralTypeNode, literal: LiteralTypeNode["literal"]): LiteralTypeNode;
        createTemplateLiteralType(head: TemplateHead, templateSpans: readonly TemplateLiteralTypeSpan[]): TemplateLiteralTypeNode;
        updateTemplateLiteralType(node: TemplateLiteralTypeNode, head: TemplateHead, templateSpans: readonly TemplateLiteralTypeSpan[]): TemplateLiteralTypeNode;
        createObjectBindingPattern(elements: readonly BindingElement[]): ObjectBindingPattern;
        updateObjectBindingPattern(node: ObjectBindingPattern, elements: readonly BindingElement[]): ObjectBindingPattern;
        createArrayBindingPattern(elements: readonly ArrayBindingElement[]): ArrayBindingPattern;
        updateArrayBindingPattern(node: ArrayBindingPattern, elements: readonly ArrayBindingElement[]): ArrayBindingPattern;
        createBindingElement(dotDotDotToken: DotDotDotToken | undefined, propertyName: string | PropertyName | undefined, name: string | BindingName, initializer?: Expression): BindingElement;
        updateBindingElement(node: BindingElement, dotDotDotToken: DotDotDotToken | undefined, propertyName: PropertyName | undefined, name: BindingName, initializer: Expression | undefined): BindingElement;
        createArrayLiteralExpression(elements?: readonly Expression[], multiLine?: boolean): ArrayLiteralExpression;
        updateArrayLiteralExpression(node: ArrayLiteralExpression, elements: readonly Expression[]): ArrayLiteralExpression;
        createObjectLiteralExpression(properties?: readonly ObjectLiteralElementLike[], multiLine?: boolean): ObjectLiteralExpression;
        updateObjectLiteralExpression(node: ObjectLiteralExpression, properties: readonly ObjectLiteralElementLike[]): ObjectLiteralExpression;
        createPropertyAccessExpression(expression: Expression, name: string | MemberName): PropertyAccessExpression;
        updatePropertyAccessExpression(node: PropertyAccessExpression, expression: Expression, name: MemberName): PropertyAccessExpression;
        createPropertyAccessChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, name: string | MemberName): PropertyAccessChain;
        updatePropertyAccessChain(node: PropertyAccessChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, name: MemberName): PropertyAccessChain;
        createElementAccessExpression(expression: Expression, index: number | Expression): ElementAccessExpression;
        updateElementAccessExpression(node: ElementAccessExpression, expression: Expression, argumentExpression: Expression): ElementAccessExpression;
        createElementAccessChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, index: number | Expression): ElementAccessChain;
        updateElementAccessChain(node: ElementAccessChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, argumentExpression: Expression): ElementAccessChain;
        createCallExpression(expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): CallExpression;
        updateCallExpression(node: CallExpression, expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[]): CallExpression;
        createCallChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): CallChain;
        updateCallChain(node: CallChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[]): CallChain;
        createNewExpression(expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): NewExpression;
        updateNewExpression(node: NewExpression, expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): NewExpression;
        createTaggedTemplateExpression(tag: Expression, typeArguments: readonly TypeNode[] | undefined, template: TemplateLiteral): TaggedTemplateExpression;
        updateTaggedTemplateExpression(node: TaggedTemplateExpression, tag: Expression, typeArguments: readonly TypeNode[] | undefined, template: TemplateLiteral): TaggedTemplateExpression;
        createTypeAssertion(type: TypeNode, expression: Expression): TypeAssertion;
        updateTypeAssertion(node: TypeAssertion, type: TypeNode, expression: Expression): TypeAssertion;
        createParenthesizedExpression(expression: Expression): ParenthesizedExpression;
        updateParenthesizedExpression(node: ParenthesizedExpression, expression: Expression): ParenthesizedExpression;
        createFunctionExpression(modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[] | undefined, type: TypeNode | undefined, body: Block): FunctionExpression;
        updateFunctionExpression(node: FunctionExpression, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block): FunctionExpression;
        createArrowFunction(modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
        updateArrowFunction(node: ArrowFunction, modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken, body: ConciseBody): ArrowFunction;
        createDeleteExpression(expression: Expression): DeleteExpression;
        updateDeleteExpression(node: DeleteExpression, expression: Expression): DeleteExpression;
        createTypeOfExpression(expression: Expression): TypeOfExpression;
        updateTypeOfExpression(node: TypeOfExpression, expression: Expression): TypeOfExpression;
        createVoidExpression(expression: Expression): VoidExpression;
        updateVoidExpression(node: VoidExpression, expression: Expression): VoidExpression;
        createAwaitExpression(expression: Expression): AwaitExpression;
        updateAwaitExpression(node: AwaitExpression, expression: Expression): AwaitExpression;
        createPrefixUnaryExpression(operator: PrefixUnaryOperator, operand: Expression): PrefixUnaryExpression;
        updatePrefixUnaryExpression(node: PrefixUnaryExpression, operand: Expression): PrefixUnaryExpression;
        createPostfixUnaryExpression(operand: Expression, operator: PostfixUnaryOperator): PostfixUnaryExpression;
        updatePostfixUnaryExpression(node: PostfixUnaryExpression, operand: Expression): PostfixUnaryExpression;
        createBinaryExpression(left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression): BinaryExpression;
        updateBinaryExpression(node: BinaryExpression, left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression): BinaryExpression;
        createConditionalExpression(condition: Expression, questionToken: QuestionToken | undefined, whenTrue: Expression, colonToken: ColonToken | undefined, whenFalse: Expression): ConditionalExpression;
        updateConditionalExpression(node: ConditionalExpression, condition: Expression, questionToken: QuestionToken, whenTrue: Expression, colonToken: ColonToken, whenFalse: Expression): ConditionalExpression;
        createTemplateExpression(head: TemplateHead, templateSpans: readonly TemplateSpan[]): TemplateExpression;
        updateTemplateExpression(node: TemplateExpression, head: TemplateHead, templateSpans: readonly TemplateSpan[]): TemplateExpression;
        createTemplateHead(text: string, rawText?: string, templateFlags?: TokenFlags): TemplateHead;
        createTemplateHead(text: string | undefined, rawText: string, templateFlags?: TokenFlags): TemplateHead;
        createTemplateMiddle(text: string, rawText?: string, templateFlags?: TokenFlags): TemplateMiddle;
        createTemplateMiddle(text: string | undefined, rawText: string, templateFlags?: TokenFlags): TemplateMiddle;
        createTemplateTail(text: string, rawText?: string, templateFlags?: TokenFlags): TemplateTail;
        createTemplateTail(text: string | undefined, rawText: string, templateFlags?: TokenFlags): TemplateTail;
        createNoSubstitutionTemplateLiteral(text: string, rawText?: string): NoSubstitutionTemplateLiteral;
        createNoSubstitutionTemplateLiteral(text: string | undefined, rawText: string): NoSubstitutionTemplateLiteral;
        createYieldExpression(asteriskToken: AsteriskToken, expression: Expression): YieldExpression;
        createYieldExpression(asteriskToken: undefined, expression: Expression | undefined): YieldExpression;
        updateYieldExpression(node: YieldExpression, asteriskToken: AsteriskToken | undefined, expression: Expression | undefined): YieldExpression;
        createSpreadElement(expression: Expression): SpreadElement;
        updateSpreadElement(node: SpreadElement, expression: Expression): SpreadElement;
        createClassExpression(modifiers: readonly ModifierLike[] | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassExpression;
        updateClassExpression(node: ClassExpression, modifiers: readonly ModifierLike[] | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassExpression;
        createOmittedExpression(): OmittedExpression;
        createExpressionWithTypeArguments(expression: Expression, typeArguments: readonly TypeNode[] | undefined): ExpressionWithTypeArguments;
        updateExpressionWithTypeArguments(node: ExpressionWithTypeArguments, expression: Expression, typeArguments: readonly TypeNode[] | undefined): ExpressionWithTypeArguments;
        createAsExpression(expression: Expression, type: TypeNode): AsExpression;
        updateAsExpression(node: AsExpression, expression: Expression, type: TypeNode): AsExpression;
        createNonNullExpression(expression: Expression): NonNullExpression;
        updateNonNullExpression(node: NonNullExpression, expression: Expression): NonNullExpression;
        createNonNullChain(expression: Expression): NonNullChain;
        updateNonNullChain(node: NonNullChain, expression: Expression): NonNullChain;
        createMetaProperty(keywordToken: MetaProperty["keywordToken"], name: Identifier): MetaProperty;
        updateMetaProperty(node: MetaProperty, name: Identifier): MetaProperty;
        createSatisfiesExpression(expression: Expression, type: TypeNode): SatisfiesExpression;
        updateSatisfiesExpression(node: SatisfiesExpression, expression: Expression, type: TypeNode): SatisfiesExpression;
        createTemplateSpan(expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
        updateTemplateSpan(node: TemplateSpan, expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
        createSemicolonClassElement(): SemicolonClassElement;
        createBlock(statements: readonly Statement[], multiLine?: boolean): Block;
        updateBlock(node: Block, statements: readonly Statement[]): Block;
        createVariableStatement(modifiers: readonly ModifierLike[] | undefined, declarationList: VariableDeclarationList | readonly VariableDeclaration[]): VariableStatement;
        updateVariableStatement(node: VariableStatement, modifiers: readonly ModifierLike[] | undefined, declarationList: VariableDeclarationList): VariableStatement;
        createEmptyStatement(): EmptyStatement;
        createExpressionStatement(expression: Expression): ExpressionStatement;
        updateExpressionStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement;
        createIfStatement(expression: Expression, thenStatement: Statement, elseStatement?: Statement): IfStatement;
        updateIfStatement(node: IfStatement, expression: Expression, thenStatement: Statement, elseStatement: Statement | undefined): IfStatement;
        createDoStatement(statement: Statement, expression: Expression): DoStatement;
        updateDoStatement(node: DoStatement, statement: Statement, expression: Expression): DoStatement;
        createWhileStatement(expression: Expression, statement: Statement): WhileStatement;
        updateWhileStatement(node: WhileStatement, expression: Expression, statement: Statement): WhileStatement;
        createForStatement(initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
        updateForStatement(node: ForStatement, initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
        createForInStatement(initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
        updateForInStatement(node: ForInStatement, initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
        createForOfStatement(awaitModifier: AwaitKeyword | undefined, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
        updateForOfStatement(node: ForOfStatement, awaitModifier: AwaitKeyword | undefined, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
        createContinueStatement(label?: string | Identifier): ContinueStatement;
        updateContinueStatement(node: ContinueStatement, label: Identifier | undefined): ContinueStatement;
        createBreakStatement(label?: string | Identifier): BreakStatement;
        updateBreakStatement(node: BreakStatement, label: Identifier | undefined): BreakStatement;
        createReturnStatement(expression?: Expression): ReturnStatement;
        updateReturnStatement(node: ReturnStatement, expression: Expression | undefined): ReturnStatement;
        createWithStatement(expression: Expression, statement: Statement): WithStatement;
        updateWithStatement(node: WithStatement, expression: Expression, statement: Statement): WithStatement;
        createSwitchStatement(expression: Expression, caseBlock: CaseBlock): SwitchStatement;
        updateSwitchStatement(node: SwitchStatement, expression: Expression, caseBlock: CaseBlock): SwitchStatement;
        createLabeledStatement(label: string | Identifier, statement: Statement): LabeledStatement;
        updateLabeledStatement(node: LabeledStatement, label: Identifier, statement: Statement): LabeledStatement;
        createThrowStatement(expression: Expression): ThrowStatement;
        updateThrowStatement(node: ThrowStatement, expression: Expression): ThrowStatement;
        createTryStatement(tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
        updateTryStatement(node: TryStatement, tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
        createDebuggerStatement(): DebuggerStatement;
        createVariableDeclaration(name: string | BindingName, exclamationToken?: ExclamationToken, type?: TypeNode, initializer?: Expression): VariableDeclaration;
        updateVariableDeclaration(node: VariableDeclaration, name: BindingName, exclamationToken: ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): VariableDeclaration;
        createVariableDeclarationList(declarations: readonly VariableDeclaration[], flags?: NodeFlags): VariableDeclarationList;
        updateVariableDeclarationList(node: VariableDeclarationList, declarations: readonly VariableDeclaration[]): VariableDeclarationList;
        createFunctionDeclaration(modifiers: readonly ModifierLike[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
        updateFunctionDeclaration(node: FunctionDeclaration, modifiers: readonly ModifierLike[] | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
        createClassDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassDeclaration;
        updateClassDeclaration(node: ClassDeclaration, modifiers: readonly ModifierLike[] | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassDeclaration;
        createInterfaceDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly TypeElement[]): InterfaceDeclaration;
        updateInterfaceDeclaration(node: InterfaceDeclaration, modifiers: readonly ModifierLike[] | undefined, name: Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly TypeElement[]): InterfaceDeclaration;
        createTypeAliasDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, type: TypeNode): TypeAliasDeclaration;
        updateTypeAliasDeclaration(node: TypeAliasDeclaration, modifiers: readonly ModifierLike[] | undefined, name: Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, type: TypeNode): TypeAliasDeclaration;
        createEnumDeclaration(modifiers: readonly ModifierLike[] | undefined, name: string | Identifier, members: readonly EnumMember[]): EnumDeclaration;
        updateEnumDeclaration(node: EnumDeclaration, modifiers: readonly ModifierLike[] | undefined, name: Identifier, members: readonly EnumMember[]): EnumDeclaration;
        createModuleDeclaration(modifiers: readonly ModifierLike[] | undefined, name: ModuleName, body: ModuleBody | undefined, flags?: NodeFlags): ModuleDeclaration;
        updateModuleDeclaration(node: ModuleDeclaration, modifiers: readonly ModifierLike[] | undefined, name: ModuleName, body: ModuleBody | undefined): ModuleDeclaration;
        createModuleBlock(statements: readonly Statement[]): ModuleBlock;
        updateModuleBlock(node: ModuleBlock, statements: readonly Statement[]): ModuleBlock;
        createCaseBlock(clauses: readonly CaseOrDefaultClause[]): CaseBlock;
        updateCaseBlock(node: CaseBlock, clauses: readonly CaseOrDefaultClause[]): CaseBlock;
        createNamespaceExportDeclaration(name: string | Identifier): NamespaceExportDeclaration;
        updateNamespaceExportDeclaration(node: NamespaceExportDeclaration, name: Identifier): NamespaceExportDeclaration;
        createImportEqualsDeclaration(modifiers: readonly ModifierLike[] | undefined, isTypeOnly: boolean, name: string | Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
        updateImportEqualsDeclaration(node: ImportEqualsDeclaration, modifiers: readonly ModifierLike[] | undefined, isTypeOnly: boolean, name: Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
        createImportDeclaration(modifiers: readonly ModifierLike[] | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression, attributes?: ImportAttributes): ImportDeclaration;
        updateImportDeclaration(node: ImportDeclaration, modifiers: readonly ModifierLike[] | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression, attributes: ImportAttributes | undefined): ImportDeclaration;
        createImportClause(phaseModifier: ImportPhaseModifierSyntaxKind | undefined, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
        /** @deprecated */ createImportClause(isTypeOnly: boolean, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
        updateImportClause(node: ImportClause, phaseModifier: ImportPhaseModifierSyntaxKind | undefined, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
        /** @deprecated */ updateImportClause(node: ImportClause, isTypeOnly: boolean, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
        /** @deprecated */ createAssertClause(elements: NodeArray<AssertEntry>, multiLine?: boolean): AssertClause;
        /** @deprecated */ updateAssertClause(node: AssertClause, elements: NodeArray<AssertEntry>, multiLine?: boolean): AssertClause;
        /** @deprecated */ createAssertEntry(name: AssertionKey, value: Expression): AssertEntry;
        /** @deprecated */ updateAssertEntry(node: AssertEntry, name: AssertionKey, value: Expression): AssertEntry;
        /** @deprecated */ createImportTypeAssertionContainer(clause: AssertClause, multiLine?: boolean): ImportTypeAssertionContainer;
        /** @deprecated */ updateImportTypeAssertionContainer(node: ImportTypeAssertionContainer, clause: AssertClause, multiLine?: boolean): ImportTypeAssertionContainer;
        createImportAttributes(elements: NodeArray<ImportAttribute>, multiLine?: boolean): ImportAttributes;
        updateImportAttributes(node: ImportAttributes, elements: NodeArray<ImportAttribute>, multiLine?: boolean): ImportAttributes;
        createImportAttribute(name: ImportAttributeName, value: Expression): ImportAttribute;
        updateImportAttribute(node: ImportAttribute, name: ImportAttributeName, value: Expression): ImportAttribute;
        createNamespaceImport(name: Identifier): NamespaceImport;
        updateNamespaceImport(node: NamespaceImport, name: Identifier): NamespaceImport;
        createNamespaceExport(name: ModuleExportName): NamespaceExport;
        updateNamespaceExport(node: NamespaceExport, name: ModuleExportName): NamespaceExport;
        createNamedImports(elements: readonly ImportSpecifier[]): NamedImports;
        updateNamedImports(node: NamedImports, elements: readonly ImportSpecifier[]): NamedImports;
        createImportSpecifier(isTypeOnly: boolean, propertyName: ModuleExportName | undefined, name: Identifier): ImportSpecifier;
        updateImportSpecifier(node: ImportSpecifier, isTypeOnly: boolean, propertyName: ModuleExportName | undefined, name: Identifier): ImportSpecifier;
        createExportAssignment(modifiers: readonly ModifierLike[] | undefined, isExportEquals: boolean | undefined, expression: Expression): ExportAssignment;
        updateExportAssignment(node: ExportAssignment, modifiers: readonly ModifierLike[] | undefined, expression: Expression): ExportAssignment;
        createExportDeclaration(modifiers: readonly ModifierLike[] | undefined, isTypeOnly: boolean, exportClause: NamedExportBindings | undefined, moduleSpecifier?: Expression, attributes?: ImportAttributes): ExportDeclaration;
        updateExportDeclaration(node: ExportDeclaration, modifiers: readonly ModifierLike[] | undefined, isTypeOnly: boolean, exportClause: NamedExportBindings | undefined, moduleSpecifier: Expression | undefined, attributes: ImportAttributes | undefined): ExportDeclaration;
        createNamedExports(elements: readonly ExportSpecifier[]): NamedExports;
        updateNamedExports(node: NamedExports, elements: readonly ExportSpecifier[]): NamedExports;
        createExportSpecifier(isTypeOnly: boolean, propertyName: string | ModuleExportName | undefined, name: string | ModuleExportName): ExportSpecifier;
        updateExportSpecifier(node: ExportSpecifier, isTypeOnly: boolean, propertyName: ModuleExportName | undefined, name: ModuleExportName): ExportSpecifier;
        createExternalModuleReference(expression: Expression): ExternalModuleReference;
        updateExternalModuleReference(node: ExternalModuleReference, expression: Expression): ExternalModuleReference;
        createJSDocAllType(): JSDocAllType;
        createJSDocUnknownType(): JSDocUnknownType;
        createJSDocNonNullableType(type: TypeNode, postfix?: boolean): JSDocNonNullableType;
        updateJSDocNonNullableType(node: JSDocNonNullableType, type: TypeNode): JSDocNonNullableType;
        createJSDocNullableType(type: TypeNode, postfix?: boolean): JSDocNullableType;
        updateJSDocNullableType(node: JSDocNullableType, type: TypeNode): JSDocNullableType;
        createJSDocOptionalType(type: TypeNode): JSDocOptionalType;
        updateJSDocOptionalType(node: JSDocOptionalType, type: TypeNode): JSDocOptionalType;
        createJSDocFunctionType(parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): JSDocFunctionType;
        updateJSDocFunctionType(node: JSDocFunctionType, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): JSDocFunctionType;
        createJSDocVariadicType(type: TypeNode): JSDocVariadicType;
        updateJSDocVariadicType(node: JSDocVariadicType, type: TypeNode): JSDocVariadicType;
        createJSDocNamepathType(type: TypeNode): JSDocNamepathType;
        updateJSDocNamepathType(node: JSDocNamepathType, type: TypeNode): JSDocNamepathType;
        createJSDocTypeExpression(type: TypeNode): JSDocTypeExpression;
        updateJSDocTypeExpression(node: JSDocTypeExpression, type: TypeNode): JSDocTypeExpression;
        createJSDocNameReference(name: EntityName | JSDocMemberName): JSDocNameReference;
        updateJSDocNameReference(node: JSDocNameReference, name: EntityName | JSDocMemberName): JSDocNameReference;
        createJSDocMemberName(left: EntityName | JSDocMemberName, right: Identifier): JSDocMemberName;
        updateJSDocMemberName(node: JSDocMemberName, left: EntityName | JSDocMemberName, right: Identifier): JSDocMemberName;
        createJSDocLink(name: EntityName | JSDocMemberName | undefined, text: string): JSDocLink;
        updateJSDocLink(node: JSDocLink, name: EntityName | JSDocMemberName | undefined, text: string): JSDocLink;
        createJSDocLinkCode(name: EntityName | JSDocMemberName | undefined, text: string): JSDocLinkCode;
        updateJSDocLinkCode(node: JSDocLinkCode, name: EntityName | JSDocMemberName | undefined, text: string): JSDocLinkCode;
        createJSDocLinkPlain(name: EntityName | JSDocMemberName | undefined, text: string): JSDocLinkPlain;
        updateJSDocLinkPlain(node: JSDocLinkPlain, name: EntityName | JSDocMemberName | undefined, text: string): JSDocLinkPlain;
        createJSDocTypeLiteral(jsDocPropertyTags?: readonly JSDocPropertyLikeTag[], isArrayType?: boolean): JSDocTypeLiteral;
        updateJSDocTypeLiteral(node: JSDocTypeLiteral, jsDocPropertyTags: readonly JSDocPropertyLikeTag[] | undefined, isArrayType: boolean | undefined): JSDocTypeLiteral;
        createJSDocSignature(typeParameters: readonly JSDocTemplateTag[] | undefined, parameters: readonly JSDocParameterTag[], type?: JSDocReturnTag): JSDocSignature;
        updateJSDocSignature(node: JSDocSignature, typeParameters: readonly JSDocTemplateTag[] | undefined, parameters: readonly JSDocParameterTag[], type: JSDocReturnTag | undefined): JSDocSignature;
        createJSDocTemplateTag(tagName: Identifier | undefined, constraint: JSDocTypeExpression | undefined, typeParameters: readonly TypeParameterDeclaration[], comment?: string | NodeArray<JSDocComment>): JSDocTemplateTag;
        updateJSDocTemplateTag(node: JSDocTemplateTag, tagName: Identifier | undefined, constraint: JSDocTypeExpression | undefined, typeParameters: readonly TypeParameterDeclaration[], comment: string | NodeArray<JSDocComment> | undefined): JSDocTemplateTag;
        createJSDocTypedefTag(tagName: Identifier | undefined, typeExpression?: JSDocTypeExpression | JSDocTypeLiteral, fullName?: Identifier | JSDocNamespaceDeclaration, comment?: string | NodeArray<JSDocComment>): JSDocTypedefTag;
        updateJSDocTypedefTag(node: JSDocTypedefTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | JSDocTypeLiteral | undefined, fullName: Identifier | JSDocNamespaceDeclaration | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocTypedefTag;
        createJSDocParameterTag(tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression?: JSDocTypeExpression, isNameFirst?: boolean, comment?: string | NodeArray<JSDocComment>): JSDocParameterTag;
        updateJSDocParameterTag(node: JSDocParameterTag, tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression: JSDocTypeExpression | undefined, isNameFirst: boolean, comment: string | NodeArray<JSDocComment> | undefined): JSDocParameterTag;
        createJSDocPropertyTag(tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression?: JSDocTypeExpression, isNameFirst?: boolean, comment?: string | NodeArray<JSDocComment>): JSDocPropertyTag;
        updateJSDocPropertyTag(node: JSDocPropertyTag, tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression: JSDocTypeExpression | undefined, isNameFirst: boolean, comment: string | NodeArray<JSDocComment> | undefined): JSDocPropertyTag;
        createJSDocTypeTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocComment>): JSDocTypeTag;
        updateJSDocTypeTag(node: JSDocTypeTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment: string | NodeArray<JSDocComment> | undefined): JSDocTypeTag;
        createJSDocSeeTag(tagName: Identifier | undefined, nameExpression: JSDocNameReference | undefined, comment?: string | NodeArray<JSDocComment>): JSDocSeeTag;
        updateJSDocSeeTag(node: JSDocSeeTag, tagName: Identifier | undefined, nameExpression: JSDocNameReference | undefined, comment?: string | NodeArray<JSDocComment>): JSDocSeeTag;
        createJSDocReturnTag(tagName: Identifier | undefined, typeExpression?: JSDocTypeExpression, comment?: string | NodeArray<JSDocComment>): JSDocReturnTag;
        updateJSDocReturnTag(node: JSDocReturnTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocReturnTag;
        createJSDocThisTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocComment>): JSDocThisTag;
        updateJSDocThisTag(node: JSDocThisTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocThisTag;
        createJSDocEnumTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocComment>): JSDocEnumTag;
        updateJSDocEnumTag(node: JSDocEnumTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment: string | NodeArray<JSDocComment> | undefined): JSDocEnumTag;
        createJSDocCallbackTag(tagName: Identifier | undefined, typeExpression: JSDocSignature, fullName?: Identifier | JSDocNamespaceDeclaration, comment?: string | NodeArray<JSDocComment>): JSDocCallbackTag;
        updateJSDocCallbackTag(node: JSDocCallbackTag, tagName: Identifier | undefined, typeExpression: JSDocSignature, fullName: Identifier | JSDocNamespaceDeclaration | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocCallbackTag;
        createJSDocOverloadTag(tagName: Identifier | undefined, typeExpression: JSDocSignature, comment?: string | NodeArray<JSDocComment>): JSDocOverloadTag;
        updateJSDocOverloadTag(node: JSDocOverloadTag, tagName: Identifier | undefined, typeExpression: JSDocSignature, comment: string | NodeArray<JSDocComment> | undefined): JSDocOverloadTag;
        createJSDocAugmentsTag(tagName: Identifier | undefined, className: JSDocAugmentsTag["class"], comment?: string | NodeArray<JSDocComment>): JSDocAugmentsTag;
        updateJSDocAugmentsTag(node: JSDocAugmentsTag, tagName: Identifier | undefined, className: JSDocAugmentsTag["class"], comment: string | NodeArray<JSDocComment> | undefined): JSDocAugmentsTag;
        createJSDocImplementsTag(tagName: Identifier | undefined, className: JSDocImplementsTag["class"], comment?: string | NodeArray<JSDocComment>): JSDocImplementsTag;
        updateJSDocImplementsTag(node: JSDocImplementsTag, tagName: Identifier | undefined, className: JSDocImplementsTag["class"], comment: string | NodeArray<JSDocComment> | undefined): JSDocImplementsTag;
        createJSDocAuthorTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocAuthorTag;
        updateJSDocAuthorTag(node: JSDocAuthorTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocAuthorTag;
        createJSDocClassTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocClassTag;
        updateJSDocClassTag(node: JSDocClassTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocClassTag;
        createJSDocPublicTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocPublicTag;
        updateJSDocPublicTag(node: JSDocPublicTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocPublicTag;
        createJSDocPrivateTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocPrivateTag;
        updateJSDocPrivateTag(node: JSDocPrivateTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocPrivateTag;
        createJSDocProtectedTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocProtectedTag;
        updateJSDocProtectedTag(node: JSDocProtectedTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocProtectedTag;
        createJSDocReadonlyTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocReadonlyTag;
        updateJSDocReadonlyTag(node: JSDocReadonlyTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocReadonlyTag;
        createJSDocUnknownTag(tagName: Identifier, comment?: string | NodeArray<JSDocComment>): JSDocUnknownTag;
        updateJSDocUnknownTag(node: JSDocUnknownTag, tagName: Identifier, comment: string | NodeArray<JSDocComment> | undefined): JSDocUnknownTag;
        createJSDocDeprecatedTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocDeprecatedTag;
        updateJSDocDeprecatedTag(node: JSDocDeprecatedTag, tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocDeprecatedTag;
        createJSDocOverrideTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocOverrideTag;
        updateJSDocOverrideTag(node: JSDocOverrideTag, tagName: Identifier | undefined, comment?: string | NodeArray<JSDocComment>): JSDocOverrideTag;
        createJSDocThrowsTag(tagName: Identifier, typeExpression: JSDocTypeExpression | undefined, comment?: string | NodeArray<JSDocComment>): JSDocThrowsTag;
        updateJSDocThrowsTag(node: JSDocThrowsTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | undefined, comment?: string | NodeArray<JSDocComment> | undefined): JSDocThrowsTag;
        createJSDocSatisfiesTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocComment>): JSDocSatisfiesTag;
        updateJSDocSatisfiesTag(node: JSDocSatisfiesTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment: string | NodeArray<JSDocComment> | undefined): JSDocSatisfiesTag;
        createJSDocImportTag(tagName: Identifier | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression, attributes?: ImportAttributes, comment?: string | NodeArray<JSDocComment>): JSDocImportTag;
        updateJSDocImportTag(node: JSDocImportTag, tagName: Identifier | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression, attributes: ImportAttributes | undefined, comment: string | NodeArray<JSDocComment> | undefined): JSDocImportTag;
        createJSDocText(text: string): JSDocText;
        updateJSDocText(node: JSDocText, text: string): JSDocText;
        createJSDocComment(comment?: string | NodeArray<JSDocComment> | undefined, tags?: readonly JSDocTag[] | undefined): JSDoc;
        updateJSDocComment(node: JSDoc, comment: string | NodeArray<JSDocComment> | undefined, tags: readonly JSDocTag[] | undefined): JSDoc;
        createJsxElement(openingElement: JsxOpeningElement, children: readonly JsxChild[], closingElement: JsxClosingElement): JsxElement;
        updateJsxElement(node: JsxElement, openingElement: JsxOpeningElement, children: readonly JsxChild[], closingElement: JsxClosingElement): JsxElement;
        createJsxSelfClosingElement(tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxSelfClosingElement;
        updateJsxSelfClosingElement(node: JsxSelfClosingElement, tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxSelfClosingElement;
        createJsxOpeningElement(tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxOpeningElement;
        updateJsxOpeningElement(node: JsxOpeningElement, tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxOpeningElement;
        createJsxClosingElement(tagName: JsxTagNameExpression): JsxClosingElement;
        updateJsxClosingElement(node: JsxClosingElement, tagName: JsxTagNameExpression): JsxClosingElement;
        createJsxFragment(openingFragment: JsxOpeningFragment, children: readonly JsxChild[], closingFragment: JsxClosingFragment): JsxFragment;
        createJsxText(text: string, containsOnlyTriviaWhiteSpaces?: boolean): JsxText;
        updateJsxText(node: JsxText, text: string, containsOnlyTriviaWhiteSpaces?: boolean): JsxText;
        createJsxOpeningFragment(): JsxOpeningFragment;
        createJsxJsxClosingFragment(): JsxClosingFragment;
        updateJsxFragment(node: JsxFragment, openingFragment: JsxOpeningFragment, children: readonly JsxChild[], closingFragment: JsxClosingFragment): JsxFragment;
        createJsxAttribute(name: JsxAttributeName, initializer: JsxAttributeValue | undefined): JsxAttribute;
        updateJsxAttribute(node: JsxAttribute, name: JsxAttributeName, initializer: JsxAttributeValue | undefined): JsxAttribute;
        createJsxAttributes(properties: readonly JsxAttributeLike[]): JsxAttributes;
        updateJsxAttributes(node: JsxAttributes, properties: readonly JsxAttributeLike[]): JsxAttributes;
        createJsxSpreadAttribute(expression: Expression): JsxSpreadAttribute;
        updateJsxSpreadAttribute(node: JsxSpreadAttribute, expression: Expression): JsxSpreadAttribute;
        createJsxExpression(dotDotDotToken: DotDotDotToken | undefined, expression: Expression | undefined): JsxExpression;
        updateJsxExpression(node: JsxExpression, expression: Expression | undefined): JsxExpression;
        createJsxNamespacedName(namespace: Identifier, name: Identifier): JsxNamespacedName;
        updateJsxNamespacedName(node: JsxNamespacedName, namespace: Identifier, name: Identifier): JsxNamespacedName;
        createCaseClause(expression: Expression, statements: readonly Statement[]): CaseClause;
        updateCaseClause(node: CaseClause, expression: Expression, statements: readonly Statement[]): CaseClause;
        createDefaultClause(statements: readonly Statement[]): DefaultClause;
        updateDefaultClause(node: DefaultClause, statements: readonly Statement[]): DefaultClause;
        createHeritageClause(token: HeritageClause["token"], types: readonly ExpressionWithTypeArguments[]): HeritageClause;
        updateHeritageClause(node: HeritageClause, types: readonly ExpressionWithTypeArguments[]): HeritageClause;
        createCatchClause(variableDeclaration: string | BindingName | VariableDeclaration | undefined, block: Block): CatchClause;
        updateCatchClause(node: CatchClause, variableDeclaration: VariableDeclaration | undefined, block: Block): CatchClause;
        createPropertyAssignment(name: string | PropertyName, initializer: Expression): PropertyAssignment;
        updatePropertyAssignment(node: PropertyAssignment, name: PropertyName, initializer: Expression): PropertyAssignment;
        createShorthandPropertyAssignment(name: string | Identifier, objectAssignmentInitializer?: Expression): ShorthandPropertyAssignment;
        updateShorthandPropertyAssignment(node: ShorthandPropertyAssignment, name: Identifier, objectAssignmentInitializer: Expression | undefined): ShorthandPropertyAssignment;
        createSpreadAssignment(expression: Expression): SpreadAssignment;
        updateSpreadAssignment(node: SpreadAssignment, expression: Expression): SpreadAssignment;
        createEnumMember(name: string | PropertyName, initializer?: Expression): EnumMember;
        updateEnumMember(node: EnumMember, name: PropertyName, initializer: Expression | undefined): EnumMember;
        createSourceFile(statements: readonly Statement[], endOfFileToken: EndOfFileToken, flags: NodeFlags): SourceFile;
        updateSourceFile(node: SourceFile, statements: readonly Statement[], isDeclarationFile?: boolean, referencedFiles?: readonly FileReference[], typeReferences?: readonly FileReference[], hasNoDefaultLib?: boolean, libReferences?: readonly FileReference[]): SourceFile;
        createNotEmittedStatement(original: Node): NotEmittedStatement;
        createNotEmittedTypeElement(): NotEmittedTypeElement;
        createPartiallyEmittedExpression(expression: Expression, original?: Node): PartiallyEmittedExpression;
        updatePartiallyEmittedExpression(node: PartiallyEmittedExpression, expression: Expression): PartiallyEmittedExpression;
        createCommaListExpression(elements: readonly Expression[]): CommaListExpression;
        updateCommaListExpression(node: CommaListExpression, elements: readonly Expression[]): CommaListExpression;
        createBundle(sourceFiles: readonly SourceFile[]): Bundle;
        updateBundle(node: Bundle, sourceFiles: readonly SourceFile[]): Bundle;
        createComma(left: Expression, right: Expression): BinaryExpression;
        createAssignment(left: ObjectLiteralExpression | ArrayLiteralExpression, right: Expression): DestructuringAssignment;
        createAssignment(left: Expression, right: Expression): AssignmentExpression<EqualsToken>;
        createLogicalOr(left: Expression, right: Expression): BinaryExpression;
        createLogicalAnd(left: Expression, right: Expression): BinaryExpression;
        createBitwiseOr(left: Expression, right: Expression): BinaryExpression;
        createBitwiseXor(left: Expression, right: Expression): BinaryExpression;
        createBitwiseAnd(left: Expression, right: Expression): BinaryExpression;
        createStrictEquality(left: Expression, right: Expression): BinaryExpression;
        createStrictInequality(left: Expression, right: Expression): BinaryExpression;
        createEquality(left: Expression, right: Expression): BinaryExpression;
        createInequality(left: Expression, right: Expression): BinaryExpression;
        createLessThan(left: Expression, right: Expression): BinaryExpression;
        createLessThanEquals(left: Expression, right: Expression): BinaryExpression;
        createGreaterThan(left: Expression, right: Expression): BinaryExpression;
        createGreaterThanEquals(left: Expression, right: Expression): BinaryExpression;
        createLeftShift(left: Expression, right: Expression): BinaryExpression;
        createRightShift(left: Expression, right: Expression): BinaryExpression;
        createUnsignedRightShift(left: Expression, right: Expression): BinaryExpression;
        createAdd(left: Expression, right: Expression): BinaryExpression;
        createSubtract(left: Expression, right: Expression): BinaryExpression;
        createMultiply(left: Expression, right: Expression): BinaryExpression;
        createDivide(left: Expression, right: Expression): BinaryExpression;
        createModulo(left: Expression, right: Expression): BinaryExpression;
        createExponent(left: Expression, right: Expression): BinaryExpression;
        createPrefixPlus(operand: Expression): PrefixUnaryExpression;
        createPrefixMinus(operand: Expression): PrefixUnaryExpression;
        createPrefixIncrement(operand: Expression): PrefixUnaryExpression;
        createPrefixDecrement(operand: Expression): PrefixUnaryExpression;
        createBitwiseNot(operand: Expression): PrefixUnaryExpression;
        createLogicalNot(operand: Expression): PrefixUnaryExpression;
        createPostfixIncrement(operand: Expression): PostfixUnaryExpression;
        createPostfixDecrement(operand: Expression): PostfixUnaryExpression;
        createImmediatelyInvokedFunctionExpression(statements: readonly Statement[]): CallExpression;
        createImmediatelyInvokedFunctionExpression(statements: readonly Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
        createImmediatelyInvokedArrowFunction(statements: readonly Statement[]): ImmediatelyInvokedArrowFunction;
        createImmediatelyInvokedArrowFunction(statements: readonly Statement[], param: ParameterDeclaration, paramValue: Expression): ImmediatelyInvokedArrowFunction;
        createVoidZero(): VoidExpression;
        createExportDefault(expression: Expression): ExportAssignment;
        createExternalModuleExport(exportName: Identifier): ExportDeclaration;
        restoreOuterExpressions(outerExpression: Expression | undefined, innerExpression: Expression, kinds?: OuterExpressionKinds): Expression;
        /**
         * Updates a node that may contain modifiers, replacing only the modifiers of the node.
         */
        replaceModifiers<T extends HasModifiers>(node: T, modifiers: readonly Modifier[] | ModifierFlags | undefined): T;
        /**
         * Updates a node that may contain decorators or modifiers, replacing only the decorators and modifiers of the node.
         */
        replaceDecoratorsAndModifiers<T extends HasModifiers & HasDecorators>(node: T, modifiers: readonly ModifierLike[] | undefined): T;
        /**
         * Updates a node that contains a property name, replacing only the name of the node.
         */
        replacePropertyName<T extends AccessorDeclaration | MethodDeclaration | MethodSignature | PropertyDeclaration | PropertySignature | PropertyAssignment>(node: T, name: T["name"]): T;
    }
    interface CoreTransformationContext {
        readonly factory: NodeFactory;
        /** Gets the compiler options supplied to the transformer. */
        getCompilerOptions(): CompilerOptions;
        /** Starts a new lexical environment. */
        startLexicalEnvironment(): void;
        /** Suspends the current lexical environment, usually after visiting a parameter list. */
        suspendLexicalEnvironment(): void;
        /** Resumes a suspended lexical environment, usually before visiting a function body. */
        resumeLexicalEnvironment(): void;
        /** Ends a lexical environment, returning any declarations. */
        endLexicalEnvironment(): Statement[] | undefined;
        /** Hoists a function declaration to the containing scope. */
        hoistFunctionDeclaration(node: FunctionDeclaration): void;
        /** Hoists a variable declaration to the containing scope. */
        hoistVariableDeclaration(node: Identifier): void;
    }
    interface TransformationContext extends CoreTransformationContext {
        /** Records a request for a non-scoped emit helper in the current context. */
        requestEmitHelper(helper: EmitHelper): void;
        /** Gets and resets the requested non-scoped emit helpers. */
        readEmitHelpers(): EmitHelper[] | undefined;
        /** Enables expression substitutions in the pretty printer for the provided SyntaxKind. */
        enableSubstitution(kind: SyntaxKind): void;
        /** Determines whether expression substitutions are enabled for the provided node. */
        isSubstitutionEnabled(node: Node): boolean;
        /**
         * Hook used by transformers to substitute expressions just before they
         * are emitted by the pretty printer.
         *
         * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
         * before returning the `NodeTransformer` callback.
         */
        onSubstituteNode: (hint: EmitHint, node: Node) => Node;
        /**
         * Enables before/after emit notifications in the pretty printer for the provided
         * SyntaxKind.
         */
        enableEmitNotification(kind: SyntaxKind): void;
        /**
         * Determines whether before/after emit notifications should be raised in the pretty
         * printer when it emits a node.
         */
        isEmitNotificationEnabled(node: Node): boolean;
        /**
         * Hook used to allow transformers to capture state before or after
         * the printer emits a node.
         *
         * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
         * before returning the `NodeTransformer` callback.
         */
        onEmitNode: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
    }
    interface TransformationResult<T extends Node> {
        /** Gets the transformed source files. */
        transformed: T[];
        /** Gets diagnostics for the transformation. */
        diagnostics?: DiagnosticWithLocation[];
        /**
         * Gets a substitute for a node, if one is available; otherwise, returns the original node.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to substitute.
         */
        substituteNode(hint: EmitHint, node: Node): Node;
        /**
         * Emits a node with possible notification.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to emit.
         * @param emitCallback A callback used to emit the node.
         */
        emitNodeWithNotification(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        /**
         * Indicates if a given node needs an emit notification
         *
         * @param node The node to emit.
         */
        isEmitNotificationEnabled?(node: Node): boolean;
        /**
         * Clean up EmitNode entries on any parse-tree nodes.
         */
        dispose(): void;
    }
    /**
     * A function that is used to initialize and return a `Transformer` callback, which in turn
     * will be used to transform one or more nodes.
     */
    type TransformerFactory<T extends Node> = (context: TransformationContext) => Transformer<T>;
    /**
     * A function that transforms a node.
     */
    type Transformer<T extends Node> = (node: T) => T;
    /**
     * A function that accepts and possibly transforms a node.
     */
    type Visitor<TIn extends Node = Node, TOut extends Node | undefined = TIn | undefined> = (node: TIn) => VisitResult<TOut>;
    /**
     * A function that walks a node using the given visitor, lifting node arrays into single nodes,
     * returning an node which satisfies the test.
     *
     * - If the input node is undefined, then the output is undefined.
     * - If the visitor returns undefined, then the output is undefined.
     * - If the output node is not undefined, then it will satisfy the test function.
     * - In order to obtain a return type that is more specific than `Node`, a test
     *   function _must_ be provided, and that function must be a type predicate.
     *
     * For the canonical implementation of this type, @see {visitNode}.
     */
    interface NodeVisitor {
        <TIn extends Node | undefined, TVisited extends Node | undefined, TOut extends Node>(node: TIn, visitor: Visitor<NonNullable<TIn>, TVisited>, test: (node: Node) => node is TOut, lift?: (node: readonly Node[]) => Node): TOut | (TIn & undefined) | (TVisited & undefined);
        <TIn extends Node | undefined, TVisited extends Node | undefined>(node: TIn, visitor: Visitor<NonNullable<TIn>, TVisited>, test?: (node: Node) => boolean, lift?: (node: readonly Node[]) => Node): Node | (TIn & undefined) | (TVisited & undefined);
    }
    /**
     * A function that walks a node array using the given visitor, returning an array whose contents satisfy the test.
     *
     * - If the input node array is undefined, the output is undefined.
     * - If the visitor can return undefined, the node it visits in the array will be reused.
     * - If the output node array is not undefined, then its contents will satisfy the test.
     * - In order to obtain a return type that is more specific than `NodeArray<Node>`, a test
     *   function _must_ be provided, and that function must be a type predicate.
     *
     * For the canonical implementation of this type, @see {visitNodes}.
     */
    interface NodesVisitor {
        <TIn extends Node, TInArray extends NodeArray<TIn> | undefined, TOut extends Node>(nodes: TInArray, visitor: Visitor<TIn, Node | undefined>, test: (node: Node) => node is TOut, start?: number, count?: number): NodeArray<TOut> | (TInArray & undefined);
        <TIn extends Node, TInArray extends NodeArray<TIn> | undefined>(nodes: TInArray, visitor: Visitor<TIn, Node | undefined>, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<Node> | (TInArray & undefined);
    }
    type VisitResult<T extends Node | undefined> = T | readonly Node[];
    interface Printer {
        /**
         * Print a node and its subtree as-is, without any emit transformations.
         * @param hint A value indicating the purpose of a node. This is primarily used to
         * distinguish between an `Identifier` used in an expression position, versus an
         * `Identifier` used as an `IdentifierName` as part of a declaration. For most nodes you
         * should just pass `Unspecified`.
         * @param node The node to print. The node and its subtree are printed as-is, without any
         * emit transformations.
         * @param sourceFile A source file that provides context for the node. The source text of
         * the file is used to emit the original source content for literals and identifiers, while
         * the identifiers of the source file are used when generating unique names to avoid
         * collisions.
         */
        printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string;
        /**
         * Prints a list of nodes using the given format flags
         */
        printList<T extends Node>(format: ListFormat, list: NodeArray<T>, sourceFile: SourceFile): string;
        /**
         * Prints a source file as-is, without any emit transformations.
         */
        printFile(sourceFile: SourceFile): string;
        /**
         * Prints a bundle of source files as-is, without any emit transformations.
         */
        printBundle(bundle: Bundle): string;
    }
    interface PrintHandlers {
        /**
         * A hook used by the Printer when generating unique names to avoid collisions with
         * globally defined names that exist outside of the current source file.
         */
        hasGlobalName?(name: string): boolean;
        /**
         * A hook used by the Printer to provide notifications prior to emitting a node. A
         * compatible implementation **must** invoke `emitCallback` with the provided `hint` and
         * `node` values.
         * @param hint A hint indicating the intended purpose of the node.
         * @param node The node to emit.
         * @param emitCallback A callback that, when invoked, will emit the node.
         * @example
         * ```ts
         * var printer = createPrinter(printerOptions, {
         *   onEmitNode(hint, node, emitCallback) {
         *     // set up or track state prior to emitting the node...
         *     emitCallback(hint, node);
         *     // restore state after emitting the node...
         *   }
         * });
         * ```
         */
        onEmitNode?(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        /**
         * A hook used to check if an emit notification is required for a node.
         * @param node The node to emit.
         */
        isEmitNotificationEnabled?(node: Node): boolean;
        /**
         * A hook used by the Printer to perform just-in-time substitution of a node. This is
         * primarily used by node transformations that need to substitute one node for another,
         * such as replacing `myExportedVar` with `exports.myExportedVar`.
         * @param hint A hint indicating the intended purpose of the node.
         * @param node The node to emit.
         * @example
         * ```ts
         * var printer = createPrinter(printerOptions, {
         *   substituteNode(hint, node) {
         *     // perform substitution if necessary...
         *     return node;
         *   }
         * });
         * ```
         */
        substituteNode?(hint: EmitHint, node: Node): Node;
    }
    interface PrinterOptions {
        removeComments?: boolean;
        newLine?: NewLineKind;
        omitTrailingSemicolon?: boolean;
        noEmitHelpers?: boolean;
    }
    interface GetEffectiveTypeRootsHost {
        getCurrentDirectory?(): string;
    }
    interface TextSpan {
        start: number;
        length: number;
    }
    interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }
    interface SyntaxList extends Node {
        kind: SyntaxKind.SyntaxList;
    }
    enum ListFormat {
        None = 0,
        SingleLine = 0,
        MultiLine = 1,
        PreserveLines = 2,
        LinesMask = 3,
        NotDelimited = 0,
        BarDelimited = 4,
        AmpersandDelimited = 8,
        CommaDelimited = 16,
        AsteriskDelimited = 32,
        DelimitersMask = 60,
        AllowTrailingComma = 64,
        Indented = 128,
        SpaceBetweenBraces = 256,
        SpaceBetweenSiblings = 512,
        Braces = 1024,
        Parenthesis = 2048,
        AngleBrackets = 4096,
        SquareBrackets = 8192,
        BracketsMask = 15360,
        OptionalIfUndefined = 16384,
        OptionalIfEmpty = 32768,
        Optional = 49152,
        PreferNewLine = 65536,
        NoTrailingNewLine = 131072,
        NoInterveningComments = 262144,
        NoSpaceIfEmpty = 524288,
        SingleElement = 1048576,
        SpaceAfterList = 2097152,
        Modifiers = 2359808,
        HeritageClauses = 512,
        SingleLineTypeLiteralMembers = 768,
        MultiLineTypeLiteralMembers = 32897,
        SingleLineTupleTypeElements = 528,
        MultiLineTupleTypeElements = 657,
        UnionTypeConstituents = 516,
        IntersectionTypeConstituents = 520,
        ObjectBindingPatternElements = 525136,
        ArrayBindingPatternElements = 524880,
        ObjectLiteralExpressionProperties = 526226,
        ImportAttributes = 526226,
        /** @deprecated */ ImportClauseEntries = 526226,
        ArrayLiteralExpressionElements = 8914,
        CommaListElements = 528,
        CallExpressionArguments = 2576,
        NewExpressionArguments = 18960,
        TemplateExpressionSpans = 262144,
        SingleLineBlockStatements = 768,
        MultiLineBlockStatements = 129,
        VariableDeclarationList = 528,
        SingleLineFunctionBodyStatements = 768,
        MultiLineFunctionBodyStatements = 1,
        ClassHeritageClauses = 0,
        ClassMembers = 129,
        InterfaceMembers = 129,
        EnumMembers = 145,
        CaseBlockClauses = 129,
        NamedImportsOrExportsElements = 525136,
        JsxElementOrFragmentChildren = 262144,
        JsxElementAttributes = 262656,
        CaseOrDefaultClauseStatements = 163969,
        HeritageClauseTypes = 528,
        SourceFileStatements = 131073,
        Decorators = 2146305,
        TypeArguments = 53776,
        TypeParameters = 53776,
        Parameters = 2576,
        IndexSignatureParameters = 8848,
        JSDocComment = 33,
    }
    enum JSDocParsingMode {
        /**
         * Always parse JSDoc comments and include them in the AST.
         *
         * This is the default if no mode is provided.
         */
        ParseAll = 0,
        /**
         * Never parse JSDoc comments, mo matter the file type.
         */
        ParseNone = 1,
        /**
         * Parse only JSDoc comments which are needed to provide correct type errors.
         *
         * This will always parse JSDoc in non-TS files, but only parse JSDoc comments
         * containing `@see` and `@link` in TS files.
         */
        ParseForTypeErrors = 2,
        /**
         * Parse only JSDoc comments which are needed to provide correct type info.
         *
         * This will always parse JSDoc in non-TS files, but never in TS files.
         *
         * Note: Do not use this mode if you require accurate type errors; use {@link ParseForTypeErrors} instead.
         */
        ParseForTypeInfo = 3,
    }
    interface UserPreferences {
        readonly disableSuggestions?: boolean;
        readonly quotePreference?: "auto" | "double" | "single";
        /**
         * If enabled, TypeScript will search through all external modules' exports and add them to the completions list.
         * This affects lone identifier completions but not completions on the right hand side of `obj.`.
         */
        readonly includeCompletionsForModuleExports?: boolean;
        /**
         * Enables auto-import-style completions on partially-typed import statements. E.g., allows
         * `import write|` to be completed to `import { writeFile } from "fs"`.
         */
        readonly includeCompletionsForImportStatements?: boolean;
        /**
         * Allows completions to be formatted with snippet text, indicated by `CompletionItem["isSnippet"]`.
         */
        readonly includeCompletionsWithSnippetText?: boolean;
        /**
         * Unless this option is `false`, or `includeCompletionsWithInsertText` is not enabled,
         * member completion lists triggered with `.` will include entries on potentially-null and potentially-undefined
         * values, with insertion text to replace preceding `.` tokens with `?.`.
         */
        readonly includeAutomaticOptionalChainCompletions?: boolean;
        /**
         * If enabled, the completion list will include completions with invalid identifier names.
         * For those entries, The `insertText` and `replacementSpan` properties will be set to change from `.x` property access to `["x"]`.
         */
        readonly includeCompletionsWithInsertText?: boolean;
        /**
         * If enabled, completions for class members (e.g. methods and properties) will include
         * a whole declaration for the member.
         * E.g., `class A { f| }` could be completed to `class A { foo(): number {} }`, instead of
         * `class A { foo }`.
         */
        readonly includeCompletionsWithClassMemberSnippets?: boolean;
        /**
         * If enabled, object literal methods will have a method declaration completion entry in addition
         * to the regular completion entry containing just the method name.
         * E.g., `const objectLiteral: T = { f| }` could be completed to `const objectLiteral: T = { foo(): void {} }`,
         * in addition to `const objectLiteral: T = { foo }`.
         */
        readonly includeCompletionsWithObjectLiteralMethodSnippets?: boolean;
        /**
         * Indicates whether {@link CompletionEntry.labelDetails completion entry label details} are supported.
         * If not, contents of `labelDetails` may be included in the {@link CompletionEntry.name} property.
         */
        readonly useLabelDetailsInCompletionEntries?: boolean;
        readonly allowIncompleteCompletions?: boolean;
        readonly importModuleSpecifierPreference?: "shortest" | "project-relative" | "relative" | "non-relative";
        /** Determines whether we import `foo/index.ts` as "foo", "foo/index", or "foo/index.js" */
        readonly importModuleSpecifierEnding?: "auto" | "minimal" | "index" | "js";
        readonly allowTextChangesInNewFiles?: boolean;
        readonly providePrefixAndSuffixTextForRename?: boolean;
        readonly includePackageJsonAutoImports?: "auto" | "on" | "off";
        readonly provideRefactorNotApplicableReason?: boolean;
        readonly jsxAttributeCompletionStyle?: "auto" | "braces" | "none";
        readonly includeInlayParameterNameHints?: "none" | "literals" | "all";
        readonly includeInlayParameterNameHintsWhenArgumentMatchesName?: boolean;
        readonly includeInlayFunctionParameterTypeHints?: boolean;
        readonly includeInlayVariableTypeHints?: boolean;
        readonly includeInlayVariableTypeHintsWhenTypeMatchesName?: boolean;
        readonly includeInlayPropertyDeclarationTypeHints?: boolean;
        readonly includeInlayFunctionLikeReturnTypeHints?: boolean;
        readonly includeInlayEnumMemberValueHints?: boolean;
        readonly interactiveInlayHints?: boolean;
        readonly allowRenameOfImportPath?: boolean;
        readonly autoImportFileExcludePatterns?: string[];
        readonly autoImportSpecifierExcludeRegexes?: string[];
        readonly preferTypeOnlyAutoImports?: boolean;
        /**
         * Indicates whether imports should be organized in a case-insensitive manner.
         */
        readonly organizeImportsIgnoreCase?: "auto" | boolean;
        /**
         * Indicates whether imports should be organized via an "ordinal" (binary) comparison using the numeric value
         * of their code points, or via "unicode" collation (via the
         * [Unicode Collation Algorithm](https://unicode.org/reports/tr10/#Scope)) using rules associated with the locale
         * specified in {@link organizeImportsCollationLocale}.
         *
         * Default: `"ordinal"`.
         */
        readonly organizeImportsCollation?: "ordinal" | "unicode";
        /**
         * Indicates the locale to use for "unicode" collation. If not specified, the locale `"en"` is used as an invariant
         * for the sake of consistent sorting. Use `"auto"` to use the detected UI locale.
         *
         * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`.
         *
         * Default: `"en"`
         */
        readonly organizeImportsLocale?: string;
        /**
         * Indicates whether numeric collation should be used for digit sequences in strings. When `true`, will collate
         * strings such that `a1z < a2z < a100z`. When `false`, will collate strings such that `a1z < a100z < a2z`.
         *
         * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`.
         *
         * Default: `false`
         */
        readonly organizeImportsNumericCollation?: boolean;
        /**
         * Indicates whether accents and other diacritic marks are considered unequal for the purpose of collation. When
         * `true`, characters with accents and other diacritics will be collated in the order defined by the locale specified
         * in {@link organizeImportsCollationLocale}.
         *
         * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`.
         *
         * Default: `true`
         */
        readonly organizeImportsAccentCollation?: boolean;
        /**
         * Indicates whether upper case or lower case should sort first. When `false`, the default order for the locale
         * specified in {@link organizeImportsCollationLocale} is used.
         *
         * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`. This preference is also
         * ignored if we are using case-insensitive sorting, which occurs when {@link organizeImportsIgnoreCase} is `true`,
         * or if {@link organizeImportsIgnoreCase} is `"auto"` and the auto-detected case sensitivity is determined to be
         * case-insensitive.
         *
         * Default: `false`
         */
        readonly organizeImportsCaseFirst?: "upper" | "lower" | false;
        /**
         * Indicates where named type-only imports should sort. "inline" sorts named imports without regard to if the import is
         * type-only.
         *
         * Default: `last`
         */
        readonly organizeImportsTypeOrder?: OrganizeImportsTypeOrder;
        /**
         * Indicates whether to exclude standard library and node_modules file symbols from navTo results.
         */
        readonly excludeLibrarySymbolsInNavTo?: boolean;
        readonly lazyConfiguredProjectsFromExternalProject?: boolean;
        readonly displayPartsForJSDoc?: boolean;
        readonly generateReturnInDocTemplate?: boolean;
        readonly disableLineTextInReferences?: boolean;
        /**
         * A positive integer indicating the maximum length of a hover text before it is truncated.
         *
         * Default: `500`
         */
        readonly maximumHoverLength?: number;
    }
    type OrganizeImportsTypeOrder = "last" | "inline" | "first";
    /** Represents a bigint literal value without requiring bigint support */
    interface PseudoBigInt {
        negative: boolean;
        base10Value: string;
    }
    enum FileWatcherEventKind {
        Created = 0,
        Changed = 1,
        Deleted = 2,
    }
    type FileWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind, modifiedTime?: Date) => void;
    type DirectoryWatcherCallback = (fileName: string) => void;
    type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex";
    interface System {
        args: string[];
        newLine: string;
        useCaseSensitiveFileNames: boolean;
        write(s: string): void;
        writeOutputIsTTY?(): boolean;
        getWidthOfTerminal?(): number;
        readFile(path: string, encoding?: string): string | undefined;
        getFileSize?(path: string): number;
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void;
        /**
         * @pollingInterval - this parameter is used in polling-based watchers and ignored in watchers that
         * use native OS file watching
         */
        watchFile?(path: string, callback: FileWatcherCallback, pollingInterval?: number, options?: WatchOptions): FileWatcher;
        watchDirectory?(path: string, callback: DirectoryWatcherCallback, recursive?: boolean, options?: WatchOptions): FileWatcher;
        resolvePath(path: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        createDirectory(path: string): void;
        getExecutingFilePath(): string;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        getModifiedTime?(path: string): Date | undefined;
        setModifiedTime?(path: string, time: Date): void;
        deleteFile?(path: string): void;
        /**
         * A good implementation is node.js' `crypto.createHash`. (https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm)
         */
        createHash?(data: string): string;
        /** This must be cryptographically secure. Only implement this method using `crypto.createHash("sha256")`. */
        createSHA256Hash?(data: string): string;
        getMemoryUsage?(): number;
        exit(exitCode?: number): void;
        realpath?(path: string): string;
        setTimeout?(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
        clearTimeout?(timeoutId: any): void;
        clearScreen?(): void;
        base64decode?(input: string): string;
        base64encode?(input: string): string;
    }
    interface FileWatcher {
        close(): void;
    }
    let sys: System;
    function tokenToString(t: SyntaxKind): string | undefined;
    function getPositionOfLineAndCharacter(sourceFile: SourceFileLike, line: number, character: number): number;
    function getLineAndCharacterOfPosition(sourceFile: SourceFileLike, position: number): LineAndCharacter;
    function isWhiteSpaceLike(ch: number): boolean;
    /** Does not include line breaks. For that, see isWhiteSpaceLike. */
    function isWhiteSpaceSingleLine(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function couldStartTrivia(text: string, pos: number): boolean;
    function forEachLeadingCommentRange<U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean) => U): U | undefined;
    function forEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state: T): U | undefined;
    function forEachTrailingCommentRange<U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean) => U): U | undefined;
    function forEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state: T): U | undefined;
    function reduceEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state: T, initial: U): U | undefined;
    function reduceEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state: T, initial: U): U | undefined;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[] | undefined;
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[] | undefined;
    /** Optionally, get the shebang */
    function getShebang(text: string): string | undefined;
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget | undefined): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget | undefined, identifierVariant?: LanguageVariant): boolean;
    function createScanner(languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant, textInitial?: string, onError?: ErrorCallback, start?: number, length?: number): Scanner;
    type ErrorCallback = (message: DiagnosticMessage, length: number, arg0?: any) => void;
    interface Scanner {
        /** @deprecated use {@link getTokenFullStart} */
        getStartPos(): number;
        getToken(): SyntaxKind;
        getTokenFullStart(): number;
        getTokenStart(): number;
        getTokenEnd(): number;
        /** @deprecated use {@link getTokenEnd} */
        getTextPos(): number;
        /** @deprecated use {@link getTokenStart} */
        getTokenPos(): number;
        getTokenText(): string;
        getTokenValue(): string;
        hasUnicodeEscape(): boolean;
        hasExtendedUnicodeEscape(): boolean;
        hasPrecedingLineBreak(): boolean;
        isIdentifier(): boolean;
        isReservedWord(): boolean;
        isUnterminated(): boolean;
        reScanGreaterToken(): SyntaxKind;
        reScanSlashToken(): SyntaxKind;
        reScanAsteriskEqualsToken(): SyntaxKind;
        reScanTemplateToken(isTaggedTemplate: boolean): SyntaxKind;
        /** @deprecated use {@link reScanTemplateToken}(false) */
        reScanTemplateHeadOrNoSubstitutionTemplate(): SyntaxKind;
        scanJsxIdentifier(): SyntaxKind;
        scanJsxAttributeValue(): SyntaxKind;
        reScanJsxAttributeValue(): SyntaxKind;
        reScanJsxToken(allowMultilineJsxText?: boolean): JsxTokenSyntaxKind;
        reScanLessThanToken(): SyntaxKind;
        reScanHashToken(): SyntaxKind;
        reScanQuestionToken(): SyntaxKind;
        reScanInvalidIdentifier(): SyntaxKind;
        scanJsxToken(): JsxTokenSyntaxKind;
        scanJsDocToken(): JSDocSyntaxKind;
        scan(): SyntaxKind;
        getText(): string;
        setText(text: string | undefined, start?: number, length?: number): void;
        setOnError(onError: ErrorCallback | undefined): void;
        setScriptTarget(scriptTarget: ScriptTarget): void;
        setLanguageVariant(variant: LanguageVariant): void;
        setScriptKind(scriptKind: ScriptKind): void;
        setJSDocParsingMode(kind: JSDocParsingMode): void;
        /** @deprecated use {@link resetTokenState} */
        setTextPos(textPos: number): void;
        resetTokenState(pos: number): void;
        lookAhead<T>(callback: () => T): T;
        scanRange<T>(start: number, length: number, callback: () => T): T;
        tryScan<T>(callback: () => T): T;
    }
    function isExternalModuleNameRelative(moduleName: string): boolean;
    function sortAndDeduplicateDiagnostics<T extends Diagnostic>(diagnostics: readonly T[]): SortedReadonlyArray<T>;
    function getDefaultLibFileName(options: CompilerOptions): string;
    function textSpanEnd(span: TextSpan): number;
    function textSpanIsEmpty(span: TextSpan): boolean;
    function textSpanContainsPosition(span: TextSpan, position: number): boolean;
    function textSpanContainsTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlapsWith(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlap(span1: TextSpan, span2: TextSpan): TextSpan | undefined;
    function textSpanIntersectsWithTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanIntersectsWith(span: TextSpan, start: number, length: number): boolean;
    function decodedTextSpanIntersectsWith(start1: number, length1: number, start2: number, length2: number): boolean;
    function textSpanIntersectsWithPosition(span: TextSpan, position: number): boolean;
    function textSpanIntersection(span1: TextSpan, span2: TextSpan): TextSpan | undefined;
    function createTextSpan(start: number, length: number): TextSpan;
    function createTextSpanFromBounds(start: number, end: number): TextSpan;
    function textChangeRangeNewSpan(range: TextChangeRange): TextSpan;
    function textChangeRangeIsUnchanged(range: TextChangeRange): boolean;
    function createTextChangeRange(span: TextSpan, newLength: number): TextChangeRange;
    /**
     * Called to merge all the changes that occurred across several versions of a script snapshot
     * into a single change.  i.e. if a user keeps making successive edits to a script we will
     * have a text change from V1 to V2, V2 to V3, ..., Vn.
     *
     * This function will then merge those changes into a single change range valid between V1 and
     * Vn.
     */
    function collapseTextChangeRangesAcrossMultipleVersions(changes: readonly TextChangeRange[]): TextChangeRange;
    function getTypeParameterOwner(d: Declaration): Declaration | undefined;
    function isParameterPropertyDeclaration(node: Node, parent: Node): node is ParameterPropertyDeclaration;
    function isEmptyBindingPattern(node: BindingName): node is BindingPattern;
    function isEmptyBindingElement(node: BindingElement | ArrayBindingElement): boolean;
    function walkUpBindingElementsAndPatterns(binding: BindingElement): VariableDeclaration | ParameterDeclaration;
    function getCombinedModifierFlags(node: Declaration): ModifierFlags;
    function getCombinedNodeFlags(node: Node): NodeFlags;
    /**
     * Checks to see if the locale is in the appropriate format,
     * and if it is, attempts to set the appropriate language.
     */
    function validateLocaleAndSetLanguage(locale: string, sys: {
        getExecutingFilePath(): string;
        resolvePath(path: string): string;
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
    }, errors?: Diagnostic[]): void;
    function getOriginalNode(node: Node): Node;
    function getOriginalNode<T extends Node>(node: Node, nodeTest: (node: Node) => node is T): T;
    function getOriginalNode(node: Node | undefined): Node | undefined;
    function getOriginalNode<T extends Node>(node: Node | undefined, nodeTest: (node: Node) => node is T): T | undefined;
    /**
     * Iterates through the parent chain of a node and performs the callback on each parent until the callback
     * returns a truthy value, then returns that value.
     * If no such value is found, it applies the callback until the parent pointer is undefined or the callback returns "quit"
     * At that point findAncestor returns undefined.
     */
    function findAncestor<T extends Node>(node: Node | undefined, callback: (element: Node) => element is T): T | undefined;
    function findAncestor(node: Node | undefined, callback: (element: Node) => boolean | "quit"): Node | undefined;
    /**
     * Gets a value indicating whether a node originated in the parse tree.
     *
     * @param node The node to test.
     */
    function isParseTreeNode(node: Node): boolean;
    /**
     * Gets the original parse tree node for a node.
     *
     * @param node The original node.
     * @returns The original parse tree node if found; otherwise, undefined.
     */
    function getParseTreeNode(node: Node | undefined): Node | undefined;
    /**
     * Gets the original parse tree node for a node.
     *
     * @param node The original node.
     * @param nodeTest A callback used to ensure the correct type of parse tree node is returned.
     * @returns The original parse tree node if found; otherwise, undefined.
     */
    function getParseTreeNode<T extends Node>(node: T | undefined, nodeTest?: (node: Node) => node is T): T | undefined;
    /** Add an extra underscore to identifiers that start with two underscores to avoid issues with magic names like '__proto__' */
    function escapeLeadingUnderscores(identifier: string): __String;
    /**
     * Remove extra underscore from escaped identifier text content.
     *
     * @param identifier The escaped identifier text.
     * @returns The unescaped identifier text.
     */
    function unescapeLeadingUnderscores(identifier: __String): string;
    function idText(identifierOrPrivateName: Identifier | PrivateIdentifier): string;
    /**
     * If the text of an Identifier matches a keyword (including contextual and TypeScript-specific keywords), returns the
     * SyntaxKind for the matching keyword.
     */
    function identifierToKeywordKind(node: Identifier): KeywordSyntaxKind | undefined;
    function symbolName(symbol: Symbol): string;
    function getNameOfJSDocTypedef(declaration: JSDocTypedefTag): Identifier | PrivateIdentifier | undefined;
    function getNameOfDeclaration(declaration: Declaration | Expression | undefined): DeclarationName | undefined;
    function getDecorators(node: HasDecorators): readonly Decorator[] | undefined;
    function getModifiers(node: HasModifiers): readonly Modifier[] | undefined;
    /**
     * Gets the JSDoc parameter tags for the node if present.
     *
     * @remarks Returns any JSDoc param tag whose name matches the provided
     * parameter, whether a param tag on a containing function
     * expression, or a param tag on a variable declaration whose
     * initializer is the containing function. The tags closest to the
     * node are returned first, so in the previous example, the param
     * tag on the containing function expression would be first.
     *
     * For binding patterns, parameter tags are matched by position.
     */
    function getJSDocParameterTags(param: ParameterDeclaration): readonly JSDocParameterTag[];
    /**
     * Gets the JSDoc type parameter tags for the node if present.
     *
     * @remarks Returns any JSDoc template tag whose names match the provided
     * parameter, whether a template tag on a containing function
     * expression, or a template tag on a variable declaration whose
     * initializer is the containing function. The tags closest to the
     * node are returned first, so in the previous example, the template
     * tag on the containing function expression would be first.
     */
    function getJSDocTypeParameterTags(param: TypeParameterDeclaration): readonly JSDocTemplateTag[];
    /**
     * Return true if the node has JSDoc parameter tags.
     *
     * @remarks Includes parameter tags that are not directly on the node,
     * for example on a variable declaration whose initializer is a function expression.
     */
    function hasJSDocParameterTags(node: FunctionLikeDeclaration | SignatureDeclaration): boolean;
    /** Gets the JSDoc augments tag for the node if present */
    function getJSDocAugmentsTag(node: Node): JSDocAugmentsTag | undefined;
    /** Gets the JSDoc implements tags for the node if present */
    function getJSDocImplementsTags(node: Node): readonly JSDocImplementsTag[];
    /** Gets the JSDoc class tag for the node if present */
    function getJSDocClassTag(node: Node): JSDocClassTag | undefined;
    /** Gets the JSDoc public tag for the node if present */
    function getJSDocPublicTag(node: Node): JSDocPublicTag | undefined;
    /** Gets the JSDoc private tag for the node if present */
    function getJSDocPrivateTag(node: Node): JSDocPrivateTag | undefined;
    /** Gets the JSDoc protected tag for the node if present */
    function getJSDocProtectedTag(node: Node): JSDocProtectedTag | undefined;
    /** Gets the JSDoc protected tag for the node if present */
    function getJSDocReadonlyTag(node: Node): JSDocReadonlyTag | undefined;
    function getJSDocOverrideTagNoCache(node: Node): JSDocOverrideTag | undefined;
    /** Gets the JSDoc deprecated tag for the node if present */
    function getJSDocDeprecatedTag(node: Node): JSDocDeprecatedTag | undefined;
    /** Gets the JSDoc enum tag for the node if present */
    function getJSDocEnumTag(node: Node): JSDocEnumTag | undefined;
    /** Gets the JSDoc this tag for the node if present */
    function getJSDocThisTag(node: Node): JSDocThisTag | undefined;
    /** Gets the JSDoc return tag for the node if present */
    function getJSDocReturnTag(node: Node): JSDocReturnTag | undefined;
    /** Gets the JSDoc template tag for the node if present */
    function getJSDocTemplateTag(node: Node): JSDocTemplateTag | undefined;
    function getJSDocSatisfiesTag(node: Node): JSDocSatisfiesTag | undefined;
    /** Gets the JSDoc type tag for the node if present and valid */
    function getJSDocTypeTag(node: Node): JSDocTypeTag | undefined;
    /**
     * Gets the type node for the node if provided via JSDoc.
     *
     * @remarks The search includes any JSDoc param tag that relates
     * to the provided parameter, for example a type tag on the
     * parameter itself, or a param tag on a containing function
     * expression, or a param tag on a variable declaration whose
     * initializer is the containing function. The tags closest to the
     * node are examined first, so in the previous example, the type
     * tag directly on the node would be returned.
     */
    function getJSDocType(node: Node): TypeNode | undefined;
    /**
     * Gets the return type node for the node if provided via JSDoc return tag or type tag.
     *
     * @remarks `getJSDocReturnTag` just gets the whole JSDoc tag. This function
     * gets the type from inside the braces, after the fat arrow, etc.
     */
    function getJSDocReturnType(node: Node): TypeNode | undefined;
    /** Get all JSDoc tags related to a node, including those on parent nodes. */
    function getJSDocTags(node: Node): readonly JSDocTag[];
    /** Gets all JSDoc tags that match a specified predicate */
    function getAllJSDocTags<T extends JSDocTag>(node: Node, predicate: (tag: JSDocTag) => tag is T): readonly T[];
    /** Gets all JSDoc tags of a specified kind */
    function getAllJSDocTagsOfKind(node: Node, kind: SyntaxKind): readonly JSDocTag[];
    /** Gets the text of a jsdoc comment, flattening links to their text. */
    function getTextOfJSDocComment(comment?: string | NodeArray<JSDocComment>): string | undefined;
    /**
     * Gets the effective type parameters. If the node was parsed in a
     * JavaScript file, gets the type parameters from the `@template` tag from JSDoc.
     *
     * This does *not* return type parameters from a jsdoc reference to a generic type, eg
     *
     * type Id = <T>(x: T) => T
     * /** @type {Id} /
     * function id(x) { return x }
     */
    function getEffectiveTypeParameterDeclarations(node: DeclarationWithTypeParameters): readonly TypeParameterDeclaration[];
    function getEffectiveConstraintOfTypeParameter(node: TypeParameterDeclaration): TypeNode | undefined;
    function isMemberName(node: Node): node is MemberName;
    function isPropertyAccessChain(node: Node): node is PropertyAccessChain;
    function isElementAccessChain(node: Node): node is ElementAccessChain;
    function isCallChain(node: Node): node is CallChain;
    function isOptionalChain(node: Node): node is PropertyAccessChain | ElementAccessChain | CallChain | NonNullChain;
    function isNullishCoalesce(node: Node): boolean;
    function isConstTypeReference(node: Node): boolean;
    function skipPartiallyEmittedExpressions(node: Expression): Expression;
    function skipPartiallyEmittedExpressions(node: Node): Node;
    function isNonNullChain(node: Node): node is NonNullChain;
    function isBreakOrContinueStatement(node: Node): node is BreakOrContinueStatement;
    function isNamedExportBindings(node: Node): node is NamedExportBindings;
    function isJSDocPropertyLikeTag(node: Node): node is JSDocPropertyLikeTag;
    /**
     * True if kind is of some token syntax kind.
     * For example, this is true for an IfKeyword but not for an IfStatement.
     * Literals are considered tokens, except TemplateLiteral, but does include TemplateHead/Middle/Tail.
     */
    function isTokenKind(kind: SyntaxKind): boolean;
    /**
     * True if node is of some token syntax kind.
     * For example, this is true for an IfKeyword but not for an IfStatement.
     * Literals are considered tokens, except TemplateLiteral, but does include TemplateHead/Middle/Tail.
     */
    function isToken(n: Node): boolean;
    function isLiteralExpression(node: Node): node is LiteralExpression;
    function isTemplateLiteralToken(node: Node): node is TemplateLiteralToken;
    function isTemplateMiddleOrTemplateTail(node: Node): node is TemplateMiddle | TemplateTail;
    function isImportOrExportSpecifier(node: Node): node is ImportSpecifier | ExportSpecifier;
    function isTypeOnlyImportDeclaration(node: Node): node is TypeOnlyImportDeclaration;
    function isTypeOnlyExportDeclaration(node: Node): node is TypeOnlyExportDeclaration;
    function isTypeOnlyImportOrExportDeclaration(node: Node): node is TypeOnlyAliasDeclaration;
    function isPartOfTypeOnlyImportOrExportDeclaration(node: Node): boolean;
    function isStringTextContainingNode(node: Node): node is StringLiteral | TemplateLiteralToken;
    function isImportAttributeName(node: Node): node is ImportAttributeName;
    function isModifier(node: Node): node is Modifier;
    function isEntityName(node: Node): node is EntityName;
    function isPropertyName(node: Node): node is PropertyName;
    function isBindingName(node: Node): node is BindingName;
    function isFunctionLike(node: Node | undefined): node is SignatureDeclaration;
    function isClassElement(node: Node): node is ClassElement;
    function isClassLike(node: Node): node is ClassLikeDeclaration;
    function isAccessor(node: Node): node is AccessorDeclaration;
    function isAutoAccessorPropertyDeclaration(node: Node): node is AutoAccessorPropertyDeclaration;
    function isModifierLike(node: Node): node is ModifierLike;
    function isTypeElement(node: Node): node is TypeElement;
    function isClassOrTypeElement(node: Node): node is ClassElement | TypeElement;
    function isObjectLiteralElementLike(node: Node): node is ObjectLiteralElementLike;
    /**
     * Node test that determines whether a node is a valid type node.
     * This differs from the `isPartOfTypeNode` function which determines whether a node is *part*
     * of a TypeNode.
     */
    function isTypeNode(node: Node): node is TypeNode;
    function isFunctionOrConstructorTypeNode(node: Node): node is FunctionTypeNode | ConstructorTypeNode;
    function isArrayBindingElement(node: Node): node is ArrayBindingElement;
    function isPropertyAccessOrQualifiedName(node: Node): node is PropertyAccessExpression | QualifiedName;
    function isCallLikeExpression(node: Node): node is CallLikeExpression;
    function isCallOrNewExpression(node: Node): node is CallExpression | NewExpression;
    function isTemplateLiteral(node: Node): node is TemplateLiteral;
    function isLeftHandSideExpression(node: Node): node is LeftHandSideExpression;
    function isLiteralTypeLiteral(node: Node): node is NullLiteral | BooleanLiteral | LiteralExpression | PrefixUnaryExpression;
    /**
     * Determines whether a node is an expression based only on its kind.
     */
    function isExpression(node: Node): node is Expression;
    function isAssertionExpression(node: Node): node is AssertionExpression;
    function isIterationStatement(node: Node, lookInLabeledStatements: false): node is IterationStatement;
    function isIterationStatement(node: Node, lookInLabeledStatements: boolean): node is IterationStatement | LabeledStatement;
    function isConciseBody(node: Node): node is ConciseBody;
    function isForInitializer(node: Node): node is ForInitializer;
    function isModuleBody(node: Node): node is ModuleBody;
    function isNamedImportBindings(node: Node): node is NamedImportBindings;
    function isDeclarationStatement(node: Node): node is DeclarationStatement;
    function isStatement(node: Node): node is Statement;
    function isModuleReference(node: Node): node is ModuleReference;
    function isJsxTagNameExpression(node: Node): node is JsxTagNameExpression;
    function isJsxChild(node: Node): node is JsxChild;
    function isJsxAttributeLike(node: Node): node is JsxAttributeLike;
    function isStringLiteralOrJsxExpression(node: Node): node is StringLiteral | JsxExpression;
    function isJsxOpeningLikeElement(node: Node): node is JsxOpeningLikeElement;
    function isJsxCallLike(node: Node): node is JsxCallLike;
    function isCaseOrDefaultClause(node: Node): node is CaseOrDefaultClause;
    /** True if node is of a kind that may contain comment text. */
    function isJSDocCommentContainingNode(node: Node): boolean;
    function isSetAccessor(node: Node): node is SetAccessorDeclaration;
    function isGetAccessor(node: Node): node is GetAccessorDeclaration;
    /** True if has initializer node attached to it. */
    function hasOnlyExpressionInitializer(node: Node): node is HasExpressionInitializer;
    function isObjectLiteralElement(node: Node): node is ObjectLiteralElement;
    function isStringLiteralLike(node: Node | FileReference): node is StringLiteralLike;
    function isJSDocLinkLike(node: Node): node is JSDocLink | JSDocLinkCode | JSDocLinkPlain;
    function hasRestParameter(s: SignatureDeclaration | JSDocSignature): boolean;
    function isRestParameter(node: ParameterDeclaration | JSDocParameterTag): boolean;
    function isInternalDeclaration(node: Node, sourceFile?: SourceFile): boolean;
    const unchangedTextChangeRange: TextChangeRange;
    type ParameterPropertyDeclaration = ParameterDeclaration & {
        parent: ConstructorDeclaration;
        name: Identifier;
    };
    function isPartOfTypeNode(node: Node): boolean;
    /**
     * This function checks multiple locations for JSDoc comments that apply to a host node.
     * At each location, the whole comment may apply to the node, or only a specific tag in
     * the comment. In the first case, location adds the entire {@link JSDoc} object. In the
     * second case, it adds the applicable {@link JSDocTag}.
     *
     * For example, a JSDoc comment before a parameter adds the entire {@link JSDoc}. But a
     * `@param` tag on the parent function only adds the {@link JSDocTag} for the `@param`.
     *
     * ```ts
     * /** JSDoc will be returned for `a` *\/
     * const a = 0
     * /**
     *  * Entire JSDoc will be returned for `b`
     *  * @param c JSDocTag will be returned for `c`
     *  *\/
     * function b(/** JSDoc will be returned for `c` *\/ c) {}
     * ```
     */
    function getJSDocCommentsAndTags(hostNode: Node): readonly (JSDoc | JSDocTag)[];
    /**
     * Create an external source map source file reference
     */
    function createSourceMapSource(fileName: string, text: string, skipTrivia?: (pos: number) => number): SourceMapSource;
    function setOriginalNode<T extends Node>(node: T, original: Node | undefined): T;
    const factory: NodeFactory;
    /**
     * Clears any `EmitNode` entries from parse-tree nodes.
     * @param sourceFile A source file.
     */
    function disposeEmitNodes(sourceFile: SourceFile | undefined): void;
    /**
     * Sets flags that control emit behavior of a node.
     */
    function setEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags): T;
    /**
     * Gets a custom text range to use when emitting source maps.
     */
    function getSourceMapRange(node: Node): SourceMapRange;
    /**
     * Sets a custom text range to use when emitting source maps.
     */
    function setSourceMapRange<T extends Node>(node: T, range: SourceMapRange | undefined): T;
    /**
     * Gets the TextRange to use for source maps for a token of a node.
     */
    function getTokenSourceMapRange(node: Node, token: SyntaxKind): SourceMapRange | undefined;
    /**
     * Sets the TextRange to use for source maps for a token of a node.
     */
    function setTokenSourceMapRange<T extends Node>(node: T, token: SyntaxKind, range: SourceMapRange | undefined): T;
    /**
     * Gets a custom text range to use when emitting comments.
     */
    function getCommentRange(node: Node): TextRange;
    /**
     * Sets a custom text range to use when emitting comments.
     */
    function setCommentRange<T extends Node>(node: T, range: TextRange): T;
    function getSyntheticLeadingComments(node: Node): SynthesizedComment[] | undefined;
    function setSyntheticLeadingComments<T extends Node>(node: T, comments: SynthesizedComment[] | undefined): T;
    function addSyntheticLeadingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean): T;
    function getSyntheticTrailingComments(node: Node): SynthesizedComment[] | undefined;
    function setSyntheticTrailingComments<T extends Node>(node: T, comments: SynthesizedComment[] | undefined): T;
    function addSyntheticTrailingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean): T;
    function moveSyntheticComments<T extends Node>(node: T, original: Node): T;
    /**
     * Gets the constant value to emit for an expression representing an enum.
     */
    function getConstantValue(node: AccessExpression): string | number | undefined;
    /**
     * Sets the constant value to emit for an expression.
     */
    function setConstantValue(node: AccessExpression, value: string | number): AccessExpression;
    /**
     * Adds an EmitHelper to a node.
     */
    function addEmitHelper<T extends Node>(node: T, helper: EmitHelper): T;
    /**
     * Add EmitHelpers to a node.
     */
    function addEmitHelpers<T extends Node>(node: T, helpers: EmitHelper[] | undefined): T;
    /**
     * Removes an EmitHelper from a node.
     */
    function removeEmitHelper(node: Node, helper: EmitHelper): boolean;
    /**
     * Gets the EmitHelpers of a node.
     */
    function getEmitHelpers(node: Node): EmitHelper[] | undefined;
    /**
     * Moves matching emit helpers from a source node to a target node.
     */
    function moveEmitHelpers(source: Node, target: Node, predicate: (helper: EmitHelper) => boolean): void;
    function isNumericLiteral(node: Node): node is NumericLiteral;
    function isBigIntLiteral(node: Node): node is BigIntLiteral;
    function isStringLiteral(node: Node): node is StringLiteral;
    function isJsxText(node: Node): node is JsxText;
    function isRegularExpressionLiteral(node: Node): node is RegularExpressionLiteral;
    function isNoSubstitutionTemplateLiteral(node: Node): node is NoSubstitutionTemplateLiteral;
    function isTemplateHead(node: Node): node is TemplateHead;
    function isTemplateMiddle(node: Node): node is TemplateMiddle;
    function isTemplateTail(node: Node): node is TemplateTail;
    function isDotDotDotToken(node: Node): node is DotDotDotToken;
    function isPlusToken(node: Node): node is PlusToken;
    function isMinusToken(node: Node): node is MinusToken;
    function isAsteriskToken(node: Node): node is AsteriskToken;
    function isExclamationToken(node: Node): node is ExclamationToken;
    function isQuestionToken(node: Node): node is QuestionToken;
    function isColonToken(node: Node): node is ColonToken;
    function isQuestionDotToken(node: Node): node is QuestionDotToken;
    function isEqualsGreaterThanToken(node: Node): node is EqualsGreaterThanToken;
    function isIdentifier(node: Node): node is Identifier;
    function isPrivateIdentifier(node: Node): node is PrivateIdentifier;
    function isAssertsKeyword(node: Node): node is AssertsKeyword;
    function isAwaitKeyword(node: Node): node is AwaitKeyword;
    function isQualifiedName(node: Node): node is QualifiedName;
    function isComputedPropertyName(node: Node): node is ComputedPropertyName;
    function isTypeParameterDeclaration(node: Node): node is TypeParameterDeclaration;
    function isParameter(node: Node): node is ParameterDeclaration;
    function isDecorator(node: Node): node is Decorator;
    function isPropertySignature(node: Node): node is PropertySignature;
    function isPropertyDeclaration(node: Node): node is PropertyDeclaration;
    function isMethodSignature(node: Node): node is MethodSignature;
    function isMethodDeclaration(node: Node): node is MethodDeclaration;
    function isClassStaticBlockDeclaration(node: Node): node is ClassStaticBlockDeclaration;
    function isConstructorDeclaration(node: Node): node is ConstructorDeclaration;
    function isGetAccessorDeclaration(node: Node): node is GetAccessorDeclaration;
    function isSetAccessorDeclaration(node: Node): node is SetAccessorDeclaration;
    function isCallSignatureDeclaration(node: Node): node is CallSignatureDeclaration;
    function isConstructSignatureDeclaration(node: Node): node is ConstructSignatureDeclaration;
    function isIndexSignatureDeclaration(node: Node): node is IndexSignatureDeclaration;
    function isTypePredicateNode(node: Node): node is TypePredicateNode;
    function isTypeReferenceNode(node: Node): node is TypeReferenceNode;
    function isFunctionTypeNode(node: Node): node is FunctionTypeNode;
    function isConstructorTypeNode(node: Node): node is ConstructorTypeNode;
    function isTypeQueryNode(node: Node): node is TypeQueryNode;
    function isTypeLiteralNode(node: Node): node is TypeLiteralNode;
    function isArrayTypeNode(node: Node): node is ArrayTypeNode;
    function isTupleTypeNode(node: Node): node is TupleTypeNode;
    function isNamedTupleMember(node: Node): node is NamedTupleMember;
    function isOptionalTypeNode(node: Node): node is OptionalTypeNode;
    function isRestTypeNode(node: Node): node is RestTypeNode;
    function isUnionTypeNode(node: Node): node is UnionTypeNode;
    function isIntersectionTypeNode(node: Node): node is IntersectionTypeNode;
    function isConditionalTypeNode(node: Node): node is ConditionalTypeNode;
    function isInferTypeNode(node: Node): node is InferTypeNode;
    function isParenthesizedTypeNode(node: Node): node is ParenthesizedTypeNode;
    function isThisTypeNode(node: Node): node is ThisTypeNode;
    function isTypeOperatorNode(node: Node): node is TypeOperatorNode;
    function isIndexedAccessTypeNode(node: Node): node is IndexedAccessTypeNode;
    function isMappedTypeNode(node: Node): node is MappedTypeNode;
    function isLiteralTypeNode(node: Node): node is LiteralTypeNode;
    function isImportTypeNode(node: Node): node is ImportTypeNode;
    function isTemplateLiteralTypeSpan(node: Node): node is TemplateLiteralTypeSpan;
    function isTemplateLiteralTypeNode(node: Node): node is TemplateLiteralTypeNode;
    function isObjectBindingPattern(node: Node): node is ObjectBindingPattern;
    function isArrayBindingPattern(node: Node): node is ArrayBindingPattern;
    function isBindingElement(node: Node): node is BindingElement;
    function isArrayLiteralExpression(node: Node): node is ArrayLiteralExpression;
    function isObjectLiteralExpression(node: Node): node is ObjectLiteralExpression;
    function isPropertyAccessExpression(node: Node): node is PropertyAccessExpression;
    function isElementAccessExpression(node: Node): node is ElementAccessExpression;
    function isCallExpression(node: Node): node is CallExpression;
    function isNewExpression(node: Node): node is NewExpression;
    function isTaggedTemplateExpression(node: Node): node is TaggedTemplateExpression;
    function isTypeAssertionExpression(node: Node): node is TypeAssertion;
    function isParenthesizedExpression(node: Node): node is ParenthesizedExpression;
    function isFunctionExpression(node: Node): node is FunctionExpression;
    function isArrowFunction(node: Node): node is ArrowFunction;
    function isDeleteExpression(node: Node): node is DeleteExpression;
    function isTypeOfExpression(node: Node): node is TypeOfExpression;
    function isVoidExpression(node: Node): node is VoidExpression;
    function isAwaitExpression(node: Node): node is AwaitExpression;
    function isPrefixUnaryExpression(node: Node): node is PrefixUnaryExpression;
    function isPostfixUnaryExpression(node: Node): node is PostfixUnaryExpression;
    function isBinaryExpression(node: Node): node is BinaryExpression;
    function isConditionalExpression(node: Node): node is ConditionalExpression;
    function isTemplateExpression(node: Node): node is TemplateExpression;
    function isYieldExpression(node: Node): node is YieldExpression;
    function isSpreadElement(node: Node): node is SpreadElement;
    function isClassExpression(node: Node): node is ClassExpression;
    function isOmittedExpression(node: Node): node is OmittedExpression;
    function isExpressionWithTypeArguments(node: Node): node is ExpressionWithTypeArguments;
    function isAsExpression(node: Node): node is AsExpression;
    function isSatisfiesExpression(node: Node): node is SatisfiesExpression;
    function isNonNullExpression(node: Node): node is NonNullExpression;
    function isMetaProperty(node: Node): node is MetaProperty;
    function isSyntheticExpression(node: Node): node is SyntheticExpression;
    function isPartiallyEmittedExpression(node: Node): node is PartiallyEmittedExpression;
    function isCommaListExpression(node: Node): node is CommaListExpression;
    function isTemplateSpan(node: Node): node is TemplateSpan;
    function isSemicolonClassElement(node: Node): node is SemicolonClassElement;
    function isBlock(node: Node): node is Block;
    function isVariableStatement(node: Node): node is VariableStatement;
    function isEmptyStatement(node: Node): node is EmptyStatement;
    function isExpressionStatement(node: Node): node is ExpressionStatement;
    function isIfStatement(node: Node): node is IfStatement;
    function isDoStatement(node: Node): node is DoStatement;
    function isWhileStatement(node: Node): node is WhileStatement;
    function isForStatement(node: Node): node is ForStatement;
    function isForInStatement(node: Node): node is ForInStatement;
    function isForOfStatement(node: Node): node is ForOfStatement;
    function isContinueStatement(node: Node): node is ContinueStatement;
    function isBreakStatement(node: Node): node is BreakStatement;
    function isReturnStatement(node: Node): node is ReturnStatement;
    function isWithStatement(node: Node): node is WithStatement;
    function isSwitchStatement(node: Node): node is SwitchStatement;
    function isLabeledStatement(node: Node): node is LabeledStatement;
    function isThrowStatement(node: Node): node is ThrowStatement;
    function isTryStatement(node: Node): node is TryStatement;
    function isDebuggerStatement(node: Node): node is DebuggerStatement;
    function isVariableDeclaration(node: Node): node is VariableDeclaration;
    function isVariableDeclarationList(node: Node): node is VariableDeclarationList;
    function isFunctionDeclaration(node: Node): node is FunctionDeclaration;
    function isClassDeclaration(node: Node): node is ClassDeclaration;
    function isInterfaceDeclaration(node: Node): node is InterfaceDeclaration;
    function isTypeAliasDeclaration(node: Node): node is TypeAliasDeclaration;
    function isEnumDeclaration(node: Node): node is EnumDeclaration;
    function isModuleDeclaration(node: Node): node is ModuleDeclaration;
    function isModuleBlock(node: Node): node is ModuleBlock;
    function isCaseBlock(node: Node): node is CaseBlock;
    function isNamespaceExportDeclaration(node: Node): node is NamespaceExportDeclaration;
    function isImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isImportDeclaration(node: Node): node is ImportDeclaration;
    function isImportClause(node: Node): node is ImportClause;
    function isImportTypeAssertionContainer(node: Node): node is ImportTypeAssertionContainer;
    /** @deprecated */
    function isAssertClause(node: Node): node is AssertClause;
    /** @deprecated */
    function isAssertEntry(node: Node): node is AssertEntry;
    function isImportAttributes(node: Node): node is ImportAttributes;
    function isImportAttribute(node: Node): node is ImportAttribute;
    function isNamespaceImport(node: Node): node is NamespaceImport;
    function isNamespaceExport(node: Node): node is NamespaceExport;
    function isNamedImports(node: Node): node is NamedImports;
    function isImportSpecifier(node: Node): node is ImportSpecifier;
    function isExportAssignment(node: Node): node is ExportAssignment;
    function isExportDeclaration(node: Node): node is ExportDeclaration;
    function isNamedExports(node: Node): node is NamedExports;
    function isExportSpecifier(node: Node): node is ExportSpecifier;
    function isModuleExportName(node: Node): node is ModuleExportName;
    function isMissingDeclaration(node: Node): node is MissingDeclaration;
    function isNotEmittedStatement(node: Node): node is NotEmittedStatement;
    function isExternalModuleReference(node: Node): node is ExternalModuleReference;
    function isJsxElement(node: Node): node is JsxElement;
    function isJsxSelfClosingElement(node: Node): node is JsxSelfClosingElement;
    function isJsxOpeningElement(node: Node): node is JsxOpeningElement;
    function isJsxClosingElement(node: Node): node is JsxClosingElement;
    function isJsxFragment(node: Node): node is JsxFragment;
    function isJsxOpeningFragment(node: Node): node is JsxOpeningFragment;
    function isJsxClosingFragment(node: Node): node is JsxClosingFragment;
    function isJsxAttribute(node: Node): node is JsxAttribute;
    function isJsxAttributes(node: Node): node is JsxAttributes;
    function isJsxSpreadAttribute(node: Node): node is JsxSpreadAttribute;
    function isJsxExpression(node: Node): node is JsxExpression;
    function isJsxNamespacedName(node: Node): node is JsxNamespacedName;
    function isCaseClause(node: Node): node is CaseClause;
    function isDefaultClause(node: Node): node is DefaultClause;
    function isHeritageClause(node: Node): node is HeritageClause;
    function isCatchClause(node: Node): node is CatchClause;
    function isPropertyAssignment(node: Node): node is PropertyAssignment;
    function isShorthandPropertyAssignment(node: Node): node is ShorthandPropertyAssignment;
    function isSpreadAssignment(node: Node): node is SpreadAssignment;
    function isEnumMember(node: Node): node is EnumMember;
    function isSourceFile(node: Node): node is SourceFile;
    function isBundle(node: Node): node is Bundle;
    function isJSDocTypeExpression(node: Node): node is JSDocTypeExpression;
    function isJSDocNameReference(node: Node): node is JSDocNameReference;
    function isJSDocMemberName(node: Node): node is JSDocMemberName;
    function isJSDocLink(node: Node): node is JSDocLink;
    function isJSDocLinkCode(node: Node): node is JSDocLinkCode;
    function isJSDocLinkPlain(node: Node): node is JSDocLinkPlain;
    function isJSDocAllType(node: Node): node is JSDocAllType;
    function isJSDocUnknownType(node: Node): node is JSDocUnknownType;
    function isJSDocNullableType(node: Node): node is JSDocNullableType;
    function isJSDocNonNullableType(node: Node): node is JSDocNonNullableType;
    function isJSDocOptionalType(node: Node): node is JSDocOptionalType;
    function isJSDocFunctionType(node: Node): node is JSDocFunctionType;
    function isJSDocVariadicType(node: Node): node is JSDocVariadicType;
    function isJSDocNamepathType(node: Node): node is JSDocNamepathType;
    function isJSDoc(node: Node): node is JSDoc;
    function isJSDocTypeLiteral(node: Node): node is JSDocTypeLiteral;
    function isJSDocSignature(node: Node): node is JSDocSignature;
    function isJSDocAugmentsTag(node: Node): node is JSDocAugmentsTag;
    function isJSDocAuthorTag(node: Node): node is JSDocAuthorTag;
    function isJSDocClassTag(node: Node): node is JSDocClassTag;
    function isJSDocCallbackTag(node: Node): node is JSDocCallbackTag;
    function isJSDocPublicTag(node: Node): node is JSDocPublicTag;
    function isJSDocPrivateTag(node: Node): node is JSDocPrivateTag;
    function isJSDocProtectedTag(node: Node): node is JSDocProtectedTag;
    function isJSDocReadonlyTag(node: Node): node is JSDocReadonlyTag;
    function isJSDocOverrideTag(node: Node): node is JSDocOverrideTag;
    function isJSDocOverloadTag(node: Node): node is JSDocOverloadTag;
    function isJSDocDeprecatedTag(node: Node): node is JSDocDeprecatedTag;
    function isJSDocSeeTag(node: Node): node is JSDocSeeTag;
    function isJSDocEnumTag(node: Node): node is JSDocEnumTag;
    function isJSDocParameterTag(node: Node): node is JSDocParameterTag;
    function isJSDocReturnTag(node: Node): node is JSDocReturnTag;
    function isJSDocThisTag(node: Node): node is JSDocThisTag;
    function isJSDocTypeTag(node: Node): node is JSDocTypeTag;
    function isJSDocTemplateTag(node: Node): node is JSDocTemplateTag;
    function isJSDocTypedefTag(node: Node): node is JSDocTypedefTag;
    function isJSDocUnknownTag(node: Node): node is JSDocUnknownTag;
    function isJSDocPropertyTag(node: Node): node is JSDocPropertyTag;
    function isJSDocImplementsTag(node: Node): node is JSDocImplementsTag;
    function isJSDocSatisfiesTag(node: Node): node is JSDocSatisfiesTag;
    function isJSDocThrowsTag(node: Node): node is JSDocThrowsTag;
    function isJSDocImportTag(node: Node): node is JSDocImportTag;
    function isQuestionOrExclamationToken(node: Node): node is QuestionToken | ExclamationToken;
    function isIdentifierOrThisTypeNode(node: Node): node is Identifier | ThisTypeNode;
    function isReadonlyKeywordOrPlusOrMinusToken(node: Node): node is ReadonlyKeyword | PlusToken | MinusToken;
    function isQuestionOrPlusOrMinusToken(node: Node): node is QuestionToken | PlusToken | MinusToken;
    function isModuleName(node: Node): node is ModuleName;
    function isBinaryOperatorToken(node: Node): node is BinaryOperatorToken;
    function setTextRange<T extends TextRange>(range: T, location: TextRange | undefined): T;
    function canHaveModifiers(node: Node): node is HasModifiers;
    function canHaveDecorators(node: Node): node is HasDecorators;
    /**
     * Invokes a callback for each child of the given node. The 'cbNode' callback is invoked for all child nodes
     * stored in properties. If a 'cbNodes' callback is specified, it is invoked for embedded arrays; otherwise,
     * embedded arrays are flattened and the 'cbNode' callback is invoked for each element. If a callback returns
     * a truthy value, iteration stops and that value is returned. Otherwise, undefined is returned.
     *
     * @param node a given node to visit its children
     * @param cbNode a callback to be invoked for all child nodes
     * @param cbNodes a callback to be invoked for embedded array
     *
     * @remarks `forEachChild` must visit the children of a node in the order
     * that they appear in the source code. The language service depends on this property to locate nodes by position.
     */
    function forEachChild<T>(node: Node, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined;
    function createSourceFile(fileName: string, sourceText: string, languageVersionOrOptions: ScriptTarget | CreateSourceFileOptions, setParentNodes?: boolean, scriptKind?: ScriptKind): SourceFile;
    function parseIsolatedEntityName(text: string, languageVersion: ScriptTarget): EntityName | undefined;
    /**
     * Parse json text into SyntaxTree and return node and parse errors if any
     * @param fileName
     * @param sourceText
     */
    function parseJsonText(fileName: string, sourceText: string): JsonSourceFile;
    function isExternalModule(file: SourceFile): boolean;
    function updateSourceFile(sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    interface CreateSourceFileOptions {
        languageVersion: ScriptTarget;
        /**
         * Controls the format the file is detected as - this can be derived from only the path
         * and files on disk, but needs to be done with a module resolution cache in scope to be performant.
         * This is usually `undefined` for compilations that do not have `moduleResolution` values of `node16` or `nodenext`.
         */
        impliedNodeFormat?: ResolutionMode;
        /**
         * Controls how module-y-ness is set for the given file. Usually the result of calling
         * `getSetExternalModuleIndicator` on a valid `CompilerOptions` object. If not present, the default
         * check specified by `isFileProbablyExternalModule` will be used to set the field.
         */
        setExternalModuleIndicator?: (file: SourceFile) => void;
        jsDocParsingMode?: JSDocParsingMode;
    }
    function parseCommandLine(commandLine: readonly string[], readFile?: (path: string) => string | undefined): ParsedCommandLine;
    function parseBuildCommand(commandLine: readonly string[]): ParsedBuildCommand;
    /**
     * Reads the config file, reports errors if any and exits if the config file cannot be found
     */
    function getParsedCommandLineOfConfigFile(configFileName: string, optionsToExtend: CompilerOptions | undefined, host: ParseConfigFileHost, extendedConfigCache?: Map<string, ExtendedConfigCacheEntry>, watchOptionsToExtend?: WatchOptions, extraFileExtensions?: readonly FileExtensionInfo[]): ParsedCommandLine | undefined;
    /**
     * Read tsconfig.json file
     * @param fileName The path to the config file
     */
    function readConfigFile(fileName: string, readFile: (path: string) => string | undefined): {
        config?: any;
        error?: Diagnostic;
    };
    /**
     * Parse the text of the tsconfig.json file
     * @param fileName The path to the config file
     * @param jsonText The text of the config file
     */
    function parseConfigFileTextToJson(fileName: string, jsonText: string): {
        config?: any;
        error?: Diagnostic;
    };
    /**
     * Read tsconfig.json file
     * @param fileName The path to the config file
     */
    function readJsonConfigFile(fileName: string, readFile: (path: string) => string | undefined): TsConfigSourceFile;
    /**
     * Convert the json syntax tree into the json value
     */
    function convertToObject(sourceFile: JsonSourceFile, errors: Diagnostic[]): any;
    /**
     * Parse the contents of a config file (tsconfig.json).
     * @param json The contents of the config file to parse
     * @param host Instance of ParseConfigHost used to enumerate files in folder.
     * @param basePath A root directory to resolve relative path entries in the config
     *    file to. e.g. outDir
     */
    function parseJsonConfigFileContent(json: any, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[], extraFileExtensions?: readonly FileExtensionInfo[], extendedConfigCache?: Map<string, ExtendedConfigCacheEntry>, existingWatchOptions?: WatchOptions): ParsedCommandLine;
    /**
     * Parse the contents of a config file (tsconfig.json).
     * @param jsonNode The contents of the config file to parse
     * @param host Instance of ParseConfigHost used to enumerate files in folder.
     * @param basePath A root directory to resolve relative path entries in the config
     *    file to. e.g. outDir
     */
    function parseJsonSourceFileConfigFileContent(sourceFile: TsConfigSourceFile, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[], extraFileExtensions?: readonly FileExtensionInfo[], extendedConfigCache?: Map<string, ExtendedConfigCacheEntry>, existingWatchOptions?: WatchOptions): ParsedCommandLine;
    function convertCompilerOptionsFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: CompilerOptions;
        errors: Diagnostic[];
    };
    function convertTypeAcquisitionFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: TypeAcquisition;
        errors: Diagnostic[];
    };
    /** Parsed command line for build */
    interface ParsedBuildCommand {
        buildOptions: BuildOptions;
        watchOptions: WatchOptions | undefined;
        projects: string[];
        errors: Diagnostic[];
    }
    type DiagnosticReporter = (diagnostic: Diagnostic) => void;
    /**
     * Reports config file diagnostics
     */
    interface ConfigFileDiagnosticsReporter {
        /**
         * Reports unrecoverable error when parsing config file
         */
        onUnRecoverableConfigFileDiagnostic: DiagnosticReporter;
    }
    /**
     * Interface extending ParseConfigHost to support ParseConfigFile that reads config file and reports errors
     */
    interface ParseConfigFileHost extends ParseConfigHost, ConfigFileDiagnosticsReporter {
        getCurrentDirectory(): string;
    }
    interface ParsedTsconfig {
        raw: any;
        options?: CompilerOptions;
        watchOptions?: WatchOptions;
        typeAcquisition?: TypeAcquisition;
        /**
         * Note that the case of the config path has not yet been normalized, as no files have been imported into the project yet
         */
        extendedConfigPath?: string | string[];
    }
    interface ExtendedConfigCacheEntry {
        extendedResult: TsConfigSourceFile;
        extendedConfig: ParsedTsconfig | undefined;
    }
    function getEffectiveTypeRoots(options: CompilerOptions, host: GetEffectiveTypeRootsHost): string[] | undefined;
    /**
     * @param {string | undefined} containingFile - file that contains type reference directive, can be undefined if containing file is unknown.
     * This is possible in case if resolution is performed for directives specified via 'types' parameter. In this case initial path for secondary lookups
     * is assumed to be the same as root directory of the project.
     */
    function resolveTypeReferenceDirective(typeReferenceDirectiveName: string, containingFile: string | undefined, options: CompilerOptions, host: ModuleResolutionHost, redirectedReference?: ResolvedProjectReference, cache?: TypeReferenceDirectiveResolutionCache, resolutionMode?: ResolutionMode): ResolvedTypeReferenceDirectiveWithFailedLookupLocations;
    /**
     * Given a set of options, returns the set of type directive names
     *   that should be included for this program automatically.
     * This list could either come from the config file,
     *   or from enumerating the types root + initial secondary types lookup location.
     * More type directives might appear in the program later as a result of loading actual source files;
     *   this list is only the set of defaults that are implicitly included.
     */
    function getAutomaticTypeDirectiveNames(options: CompilerOptions, host: ModuleResolutionHost): string[];
    function createModuleResolutionCache(currentDirectory: string, getCanonicalFileName: (s: string) => string, options?: CompilerOptions, packageJsonInfoCache?: PackageJsonInfoCache): ModuleResolutionCache;
    function createTypeReferenceDirectiveResolutionCache(currentDirectory: string, getCanonicalFileName: (s: string) => string, options?: CompilerOptions, packageJsonInfoCache?: PackageJsonInfoCache): TypeReferenceDirectiveResolutionCache;
    function resolveModuleNameFromCache(moduleName: string, containingFile: string, cache: ModuleResolutionCache, mode?: ResolutionMode): ResolvedModuleWithFailedLookupLocations | undefined;
    function resolveModuleName(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache, redirectedReference?: ResolvedProjectReference, resolutionMode?: ResolutionMode): ResolvedModuleWithFailedLookupLocations;
    function bundlerModuleNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache, redirectedReference?: ResolvedProjectReference): ResolvedModuleWithFailedLookupLocations;
    function nodeModuleNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache, redirectedReference?: ResolvedProjectReference): ResolvedModuleWithFailedLookupLocations;
    function classicNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: NonRelativeModuleNameResolutionCache, redirectedReference?: ResolvedProjectReference): ResolvedModuleWithFailedLookupLocations;
    interface TypeReferenceDirectiveResolutionCache extends PerDirectoryResolutionCache<ResolvedTypeReferenceDirectiveWithFailedLookupLocations>, NonRelativeNameResolutionCache<ResolvedTypeReferenceDirectiveWithFailedLookupLocations>, PackageJsonInfoCache {
    }
    interface ModeAwareCache<T> {
        get(key: string, mode: ResolutionMode): T | undefined;
        set(key: string, mode: ResolutionMode, value: T): this;
        delete(key: string, mode: ResolutionMode): this;
        has(key: string, mode: ResolutionMode): boolean;
        forEach(cb: (elem: T, key: string, mode: ResolutionMode) => void): void;
        size(): number;
    }
    /**
     * Cached resolutions per containing directory.
     * This assumes that any module id will have the same resolution for sibling files located in the same folder.
     */
    interface PerDirectoryResolutionCache<T> {
        getFromDirectoryCache(name: string, mode: ResolutionMode, directoryName: string, redirectedReference: ResolvedProjectReference | undefined): T | undefined;
        getOrCreateCacheForDirectory(directoryName: string, redirectedReference?: ResolvedProjectReference): ModeAwareCache<T>;
        clear(): void;
        /**
         *  Updates with the current compilerOptions the cache will operate with.
         *  This updates the redirects map as well if needed so module resolutions are cached if they can across the projects
         */
        update(options: CompilerOptions): void;
    }
    interface NonRelativeNameResolutionCache<T> {
        getFromNonRelativeNameCache(nonRelativeName: string, mode: ResolutionMode, directoryName: string, redirectedReference: ResolvedProjectReference | undefined): T | undefined;
        getOrCreateCacheForNonRelativeName(nonRelativeName: string, mode: ResolutionMode, redirectedReference?: ResolvedProjectReference): PerNonRelativeNameCache<T>;
        clear(): void;
        /**
         *  Updates with the current compilerOptions the cache will operate with.
         *  This updates the redirects map as well if needed so module resolutions are cached if they can across the projects
         */
        update(options: CompilerOptions): void;
    }
    interface PerNonRelativeNameCache<T> {
        get(directory: string): T | undefined;
        set(directory: string, result: T): void;
    }
    interface ModuleResolutionCache extends PerDirectoryResolutionCache<ResolvedModuleWithFailedLookupLocations>, NonRelativeModuleNameResolutionCache, PackageJsonInfoCache {
        getPackageJsonInfoCache(): PackageJsonInfoCache;
    }
    /**
     * Stored map from non-relative module name to a table: directory -> result of module lookup in this directory
     * We support only non-relative module names because resolution of relative module names is usually more deterministic and thus less expensive.
     */
    interface NonRelativeModuleNameResolutionCache extends NonRelativeNameResolutionCache<ResolvedModuleWithFailedLookupLocations>, PackageJsonInfoCache {
        /** @deprecated Use getOrCreateCacheForNonRelativeName */
        getOrCreateCacheForModuleName(nonRelativeModuleName: string, mode: ResolutionMode, redirectedReference?: ResolvedProjectReference): PerModuleNameCache;
    }
    interface PackageJsonInfoCache {
        clear(): void;
    }
    type PerModuleNameCache = PerNonRelativeNameCache<ResolvedModuleWithFailedLookupLocations>;
    /**
     * Visits a Node using the supplied visitor, possibly returning a new Node in its place.
     *
     * - If the input node is undefined, then the output is undefined.
     * - If the visitor returns undefined, then the output is undefined.
     * - If the output node is not undefined, then it will satisfy the test function.
     * - In order to obtain a return type that is more specific than `Node`, a test
     *   function _must_ be provided, and that function must be a type predicate.
     *
     * @param node The Node to visit.
     * @param visitor The callback used to visit the Node.
     * @param test A callback to execute to verify the Node is valid.
     * @param lift An optional callback to execute to lift a NodeArray into a valid Node.
     */
    function visitNode<TIn extends Node | undefined, TVisited extends Node | undefined, TOut extends Node>(node: TIn, visitor: Visitor<NonNullable<TIn>, TVisited>, test: (node: Node) => node is TOut, lift?: (node: readonly Node[]) => Node): TOut | (TIn & undefined) | (TVisited & undefined);
    /**
     * Visits a Node using the supplied visitor, possibly returning a new Node in its place.
     *
     * - If the input node is undefined, then the output is undefined.
     * - If the visitor returns undefined, then the output is undefined.
     * - If the output node is not undefined, then it will satisfy the test function.
     * - In order to obtain a return type that is more specific than `Node`, a test
     *   function _must_ be provided, and that function must be a type predicate.
     *
     * @param node The Node to visit.
     * @param visitor The callback used to visit the Node.
     * @param test A callback to execute to verify the Node is valid.
     * @param lift An optional callback to execute to lift a NodeArray into a valid Node.
     */
    function visitNode<TIn extends Node | undefined, TVisited extends Node | undefined>(node: TIn, visitor: Visitor<NonNullable<TIn>, TVisited>, test?: (node: Node) => boolean, lift?: (node: readonly Node[]) => Node): Node | (TIn & undefined) | (TVisited & undefined);
    /**
     * Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
     *
     * - If the input node array is undefined, the output is undefined.
     * - If the visitor can return undefined, the node it visits in the array will be reused.
     * - If the output node array is not undefined, then its contents will satisfy the test.
     * - In order to obtain a return type that is more specific than `NodeArray<Node>`, a test
     *   function _must_ be provided, and that function must be a type predicate.
     *
     * @param nodes The NodeArray to visit.
     * @param visitor The callback used to visit a Node.
     * @param test A node test to execute for each node.
     * @param start An optional value indicating the starting offset at which to start visiting.
     * @param count An optional value indicating the maximum number of nodes to visit.
     */
    function visitNodes<TIn extends Node, TInArray extends NodeArray<TIn> | undefined, TOut extends Node>(nodes: TInArray, visitor: Visitor<TIn, Node | undefined>, test: (node: Node) => node is TOut, start?: number, count?: number): NodeArray<TOut> | (TInArray & undefined);
    /**
     * Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
     *
     * - If the input node array is undefined, the output is undefined.
     * - If the visitor can return undefined, the node it visits in the array will be reused.
     * - If the output node array is not undefined, then its contents will satisfy the test.
     * - In order to obtain a return type that is more specific than `NodeArray<Node>`, a test
     *   function _must_ be provided, and that function must be a type predicate.
     *
     * @param nodes The NodeArray to visit.
     * @param visitor The callback used to visit a Node.
     * @param test A node test to execute for each node.
     * @param start An optional value indicating the starting offset at which to start visiting.
     * @param count An optional value indicating the maximum number of nodes to visit.
     */
    function visitNodes<TIn extends Node, TInArray extends NodeArray<TIn> | undefined>(nodes: TInArray, visitor: Visitor<TIn, Node | undefined>, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<Node> | (TInArray & undefined);
    /**
     * Starts a new lexical environment and visits a statement list, ending the lexical environment
     * and merging hoisted declarations upon completion.
     */
    function visitLexicalEnvironment(statements: NodeArray<Statement>, visitor: Visitor, context: TransformationContext, start?: number, ensureUseStrict?: boolean, nodesVisitor?: NodesVisitor): NodeArray<Statement>;
    /**
     * Starts a new lexical environment and visits a parameter list, suspending the lexical
     * environment upon completion.
     */
    function visitParameterList(nodes: NodeArray<ParameterDeclaration>, visitor: Visitor, context: TransformationContext, nodesVisitor?: NodesVisitor): NodeArray<ParameterDeclaration>;
    function visitParameterList(nodes: NodeArray<ParameterDeclaration> | undefined, visitor: Visitor, context: TransformationContext, nodesVisitor?: NodesVisitor): NodeArray<ParameterDeclaration> | undefined;
    /**
     * Resumes a suspended lexical environment and visits a function body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: FunctionBody, visitor: Visitor, context: TransformationContext): FunctionBody;
    /**
     * Resumes a suspended lexical environment and visits a function body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: FunctionBody | undefined, visitor: Visitor, context: TransformationContext): FunctionBody | undefined;
    /**
     * Resumes a suspended lexical environment and visits a concise body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: ConciseBody, visitor: Visitor, context: TransformationContext): ConciseBody;
    /**
     * Visits an iteration body, adding any block-scoped variables required by the transformation.
     */
    function visitIterationBody(body: Statement, visitor: Visitor, context: TransformationContext): Statement;
    /**
     * Visits the elements of a {@link CommaListExpression}.
     * @param visitor The visitor to use when visiting expressions whose result will not be discarded at runtime.
     * @param discardVisitor The visitor to use when visiting expressions whose result will be discarded at runtime. Defaults to {@link visitor}.
     */
    function visitCommaListElements(elements: NodeArray<Expression>, visitor: Visitor, discardVisitor?: Visitor): NodeArray<Expression>;
    /**
     * Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
     *
     * @param node The Node whose children will be visited.
     * @param visitor The callback used to visit each child.
     * @param context A lexical environment context for the visitor.
     */
    function visitEachChild<T extends Node>(node: T, visitor: Visitor, context: TransformationContext | undefined): T;
    /**
     * Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
     *
     * @param node The Node whose children will be visited.
     * @param visitor The callback used to visit each child.
     * @param context A lexical environment context for the visitor.
     */
    function visitEachChild<T extends Node>(node: T | undefined, visitor: Visitor, context: TransformationContext | undefined, nodesVisitor?: typeof visitNodes, tokenVisitor?: Visitor): T | undefined;
    function getTsBuildInfoEmitOutputFilePath(options: CompilerOptions): string | undefined;
    function getOutputFileNames(commandLine: ParsedCommandLine, inputFileName: string, ignoreCase: boolean): readonly string[];
    function createPrinter(printerOptions?: PrinterOptions, handlers?: PrintHandlers): Printer;
    enum ProgramUpdateLevel {
        /** Program is updated with same root file names and options */
        Update = 0,
        /** Loads program after updating root file names from the disk */
        RootNamesAndUpdate = 1,
        /**
         * Loads program completely, including:
         *  - re-reading contents of config file from disk
         *  - calculating root file names for the program
         *  - Updating the program
         */
        Full = 2,
    }
    function findConfigFile(searchPath: string, fileExists: (fileName: string) => boolean, configName?: string): string | undefined;
    function resolveTripleslashReference(moduleName: string, containingFile: string): string;
    function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost;
    function getPreEmitDiagnostics(program: Program, sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    function formatDiagnostics(diagnostics: readonly Diagnostic[], host: FormatDiagnosticsHost): string;
    function formatDiagnostic(diagnostic: Diagnostic, host: FormatDiagnosticsHost): string;
    function formatDiagnosticsWithColorAndContext(diagnostics: readonly Diagnostic[], host: FormatDiagnosticsHost): string;
    function flattenDiagnosticMessageText(diag: string | DiagnosticMessageChain | undefined, newLine: string, indent?: number): string;
    /**
     * Calculates the resulting resolution mode for some reference in some file - this is generally the explicitly
     * provided resolution mode in the reference, unless one is not present, in which case it is the mode of the containing file.
     */
    function getModeForFileReference(ref: FileReference | string, containingFileMode: ResolutionMode): ResolutionMode;
    /**
     * Use `program.getModeForResolutionAtIndex`, which retrieves the correct `compilerOptions`, instead of this function whenever possible.
     * Calculates the final resolution mode for an import at some index within a file's `imports` list. This is the resolution mode
     * explicitly provided via import attributes, if present, or the syntax the usage would have if emitted to JavaScript. In
     * `--module node16` or `nodenext`, this may depend on the file's `impliedNodeFormat`. In `--module preserve`, it depends only on the
     * input syntax of the reference. In other `module` modes, when overriding import attributes are not provided, this function returns
     * `undefined`, as the result would have no impact on module resolution, emit, or type checking.
     * @param file File to fetch the resolution mode within
     * @param index Index into the file's complete resolution list to get the resolution of - this is a concatenation of the file's imports and module augmentations
     * @param compilerOptions The compiler options for the program that owns the file. If the file belongs to a referenced project, the compiler options
     * should be the options of the referenced project, not the referencing project.
     */
    function getModeForResolutionAtIndex(file: SourceFile, index: number, compilerOptions: CompilerOptions): ResolutionMode;
    /**
     * Use `program.getModeForUsageLocation`, which retrieves the correct `compilerOptions`, instead of this function whenever possible.
     * Calculates the final resolution mode for a given module reference node. This function only returns a result when module resolution
     * settings allow differing resolution between ESM imports and CJS requires, or when a mode is explicitly provided via import attributes,
     * which cause an `import` or `require` condition to be used during resolution regardless of module resolution settings. In absence of
     * overriding attributes, and in modes that support differing resolution, the result indicates the syntax the usage would emit to JavaScript.
     * Some examples:
     *
     * ```ts
     * // tsc foo.mts --module nodenext
     * import {} from "mod";
     * // Result: ESNext - the import emits as ESM due to `impliedNodeFormat` set by .mts file extension
     *
     * // tsc foo.cts --module nodenext
     * import {} from "mod";
     * // Result: CommonJS - the import emits as CJS due to `impliedNodeFormat` set by .cts file extension
     *
     * // tsc foo.ts --module preserve --moduleResolution bundler
     * import {} from "mod";
     * // Result: ESNext - the import emits as ESM due to `--module preserve` and `--moduleResolution bundler`
     * // supports conditional imports/exports
     *
     * // tsc foo.ts --module preserve --moduleResolution node10
     * import {} from "mod";
     * // Result: undefined - the import emits as ESM due to `--module preserve`, but `--moduleResolution node10`
     * // does not support conditional imports/exports
     *
     * // tsc foo.ts --module commonjs --moduleResolution node10
     * import type {} from "mod" with { "resolution-mode": "import" };
     * // Result: ESNext - conditional imports/exports always supported with "resolution-mode" attribute
     * ```
     *
     * @param file The file the import or import-like reference is contained within
     * @param usage The module reference string
     * @param compilerOptions The compiler options for the program that owns the file. If the file belongs to a referenced project, the compiler options
     * should be the options of the referenced project, not the referencing project.
     * @returns The final resolution mode of the import
     */
    function getModeForUsageLocation(file: SourceFile, usage: StringLiteralLike, compilerOptions: CompilerOptions): ResolutionMode;
    function getConfigFileParsingDiagnostics(configFileParseResult: ParsedCommandLine): readonly Diagnostic[];
    /**
     * A function for determining if a given file is esm or cjs format, assuming modern node module resolution rules, as configured by the
     * `options` parameter.
     *
     * @param fileName The file name to check the format of (it need not exist on disk)
     * @param [packageJsonInfoCache] A cache for package file lookups - it's best to have a cache when this function is called often
     * @param host The ModuleResolutionHost which can perform the filesystem lookups for package json data
     * @param options The compiler options to perform the analysis under - relevant options are `moduleResolution` and `traceResolution`
     * @returns `undefined` if the path has no relevant implied format, `ModuleKind.ESNext` for esm format, and `ModuleKind.CommonJS` for cjs format
     */
    function getImpliedNodeFormatForFile(fileName: string, packageJsonInfoCache: PackageJsonInfoCache | undefined, host: ModuleResolutionHost, options: CompilerOptions): ResolutionMode;
    /**
     * Create a new 'Program' instance. A Program is an immutable collection of 'SourceFile's and a 'CompilerOptions'
     * that represent a compilation unit.
     *
     * Creating a program proceeds from a set of root files, expanding the set of inputs by following imports and
     * triple-slash-reference-path directives transitively. '@types' and triple-slash-reference-types are also pulled in.
     *
     * @param createProgramOptions - The options for creating a program.
     * @returns A 'Program' object.
     */
    function createProgram(createProgramOptions: CreateProgramOptions): Program;
    /**
     * Create a new 'Program' instance. A Program is an immutable collection of 'SourceFile's and a 'CompilerOptions'
     * that represent a compilation unit.
     *
     * Creating a program proceeds from a set of root files, expanding the set of inputs by following imports and
     * triple-slash-reference-path directives transitively. '@types' and triple-slash-reference-types are also pulled in.
     *
     * @param rootNames - A set of root files.
     * @param options - The compiler options which should be used.
     * @param host - The host interacts with the underlying file system.
     * @param oldProgram - Reuses an old program structure.
     * @param configFileParsingDiagnostics - error during config file parsing
     * @returns A 'Program' object.
     */
    function createProgram(rootNames: readonly string[], options: CompilerOptions, host?: CompilerHost, oldProgram?: Program, configFileParsingDiagnostics?: readonly Diagnostic[]): Program;
    /**
     * Returns the target config filename of a project reference.
     * Note: The file might not exist.
     */
    function resolveProjectReferencePath(ref: ProjectReference): ResolvedConfigFileName;
    interface FormatDiagnosticsHost {
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
    }
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
        diagnostics: readonly Diagnostic[];
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
    /**
     * Create the builder to manage semantic diagnostics and cache them
     */
    function createSemanticDiagnosticsBuilderProgram(newProgram: Program, host: BuilderProgramHost, oldProgram?: SemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[]): SemanticDiagnosticsBuilderProgram;
    function createSemanticDiagnosticsBuilderProgram(rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: SemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): SemanticDiagnosticsBuilderProgram;
    /**
     * Create the builder that can handle the changes in program and iterate through changed files
     * to emit the those files and manage semantic diagnostics cache as well
     */
    function createEmitAndSemanticDiagnosticsBuilderProgram(newProgram: Program, host: BuilderProgramHost, oldProgram?: EmitAndSemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[]): EmitAndSemanticDiagnosticsBuilderProgram;
    function createEmitAndSemanticDiagnosticsBuilderProgram(rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: EmitAndSemanticDiagnosticsBuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): EmitAndSemanticDiagnosticsBuilderProgram;
    /**
     * Creates a builder thats just abstraction over program and can be used with watch
     */
    function createAbstractBuilder(newProgram: Program, host: BuilderProgramHost, oldProgram?: BuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[]): BuilderProgram;
    function createAbstractBuilder(rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: BuilderProgram, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[]): BuilderProgram;
    type AffectedFileResult<T> = {
        result: T;
        affected: SourceFile | Program;
    } | undefined;
    interface BuilderProgramHost {
        /**
         * If provided this would be used this hash instead of actual file shape text for detecting changes
         */
        createHash?: (data: string) => string;
        /**
         * When emit or emitNextAffectedFile are called without writeFile,
         * this callback if present would be used to write files
         */
        writeFile?: WriteFileCallback;
    }
    /**
     * Builder to manage the program state changes
     */
    interface BuilderProgram {
        /**
         * Returns current program
         */
        getProgram(): Program;
        /**
         * Get compiler options of the program
         */
        getCompilerOptions(): CompilerOptions;
        /**
         * Get the source file in the program with file name
         */
        getSourceFile(fileName: string): SourceFile | undefined;
        /**
         * Get a list of files in the program
         */
        getSourceFiles(): readonly SourceFile[];
        /**
         * Get the diagnostics for compiler options
         */
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        /**
         * Get the diagnostics that dont belong to any file
         */
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        /**
         * Get the diagnostics from config file parsing
         */
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        /**
         * Get the syntax diagnostics, for all source files if source file is not supplied
         */
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        /**
         * Get the declaration diagnostics, for all source files if source file is not supplied
         */
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
        /**
         * Get all the dependencies of the file
         */
        getAllDependencies(sourceFile: SourceFile): readonly string[];
        /**
         * Gets the semantic diagnostics from the program corresponding to this state of file (if provided) or whole program
         * The semantic diagnostics are cached and managed here
         * Note that it is assumed that when asked about semantic diagnostics through this API,
         * the file has been taken out of affected files so it is safe to use cache or get from program and cache the diagnostics
         * In case of SemanticDiagnosticsBuilderProgram if the source file is not provided,
         * it will iterate through all the affected files, to ensure that cache stays valid and yet provide a way to get all semantic diagnostics
         */
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        /**
         * Emits the JavaScript and declaration files.
         * When targetSource file is specified, emits the files corresponding to that source file,
         * otherwise for the whole program.
         * In case of EmitAndSemanticDiagnosticsBuilderProgram, when targetSourceFile is specified,
         * it is assumed that that file is handled from affected file list. If targetSourceFile is not specified,
         * it will only emit all the affected files instead of whole program
         *
         * The first of writeFile if provided, writeFile of BuilderProgramHost if provided, writeFile of compiler host
         * in that order would be used to write the files
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
        /**
         * Get the current directory of the program
         */
        getCurrentDirectory(): string;
    }
    /**
     * The builder that caches the semantic diagnostics for the program and handles the changed files and affected files
     */
    interface SemanticDiagnosticsBuilderProgram extends BuilderProgram {
        /**
         * Gets the semantic diagnostics from the program for the next affected file and caches it
         * Returns undefined if the iteration is complete
         */
        getSemanticDiagnosticsOfNextAffectedFile(cancellationToken?: CancellationToken, ignoreSourceFile?: (sourceFile: SourceFile) => boolean): AffectedFileResult<readonly Diagnostic[]>;
    }
    /**
     * The builder that can handle the changes in program and iterate through changed file to emit the files
     * The semantic diagnostics are cached per file and managed by clearing for the changed/affected files
     */
    interface EmitAndSemanticDiagnosticsBuilderProgram extends SemanticDiagnosticsBuilderProgram {
        /**
         * Emits the next affected file's emit result (EmitResult and sourceFiles emitted) or returns undefined if iteration is complete
         * The first of writeFile if provided, writeFile of BuilderProgramHost if provided, writeFile of compiler host
         * in that order would be used to write the files
         */
        emitNextAffectedFile(writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): AffectedFileResult<EmitResult>;
    }
    function readBuilderProgram(compilerOptions: CompilerOptions, host: ReadBuildProgramHost): EmitAndSemanticDiagnosticsBuilderProgram | undefined;
    function createIncrementalCompilerHost(options: CompilerOptions, system?: System): CompilerHost;
    function createIncrementalProgram<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>({ rootNames, options, configFileParsingDiagnostics, projectReferences, host, createProgram }: IncrementalProgramOptions<T>): T;
    /**
     * Create the watch compiler host for either configFile or fileNames and its options
     */
    function createWatchCompilerHost<T extends BuilderProgram>(configFileName: string, optionsToExtend: CompilerOptions | undefined, system: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter, watchOptionsToExtend?: WatchOptions, extraFileExtensions?: readonly FileExtensionInfo[]): WatchCompilerHostOfConfigFile<T>;
    function createWatchCompilerHost<T extends BuilderProgram>(rootFiles: string[], options: CompilerOptions, system: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter, projectReferences?: readonly ProjectReference[], watchOptions?: WatchOptions): WatchCompilerHostOfFilesAndCompilerOptions<T>;
    /**
     * Creates the watch from the host for root files and compiler options
     */
    function createWatchProgram<T extends BuilderProgram>(host: WatchCompilerHostOfFilesAndCompilerOptions<T>): WatchOfFilesAndCompilerOptions<T>;
    /**
     * Creates the watch from the host for config file
     */
    function createWatchProgram<T extends BuilderProgram>(host: WatchCompilerHostOfConfigFile<T>): WatchOfConfigFile<T>;
    interface ReadBuildProgramHost {
        useCaseSensitiveFileNames(): boolean;
        getCurrentDirectory(): string;
        readFile(fileName: string): string | undefined;
    }
    interface IncrementalProgramOptions<T extends BuilderProgram> {
        rootNames: readonly string[];
        options: CompilerOptions;
        configFileParsingDiagnostics?: readonly Diagnostic[];
        projectReferences?: readonly ProjectReference[];
        host?: CompilerHost;
        createProgram?: CreateProgram<T>;
    }
    type WatchStatusReporter = (diagnostic: Diagnostic, newLine: string, options: CompilerOptions, errorCount?: number) => void;
    /** Create the program with rootNames and options, if they are undefined, oldProgram and new configFile diagnostics create new program */
    type CreateProgram<T extends BuilderProgram> = (rootNames: readonly string[] | undefined, options: CompilerOptions | undefined, host?: CompilerHost, oldProgram?: T, configFileParsingDiagnostics?: readonly Diagnostic[], projectReferences?: readonly ProjectReference[] | undefined) => T;
    /** Host that has watch functionality used in --watch mode */
    interface WatchHost {
        /** If provided, called with Diagnostic message that informs about change in watch status */
        onWatchStatusChange?(diagnostic: Diagnostic, newLine: string, options: CompilerOptions, errorCount?: number): void;
        /** Used to watch changes in source files, missing files needed to update the program or config file */
        watchFile(path: string, callback: FileWatcherCallback, pollingInterval?: number, options?: WatchOptions): FileWatcher;
        /** Used to watch resolved module's failed lookup locations, config file specs, type roots where auto type reference directives are added */
        watchDirectory(path: string, callback: DirectoryWatcherCallback, recursive?: boolean, options?: WatchOptions): FileWatcher;
        /** If provided, will be used to set delayed compilation, so that multiple changes in short span are compiled together */
        setTimeout?(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
        /** If provided, will be used to reset existing delayed compilation */
        clearTimeout?(timeoutId: any): void;
        preferNonRecursiveWatch?: boolean;
    }
    interface ProgramHost<T extends BuilderProgram> {
        /**
         * Used to create the program when need for program creation or recreation detected
         */
        createProgram: CreateProgram<T>;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        createHash?(data: string): string;
        /**
         * Use to check file presence for source files and
         * if resolveModuleNames is not provided (complier is in charge of module resolution) then module files as well
         */
        fileExists(path: string): boolean;
        /**
         * Use to read file text for source files and
         * if resolveModuleNames is not provided (complier is in charge of module resolution) then module files as well
         */
        readFile(path: string, encoding?: string): string | undefined;
        /** If provided, used for module resolution as well as to handle directory structure */
        directoryExists?(path: string): boolean;
        /** If provided, used in resolutions as well as handling directory structure */
        getDirectories?(path: string): string[];
        /** If provided, used to cache and handle directory structure modifications */
        readDirectory?(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        /** Symbol links resolution */
        realpath?(path: string): string;
        /** If provided would be used to write log about compilation */
        trace?(s: string): void;
        /** If provided is used to get the environment variable */
        getEnvironmentVariable?(name: string): string | undefined;
        /**
         * @deprecated supply resolveModuleNameLiterals instead for resolution that can handle newer resolution modes like nodenext
         *
         * If provided, used to resolve the module names, otherwise typescript's default module resolution
         */
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile?: SourceFile): (ResolvedModule | undefined)[];
        /**
         * @deprecated supply resolveTypeReferenceDirectiveReferences instead for resolution that can handle newer resolution modes like nodenext
         *
         * If provided, used to resolve type reference directives, otherwise typescript's default resolution
         */
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[] | readonly FileReference[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingFileMode?: ResolutionMode): (ResolvedTypeReferenceDirective | undefined)[];
        resolveModuleNameLiterals?(moduleLiterals: readonly StringLiteralLike[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile, reusedNames: readonly StringLiteralLike[] | undefined): readonly ResolvedModuleWithFailedLookupLocations[];
        resolveTypeReferenceDirectiveReferences?<T extends FileReference | string>(typeDirectiveReferences: readonly T[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile | undefined, reusedNames: readonly T[] | undefined): readonly ResolvedTypeReferenceDirectiveWithFailedLookupLocations[];
        /** If provided along with custom resolveModuleNames or resolveTypeReferenceDirectives, used to determine if unchanged file path needs to re-resolve modules/type reference directives */
        hasInvalidatedResolutions?(filePath: Path): boolean;
        /**
         * Returns the module resolution cache used by a provided `resolveModuleNames` implementation so that any non-name module resolution operations (eg, package.json lookup) can reuse it
         */
        getModuleResolutionCache?(): ModuleResolutionCache | undefined;
        jsDocParsingMode?: JSDocParsingMode;
    }
    interface WatchCompilerHost<T extends BuilderProgram> extends ProgramHost<T>, WatchHost {
        /** Instead of using output d.ts file from project reference, use its source file */
        useSourceOfProjectReferenceRedirect?(): boolean;
        /** If provided, use this method to get parsed command lines for referenced projects */
        getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
        /** If provided, callback to invoke after every new program creation */
        afterProgramCreate?(program: T): void;
    }
    /**
     * Host to create watch with root files and options
     */
    interface WatchCompilerHostOfFilesAndCompilerOptions<T extends BuilderProgram> extends WatchCompilerHost<T> {
        /** root files to use to generate program */
        rootFiles: string[];
        /** Compiler options */
        options: CompilerOptions;
        watchOptions?: WatchOptions;
        /** Project References */
        projectReferences?: readonly ProjectReference[];
    }
    /**
     * Host to create watch with config file
     */
    interface WatchCompilerHostOfConfigFile<T extends BuilderProgram> extends WatchCompilerHost<T>, ConfigFileDiagnosticsReporter {
        /** Name of the config file to compile */
        configFileName: string;
        /** Options to extend */
        optionsToExtend?: CompilerOptions;
        watchOptionsToExtend?: WatchOptions;
        extraFileExtensions?: readonly FileExtensionInfo[];
        /**
         * Used to generate source file names from the config file and its include, exclude, files rules
         * and also to cache the directory stucture
         */
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
    }
    interface Watch<T> {
        /** Synchronize with host and get updated program */
        getProgram(): T;
        /** Closes the watch */
        close(): void;
    }
    /**
     * Creates the watch what generates program using the config file
     */
    interface WatchOfConfigFile<T> extends Watch<T> {
    }
    /**
     * Creates the watch that generates program using the root files and compiler options
     */
    interface WatchOfFilesAndCompilerOptions<T> extends Watch<T> {
        /** Updates the root files in the program, only if this is not config file compilation */
        updateRootFileNames(fileNames: string[]): void;
    }
    /**
     * Create a function that reports watch status by writing to the system and handles the formating of the diagnostic
     */
    function createBuilderStatusReporter(system: System, pretty?: boolean): DiagnosticReporter;
    function createSolutionBuilderHost<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(system?: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportSolutionBuilderStatus?: DiagnosticReporter, reportErrorSummary?: ReportEmitErrorSummary): SolutionBuilderHost<T>;
    function createSolutionBuilderWithWatchHost<T extends BuilderProgram = EmitAndSemanticDiagnosticsBuilderProgram>(system?: System, createProgram?: CreateProgram<T>, reportDiagnostic?: DiagnosticReporter, reportSolutionBuilderStatus?: DiagnosticReporter, reportWatchStatus?: WatchStatusReporter): SolutionBuilderWithWatchHost<T>;
    function createSolutionBuilder<T extends BuilderProgram>(host: SolutionBuilderHost<T>, rootNames: readonly string[], defaultOptions: BuildOptions): SolutionBuilder<T>;
    function createSolutionBuilderWithWatch<T extends BuilderProgram>(host: SolutionBuilderWithWatchHost<T>, rootNames: readonly string[], defaultOptions: BuildOptions, baseWatchOptions?: WatchOptions): SolutionBuilder<T>;
    interface BuildOptions {
        dry?: boolean;
        force?: boolean;
        verbose?: boolean;
        stopBuildOnErrors?: boolean;
        incremental?: boolean;
        assumeChangesOnlyAffectDirectDependencies?: boolean;
        declaration?: boolean;
        declarationMap?: boolean;
        emitDeclarationOnly?: boolean;
        sourceMap?: boolean;
        inlineSourceMap?: boolean;
        traceResolution?: boolean;
        [option: string]: CompilerOptionsValue | undefined;
    }
    type ReportEmitErrorSummary = (errorCount: number, filesInError: (ReportFileInError | undefined)[]) => void;
    interface ReportFileInError {
        fileName: string;
        line: number;
    }
    interface SolutionBuilderHostBase<T extends BuilderProgram> extends ProgramHost<T> {
        createDirectory?(path: string): void;
        /**
         * Should provide create directory and writeFile if done of invalidatedProjects is not invoked with
         * writeFileCallback
         */
        writeFile?(path: string, data: string, writeByteOrderMark?: boolean): void;
        getCustomTransformers?: (project: string) => CustomTransformers | undefined;
        getModifiedTime(fileName: string): Date | undefined;
        setModifiedTime(fileName: string, date: Date): void;
        deleteFile(fileName: string): void;
        getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
        reportDiagnostic: DiagnosticReporter;
        reportSolutionBuilderStatus: DiagnosticReporter;
        afterProgramEmitAndDiagnostics?(program: T): void;
    }
    interface SolutionBuilderHost<T extends BuilderProgram> extends SolutionBuilderHostBase<T> {
        reportErrorSummary?: ReportEmitErrorSummary;
    }
    interface SolutionBuilderWithWatchHost<T extends BuilderProgram> extends SolutionBuilderHostBase<T>, WatchHost {
    }
    interface SolutionBuilder<T extends BuilderProgram> {
        build(project?: string, cancellationToken?: CancellationToken, writeFile?: WriteFileCallback, getCustomTransformers?: (project: string) => CustomTransformers): ExitStatus;
        clean(project?: string): ExitStatus;
        buildReferences(project: string, cancellationToken?: CancellationToken, writeFile?: WriteFileCallback, getCustomTransformers?: (project: string) => CustomTransformers): ExitStatus;
        cleanReferences(project?: string): ExitStatus;
        getNextInvalidatedProject(cancellationToken?: CancellationToken): InvalidatedProject<T> | undefined;
    }
    enum InvalidatedProjectKind {
        Build = 0,
        UpdateOutputFileStamps = 1,
    }
    interface InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind;
        readonly project: ResolvedConfigFileName;
        /**
         *  To dispose this project and ensure that all the necessary actions are taken and state is updated accordingly
         */
        done(cancellationToken?: CancellationToken, writeFile?: WriteFileCallback, customTransformers?: CustomTransformers): ExitStatus;
        getCompilerOptions(): CompilerOptions;
        getCurrentDirectory(): string;
    }
    interface UpdateOutputFileStampsProject extends InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind.UpdateOutputFileStamps;
        updateOutputFileStatmps(): void;
    }
    interface BuildInvalidedProject<T extends BuilderProgram> extends InvalidatedProjectBase {
        readonly kind: InvalidatedProjectKind.Build;
        getBuilderProgram(): T | undefined;
        getProgram(): Program | undefined;
        getSourceFile(fileName: string): SourceFile | undefined;
        getSourceFiles(): readonly SourceFile[];
        getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
        getConfigFileParsingDiagnostics(): readonly Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getAllDependencies(sourceFile: SourceFile): readonly string[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
        getSemanticDiagnosticsOfNextAffectedFile(cancellationToken?: CancellationToken, ignoreSourceFile?: (sourceFile: SourceFile) => boolean): AffectedFileResult<readonly Diagnostic[]>;
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult | undefined;
    }
    type InvalidatedProject<T extends BuilderProgram> = UpdateOutputFileStampsProject | BuildInvalidedProject<T>;
    /** Returns true if commandline is --build and needs to be parsed useing parseBuildCommand */
    function isBuildCommand(commandLineArgs: readonly string[]): boolean;
    function getDefaultFormatCodeSettings(newLineCharacter?: string): FormatCodeSettings;
    /**
     * Represents an immutable snapshot of a script at a specified time.Once acquired, the
     * snapshot is observably immutable. i.e. the same calls with the same parameters will return
     * the same values.
     */
    interface IScriptSnapshot {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Gets the TextChangeRange that describe how the text changed between this text and
         * an older version.  This information is used by the incremental parser to determine
         * what sections of the script need to be re-parsed.  'undefined' can be returned if the
         * change range cannot be determined.  However, in that case, incremental parsing will
         * not happen and the entire document will be re - parsed.
         */
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange | undefined;
        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }
    namespace ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
    interface PreProcessedFileInfo {
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        libReferenceDirectives: FileReference[];
        importedFiles: FileReference[];
        ambientExternalModules?: string[];
        isLibFile: boolean;
    }
    interface HostCancellationToken {
        isCancellationRequested(): boolean;
    }
    interface InstallPackageOptions {
        fileName: Path;
        packageName: string;
    }
    interface PerformanceEvent {
        kind: "UpdateGraph" | "CreatePackageJsonAutoImportProvider";
        durationMs: number;
    }
    enum LanguageServiceMode {
        Semantic = 0,
        PartialSemantic = 1,
        Syntactic = 2,
    }
    interface IncompleteCompletionsCache {
        get(): CompletionInfo | undefined;
        set(response: CompletionInfo): void;
        clear(): void;
    }
    interface LanguageServiceHost extends GetEffectiveTypeRootsHost, MinimalResolutionCacheHost {
        getCompilationSettings(): CompilerOptions;
        getNewLine?(): string;
        getProjectVersion?(): string;
        getScriptFileNames(): string[];
        getScriptKind?(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): IScriptSnapshot | undefined;
        getProjectReferences?(): readonly ProjectReference[] | undefined;
        getLocalizedDiagnosticMessages?(): any;
        getCancellationToken?(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        log?(s: string): void;
        trace?(s: string): void;
        error?(s: string): void;
        useCaseSensitiveFileNames?(): boolean;
        readDirectory?(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
        realpath?(path: string): string;
        readFile(path: string, encoding?: string): string | undefined;
        fileExists(path: string): boolean;
        getTypeRootsVersion?(): number;
        /** @deprecated supply resolveModuleNameLiterals instead for resolution that can handle newer resolution modes like nodenext */
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile?: SourceFile): (ResolvedModule | undefined)[];
        getResolvedModuleWithFailedLookupLocationsFromCache?(modulename: string, containingFile: string, resolutionMode?: ResolutionMode): ResolvedModuleWithFailedLookupLocations | undefined;
        /** @deprecated supply resolveTypeReferenceDirectiveReferences instead for resolution that can handle newer resolution modes like nodenext */
        resolveTypeReferenceDirectives?(typeDirectiveNames: string[] | FileReference[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingFileMode?: ResolutionMode): (ResolvedTypeReferenceDirective | undefined)[];
        resolveModuleNameLiterals?(moduleLiterals: readonly StringLiteralLike[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile, reusedNames: readonly StringLiteralLike[] | undefined): readonly ResolvedModuleWithFailedLookupLocations[];
        resolveTypeReferenceDirectiveReferences?<T extends FileReference | string>(typeDirectiveReferences: readonly T[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile | undefined, reusedNames: readonly T[] | undefined): readonly ResolvedTypeReferenceDirectiveWithFailedLookupLocations[];
        getDirectories?(directoryName: string): string[];
        /**
         * Gets a set of custom transformers to use during emit.
         */
        getCustomTransformers?(): CustomTransformers | undefined;
        isKnownTypesPackageName?(name: string): boolean;
        installPackage?(options: InstallPackageOptions): Promise<ApplyCodeActionCommandResult>;
        writeFile?(fileName: string, content: string): void;
        getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
        jsDocParsingMode?: JSDocParsingMode | undefined;
    }
    type WithMetadata<T> = T & {
        metadata?: unknown;
    };
    enum SemanticClassificationFormat {
        Original = "original",
        TwentyTwenty = "2020",
    }
    interface LanguageService {
        /** This is used as a part of restarting the language service. */
        cleanupSemanticCache(): void;
        /**
         * Gets errors indicating invalid syntax in a file.
         *
         * In English, "this cdeo have, erorrs" is syntactically invalid because it has typos,
         * grammatical errors, and misplaced punctuation. Likewise, examples of syntax
         * errors in TypeScript are missing parentheses in an `if` statement, mismatched
         * curly braces, and using a reserved keyword as a variable name.
         *
         * These diagnostics are inexpensive to compute and don't require knowledge of
         * other files. Note that a non-empty result increases the likelihood of false positives
         * from `getSemanticDiagnostics`.
         *
         * While these represent the majority of syntax-related diagnostics, there are some
         * that require the type system, which will be present in `getSemanticDiagnostics`.
         *
         * @param fileName A path to the file you want syntactic diagnostics for
         */
        getSyntacticDiagnostics(fileName: string): DiagnosticWithLocation[];
        /**
         * Gets warnings or errors indicating type system issues in a given file.
         * Requesting semantic diagnostics may start up the type system and
         * run deferred work, so the first call may take longer than subsequent calls.
         *
         * Unlike the other get*Diagnostics functions, these diagnostics can potentially not
         * include a reference to a source file. Specifically, the first time this is called,
         * it will return global diagnostics with no associated location.
         *
         * To contrast the differences between semantic and syntactic diagnostics, consider the
         * sentence: "The sun is green." is syntactically correct; those are real English words with
         * correct sentence structure. However, it is semantically invalid, because it is not true.
         *
         * @param fileName A path to the file you want semantic diagnostics for
         */
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        /**
         * Gets suggestion diagnostics for a specific file. These diagnostics tend to
         * proactively suggest refactors, as opposed to diagnostics that indicate
         * potentially incorrect runtime behavior.
         *
         * @param fileName A path to the file you want semantic diagnostics for
         */
        getSuggestionDiagnostics(fileName: string): DiagnosticWithLocation[];
        /**
         * Gets global diagnostics related to the program configuration and compiler options.
         */
        getCompilerOptionsDiagnostics(): Diagnostic[];
        /** @deprecated Use getEncodedSyntacticClassifications instead. */
        getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getSyntacticClassifications(fileName: string, span: TextSpan, format: SemanticClassificationFormat): ClassifiedSpan[] | ClassifiedSpan2020[];
        /** @deprecated Use getEncodedSemanticClassifications instead. */
        getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getSemanticClassifications(fileName: string, span: TextSpan, format: SemanticClassificationFormat): ClassifiedSpan[] | ClassifiedSpan2020[];
        /** Encoded as triples of [start, length, ClassificationType]. */
        getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
        /**
         * Gets semantic highlights information for a particular file. Has two formats, an older
         * version used by VS and a format used by VS Code.
         *
         * @param fileName The path to the file
         * @param position A text span to return results within
         * @param format Which format to use, defaults to "original"
         * @returns a number array encoded as triples of [start, length, ClassificationType, ...].
         */
        getEncodedSemanticClassifications(fileName: string, span: TextSpan, format?: SemanticClassificationFormat): Classifications;
        /**
         * Gets completion entries at a particular position in a file.
         *
         * @param fileName The path to the file
         * @param position A zero-based index of the character where you want the entries
         * @param options An object describing how the request was triggered and what kinds
         * of code actions can be returned with the completions.
         * @param formattingSettings settings needed for calling formatting functions.
         */
        getCompletionsAtPosition(fileName: string, position: number, options: GetCompletionsAtPositionOptions | undefined, formattingSettings?: FormatCodeSettings): WithMetadata<CompletionInfo> | undefined;
        /**
         * Gets the extended details for a completion entry retrieved from `getCompletionsAtPosition`.
         *
         * @param fileName The path to the file
         * @param position A zero based index of the character where you want the entries
         * @param entryName The `name` from an existing completion which came from `getCompletionsAtPosition`
         * @param formatOptions How should code samples in the completions be formatted, can be undefined for backwards compatibility
         * @param source `source` property from the completion entry
         * @param preferences User settings, can be undefined for backwards compatibility
         * @param data `data` property from the completion entry
         */
        getCompletionEntryDetails(fileName: string, position: number, entryName: string, formatOptions: FormatCodeOptions | FormatCodeSettings | undefined, source: string | undefined, preferences: UserPreferences | undefined, data: CompletionEntryData | undefined): CompletionEntryDetails | undefined;
        getCompletionEntrySymbol(fileName: string, position: number, name: string, source: string | undefined): Symbol | undefined;
        /**
         * Gets semantic information about the identifier at a particular position in a
         * file. Quick info is what you typically see when you hover in an editor.
         *
         * @param fileName The path to the file
         * @param position A zero-based index of the character where you want the quick info
         * @param maximumLength Maximum length of a quickinfo text before it is truncated.
         */
        getQuickInfoAtPosition(fileName: string, position: number, maximumLength?: number): QuickInfo | undefined;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan | undefined;
        getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan | undefined;
        getSignatureHelpItems(fileName: string, position: number, options: SignatureHelpItemsOptions | undefined): SignatureHelpItems | undefined;
        getRenameInfo(fileName: string, position: number, preferences: UserPreferences): RenameInfo;
        /** @deprecated Use the signature with `UserPreferences` instead. */
        getRenameInfo(fileName: string, position: number, options?: RenameInfoOptions): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean, preferences: UserPreferences): readonly RenameLocation[] | undefined;
        /** @deprecated Pass `providePrefixAndSuffixTextForRename` as part of a `UserPreferences` parameter. */
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean, providePrefixAndSuffixTextForRename?: boolean): readonly RenameLocation[] | undefined;
        getSmartSelectionRange(fileName: string, position: number): SelectionRange;
        getDefinitionAtPosition(fileName: string, position: number): readonly DefinitionInfo[] | undefined;
        getDefinitionAndBoundSpan(fileName: string, position: number): DefinitionInfoAndBoundSpan | undefined;
        getTypeDefinitionAtPosition(fileName: string, position: number): readonly DefinitionInfo[] | undefined;
        getImplementationAtPosition(fileName: string, position: number): readonly ImplementationLocation[] | undefined;
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[] | undefined;
        findReferences(fileName: string, position: number): ReferencedSymbol[] | undefined;
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[] | undefined;
        getFileReferences(fileName: string): ReferenceEntry[];
        getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string, excludeDtsFiles?: boolean, excludeLibFiles?: boolean): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getNavigationTree(fileName: string): NavigationTree;
        prepareCallHierarchy(fileName: string, position: number): CallHierarchyItem | CallHierarchyItem[] | undefined;
        provideCallHierarchyIncomingCalls(fileName: string, position: number): CallHierarchyIncomingCall[];
        provideCallHierarchyOutgoingCalls(fileName: string, position: number): CallHierarchyOutgoingCall[];
        provideInlayHints(fileName: string, span: TextSpan, preferences: UserPreferences | undefined): InlayHint[];
        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions | EditorSettings): number;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getDocCommentTemplateAtPosition(fileName: string, position: number, options?: DocCommentTemplateOptions, formatOptions?: FormatCodeSettings): TextInsertion | undefined;
        isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): boolean;
        /**
         * This will return a defined result if the position is after the `>` of the opening tag, or somewhere in the text, of a JSXElement with no closing tag.
         * Editors should call this after `>` is typed.
         */
        getJsxClosingTagAtPosition(fileName: string, position: number): JsxClosingTagInfo | undefined;
        getLinkedEditingRangeAtPosition(fileName: string, position: number): LinkedEditingInfo | undefined;
        getSpanOfEnclosingComment(fileName: string, position: number, onlyMultiLine: boolean): TextSpan | undefined;
        toLineColumnOffset?(fileName: string, position: number): LineAndCharacter;
        getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: readonly number[], formatOptions: FormatCodeSettings, preferences: UserPreferences): readonly CodeFixAction[];
        getCombinedCodeFix(scope: CombinedCodeFixScope, fixId: {}, formatOptions: FormatCodeSettings, preferences: UserPreferences): CombinedCodeActions;
        applyCodeActionCommand(action: CodeActionCommand, formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult>;
        applyCodeActionCommand(action: CodeActionCommand[], formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult[]>;
        applyCodeActionCommand(action: CodeActionCommand | CodeActionCommand[], formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult | ApplyCodeActionCommandResult[]>;
        /** @deprecated `fileName` will be ignored */
        applyCodeActionCommand(fileName: string, action: CodeActionCommand): Promise<ApplyCodeActionCommandResult>;
        /** @deprecated `fileName` will be ignored */
        applyCodeActionCommand(fileName: string, action: CodeActionCommand[]): Promise<ApplyCodeActionCommandResult[]>;
        /** @deprecated `fileName` will be ignored */
        applyCodeActionCommand(fileName: string, action: CodeActionCommand | CodeActionCommand[]): Promise<ApplyCodeActionCommandResult | ApplyCodeActionCommandResult[]>;
        /**
         * @param includeInteractiveActions Include refactor actions that require additional arguments to be
         * passed when calling `getEditsForRefactor`. When true, clients should inspect the `isInteractive`
         * property of each returned `RefactorActionInfo` and ensure they are able to collect the appropriate
         * arguments for any interactive action before offering it.
         */
        getApplicableRefactors(fileName: string, positionOrRange: number | TextRange, preferences: UserPreferences | undefined, triggerReason?: RefactorTriggerReason, kind?: string, includeInteractiveActions?: boolean): ApplicableRefactorInfo[];
        getEditsForRefactor(fileName: string, formatOptions: FormatCodeSettings, positionOrRange: number | TextRange, refactorName: string, actionName: string, preferences: UserPreferences | undefined, interactiveRefactorArguments?: InteractiveRefactorArguments): RefactorEditInfo | undefined;
        getMoveToRefactoringFileSuggestions(fileName: string, positionOrRange: number | TextRange, preferences: UserPreferences | undefined, triggerReason?: RefactorTriggerReason, kind?: string): {
            newFileName: string;
            files: string[];
        };
        organizeImports(args: OrganizeImportsArgs, formatOptions: FormatCodeSettings, preferences: UserPreferences | undefined): readonly FileTextChanges[];
        getEditsForFileRename(oldFilePath: string, newFilePath: string, formatOptions: FormatCodeSettings, preferences: UserPreferences | undefined): readonly FileTextChanges[];
        getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean, forceDtsEmit?: boolean): EmitOutput;
        getProgram(): Program | undefined;
        toggleLineComment(fileName: string, textRange: TextRange): TextChange[];
        toggleMultilineComment(fileName: string, textRange: TextRange): TextChange[];
        commentSelection(fileName: string, textRange: TextRange): TextChange[];
        uncommentSelection(fileName: string, textRange: TextRange): TextChange[];
        getSupportedCodeFixes(fileName?: string): readonly string[];
        dispose(): void;
        preparePasteEditsForFile(fileName: string, copiedTextRanges: TextRange[]): boolean;
        getPasteEdits(args: PasteEditsArgs, formatOptions: FormatCodeSettings): PasteEdits;
    }
    interface JsxClosingTagInfo {
        readonly newText: string;
    }
    interface LinkedEditingInfo {
        readonly ranges: TextSpan[];
        wordPattern?: string;
    }
    interface CombinedCodeFixScope {
        type: "file";
        fileName: string;
    }
    enum OrganizeImportsMode {
        All = "All",
        SortAndCombine = "SortAndCombine",
        RemoveUnused = "RemoveUnused",
    }
    interface PasteEdits {
        edits: readonly FileTextChanges[];
        fixId?: {};
    }
    interface PasteEditsArgs {
        targetFile: string;
        pastedText: string[];
        pasteLocations: TextRange[];
        copiedFrom: {
            file: string;
            range: TextRange[];
        } | undefined;
        preferences: UserPreferences;
    }
    interface OrganizeImportsArgs extends CombinedCodeFixScope {
        /** @deprecated Use `mode` instead */
        skipDestructiveCodeActions?: boolean;
        mode?: OrganizeImportsMode;
    }
    type CompletionsTriggerCharacter = "." | '"' | "'" | "`" | "/" | "@" | "<" | "#" | " ";
    enum CompletionTriggerKind {
        /** Completion was triggered by typing an identifier, manual invocation (e.g Ctrl+Space) or via API. */
        Invoked = 1,
        /** Completion was triggered by a trigger character. */
        TriggerCharacter = 2,
        /** Completion was re-triggered as the current completion list is incomplete. */
        TriggerForIncompleteCompletions = 3,
    }
    interface GetCompletionsAtPositionOptions extends UserPreferences {
        /**
         * If the editor is asking for completions because a certain character was typed
         * (as opposed to when the user explicitly requested them) this should be set.
         */
        triggerCharacter?: CompletionsTriggerCharacter;
        triggerKind?: CompletionTriggerKind;
        /**
         * Include a `symbol` property on each completion entry object.
         * Symbols reference cyclic data structures and sometimes an entire TypeChecker instance,
         * so use caution when serializing or retaining completion entries retrieved with this option.
         * @default false
         */
        includeSymbol?: boolean;
        /** @deprecated Use includeCompletionsForModuleExports */
        includeExternalModuleExports?: boolean;
        /** @deprecated Use includeCompletionsWithInsertText */
        includeInsertTextCompletions?: boolean;
    }
    type SignatureHelpTriggerCharacter = "," | "(" | "<";
    type SignatureHelpRetriggerCharacter = SignatureHelpTriggerCharacter | ")";
    interface SignatureHelpItemsOptions {
        triggerReason?: SignatureHelpTriggerReason;
    }
    type SignatureHelpTriggerReason = SignatureHelpInvokedReason | SignatureHelpCharacterTypedReason | SignatureHelpRetriggeredReason;
    /**
     * Signals that the user manually requested signature help.
     * The language service will unconditionally attempt to provide a result.
     */
    interface SignatureHelpInvokedReason {
        kind: "invoked";
        triggerCharacter?: undefined;
    }
    /**
     * Signals that the signature help request came from a user typing a character.
     * Depending on the character and the syntactic context, the request may or may not be served a result.
     */
    interface SignatureHelpCharacterTypedReason {
        kind: "characterTyped";
        /**
         * Character that was responsible for triggering signature help.
         */
        triggerCharacter: SignatureHelpTriggerCharacter;
    }
    /**
     * Signals that this signature help request came from typing a character or moving the cursor.
     * This should only occur if a signature help session was already active and the editor needs to see if it should adjust.
     * The language service will unconditionally attempt to provide a result.
     * `triggerCharacter` can be `undefined` for a retrigger caused by a cursor move.
     */
    interface SignatureHelpRetriggeredReason {
        kind: "retrigger";
        /**
         * Character that was responsible for triggering signature help.
         */
        triggerCharacter?: SignatureHelpRetriggerCharacter;
    }
    interface ApplyCodeActionCommandResult {
        successMessage: string;
    }
    interface Classifications {
        spans: number[];
        endOfLineState: EndOfLineState;
    }
    interface ClassifiedSpan {
        textSpan: TextSpan;
        classificationType: ClassificationTypeNames;
    }
    interface ClassifiedSpan2020 {
        textSpan: TextSpan;
        classificationType: number;
    }
    /**
     * Navigation bar interface designed for visual studio's dual-column layout.
     * This does not form a proper tree.
     * The navbar is returned as a list of top-level items, each of which has a list of child items.
     * Child items always have an empty array for their `childItems`.
     */
    interface NavigationBarItem {
        text: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        spans: TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }
    /**
     * Node in a tree of nested declarations in a file.
     * The top node is always a script or module node.
     */
    interface NavigationTree {
        /** Name of the declaration, or a short description, e.g. "<class>". */
        text: string;
        kind: ScriptElementKind;
        /** ScriptElementKindModifier separated by commas, e.g. "public,abstract" */
        kindModifiers: string;
        /**
         * Spans of the nodes that generated this declaration.
         * There will be more than one if this is the result of merging.
         */
        spans: TextSpan[];
        nameSpan: TextSpan | undefined;
        /** Present if non-empty */
        childItems?: NavigationTree[];
    }
    interface CallHierarchyItem {
        name: string;
        kind: ScriptElementKind;
        kindModifiers?: string;
        file: string;
        span: TextSpan;
        selectionSpan: TextSpan;
        containerName?: string;
    }
    interface CallHierarchyIncomingCall {
        from: CallHierarchyItem;
        fromSpans: TextSpan[];
    }
    interface CallHierarchyOutgoingCall {
        to: CallHierarchyItem;
        fromSpans: TextSpan[];
    }
    enum InlayHintKind {
        Type = "Type",
        Parameter = "Parameter",
        Enum = "Enum",
    }
    interface InlayHint {
        /** This property will be the empty string when displayParts is set. */
        text: string;
        position: number;
        kind: InlayHintKind;
        whitespaceBefore?: boolean;
        whitespaceAfter?: boolean;
        displayParts?: InlayHintDisplayPart[];
    }
    interface InlayHintDisplayPart {
        text: string;
        span?: TextSpan;
        file?: string;
    }
    interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }
    interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }
    interface TextChange {
        span: TextSpan;
        newText: string;
    }
    interface FileTextChanges {
        fileName: string;
        textChanges: readonly TextChange[];
        isNewFile?: boolean;
    }
    interface CodeAction {
        /** Description of the code action to display in the UI of the editor */
        description: string;
        /** Text changes to apply to each file as part of the code action */
        changes: FileTextChanges[];
        /**
         * If the user accepts the code fix, the editor should send the action back in a `applyAction` request.
         * This allows the language service to have side effects (e.g. installing dependencies) upon a code fix.
         */
        commands?: CodeActionCommand[];
    }
    interface CodeFixAction extends CodeAction {
        /** Short name to identify the fix, for use by telemetry. */
        fixName: string;
        /**
         * If present, one may call 'getCombinedCodeFix' with this fixId.
         * This may be omitted to indicate that the code fix can't be applied in a group.
         */
        fixId?: {};
        fixAllDescription?: string;
    }
    interface CombinedCodeActions {
        changes: readonly FileTextChanges[];
        commands?: readonly CodeActionCommand[];
    }
    type CodeActionCommand = InstallPackageAction;
    interface InstallPackageAction {
    }
    /**
     * A set of one or more available refactoring actions, grouped under a parent refactoring.
     */
    interface ApplicableRefactorInfo {
        /**
         * The programmatic name of the refactoring
         */
        name: string;
        /**
         * A description of this refactoring category to show to the user.
         * If the refactoring gets inlined (see below), this text will not be visible.
         */
        description: string;
        /**
         * Inlineable refactorings can have their actions hoisted out to the top level
         * of a context menu. Non-inlineanable refactorings should always be shown inside
         * their parent grouping.
         *
         * If not specified, this value is assumed to be 'true'
         */
        inlineable?: boolean;
        actions: RefactorActionInfo[];
    }
    /**
     * Represents a single refactoring action - for example, the "Extract Method..." refactor might
     * offer several actions, each corresponding to a surround class or closure to extract into.
     */
    interface RefactorActionInfo {
        /**
         * The programmatic name of the refactoring action
         */
        name: string;
        /**
         * A description of this refactoring action to show to the user.
         * If the parent refactoring is inlined away, this will be the only text shown,
         * so this description should make sense by itself if the parent is inlineable=true
         */
        description: string;
        /**
         * A message to show to the user if the refactoring cannot be applied in
         * the current context.
         */
        notApplicableReason?: string;
        /**
         * The hierarchical dotted name of the refactor action.
         */
        kind?: string;
        /**
         * Indicates that the action requires additional arguments to be passed
         * when calling `getEditsForRefactor`.
         */
        isInteractive?: boolean;
        /**
         * Range of code the refactoring will be applied to.
         */
        range?: {
            start: {
                line: number;
                offset: number;
            };
            end: {
                line: number;
                offset: number;
            };
        };
    }
    /**
     * A set of edits to make in response to a refactor action, plus an optional
     * location where renaming should be invoked from
     */
    interface RefactorEditInfo {
        edits: FileTextChanges[];
        renameFilename?: string;
        renameLocation?: number;
        commands?: CodeActionCommand[];
        notApplicableReason?: string;
    }
    type RefactorTriggerReason = "implicit" | "invoked";
    interface TextInsertion {
        newText: string;
        /** The position in newText the caret should point to after the insertion. */
        caretOffset: number;
    }
    interface DocumentSpan {
        textSpan: TextSpan;
        fileName: string;
        /**
         * If the span represents a location that was remapped (e.g. via a .d.ts.map file),
         * then the original filename and span will be specified here
         */
        originalTextSpan?: TextSpan;
        originalFileName?: string;
        /**
         * If DocumentSpan.textSpan is the span for name of the declaration,
         * then this is the span for relevant declaration
         */
        contextSpan?: TextSpan;
        originalContextSpan?: TextSpan;
    }
    interface RenameLocation extends DocumentSpan {
        readonly prefixText?: string;
        readonly suffixText?: string;
    }
    interface ReferenceEntry extends DocumentSpan {
        isWriteAccess: boolean;
        isInString?: true;
    }
    interface ImplementationLocation extends DocumentSpan {
        kind: ScriptElementKind;
        displayParts: SymbolDisplayPart[];
    }
    enum HighlightSpanKind {
        none = "none",
        definition = "definition",
        reference = "reference",
        writtenReference = "writtenReference",
    }
    interface HighlightSpan {
        fileName?: string;
        isInString?: true;
        textSpan: TextSpan;
        contextSpan?: TextSpan;
        kind: HighlightSpanKind;
    }
    interface NavigateToItem {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        matchKind: "exact" | "prefix" | "substring" | "camelCase";
        isCaseSensitive: boolean;
        fileName: string;
        textSpan: TextSpan;
        containerName: string;
        containerKind: ScriptElementKind;
    }
    enum IndentStyle {
        None = 0,
        Block = 1,
        Smart = 2,
    }
    enum SemicolonPreference {
        Ignore = "ignore",
        Insert = "insert",
        Remove = "remove",
    }
    /** @deprecated - consider using EditorSettings instead */
    interface EditorOptions {
        BaseIndentSize?: number;
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
        IndentStyle: IndentStyle;
    }
    interface EditorSettings {
        baseIndentSize?: number;
        indentSize?: number;
        tabSize?: number;
        newLineCharacter?: string;
        convertTabsToSpaces?: boolean;
        indentStyle?: IndentStyle;
        trimTrailingWhitespace?: boolean;
    }
    /** @deprecated - consider using FormatCodeSettings instead */
    interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterConstructor?: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        InsertSpaceAfterTypeAssertion?: boolean;
        InsertSpaceBeforeFunctionParenthesis?: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
        insertSpaceBeforeTypeAnnotation?: boolean;
    }
    interface FormatCodeSettings extends EditorSettings {
        readonly insertSpaceAfterCommaDelimiter?: boolean;
        readonly insertSpaceAfterSemicolonInForStatements?: boolean;
        readonly insertSpaceBeforeAndAfterBinaryOperators?: boolean;
        readonly insertSpaceAfterConstructor?: boolean;
        readonly insertSpaceAfterKeywordsInControlFlowStatements?: boolean;
        readonly insertSpaceAfterFunctionKeywordForAnonymousFunctions?: boolean;
        readonly insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?: boolean;
        readonly insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?: boolean;
        readonly insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        readonly insertSpaceAfterOpeningAndBeforeClosingEmptyBraces?: boolean;
        readonly insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?: boolean;
        readonly insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        readonly insertSpaceAfterTypeAssertion?: boolean;
        readonly insertSpaceBeforeFunctionParenthesis?: boolean;
        readonly placeOpenBraceOnNewLineForFunctions?: boolean;
        readonly placeOpenBraceOnNewLineForControlBlocks?: boolean;
        readonly insertSpaceBeforeTypeAnnotation?: boolean;
        readonly indentMultiLineObjectLiteralBeginningOnBlankLine?: boolean;
        readonly semicolons?: SemicolonPreference;
        readonly indentSwitchCase?: boolean;
    }
    interface DefinitionInfo extends DocumentSpan {
        kind: ScriptElementKind;
        name: string;
        containerKind: ScriptElementKind;
        containerName: string;
        unverified?: boolean;
    }
    interface DefinitionInfoAndBoundSpan {
        definitions?: readonly DefinitionInfo[];
        textSpan: TextSpan;
    }
    interface ReferencedSymbolDefinitionInfo extends DefinitionInfo {
        displayParts: SymbolDisplayPart[];
    }
    interface ReferencedSymbol {
        definition: ReferencedSymbolDefinitionInfo;
        references: ReferencedSymbolEntry[];
    }
    interface ReferencedSymbolEntry extends ReferenceEntry {
        isDefinition?: boolean;
    }
    enum SymbolDisplayPartKind {
        aliasName = 0,
        className = 1,
        enumName = 2,
        fieldName = 3,
        interfaceName = 4,
        keyword = 5,
        lineBreak = 6,
        numericLiteral = 7,
        stringLiteral = 8,
        localName = 9,
        methodName = 10,
        moduleName = 11,
        operator = 12,
        parameterName = 13,
        propertyName = 14,
        punctuation = 15,
        space = 16,
        text = 17,
        typeParameterName = 18,
        enumMemberName = 19,
        functionName = 20,
        regularExpressionLiteral = 21,
        link = 22,
        linkName = 23,
        linkText = 24,
    }
    interface SymbolDisplayPart {
        /**
         * Text of an item describing the symbol.
         */
        text: string;
        /**
         * The symbol's kind (such as 'className' or 'parameterName' or plain 'text').
         */
        kind: string;
    }
    interface JSDocLinkDisplayPart extends SymbolDisplayPart {
        target: DocumentSpan;
    }
    interface JSDocTagInfo {
        name: string;
        text?: SymbolDisplayPart[];
    }
    interface QuickInfo {
        kind: ScriptElementKind;
        kindModifiers: string;
        textSpan: TextSpan;
        displayParts?: SymbolDisplayPart[];
        documentation?: SymbolDisplayPart[];
        tags?: JSDocTagInfo[];
        canIncreaseVerbosityLevel?: boolean;
    }
    type RenameInfo = RenameInfoSuccess | RenameInfoFailure;
    interface RenameInfoSuccess {
        canRename: true;
        /**
         * File or directory to rename.
         * If set, `getEditsForFileRename` should be called instead of `findRenameLocations`.
         */
        fileToRename?: string;
        displayName: string;
        /**
         * Full display name of item to be renamed.
         * If item to be renamed is a file, then this is the original text of the module specifer
         */
        fullDisplayName: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        triggerSpan: TextSpan;
    }
    interface RenameInfoFailure {
        canRename: false;
        localizedErrorMessage: string;
    }
    /**
     * @deprecated Use `UserPreferences` instead.
     */
    interface RenameInfoOptions {
        readonly allowRenameOfImportPath?: boolean;
    }
    interface DocCommentTemplateOptions {
        readonly generateReturnInDocTemplate?: boolean;
    }
    interface InteractiveRefactorArguments {
        targetFile: string;
    }
    /**
     * Signature help information for a single parameter
     */
    interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
        isRest?: boolean;
    }
    interface SelectionRange {
        textSpan: TextSpan;
        parent?: SelectionRange;
    }
    /**
     * Represents a single signature to show in signature help.
     * The id is used for subsequent calls into the language service to ask questions about the
     * signature help item in the context of any documents that have been updated.  i.e. after
     * an edit has happened, while signature help is still active, the host can ask important
     * questions like 'what parameter is the user currently contained within?'.
     */
    interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
    }
    /**
     * Represents a set of signature help items, and the preferred item that should be selected.
     */
    interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }
    enum CompletionInfoFlags {
        None = 0,
        MayIncludeAutoImports = 1,
        IsImportStatementCompletion = 2,
        IsContinuation = 4,
        ResolvedModuleSpecifiers = 8,
        ResolvedModuleSpecifiersBeyondLimit = 16,
        MayIncludeMethodSnippets = 32,
    }
    interface CompletionInfo {
        /** For performance telemetry. */
        flags?: CompletionInfoFlags;
        /** Not true for all global completions. This will be true if the enclosing scope matches a few syntax kinds. See `isSnippetScope`. */
        isGlobalCompletion: boolean;
        isMemberCompletion: boolean;
        /**
         * In the absence of `CompletionEntry["replacementSpan"]`, the editor may choose whether to use
         * this span or its default one. If `CompletionEntry["replacementSpan"]` is defined, that span
         * must be used to commit that completion entry.
         */
        optionalReplacementSpan?: TextSpan;
        /**
         * true when the current location also allows for a new identifier
         */
        isNewIdentifierLocation: boolean;
        /**
         * Indicates to client to continue requesting completions on subsequent keystrokes.
         */
        isIncomplete?: true;
        entries: CompletionEntry[];
        /**
         * Default commit characters for the completion entries.
         */
        defaultCommitCharacters?: string[];
    }
    interface CompletionEntryDataAutoImport {
        /**
         * The name of the property or export in the module's symbol table. Differs from the completion name
         * in the case of InternalSymbolName.ExportEquals and InternalSymbolName.Default.
         */
        exportName: string;
        exportMapKey?: ExportMapInfoKey;
        moduleSpecifier?: string;
        /** The file name declaring the export's module symbol, if it was an external module */
        fileName?: string;
        /** The module name (with quotes stripped) of the export's module symbol, if it was an ambient module */
        ambientModuleName?: string;
        /** True if the export was found in the package.json AutoImportProvider */
        isPackageJsonImport?: true;
    }
    interface CompletionEntryDataUnresolved extends CompletionEntryDataAutoImport {
        exportMapKey: ExportMapInfoKey;
    }
    interface CompletionEntryDataResolved extends CompletionEntryDataAutoImport {
        moduleSpecifier: string;
    }
    type CompletionEntryData = CompletionEntryDataUnresolved | CompletionEntryDataResolved;
    interface CompletionEntry {
        name: string;
        kind: ScriptElementKind;
        kindModifiers?: string;
        /**
         * A string that is used for comparing completion items so that they can be ordered. This
         * is often the same as the name but may be different in certain circumstances.
         */
        sortText: string;
        /**
         * Text to insert instead of `name`.
         * This is used to support bracketed completions; If `name` might be "a-b" but `insertText` would be `["a-b"]`,
         * coupled with `replacementSpan` to replace a dotted access with a bracket access.
         */
        insertText?: string;
        /**
         * A string that should be used when filtering a set of
         * completion items.
         */
        filterText?: string;
        /**
         * `insertText` should be interpreted as a snippet if true.
         */
        isSnippet?: true;
        /**
         * An optional span that indicates the text to be replaced by this completion item.
         * If present, this span should be used instead of the default one.
         * It will be set if the required span differs from the one generated by the default replacement behavior.
         */
        replacementSpan?: TextSpan;
        /**
         * Indicates whether commiting this completion entry will require additional code actions to be
         * made to avoid errors. The CompletionEntryDetails will have these actions.
         */
        hasAction?: true;
        /**
         * Identifier (not necessarily human-readable) identifying where this completion came from.
         */
        source?: string;
        /**
         * Human-readable description of the `source`.
         */
        sourceDisplay?: SymbolDisplayPart[];
        /**
         * Additional details for the label.
         */
        labelDetails?: CompletionEntryLabelDetails;
        /**
         * If true, this completion should be highlighted as recommended. There will only be one of these.
         * This will be set when we know the user should write an expression with a certain type and that type is an enum or constructable class.
         * Then either that enum/class or a namespace containing it will be the recommended symbol.
         */
        isRecommended?: true;
        /**
         * If true, this completion was generated from traversing the name table of an unchecked JS file,
         * and therefore may not be accurate.
         */
        isFromUncheckedFile?: true;
        /**
         * If true, this completion was for an auto-import of a module not yet in the program, but listed
         * in the project package.json. Used for telemetry reporting.
         */
        isPackageJsonImport?: true;
        /**
         * If true, this completion was an auto-import-style completion of an import statement (i.e., the
         * module specifier was inserted along with the imported identifier). Used for telemetry reporting.
         */
        isImportStatementCompletion?: true;
        /**
         * For API purposes.
         * Included for non-string completions only when `includeSymbol: true` option is passed to `getCompletionsAtPosition`.
         * @example Get declaration of completion: `symbol.valueDeclaration`
         */
        symbol?: Symbol;
        /**
         * A property to be sent back to TS Server in the CompletionDetailsRequest, along with `name`,
         * that allows TS Server to look up the symbol represented by the completion item, disambiguating
         * items with the same name. Currently only defined for auto-import completions, but the type is
         * `unknown` in the protocol, so it can be changed as needed to support other kinds of completions.
         * The presence of this property should generally not be used to assume that this completion entry
         * is an auto-import.
         */
        data?: CompletionEntryData;
        /**
         * If this completion entry is selected, typing a commit character will cause the entry to be accepted.
         */
        commitCharacters?: string[];
    }
    interface CompletionEntryLabelDetails {
        /**
         * An optional string which is rendered less prominently directly after
         * {@link CompletionEntry.name name}, without any spacing. Should be
         * used for function signatures or type annotations.
         */
        detail?: string;
        /**
         * An optional string which is rendered less prominently after
         * {@link CompletionEntryLabelDetails.detail}. Should be used for fully qualified
         * names or file path.
         */
        description?: string;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        displayParts: SymbolDisplayPart[];
        documentation?: SymbolDisplayPart[];
        tags?: JSDocTagInfo[];
        codeActions?: CodeAction[];
        /** @deprecated Use `sourceDisplay` instead. */
        source?: SymbolDisplayPart[];
        sourceDisplay?: SymbolDisplayPart[];
    }
    interface OutliningSpan {
        /** The span of the document to actually collapse. */
        textSpan: TextSpan;
        /** The span of the document to display when the user hovers over the collapsed span. */
        hintSpan: TextSpan;
        /** The text to display in the editor for the collapsed region. */
        bannerText: string;
        /**
         * Whether or not this region should be automatically collapsed when
         * the 'Collapse to Definitions' command is invoked.
         */
        autoCollapse: boolean;
        /**
         * Classification of the contents of the span
         */
        kind: OutliningSpanKind;
    }
    enum OutliningSpanKind {
        /** Single or multi-line comments */
        Comment = "comment",
        /** Sections marked by '// #region' and '// #endregion' comments */
        Region = "region",
        /** Declarations and expressions */
        Code = "code",
        /** Contiguous blocks of import declarations */
        Imports = "imports",
    }
    enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    enum EndOfLineState {
        None = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
        InTemplateHeadOrNoSubstitutionTemplate = 4,
        InTemplateMiddleOrTail = 5,
        InTemplateSubstitutionPosition = 6,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        BigIntLiteral = 7,
        StringLiteral = 8,
        RegExpLiteral = 9,
    }
    interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }
    interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }
    interface Classifier {
        /**
         * Gives lexical classifications of tokens on a line without any syntactic context.
         * For instance, a token consisting of the text 'string' can be either an identifier
         * named 'string' or the keyword 'string', however, because this classifier is not aware,
         * it relies on certain heuristics to give acceptable results. For classifications where
         * speed trumps accuracy, this function is preferable; however, for true accuracy, the
         * syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
         * lexical, syntactic, and semantic classifiers may issue the best user experience.
         *
         * @param text                      The text of a line to classify.
         * @param lexState                  The state of the lexical classifier at the end of the previous line.
         * @param syntacticClassifierAbsent Whether the client is *not* using a syntactic classifier.
         *                                  If there is no syntactic classifier (syntacticClassifierAbsent=true),
         *                                  certain heuristics may be used in its place; however, if there is a
         *                                  syntactic classifier (syntacticClassifierAbsent=false), certain
         *                                  classifications which may be incorrectly categorized will be given
         *                                  back as Identifiers in order to allow the syntactic classifier to
         *                                  subsume the classification.
         * @deprecated Use getLexicalClassifications instead.
         */
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean): ClassificationResult;
        getEncodedLexicalClassifications(text: string, endOfLineState: EndOfLineState, syntacticClassifierAbsent: boolean): Classifications;
    }
    enum ScriptElementKind {
        unknown = "",
        warning = "warning",
        /** predefined type (void) or keyword (class) */
        keyword = "keyword",
        /** top level script node */
        scriptElement = "script",
        /** module foo {} */
        moduleElement = "module",
        /** class X {} */
        classElement = "class",
        /** var x = class X {} */
        localClassElement = "local class",
        /** interface Y {} */
        interfaceElement = "interface",
        /** type T = ... */
        typeElement = "type",
        /** enum E */
        enumElement = "enum",
        enumMemberElement = "enum member",
        /**
         * Inside module and script only
         * const v = ..
         */
        variableElement = "var",
        /** Inside function */
        localVariableElement = "local var",
        /** using foo = ... */
        variableUsingElement = "using",
        /** await using foo = ... */
        variableAwaitUsingElement = "await using",
        /**
         * Inside module and script only
         * function f() { }
         */
        functionElement = "function",
        /** Inside function */
        localFunctionElement = "local function",
        /** class X { [public|private]* foo() {} } */
        memberFunctionElement = "method",
        /** class X { [public|private]* [get|set] foo:number; } */
        memberGetAccessorElement = "getter",
        memberSetAccessorElement = "setter",
        /**
         * class X { [public|private]* foo:number; }
         * interface Y { foo:number; }
         */
        memberVariableElement = "property",
        /** class X { [public|private]* accessor foo: number; } */
        memberAccessorVariableElement = "accessor",
        /**
         * class X { constructor() { } }
         * class X { static { } }
         */
        constructorImplementationElement = "constructor",
        /** interface Y { ():number; } */
        callSignatureElement = "call",
        /** interface Y { []:number; } */
        indexSignatureElement = "index",
        /** interface Y { new():Y; } */
        constructSignatureElement = "construct",
        /** function foo(*Y*: string) */
        parameterElement = "parameter",
        typeParameterElement = "type parameter",
        primitiveType = "primitive type",
        label = "label",
        alias = "alias",
        constElement = "const",
        letElement = "let",
        directory = "directory",
        externalModuleName = "external module name",
        /**
         * <JsxTagName attribute1 attribute2={0} />
         * @deprecated
         */
        jsxAttribute = "JSX attribute",
        /** String literal */
        string = "string",
        /** Jsdoc @link: in `{@link C link text}`, the before and after text "{@link " and "}" */
        link = "link",
        /** Jsdoc @link: in `{@link C link text}`, the entity name "C" */
        linkName = "link name",
        /** Jsdoc @link: in `{@link C link text}`, the link text "link text" */
        linkText = "link text",
    }
    enum ScriptElementKindModifier {
        none = "",
        publicMemberModifier = "public",
        privateMemberModifier = "private",
        protectedMemberModifier = "protected",
        exportedModifier = "export",
        ambientModifier = "declare",
        staticModifier = "static",
        abstractModifier = "abstract",
        optionalModifier = "optional",
        deprecatedModifier = "deprecated",
        dtsModifier = ".d.ts",
        tsModifier = ".ts",
        tsxModifier = ".tsx",
        jsModifier = ".js",
        jsxModifier = ".jsx",
        jsonModifier = ".json",
        dmtsModifier = ".d.mts",
        mtsModifier = ".mts",
        mjsModifier = ".mjs",
        dctsModifier = ".d.cts",
        ctsModifier = ".cts",
        cjsModifier = ".cjs",
    }
    enum ClassificationTypeNames {
        comment = "comment",
        identifier = "identifier",
        keyword = "keyword",
        numericLiteral = "number",
        bigintLiteral = "bigint",
        operator = "operator",
        stringLiteral = "string",
        whiteSpace = "whitespace",
        text = "text",
        punctuation = "punctuation",
        className = "class name",
        enumName = "enum name",
        interfaceName = "interface name",
        moduleName = "module name",
        typeParameterName = "type parameter name",
        typeAliasName = "type alias name",
        parameterName = "parameter name",
        docCommentTagName = "doc comment tag name",
        jsxOpenTagName = "jsx open tag name",
        jsxCloseTagName = "jsx close tag name",
        jsxSelfClosingTagName = "jsx self closing tag name",
        jsxAttribute = "jsx attribute",
        jsxText = "jsx text",
        jsxAttributeStringLiteralValue = "jsx attribute string literal value",
    }
    enum ClassificationType {
        comment = 1,
        identifier = 2,
        keyword = 3,
        numericLiteral = 4,
        operator = 5,
        stringLiteral = 6,
        regularExpressionLiteral = 7,
        whiteSpace = 8,
        text = 9,
        punctuation = 10,
        className = 11,
        enumName = 12,
        interfaceName = 13,
        moduleName = 14,
        typeParameterName = 15,
        typeAliasName = 16,
        parameterName = 17,
        docCommentTagName = 18,
        jsxOpenTagName = 19,
        jsxCloseTagName = 20,
        jsxSelfClosingTagName = 21,
        jsxAttribute = 22,
        jsxText = 23,
        jsxAttributeStringLiteralValue = 24,
        bigintLiteral = 25,
    }
    interface InlayHintsContext {
        file: SourceFile;
        program: Program;
        cancellationToken: CancellationToken;
        host: LanguageServiceHost;
        span: TextSpan;
        preferences: UserPreferences;
    }
    type ExportMapInfoKey = string & {
        __exportInfoKey: void;
    };
    /** The classifier is used for syntactic highlighting in editors via the TSServer */
    function createClassifier(): Classifier;
    interface DocumentHighlights {
        fileName: string;
        highlightSpans: HighlightSpan[];
    }
    function createDocumentRegistry(useCaseSensitiveFileNames?: boolean, currentDirectory?: string, jsDocParsingMode?: JSDocParsingMode): DocumentRegistry;
    /**
     * The document registry represents a store of SourceFile objects that can be shared between
     * multiple LanguageService instances. A LanguageService instance holds on the SourceFile (AST)
     * of files in the context.
     * SourceFile objects account for most of the memory usage by the language service. Sharing
     * the same DocumentRegistry instance between different instances of LanguageService allow
     * for more efficient memory utilization since all projects will share at least the library
     * file (lib.d.ts).
     *
     * A more advanced use of the document registry is to serialize sourceFile objects to disk
     * and re-hydrate them when needed.
     *
     * To create a default DocumentRegistry, use createDocumentRegistry to create one, and pass it
     * to all subsequent createLanguageService calls.
     */
    interface DocumentRegistry {
        /**
         * Request a stored SourceFile with a given fileName and compilationSettings.
         * The first call to acquire will call createLanguageServiceSourceFile to generate
         * the SourceFile if was not found in the registry.
         *
         * @param fileName The name of the file requested
         * @param compilationSettingsOrHost Some compilation settings like target affects the
         * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
         * multiple copies of the same file for different compilation settings. A minimal
         * resolution cache is needed to fully define a source file's shape when
         * the compilation settings include `module: node16`+, so providing a cache host
         * object should be preferred. A common host is a language service `ConfiguredProject`.
         * @param scriptSnapshot Text of the file. Only used if the file was not found
         * in the registry and a new one was created.
         * @param version Current version of the file. Only used if the file was not found
         * in the registry and a new one was created.
         */
        acquireDocument(fileName: string, compilationSettingsOrHost: CompilerOptions | MinimalResolutionCacheHost, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind, sourceFileOptions?: CreateSourceFileOptions | ScriptTarget): SourceFile;
        acquireDocumentWithKey(fileName: string, path: Path, compilationSettingsOrHost: CompilerOptions | MinimalResolutionCacheHost, key: DocumentRegistryBucketKey, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind, sourceFileOptions?: CreateSourceFileOptions | ScriptTarget): SourceFile;
        /**
         * Request an updated version of an already existing SourceFile with a given fileName
         * and compilationSettings. The update will in-turn call updateLanguageServiceSourceFile
         * to get an updated SourceFile.
         *
         * @param fileName The name of the file requested
         * @param compilationSettingsOrHost Some compilation settings like target affects the
         * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
         * multiple copies of the same file for different compilation settings. A minimal
         * resolution cache is needed to fully define a source file's shape when
         * the compilation settings include `module: node16`+, so providing a cache host
         * object should be preferred. A common host is a language service `ConfiguredProject`.
         * @param scriptSnapshot Text of the file.
         * @param version Current version of the file.
         */
        updateDocument(fileName: string, compilationSettingsOrHost: CompilerOptions | MinimalResolutionCacheHost, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind, sourceFileOptions?: CreateSourceFileOptions | ScriptTarget): SourceFile;
        updateDocumentWithKey(fileName: string, path: Path, compilationSettingsOrHost: CompilerOptions | MinimalResolutionCacheHost, key: DocumentRegistryBucketKey, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind, sourceFileOptions?: CreateSourceFileOptions | ScriptTarget): SourceFile;
        getKeyForCompilationSettings(settings: CompilerOptions): DocumentRegistryBucketKey;
        /**
         * Informs the DocumentRegistry that a file is not needed any longer.
         *
         * Note: It is not allowed to call release on a SourceFile that was not acquired from
         * this registry originally.
         *
         * @param fileName The name of the file to be released
         * @param compilationSettings The compilation settings used to acquire the file
         * @param scriptKind The script kind of the file to be released
         *
         * @deprecated pass scriptKind and impliedNodeFormat for correctness
         */
        releaseDocument(fileName: string, compilationSettings: CompilerOptions, scriptKind?: ScriptKind): void;
        /**
         * Informs the DocumentRegistry that a file is not needed any longer.
         *
         * Note: It is not allowed to call release on a SourceFile that was not acquired from
         * this registry originally.
         *
         * @param fileName The name of the file to be released
         * @param compilationSettings The compilation settings used to acquire the file
         * @param scriptKind The script kind of the file to be released
         * @param impliedNodeFormat The implied source file format of the file to be released
         */
        releaseDocument(fileName: string, compilationSettings: CompilerOptions, scriptKind: ScriptKind, impliedNodeFormat: ResolutionMode): void;
        /**
         * @deprecated pass scriptKind for and impliedNodeFormat correctness */
        releaseDocumentWithKey(path: Path, key: DocumentRegistryBucketKey, scriptKind?: ScriptKind): void;
        releaseDocumentWithKey(path: Path, key: DocumentRegistryBucketKey, scriptKind: ScriptKind, impliedNodeFormat: ResolutionMode): void;
        reportStats(): string;
    }
    type DocumentRegistryBucketKey = string & {
        __bucketKey: any;
    };
    function preProcessFile(sourceText: string, readImportFiles?: boolean, detectJavaScriptImports?: boolean): PreProcessedFileInfo;
    function transpileModule(input: string, transpileOptions: TranspileOptions): TranspileOutput;
    function transpileDeclaration(input: string, transpileOptions: TranspileOptions): TranspileOutput;
    function transpile(input: string, compilerOptions?: CompilerOptions, fileName?: string, diagnostics?: Diagnostic[], moduleName?: string): string;
    interface TranspileOptions {
        compilerOptions?: CompilerOptions;
        fileName?: string;
        reportDiagnostics?: boolean;
        moduleName?: string;
        renamedDependencies?: MapLike<string>;
        transformers?: CustomTransformers;
        jsDocParsingMode?: JSDocParsingMode;
    }
    interface TranspileOutput {
        outputText: string;
        diagnostics?: Diagnostic[];
        sourceMapText?: string;
    }
    function toEditorSettings(options: EditorOptions | EditorSettings): EditorSettings;
    function displayPartsToString(displayParts: SymbolDisplayPart[] | undefined): string;
    function getDefaultCompilerOptions(): CompilerOptions;
    function getSupportedCodeFixes(): readonly string[];
    function createLanguageServiceSourceFile(fileName: string, scriptSnapshot: IScriptSnapshot, scriptTargetOrOptions: ScriptTarget | CreateSourceFileOptions, version: string, setNodeParents: boolean, scriptKind?: ScriptKind): SourceFile;
    function updateLanguageServiceSourceFile(sourceFile: SourceFile, scriptSnapshot: IScriptSnapshot, version: string, textChangeRange: TextChangeRange | undefined, aggressiveChecks?: boolean): SourceFile;
    function createLanguageService(host: LanguageServiceHost, documentRegistry?: DocumentRegistry, syntaxOnlyOrLanguageServiceMode?: boolean | LanguageServiceMode): LanguageService;
    /**
     * Get the path of the default library files (lib.d.ts) as distributed with the typescript
     * node package.
     * The functionality is not supported if the ts module is consumed outside of a node module.
     */
    function getDefaultLibFilePath(options: CompilerOptions): string;
    /** The version of the language service API */
    const servicesVersion = "0.8";
    /**
     * Transform one or more nodes using the supplied transformers.
     * @param source A single `Node` or an array of `Node` objects.
     * @param transformers An array of `TransformerFactory` callbacks used to process the transformation.
     * @param compilerOptions Optional compiler options.
     */
    function transform<T extends Node>(source: T | T[], transformers: TransformerFactory<T>[], compilerOptions?: CompilerOptions): TransformationResult<T>;
}
export = ts;
