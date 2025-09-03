import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';

import { closeModal } from '../redux/actions';
import { isSpeakingModalOpenSelector } from '../redux/selectors';
import { formatUtterance, compareTexts } from './speaking-modal-helpers';
import './speaking-modal.css';

interface SpeakingModalProps {
  closeSpeakingModal: () => void;
  isSpeakingModalOpen: boolean;
  sentence: string;
  audioUrl?: string;
  answerIndex?: number;
}

interface ComparisonWord {
  word: string;
  isCorrect: boolean;
}

interface ComparisonResult {
  isExact: boolean;
  accuracy: number;
  highlightedText?: string;
  comparison?: ComparisonWord[];
  message: string;
}

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
        // We have a transcript, process it
        const formattedTranscript = formatUtterance(transcript);

        const result = compareTexts(sentence, transcript, {
          correctCongratulations: t('speaking-modal.correct-congratulations'),
          veryGood: t('speaking-modal.very-good'),
          tryAgain: t('speaking-modal.try-again')
        });

        setComparisonResult(result);

        // For non-exact matches, show both the formatted utterance and the feedback
        if (result.isExact) {
          setFeedback(result.message);
        } else {
          setFeedback(`${formattedTranscript} ${result.message}`);
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

  return (
    <Modal onClose={closeSpeakingModal} open={isSpeakingModalOpen} size='large'>
      <Modal.Header closeButtonClassNames='close'>
        Speaking Practice
      </Modal.Header>
      <Modal.Body alignment='center'>
        <label htmlFor='speaking-input' className='speaking-modal-label'>
          Practice Speaking:
        </label>
        <div className='speaking-modal-input-row'>
          <input
            id='speaking-input'
            type='text'
            value={sentence}
            readOnly
            className='speaking-modal-input'
          />
          <Button
            size='medium'
            onClick={() => void handlePlay()}
            className={`speaking-modal-play-button ${isPlaying || listening ? 'disabled' : ''}`}
          >
            {isPlaying ? 'Playing...' : 'Play'}
          </Button>
        </div>
        <div className='speaking-modal-record-container'>
          <Button
            size='medium'
            onClick={() => void handleRecord()}
            className={`speaking-modal-record-button ${isPlaying ? 'disabled' : ''}`}
          >
            {listening ? 'Stop' : 'Record'}
          </Button>
        </div>
        <div className='speaking-modal-feedback'>
          {comparisonResult && comparisonResult.isExact ? (
            <div>
              <div className='speaking-modal-correct-text'>{sentence}</div>
              <div className='speaking-modal-feedback-message'>
                {comparisonResult.message}
              </div>
            </div>
          ) : comparisonResult &&
            !comparisonResult.isExact &&
            comparisonResult.comparison ? (
            <div>
              <div>
                {comparisonResult.comparison.map(
                  (item: ComparisonWord, index: number) => (
                    <span
                      key={index}
                      className={`speaking-modal-comparison-word ${item.isCorrect ? 'correct' : 'incorrect'}`}
                    >
                      {index === 0
                        ? item.word.charAt(0).toUpperCase() + item.word.slice(1)
                        : item.word}
                    </span>
                  )
                )}
                <span>.</span>
              </div>
              <div className='speaking-modal-feedback-message'>
                {comparisonResult.message}
              </div>
            </div>
          ) : (
            feedback || t('speaking-modal.feedback-placeholder')
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
