import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Trans } from 'gatsby-plugin-react-i18next';

import { FullWidthRow, ButtonSpacer, Spacer } from '../helpers';
import { deleteAccount, resetProgress } from '../../redux/settings';
import DeleteModal from './DeleteModal';
import ResetModal from './ResetModal';

import './danger-zone.css';

const propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  resetProgress: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteAccount,
      resetProgress
    },
    dispatch
  );

class DangerZone extends Component {
  constructor(props) {
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
    const { deleteAccount, resetProgress } = this.props;
    return (
      <div className='danger-zone text-center'>
        <FullWidthRow>
          <Panel bsStyle='danger'>
            <Panel.Heading>
              <Trans>settings.danger.heading</Trans>
            </Panel.Heading>
            <Spacer />
            <p>
              <Trans>settings.danger.be-careful</Trans>
            </p>
            <FullWidthRow>
              <Button
                block={true}
                bsSize='lg'
                bsStyle='danger'
                className='btn-danger'
                onClick={() => this.toggleResetModal()}
                type='button'
              >
                <Trans>settings.danger.reset</Trans>
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
                <Trans>settings.danger.delete</Trans>
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
DangerZone.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DangerZone);
