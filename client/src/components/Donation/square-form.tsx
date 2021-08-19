/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from 'react';
import { squareLocationConfig } from '../../../../config/donation-settings';
import envData from '../../../../config/env.json';

const {
  squareApplicationId,
  deploymentEnv
}: { squareApplicationId: string | null; deploymentEnv: 'staging' | 'live' } =
  envData as {
    squareApplicationId: string | null;
    deploymentEnv: 'staging' | 'live';
  };

function SquareForm(): JSX.Element | null {
  const [squareLoaded, setSquareLoaded] = useState(false);
  const [squarePayments, setSquarePayments] = useState<void>();
  const [squareCard, setSquareCard] = useState();

  useEffect(() => {
    const squareScript = document.getElementById('squareScript');
    if (squareScript) setSquareLoaded(true);
    else {
      console.log('adding square script...');
      const script = document.createElement('script');
      script.crossOrigin = 'anonymous';
      script.id = 'squareScript';
      script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
      document.head.appendChild(script);
      script.onload = () => {
        setSquareLoaded(true);
        console.log('onSquareLoad');
      };
    }
  }, []);

  useEffect(() => {
    if (squareLoaded && !squarePayments) {
      console.log('setting square payments...');
      const locationId: string = squareLocationConfig[deploymentEnv];
      // eslint-disable-next-line
      setSquarePayments(window.Square?.payments(squareApplicationId, locationId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squareLoaded]);

  const initializeSquareCard = async () => {
    console.log('initializing square card...');
    const card = await squarePayments.card();
    if (!squareCard) await card.attach('#card-container');
    setSquareCard(card);
  };

  useEffect(() => {
    if (squarePayments) {
      if (!squareCard) void initializeSquareCard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squarePayments]);

  return squareLoaded ? (
    <form id='payment-form'>
      <div id='card-container' />
      <button className='confirm-donation-btn' id='card-button' type='button'>
        Pay $1,000,000
      </button>
    </form>
  ) : null;
}

SquareForm.displayName = 'SquareForm';

export default SquareForm;
