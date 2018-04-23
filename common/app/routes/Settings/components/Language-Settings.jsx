import PropTypes from 'prop-types';
import React from 'react';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Row,
  Col
} from 'react-bootstrap';

import { updateMyLang } from '../redux';
import { userSelector } from '../../../redux';
import langs from '../../../../utils/supported-languages';
import { FullWidthRow } from '../../../helperComponents';
import SectionHeader from './SectionHeader.jsx';

const propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  updateMyLang: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  userSelector,
  ({ languageTag }) => ({
    // send null to prevent redux-form from initialize empty
    initialValues: languageTag ? { lang: languageTag } : null
  })
);
const mapDispatchToProps = { updateMyLang };
const fields = [ 'lang' ];
const validator = values => {
  if (!langs[values.lang]) {
    return { lang: `${values.lang} is unsupported` };
  }
  return {};
};
const options = [(
    <option
      disabled={ true }
      key='default'
      value='not-the-momma'
      >
      Preferred Language
    </option>
  ),
  ...Object.keys(langs).map(tag => {
    return (
      <option
        key={ tag }
        value={ tag }
        >
        { langs[tag] }
      </option>
    );
  }), (
    <option
      disabled={ true }
      key='more'
      >
      More to come...
    </option>
  )
];

export class LanguageSettings extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillUnmount() {
    // make sure to clear timeout if it exist
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.props.fields.lang.onChange(e);
    // give redux-form HOC state time to catch up before
    // attempting to submit
    this.timeout = setTimeout(
      () => this.props.handleSubmit(this.props.updateMyLang)(),
      0
    );
  }

  render() {
    const {
      fields: { lang: { name, value } }
    } = this.props;
    return (
      <div>
        <SectionHeader>
          Language Settings
        </SectionHeader>
        <FullWidthRow>
          <FormGroup>
            <Row>
              <Col sm={ 4 } xs={ 12 }>
                <ControlLabel htmlFor={ name }>
                  Preferred Language for Challenges
                </ControlLabel>
              </Col>
              <Col sm={ 8 } xs={ 12 }>
                <FormControl
                  className='btn btn-block btn-primary btn-lg'
                  componentClass='select'
                  id={ name }
                  name={ name }
                  onChange={ this.handleChange }
                  style={{ height: '45px' }}
                  value={ value }
                  >
                  { options }
                </FormControl>
              </Col>
            </Row>
          </FormGroup>
        </FullWidthRow>
      </div>
    );
  }
}

LanguageSettings.displayName = 'LanguageSettings';
LanguageSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'lang',
    fields,
    validator,
    overwriteOnInitialValuesChange: false
  },
  mapStateToProps,
  mapDispatchToProps
)(LanguageSettings);
