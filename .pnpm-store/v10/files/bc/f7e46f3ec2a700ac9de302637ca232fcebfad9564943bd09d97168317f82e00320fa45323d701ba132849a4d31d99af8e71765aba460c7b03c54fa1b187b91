import { EncodedTokenizationResult, TokenizationResult, Token } from '../languages.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const NullState = new class {
    clone() {
        return this;
    }
    equals(other) {
        return (this === other);
    }
};
function nullTokenize(languageId, state) {
    return new TokenizationResult([new Token(0, '', languageId)], state);
}
function nullTokenizeEncoded(languageId, state) {
    const tokens = new Uint32Array(2);
    tokens[0] = 0;
    tokens[1] = ((languageId << 0 /* MetadataConsts.LANGUAGEID_OFFSET */)
        | (0 /* StandardTokenType.Other */ << 8 /* MetadataConsts.TOKEN_TYPE_OFFSET */)
        | (0 /* FontStyle.None */ << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
        | (1 /* ColorId.DefaultForeground */ << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
        | (2 /* ColorId.DefaultBackground */ << 24 /* MetadataConsts.BACKGROUND_OFFSET */)) >>> 0;
    return new EncodedTokenizationResult(tokens, state === null ? NullState : state);
}

export { NullState, nullTokenize, nullTokenizeEncoded };
