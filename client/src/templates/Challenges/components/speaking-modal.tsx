import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/ui';
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

import { closeModal } from '../redux/actions';
import { isSpeakingModalOpenSelector } from '../redux/selectors';
import {
  SuperBlocks,
  superBlockToSpeechLang
} from '../../../../../shared-dist/config/curriculum';
import {
  compareTexts,
  type ComparisonResult,
  type ComparisonWord
} from './speaking-modal-helpers';
import './speaking-modal.css';

interface ExactMatchFeedbackProps {
  sentence: string;
  feedback: string;
}

interface PartialMatchFeedbackProps {
  comparisonResult: ComparisonResult;
  sentence: string;
  feedback: string;
}

const ExactMatchFeedback = ({
  sentence,
  feedback
}: ExactMatchFeedbackProps) => (
  <>
    <div className='speaking-modal-correct-text'>{sentence}</div>
    <p className='speaking-modal-feedback-message'>{feedback}</p>
  </>
);

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

  return {
    status: 'wrong',
    word: comparison.actual
  };
}

const PartialMatchFeedback = ({
  comparisonResult,
  sentence,
  feedback
}: PartialMatchFeedbackProps) => {
  const { t } = useTranslation();
  if (!comparisonResult?.comparison) return null;

  const punctuationMark = sentence[sentence.length - 1];

  const fullUtterance =
    comparisonResult.comparison.map(w => w.actual).join(' ') + punctuationMark;

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
        {/* Render the utterance as a full sentence rather than separated words
            so screen readers don't add a stop after each word */}
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
          .map((item, index: number) => (
            <span
              key={index}
              aria-hidden='true'
              className={`${item.status === 'correct' ? 'speaking-modal-comparison-word-correct' : 'speaking-modal-comparison-word-incorrect'}`}
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
};

interface SpeakingModalProps {
  closeSpeakingModal: () => void;
  isSpeakingModalOpen: boolean;
  sentence: string;
  audioUrl?: string;
  answerIndex: number;
  superBlock: SuperBlocks;
}

const SpeakingModal = ({
  closeSpeakingModal,
  isSpeakingModalOpen,
  sentence,
  audioUrl,
  superBlock
}: SpeakingModalProps) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [hasStartedRecording, setHasStartedRecording] = useState(false);
  const [previouslyListening, setPreviouslyListening] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stopListeningTimeoutRef = useRef<
    ReturnType<typeof setTimeout> | undefined
  >();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  console.log('Speech recognition transcript:', transcript);

  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleAudioError = useCallback((e: Event) => {
    setIsPlaying(false);
    console.error('Audio playback error:', e);
  }, []);

  const cleanupAudioResources = useCallback(() => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', handleAudioEnded);
        audioRef.current.removeEventListener('error', handleAudioError);
        audioRef.current = null;
      }
    } catch (error) {
      console.warn('Error stopping audio playback:', error);
    }
  }, [handleAudioEnded, handleAudioError]);

  // Reset feedback when modal is closed and cleanup on unmount
  useEffect(() => {
    if (!isSpeakingModalOpen) {
      setFeedback('');
      setComparisonResult(null);
      setHasStartedRecording(false);
      setPreviouslyListening(false);
      setIsPlaying(false);
      resetTranscript();
      void SpeechRecognition.stopListening();

      clearTimeout(stopListeningTimeoutRef.current);
      cleanupAudioResources();
    }

    return () => {
      clearTimeout(stopListeningTimeoutRef.current);
      cleanupAudioResources();
    };
  }, [isSpeakingModalOpen, resetTranscript, cleanupAudioResources]);

  // Track listening state changes
  useEffect(() => {
    if (previouslyListening && !listening && hasStartedRecording) {
      // Speech recognition just stopped and we had started a recording session
      if (transcript && transcript.trim()) {
        const result = compareTexts(sentence, transcript);

        setComparisonResult(result);

        if (result.status === 'correct') {
          setFeedback(t('speaking-modal.correct-congratulations'));
        } else if (result.status === 'partially-correct') {
          setFeedback(`${t('speaking-modal.very-good')}`);
        } else {
          setFeedback(`${t('speaking-modal.try-again')}`);
        }
      } else {
        // No transcript and we were recording, this means no speech detected
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

  const handlePlay = async () => {
    if (!audioUrl) {
      setFeedback(t('speaking-modal.no-audio-available'));
      return;
    }

    const modifiedAudioUrl = audioUrl.endsWith('.mp3')
      ? audioUrl
      : `${audioUrl}.mp3`;

    try {
      setIsPlaying(true);

      cleanupAudioResources();

      const audio = new Audio(modifiedAudioUrl);
      audioRef.current = audio;

      audio.addEventListener('ended', handleAudioEnded);
      audio.addEventListener('error', handleAudioError);

      await audio.play();
    } catch (error) {
      setIsPlaying(false);
      console.error('Audio playback error:', error);
    }
  };

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
    } catch (error) {
      console.error('Error starting recording:', error);
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

  return (
    <Modal onClose={closeSpeakingModal} open={isSpeakingModalOpen} size='large'>
      <Modal.Header closeButtonClassNames='close'>
        {t('speaking-modal.heading')}
      </Modal.Header>
      <Modal.Body alignment='center' className='speaking-modal-body'>
        <p>{t('speaking-modal.repeat-sentence')}</p>

        <div className='speaking-modal-sentence-container'>
          <p id='speaking-sentence' className='speaking-modal-sentence'>
            {sentence}
          </p>
          <Button
            size='medium'
            onClick={() => void handlePlay()}
            aria-describedby='speaking-sentence'
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
              {listening
                ? t('speaking-modal.stop')
                : t('speaking-modal.record')}
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
          {comparisonResult?.status === 'correct' ? (
            <ExactMatchFeedback sentence={sentence} feedback={feedback} />
          ) : comparisonResult?.comparison ? (
            <PartialMatchFeedback
              comparisonResult={comparisonResult}
              sentence={sentence}
              feedback={feedback}
            />
          ) : (
            feedback
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state: unknown) => ({
  isSpeakingModalOpen: isSpeakingModalOpenSelector(state) as boolean
});

const mapDispatchToProps = {
  closeSpeakingModal: () => closeModal('speaking')
};

SpeakingModal.displayName = 'SpeakingModal';

export default connect(mapStateToProps, mapDispatchToProps)(SpeakingModal);
