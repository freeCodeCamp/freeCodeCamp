import React, { useEffect, useState, useRef } from 'react'; //, ReactElement } from 'react';
import { Col } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { FullScene } from '../../../../redux/prop-types';
import { Loader } from '../../../../components/helpers';
import ClosedCaptionsIcon from '../../../../assets/icons/closedcaptions';
import { sounds, images, backgrounds, characterAssets } from './scene-assets';
import Character from './character';

import './scene.css';

const sToMs = (n: number) => {
  return n * 1000;
};

const loadImage = (src: string | null) => {
  if (src) new Image().src = src;
};

export function Scene({
  scene,
  isPlaying,
  setIsPlaying
}: {
  scene: FullScene;
  isPlaying: boolean;
  setIsPlaying: (shouldPlay: boolean) => void;
}): JSX.Element {
  const { t } = useTranslation();
  const { setup, commands } = scene;
  const { audio, alwaysShowDialogue } = setup;
  const { startTimestamp = null, finishTimestamp = null } = audio;

  const hasTimestamps = startTimestamp !== null && finishTimestamp !== null;
  const audioTimestamp = hasTimestamps ? `#t=${startTimestamp}` : '';

  const audioRef = useRef<HTMLAudioElement>(
    new Audio(`${sounds}/${audio.filename}${audioTimestamp}`)
  );

  // if there are timestamps, we use the difference between them as the duration
  // if not, we assume we're playing the whole audio file.
  const duration = hasTimestamps
    ? sToMs(finishTimestamp - startTimestamp)
    : Infinity;

  // on mount
  useEffect(() => {
    audioRef.current.addEventListener('canplaythrough', audioLoaded);

    // preload images
    loadImage(`${backgrounds}/${setup.background}`);

    setup.characters
      .map(({ character }) => Object.values(characterAssets[character]))
      .flat()
      .forEach(loadImage);

    commands
      .map(({ background }) =>
        background ? `${backgrounds}/${background}` : null
      )
      .forEach(loadImage);

    // on unmount
    return () => {
      const { current } = audioRef;

      current.pause();
      current.currentTime = 0;
      current.removeEventListener('canplaythrough', audioLoaded);
    };
  }, [audioRef, setup.background, setup.characters, commands]);

  const initBackground = setup.background;
  const initDialogue = { label: '', text: '', align: 'left' };
  const initCharacters = setup.characters.map(character => {
    return {
      ...character,
      opacity: character.opacity ?? 1,
      isTalking: false
    };
  });

  const [sceneIsReady, setSceneIsReady] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [accessibilityOn, setAccessibilityOn] = useState(false);
  const [characters, setCharacters] = useState(initCharacters);
  const [dialogue, setDialogue] = useState(initDialogue);
  const [background, setBackground] = useState(initBackground);

  useEffect(() => {
    if (isPlaying) {
      playScene();
    } else {
      finishScene();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const audioLoaded = () => {
    setSceneIsReady(true);
  };

  let start = 0;
  let stopAudio = false;

  // this function exists because we couldn't reliably stop the audio when
  // playing only part of the audio file. So it would get cut off
  function maybeStopAudio() {
    const runningTime = Date.now() - start;

    if (runningTime >= duration) {
      stopAudio = true;
      audioRef.current.pause();
    }

    if (!stopAudio) {
      window.requestAnimationFrame(maybeStopAudio);
    }
  }

  const playScene = () => {
    setShowDialogue(true);

    setTimeout(() => {
      if (audioRef.current.paused) {
        start = Date.now();
        void audioRef.current.play();
      }
      // if there are no timestamps, we can let the audio play to the end
      if (hasTimestamps) maybeStopAudio();
    }, sToMs(audio.startTime));

    commands.forEach((command, commandIndex) => {
      // Start command timeout
      setTimeout(() => {
        if (command.background) setBackground(command.background);

        setDialogue(
          command.dialogue
            ? { ...command.dialogue, label: command.character }
            : initDialogue
        );

        setCharacters(prevCharacters => {
          const newCharacters = prevCharacters.map(character => {
            if (character.character === command.character) {
              return {
                ...character,
                position: command.position ?? character.position,
                opacity: command.opacity ?? character.opacity,
                isTalking: command.dialogue ? true : false
              };
            }
            return character;
          });
          return newCharacters;
        });
      }, sToMs(command.startTime));

      // Finish command timeout, only used when there's a dialogue
      if (command.dialogue) {
        setTimeout(
          () => {
            setCharacters(prevCharacters => {
              const newCharacters = prevCharacters.map(character => {
                if (character.character === command.character) {
                  return {
                    ...character,
                    isTalking: false
                  };
                }
                return character;
              });
              return newCharacters;
            });
          },
          sToMs(command.finishTime as number)
        );
      }

      // Last command timeout
      if (commandIndex === commands.length - 1) {
        setTimeout(
          () => {
            setIsPlaying(false);
          },
          // an extra 500ms at the end to let the characters fade out (CSS transition)
          command.finishTime
            ? sToMs(command.finishTime) + 500
            : sToMs(command.startTime) + 500
        );
      }
    });
  };

  const finishScene = () => {
    audioRef.current.pause();
    audioRef.current.src = `${sounds}/${audio.filename}${audioTimestamp}`;
    audioRef.current.currentTime = audio.startTimestamp || 0;
    setShowDialogue(false);
    setDialogue(initDialogue);
    setCharacters(initCharacters);
    setBackground(initBackground);
  };

  return (
    <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
      <div
        className='scene-wrapper'
        style={{
          backgroundImage: `url("${backgrounds}/${background}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          aspectRatio: '16 / 9'
        }}
      >
        {!sceneIsReady ? (
          <Loader />
        ) : (
          <>
            {characters.map(
              (
                { character, position = {}, opacity = 1, isTalking = false },
                i
              ) => {
                return (
                  <Character
                    key={i}
                    name={character}
                    position={position}
                    opacity={opacity}
                    isTalking={isTalking}
                    isBlinking={isPlaying}
                  />
                );
              }
            )}

            {showDialogue && (alwaysShowDialogue || accessibilityOn) && (
              <div
                className={`scene-dialogue-wrap ${
                  dialogue.align ? `scene-dialogue-align-${dialogue.align}` : ''
                }`}
              >
                <div className='scene-dialogue-label'>{dialogue.label}</div>
                <div className='scene-dialogue-text'>{dialogue.text}</div>
              </div>
            )}

            {!isPlaying && (
              <div className='scene-start-screen'>
                <button
                  className='scene-start-btn scene-play-btn'
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                >
                  <img
                    src={`${images}/play-button.png`}
                    alt={t('buttons.play-scene')}
                  />
                </button>

                {!alwaysShowDialogue && (
                  <button
                    className='scene-start-btn scene-a11y-btn'
                    aria-label={t('buttons.closed-caption')}
                    aria-pressed={accessibilityOn}
                    onClick={() => setAccessibilityOn(!accessibilityOn)}
                  >
                    <ClosedCaptionsIcon
                      fill={
                        accessibilityOn ? 'var(--gray-00)' : 'var(--gray-15)'
                      }
                    />
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Col>
  );
}

Scene.displayName = 'Scene';

export default Scene;
