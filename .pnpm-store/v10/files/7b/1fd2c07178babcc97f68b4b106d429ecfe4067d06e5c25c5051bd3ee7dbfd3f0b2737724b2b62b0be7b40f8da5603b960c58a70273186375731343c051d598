import { MarkupKind } from '../../../vscode-languageserver-types/lib/esm/main.js';
export { CodeAction, CodeActionContext, CodeActionKind, Color, ColorInformation, ColorPresentation, Command, CompletionItem, CompletionItemKind, CompletionItemTag, CompletionList, Diagnostic, DiagnosticSeverity, DocumentHighlight, DocumentHighlightKind, DocumentLink, DocumentSymbol, DocumentUri, FoldingRange, FoldingRangeKind, Hover, InsertTextFormat, Location, MarkedString, MarkupContent, Position, Range, SelectionRange, SymbolInformation, SymbolKind, TextDocumentEdit, TextEdit, VersionedTextDocumentIdentifier, WorkspaceEdit } from '../../../vscode-languageserver-types/lib/esm/main.js';
export { TextDocument } from '../../../vscode-languageserver-textdocument/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ClientCapabilities;
(function (ClientCapabilities) {
    ClientCapabilities.LATEST = {
        textDocument: {
            completion: {
                completionItem: {
                    documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText]
                }
            },
            hover: {
                contentFormat: [MarkupKind.Markdown, MarkupKind.PlainText]
            }
        }
    };
})(ClientCapabilities || (ClientCapabilities = {}));
var FileType;
(function (FileType) {
    /**
     * The file type is unknown.
     */
    FileType[FileType["Unknown"] = 0] = "Unknown";
    /**
     * A regular file.
     */
    FileType[FileType["File"] = 1] = "File";
    /**
     * A directory.
     */
    FileType[FileType["Directory"] = 2] = "Directory";
    /**
     * A symbolic link to a file.
     */
    FileType[FileType["SymbolicLink"] = 64] = "SymbolicLink";
})(FileType || (FileType = {}));

export { ClientCapabilities, FileType, MarkupKind };
