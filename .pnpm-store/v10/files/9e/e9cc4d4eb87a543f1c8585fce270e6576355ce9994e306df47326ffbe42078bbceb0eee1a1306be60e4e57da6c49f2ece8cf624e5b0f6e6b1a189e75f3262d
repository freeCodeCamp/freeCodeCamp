/**
 * Bit flags & masks for the binary trie encoding used for entity decoding.
 *
 * Bit layout (16 bits total):
 * 15..14 VALUE_LENGTH   (+1 encoding; 0 => no value)
 * 13     FLAG13.        If valueLength>0: semicolon required flag (implicit ';').
 *                       If valueLength==0: compact run flag.
 * 12..7  BRANCH_LENGTH  Branch length (0 => single branch in 6..0 if jumpOffset==char) OR run length (when compact run)
 * 6..0   JUMP_TABLE     Jump offset (jump table) OR single-branch char code OR first run char
 */
export declare enum BinTrieFlags {
    VALUE_LENGTH = 49152,
    FLAG13 = 8192,
    BRANCH_LENGTH = 8064,
    JUMP_TABLE = 127
}
//# sourceMappingURL=bin-trie-flags.d.ts.map