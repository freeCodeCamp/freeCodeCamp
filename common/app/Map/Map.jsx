import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';
import SuperBlock from './Super-Block.jsx';
import { superBlocksSelector } from '../redux';

const mapStateToProps = state => ({
  superBlocks: superBlocksSelector(state)
});

const mapDispatchToProps = {};
const propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMap);
