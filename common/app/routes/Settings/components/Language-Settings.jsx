import PropTypes from 'prop-types';
import React from 'react';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row
} from 'react-bootstrap';

import { updateMyLang } from '../redux';
import { userSelector } from '../../../redux';
import langs from '../../../../utils/supported-languages';
import { editUserFlag, updateUserBackend } from '../../../entities/user';

const propTypes = {
  editUserFlag: PropTypes.func.isRequired,
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  updateMyLang: PropTypes.func.isRequired,
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string
};

const mapStateToProps = createSelector(
  userSelector,
  ({ languageTag, username }) => ({
    // send null to prevent redux-form from initialize empty
    initialValues: languageTag ? { lang: languageTag } : null,
    username
  })
);
const mapDispatchToProps = { editUserFlag, updateMyLang, updateUserBackend };
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
    console.log('changes');
    this.props.fields.lang.onChange(e);
  }

  render() {
    const {
      editUserFlag,
      fields: { lang: { name, value } },
      handleSubmit,
      updateUserBackend,
      username
    } = this.props;
    const submitAction = values => {
      editUserFlag('languageTag', username, values.lang);
      updateUserBackend({ flag: 'languageTag', newValue: values.lang });
    };
    return (
      <Row>
        <form onSubmit={ handleSubmit(submitAction) }>
          <FormGroup>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='lang-select'>
                Language Selection
              </ControlLabel>
            </Col>
            <Col sm={ 5 } xs={ 12 }>
              <FormControl
                className='btn btn-block btn-primary btn-link-social btn-lg'
                componentClass='select'
                id='lang-select'
                name={ name }
                onChange={ this.handleChange }
                style={{ height: '45px' }}
                value={ value }
                >
                { options }
              </FormControl>
            </Col>
            <Col sm={ 1 } xs={ 12 }>
              <Button
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </FormGroup>
        </form>
      </Row>
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
