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

export const calculateAverageVolume = (
  dataArray: Uint8Array | null | undefined
) => {
  if (!dataArray || dataArray.length === 0) return 0;
  const arr = Array.from(dataArray);
  return (
    arr.reduce((sum: number, value: number) => sum + value, 0) / arr.length
  );
};

export const analyzeSilence = (
  averageVolume: number,
  lastSpeechTime: number,
  silenceThreshold = 20,
  silenceTimeoutMs = 2000
) => {
  const currentTime = Date.now();
  const isSpeechDetected = averageVolume > silenceThreshold;
  const silenceDuration = currentTime - lastSpeechTime;
  const hasLongSilence = silenceDuration > silenceTimeoutMs;

  if (isSpeechDetected) {
    return {
      isSpeechDetected: true,
      hasLongSilence,
      newLastSpeechTime: currentTime
    };
  }

  return {
    isSpeechDetected: false,
    hasLongSilence,
    newLastSpeechTime: lastSpeechTime,
    silenceDuration
  };
};

export const compareTexts = (original: string, utterance: string) => {
  const originalWords = normalizeText(original);
  const utteranceWords = normalizeText(utterance);

  if (originalWords.join(' ') === utteranceWords.join(' ')) {
    return {
      isExact: true,
      accuracy: 100,
      highlightedText: original,
      message: "That's correct! Congratulations!"
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
    message: isGoodEnough ? 'Very good!' : 'Try again.'
  };
};
