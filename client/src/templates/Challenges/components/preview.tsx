import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { mainPreviewId, scrollManager } from '../utils/frame';
import Loader from '../../../components/helpers/loader';
import { isIframeLoadedSelector } from '../redux/selectors';

import './preview.css';

export interface PreviewProps {
  className?: string;
  disableIframe?: boolean;
  previewMounted: () => void;
  previewId?: string;
  isIframeLoaded: boolean;
}

const mapStateToProps = (state: unknown) => ({
  isIframeLoaded: isIframeLoadedSelector(state) as boolean
});

function Preview({
  disableIframe,
  previewMounted,
  previewId,
  isIframeLoaded
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
    <div className={`notranslate challenge-preview ${iframeToggle}-iframe`}>
      {!isIframeLoaded && (
        <div className={'loader-wrapper'}>
          <Loader fullScreen={false} />
        </div>
      )}
      <iframe
        className={'challenge-preview-frame'}
        id={id}
        title={t('learn.chal-preview')}
      />
    </div>
  );
}

Preview.displayName = 'Preview';

export default connect(mapStateToProps)(Preview);
