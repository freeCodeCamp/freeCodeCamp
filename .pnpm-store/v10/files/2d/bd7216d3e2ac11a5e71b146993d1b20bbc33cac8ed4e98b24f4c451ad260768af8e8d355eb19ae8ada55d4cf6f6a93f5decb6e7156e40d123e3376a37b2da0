"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorBase = exports.Visitor = void 0;
const PatternVisitor_1 = require("./PatternVisitor");
const VisitorBase_1 = require("./VisitorBase");
class Visitor extends VisitorBase_1.VisitorBase {
    #options;
    constructor(optionsOrVisitor) {
        super(optionsOrVisitor instanceof Visitor
            ? optionsOrVisitor.#options
            : optionsOrVisitor);
        this.#options =
            optionsOrVisitor instanceof Visitor
                ? optionsOrVisitor.#options
                : optionsOrVisitor;
    }
    visitPattern(node, callback, options = { processRightHandNodes: false }) {
        // Call the callback at left hand identifier nodes, and Collect right hand nodes.
        const visitor = new PatternVisitor_1.PatternVisitor(this.#options, node, callback);
        visitor.visit(node);
        // Process the right hand nodes recursively.
        if (options.processRightHandNodes) {
            visitor.rightHandNodes.forEach(this.visit, this);
        }
    }
}
exports.Visitor = Visitor;
var VisitorBase_2 = require("./VisitorBase");
Object.defineProperty(exports, "VisitorBase", { enumerable: true, get: function () { return VisitorBase_2.VisitorBase; } });
