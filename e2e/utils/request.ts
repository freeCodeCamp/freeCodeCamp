import { APIRequestContext, expect } from '@playwright/test';

const ensureLeadingSlash = (endpoint: string) =>
  endpoint[0] === '/' ? endpoint : '/' + endpoint;

export const authedRequest = async ({
  request,
  method,
  endpoint,
  data
}: {
  request: APIRequestContext;
  method: 'post' | 'put';
  endpoint: string;
  data: Record<string, unknown>;
}) => {
  const csrfToken = (await request.storageState()).cookies.find(
    c => c.name === 'csrf_token'
  )?.value;

  expect(csrfToken).toBeTruthy();

  const res = await request[method](
    process.env.API_LOCATION + ensureLeadingSlash(endpoint),
    {
      data,
      headers: { 'csrf-token': csrfToken! }
    }
  );
  expect(res.status()).toBe(200);
  return res;
};
