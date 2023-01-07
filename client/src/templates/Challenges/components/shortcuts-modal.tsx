import React from 'react';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { closeModal } from '../redux/actions';
import { isShortcutsModalOpenSelector } from '../redux/selectors';
import { updateMyKeyboardShortcuts } from '../../../redux/settings/actions';
import { userSelector } from '../../../redux/selectors';
import { User } from '../../../redux/prop-types';
import KeyboardShortcutsSettings from '../../../components/settings/keyboard-shortcuts';

import './shortcuts-modal.css';

interface ShortcutsModalProps {
  closeShortcutsModal: () => void;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  isOpen: boolean;
  t: (text: string) => string;
  user: User;
}

const mapStateToProps = createSelector(
  isShortcutsModalOpenSelector,
  userSelector,
  (isOpen: boolean, user: User) => ({ isOpen, user })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeShortcutsModal: () => closeModal('shortcuts'),
      toggleKeyboardShortcuts: (keyboardShortcuts: boolean) =>
        updateMyKeyboardShortcuts({ keyboardShortcuts })
    },
    dispatch
  );

function ShortcutsModal({
  closeShortcutsModal,
  toggleKeyboardShortcuts,
  isOpen,
  t,
  user: { keyboardShortcuts }
}: ShortcutsModalProps): JSX.Element {
  return (
    <Modal
      dialogClassName='shortcuts-modal'
      onHide={closeShortcutsModal}
      show={isOpen}
      aria-labelledby='shortcuts-modal-title'
    >
      <Modal.Header className='shortcuts-modal-header fcc-modal'>
        <Modal.Title
          id='shortcuts-modal-title'
          className='text-center'
          componentClass='h1'
        >
          {t('shortcuts.title')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='shortcuts-modal-body'>
        <table>
          <thead>
            <tr>
              <th scope='col'>{t('shortcuts.table-header-action')}</th>
              <th scope='col'>{t('shortcuts.table-header-key')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('shortcuts.navigation-mode')}</td>
              <td>ESC</td>
            </tr>
            <tr>
              <td>{t('shortcuts.execute-challenge')}</td>
              <td>CTRL/Command + Enter</td>
            </tr>
            <tr>
              <td>{t('shortcuts.focus-editor')}</td>
              <td>e</td>
            </tr>
            <tr>
              <td>{t('shortcuts.focus-instructions-panel')}</td>
              <td>r</td>
            </tr>
            <tr>
              <td>{t('shortcuts.navigate-previous')}</td>
              <td>p</td>
            </tr>
            <tr>
              <td>{t('shortcuts.navigate-next')}</td>
              <td>n</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <KeyboardShortcutsSettings
          keyboardShortcuts={keyboardShortcuts}
          toggleKeyboardShortcuts={toggleKeyboardShortcuts}
        />
        <Button
          block={true}
          bsSize='sm'
          bsStyle='primary'
          onClick={closeShortcutsModal}
        >
          {t('buttons.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ShortcutsModal.displayName = 'ShortcutsModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShortcutsModal));
