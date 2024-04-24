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

  const audioContext = useRef<AudioContext>(new AudioContext());
  const audioBuffer = useRef<AudioBuffer | null>(null);

  const loadImage = (src: string | null) => {
    if (src) new Image().src = src;
  };

  // on mount
  useEffect(() => {
    fetch(`${sounds}/${audio.filename}`)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.current.decodeAudioData(arrayBuffer))
      .then(decodedAudioData => {
        audioBuffer.current = decodedAudioData;
        setAudioLoaded(true);
      })
      .catch(error => console.error('Error loading audio file:', error));

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

    setImagesLoaded(true);

    const cleanup = async () => {
      await audioContext.current.close();
    };

    // on unmount
    return () => {
      cleanup;
    };
  }, [audio, setup.background, setup.characters, commands]);

  const initBackground = setup.background;
  const initDialogue = { label: '', text: '', align: 'left' };
  const initCharacters = setup.characters.map(character => {
    return {
      ...character,
      opacity: character.opacity ?? 1,
      isTalking: false
    };
  });

  const [audioLoaded, setAudioLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [accessibilityOn, setAccessibilityOn] = useState(false);
  const [characters, setCharacters] = useState(initCharacters);
  const [dialogue, setDialogue] = useState(initDialogue);
  const [background, setBackground] = useState(initBackground);

  const playScene = () => {
    setIsPlaying(true);
    setShowDialogue(true);

    // Start audio timeout
    setTimeout(function () {
      if (!audioLoaded || !audioBuffer.current) {
        console.error('Audio data not loaded.');
        return;
      }

      const startTime = audio.startTimestamp || 0;
      const endTime = audio.finishTimestamp || audioBuffer.current.duration;

      const bufferSource = audioContext.current.createBufferSource();
      bufferSource.buffer = audioBuffer.current;
      bufferSource.connect(audioContext.current.destination);
      bufferSource.start(0, startTime, endTime - startTime);
    }, audio.startTime * 1000);

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
        {!audioLoaded || !imagesLoaded ? (
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
