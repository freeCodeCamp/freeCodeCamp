import { helpers } from 'rx';
import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { reduxForm } from 'redux-form';
// import debug from 'debug';
import dedent from 'dedent';

import {
  isAscii,
  isEmail,
  isURL
} from 'validator';

import {
  Button,
  Col,
  Input,
  Row
} from 'react-bootstrap';

import { saveForm, loadSavedForm } from '../redux/actions';

// const log = debug('fcc:jobs:newForm');

const hightlightCopy = `
Highlight my post to make it stand out. (+$250)
`;

const isRemoteCopy = `
This job can be performed remotely.
`;

const howToApplyCopy = dedent`
  Examples: click here to apply yourcompany.com/jobs/33
  Or email jobs@yourcompany.com
`;

const checkboxClass = dedent`
  text-left
  jobs-checkbox-spacer
  col-sm-offset-2
  col-sm-6 col-md-offset-3
`;

const certTypes = {
  isFrontEndCert: 'isFrontEndCert',
  isBackEndCert: 'isBackEndCert'
};

function isValidURL(data) {
  return isURL(data, { 'require_protocol': true });
}

const fields = [
  'position',
  'locale',
  'description',
  'email',
  'url',
  'logo',
  'company',
  'isHighlighted',
  'isRemoteOk',
  'isFrontEndCert',
  'isBackEndCert',
  'howToApply'
];

const fieldValidators = {
  position: makeRequired(isAscii),
  locale: makeRequired(isAscii),
  description: makeRequired(helpers.identity),
  email: makeRequired(isEmail),
  url: makeRequired(isValidURL),
  logo: makeOptional(isValidURL),
  company: makeRequired(isAscii),
  howToApply: makeRequired(isAscii)
};

function makeOptional(validator) {
  return val => val ? validator(val) : true;
}
function makeRequired(validator) {
  return (val) => val ? validator(val) : false;
}

function validateForm(values) {
  return Object.keys(fieldValidators)
    .map(field => {
      if (fieldValidators[field](values[field])) {
        return null;
      }
      return { [field]: !fieldValidators[field](values[field]) };
    })
    .filter(Boolean)
    .reduce((errors, error) => ({ ...errors, ...error }), {});
}

function getBsStyle(field) {
  if (field.pristine) {
    return null;
  }

  return field.error ?
    'error' :
    'success';
}

export class NewJob extends React.Component {
  static displayName = 'NewJob';

  static propTypes = {
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    loadSavedForm: PropTypes.func,
    push: PropTypes.func,
    saveForm: PropTypes.func
  };

  componentDidMount() {
    this.props.loadSavedForm();
  }

  handleSubmit(job) {
    this.props.saveForm(job);
    this.props.push('/jobs/new/preview');
  }

  handleCertClick(name) {
    const { fields } = this.props;
    Object.keys(certTypes).forEach(certType => {
      if (certType === name) {
        return fields[certType].onChange(true);
      }
      return fields[certType].onChange(false);
    });
  }

  render() {
    const {
      fields: {
        position,
        locale,
        description,
        email,
        url,
        logo,
        company,
        isHighlighted,
        isRemoteOk,
        howToApply,
        isFrontEndCert,
        isBackEndCert
      },
      handleSubmit
    } = this.props;

    const { handleChange } = this;
    const labelClass = 'col-sm-offset-1 col-sm-2';
    const inputClass = 'col-sm-6';

    return (
      <div>
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }>
            <div className='text-center'>
              <form
                className='form-horizontal'
                onSubmit={ handleSubmit(data => this.handleSubmit(data)) }>

                <div className='spacer'>
                  <h2>First, select your ideal applicant: </h2>
                </div>

                <Row>
                  <Col
                    xs={ 6 }
                    xsOffset={ 3 }>
                    <Row>
                      <Button
                        bsStyle='primary'
                        className={ isFrontEndCert.value ? 'active' : '' }
                        onClick={ () => {
                          if (!isFrontEndCert.value) {
                            this.handleCertClick(certTypes.isFrontEndCert);
                          }
                        }}>
                        <h4>Front End Development Certified</h4>
                        You can expect each applicant
                        to have a code portfolio using the
                        following technologies:
                        HTML5, CSS, jQuery, API integrations
                        <br />
                        <br />
                      </Button>
                    </Row>
                    <div className='button-spacer' />
                    <Row>
                      <Button
                        bsStyle='primary'
                        className={ isBackEndCert.value ? 'active' : ''}
                        onClick={ () => {
                          if (!isBackEndCert.value) {
                            this.handleCertClick(certTypes.isBackEndCert);
                          }
                        }}>
                        <h4>Back End Development Certified</h4>
                        You can expect each applicant to have a code
                        portfolio using the following technologies:
                        HTML5, CSS, jQuery, API integrations, MVC Framework,
                        JavaScript, Node.js, MongoDB, Express.js
                        <br />
                        <br />
                      </Button>
                    </Row>
                  </Col>
                </Row>
                <div className='spacer'>
                  <h2>Tell us about the position</h2>
                </div>
                <hr />
                <Input
                  bsStyle={ getBsStyle(position) }
                  label='Job Title'
                  labelClassName={ labelClass }
                  placeholder={
                    'e.g. Full Stack Developer, Front End Developer, etc.'
                  }
                  required={ true }
                  type='text'
                  wrapperClassName={ inputClass }
                  { ...position }
                />
                <Input
                  bsStyle={ getBsStyle(locale) }
                  label='Location'
                  labelClassName={ labelClass }
                  placeholder='e.g. San Francisco, Remote, etc.'
                  required={ true }
                  type='text'
                  wrapperClassName={ inputClass }
                  { ...locale }
                />
                <Input
                  bsStyle={ getBsStyle(description) }
                  label='Description'
                  labelClassName={ labelClass }
                  required={ true }
                  rows='10'
                  type='textarea'
                  wrapperClassName={ inputClass }
                  { ...description }
                />
                <Input
                  label={ isRemoteCopy }
                  type='checkbox'
                  wrapperClassName={ checkboxClass }
                  { ...isRemoteOk }
                />
                <div className='spacer' />

                <hr />
                <Row>
                  <div>
                    <h2>How should they apply?</h2>
                  </div>
                  <Input
                    bsStyle={ getBsStyle(howToApply) }
                    label='   '
                    labelClassName={ labelClass }
                    placeholder={ howToApplyCopy }
                    required={ true }
                    rows='2'
                    type='textarea'
                    wrapperClassName={ inputClass }
                    { ...howToApply }
                  />
                </Row>

                <div className='spacer' />
                <hr />
                <div>
                  <h2>Tell us about your organization</h2>
                </div>
                <Input
                  bsStyle={ getBsStyle(company) }
                  label='Company Name'
                  labelClassName={ labelClass }
                  onChange={ (e) => handleChange('company', e) }
                  type='text'
                  wrapperClassName={ inputClass }
                  { ...company }
                />
                <Input
                  bsStyle={ getBsStyle(email) }
                  label='Email'
                  labelClassName={ labelClass }
                  placeholder='This is how we will contact you'
                  required={ true }
                  type='email'
                  wrapperClassName={ inputClass }
                  { ...email }
                />
                <Input
                  bsStyle={ getBsStyle(url) }
                  label='URL'
                  labelClassName={ labelClass }
                  placeholder='http://yourcompany.com'
                  type='url'
                  wrapperClassName={ inputClass }
                  { ...url }
                />
                <Input
                  bsStyle={ getBsStyle(logo) }
                  label='Logo'
                  labelClassName={ labelClass }
                  placeholder='http://yourcompany.com/logo.png'
                  type='url'
                  wrapperClassName={ inputClass }
                  { ...logo }
                />

                <div className='spacer' />
                <hr />
                <div>
                  <div>
                    <h2>Make it stand out</h2>
                  </div>
                  <div className='spacer' />
                  <Row>
                    <Col
                      md={ 6 }
                      mdOffset={ 3 }>
                      Highlight this ad to give it extra attention.
                      <br />
                    Featured listings receive more clicks and more applications.
                    </Col>
                  </Row>
                  <div className='spacer' />
                  <Row>
                    <Input
                      bsSize='large'
                      bsStyle='success'
                      label={ hightlightCopy }
                      type='checkbox'
                      wrapperClassName={
                        checkboxClass.replace('text-left', '')
                      }
                      { ...isHighlighted }
                    />
                  </Row>
                </div>

                <Row>
                  <Col
                    className='text-left'
                    lg={ 6 }
                    lgOffset={ 3 }>
                    <Button
                      block={ true }
                      bsSize='large'
                      bsStyle='primary'
                      type='submit'>
                      Preview My Ad
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default reduxForm(
  {
    form: 'NewJob',
    fields,
    validate: validateForm
  },
  state => ({ initialValues: state.jobsApp.initialValues }),
  {
    loadSavedForm,
    push,
    saveForm
  }
)(NewJob);
