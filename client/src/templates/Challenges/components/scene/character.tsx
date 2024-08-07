import React, { useEffect, useState } from 'react';
import { Characters, CharacterPosition } from '../../../../redux/prop-types';
import { characterAssets } from './scene-assets';

import './character.css';

interface CharacterProps {
  position: CharacterPosition;
  opacity: number;
  name: Characters;
  isBlinking: boolean;
  isTalking: boolean;
}

interface CharacterStyles {
  left?: string;
  top?: string;
  transform?: string;
  opacity?: number;
}

export function Character({
  position,
  opacity,
  name,
  isBlinking,
  isTalking
}: CharacterProps): JSX.Element {
  const [eyesAreOpen, setEyesAreOpen] = useState(true);
  const [mouthIsOpen, setMouthIsOpen] = useState(false);

  useEffect(() => {
    let blinkInterval: NodeJS.Timeout | null = null;
    let talkInterval: NodeJS.Timeout | null = null;

    if (isBlinking) {
      const msBetweenIntervals = Math.floor(Math.random() * 3000) + 2000;
      blinkInterval = setInterval(() => {
        const msBlinkDelay = Math.floor(Math.random() * 1000);
        setTimeout(() => {
          setEyesAreOpen(false);

          setTimeout(() => {
            setEyesAreOpen(true);
          }, 30); // always unblink after 30ms
        }, msBlinkDelay);
      }, msBetweenIntervals);
    }

    if (isTalking) {
      const talk = () => {
        const openTimeout = getRandomInt(0, 100);
        const closeTimeout = getRandomInt(150, 300);

        setTimeout(() => {
          setMouthIsOpen(true);
        }, openTimeout);

        setTimeout(() => {
          setMouthIsOpen(false);
        }, closeTimeout);
      };

      talk();
      talkInterval = setInterval(() => {
        talk();
      }, 300);
    }

    function getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Clear intervals when component is unmounted or conditions change
    return () => {
      setEyesAreOpen(true);
      setMouthIsOpen(false);
      if (blinkInterval) clearInterval(blinkInterval);
      if (talkInterval) clearInterval(talkInterval);
    };
  }, [isBlinking, isTalking]);

  const characterWrapStyles: CharacterStyles = {
    opacity
  };
  if (position.x) characterWrapStyles.left = `${position.x}%`;
  if (position.y) characterWrapStyles.top = `${position.y}%`;

  const characterFeatureStyles: CharacterStyles = {
    transform: position.z
      ? `translate(-${50 * position.z}%) scale(${position.z})`
      : `translate(-50%)`
  };

  const { base, brows, eyesOpen, eyesClosed, mouthOpen, mouthClosed, glasses } =
    characterAssets[name];

  return (
    <div style={characterWrapStyles} className='character-wrap'>
      <img
        style={characterFeatureStyles}
        className='character-feature'
        src={base}
        alt=''
      />
      <img
        style={characterFeatureStyles}
        className='character-feature'
        src={brows}
        alt=''
      />
      <img
        style={characterFeatureStyles}
        className='character-feature'
        src={eyesAreOpen ? eyesOpen : eyesClosed}
        alt=''
      />
      <img
        style={characterFeatureStyles}
        className='character-feature'
        src={mouthIsOpen ? mouthOpen : mouthClosed}
        alt=''
      />
      {glasses && (
        <img
          style={characterFeatureStyles}
          className='character-feature'
          src={glasses}
          alt=''
        />
      )}
    </div>
  );
}

Character.displayName = 'Character';

export default Character;
