import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faStop,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons';

import {
  SuperBlocks,
  superBlockToSpeechLang
} from '@freecodecamp/shared/config/curriculum';
import {
  compareTexts,
  type ComparisonResult,
  type ComparisonWord
} from './speaking-modal-helpers';

interface SpeakingPracticeBodyProps {
  sentence: string;
  superBlock: SuperBlocks;
  isPlaying: boolean;
  onPlay: () => void;
  // When set, resets speech state whenever it transitions from true → false.
  // Used by the modal to reset on close. Omit (or keep true) for always-visible use.
  active?: boolean;
}

function processComparison(comparison: ComparisonWord): {
  status: 'correct' | 'misplaced' | 'extra' | 'wrong';
  word: string;
} {
  if (comparison.actual === undefined)
    return { status: 'misplaced', word: comparison.expected };
  if (comparison.expected === undefined)
    return { status: 'extra', word: comparison.actual };
  if (comparison.actual === comparison.expected)
    return { status: 'correct', word: comparison.expected };
  return { status: 'wrong', word: comparison.actual };
}

function SpeakingPracticeBody({
  sentence,
  superBlock,
  isPlaying,
  onPlay,
  active = true
}: SpeakingPracticeBodyProps): JSX.Element {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState('');
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [hasStartedRecording, setHasStartedRecording] = useState(false);
  const [previouslyListening, setPreviouslyListening] = useState(false);

  const stopListeningTimeoutRef = useRef<
    ReturnType<typeof setTimeout> | undefined
  >();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Reset speech state when active transitions to false (modal close)
  useEffect(() => {
    if (!active) {
      setFeedback('');
      setComparisonResult(null);
      setHasStartedRecording(false);
      setPreviouslyListening(false);
      resetTranscript();
      void SpeechRecognition.stopListening();
      clearTimeout(stopListeningTimeoutRef.current);
    }
  }, [active, resetTranscript]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(stopListeningTimeoutRef.current);
      void SpeechRecognition.stopListening();
    };
  }, []);

  // Evaluate transcript when speech recognition stops
  useEffect(() => {
    if (previouslyListening && !listening && hasStartedRecording) {
      if (transcript && transcript.trim()) {
        const result = compareTexts(sentence, transcript);
        setComparisonResult(result);

        if (result.status === 'correct') {
          setFeedback(t('speaking-modal.correct-congratulations'));
        } else if (result.status === 'partially-correct') {
          setFeedback(t('speaking-modal.very-good'));
        } else {
          setFeedback(t('speaking-modal.try-again'));
        }
      } else {
        setFeedback(t('speaking-modal.no-speech-detected'));
        setComparisonResult(null);
      }
      setHasStartedRecording(false);
    }
    setPreviouslyListening(listening);
  }, [
    listening,
    previouslyListening,
    hasStartedRecording,
    transcript,
    sentence,
    t
  ]);

  const handleStartRecording = () => {
    if (!browserSupportsSpeechRecognition) {
      setFeedback(t('speaking-modal.speech-recognition-not-supported'));
      return;
    }
    try {
      setFeedback(t('speaking-modal.recording-speak-now'));
      setHasStartedRecording(true);
      resetTranscript();
      setComparisonResult(null);

      void SpeechRecognition.startListening({
        continuous: false,
        language: superBlockToSpeechLang[superBlock]
      });

      stopListeningTimeoutRef.current = setTimeout(() => {
        void SpeechRecognition.stopListening();
      }, 30000);
    } catch (err) {
      console.error('Error starting recording:', err);
      setFeedback(t('speaking-modal.microphone-access-error'));
    }
  };

  const handleStopRecording = () => {
    void SpeechRecognition.stopListening();
    clearTimeout(stopListeningTimeoutRef.current);
    setFeedback(t('speaking-modal.recording-stopped-processing'));
  };

  const handleRecord = () => {
    if (listening) {
      handleStopRecording();
    } else {
      handleStartRecording();
    }
  };

  const renderFeedback = () => {
    if (!comparisonResult) return feedback;

    if (comparisonResult.status === 'correct') {
      return (
        <>
          <div className='speaking-modal-correct-text'>{sentence}</div>
          <p className='speaking-modal-feedback-message'>{feedback}</p>
        </>
      );
    }

    if (comparisonResult.comparison) {
      const punctuationMark = sentence[sentence.length - 1];
      const fullUtterance =
        comparisonResult.comparison.map(w => w.actual).join(' ') +
        punctuationMark;
      const comparison = comparisonResult.comparison.map(processComparison);

      const misplacedWords = comparison
        .filter(item => item.status === 'misplaced')
        .map(item => item.word)
        .join(', ');

      const incorrectWords = comparison
        .filter(item => item.status === 'extra' || item.status === 'wrong')
        .map(item => item.word)
        .join(', ');

      return (
        <>
          <div>
            <p className='sr-only'>{fullUtterance}</p>
            {misplacedWords && (
              <p>
                {t('speaking-modal.misplaced-words', { words: misplacedWords })}
              </p>
            )}
            {incorrectWords && (
              <p>
                {t('speaking-modal.incorrect-words', { words: incorrectWords })}
              </p>
            )}
            {comparison
              .filter(({ status }) => status !== 'misplaced')
              .map((item, index) => (
                <span
                  key={index}
                  aria-hidden='true'
                  className={
                    item.status === 'correct'
                      ? 'speaking-modal-comparison-word-correct'
                      : 'speaking-modal-comparison-word-incorrect'
                  }
                >
                  {index === 0
                    ? item.word.charAt(0).toUpperCase() + item.word.slice(1)
                    : item.word}
                </span>
              ))}
            <span aria-hidden='true'>{punctuationMark}</span>
          </div>
          <p className='speaking-modal-feedback-message'>{feedback}</p>
        </>
      );
    }

    return feedback;
  };

  return (
    <>
      <p>{t('speaking-modal.repeat-sentence')}</p>

      <div className='speaking-modal-sentence-container'>
        <p id='speaking-practice-sentence' className='speaking-modal-sentence'>
          {sentence}
        </p>
        <Button
          size='medium'
          onClick={onPlay}
          aria-describedby='speaking-practice-sentence'
          disabled={isPlaying || listening}
          aria-label={
            isPlaying ? t('speaking-modal.playing') : t('speaking-modal.play')
          }
        >
          <FontAwesomeIcon
            icon={isPlaying ? faStop : faPlay}
            aria-hidden='true'
          />
        </Button>
      </div>

      <div className='speaking-modal-record-container'>
        {browserSupportsSpeechRecognition ? (
          <Button
            size='medium'
            onClick={() => void handleRecord()}
            disabled={isPlaying}
          >
            <FontAwesomeIcon
              icon={listening ? faStop : faMicrophone}
              aria-hidden='true'
              className='speaking-modal-record-icon'
            />
            {listening ? t('speaking-modal.stop') : t('speaking-modal.record')}
          </Button>
        ) : (
          <p className='speaking-modal-not-supported'>
            {t('speaking-modal.speech-recognition-not-supported')}
          </p>
        )}
      </div>

      <div
        className='speaking-modal-feedback'
        aria-live='polite'
        aria-atomic='true'
      >
        {renderFeedback()}
      </div>
    </>
  );
}

SpeakingPracticeBody.displayName = 'SpeakingPracticeBody';

export default SpeakingPracticeBody;
