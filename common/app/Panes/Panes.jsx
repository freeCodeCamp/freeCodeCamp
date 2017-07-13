import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  panesMounted,
  panesUpdated,
  panesWillMount,
  panesWillUnmount,

  panesSelector,
  panesByNameSelector,
  heightSelector,
  widthSelector
} from './redux';
import Pane from './Pane.jsx';
import Divider from './Divider.jsx';

const getDividerRatio = width => (8 / width) * 100;
const mapStateToProps = createSelector(
  panesSelector,
  panesByNameSelector,
  heightSelector,
  widthSelector,
  (panes, panesByName, height, width) => {
    let lastDividerPosition = 0;
    const dividerRatio = getDividerRatio(width);
    return {
      panes: panes
        .map(name => panesByName[name])
        .filter(({ isHidden })=> !isHidden)
        .map((pane, index, { length: numOfPanes }) => {
          const dividerLeft = pane.dividerLeft || 0;
          const left = lastDividerPosition;
          lastDividerPosition = dividerLeft;
          return {
            ...pane,
            left: index === 0 ?
              0 :
              left + dividerRatio,
            right: index + 1 === numOfPanes ?
              0 :
              100 - dividerLeft
          };
        }, {}),
      height
    };
  }
);

const mapDispatchToProps = {
  panesMounted,
  panesUpdated,
  panesWillMount,
  panesWillUnmount
};

const propTypes = {
  height: PropTypes.number.isRequired,
  nameToComponent: PropTypes.object.isRequired,
  panes: PropTypes.array,
  panesMounted: PropTypes.func.isRequired,
  panesUpdated: PropTypes.func.isRequired,
  panesWillMount: PropTypes.func.isRequired,
  panesWillUnmount: PropTypes.func.isRequired
};

export class Panes extends PureComponent {
  componentWillMount() {
    this.props.panesWillMount(Object.keys(this.props.nameToComponent));
  }

  componentDidMount() {
    this.props.panesMounted();
  }

  componentWillUnmount() {
    this.props.panesWillUnmount();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nameToComponent !== this.props.nameToComponent) {
      this.props.panesUpdated(Object.keys(nextProps.nameToComponent));
    }
  }

  renderPanes() {
    const {
      nameToComponent,
      panes
    } = this.props;
    return panes.map(({ name, left, right, dividerLeft }) => {
      const { Component } = nameToComponent[name] || {};
      const FinalComponent = Component ? Component : 'span';
      const divider = dividerLeft ?
        (
          <Divider
            key={ name + 'divider' }
            left={ dividerLeft }
            name={ name }
          />
        ) :
        null;

      return [
        <Pane
          key={ name }
          left={ left }
          right={ right }
          >
          <FinalComponent />
        </Pane>,
        divider
      ];
    }).reduce((panes, pane) => panes.concat(pane), [])
      .filter(Boolean);
  }

  render() {
    const { height } = this.props;
    const outerStyle = {
      position: 'relative',
      height,
      width: '100%'
    };
    const innerStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
    return (
      <div style={outerStyle}>
        <div style={innerStyle}>
          { this.renderPanes() }
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
