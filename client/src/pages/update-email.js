import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import Layout from '../components/Layout';
import { Spacer } from '../components/helpers';
import './update-email.css';
import { userSelector, updateMyEmail } from '../redux';
import { isString } from 'lodash';
import isEmail from 'validator/lib/isEmail';

const propTypes = {
  isNewEmail: PropTypes.bool,
  updateMyEmail: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  userSelector,
  ({ email, emailVerified }) => ({
    isNewEmail: !email || emailVerified
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMyEmail }, dispatch);

const maybeEmailRE = /[\w.+]*?@\w*?\.\w+?/;

class UpdateEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: ''
    };

    // this.createSubmitHandler = this.createSubmitHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  createSubmitHandler(fn) {
    return e => {
      e.preventDefault();
      return fn(this.state.emailValue);
    };
  }

  onChange(e) {
    const change = e.target.value;
    if (!isString(change)) {
      return null;
    }
    return this.setState({
      emailValue: change
    });
  }

  getEmailValidationState() {
    const { emailValue } = this.state;
    if (maybeEmailRE.test(emailValue)) {
      return isEmail(emailValue) ? 'success' : 'error';
    }
    return null;
  }

  render() {
    const { isNewEmail, updateMyEmail } = this.props;
    return (
      <Layout>
        <Spacer />
        <h2 className='text-center'>Update your email address here:</h2>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <Row>
                <Form
                  horizontal={true}
                  onSubmit={this.createSubmitHandler(updateMyEmail)}
                  >
                  <FormGroup
                    controlId='emailInput'
                    validationState={this.getEmailValidationState()}
                    >
                    <Col
                      className='email-label'
                      componentClass={ControlLabel}
                      sm={2}
                      >
                      Email
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        onChange={this.onChange}
                        placeholder='camperbot@example.com'
                        required={true}
                        type='email'
                      />
                    </Col>
                  </FormGroup>
                  <Button
                    block={true}
                    bsSize='lg'
                    bsStyle='primary'
                    disabled={this.getEmailValidationState() !== 'success'}
                    type='submit'
                    >
                    {isNewEmail ? 'Update my Email' : 'Verify Email'}
                  </Button>
                </Form>
                <p className='text-center'>
                  <Link to='/signout'>Sign out</Link>
                </p>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

UpdateEmail.displayName = 'Update-Email';
UpdateEmail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateEmail);
