/* eslint-disable camelcase */
import axios from 'axios';
import stripe from 'stripe';
import { ObjectId } from 'mongodb';
import keys from '../../../config/secrets';
import {
  mockApp,
  createDonationMockFn,
  createUserMockFn,
  updateDonationAttr,
  updateUserAttr
} from '../boot_tests/fixtures';
import { mockActivationHook, mockCancellationHook } from './__mocks__/donation';
import {
  getAsyncPaypalToken,
  verifyWebHook,
  updateUser,
  capitalizeKeys,
  createDonationObj,
  handleStripeCardUpdateSession
} from './donation';

jest.mock('axios');
jest.mock('stripe', () => ({
  checkout: {
    sessions: {
      create: jest.fn()
    }
  }
}));

const verificationUrl = `https://api.sandbox.paypal.com/v1/notifications/verify-webhook-signature`;
const tokenUrl = `https://api.sandbox.paypal.com/v1/oauth2/token`;
const { body: activationHookBody, headers: activationHookHeaders } =
  mockActivationHook;

describe('donation', () => {
  describe('getAsyncPaypalToken', () => {
    it('call paypal api for token ', async () => {
      const res = {
        data: {
          access_token: 'token'
        }
      };

      axios.post.mockImplementationOnce(() => Promise.resolve(res));

      await expect(getAsyncPaypalToken()).resolves.toEqual(
        res.data.access_token
      );

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(tokenUrl, null, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
          username: keys.paypal.client,
          password: keys.paypal.secret
        },
        params: {
          grant_type: 'client_credentials'
        }
      });
    });
  });

  describe('verifyWebHook', () => {
    // normalize headers
    capitalizeKeys(activationHookHeaders);
    const mockWebhookId = 'qwdfq;3w12341dfa4';
    const mockAccessToken = '241231223$!@$#1243';
    const mockPayLoad = {
      auth_algo: activationHookHeaders['PAYPAL-AUTH-ALGO'],
      cert_url: activationHookHeaders['PAYPAL-CERT-URL'],
      transmission_id: activationHookHeaders['PAYPAL-TRANSMISSION-ID'],
      transmission_sig: activationHookHeaders['PAYPAL-TRANSMISSION-SIG'],
      transmission_time: activationHookHeaders['PAYPAL-TRANSMISSION-TIME'],
      webhook_id: mockWebhookId,
      webhook_event: activationHookBody
    };
    const failedVerificationErr = {
      message: `Failed token verification.`,
      type: 'FailedPaypalTokenVerificationError'
    };
    const axiosOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockAccessToken}`
      }
    };
    const successVerificationResponse = {
      data: {
        verification_status: 'SUCCESS'
      }
    };
    const failedVerificationResponse = {
      data: {
        verification_status: 'FAILED'
      }
    };

    it('calls paypal for Webhook verification', async () => {
      axios.post.mockImplementationOnce(() =>
        Promise.resolve(successVerificationResponse)
      );

      await expect(
        verifyWebHook(
          activationHookHeaders,
          activationHookBody,
          mockAccessToken,
          mockWebhookId
        )
      ).resolves.toEqual(activationHookBody);

      expect(axios.post).toHaveBeenCalledWith(
        verificationUrl,
        mockPayLoad,
        axiosOptions
      );
    });
    it('throws error if verification not successful', async () => {
      axios.post.mockImplementationOnce(() =>
        Promise.resolve(failedVerificationResponse)
      );

      await expect(
        verifyWebHook(
          activationHookHeaders,
          activationHookBody,
          mockAccessToken,
          mockWebhookId
        )
      ).rejects.toEqual(failedVerificationErr);
    });
  });

  describe('updateUser', () => {
    it('created a donation when a machting user found', () => {
      updateUser(activationHookBody, mockApp);
      expect(createDonationMockFn).toHaveBeenCalledTimes(1);
      expect(createDonationMockFn).toHaveBeenCalledWith(
        createDonationObj(activationHookBody)
      );
    });
    it('create a user and donation when no machting user found', () => {
      let newActivationHookBody = activationHookBody;
      newActivationHookBody.resource.subscriber.email_address =
        'new@freecodecamp.org';
      updateUser(newActivationHookBody, mockApp);
      expect(createUserMockFn).toHaveBeenCalledTimes(1);
    });

    it('modify user and donation records on cancellation', () => {
      const { body: cancellationHookBody } = mockCancellationHook;
      const {
        resource: { status_update_time = new Date(Date.now()).toISOString() }
      } = cancellationHookBody;

      updateUser(cancellationHookBody, mockApp);
      expect(updateDonationAttr).toHaveBeenCalledWith({
        endDate: new Date(status_update_time).toISOString()
      });
      expect(updateUserAttr).not.toHaveBeenCalled();
    });
  });

  describe('handleStripeCardUpdateSession', () => {
    const mockUserId = ObjectId('507f1f77bcf86cd799439011');
    const mockDonation = {
      customerId: 'customer_123',
      subscriptionId: 'sub_123'
    };
    const req = { user: { id: mockUserId } };
    const app = {
      models: {
        Donation: { findOne: jest.fn().mockResolvedValue(mockDonation) }
      }
    };

    stripe.checkout.sessions.create.mockResolvedValue({ id: 'session_123' });

    it('creates a session successfully', async () => {
      const result = await handleStripeCardUpdateSession(req, app, stripe);
      expect(app.models.Donation.findOne).toHaveBeenCalledWith({
        where: { userId: mockUserId, provider: 'stripe' }
      });
      expect(stripe.checkout.sessions.create).toHaveBeenCalled();
      expect(result).toEqual({ sessionId: 'session_123' });
    });

    it('throws an error when donation not found', async () => {
      const app = {
        models: { Donation: { findOne: jest.fn().mockResolvedValue(null) } }
      };

      await expect(
        handleStripeCardUpdateSession(req, app, stripe)
      ).rejects.toThrow('Stripe donation record not found');
    });

    it('handles stripe session creation failure', async () => {
      stripe.checkout.sessions.create.mockRejectedValue(
        new Error('Stripe error')
      );

      await expect(
        handleStripeCardUpdateSession(req, app, stripe)
      ).rejects.toThrow('Stripe error');
    });
  });
});
