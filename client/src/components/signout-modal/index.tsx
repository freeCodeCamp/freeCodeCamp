import React from 'react';
import { Modal } from '@freecodecamp/react-bootstrap';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

import { Spacer } from '../helpers';
import { hardGoTo as navigate, closeSignoutModal } from '../../redux/actions';
import { isSignoutModalOpenSelector } from '../../redux/selectors';
import { apiLocation } from '../../../config/env.json';

const mapStateToProps = createSelector(
  isSignoutModalOpenSelector,
  (show: boolean) => ({
    show
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      navigate,
      closeSignoutModal
    },
    dispatch
  );

type SignoutModalProps = {
  navigate: (path: string) => void;
  closeSignoutModal: () => void;
  show: boolean;
};

function SignoutModal(props: SignoutModalProps): JSX.Element {
  const { show, closeSignoutModal, navigate } = props;
  const { t } = useTranslation();

  const handleModalHide = () => {
    closeSignoutModal();
  };

  const handleSignout = () => {
    closeSignoutModal();
    navigate(`${apiLocation}/signout`);
  };

  return (
    <Modal
      aria-labelledby='modal-title'
      backdrop={true}
      bsSize='lg'
      className='text-center'
      keyboard={true}
      onHide={handleModalHide}
      onClose={handleModalHide}
      show={show}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='modal-title' bsSize='lg'>
          <span style={{ fontWeight: 'bold' }}>{t('signout.heading')}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span style={{ fontWeight: 'bold' }}>{t('signout.p1')}</span>
        </p>
        <p>{t('signout.p2')}</p>
        <hr />
        <Button
          block={true}
          variant='primary'
          data-test-label='cancel-signout'
          onClick={handleModalHide}
        >
          {t('signout.nevermind')}
        </Button>
        <Spacer size='small' />
        <Button
          block={true}
          variant='danger'
          data-test-label='signout'
          onClick={handleSignout}
        >
          {t('signout.certain')}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

SignoutModal.displayName = 'SignoutModal';

export default connect(mapStateToProps, mapDispatchToProps)(SignoutModal);
