"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemoryCodePoints = createMemoryCodePoints;
const sparse_bitfield_1 = __importDefault(require("sparse-bitfield"));
function createMemoryCodePoints(data) {
    let offset = 0;
    function read() {
        const size = data.readUInt32BE(offset);
        offset += 4;
        const codepoints = data.slice(offset, offset + size);
        offset += size;
        return (0, sparse_bitfield_1.default)({ buffer: codepoints });
    }
    const unassigned_code_points = read();
    const commonly_mapped_to_nothing = read();
    const non_ASCII_space_characters = read();
    const prohibited_characters = read();
    const bidirectional_r_al = read();
    const bidirectional_l = read();
    return {
        unassigned_code_points,
        commonly_mapped_to_nothing,
        non_ASCII_space_characters,
        prohibited_characters,
        bidirectional_r_al,
        bidirectional_l,
    };
}
//# sourceMappingURL=memory-code-points.js.map