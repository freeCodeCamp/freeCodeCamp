import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from '@freecodecamp/react-bootstrap';

import ga from '../../../analytics';
import { closeModal, isVideoModalOpenSelector } from '../redux';

import './video-modal.css';

const mapStateToProps = state => ({ isOpen: isVideoModalOpenSelector(state) });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeVideoModal: () => closeModal('video') }, dispatch);

const propTypes = {
  closeVideoModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  videoUrl: PropTypes.string
};

export class VideoModal extends Component {
  render() {
    const { isOpen, closeVideoModal, videoUrl } = this.props;
    if (isOpen) {
      ga.modalview('/video-modal');
    }
    return (
      <Modal
        dialogClassName='video-modal'
        onHide={closeVideoModal}
        show={isOpen}
        >
        <Modal.Header
          className='help-modal-header fcc-modal'
          closeButton={true}
          >
          <Modal.Title className='text-center'>Watch A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe frameBorder='0' src={videoUrl} title='Watch a video'/>
          <p>
            Tip: If the mini-browser is covering the code, click and drag to
            move it. Also, feel free to stop and edit the code in the video at
            any time.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

VideoModal.displayName = 'VideoModal';
VideoModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoModal);
