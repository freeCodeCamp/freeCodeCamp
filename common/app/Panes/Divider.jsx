import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = null;
const mapDispatchToProps = null;
const propTypes = {
  left: PropTypes.number.isRequired
};

export function Divider({ left }) {
  const style = {
    borderLeft: '1px solid #ccc',
    bottom: 0,
    cursor: 'col-resize',
    height: '100%',
    left: left + '%',
    position: 'absolute',
    right: 'auto',
    top: 0,
    width: '8px',
    zIndex: 999999
  };
  return (
    <div
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
