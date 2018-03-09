import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { isCurrentBlockCompleteSelector } from '../../redux';

const mapStateToProps = createSelector(
  isCurrentBlockCompleteSelector,
  blockComplete => ({
    isDisabled: !blockComplete
  })
);

const unlockWarning = (
  <Tooltip id='tooltip'>
    <h4>
      <strong>Careful!</strong> Only run code you trust.
    </h4>
  </Tooltip>
);

const propTypes = {
  executeChallenge: PropTypes.func.isRequired,
  guideUrl: PropTypes.string,
  hint: PropTypes.string,
  isCodeLocked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  makeToast: PropTypes.func.isRequired,
  openHelpModal: PropTypes.func.isRequired,
  unlockUntrustedCode: PropTypes.func.isRequired,
  updateHint: PropTypes.func.isRequired
};

class ToolPanel extends PureComponent {
  constructor(...props) {
    super(...props);
    this.makeHint = this.makeHint.bind(this);
    this.makeReset = this.makeReset.bind(this);
  }
  makeHint() {
    this.props.makeToast({
      message: this.props.hint,
      timeout: 4000
    });
    this.props.updateHint();
  }

  makeReset() {
    this.props.makeToast({
      message: 'This will restore your code editor to its original state.',
      action: 'clear my code',
      actionCreator: 'clickOnReset',
      timeout: 4000
    });
  }

  renderHint(hint, makeHint, isDisabled) {
    if (!hint) {
      return null;
    }
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        disabled={ isDisabled }
        onClick={ makeHint }
        >
        Hint
      </Button>
    );
  }

  renderExecute(
    isCodeLocked,
    executeChallenge,
    unlockUntrustedCode,
    isDisabled
  ) {
    if (isCodeLocked) {
      return (
        <OverlayTrigger
          overlay={ unlockWarning }
          placement='right'
          >
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'
            disabled={ isDisabled }
            onClick={ unlockUntrustedCode }
            >
            I trust this code. Unlock it.
          </Button>
        </OverlayTrigger>
      );
    }
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        disabled={ isDisabled }
        onClick={ executeChallenge }
        >
        Run tests (ctrl + enter)
      </Button>
    );
  }

  render() {
    const {
      executeChallenge,
      guideUrl,
      hint,
      isCodeLocked,
      isDisabled,
      openHelpModal,
      unlockUntrustedCode
    } = this.props;
    console.log(isDisabled);
    return (
      <div>
        { this.renderHint(hint, this.makeHintm, isDisabled) }
        {
          this.renderExecute(
            isCodeLocked,
            executeChallenge,
            unlockUntrustedCode,
            isDisabled
          )
        }
        <div className='button-spacer' />
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'
            disabled={ isDisabled }
            onClick={ this.makeReset }
            >
          Reset your code
          </Button>
          <div className='button-spacer' />
          {
            guideUrl &&
              <div>
                <Button
                  block={ true }
                  bsStyle='primary'
                  className='btn-big'
                  disabled={ isDisabled }
                  href={ guideUrl }
                  target='_blank'
                  >
                  Get a hint
                </Button>
                <div className='button-spacer' />
              </div>
          }
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'
            disabled={ isDisabled }
            onClick={ openHelpModal }
            >
            Ask for help on the forum
          </Button>
        <div className='button-spacer' />
      </div>
    );
  }
}

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(mapStateToProps)(ToolPanel);
