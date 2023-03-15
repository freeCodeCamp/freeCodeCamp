import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React, { useState } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { deleteAccount, resetProgress } from '../../redux/settings/actions';
import { FullWidthRow, Spacer } from '../helpers';
import DeleteModal from './delete-modal';
import ResetModal from './reset-modal';

import './danger-zone.css';

interface DangerZoneProps {
  deleteAccount: () => void;
  resetProgress: () => void;
  t: TFunction;
}

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
    <FullWidthRow className='danger-zone text-center'>
      <Panel bsStyle='danger'>
        <Panel.Heading>{t('settings.danger.heading')}</Panel.Heading>
        <Spacer size='medium' />
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
          <Spacer size='small' />
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
          <Spacer size='medium' />
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
  );
}

DangerZone.displayName = 'DangerZone';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DangerZone));
