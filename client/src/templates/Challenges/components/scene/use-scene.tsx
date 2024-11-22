import { useEffect, useRef, useState } from 'react';

import type { Dialogue, FullScene } from '../../../../redux/prop-types';
import { sounds, backgrounds, characterAssets } from './scene-assets';

type Args = {
  scene: FullScene;
  isPlaying: boolean;
  setIsPlaying: (shouldPlay: boolean) => void;
};

const loadImage = (src: string | null) => {
  if (src) new Image().src = src;
};

const sToMs = (n: number) => {
  return n * 1000;
};

export function useScene({ scene, isPlaying, setIsPlaying }: Args) {
  const { setup, commands } = scene;
  const { audio, alwaysShowDialogue } = setup;
  const { startTimestamp = null, finishTimestamp = null } = audio;

  const initBackground = setup.background;
  const initDialogue = { label: '', text: '', align: 'left' as const };
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
  const [dialogue, setDialogue] = useState<Dialogue>(initDialogue);
  const [background, setBackground] = useState(initBackground);

  let start = 0;
  let stopAudio = false;

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
    const audioLoaded = () => {
      setSceneIsReady(true);
    };
    const { current } = audioRef;

    if (current) {
      current.addEventListener('canplaythrough', audioLoaded);
      current.src = `${sounds}/${audio.filename}${audioTimestamp}`;
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
    setSceneIsReady,
    audioRef,
    audio.filename,
    audioTimestamp,
    setup.background,
    setup.characters,
    commands
  ]);

  useEffect(() => {
    if (isPlaying) {
      playScene();
    } else {
      resetScene();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

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

  const resetScene = () => {
    const { current } = audioRef;
    if (current) {
      current.pause();
      current.src = `${sounds}/${audio.filename}${audioTimestamp}`;
      current.load();
      current.currentTime = audio.startTimestamp || 0;
    }

    setShowDialogue(false);
    setDialogue(initDialogue);
    setCharacters(initCharacters);
    setBackground(initBackground);
  };

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

  return {
    accessibilityOn,
    background,
    characters,
    dialogue,
    sceneIsReady,
    alwaysShowDialogue,
    setAccessibilityOn,
    showDialogue
  };
}
