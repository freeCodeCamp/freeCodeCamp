import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';
import { Loader } from '../helperComponents';
import SuperBlock from './Super-Block.jsx';
import { superBlocksSelector } from '../redux';
import { fetchMapUi } from './redux';

const mapStateToProps = state => ({
  superBlocks: superBlocksSelector(state)
});

const mapDispatchToProps = { fetchMapUi };
const propTypes = {
  fetchMapUi: PropTypes.func.isRequired,
  params: PropTypes.object,
  superBlocks: PropTypes.array
};

export class ShowMap extends PureComponent {

  renderSuperBlocks() {
    const { superBlocks } = this.props;
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return (
        <div style={{ height: '300px' }}>
          <Loader />
        </div>
      );
    }
    return superBlocks.map(dashedName => (
      <SuperBlock
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  render() {
    return (
      <Row>
        <Col xs={ 12 }>
          <div className={ `${ns}-accordion center-block` }>
            { this.renderSuperBlocks() }
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
