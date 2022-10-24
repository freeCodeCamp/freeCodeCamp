import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { mainPreviewId, scrollManager } from '../utils/frame';

import './preview.css';

interface PreviewProps {
  className?: string;
  disableIframe?: boolean;
  previewMounted: () => void;
  previewId?: string;
  isMobileLayout: boolean;
  withActionRow: boolean;
}

function Preview({
  disableIframe,
  previewMounted,
  previewId,
  isMobileLayout,
  withActionRow
}: PreviewProps): JSX.Element {
  const { t } = useTranslation();
  const [iframeStatus, setIframeStatus] = useState<boolean | undefined>(false);
  const iframeToggle = iframeStatus ? 'disable' : 'enable';

  useEffect(() => {
    previewMounted();
  }, [previewMounted]);

  useEffect(() => {
    setIframeStatus(disableIframe);
  }, [disableIframe]);

  useEffect(() => {
    return () => {
      scrollManager.setPreviewScrollPosition(0);
    };
  }, []);

  const id = previewId ?? mainPreviewId;

  return (
    <div
      className={
        `notranslate challenge-preview ${iframeToggle}-iframe` +
        (isMobileLayout ? ' mobileLayout' : '') +
        (withActionRow ? ' withActionRow' : '')
      }
    >
      <iframe
        className={
          'challenge-preview-frame' +
          (isMobileLayout ? ' mobileLayout' : '') +
          (withActionRow ? ' withActionRow' : '')
        }
        id={id}
        title={t('learn.chal-preview')}
      />
    </div>
  );
}

Preview.displayName = 'Preview';

export default Preview;
