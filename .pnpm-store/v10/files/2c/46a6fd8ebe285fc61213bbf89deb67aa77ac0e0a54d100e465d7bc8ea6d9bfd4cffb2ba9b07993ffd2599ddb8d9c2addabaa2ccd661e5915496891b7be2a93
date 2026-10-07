// deno-coverage-ignore-start - parsebox tested
// deno-fmt-ignore-file
import { IsEqual } from './guard.mjs';
import * as Char from './char.mjs';
const LineComment = '//';
const OpenComment = '/*';
const CloseComment = '*/';
function DiscardMultilineComment(input) {
    const index = input.indexOf(CloseComment);
    const result = IsEqual(index, -1) ? '' : input.slice(index + 2);
    return result;
}
function DiscardLineComment(input) {
    const index = input.indexOf(Char.NewLine);
    const result = IsEqual(index, -1) ? '' : input.slice(index);
    return result;
}
// ...
function TrimStartUntilNewline(input) {
    return input.replace(/^[ \t\r\f\v]+/, '');
}
export function TrimWhitespace(input) {
    const trimmed = TrimStartUntilNewline(input);
    return (trimmed.startsWith(OpenComment) ? TrimWhitespace(DiscardMultilineComment(trimmed.slice(2))) :
        trimmed.startsWith(LineComment) ? TrimWhitespace(DiscardLineComment(trimmed.slice(2))) :
            trimmed);
}
export function Trim(input) {
    const trimmed = input.trimStart();
    return (trimmed.startsWith(OpenComment) ? Trim(DiscardMultilineComment(trimmed.slice(2))) :
        trimmed.startsWith(LineComment) ? Trim(DiscardLineComment(trimmed.slice(2))) :
            trimmed);
}
// deno-coverage-ignore-stop
