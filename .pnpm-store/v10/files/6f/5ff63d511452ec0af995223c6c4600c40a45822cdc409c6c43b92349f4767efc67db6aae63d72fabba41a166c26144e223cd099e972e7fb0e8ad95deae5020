export declare enum QuoteType {
    NoValue = 0,
    Unquoted = 1,
    Single = 2,
    Double = 3
}
export interface Callbacks {
    onattribdata(start: number, endIndex: number): void;
    onattribentity(codepoint: number): void;
    onattribend(quote: QuoteType, endIndex: number): void;
    onattribname(start: number, endIndex: number): void;
    oncdata(start: number, endIndex: number, endOffset: number): void;
    onclosetag(start: number, endIndex: number): void;
    oncomment(start: number, endIndex: number, endOffset: number): void;
    ondeclaration(start: number, endIndex: number): void;
    onend(): void;
    onopentagend(endIndex: number): void;
    onopentagname(start: number, endIndex: number): void;
    onprocessinginstruction(start: number, endIndex: number): void;
    onselfclosingtag(endIndex: number): void;
    ontext(start: number, endIndex: number): void;
    ontextentity(codepoint: number): void;
}
export default class Tokenizer {
    private readonly cbs;
    /** The current state the tokenizer is in. */
    private state;
    /** The read buffer. */
    private buffer;
    /** The beginning of the section that is currently being read. */
    private sectionStart;
    /** The index within the buffer that we are currently looking at. */
    private index;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
    private baseState;
    /** For special parsing behavior inside of script and style tags. */
    private isSpecial;
    /** Indicates whether the tokenizer has been paused. */
    running: boolean;
    /** The offset of the current buffer. */
    private offset;
    private readonly xmlMode;
    private readonly decodeEntities;
    private readonly entityTrie;
    constructor({ xmlMode, decodeEntities, }: {
        xmlMode?: boolean;
        decodeEntities?: boolean;
    }, cbs: Callbacks);
    reset(): void;
    write(chunk: string): void;
    end(): void;
    pause(): void;
    resume(): void;
    /**
     * The current index within all of the written data.
     */
    getIndex(): number;
    /**
     * The start of the current section.
     */
    getSectionStart(): number;
    private stateText;
    private currentSequence;
    private sequenceIndex;
    private stateSpecialStartSequence;
    /** Look for an end tag. For <title> tags, also decode entities. */
    private stateInSpecialTag;
    private stateCDATASequence;
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    private fastForwardTo;
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    private stateInCommentLike;
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    private isTagStartChar;
    private startSpecial;
    private stateBeforeTagName;
    private stateInTagName;
    private stateBeforeClosingTagName;
    private stateInClosingTagName;
    private stateAfterClosingTagName;
    private stateBeforeAttributeName;
    private stateInSelfClosingTag;
    private stateInAttributeName;
    private stateAfterAttributeName;
    private stateBeforeAttributeValue;
    private handleInAttributeValue;
    private stateInAttributeValueDoubleQuotes;
    private stateInAttributeValueSingleQuotes;
    private stateInAttributeValueNoQuotes;
    private stateBeforeDeclaration;
    private stateInDeclaration;
    private stateInProcessingInstruction;
    private stateBeforeComment;
    private stateInSpecialComment;
    private stateBeforeSpecialS;
    private trieIndex;
    private trieCurrent;
    /** For named entities, the index of the value. For numeric entities, the code point. */
    private entityResult;
    private entityExcess;
    private stateBeforeEntity;
    private stateInNamedEntity;
    private emitNamedEntity;
    private stateBeforeNumericEntity;
    private emitNumericEntity;
    private stateInNumericEntity;
    private stateInHexEntity;
    private allowLegacyEntity;
    /**
     * Remove data that has already been consumed from the buffer.
     */
    private cleanup;
    private shouldContinue;
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    private parse;
    private finish;
    /** Handle any trailing data. */
    private handleTrailingData;
    private emitPartial;
    private emitCodePoint;
}
//# sourceMappingURL=Tokenizer.d.ts.map