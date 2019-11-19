import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { servicebotId } from '../../../../config/env.json';
import { servicebotScriptLoader } from '../../../utils/scriptLoaders';

import '../Donation.css';

const propTypes = {
  email: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired
};

export class DonationServicebotEmbed extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      email: this.props.email,
      hash: this.props.hash
    };

    this.setServiceBotConfig = this.setServiceBotConfig.bind(this);
  }

  setServiceBotConfig() {
    const { email, hash } = this.state;
    /* eslint-disable camelcase */
    window.servicebotSettings = {
      type: 'portal',
      servicebot_id: servicebotId,
      service: 'freeCodeCamp.org',
      email,
      hash,
      options: {
        cancel_now: true,
        disableCoupon: true,
        forceCard: true,
        disableTiers: [
          'Monthly $10 Donation - Unavailable',
          'Monthly $3 Donation - Unavailable'
        ],
        card: {
          hideName: true,
          hideAddress: true,
          hideCountryPostal: true
        },
        messageOnCancel: `Thanks again for supporting our tiny nonprofit. We are helping millions of people around the world learn to code for free. Please confirm: are you certain you want to stop your donation?`
      }
    };
    /* eslint-enable camelcase */
  }

  componentDidMount() {
    servicebotScriptLoader();
  }

  render() {
    this.setServiceBotConfig();
    return (
      <div className='fcc-servicebot-embed-portal'>
        <div id='servicebot-subscription-portal'></div>
      </div>
    );
  }
}

DonationServicebotEmbed.displayName = 'DonationServicebotEmbed';
DonationServicebotEmbed.propTypes = propTypes;

export default DonationServicebotEmbed;
