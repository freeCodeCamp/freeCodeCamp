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
  theme: string;
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
  card: (styles: unknown) => Promise<Card>;
}
function SquareForm({
  handlePaymentButtonLoad,
  isSquareLoading,
  chargeSquare,
  theme
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
      const script = document.createElement('script');
      const scriptSource = `https://${
        deploymentEnv === 'staging' ? 'sandbox.web' : ''
      }.squarecdn.com/v1/square.js`;
      script.crossOrigin = 'anonymous';
      script.id = 'squareScript';
      script.src = scriptSource;
      document.head.appendChild(script);
      script.onload = () => {
        setSquareLoaded(true);
      };
    }
  }, []);

  useEffect(() => {
    if (squareLoaded && !squarePayments) {
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

  const darkModeStyles = {
    '.input-container': {
      borderColor: '#3b3b4f'
    },
    '.input-container.is-focus': {
      borderColor: '#006AFF'
    },
    '.input-container.is-error': {
      borderColor: '#ff1600'
    },
    '.message-text': {
      color: '#d0d0d5'
    },
    '.message-icon': {
      color: '#d0d0d5'
    },
    '.message-text.is-error': {
      color: '#ff1600'
    },
    '.message-icon.is-error': {
      color: '#ff1600'
    },
    input: {
      backgroundColor: '#0a0a23',
      color: '#FFFFFF'
    },
    'input::placeholder': {
      color: '#858591'
    },
    'input.is-error': {
      color: '#ff1600'
    }
  };

  const initializeSquareCard = async () => {
    const style = theme === 'night' ? darkModeStyles : {};
    const card: Card | undefined = await squarePayments?.card({ style });
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
    if (!isCardFieldsValid) return;
    if (!isSubmitting) {
      setSubmitting(true);
      try {
        const token = await tokenizePaymentMethod();
        chargeSquare(token);
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
