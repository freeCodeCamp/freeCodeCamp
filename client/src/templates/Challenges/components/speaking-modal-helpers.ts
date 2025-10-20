import { dropRightWhile, isEmpty } from 'lodash-es';

export const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim()
    .split(/\s+/)
    .filter((word: string) => word.length > 0);
};

export interface ComparisonWord {
  expected: string;
  actual?: string;
}

export interface ComparisonResult {
  comparison?: ComparisonWord[];
  status?: 'correct' | 'partially-correct' | 'incorrect';
}

export const compareTexts = (
  original: string,
  utterance: string
): ComparisonResult => {
  const originalWords = normalizeText(original);
  const utteranceWords = normalizeText(utterance);

  if (originalWords.join(' ') === utteranceWords.join(' ')) {
    return {
      status: 'correct'
    };
  }

  const alignment = alignWords(originalWords, utteranceWords);

  const correctCount = alignment.filter(
    item => item.expected === item.actual
  ).length;
  const accuracy =
    originalWords.length > 0 ? (correctCount / originalWords.length) * 100 : 0;

  const rounded = Math.round(accuracy);

  const status: ComparisonResult['status'] =
    rounded === 100
      ? 'correct'
      : rounded >= 80
        ? 'partially-correct'
        : 'incorrect';

  return {
    comparison: alignment,
    status
  };
};

const isExtra = (word: ComparisonWord) =>
  word.expected == undefined && !!word.actual;

const toMissing = (word?: string) => ({ expected: word ?? '', actual: '' });
const toExtra = (word?: string) => ({ expected: '', actual: word ?? '' });

// If the speaker kept going after saying the required words, we simply ignore
// the rest.
const removeTrailingExtraWords = (words: ComparisonWord[]): ComparisonWord[] =>
  dropRightWhile(words, isExtra);

function search(
  needle: string | undefined,
  haystack: (string | undefined)[],
  compare: (x?: string) => ComparisonWord
): {
  comparisons: ComparisonWord[];
  updatedHaystack: (string | undefined)[];
} {
  const id = haystack.indexOf(needle);
  const match = { expected: needle!, actual: needle };

  return {
    comparisons: id > -1 ? [...haystack.slice(0, id).map(compare), match] : [],
    updatedHaystack: id > -1 ? haystack.slice(id) : haystack
  };
}

function matchTexts(
  originalWords: string[],
  utteranceWords: (string | undefined)[]
) {
  const results: ComparisonWord[] = [];

  let originals = [...originalWords];
  let utterances = [...utteranceWords];

  while (utterances.length > 0 || originals.length > 0) {
    const comparison = { expected: originals[0], actual: utterances[0] };

    if (originals[0] === utterances[0]) {
      results.push(comparison);
    } else {
      // If it's not a direct match, see if there is a match in the original
      // text, i.e. find out if the speaker omitted some words
      if (originals.includes(utterances[0]!)) {
        const output = search(utterances[0], originals, toMissing);
        if (isEmpty(output.comparisons)) {
          results.push(comparison);
        } else {
          results.push(...output.comparisons);
        }
        // TODO: fix the types. This assertion shouldn't be necessary.
        originals = output.updatedHaystack as string[];
      } else {
        // The utterance isn't in the original, but the original may be later on
        // in the utterances. i.e. we find out if the speaker inserted some
        // incorrect words

        const output = search(originals[0], utterances, toExtra);
        if (isEmpty(output.comparisons)) {
          results.push(comparison);
        } else {
          results.push(...output.comparisons);
        }
        utterances = output.updatedHaystack;
      }
    }

    originals.shift();
    utterances.shift();
  }
  return results;
}

function alignWords(
  originalWords: string[],
  utteranceWords: string[]
): ComparisonWord[] {
  // first we find the first utterance that's in the original array

  const firstUtteranceIndex = utteranceWords.findIndex(word =>
    originalWords.includes(word)
  );

  // Assuming there's a match now we need to know where that appears in the original, so we can align them

  if (firstUtteranceIndex !== -1) {
    const firstUtterance = utteranceWords[firstUtteranceIndex];
    const firstOriginalIndex = originalWords.findIndex(
      // we know there's a match, so no need to handle the -1 case
      word => word === firstUtterance
    );

    const delta = firstOriginalIndex - firstUtteranceIndex;
    // if delta is positive, the utterance is too short, so we pad the utterance with delta empty words
    // if delta is negative, the utterance is too long, and we can ignore the first |delta| utterances

    const alignedUtterance: (string | undefined)[] =
      delta >= 0
        ? Array<string>(delta).fill('').concat(utteranceWords)
        : utteranceWords.slice(-delta);

    return removeTrailingExtraWords(
      matchTexts(originalWords, alignedUtterance)
    );
  } else {
    const missingUtteranceCount =
      utteranceWords.length < originalWords.length
        ? originalWords.length - utteranceWords.length
        : 0;

    const paddedUtterance = utteranceWords.concat(
      Array(missingUtteranceCount).fill(undefined)
    );

    return removeTrailingExtraWords(
      paddedUtterance.map((uttered, index) => ({
        expected: originalWords[index],
        actual: uttered
      }))
    );
  }
}
