import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Button,
  FormGroup,
  ControlLabel,
  Checkbox
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';

import { ButtonSpacer, Spacer } from '../components/helpers';
import { acceptTerms, userSelector } from '../redux';
import createRedirect from '../components/createRedirect';

const propTypes = {
  acceptTerms: PropTypes.func.isRequired,
  acceptedPrivacyTerms: PropTypes.bool,
  isSignedIn: PropTypes.bool
};

const mapStateToProps = createSelector(
  userSelector,
  ({ acceptedPrivacyTerms }) => ({
    acceptedPrivacyTerms
  })
);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

class AcceptPrivacyTerms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quincyEmail: false
    };
    this.createHandleChange = this.createHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createHandleChange(prop) {
    return () =>
      this.setState(prevState => ({
        [prop]: !prevState[prop]
      }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { quincyEmail } = this.state;

    return this.props.acceptTerms(quincyEmail);
  }

  componentWillUnmount() {
    // if a user navigates away from here we should set acceptedPrivacyTerms
    // to true (so they do not get pulled back) without changing their email
    // preferences (hence the null payload)
    // This ensures the user has to click the checkbox and then click the
    // 'Continue...' button to sign up.
    if (!this.props.acceptedPrivacyTerms) {
      this.props.acceptTerms(null);
    }
  }

  render() {
    const { acceptedPrivacyTerms } = this.props;
    if (acceptedPrivacyTerms) {
      return <RedirectToLearn />;
    }
    const { quincyEmail } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Email Sign Up | freeCodeCamp.org</title>
        </Helmet>
        <Spacer size={2} />
        <Row className='text-center'>
          <Col sm={8} smOffset={2} xs={12}>
            <h1>Email Sign Up </h1>
          </Col>
        </Row>
        <Spacer size={2} />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel htmlFor='quincy-email'>
                  Quincy's Emails
                </ControlLabel>
                <Spacer />
                <Checkbox
                  checked={quincyEmail}
                  id='quincy-email'
                  inline={true}
                  onChange={this.createHandleChange('quincyEmail')}
                >
                  I want weekly emails from Quincy, freeCodeCamp.org's founder.
                </Checkbox>
              </FormGroup>
              <ButtonSpacer />
              <Button
                block={true}
                bsStyle='primary'
                className='big-cta-btn'
                type='submit'
              >
                Continue to freeCodeCamp.org
              </Button>
              <Spacer size={2} />
            </form>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

AcceptPrivacyTerms.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcceptPrivacyTerms);
