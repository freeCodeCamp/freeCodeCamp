/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

const { CALL, CONSTRUCT, ReferenceTracker, getStringIfConstant } = require("eslint-utils");
const { RegExpParser, visitRegExpAST } = require("regexpp");
const { isCombiningCharacter, isEmojiModifier, isRegionalIndicatorSymbol, isSurrogatePair } = require("./utils/unicode");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Iterate character sequences of a given nodes.
 *
 * CharacterClassRange syntax can steal a part of character sequence,
 * so this function reverts CharacterClassRange syntax and restore the sequence.
 * @param {regexpp.AST.CharacterClassElement[]} nodes The node list to iterate character sequences.
 * @returns {IterableIterator<number[]>} The list of character sequences.
 */
function *iterateCharacterSequence(nodes) {
    let seq = [];

    for (const node of nodes) {
        switch (node.type) {
            case "Character":
                seq.push(node.value);
                break;

            case "CharacterClassRange":
                seq.push(node.min.value);
                yield seq;
                seq = [node.max.value];
                break;

            case "CharacterSet":
                if (seq.length > 0) {
                    yield seq;
                    seq = [];
                }
                break;

            // no default
        }
    }

    if (seq.length > 0) {
        yield seq;
    }
}

const hasCharacterSequence = {
    surrogatePairWithoutUFlag(chars) {
        return chars.some((c, i) => i !== 0 && isSurrogatePair(chars[i - 1], c));
    },

    combiningClass(chars) {
        return chars.some((c, i) => (
            i !== 0 &&
            isCombiningCharacter(c) &&
            !isCombiningCharacter(chars[i - 1])
        ));
    },

    emojiModifier(chars) {
        return chars.some((c, i) => (
            i !== 0 &&
            isEmojiModifier(c) &&
            !isEmojiModifier(chars[i - 1])
        ));
    },

    regionalIndicatorSymbol(chars) {
        return chars.some((c, i) => (
            i !== 0 &&
            isRegionalIndicatorSymbol(c) &&
            isRegionalIndicatorSymbol(chars[i - 1])
        ));
    },

    zwj(chars) {
        const lastIndex = chars.length - 1;

        return chars.some((c, i) => (
            i !== 0 &&
            i !== lastIndex &&
            c === 0x200d &&
            chars[i - 1] !== 0x200d &&
            chars[i + 1] !== 0x200d
        ));
    }
};

const kinds = Object.keys(hasCharacterSequence);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow characters which are made with multiple code points in character class syntax",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-misleading-character-class"
        },

        schema: [],

        messages: {
            surrogatePairWithoutUFlag: "Unexpected surrogate pair in character class. Use 'u' flag.",
            combiningClass: "Unexpected combined character in character class.",
            emojiModifier: "Unexpected modified Emoji in character class.",
            regionalIndicatorSymbol: "Unexpected national flag in character class.",
            zwj: "Unexpected joined character sequence in character class."
        }
    },
    create(context) {
        const parser = new RegExpParser();

        /**
         * Verify a given regular expression.
         * @param {Node} node The node to report.
         * @param {string} pattern The regular expression pattern to verify.
         * @param {string} flags The flags of the regular expression.
         * @returns {void}
         */
        function verify(node, pattern, flags) {
            const has = {
                surrogatePairWithoutUFlag: false,
                combiningClass: false,
                variationSelector: false,
                emojiModifier: false,
                regionalIndicatorSymbol: false,
                zwj: false
            };
            let patternNode;

            try {
                patternNode = parser.parsePattern(
                    pattern,
                    0,
                    pattern.length,
                    flags.includes("u")
                );
            } catch {

                // Ignore regular expressions with syntax errors
                return;
            }

            visitRegExpAST(patternNode, {
                onCharacterClassEnter(ccNode) {
                    for (const chars of iterateCharacterSequence(ccNode.elements)) {
                        for (const kind of kinds) {
                            has[kind] = has[kind] || hasCharacterSequence[kind](chars);
                        }
                    }
                }
            });

            for (const kind of kinds) {
                if (has[kind]) {
                    context.report({ node, messageId: kind });
                }
            }
        }

        return {
            "Literal[regex]"(node) {
                verify(node, node.regex.pattern, node.regex.flags);
            },
            "Program"() {
                const scope = context.getScope();
                const tracker = new ReferenceTracker(scope);

                /*
                 * Iterate calls of RegExp.
                 * E.g., `new RegExp()`, `RegExp()`, `new window.RegExp()`,
                 *       `const {RegExp: a} = window; new a()`, etc...
                 */
                for (const { node } of tracker.iterateGlobalReferences({
                    RegExp: { [CALL]: true, [CONSTRUCT]: true }
                })) {
                    const [patternNode, flagsNode] = node.arguments;
                    const pattern = getStringIfConstant(patternNode, scope);
                    const flags = getStringIfConstant(flagsNode, scope);

                    if (typeof pattern === "string") {
                        verify(node, pattern, flags || "");
                    }
                }
            }
        };
    }
};
