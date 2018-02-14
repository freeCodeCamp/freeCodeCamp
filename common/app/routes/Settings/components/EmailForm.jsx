import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import {
  Row,
  Col,
  ControlLabel,
  FormControl,
  HelpBlock,
  Alert
} from 'react-bootstrap';
import { updateUserBackend } from '../redux';
import { FullWidthRow, Spacer } from '../../../helperComponents';
import { BlockSaveButton, BlockSaveWrapper, validEmail } from '../formHelpers';

const propTypes = {
  email: PropTypes.string,
  errors: PropTypes.object,
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  handleSubmit: PropTypes.func.isRequired,
  updateUserBackend: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

const mapDispatchtoProps = { updateUserBackend };

function validator(values) {
  const errors = {};
  const { email = '', confirmEmail = '' } = values;

  errors.email = validEmail(email);
  if (errors.email || errors.confirmEmail) {
    return errors;
  }
  errors.confirmEmail = email.toLowerCase() === confirmEmail.toLowerCase() ?
    null :
    'Emails should be the same';

    return errors;
}

class EmailForm extends PureComponent {
  constructor(props) {
    super(props);

    this.options = {
      required: [ 'confirmEmail', 'email' ],
      types: { confirmemail: 'email', email: 'email' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { updateUserBackend } = this.props;
    const update = {
      email: values.email
    };
    updateUserBackend(update);
  }

  render() {

    const {
      fields: { email, confirmEmail },
      handleSubmit
    } = this.props;

    const disableForm = (email.pristine && confirmEmail.pristine) ||
      (!!email.error || !!confirmEmail.error);

    return (
      <form id='email-form' onSubmit={ handleSubmit(this.handleSubmit) }>
        <Row className='inline-form-field'>
            <Col sm={ 3 } xs={ 12 }>
              <ControlLabel htmlFor='email'>
                Email
              </ControlLabel>
            </Col>
            <Col sm={ 9 } xs={ 12 }>
              <FormControl
                bsSize='lg'
                id='email'
                name='email'
                onChange={ email.onChange }
                required={ true }
                type='email'
                value={ email.value }
              />
            </Col>
          </Row>
          <FullWidthRow>
            {
              !email.pristine && email.error ?
              <HelpBlock>
                <Alert bsStyle='danger'>
                  { email.error }
                </Alert>
              </HelpBlock> :
              null
            }
          </FullWidthRow>
          <Row className='inline-form-field'>
            <Col sm={ 3 } xs={ 12 }>
              <ControlLabel htmlFor='confirm-email'>
                Confirm Email
              </ControlLabel>
            </Col>
            <Col sm={ 9 } xs={ 12 }>
              <FormControl
                bsSize='lg'
                id='confirm-email'
                name='confirm-email'
                onChange={ confirmEmail.onChange }
                required={ true }
                type='email'
                value={ confirmEmail.value }
              />
            </Col>
          </Row>
          <FullWidthRow>
            {
              !confirmEmail.pristine && confirmEmail.error ?
              <HelpBlock>
                <Alert bsStyle='danger'>
                  { confirmEmail.error }
                </Alert>
              </HelpBlock> :
              null
            }
          </FullWidthRow>
          <Spacer />
          <BlockSaveWrapper>
            <BlockSaveButton disabled={ disableForm } />
          </BlockSaveWrapper>
      </form>
    );
  }
}

EmailForm.displayName = 'EmailForm';
EmailForm.propTypes = propTypes;

export default reduxForm(
  {
    form: 'email-form',
    fields: [ 'confirmEmail', 'email' ],
    validate: validator
  },
  mapStateToProps,
  mapDispatchtoProps
)(EmailForm);
