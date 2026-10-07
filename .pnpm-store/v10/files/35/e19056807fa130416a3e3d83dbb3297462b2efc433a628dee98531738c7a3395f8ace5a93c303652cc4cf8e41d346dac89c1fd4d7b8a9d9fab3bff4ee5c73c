(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./cssScanner"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LESSScanner = exports.Ellipsis = void 0;
    const scanner = require("./cssScanner");
    const _FSL = '/'.charCodeAt(0);
    const _NWL = '\n'.charCodeAt(0);
    const _CAR = '\r'.charCodeAt(0);
    const _LFD = '\f'.charCodeAt(0);
    const _TIC = '`'.charCodeAt(0);
    const _DOT = '.'.charCodeAt(0);
    let customTokenValue = scanner.TokenType.CustomToken;
    exports.Ellipsis = customTokenValue++;
    class LESSScanner extends scanner.Scanner {
        scanNext(offset) {
            // LESS: escaped JavaScript code `const a = "dddd"`
            const tokenType = this.escapedJavaScript();
            if (tokenType !== null) {
                return this.finishToken(offset, tokenType);
            }
            if (this.stream.advanceIfChars([_DOT, _DOT, _DOT])) {
                return this.finishToken(offset, exports.Ellipsis);
            }
            return super.scanNext(offset);
        }
        comment() {
            if (super.comment()) {
                return true;
            }
            if (!this.inURL && this.stream.advanceIfChars([_FSL, _FSL])) {
                this.stream.advanceWhileChar((ch) => {
                    switch (ch) {
                        case _NWL:
                        case _CAR:
                        case _LFD:
                            return false;
                        default:
                            return true;
                    }
                });
                return true;
            }
            else {
                return false;
            }
        }
        escapedJavaScript() {
            const ch = this.stream.peekChar();
            if (ch === _TIC) {
                this.stream.advance(1);
                this.stream.advanceWhileChar((ch) => { return ch !== _TIC; });
                return this.stream.advanceIfChar(_TIC) ? scanner.TokenType.EscapedJavaScript : scanner.TokenType.BadEscapedJavaScript;
            }
            return null;
        }
    }
    exports.LESSScanner = LESSScanner;
});
