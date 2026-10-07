import { Line, Spec } from '../primitives.js';
import { seedSpec } from '../util.js';
import { Tokenizer } from './tokenizers/index.js';

export type Parser = (source: Line[]) => Spec;

export interface Options {
  tokenizers: Tokenizer[];
}

export default function getParser({ tokenizers }: Options): Parser {
  return function parseSpec(source: Line[]): Spec {
    let spec = seedSpec({ source });
    for (const tokenize of tokenizers) {
      spec = tokenize(spec);
      if (spec.problems[spec.problems.length - 1]?.critical) break;
    }
    return spec;
  };
}
