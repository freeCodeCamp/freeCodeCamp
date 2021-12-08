import { Modal } from '@freecodecamp/react-bootstrap';
import Bowser from 'bowser';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './mobile-ad-modal.css';

function MobileAd(): JSX.Element {
  const [show, setShow] = useState(true);
  const os = Bowser.getParser(window.navigator.userAgent).getOSName();
  const { t } = useTranslation();

  function close() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('firstTime', 'true');
    }
    setShow(false);
  }
  return (
    <>
      {os === 'Android' && (
        <Modal
          animation={false}
          bsSize='lg'
          dialogClassName='challenge-success-modal'
          keyboard={true}
          onHide={close}
          show={show}
        >
          <Modal.Header
            className='challenge-list-header fcc-modal'
            closeButton={true}
          >
            <Modal.Title className='completion-message'>
              {t('landing.mobile-ad-title', {
                os: os
              })}
            </Modal.Title>
          </Modal.Header>
          {os === 'Android' && (
            <Modal.Body className='mobile-ad-modal-body'>
              {t('landing.mobile-ad-body-android', {
                os: os
              })}
              <a
                href='https://www.freecodecamp.org/news/freecodecamp-mobile/'
                style={{ fontSize: 11 }}
              >
                https://www.freecodecamp.org/news/freecodecamp-mobile/
              </a>
            </Modal.Body>
          )}
        </Modal>
      )}
    </>
  );
}

export default MobileAd;
//eslint-disable-next-line import/unambiguous
