import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';

import MapHeader from './Header.jsx';
import SuperBlock from './Super-Block.jsx';
import { fetchChallenges } from '../../redux/actions';
import { updateTitle } from '../../../../redux/actions';

const mapStateToProps = state => ({
  superBlocks: state.challengesApp.superBlocks
});
const mapDispatchToProps = { fetchChallenges, updateTitle };
const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 1;
  }
};
const propTypes = {
  fetchChallenges: PropTypes.func.isRequired,
  params: PropTypes.object,
  superBlocks: PropTypes.array,
  updateTitle: PropTypes.func.isRequired
};

export class ShowMap extends PureComponent {
  componentWillMount() {
    // if no params then map is open in drawer
    // do not update title
    if (!this.props.params) {
      return;
    }
    this.props.updateTitle(
      'A Map to Learn to Code and Become a Software Engineer'
    );
  }

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
          <MapHeader />
          <div className='map-accordion center-block'>
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
