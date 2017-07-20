import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import Panes from './Panes.jsx';
import {
  panesMounted,
  panesUpdated,
  panesWillMount,
  panesWillUnmount
} from './redux';

const mapStateToProps = null;
const mapDispatchToProps = {
  panesMounted,
  panesUpdated,
  panesWillMount,
  panesWillUnmount
};

const propTypes = {
  nameToComponent: PropTypes.object.isRequired,
  panesMounted: PropTypes.func.isRequired,
  panesUpdated: PropTypes.func.isRequired,
  panesWillMount: PropTypes.func.isRequired,
  panesWillUnmount: PropTypes.func.isRequired
};

export class PanesContainer extends PureComponent {
  componentWillMount() {
    this.props.panesWillMount(Object.keys(this.props.nameToComponent));
  }
  componentDidMount() {
    this.props.panesMounted();
  }

  componentWillUnmount() {
    this.props.panesWillUnmount();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nameToComponent !== this.props.nameToComponent) {
      this.props.panesUpdated(Object.keys(nextProps.nameToComponent));
    }
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
