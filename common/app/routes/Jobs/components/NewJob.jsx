import { helpers } from 'rx';
import React, { PropTypes } from 'react';
import { History } from 'react-router';
import { contain } from 'thundercats-react';
import debugFactory from 'debug';
import dedent from 'dedent';
import normalizeUrl from 'normalize-url';

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
  Panel,
  Well
} from 'react-bootstrap';

import {
  isAscii,
  isEmail,
  isURL
} from 'validator';

const debug = debugFactory('freecc:jobs:newForm');

const checkValidity = [
  'position',
  'locale',
  'description',
  'email',
  'url',
  'logo',
  'company',
  'isHighlighted',
  'howToApply'
];
const hightlightCopy = `
Highlight my post to make it stand out. (+$50)
`;

const foo = `
  This will narrow the field substantially with higher quality applicants
`;

const isFullStackCopy = `
Applicants must have earned Free Code Camp’s Full Stack Certification to apply.*
`;

const isFrontEndCopy = `
Applicants must have earned Free Code Camp’s Front End Certification to apply.*
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

const normalizeOptions = {
  stripWWW: false
};

function formatUrl(url, shouldKeepTrailingSlash = true) {
  if (
    typeof url === 'string' &&
    url.length > 4 &&
    url.indexOf('.') !== -1
  ) {
    // prevent trailing / from being stripped during typing
    let lastChar = '';
    if (shouldKeepTrailingSlash && url.substring(url.length - 1) === '/') {
      lastChar = '/';
    }
    return normalizeUrl(url, normalizeOptions) + lastChar;
  }
  return url;
}

function isValidURL(data) {
  return isURL(data, { 'require_protocol': true });
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
        url,
        logo,
        company,
        isHighlighted,
        isFullStackCert,
        isFrontEndCert,
        isRemoteOk,
        howToApply
      } = form;
      return {
        position: formatValue(position, makeRequired(isAscii)),
        locale: formatValue(locale, makeRequired(isAscii)),
        description: formatValue(description, makeRequired(helpers.identity)),
        email: formatValue(email, makeRequired(isEmail)),
        url: formatValue(formatUrl(url), isValidURL),
        logo: formatValue(formatUrl(logo), isValidURL),
        company: formatValue(company, makeRequired(isAscii)),
        isHighlighted: formatValue(isHighlighted, null, 'bool'),
        isFullStackCert: formatValue(isFullStackCert, null, 'bool'),
        isFrontEndCert: formatValue(isFrontEndCert, null, 'bool'),
        isRemoteOk: formatValue(isRemoteOk, null, 'bool'),
        howToApply: formatValue(howToApply, makeRequired(isAscii))
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
      url: PropTypes.object,
      logo: PropTypes.object,
      company: PropTypes.object,
      isHighlighted: PropTypes.object,
      isFullStackCert: PropTypes.object,
      isFrontEndCert: PropTypes.object,
      isRemoteOk: PropTypes.object,
      howToApply: PropTypes.object
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
        jobActions,

        // form values
        position,
        locale,
        description,
        email,
        url,
        logo,
        company,
        isHighlighted,
        isFullStackCert,
        isFrontEndCert,
        isRemoteOk,
        howToApply
      } = this.props;

      // sanitize user output
      const jobValues = {
        position: inHTMLData(position.value),
        locale: inHTMLData(locale.value),
        description: inHTMLData(description.value),
        email: inHTMLData(email.value),
        url: formatUrl(uriInSingleQuotedAttr(url.value), false),
        logo: formatUrl(uriInSingleQuotedAttr(logo.value), false),
        company: inHTMLData(company.value),
        isHighlighted: !!isHighlighted.value,
        isFrontEndCert: !!isFrontEndCert.value,
        isFullStackCert: !!isFullStackCert.value,
        isRemoteOk: !!isRemoteOk.value,
        howToApply: inHTMLData(howToApply.value)
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
        url,
        logo,
        company,
        isHighlighted,
        isFrontEndCert,
        isFullStackCert,
        isRemoteOk,
        howToApply,
        jobActions: { handleForm }
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
              <Panel className='text-center'>
                <form
                  className='form-horizontal'
                  onSubmit={ this.handleSubmit }>

                  <div className='spacer'>
                    <h2>First, tell us about the position</h2>
                  </div>
                  <Input
                    bsStyle={ position.bsStyle }
                    label='Job Title'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('position', e) }
                    placeholder={
                      'e.g. Full Stack Developer, Front End Developer, etc.'
                    }
                    required={ true }
                    type='text'
                    value={ position.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ locale.bsStyle }
                    label='Location'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('locale', e) }
                    placeholder='e.g. San Francisco, Remote, etc.'
                    required={ true }
                    type='text'
                    value={ locale.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ description.bsStyle }
                    label='Description'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('description', e) }
                    required={ true }
                    rows='10'
                    type='textarea'
                    value={ description.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    checked={ isFrontEndCert.value }
                    label={ isFrontEndCopy }
                    onChange={
                      ({ target: { checked } }) => handleForm({
                        isFrontEndCert: !!checked
                      })
                    }
                    type='checkbox'
                    wrapperClassName={ checkboxClass } />
                  <Input
                    checked={ isFullStackCert.value }
                    label={ isFullStackCopy }
                    onChange={
                      ({ target: { checked } }) => handleForm({
                        isFullStackCert: !!checked
                      })
                    }
                    type='checkbox'
                    wrapperClassName={ checkboxClass } />
                  <Input
                    checked={ isRemoteOk.value }
                    label={ isRemoteCopy }
                    onChange={
                      ({ target: { checked } }) => handleForm({
                        isRemoteOk: !!checked
                      })
                    }
                    type='checkbox'
                    wrapperClassName={ checkboxClass } />
                  <Row>
                    <small>* { foo }</small>
                  </Row>
                  <div className='spacer' />
                  <Row>
                    <div>
                      <h2>How should they apply?</h2>
                    </div>
                    <Input
                      bsStyle={ howToApply.bsStyle }
                      label='   '
                      labelClassName={ labelClass }
                      onChange={ (e) => handleChange('howToApply', e) }
                      placeholder={ howToApplyCopy }
                      required={ true }
                      rows='2'
                      type='textarea'
                      value={ howToApply.value }
                      wrapperClassName={ inputClass } />
                  </Row>

                  <div className='spacer' />
                  <div>
                    <h2>Tell us about your organization</h2>
                  </div>
                  <Input
                    bsStyle={ company.bsStyle }
                    label='Company Name'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('company', e) }
                    type='text'
                    value={ company.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ email.bsStyle }
                    label='Email'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('email', e) }
                    placeholder='This is how we will contact you'
                    required={ true }
                    type='email'
                    value={ email.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ url.bsStyle }
                    label='URL'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('url', e) }
                    placeholder='http://yourcompany.com'
                    type='url'
                    value={ url.value }
                    wrapperClassName={ inputClass } />
                  <Input
                    bsStyle={ logo.bsStyle }
                    label='Logo'
                    labelClassName={ labelClass }
                    onChange={ (e) => handleChange('logo', e) }
                    placeholder='http://yourcompany.com/logo.png'
                    type='url'
                    value={ logo.value }
                    wrapperClassName={ inputClass } />

                  <div className='spacer' />
                  <Well>
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
                        checked={ isHighlighted.value }
                        label={ hightlightCopy }
                        onChange={
                          ({ target: { checked } }) => handleForm({
                            isHighlighted: !!checked
                          })
                        }
                        type='checkbox'
                        wrapperClassName={
                          checkboxClass.replace('text-left', '')
                        } />
                    </Row>
                  </Well>

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
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }
  })
);
