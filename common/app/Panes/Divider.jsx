import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = null;
const mapDispatchToProps = null;
const propTypes = {
};

export class Divider extends PureComponent {
  render() {
    return (
      <span />
    );
  }
}
Divider.displayName = 'Divider';
Divider.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Divider);
