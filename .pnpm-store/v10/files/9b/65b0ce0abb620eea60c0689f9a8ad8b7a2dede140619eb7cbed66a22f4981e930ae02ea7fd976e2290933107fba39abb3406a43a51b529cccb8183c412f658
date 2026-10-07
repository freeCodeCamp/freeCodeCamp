/*
  Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
"use strict";

/* eslint-disable no-undefined */

const Syntax = require("estraverse").Syntax;
const esrecurse = require("esrecurse");

/**
 * Get last array element
 * @param {array} xs - array
 * @returns {any} Last elment
 */
function getLast(xs) {
    return xs[xs.length - 1] || null;
}

class PatternVisitor extends esrecurse.Visitor {
    static isPattern(node) {
        const nodeType = node.type;

        return (
            nodeType === Syntax.Identifier ||
            nodeType === Syntax.ObjectPattern ||
            nodeType === Syntax.ArrayPattern ||
            nodeType === Syntax.SpreadElement ||
            nodeType === Syntax.RestElement ||
            nodeType === Syntax.AssignmentPattern
        );
    }

    constructor(options, rootPattern, callback) {
        super(null, options);
        this.rootPattern = rootPattern;
        this.callback = callback;
        this.assignments = [];
        this.rightHandNodes = [];
        this.restElements = [];
    }

    Identifier(pattern) {
        const lastRestElement = getLast(this.restElements);

        this.callback(pattern, {
            topLevel: pattern === this.rootPattern,
            rest: lastRestElement !== null && lastRestElement !== undefined && lastRestElement.argument === pattern,
            assignments: this.assignments
        });
    }

    Property(property) {

        // Computed property's key is a right hand node.
        if (property.computed) {
            this.rightHandNodes.push(property.key);
        }

        // If it's shorthand, its key is same as its value.
        // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
        // If it's not shorthand, the name of new variable is its value's.
        this.visit(property.value);
    }

    ArrayPattern(pattern) {
        for (let i = 0, iz = pattern.elements.length; i < iz; ++i) {
            const element = pattern.elements[i];

            this.visit(element);
        }
    }

    AssignmentPattern(pattern) {
        this.assignments.push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        this.assignments.pop();
    }

    RestElement(pattern) {
        this.restElements.push(pattern);
        this.visit(pattern.argument);
        this.restElements.pop();
    }

    MemberExpression(node) {

        // Computed property's key is a right hand node.
        if (node.computed) {
            this.rightHandNodes.push(node.property);
        }

        // the object is only read, write to its property.
        this.rightHandNodes.push(node.object);
    }

    //
    // ForInStatement.left and AssignmentExpression.left are LeftHandSideExpression.
    // By spec, LeftHandSideExpression is Pattern or MemberExpression.
    //   (see also: https://github.com/estree/estree/pull/20#issuecomment-74584758)
    // But espree 2.0 parses to ArrayExpression, ObjectExpression, etc...
    //

    SpreadElement(node) {
        this.visit(node.argument);
    }

    ArrayExpression(node) {
        node.elements.forEach(this.visit, this);
    }

    AssignmentExpression(node) {
        this.assignments.push(node);
        this.visit(node.left);
        this.rightHandNodes.push(node.right);
        this.assignments.pop();
    }

    CallExpression(node) {

        // arguments are right hand nodes.
        node.arguments.forEach(a => {
            this.rightHandNodes.push(a);
        });
        this.visit(node.callee);
    }
}

module.exports = PatternVisitor;

/* vim: set sw=4 ts=4 et tw=80 : */
