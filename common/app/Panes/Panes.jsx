import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  panesSelector,
  panesByNameSelector,
  panesMounted,
  widthSelector
} from './redux';
import Pane from './Pane.jsx';
import Divider from './Divider.jsx';

const mapStateToProps = createSelector(
  panesSelector,
  panesByNameSelector,
  widthSelector,
  (panes, panesByName) => {
    let lastDividerPosition = 0;
    return {
      panes: panes
        .map(({ name }) => panesByName[name])
        .filter(({ isHidden })=> !isHidden)
        .map((pane, index, { length: numOfPanes }) => {
          const dividerLeft = pane.dividerLeft || 0;
          const left = lastDividerPosition;
          lastDividerPosition = dividerLeft;
          return {
            ...pane,
            left: index === 0 ? 0 : left,
            right: index + 1 === numOfPanes ? 0 : 100 - dividerLeft
          };
        }, {})
    };
  }
);

const mapDispatchToProps = { panesMounted };

const propTypes = {
  panes: PropTypes.array,
  panesMounted: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
};

export class Panes extends PureComponent {
  componentDidMount() {
    this.props.panesMounted();
  }
  renderPanes() {
    const {
      render,
      panes
    } = this.props;
    return panes.map(({ name, left, right, dividerLeft }) => {
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
          { render(name) }
        </Pane>,
        divider
      ];
    }).reduce((panes, pane) => panes.concat(pane), [])
      .filter(Boolean);
  }

  render() {
    const outerStyle = {
      height: '100%',
      position: 'relative',
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
