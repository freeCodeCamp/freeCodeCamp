/* eslint-disable camelcase */
import stripe from 'stripe';
import { ObjectId } from 'mongodb';
import { handleStripeCardUpdateSession } from './donation';

jest.mock('stripe', () => ({
  checkout: {
    sessions: {
      create: jest.fn()
    }
  }
}));

describe('donation', () => {
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
