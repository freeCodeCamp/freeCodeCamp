import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Col,
  Row
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { apiLocation } from '../../config/env.json';

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
  navigate: PropTypes.func.isRequired,
  reportUser: PropTypes.func.isRequired,
  userFetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
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
  bindActionCreators(
    {
      navigate,
      reportUser
    },
    dispatch
  );

class ShowUser extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      textarea: '',
      time: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
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

  setNavigationTimer(navigate) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.state.time <= 0) {
          navigate(`${apiLocation}/signin`);
        }
        this.setState({ time: this.state.time - 1 });
      }, 1000);
    }
  }

  render() {
    const { username, isSignedIn, userFetchState, email } = this.props;
    const { pending, complete, errored } = userFetchState;
    if (pending && !complete) {
      return <Loader fullScreen={true} />;
    }

    if ((complete || errored) && !isSignedIn) {
      const { navigate } = this.props;
      this.setNavigationTimer(navigate);
      return (
        <main>
          <FullWidthRow>
            <Spacer size={2} />
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
                  automatically in {this.state.time} seconds
                </p>
                <p>
                  <Button
                    bsStyle='default'
                    href='/signin'
                    onClick={e => {
                      e.preventDefault();
                      return navigate(`${apiLocation}/signin`);
                    }}
                  >
                    Or click here if you do not want to wait
                  </Button>
                </p>
                <Spacer />
              </Panel.Body>
            </Panel>
          </FullWidthRow>
        </main>
      );
    }

    const { textarea } = this.state;
    const placeholderText = `Please provide as much detail as possible about the account or behavior you are reporting.`;
    return (
      <Fragment>
        <Helmet>
          <title>Report a users portfolio | freeCodeCamp.org</title>
        </Helmet>
        <Spacer size={2} />
        <Row className='text-center'>
          <Col sm={8} smOffset={2} xs={12}>
            <h2>
              Do you want to report {username}
              's portfolio for abuse?
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6} smOffset={3} xs={12}>
            <p>
              We will notify the community moderators' team, and a send copy of
              this report to your email: <strong>{email}</strong>
            </p>
            <p>We may get back to you for more information, if required.</p>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId='report-user-textarea'>
                <ControlLabel>What would you like to report?</ControlLabel>
                <FormControl
                  componentClass='textarea'
                  onChange={this.handleChange}
                  placeholder={placeholderText}
                  value={textarea}
                />
              </FormGroup>
              <Button block={true} bsStyle='primary' type='submit'>
                Submit the report
              </Button>
              <Spacer />
            </form>
          </Col>
        </Row>
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
