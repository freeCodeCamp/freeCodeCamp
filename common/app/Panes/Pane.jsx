import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';


import Divider from './Divider.jsx';
import {
  makePaneSelector
} from './redux';

const mapStateToProps = createSelector(
  makePaneSelector((_, { ident }) => ident),
  ({ id, ratio, isLastPane }) => {
    return {
      paneId: id,
      isLastPane,
      ratio
    };
  }
);
const mapDispatchToProps = null;
const propTypes = {
  children: PropTypes.element,
  ident: PropTypes.string,
  isLastPane: PropTypes.bool,
  left: PropTypes.number,
  paneId: PropTypes.number,
  right: PropTypes.number
};

export function Pane({
  children,
  isLastPane,
  left,
  paneId,
  right
}) {
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left,
    right
  };
  return (
    <div style={ style }>
      { children }
      { isLastPane ? null : <Divider paneId={ paneId } /> }
    </div>
  );
}
Pane.displayName = 'Pane';
Pane.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);
