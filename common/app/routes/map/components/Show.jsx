import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { createSelector } from 'reselect';

import Map from './Map.jsx';
import contain from '../../../utils/professor-x';
import {
  clearFilter,
  fetchChallenges,
  updateFilter
} from '../redux/actions';

const bindableActions = {
  clearFilter,
  fetchChallenges,
  updateFilter
};
const superBlocksSelector = createSelector(
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
    return superBlocks
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
  }
);

const mapStateToProps = createSelector(
  superBlocksSelector,
  state => state.map.filter,
  (superBlocks, filter) => {
    return {
      superBlocks,
      filter
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
    clearFilter: PropTypes.func,
    filter: PropTypes.string,
    superBlocks: PropTypes.array,
    updateFilter: PropTypes.func
  };

  render() {
    return (
      <Map { ...this.props } />
    );
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(ShowMap);
