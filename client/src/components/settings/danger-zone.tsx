import React, { useState } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { Panel, Button, Spacer } from '@freecodecamp/ui';

import { deleteAccount, resetProgress } from '../../redux/settings/actions';
import { FullWidthRow } from '../helpers';
import DeleteModal from './delete-modal';
import ResetModal from './reset-modal';

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
    <FullWidthRow className='text-center'>
      <Panel variant='danger' id='danger-zone'>
        <Panel.Heading>
          <h2 className='settings-danger-zone-heading'>
            {t('settings.danger.heading')}
          </h2>
        </Panel.Heading>
        <Spacer size='m' />
        <p>{t('settings.danger.be-careful')}</p>
        <FullWidthRow>
          <Button
            block={true}
            size='large'
            variant='danger'
            onClick={toggleResetModal}
            type='button'
          >
            {t('settings.danger.reset')}
          </Button>
          <Spacer size='xs' />
          <Button
            block={true}
            size='large'
            variant='danger'
            onClick={toggleDeleteModal}
            type='button'
          >
            {t('settings.danger.delete')}
          </Button>
          <Spacer size='m' />
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
