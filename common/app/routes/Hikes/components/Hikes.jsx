import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';
import { createSelector } from 'reselect';
// import debug from 'debug';

import HikesMap from './Map.jsx';
import { updateTitle } from '../../../redux/actions';
import { fetchHikes } from '../redux/actions';

import contain from '../../../utils/professor-x';

// const log = debug('fcc:hikes');

const mapStateToProps = createSelector(
  state => state.hikesApp.hikes.entities,
  state => state.hikesApp.hikes.results,
  (hikesMap, hikesByDashedName)=> {
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
    params: PropTypes.object,
    updateTitle: PropTypes.func
  };

  componentWillMount() {
    const { updateTitle } = this.props;
    updateTitle('Hikes');
  }

  renderMap(hikes) {
    return (
      <HikesMap hikes={ hikes }/>
    );
  }

  render() {
    const { hikes } = this.props;
    const preventOverflow = { overflow: 'hidden' };
    return (
      <div>
        <Row style={ preventOverflow }>
          {
            // render sub-route
            this.props.children ||
            // if no sub-route render hikes map
            this.renderMap(hikes)
          }
        </Row>
      </div>
    );
  }
}

// export redux and fetch aware component
export default compose(
  connect(mapStateToProps, { fetchHikes, updateTitle }),
  contain(fetchOptions)
)(Hikes);
