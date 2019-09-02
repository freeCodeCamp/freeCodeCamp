import React from 'react';
import PropTypes from 'prop-types';

import ga from '../../../analytics';
import Caret from '../../../assets/icons/Caret';
import Challenge from './Challenge';
import Badge from './Badge';

const propTypes = {
  block: PropTypes.string,
  blockName: PropTypes.string,
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
  }),
  isExpanded: PropTypes.bool,
  toggleBlock: PropTypes.func.isRequired
};

function createHandleBlockClick(block, toggleBlock) {
  return () => {
    ga.event({
      category: 'Map Block Click',
      action: block
    });
    toggleBlock(block);
  };
}

function renderChallenges(intro, challenges = []) {
  return (
    <>
      {intro && (
        <Challenge
          key={`intro-${intro.fields.slug}`}
          slug={intro.fields.slug}
          title={intro.frontmatter.title}
        />
      )}
      {challenges.map(({ title, fields: { slug }, isCompleted }) => (
        <Challenge
          key={`challenge-${slug}`}
          {...{ isCompleted, slug, title }}
        />
      ))}
    </>
  );
}

function Block(props) {
  const {
    block,
    blockName,
    intro,
    challenges,
    completedChallenges,
    isExpanded,
    toggleBlock
  } = props;

  const handleBlockClick = createHandleBlockClick(block, toggleBlock);
  return (
    <li className={`block ${isExpanded ? 'open' : ''}`}>
      <button
        aria-expanded={isExpanded}
        className='map-title'
        onClick={handleBlockClick}
      >
        <Caret />
        <h4>{blockName}</h4>
        <div className='map-title-completed'>
          <Badge isCompleted={completedChallenges === challenges.length} />
          <span>{`${completedChallenges}/${challenges.length}`}</span>
        </div>
      </button>
      <ul>{isExpanded && renderChallenges(intro, challenges)}</ul>
    </li>
  );
}

Block.displayName = 'Block';
Block.propTypes = propTypes;

export default Block;
