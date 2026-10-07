/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types=".." />
import Stripe from 'stripe';

let stripe = new Stripe('sk_test_123', {
  apiVersion: '2024-06-20',
});

stripe = new Stripe('sk_test_123');

stripe = new Stripe('sk_test_123', {
  // @ts-ignore ignore specific apiVersion.
  apiVersion: '2019-11-05',
});

stripe = new Stripe('sk_test_123', {
  // @ts-ignore ignore default apiVersion.
  apiVersion: null,
});

// Check config object.
stripe = new Stripe('sk_test_123', {
  apiVersion: '2024-06-20',
  typescript: true,
  maxNetworkRetries: 1,
  timeout: 1000,
  host: 'api.example.com',
  port: 123,
  telemetry: true,
  httpClient: Stripe.createNodeHttpClient(),
  appInfo: {
    name: 'my-wordpress-plugin',
  },
});

(async (): Promise<void> => {
  const params: Stripe.CustomerCreateParams = {
    description: 'test',
  };
  const opts: Stripe.RequestOptions = {
    apiVersion: '2024-06-20',
  };
  const customer: Stripe.Customer = await stripe.customers.create(params, opts);

  const address: Stripe.Address | null | undefined = customer.address;

  if (!address) return;
  const city: string | null = address.city;

  // Check no opts:
  await stripe.customers.create(params);

  // Check multiple dispatch:
  let product = await stripe.products.retrieve('prod_123', opts);
  product = await stripe.products.retrieve('prod_123', {expand: []}, opts);

  const charge: Stripe.Charge = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });

  // Ignore null case.
  if (!charge.customer) throw Error('guard');

  // Check you can cast an expandable field to the object:
  const cusEmail: string | null = (charge.customer as Stripe.Customer).email;
  // Check you can cast an expandable field to a string:
  const btId: string = charge.balance_transaction as string;

  // Check you can deal with deleted:
  if (
    typeof charge.customer !== 'string' &&
    // Not sure why `!charge.customer.deleted` doesn't work, it seems to in a playground:
    // https://www.typescriptlang.org/play/index.html#code/JYOwLgpgTgZghgYwgAgGIHt3IN4ChnJwBcyAzmFKAOYDc+yADpQgNYA2AnieZSLfXABGiFtwrVkAH2QgArmzZSZsgLaDodAmA4MIJAOQxM+zcgAmENhEhmA-CQBu6YGboBfXKEixEKACKW1hBmGFh4Wjp6yIbGphZWNiQUshDuuLjausgAsnAc6qHIALxomEoBCcGh6RYIbHBQKAjoIOTIAB4kufkQ1Z4wyAAUAITtAHTxQWYAlDj0za1ghGK8VMUdY3C4Hri19Y3IC21cpVjSFVOF0jwS0nIK6cADgxzIAGRvyJkQ6AOvw0USvobnx9O9PsMOBNAjZZuFDi02sQyOI+OsoVsPEA
    // Might be a complexity limit with our resources: https://github.com/microsoft/TypeScript/pull/30779/files#diff-c3ed224e4daa84352f7f1abcd23e8ccaR13219
    !('deleted' in charge.customer)
  ) {
    const created: number = charge.customer.created;
  }
  const r = Math.random() - 0.5;
  // Okay, this is how I hope people can deal with deleted:
  const maybeCoupon: Stripe.Coupon | Stripe.DeletedCoupon = await (r
    ? stripe.coupons.retrieve('25_off')
    : stripe.coupons.del('25_off'));
  if (maybeCoupon.deleted) {
    const d: true = maybeCoupon.deleted;
  } else {
    // Here, TS knows it's a full Coupon.
    const created: number = maybeCoupon.created;
  }

  for await (const customer of stripe.customers.list()) {
    const {id} = customer as Stripe.Customer;
    if (id === 'hi') {
      break;
    }
  }

  const cusList: Stripe.ApiList<Stripe.Customer> = await stripe.customers.list();

  const aThousandCustomers: Array<Stripe.Customer> = await stripe.customers
    .list()
    .autoPagingToArray({limit: 1000});

  const nothing: void = await stripe.customers
    .list()
    .autoPagingEach((customer: Stripe.Customer) => {
      if (customer.id === 'one') {
        return false;
      }
      if (customer.id === 'two') {
        return Promise.resolve(false);
      }
      if (customer.id === 'three') {
        return Promise.resolve();
      }
      return undefined;
    });

  // @ts-expect-error
  (await stripe.invoices.retrieveUpcoming()).id;
  (await stripe.invoices.retrieve('')).id;

  try {
    await stripe.paymentIntents.create({amount: 100, currency: 'USD'});
  } catch (err) {
    if (err instanceof stripe.errors.StripeCardError) {
      const declineCode: string = err.decline_code;
    }
    if (err instanceof Stripe.errors.StripeCardError) {
      const declineCode: string = err.decline_code;
    }
  }

  {
    const custs = await stripe.customers.list();
    const lr = custs.lastResponse;
    const requestId: string = lr.requestId;
    const statusCode: number = lr.statusCode;
    const apiVersion: string | undefined = lr.apiVersion;
    const idempotencyKey: string | undefined = lr.idempotencyKey;
    const headers = lr.headers;
    const header: string | undefined = headers['request-id'];
  }

  {
    const cust = await stripe.customers.retrieve('foo');
    const lr = cust.lastResponse;
    const requestId: string = lr.requestId;
    const statusCode: number = lr.statusCode;
    const apiVersion: string | undefined = lr.apiVersion;
    const idempotencyKey: string | undefined = lr.idempotencyKey;
    const headers = lr.headers;
    const header: string | undefined = lr.headers['request-id'];
  }
  {
    const acct = await stripe.accounts.createExternalAccount('foo', {
      ['external_account']: 'foo',
    });
    if (acct.object === 'card') {
      const rid: string = acct.lastResponse.requestId;
    }
  }
})();

const Foo = Stripe.StripeResource.extend({
  foo: Stripe.StripeResource.method({
    method: 'create',
    path: 'foo',
  }),
  fooFullPath: Stripe.StripeResource.method({
    method: 'create',
    fullPath: '/v1/full/path',
  }),
  search: Stripe.StripeResource.method({
    method: 'create',
    fullPath: 'foo',
    methodType: 'search',
  }),
  customer: Stripe.StripeResource.method<Stripe.Customer>({method: 'POST'}),
});
const fooClient = new Foo(stripe);
const searchResponse: Stripe.Response<object> = fooClient.search();
const customerResponse: Stripe.Response<Stripe.Customer> = fooClient.customer();

const maxBufferedRequestMetrics: number =
  Stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS;

// Test NodeHttpClient request processing.
import {Agent} from 'http';
async (): Promise<void> => {
  const client = Stripe.createNodeHttpClient(new Agent());

  const response = await client.makeRequest(
    'api.stripe.com',
    '443',
    '/test',
    'POST',
    {
      'Stripe-Account': 'account',
      'Content-Length': 123,
    },
    'requestdata',
    'https',
    80000
  );

  const stream: Stripe.StripeStreamResponse = response.toStream(() => {
    return;
  });
  stream.setEncoding('utf8');

  const jsonResponse: object = await response.toJSON();
};

// Test FetchHttpClient request processing.
async (): Promise<void> => {
  const client = Stripe.createFetchHttpClient();

  const response = await client.makeRequest(
    'api.stripe.com',
    '443',
    '/test',
    'POST',
    {
      'Stripe-Account': 'account',
      'Content-Length': 123,
    },
    'requestdata',
    'https',
    80000
  );

  const stream = response.toStream(() => {
    return;
  });

  const results = await stream.getReader().read();

  const jsonResponse: object = await response.toJSON();
};

// Tests asynchronous webhook processing.
async (): Promise<void> => {
  const cryptoProvider = Stripe.createSubtleCryptoProvider();

  const event = await stripe.webhooks.constructEventAsync(
    'body',
    'signature',
    'secret',
    undefined,
    cryptoProvider
  );

  if (event.type == 'customer.created') {
    const customer: Stripe.Customer = event.data.object;
    const previous_attributes = event.data.previous_attributes;
  }

  // @ts-expect-error unknown type
  if (event.type == 'customer.created2') {
    // @ts-expect-error unknown type doesn't have a typed object
    const customer: Stripe.Customer = event.data.object;
  }

  const event2 = await stripe.events.retrieve(event.id);
};

// Can reference error types
let rawError: Stripe.StripeRawError;

let newError: Stripe.errors.StripeError;

const instanceofCheck1 = {} instanceof Stripe.errors.StripeError;
const instanceofCheck2 = {} instanceof Stripe.errors.StripeAPIError;
const instanceofCheck5 = {} instanceof stripe.errors.StripeError;
const instanceofCheck6 = {} instanceof stripe.errors.StripeAPIError;

Stripe.errors.generate({
  type: 'card_error',
});
stripe.errors.generate({
  type: 'card_error',
});
Stripe.errors.StripeError.generate({
  type: 'card_error',
});

stripe.accounts.retrieve('123', {
  host: 'my_host',
});
stripe.files.create({
  purpose: 'dispute_evidence',
  file: {
    data: Buffer.from('File'),
    name: 'minimal.pdf',
    type: 'application/octet-stream',
  },
  file_link_data: {create: true},
});

// Test deprecated parameters still work
const param: Stripe.UsageRecordSummaryListParams = {expand: []};
