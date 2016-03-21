import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { createSelector } from 'reselect';

import Map from './Map.jsx';
import contain from '../../../utils/professor-x';
import { fetchChallenges } from '../redux/actions';

const bindableActions = { fetchChallenges };
const mapStateToProps = createSelector(
  state => state.map.superBlocks,
  state => state.entities.superBlock,
  state => state.entities.block,
  state => state.entities.challenge,
  (superBlocks, superBlockMap, blockMap, challengeMap) => {
    if (!superBlockMap || !blockMap || !challengeMap) {
      return {
        superBlocks: []
      };
    }
    const finalBlocks = superBlocks
      .map(superBlockName => superBlockMap[superBlockName])
      .map(superBlock => ({
        ...superBlock,
        blocks: superBlock.blocks
          .map(blockName => blockMap[blockName])
          .map(block => ({
            ...block,
            challenges: block.challenges
              .map(dashedName => challengeMap[dashedName])
          }))
      }));
    return {
      superBlocks: finalBlocks
    };
  }
);
const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 0;
  }
};

export class ShowMap extends PureComponent {
  static displayName = 'ShowMap';
  static propTypes = {
    superBlocks: PropTypes.array
  };

  render() {
    const { superBlocks } = this.props;
    return (
      <Map superBlocks={ superBlocks } />
    );
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(ShowMap);
