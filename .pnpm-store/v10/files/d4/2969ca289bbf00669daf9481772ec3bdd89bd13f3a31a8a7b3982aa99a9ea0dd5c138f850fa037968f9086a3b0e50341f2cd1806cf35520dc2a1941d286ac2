import { Markers } from '../primitives.js';
import { splitLines } from '../util.js';
import blockParser from './block-parser.js';
import sourceParser from './source-parser.js';
import specParser from './spec-parser.js';
import tokenizeTag from './tokenizers/tag.js';
import tokenizeType from './tokenizers/type.js';
import tokenizeName from './tokenizers/name.js';
import tokenizeDescription, { getJoiner as getDescriptionJoiner, } from './tokenizers/description.js';
export default function getParser({ startLine = 0, fence = '```', spacing = 'compact', markers = Markers, tokenizers = [
    tokenizeTag(),
    tokenizeType(spacing),
    tokenizeName(),
    tokenizeDescription(spacing),
], } = {}) {
    if (startLine < 0 || startLine % 1 > 0)
        throw new Error('Invalid startLine');
    const parseSource = sourceParser({ startLine, markers });
    const parseBlock = blockParser({ fence });
    const parseSpec = specParser({ tokenizers });
    const joinDescription = getDescriptionJoiner(spacing);
    return function (source) {
        const blocks = [];
        for (const line of splitLines(source)) {
            const lines = parseSource(line);
            if (lines === null)
                continue;
            const sections = parseBlock(lines);
            const specs = sections.slice(1).map(parseSpec);
            blocks.push({
                description: joinDescription(sections[0], markers),
                tags: specs,
                source: lines,
                problems: specs.reduce((acc, spec) => acc.concat(spec.problems), []),
            });
        }
        return blocks;
    };
}
