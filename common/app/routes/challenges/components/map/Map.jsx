import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';

import MapHeader from './Header.jsx';
import SuperBlock from './Super-Block.jsx';
import { fetchChallenges } from '../../redux/actions';
import { updateTitle } from '../../../../redux/actions';

const bindableActions = { fetchChallenges, updateTitle };
const mapStateToProps = createSelector(
  state => state.app.windowHeight,
  state => state.app.navHeight,
  state => state.challengesApp.superBlocks,
  (windowHeight, navHeight, superBlocks) => ({
    superBlocks,
    height: windowHeight - navHeight - 150
  })
);
const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 1;
  }
};
const propTypes = {
  fetchChallenges: PropTypes.func.isRequired,
  height: PropTypes.number,
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
    let height = 'auto';
    if (!this.props.params) {
      height = this.props.height + 'px';
    }
    return (
      <Col xs={ 12 }>
        <MapHeader />
        <div
          className='map-accordion center-block'
          style={{ height: height }}
          >
          { this.renderSuperBlocks(superBlocks) }
          <div className='spacer' />
        </div>
      </Col>
    );
  }
}

ShowMap.displayName = 'Map';
ShowMap.propTypes = propTypes;

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(ShowMap);
