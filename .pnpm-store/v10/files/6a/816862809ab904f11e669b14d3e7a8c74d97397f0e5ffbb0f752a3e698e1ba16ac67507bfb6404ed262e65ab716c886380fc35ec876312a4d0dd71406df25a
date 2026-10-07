"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncompressibleCommands = exports.Compressor = void 0;
exports.compress = compress;
exports.decompress = decompress;
exports.compressCommand = compressCommand;
exports.decompressResponse = decompressResponse;
const util_1 = require("util");
const zlib = require("zlib");
const constants_1 = require("../../constants");
const deps_1 = require("../../deps");
const error_1 = require("../../error");
const commands_1 = require("../commands");
const constants_2 = require("./constants");
/** @public */
exports.Compressor = Object.freeze({
    none: 0,
    snappy: 1,
    zlib: 2,
    zstd: 3
});
exports.uncompressibleCommands = new Set([
    constants_1.LEGACY_HELLO_COMMAND,
    'saslStart',
    'saslContinue',
    'getnonce',
    'authenticate',
    'createUser',
    'updateUser',
    'copydbSaslStart',
    'copydbgetnonce',
    'copydb'
]);
const ZSTD_COMPRESSION_LEVEL = 3;
const zlibInflate = (0, util_1.promisify)(zlib.inflate.bind(zlib));
const zlibDeflate = (0, util_1.promisify)(zlib.deflate.bind(zlib));
let zstd;
let Snappy = null;
function loadSnappy() {
    if (Snappy == null) {
        const snappyImport = (0, deps_1.getSnappy)();
        if ('kModuleError' in snappyImport) {
            throw snappyImport.kModuleError;
        }
        Snappy = snappyImport;
    }
    return Snappy;
}
// Facilitate compressing a message using an agreed compressor
async function compress(options, dataToBeCompressed) {
    const zlibOptions = {};
    switch (options.agreedCompressor) {
        case 'snappy': {
            Snappy ??= loadSnappy();
            return await Snappy.compress(dataToBeCompressed);
        }
        case 'zstd': {
            loadZstd();
            if ('kModuleError' in zstd) {
                throw zstd['kModuleError'];
            }
            return await zstd.compress(dataToBeCompressed, ZSTD_COMPRESSION_LEVEL);
        }
        case 'zlib': {
            if (options.zlibCompressionLevel) {
                zlibOptions.level = options.zlibCompressionLevel;
            }
            return await zlibDeflate(dataToBeCompressed, zlibOptions);
        }
        default: {
            throw new error_1.MongoInvalidArgumentError(`Unknown compressor ${options.agreedCompressor} failed to compress`);
        }
    }
}
// Decompress a message using the given compressor
async function decompress(compressorID, compressedData) {
    if (compressorID !== exports.Compressor.snappy &&
        compressorID !== exports.Compressor.zstd &&
        compressorID !== exports.Compressor.zlib &&
        compressorID !== exports.Compressor.none) {
        throw new error_1.MongoDecompressionError(`Server sent message compressed using an unsupported compressor. (Received compressor ID ${compressorID})`);
    }
    switch (compressorID) {
        case exports.Compressor.snappy: {
            Snappy ??= loadSnappy();
            return await Snappy.uncompress(compressedData, { asBuffer: true });
        }
        case exports.Compressor.zstd: {
            loadZstd();
            if ('kModuleError' in zstd) {
                throw zstd['kModuleError'];
            }
            return await zstd.decompress(compressedData);
        }
        case exports.Compressor.zlib: {
            return await zlibInflate(compressedData);
        }
        default: {
            return compressedData;
        }
    }
}
/**
 * Load ZStandard if it is not already set.
 */
function loadZstd() {
    if (!zstd) {
        zstd = (0, deps_1.getZstdLibrary)();
    }
}
const MESSAGE_HEADER_SIZE = 16;
/**
 * @internal
 *
 * Compresses an OP_MSG or OP_QUERY message, if compression is configured.  This method
 * also serializes the command to BSON.
 */
async function compressCommand(command, description) {
    const finalCommand = description.agreedCompressor === 'none' || !commands_1.OpCompressedRequest.canCompress(command)
        ? command
        : new commands_1.OpCompressedRequest(command, {
            agreedCompressor: description.agreedCompressor ?? 'none',
            zlibCompressionLevel: description.zlibCompressionLevel ?? 0
        });
    const data = await finalCommand.toBin();
    return Buffer.concat(data);
}
/**
 * @internal
 *
 * Decompresses an OP_MSG or OP_QUERY response from the server, if compression is configured.
 *
 * This method does not parse the response's BSON.
 */
async function decompressResponse(message) {
    const messageHeader = {
        length: message.readInt32LE(0),
        requestId: message.readInt32LE(4),
        responseTo: message.readInt32LE(8),
        opCode: message.readInt32LE(12)
    };
    if (messageHeader.opCode !== constants_2.OP_COMPRESSED) {
        const ResponseType = messageHeader.opCode === constants_2.OP_MSG ? commands_1.OpMsgResponse : commands_1.OpReply;
        const messageBody = message.subarray(MESSAGE_HEADER_SIZE);
        return new ResponseType(message, messageHeader, messageBody);
    }
    const header = {
        ...messageHeader,
        fromCompressed: true,
        opCode: message.readInt32LE(MESSAGE_HEADER_SIZE),
        length: message.readInt32LE(MESSAGE_HEADER_SIZE + 4)
    };
    const compressorID = message[MESSAGE_HEADER_SIZE + 8];
    const compressedBuffer = message.slice(MESSAGE_HEADER_SIZE + 9);
    // recalculate based on wrapped opcode
    const ResponseType = header.opCode === constants_2.OP_MSG ? commands_1.OpMsgResponse : commands_1.OpReply;
    const messageBody = await decompress(compressorID, compressedBuffer);
    if (messageBody.length !== header.length) {
        throw new error_1.MongoDecompressionError('Message body and message header must be the same length');
    }
    return new ResponseType(message, header, messageBody);
}
//# sourceMappingURL=compression.js.map