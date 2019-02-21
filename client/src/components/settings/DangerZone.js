import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert, Panel } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FullWidthRow, ButtonSpacer, Spacer } from '../helpers';
import DeleteModal from './DeleteModal';

import {deleteAccount, resetProgress } from '../../redux/settings';

import './danger-zone.css';
import ResetModal from './ResetModal';

const propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  resetProgress: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    deleteAccount,
    resetProgress
  }, dispatch);

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
  }

  toggleDeleteModal = () => {
    return this.setState(state => ({
      ...state,
      delete: !state.delete
    }));
  }

  render() {
    return (
      <div className='danger-zone'>
        <FullWidthRow>
          <Panel>
            <Spacer />
            <Alert bsStyle='danger' className='alert-danger-zone'>
              Please be careful! Changes in this section are permanent.
            </Alert>
            <FullWidthRow>
              <Button
                block={true}
                bsSize='lg'
                bsStyle='danger'
                className='btn-danger'
                type='button'
                onClick={() => this.toggleResetModal()}>
                Reset all of my progress
              </Button>
              <ButtonSpacer />
              <Button
                block={true}
                bsSize='lg'
                bsStyle='danger'
                className='btn-danger'
                type='button'
                onClick={() => this.toggleDeleteModal()}>
                Delete my account
              </Button>
            </FullWidthRow>
          </Panel>
          <ResetModal
            onHide={() => this.toggleResetModal()}
            show={this.state.reset} />
          <DeleteModal
            onHide={() => this.toggleDeleteModal()}
            show={this.state.delete} />
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