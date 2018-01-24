import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Button,
  Grid
} from 'react-bootstrap';

import {
  updateTitle,
  signInLoadingSelector,
  userSelector
} from '../../redux';
import ns from './ns.json';
import ChildContainer from '../../Child-Container.jsx';
import { Link } from '../../Router';
import CamperHOC from './components/CamperHOC.jsx';
import Portfolio from './components/Portfolio.jsx';
import Certificates from './components/Certificates.jsx';
import Timeline from './components/Timeline.jsx';
import HeatMap from './components/HeatMap.jsx';
import { FullWidthRow } from '../../helperComponents';

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  (
    {
      isLocked
    },
    showLoading
  ) => ({
    isLocked,
    showLoading
  })
);

const mapDispatchToProps = {
  updateTitle
};

const propTypes = {
  isLocked: PropTypes.bool,
  showLoading: PropTypes.bool,
  updateTitle: PropTypes.func.isRequired
};

class Profile extends React.Component {

  componentWillMount() {
    this.props.updateTitle('Profile');
  }

  render() {
    return (
      <ChildContainer>
        <Grid className={`${ns}-container`}>
          <FullWidthRow>
            <Link to='/settings'>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                >
                Update my settings
              </Button>
            </Link>
          </FullWidthRow>
          <FullWidthRow>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              href='/logout'
              >
              Sign me out of freeCodeCamp
            </Button>
          </FullWidthRow>
          <br />
          <CamperHOC />
          <HeatMap />
          <Certificates />
          <Portfolio />
          <Timeline className='timelime-container' />
        </Grid>
      </ChildContainer>
    );
  }
}

Profile.displayName = 'Profile';
Profile.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
