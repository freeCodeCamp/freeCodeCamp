import React, { useState, useEffect } from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
  Col,
  Row
} from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { Spacer } from '../helpers';
import {
  PaymentContext,
  subscriptionAmounts,
  defaultDonation,
  type DonationAmount
} from '../../../../shared/config/donation-settings'; // You can further extract these into separate components and import them
import { formattedAmountLabel, convertToTimeContributed } from './utils';
import DonateForm from './donate-form';

type MultiTierDonationFormProps = {
  setShowHeaderAndFooter?: (show: boolean) => void;
  handleProcessing: () => void;
};
function SelectionTabs({
  donationAmount,
  setDonationAmount,
  setShowDonateForm
}: {
  donationAmount: DonationAmount;
  setDonationAmount: React.Dispatch<React.SetStateAction<DonationAmount>>;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();
  return (
    <Row className={'donate-btn-group'}>
      <Col xs={12}>
        <b>
          {t('donate.confirm-monthly', {
            usd: formattedAmountLabel(donationAmount)
          })}
        </b>
        <Spacer size='small' />
        <Tabs
          className={'donate-btn-group'}
          defaultValue={donationAmount.toString()}
        >
          <TabsList className='nav-lists'>
            {subscriptionAmounts.map(value => (
              <TabsTrigger
                key={value}
                value={value.toString()}
                onClick={() => setDonationAmount(value)}
              >
                ${formattedAmountLabel(value)}
              </TabsTrigger>
            ))}
          </TabsList>
          <Spacer size='small' />
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
        <Button
          block={true}
          bsStyle='primary'
          className='text-center confirm-donation-btn donate-btn-group'
          type='submit'
          onClick={() => setShowDonateForm(true)}
        >
          {t('buttons.donate')}
        </Button>
        <Spacer size='medium' />
      </Col>
    </Row>
  );
}

function DonationFormRow({
  handleProcessing,

  setShowDonateForm,
  donationAmount
}: {
  handleProcessing: () => void;

  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
  donationAmount: DonationAmount;
}) {
  return (
    <Row>
      <Col xs={12}>
        <DonateForm
          handleProcessing={handleProcessing}
          isMinimalForm={true}
          paymentContext={PaymentContext.Modal}
          editAmount={() => setShowDonateForm(false)}
          selectedDonationAmount={donationAmount}
        />
        <Spacer size='medium' />
      </Col>
    </Row>
  );
}

const MultiTierDonationForm: React.FC<MultiTierDonationFormProps> = ({
  handleProcessing,
  setShowHeaderAndFooter
}) => {
  const [donationAmount, setDonationAmount] = useState(
    defaultDonation.donationAmount
  );

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
        />
      </div>
      <div {...(!showDonateForm && { className: 'hide' })}>
        <DonationFormRow
          donationAmount={donationAmount}
          handleProcessing={handleProcessing}
          setShowDonateForm={setShowDonateForm}
        />
      </div>
    </>
  );
};

export default MultiTierDonationForm;
