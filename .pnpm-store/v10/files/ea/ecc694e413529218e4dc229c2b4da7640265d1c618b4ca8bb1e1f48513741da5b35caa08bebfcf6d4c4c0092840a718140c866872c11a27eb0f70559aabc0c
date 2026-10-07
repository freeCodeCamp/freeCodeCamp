/**
 * Provides a single function for parsing an expression using a Parser
 * TODO(emily): Remove this
 */

import Parser from "./Parser";
import ParseError from "./ParseError";
import {Token} from "./Token";

import type Settings from "./Settings";
import type {AnyParseNode} from "./parseNode";

/**
 * Parses an expression using a Parser, then returns the parsed result.
 */
const parseTree = function(
    toParse: string | InstanceType<typeof String>,
    settings: Settings,
): AnyParseNode[] {
    if (!(typeof toParse === 'string' || toParse instanceof String)) {
        throw new TypeError('KaTeX can only parse string typed expression');
    }
    const parser = new Parser(toParse as string, settings);

    // Blank out any \df@tag to avoid spurious "Duplicate \tag" errors
    delete parser.gullet.macros.current["\\df@tag"];

    let tree = parser.parse();

    // Prevent a color definition from persisting between calls to katex.render().
    delete parser.gullet.macros.current["\\current@color"];
    delete parser.gullet.macros.current["\\color"];

    // If the input used \tag, it will set the \df@tag macro to the tag.
    // In this case, we separately parse the tag and wrap the tree.
    if (parser.gullet.macros.get("\\df@tag")) {
        if (!settings.displayMode) {
            throw new ParseError("\\tag works only in display equations");
        }
        tree = [{
            type: "tag",
            mode: "text",
            body: tree,
            tag: parser.subparse([new Token("\\df@tag")]),
        }];
    }

    return tree;
};

export default parseTree;
