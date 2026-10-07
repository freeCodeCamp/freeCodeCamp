"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const tree_constructor_1 = require("../tree-constructor");
const tokenizer_1 = require("../tokenizer");
const utils_1 = require("../utils");
const token_adapter_1 = require("../token-adapter");
function parse(html, options) {
    const tokenAdapter = (options && options.tokenAdapter) || token_adapter_1.defaultTokenAdapter;
    const { tokens } = (0, tokenizer_1.tokenize)(html, tokenAdapter, options);
    const { ast } = (0, tree_constructor_1.constructTree)(tokens);
    return {
        ast: (0, utils_1.clearParent)(ast),
        tokens,
    };
}
