import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ns from './ns.json';
import { showUpdateEmailViewSelector } from './redux';
import Settings from './Settings.jsx';
import UpdateEmail from './routes/update-email';
import ChildContainer from '../../Child-Container.jsx';

const mapStateToProps = state => ({
  showUpdateEmailView: showUpdateEmailViewSelector(state)
});
const mapDispatchToProps = null;
const propTypes = {
  showUpdateEmailView: PropTypes.bool
};

export function ShowSettings({ showUpdateEmailView }) {
  let Comp = Settings;
  if (showUpdateEmailView) {
    Comp = UpdateEmail;
  }
  return (
    <ChildContainer>
      <div className={ `${ns}-container` }>
        <Comp />
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
