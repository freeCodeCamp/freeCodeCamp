import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormLabel } from 'react-bootstrap';

import TB from '../helpers/ToggleButton';
import { ButtonSpacer, HelpBlock } from '../helpers';

import './toggle-setting.css';

const propTypes = {
  action: PropTypes.string.isRequired,
  explain: PropTypes.string,
  flag: PropTypes.bool.isRequired,
  flagName: PropTypes.string.isRequired,
  toggleFlag: PropTypes.func.isRequired
};

export default function ToggleSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  ...restProps
}) {
  return (
    <Fragment>
      <div className='toggle-setting-container'>
        <FormGroup>
          <FormLabel className='toggle-label' htmlFor={flagName}>
            <strong>{action}</strong>
            {explain ? (
              <HelpBlock>
                <em>{explain}</em>
              </HelpBlock>
            ) : null}
          </FormLabel>
          <TB
            name={flagName}
            onChange={toggleFlag}
            value={flag}
            {...restProps}
          />
        </FormGroup>
      </div>
      <ButtonSpacer />
    </Fragment>
  );
}

ToggleSetting.displayName = 'ToggleSetting';
ToggleSetting.propTypes = propTypes;
