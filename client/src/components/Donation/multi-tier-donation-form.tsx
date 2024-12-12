import React, { useState, useEffect } from 'react';
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
  Col,
  Row,
  Spacer
} from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';

import {
  PaymentContext,
  subscriptionAmounts,
  defaultTierAmount,
  type DonationAmount
} from '../../../../shared/config/donation-settings'; // You can further extract these into separate components and import them
import callGA from '../../analytics/call-ga';
import { LocalStorageThemes } from '../../redux/types';
import { formattedAmountLabel, convertToTimeContributed } from './utils';
import DonateForm from './donate-form';

type MultiTierDonationFormProps = {
  setShowHeaderAndFooter?: (show: boolean) => void;
  handleProcessing?: () => void;
  paymentContext: PaymentContext;
  isMinimalForm?: boolean;
  defaultTheme?: LocalStorageThemes;
  isAnimationEnabled?: boolean;
};
function SelectionTabs({
  donationAmount,
  setDonationAmount,
  setShowDonateForm,
  isAnimationEnabled
}: {
  donationAmount: DonationAmount;
  setDonationAmount: React.Dispatch<React.SetStateAction<DonationAmount>>;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimationEnabled?: boolean;
}) {
  const { t } = useTranslation();
  const switchTab = (value: string): void => {
    setDonationAmount(Number(value) as DonationAmount);
  };
  useFeature('aa-test-in-component');
  const handleAmountConfirmationClick = () => {
    callGA({
      event: 'donation_related',
      action: `Amount Confirmation Clicked`
    });
    setShowDonateForm(true);
  };

  const selectAmountTabClick = (value: DonationAmount) => {
    callGA({
      event: 'donation_related',
      action: `Select Amount Tab Clicked`,
      amount: value
    });
    setDonationAmount(value);
  };

  return (
    <Row
      className={'donate-btn-group donation-tier-selection'}
      data-playwright-test-label='donation-tier-selector'
    >
      <Col xs={12}>
        <b>
          {t('donate.confirm-monthly', {
            usd: formattedAmountLabel(donationAmount)
          })}
        </b>
        <Spacer size='xs' />
        <Tabs
          className={'donate-btn-group'}
          defaultValue={donationAmount.toString()}
          onValueChange={switchTab}
        >
          <TabsList className='nav-lists'>
            {subscriptionAmounts.map(value => (
              <TabsTrigger
                key={value}
                value={value.toString()}
                onClick={() => selectAmountTabClick(value)}
              >
                ${formattedAmountLabel(value)}
              </TabsTrigger>
            ))}
          </TabsList>
          <Spacer size='xs' />
          {subscriptionAmounts.map(value => {
            const usd = formattedAmountLabel(donationAmount);
            const hours = convertToTimeContributed(donationAmount);
            const donationDescription = t('donate.your-donation-2', {
              usd,
              hours
            });

            return (
              <TabsContent
                key={value}
                className='tab-content'
                value={value.toString()}
              >
                <p>{donationDescription}</p>
              </TabsContent>
            );
          })}
        </Tabs>
        <button
          className='text-center confirm-donation-btn donate-btn-group'
          type='submit'
          onClick={handleAmountConfirmationClick}
        >
          {isAnimationEnabled
            ? t('buttons.confirm-amount')
            : t('buttons.donate')}
        </button>
        <Spacer size='m' />
      </Col>
    </Row>
  );
}

function DonationFormRow({
  handleProcessing,
  isMinimalForm,
  setShowDonateForm,
  donationAmount,
  paymentContext
}: {
  handleProcessing?: () => void;
  isMinimalForm?: boolean;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
  donationAmount: DonationAmount;
  paymentContext: PaymentContext;
}) {
  const editAmountClick = () => {
    callGA({
      event: 'donation_related',
      action: `Edit Amount Clicked`
    });
    setShowDonateForm(false);
  };
  return (
    <Row>
      <Col xs={12}>
        <DonateForm
          handleProcessing={handleProcessing}
          isMinimalForm={isMinimalForm}
          paymentContext={paymentContext}
          editAmount={editAmountClick}
          selectedDonationAmount={donationAmount}
        />
        <Spacer size='m' />
      </Col>
    </Row>
  );
}

const MultiTierDonationForm: React.FC<MultiTierDonationFormProps> = ({
  handleProcessing,
  setShowHeaderAndFooter,
  isMinimalForm,
  paymentContext,
  isAnimationEnabled
}) => {
  const [donationAmount, setDonationAmount] = useState(defaultTierAmount);

  const [showDonateForm, setShowDonateForm] = useState(false);

  useEffect(() => {
    if (setShowHeaderAndFooter) setShowHeaderAndFooter(!showDonateForm);
  }, [showDonateForm, setShowHeaderAndFooter]);

  return (
    <>
      <div {...(showDonateForm && { className: 'hide' })}>
        <SelectionTabs
          donationAmount={donationAmount}
          setDonationAmount={setDonationAmount}
          setShowDonateForm={setShowDonateForm}
          isAnimationEnabled={isAnimationEnabled}
        />
      </div>
      <div {...(!showDonateForm && { className: 'hide' })}>
        <DonationFormRow
          donationAmount={donationAmount}
          handleProcessing={handleProcessing}
          setShowDonateForm={setShowDonateForm}
          isMinimalForm={isMinimalForm}
          paymentContext={paymentContext}
        />
      </div>
    </>
  );
};

export default MultiTierDonationForm;
