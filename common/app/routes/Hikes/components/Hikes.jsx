import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { createSelector } from 'reselect';
// import debug from 'debug';

import HikesMap from './Map.jsx';
import { fetchHikes } from '../redux/actions';


// const log = debug('fcc:hikes');

const mapStateToProps = createSelector(
  state => state.entities.hike,
  state => state.hikesApp.hikes,
  (hikesMap, hikesByDashedName) => {
    if (!hikesMap || !hikesByDashedName) {
      return { hikes: [] };
    }
    return {
      hikes: hikesByDashedName.map(dashedName => hikesMap[dashedName])
    };
  }
);

const fetchOptions = {
  fetchAction: 'fetchHikes',
  isPrimed: ({ hikes }) => hikes && !!hikes.length,
  getActionArgs: ({ params: { dashedName } }) => [ dashedName ],
  shouldContainerFetch(props, nextProps) {
    return props.params.dashedName !== nextProps.params.dashedName;
  }
};

export class Hikes extends PureComponent {
  static displayName = 'Hikes';

  static propTypes = {
    children: PropTypes.element,
    hikes: PropTypes.array,
    params: PropTypes.object
  };

  renderMap(hikes) {
    return (
      <HikesMap hikes={ hikes }/>
    );
  }

  render() {
    const { hikes } = this.props;
    return (
      <div>
        {
          // render sub-route
          this.props.children ||
          // if no sub-route render hikes map
          this.renderMap(hikes)
        }
      </div>
    );
  }
}

// export redux and fetch aware component
export default compose(
  connect(mapStateToProps, { fetchHikes }),
  contain(fetchOptions)
)(Hikes);
