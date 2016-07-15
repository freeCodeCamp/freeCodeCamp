import React, { PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';
import langs from '../../../../utils/supported-languages';

const langOptions = [
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
  const options = [(
    <option
      disabled={ true }
      key='default'
      selected={ userLang ? false : true }
      >
      Prefered Langauge
    </option>
  ),
    ...langOptions
  ];
  return (
    <FormControl
      className='btn btn-block btn-primary btn-link-social'
      componentClass='select'
      >
      { options }
    </FormControl>
  );
}

LangaugeSettings.propTypes = {
  userLang: PropTypes.string
};
