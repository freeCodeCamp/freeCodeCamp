/**
 * @fileoverview Abstraction of JavaScript source code.
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const TokenStore = require("../token-store"),
    Traverser = require("./traverser"),
    astUtils = require("../ast-utils"),
    lodash = require("lodash");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Validates that the given AST has the required information.
 * @param {ASTNode} ast The Program node of the AST to check.
 * @throws {Error} If the AST doesn't contain the correct information.
 * @returns {void}
 * @private
 */
function validate(ast) {

    if (!ast.tokens) {
        throw new Error("AST is missing the tokens array.");
    }

    if (!ast.comments) {
        throw new Error("AST is missing the comments array.");
    }

    if (!ast.loc) {
        throw new Error("AST is missing location information.");
    }

    if (!ast.range) {
        throw new Error("AST is missing range information");
    }
}

/**
 * Finds a JSDoc comment node in an array of comment nodes.
 * @param {ASTNode[]} comments The array of comment nodes to search.
 * @param {int} line Line number to look around
 * @returns {ASTNode} The node if found, null if not.
 * @private
 */
function findJSDocComment(comments, line) {

    if (comments) {
        for (let i = comments.length - 1; i >= 0; i--) {
            if (comments[i].type === "Block" && comments[i].value.charAt(0) === "*") {

                if (line - comments[i].loc.end.line <= 1) {
                    return comments[i];
                }
                break;

            }
        }
    }

    return null;
}

/**
 * Check to see if its a ES6 export declaration
 * @param {ASTNode} astNode - any node
 * @returns {boolean} whether the given node represents a export declaration
 * @private
 */
function looksLikeExport(astNode) {
    return astNode.type === "ExportDefaultDeclaration" || astNode.type === "ExportNamedDeclaration" ||
        astNode.type === "ExportAllDeclaration" || astNode.type === "ExportSpecifier";
}

/**
 * Merges two sorted lists into a larger sorted list in O(n) time
 * @param {Token[]} tokens The list of tokens
 * @param {Token[]} comments The list of comments
 * @returns {Token[]} A sorted list of tokens and comments
 */
function sortedMerge(tokens, comments) {
    const result = [];
    let tokenIndex = 0;
    let commentIndex = 0;

    while (tokenIndex < tokens.length || commentIndex < comments.length) {
        if (commentIndex >= comments.length || tokenIndex < tokens.length && tokens[tokenIndex].range[0] < comments[commentIndex].range[0]) {
            result.push(tokens[tokenIndex++]);
        } else {
            result.push(comments[commentIndex++]);
        }
    }

    return result;
}


//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Represents parsed source code.
 * @param {string} text - The source code text.
 * @param {ASTNode} ast - The Program node of the AST representing the code. This AST should be created from the text that BOM was stripped.
 * @constructor
 */
function SourceCode(text, ast) {
    validate(ast);

    /**
     * The flag to indicate that the source code has Unicode BOM.
     * @type boolean
     */
    this.hasBOM = (text.charCodeAt(0) === 0xFEFF);

    /**
     * The original text source code.
     * BOM was stripped from this text.
     * @type string
     */
    this.text = (this.hasBOM ? text.slice(1) : text);

    /**
     * The parsed AST for the source code.
     * @type ASTNode
     */
    this.ast = ast;

    /**
     * The source code split into lines according to ECMA-262 specification.
     * This is done to avoid each rule needing to do so separately.
     * @type string[]
     */
    this.lines = [];
    this.lineStartIndices = [0];

    const lineEndingPattern = astUtils.createGlobalLinebreakMatcher();
    let match;

    /*
     * Previously, this was implemented using a regex that
     * matched a sequence of non-linebreak characters followed by a
     * linebreak, then adding the lengths of the matches. However,
     * this caused a catastrophic backtracking issue when the end
     * of a file contained a large number of non-newline characters.
     * To avoid this, the current implementation just matches newlines
     * and uses match.index to get the correct line start indices.
     */
    while ((match = lineEndingPattern.exec(this.text))) {
        this.lines.push(this.text.slice(this.lineStartIndices[this.lineStartIndices.length - 1], match.index));
        this.lineStartIndices.push(match.index + match[0].length);
    }
    this.lines.push(this.text.slice(this.lineStartIndices[this.lineStartIndices.length - 1]));

    this.tokensAndComments = sortedMerge(ast.tokens, ast.comments);

    // create token store methods
    const tokenStore = new TokenStore(ast.tokens, ast.comments);

    for (const methodName of TokenStore.PUBLIC_METHODS) {
        this[methodName] = tokenStore[methodName].bind(tokenStore);
    }

    // don't allow modification of this object
    Object.freeze(this);
    Object.freeze(this.lines);
}

/**
 * Split the source code into multiple lines based on the line delimiters
 * @param {string} text Source code as a string
 * @returns {string[]} Array of source code lines
 * @public
 */
SourceCode.splitLines = function(text) {
    return text.split(astUtils.createGlobalLinebreakMatcher());
};

SourceCode.prototype = {
    constructor: SourceCode,

    /**
     * Gets the source code for the given node.
     * @param {ASTNode=} node The AST node to get the text for.
     * @param {int=} beforeCount The number of characters before the node to retrieve.
     * @param {int=} afterCount The number of characters after the node to retrieve.
     * @returns {string} The text representing the AST node.
     */
    getText(node, beforeCount, afterCount) {
        if (node) {
            return this.text.slice(Math.max(node.range[0] - (beforeCount || 0), 0),
                node.range[1] + (afterCount || 0));
        }
        return this.text;


    },

    /**
     * Gets the entire source text split into an array of lines.
     * @returns {Array} The source text as an array of lines.
     */
    getLines() {
        return this.lines;
    },

    /**
     * Retrieves an array containing all comments in the source code.
     * @returns {ASTNode[]} An array of comment nodes.
     */
    getAllComments() {
        return this.ast.comments;
    },

    /**
     * Gets all comments for the given node.
     * @param {ASTNode} node The AST node to get the comments for.
     * @returns {Object} The list of comments indexed by their position.
     * @public
     */
    getComments(node) {

        let leadingComments = node.leadingComments || [];
        const trailingComments = node.trailingComments || [];

        /*
         * espree adds a "comments" array on Program nodes rather than
         * leadingComments/trailingComments. Comments are only left in the
         * Program node comments array if there is no executable code.
         */
        if (node.type === "Program") {
            if (node.body.length === 0) {
                leadingComments = node.comments;
            }
        }

        return {
            leading: leadingComments,
            trailing: trailingComments
        };
    },

    /**
     * Retrieves the JSDoc comment for a given node.
     * @param {ASTNode} node The AST node to get the comment for.
     * @returns {ASTNode} The BlockComment node containing the JSDoc for the
     *      given node or null if not found.
     * @public
     */
    getJSDocComment(node) {

        let parent = node.parent;

        switch (node.type) {
            case "ClassDeclaration":
            case "FunctionDeclaration":
                if (looksLikeExport(parent)) {
                    return findJSDocComment(parent.leadingComments, parent.loc.start.line);
                }
                return findJSDocComment(node.leadingComments, node.loc.start.line);

            case "ClassExpression":
                return findJSDocComment(parent.parent.leadingComments, parent.parent.loc.start.line);

            case "ArrowFunctionExpression":
            case "FunctionExpression":

                if (parent.type !== "CallExpression" && parent.type !== "NewExpression") {
                    while (parent && !parent.leadingComments && !/Function/.test(parent.type) && parent.type !== "MethodDefinition" && parent.type !== "Property") {
                        parent = parent.parent;
                    }

                    return parent && (parent.type !== "FunctionDeclaration") ? findJSDocComment(parent.leadingComments, parent.loc.start.line) : null;
                } else if (node.leadingComments) {
                    return findJSDocComment(node.leadingComments, node.loc.start.line);
                }

            // falls through

            default:
                return null;
        }
    },

    /**
     * Gets the deepest node containing a range index.
     * @param {int} index Range index of the desired node.
     * @returns {ASTNode} The node if found or null if not found.
     */
    getNodeByRangeIndex(index) {
        let result = null,
            resultParent = null;
        const traverser = new Traverser();

        traverser.traverse(this.ast, {
            enter(node, parent) {
                if (node.range[0] <= index && index < node.range[1]) {
                    result = node;
                    resultParent = parent;
                } else {
                    this.skip();
                }
            },
            leave(node) {
                if (node === result) {
                    this.break();
                }
            }
        });

        return result ? Object.assign({ parent: resultParent }, result) : null;
    },

    /**
     * Determines if two tokens have at least one whitespace character
     * between them. This completely disregards comments in making the
     * determination, so comments count as zero-length substrings.
     * @param {Token} first The token to check after.
     * @param {Token} second The token to check before.
     * @returns {boolean} True if there is only space between tokens, false
     *  if there is anything other than whitespace between tokens.
     */
    isSpaceBetweenTokens(first, second) {
        const text = this.text.slice(first.range[1], second.range[0]);

        return /\s/.test(text.replace(/\/\*.*?\*\//g, ""));
    },

    /**
    * Converts a source text index into a (line, column) pair.
    * @param {number} index The index of a character in a file
    * @returns {Object} A {line, column} location object with a 0-indexed column
    */
    getLocFromIndex(index) {
        if (typeof index !== "number") {
            throw new TypeError("Expected `index` to be a number.");
        }

        if (index < 0 || index > this.text.length) {
            throw new RangeError(`Index out of range (requested index ${index}, but source text has length ${this.text.length}).`);
        }

        /*
         * For an argument of this.text.length, return the location one "spot" past the last character
         * of the file. If the last character is a linebreak, the location will be column 0 of the next
         * line; otherwise, the location will be in the next column on the same line.
         *
         * See getIndexFromLoc for the motivation for this special case.
         */
        if (index === this.text.length) {
            return { line: this.lines.length, column: this.lines[this.lines.length - 1].length };
        }

        /*
         * To figure out which line rangeIndex is on, determine the last index at which rangeIndex could
         * be inserted into lineIndices to keep the list sorted.
         */
        const lineNumber = lodash.sortedLastIndex(this.lineStartIndices, index);

        return { line: lineNumber, column: index - this.lineStartIndices[lineNumber - 1] };

    },

    /**
    * Converts a (line, column) pair into a range index.
    * @param {Object} loc A line/column location
    * @param {number} loc.line The line number of the location (1-indexed)
    * @param {number} loc.column The column number of the location (0-indexed)
    * @returns {number} The range index of the location in the file.
    */
    getIndexFromLoc(loc) {
        if (typeof loc !== "object" || typeof loc.line !== "number" || typeof loc.column !== "number") {
            throw new TypeError("Expected `loc` to be an object with numeric `line` and `column` properties.");
        }

        if (loc.line <= 0) {
            throw new RangeError(`Line number out of range (line ${loc.line} requested). Line numbers should be 1-based.`);
        }

        if (loc.line > this.lineStartIndices.length) {
            throw new RangeError(`Line number out of range (line ${loc.line} requested, but only ${this.lineStartIndices.length} lines present).`);
        }

        const lineStartIndex = this.lineStartIndices[loc.line - 1];
        const lineEndIndex = loc.line === this.lineStartIndices.length ? this.text.length : this.lineStartIndices[loc.line];
        const positionIndex = lineStartIndex + loc.column;

        /*
         * By design, getIndexFromLoc({ line: lineNum, column: 0 }) should return the start index of
         * the given line, provided that the line number is valid element of this.lines. Since the
         * last element of this.lines is an empty string for files with trailing newlines, add a
         * special case where getting the index for the first location after the end of the file
         * will return the length of the file, rather than throwing an error. This allows rules to
         * use getIndexFromLoc consistently without worrying about edge cases at the end of a file.
         */
        if (
            loc.line === this.lineStartIndices.length && positionIndex > lineEndIndex ||
            loc.line < this.lineStartIndices.length && positionIndex >= lineEndIndex
        ) {
            throw new RangeError(`Column number out of range (column ${loc.column} requested, but the length of line ${loc.line} is ${lineEndIndex - lineStartIndex}).`);
        }

        return positionIndex;
    }
};


module.exports = SourceCode;
