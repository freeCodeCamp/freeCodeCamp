import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { contain } from 'thundercats-react';
// import debugFactory from 'debug';

import HikesMap from './Map.jsx';

// const debug = debugFactory('freecc:hikes');

export default contain(
  {
    store: 'appStore',
    map(state) {
      return state.hikesApp;
    },
    actions: ['appActions'],
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
      appActions: PropTypes.object,
      children: PropTypes.element,
      currentHike: PropTypes.object,
      hikes: PropTypes.array,
      params: PropTypes.object,
      showQuestions: PropTypes.bool
    },

    componentWillMount() {
      const { appActions } = this.props;
      appActions.setTitle('Videos');
    },

    renderMap(hikes) {
      return (
        <HikesMap hikes={ hikes }/>
      );
    },

    renderChild({ children, ...props }) {
      if (!children) {
        return null;
      }
      return React.cloneElement(children, props);
    },

    render() {
      const { hikes } = this.props;
      const { dashedName } = this.props.params;
      const preventOverflow = { overflow: 'hidden' };
      return (
        <div>
          <Row style={ preventOverflow }>
            {
              // render sub-route
              this.renderChild({ ...this.props, dashedName }) ||
              // if no sub-route render hikes map
              this.renderMap(hikes)
            }
          </Row>
        </div>
      );
    }
  })
);
