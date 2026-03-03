import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import store from 'store';

import { MAX_MOBILE_WIDTH } from '../../../../config/misc';
import appleStoreBadge from '../../../assets/images/footer-ads/apple-store-badge.svg';
import googlePlayBadge from '../../../assets/images/footer-ads/google-play-badge.svg';

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

  // Only show until the user explicitly clicks "Do not show me again"
  const [show, setShow] = useState(!store.get(STORE_KEY));

  if (!isMobile || !isAvailable) return null;

  const handleClose = () => setShow(false);

  const handleDoNotShow = () => {
    store.set(STORE_KEY, true);
    setShow(false);
  };

  return (
    <Modal onClose={handleClose} open={show} size='large'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        <span style={{ fontWeight: 'bold' }}>
          {t('mobile-app-modal.heading')}
        </span>
      </Modal.Header>
      <Modal.Body>
        <p>{t('mobile-app-modal.body')}</p>
        <Spacer size='s' />
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a
            href='https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200'
            rel='noreferrer'
            target='_blank'
            style={{ flex: 1 }}
          >
            <img
              src={appleStoreBadge}
              lang='en'
              alt={t('mobile-app-modal.ios')}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=org.freecodecamp'
            rel='noreferrer'
            target='_blank'
            style={{ flex: 1 }}
          >
            <img
              src={googlePlayBadge}
              lang='en'
              alt={t('mobile-app-modal.android')}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </a>
        </div>
        <Spacer size='s' />
        <Button block={true} onClick={handleDoNotShow}>
          {t('mobile-app-modal.do-not-show')}
        </Button>
        <Spacer size='xs' />
      </Modal.Body>
    </Modal>
  );
}

export default MobileAppModal;
