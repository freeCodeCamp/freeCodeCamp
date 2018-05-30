import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Panel, Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { ButtonSpacer, FullWidthRow } from '../../../helperComponents';
import ResetModal from './ResetModal.jsx';
import DeleteModal from './DeleteModal.jsx';
import { resetProgress, deleteAccount } from '../redux';

const propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  resetProgress: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  deleteAccount,
  resetProgress
};

class DangerZone extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      delete: false,
      reset: false
    };

    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.toggleResetModal = this.toggleResetModal.bind(this);
  }

  toggleDeleteModal() {
    return this.setState(state => ({
      ...state,
      delete: !state.delete
    }));
  }

  toggleResetModal() {
    return this.setState(state => ({
      ...state,
      reset: !state.reset
    }));
  }

  render() {
    const { resetProgress, deleteAccount } = this.props;
    return (
      <div>
        <FullWidthRow>
          <Panel
            bsStyle='danger'
            className='danger-zone-panel'
            header={<h2><strong>Danger Zone</strong></h2>}
            >
            <Alert
              bsStyle='danger'
              >
              <p>
                Please be careful! Changes in this section are permanent.
              </p>
            </Alert>
            <FullWidthRow>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='danger'
                onClick={ this.toggleResetModal }
                >
                Reset all of my progress
              </Button>
              <ButtonSpacer />
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='danger'
                onClick={ this.toggleDeleteModal }
                >
                Delete my account
              </Button>
            </FullWidthRow>
          </Panel>
          <ResetModal
            onHide={ this.toggleResetModal }
            reset={ resetProgress }
            show={ this.state.reset }
          />
          <DeleteModal
            delete={ deleteAccount }
            onHide={ this.toggleDeleteModal }
            show={ this.state.delete }
          />
        </FullWidthRow>
      </div>
    );
  }
}

DangerZone.displayName = 'DangerZone';
DangerZone.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DangerZone);
