import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ns from './ns.json';
import { isJSEnabledSelector } from './redux';
import {Alert} from 'react-bootstrap';


const mainId = 'fcc-main-frame';

const mapStateToProps = state => ({
  isJSEnabled: isJSEnabledSelector(state)
});
const mapDispatchToProps = null;
const propTypes = {
  isJSEnabled: PropTypes.bool
};

export class Preview extends PureComponent {
  render() {
    const {
      isJSEnabled
    } = this.props;
    return (
      <div className={ `${ns}-preview` }>
        {
          !isJSEnabled && (
            <Alert
            bsStyle='info'
            className={ `${ns}-preview-js-warning`}
            >
              JavaScript is disabled. Execute code to enable
            </Alert>
          )
        }
        <iframe
          className={ `${ns}-preview-frame` }
          id={ mainId }
        />
      </div>
    );
  }
}

Preview.propTypes = propTypes;
Preview.displayName = 'Preview';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
