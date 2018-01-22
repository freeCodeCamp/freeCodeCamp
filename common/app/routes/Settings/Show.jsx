import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ns from './ns.json';
import { userSelector, signInLoadingSelector } from '../../redux';
import Settings from './Settings.jsx';
import UpdateEmail from './routes/update-email';
import ChildContainer from '../../Child-Container.jsx';

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ email }, showLoading) => ({
    showUpdateEmail: !email && !showLoading
  })
);

const mapDispatchToProps = null;
const propTypes = {
  showUpdateEmail: PropTypes.bool
};

export function ShowSettings({ showUpdateEmail }) {
  return (
    <ChildContainer>
      <div className={ `${ns}-container` }>
        { showUpdateEmail ? <UpdateEmail /> : <Settings /> }
      </div>
    </ChildContainer>
  );
}
ShowSettings.displayName = 'ShowSettings';
ShowSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSettings);
