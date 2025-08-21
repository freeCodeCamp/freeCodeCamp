import React from 'react';
import './speaking-modal.css';

interface SpeakingModalProps {
  open: boolean;
  onClose: () => void;
  sentence: string;
  onPlay: () => void;
  onRecord: () => void;
  feedback?: string;
}

const SpeakingModal: React.FC<SpeakingModalProps> = ({
  open,
  onClose,
  sentence,
  onPlay,
  onRecord,
  feedback
}) => {
  if (!open) return null;
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
              onClick={onPlay}
            >
              Play
            </button>
          </div>
          <div className='speaking-modal-record-row'>
            <button
              type='button'
              className='btn btn-danger speaking-modal-record'
              onClick={onRecord}
            >
              Record / Stop
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
