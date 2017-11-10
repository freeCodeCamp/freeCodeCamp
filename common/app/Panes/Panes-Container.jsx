import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Panes from './Panes.jsx';
import { panesMounted } from './redux';

const mapStateToProps = null;
const mapDispatchToProps = {
  panesMounted
};

const propTypes = {
  nameToComponent: PropTypes.object.isRequired,
  panesMounted: PropTypes.func.isRequired
};

export class PanesContainer extends PureComponent {
  componentDidMount() {
    this.props.panesMounted();
  }
  render() {
    return (
      <Panes { ...this.props } />
    );
  }
}
PanesContainer.displayName = 'PanesContainer';
PanesContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanesContainer);
