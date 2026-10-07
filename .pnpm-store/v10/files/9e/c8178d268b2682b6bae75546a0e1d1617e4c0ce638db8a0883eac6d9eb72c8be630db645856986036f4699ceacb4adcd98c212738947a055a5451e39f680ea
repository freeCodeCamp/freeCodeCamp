"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignString = void 0;
const string_width_1 = __importDefault(require("string-width"));
const utils_1 = require("./utils");
const alignLeft = (subject, width) => {
    return subject + ' '.repeat(width);
};
const alignRight = (subject, width) => {
    return ' '.repeat(width) + subject;
};
const alignCenter = (subject, width) => {
    return ' '.repeat(Math.floor(width / 2)) + subject + ' '.repeat(Math.ceil(width / 2));
};
const alignJustify = (subject, width) => {
    const spaceSequenceCount = (0, utils_1.countSpaceSequence)(subject);
    if (spaceSequenceCount === 0) {
        return alignLeft(subject, width);
    }
    const addingSpaces = (0, utils_1.distributeUnevenly)(width, spaceSequenceCount);
    if (Math.max(...addingSpaces) > 3) {
        return alignLeft(subject, width);
    }
    let spaceSequenceIndex = 0;
    return subject.replace(/\s+/g, (groupSpace) => {
        return groupSpace + ' '.repeat(addingSpaces[spaceSequenceIndex++]);
    });
};
/**
 * Pads a string to the left and/or right to position the subject
 * text in a desired alignment within a container.
 */
const alignString = (subject, containerWidth, alignment) => {
    const subjectWidth = (0, string_width_1.default)(subject);
    if (subjectWidth === containerWidth) {
        return subject;
    }
    if (subjectWidth > containerWidth) {
        throw new Error('Subject parameter value width cannot be greater than the container width.');
    }
    if (subjectWidth === 0) {
        return ' '.repeat(containerWidth);
    }
    const availableWidth = containerWidth - subjectWidth;
    if (alignment === 'left') {
        return alignLeft(subject, availableWidth);
    }
    if (alignment === 'right') {
        return alignRight(subject, availableWidth);
    }
    if (alignment === 'justify') {
        return alignJustify(subject, availableWidth);
    }
    return alignCenter(subject, availableWidth);
};
exports.alignString = alignString;
//# sourceMappingURL=alignString.js.map