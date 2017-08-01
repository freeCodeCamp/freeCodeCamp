import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { dividerClicked } from './redux';

const mapStateToProps = null;
function mapDispatchToProps(dispatch, { name }) {
  const dispatchers = {
    dividerClicked: () => dispatch(dividerClicked(name))
  };
  return () => dispatchers;
}

const propTypes = {
  dividerClicked: PropTypes.func.isRequired,
  left: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export function Divider({ left, dividerClicked }) {
  const style = {
    borderLeft: '1px solid rgb(204, 204, 204)',
    bottom: 0,
    cursor: 'col-resize',
    height: '100%',
    left: left + '%',
    marginLeft: '-4px',
    position: 'absolute',
    right: 'auto',
    top: 0,
    width: '8px',
    zIndex: 100
  };
  // use onMouseDown as onClick does not fire
  // until onMouseUp
  // note(berks): do we need touch support?
  return (
    <div
      onMouseDown={ dividerClicked }
      style={ style }
    />
  );
}
Divider.displayName = 'Divider';
Divider.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Divider);
