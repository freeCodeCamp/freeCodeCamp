'use strict';

const SyntaxError = require('./SyntaxError.cjs');

const TAB = 9;
const N = 10;
const F = 12;
const R = 13;
const SPACE = 32;
const NAME_CHAR = new Uint8Array(128).map((_, idx) =>
    /[a-zA-Z0-9\-]/.test(String.fromCharCode(idx)) ? 1 : 0
);

class Scanner {
    constructor(str) {
        this.str = str;
        this.pos = 0;
    }

    charCodeAt(pos) {
        return pos < this.str.length ? this.str.charCodeAt(pos) : 0;
    }
    charCode() {
        return this.charCodeAt(this.pos);
    }
    isNameCharCode(code = this.charCode()) {
        return code < 128 && NAME_CHAR[code] === 1;
    }
    nextCharCode() {
        return this.charCodeAt(this.pos + 1);
    }
    nextNonWsCode(pos) {
        return this.charCodeAt(this.findWsEnd(pos));
    }
    skipWs() {
        this.pos = this.findWsEnd(this.pos);
    }
    findWsEnd(pos) {
        for (; pos < this.str.length; pos++) {
            const code = this.str.charCodeAt(pos);
            if (code !== R && code !== N && code !== F && code !== SPACE && code !== TAB) {
                break;
            }
        }

        return pos;
    }
    substringToPos(end) {
        return this.str.substring(this.pos, this.pos = end);
    }
    eat(code) {
        if (this.charCode() !== code) {
            this.error('Expect `' + String.fromCharCode(code) + '`');
        }

        this.pos++;
    }
    peek() {
        return this.pos < this.str.length ? this.str.charAt(this.pos++) : '';
    }
    error(message) {
        throw new SyntaxError.SyntaxError(message, this.str, this.pos);
    }

    scanSpaces() {
        return this.substringToPos(this.findWsEnd(this.pos));
    }
    scanWord() {
        let end = this.pos;

        for (; end < this.str.length; end++) {
            const code = this.str.charCodeAt(end);
            if (code >= 128 || NAME_CHAR[code] === 0) {
                break;
            }
        }

        if (this.pos === end) {
            this.error('Expect a keyword');
        }

        return this.substringToPos(end);
    }
    scanNumber() {
        let end = this.pos;

        for (; end < this.str.length; end++) {
            const code = this.str.charCodeAt(end);

            if (code < 48 || code > 57) {
                break;
            }
        }

        if (this.pos === end) {
            this.error('Expect a number');
        }

        return this.substringToPos(end);
    }
    scanString() {
        const end = this.str.indexOf('\'', this.pos + 1);

        if (end === -1) {
            this.pos = this.str.length;
            this.error('Expect an apostrophe');
        }

        return this.substringToPos(end + 1);
    }
}

exports.Scanner = Scanner;
