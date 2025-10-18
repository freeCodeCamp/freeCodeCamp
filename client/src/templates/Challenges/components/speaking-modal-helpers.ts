export const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim()
    .split(/\s+/)
    .filter((word: string) => word.length > 0);
};

export interface ComparisonWord {
  word: string;
  isCorrect: boolean;
  isMissing?: boolean;
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

  const alignment = alignWords(originalWords, utteranceWords);

  const correctCount = alignment.filter(item => item.isCorrect).length;
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

function alignWords(
  originalWords: string[],
  utteranceWords: string[]
): ComparisonWord[] {
  const m = originalWords.length;
  const n = utteranceWords.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (originalWords[i - 1] === utteranceWords[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const result: ComparisonWord[] = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && originalWords[i - 1] === utteranceWords[j - 1]) {
      result.unshift({
        word: originalWords[i - 1],
        isCorrect: true
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({
        word: utteranceWords[j - 1],
        isCorrect: false
      });
      j--;
    } else {
      result.unshift({
        word: originalWords[i - 1],
        isCorrect: false,
        isMissing: true
      });
      i--;
    }
  }

  return result;
}
