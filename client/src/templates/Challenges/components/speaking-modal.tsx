import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';

import { closeModal } from '../redux/actions';
import { isSpeakingModalOpenSelector } from '../redux/selectors';
import {
  formatUtterance,
  calculateAverageVolume,
  analyzeSilence,
  compareTexts
} from './speaking-modal-helpers';
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

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const SpeakingModal = ({
  closeSpeakingModal,
  isSpeakingModalOpen,
  sentence,
  audioUrl
}: SpeakingModalProps) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxRecordingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSpeechTimeRef = useRef<number>(0);
  const hasRecognitionResultRef = useRef<boolean>(false);

  // Cleanup function to stop all media resources
  const cleanupMediaResources = () => {
    // Stop MediaRecorder first
    try {
      if (mediaRecorderRef.current) {
        if (mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
        mediaRecorderRef.current = null;
      }
    } catch (error) {
      console.warn('Error stopping media recorder:', error);
    }

    // Stop speech recognition
    try {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } catch (error) {
      console.warn('Error stopping speech recognition:', error);
    }

    // Disconnect audio processing
    try {
      if (microphoneRef.current) {
        microphoneRef.current.disconnect();
        microphoneRef.current = null;
      }
    } catch (error) {
      console.warn('Error disconnecting microphone:', error);
    }

    try {
      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
      }
    } catch (error) {
      console.warn('Error closing audio context:', error);
    }

    // Stop media tracks last
    try {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => {
          try {
            track.stop();
          } catch (error) {
            console.warn('Error stopping media track:', error);
          }
        });
        mediaStreamRef.current = null;
      }
    } catch (error) {
      console.warn('Error stopping media stream:', error);
    }

    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }
    if (maxRecordingTimeoutRef.current) {
      clearTimeout(maxRecordingTimeoutRef.current);
      maxRecordingTimeoutRef.current = null;
    }
  };

  // Reset feedback and cleanup media when modal is closed
  useEffect(() => {
    if (!isSpeakingModalOpen) {
      setFeedback('');
      setComparisonResult(null);
      setIsRecording(false);
      cleanupMediaResources();
    }
  }, [isSpeakingModalOpen]);

  // Cleanup media resources on component unmount
  useEffect(() => {
    return () => {
      cleanupMediaResources();
    };
  }, []);

  // Monitor audio levels for silence detection
  const monitorAudioLevels = (stream: MediaStream) => {
    try {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext ||
        AudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);

      analyser.fftSize = 256;
      microphone.connect(analyser);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      microphoneRef.current = microphone;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      lastSpeechTimeRef.current = Date.now();

      const checkSilence = () => {
        if (!isRecording || !analyserRef.current) return;

        analyser.getByteFrequencyData(dataArray);

        const averageVolume = calculateAverageVolume(dataArray);
        const silenceResult = analyzeSilence(
          averageVolume,
          lastSpeechTimeRef.current
        );

        if (silenceResult.isSpeechDetected) {
          lastSpeechTimeRef.current = silenceResult.newLastSpeechTime;
        } else if (silenceResult.hasLongSilence) {
          stopRecording();
          setFeedback(t('speaking-modal.recording-stopped-silence'));
          return;
        }

        // Continue monitoring if still recording
        if (isRecording) {
          requestAnimationFrame(checkSilence);
        }
      };

      // Start monitoring
      requestAnimationFrame(checkSilence);
    } catch (error) {
      console.error('Error setting up audio monitoring:', error);
    }
  };

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

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (audioContextRef.current) {
      void audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }
    if (maxRecordingTimeoutRef.current) {
      clearTimeout(maxRecordingTimeoutRef.current);
      maxRecordingTimeoutRef.current = null;
    }
    setIsRecording(false);
  };

  const setupSpeechRecognition = (SupportedSpeechRecognition: {
    new (): SpeechRecognition;
  }) => {
    const recognition = new SupportedSpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      hasRecognitionResultRef.current = true;
      const transcript = event.results[0][0].transcript;

      const formattedUtterance = formatUtterance(transcript);
      const result = compareTexts(sentence, transcript, {
        correctCongratulations: t('speaking-modal.correct-congratulations'),
        veryGood: t('speaking-modal.very-good'),
        tryAgain: t('speaking-modal.try-again')
      });

      setComparisonResult(result);

      if (result.isExact) {
        setFeedback(result.message);
      } else {
        setFeedback(`${formattedUtterance} ${result.message}`);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      hasRecognitionResultRef.current = true;
      if (event.error === 'no-speech') {
        setFeedback(t('speaking-modal.no-speech-detected'));
      } else {
        setFeedback(
          t('speaking-modal.speech-recognition-error', {
            error: event.error
          })
        );
      }
    };

    recognition.onend = () => {
      setIsRecording(false);
      if (!hasRecognitionResultRef.current) {
        setFeedback(t('speaking-modal.no-speech-detected'));
      }
    };

    return recognition;
  };

  const startRecording = async () => {
    // Check speech recognition support first
    const SupportedSpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SupportedSpeechRecognition) {
      setFeedback(t('speaking-modal.speech-recognition-not-supported'));
      return;
    }

    try {
      const { state } = await navigator.permissions.query({
        name: 'microphone' as PermissionName
      });
      if (state === 'prompt')
        setFeedback(t('speaking-modal.requesting-microphone'));

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      mediaStreamRef.current = stream;

      setComparisonResult(null);
      hasRecognitionResultRef.current = false;

      // Set up and start speech recognition
      const recognition = setupSpeechRecognition(SupportedSpeechRecognition);
      recognition.start();

      monitorAudioLevels(stream);

      maxRecordingTimeoutRef.current = setTimeout(() => {
        stopRecording();
      }, 30000);
      setIsRecording(true);
      setFeedback(t('speaking-modal.recording-speak-now'));
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setFeedback(t('speaking-modal.microphone-access-error'));
    }
  };

  const handleRecord = () => {
    if (isRecording) {
      stopRecording();
      setFeedback(t('speaking-modal.recording-stopped-processing'));
    } else {
      void startRecording();
    }
  };

  return (
    <Modal onClose={closeSpeakingModal} open={isSpeakingModalOpen}>
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
            className={`speaking-modal-play-button ${isPlaying || isRecording ? 'disabled' : ''}`}
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
            {isRecording ? 'Stop' : 'Record'}
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
