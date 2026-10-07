"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromStream = exports.fromBuffer = exports.EndOfStreamError = exports.fromFile = void 0;
const fs = require("./FsPromise");
const core = require("./core");
var FileTokenizer_1 = require("./FileTokenizer");
Object.defineProperty(exports, "fromFile", { enumerable: true, get: function () { return FileTokenizer_1.fromFile; } });
var core_1 = require("./core");
Object.defineProperty(exports, "EndOfStreamError", { enumerable: true, get: function () { return core_1.EndOfStreamError; } });
Object.defineProperty(exports, "fromBuffer", { enumerable: true, get: function () { return core_1.fromBuffer; } });
/**
 * Construct ReadStreamTokenizer from given Stream.
 * Will set fileSize, if provided given Stream has set the .path property.
 * @param stream - Node.js Stream.Readable
 * @param fileInfo - Pass additional file information to the tokenizer
 * @returns Tokenizer
 */
async function fromStream(stream, fileInfo) {
    fileInfo = fileInfo ? fileInfo : {};
    if (stream.path) {
        const stat = await fs.stat(stream.path);
        fileInfo.path = stream.path;
        fileInfo.size = stat.size;
    }
    return core.fromStream(stream, fileInfo);
}
exports.fromStream = fromStream;
