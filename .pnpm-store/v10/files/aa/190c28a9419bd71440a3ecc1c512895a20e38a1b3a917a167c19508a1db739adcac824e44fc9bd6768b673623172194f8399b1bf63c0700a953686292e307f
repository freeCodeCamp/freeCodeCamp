"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCode = void 0;
const utils_1 = require("../utils");
const chars_1 = require("./chars");
class SourceCode {
    constructor(source, templateInfos) {
        this.source = source;
        this.charsIndex = 0;
        this.charsList = this.createCharsList(templateInfos);
    }
    getLocationOf(range) {
        return {
            start: (0, utils_1.getLineInfo)(this.source, range[0]),
            end: (0, utils_1.getLineInfo)(this.source, range[1]),
        };
    }
    current() {
        return this.charsList[this.charsIndex];
    }
    next() {
        this.charsIndex++;
    }
    prev() {
        this.charsIndex--;
    }
    isEof() {
        return this.charsIndex >= this.charsList.length;
    }
    index() {
        const current = this.current();
        return current.range[1] - 1;
    }
    createCharsList(templateInfo) {
        const charsList = [];
        let sourceIndex = 0;
        let templateInfoIndex = 0;
        while (sourceIndex < this.source.length) {
            const info = templateInfo[templateInfoIndex];
            if (info) {
                const range = (0, utils_1.getRange)(info);
                if (range[0] <= sourceIndex && sourceIndex < range[1]) {
                    charsList.push(new chars_1.Chars(chars_1.CharsType.Template, this.source.slice(range[0], range[1]), [range[0], range[1]], Array.isArray(info) ? undefined : info));
                    templateInfoIndex++;
                    sourceIndex = range[1];
                    continue;
                }
            }
            charsList.push(new chars_1.Chars(chars_1.CharsType.HTML, this.source[sourceIndex], [
                sourceIndex,
                sourceIndex + 1,
            ]));
            sourceIndex++;
        }
        return charsList;
    }
}
exports.SourceCode = SourceCode;
