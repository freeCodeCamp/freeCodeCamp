import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import MapHeader from './Header.jsx';
import SuperBlock from './Super-Block.jsx';
import FullStack from './Full-Stack.jsx';
import CodingPrep from './Coding-Prep.jsx';
import {
  clearFilter,
  fetchChallenges,
  toggleThisPanel,
  updateFilter
} from '../../redux/actions';

const bindableActions = {
  clearFilter,
  fetchChallenges,
  toggleThisPanel,
  updateFilter
};
const superBlocksSelector = createSelector(
  state => state.challengesApp.superBlocks,
  state => state.entities.superBlock,
  state => state.entities.block,
  state => state.entities.challenge,
  (superBlocks, superBlockMap, blockMap, challengeMap) => {
    if (!superBlockMap || !blockMap || !challengeMap) {
      return {
        superBlocks: []
      };
    }
    return {
      superBlocks: superBlocks
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
        }))
    };
  }
);

const mapStateToProps = createSelector(
  superBlocksSelector,
  state => state.challengesApp.filter,
  state => state.challengesApp.map,
  ({ superBlocks }, filter, mapUi) => {
    return {
      superBlocks,
      filter,
      mapUi
    };
  }
);

const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 1;
  }
};

export class ShowMap extends PureComponent {
  static displayName = 'Map';
  static propTypes = {
    clearFilter: PropTypes.func,
    filter: PropTypes.string,
    superBlocks: PropTypes.array,
    updateFilter: PropTypes.func,
    mapUi: PropTypes.object
  };

  renderSuperBlocks(
    superBlocks,
    updateCurrentChallenge,
    mapUi,
    toggleThisPanel
  ) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return <div>No Super Blocks</div>;
    }
    return superBlocks
      .map((superBlock) => {
        return (
          <SuperBlock
            key={ superBlock.title }
            mapUi={ mapUi }
            toggleThisPanel={ toggleThisPanel }
            updateCurrentChallenge={ updateCurrentChallenge }
            { ...superBlock }
          />
        );
      });
  }

  render() {
    const {
      updateCurrentChallenge,
      superBlocks,
      updateFilter,
      clearFilter,
      filter,
      mapUi,
      toggleThisPanel
    } = this.props;
    return (
      <div>
        <MapHeader
          clearFilter={ clearFilter }
          filter={ filter }
          updateFilter={ updateFilter }
        />
        <div className='map-accordion'>
          {
            this.renderSuperBlocks(
              superBlocks,
              updateCurrentChallenge,
              mapUi,
              toggleThisPanel
            )
          }
          <FullStack
            mapUi={ mapUi }
            toggleThisPanel={ toggleThisPanel }
          />
          <CodingPrep
            mapUi={ mapUi }
            toggleThisPanel={ toggleThisPanel }
          />
          <div className='spacer' />
        </div>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(ShowMap);
