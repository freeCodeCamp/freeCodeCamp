import React, { createElement, PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  panesMounted,
  panesUpdated,
  panesWillMount,

  panesByIdSelector,
  masterKeySelector,
  widthSelector
} from './redux';
import Pane from './Pane.jsx';

const mapStateToProps = createSelector(
  (_, { panes }) => panes,
  panesByIdSelector,
  masterKeySelector,
  widthSelector,
  (userPanes, panesById, masterKey, width) => {
    let nextOffset = 0;
    const numOfPanes = userPanes.length;
    const config = userPanes.map(userPane => {
      const { ratio = (1 / numOfPanes) } = panesById[userPanes.key] || {};
      const offset = nextOffset;
      nextOffset = nextOffset + (ratio * width);
      return {
        ...userPane,
        left: 0 + offset,
        right: 0 + offset + (ratio * width)
      };
    });
    return {
      config,
      masterKey,
      width
    };
  }
);

const mapDispatchToProps = {
  panesMounted,
  panesUpdated,
  panesWillMount
};

const propTypes = {
  config: PropTypes.array.isRequired,
  masterKey: PropTypes.string,
  panes: PropTypes.array.isRequired,
  panesKey: PropTypes.string,
  panesMounted: PropTypes.func.isRequired,
  panesUpdated: PropTypes.func.isRequired,
  panesWillMount: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

export class Panes extends PureComponent {
  componentWillMount() {
    this.props.panesWillMount(this.props.panes.map(({ ident }) => ident));
  }

  componentDidMount() {
    this.props.panesMounted();
  }

  getPanes() {
    return this.props.panes.map(({ ident }) => ident);
  }

  componentWillReceiveProps(nextProps) {
    const newMasterKey = nextProps.panes.reduce(
      (masterKey, { ident }) => ('' + masterKey + ident),
      ''
    );
    if (
      nextProps.panes.length !== this.props.panes.length ||
      newMasterKey !== this.props.masterKey
    ) {
      this.props.panesUpdated(this.getPanes());
    }
  }

  render() {
    const {
      config,
      width
    } = this.props;
    const panes = config.map(({ component, render, ...rest }) => {
      const element = component ? createElement(component) : render();
      return (
        <Pane key={ rest.ident} { ...rest } >
          { element }
        </Pane>
      );
    });
    const outerStyle = {
      position: 'relative',
      width
    };
    const innerStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width
    };
    return (
      <div style={outerStyle}>
        <div style={innerStyle}>
          { panes }
        </div>
      </div>
    );
  }
}

Panes.displayName = 'Panes';
Panes.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panes);
