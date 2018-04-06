import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniq from 'lodash/uniq';

import SuperBlock from './components/SuperBlock';
import Spacer from '../util/Spacer';

import './map.css';
import { ChallengeNode } from '../../redux/propTypes';

const propTypes = {
  nodes: PropTypes.arrayOf(ChallengeNode)
};

class ShowMap extends PureComponent {
  renderSuperBlocks = superBlocks => {
    const { nodes } = this.props;
    return superBlocks.map(superBlock => (
      <SuperBlock key={superBlock} nodes={nodes} superBlock={superBlock} />
    ));
  };

  render() {
    const { nodes } = this.props;
    const superBlocks = uniq(nodes.map(({ superBlock }) => superBlock));
    return (
      <ul>
        {this.renderSuperBlocks(superBlocks)}
        <Spacer />
      </ul>
    );
  }
}

ShowMap.displayName = 'Map';
ShowMap.propTypes = propTypes;

export default ShowMap;
