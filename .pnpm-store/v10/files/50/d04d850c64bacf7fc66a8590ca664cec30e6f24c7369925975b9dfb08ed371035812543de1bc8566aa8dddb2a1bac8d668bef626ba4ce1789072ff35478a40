"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = __importDefault(require("../match"));
class Ascii {
    name() {
        return 'ASCII';
    }
    match(det) {
        const input = det.rawInput;
        for (let i = 0; i < det.rawLen; i++) {
            const b = input[i];
            if (b < 32 || b > 126) {
                return (0, match_1.default)(det, this, 0);
            }
        }
        return (0, match_1.default)(det, this, 100);
    }
}
exports.default = Ascii;
//# sourceMappingURL=ascii.js.map