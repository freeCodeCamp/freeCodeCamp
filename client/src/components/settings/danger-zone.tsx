import {
  Button,
  ButtonToolbar,
  SplitButton,
  MenuItem,
  Row,
  Col
} from '@freecodecamp/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { deleteAccount, resetProgress } from '../../redux/settings/actions';
import { FullWidthRow } from '../helpers';
import DeleteModal from './delete-modal';
import ResetModal from './reset-modal';

import './danger-zone.css';

type DangerZoneProps = {
  deleteAccount: () => void;
  resetProgress: () => void;
  t: TFunction;
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      deleteAccount,
      resetProgress
    },
    dispatch
  );

function DangerZone({ deleteAccount, resetProgress, t }: DangerZoneProps) {
  const [reset, setReset] = useState(false);
  const [delete_, setDelete] = useState(false);
  // delete is reserved

  function toggleResetModal(): void {
    setReset(prev => !prev);
  }

  function toggleDeleteModal(): void {
    setDelete(prev => !prev);
  }

  useEffect(() => window.scrollTo(0, document.body.scrollHeight - 1000), []);

  return (
    <Row className=''>
      <Col sm={8} smOffset={2} xs={12}>
        <p className='text-center text-danger mb-0 bg-light-danger py-1'>
          Danger Zone
        </p>
        <div className='danger-zone'>
          <FullWidthRow>
            <p className='text-center mb-0 text-danger'>
              {t('settings.danger.be-careful').split('. ')[0]}.
            </p>
            <p className='text-center text-danger'>
              {t('settings.danger.be-careful').split('. ')[1]}
            </p>

            <p className='h6'>
              To reset progress on an individual course, select it from the drop
              down.
            </p>

            <div className='d-flex justify-space-between'>
              <div className='flex-grow-2 pr-1'>
                <ButtonToolbar id='dropdown-size-medium'>
                  <SplitButton title='Select course'>
                    <MenuItem eventKey='1'>Responsive web design</MenuItem>
                  </SplitButton>
                </ButtonToolbar>
              </div>

              <div className='flex-grow-1 pl-1'>
                <Button
                  block={true}
                  bsStyle='danger'
                  className='btn-danger'
                  type='button'
                >
                  Reset progress
                </Button>
              </div>
            </div>

            <p className='mt-5 h6 text-left'>
              If you reset your progress, you will have to start the course from
              scratch.
            </p>
            <Button
              block={true}
              bsStyle='danger'
              className='btn-danger'
              onClick={toggleResetModal}
              type='button'
            >
              {t('settings.danger.reset')}
            </Button>

            <hr className='mt-5 hr' />

            <p className='mt-5 h6 text-left'>
              Beware! if you delete your account, you won&apos;t be able to
              recover it.
            </p>
            <Button
              block={true}
              bsStyle='danger'
              className='btn-danger'
              onClick={toggleDeleteModal}
              type='button'
            >
              {t('settings.danger.delete')}
            </Button>
          </FullWidthRow>
        </div>

        <ResetModal
          onHide={toggleResetModal}
          reset={resetProgress}
          show={reset}
        />
        <DeleteModal
          delete={deleteAccount}
          onHide={toggleDeleteModal}
          show={delete_}
        />
      </Col>
    </Row>
  );
}

DangerZone.displayName = 'DangerZone';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DangerZone));
