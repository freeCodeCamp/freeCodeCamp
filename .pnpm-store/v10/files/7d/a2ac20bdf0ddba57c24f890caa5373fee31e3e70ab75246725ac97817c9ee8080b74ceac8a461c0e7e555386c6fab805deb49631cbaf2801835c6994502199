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
export enum BinTrieFlags {
    VALUE_LENGTH = 0b1100_0000_0000_0000,
    FLAG13 = 0b0010_0000_0000_0000,
    BRANCH_LENGTH = 0b0001_1111_1000_0000,
    JUMP_TABLE = 0b0000_0000_0111_1111,
}
