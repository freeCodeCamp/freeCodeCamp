/**
 * @fileoverview Rule to flag the use of empty character classes in regular expressions
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/*
plain-English description of the following regexp:
0. `^` fix the match at the beginning of the string
1. `\/`: the `/` that begins the regexp
2. `([^\\[]|\\.|\[([^\\\]]|\\.)+\])*`: regexp contents; 0 or more of the following
  2.0. `[^\\[]`: any character that's not a `\` or a `[` (anything but escape sequences and character classes)
  2.1. `\\.`: an escape sequence
  2.2. `\[([^\\\]]|\\.)+\]`: a character class that isn't empty
3. `\/` the `/` that ends the regexp
4. `[gimuy]*`: optional regexp flags
5. `$`: fix the match at the end of the string
*/
const regex = /^\/([^\\[]|\\.|\[([^\\\]]|\\.)+])*\/[gimuy]*$/;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow empty character classes in regular expressions",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {

            Literal(node) {
                const token = sourceCode.getFirstToken(node);

                if (token.type === "RegularExpression" && !regex.test(token.value)) {
                    context.report({ node, message: "Empty class." });
                }
            }

        };

    }
};
