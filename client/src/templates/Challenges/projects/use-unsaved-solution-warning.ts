import { navigate } from 'gatsby';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [exitPathname, setExitPathname] = useState('');
  const exitConfirmed = useRef(false);

  const onWindowClose = useCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();
      window.confirm(t('misc.navigation-warning'));
    },
    [t]
  );

  const onHistoryChange = useCallback(
    (targetPathname: string): boolean => {
      if (exitConfirmed.current) {
        return false;
      }

      // For link clicks, save the target pathname. For the back button the
      // pathname is empty, so fall back to the learn map.
      if (targetPathname) {
        setExitPathname(targetPathname);
      }

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
