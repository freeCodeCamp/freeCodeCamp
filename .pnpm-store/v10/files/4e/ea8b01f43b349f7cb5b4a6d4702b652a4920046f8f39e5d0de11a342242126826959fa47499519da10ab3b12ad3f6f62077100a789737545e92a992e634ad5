(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /* --------------------------------------------------------------------------------------------
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     * ------------------------------------------------------------------------------------------ */
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocument = exports.EOL = exports.WorkspaceFolder = exports.InlineCompletionContext = exports.SelectedCompletionInfo = exports.InlineCompletionTriggerKind = exports.InlineCompletionList = exports.InlineCompletionItem = exports.StringValue = exports.InlayHint = exports.InlayHintLabelPart = exports.InlayHintKind = exports.InlineValueContext = exports.InlineValueEvaluatableExpression = exports.InlineValueVariableLookup = exports.InlineValueText = exports.SemanticTokens = exports.SemanticTokenModifiers = exports.SemanticTokenTypes = exports.SelectionRange = exports.DocumentLink = exports.FormattingOptions = exports.CodeLens = exports.CodeAction = exports.CodeActionContext = exports.CodeActionTriggerKind = exports.CodeActionKind = exports.DocumentSymbol = exports.WorkspaceSymbol = exports.SymbolInformation = exports.SymbolTag = exports.SymbolKind = exports.DocumentHighlight = exports.DocumentHighlightKind = exports.SignatureInformation = exports.ParameterInformation = exports.Hover = exports.MarkedString = exports.CompletionList = exports.CompletionItem = exports.CompletionItemLabelDetails = exports.InsertTextMode = exports.InsertReplaceEdit = exports.CompletionItemTag = exports.InsertTextFormat = exports.CompletionItemKind = exports.MarkupContent = exports.MarkupKind = exports.TextDocumentItem = exports.OptionalVersionedTextDocumentIdentifier = exports.VersionedTextDocumentIdentifier = exports.TextDocumentIdentifier = exports.WorkspaceChange = exports.WorkspaceEdit = exports.DeleteFile = exports.RenameFile = exports.CreateFile = exports.TextDocumentEdit = exports.AnnotatedTextEdit = exports.ChangeAnnotationIdentifier = exports.ChangeAnnotation = exports.TextEdit = exports.Command = exports.Diagnostic = exports.CodeDescription = exports.DiagnosticTag = exports.DiagnosticSeverity = exports.DiagnosticRelatedInformation = exports.FoldingRange = exports.FoldingRangeKind = exports.ColorPresentation = exports.ColorInformation = exports.Color = exports.LocationLink = exports.Location = exports.Range = exports.Position = exports.uinteger = exports.integer = exports.URI = exports.DocumentUri = void 0;
    var DocumentUri;
    (function (DocumentUri) {
        function is(value) {
            return typeof value === 'string';
        }
        DocumentUri.is = is;
    })(DocumentUri || (exports.DocumentUri = DocumentUri = {}));
    var URI;
    (function (URI) {
        function is(value) {
            return typeof value === 'string';
        }
        URI.is = is;
    })(URI || (exports.URI = URI = {}));
    var integer;
    (function (integer) {
        integer.MIN_VALUE = -2147483648;
        integer.MAX_VALUE = 2147483647;
        function is(value) {
            return typeof value === 'number' && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
        }
        integer.is = is;
    })(integer || (exports.integer = integer = {}));
    var uinteger;
    (function (uinteger) {
        uinteger.MIN_VALUE = 0;
        uinteger.MAX_VALUE = 2147483647;
        function is(value) {
            return typeof value === 'number' && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
        }
        uinteger.is = is;
    })(uinteger || (exports.uinteger = uinteger = {}));
    /**
     * The Position namespace provides helper functions to work with
     * {@link Position} literals.
     */
    var Position;
    (function (Position) {
        /**
         * Creates a new Position literal from the given line and character.
         * @param line The position's line.
         * @param character The position's character.
         */
        function create(line, character) {
            if (line === Number.MAX_VALUE) {
                line = uinteger.MAX_VALUE;
            }
            if (character === Number.MAX_VALUE) {
                character = uinteger.MAX_VALUE;
            }
            return { line: line, character: character };
        }
        Position.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Position} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position.is = is;
    })(Position || (exports.Position = Position = {}));
    /**
     * The Range namespace provides helper functions to work with
     * {@link Range} literals.
     */
    var Range;
    (function (Range) {
        function create(one, two, three, four) {
            if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
                return { start: Position.create(one, two), end: Position.create(three, four) };
            }
            else if (Position.is(one) && Position.is(two)) {
                return { start: one, end: two };
            }
            else {
                throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
            }
        }
        Range.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Range} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
        }
        Range.is = is;
    })(Range || (exports.Range = Range = {}));
    /**
     * The Location namespace provides helper functions to work with
     * {@link Location} literals.
     */
    var Location;
    (function (Location) {
        /**
         * Creates a Location literal.
         * @param uri The location's uri.
         * @param range The location's range.
         */
        function create(uri, range) {
            return { uri: uri, range: range };
        }
        Location.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Location} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location.is = is;
    })(Location || (exports.Location = Location = {}));
    /**
     * The LocationLink namespace provides helper functions to work with
     * {@link LocationLink} literals.
     */
    var LocationLink;
    (function (LocationLink) {
        /**
         * Creates a LocationLink literal.
         * @param targetUri The definition's uri.
         * @param targetRange The full range of the definition.
         * @param targetSelectionRange The span of the symbol definition at the target.
         * @param originSelectionRange The span of the symbol being defined in the originating source file.
         */
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
            return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
        }
        LocationLink.create = create;
        /**
         * Checks whether the given literal conforms to the {@link LocationLink} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
                && Range.is(candidate.targetSelectionRange)
                && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink.is = is;
    })(LocationLink || (exports.LocationLink = LocationLink = {}));
    /**
     * The Color namespace provides helper functions to work with
     * {@link Color} literals.
     */
    var Color;
    (function (Color) {
        /**
         * Creates a new Color literal.
         */
        function create(red, green, blue, alpha) {
            return {
                red: red,
                green: green,
                blue: blue,
                alpha: alpha,
            };
        }
        Color.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Color} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1)
                && Is.numberRange(candidate.green, 0, 1)
                && Is.numberRange(candidate.blue, 0, 1)
                && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color.is = is;
    })(Color || (exports.Color = Color = {}));
    /**
     * The ColorInformation namespace provides helper functions to work with
     * {@link ColorInformation} literals.
     */
    var ColorInformation;
    (function (ColorInformation) {
        /**
         * Creates a new ColorInformation literal.
         */
        function create(range, color) {
            return {
                range: range,
                color: color,
            };
        }
        ColorInformation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation.is = is;
    })(ColorInformation || (exports.ColorInformation = ColorInformation = {}));
    /**
     * The Color namespace provides helper functions to work with
     * {@link ColorPresentation} literals.
     */
    var ColorPresentation;
    (function (ColorPresentation) {
        /**
         * Creates a new ColorInformation literal.
         */
        function create(label, textEdit, additionalTextEdits) {
            return {
                label: label,
                textEdit: textEdit,
                additionalTextEdits: additionalTextEdits,
            };
        }
        ColorPresentation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.label)
                && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
                && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation.is = is;
    })(ColorPresentation || (exports.ColorPresentation = ColorPresentation = {}));
    /**
     * A set of predefined range kinds.
     */
    var FoldingRangeKind;
    (function (FoldingRangeKind) {
        /**
         * Folding range for a comment
         */
        FoldingRangeKind.Comment = 'comment';
        /**
         * Folding range for an import or include
         */
        FoldingRangeKind.Imports = 'imports';
        /**
         * Folding range for a region (e.g. `#region`)
         */
        FoldingRangeKind.Region = 'region';
    })(FoldingRangeKind || (exports.FoldingRangeKind = FoldingRangeKind = {}));
    /**
     * The folding range namespace provides helper functions to work with
     * {@link FoldingRange} literals.
     */
    var FoldingRange;
    (function (FoldingRange) {
        /**
         * Creates a new FoldingRange literal.
         */
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
            var result = {
                startLine: startLine,
                endLine: endLine
            };
            if (Is.defined(startCharacter)) {
                result.startCharacter = startCharacter;
            }
            if (Is.defined(endCharacter)) {
                result.endCharacter = endCharacter;
            }
            if (Is.defined(kind)) {
                result.kind = kind;
            }
            if (Is.defined(collapsedText)) {
                result.collapsedText = collapsedText;
            }
            return result;
        }
        FoldingRange.create = create;
        /**
         * Checks whether the given literal conforms to the {@link FoldingRange} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine)
                && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter))
                && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter))
                && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange.is = is;
    })(FoldingRange || (exports.FoldingRange = FoldingRange = {}));
    /**
     * The DiagnosticRelatedInformation namespace provides helper functions to work with
     * {@link DiagnosticRelatedInformation} literals.
     */
    var DiagnosticRelatedInformation;
    (function (DiagnosticRelatedInformation) {
        /**
         * Creates a new DiagnosticRelatedInformation literal.
         */
        function create(location, message) {
            return {
                location: location,
                message: message
            };
        }
        DiagnosticRelatedInformation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation.is = is;
    })(DiagnosticRelatedInformation || (exports.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
    /**
     * The diagnostic's severity.
     */
    var DiagnosticSeverity;
    (function (DiagnosticSeverity) {
        /**
         * Reports an error.
         */
        DiagnosticSeverity.Error = 1;
        /**
         * Reports a warning.
         */
        DiagnosticSeverity.Warning = 2;
        /**
         * Reports an information.
         */
        DiagnosticSeverity.Information = 3;
        /**
         * Reports a hint.
         */
        DiagnosticSeverity.Hint = 4;
    })(DiagnosticSeverity || (exports.DiagnosticSeverity = DiagnosticSeverity = {}));
    /**
     * The diagnostic tags.
     *
     * @since 3.15.0
     */
    var DiagnosticTag;
    (function (DiagnosticTag) {
        /**
         * Unused or unnecessary code.
         *
         * Clients are allowed to render diagnostics with this tag faded out instead of having
         * an error squiggle.
         */
        DiagnosticTag.Unnecessary = 1;
        /**
         * Deprecated or obsolete code.
         *
         * Clients are allowed to rendered diagnostics with this tag strike through.
         */
        DiagnosticTag.Deprecated = 2;
    })(DiagnosticTag || (exports.DiagnosticTag = DiagnosticTag = {}));
    /**
     * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
     *
     * @since 3.16.0
     */
    var CodeDescription;
    (function (CodeDescription) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription.is = is;
    })(CodeDescription || (exports.CodeDescription = CodeDescription = {}));
    /**
     * The Diagnostic namespace provides helper functions to work with
     * {@link Diagnostic} literals.
     */
    var Diagnostic;
    (function (Diagnostic) {
        /**
         * Creates a new Diagnostic literal.
         */
        function create(range, message, severity, code, source, relatedInformation) {
            var result = { range: range, message: message };
            if (Is.defined(severity)) {
                result.severity = severity;
            }
            if (Is.defined(code)) {
                result.code = code;
            }
            if (Is.defined(source)) {
                result.source = source;
            }
            if (Is.defined(relatedInformation)) {
                result.relatedInformation = relatedInformation;
            }
            return result;
        }
        Diagnostic.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Diagnostic} interface.
         */
        function is(value) {
            var _a;
            var candidate = value;
            return Is.defined(candidate)
                && Range.is(candidate.range)
                && Is.string(candidate.message)
                && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
                && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
                && (Is.undefined(candidate.codeDescription) || (Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)))
                && (Is.string(candidate.source) || Is.undefined(candidate.source))
                && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic.is = is;
    })(Diagnostic || (exports.Diagnostic = Diagnostic = {}));
    /**
     * The Command namespace provides helper functions to work with
     * {@link Command} literals.
     */
    var Command;
    (function (Command) {
        /**
         * Creates a new Command literal.
         */
        function create(title, command) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var result = { title: title, command: command };
            if (Is.defined(args) && args.length > 0) {
                result.arguments = args;
            }
            return result;
        }
        Command.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Command} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command.is = is;
    })(Command || (exports.Command = Command = {}));
    /**
     * The TextEdit namespace provides helper function to create replace,
     * insert and delete edits more easily.
     */
    var TextEdit;
    (function (TextEdit) {
        /**
         * Creates a replace text edit.
         * @param range The range of text to be replaced.
         * @param newText The new text.
         */
        function replace(range, newText) {
            return { range: range, newText: newText };
        }
        TextEdit.replace = replace;
        /**
         * Creates an insert text edit.
         * @param position The position to insert the text at.
         * @param newText The text to be inserted.
         */
        function insert(position, newText) {
            return { range: { start: position, end: position }, newText: newText };
        }
        TextEdit.insert = insert;
        /**
         * Creates a delete text edit.
         * @param range The range of text to be deleted.
         */
        function del(range) {
            return { range: range, newText: '' };
        }
        TextEdit.del = del;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate)
                && Is.string(candidate.newText)
                && Range.is(candidate.range);
        }
        TextEdit.is = is;
    })(TextEdit || (exports.TextEdit = TextEdit = {}));
    var ChangeAnnotation;
    (function (ChangeAnnotation) {
        function create(label, needsConfirmation, description) {
            var result = { label: label };
            if (needsConfirmation !== undefined) {
                result.needsConfirmation = needsConfirmation;
            }
            if (description !== undefined) {
                result.description = description;
            }
            return result;
        }
        ChangeAnnotation.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.label) &&
                (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) &&
                (Is.string(candidate.description) || candidate.description === undefined);
        }
        ChangeAnnotation.is = is;
    })(ChangeAnnotation || (exports.ChangeAnnotation = ChangeAnnotation = {}));
    var ChangeAnnotationIdentifier;
    (function (ChangeAnnotationIdentifier) {
        function is(value) {
            var candidate = value;
            return Is.string(candidate);
        }
        ChangeAnnotationIdentifier.is = is;
    })(ChangeAnnotationIdentifier || (exports.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
    var AnnotatedTextEdit;
    (function (AnnotatedTextEdit) {
        /**
         * Creates an annotated replace text edit.
         *
         * @param range The range of text to be replaced.
         * @param newText The new text.
         * @param annotation The annotation.
         */
        function replace(range, newText, annotation) {
            return { range: range, newText: newText, annotationId: annotation };
        }
        AnnotatedTextEdit.replace = replace;
        /**
         * Creates an annotated insert text edit.
         *
         * @param position The position to insert the text at.
         * @param newText The text to be inserted.
         * @param annotation The annotation.
         */
        function insert(position, newText, annotation) {
            return { range: { start: position, end: position }, newText: newText, annotationId: annotation };
        }
        AnnotatedTextEdit.insert = insert;
        /**
         * Creates an annotated delete text edit.
         *
         * @param range The range of text to be deleted.
         * @param annotation The annotation.
         */
        function del(range, annotation) {
            return { range: range, newText: '', annotationId: annotation };
        }
        AnnotatedTextEdit.del = del;
        function is(value) {
            var candidate = value;
            return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit.is = is;
    })(AnnotatedTextEdit || (exports.AnnotatedTextEdit = AnnotatedTextEdit = {}));
    /**
     * The TextDocumentEdit namespace provides helper function to create
     * an edit that manipulates a text document.
     */
    var TextDocumentEdit;
    (function (TextDocumentEdit) {
        /**
         * Creates a new `TextDocumentEdit`
         */
        function create(textDocument, edits) {
            return { textDocument: textDocument, edits: edits };
        }
        TextDocumentEdit.create = create;
        function is(value) {
            var candidate = value;
            return Is.defined(candidate)
                && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument)
                && Array.isArray(candidate.edits);
        }
        TextDocumentEdit.is = is;
    })(TextDocumentEdit || (exports.TextDocumentEdit = TextDocumentEdit = {}));
    var CreateFile;
    (function (CreateFile) {
        function create(uri, options, annotation) {
            var result = {
                kind: 'create',
                uri: uri
            };
            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
                result.options = options;
            }
            if (annotation !== undefined) {
                result.annotationId = annotation;
            }
            return result;
        }
        CreateFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === undefined ||
                ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile.is = is;
    })(CreateFile || (exports.CreateFile = CreateFile = {}));
    var RenameFile;
    (function (RenameFile) {
        function create(oldUri, newUri, options, annotation) {
            var result = {
                kind: 'rename',
                oldUri: oldUri,
                newUri: newUri
            };
            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
                result.options = options;
            }
            if (annotation !== undefined) {
                result.annotationId = annotation;
            }
            return result;
        }
        RenameFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined ||
                ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile.is = is;
    })(RenameFile || (exports.RenameFile = RenameFile = {}));
    var DeleteFile;
    (function (DeleteFile) {
        function create(uri, options, annotation) {
            var result = {
                kind: 'delete',
                uri: uri
            };
            if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) {
                result.options = options;
            }
            if (annotation !== undefined) {
                result.annotationId = annotation;
            }
            return result;
        }
        DeleteFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === undefined ||
                ((candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile.is = is;
    })(DeleteFile || (exports.DeleteFile = DeleteFile = {}));
    var WorkspaceEdit;
    (function (WorkspaceEdit) {
        function is(value) {
            var candidate = value;
            return candidate &&
                (candidate.changes !== undefined || candidate.documentChanges !== undefined) &&
                (candidate.documentChanges === undefined || candidate.documentChanges.every(function (change) {
                    if (Is.string(change.kind)) {
                        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                    }
                    else {
                        return TextDocumentEdit.is(change);
                    }
                }));
        }
        WorkspaceEdit.is = is;
    })(WorkspaceEdit || (exports.WorkspaceEdit = WorkspaceEdit = {}));
    var TextEditChangeImpl = /** @class */ (function () {
        function TextEditChangeImpl(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
        }
        TextEditChangeImpl.prototype.insert = function (position, newText, annotation) {
            var edit;
            var id;
            if (annotation === undefined) {
                edit = TextEdit.insert(position, newText);
            }
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.insert(position, newText, annotation);
            }
            else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== undefined) {
                return id;
            }
        };
        TextEditChangeImpl.prototype.replace = function (range, newText, annotation) {
            var edit;
            var id;
            if (annotation === undefined) {
                edit = TextEdit.replace(range, newText);
            }
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.replace(range, newText, annotation);
            }
            else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== undefined) {
                return id;
            }
        };
        TextEditChangeImpl.prototype.delete = function (range, annotation) {
            var edit;
            var id;
            if (annotation === undefined) {
                edit = TextEdit.del(range);
            }
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.del(range, annotation);
            }
            else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== undefined) {
                return id;
            }
        };
        TextEditChangeImpl.prototype.add = function (edit) {
            this.edits.push(edit);
        };
        TextEditChangeImpl.prototype.all = function () {
            return this.edits;
        };
        TextEditChangeImpl.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
        };
        TextEditChangeImpl.prototype.assertChangeAnnotations = function (value) {
            if (value === undefined) {
                throw new Error("Text edit change is not configured to manage change annotations.");
            }
        };
        return TextEditChangeImpl;
    }());
    /**
     * A helper class
     */
    var ChangeAnnotations = /** @class */ (function () {
        function ChangeAnnotations(annotations) {
            this._annotations = annotations === undefined ? Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
        }
        ChangeAnnotations.prototype.all = function () {
            return this._annotations;
        };
        Object.defineProperty(ChangeAnnotations.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        ChangeAnnotations.prototype.manage = function (idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
                id = idOrAnnotation;
            }
            else {
                id = this.nextId();
                annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== undefined) {
                throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === undefined) {
                throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
        };
        ChangeAnnotations.prototype.nextId = function () {
            this._counter++;
            return this._counter.toString();
        };
        return ChangeAnnotations;
    }());
    /**
     * A workspace change helps constructing changes to a workspace.
     */
    var WorkspaceChange = /** @class */ (function () {
        function WorkspaceChange(workspaceEdit) {
            var _this = this;
            this._textEditChanges = Object.create(null);
            if (workspaceEdit !== undefined) {
                this._workspaceEdit = workspaceEdit;
                if (workspaceEdit.documentChanges) {
                    this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                    workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                    workspaceEdit.documentChanges.forEach(function (change) {
                        if (TextDocumentEdit.is(change)) {
                            var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                            _this._textEditChanges[change.textDocument.uri] = textEditChange;
                        }
                    });
                }
                else if (workspaceEdit.changes) {
                    Object.keys(workspaceEdit.changes).forEach(function (key) {
                        var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                        _this._textEditChanges[key] = textEditChange;
                    });
                }
            }
            else {
                this._workspaceEdit = {};
            }
        }
        Object.defineProperty(WorkspaceChange.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function () {
                this.initDocumentChanges();
                if (this._changeAnnotations !== undefined) {
                    if (this._changeAnnotations.size === 0) {
                        this._workspaceEdit.changeAnnotations = undefined;
                    }
                    else {
                        this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                    }
                }
                return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
        });
        WorkspaceChange.prototype.getTextEditChange = function (key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
                this.initDocumentChanges();
                if (this._workspaceEdit.documentChanges === undefined) {
                    throw new Error('Workspace edit is not configured for document changes.');
                }
                var textDocument = { uri: key.uri, version: key.version };
                var result = this._textEditChanges[textDocument.uri];
                if (!result) {
                    var edits = [];
                    var textDocumentEdit = {
                        textDocument: textDocument,
                        edits: edits
                    };
                    this._workspaceEdit.documentChanges.push(textDocumentEdit);
                    result = new TextEditChangeImpl(edits, this._changeAnnotations);
                    this._textEditChanges[textDocument.uri] = result;
                }
                return result;
            }
            else {
                this.initChanges();
                if (this._workspaceEdit.changes === undefined) {
                    throw new Error('Workspace edit is not configured for normal text edit changes.');
                }
                var result = this._textEditChanges[key];
                if (!result) {
                    var edits = [];
                    this._workspaceEdit.changes[key] = edits;
                    result = new TextEditChangeImpl(edits);
                    this._textEditChanges[key] = result;
                }
                return result;
            }
        };
        WorkspaceChange.prototype.initDocumentChanges = function () {
            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
                this._changeAnnotations = new ChangeAnnotations();
                this._workspaceEdit.documentChanges = [];
                this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
        };
        WorkspaceChange.prototype.initChanges = function () {
            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
                this._workspaceEdit.changes = Object.create(null);
            }
        };
        WorkspaceChange.prototype.createFile = function (uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
                annotation = optionsOrAnnotation;
            }
            else {
                options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === undefined) {
                operation = CreateFile.create(uri, options);
            }
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) {
                return id;
            }
        };
        WorkspaceChange.prototype.renameFile = function (oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
                annotation = optionsOrAnnotation;
            }
            else {
                options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === undefined) {
                operation = RenameFile.create(oldUri, newUri, options);
            }
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) {
                return id;
            }
        };
        WorkspaceChange.prototype.deleteFile = function (uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
                annotation = optionsOrAnnotation;
            }
            else {
                options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === undefined) {
                operation = DeleteFile.create(uri, options);
            }
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) {
                return id;
            }
        };
        return WorkspaceChange;
    }());
    exports.WorkspaceChange = WorkspaceChange;
    /**
     * The TextDocumentIdentifier namespace provides helper functions to work with
     * {@link TextDocumentIdentifier} literals.
     */
    var TextDocumentIdentifier;
    (function (TextDocumentIdentifier) {
        /**
         * Creates a new TextDocumentIdentifier literal.
         * @param uri The document's uri.
         */
        function create(uri) {
            return { uri: uri };
        }
        TextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier.is = is;
    })(TextDocumentIdentifier || (exports.TextDocumentIdentifier = TextDocumentIdentifier = {}));
    /**
     * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
     * {@link VersionedTextDocumentIdentifier} literals.
     */
    var VersionedTextDocumentIdentifier;
    (function (VersionedTextDocumentIdentifier) {
        /**
         * Creates a new VersionedTextDocumentIdentifier literal.
         * @param uri The document's uri.
         * @param version The document's version.
         */
        function create(uri, version) {
            return { uri: uri, version: version };
        }
        VersionedTextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier.is = is;
    })(VersionedTextDocumentIdentifier || (exports.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
    /**
     * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
     * {@link OptionalVersionedTextDocumentIdentifier} literals.
     */
    var OptionalVersionedTextDocumentIdentifier;
    (function (OptionalVersionedTextDocumentIdentifier) {
        /**
         * Creates a new OptionalVersionedTextDocumentIdentifier literal.
         * @param uri The document's uri.
         * @param version The document's version.
         */
        function create(uri, version) {
            return { uri: uri, version: version };
        }
        OptionalVersionedTextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (exports.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
    /**
     * The TextDocumentItem namespace provides helper functions to work with
     * {@link TextDocumentItem} literals.
     */
    var TextDocumentItem;
    (function (TextDocumentItem) {
        /**
         * Creates a new TextDocumentItem literal.
         * @param uri The document's uri.
         * @param languageId The document's language identifier.
         * @param version The document's version number.
         * @param text The document's text.
         */
        function create(uri, languageId, version, text) {
            return { uri: uri, languageId: languageId, version: version, text: text };
        }
        TextDocumentItem.create = create;
        /**
         * Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem.is = is;
    })(TextDocumentItem || (exports.TextDocumentItem = TextDocumentItem = {}));
    /**
     * Describes the content type that a client supports in various
     * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
     *
     * Please note that `MarkupKinds` must not start with a `$`. This kinds
     * are reserved for internal usage.
     */
    var MarkupKind;
    (function (MarkupKind) {
        /**
         * Plain text is supported as a content format
         */
        MarkupKind.PlainText = 'plaintext';
        /**
         * Markdown is supported as a content format
         */
        MarkupKind.Markdown = 'markdown';
        /**
         * Checks whether the given value is a value of the {@link MarkupKind} type.
         */
        function is(value) {
            var candidate = value;
            return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
        }
        MarkupKind.is = is;
    })(MarkupKind || (exports.MarkupKind = MarkupKind = {}));
    var MarkupContent;
    (function (MarkupContent) {
        /**
         * Checks whether the given value conforms to the {@link MarkupContent} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent.is = is;
    })(MarkupContent || (exports.MarkupContent = MarkupContent = {}));
    /**
     * The kind of a completion entry.
     */
    var CompletionItemKind;
    (function (CompletionItemKind) {
        CompletionItemKind.Text = 1;
        CompletionItemKind.Method = 2;
        CompletionItemKind.Function = 3;
        CompletionItemKind.Constructor = 4;
        CompletionItemKind.Field = 5;
        CompletionItemKind.Variable = 6;
        CompletionItemKind.Class = 7;
        CompletionItemKind.Interface = 8;
        CompletionItemKind.Module = 9;
        CompletionItemKind.Property = 10;
        CompletionItemKind.Unit = 11;
        CompletionItemKind.Value = 12;
        CompletionItemKind.Enum = 13;
        CompletionItemKind.Keyword = 14;
        CompletionItemKind.Snippet = 15;
        CompletionItemKind.Color = 16;
        CompletionItemKind.File = 17;
        CompletionItemKind.Reference = 18;
        CompletionItemKind.Folder = 19;
        CompletionItemKind.EnumMember = 20;
        CompletionItemKind.Constant = 21;
        CompletionItemKind.Struct = 22;
        CompletionItemKind.Event = 23;
        CompletionItemKind.Operator = 24;
        CompletionItemKind.TypeParameter = 25;
    })(CompletionItemKind || (exports.CompletionItemKind = CompletionItemKind = {}));
    /**
     * Defines whether the insert text in a completion item should be interpreted as
     * plain text or a snippet.
     */
    var InsertTextFormat;
    (function (InsertTextFormat) {
        /**
         * The primary text to be inserted is treated as a plain string.
         */
        InsertTextFormat.PlainText = 1;
        /**
         * The primary text to be inserted is treated as a snippet.
         *
         * A snippet can define tab stops and placeholders with `$1`, `$2`
         * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
         * the end of the snippet. Placeholders with equal identifiers are linked,
         * that is typing in one will update others too.
         *
         * See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
         */
        InsertTextFormat.Snippet = 2;
    })(InsertTextFormat || (exports.InsertTextFormat = InsertTextFormat = {}));
    /**
     * Completion item tags are extra annotations that tweak the rendering of a completion
     * item.
     *
     * @since 3.15.0
     */
    var CompletionItemTag;
    (function (CompletionItemTag) {
        /**
         * Render a completion as obsolete, usually using a strike-out.
         */
        CompletionItemTag.Deprecated = 1;
    })(CompletionItemTag || (exports.CompletionItemTag = CompletionItemTag = {}));
    /**
     * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
     *
     * @since 3.16.0
     */
    var InsertReplaceEdit;
    (function (InsertReplaceEdit) {
        /**
         * Creates a new insert / replace edit
         */
        function create(newText, insert, replace) {
            return { newText: newText, insert: insert, replace: replace };
        }
        InsertReplaceEdit.create = create;
        /**
         * Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
         */
        function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
        }
        InsertReplaceEdit.is = is;
    })(InsertReplaceEdit || (exports.InsertReplaceEdit = InsertReplaceEdit = {}));
    /**
     * How whitespace and indentation is handled during completion
     * item insertion.
     *
     * @since 3.16.0
     */
    var InsertTextMode;
    (function (InsertTextMode) {
        /**
         * The insertion or replace strings is taken as it is. If the
         * value is multi line the lines below the cursor will be
         * inserted using the indentation defined in the string value.
         * The client will not apply any kind of adjustments to the
         * string.
         */
        InsertTextMode.asIs = 1;
        /**
         * The editor adjusts leading whitespace of new lines so that
         * they match the indentation up to the cursor of the line for
         * which the item is accepted.
         *
         * Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
         * multi line completion item is indented using 2 tabs and all
         * following lines inserted will be indented using 2 tabs as well.
         */
        InsertTextMode.adjustIndentation = 2;
    })(InsertTextMode || (exports.InsertTextMode = InsertTextMode = {}));
    var CompletionItemLabelDetails;
    (function (CompletionItemLabelDetails) {
        function is(value) {
            var candidate = value;
            return candidate && (Is.string(candidate.detail) || candidate.detail === undefined) &&
                (Is.string(candidate.description) || candidate.description === undefined);
        }
        CompletionItemLabelDetails.is = is;
    })(CompletionItemLabelDetails || (exports.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
    /**
     * The CompletionItem namespace provides functions to deal with
     * completion items.
     */
    var CompletionItem;
    (function (CompletionItem) {
        /**
         * Create a completion item and seed it with a label.
         * @param label The completion item's label
         */
        function create(label) {
            return { label: label };
        }
        CompletionItem.create = create;
    })(CompletionItem || (exports.CompletionItem = CompletionItem = {}));
    /**
     * The CompletionList namespace provides functions to deal with
     * completion lists.
     */
    var CompletionList;
    (function (CompletionList) {
        /**
         * Creates a new completion list.
         *
         * @param items The completion items.
         * @param isIncomplete The list is not complete.
         */
        function create(items, isIncomplete) {
            return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList.create = create;
    })(CompletionList || (exports.CompletionList = CompletionList = {}));
    var MarkedString;
    (function (MarkedString) {
        /**
         * Creates a marked string from plain text.
         *
         * @param plainText The plain text.
         */
        function fromPlainText(plainText) {
            return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
        }
        MarkedString.fromPlainText = fromPlainText;
        /**
         * Checks whether the given value conforms to the {@link MarkedString} type.
         */
        function is(value) {
            var candidate = value;
            return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
        }
        MarkedString.is = is;
    })(MarkedString || (exports.MarkedString = MarkedString = {}));
    var Hover;
    (function (Hover) {
        /**
         * Checks whether the given value conforms to the {@link Hover} interface.
         */
        function is(value) {
            var candidate = value;
            return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
                MarkedString.is(candidate.contents) ||
                Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
        }
        Hover.is = is;
    })(Hover || (exports.Hover = Hover = {}));
    /**
     * The ParameterInformation namespace provides helper functions to work with
     * {@link ParameterInformation} literals.
     */
    var ParameterInformation;
    (function (ParameterInformation) {
        /**
         * Creates a new parameter information literal.
         *
         * @param label A label string.
         * @param documentation A doc string.
         */
        function create(label, documentation) {
            return documentation ? { label: label, documentation: documentation } : { label: label };
        }
        ParameterInformation.create = create;
    })(ParameterInformation || (exports.ParameterInformation = ParameterInformation = {}));
    /**
     * The SignatureInformation namespace provides helper functions to work with
     * {@link SignatureInformation} literals.
     */
    var SignatureInformation;
    (function (SignatureInformation) {
        function create(label, documentation) {
            var parameters = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                parameters[_i - 2] = arguments[_i];
            }
            var result = { label: label };
            if (Is.defined(documentation)) {
                result.documentation = documentation;
            }
            if (Is.defined(parameters)) {
                result.parameters = parameters;
            }
            else {
                result.parameters = [];
            }
            return result;
        }
        SignatureInformation.create = create;
    })(SignatureInformation || (exports.SignatureInformation = SignatureInformation = {}));
    /**
     * A document highlight kind.
     */
    var DocumentHighlightKind;
    (function (DocumentHighlightKind) {
        /**
         * A textual occurrence.
         */
        DocumentHighlightKind.Text = 1;
        /**
         * Read-access of a symbol, like reading a variable.
         */
        DocumentHighlightKind.Read = 2;
        /**
         * Write-access of a symbol, like writing to a variable.
         */
        DocumentHighlightKind.Write = 3;
    })(DocumentHighlightKind || (exports.DocumentHighlightKind = DocumentHighlightKind = {}));
    /**
     * DocumentHighlight namespace to provide helper functions to work with
     * {@link DocumentHighlight} literals.
     */
    var DocumentHighlight;
    (function (DocumentHighlight) {
        /**
         * Create a DocumentHighlight object.
         * @param range The range the highlight applies to.
         * @param kind The highlight kind
         */
        function create(range, kind) {
            var result = { range: range };
            if (Is.number(kind)) {
                result.kind = kind;
            }
            return result;
        }
        DocumentHighlight.create = create;
    })(DocumentHighlight || (exports.DocumentHighlight = DocumentHighlight = {}));
    /**
     * A symbol kind.
     */
    var SymbolKind;
    (function (SymbolKind) {
        SymbolKind.File = 1;
        SymbolKind.Module = 2;
        SymbolKind.Namespace = 3;
        SymbolKind.Package = 4;
        SymbolKind.Class = 5;
        SymbolKind.Method = 6;
        SymbolKind.Property = 7;
        SymbolKind.Field = 8;
        SymbolKind.Constructor = 9;
        SymbolKind.Enum = 10;
        SymbolKind.Interface = 11;
        SymbolKind.Function = 12;
        SymbolKind.Variable = 13;
        SymbolKind.Constant = 14;
        SymbolKind.String = 15;
        SymbolKind.Number = 16;
        SymbolKind.Boolean = 17;
        SymbolKind.Array = 18;
        SymbolKind.Object = 19;
        SymbolKind.Key = 20;
        SymbolKind.Null = 21;
        SymbolKind.EnumMember = 22;
        SymbolKind.Struct = 23;
        SymbolKind.Event = 24;
        SymbolKind.Operator = 25;
        SymbolKind.TypeParameter = 26;
    })(SymbolKind || (exports.SymbolKind = SymbolKind = {}));
    /**
     * Symbol tags are extra annotations that tweak the rendering of a symbol.
     *
     * @since 3.16
     */
    var SymbolTag;
    (function (SymbolTag) {
        /**
         * Render a symbol as obsolete, usually using a strike-out.
         */
        SymbolTag.Deprecated = 1;
    })(SymbolTag || (exports.SymbolTag = SymbolTag = {}));
    var SymbolInformation;
    (function (SymbolInformation) {
        /**
         * Creates a new symbol information literal.
         *
         * @param name The name of the symbol.
         * @param kind The kind of the symbol.
         * @param range The range of the location of the symbol.
         * @param uri The resource of the location of symbol.
         * @param containerName The name of the symbol containing the symbol.
         */
        function create(name, kind, range, uri, containerName) {
            var result = {
                name: name,
                kind: kind,
                location: { uri: uri, range: range }
            };
            if (containerName) {
                result.containerName = containerName;
            }
            return result;
        }
        SymbolInformation.create = create;
    })(SymbolInformation || (exports.SymbolInformation = SymbolInformation = {}));
    var WorkspaceSymbol;
    (function (WorkspaceSymbol) {
        /**
         * Create a new workspace symbol.
         *
         * @param name The name of the symbol.
         * @param kind The kind of the symbol.
         * @param uri The resource of the location of the symbol.
         * @param range An options range of the location.
         * @returns A WorkspaceSymbol.
         */
        function create(name, kind, uri, range) {
            return range !== undefined
                ? { name: name, kind: kind, location: { uri: uri, range: range } }
                : { name: name, kind: kind, location: { uri: uri } };
        }
        WorkspaceSymbol.create = create;
    })(WorkspaceSymbol || (exports.WorkspaceSymbol = WorkspaceSymbol = {}));
    var DocumentSymbol;
    (function (DocumentSymbol) {
        /**
         * Creates a new symbol information literal.
         *
         * @param name The name of the symbol.
         * @param detail The detail of the symbol.
         * @param kind The kind of the symbol.
         * @param range The range of the symbol.
         * @param selectionRange The selectionRange of the symbol.
         * @param children Children of the symbol.
         */
        function create(name, detail, kind, range, selectionRange, children) {
            var result = {
                name: name,
                detail: detail,
                kind: kind,
                range: range,
                selectionRange: selectionRange
            };
            if (children !== undefined) {
                result.children = children;
            }
            return result;
        }
        DocumentSymbol.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DocumentSymbol} interface.
         */
        function is(value) {
            var candidate = value;
            return candidate &&
                Is.string(candidate.name) && Is.number(candidate.kind) &&
                Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
                (candidate.detail === undefined || Is.string(candidate.detail)) &&
                (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) &&
                (candidate.children === undefined || Array.isArray(candidate.children)) &&
                (candidate.tags === undefined || Array.isArray(candidate.tags));
        }
        DocumentSymbol.is = is;
    })(DocumentSymbol || (exports.DocumentSymbol = DocumentSymbol = {}));
    /**
     * A set of predefined code action kinds
     */
    var CodeActionKind;
    (function (CodeActionKind) {
        /**
         * Empty kind.
         */
        CodeActionKind.Empty = '';
        /**
         * Base kind for quickfix actions: 'quickfix'
         */
        CodeActionKind.QuickFix = 'quickfix';
        /**
         * Base kind for refactoring actions: 'refactor'
         */
        CodeActionKind.Refactor = 'refactor';
        /**
         * Base kind for refactoring extraction actions: 'refactor.extract'
         *
         * Example extract actions:
         *
         * - Extract method
         * - Extract function
         * - Extract variable
         * - Extract interface from class
         * - ...
         */
        CodeActionKind.RefactorExtract = 'refactor.extract';
        /**
         * Base kind for refactoring inline actions: 'refactor.inline'
         *
         * Example inline actions:
         *
         * - Inline function
         * - Inline variable
         * - Inline constant
         * - ...
         */
        CodeActionKind.RefactorInline = 'refactor.inline';
        /**
         * Base kind for refactoring rewrite actions: 'refactor.rewrite'
         *
         * Example rewrite actions:
         *
         * - Convert JavaScript function to class
         * - Add or remove parameter
         * - Encapsulate field
         * - Make method static
         * - Move method to base class
         * - ...
         */
        CodeActionKind.RefactorRewrite = 'refactor.rewrite';
        /**
         * Base kind for source actions: `source`
         *
         * Source code actions apply to the entire file.
         */
        CodeActionKind.Source = 'source';
        /**
         * Base kind for an organize imports source action: `source.organizeImports`
         */
        CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
        /**
         * Base kind for auto-fix source actions: `source.fixAll`.
         *
         * Fix all actions automatically fix errors that have a clear fix that do not require user input.
         * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
         *
         * @since 3.15.0
         */
        CodeActionKind.SourceFixAll = 'source.fixAll';
    })(CodeActionKind || (exports.CodeActionKind = CodeActionKind = {}));
    /**
     * The reason why code actions were requested.
     *
     * @since 3.17.0
     */
    var CodeActionTriggerKind;
    (function (CodeActionTriggerKind) {
        /**
         * Code actions were explicitly requested by the user or by an extension.
         */
        CodeActionTriggerKind.Invoked = 1;
        /**
         * Code actions were requested automatically.
         *
         * This typically happens when current selection in a file changes, but can
         * also be triggered when file content changes.
         */
        CodeActionTriggerKind.Automatic = 2;
    })(CodeActionTriggerKind || (exports.CodeActionTriggerKind = CodeActionTriggerKind = {}));
    /**
     * The CodeActionContext namespace provides helper functions to work with
     * {@link CodeActionContext} literals.
     */
    var CodeActionContext;
    (function (CodeActionContext) {
        /**
         * Creates a new CodeActionContext literal.
         */
        function create(diagnostics, only, triggerKind) {
            var result = { diagnostics: diagnostics };
            if (only !== undefined && only !== null) {
                result.only = only;
            }
            if (triggerKind !== undefined && triggerKind !== null) {
                result.triggerKind = triggerKind;
            }
            return result;
        }
        CodeActionContext.create = create;
        /**
         * Checks whether the given literal conforms to the {@link CodeActionContext} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is)
                && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string))
                && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext.is = is;
    })(CodeActionContext || (exports.CodeActionContext = CodeActionContext = {}));
    var CodeAction;
    (function (CodeAction) {
        function create(title, kindOrCommandOrEdit, kind) {
            var result = { title: title };
            var checkKind = true;
            if (typeof kindOrCommandOrEdit === 'string') {
                checkKind = false;
                result.kind = kindOrCommandOrEdit;
            }
            else if (Command.is(kindOrCommandOrEdit)) {
                result.command = kindOrCommandOrEdit;
            }
            else {
                result.edit = kindOrCommandOrEdit;
            }
            if (checkKind && kind !== undefined) {
                result.kind = kind;
            }
            return result;
        }
        CodeAction.create = create;
        function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.title) &&
                (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
                (candidate.kind === undefined || Is.string(candidate.kind)) &&
                (candidate.edit !== undefined || candidate.command !== undefined) &&
                (candidate.command === undefined || Command.is(candidate.command)) &&
                (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) &&
                (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction.is = is;
    })(CodeAction || (exports.CodeAction = CodeAction = {}));
    /**
     * The CodeLens namespace provides helper functions to work with
     * {@link CodeLens} literals.
     */
    var CodeLens;
    (function (CodeLens) {
        /**
         * Creates a new CodeLens literal.
         */
        function create(range, data) {
            var result = { range: range };
            if (Is.defined(data)) {
                result.data = data;
            }
            return result;
        }
        CodeLens.create = create;
        /**
         * Checks whether the given literal conforms to the {@link CodeLens} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens.is = is;
    })(CodeLens || (exports.CodeLens = CodeLens = {}));
    /**
     * The FormattingOptions namespace provides helper functions to work with
     * {@link FormattingOptions} literals.
     */
    var FormattingOptions;
    (function (FormattingOptions) {
        /**
         * Creates a new FormattingOptions literal.
         */
        function create(tabSize, insertSpaces) {
            return { tabSize: tabSize, insertSpaces: insertSpaces };
        }
        FormattingOptions.create = create;
        /**
         * Checks whether the given literal conforms to the {@link FormattingOptions} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions.is = is;
    })(FormattingOptions || (exports.FormattingOptions = FormattingOptions = {}));
    /**
     * The DocumentLink namespace provides helper functions to work with
     * {@link DocumentLink} literals.
     */
    var DocumentLink;
    (function (DocumentLink) {
        /**
         * Creates a new DocumentLink literal.
         */
        function create(range, target, data) {
            return { range: range, target: target, data: data };
        }
        DocumentLink.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DocumentLink} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink.is = is;
    })(DocumentLink || (exports.DocumentLink = DocumentLink = {}));
    /**
     * The SelectionRange namespace provides helper function to work with
     * SelectionRange literals.
     */
    var SelectionRange;
    (function (SelectionRange) {
        /**
         * Creates a new SelectionRange
         * @param range the range.
         * @param parent an optional parent.
         */
        function create(range, parent) {
            return { range: range, parent: parent };
        }
        SelectionRange.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
        }
        SelectionRange.is = is;
    })(SelectionRange || (exports.SelectionRange = SelectionRange = {}));
    /**
     * A set of predefined token types. This set is not fixed
     * an clients can specify additional token types via the
     * corresponding client capabilities.
     *
     * @since 3.16.0
     */
    var SemanticTokenTypes;
    (function (SemanticTokenTypes) {
        SemanticTokenTypes["namespace"] = "namespace";
        /**
         * Represents a generic type. Acts as a fallback for types which can't be mapped to
         * a specific type like class or enum.
         */
        SemanticTokenTypes["type"] = "type";
        SemanticTokenTypes["class"] = "class";
        SemanticTokenTypes["enum"] = "enum";
        SemanticTokenTypes["interface"] = "interface";
        SemanticTokenTypes["struct"] = "struct";
        SemanticTokenTypes["typeParameter"] = "typeParameter";
        SemanticTokenTypes["parameter"] = "parameter";
        SemanticTokenTypes["variable"] = "variable";
        SemanticTokenTypes["property"] = "property";
        SemanticTokenTypes["enumMember"] = "enumMember";
        SemanticTokenTypes["event"] = "event";
        SemanticTokenTypes["function"] = "function";
        SemanticTokenTypes["method"] = "method";
        SemanticTokenTypes["macro"] = "macro";
        SemanticTokenTypes["keyword"] = "keyword";
        SemanticTokenTypes["modifier"] = "modifier";
        SemanticTokenTypes["comment"] = "comment";
        SemanticTokenTypes["string"] = "string";
        SemanticTokenTypes["number"] = "number";
        SemanticTokenTypes["regexp"] = "regexp";
        SemanticTokenTypes["operator"] = "operator";
        /**
         * @since 3.17.0
         */
        SemanticTokenTypes["decorator"] = "decorator";
    })(SemanticTokenTypes || (exports.SemanticTokenTypes = SemanticTokenTypes = {}));
    /**
     * A set of predefined token modifiers. This set is not fixed
     * an clients can specify additional token types via the
     * corresponding client capabilities.
     *
     * @since 3.16.0
     */
    var SemanticTokenModifiers;
    (function (SemanticTokenModifiers) {
        SemanticTokenModifiers["declaration"] = "declaration";
        SemanticTokenModifiers["definition"] = "definition";
        SemanticTokenModifiers["readonly"] = "readonly";
        SemanticTokenModifiers["static"] = "static";
        SemanticTokenModifiers["deprecated"] = "deprecated";
        SemanticTokenModifiers["abstract"] = "abstract";
        SemanticTokenModifiers["async"] = "async";
        SemanticTokenModifiers["modification"] = "modification";
        SemanticTokenModifiers["documentation"] = "documentation";
        SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (exports.SemanticTokenModifiers = SemanticTokenModifiers = {}));
    /**
     * @since 3.16.0
     */
    var SemanticTokens;
    (function (SemanticTokens) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === 'string') &&
                Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
        }
        SemanticTokens.is = is;
    })(SemanticTokens || (exports.SemanticTokens = SemanticTokens = {}));
    /**
     * The InlineValueText namespace provides functions to deal with InlineValueTexts.
     *
     * @since 3.17.0
     */
    var InlineValueText;
    (function (InlineValueText) {
        /**
         * Creates a new InlineValueText literal.
         */
        function create(range, text) {
            return { range: range, text: text };
        }
        InlineValueText.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText.is = is;
    })(InlineValueText || (exports.InlineValueText = InlineValueText = {}));
    /**
     * The InlineValueVariableLookup namespace provides functions to deal with InlineValueVariableLookups.
     *
     * @since 3.17.0
     */
    var InlineValueVariableLookup;
    (function (InlineValueVariableLookup) {
        /**
         * Creates a new InlineValueText literal.
         */
        function create(range, variableName, caseSensitiveLookup) {
            return { range: range, variableName: variableName, caseSensitiveLookup: caseSensitiveLookup };
        }
        InlineValueVariableLookup.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup)
                && (Is.string(candidate.variableName) || candidate.variableName === undefined);
        }
        InlineValueVariableLookup.is = is;
    })(InlineValueVariableLookup || (exports.InlineValueVariableLookup = InlineValueVariableLookup = {}));
    /**
     * The InlineValueEvaluatableExpression namespace provides functions to deal with InlineValueEvaluatableExpression.
     *
     * @since 3.17.0
     */
    var InlineValueEvaluatableExpression;
    (function (InlineValueEvaluatableExpression) {
        /**
         * Creates a new InlineValueEvaluatableExpression literal.
         */
        function create(range, expression) {
            return { range: range, expression: expression };
        }
        InlineValueEvaluatableExpression.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range)
                && (Is.string(candidate.expression) || candidate.expression === undefined);
        }
        InlineValueEvaluatableExpression.is = is;
    })(InlineValueEvaluatableExpression || (exports.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
    /**
     * The InlineValueContext namespace provides helper functions to work with
     * {@link InlineValueContext} literals.
     *
     * @since 3.17.0
     */
    var InlineValueContext;
    (function (InlineValueContext) {
        /**
         * Creates a new InlineValueContext literal.
         */
        function create(frameId, stoppedLocation) {
            return { frameId: frameId, stoppedLocation: stoppedLocation };
        }
        InlineValueContext.create = create;
        /**
         * Checks whether the given literal conforms to the {@link InlineValueContext} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(value.stoppedLocation);
        }
        InlineValueContext.is = is;
    })(InlineValueContext || (exports.InlineValueContext = InlineValueContext = {}));
    /**
     * Inlay hint kinds.
     *
     * @since 3.17.0
     */
    var InlayHintKind;
    (function (InlayHintKind) {
        /**
         * An inlay hint that for a type annotation.
         */
        InlayHintKind.Type = 1;
        /**
         * An inlay hint that is for a parameter.
         */
        InlayHintKind.Parameter = 2;
        function is(value) {
            return value === 1 || value === 2;
        }
        InlayHintKind.is = is;
    })(InlayHintKind || (exports.InlayHintKind = InlayHintKind = {}));
    var InlayHintLabelPart;
    (function (InlayHintLabelPart) {
        function create(value) {
            return { value: value };
        }
        InlayHintLabelPart.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate)
                && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
                && (candidate.location === undefined || Location.is(candidate.location))
                && (candidate.command === undefined || Command.is(candidate.command));
        }
        InlayHintLabelPart.is = is;
    })(InlayHintLabelPart || (exports.InlayHintLabelPart = InlayHintLabelPart = {}));
    var InlayHint;
    (function (InlayHint) {
        function create(position, label, kind) {
            var result = { position: position, label: label };
            if (kind !== undefined) {
                result.kind = kind;
            }
            return result;
        }
        InlayHint.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.position)
                && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is))
                && (candidate.kind === undefined || InlayHintKind.is(candidate.kind))
                && (candidate.textEdits === undefined) || Is.typedArray(candidate.textEdits, TextEdit.is)
                && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
                && (candidate.paddingLeft === undefined || Is.boolean(candidate.paddingLeft))
                && (candidate.paddingRight === undefined || Is.boolean(candidate.paddingRight));
        }
        InlayHint.is = is;
    })(InlayHint || (exports.InlayHint = InlayHint = {}));
    var StringValue;
    (function (StringValue) {
        function createSnippet(value) {
            return { kind: 'snippet', value: value };
        }
        StringValue.createSnippet = createSnippet;
    })(StringValue || (exports.StringValue = StringValue = {}));
    var InlineCompletionItem;
    (function (InlineCompletionItem) {
        function create(insertText, filterText, range, command) {
            return { insertText: insertText, filterText: filterText, range: range, command: command };
        }
        InlineCompletionItem.create = create;
    })(InlineCompletionItem || (exports.InlineCompletionItem = InlineCompletionItem = {}));
    var InlineCompletionList;
    (function (InlineCompletionList) {
        function create(items) {
            return { items: items };
        }
        InlineCompletionList.create = create;
    })(InlineCompletionList || (exports.InlineCompletionList = InlineCompletionList = {}));
    /**
     * Describes how an {@link InlineCompletionItemProvider inline completion provider} was triggered.
     *
     * @since 3.18.0
     * @proposed
     */
    var InlineCompletionTriggerKind;
    (function (InlineCompletionTriggerKind) {
        /**
         * Completion was triggered explicitly by a user gesture.
         */
        InlineCompletionTriggerKind.Invoked = 0;
        /**
         * Completion was triggered automatically while editing.
         */
        InlineCompletionTriggerKind.Automatic = 1;
    })(InlineCompletionTriggerKind || (exports.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
    var SelectedCompletionInfo;
    (function (SelectedCompletionInfo) {
        function create(range, text) {
            return { range: range, text: text };
        }
        SelectedCompletionInfo.create = create;
    })(SelectedCompletionInfo || (exports.SelectedCompletionInfo = SelectedCompletionInfo = {}));
    var InlineCompletionContext;
    (function (InlineCompletionContext) {
        function create(triggerKind, selectedCompletionInfo) {
            return { triggerKind: triggerKind, selectedCompletionInfo: selectedCompletionInfo };
        }
        InlineCompletionContext.create = create;
    })(InlineCompletionContext || (exports.InlineCompletionContext = InlineCompletionContext = {}));
    var WorkspaceFolder;
    (function (WorkspaceFolder) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder.is = is;
    })(WorkspaceFolder || (exports.WorkspaceFolder = WorkspaceFolder = {}));
    exports.EOL = ['\n', '\r\n', '\r'];
    /**
     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
     */
    var TextDocument;
    (function (TextDocument) {
        /**
         * Creates a new ITextDocument literal from the given uri and content.
         * @param uri The document's uri.
         * @param languageId The document's language Id.
         * @param version The document's version.
         * @param content The document's content.
         */
        function create(uri, languageId, version, content) {
            return new FullTextDocument(uri, languageId, version, content);
        }
        TextDocument.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ITextDocument} interface.
         */
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount)
                && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument.is = is;
        function applyEdits(document, edits) {
            var text = document.getText();
            var sortedEdits = mergeSort(edits, function (a, b) {
                var diff = a.range.start.line - b.range.start.line;
                if (diff === 0) {
                    return a.range.start.character - b.range.start.character;
                }
                return diff;
            });
            var lastModifiedOffset = text.length;
            for (var i = sortedEdits.length - 1; i >= 0; i--) {
                var e = sortedEdits[i];
                var startOffset = document.offsetAt(e.range.start);
                var endOffset = document.offsetAt(e.range.end);
                if (endOffset <= lastModifiedOffset) {
                    text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
                }
                else {
                    throw new Error('Overlapping edit');
                }
                lastModifiedOffset = startOffset;
            }
            return text;
        }
        TextDocument.applyEdits = applyEdits;
        function mergeSort(data, compare) {
            if (data.length <= 1) {
                // sorted
                return data;
            }
            var p = (data.length / 2) | 0;
            var left = data.slice(0, p);
            var right = data.slice(p);
            mergeSort(left, compare);
            mergeSort(right, compare);
            var leftIdx = 0;
            var rightIdx = 0;
            var i = 0;
            while (leftIdx < left.length && rightIdx < right.length) {
                var ret = compare(left[leftIdx], right[rightIdx]);
                if (ret <= 0) {
                    // smaller_equal -> take left to preserve order
                    data[i++] = left[leftIdx++];
                }
                else {
                    // greater -> take right
                    data[i++] = right[rightIdx++];
                }
            }
            while (leftIdx < left.length) {
                data[i++] = left[leftIdx++];
            }
            while (rightIdx < right.length) {
                data[i++] = right[rightIdx++];
            }
            return data;
        }
    })(TextDocument || (exports.TextDocument = TextDocument = {}));
    /**
     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
     */
    var FullTextDocument = /** @class */ (function () {
        function FullTextDocument(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = undefined;
        }
        Object.defineProperty(FullTextDocument.prototype, "uri", {
            get: function () {
                return this._uri;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "languageId", {
            get: function () {
                return this._languageId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.prototype.getText = function (range) {
            if (range) {
                var start = this.offsetAt(range.start);
                var end = this.offsetAt(range.end);
                return this._content.substring(start, end);
            }
            return this._content;
        };
        FullTextDocument.prototype.update = function (event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = undefined;
        };
        FullTextDocument.prototype.getLineOffsets = function () {
            if (this._lineOffsets === undefined) {
                var lineOffsets = [];
                var text = this._content;
                var isLineStart = true;
                for (var i = 0; i < text.length; i++) {
                    if (isLineStart) {
                        lineOffsets.push(i);
                        isLineStart = false;
                    }
                    var ch = text.charAt(i);
                    isLineStart = (ch === '\r' || ch === '\n');
                    if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                        i++;
                    }
                }
                if (isLineStart && text.length > 0) {
                    lineOffsets.push(text.length);
                }
                this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
        };
        FullTextDocument.prototype.positionAt = function (offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
                return Position.create(0, offset);
            }
            while (low < high) {
                var mid = Math.floor((low + high) / 2);
                if (lineOffsets[mid] > offset) {
                    high = mid;
                }
                else {
                    low = mid + 1;
                }
            }
            // low is the least x for which the line offset is larger than the current offset
            // or array.length if no line offset is larger than the current offset
            var line = low - 1;
            return Position.create(line, offset - lineOffsets[line]);
        };
        FullTextDocument.prototype.offsetAt = function (position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
                return this._content.length;
            }
            else if (position.line < 0) {
                return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
        };
        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
            get: function () {
                return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
        });
        return FullTextDocument;
    }());
    var Is;
    (function (Is) {
        var toString = Object.prototype.toString;
        function defined(value) {
            return typeof value !== 'undefined';
        }
        Is.defined = defined;
        function undefined(value) {
            return typeof value === 'undefined';
        }
        Is.undefined = undefined;
        function boolean(value) {
            return value === true || value === false;
        }
        Is.boolean = boolean;
        function string(value) {
            return toString.call(value) === '[object String]';
        }
        Is.string = string;
        function number(value) {
            return toString.call(value) === '[object Number]';
        }
        Is.number = number;
        function numberRange(value, min, max) {
            return toString.call(value) === '[object Number]' && min <= value && value <= max;
        }
        Is.numberRange = numberRange;
        function integer(value) {
            return toString.call(value) === '[object Number]' && -2147483648 <= value && value <= 2147483647;
        }
        Is.integer = integer;
        function uinteger(value) {
            return toString.call(value) === '[object Number]' && 0 <= value && value <= 2147483647;
        }
        Is.uinteger = uinteger;
        function func(value) {
            return toString.call(value) === '[object Function]';
        }
        Is.func = func;
        function objectLiteral(value) {
            // Strictly speaking class instances pass this check as well. Since the LSP
            // doesn't use classes we ignore this for now. If we do we need to add something
            // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
            return value !== null && typeof value === 'object';
        }
        Is.objectLiteral = objectLiteral;
        function typedArray(value, check) {
            return Array.isArray(value) && value.every(check);
        }
        Is.typedArray = typedArray;
    })(Is || (Is = {}));
});
