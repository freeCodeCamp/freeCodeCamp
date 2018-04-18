import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import classnames from 'classnames';
import debug from 'debug';

import { clickOnChallenge } from './redux';
import { userSelector } from '../redux';
import { paramsSelector } from '../Router/redux';
import { challengeMapSelector } from '../entities';
import { Link } from '../Router';
import { onRouteChallenges } from '../routes/Challenges/redux';

const propTypes = {
  block: PropTypes.string,
  challenge: PropTypes.object,
  clickOnChallenge: PropTypes.func.isRequired,
  dashedName: PropTypes.string,
  isComingSoon: PropTypes.bool,
  isCompleted: PropTypes.bool,
  isDev: PropTypes.bool,
  isLocked: PropTypes.bool,
  selected: PropTypes.bool,
  title: PropTypes.string
};
const mapDispatchToProps = { clickOnChallenge };

function makeMapStateToProps(_, { dashedName }) {
  return createSelector(
    userSelector,
    challengeMapSelector,
    paramsSelector,
    (
      { challengeMap: userChallengeMap },
      challengeMap,
      params
    ) => {
      const {
        id,
        title,
        block,
        isLocked,
        isComingSoon
      } = challengeMap[dashedName] || {};
      const isCompleted = userChallengeMap ? !!userChallengeMap[id] : false;
      const selected = dashedName === params.dashedName;
      return {
        dashedName,
        isCompleted,
        title,
        block,
        isLocked,
        isComingSoon,
        isDev: debug.enabled('fcc:*'),
        selected
      };
    }
  );
}

export class Challenge extends PureComponent {
  renderCompleted(isCompleted, isLocked) {
    if (isLocked || !isCompleted) {
      return null;
    }
    return <span className='sr-only'>completed</span>;
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

  renderLocked(title, isComingSoon, className) {
    return (
      <p
        className={ className }
        key={ title }
        >
        { title }
        { this.renderComingSoon(isComingSoon) }
      </p>
    );
  }


  render() {
    const {
      block,
      clickOnChallenge,
      dashedName,
      isComingSoon,
      isCompleted,
      isDev,
      isLocked,
      title,
      selected
    } = this.props;
    if (!title) {
      return null;
    }
    const challengeClassName = classnames({
      'text-primary': true,
      'padded-ionic-icon': true,
      'map-challenge-title': true,
      'ion-checkmark-circled faded': !(isLocked || isComingSoon) && isCompleted,
      'ion-ios-circle-outline': !(isLocked || isComingSoon) && !isCompleted,
      'ion-locked': isLocked || isComingSoon,
      disabled: isLocked || (!isDev && isComingSoon),
      selectedChallenge: selected
    });
    if (isLocked || (!isDev && isComingSoon)) {
      return this.renderLocked(
        title,
        isComingSoon,
        challengeClassName
      );
    }
    return (
      <div
        className={ challengeClassName }
        data-challenge={dashedName}
        key={ title }
        >
        <Link
          onClick={ clickOnChallenge }
          to={ onRouteChallenges({ dashedName, block }) }
          >
          <span >
            { title }
            { this.renderCompleted(isCompleted, isLocked) }
          </span>
        </Link>
      </div>
    );
  }
}

Challenge.propTypes = propTypes;
Challenge.dispalyName = 'Challenge';

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Challenge);
