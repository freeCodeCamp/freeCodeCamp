import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import shouldComponentUpdate from 'react-pure-render/function';
import { createSelector } from 'reselect';
// import debug from 'debug';

import HikesMap from './Map.jsx';
import { updateTitle } from '../../../redux/actions';
import { fetchHikes } from '../redux/actions';

import contain from '../../../utils/professor-x';

// const log = debug('fcc:hikes');

const mapStateToProps = createSelector(
  state => state.hikesApp.hikes,
  hikes => {
    if (!hikes || !hikes.entities || !hikes.results) {
      return { hikes: [] };
    }
    return {
      hikes: hikes.results.map(dashedName => hikes.entities[dashedName])
    };
  }
);

const fetchOptions = {
  fetchAction: 'fetchHikes',

  isPrimed: ({ hikes }) => hikes && !!hikes.length,
  getPayload: ({ params: { dashedName } }) => dashedName,
  shouldContainerFetch(props, nextProps) {
    return props.params.dashedName !== nextProps.params.dashedName;
  }
};

export class Hikes extends React.Component {
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
