"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeType = exports.TextNode = exports.Node = exports.valid = exports.CommentNode = exports.HTMLElement = exports.parse = void 0;
var comment_1 = __importDefault(require("./nodes/comment"));
exports.CommentNode = comment_1.default;
var html_1 = __importDefault(require("./nodes/html"));
exports.HTMLElement = html_1.default;
var node_1 = __importDefault(require("./nodes/node"));
exports.Node = node_1.default;
var text_1 = __importDefault(require("./nodes/text"));
exports.TextNode = text_1.default;
var type_1 = __importDefault(require("./nodes/type"));
exports.NodeType = type_1.default;
var parse_1 = __importDefault(require("./parse"));
var valid_1 = __importDefault(require("./valid"));
exports.valid = valid_1.default;
function parse(data, options) {
    if (options === void 0) { options = {
        lowerCaseTagName: false,
        comment: false
    }; }
    return (0, parse_1.default)(data, options);
}
exports.default = parse;
exports.parse = parse;
parse.parse = parse_1.default;
parse.HTMLElement = html_1.default;
parse.CommentNode = comment_1.default;
parse.valid = valid_1.default;
parse.Node = node_1.default;
parse.TextNode = text_1.default;
parse.NodeType = type_1.default;
