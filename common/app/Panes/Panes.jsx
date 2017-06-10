import React, { createElement, PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  panesMounted,
  panesUpdated,
  panesWillMount,

  dividerPositionsSelector,
  heightSelector,
  widthSelector
} from './redux';
import Pane from './Pane.jsx';
import Divider from './Divider.jsx';

const mapStateToProps = createSelector(
  dividerPositionsSelector,
  heightSelector,
  widthSelector,
  (dividerPositions, height, width) => {
    return {
      dividerPositions,
      height,
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
  dividerPositions: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  panes: PropTypes.array.isRequired,
  panesMounted: PropTypes.func.isRequired,
  panesUpdated: PropTypes.func.isRequired,
  panesWillMount: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

export class Panes extends PureComponent {
  componentWillMount() {
    this.props.panesWillMount(this.props.panes.length);
  }

  componentDidMount() {
    this.props.panesMounted();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.panes.length !== this.props.panes.length) {
      this.props.panesUpdated(nextProps.panes.length);
    }
  }

  renderPanes() {
    const {
      panes,
      dividerPositions,
      width
    } = this.props;
    const numOfPanes = panes.length;
    let lastDividerPosition = 0;
    const dividerRatio = (8 / width) * 100;
    return panes.map(({ component, render, ident }, index) => {
      const element = component ? createElement(component) : render();
      const dividerLeft = dividerPositions[index] || 0;
      const left = lastDividerPosition;
      const right = index + 1 === numOfPanes ?
        0 :
        100 - dividerLeft - dividerRatio;
      lastDividerPosition = dividerLeft;
      const divider = index + 1 < numOfPanes ?
        (
          <Divider
            index={ index }
            key={ index }
            left={ dividerLeft }
          />
        ) :
        null;

      return [
        <Pane
          index={ index }
          key={ ident }
          left={ left }
          right={ right }
          >
          { element }
        </Pane>,
        divider
      ];
    }).reduce((panes, pane) => panes.concat(pane), [])
      .filter(Boolean);
  }

  render() {
    const { height, width } = this.props;
    const outerStyle = {
      position: 'relative',
      height,
      width
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
