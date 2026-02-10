import { useEffect, useRef } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';

interface Props {
  onWindowClose: (event: BeforeUnloadEvent) => void;
  onHistoryChange: (targetPathname: string) => boolean;
}

export const usePageLeave = ({ onWindowClose, onHistoryChange }: Props) => {
  const curLocation = useLocation();
  const sentinelActive = useRef(false);

  useEffect(() => {
    window.history.pushState({ __sentinel: true }, '');
    sentinelActive.current = true;
    return () => {
      sentinelActive.current = false;
    };
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', onWindowClose);

    const handlePopState = () => {
      if (!sentinelActive.current) return;

      const blocked = onHistoryChange('');
      if (blocked) {
        window.history.pushState({ __sentinel: true }, '');
      } else {
        sentinelActive.current = false;
        window.history.back();
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
  }, [onWindowClose, onHistoryChange, curLocation]);
};
