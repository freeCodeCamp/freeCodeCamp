import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';
import PureComponent from 'react-pure-render/component';
import classnames from 'classnames';
import debug from 'debug';

import {
  clickOnChallenge,

  makePanelHiddenSelector
} from './redux';
import { userSelector } from '../redux';
import { challengeMapSelector } from '../entities';

const propTypes = {
  block: PropTypes.string,
  challenge: PropTypes.object,
  clickOnChallenge: PropTypes.func.isRequired,
  dashedName: PropTypes.string,
  isComingSoon: PropTypes.bool,
  isCompleted: PropTypes.bool,
  isDev: PropTypes.bool,
  isHidden: PropTypes.bool,
  isLocked: PropTypes.bool,
  isRequired: PropTypes.bool,
  title: PropTypes.string
};
function mapDispatchToProps(dispatch, { dashedName }) {
  const dispatchers = {
    clickOnChallenge: e => {
      e.preventDefault();
      return dispatch(clickOnChallenge(dashedName));
    }
  };
  return () => dispatchers;
}

function makeMapStateToProps(_, { dashedName }) {
  return createSelector(
    userSelector,
    challengeMapSelector,
    makePanelHiddenSelector(dashedName),
    (
      { challengeMap: userChallengeMap },
      challengeMap,
      isHidden
    ) => {
      const {
        id,
        title,
        block,
        isLocked,
        isRequired,
        isComingSoon
      } = challengeMap[dashedName] || {};
      const isCompleted = userChallengeMap ? !!userChallengeMap[id] : false;
      return {
        dashedName,
        isHidden,
        isCompleted,
        title,
        block,
        isLocked,
        isRequired,
        isComingSoon,
        isDev: debug.enabled('fcc:*')
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
      block,
      clickOnChallenge,
      dashedName,
      isComingSoon,
      isCompleted,
      isDev,
      isHidden,
      isLocked,
      isRequired,
      title
    } = this.props;
    if (isHidden || !title) {
      return null;
    }
    const challengeClassName = classnames({
      'text-primary': true,
      'padded-ionic-icon': true,
      'map-challenge-title': true,
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
      <div
        className={ challengeClassName }
        key={ title }
        >
        <Link to={ `/challenges/${block}/${dashedName}` }>
          <span onClick={ clickOnChallenge }>
            { title }
            { this.renderCompleted(isCompleted, isLocked) }
            { this.renderRequired(isRequired) }
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
