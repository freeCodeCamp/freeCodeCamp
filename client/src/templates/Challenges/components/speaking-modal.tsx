import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';

import { closeModal } from '../redux/actions';
import { isSpeakingModalOpenSelector } from '../redux/selectors';
import {
  compareTexts,
  type ComparisonResult,
  type ComparisonWord
} from './speaking-modal-helpers';
import './speaking-modal.css';

interface SpeakingModalProps {
  closeSpeakingModal: () => void;
  isSpeakingModalOpen: boolean;
  sentence: string;
  audioUrl?: string;
  answerIndex?: number;
}

// Use types from helper

const SpeakingModal = ({
  closeSpeakingModal,
  isSpeakingModalOpen,
  sentence,
  audioUrl
}: SpeakingModalProps) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [hasStartedRecording, setHasStartedRecording] = useState(false);
  const [previouslyListening, setPreviouslyListening] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Cleanup function for audio resources
  const cleanupAudioResources = () => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    } catch (error) {
      console.warn('Error stopping audio playback:', error);
    }
  };

  // Reset feedback and cleanup when modal is closed
  useEffect(() => {
    if (!isSpeakingModalOpen) {
      setFeedback('');
      setComparisonResult(null);
      setHasStartedRecording(false);
      setPreviouslyListening(false);
      resetTranscript();
      void SpeechRecognition.stopListening();
      cleanupAudioResources();
    }
  }, [isSpeakingModalOpen, resetTranscript]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      cleanupAudioResources();
    };
  }, []);

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

      // Reset the recording flag after processing
      setHasStartedRecording(false);
    }

    // Update previous listening state
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

    // Use the audio URL directly (now includes .mp3 extension from audioId)
    const modifiedAudioUrl = audioUrl.endsWith('.mp3')
      ? audioUrl
      : `${audioUrl}.mp3`;

    try {
      setIsPlaying(true);
      setFeedback(t('speaking-modal.loading-audio'));

      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(modifiedAudioUrl);
      audioRef.current = audio;

      audio.addEventListener('loadeddata', () => {
        setFeedback(t('speaking-modal.playing-audio'));
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setFeedback(t('speaking-modal.audio-finished'));
      });

      audio.addEventListener('error', e => {
        setIsPlaying(false);
        setFeedback(t('speaking-modal.audio-error'));
        console.error('Audio playback error:', e);
      });

      await audio.play();
    } catch (error) {
      setIsPlaying(false);
      setFeedback(t('speaking-modal.audio-error'));
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

      // Start listening with a timeout of 10 seconds
      void SpeechRecognition.startListening({
        continuous: false,
        language: 'en-US'
      });

      // Set a timeout to automatically stop after 30 seconds
      setTimeout(() => {
        if (listening) {
          void SpeechRecognition.stopListening();
        }
      }, 30000);
    } catch (error) {
      console.error('Error starting recording:', error);
      setFeedback(t('speaking-modal.microphone-access-error'));
    }
  };

  const handleStopRecording = () => {
    void SpeechRecognition.stopListening();
    setFeedback(t('speaking-modal.recording-stopped-processing'));
  };

  const handleRecord = () => {
    if (listening) {
      handleStopRecording();
    } else {
      handleStartRecording();
    }
  };

  const renderExactMatch = () => (
    <>
      <div className='speaking-modal-correct-text'>{sentence}</div>
      <div className='speaking-modal-feedback-message'>{feedback}</div>
    </>
  );

  const renderPartialMatch = () => {
    if (!comparisonResult?.comparison) return null;

    const incorrectWords = comparisonResult.comparison
      .filter(item => !item.isCorrect)
      .map(item => item.word)
      .join(', ');

    return (
      <>
        <div>
          {comparisonResult.comparison.map(
            (item: ComparisonWord, index: number) => (
              <span
                key={index}
                className={`${item.isCorrect ? 'speaking-modal-comparison-word-correct' : 'speaking-modal-comparison-word-incorrect'}`}
              >
                {index === 0
                  ? item.word.charAt(0).toUpperCase() + item.word.slice(1)
                  : item.word}
              </span>
            )
          )}
          <span>.</span>

          {incorrectWords && (
            <span className='sr-only'>Incorrect words: {incorrectWords}.</span>
          )}
        </div>
        <div className='speaking-modal-feedback-message'>{feedback}</div>
      </>
    );
  };

  const renderFeedback = () => {
    if (comparisonResult?.status === 'correct') {
      return renderExactMatch();
    }

    if (comparisonResult?.comparison) {
      return renderPartialMatch();
    }

    return feedback;
  };

  return (
    <Modal onClose={closeSpeakingModal} open={isSpeakingModalOpen} size='large'>
      <Modal.Header closeButtonClassNames='close'>
        Speaking Practice
      </Modal.Header>
      <Modal.Body alignment='center' className='speaking-modal-body'>
        <p>Repeat aloud this sentence:</p>

        <div className='speaking-modal-sentence-container'>
          <p id='speaking-sentence' className='speaking-modal-sentence'>
            {sentence}
          </p>
          <Button
            size='medium'
            onClick={() => void handlePlay()}
            aria-describedby='speaking-sentence'
            disabled={isPlaying || listening}
          >
            {isPlaying ? 'Playing...' : 'Play'}
          </Button>
        </div>

        <div className='speaking-modal-record-container'>
          <Button
            size='medium'
            onClick={() => void handleRecord()}
            disabled={isPlaying || listening}
          >
            {listening ? 'Stop' : 'Record'}
          </Button>
        </div>
        <div
          className='speaking-modal-feedback'
          aria-live='polite'
          aria-atomic='true'
        >
          {renderFeedback()}
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
