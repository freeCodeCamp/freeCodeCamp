import React, { PropTypes } from 'react';
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
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: left + '%',
    right: right + '%'
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
