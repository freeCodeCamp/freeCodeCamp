import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Link, { navigateTo } from 'gatsby-link';

import ga from '../../../analytics';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { toggleMapModal, userSelector } from '../../../redux/app';
import Caret from '../../icons/Caret';
/* eslint-disable max-len */
import GreenPass from '../../../templates/Challenges/components/icons/GreenPass';
import GreenNotCompleted from '../../../templates/Challenges/components/icons/GreenNotCompleted';
/* eslint-enable max-len */
const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

  return createSelector(
    expandedSelector,
    userSelector,
    (isExpanded, { completedChallenges = [] }) => ({
      isExpanded,
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleBlock, toggleMapModal }, dispatch);

const propTypes = {
  blockDashedName: PropTypes.string,
  challenges: PropTypes.array,
  completedChallenges: PropTypes.arrayOf(PropTypes.string),
  intro: PropTypes.shape({
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      block: PropTypes.string.isRequired
    })
  }),
  isExpanded: PropTypes.bool,
  toggleBlock: PropTypes.func.isRequired,
  toggleMapModal: PropTypes.func.isRequired
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

export class Block extends PureComponent {
  constructor(...props) {
    super(...props);

    this.handleBlockClick = this.handleBlockClick.bind(this);
    this.handleChallengeClick = this.handleChallengeClick.bind(this);
    this.renderChallenges = this.renderChallenges.bind(this);
  }

  handleBlockClick() {
    const { blockDashedName, challenges, toggleBlock } = this.props;
    const blockPath = challenges[0].fields.slug
      .split('/')
      .slice(0, -1)
      .join('/');
    toggleBlock(blockDashedName);
    ga.event({
      category: 'Map Block Click',
      action: blockDashedName
    });
    return navigateTo(blockPath);
  }

  handleChallengeClick(slug) {
    return () => {
      this.props.toggleMapModal();
      return ga.event({
        category: 'Map Challenge Click',
        action: slug
      });
    };
  }

  renderChallenges(intro, challenges) {
    // TODO: Split this into a Challenge Component and add tests
    // TODO: The styles badge and map-badge on the completion span do not exist
    return [intro].concat(challenges).map(challenge => {
      const completedClass = challenge.isCompleted
        ? ' map-challenge-title-completed'
        : '';
      return (
        <li
          className={'map-challenge-title' + completedClass}
          key={'map-challenge' + challenge.fields.slug}
          >
          <span className='badge map-badge'>
            {challenge.isCompleted ? (
              <GreenPass
                style={ mapIconStyle }
              />
            ) : (
              <GreenNotCompleted
                style={ mapIconStyle }
              />
            )}
          </span>
          <Link
            onClick={this.handleChallengeClick(challenge.fields.slug)}
            to={challenge.fields.slug}
            >
            {challenge.title || challenge.frontmatter.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    const { completedChallenges, challenges, isExpanded, intro } = this.props;
    const { blockName } = challenges[0].fields;
    const challengesWithCompleted = challenges.map(challenge => {
      const { id } = challenge;
      const isCompleted = completedChallenges.some(
        completedId => id === completedId
      );
      return { ...challenge, isCompleted };
    });
    return (
      <li className={`block ${isExpanded ? 'open' : ''}`}>
        <div className='map-title' onClick={this.handleBlockClick}>
          <Caret />
          <h5>{blockName}</h5>
        </div>
        <ul>
          {isExpanded
            ? this.renderChallenges(intro, challengesWithCompleted)
            : null}
        </ul>
      </li>
    );
  }
}

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Block);
