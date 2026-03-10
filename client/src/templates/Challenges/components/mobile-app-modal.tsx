import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import { isProjectPreviewModalOpenSelector } from '../redux/selectors';

// Superblocks that are available in the freeCodeCamp mobile app.
// Only includes non-legacy public superblocks from orderedSuperBlockInfo
// (client/tools/external-curriculum/build-external-curricula-data-v2.ts).
const mobileAvailableSuperBlocks = new Set<string>([
  SuperBlocks.RespWebDesignV9,
  SuperBlocks.JsV9,
  SuperBlocks.PythonV9,
  SuperBlocks.A2English,
  SuperBlocks.B1English,
  SuperBlocks.A1Spanish,
  SuperBlocks.TheOdinProject
]);

const IOS_URL =
  'https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200';
const ANDROID_URL =
  'https://play.google.com/store/apps/details?id=org.freecodecamp';

function detectOS(): 'ios' | 'android' | 'other' {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'other';
}

interface MobileAppModalProps {
  superBlock: string;
}

function MobileAppModal({
  superBlock
}: MobileAppModalProps): JSX.Element | null {
  const { t } = useTranslation();
  const isAvailable = mobileAvailableSuperBlocks.has(superBlock);
  const isProjectPreviewOpen = useSelector<unknown, boolean>(
    isProjectPreviewModalOpenSelector
  );

  const os = detectOS();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (isProjectPreviewOpen) setDismissed(true);
  }, [isProjectPreviewOpen]);

  const dismiss = () => {
    setDismissed(true);
  };

  const storeUrl = os === 'ios' ? IOS_URL : ANDROID_URL;
  const storeName =
    os === 'ios' ? t('mobile-app-modal.ios') : t('mobile-app-modal.android');

  if (os === 'other' || !isAvailable || isProjectPreviewOpen || dismissed)
    return null;

  return (
    <Modal onClose={dismiss} open={true} size='large'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        <span style={{ fontWeight: 'bold' }}>
          {t('mobile-app-modal.heading')}
        </span>
      </Modal.Header>
      <Modal.Body>
        <p>{t('mobile-app-modal.body')}</p>
        <Spacer size='s' />
        <Button block={true} href={storeUrl} target='_blank' onClick={dismiss}>
          {storeName}
        </Button>
        <Spacer size='xs' />
      </Modal.Body>
    </Modal>
  );
}

export default MobileAppModal;
