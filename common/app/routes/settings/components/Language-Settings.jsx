import React, { PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import langs from '../../../../utils/supported-languages';

const options = [(
    <option
      disabled={ true }
      key='default'
      value='not-the-momma'
      >
      Prefered Langauge
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

export default function LangaugeSettings({ userLang }) {
  return (
    <FormControl
      className='btn btn-block btn-primary btn-link-social'
      componentClass='select'
      defaultValue='not-the-momma'
      value={ userLang }
      >
      { options }
    </FormControl>
  );
}

LangaugeSettings.propTypes = {
  userLang: PropTypes.string
};
