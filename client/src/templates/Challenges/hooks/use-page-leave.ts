import { useEffect } from 'react';
import { useLocation, globalHistory } from '@gatsbyjs/reach-router';

interface Props {
  onWindowClose: (event: BeforeUnloadEvent) => void;
  onHistoryChange: (targetPathname: string) => boolean;
}

export const usePageLeave = ({ onWindowClose, onHistoryChange }: Props) => {
  const curLocation = useLocation();

  useEffect(() => {
    window.addEventListener('beforeunload', onWindowClose);

    // Intercept link clicks to catch Gatsby v5 Link navigation,
    // which doesn't go through reach-router's globalHistory.
    const handleLinkClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      if (href === curLocation.pathname) return;

      const blocked = onHistoryChange(href);
      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener('click', handleLinkClick, true);

    // This is a workaround as @gatsbyjs/reach-router doesn't support blocking history change.
    // https://github.com/reach/router/issues/464
    const unlistenHistory = globalHistory.listen(({ action, location }) => {
      const isBack = action === 'POP';
      const isRouteChanged =
        action === 'PUSH' && location.pathname !== curLocation.pathname;

      if (isBack || isRouteChanged) {
        onHistoryChange(location.pathname);
      }
    });

    return () => {
      window.removeEventListener('beforeunload', onWindowClose);
      document.removeEventListener('click', handleLinkClick, true);
      unlistenHistory();
    };
  }, [onWindowClose, onHistoryChange, curLocation]);
};
