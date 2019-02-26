import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { uniq, find } from 'lodash';

import Block from './Block';

import { makeExpandedSuperBlockSelector, toggleSuperBlock } from '../redux';
import { userSelector } from '../../../redux';
import Caret from '../../icons/Caret';
import { ChallengeNode } from '../../../redux/propTypes';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedSuperBlockSelector(ownProps.superBlock);

  return createSelector(
    expandedSelector,
    userSelector,
    (isExpanded, { currentChallengeId }) => ({ isExpanded, currentChallengeId })
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
  currentChallengeId: PropTypes.string,
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
    : `${str} Certification (300 hours)`;
}

export class SuperBlock extends Component {
  renderBlock(blocksForSuperBlock) {
    const { introNodes } = this.props;
    const blockDashedNames = uniq(
      blocksForSuperBlock.map(({ block }) => block)
    );
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
      superBlock,
      isExpanded,
      toggleSuperBlock,
      nodes,
      currentChallengeId
    } = this.props;
    const blocksForSuperBlock = nodes.filter(
      node => node.superBlock === superBlock
    );
    // If, somehow, the user does not have a current challenge, this opens the
    // first superBlock.
    const hasCurrentChallenge = !currentChallengeId
      ? superBlock === 'Responsive Web Design'
      : blocksForSuperBlock.some(
          challenge => challenge.id === currentChallengeId
        );
    // isExpanded is toggled, starting as false, by the user unless this
    // block hasCurrentChallenge when it starts as true.
    const isOpen = hasCurrentChallenge ? !isExpanded : isExpanded;
    return (
      <li className={`superblock ${isOpen ? 'open' : ''}`}>
        <button
          aria-expanded={isOpen}
          className='map-title'
          onClick={() => toggleSuperBlock(superBlock)}
        >
          <Caret />
          <h4>{createSuperBlockTitle(superBlock)}</h4>
        </button>
        {isOpen ? this.renderBlock(blocksForSuperBlock) : null}
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
