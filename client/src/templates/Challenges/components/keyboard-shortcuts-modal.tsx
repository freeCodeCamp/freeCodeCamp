/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Convert sharable components to TypeScript to resolve this */
/* eslint-disable @typescript-eslint/no-unsafe-return -- Convert the redux layer to TypeScript to resolve this */
/* eslint-disable @typescript-eslint/no-unsafe-call -- Upgrade react-redux and use `useDispatch` to resolve this */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation, Trans } from 'react-i18next';

import { Modal, Button, Col, Row } from '@freecodecamp/react-bootstrap';

import { closeModal, isKeyboardShortcutsModalOpenSelector } from '../redux';

interface PropsFromState {
  isOpen: boolean;
}

interface PropsFromDispatch {
  close: () => void;
}

type KeyboardShortcutsModalProps = PropsFromDispatch & PropsFromState;

const mapStateToProps = createSelector(
  isKeyboardShortcutsModalOpenSelector,
  (isOpen): PropsFromState => ({ isOpen })
);

const mapDispatchToProps = (dispatch): PropsFromDispatch => ({
  close: () => dispatch(closeModal('keyboardShortcuts'))
});

const keys = {
  ctrl: 'Ctrl',
  enter: 'Enter',
  f1: 'F1',
  s: 'S'
};

const KeyboardShortcutsModal = ({
  isOpen,
  close
}: KeyboardShortcutsModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal bsSize='lg' className='donation-modal' show={isOpen}>
      <Modal.Header closeButton={true}>
        <Modal.Title>{t('learn.keyboard-shortcuts-modal-header')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={8} smOffset={2} xs={8} xsOffset={2}>
            <ul>
              <li>
                <Trans
                  i18nKey='learn.keyboard-shortcuts-run-tests'
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  key1={keys.ctrl}
                  key2={keys.enter}
                >
                  <span>placeholder</span>
                  <kbd>{{ key1: keys.ctrl }}</kbd>
                  <span>placeholder</span>
                  <kbd>{{ key2: keys.enter }}</kbd>
                </Trans>
              </li>
              <li>
                <Trans
                  i18nKey='learn.keyboard-shortcuts-save-editor-content'
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  key1={keys.ctrl}
                  key2={keys.s}
                >
                  <span>placeholder</span>
                  <kbd>{{ key1: keys.ctrl }}</kbd>
                  <span>placeholder</span>
                  <kbd>{{ key2: keys.s }}</kbd>
                </Trans>
              </li>
              <li>
                <Trans
                  i18nKey='learn.keyboard-shortcuts-toggle-accessibility-support'
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  key1={keys.ctrl}
                  key2={keys.f1}
                >
                  <span>placeholder</span>
                  <kbd>{{ key1: keys.ctrl }}</kbd>
                  <span>+</span>
                  <kbd>{{ key2: keys.f1 }}</kbd>
                </Trans>
              </li>
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
};

KeyboardShortcutsModal.displayName = 'KeyboardShortcutsModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardShortcutsModal);
