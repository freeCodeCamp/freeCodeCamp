import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Modal } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';

import { closeModal } from '../redux/actions';
import { isSpeakingModalOpenSelector } from '../redux/selectors';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import SpeakingPracticeBody from './speaking-practice-body';
import './speaking-modal.css';

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const cleanupAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  // Reset audio when modal closes
  useEffect(() => {
    if (!isSpeakingModalOpen) {
      cleanupAudio();
    }
    return () => cleanupAudio();
  }, [isSpeakingModalOpen, cleanupAudio]);

  const handlePlay = async () => {
    if (!audioUrl) return;

    cleanupAudio();

    const src = audioUrl.endsWith('.mp3') ? audioUrl : `${audioUrl}.mp3`;
    const audio = new Audio(src);
    audioRef.current = audio;

    setIsPlaying(true);

    try {
      await audio.play();
      audio.addEventListener('ended', () => setIsPlaying(false));
      audio.addEventListener('error', () => setIsPlaying(false));
    } catch (err) {
      console.error('Audio playback error:', err);
      setIsPlaying(false);
    }
  };

  return (
    <Modal onClose={closeSpeakingModal} open={isSpeakingModalOpen} size='large'>
      <Modal.Header closeButtonClassNames='close'>
        {t('speaking-modal.heading')}
      </Modal.Header>
      <Modal.Body alignment='center' className='speaking-modal-body'>
        <SpeakingPracticeBody
          sentence={sentence}
          superBlock={superBlock}
          isPlaying={isPlaying}
          onPlay={() => void handlePlay()}
          active={isSpeakingModalOpen}
        />
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
