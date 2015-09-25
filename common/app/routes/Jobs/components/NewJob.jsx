import React, { PropTypes } from 'react';
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

export default contain({
    actions: 'jobActions',
    store: 'jobsStore',
    map({ form = {} }) {
      const {
        position = getDefaults('string'),
        locale = getDefaults('string'),
        description = getDefaults('string'),
        email = getDefaults('string'),
        phone = getDefaults('string'),
        url = getDefaults('string'),
        logo = getDefaults('string'),
        name = getDefaults('string'),
        highlight = getDefaults('bool')
      } = form;
      return {
        position,
        locale,
        description,
        email,
        phone,
        url,
        logo,
        name,
        highlight
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

    handleSubmit(e) {
      e.preventDefault();
      let valid = true;
      checkValidity.forEach((prop) => {
        // if value exist, check if it is valid
        if (this.props[prop].value) {
          valid = valid && !!this.props[prop].valid;
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

      debug('job sanitized', job);
      jobActions.saveForm(job);
    },

    componentDidMount() {
      const { jobActions } = this.props;
      jobActions.getSavedForm();
    },

    handleChange(name, validator, { target: { value } }) {
      const { jobActions: { handleForm } } = this.props;
      handleForm({ name, value, validator });
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
        highlight
      } = this.props;
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
                    onChange={ (e) => {
                      this.handleChange(
                        'position',
                        isAscii,
                        e
                      );
                    }}
                    placeholder='Position'
                    type='text'
                    value={ position.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ locale.bsStyle }
                    label='Location'
                    labelClassName={ labelClass }
                    onChange={ (e) => {
                      this.handleChange(
                        'locale',
                        isAscii,
                        e,
                      );
                    }}
                    placeholder='Location'
                    type='text'
                    value={ locale.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ description.bsStyle }
                    label='Description'
                    labelClassName={ labelClass }
                    onChange={ (e) => {
                      this.handleChange(
                        'description',
                        isAscii,
                        e
                      );
                    }}
                    placeholder='Description'
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
                    onChange={ (e) => {
                      this.handleChange(
                        'name',
                        isAscii,
                        e,
                      );
                    }}
                    placeholder='Foo, INC'
                    type='text'
                    value={ name.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ email.bsStyle }
                    label='Email'
                    labelClassName={ labelClass }
                    onChange={ (e) => {
                      this.handleChange(
                        'email',
                        isEmail,
                        e
                      );
                    }}
                    placeholder='Email'
                    type='email'
                    value={ email.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ phone.bsStyle }
                    label='Phone'
                    labelClassName={ labelClass }
                    onChange={ (e) => {
                      this.handleChange(
                        'phone',
                        (data) => isMobilePhone(data, 'en-US'),
                        e
                      );
                    }}
                    placeholder='555-123-1234'
                    type='tel'
                    value={ phone.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ url.bsStyle }
                    label='URL'
                    labelClassName={ labelClass }
                    onChange={ (e) => {
                      this.handleChange(
                        'url',
                        (data) => isURL(data, { 'require_protocol': true }),
                        e
                      );
                    }}
                    placeholder='http://freecatphotoapp.com'
                    type='url'
                    value={ url.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ logo.bsStyle }
                    label='Logo'
                    labelClassName={ labelClass }
                    onChange={ (e) => {
                      this.handleChange(
                        'logo',
                        (data) => isURL(data, { 'require_protocol': true }),
                        e
                      );
                    }}
                    placeholder='http://freecatphotoapp.com/logo.png'
                    type='url'
                    value={ logo.value }
                    wrapperClassName={ inputClass } />

                  <div className='divider'>
                    <h2>Make it stand out</h2>
                  </div>
                  <Input
                    label='Highlight your ad'
                    labelClassName={ 'col-sm-offset-1 col-sm-6'}
                    onChange={ (e) => {
                      this.handleChange(
                        'highlight',
                        () => { return true; },
                        e
                      );
                    }}
                    type='checkbox'
                    value={ highlight.value } />
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
