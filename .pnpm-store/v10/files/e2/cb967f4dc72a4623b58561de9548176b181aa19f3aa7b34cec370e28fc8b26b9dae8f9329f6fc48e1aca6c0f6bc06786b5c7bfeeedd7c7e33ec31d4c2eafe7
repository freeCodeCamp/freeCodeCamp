import { isString } from './types.js';

const _codiconFontCharacters = Object.create(null);
function register(id, fontCharacter) {
    if (isString(fontCharacter)) {
        const val = _codiconFontCharacters[fontCharacter];
        if (val === undefined) {
            throw new Error(`${id} references an unknown codicon: ${fontCharacter}`);
        }
        fontCharacter = val;
    }
    _codiconFontCharacters[id] = fontCharacter;
    return { id };
}
/**
 * Only to be used by the iconRegistry.
 */
function getCodiconFontCharacters() {
    return _codiconFontCharacters;
}

export { getCodiconFontCharacters, register };
