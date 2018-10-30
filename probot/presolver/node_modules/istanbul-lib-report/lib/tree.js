/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var util = require('util');
/**
 * An object with methods that are called during the traversal of the coverage tree.
 * A visitor has the following methods that are called during tree traversal.
 *
 *   * `onStart(root, state)` - called before traversal begins
 *   * `onSummary(node, state)` - called for every summary node
 *   * `onDetail(node, state)` - called for every detail node
 *   * `onSummaryEnd(node, state)` - called after all children have been visited for
 *      a summary node.
 *   * `onEnd(root, state)` - called after traversal ends
 *
 * @param delegate - a partial visitor that only implements the methods of interest
 *  The visitor object supplies the missing methods as noops. For example, reports
 *  that only need the final coverage summary need implement `onStart` and nothing
 *  else. Reports that use only detailed coverage information need implement `onDetail`
 *  and nothing else.
 * @constructor
 */
function Visitor(delegate) {
    this.delegate = delegate;
}

['Start', 'End', 'Summary', 'SummaryEnd', 'Detail' ].forEach(function (k) {
    var f = 'on' + k;
    Visitor.prototype[f] = function (node, state) {
        if (this.delegate[f] && typeof this.delegate[f] === 'function') {
            this.delegate[f].call(this.delegate, node, state);
        }
    };
});

function CompositeVisitor(visitors) {
    if (!Array.isArray(visitors)) {
        visitors = [visitors];
    }
    this.visitors = visitors.map(function (v) {
        if (v instanceof Visitor) {
            return v;
        }
        return new Visitor(v);
    });
}

util.inherits(CompositeVisitor, Visitor);

['Start', 'Summary', 'SummaryEnd', 'Detail', 'End'].forEach(function (k) {
    var f = 'on' + k;
    CompositeVisitor.prototype[f] = function (node, state) {
        this.visitors.forEach(function (v) {
            v[f](node, state);
        });
    };
});

function Node() {
}

/* istanbul ignore next: abstract method */
Node.prototype.getQualifiedName = function () {
    throw new Error('getQualifiedName must be overridden');
};

/* istanbul ignore next: abstract method */
Node.prototype.getRelativeName = function () {
    throw new Error('getRelativeName must be overridden');
};

/* istanbul ignore next: abstract method */
Node.prototype.isRoot = function () {
    return !this.getParent();
};

/* istanbul ignore next: abstract method */
Node.prototype.getParent = function () {
    throw new Error('getParent must be overridden');
};

/* istanbul ignore next: abstract method */
Node.prototype.getChildren = function () {
    throw new Error('getChildren must be overridden');
};

/* istanbul ignore next: abstract method */
Node.prototype.isSummary = function () {
    throw new Error('isSummary must be overridden');
};

/* istanbul ignore next: abstract method */
Node.prototype.getCoverageSummary = function (/* filesOnly */) {
    throw new Error('getCoverageSummary must be overridden');
};

/* istanbul ignore next: abstract method */
Node.prototype.getFileCoverage = function () {
    throw new Error('getFileCoverage must be overridden');
};
/**
 * visit all nodes depth-first from this node down. Note that `onStart`
 * and `onEnd` are never called on the visitor even if the current
 * node is the root of the tree.
 * @param visitor a full visitor that is called during tree traversal
 * @param state optional state that is passed around
 */
Node.prototype.visit = function (visitor, state) {

    var that = this,
        visitChildren = function () {
            that.getChildren().forEach(function (child) {
                child.visit(visitor, state);
            });
        };

    if (this.isSummary()) {
        visitor.onSummary(this, state);
    } else {
        visitor.onDetail(this, state);
    }

    visitChildren();

    if (this.isSummary()) {
        visitor.onSummaryEnd(this, state);
    }
};

/**
 * abstract base class for a coverage tree.
 * @constructor
 */
function Tree() {
}

/**
 * returns the root node of the tree
 */
/* istanbul ignore next: abstract method */
Tree.prototype.getRoot = function () {
    throw new Error('getRoot must be overridden');
};

/**
 * visits the tree depth-first with the supplied partial visitor
 * @param visitor - a potentially partial visitor
 * @param state - the state to be passed around during tree traversal
 */
Tree.prototype.visit = function (visitor, state) {
    if (!(visitor instanceof Visitor)) {
        visitor = new Visitor(visitor);
    }
    visitor.onStart(this.getRoot(), state);
    this.getRoot().visit(visitor, state);
    visitor.onEnd(this.getRoot(), state);
};

module.exports = {
    Tree: Tree,
    Node: Node,
    Visitor: Visitor,
    CompositeVisitor: CompositeVisitor
};
