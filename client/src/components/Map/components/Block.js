import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'gatsby';
import { withTranslation } from 'react-i18next';

import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import { completedChallengesSelector, executeGA } from '../../../redux';
import Caret from '../../../assets/icons/Caret';
import { blockNameify } from '../../../../../utils/block-nameify';
import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import IntroInformation from '../../../assets/icons/IntroInformation';
import { dasherize } from '../../../../../utils/slugs';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

  return createSelector(
    expandedSelector,
    completedChallengesSelector,
    (isExpanded, completedChallenges) => ({
      isExpanded,
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleBlock, executeGA }, dispatch);

const propTypes = {
  blockDashedName: PropTypes.string,
  challenges: PropTypes.array,
  completedChallenges: PropTypes.arrayOf(PropTypes.string),
  executeGA: PropTypes.func,
  intro: PropTypes.shape({
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      block: PropTypes.string.isRequired
    })
  }),
  isExpanded: PropTypes.bool,
  superBlockDashedName: PropTypes.string,
  t: PropTypes.func,
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
    const { blockDashedName, toggleBlock, executeGA } = this.props;
    executeGA({
      type: 'event',
      data: {
        category: 'Map Block Click',
        action: blockDashedName
      }
    });
    return toggleBlock(blockDashedName);
  }

  handleChallengeClick(slug) {
    return () => {
      return this.props.executeGA({
        type: 'event',
        data: {
          category: 'Map Challenge Click',
          action: slug
        }
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

  renderChallenges(intro = {}, challenges = [], isProjectBlock = false) {
    // TODO: Split this into a Challenge Component and add tests
    // TODO: The styles badge and map-badge on the completion span do not exist
    return [intro].concat(challenges).map((challenge, i) => {
      const completedClass = challenge.isCompleted
        ? ' map-challenge-title-completed'
        : '';
      return (
        <li
          className={`map-challenge-title${completedClass} ${
            isProjectBlock ? 'map-project-wrap' : ''
          }`}
          id={challenge.dashedName || dasherize(challenge.frontmatter.title)}
          key={'map-challenge' + challenge.fields.slug}
        >
          {!isProjectBlock ? (
            <>
              <span className='badge map-badge'>
                {i === 0 ? (
                  <IntroInformation style={mapIconStyle} />
                ) : (
                  this.renderCheckMark(challenge.isCompleted)
                )}
              </span>
              <Link
                onClick={this.handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
              >
                {challenge.title || challenge.frontmatter.title}
              </Link>
            </>
          ) : (
            <Link
              onClick={this.handleChallengeClick(challenge.fields.slug)}
              to={challenge.fields.slug}
            >
              {challenge.title || challenge.frontmatter.title}
              <span className='badge map-badge map-project-checkmark'>
                {i === 0 ? (
                  <IntroInformation style={mapIconStyle} />
                ) : (
                  this.renderCheckMark(challenge.isCompleted)
                )}
              </span>
            </Link>
          )}
        </li>
      );
    });
  }

  render() {
    const {
      blockDashedName,
      completedChallenges,
      challenges,
      isExpanded,
      intro,
      superBlockDashedName,
      t
    } = this.props;
    let completedCount = 0;
    const challengesWithCompleted = challenges.map(challenge => {
      const { id } = challenge;
      const isCompleted = completedChallenges.some(
        completedId => id === completedId
      );
      if (isCompleted) {
        completedCount++;
      }
      return { ...challenge, isCompleted };
    });

    const isProjectBlock = challenges.find(challenge => {
      const isJsProject =
        challenge.order === 10 && challenge.challengeType === 5;

      const isOtherProject =
        challenge.challengeType === 3 ||
        challenge.challengeType === 4 ||
        challenge.challengeType === 10;

      const isTakeHomeProject = blockDashedName === 'take-home-projects';

      return (
        (isJsProject && !isTakeHomeProject) ||
        (isOtherProject && !isTakeHomeProject)
      );
    });

    const superBlockIntroObj = t(`intro:${superBlockDashedName}`);
    const blockIntroArr = isProjectBlock
      ? []
      : superBlockIntroObj.blocks[blockDashedName];

    return isProjectBlock ? (
      <li className='block'>
        <div className='map-title'>
          <h4 className='map-projects-title'>
            {blockNameify(blockDashedName)}
          </h4>
        </div>
        <ul>
          {this.renderChallenges(
            intro,
            challengesWithCompleted,
            isProjectBlock
          )}
        </ul>
      </li>
    ) : (
      <li className={`block ${isExpanded ? 'open' : ''}`}>
        <button
          aria-expanded={isExpanded}
          className='map-title'
          onClick={this.handleBlockClick}
        >
          <Caret />
          <h4>{blockNameify(blockDashedName)}</h4>
          <div className='map-title-completed'>
            <span>
              {this.renderCheckMark(
                completedCount === challengesWithCompleted.length
              )}
            </span>
            <span>{`${completedCount}/${challengesWithCompleted.length}`}</span>
          </div>
        </button>
        <ul>
          {isExpanded
            ? blockIntroArr.map((str, i) => <p key={i}>{str}</p>)
            : null}
          {isExpanded
            ? this.renderChallenges(intro, challengesWithCompleted)
            : null}
        </ul>
      </li>
    );
  }
}

const TranslatedBlock = withTranslation()(Block);

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslatedBlock);
