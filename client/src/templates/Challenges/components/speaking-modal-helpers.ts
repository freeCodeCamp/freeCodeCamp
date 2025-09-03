export const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .trim()
    .split(/\s+/)
    .filter((word: string) => word.length > 0);
};

export const formatUtterance = (text: string) => {
  const cleaned = text.trim();
  if (!cleaned) return cleaned;

  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase() + '.';
};

interface CompareTextMessages {
  correctCongratulations: string;
  veryGood: string;
  tryAgain: string;
}

export const compareTexts = (
  original: string,
  utterance: string,
  messages: CompareTextMessages
) => {
  const originalWords = normalizeText(original);
  const utteranceWords = normalizeText(utterance);

  if (originalWords.join(' ') === utteranceWords.join(' ')) {
    return {
      isExact: true,
      accuracy: 100,
      highlightedText: original,
      message: messages.correctCongratulations
    };
  }

  const matchedPositions = new Set();
  for (const originalWord of originalWords) {
    const index = utteranceWords.indexOf(originalWord);
    if (index !== -1) matchedPositions.add(index);
  }

  const accuracy =
    originalWords.length > 0
      ? (matchedPositions.size / originalWords.length) * 100
      : 0;

  const comparison = utteranceWords.map((word, index) => ({
    word,
    isCorrect: word == originalWords[index]
  }));
  const isGoodEnough = accuracy >= 80;

  return {
    isExact: false,
    accuracy: Math.round(accuracy),
    comparison,
    message: isGoodEnough ? messages.veryGood : messages.tryAgain
  };
};
