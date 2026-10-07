import defineFunction from "../defineFunction";
import {makeSpan, makeSymbol, tryCombineChars} from "../buildCommon";
import {MathNode, TextNode} from "../mathMLTree";
import ParseError from "../ParseError";

import type {ParseNode} from "../parseNode";

defineFunction({
    type: "verb",
    names: ["\\verb"],
    props: {
        numArgs: 0,
        allowedInText: true,
    },
    handler(context, args, optArgs) {
        // \verb and \verb* are dealt with directly in Parser.js.
        // If we end up here, it's because of a failure to match the two delimiters
        // in the regex in Lexer.js.  LaTeX raises the following error when \verb is
        // terminated by end of line (or file).
        throw new ParseError(
            "\\verb ended by end of line instead of matching delimiter");
    },
    htmlBuilder(group, options) {
        const text = makeVerb(group);
        const body = [];
        // \verb enters text mode and therefore is sized like \textstyle
        const newOptions = options.havingStyle(options.style.text());
        for (let i = 0; i < text.length; i++) {
            let c = text[i];
            if (c === '~') {
                c = '\\textasciitilde';
            }
            body.push(makeSymbol(c, "Typewriter-Regular",
                group.mode, newOptions, ["mord", "texttt"]));
        }
        return makeSpan(
            ["mord", "text"].concat(newOptions.sizingClasses(options)),
            tryCombineChars(body),
            newOptions,
        );
    },
    mathmlBuilder(group, options) {
        const text = new TextNode(makeVerb(group));
        const node = new MathNode("mtext", [text]);
        node.setAttribute("mathvariant", "monospace");
        return node;
    },
});

/**
 * Converts verb group into body string.
 *
 * \verb* replaces each space with an open box \u2423
 * \verb replaces each space with a no-break space \xA0
 */
const makeVerb = (group: ParseNode<"verb">): string =>
    group.body.replace(/ /g, group.star ? '\u2423' : '\xA0');
