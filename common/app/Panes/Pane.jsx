import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = null;
const mapDispatchToProps = null;
const propTypes = {
  children: PropTypes.element,
  left: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired
};

export function Pane({
  children,
  left,
  right
}) {
  const style = {
    bottom: 0,
    left: left + '%',
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    right: right + '%',
    top: 0,
    paddingLeft: '0px',
    paddingRight: '0px'
  };
  return (
    <div style={ style }>
      { children }
    </div>
  );
}
Pane.displayName = 'Pane';
Pane.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);
