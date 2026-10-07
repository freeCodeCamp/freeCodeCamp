"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinTrieFlags = void 0;
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
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["FLAG13"] = 8192] = "FLAG13";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (exports.BinTrieFlags = BinTrieFlags = {}));
//# sourceMappingURL=bin-trie-flags.js.map