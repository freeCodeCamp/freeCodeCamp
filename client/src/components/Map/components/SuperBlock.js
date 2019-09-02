import React from 'react';
import PropTypes from 'prop-types';

import Block from './Block';
import Caret from '../../../assets/icons/Caret';

const propTypes = {
  blocks: PropTypes.objectOf(
    PropTypes.shape({
      block: PropTypes.string.isRequired,
      blockName: PropTypes.string.isRequired,
      challenges: PropTypes.arrayOf(
        PropTypes.shape({
          fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
          title: PropTypes.string.isRequired,
          isCompleted: PropTypes.bool.isRequired
        })
      ),
      completedChallenges: PropTypes.number.isRequired,
      intro: PropTypes.shape({
        fields: PropTypes.shape({
          block: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired
        }),
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired
        })
      })
    })
  ),
  expandedBlocks: PropTypes.objectOf(PropTypes.bool).isRequired,
  isExpanded: PropTypes.bool,
  superBlock: PropTypes.string,
  toggleBlock: PropTypes.func.isRequired,
  toggleSuperBlock: PropTypes.func.isRequired
};

const codingPrepRE = new RegExp('Interview Prep');

function createSuperBlockTitle(str) {
  return codingPrepRE.test(str)
    ? `${str} (Thousands of hours of challenges)`
    : `${str} Certification (300 hours)`;
}

function createHandleSuperBlockClick(superBlock, toggleSuperBlock) {
  return () => {
    toggleSuperBlock(superBlock);
  };
}

function renderBlocks(blocks, expandedBlocks, toggleBlock) {
  return (
    <ul>
      {Object.values(blocks).map(block => (
        <Block
          key={block.block}
          {...block}
          isExpanded={!!expandedBlocks[block.block]}
          toggleBlock={toggleBlock}
        />
      ))}
    </ul>
  );
}

function SuperBlock(props) {
  const {
    superBlock,
    isExpanded,
    toggleSuperBlock,
    blocks,
    expandedBlocks,
    toggleBlock
  } = props;
  const handleSuperBlockClick = createHandleSuperBlockClick(
    superBlock,
    toggleSuperBlock
  );
  return (
    <li className={`superblock ${isExpanded ? 'open' : ''}`}>
      <button
        aria-expanded={isExpanded}
        className='map-title'
        onClick={handleSuperBlockClick}
      >
        <Caret />
        <h4>{createSuperBlockTitle(superBlock)}</h4>
      </button>
      {isExpanded && renderBlocks(blocks, expandedBlocks, toggleBlock)}
    </li>
  );
}

SuperBlock.displayName = 'SuperBlock';
SuperBlock.propTypes = propTypes;

export default SuperBlock;
