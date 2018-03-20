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

const quoteObj = require('./quotes').fetchRandomQuote();

export class Panes extends PureComponent {
  componentDidMount() {
    this.props.panesMounted();
  }
  renderPanes() {
    const {
      render,
      panes
    } = this.props;
    if (panes.length > 0) {
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
    } else {
      return this.renderQuote();
    }
  }
  renderQuote() {
    const outerFlexContainer = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '66%',
      margin: 'auto'
      // padding: '0 20px 0 20px'
    };
    const quoteStyle = {
      // textAlign: 'center',
      color: '#006400'
    };
    const authorStyle = {
      textAlign: 'center'
    };
    const logoStyle = {
      margin: 'auto',
      // maxHeight: '40px',
      maxHeight: '35px',
      alignSelf: 'center'
    };
    const flexLength = {
      flex: 1
    };
    const quoteBlock = {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      margin: 'auto'
    };
    const logoBlock = {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    };
    return (
      <div style={outerFlexContainer}>
        <div style={flexLength} />
        <div style={quoteBlock}>
          <div style={quoteStyle}>
            <h2>{quoteObj.quote}</h2>
            <h2 style={authorStyle}><i>&mdash;{quoteObj.author}</i></h2>
          </div>
        </div>
        <div style={logoBlock}>
          <img className='img-responsive'
            src={'https://design-style-guide.freecodecamp.org' +
            '/downloads/freeCodeCamp-alternative.jpg'}
            style={logoStyle}
          />
        </div>
      </div>
    );
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
