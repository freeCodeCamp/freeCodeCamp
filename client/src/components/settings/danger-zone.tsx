import React, { Component } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Panel } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TFunction, withTranslation } from 'react-i18next';
import type { Dispatch } from 'redux';

import { FullWidthRow, ButtonSpacer, Spacer } from '../helpers';
import { deleteAccount, resetProgress } from '../../redux/settings';
import DeleteModal from './delete-modal';
import ResetModal from './reset-modal';

import './danger-zone.css';

type DangerZoneProps = {
  deleteAccount: () => void;
  resetProgress: () => void;
  t: TFunction;
};

type DangerZoneState = {
  reset: boolean;
  delete: boolean;
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

class DangerZone extends Component<DangerZoneProps, DangerZoneState> {
  static displayName: string;
  constructor(props: DangerZoneProps) {
    super(props);
    this.state = {
      reset: false,
      delete: false
    };
  }

  toggleResetModal = () => {
    return this.setState(state => ({
      ...state,
      reset: !state.reset
    }));
  };

  toggleDeleteModal = () => {
    return this.setState(state => ({
      ...state,
      delete: !state.delete
    }));
  };

  render() {
    const { deleteAccount, resetProgress, t } = this.props;
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
                onClick={() => this.toggleResetModal()}
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
                onClick={() => this.toggleDeleteModal()}
                type='button'
              >
                {t('settings.danger.delete')}
              </Button>
              <Spacer />
            </FullWidthRow>
          </Panel>

          <ResetModal
            onHide={() => this.toggleResetModal()}
            reset={resetProgress}
            show={this.state.reset}
          />
          <DeleteModal
            delete={deleteAccount}
            onHide={() => this.toggleDeleteModal()}
            show={this.state.delete}
          />
        </FullWidthRow>
      </div>
    );
  }
}

DangerZone.displayName = 'DangerZone';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DangerZone));
