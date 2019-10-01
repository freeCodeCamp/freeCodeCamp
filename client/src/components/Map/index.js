import React, { Component } from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uniq from 'lodash/uniq';
import { createSelector } from 'reselect';
import { scroller } from 'react-scroll';

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
    this.state = { idToScrollto: null };
  }

  componentWillMount() {
    this.initializeExpandedState(
      this.props.currentChallengeId,
      this.props.hash
    );
  }
  componentDidMount() {
    if (this.state.idToScrollto) {
      window.scrollTo(0, 0);
      scroller.scrollTo(this.state.idToScrollto, {
        duration: 1500,
        smooth: 'easeInOutQuint',
        offset: -35
      });
    }
  }

  initializeExpandedState(currentChallengeId, hash) {
    this.props.resetExpansion();
    let node;

    // find the challenge that has the same superblock with hash
    if (this.props.hash) {
      node = this.props.nodes.find(node => dasherize(node.superBlock) === hash);
      if (node) this.setState({ idToScrollto: dasherize(node.superBlock) });
    }

    // if there is no hash or the hash did not match any challenge superblock
    // and there was a currentChallengeId
    if (!node && currentChallengeId) {
      node = this.props.nodes.find(node => node.id === currentChallengeId);
      if (node) this.setState({ idToScrollto: dasherize(node.title) });
    }

    if (!node) node = this.props.nodes[0];

    this.props.toggleBlock(node.block);
    this.props.toggleSuperBlock(node.superBlock);
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
    const superBlocks = uniq(nodes.map(({ superBlock }) => superBlock));
    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          <div className='map-ui'>
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
