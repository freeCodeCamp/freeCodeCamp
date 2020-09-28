/* eslint-disable camelcase */
export const mockCancellationHook = {
  headers: {
    host: 'a47fb0f4.ngrok.io',
    accept: '*/*',
    'paypal-transmission-id': '2e24bc40-61d1-11ea-8ac4-7d4e2605c70c',
    'paypal-transmission-time': '2020-03-09T06:42:43Z',
    'paypal-transmission-sig': 'ODCa4gXmfnxkNga1t9p2HTIWFjlTj68P7MhueQd',
    'paypal-auth-version': 'v2',
    'paypal-cert-url': 'https://api.sandbox.paypal.com/v1/notifications/certs',
    'paypal-auth-algo': 'SHA256withRSA',
    'content-type': 'application/json',
    'user-agent': 'PayPal/AUHD-214.0-54280748',
    'correlation-id': 'c3823d4c07ce5',
    cal_poolstack: 'amqunphttpdeliveryd:UNPHTTPDELIVERY',
    client_pid: '23853',
    'content-length': '1706',
    'x-forwarded-proto': 'https',
    'x-forwarded-for': '173.0.82.126'
  },
  body: {
    id: 'WH-1VF24938EU372274X-83540367M0110254R',
    event_version: '1.0',
    create_time: '2020-03-06T15:34:50.000Z',
    resource_type: 'subscription',
    resource_version: '2.0',
    event_type: 'BILLING.SUBSCRIPTION.CANCELLED',
    summary: 'Subscription cancelled',
    resource: {
      shipping_amount: { currency_code: 'USD', value: '0.0' },
      start_time: '2020-03-05T08:00:00Z',
      update_time: '2020-03-09T06:42:09Z',
      quantity: '1',
      subscriber: {
        name: [Object],
        email_address: 'sb-zdry81054163@personal.example.com',
        payer_id: '82PVXVLDAU3E8',
        shipping_address: [Object]
      },
      billing_info: {
        outstanding_balance: [Object],
        cycle_executions: [Array],
        last_payment: [Object],
        next_billing_time: '2020-04-05T10:00:00Z',
        failed_payments_count: 0
      },
      create_time: '2020-03-06T07:34:50Z',
      links: [[Object]],
      id: 'I-BA1ATBNF8T3P',
      plan_id: 'P-6VP46874PR423771HLZDKFBA',
      status: 'CANCELLED',
      status_update_time: '2020-03-09T06:42:09Z'
    },
    links: [
      {
        href:
          'https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-1VF24938EU372274X-83540367M0110254R',
        rel: 'self',
        method: 'GET'
      },
      {
        href:
          'https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-1VF24938EU372274X-83540367M0110254R/resend',
        rel: 'resend',
        method: 'POST'
      }
    ]
  }
};
export const mockActivationHook = {
  headers: {
    host: 'a47fb0f4.ngrok.io',
    accept: '*/*',
    'paypal-transmission-id': '22103660-5f7d-11ea-8ac4-7d4e2605c70c',
    'paypal-transmission-time': '2020-03-06T07:36:03Z',
    'paypal-transmission-sig':
      'a;sldfn;lqwjhepjtn12l3n5123mnpu1i-sc-_+++dsflqenwpk1n234uthmsqwr123',
    'paypal-auth-version': 'v2',
    'paypal-cert-url':
      'https://api.sandbox.paypal.com/v1/notifications/certs/CERT-360caa42-fca2a594-1d93a270',
    'paypal-auth-algo': 'SHASHASHA',
    'content-type': 'application/json',
    'user-agent': 'PayPal/AUHD-214.0-54280748',
    'correlation-id': 'e0b25772e11af',
    client_pid: '14973',
    'content-length': '2201',
    'x-forwarded-proto': 'https',
    'x-forwarded-for': '173.0.82.126'
  },
  body: {
    id: 'WH-77687562XN25889J8-8Y6T55435R66168T6',
    create_time: '2018-19-12T22:20:32.000Z',
    resource_type: 'subscription',
    event_type: 'BILLING.SUBSCRIPTION.ACTIVATED',
    summary: 'A billing agreement was activated.',
    resource: {
      quantity: '20',
      subscriber: {
        name: {
          given_name: 'John',
          surname: 'Doe'
        },
        email_address: 'donor@freecodecamp.com',
        shipping_address: {
          name: {
            full_name: 'John Doe'
          },
          address: {
            address_line_1: '2211 N First Street',
            address_line_2: 'Building 17',
            admin_area_2: 'San Jose',
            admin_area_1: 'CA',
            postal_code: '95131',
            country_code: 'US'
          }
        }
      },
      create_time: '2018-12-10T21:20:49Z',
      shipping_amount: {
        currency_code: 'USD',
        value: '10.00'
      },
      start_time: '2018-11-01T00:00:00Z',
      update_time: '2018-12-10T21:20:49Z',
      billing_info: {
        outstanding_balance: {
          currency_code: 'USD',
          value: '10.00'
        },
        cycle_executions: [
          {
            tenure_type: 'TRIAL',
            sequence: 1,
            cycles_completed: 1,
            cycles_remaining: 0,
            current_pricing_scheme_version: 1
          },
          {
            tenure_type: 'REGULAR',
            sequence: 2,
            cycles_completed: 1,
            cycles_remaining: 0,
            current_pricing_scheme_version: 2
          }
        ],
        last_payment: {
          amount: {
            currency_code: 'USD',
            value: '500.00'
          },
          time: '2018-12-01T01:20:49Z'
        },
        next_billing_time: '2019-01-01T00:20:49Z',
        final_payment_time: '2020-01-01T00:20:49Z',
        failed_payments_count: 2
      },
      links: [
        {
          href:
            'https://api.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
          rel: 'self',
          method: 'GET'
        },
        {
          href:
            'https://api.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
          rel: 'edit',
          method: 'PATCH'
        },
        {
          href:
            'https://api.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/suspend',
          rel: 'suspend',
          method: 'POST'
        },
        {
          href:
            'https://api.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/cancel',
          rel: 'cancel',
          method: 'POST'
        },
        {
          href:
            'https://api.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/capture',
          rel: 'capture',
          method: 'POST'
        }
      ],
      id: 'I-BW452GLLEP1G',
      plan_id: 'P-5ML4271244454362WXNWU5NQ',
      auto_renewal: true,
      status: 'ACTIVE',
      status_update_time: '2018-12-10T21:20:49Z'
    },
    links: [
      {
        href:
          'https://api.paypal.com/v1/notifications/webhooks-events/WH-77687562XN25889J8-8Y6T55435R66168T6',
        rel: 'self',
        method: 'GET',
        encType: 'application/json'
      },
      {
        href:
          'https://api.paypal.com/v1/notifications/webhooks-events/WH-77687562XN25889J8-8Y6T55435R66168T6/resend',
        rel: 'resend',
        method: 'POST',
        encType: 'application/json'
      }
    ],
    event_version: '1.0',
    resource_version: '2.0'
  }
};
