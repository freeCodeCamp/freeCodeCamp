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

interface SquareForProps {
  handlePaymentButtonLoad: (provider: 'square') => void;
  isSquareLoading: boolean;
  chargeSquare: (token: string | undefined) => void;
}

interface Card {
  attach: (conternerId: string) => Promise<void>;
  addEventListener: (
    event: string,
    handler: ({ detail }: Event) => void
  ) => void;
  tokenize: () => Promise<Token>;
}

interface Event {
  detail: { currentState: { isCompletelyValid: unknown }; field: string };
}

interface Token {
  status: string;
  token: string;
  errors: unknown;
}

export interface Payments {
  card: () => Promise<Card>;
}
function SquareForm({
  handlePaymentButtonLoad,
  isSquareLoading,
  chargeSquare
}: SquareForProps): JSX.Element | null {
  const [squareLoaded, setSquareLoaded] = useState(false);
  const [squarePayments, setSquarePayments] = useState<Payments>();
  const [squareCard, setSquareCard] = useState<Card | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [validFields, setValidFields] = useState({
    cardNumber: false,
    cvv: false,
    expirationDate: false,
    postalCode: false
  });
  const isCardFieldsValid = Object.values(validFields).every(v => v);

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
      setSquarePayments(
        window.Square?.payments(squareApplicationId, locationId)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squareLoaded]);

  useEffect(() => {
    if (squarePayments) {
      if (!squareCard) void initializeSquareCard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squarePayments]);

  const initializeSquareCard = async () => {
    console.log('initializing square card...');
    const card: Card | undefined = await squarePayments?.card();
    if (!squareCard) await card?.attach('#card-container');
    if (card) setSquareCard(card);
    handlePaymentButtonLoad('square');
    card?.addEventListener('focusClassAdded', handleCardEvents);
    card?.addEventListener('focusClassRemoved', handleCardEvents);
    card?.addEventListener('errorClassAdded', handleCardEvents);
    card?.addEventListener('errorClassRemoved', handleCardEvents);
    card?.addEventListener('cardBrandChanged', handleCardEvents);
    card?.addEventListener('postalCodeChanged', handleCardEvents);
  };

  const handleCardEvents = ({ detail }: Event) => {
    if (detail) {
      const { currentState: { isCompletelyValid } = {}, field } = detail;
      if (field) {
        setValidFields(prevState => ({
          ...prevState,
          [field]: isCompletelyValid
        }));
      }
    }
  };

  const handleSubmition = async () => {
    // handle card form verification
    console.log('submition');
    // error handling
    // customer verification
    console.log(isCardFieldsValid);
    if (!isCardFieldsValid) return;
    if (!isSubmitting) {
      // Disable the submit button as we await tokenization and make a
      // payment request
      setSubmitting(true);
      try {
        const token = await tokenizePaymentMethod();
        chargeSquare(token);
        // Create your own addPayment function to communicate with your API
        // await addPayment(token)
        console.log('TOKEN', token);
      } catch (error) {
        console.error('FAILURE', error);
      } finally {
        setSubmitting(false);
      }
    }
  };

  async function tokenizePaymentMethod(): Promise<string | undefined> {
    const tokenResult: Token | undefined = await squareCard?.tokenize();
    // A list of token statuses can be found here:
    // https://developer.squareup.com/reference/sdks/web/payments/enums/TokenStatus
    if (tokenResult?.status === 'OK') {
      return tokenResult.token;
    }
    let errorMessage = `Tokenization failed-status: `;
    if (tokenResult?.status) errorMessage += tokenResult.status;
    if (tokenResult?.errors) {
      errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
    }
    throw new Error(errorMessage);
  }

  return squareLoaded ? (
    <>
      {}
      <form className={isSquareLoading ? 'hide' : ''} id='payment-form'>
        <div id='card-container' />
        <button
          className='confirm-donation-btn'
          disabled={!isCardFieldsValid || isSubmitting}
          id='card-button'
          onClick={handleSubmition}
          type='button'
        >
          Donate
        </button>
      </form>
    </>
  ) : null;
}

SquareForm.displayName = 'SquareForm';

export default SquareForm;
