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
exports.detectFileSync = exports.detectFile = exports.analyse = exports.detect = void 0;
const node_1 = __importDefault(require("./fs/node"));
const ascii_1 = __importDefault(require("./encoding/ascii"));
const utf8_1 = __importDefault(require("./encoding/utf8"));
const unicode = __importStar(require("./encoding/unicode"));
const mbcs = __importStar(require("./encoding/mbcs"));
const sbcs = __importStar(require("./encoding/sbcs"));
const iso2022 = __importStar(require("./encoding/iso2022"));
const utils_1 = require("./utils");
const recognisers = [
    new utf8_1.default(),
    new unicode.UTF_16BE(),
    new unicode.UTF_16LE(),
    new unicode.UTF_32BE(),
    new unicode.UTF_32LE(),
    new mbcs.sjis(),
    new mbcs.big5(),
    new mbcs.euc_jp(),
    new mbcs.euc_kr(),
    new mbcs.gb_18030(),
    new iso2022.ISO_2022_JP(),
    new iso2022.ISO_2022_KR(),
    new iso2022.ISO_2022_CN(),
    new sbcs.ISO_8859_1(),
    new sbcs.ISO_8859_2(),
    new sbcs.ISO_8859_5(),
    new sbcs.ISO_8859_6(),
    new sbcs.ISO_8859_7(),
    new sbcs.ISO_8859_8(),
    new sbcs.ISO_8859_9(),
    new sbcs.windows_1251(),
    new sbcs.windows_1256(),
    new sbcs.KOI8_R(),
    new ascii_1.default(),
];
const detect = (buffer) => {
    const matches = (0, exports.analyse)(buffer);
    return matches.length > 0 ? matches[0].name : null;
};
exports.detect = detect;
const analyse = (buffer) => {
    if (!(0, utils_1.isByteArray)(buffer)) {
        throw new Error('Input must be a byte array, e.g. Buffer or Uint8Array');
    }
    const byteStats = [];
    for (let i = 0; i < 256; i++)
        byteStats[i] = 0;
    for (let i = buffer.length - 1; i >= 0; i--)
        byteStats[buffer[i] & 0x00ff]++;
    let c1Bytes = false;
    for (let i = 0x80; i <= 0x9f; i += 1) {
        if (byteStats[i] !== 0) {
            c1Bytes = true;
            break;
        }
    }
    const context = {
        byteStats,
        c1Bytes,
        rawInput: buffer,
        rawLen: buffer.length,
        inputBytes: buffer,
        inputLen: buffer.length,
    };
    const matches = recognisers
        .map((rec) => {
        return rec.match(context);
    })
        .filter((match) => {
        return !!match;
    })
        .sort((a, b) => {
        return b.confidence - a.confidence;
    });
    return matches;
};
exports.analyse = analyse;
const detectFile = (filepath, opts = {}) => new Promise((resolve, reject) => {
    let fd;
    const fs = (0, node_1.default)();
    const handler = (err, buffer) => {
        if (fd) {
            fs.closeSync(fd);
        }
        if (err) {
            reject(err);
        }
        else if (buffer) {
            resolve((0, exports.detect)(buffer));
        }
        else {
            reject(new Error('No error and no buffer received'));
        }
    };
    const sampleSize = (opts === null || opts === void 0 ? void 0 : opts.sampleSize) || 0;
    if (sampleSize > 0) {
        fd = fs.openSync(filepath, 'r');
        let sample = Buffer.allocUnsafe(sampleSize);
        fs.read(fd, sample, 0, sampleSize, opts.offset, (err, bytesRead) => {
            if (err) {
                handler(err, null);
            }
            else {
                if (bytesRead < sampleSize) {
                    sample = sample.subarray(0, bytesRead);
                }
                handler(null, sample);
            }
        });
        return;
    }
    fs.readFile(filepath, handler);
});
exports.detectFile = detectFile;
const detectFileSync = (filepath, opts = {}) => {
    const fs = (0, node_1.default)();
    if (opts && opts.sampleSize) {
        const fd = fs.openSync(filepath, 'r');
        let sample = Buffer.allocUnsafe(opts.sampleSize);
        const bytesRead = fs.readSync(fd, sample, 0, opts.sampleSize, opts.offset);
        if (bytesRead < opts.sampleSize) {
            sample = sample.subarray(0, bytesRead);
        }
        fs.closeSync(fd);
        return (0, exports.detect)(sample);
    }
    return (0, exports.detect)(fs.readFileSync(filepath));
};
exports.detectFileSync = detectFileSync;
exports.default = {
    analyse: exports.analyse,
    detect: exports.detect,
    detectFileSync: exports.detectFileSync,
    detectFile: exports.detectFile,
};
//# sourceMappingURL=index.js.map