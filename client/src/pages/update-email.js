import React, { Component, Fragment } from 'react';
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
} from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import isEmail from 'validator/lib/isEmail';
import { isString } from 'lodash';

import { Spacer } from '../components/helpers';
import './update-email.css';
import { userSelector } from '../redux';
import { updateMyEmail } from '../redux/settings';
import { maybeEmailRE } from '../utils';

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

class UpdateEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { emailValue } = this.state;
    const { updateMyEmail } = this.props;
    return updateMyEmail(emailValue);
  };

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
    const { isNewEmail } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Update your email address | freeCodeCamp.org</title>
        </Helmet>
        <Spacer />
        <h2 className='text-center'>Update your email address here:</h2>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <Row>
                <Form horizontal={true} onSubmit={this.handleSubmit}>
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
      </Fragment>
    );
  }
}

UpdateEmail.displayName = 'Update-Email';
UpdateEmail.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateEmail);
