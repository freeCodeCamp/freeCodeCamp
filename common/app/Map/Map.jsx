import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';
import SuperBlock from './Super-Block.jsx';
import {
  fetchChallenges,

  superBlocksSelector
} from '../redux';

const mapStateToProps = state => ({
  superBlocks: superBlocksSelector(state)
});

const mapDispatchToProps = { fetchChallenges };
const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 1;
  }
};
const propTypes = {
  fetchChallenges: PropTypes.func.isRequired,
  params: PropTypes.object,
  superBlocks: PropTypes.array
};

export class ShowMap extends PureComponent {
  renderSuperBlocks(superBlocks) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return <div>No Super Blocks</div>;
    }
    return superBlocks.map(dashedName => (
      <SuperBlock
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  render() {
    const { superBlocks } = this.props;
    return (
      <Row>
        <Col xs={ 12 }>
          <div className={ `${ns}-accordion center-block` }>
            { this.renderSuperBlocks(superBlocks) }
            <div className='spacer' />
          </div>
        </Col>
      </Row>
    );
  }
}

ShowMap.displayName = 'Map';
ShowMap.propTypes = propTypes;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  contain(fetchOptions)
)(ShowMap);
