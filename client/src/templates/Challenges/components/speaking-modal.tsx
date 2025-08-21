import React, { useState } from 'react';
import './speaking-modal.css';

interface SpeakingModalProps {
  open: boolean;
  onClose: () => void;
  sentence: string;
}

const SpeakingModal: React.FC<SpeakingModalProps> = ({
  open,
  onClose,
  sentence
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');

  if (!open) return null;

  // Play audio logic (stub)
  const handlePlay = () => {
    // TODO: Implement audio playback logic
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  // Record logic (stub)
  const handleRecord = () => {
    // TODO: Implement recording and speech-to-text logic
    setIsRecording(!isRecording);
    setFeedback(isRecording ? 'Recording stopped.' : 'Recording...');
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
              onClick={handlePlay}
              disabled={isPlaying}
            >
              {isPlaying ? 'Playing...' : 'Play'}
            </button>
          </div>
          <div className='speaking-modal-record-row'>
            <button
              type='button'
              className='btn btn-danger speaking-modal-record'
              onClick={handleRecord}
              disabled={isPlaying}
            >
              {isRecording ? 'Stop' : 'Record'}
            </button>
          </div>
          <div className='speaking-modal-feedback'>
            {feedback || 'Feedback will appear here.'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingModal;
