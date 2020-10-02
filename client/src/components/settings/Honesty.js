import React from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from '@freecodecamp/react-bootstrap';

import { FullWidthRow } from '../helpers';
import SectionHeader from './SectionHeader';
import HonestyPolicy from '../../resources/honesty-policy';

import './honesty.css';

const propTypes = {
  isHonest: PropTypes.bool,
  updateIsHonest: PropTypes.func.isRequired
};

const Honesty = ({ isHonest, updateIsHonest }) => {
  const button = isHonest ? (
    <Button
      block={true}
      bsStyle='primary'
      className='disabled-agreed'
      disabled={true}
    >
      <p>You have accepted our Academic Honesty Policy.</p>
    </Button>
  ) : (
    <Button
      block={true}
      bsStyle='primary'
      onClick={() => updateIsHonest({ isHonest: true })}
    >
      Agree
    </Button>
  );
  return (
    <section className='honesty-policy'>
      <SectionHeader>Academic Honesty Policy</SectionHeader>
      <FullWidthRow>
        <Panel className='honesty-panel'>
          <HonestyPolicy />
        </Panel>
        <br />
        {button}
      </FullWidthRow>
    </section>
  );
};

Honesty.displayName = 'Honesty';
Honesty.propTypes = propTypes;

export default Honesty;
