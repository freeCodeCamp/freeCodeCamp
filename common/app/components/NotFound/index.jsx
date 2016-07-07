import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { hardGoTo } from '../../redux/actions';

export class NotFound extends React.Component {
  static displayName = 'NotFound';

  static propTypes = {
    location: PropTypes.object,
    hardGoTo: PropTypes.func
  };

  componentWillMount() {
    this.props.hardGoTo(this.props.location.pathname);
  }

  render() {
    return <span />;
  }
}

export default connect(null, { hardGoTo })(NotFound);
