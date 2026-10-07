"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zlib_1 = require("zlib");
const sparse_bitfield_1 = __importDefault(require("sparse-bitfield"));
const codePoints = __importStar(require("./code-points-src"));
const fs_1 = require("fs");
const prettier = __importStar(require("prettier"));
const unassigned_code_points = (0, sparse_bitfield_1.default)();
const commonly_mapped_to_nothing = (0, sparse_bitfield_1.default)();
const non_ascii_space_characters = (0, sparse_bitfield_1.default)();
const prohibited_characters = (0, sparse_bitfield_1.default)();
const bidirectional_r_al = (0, sparse_bitfield_1.default)();
const bidirectional_l = (0, sparse_bitfield_1.default)();
function traverse(bits, src) {
    for (const code of src.keys()) {
        bits.set(code, true);
    }
    const buffer = bits.toBuffer();
    return Buffer.concat([createSize(buffer), buffer]);
}
function createSize(buffer) {
    const buf = Buffer.alloc(4);
    buf.writeUInt32BE(buffer.length);
    return buf;
}
const memory = [];
memory.push(traverse(unassigned_code_points, codePoints.unassigned_code_points), traverse(commonly_mapped_to_nothing, codePoints.commonly_mapped_to_nothing), traverse(non_ascii_space_characters, codePoints.non_ASCII_space_characters), traverse(prohibited_characters, codePoints.prohibited_characters), traverse(bidirectional_r_al, codePoints.bidirectional_r_al), traverse(bidirectional_l, codePoints.bidirectional_l));
async function writeCodepoints() {
    const config = await prettier.resolveConfig(__dirname);
    const formatOptions = { ...config, parser: 'typescript' };
    function write(stream, chunk) {
        return new Promise((resolve) => stream.write(chunk, () => resolve()));
    }
    await write((0, fs_1.createWriteStream)(process.argv[2]), await prettier.format(`import { gunzipSync } from 'zlib';

  export default gunzipSync(
    Buffer.from(
      '${(0, zlib_1.gzipSync)(Buffer.concat(memory), { level: 9 }).toString('base64')}',
      'base64'
    )
  );
  `, formatOptions));
    const fsStreamUncompressedData = (0, fs_1.createWriteStream)(process.argv[3]);
    await write(fsStreamUncompressedData, await prettier.format(`const data = Buffer.from('${Buffer.concat(memory).toString('base64')}', 'base64');\nexport default data;\n`, formatOptions));
}
writeCodepoints().catch((error) => console.error('error occurred generating saslprep codepoint data', { error }));
//# sourceMappingURL=generate-code-points.js.map