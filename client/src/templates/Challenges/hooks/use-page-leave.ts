import { useEffect } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';

interface Props {
  onWindowClose: (event: BeforeUnloadEvent) => void;
  onHistoryChange: (targetPathname: string) => boolean;
  enabled?: boolean;
}

export const usePageLeave = ({
  onWindowClose,
  onHistoryChange,
  enabled = true
}: Props) => {
  const curLocation = useLocation();

  useEffect(() => {
    // Pushing the dummy state below takes over the back button, so we only do
    // it while there is actually something to guard against losing.
    if (!enabled) return;

    window.addEventListener('beforeunload', onWindowClose);
    // Push a dummy state so that navigating back will restore the current page,
    // allowing us to manually handle navigation.
    window.history.pushState({}, curLocation.pathname);

    const handlePopState = () => {
      // The argument should be an empty string, so that onHistoryChange knows
      // to use the default navigation target
      const blocked = onHistoryChange('');
      // Going back consumes the dummy state, so put it back while we are still
      // blocking. Without this only the first back press is guarded.
      if (blocked) {
        window.history.pushState({}, curLocation.pathname);
      }
    };

    window.addEventListener('popstate', handlePopState);

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

    return () => {
      window.removeEventListener('beforeunload', onWindowClose);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [onWindowClose, onHistoryChange, curLocation, enabled]);
};
