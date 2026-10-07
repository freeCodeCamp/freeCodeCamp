"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const primitives_js_1 = require("../primitives.cjs");

const util_js_1 = require("../util.cjs");

const block_parser_js_1 = require("./block-parser.cjs");

const source_parser_js_1 = require("./source-parser.cjs");

const spec_parser_js_1 = require("./spec-parser.cjs");

const tag_js_1 = require("./tokenizers/tag.cjs");

const type_js_1 = require("./tokenizers/type.cjs");

const name_js_1 = require("./tokenizers/name.cjs");

const description_js_1 = require("./tokenizers/description.cjs");

function getParser({
  startLine = 0,
  fence = '```',
  spacing = 'compact',
  markers = primitives_js_1.Markers,
  tokenizers = [(0, tag_js_1.default)(), (0, type_js_1.default)(spacing), (0, name_js_1.default)(), (0, description_js_1.default)(spacing)]
} = {}) {
  if (startLine < 0 || startLine % 1 > 0) throw new Error('Invalid startLine');
  const parseSource = (0, source_parser_js_1.default)({
    startLine,
    markers
  });
  const parseBlock = (0, block_parser_js_1.default)({
    fence
  });
  const parseSpec = (0, spec_parser_js_1.default)({
    tokenizers
  });
  const joinDescription = (0, description_js_1.getJoiner)(spacing);
  return function (source) {
    const blocks = [];

    for (const line of (0, util_js_1.splitLines)(source)) {
      const lines = parseSource(line);
      if (lines === null) continue;
      const sections = parseBlock(lines);
      const specs = sections.slice(1).map(parseSpec);
      blocks.push({
        description: joinDescription(sections[0], markers),
        tags: specs,
        source: lines,
        problems: specs.reduce((acc, spec) => acc.concat(spec.problems), [])
      });
    }

    return blocks;
  };
}

exports.default = getParser;
//# sourceMappingURL=index.cjs.map
