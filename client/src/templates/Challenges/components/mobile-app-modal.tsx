import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import store from 'store';

import { MAX_MOBILE_WIDTH } from '../../../../config/misc';

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

const STORE_KEY = 'hideMobileAppModal';

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
  const isMobile = useMediaQuery({
    query: `(max-width: ${MAX_MOBILE_WIDTH}px)`
  });
  const isAvailable = mobileAvailableSuperBlocks.has(superBlock);

  const [show, setShow] = useState(!store.get(STORE_KEY));

  if (!isMobile || !isAvailable) return null;

  const dismiss = () => {
    store.set(STORE_KEY, true);
    setShow(false);
  };

  const os = detectOS();
  const storeUrl = os === 'ios' ? IOS_URL : ANDROID_URL;
  const storeName =
    os === 'ios' ? t('mobile-app-modal.ios') : t('mobile-app-modal.android');

  return (
    <Modal onClose={dismiss} open={show} size='large'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        <span style={{ fontWeight: 'bold' }}>
          {t('mobile-app-modal.heading')}
        </span>
      </Modal.Header>
      <Modal.Body>
        <p>{t('mobile-app-modal.body')}</p>
        <Spacer size='s' />
        <Button block={true} href={storeUrl} target='_blank' onClick={dismiss}>
          {os === 'other' ? t('mobile-app-modal.open-app') : storeName}
        </Button>
        <Spacer size='xs' />
      </Modal.Body>
    </Modal>
  );
}

export default MobileAppModal;
