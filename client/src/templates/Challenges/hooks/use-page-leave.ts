import { useEffect } from 'react';
import { useLocation, globalHistory } from '@reach/router';

interface Props {
  onWindowClose: (event: BeforeUnloadEvent) => void;
  onHistoryChange: () => void;
  depArr: Array<unknown>;
}

export const usePageLeave = ({
  onWindowClose,
  onHistoryChange,
  depArr
}: Props) => {
  const curLocation = useLocation();

  useEffect(() => {
    window.addEventListener('beforeunload', onWindowClose);

    const unlistenHistory = globalHistory.listen(({ action, location }) => {
      const isBack = action === 'POP';
      const isRouteChanged =
        action === 'PUSH' && location.pathname !== curLocation.pathname;

      if (isBack || isRouteChanged) {
        onHistoryChange();
      }
    });

    return () => {
      window.removeEventListener('beforeunload', onWindowClose);
      unlistenHistory();
    };
    // This hook should only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depArr);
};
