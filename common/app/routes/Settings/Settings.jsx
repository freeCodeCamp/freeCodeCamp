import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Col, Grid, Row } from 'react-bootstrap';

import ns from './ns.json';
import AccountSettings from './components/Account-Settings.jsx';
import EmailSettings from './components/Email-Settings.jsx';
import InternetSettings from './components/Internet-Settings.jsx';
import PortfolioSettings from './components/Portfolio-Settings.jsx';
import ProjectSettings from './components/Project-Settings.jsx';
import SettingsSkeleton from './components/Settings-Skeleton.jsx';
import JobSettings from './components/Job-Settings.jsx';
import LanguageSettings from './components/Language-Settings.jsx';
import ChildContainer from '../../Child-Container.jsx';
import { Link } from '../../Router';
import {
  updateTitle,
  signInLoadingSelector,
  userSelector,
  hardGoTo
} from '../../redux';

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ username }, showLoading) => ({
    showLoading,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  updateTitle
};

const propTypes = {
  hardGoTo: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

class Settings extends React.Component {

  componentDidMount() {
    this.props.updateTitle('Settings');
  }
  componentWillReceiveProps({ username, showLoading, hardGoTo }) {
    if (!username && !showLoading) {
      hardGoTo('/signup');
    }
  }

  render() {
    const {
      showLoading,
      username
    } = this.props;

    if (!username && showLoading) {
      return <SettingsSkeleton />;
    }

    return (
      <ChildContainer>
        <Grid>
          <div className={`container ${ns}-container`}>
            <Row>
              <Col xs={ 8 } xsOffset={ 2 }>
                <Link to={ `/${username}` }>
                  <Button
                    block={ true }
                    bsStyle='primary'
                    >
                    View my Public Profile
                  </Button>
                </Link>
              </Col>
            </Row>
            <AccountSettings />
            <hr />
            <EmailSettings />
            <hr />
            <LanguageSettings />
            <hr />
            <InternetSettings />
            <hr />
            <JobSettings />
            <hr />
            <PortfolioSettings/>
            <hr />
            <ProjectSettings/>
            <hr />
          </div>
        </Grid>
      </ChildContainer>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
