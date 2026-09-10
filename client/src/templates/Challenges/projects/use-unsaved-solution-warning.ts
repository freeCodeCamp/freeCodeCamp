import { navigate } from 'gatsby';
import { useCallback, useRef, useState } from 'react';

import { usePageLeave } from '../hooks';

interface Props {
  openExitProjectModal: () => void;
  closeExitProjectModal: () => void;
}

// Certification projects only persist the solution form when it is submitted,
// so campers who navigate away after typing a link lose it without warning.
export const useUnsavedSolutionWarning = ({
  openExitProjectModal,
  closeExitProjectModal
}: Props) => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [exitPathname, setExitPathname] = useState('');
  const exitConfirmed = useRef(false);

  const onWindowClose = useCallback((event: BeforeUnloadEvent) => {
    // Browsers show their own copy here and ignore ours, they only need the
    // default to be prevented to know the page should not be left silently.
    event.preventDefault();
    event.returnValue = '';
  }, []);

  const onHistoryChange = useCallback(
    (targetPathname: string): boolean => {
      if (exitConfirmed.current) {
        return false;
      }

      // Link clicks come with a target, the back button does not. Always store
      // it so a target left over from an earlier click is not reused.
      setExitPathname(targetPathname);

      openExitProjectModal();
      return true;
    },
    [openExitProjectModal]
  );

  usePageLeave({
    onWindowClose,
    onHistoryChange,
    enabled: hasUnsavedChanges
  });

  const confirmExit = () => {
    exitConfirmed.current = true;
    void navigate(exitPathname || '/learn', { replace: true });
    closeExitProjectModal();
  };

  return { onUnsavedChanges: setHasUnsavedChanges, confirmExit };
};
