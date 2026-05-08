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
const INLINE_CODE = /`[^`\n]+`/;
const INDENTED_CODE = /(^|\n) {4,}\S/;
const HTML_TAG_RE = /<\/?[a-zA-Z][a-zA-Z0-9-]*/g;
const SEED_TAG_RE = /<\/?([a-zA-Z][a-zA-Z0-9-]*)/g;
const ENTITY_LT = /&lt;/gi;
const ENTITY_GT = /&gt;/gi;

const decodeEntities = (text: string): string =>
  text.replace(ENTITY_LT, '<').replace(ENTITY_GT, '>');

export const containsCodeBlock = (text: string): boolean =>
  CODE_FENCE.test(text) ||
  INLINE_CODE.test(text) ||
  INDENTED_CODE.test(text);

export const countHtmlOpeners = (text: string): number => {
  const m = decodeEntities(text).match(HTML_TAG_RE);
  return m === null ? 0 : m.length;
};

const extractTagNames = (source: string): ReadonlySet<string> => {
  const out = new Set<string>();
  for (const m of decodeEntities(source).matchAll(SEED_TAG_RE)) {
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

  const lower = decodeEntities(output).toLowerCase();
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
  if (countHtmlOpeners(combined) >= 2)
    return { ok: false, reason: 'multi-tag' };
  if (sentenceCount(combined) > 3) return { ok: false, reason: 'too-long' };
  if (echoesSeedAnswer(combined, payload))
    return { ok: false, reason: 'answer-echo' };

  return { ok: true };
};
