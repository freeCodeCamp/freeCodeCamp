import React, { PropTypes } from 'react';
import { Button, HelpBlock, FormControl, FormGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { reduxForm } from 'redux-form';
import { isEmail } from 'validator';
import { getValidationState } from '../../../../utils/form';
import { updateMyEmail } from '../../redux/actions';

const actions = {
  updateMyEmail
};
const fields = [
  'email',
  'duplicate'
];
const validateFields = ({ email, duplicate }) => {
  const errors = {};
  if (!isEmail('' + email)) {
    errors.email = 'This email is invalid.';
  }
  if (duplicate && email !== duplicate) {
    errors.duplicate = 'This email does not match the one above.';
  }
  return errors;
};
const mapStateToProps = state => {
  const {
    app: { user: username },
    entities: { user: userMap }
  } = state;
  const { email, emailVerified } = userMap[username] || {};
  return {
    initialValues: { email },
    isEmailThere: !!email,
    isVerified: !!emailVerified
  };
};

export class UpdateEmail extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static displayName = 'UpdateEmail';
  static propTypes = {
    isEmailThere: PropTypes.bool,
    isVerified: PropTypes.bool,
    fields: PropTypes.object.isRequired,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    updateMyEmail: PropTypes.func.isRequired
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(({ email }) => this.props.updateMyEmail(email))(e);
  }

  render() {
    const {
      isEmailThere,
      isVerified,
      fields: { email, duplicate },
      submitting
    } = this.props;
    const buttonCopy = !isEmailThere || isVerified ?
      'Update my Email' :
      'Verify Email';
    return (
      <div>
        <h2 className='text-center'>Update your email address here:</h2>
        <form
          name='update-email'
          onSubmit={ this.handleSubmit }
          >
          <FormGroup
            bsSize='lg'
            controlId='email'
            validationState={ getValidationState(email) }
            >
            <FormControl
              autofocus={ true }
              placeholder='Enter your new email'
              type='email'
              { ...email }
            />
            {
              !email.error ?
                null :
                <HelpBlock>{ email.error }</HelpBlock>
            }
          </FormGroup>
          <FormGroup
            bsSize='lg'
            controlId='duplicate'
            validationState={ getValidationState(duplicate) }
            >
            <FormControl
              placeholder='re-type your email address'
              type='email'
              { ...duplicate }
            />
            {
              !duplicate.error ?
                null :
                <HelpBlock>{ duplicate.error }</HelpBlock>
            }
          </FormGroup>
          <FormGroup>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              disabled={ submitting }
              type='submit'
              >
              { buttonCopy }
            </Button>
            <div className='button-spacer' />
            <LinkContainer to='/settings'>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                >
                Go back to Settings
              </Button>
            </LinkContainer>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default reduxForm(
  {
    form: 'update-email',
    fields,
    validate: validateFields
  },
  mapStateToProps,
  actions
)(UpdateEmail);
