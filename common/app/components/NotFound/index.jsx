import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { hardGoTo } from '../../redux/actions';

const propTypes = {
  hardGoTo: PropTypes.func,
  location: PropTypes.object
};

export class NotFound extends React.Component {


  componentWillMount() {
    this.props.hardGoTo(this.props.location.pathname);
  }

  render() {
    return <span />;
  }
}

NotFound.displayName = 'NotFound';
NotFound.propTypes = propTypes;

export default connect(null, { hardGoTo })(NotFound);
