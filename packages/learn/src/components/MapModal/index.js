import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal } from 'react-bootstrap';

import { ChallengeNode } from '../../redux/propTypes';
import Map from '../Map';
import { toggleMapModal, isMapModalOpenSelector } from '../../redux/app';

import Spacer from '../util/Spacer';

import './map-modal.css';

const mapStateToProps = createSelector(isMapModalOpenSelector, show => ({
  show
}));

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMapModal }, dispatch);

const propTypes = {
  nodes: PropTypes.arrayOf(ChallengeNode),
  show: PropTypes.bool,
  toggleMapModal: PropTypes.func.isRequired
};

function MapModal({ nodes, show, toggleMapModal }) {
  return (
    <Modal
      bsSize='lg'
      className='map-modal'
      onHide={toggleMapModal}
      show={show}
      >
      <Modal.Header className='map-modal-header fcc-modal' closeButton={true}>
        <Modal.Title className='text-center'>
          A Map to Learn to Code
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Spacer />
        <Map nodes={nodes} />
        <Spacer />
      </Modal.Body>
    </Modal>
  );
}

MapModal.displayName = 'MapModal';
MapModal.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(MapModal);
