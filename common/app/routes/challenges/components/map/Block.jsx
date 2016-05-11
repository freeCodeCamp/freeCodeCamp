import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';
import classnames from 'classnames';

import { updateCurrentChallenge } from '../../redux/actions';

const dispatchActions = { updateCurrentChallenge };
export class Block extends PureComponent {
  static displayName = 'Block';
  static propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    challenges: PropTypes.array,
    updateCurrentChallenge: PropTypes.func
  };

  renderChallenges(challenges, updateCurrentChallenge) {
    if (!Array.isArray(challenges) || !challenges.length) {
      return <div>No Challenges Found</div>;
    }
    return challenges.map(challenge => {
      const { title, dashedName, isLocked, isRequired } = challenge;
      const challengeClassName = classnames({
        'text-primary': true,
        'padded-ionic-icon': true,
        'negative-15': true,
        'challenge-title': true,
        'ion-checkmark-circled': !isLocked,
        'ion-locked': isLocked,
        disabled: isLocked
      });
      if (isLocked) {
        return (
          <p
            className={ challengeClassName }
            key={ title }>
            { title }
            {
              isRequired ?
                <span className='text-primary'><strong>*</strong></span> :
                ''
            }
          </p>
        );
      }
      return (
        <p
          className={ challengeClassName }
          key={ title }>
          <Link to={ `/challenges/${dashedName}` }>
            <span
              onClick={ () => updateCurrentChallenge(challenge) }>
              { title }
              <span className='sr-only'>complete</span>
              {
                isRequired ?
                  <span className='text-primary'><strong>*</strong></span> :
                  ''
              }
            </span>
          </Link>
        </p>
      );
    });
  }

  render() {
    const { title, time, challenges, updateCurrentChallenge } = this.props;
    return (
      <Panel
        bsClass='map-accordion-panel-nested'
        collapsible={ true }
        expanded={ true }
        header={
          <div>
            <h3><FA name='caret-right' />{ title }</h3>
            <span className='challenge-block-time'>({ time })</span>
          </div>
        }
        id={ title }
        key={ title }>
        { this.renderChallenges(challenges, updateCurrentChallenge) }
      </Panel>
    );
  }
}

export default connect(null, dispatchActions)(Block);
