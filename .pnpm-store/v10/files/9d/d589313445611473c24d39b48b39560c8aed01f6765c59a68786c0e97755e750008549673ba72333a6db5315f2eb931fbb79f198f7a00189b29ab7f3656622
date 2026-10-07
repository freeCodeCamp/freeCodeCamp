/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
export var DocumentUri;
(function (DocumentUri) {
    function is(value) {
        return typeof value === 'string';
    }
    DocumentUri.is = is;
})(DocumentUri || (DocumentUri = {}));
export var URI;
(function (URI) {
    function is(value) {
        return typeof value === 'string';
    }
    URI.is = is;
})(URI || (URI = {}));
export var integer;
(function (integer) {
    integer.MIN_VALUE = -2147483648;
    integer.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === 'number' && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
    }
    integer.is = is;
})(integer || (integer = {}));
export var uinteger;
(function (uinteger) {
    uinteger.MIN_VALUE = 0;
    uinteger.MAX_VALUE = 2147483647;
    function is(value) {
        return typeof value === 'number' && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
    }
    uinteger.is = is;
})(uinteger || (uinteger = {}));
/**
 * The Position namespace provides helper functions to work with
 * {@link Position} literals.
 */
export var Position;
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
        return { line, character };
    }
    Position.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Position} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * {@link Range} literals.
 */
export var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Range} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * {@link Location} literals.
 */
export var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri, range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Location} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * {@link LocationLink} literals.
 */
export var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the {@link LocationLink} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
            && Range.is(candidate.targetSelectionRange)
            && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * {@link Color} literals.
 */
export var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red,
            green,
            blue,
            alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the {@link Color} interface.
     */
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1)
            && Is.numberRange(candidate.green, 0, 1)
            && Is.numberRange(candidate.blue, 0, 1)
            && Is.numberRange(candidate.alpha, 0, 1);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * {@link ColorInformation} literals.
 */
export var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range,
            color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the {@link ColorInformation} interface.
     */
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * {@link ColorPresentation} literals.
 */
export var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label,
            textEdit,
            additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the {@link ColorInformation} interface.
     */
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label)
            && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * A set of predefined range kinds.
 */
export var FoldingRangeKind;
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
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * {@link FoldingRange} literals.
 */
export var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
            startLine,
            endLine
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
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine)
            && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter))
            && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter))
            && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * {@link DiagnosticRelatedInformation} literals.
 */
export var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location,
            message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
export var DiagnosticSeverity;
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
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The diagnostic tags.
 *
 * @since 3.15.0
 */
export var DiagnosticTag;
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
})(DiagnosticTag || (DiagnosticTag = {}));
/**
 * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
 *
 * @since 3.16.0
 */
export var CodeDescription;
(function (CodeDescription) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
    }
    CodeDescription.is = is;
})(CodeDescription || (CodeDescription = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * {@link Diagnostic} literals.
 */
export var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        let result = { range, message };
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
        let candidate = value;
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
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * {@link Command} literals.
 */
export var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command, ...args) {
        let result = { title, command };
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
        let candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
export var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range, newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates an insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate)
            && Is.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
export var ChangeAnnotation;
(function (ChangeAnnotation) {
    function create(label, needsConfirmation, description) {
        const result = { label };
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
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) &&
            (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) &&
            (Is.string(candidate.description) || candidate.description === undefined);
    }
    ChangeAnnotation.is = is;
})(ChangeAnnotation || (ChangeAnnotation = {}));
export var ChangeAnnotationIdentifier;
(function (ChangeAnnotationIdentifier) {
    function is(value) {
        const candidate = value;
        return Is.string(candidate);
    }
    ChangeAnnotationIdentifier.is = is;
})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
export var AnnotatedTextEdit;
(function (AnnotatedTextEdit) {
    /**
     * Creates an annotated replace text edit.
     *
     * @param range The range of text to be replaced.
     * @param newText The new text.
     * @param annotation The annotation.
     */
    function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
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
        return { range: { start: position, end: position }, newText, annotationId: annotation };
    }
    AnnotatedTextEdit.insert = insert;
    /**
     * Creates an annotated delete text edit.
     *
     * @param range The range of text to be deleted.
     * @param annotation The annotation.
     */
    function del(range, annotation) {
        return { range, newText: '', annotationId: annotation };
    }
    AnnotatedTextEdit.del = del;
    function is(value) {
        const candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit.is = is;
})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
export var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument, edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        let candidate = value;
        return Is.defined(candidate)
            && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
export var CreateFile;
(function (CreateFile) {
    function create(uri, options, annotation) {
        let result = {
            kind: 'create',
            uri
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
        let candidate = value;
        return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === undefined ||
            ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
export var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options, annotation) {
        let result = {
            kind: 'rename',
            oldUri,
            newUri
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
        let candidate = value;
        return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined ||
            ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
export var DeleteFile;
(function (DeleteFile) {
    function create(uri, options, annotation) {
        let result = {
            kind: 'delete',
            uri
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
        let candidate = value;
        return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === undefined ||
            ((candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
export var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        let candidate = value;
        return candidate &&
            (candidate.changes !== undefined || candidate.documentChanges !== undefined) &&
            (candidate.documentChanges === undefined || candidate.documentChanges.every((change) => {
                if (Is.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
class TextEditChangeImpl {
    constructor(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    insert(position, newText, annotation) {
        let edit;
        let id;
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
    }
    replace(range, newText, annotation) {
        let edit;
        let id;
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
    }
    delete(range, annotation) {
        let edit;
        let id;
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
    }
    add(edit) {
        this.edits.push(edit);
    }
    all() {
        return this.edits;
    }
    clear() {
        this.edits.splice(0, this.edits.length);
    }
    assertChangeAnnotations(value) {
        if (value === undefined) {
            throw new Error(`Text edit change is not configured to manage change annotations.`);
        }
    }
}
/**
 * A helper class
 */
class ChangeAnnotations {
    constructor(annotations) {
        this._annotations = annotations === undefined ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
    }
    all() {
        return this._annotations;
    }
    get size() {
        return this._size;
    }
    manage(idOrAnnotation, annotation) {
        let id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
            id = idOrAnnotation;
        }
        else {
            id = this.nextId();
            annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== undefined) {
            throw new Error(`Id ${id} is already in use.`);
        }
        if (annotation === undefined) {
            throw new Error(`No annotation provided for id ${id}`);
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
    }
    nextId() {
        this._counter++;
        return this._counter.toString();
    }
}
/**
 * A workspace change helps constructing changes to a workspace.
 */
export class WorkspaceChange {
    constructor(workspaceEdit) {
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== undefined) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach((change) => {
                    if (TextDocumentEdit.is(change)) {
                        const textEditChange = new TextEditChangeImpl(change.edits, this._changeAnnotations);
                        this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach((key) => {
                    const textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    this._textEditChanges[key] = textEditChange;
                });
            }
        }
        else {
            this._workspaceEdit = {};
        }
    }
    /**
     * Returns the underlying {@link WorkspaceEdit} literal
     * use to be returned from a workspace edit operation like rename.
     */
    get edit() {
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
    }
    getTextEditChange(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            const textDocument = { uri: key.uri, version: key.version };
            let result = this._textEditChanges[textDocument.uri];
            if (!result) {
                const edits = [];
                const textDocumentEdit = {
                    textDocument,
                    edits
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
            let result = this._textEditChanges[key];
            if (!result) {
                let edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    }
    initDocumentChanges() {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
            this._changeAnnotations = new ChangeAnnotations();
            this._workspaceEdit.documentChanges = [];
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
    }
    initChanges() {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
            this._workspaceEdit.changes = Object.create(null);
        }
    }
    createFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        let operation;
        let id;
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
    }
    renameFile(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        let operation;
        let id;
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
    }
    deleteFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        let operation;
        let id;
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
    }
}
/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * {@link TextDocumentIdentifier} literals.
 */
export var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * {@link VersionedTextDocumentIdentifier} literals.
 */
export var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param version The document's version.
     */
    function create(uri, version) {
        return { uri, version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
 * {@link OptionalVersionedTextDocumentIdentifier} literals.
 */
export var OptionalVersionedTextDocumentIdentifier;
(function (OptionalVersionedTextDocumentIdentifier) {
    /**
     * Creates a new OptionalVersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param version The document's version.
     */
    function create(uri, version) {
        return { uri, version };
    }
    OptionalVersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier.is = is;
})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * {@link TextDocumentItem} literals.
 */
export var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
export var MarkupKind;
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
        const candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
export var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the {@link MarkupContent} interface.
     */
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
export var CompletionItemKind;
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
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
export var InsertTextFormat;
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
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * Completion item tags are extra annotations that tweak the rendering of a completion
 * item.
 *
 * @since 3.15.0
 */
export var CompletionItemTag;
(function (CompletionItemTag) {
    /**
     * Render a completion as obsolete, usually using a strike-out.
     */
    CompletionItemTag.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
 *
 * @since 3.16.0
 */
export var InsertReplaceEdit;
(function (InsertReplaceEdit) {
    /**
     * Creates a new insert / replace edit
     */
    function create(newText, insert, replace) {
        return { newText, insert, replace };
    }
    InsertReplaceEdit.create = create;
    /**
     * Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
     */
    function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
    }
    InsertReplaceEdit.is = is;
})(InsertReplaceEdit || (InsertReplaceEdit = {}));
/**
 * How whitespace and indentation is handled during completion
 * item insertion.
 *
 * @since 3.16.0
 */
export var InsertTextMode;
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
})(InsertTextMode || (InsertTextMode = {}));
export var CompletionItemLabelDetails;
(function (CompletionItemLabelDetails) {
    function is(value) {
        const candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === undefined) &&
            (Is.string(candidate.description) || candidate.description === undefined);
    }
    CompletionItemLabelDetails.is = is;
})(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
export var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
export var CompletionList;
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
})(CompletionList || (CompletionList = {}));
export var MarkedString;
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
        const candidate = value;
        return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
export var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the {@link Hover} interface.
     */
    function is(value) {
        let candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * {@link ParameterInformation} literals.
 */
export var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
    }
    ParameterInformation.create = create;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * {@link SignatureInformation} literals.
 */
export var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation, ...parameters) {
        let result = { label };
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
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
export var DocumentHighlightKind;
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
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * {@link DocumentHighlight} literals.
 */
export var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     * @param kind The highlight kind
     */
    function create(range, kind) {
        let result = { range };
        if (Is.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
export var SymbolKind;
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
})(SymbolKind || (SymbolKind = {}));
/**
 * Symbol tags are extra annotations that tweak the rendering of a symbol.
 *
 * @since 3.16
 */
export var SymbolTag;
(function (SymbolTag) {
    /**
     * Render a symbol as obsolete, usually using a strike-out.
     */
    SymbolTag.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));
export var SymbolInformation;
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
        let result = {
            name,
            kind,
            location: { uri, range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
export var WorkspaceSymbol;
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
            ? { name, kind, location: { uri, range } }
            : { name, kind, location: { uri } };
    }
    WorkspaceSymbol.create = create;
})(WorkspaceSymbol || (WorkspaceSymbol = {}));
export var DocumentSymbol;
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
        let result = {
            name,
            detail,
            kind,
            range,
            selectionRange
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
        let candidate = value;
        return candidate &&
            Is.string(candidate.name) && Is.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === undefined || Is.string(candidate.detail)) &&
            (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) &&
            (candidate.children === undefined || Array.isArray(candidate.children)) &&
            (candidate.tags === undefined || Array.isArray(candidate.tags));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
export var CodeActionKind;
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
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The reason why code actions were requested.
 *
 * @since 3.17.0
 */
export var CodeActionTriggerKind;
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
})(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * {@link CodeActionContext} literals.
 */
export var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only, triggerKind) {
        let result = { diagnostics };
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
        let candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is)
            && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string))
            && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
export var CodeAction;
(function (CodeAction) {
    function create(title, kindOrCommandOrEdit, kind) {
        let result = { title };
        let checkKind = true;
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
        let candidate = value;
        return candidate && Is.string(candidate.title) &&
            (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === undefined || Is.string(candidate.kind)) &&
            (candidate.edit !== undefined || candidate.command !== undefined) &&
            (candidate.command === undefined || Command.is(candidate.command)) &&
            (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) &&
            (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * {@link CodeLens} literals.
 */
export var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        let result = { range };
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
        let candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * {@link FormattingOptions} literals.
 */
export var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the {@link FormattingOptions} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * The DocumentLink namespace provides helper functions to work with
 * {@link DocumentLink} literals.
 */
export var DocumentLink;
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range, target, data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the {@link DocumentLink} interface.
     */
    function is(value) {
        let candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
/**
 * The SelectionRange namespace provides helper function to work with
 * SelectionRange literals.
 */
export var SelectionRange;
(function (SelectionRange) {
    /**
     * Creates a new SelectionRange
     * @param range the range.
     * @param parent an optional parent.
     */
    function create(range, parent) {
        return { range, parent };
    }
    SelectionRange.create = create;
    function is(value) {
        let candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
    }
    SelectionRange.is = is;
})(SelectionRange || (SelectionRange = {}));
/**
 * A set of predefined token types. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0
 */
export var SemanticTokenTypes;
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
})(SemanticTokenTypes || (SemanticTokenTypes = {}));
/**
 * A set of predefined token modifiers. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0
 */
export var SemanticTokenModifiers;
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
})(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
/**
 * @since 3.16.0
 */
export var SemanticTokens;
(function (SemanticTokens) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === 'string') &&
            Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
    }
    SemanticTokens.is = is;
})(SemanticTokens || (SemanticTokens = {}));
/**
 * The InlineValueText namespace provides functions to deal with InlineValueTexts.
 *
 * @since 3.17.0
 */
export var InlineValueText;
(function (InlineValueText) {
    /**
     * Creates a new InlineValueText literal.
     */
    function create(range, text) {
        return { range, text };
    }
    InlineValueText.create = create;
    function is(value) {
        const candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
    }
    InlineValueText.is = is;
})(InlineValueText || (InlineValueText = {}));
/**
 * The InlineValueVariableLookup namespace provides functions to deal with InlineValueVariableLookups.
 *
 * @since 3.17.0
 */
export var InlineValueVariableLookup;
(function (InlineValueVariableLookup) {
    /**
     * Creates a new InlineValueText literal.
     */
    function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
    }
    InlineValueVariableLookup.create = create;
    function is(value) {
        const candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup)
            && (Is.string(candidate.variableName) || candidate.variableName === undefined);
    }
    InlineValueVariableLookup.is = is;
})(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
/**
 * The InlineValueEvaluatableExpression namespace provides functions to deal with InlineValueEvaluatableExpression.
 *
 * @since 3.17.0
 */
export var InlineValueEvaluatableExpression;
(function (InlineValueEvaluatableExpression) {
    /**
     * Creates a new InlineValueEvaluatableExpression literal.
     */
    function create(range, expression) {
        return { range, expression };
    }
    InlineValueEvaluatableExpression.create = create;
    function is(value) {
        const candidate = value;
        return candidate !== undefined && candidate !== null && Range.is(candidate.range)
            && (Is.string(candidate.expression) || candidate.expression === undefined);
    }
    InlineValueEvaluatableExpression.is = is;
})(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
/**
 * The InlineValueContext namespace provides helper functions to work with
 * {@link InlineValueContext} literals.
 *
 * @since 3.17.0
 */
export var InlineValueContext;
(function (InlineValueContext) {
    /**
     * Creates a new InlineValueContext literal.
     */
    function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
    }
    InlineValueContext.create = create;
    /**
     * Checks whether the given literal conforms to the {@link InlineValueContext} interface.
     */
    function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
    }
    InlineValueContext.is = is;
})(InlineValueContext || (InlineValueContext = {}));
/**
 * Inlay hint kinds.
 *
 * @since 3.17.0
 */
export var InlayHintKind;
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
})(InlayHintKind || (InlayHintKind = {}));
export var InlayHintLabelPart;
(function (InlayHintLabelPart) {
    function create(value) {
        return { value };
    }
    InlayHintLabelPart.create = create;
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate)
            && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
            && (candidate.location === undefined || Location.is(candidate.location))
            && (candidate.command === undefined || Command.is(candidate.command));
    }
    InlayHintLabelPart.is = is;
})(InlayHintLabelPart || (InlayHintLabelPart = {}));
export var InlayHint;
(function (InlayHint) {
    function create(position, label, kind) {
        const result = { position, label };
        if (kind !== undefined) {
            result.kind = kind;
        }
        return result;
    }
    InlayHint.create = create;
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position)
            && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is))
            && (candidate.kind === undefined || InlayHintKind.is(candidate.kind))
            && (candidate.textEdits === undefined) || Is.typedArray(candidate.textEdits, TextEdit.is)
            && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
            && (candidate.paddingLeft === undefined || Is.boolean(candidate.paddingLeft))
            && (candidate.paddingRight === undefined || Is.boolean(candidate.paddingRight));
    }
    InlayHint.is = is;
})(InlayHint || (InlayHint = {}));
export var StringValue;
(function (StringValue) {
    function createSnippet(value) {
        return { kind: 'snippet', value };
    }
    StringValue.createSnippet = createSnippet;
})(StringValue || (StringValue = {}));
export var InlineCompletionItem;
(function (InlineCompletionItem) {
    function create(insertText, filterText, range, command) {
        return { insertText, filterText, range, command };
    }
    InlineCompletionItem.create = create;
})(InlineCompletionItem || (InlineCompletionItem = {}));
export var InlineCompletionList;
(function (InlineCompletionList) {
    function create(items) {
        return { items };
    }
    InlineCompletionList.create = create;
})(InlineCompletionList || (InlineCompletionList = {}));
/**
 * Describes how an {@link InlineCompletionItemProvider inline completion provider} was triggered.
 *
 * @since 3.18.0
 * @proposed
 */
export var InlineCompletionTriggerKind;
(function (InlineCompletionTriggerKind) {
    /**
     * Completion was triggered explicitly by a user gesture.
     */
    InlineCompletionTriggerKind.Invoked = 0;
    /**
     * Completion was triggered automatically while editing.
     */
    InlineCompletionTriggerKind.Automatic = 1;
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
export var SelectedCompletionInfo;
(function (SelectedCompletionInfo) {
    function create(range, text) {
        return { range, text };
    }
    SelectedCompletionInfo.create = create;
})(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
export var InlineCompletionContext;
(function (InlineCompletionContext) {
    function create(triggerKind, selectedCompletionInfo) {
        return { triggerKind, selectedCompletionInfo };
    }
    InlineCompletionContext.create = create;
})(InlineCompletionContext || (InlineCompletionContext = {}));
export var WorkspaceFolder;
(function (WorkspaceFolder) {
    function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
    }
    WorkspaceFolder.is = is;
})(WorkspaceFolder || (WorkspaceFolder = {}));
export const EOL = ['\n', '\r\n', '\r'];
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */
export var TextDocument;
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
        let candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount)
            && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        let text = document.getText();
        let sortedEdits = mergeSort(edits, (a, b) => {
            let diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        let lastModifiedOffset = text.length;
        for (let i = sortedEdits.length - 1; i >= 0; i--) {
            let e = sortedEdits[i];
            let startOffset = document.offsetAt(e.range.start);
            let endOffset = document.offsetAt(e.range.end);
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
        const p = (data.length / 2) | 0;
        const left = data.slice(0, p);
        const right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        let leftIdx = 0;
        let rightIdx = 0;
        let i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            let ret = compare(left[leftIdx], right[rightIdx]);
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
})(TextDocument || (TextDocument = {}));
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */
class FullTextDocument {
    constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = undefined;
    }
    get uri() {
        return this._uri;
    }
    get languageId() {
        return this._languageId;
    }
    get version() {
        return this._version;
    }
    getText(range) {
        if (range) {
            let start = this.offsetAt(range.start);
            let end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    }
    update(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = undefined;
    }
    getLineOffsets() {
        if (this._lineOffsets === undefined) {
            let lineOffsets = [];
            let text = this._content;
            let isLineStart = true;
            for (let i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                let ch = text.charAt(i);
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
    }
    positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        let lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        let line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    }
    offsetAt(position) {
        let lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        let lineOffset = lineOffsets[position.line];
        let nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    }
    get lineCount() {
        return this.getLineOffsets().length;
    }
}
var Is;
(function (Is) {
    const toString = Object.prototype.toString;
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
