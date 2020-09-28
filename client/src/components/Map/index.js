import React, { Component } from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uniq from 'lodash/uniq';
import { createSelector } from 'reselect';

import SuperBlock from './components/SuperBlock';
import Spacer from '../helpers/Spacer';

import './map.css';
import { ChallengeNode } from '../../redux/propTypes';
import { toggleSuperBlock, toggleBlock, resetExpansion } from './redux';
import { currentChallengeIdSelector } from '../../redux';
import { dasherize } from '../../../../utils/slugs';

const propTypes = {
  currentChallengeId: PropTypes.string,
  hash: PropTypes.string,
  introNodes: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired
      })
    })
  ),
  isSignedIn: PropTypes.bool,
  nodes: PropTypes.arrayOf(ChallengeNode),
  resetExpansion: PropTypes.func,
  toggleBlock: PropTypes.func.isRequired,
  toggleSuperBlock: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return createSelector(
    currentChallengeIdSelector,
    currentChallengeId => ({
      currentChallengeId
    })
  )(state);
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      resetExpansion,
      toggleSuperBlock,
      toggleBlock
    },
    dispatch
  );
}

export class Map extends Component {
  constructor(props) {
    super(props);
    this.initializeExpandedState();
  }

  // As this happens in the constructor, it's necessary to manipulate state
  // directly.
  initializeExpandedState() {
    const {
      currentChallengeId,
      hash,
      nodes,
      resetExpansion,
      toggleBlock,
      toggleSuperBlock,
      isSignedIn
    } = this.props;
    resetExpansion();

    let node;

    // find the challenge that has the same superblock with hash
    if (hash) {
      node = nodes.find(node => dasherize(node.superBlock) === hash);
    }

    // without hash only expand when signed in
    if (isSignedIn) {
      // if there is no hash or the hash did not match any challenge superblock
      // and there was a currentChallengeId
      if (!node && currentChallengeId) {
        node = nodes.find(node => node.id === currentChallengeId);
      }
      if (!node) node = nodes[0];
    }

    if (!node) return;

    toggleBlock(node.block);
    toggleSuperBlock(node.superBlock);
  }

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
    // if a given superBlock's nodes have been filtered that
    // superBlock will not appear in superBlocks and will not be rendered.
    const superBlocks = uniq(nodes.map(({ superBlock }) => superBlock));
    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          <div className='map-ui' data-test-label='learn-curriculum-map'>
            <ul>
              {this.renderSuperBlocks(superBlocks)}
              <Spacer />
            </ul>
          </div>
        </Col>
      </Row>
    );
  }
}

Map.displayName = 'Map';
Map.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
