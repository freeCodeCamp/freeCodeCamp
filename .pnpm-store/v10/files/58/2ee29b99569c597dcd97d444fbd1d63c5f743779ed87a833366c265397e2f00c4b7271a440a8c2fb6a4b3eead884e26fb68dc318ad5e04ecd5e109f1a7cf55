"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromFile = exports.FileTokenizer = void 0;
const AbstractTokenizer_1 = require("./AbstractTokenizer");
const peek_readable_1 = require("peek-readable");
const fs = require("./FsPromise");
class FileTokenizer extends AbstractTokenizer_1.AbstractTokenizer {
    constructor(fd, fileInfo) {
        super(fileInfo);
        this.fd = fd;
    }
    /**
     * Read buffer from file
     * @param uint8Array - Uint8Array to write result to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        this.position = normOptions.position;
        const res = await fs.read(this.fd, uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        this.position += res.bytesRead;
        if (res.bytesRead < normOptions.length && (!options || !options.mayBeLess)) {
            throw new peek_readable_1.EndOfStreamError();
        }
        return res.bytesRead;
    }
    /**
     * Peek buffer from file
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise number of bytes read
     */
    async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const res = await fs.read(this.fd, uint8Array, normOptions.offset, normOptions.length, normOptions.position);
        if ((!normOptions.mayBeLess) && res.bytesRead < normOptions.length) {
            throw new peek_readable_1.EndOfStreamError();
        }
        return res.bytesRead;
    }
    async close() {
        return fs.close(this.fd);
    }
}
exports.FileTokenizer = FileTokenizer;
async function fromFile(sourceFilePath) {
    const stat = await fs.stat(sourceFilePath);
    if (!stat.isFile) {
        throw new Error(`File not a file: ${sourceFilePath}`);
    }
    const fd = await fs.open(sourceFilePath, 'r');
    return new FileTokenizer(fd, { path: sourceFilePath, size: stat.size });
}
exports.fromFile = fromFile;
