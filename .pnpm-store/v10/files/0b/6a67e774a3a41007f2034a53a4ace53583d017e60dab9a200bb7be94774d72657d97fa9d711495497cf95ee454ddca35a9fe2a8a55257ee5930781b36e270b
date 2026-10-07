"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const yoctocolors_cjs_1 = __importDefault(require("yoctocolors-cjs"));
const figures_1 = __importDefault(require("@inquirer/figures"));
/**
 * Separator object
 * Used to space/separate choices group
 */
class Separator {
    separator = yoctocolors_cjs_1.default.dim(Array.from({ length: 15 }).join(figures_1.default.line));
    type = 'separator';
    constructor(separator) {
        if (separator) {
            this.separator = separator;
        }
    }
    static isSeparator(choice) {
        return Boolean(choice &&
            typeof choice === 'object' &&
            'type' in choice &&
            choice.type === 'separator');
    }
}
exports.Separator = Separator;
