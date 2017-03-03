import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';
import PureComponent from 'react-pure-render/component';
import classnames from 'classnames';
import debug from 'debug';

import { updateCurrentChallenge } from '../../redux/actions';
import { makePanelHiddenSelector } from '../../redux/selectors';
import { userSelector } from '../../../../redux/selectors';

const propTypes = {
  block: PropTypes.string,
  challenge: PropTypes.object,
  dashedName: PropTypes.string,
  isComingSoon: PropTypes.bool,
  isCompleted: PropTypes.bool,
  isDev: PropTypes.bool,
  isHidden: PropTypes.bool,
  isLocked: PropTypes.bool,
  isRequired: PropTypes.bool,
  title: PropTypes.string,
  updateCurrentChallenge: PropTypes.func.isRequired
};
const mapDispatchToProps = { updateCurrentChallenge };
const makeMapStateToProps = () => createSelector(
  userSelector,
  (_, props) => props.dashedName,
  state => state.entities.challenge,
  makePanelHiddenSelector(),
  (
    { user: { challengeMap: userChallengeMap } },
    dashedName,
    challengeMap,
    isHidden
  ) => {
    const challenge = challengeMap[dashedName] || {};
    let isCompleted = false;
    if (userChallengeMap) {
      isCompleted = !!userChallengeMap[challenge.id];
    }
    return {
      dashedName,
      challenge,
      isHidden,
      isCompleted,
      title: challenge.title,
      block: challenge.block,
      isLocked: challenge.isLocked,
      isRequired: challenge.isRequired,
      isComingSoon: challenge.isComingSoon,
      isDev: debug.enabled('fcc:*')
    };
  }
);

export class Challenge extends PureComponent {
  constructor(...args) {
    super(...args);
    this.handleChallengeClick = this.handleChallengeClick.bind(this);
  }

  handleChallengeClick() {
    this.props.updateCurrentChallenge(this.props.challenge);
  }

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

  renderComingSoon(isComingSoon) {
    if (!isComingSoon) {
      return null;
    }
    return (
      <span className='text-info small'>
        &thinsp; &thinsp;
        <strong>
          <em>Coming Soon</em>
        </strong>
      </span>
    );
  }

  renderLocked(title, isRequired, isComingSoon, className) {
    return (
      <p
        className={ className }
        key={ title }
        >
        { title }
        { this.renderRequired(isRequired) }
        { this.renderComingSoon(isComingSoon) }
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
      isComingSoon,
      isDev,
      isHidden
    } = this.props;
    if (isHidden) {
      return null;
    }
    const challengeClassName = classnames({
      'text-primary': true,
      'padded-ionic-icon': true,
      'negative-15': true,
      'challenge-title': true,
      'ion-checkmark-circled faded': !(isLocked || isComingSoon) && isCompleted,
      'ion-ios-circle-outline': !(isLocked || isComingSoon) && !isCompleted,
      'ion-locked': isLocked || isComingSoon,
      disabled: isLocked || (!isDev && isComingSoon)
    });
    if (isLocked || (!isDev && isComingSoon)) {
      return this.renderLocked(
        title,
        isRequired,
        isComingSoon,
        challengeClassName
      );
    }
    return (
      <p
        className={ challengeClassName }
        key={ title }
        >
        <Link to={ `/challenges/${block}/${dashedName}` }>
          <span onClick={ this.handleChallengeClick }>
            { title }
            { this.renderCompleted(isCompleted, isLocked) }
            { this.renderRequired(isRequired) }
          </span>
        </Link>
      </p>
    );
  }
}

Challenge.propTypes = propTypes;
Challenge.dispalyName = 'Challenge';

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Challenge);
