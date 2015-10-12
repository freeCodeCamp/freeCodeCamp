import React, { PropTypes } from 'react';
import { History } from 'react-router';
import { contain } from 'thundercats-react';
import debugFactory from 'debug';
import { getDefaults } from '../utils';

import {
  inHTMLData,
  uriInSingleQuotedAttr
} from 'xss-filters';

import {
  Button,
  Col,
  Input,
  Row,
  Well
} from 'react-bootstrap';

import {
  isAscii,
  isEmail,
  isMobilePhone,
  isURL
} from 'validator';

const debug = debugFactory('freecc:jobs:newForm');

const checkValidity = [
  'position',
  'locale',
  'description',
  'email',
  'phone',
  'url',
  'logo',
  'name',
  'highlight'
];

function formatValue(value, validator, type = 'string') {
  const formated = getDefaults(type);
  if (validator && type === 'string') {
    formated.valid = validator(value);
  }
  if (value) {
    formated.value = value;
    formated.bsStyle = formated.valid ? 'success' : 'error';
  }
  return formated;
}

function isValidURL(data) {
  return isURL(data, { 'require_protocol': true });
}

function isValidPhone(data) {
  return isMobilePhone(data, 'en-US');
}

function makeRequired(validator) {
  return (val) => !!val && validator(val);
}

export default contain({
    actions: 'jobActions',
    store: 'jobsStore',
    map({ form = {} }) {
      const {
        position,
        locale,
        description,
        email,
        phone,
        url,
        logo,
        name,
        highlight
      } = form;
      return {
        position: formatValue(position, makeRequired(isAscii)),
        locale: formatValue(locale, makeRequired(isAscii)),
        description: formatValue(description, makeRequired(isAscii)),
        email: formatValue(email, makeRequired(isEmail)),
        phone: formatValue(phone, isValidPhone),
        url: formatValue(url, isValidURL),
        logo: formatValue(logo, isValidURL),
        name: formatValue(name, makeRequired(isAscii)),
        highlight: formatValue(highlight, null, 'bool')
      };
    },
    subscribeOnWillMount() {
      return typeof window !== 'undefined';
    }
  },
  React.createClass({
    displayName: 'NewJob',

    propTypes: {
      jobActions: PropTypes.object,
      position: PropTypes.object,
      locale: PropTypes.object,
      description: PropTypes.object,
      email: PropTypes.object,
      phone: PropTypes.object,
      url: PropTypes.object,
      logo: PropTypes.object,
      name: PropTypes.object,
      highlight: PropTypes.object
    },

    mixins: [History],

    handleSubmit(e) {
      e.preventDefault();
      const props = this.props;
      let valid = true;
      checkValidity.forEach((prop) => {
        // if value exist, check if it is valid
        if (props[prop].value && props[prop].type !== 'boolean') {
          valid = valid && !!props[prop].valid;
        }
      });

      if (!valid) {
        debug('form not valid');
        return;
      }

      const {
        position,
        locale,
        description,
        email,
        phone,
        url,
        logo,
        name,
        highlight,
        jobActions
      } = this.props;

      // sanitize user output
      const jobValues = {
        position: inHTMLData(position.value),
        location: inHTMLData(locale.value),
        description: inHTMLData(description.value),
        email: inHTMLData(email.value),
        phone: inHTMLData(phone.value),
        url: uriInSingleQuotedAttr(url.value),
        logo: uriInSingleQuotedAttr(logo.value),
        name: inHTMLData(name.value),
        highlight: !!highlight.value
      };

      const job = Object.keys(jobValues).reduce((accu, prop) => {
        if (jobValues[prop]) {
          accu[prop] = jobValues[prop];
        }
        return accu;
      }, {});

      job.postedOn = new Date();
      debug('job sanitized', job);
      jobActions.saveForm(job);

      this.history.pushState(null, '/jobs/new/preview');
    },

    componentDidMount() {
      const { jobActions } = this.props;
      jobActions.getSavedForm();
    },

    handleChange(name, { target: { value } }) {
      const { jobActions: { handleForm } } = this.props;
      handleForm({ [name]: value });
    },

    render() {
      const {
        position,
        locale,
        description,
        email,
        phone,
        url,
        logo,
        name,
        highlight,
        jobActions: { handleForm }
      } = this.props;
      const { handleChange } = this;
      const labelClass = 'col-sm-offset-1 col-sm-2';
      const inputClass = 'col-sm-6';

      return (
        <div>
          <Row>
            <Col>
              <Well className='text-center'>
                <h1>Create Your Job Post</h1>
                <form
                  className='form-horizontal'
                  onSubmit={ this.handleSubmit }>

                  <div className='spacer'>
                    <h2>Job Information</h2>
                  </div>
                  <Input
                    bsStyle={ position.bsStyle }
                    label='Position'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('position', e) }
                    placeholder='Position'
                    required={ true }
                    type='text'
                    value={ position.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ locale.bsStyle }
                    label='Location'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('locale', e) }
                    placeholder='Location'
                    required={ true }
                    type='text'
                    value={ locale.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ description.bsStyle }
                    label='Description'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('description', e) }
                    placeholder='Description'
                    required={ true }
                    rows='10'
                    type='textarea'
                    value={ description.value }
                    wrapperClassName={ inputClass } />

                  <div className='divider'>
                    <h2>Company Information</h2>
                  </div>
                  <Input
                    bsStyle={ name.bsStyle }
                    label='Company Name'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('name', e) }
                    placeholder='Foo, INC'
                    type='text'
                    value={ name.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ email.bsStyle }
                    label='Email'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('email', e) }
                    placeholder='Email'
                    required={ true }
                    type='email'
                    value={ email.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ phone.bsStyle }
                    label='Phone'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('phone', e) }
                    placeholder='555-123-1234'
                    type='tel'
                    value={ phone.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ url.bsStyle }
                    label='URL'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('url', e) }
                    placeholder='http://freecatphotoapp.com'
                    type='url'
                    value={ url.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ logo.bsStyle }
                    label='Logo'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('logo', e) }
                    placeholder='http://freecatphotoapp.com/logo.png'
                    type='url'
                    value={ logo.value }
                    wrapperClassName={ inputClass } />

                  <div className='divider'>
                    <h2>Make it stand out</h2>
                  </div>
                  <Input
                    checked={ highlight.value }
                    label='Highlight your ad'
                    labelClassName={ 'col-sm-offset-1 col-sm-6'}
                    onChange={
                      ({ target: { checked } }) => handleForm({
                        highlight: !!checked
                      })
                    }
                    type='checkbox' />
                  <div className='spacer' />
                  <Row>
                    <Col
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
              </Well>
            </Col>
          </Row>
        </div>
      );
    }
  })
);
