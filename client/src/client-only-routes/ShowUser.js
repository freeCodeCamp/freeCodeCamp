import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Link, navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Col
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import {
  isSignedInSelector,
  userFetchStateSelector,
  userSelector,
  reportUser
} from '../redux';
import { Spacer, Loader, FullWidthRow } from '../components/helpers';

const propTypes = {
  email: PropTypes.string,
  isSignedIn: PropTypes.bool,
  reportUser: PropTypes.func.isRequired,
  userFetchState: PropTypes.shape({
    pending: PropTypes.bool,
    comnplete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  username: PropTypes.string
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  userFetchStateSelector,
  userSelector,
  (isSignedIn, userFetchState, { email }) => ({
    isSignedIn,
    userFetchState,
    email
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ reportUser }, dispatch);

class ShowUser extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      textarea: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleChange(e) {
    const textarea = e.target.value.slice();
    return this.setState({
      textarea
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { textarea: reportDescription } = this.state;
    const { username, reportUser } = this.props;
    return reportUser({ username, reportDescription });
  }
  setNavigationTimer() {
    if (!this.timer) {
      this.timer = setTimeout(() => navigate('/signin'), 5000);
    }
  }

  render() {
    const { username, isSignedIn, userFetchState, email } = this.props;
    const { pending, complete, errored } = userFetchState;
    if (pending && !complete) {
      return <Loader fullScreen={true} />;
    }

    if ((complete || errored) && !isSignedIn) {
      this.setNavigationTimer();
      return (
        <main>
          <FullWidthRow>
            <Spacer />
            <Spacer />
            <Panel bsStyle='info'>
              <Panel.Heading>
                <Panel.Title componentClass='h3'>
                  You need to be signed in to report a user
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body className='text-center'>
                <Spacer />
                <p>
                  You will be redirected to sign in to freeCodeCamp.org
                  automatically in 5 seconds
                </p>
                <p>
                  <Link to='/signin'>
                    Or you can here if you do not want to wait
                  </Link>
                </p>
                <Spacer />
              </Panel.Body>
            </Panel>
          </FullWidthRow>
        </main>
      );
    }

    const { textarea } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>Report a users profile | freeCodeCamp.org</title>
        </Helmet>
        <FullWidthRow>
          <Spacer />
          <Spacer />
          <Col md={8} mdOffset={2}>
            <h2>
              Do you want to report {username}
              's profile for abuse?
            </h2>
            <p>
              We will notify the community moderators' team, and a send copy of
              this report to your email:{' '}
              <span className='green-text'>{email}</span>.
            </p>
            <p>We may get back to you for more information, if required.</p>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId='report-user-textarea'>
                <ControlLabel>Additional Information</ControlLabel>
                <FormControl
                  componentClass='textarea'
                  onChange={this.handleChange}
                  placeholder=''
                  value={textarea}
                />
              </FormGroup>
              <Button block={true} bsStyle='primary' type='submit'>
                Submit the report
              </Button>
            </form>
          </Col>
        </FullWidthRow>
      </Fragment>
    );
  }
}

ShowUser.displayName = 'ShowUser';
ShowUser.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUser);
