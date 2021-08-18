import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React, { useState } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { deleteAccount, resetProgress } from '../../redux/settings';
import { FullWidthRow, ButtonSpacer, Spacer } from '../helpers';
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

  return (
    <div className='danger-zone text-center'>
      <FullWidthRow>
        <Panel bsStyle='danger'>
          <Panel.Heading>{t('settings.danger.heading')}</Panel.Heading>
          <Spacer />
          <p>{t('settings.danger.be-careful')}</p>
          <FullWidthRow>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='danger'
              className='btn-danger'
              onClick={toggleResetModal}
              type='button'
            >
              {t('settings.danger.reset')}
            </Button>
            <ButtonSpacer />
            <Button
              block={true}
              bsSize='lg'
              bsStyle='danger'
              className='btn-danger'
              onClick={toggleDeleteModal}
              type='button'
            >
              {t('settings.danger.delete')}
            </Button>
            <Spacer />
          </FullWidthRow>
        </Panel>

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
      </FullWidthRow>
    </div>
  );
}

DangerZone.displayName = 'DangerZone';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DangerZone));
