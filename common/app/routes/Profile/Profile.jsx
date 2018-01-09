import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Button,
  Row,
  Col
} from 'react-bootstrap';

import {
  updateTitle,
  signInLoadingSelector,
  userSelector
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';
import { Link } from '../../Router';
import Camper from './components/Camper.jsx';
import Portfolio from './components/Portfolio.jsx';
import Certificates from './components/Certificates.jsx';
import Timeline from './Timeline.jsx';


const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  (
    {
      email,
      isAvailableForHire,
      isLocked
    }
  ) => ({
    email,
    isAvailableForHire,
    isLocked
  })
);

const mapDispatchToProps = {
  updateTitle
};

const propTypes = {
  children: PropTypes.element,
  initialLang: PropTypes.string,
  lang: PropTypes.string,
  updateMyLang: PropTypes.func,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

class Profile extends React.Component {

  componentWillMount() {
    this.props.updateTitle('Profile');
  }

  render() {
    return (
      <ChildContainer>
        <div className='container profile-container'>
          <div>
            <Row>
              <Col md={ 4 } mdPush={ 1 }>
                <Link to='/settings'>
                  <Button
                    block={ true }
                    bsSize='lg'
                    bsStyle='primary'
                    >
                    Update my settings
                  </Button>
                </Link>
              </Col>
              <Col md={ 4 } mdPush={ 3 }>
                <Button
                  block={ true }
                  bsSize='lg'
                  bsStyle='primary'
                  href='/logout'
                  >
                  Sign me out of freeCodeCamp
                </Button>
              </Col>
            </Row>
            <br />
            <Camper />
          </div>
          <div className='heatmap-container'/>
          <hr />
          <Certificates />
          <hr />
          <Portfolio />
          <Timeline className='timelime-container' />
        </div>
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
