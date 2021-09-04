import {
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup
} from '@freecodecamp/react-bootstrap';
import React from 'react';

import Spacer from '../helpers/spacer';

interface OptionsProps {
  amounts: { month: []; onetime: [] };
  month: [];
  onetime: [];
  durations: { month: string; onetime: string };
  getFormattedAmountLabel: (amount: number) => string;
  getActiveDonationAmount: (
    duration: 'month' | 'onetime',
    donationAmount: number
  ) => number;
  handleSelectDuration: unknown;
  handleSelectAmount: unknown;
  donationDuration: 'month' | 'onetime';
  donationAmount: 500 | 1000;
  t: (
    label: string,
    { usd, hours }?: { usd?: string | number; hours?: string }
  ) => string;
}

const DurationAmountOptions = ({
  donationDuration,
  donationAmount,
  amounts,
  durations,
  getFormattedAmountLabel,
  getActiveDonationAmount,
  handleSelectDuration,
  handleSelectAmount,
  t
}: OptionsProps): JSX.Element => {
  const renderAmountButtons = (duration: 'month' | 'onetime'): unknown => {
    return amounts[duration].map((amount: number) => (
      <ToggleButton
        className='amount-value'
        id={`${durations[duration]}-donation-${amount}`}
        key={`${durations[duration]}-donation-${amount}`}
        value={amount}
      >
        {getFormattedAmountLabel(amount)}
      </ToggleButton>
    ));
  };

  return (
    <div>
      s<h3>{t('donate.gift-frequency')}</h3>
      <Tabs
        activeKey={donationDuration}
        animation={false}
        bsStyle='pills'
        className='donate-tabs'
        id='Duration'
        onSelect={handleSelectDuration}
      >
        {(Object.keys(durations) as ['month' | 'onetime']).map(duration => (
          <Tab eventKey={duration} key={duration} title={durations[duration]}>
            <Spacer />
            <h3>{t('donate.gift-amount')}</h3>
            <div>
              <ToggleButtonGroup
                animation={`false`}
                className='amount-values'
                name='amounts'
                onChange={handleSelectAmount}
                type='radio'
                value={getActiveDonationAmount(duration, donationAmount)}
              >
                {renderAmountButtons(duration)}
              </ToggleButtonGroup>
              <Spacer />
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default DurationAmountOptions;
