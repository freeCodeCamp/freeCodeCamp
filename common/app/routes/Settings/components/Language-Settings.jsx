import PropTypes from 'prop-types';
import React from 'react';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

import { FullWidthRow } from '../../../helperComponents';
import { BlockSaveButton } from '../formHelpers';
import { userSelector } from '../../../redux';
import langs from '../../../../utils/supported-languages';
import { updateUserBackend } from '../../../entities/user';

const propTypes = {
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

const mapStateToProps = createSelector(
  userSelector,
  ({ languageTag }) => ({
    // send null to prevent redux-form from initialize empty
    initialValues: languageTag ? { lang: languageTag } : null
  })
);
const mapDispatchToProps = { updateUserBackend };
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

class LanguageSettings extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    // make sure to clear timeout if it exist
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  handleSubmit(values) {
    this.props.updateUserBackend(values);
  }
  render() {
    const {
      fields: {
        _meta: { allPristine },
        lang: { name, onChange, value }
      },
      handleSubmit
    } = this.props;
    return (
      <div>
        <FullWidthRow>
          <h2>Language Settings</h2>
          <br />
        </FullWidthRow>
        <FullWidthRow>
          <form onSubmit={ handleSubmit(this.handleSubmit) }>
              <Col sm={ 4 } xs={ 12 }>
                <ControlLabel htmlFor={ name }>
                  Language Selection
                </ControlLabel>
              </Col>
              <Col sm={ 5 } xs={ 12 }>
                <FormControl
                  className='btn btn-block btn-primary btn-link-social btn-lg'
                  componentClass='select'
                  id={ name }
                  name={ name }
                  onChange={ onChange }
                  style={{ height: '45px' }}
                  value={ value }
                  >
                  { options }
                </FormControl>
              </Col>
              <Col sm={ 3 } xs={ 12 }>
                <BlockSaveButton disabled={ allPristine }/>
              </Col>
          </form>
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
