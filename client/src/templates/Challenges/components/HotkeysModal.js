import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from '@freecodecamp/react-bootstrap';
import { createSelector } from 'reselect';
import { getApplicationKeyMap, ObserveKeys } from 'react-hotkeys';
import { closeModal, isHotkeysModalOpenSelector } from '../redux';

import './hotkeys-modal.css';

const propTypes = {
  close: PropTypes.func.isRequired,
  // executeGA: PropTypes.func,
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = createSelector(
  isHotkeysModalOpenSelector,
  isOpen => ({
    isOpen
  })
);

const mapDispatchToProps = {
  close: () => closeModal('hotkeys')
};

class HotkeysModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  render() {
    const { close, isOpen } = this.props;
    const { filter } = this.state;
    const keyMap = getApplicationKeyMap();
    if (keyMap['FOCUS_SEARCH']) {
      throw Error('Hotkey clashing with Focus Search');
    } else {
      keyMap.FOCUS_SEARCH = {
        sequences: [{ sequence: 's' }],
        name: 'Focus search'
      };
    }

    const _filter = filter.toUpperCase();
    return (
      <Modal
        animation={false}
        dialogClassName='hotkeys-modal'
        keyboard={true}
        onHide={close}
        show={isOpen}
      >
        <Modal.Header className='hotkeys-modal-header' closeButton={true}>
          <Modal.Title className='text-center'>Keyboard shortcuts</Modal.Title>
        </Modal.Header>
        <Modal.Body className='hotkeys-modal-body'>
          <ObserveKeys only={'Escape'}>
            <input
              onChange={({ target: { value } }) =>
                this.setState({ filter: value })
              }
              placeholder='Filter'
              value={filter}
            />
          </ObserveKeys>
          <div className='column-titles'>
            <div>Action</div>
            <div>Shortcut</div>
          </div>

          <div className='description-container'>
            {Object.keys(keyMap).reduce((memo, actionName) => {
              const { sequences, name } = keyMap[actionName];
              if (
                filter.length === 0 ||
                name.toUpperCase().indexOf(_filter) !== -1
              ) {
                const commaSeparatedSequences = sequences.flatMap(
                  ({ sequence }) => [
                    <span key={sequence}>{sequence}</span>,
                    <span key={sequence + 'comma'}>, </span>
                  ]
                );
                // remove trailing comma
                commaSeparatedSequences.pop();
                memo.push(
                  <>
                    <div
                      className='hotkey-description'
                      key={name || actionName}
                    >
                      {name}
                    </div>
                    <div
                      className='hotkey-description'
                      key={name + 'seq' || actionName + 'seq'}
                    >
                      <div>{commaSeparatedSequences}</div>
                    </div>
                  </>
                );
              }
              return memo;
            }, [])}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

HotkeysModal.displayName = 'HotkeysModal';
HotkeysModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotkeysModal);
