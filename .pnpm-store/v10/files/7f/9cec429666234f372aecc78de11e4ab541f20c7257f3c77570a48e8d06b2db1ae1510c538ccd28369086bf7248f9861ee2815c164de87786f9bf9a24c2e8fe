/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import { Range, Position, DocumentUri, MarkupContent, MarkupKind, Color, ColorInformation, ColorPresentation, FoldingRange, FoldingRangeKind, SelectionRange, Diagnostic, DiagnosticSeverity, CompletionItem, CompletionItemKind, CompletionList, CompletionItemTag, InsertTextFormat, SymbolInformation, SymbolKind, DocumentSymbol, Location, Hover, MarkedString, CodeActionContext, Command, CodeAction, DocumentHighlight, DocumentLink, WorkspaceEdit, TextEdit, CodeActionKind, TextDocumentEdit, VersionedTextDocumentIdentifier, DocumentHighlightKind } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';
export { TextDocument, Range, Position, DocumentUri, MarkupContent, MarkupKind, Color, ColorInformation, ColorPresentation, FoldingRange, FoldingRangeKind, SelectionRange, Diagnostic, DiagnosticSeverity, CompletionItem, CompletionItemKind, CompletionList, CompletionItemTag, InsertTextFormat, SymbolInformation, SymbolKind, DocumentSymbol, Location, Hover, MarkedString, CodeActionContext, Command, CodeAction, DocumentHighlight, DocumentLink, WorkspaceEdit, TextEdit, CodeActionKind, TextDocumentEdit, VersionedTextDocumentIdentifier, DocumentHighlightKind };
export var ClientCapabilities;
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
export var FileType;
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
