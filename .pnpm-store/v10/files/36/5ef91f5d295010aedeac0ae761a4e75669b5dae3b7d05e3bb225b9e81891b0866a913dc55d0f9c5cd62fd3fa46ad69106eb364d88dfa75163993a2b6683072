"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJoiner = void 0;

const primitives_js_1 = require("../../primitives.cjs");
/**
 * Makes no changes to `spec.lines[].tokens` but joins them into `spec.description`
 * following given spacing srtategy
 * @param {Spacing} spacing tells how to handle the whitespace
 * @param {BlockMarkers} markers tells how to handle comment block delimitation
 */


function descriptionTokenizer(spacing = 'compact', markers = primitives_js_1.Markers) {
  const join = getJoiner(spacing);
  return spec => {
    spec.description = join(spec.source, markers);
    return spec;
  };
}

exports.default = descriptionTokenizer;

function getJoiner(spacing) {
  if (spacing === 'compact') return compactJoiner;
  if (spacing === 'preserve') return preserveJoiner;
  return spacing;
}

exports.getJoiner = getJoiner;

function compactJoiner(lines, markers = primitives_js_1.Markers) {
  return lines.map(({
    tokens: {
      description
    }
  }) => description.trim()).filter(description => description !== '').join(' ');
}

const lineNo = (num, {
  tokens
}, i) => tokens.type === '' ? num : i;

const getDescription = ({
  tokens
}) => (tokens.delimiter === '' ? tokens.start : tokens.postDelimiter.slice(1)) + tokens.description;

function preserveJoiner(lines, markers = primitives_js_1.Markers) {
  if (lines.length === 0) return ''; // skip the opening line with no description

  if (lines[0].tokens.description === '' && lines[0].tokens.delimiter === markers.start) lines = lines.slice(1); // skip the closing line with no description

  const lastLine = lines[lines.length - 1];
  if (lastLine !== undefined && lastLine.tokens.description === '' && lastLine.tokens.end.endsWith(markers.end)) lines = lines.slice(0, -1); // description starts at the last line of type definition

  lines = lines.slice(lines.reduce(lineNo, 0));
  return lines.map(getDescription).join('\n');
}
//# sourceMappingURL=description.cjs.map
