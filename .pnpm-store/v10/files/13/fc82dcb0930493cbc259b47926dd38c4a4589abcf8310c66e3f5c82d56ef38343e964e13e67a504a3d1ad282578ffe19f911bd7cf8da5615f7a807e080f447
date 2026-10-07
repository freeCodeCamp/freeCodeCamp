import { Spec, Tokens } from '../../primitives.js';
import { splitSpace } from '../../util.js';
import { Tokenizer } from './index.js';

/**
 * Joiner is a function taking collected type token string parts,
 * and joining them together. In most of the cases this will be
 * a single piece like {type-name}, but type may go over multipe line
 * ```
 * @tag {function(
 *   number,
 *   string
 * )}
 * ```
 */
export type Joiner = (parts: string[]) => string;

/**
 * Shortcut for standard Joiners
 * compact - trim surrounding space, replace line breaks with a single space
 * preserve - concat as is
 */
export type Spacing = 'compact' | 'preserve' | Joiner;

/**
 * Sets splits remaining `Spec.lines[].tokes.description` into `type` and `description`
 * tokens and populates Spec.type`
 *
 * @param {Spacing} spacing tells how to deal with a whitespace
 * for type values going over multiple lines
 */
export default function typeTokenizer(spacing: Spacing = 'compact'): Tokenizer {
  const join = getJoiner(spacing);
  return (spec: Spec): Spec => {
    let curlies = 0;
    let lines: [Tokens, string][] = [];

    for (const [i, { tokens }] of spec.source.entries()) {
      let type = '';
      if (i === 0 && tokens.description[0] !== '{') return spec;

      for (const ch of tokens.description) {
        if (ch === '{') curlies++;
        if (ch === '}') curlies--;
        type += ch;
        if (curlies === 0) break;
      }

      lines.push([tokens, type]);
      if (curlies === 0) break;
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

    const parts: string[] = [];
    const offset = lines[0][0].postDelimiter.length;

    for (const [i, [tokens, type]] of lines.entries()) {
      tokens.type = type;
      if (i > 0) {
        tokens.type = tokens.postDelimiter.slice(offset) + type;
        tokens.postDelimiter = tokens.postDelimiter.slice(0, offset);
      }
      [tokens.postType, tokens.description] = splitSpace(
        tokens.description.slice(type.length)
      );
      parts.push(tokens.type);
    }

    parts[0] = parts[0].slice(1);
    parts[parts.length - 1] = parts[parts.length - 1].slice(0, -1);
    spec.type = join(parts);
    return spec;
  };
}

const trim = (x: string) => x.trim();

function getJoiner(spacing: Spacing): Joiner {
  if (spacing === 'compact') return (t: string[]) => t.map(trim).join('');
  else if (spacing === 'preserve') return (t: string[]) => t.join('\n');
  else return spacing;
}
