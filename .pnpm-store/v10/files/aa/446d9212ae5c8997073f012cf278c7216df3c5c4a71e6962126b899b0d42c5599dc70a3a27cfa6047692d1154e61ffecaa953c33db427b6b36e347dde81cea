import { splitSpace, isSpace } from '../../util.js';
const isQuoted = (s) => s && s.startsWith('"') && s.endsWith('"');
/**
 * Splits remaining `spec.lines[].tokens.description` into `name` and `descriptions` tokens,
 * and populates the `spec.name`
 */
export default function nameTokenizer() {
    const typeEnd = (num, { tokens }, i) => tokens.type === '' ? num : i;
    return (spec) => {
        // look for the name in the line where {type} ends
        const { tokens } = spec.source[spec.source.reduce(typeEnd, 0)];
        const source = tokens.description.trimLeft();
        const quotedGroups = source.split('"');
        // if it starts with quoted group, assume it is a literal
        if (quotedGroups.length > 1 &&
            quotedGroups[0] === '' &&
            quotedGroups.length % 2 === 1) {
            spec.name = quotedGroups[1];
            tokens.name = `"${quotedGroups[1]}"`;
            [tokens.postName, tokens.description] = splitSpace(source.slice(tokens.name.length));
            return spec;
        }
        let brackets = 0;
        let name = '';
        let optional = false;
        let defaultValue;
        // assume name is non-space string or anything wrapped into brackets
        for (const ch of source) {
            if (brackets === 0 && isSpace(ch))
                break;
            if (ch === '[')
                brackets++;
            if (ch === ']')
                brackets--;
            name += ch;
        }
        if (brackets !== 0) {
            spec.problems.push({
                code: 'spec:name:unpaired-brackets',
                message: 'unpaired brackets',
                line: spec.source[0].number,
                critical: true,
            });
            return spec;
        }
        const nameToken = name;
        if (name[0] === '[' && name[name.length - 1] === ']') {
            optional = true;
            name = name.slice(1, -1);
            const parts = name.split('=');
            name = parts[0].trim();
            if (parts[1] !== undefined)
                defaultValue = parts.slice(1).join('=').trim();
            if (name === '') {
                spec.problems.push({
                    code: 'spec:name:empty-name',
                    message: 'empty name',
                    line: spec.source[0].number,
                    critical: true,
                });
                return spec;
            }
            if (defaultValue === '') {
                spec.problems.push({
                    code: 'spec:name:empty-default',
                    message: 'empty default value',
                    line: spec.source[0].number,
                    critical: true,
                });
                return spec;
            }
            // has "=" and is not a string, except for "=>"
            if (!isQuoted(defaultValue) && /=(?!>)/.test(defaultValue)) {
                spec.problems.push({
                    code: 'spec:name:invalid-default',
                    message: 'invalid default value syntax',
                    line: spec.source[0].number,
                    critical: true,
                });
                return spec;
            }
        }
        spec.optional = optional;
        spec.name = name;
        tokens.name = nameToken;
        if (defaultValue !== undefined)
            spec.default = defaultValue;
        [tokens.postName, tokens.description] = splitSpace(source.slice(tokens.name.length));
        return spec;
    };
}
