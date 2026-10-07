/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const allCharCodes = (() => {
    const v = [];
    for (let i = 32 /* Constants.START_CH_CODE */; i <= 126 /* Constants.END_CH_CODE */; i++) {
        v.push(i);
    }
    v.push(65533 /* Constants.UNKNOWN_CODE */);
    return v;
})();
const getCharIndex = (chCode, fontScale) => {
    chCode -= 32 /* Constants.START_CH_CODE */;
    if (chCode < 0 || chCode > 96 /* Constants.CHAR_COUNT */) {
        if (fontScale <= 2) {
            // for smaller scales, we can get away with using any ASCII character...
            return (chCode + 96 /* Constants.CHAR_COUNT */) % 96 /* Constants.CHAR_COUNT */;
        }
        return 96 /* Constants.CHAR_COUNT */ - 1; // unknown symbol
    }
    return chCode;
};

export { allCharCodes, getCharIndex };
