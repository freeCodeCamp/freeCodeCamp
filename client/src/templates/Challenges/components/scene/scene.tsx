import React, { useEffect, useState, useRef, useMemo } from 'react'; //, ReactElement } from 'react';
import { Col, Spacer } from '@freecodecamp/ui';
import { isEmpty } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { FullScene } from '../../../../redux/prop-types';
import { Loader } from '../../../../components/helpers';
import ClosedCaptionsIcon from '../../../../assets/icons/closedcaptions';
import { sounds, images, backgrounds, characterAssets } from './scene-assets';
import Character from './character';
import { SceneSubject } from './scene-subject';

import './scene.css';

const sToMs = (n: number) => n * 1000;

const loadImage = (src: string | null) => {
  if (src) new Image().src = src;
};

const initDialogue = { label: '', text: '', align: 'left' };

export function Scene({
  scene,
  sceneSubject
}: {
  scene: FullScene;
  sceneSubject: SceneSubject;
}): JSX.Element {
  const { t } = useTranslation();
  const canPauseRef = useRef(false);
  const { setup, commands } = scene;
  const { audio, alwaysShowDialogue } = setup;
  const { startTimestamp = null, finishTimestamp = null } = audio;

  const hasTimestamps = startTimestamp !== null && finishTimestamp !== null;
  const audioTimestamp = hasTimestamps ? `#t=${startTimestamp}` : '';

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  // if there are timestamps, we use the difference between them as the duration
  // if not, we assume we're playing the whole audio file.
  const duration = hasTimestamps
    ? sToMs(finishTimestamp - startTimestamp)
    : Infinity;

  // on mount
  useEffect(() => {
    const { current } = audioRef;

    if (current) {
      current.volume = 1;
      current.addEventListener('canplaythrough', audioLoaded);
      current.src = `${sounds}/${audio.filename}${audioTimestamp}`;
      current.preload = 'auto';
      current.load();
    }

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
      if (current) {
        current.pause();
        current.currentTime = 0;
        current.removeEventListener('canplaythrough', audioLoaded);
      }
    };
  }, [
    audioRef,
    audio.filename,
    audioTimestamp,
    setup.background,
    setup.characters,
    commands
  ]);

  const initBackground = setup.background;

  // The charactesr are memoized to prevent the useEffect from running on every
  // render,
  const initCharacters = useMemo(
    () =>
      setup.characters.map(character => {
        return {
          ...character,
          opacity: character.opacity ?? 1,
          isTalking: false
        };
      }),
    [setup.characters]
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [sceneIsReady, setSceneIsReady] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [accessibilityOn, setAccessibilityOn] = useState(false);
  const [characters, setCharacters] = useState(initCharacters);
  const [dialogue, setDialogue] = useState(initDialogue);
  const [background, setBackground] = useState(initBackground);
  const startRef = useRef<number>(0);
  const startTimerRef = useRef<number>(0);
  const finishTimerRef = useRef<number>(Number.MAX_SAFE_INTEGER);

  const [currentTime, setCurrentTime] = useState(0);
  // TODO: I'm using a ref so that the maybeStopAudio closure doesn't get stuck
  // with the initial value of isPlaying. Given that we also have a state,
  // isPlaying, it feels like there's a better way.
  const isPlayingSceneRef = useRef(false);

  // memoizing to prevent the useEffect from running on every render
  const sortedCommands = useMemo(() => {
    const normalized = commands.flatMap(command => {
      const { startTime, finishTime, ...rest } = command;

      const startCommand = {
        ...rest,
        time: sToMs(startTime),
        isTalking: !!rest.dialogue
      };
      const finishCommand = finishTime
        ? { ...rest, time: sToMs(finishTime), isTalking: false }
        : null;

      return finishCommand ? [startCommand, finishCommand] : [startCommand];
    });
    normalized.sort((a, b) => a.time - b.time);
    return normalized;
  }, [commands]);

  const usedCommandsRef = useRef(new Set<number>());

  const audioLoaded = () => {
    setSceneIsReady(true);
  };

  const pause = () => {
    // Until the play() promise resolves, we can't pause the audio
    if (canPauseRef.current) audioRef.current.pause();
    canPauseRef.current = false;
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const time = Date.now() - startRef.current;
      setCurrentTime(time);

      if (isPlayingSceneRef.current)
        window.requestAnimationFrame(updateCurrentTime);
    };

    const playScene = () => {
      // TODO: if we manage the playing state in another module, we should not
      // need the early return here. It should not be possible for this to be
      // called at all if the scene is already playing.
      if (isPlaying || !sceneIsReady) return;
      setIsPlaying(true);
      isPlayingSceneRef.current = true;
      startRef.current = Date.now();
      setShowDialogue(true);
      updateCurrentTime();
      // @ts-expect-error it's not a node timer
      startTimerRef.current = setTimeout(() => {
        if (audioRef.current.paused) {
          void audioRef.current.play().then(() => {
            canPauseRef.current = true;
          });
        }
      }, sToMs(audio.startTime));

      // @ts-expect-error it's not a node timer
      finishTimerRef.current = setTimeout(
        () => {
          // if there are no timestamps, we can let the audio play to the end
          if (hasTimestamps) {
            const endTimeStamp = sToMs(audio.finishTimestamp!); // it exists if hasTimestamps is true
            const audioCurrentTime = sToMs(audioRef.current.currentTime);
            const remainingTime = endTimeStamp - audioCurrentTime;
            // For some reason, despite the setTimeout resolving at the right
            // time, the currentTime can be smaller than expected. That means
            // that if we pause now it will cut off the last part.
            if (remainingTime < 100) {
              // 100ms is arbitrary and may need to be adjusted if people still
              // notice the cut off

              pause();
            } else {
              // @ts-expect-error it's not a node timer
              finishTimerRef.current = setTimeout(() => {
                pause();
              }, remainingTime);
            }
          }
        },
        duration + sToMs(audio.startTime)
      );
    };

    sceneSubject.attach(playScene);

    return () => {
      sceneSubject.detach(playScene);
    };
  }, [isPlaying, duration, sceneSubject, sceneIsReady, audio, hasTimestamps]);

  useEffect(() => {
    return () => {
      if (startTimerRef.current) clearTimeout(startTimerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isEmpty(sortedCommands)) return;

    const resetScene = () => {
      usedCommandsRef.current.clear();
      pause();
      audioRef.current.currentTime = audio.startTimestamp || 0;
      setCurrentTime(0);
      setIsPlaying(false);
      isPlayingSceneRef.current = false;
      setShowDialogue(false);
      setDialogue(initDialogue);
      setCharacters(initCharacters);
      setBackground(initBackground);
    };

    sortedCommands.forEach((command, commandIndex) => {
      // Start command timeout
      if (
        currentTime > command.time &&
        !usedCommandsRef.current.has(commandIndex)
      ) {
        usedCommandsRef.current.add(commandIndex);
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
                isTalking: command.isTalking
              };
            }
            return character;
          });
          return newCharacters;
        });
      }
    });

    // an extra 500ms at the end to let the characters fade out (CSS transition
    const resetTime = sortedCommands.at(-1)!.time + 500;

    // TODO: this has to be _after_ the normalizedCommands.forEach, otherwise
    // the usedCommandsRef will be cleared and immediately refilled. This kind
    // of temporal coupling is a bit fragile.
    if (currentTime >= resetTime) {
      resetScene();
    }
  }, [
    currentTime,
    audio,
    audioTimestamp,
    sortedCommands,
    initCharacters,
    initBackground
  ]);

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
                  onClick={() => sceneSubject.notify()}
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
      <Spacer size='m' />
    </Col>
  );
}

Scene.displayName = 'Scene';

export default Scene;
