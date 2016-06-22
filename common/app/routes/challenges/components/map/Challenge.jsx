import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';
import PureComponent from 'react-pure-render/component';
import classnames from 'classnames';

import { updateCurrentChallenge } from '../../redux/actions';

const bindableActions = { updateCurrentChallenge };
const mapStateToProps = createSelector(
  (_, props) => props.dashedName,
  state => state.entities.challenge,
  (dashedName, challengeMap) => {
    const challenge = challengeMap[dashedName] || {};
    return {
      dashedName,
      challenge,
      title: challenge.title,
      block: challenge.block,
      isLocked: challenge.isLocked,
      isRequired: challenge.isRequired,
      isCompleted: challenge.isCompleted
    };
  }
);
export class Challenge extends PureComponent {
  constructor(...args) {
    super(...args);
  }
  static displayName = 'Challenge';
  static propTypes = {
    title: PropTypes.string,
    dashedName: PropTypes.string,
    block: PropTypes.string,
    isLocked: PropTypes.bool,
    isRequired: PropTypes.bool,
    isCompleted: PropTypes.bool,
    challenge: PropTypes.object,
    updateCurrentChallenge: PropTypes.func
  };

  renderCompleted(isCompleted, isLocked) {
    if (isLocked || !isCompleted) {
      return null;
    }
    return <span className='sr-only'>completed</span>;
  }

  renderRequired(isRequired) {
    if (!isRequired) {
      return '';
    }
    return <span className='text-primary'><strong>*</strong></span>;
  }

  renderLocked(title, isRequired, className) {
    return (
      <p
        className={ className }
        key={ title }
        >
        { title }
        { this.renderRequired(isRequired) }
      </p>
    );
  }

  render() {
    const {
      title,
      dashedName,
      block,
      isLocked,
      isRequired,
      isCompleted,
      challenge,
      updateCurrentChallenge
    } = this.props;
    const challengeClassName = classnames({
      'text-primary': true,
      'padded-ionic-icon': true,
      'negative-15': true,
      'challenge-title': true,
      'ion-checkmark-circled faded': !isLocked && isCompleted,
      'ion-ios-circle-outline': !isLocked && !isCompleted,
      'ion-locked': isLocked,
      disabled: isLocked
    });
    if (isLocked) {
      return this.renderLocked(title, isRequired, challengeClassName);
    }
    return (
      <p
        className={ challengeClassName }
        key={ title }
        >
        <Link to={ `/challenges/${block}/${dashedName}` }>
          <span onClick={ () => updateCurrentChallenge(challenge) }>
            { title }
            { this.renderCompleted(isCompleted, isLocked) }
            { this.renderRequired(isRequired) }
          </span>
        </Link>
      </p>
    );
  }
}

export default connect(mapStateToProps, bindableActions)(Challenge);
