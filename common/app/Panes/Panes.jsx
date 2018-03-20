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
import { fetchRandomQuote } from './quotes';

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

let quoteObj = fetchRandomQuote();

export class Panes extends PureComponent {
  componentDidMount() {
    this.props.panesMounted();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.panes.length === 0 && this.props.panes.length === 1) {
      const currentQuote = quoteObj.quote;
      let newQuoteObj = fetchRandomQuote();
      while (currentQuote === newQuoteObj.quote) {
        newQuoteObj = fetchRandomQuote();
      }
      quoteObj = newQuoteObj;
    }
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
    return (
      <div className='outer-flex-container'>
        <div className='quote-container'>
          <h2 className='quote-style'>&ldquo;{quoteObj.quote}&rdquo;</h2>
          <h2 className='author-style'><i>&mdash;{quoteObj.author}</i></h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='outer-style'>
        <div className='inner-style'>
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
