/**
 * @fileoverview The event generator for comments.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Check collection of comments to prevent double event for comment as
 * leading and trailing, then emit event if passing
 * @param {ASTNode[]} comments - Collection of comment nodes
 * @param {EventEmitter} emitter - The event emitter which is the destination of events.
 * @param {Object[]} locs - List of locations of previous comment nodes
 * @param {string} eventName - Event name postfix
 * @returns {void}
 */
function emitComments(comments, emitter, locs, eventName) {
    if (comments.length > 0) {
        comments.forEach(node => {
            const index = locs.indexOf(node.loc);

            if (index >= 0) {
                locs.splice(index, 1);
            } else {
                locs.push(node.loc);
                emitter.emit(node.type + eventName, node);
            }
        });
    }
}

/**
 * Shortcut to check and emit enter of comment nodes
 * @param {CommentEventGenerator} generator - A generator to emit.
 * @param {ASTNode[]} comments - Collection of comment nodes
 * @returns {void}
 */
function emitCommentsEnter(generator, comments) {
    emitComments(
        comments,
        generator.emitter,
        generator.commentLocsEnter,
        "Comment");
}

/**
 * Shortcut to check and emit exit of comment nodes
 * @param {CommentEventGenerator} generator - A generator to emit.
 * @param {ASTNode[]} comments Collection of comment nodes
 * @returns {void}
 */
function emitCommentsExit(generator, comments) {
    emitComments(
        comments,
        generator.emitter,
        generator.commentLocsExit,
        "Comment:exit");
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * The event generator for comments.
 * This is the decorator pattern.
 * This generates events of comments before/after events which are generated the original generator.
 *
 * Comment event generator class
 */
class CommentEventGenerator {

    /**
     * @param {EventGenerator} originalEventGenerator - An event generator which is the decoration target.
     * @param {SourceCode} sourceCode - A source code which has comments.
     */
    constructor(originalEventGenerator, sourceCode) {
        this.original = originalEventGenerator;
        this.emitter = originalEventGenerator.emitter;
        this.sourceCode = sourceCode;
        this.commentLocsEnter = [];
        this.commentLocsExit = [];
    }

    /**
     * Emits an event of entering comments.
     * @param {ASTNode} node - A node which was entered.
     * @returns {void}
     */
    enterNode(node) {
        const comments = this.sourceCode.getComments(node);

        emitCommentsEnter(this, comments.leading);
        this.original.enterNode(node);
        emitCommentsEnter(this, comments.trailing);
    }

    /**
     * Emits an event of leaving comments.
     * @param {ASTNode} node - A node which was left.
     * @returns {void}
     */
    leaveNode(node) {
        const comments = this.sourceCode.getComments(node);

        emitCommentsExit(this, comments.trailing);
        this.original.leaveNode(node);
        emitCommentsExit(this, comments.leading);
    }
}

module.exports = CommentEventGenerator;
