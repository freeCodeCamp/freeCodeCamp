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
    exports.SCSSScanner = exports.Module = exports.Ellipsis = exports.SmallerEqualsOperator = exports.GreaterEqualsOperator = exports.NotEqualsOperator = exports.EqualsOperator = exports.Default = exports.InterpolationFunction = exports.VariableName = void 0;
    const cssScanner_1 = require("./cssScanner");
    const _FSL = '/'.charCodeAt(0);
    const _NWL = '\n'.charCodeAt(0);
    const _CAR = '\r'.charCodeAt(0);
    const _LFD = '\f'.charCodeAt(0);
    const _DLR = '$'.charCodeAt(0);
    const _HSH = '#'.charCodeAt(0);
    const _CUL = '{'.charCodeAt(0);
    const _EQS = '='.charCodeAt(0);
    const _BNG = '!'.charCodeAt(0);
    const _LAN = '<'.charCodeAt(0);
    const _RAN = '>'.charCodeAt(0);
    const _DOT = '.'.charCodeAt(0);
    const _ATS = '@'.charCodeAt(0);
    let customTokenValue = cssScanner_1.TokenType.CustomToken;
    exports.VariableName = customTokenValue++;
    exports.InterpolationFunction = customTokenValue++;
    exports.Default = customTokenValue++;
    exports.EqualsOperator = customTokenValue++;
    exports.NotEqualsOperator = customTokenValue++;
    exports.GreaterEqualsOperator = customTokenValue++;
    exports.SmallerEqualsOperator = customTokenValue++;
    exports.Ellipsis = customTokenValue++;
    exports.Module = customTokenValue++;
    class SCSSScanner extends cssScanner_1.Scanner {
        scanNext(offset) {
            // scss variable
            if (this.stream.advanceIfChar(_DLR)) {
                const content = ['$'];
                if (this.ident(content)) {
                    return this.finishToken(offset, exports.VariableName, content.join(''));
                }
                else {
                    this.stream.goBackTo(offset);
                }
            }
            // scss: interpolation function #{..})
            if (this.stream.advanceIfChars([_HSH, _CUL])) {
                return this.finishToken(offset, exports.InterpolationFunction);
            }
            // operator ==
            if (this.stream.advanceIfChars([_EQS, _EQS])) {
                return this.finishToken(offset, exports.EqualsOperator);
            }
            // operator !=
            if (this.stream.advanceIfChars([_BNG, _EQS])) {
                return this.finishToken(offset, exports.NotEqualsOperator);
            }
            // operators <, <=
            if (this.stream.advanceIfChar(_LAN)) {
                if (this.stream.advanceIfChar(_EQS)) {
                    return this.finishToken(offset, exports.SmallerEqualsOperator);
                }
                return this.finishToken(offset, cssScanner_1.TokenType.Delim);
            }
            // ooperators >, >=
            if (this.stream.advanceIfChar(_RAN)) {
                if (this.stream.advanceIfChar(_EQS)) {
                    return this.finishToken(offset, exports.GreaterEqualsOperator);
                }
                return this.finishToken(offset, cssScanner_1.TokenType.Delim);
            }
            // ellipis
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
    }
    exports.SCSSScanner = SCSSScanner;
});
