// Helper function to normalize text (remove punctuation, convert to lowercase)
export const normalizeText = text => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);
};

// Helper function to format utterance (capitalize first word, add period)
export const formatUtterance = text => {
  const cleaned = text.trim();
  if (!cleaned) return cleaned;

  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase() + '.';
};

// Pure function to calculate average volume level from frequency data
export const calculateAverageVolume = dataArray => {
  if (!dataArray || dataArray.length === 0) return 0;
  return dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
};

// Pure function to determine if silence has been detected
export const checkSilenceDetection = (
  averageVolume,
  lastSpeechTime,
  silenceThreshold = 20,
  silenceTimeoutMs = 2000
) => {
  const currentTime = Date.now();
  const isSpeechDetected = averageVolume > silenceThreshold;
  const silenceDuration = currentTime - lastSpeechTime;
  const shouldStopRecording = silenceDuration > silenceTimeoutMs;

  if (isSpeechDetected) {
    return {
      isSpeechDetected: true,
      shouldStopRecording,
      newLastSpeechTime: currentTime
    };
  }

  return {
    isSpeechDetected: false,
    shouldStopRecording,
    newLastSpeechTime: lastSpeechTime,
    silenceDuration
  };
};

// Pure function to compare utterance with original sentence
export const compareTexts = (original, utterance) => {
  const originalWords = normalizeText(original);
  const utteranceWords = normalizeText(utterance);

  // Check for perfect match
  if (originalWords.join(' ') === utteranceWords.join(' ')) {
    return {
      isExact: true,
      accuracy: 100,
      highlightedText: original,
      message: "That's correct! Congratulations!"
    };
  }

  // Calculate accuracy using flexible word matching
  let correctWords = 0;
  const utteranceWordsCopy = [...utteranceWords];

  for (const originalWord of originalWords) {
    const index = utteranceWordsCopy.indexOf(originalWord);
    if (index !== -1) {
      correctWords++;
      utteranceWordsCopy.splice(index, 1); // Remove to prevent double counting
    }
  }

  const accuracy =
    originalWords.length > 0 ? (correctWords / originalWords.length) * 100 : 0;

  // Build comparison array for UI highlighting using position-based matching
  const maxLength = Math.max(originalWords.length, utteranceWords.length);
  const comparison = [];

  for (let i = 0; i < maxLength; i++) {
    const originalWord = originalWords[i] || '';
    const utteranceWord = utteranceWords[i] || '';

    if (originalWord === utteranceWord && originalWord !== '') {
      comparison.push({ word: utteranceWord, isCorrect: true });
    } else if (utteranceWord !== '') {
      comparison.push({ word: utteranceWord, isCorrect: false });
    }
  }
  const isGoodEnough = accuracy >= 80;

  return {
    isExact: false,
    accuracy: Math.round(accuracy),
    comparison,
    message: isGoodEnough ? 'Very good!' : 'Try again.'
  };
};
