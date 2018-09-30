import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col,
  Button,
  FormGroup,
  ControlLabel,
  Checkbox
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import Layout from '../components/layouts/Default';
import { ButtonSpacer, Spacer } from '../components/helpers';
import { acceptTerms, userSelector } from '../redux';
import { createSelector } from 'reselect';
import { navigate } from 'gatsby';

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

class AcceptPrivacyTerms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privacyPolicy: false,
      termsOfService: false,
      quincyEmail: true
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
    const { privacyPolicy, termsOfService, quincyEmail } = this.state;
    if (!privacyPolicy || !termsOfService) {
      return null;
    }
    return this.props.acceptTerms(quincyEmail);
  }

  render() {
    const { acceptedPrivacyTerms } = this.props;
    if (acceptedPrivacyTerms) {
      navigate('/welcome');
      return null;
    }
    const { privacyPolicy, termsOfService, quincyEmail } = this.state;
    return (
      <Layout>
        <Helmet>
          <title>Privacy Policy and Terms of Service | freeCodeCamp.org</title>
        </Helmet>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='text-center'>
                <Spacer />
                <Spacer />
                <h3>
                  Please review our updated privacy policy and the terms of
                  service.
                </h3>
                <Spacer />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6} smOffset={3}>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <ControlLabel htmlFor='terms-of-service'>
                    Terms of Service
                  </ControlLabel>
                  <Spacer />
                  <Checkbox
                    checked={termsOfService}
                    id='terms-of-service'
                    inline={true}
                    onChange={this.createHandleChange('termsOfService')}
                    >
                    I accept the{' '}
                    <a
                      href='https://www.freecodecamp/terms'
                      rel='noopener noreferrer'
                      target='_blank'
                      >
                      terms of service
                    </a>{' '}
                    (required)
                  </Checkbox>
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor='privacy-policy'>
                    Privacy Policy
                  </ControlLabel>
                  <Spacer />
                  <Checkbox
                    checked={privacyPolicy}
                    id='privacy-policy'
                    inline={true}
                    onChange={this.createHandleChange('privacyPolicy')}
                    >
                    I accept the{' '}
                    <a
                      href='https://www.freecodecamp/privacy'
                      rel='noopener noreferrer'
                      target='_blank'
                      >
                      privacy policy
                    </a>{' '}
                    (required)
                  </Checkbox>
                </FormGroup>
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
                    I want weekly emails from Quincy, freeCodeCamp.org's
                    founder.
                  </Checkbox>
                </FormGroup>
                <ButtonSpacer />
                <Button
                  block={true}
                  bsStyle='primary'
                  className='big-cta-btn'
                  disabled={!privacyPolicy || !termsOfService}
                  type='submit'
                  >
                  Continue to freeCodeCamp
                </Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

AcceptPrivacyTerms.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcceptPrivacyTerms);
