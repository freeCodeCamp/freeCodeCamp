import htmlDecodeTree from "./generated/decode-data-html.js";
import xmlDecodeTree from "./generated/decode-data-xml.js";
import decodeCodePoint from "./decode_codepoint.js";
export { htmlDecodeTree, xmlDecodeTree, decodeCodePoint };
export { replaceCodePoint, fromCodePoint } from "./decode_codepoint.js";
export declare enum BinTrieFlags {
    VALUE_LENGTH = 49152,
    BRANCH_LENGTH = 16256,
    JUMP_TABLE = 127
}
export declare enum DecodingMode {
    /** Entities in text nodes that can end with any character. */
    Legacy = 0,
    /** Only allow entities terminated with a semicolon. */
    Strict = 1,
    /** Entities in attributes have limitations on ending characters. */
    Attribute = 2
}
/**
 * Producers for character reference errors as defined in the HTML spec.
 */
export interface EntityErrorProducer {
    missingSemicolonAfterCharacterReference(): void;
    absenceOfDigitsInNumericCharacterReference(consumedCharacters: number): void;
    validateNumericCharacterReference(code: number): void;
}
/**
 * Token decoder with support of writing partial entities.
 */
export declare class EntityDecoder {
    /** The tree used to decode entities. */
    private readonly decodeTree;
    /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */
    private readonly emitCodePoint;
    /** An object that is used to produce errors. */
    private readonly errors?;
    constructor(
    /** The tree used to decode entities. */
    decodeTree: Uint16Array, 
    /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */
    emitCodePoint: (cp: number, consumed: number) => void, 
    /** An object that is used to produce errors. */
    errors?: EntityErrorProducer | undefined);
    /** The current state of the decoder. */
    private state;
    /** Characters that were consumed while parsing an entity. */
    private consumed;
    /**
     * The result of the entity.
     *
     * Either the result index of a numeric entity, or the codepoint of a
     * numeric entity.
     */
    private result;
    /** The current index in the decode tree. */
    private treeIndex;
    /** The number of characters that were consumed in excess. */
    private excess;
    /** The mode in which the decoder is operating. */
    private decodeMode;
    /** Resets the instance to make it reusable. */
    startEntity(decodeMode: DecodingMode): void;
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    write(str: string, offset: number): number;
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    private stateNumericStart;
    private addToNumericResult;
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    private stateNumericHex;
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    private stateNumericDecimal;
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
    private emitNumericEntity;
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    private stateNamedEntity;
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
    private emitNotTerminatedNamedEntity;
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
    private emitNamedEntityData;
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
    end(): number;
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
export declare function determineBranch(decodeTree: Uint16Array, current: number, nodeIdx: number, char: number): number;
/**
 * Decodes an HTML string.
 *
 * @param str The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */
export declare function decodeHTML(str: string, mode?: DecodingMode): string;
/**
 * Decodes an HTML string in an attribute.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
export declare function decodeHTMLAttribute(str: string): string;
/**
 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
export declare function decodeHTMLStrict(str: string): string;
/**
 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
export declare function decodeXML(str: string): string;
//# sourceMappingURL=decode.d.ts.map