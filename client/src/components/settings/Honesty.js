import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from '@freecodecamp/react-bootstrap';

import { FullWidthRow } from '../helpers';
import SectionHeader from './SectionHeader';
import HonestyPolicy from '../../resources/honesty-policy';

import './honesty.css';

const propTypes = {
  isHonest: PropTypes.bool,
  policy: PropTypes.arrayOf(PropTypes.string),
  updateIsHonest: PropTypes.func.isRequired
};

class Honesty extends Component {
  handleAgreeClick = () => this.props.updateIsHonest({ isHonest: true });

  renderAgreeButton = () => (
    <Button block={true} bsStyle='primary' onClick={this.handleAgreeClick}>
      Agree
    </Button>
  );

  renderIsHonestAgreed = () => (
    <Panel bsStyle='info' className='agreed btn'>
      <p>You have accepted our Academic Honesty Policy.</p>
    </Panel>
  );

  render() {
    const { isHonest } = this.props;

    return (
      <section className='honesty-policy'>
        <SectionHeader>Academic Honesty Policy</SectionHeader>
        <FullWidthRow>
          <Panel className='honesty-panel'>
            <HonestyPolicy />
          </Panel>
          <br />
          {isHonest ? this.renderIsHonestAgreed() : this.renderAgreeButton()}
        </FullWidthRow>
      </section>
    );
  }
}

Honesty.displayName = 'Honesty';
Honesty.propTypes = propTypes;

export default Honesty;
