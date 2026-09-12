import { useEffect, useRef } from 'react';
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
  // The dummy history entry must be pushed at most once per mount, or every
  // re-arming of the hook would add another entry and the back button would
  // need one dead press per entry to leave the page.
  const hasPushedState = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('beforeunload', onWindowClose);
    if (!hasPushedState.current) {
      // Push a dummy state so that navigating back will restore the current
      // page, allowing us to manually handle navigation.
      window.history.pushState({}, curLocation.pathname);
      hasPushedState.current = true;
    }

    const handlePopState = () => {
      // The argument should be an empty string, so that onHistoryChange knows
      // to use the default navigation target
      onHistoryChange('');
    };

    window.addEventListener('popstate', handlePopState);

    const handleLinkClick = (event: MouseEvent) => {
      // Only intercept plain left-clicks that navigate the current tab.
      // Modified clicks (new tab, new window, download) and clicks on anchors
      // targeting another browsing context leave this page's state untouched,
      // so they must not be blocked.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;

      const anchor = (event.target as HTMLElement).closest('a');
      if (!anchor) return;
      if (anchor.target && anchor.target !== '_self') return;

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
