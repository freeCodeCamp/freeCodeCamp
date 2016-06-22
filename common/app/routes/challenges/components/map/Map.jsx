import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';

import MapHeader from './Header.jsx';
import SuperBlock from './Super-Block.jsx';
import { fetchChallenges } from '../../redux/actions';

const bindableActions = { fetchChallenges };
const mapStateToProps = state => ({
  superBlocks: state.challengesApp.superBlocks
});
const fetchOptions = {
  fetchAction: 'fetchChallenges',
  isPrimed({ superBlocks }) {
    return Array.isArray(superBlocks) && superBlocks.length > 1;
  }
};
export class ShowMap extends PureComponent {
  static displayName = 'Map';
  static propTypes = { superBlocks: PropTypes.array };

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
      <div>
        <MapHeader />
        <div className='map-accordion'>
          { this.renderSuperBlocks(superBlocks) }
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
