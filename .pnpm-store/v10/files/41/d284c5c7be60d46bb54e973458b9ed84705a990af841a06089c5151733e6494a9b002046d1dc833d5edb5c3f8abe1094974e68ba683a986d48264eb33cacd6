import defineFunction from "../defineFunction";
import ParseError from "../ParseError";
import {assertNodeType} from "../parseNode";

// \@char is an internal function that takes a grouped decimal argument like
// {123} and converts into symbol with code 123.  It is used by the *macro*
// \char defined in macros.js.
defineFunction({
    type: "textord",
    names: ["\\@char"],
    props: {
        numArgs: 1,
        allowedInText: true,
    },
    handler({parser}, args) {
        const arg = assertNodeType(args[0], "ordgroup");
        const group = arg.body;
        let number = "";
        for (let i = 0; i < group.length; i++) {
            const node = assertNodeType(group[i], "textord");
            number += node.text;
        }
        let code = parseInt(number);
        let text;
        if (isNaN(code)) {
            throw new ParseError(`\\@char has non-numeric argument ${number}`);
        // If we drop IE support, the following code could be replaced with
        // text = String.fromCodePoint(code)
        } else if (code < 0 || code >= 0x10ffff) {
            throw new ParseError(`\\@char with invalid code point ${number}`);
        } else if (code <= 0xffff) {
            text = String.fromCharCode(code);
        } else { // Astral code point; split into surrogate halves
            code -= 0x10000;
            text = String.fromCharCode((code >> 10) + 0xd800,
                                       (code & 0x3ff) + 0xdc00);
        }
        return {
            type: "textord",
            mode: parser.mode,
            text: text,
        };
    },
});
