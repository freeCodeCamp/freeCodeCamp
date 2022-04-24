import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { closeModal, isShortcutsModalOpenSelector } from '../redux';

import './shortcuts-modal.css';

interface ShortcutsModalProps {
  closeShortcutsModal: () => void;
  isOpen?: boolean;
  t: (text: string) => string;
}

const mapStateToProps = (state: unknown) => ({
  isOpen: isShortcutsModalOpenSelector(state) as boolean
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { closeShortcutsModal: () => closeModal('shortcuts') },
    dispatch
  );

export function ShortcutsModal({
  closeShortcutsModal,
  isOpen,
  t
}: ShortcutsModalProps): JSX.Element {
  return (
    <Modal
      dialogClassName='shortcuts-modal'
      onHide={closeShortcutsModal}
      show={isOpen}
      aria-labelledby='shortcuts-modal-title'
    >
      <Modal.Header
        className='shortcuts-modal-header fcc-modal'
        closeButton={true}
        closeLabel={t('buttons.close')}
      >
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
        <Button
          block={true}
          bsSize='sm'
          bsStyle='primary'
          onClick={closeShortcutsModal}
        >
          {t('buttons.close')}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

ShortcutsModal.displayName = 'ShortcutsModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShortcutsModal));
