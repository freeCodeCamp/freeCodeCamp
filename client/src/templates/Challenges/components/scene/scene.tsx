import React, { useEffect, useState, useRef } from 'react'; //, ReactElement } from 'react';
import { Col } from '@freecodecamp/ui';
import { FullScene } from '../../../../redux/prop-types';
import { Loader } from '../../../../components/helpers';
import ClosedCaptionsIcon from '../../../../assets/icons/closedcaptions';
import { sounds, images, backgrounds, characterAssets } from './scene-assets';
import Character from './character';

import './scene.css';

export function Scene({ scene }: { scene: FullScene }): JSX.Element {
  const { setup, commands } = scene;
  const { audio, alwaysShowDialogue } = setup;

  const audioTimestamp =
    audio.startTimestamp !== null && audio.finishTimestamp !== null
      ? `#t=${audio.startTimestamp},${audio.finishTimestamp}`
      : '';

  const audioRef = useRef<HTMLAudioElement>(
    new Audio(`${sounds}/${audio.filename}${audioTimestamp}`)
  );

  const loadImage = (src: string | null) => {
    if (src) new Image().src = src;
  };

  // on mount
  useEffect(() => {
    const { current } = audioRef;
    current.addEventListener('canplaythrough', audioLoaded);

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

  const audioLoaded = () => {
    setSceneIsReady(true);
  };

  const initBackground = setup.background;
  const initDialogue = { label: '', text: '', align: 'left' };
  const initCharacters = setup.characters.map(character => {
    return {
      ...character,
      opacity: character.opacity ?? 1,
      isTalking: false
    };
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [sceneIsReady, setSceneIsReady] = useState(true);
  const [showDialogue, setShowDialogue] = useState(false);
  const [accessibilityOn, setAccessibilityOn] = useState(false);
  const [characters, setCharacters] = useState(initCharacters);
  const [dialogue, setDialogue] = useState(initDialogue);
  const [background, setBackground] = useState(initBackground);

  const playScene = () => {
    setIsPlaying(true);
    setShowDialogue(true);

    commands.forEach((command, commandIndex) => {
      // Start audio timeout
      setTimeout(function () {
        void audioRef.current.play();
      }, audio.startTime * 1000);

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
      }, command.startTime * 1000);

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
          (command.finishTime as number) * 1000
        );
      }

      // Last command timeout
      if (commandIndex === commands.length - 1) {
        setTimeout(
          () => {
            finishScene();
          },
          command.finishTime
            ? command.finishTime * 1000 + 500
            : command.startTime * 1000 + 500
        );
      }
    });
  };

  const finishScene = () => {
    audioRef.current.pause();
    audioRef.current.src = `${sounds}/${audio.filename}${audioTimestamp}`;
    audioRef.current.currentTime = audio.startTimestamp || 0;
    setIsPlaying(false);
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
                  onClick={playScene}
                >
                  <img src={`${images}/play-button.png`} alt='Press Play' />
                </button>

                {!alwaysShowDialogue && (
                  <button
                    className='scene-start-btn scene-a11y-btn'
                    aria-label='closed captions'
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
