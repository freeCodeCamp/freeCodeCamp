import { Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { closeModal } from '../redux/actions';
import { isVideoModalOpenSelector } from '../redux/selectors';
import callGA from '../../../analytics/call-ga';

import './video-modal.css';

interface VideoModalProps {
  closeVideoModal: () => void;
  isOpen?: boolean;
  t: (attribute: string) => string;
  videoUrl?: string;
}

const mapStateToProps = (state: unknown) => ({
  isOpen: isVideoModalOpenSelector(state) as boolean
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ closeVideoModal: () => closeModal('video') }, dispatch);

function VideoModal({
  closeVideoModal,
  isOpen,
  t,
  videoUrl
}: VideoModalProps): JSX.Element {
  if (isOpen) {
    callGA({ event: 'pageview', pagePath: '/completion-modal' });
  }
  return (
    <Modal dialogClassName='video-modal' onHide={closeVideoModal} show={isOpen}>
      <Modal.Header className='video-modal-header fcc-modal' closeButton={true}>
        <Modal.Title
          className='text-center'
          data-playwright-test-label='video-modal-title'
        >
          {t('buttons.watch-video')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='video-modal-body'>
        <iframe
          data-playwright-test-label='video-modal-video-player-iframe'
          frameBorder='0'
          src={videoUrl}
          title={t('buttons.watch-video')}
        />
        <p>{t('learn.scrimba-tip')}</p>
      </Modal.Body>
    </Modal>
  );
}

VideoModal.displayName = 'VideoModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(VideoModal));
