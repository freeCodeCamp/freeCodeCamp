import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import store from 'store';

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

const STORE_KEY = 'mobileAppModalDismissedAt';
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

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

function isDismissedFor30Days(): boolean {
  const dismissedAt = store.get(STORE_KEY) as number | undefined;
  if (!dismissedAt) return false;
  return Date.now() - dismissedAt < THIRTY_DAYS_MS;
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
  const [dismissed, setDismissed] = useState(isDismissedFor30Days);

  // Defer rendering until after the first browser paint. On a direct page
  // load the component hydrates before the browser has computed layout, so
  // document.documentElement.clientWidth is 0. The Modal's scroll-lock
  // utility calculates the scrollbar compensation as
  // window.innerWidth - clientWidth, which produces window.innerWidth when
  // clientWidth is 0, and stamps that value as padding-right on <html>,
  // breaking the layout. Waiting for useEffect guarantees that layout has
  // been computed before the modal (and its scroll-lock) opens.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isProjectPreviewOpen) setDismissed(true);
  }, [isProjectPreviewOpen]);

  const dismiss = () => setDismissed(true);

  const dismissPermanently = () => {
    store.set(STORE_KEY, Date.now());
    setDismissed(true);
  };

  const storeUrl = os === 'ios' ? IOS_URL : ANDROID_URL;
  const storeName =
    os === 'ios' ? t('mobile-app-modal.ios') : t('mobile-app-modal.android');

  if (
    !mounted ||
    os === 'other' ||
    !isAvailable ||
    isProjectPreviewOpen ||
    dismissed
  )
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
        <Button block={true} variant='info' onClick={dismissPermanently}>
          {t('mobile-app-modal.do-not-show')}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default MobileAppModal;
