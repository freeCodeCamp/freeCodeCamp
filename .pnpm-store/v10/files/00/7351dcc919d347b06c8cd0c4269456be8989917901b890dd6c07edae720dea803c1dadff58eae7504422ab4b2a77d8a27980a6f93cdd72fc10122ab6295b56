"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharsBuffer = void 0;
class CharsBuffer {
    constructor() {
        this.charsBuffer = [];
    }
    concat(chars) {
        const last = this.last();
        if (!last || last.isTemplate || chars.isTemplate) {
            this.charsBuffer.push(chars);
        }
        else {
            last.concat(chars);
        }
    }
    concatBuffer(buffer) {
        const last = this.last();
        const first = buffer.first();
        if ((last === null || last === void 0 ? void 0 : last.isTemplate) === false && (first === null || first === void 0 ? void 0 : first.isTemplate) === false) {
            last.concat(first);
            this.charsBuffer.push(...buffer.charsBuffer.slice(1));
            return;
        }
        this.charsBuffer.push(...buffer.charsBuffer);
    }
    hasTemplate() {
        return this.charsBuffer.some((char) => char.isTemplate);
    }
    getParts() {
        return [...this.charsBuffer];
    }
    length() {
        return this.charsBuffer
            .map((chars) => chars.length())
            .reduce((a, b) => a + b, 0);
    }
    clear() {
        this.charsBuffer = [];
    }
    value() {
        const v = this.charsBuffer.map((chars) => chars.value).join("");
        return v;
    }
    last() {
        return this.charsBuffer[this.charsBuffer.length - 1];
    }
    first() {
        return this.charsBuffer[0];
    }
    removeLast() {
        this.charsBuffer.splice(this.charsBuffer.length - 1, 1);
    }
    removeFirst() {
        this.charsBuffer.splice(0, 1);
    }
    replace(other) {
        this.charsBuffer = [...other.charsBuffer];
    }
}
exports.CharsBuffer = CharsBuffer;
