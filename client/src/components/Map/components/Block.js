import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'gatsby';

import ga from '../../../analytics';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { userSelector } from '../../../redux';
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
  bindActionCreators({ toggleBlock }, dispatch);

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
  toggleBlock: PropTypes.func.isRequired
};

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

export class Block extends Component {
  constructor(...props) {
    super(...props);

    this.handleBlockClick = this.handleBlockClick.bind(this);
    this.handleChallengeClick = this.handleChallengeClick.bind(this);
    this.renderChallenges = this.renderChallenges.bind(this);
  }

  handleBlockClick() {
    const { blockDashedName, toggleBlock } = this.props;
    ga.event({
      category: 'Map Block Click',
      action: blockDashedName
    });
    return toggleBlock(blockDashedName);
  }

  handleChallengeClick(slug) {
    return () => {
      return ga.event({
        category: 'Map Challenge Click',
        action: slug
      });
    };
  }

  renderCheckMark(isCompleted) {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  }

  renderChallenges(intro = {}, challenges = []) {
    // TODO: Split this into a Challenge Component and add tests
    // TODO: The styles badge and map-badge on the completion span do not exist
    return [intro].concat(challenges).map((challenge, i) => {
      const completedClass = challenge.isCompleted
        ? ' map-challenge-title-completed'
        : '';
      return (
        <li
          className={'map-challenge-title' + completedClass}
          key={'map-challenge' + challenge.fields.slug}
          >
          <span className='badge map-badge'>
            {i !== 0 && this.renderCheckMark(challenge.isCompleted)}
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
