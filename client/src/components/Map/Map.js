import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'lodash/uniq';

import SuperBlock from './components/SuperBlock';
import Spacer from '../helpers/Spacer';

import './map.css';
import { ChallengeNode } from '../../redux/propTypes';

const propTypes = {
  introNodes: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired
      })
    })
  ),
  nodes: PropTypes.arrayOf(ChallengeNode)
};

class ShowMap extends Component {
  renderSuperBlocks(superBlocks) {
    const { nodes, introNodes } = this.props;
    return superBlocks.map(superBlock => (
      <SuperBlock
        introNodes={introNodes}
        key={superBlock}
        nodes={nodes}
        superBlock={superBlock}
      />
    ));
  }

  render() {
    const { nodes } = this.props;
    const superBlocks = uniq(nodes.map(({ superBlock }) => superBlock));
    return (
      <div className='map-ui'>
        <ul>
          {this.renderSuperBlocks(superBlocks)}
          <Spacer />
        </ul>
      </div>
    );
  }
}

ShowMap.displayName = 'Map';
ShowMap.propTypes = propTypes;

export default ShowMap;
