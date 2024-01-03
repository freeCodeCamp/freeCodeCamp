import { loadStripe } from '@stripe/stripe-js';

import envData from '../../config/env.json';

const { stripePublicKey } = envData;

export const stripe = stripePublicKey ? loadStripe(stripePublicKey) : null;
