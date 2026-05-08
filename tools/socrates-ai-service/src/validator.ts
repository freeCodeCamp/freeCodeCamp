import type { HintRequest } from './schemas.js';
import type { StructuredOutput } from './schemas.js';

export type Violation =
  | 'code-block'
  | 'multi-tag'
  | 'answer-echo'
  | 'too-long';

export type SafetyResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: Violation };

const CODE_FENCE = /```/;
const HTML_TAG_RE = /<\/?[a-zA-Z][a-zA-Z0-9-]*/g;
const SEED_TAG_RE = /<\/?([a-zA-Z][a-zA-Z0-9-]*)/g;

export const containsCodeBlock = (text: string): boolean =>
  CODE_FENCE.test(text);

export const countHtmlOpeners = (text: string): number => {
  const m = text.match(HTML_TAG_RE);
  return m === null ? 0 : m.length;
};

const extractTagNames = (source: string): ReadonlySet<string> => {
  const out = new Set<string>();
  for (const m of source.matchAll(SEED_TAG_RE)) {
    const name = m[1]?.toLowerCase();
    if (name !== undefined) out.add(name);
  }
  return out;
};

export const echoesSeedAnswer = (
  output: string,
  payload: HintRequest
): boolean => {
  const seedTags = extractTagNames(payload.seed);
  const userTags = extractTagNames(payload.userInput ?? '');
  const missing = new Set<string>();
  for (const t of seedTags) if (!userTags.has(t)) missing.add(t);
  if (missing.size === 0) return false;

  const lower = output.toLowerCase();
  for (const tag of missing) {
    if (lower.includes(`<${tag}`) || lower.includes(`</${tag}`)) {
      return true;
    }
  }
  return false;
};

const sentenceCount = (text: string): number =>
  text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

export const isPedagogySafe = (
  output: StructuredOutput,
  payload: HintRequest
): SafetyResult => {
  const combined = `${output.encouragement}\n${output.question}`;

  if (containsCodeBlock(combined)) return { ok: false, reason: 'code-block' };
  if (countHtmlOpeners(output.question) >= 2)
    return { ok: false, reason: 'multi-tag' };
  if (sentenceCount(output.question) > 2)
    return { ok: false, reason: 'too-long' };
  if (echoesSeedAnswer(combined, payload))
    return { ok: false, reason: 'answer-echo' };

  return { ok: true };
};
