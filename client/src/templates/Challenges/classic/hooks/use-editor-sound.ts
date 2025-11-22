import { useRef, useEffect } from 'react';
import store from 'store';
import { editorToneOptions } from '../../../../utils/tone/editor-config';
import { editorNotes } from '../../../../utils/tone/editor-notes';

interface EditorSoundPlayer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sampler: any;
  noteIndex: number;
  shouldPlay: boolean | undefined;
}

interface UseEditorSoundReturn {
  playerRef: React.MutableRefObject<EditorSoundPlayer>;
  playNote: () => void;
}

export const useEditorSound = (): UseEditorSoundReturn => {
  const playerRef = useRef<EditorSoundPlayer>({
    sampler: undefined,
    noteIndex: 0,
    shouldPlay: store.get('fcc-sound') as boolean | undefined
  });

  useEffect(() => {
    if (playerRef.current.shouldPlay && !playerRef.current.sampler) {
      void import('tone').then(tone => {
        const newSound = new tone.Sampler(editorToneOptions).toDestination();
        playerRef.current.sampler = newSound;

        const storedVolume = (store.get('soundVolume') as number) ?? 50;
        const calculateDecibel = -60 * (1 - storedVolume / 100);

        newSound.volume.value = calculateDecibel;
      });
    }
  }, []);

  const playNote = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (playerRef.current.sampler?.loaded && playerRef.current.shouldPlay) {
      void import('tone').then(tone => {
        if (tone.context.state !== 'running') void tone.context.resume();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        playerRef.current.sampler?.triggerAttack(
          editorNotes[playerRef.current.noteIndex]
        );
        playerRef.current.noteIndex++;
        if (playerRef.current.noteIndex >= editorNotes.length) {
          playerRef.current.noteIndex = 0;
        }
      });
    }
  };

  return {
    playerRef,
    playNote
  };
};
