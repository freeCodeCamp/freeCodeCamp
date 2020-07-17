import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { uniq, find } from 'lodash';
import { dasherize } from '../../../../../utils/slugs';
import { challengeTypes } from '../../../../utils/challengeTypes.js';

import Block from './Block';

import { makeExpandedSuperBlockSelector, toggleSuperBlock } from '../redux';
import { completedChallengesSelector } from '../../../redux';
import Caret from '../../../assets/icons/Caret';
import ProgressDisplay from '../../../assets/icons/ProgressDisplay';
import { ChallengeNode } from '../../../redux/propTypes';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedSuperBlockSelector(ownProps.superBlock);

  return createSelector(
    expandedSelector,
    completedChallengesSelector,
    (isExpanded, completedChallenges) => ({
      isExpanded,
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSuperBlock
    },
    dispatch
  );
}

const propTypes = {
  challenges: PropTypes.array,
  completedChallenges: PropTypes.arrayOf(PropTypes.string),
  introNodes: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired
      })
    })
  ),
  isExpanded: PropTypes.bool,
  nodes: PropTypes.arrayOf(ChallengeNode),
  superBlock: PropTypes.string,
  toggleSuperBlock: PropTypes.func.isRequired
};

const codingPrepRE = new RegExp('Interview Prep');

function createSuperBlockTitle(str) {
  return codingPrepRE.test(str)
    ? `${str} (Thousands of hours of challenges)`
    : `${str} Certification (300\xa0hours)`;
}

export class SuperBlock extends Component {
  renderBlock(blocksForSuperBlock) {
    const { introNodes } = this.props;
    const blockDashedNames = uniq(
      blocksForSuperBlock.map(({ block }) => block)
    );
    // render all non-empty blocks
    return (
      <ul>
        {blockDashedNames.map(blockDashedName => (
          <Block
            blockDashedName={blockDashedName}
            challenges={blocksForSuperBlock.filter(
              node => node.block === blockDashedName
            )}
            intro={find(
              introNodes,
              ({ frontmatter: { block } }) =>
                block
                  .toLowerCase()
                  .split(' ')
                  .join('-') === blockDashedName
            )}
            key={blockDashedName}
          />
        ))}
      </ul>
    );
  }

  render() {
    const {
      completedChallenges,
      superBlock,
      nodes,
      isExpanded,
      toggleSuperBlock
    } = this.props;

    // since the nodes have been filtered based on isHidden, any blocks whose
    // nodes have been entirely removed will not appear in this array.
    const blocksForSuperBlock = nodes.filter(
      node => node.superBlock === superBlock
    );

    const certificationProjects = blocksForSuperBlock.filter(
      ({ challengeType }) =>
        challengeType === challengeTypes.frontEndProject ||
        challengeType === challengeTypes.backEndProject ||
        challengeType === challengeTypes.pythonProject
    );

    const completedProjectCount = certificationProjects.filter(({ id }) =>
      completedChallenges.includes(id)
    ).length;

    const completedLessonCount =
      blocksForSuperBlock.filter(({ id }) => completedChallenges.includes(id))
        .length - completedProjectCount;

    // Simply using the % of completed projects will work, but since the only
    // requirement for getting a certificate is to complete all the projects,
    // the progress tracker should reflect this.
    // To advance the tracker normally for users who only complete the projectsa
    // fill the progress by
    // (% of lessons completed) + (empty space) * (% of projects completed)
    //
    // As an equation:
    // l = (completed lessons)/(number of lessons + projects)
    // p = (completed projects)/(number of projects)
    // progress = l + (1 - l)*p
    //          = l + p - l*p
    const l = completedLessonCount / blocksForSuperBlock.length;
    const p = completedProjectCount / certificationProjects.length;
    const progress = l + p - l * p;

    return (
      <li
        className={`superblock ${isExpanded ? 'open' : ''}`}
        id={dasherize(superBlock)}
      >
        <button
          aria-expanded={isExpanded}
          className='map-title'
          onClick={() => toggleSuperBlock(superBlock)}
        >
          <Caret />
          <h4>{createSuperBlockTitle(superBlock)}</h4>
          <ProgressDisplay progress={progress} />
        </button>
        {isExpanded ? this.renderBlock(blocksForSuperBlock) : null}
      </li>
    );
  }
}

SuperBlock.displayName = 'SuperBlock';
SuperBlock.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperBlock);
