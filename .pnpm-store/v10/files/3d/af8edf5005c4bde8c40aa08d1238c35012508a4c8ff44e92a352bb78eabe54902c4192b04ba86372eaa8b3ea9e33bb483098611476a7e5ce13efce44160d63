"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISO_2022_CN = exports.ISO_2022_KR = exports.ISO_2022_JP = void 0;
const match_1 = __importDefault(require("../match"));
class ISO_2022 {
    constructor() {
        this.escapeSequences = [];
    }
    name() {
        return 'ISO_2022';
    }
    match(det) {
        let i, j;
        let escN;
        let hits = 0;
        let misses = 0;
        let shifts = 0;
        let confidence;
        const text = det.inputBytes;
        const textLen = det.inputLen;
        scanInput: for (i = 0; i < textLen; i++) {
            if (text[i] == 0x1b) {
                checkEscapes: for (escN = 0; escN < this.escapeSequences.length; escN++) {
                    const seq = this.escapeSequences[escN];
                    if (textLen - i < seq.length)
                        continue checkEscapes;
                    for (j = 1; j < seq.length; j++)
                        if (seq[j] != text[i + j])
                            continue checkEscapes;
                    hits++;
                    i += seq.length - 1;
                    continue scanInput;
                }
                misses++;
            }
            if (text[i] == 0x0e || text[i] == 0x0f)
                shifts++;
        }
        if (hits == 0)
            return null;
        confidence = (100 * hits - 100 * misses) / (hits + misses);
        if (hits + shifts < 5)
            confidence -= (5 - (hits + shifts)) * 10;
        return confidence <= 0 ? null : (0, match_1.default)(det, this, confidence);
    }
}
class ISO_2022_JP extends ISO_2022 {
    constructor() {
        super(...arguments);
        this.escapeSequences = [
            [0x1b, 0x24, 0x28, 0x43],
            [0x1b, 0x24, 0x28, 0x44],
            [0x1b, 0x24, 0x40],
            [0x1b, 0x24, 0x41],
            [0x1b, 0x24, 0x42],
            [0x1b, 0x26, 0x40],
            [0x1b, 0x28, 0x42],
            [0x1b, 0x28, 0x48],
            [0x1b, 0x28, 0x49],
            [0x1b, 0x28, 0x4a],
            [0x1b, 0x2e, 0x41],
            [0x1b, 0x2e, 0x46],
        ];
    }
    name() {
        return 'ISO-2022-JP';
    }
    language() {
        return 'ja';
    }
}
exports.ISO_2022_JP = ISO_2022_JP;
class ISO_2022_KR extends ISO_2022 {
    constructor() {
        super(...arguments);
        this.escapeSequences = [[0x1b, 0x24, 0x29, 0x43]];
    }
    name() {
        return 'ISO-2022-KR';
    }
    language() {
        return 'kr';
    }
}
exports.ISO_2022_KR = ISO_2022_KR;
class ISO_2022_CN extends ISO_2022 {
    constructor() {
        super(...arguments);
        this.escapeSequences = [
            [0x1b, 0x24, 0x29, 0x41],
            [0x1b, 0x24, 0x29, 0x47],
            [0x1b, 0x24, 0x2a, 0x48],
            [0x1b, 0x24, 0x29, 0x45],
            [0x1b, 0x24, 0x2b, 0x49],
            [0x1b, 0x24, 0x2b, 0x4a],
            [0x1b, 0x24, 0x2b, 0x4b],
            [0x1b, 0x24, 0x2b, 0x4c],
            [0x1b, 0x24, 0x2b, 0x4d],
            [0x1b, 0x4e],
            [0x1b, 0x4f],
        ];
    }
    name() {
        return 'ISO-2022-CN';
    }
    language() {
        return 'zh';
    }
}
exports.ISO_2022_CN = ISO_2022_CN;
//# sourceMappingURL=iso2022.js.map