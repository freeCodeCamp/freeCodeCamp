import { PAYPAL_CLIENT_ID, PAYPAL_SECRET, DEPLOYMENT_ENV } from './env.js';

export const PAYPAL_BASE_URL =
  DEPLOYMENT_ENV === 'production'
    ? 'https://api.paypal.com'
    : 'https://api.sandbox.paypal.com';

/**
 *
 */
export async function getPayPalAccessToken(): Promise<string> {
  const credentials = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`
  ).toString('base64');
  const res = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  if (!res.ok) {
    throw new Error(`PayPal token request failed with status ${res.status}`);
  }
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}
