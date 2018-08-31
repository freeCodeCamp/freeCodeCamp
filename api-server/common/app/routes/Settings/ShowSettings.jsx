import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import ns from './ns.json';
import { showUpdateEmailViewSelector } from './redux';
import Settings from './Settings.jsx';
import UpdateEmail from './routes/update-email';
import ChildContainer from '../../Child-Container.jsx';

const mapStateToProps = state => ({
  showUpdateEmailView: showUpdateEmailViewSelector(state)
});

const propTypes = {
  showUpdateEmailView: PropTypes.bool
};

export function ShowSettings({ showUpdateEmailView }) {
  let ChildComponent = Settings;

  if (showUpdateEmailView) {
    ChildComponent = UpdateEmail;
  }

  return (
    <ChildContainer>
      <Grid className={ `${ns}-container` }>
        <ChildComponent />
      </Grid>
    </ChildContainer>
  );
}

ShowSettings.displayName = 'ShowSettings';
ShowSettings.propTypes = propTypes;

export default connect(
  mapStateToProps
)(ShowSettings);
