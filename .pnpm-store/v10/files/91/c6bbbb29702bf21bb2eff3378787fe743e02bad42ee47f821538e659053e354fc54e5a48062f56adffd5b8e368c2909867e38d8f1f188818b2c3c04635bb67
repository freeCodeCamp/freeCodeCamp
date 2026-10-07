"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Visitor_options;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorBase = exports.Visitor = void 0;
const PatternVisitor_1 = require("./PatternVisitor");
const VisitorBase_1 = require("./VisitorBase");
Object.defineProperty(exports, "VisitorBase", { enumerable: true, get: function () { return VisitorBase_1.VisitorBase; } });
class Visitor extends VisitorBase_1.VisitorBase {
    constructor(optionsOrVisitor) {
        super(optionsOrVisitor instanceof Visitor
            ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f")
            : optionsOrVisitor);
        _Visitor_options.set(this, void 0);
        __classPrivateFieldSet(this, _Visitor_options, optionsOrVisitor instanceof Visitor
            ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f")
            : optionsOrVisitor, "f");
    }
    visitPattern(node, callback, options = { processRightHandNodes: false }) {
        // Call the callback at left hand identifier nodes, and Collect right hand nodes.
        const visitor = new PatternVisitor_1.PatternVisitor(__classPrivateFieldGet(this, _Visitor_options, "f"), node, callback);
        visitor.visit(node);
        // Process the right hand nodes recursively.
        if (options.processRightHandNodes) {
            visitor.rightHandNodes.forEach(this.visit, this);
        }
    }
}
exports.Visitor = Visitor;
_Visitor_options = new WeakMap();
//# sourceMappingURL=Visitor.js.map