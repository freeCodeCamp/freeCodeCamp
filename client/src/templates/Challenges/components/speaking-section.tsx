import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Spacer } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { sounds } from './scene/scene-assets';
import ChallengeHeading from './challenge-heading';
import SpeakingPracticeBody from './speaking-practice-body';
import type { SpeakingSectionAudio } from '../../../redux/prop-types';
import './speaking-section.css';

interface SpeakingSectionProps {
  sentence: string;
  audio: SpeakingSectionAudio;
  superBlock: SuperBlocks;
}

function SpeakingSection({
  sentence,
  audio,
  superBlock
}: SpeakingSectionProps): JSX.Element {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>();

  const cleanupAudio = useCallback(() => {
    clearTimeout(stopTimerRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => cleanupAudio();
  }, [cleanupAudio]);

  const handlePlay = async () => {
    if (isPlaying) return;

    cleanupAudio();

    const { filename, startTimestamp, finishTimestamp } = audio;
    const element = new Audio(`${sounds}/${filename}#t=${startTimestamp}`);
    audioRef.current = element;

    setIsPlaying(true);

    try {
      await element.play();

      const clipDuration = (finishTimestamp - startTimestamp) * 1000;
      stopTimerRef.current = setTimeout(() => {
        element.pause();
        setIsPlaying(false);
      }, clipDuration);

      element.addEventListener('ended', () => setIsPlaying(false));
    } catch (err) {
      console.error('Audio playback error:', err);
      setIsPlaying(false);
    }
  };

  return (
    <section className='speaking-section'>
      <ChallengeHeading heading={t('speaking-modal.heading')} />
      <SpeakingPracticeBody
        sentence={sentence}
        superBlock={superBlock}
        isPlaying={isPlaying}
        onPlay={() => void handlePlay()}
      />
      <Spacer size='m' />
    </section>
  );
}

SpeakingSection.displayName = 'SpeakingSection';

export default SpeakingSection;
