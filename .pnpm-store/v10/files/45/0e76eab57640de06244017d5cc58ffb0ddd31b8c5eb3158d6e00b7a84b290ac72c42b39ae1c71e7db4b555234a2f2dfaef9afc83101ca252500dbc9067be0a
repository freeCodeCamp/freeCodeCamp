/**
 * A tagging type for string properties that are actually URIs.
 */
export type DocumentUri = string;
/**
 * Position in a text document expressed as zero-based line and character offset.
 * The offsets are based on a UTF-16 string representation. So a string of the form
 * `a𐐀b` the character offset of the character `a` is 0, the character offset of `𐐀`
 * is 1 and the character offset of b is 3 since `𐐀` is represented using two code
 * units in UTF-16.
 *
 * Positions are line end character agnostic. So you can not specify a position that
 * denotes `\r|\n` or `\n|` where `|` represents the character offset.
 */
export interface Position {
    /**
     * Line position in a document (zero-based).
     *
     * If a line number is greater than the number of lines in a document, it
     * defaults back to the number of lines in the document.
     * If a line number is negative, it defaults to 0.
     *
     * The above two properties are implementation specific.
     */
    line: number;
    /**
     * Character offset on a line in a document (zero-based).
     *
     * The meaning of this offset is determined by the negotiated
     * `PositionEncodingKind`.
     *
     * If the character value is greater than the line length it defaults back
     * to the line length. This property is implementation specific.
     */
    character: number;
}
/**
 * A range in a text document expressed as (zero-based) start and end positions.
 *
 * If you want to specify a range that contains a line including the line ending
 * character(s) then use an end position denoting the start of the next line.
 * For example:
 * ```ts
 * {
 *     start: { line: 5, character: 23 }
 *     end : { line 6, character : 0 }
 * }
 * ```
 */
export interface Range {
    /**
     * The range's start position.
     */
    start: Position;
    /**
     * The range's end position.
     */
    end: Position;
}
/**
 * A text edit applicable to a text document.
 */
export interface TextEdit {
    /**
     * The range of the text document to be manipulated. To insert
     * text into a document create a range where start === end.
     */
    range: Range;
    /**
     * The string to be inserted. For delete operations use an
     * empty string.
     */
    newText: string;
}
/**
 * An event describing a change to a text document. If range and rangeLength are omitted
 * the new text is considered to be the full content of the document.
 */
export type TextDocumentContentChangeEvent = {
    /**
     * The range of the document that changed.
     */
    range: Range;
    /**
     * The optional length of the range that got replaced.
     *
     * @deprecated use range instead.
     */
    rangeLength?: number;
    /**
     * The new text for the provided range.
     */
    text: string;
} | {
    /**
     * The new text of the whole document.
     */
    text: string;
};
/**
 * A simple text document. Not to be implemented. The document keeps the content
 * as string.
 */
export interface TextDocument {
    /**
     * The associated URI for this document. Most documents have the __file__-scheme, indicating that they
     * represent files on disk. However, some documents may have other schemes indicating that they are not
     * available on disk.
     *
     * @readonly
     */
    readonly uri: DocumentUri;
    /**
     * The identifier of the language associated with this document.
     *
     * @readonly
     */
    readonly languageId: string;
    /**
     * The version number of this document (it will increase after each
     * change, including undo/redo).
     *
     * @readonly
     */
    readonly version: number;
    /**
     * Get the text of this document. A substring can be retrieved by
     * providing a range.
     *
     * @param range (optional) An range within the document to return.
     * If no range is passed, the full content is returned.
     * Invalid range positions are adjusted as described in {@link Position.line}
     * and {@link Position.character}.
     * If the start range position is greater than the end range position,
     * then the effect of getText is as if the two positions were swapped.

     * @return The text of this document or a substring of the text if a
     *         range is provided.
     */
    getText(range?: Range): string;
    /**
     * Converts a zero-based offset to a position.
     *
     * @param offset A zero-based offset.
     * @return A valid {@link Position position}.
     * @example The text document "ab\ncd" produces:
     * * position { line: 0, character: 0 } for `offset` 0.
     * * position { line: 0, character: 1 } for `offset` 1.
     * * position { line: 0, character: 2 } for `offset` 2.
     * * position { line: 1, character: 0 } for `offset` 3.
     * * position { line: 1, character: 1 } for `offset` 4.
     */
    positionAt(offset: number): Position;
    /**
     * Converts the position to a zero-based offset.
     * Invalid positions are adjusted as described in {@link Position.line}
     * and {@link Position.character}.
     *
     * @param position A position.
     * @return A valid zero-based offset.
     */
    offsetAt(position: Position): number;
    /**
     * The number of lines in this document.
     *
     * @readonly
     */
    readonly lineCount: number;
}
export declare namespace TextDocument {
    /**
     * Creates a new text document.
     *
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param version The document's initial version number.
     * @param content The document's content.
     */
    function create(uri: DocumentUri, languageId: string, version: number, content: string): TextDocument;
    /**
     * Updates a TextDocument by modifying its content.
     *
     * @param document the document to update. Only documents created by TextDocument.create are valid inputs.
     * @param changes the changes to apply to the document.
     * @param version the changes version for the document.
     * @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
     *
     */
    function update(document: TextDocument, changes: TextDocumentContentChangeEvent[], version: number): TextDocument;
    function applyEdits(document: TextDocument, edits: TextEdit[]): string;
}
