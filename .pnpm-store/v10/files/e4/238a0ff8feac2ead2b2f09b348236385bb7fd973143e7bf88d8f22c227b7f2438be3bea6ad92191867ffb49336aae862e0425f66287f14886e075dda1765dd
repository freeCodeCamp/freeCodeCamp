import { MarkupKind } from '../../../vscode-languageserver-types/lib/esm/main.js';
export { Color, ColorInformation, ColorPresentation, Command, CompletionItem, CompletionItemKind, CompletionItemTag, CompletionList, Diagnostic, DocumentHighlight, DocumentHighlightKind, DocumentLink, DocumentSymbol, DocumentUri, FoldingRange, FoldingRangeKind, FormattingOptions, Hover, InsertReplaceEdit, InsertTextFormat, InsertTextMode, Location, MarkedString, MarkupContent, Position, Range, SelectionRange, SymbolInformation, SymbolKind, TextEdit, WorkspaceEdit } from '../../../vscode-languageserver-types/lib/esm/main.js';
export { TextDocument } from '../../../vscode-languageserver-textdocument/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var TokenType;
(function (TokenType) {
    TokenType[TokenType["StartCommentTag"] = 0] = "StartCommentTag";
    TokenType[TokenType["Comment"] = 1] = "Comment";
    TokenType[TokenType["EndCommentTag"] = 2] = "EndCommentTag";
    TokenType[TokenType["StartTagOpen"] = 3] = "StartTagOpen";
    TokenType[TokenType["StartTagClose"] = 4] = "StartTagClose";
    TokenType[TokenType["StartTagSelfClose"] = 5] = "StartTagSelfClose";
    TokenType[TokenType["StartTag"] = 6] = "StartTag";
    TokenType[TokenType["EndTagOpen"] = 7] = "EndTagOpen";
    TokenType[TokenType["EndTagClose"] = 8] = "EndTagClose";
    TokenType[TokenType["EndTag"] = 9] = "EndTag";
    TokenType[TokenType["DelimiterAssign"] = 10] = "DelimiterAssign";
    TokenType[TokenType["AttributeName"] = 11] = "AttributeName";
    TokenType[TokenType["AttributeValue"] = 12] = "AttributeValue";
    TokenType[TokenType["StartDoctypeTag"] = 13] = "StartDoctypeTag";
    TokenType[TokenType["Doctype"] = 14] = "Doctype";
    TokenType[TokenType["EndDoctypeTag"] = 15] = "EndDoctypeTag";
    TokenType[TokenType["Content"] = 16] = "Content";
    TokenType[TokenType["Whitespace"] = 17] = "Whitespace";
    TokenType[TokenType["Unknown"] = 18] = "Unknown";
    TokenType[TokenType["Script"] = 19] = "Script";
    TokenType[TokenType["Styles"] = 20] = "Styles";
    TokenType[TokenType["EOS"] = 21] = "EOS";
})(TokenType || (TokenType = {}));
var ScannerState;
(function (ScannerState) {
    ScannerState[ScannerState["WithinContent"] = 0] = "WithinContent";
    ScannerState[ScannerState["AfterOpeningStartTag"] = 1] = "AfterOpeningStartTag";
    ScannerState[ScannerState["AfterOpeningEndTag"] = 2] = "AfterOpeningEndTag";
    ScannerState[ScannerState["WithinDoctype"] = 3] = "WithinDoctype";
    ScannerState[ScannerState["WithinTag"] = 4] = "WithinTag";
    ScannerState[ScannerState["WithinEndTag"] = 5] = "WithinEndTag";
    ScannerState[ScannerState["WithinComment"] = 6] = "WithinComment";
    ScannerState[ScannerState["WithinScriptContent"] = 7] = "WithinScriptContent";
    ScannerState[ScannerState["WithinStyleContent"] = 8] = "WithinStyleContent";
    ScannerState[ScannerState["AfterAttributeName"] = 9] = "AfterAttributeName";
    ScannerState[ScannerState["BeforeAttributeValue"] = 10] = "BeforeAttributeValue";
})(ScannerState || (ScannerState = {}));
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

export { ClientCapabilities, FileType, MarkupKind, ScannerState, TokenType };
