import { splitSpace } from '../../util.js';
/**
 * Sets splits remaining `Spec.lines[].tokes.description` into `type` and `description`
 * tokens and populates Spec.type`
 *
 * @param {Spacing} spacing tells how to deal with a whitespace
 * for type values going over multiple lines
 */
export default function typeTokenizer(spacing = 'compact') {
    const join = getJoiner(spacing);
    return (spec) => {
        let curlies = 0;
        let lines = [];
        for (const [i, { tokens }] of spec.source.entries()) {
            let type = '';
            if (i === 0 && tokens.description[0] !== '{')
                return spec;
            for (const ch of tokens.description) {
                if (ch === '{')
                    curlies++;
                if (ch === '}')
                    curlies--;
                type += ch;
                if (curlies === 0)
                    break;
            }
            lines.push([tokens, type]);
            if (curlies === 0)
                break;
        }
        if (curlies !== 0) {
            spec.problems.push({
                code: 'spec:type:unpaired-curlies',
                message: 'unpaired curlies',
                line: spec.source[0].number,
                critical: true,
            });
            return spec;
        }
        const parts = [];
        const offset = lines[0][0].postDelimiter.length;
        for (const [i, [tokens, type]] of lines.entries()) {
            tokens.type = type;
            if (i > 0) {
                tokens.type = tokens.postDelimiter.slice(offset) + type;
                tokens.postDelimiter = tokens.postDelimiter.slice(0, offset);
            }
            [tokens.postType, tokens.description] = splitSpace(tokens.description.slice(type.length));
            parts.push(tokens.type);
        }
        parts[0] = parts[0].slice(1);
        parts[parts.length - 1] = parts[parts.length - 1].slice(0, -1);
        spec.type = join(parts);
        return spec;
    };
}
const trim = (x) => x.trim();
function getJoiner(spacing) {
    if (spacing === 'compact')
        return (t) => t.map(trim).join('');
    else if (spacing === 'preserve')
        return (t) => t.join('\n');
    else
        return spacing;
}
