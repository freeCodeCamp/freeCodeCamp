import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';

import SuperBlock from './components/SuperBlock';
import Spacer from '../helpers/Spacer';

import './map.css';
import {
  currentChallengeIdSelector,
  completedChallengesSelector
} from '../../redux';

const propTypes = {
  completedChallenges: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentChallengeId: PropTypes.string,
  introNodes: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  ).isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      block: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        blockName: PropTypes.string.isRequired
      }),
      id: PropTypes.string.isRequired,
      superBlock: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return createSelector(
    currentChallengeIdSelector,
    completedChallengesSelector,
    (currentChallengeId, completedChallenges) => ({
      currentChallengeId,
      completedChallenges: completedChallenges.map(({ id }) => id)
    })
  )(state);
};

function prepareMapData(nodes, introNodes, completedChallenges) {
  return nodes.reduce((data, node) => {
    const {
      superBlock,
      block,
      fields: { blockName }
    } = node;
    const superBlockData = data[superBlock] || (data[superBlock] = {});
    const blockData =
      superBlockData[block] ||
      (superBlockData[block] = {
        block,
        blockName: blockName,
        intro: introNodes.find(intro => intro.fields.block === block),
        challenges: [],
        completedChallenges: 0
      });
    const isCompleted = completedChallenges.includes(node.id);
    const challenge = { ...node, isCompleted };
    blockData.challenges.push(challenge);
    blockData.completedChallenges += isCompleted;
    return data;
  }, {});
}

function useExpandedState(block) {
  const [expanded, setExpanded] = useState({
    [block]: true
  });
  const toggleExpanded = block => {
    setExpanded(state => ({
      ...state,
      [block]: !state[block]
    }));
  };
  return [expanded, toggleExpanded];
}

export function Map({
  nodes,
  introNodes,
  currentChallengeId,
  completedChallenges
}) {
  const mapData = useMemo(
    () => prepareMapData(nodes, introNodes, completedChallenges),
    [completedChallenges, introNodes, nodes]
  );

  const { superBlock, block } = useMemo(
    () =>
      currentChallengeId
        ? nodes.find(({ id }) => id === currentChallengeId)
        : nodes[0],
    // We use superBlock and block only as init values
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [expandedSuperBlocks, toggleSuperBlock] = useExpandedState(superBlock);
  const [expandedBlocks, toggleBlock] = useExpandedState(block);

  return (
    <div className='map-ui'>
      <ul>
        {Object.entries(mapData).map(([superBlock, blocks]) => (
          <SuperBlock
            blocks={blocks}
            expandedBlocks={expandedBlocks}
            isExpanded={!!expandedSuperBlocks[superBlock]}
            key={superBlock}
            superBlock={superBlock}
            toggleBlock={toggleBlock}
            toggleSuperBlock={toggleSuperBlock}
          />
        ))}
        <Spacer />
      </ul>
    </div>
  );
}

Map.displayName = 'Map';
Map.propTypes = propTypes;

export default connect(mapStateToProps)(Map);
