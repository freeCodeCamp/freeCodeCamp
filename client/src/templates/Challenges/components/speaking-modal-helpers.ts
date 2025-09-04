export const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .trim()
    .split(/\s+/)
    .filter((word: string) => word.length > 0);
};

export interface ComparisonWord {
  word: string;
  isCorrect: boolean;
}

export interface ComparisonResult {
  highlightedText?: string;
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
      highlightedText: original,
      status: 'correct'
    };
  }

  const matchedPositions = new Set<number>();
  for (const originalWord of originalWords) {
    const index = utteranceWords.indexOf(originalWord);
    if (index !== -1) matchedPositions.add(index);
  }

  const accuracy =
    originalWords.length > 0
      ? (matchedPositions.size / originalWords.length) * 100
      : 0;

  const comparison: ComparisonWord[] = utteranceWords.map((word, index) => ({
    word,
    isCorrect: word == originalWords[index]
  }));

  const rounded = Math.round(accuracy);

  const status: ComparisonResult['status'] =
    rounded === 100
      ? 'correct'
      : rounded >= 80
        ? 'partially-correct'
        : 'incorrect';

  return {
    comparison,
    status
  };
};
