import React, { useRef, useEffect } from 'react';
import { debounce } from 'lodash-es';
import { canSaveToDB } from '../../../../../shared-dist/config/challenge-types';

const INACTIVITY_DELAY = 6000;

interface AutoSaveProps {
  challengeType: number;
  isSignedIn: boolean;
  saveChallenge: () => void;
  saveEditorContent: () => void;
}

export const useAutoSave = ({
  challengeType,
  isSignedIn,
  saveChallenge,
  saveEditorContent
}: AutoSaveProps) => {
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);

  const saveInactive = React.useCallback(() => {
    if (canSaveToDB(challengeType) && isSignedIn) {
      saveChallenge();
    } else {
      saveEditorContent();
    }

    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = null;
    }
  }, [challengeType, isSignedIn, saveChallenge, saveEditorContent]);

  const startInactivityTimer = React.useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

    inactivityTimer.current = setTimeout(() => {
      saveInactive();
    }, INACTIVITY_DELAY);
  }, [saveInactive]);

  useEffect(() => {
    return () => {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, []);

  return React.useMemo(
    () => debounce(startInactivityTimer, 600),
    [startInactivityTimer]
  );
};
