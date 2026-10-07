'use strict';

const bracketDict = {
    '{': '}',
    '[': ']'
};
/**
 * Read the next key definition from user input
 *
 * Describe key per `{descriptor}` or `[descriptor]`.
 * Everything else will be interpreted as a single character as descriptor - e.g. `a`.
 * Brackets `{` and `[` can be escaped by doubling - e.g. `foo[[bar` translates to `foo[bar`.
 * A previously pressed key can be released per `{/descriptor}`.
 * Keeping the key pressed can be written as `{descriptor>}`.
 * When keeping the key pressed you can choose how long the key is pressed `{descriptor>3}`.
 * You can then release the key per `{descriptor>3/}` or keep it pressed and continue with the next key.
 */ function readNextDescriptor(text, context) {
    let pos = 0;
    const startBracket = text[pos] in bracketDict ? text[pos] : '';
    pos += startBracket.length;
    const isEscapedChar = new RegExp(`^\\${startBracket}{2}`).test(text);
    const type = isEscapedChar ? '' : startBracket;
    return {
        type,
        ...type === '' ? readPrintableChar(text, pos, context) : readTag(text, pos, type, context)
    };
}
function readPrintableChar(text, pos, context) {
    const descriptor = text[pos];
    assertDescriptor(descriptor, text, pos, context);
    pos += descriptor.length;
    return {
        consumedLength: pos,
        descriptor,
        releasePrevious: false,
        releaseSelf: true,
        repeat: 1
    };
}
function readTag(text, pos, startBracket, context) {
    var _ref;
    var _text_slice_match, _text_slice_match1;
    const releasePreviousModifier = text[pos] === '/' ? '/' : '';
    pos += releasePreviousModifier.length;
    const escapedDescriptor = startBracket === '{' && text[pos] === '\\';
    pos += Number(escapedDescriptor);
    const descriptor = escapedDescriptor ? text[pos] : (_text_slice_match = text.slice(pos).match(startBracket === '{' ? /^\w+|^[^}>/]/ : /^\w+/)) === null || _text_slice_match === void 0 ? void 0 : _text_slice_match[0];
    assertDescriptor(descriptor, text, pos, context);
    pos += descriptor.length;
    const repeatModifier = (_ref = (_text_slice_match1 = text.slice(pos).match(/^>\d+/)) === null || _text_slice_match1 === void 0 ? void 0 : _text_slice_match1[0]) !== null && _ref !== void 0 ? _ref : '';
    pos += repeatModifier.length;
    const releaseSelfModifier = text[pos] === '/' || !repeatModifier && text[pos] === '>' ? text[pos] : '';
    pos += releaseSelfModifier.length;
    const expectedEndBracket = bracketDict[startBracket];
    const endBracket = text[pos] === expectedEndBracket ? expectedEndBracket : '';
    if (!endBracket) {
        throw new Error(getErrorMessage([
            !repeatModifier && 'repeat modifier',
            !releaseSelfModifier && 'release modifier',
            `"${expectedEndBracket}"`
        ].filter(Boolean).join(' or '), text[pos], text, context));
    }
    pos += endBracket.length;
    return {
        consumedLength: pos,
        descriptor,
        releasePrevious: !!releasePreviousModifier,
        repeat: repeatModifier ? Math.max(Number(repeatModifier.substr(1)), 1) : 1,
        releaseSelf: hasReleaseSelf(releaseSelfModifier, repeatModifier)
    };
}
function assertDescriptor(descriptor, text, pos, context) {
    if (!descriptor) {
        throw new Error(getErrorMessage('key descriptor', text[pos], text, context));
    }
}
function hasReleaseSelf(releaseSelfModifier, repeatModifier) {
    if (releaseSelfModifier) {
        return releaseSelfModifier === '/';
    }
    if (repeatModifier) {
        return false;
    }
}
function getErrorMessage(expected, found, text, context) {
    return `Expected ${expected} but found "${found !== null && found !== void 0 ? found : ''}" in "${text}"
    See ${context === 'pointer' ? `https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen` : `https://testing-library.com/docs/user-event/keyboard`}
    for more information about how userEvent parses your input.`;
}

exports.readNextDescriptor = readNextDescriptor;
