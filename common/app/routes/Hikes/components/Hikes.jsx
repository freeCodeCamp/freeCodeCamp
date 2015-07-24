import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { contain } from 'thundercats-react';
// import debugFactory from 'debug';

import HikesMap from './Map.jsx';

// const debug = debugFactory('freecc:hikes');

export default contain(
  {
    store: 'hikesStore',
    fetchAction: 'hikesActions.fetchHikes',
    getPayload: ({ hikes, params }) => ({
      isPrimed: (hikes && !!hikes.length),
      dashedName: params.dashedName
    }),
    shouldContainerFetch(props, nextProps) {
      return props.params.dashedName !== nextProps.params.dashedName;
    }
  },
  React.createClass({
    displayName: 'Hikes',

    propTypes: {
      children: PropTypes.element,
      currentHike: PropTypes.object,
      hikes: PropTypes.array
    },

    renderMap(hikes) {
      return (
        <HikesMap hikes={ hikes }/>
      );
    },

    renderChild(children, hikes, currentHike) {
      if (!children) {
        return null;
      }
      return React.cloneElement(children, { hikes, currentHike });
    },

    render() {
      const { hikes, children, currentHike } = this.props;
      const preventOverflow = { overflow: 'hidden' };
      return (
        <div>
          <Row style={ preventOverflow }>
            { this.renderChild(children, hikes, currentHike) ||
              this.renderMap(hikes) }
          </Row>
        </div>
      );
    }
  })
);
