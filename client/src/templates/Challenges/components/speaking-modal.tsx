import React, { useState, useRef, useEffect } from 'react';
import './speaking-modal.css';
import {
  formatUtterance,
  calculateAverageVolume,
  checkSilenceDetection,
  compareTexts
} from './speaking-modal-helpers';

interface SpeakingModalProps {
  open: boolean;
  onClose: () => void;
  sentence: string;
  audioUrl?: string;
  answerIndex: number;
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

interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
    webkitAudioContext?: typeof AudioContext;
  }
}

const SpeakingModal: React.FC<SpeakingModalProps> = ({
  open,
  onClose,
  sentence,
  audioUrl,
  answerIndex
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [_audioError, setAudioError] = useState('');
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSpeechTimeRef = useRef<number>(0);

  // Reset feedback when modal is closed
  useEffect(() => {
    if (!open) {
      setFeedback('');
      setComparisonResult(null);
    }
  }, [open]);

  if (!open) return null;

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

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      lastSpeechTimeRef.current = Date.now();

      const checkSilence = () => {
        if (!isRecording || !analyserRef.current) return;

        analyser.getByteFrequencyData(dataArray);

        const averageVolume = calculateAverageVolume(dataArray);
        const silenceResult = checkSilenceDetection(
          averageVolume,
          lastSpeechTimeRef.current
        );

        if (silenceResult.isSpeechDetected) {
          lastSpeechTimeRef.current = silenceResult.newLastSpeechTime as number;
        } else if (silenceResult.shouldStopRecording) {
          stopRecording();
          setFeedback('Recording stopped due to silence.');
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
      setFeedback('No audio file available.');
      return;
    }

    // Construct the modified audio URL with -SP + answer number
    let modifiedAudioUrl = audioUrl;
    if (answerIndex !== undefined) {
      const answerNumber = answerIndex + 1; // Convert 0-based index to 1-based
      modifiedAudioUrl = `${audioUrl}-SP${answerNumber}.mp3`;
    }

    try {
      setIsPlaying(true);
      setAudioError('');
      setFeedback('Loading audio...');

      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(modifiedAudioUrl);
      audioRef.current = audio;

      audio.addEventListener('loadeddata', () => {
        setFeedback('Playing audio...');
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setFeedback('Audio finished playing.');
      });

      audio.addEventListener('error', e => {
        setIsPlaying(false);
        setAudioError('Failed to load or play audio file.');
        setFeedback('Error: Unable to play audio.');
        console.error('Audio playback error:', e);
      });

      await audio.play();
    } catch (error) {
      setIsPlaying(false);
      setAudioError('Failed to play audio.');
      setFeedback('Error: Unable to play audio.');
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
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }
    setIsRecording(false);
    setFeedback('Recording stopped. Processing...');
  };

  const isSpeechRecognitionSupported = () => {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  };

  const setupSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      throw new Error('Speech recognition not supported');
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const formattedUtterance = formatUtterance(transcript);
      const result = compareTexts(sentence, transcript);

      setComparisonResult(result);

      if (result.isExact) {
        setFeedback(result.message);
      } else {
        setFeedback(`${formattedUtterance} ${result.message}`);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setFeedback(`Speech recognition error: ${event.error}`);
    };

    recognition.onend = () => {
      setIsRecording(false);
      if (feedback === 'Recording... Speak now.') {
        setFeedback('Recording stopped. No speech detected.');
      }
    };

    return recognition;
  };

  const startRecording = async () => {
    // Check speech recognition support first
    if (!isSpeechRecognitionSupported()) {
      setFeedback('Speech recognition not supported in this browser.');
      return;
    }

    try {
      setFeedback('Requesting microphone access...');

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      setIsRecording(true);
      setFeedback('Recording... Speak now.');
      setComparisonResult(null);

      // Set up and start speech recognition
      const recognition = setupSpeechRecognition();
      recognition.start();

      // Set up MediaRecorder for audio recording (backup)
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.start();

      // Start silence monitoring
      monitorAudioLevels(stream);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setFeedback('Error: Could not access microphone.');
      setIsRecording(false);
    }
  };

  const handleRecord = () => {
    if (isRecording) {
      stopRecording();
    } else {
      void startRecording();
    }
  };

  return (
    <div className='speaking-modal-overlay'>
      <div className='speaking-modal-content'>
        <button
          className='speaking-modal-close'
          onClick={onClose}
          aria-label='Close'
        >
          ×
        </button>
        <div className='speaking-modal-body'>
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
            <button
              type='button'
              className='btn btn-secondary speaking-modal-play'
              onClick={() => void handlePlay()}
              disabled={isPlaying || isRecording}
            >
              {isPlaying ? 'Playing...' : 'Play'}
            </button>
          </div>
          <div className='speaking-modal-record-row'>
            <button
              type='button'
              className='btn btn-danger speaking-modal-record'
              onClick={() => void handleRecord()}
              disabled={isPlaying}
            >
              {isRecording ? 'Stop' : 'Record'}
            </button>
          </div>
          <div className='speaking-modal-feedback'>
            {comparisonResult && comparisonResult.isExact ? (
              <div>
                <div style={{ color: 'green' }}>{sentence}</div>
                <div style={{ marginTop: '8px' }}>
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
                        style={{
                          color: item.isCorrect ? 'green' : 'red',
                          marginRight: '4px'
                        }}
                      >
                        {index === 0
                          ? item.word.charAt(0).toUpperCase() +
                            item.word.slice(1)
                          : item.word}
                      </span>
                    )
                  )}
                  <span>.</span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  {comparisonResult.message}
                </div>
              </div>
            ) : (
              feedback || 'Feedback will appear here.'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingModal;
