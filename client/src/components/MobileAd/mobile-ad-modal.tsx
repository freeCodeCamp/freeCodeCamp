import { Modal } from '@freecodecamp/react-bootstrap';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './mobile-ad-modal.css';

function getOS() {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}
function MobileAdShow(): JSX.Element {
  const [show, setShow] = useState(true);
  /* eslint-disable no-nested-ternary */
  const os = getOS();
  const { t } = useTranslation();
  function close() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('firstTime', 'true');
    }
    setShow(false);
  }
  return (
    <>
      {(os === 'iOS' || os === 'Android') && (
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
          <Modal.Body className='mobile-ad-modal-body'>
            {t('landing.mobile-ad-body', {
              os: os
            })}
            <a
              href='https://www.freecodecamp.org/news/freecodecamp-mobile/'
              style={{ fontSize: 11 }}
            >
              https://www.freecodecamp.org/news/freecodecamp-mobile/
            </a>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

MobileAdShow.show = true;

export default MobileAdShow;
