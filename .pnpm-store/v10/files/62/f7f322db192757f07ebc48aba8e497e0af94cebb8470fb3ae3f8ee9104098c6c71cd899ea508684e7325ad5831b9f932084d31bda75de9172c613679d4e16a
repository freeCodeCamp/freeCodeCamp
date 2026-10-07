(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "vscode-languageserver-types", "vscode-languageserver-textdocument"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileType = exports.ClientCapabilities = exports.DocumentHighlightKind = exports.VersionedTextDocumentIdentifier = exports.TextDocumentEdit = exports.CodeActionKind = exports.TextEdit = exports.WorkspaceEdit = exports.DocumentLink = exports.DocumentHighlight = exports.CodeAction = exports.Command = exports.CodeActionContext = exports.MarkedString = exports.Hover = exports.Location = exports.DocumentSymbol = exports.SymbolKind = exports.SymbolInformation = exports.InsertTextFormat = exports.CompletionItemTag = exports.CompletionList = exports.CompletionItemKind = exports.CompletionItem = exports.DiagnosticSeverity = exports.Diagnostic = exports.SelectionRange = exports.FoldingRangeKind = exports.FoldingRange = exports.ColorPresentation = exports.ColorInformation = exports.Color = exports.MarkupKind = exports.MarkupContent = exports.DocumentUri = exports.Position = exports.Range = exports.TextDocument = void 0;
    const vscode_languageserver_types_1 = require("vscode-languageserver-types");
    Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return vscode_languageserver_types_1.Range; } });
    Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return vscode_languageserver_types_1.Position; } });
    Object.defineProperty(exports, "DocumentUri", { enumerable: true, get: function () { return vscode_languageserver_types_1.DocumentUri; } });
    Object.defineProperty(exports, "MarkupContent", { enumerable: true, get: function () { return vscode_languageserver_types_1.MarkupContent; } });
    Object.defineProperty(exports, "MarkupKind", { enumerable: true, get: function () { return vscode_languageserver_types_1.MarkupKind; } });
    Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return vscode_languageserver_types_1.Color; } });
    Object.defineProperty(exports, "ColorInformation", { enumerable: true, get: function () { return vscode_languageserver_types_1.ColorInformation; } });
    Object.defineProperty(exports, "ColorPresentation", { enumerable: true, get: function () { return vscode_languageserver_types_1.ColorPresentation; } });
    Object.defineProperty(exports, "FoldingRange", { enumerable: true, get: function () { return vscode_languageserver_types_1.FoldingRange; } });
    Object.defineProperty(exports, "FoldingRangeKind", { enumerable: true, get: function () { return vscode_languageserver_types_1.FoldingRangeKind; } });
    Object.defineProperty(exports, "SelectionRange", { enumerable: true, get: function () { return vscode_languageserver_types_1.SelectionRange; } });
    Object.defineProperty(exports, "Diagnostic", { enumerable: true, get: function () { return vscode_languageserver_types_1.Diagnostic; } });
    Object.defineProperty(exports, "DiagnosticSeverity", { enumerable: true, get: function () { return vscode_languageserver_types_1.DiagnosticSeverity; } });
    Object.defineProperty(exports, "CompletionItem", { enumerable: true, get: function () { return vscode_languageserver_types_1.CompletionItem; } });
    Object.defineProperty(exports, "CompletionItemKind", { enumerable: true, get: function () { return vscode_languageserver_types_1.CompletionItemKind; } });
    Object.defineProperty(exports, "CompletionList", { enumerable: true, get: function () { return vscode_languageserver_types_1.CompletionList; } });
    Object.defineProperty(exports, "CompletionItemTag", { enumerable: true, get: function () { return vscode_languageserver_types_1.CompletionItemTag; } });
    Object.defineProperty(exports, "InsertTextFormat", { enumerable: true, get: function () { return vscode_languageserver_types_1.InsertTextFormat; } });
    Object.defineProperty(exports, "SymbolInformation", { enumerable: true, get: function () { return vscode_languageserver_types_1.SymbolInformation; } });
    Object.defineProperty(exports, "SymbolKind", { enumerable: true, get: function () { return vscode_languageserver_types_1.SymbolKind; } });
    Object.defineProperty(exports, "DocumentSymbol", { enumerable: true, get: function () { return vscode_languageserver_types_1.DocumentSymbol; } });
    Object.defineProperty(exports, "Location", { enumerable: true, get: function () { return vscode_languageserver_types_1.Location; } });
    Object.defineProperty(exports, "Hover", { enumerable: true, get: function () { return vscode_languageserver_types_1.Hover; } });
    Object.defineProperty(exports, "MarkedString", { enumerable: true, get: function () { return vscode_languageserver_types_1.MarkedString; } });
    Object.defineProperty(exports, "CodeActionContext", { enumerable: true, get: function () { return vscode_languageserver_types_1.CodeActionContext; } });
    Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return vscode_languageserver_types_1.Command; } });
    Object.defineProperty(exports, "CodeAction", { enumerable: true, get: function () { return vscode_languageserver_types_1.CodeAction; } });
    Object.defineProperty(exports, "DocumentHighlight", { enumerable: true, get: function () { return vscode_languageserver_types_1.DocumentHighlight; } });
    Object.defineProperty(exports, "DocumentLink", { enumerable: true, get: function () { return vscode_languageserver_types_1.DocumentLink; } });
    Object.defineProperty(exports, "WorkspaceEdit", { enumerable: true, get: function () { return vscode_languageserver_types_1.WorkspaceEdit; } });
    Object.defineProperty(exports, "TextEdit", { enumerable: true, get: function () { return vscode_languageserver_types_1.TextEdit; } });
    Object.defineProperty(exports, "CodeActionKind", { enumerable: true, get: function () { return vscode_languageserver_types_1.CodeActionKind; } });
    Object.defineProperty(exports, "TextDocumentEdit", { enumerable: true, get: function () { return vscode_languageserver_types_1.TextDocumentEdit; } });
    Object.defineProperty(exports, "VersionedTextDocumentIdentifier", { enumerable: true, get: function () { return vscode_languageserver_types_1.VersionedTextDocumentIdentifier; } });
    Object.defineProperty(exports, "DocumentHighlightKind", { enumerable: true, get: function () { return vscode_languageserver_types_1.DocumentHighlightKind; } });
    const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
    Object.defineProperty(exports, "TextDocument", { enumerable: true, get: function () { return vscode_languageserver_textdocument_1.TextDocument; } });
    var ClientCapabilities;
    (function (ClientCapabilities) {
        ClientCapabilities.LATEST = {
            textDocument: {
                completion: {
                    completionItem: {
                        documentationFormat: [vscode_languageserver_types_1.MarkupKind.Markdown, vscode_languageserver_types_1.MarkupKind.PlainText]
                    }
                },
                hover: {
                    contentFormat: [vscode_languageserver_types_1.MarkupKind.Markdown, vscode_languageserver_types_1.MarkupKind.PlainText]
                }
            }
        };
    })(ClientCapabilities || (exports.ClientCapabilities = ClientCapabilities = {}));
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
    })(FileType || (exports.FileType = FileType = {}));
});
