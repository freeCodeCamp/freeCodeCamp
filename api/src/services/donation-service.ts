import { PrismaClient } from '@prisma/client';
import type { FastifyBaseLogger } from 'fastify';

export class DonationService {
  private prisma: PrismaClient;
  private logger: FastifyBaseLogger;

  constructor(prisma: PrismaClient, logger: FastifyBaseLogger) {
    this.prisma = prisma;
    this.logger = logger;
  }

  /**
   * Check if a user is currently donating based on active donations
   * This replaces the simple isDonating flag with comprehensive status checking
   */
  async isUserCurrentlyDonating(userId: string): Promise<boolean> {
    try {
      const activeDonations = await this.prisma.donation.findMany({
        where: {
          userId,
          status: 'active',
          OR: [
            { endDate: null },
            { endDate: { date: { gt: new Date() } } }
          ]
        }
      });

      return activeDonations.length > 0;
    } catch (error) {
      this.logger.error(error, `Error checking donation status for user ${userId}`);
      return false;
    }
  }

  /**
   * Update user's isDonating flag based on current donation status
   * This maintains backward compatibility while improving accuracy
   */
  async updateUserDonatingStatus(userId: string): Promise<void> {
    try {
      const isCurrentlyDonating = await this.isUserCurrentlyDonating(userId);

      await this.prisma.user.update({
        where: { id: userId },
        data: { isDonating: isCurrentlyDonating }
      });

      this.logger.info(`Updated user ${userId} donation status to ${isCurrentlyDonating}`);
    } catch (error) {
      this.logger.error(error, `Error updating donation status for user ${userId}`);
      throw error;
    }
  }

  /**
   * Handle donation expiration and cleanup
   */
  async processExpiredDonations(): Promise<void> {
    try {
      const expiredDonations = await this.prisma.donation.findMany({
        where: {
          status: 'active',
          endDate: {
            date: { lt: new Date() }
          }
        }
      });

      for (const donation of expiredDonations) {
        // Mark donation as expired
        await this.prisma.donation.update({
          where: { id: donation.id },
          data: {
            status: 'expired',
            cancellationReason: 'subscription_expired',
            updatedAt: new Date()
          }
        });

        // Update user's donation status
        await this.updateUserDonatingStatus(donation.userId);

        this.logger.info(`Processed expired donation ${donation.id} for user ${donation.userId}`);
      }
    } catch (error) {
      this.logger.error(error, 'Error processing expired donations');
      throw error;
    }
  }

  /**
   * Handle failed payment attempts and mark donations as failed after threshold
   */
  async processFailedPayments(): Promise<void> {
    try {
      const FAILED_PAYMENT_THRESHOLD = 3;
      
      const donationsWithFailures = await this.prisma.donation.findMany({
        where: {
          status: 'active',
          failedPaymentAttempts: { gte: FAILED_PAYMENT_THRESHOLD }
        }
      });

      for (const donation of donationsWithFailures) {
        await this.prisma.donation.update({
          where: { id: donation.id },
          data: {
            status: 'failed',
            cancellationReason: 'payment_failure',
            endDate: {
              date: new Date(),
              when: new Date().toISOString()
            },
            updatedAt: new Date()
          }
        });

        // Update user's donation status
        await this.updateUserDonatingStatus(donation.userId);

        this.logger.info(`Marked donation ${donation.id} as failed due to payment failures`);
      }
    } catch (error) {
      this.logger.error(error, 'Error processing failed payments');
      throw error;
    }
  }

  /**
   * Add payment event to donation history
   */
  async addPaymentEvent(
    donationId: string,
    paymentData: {
      amount: number;
      currency?: string;
      status: 'succeeded' | 'failed' | 'pending';
      paymentMethodId?: string;
      failureReason?: string;
      providerTransactionId: string;
    }
  ): Promise<void> {
    try {
      const paymentEvent = {
        id: new this.prisma.objectId().toString(),
        amount: paymentData.amount,
        currency: paymentData.currency || 'USD',
        status: paymentData.status,
        paymentDate: new Date(),
        paymentMethodId: paymentData.paymentMethodId,
        failureReason: paymentData.failureReason,
        providerTransactionId: paymentData.providerTransactionId
      };

      const donation = await this.prisma.donation.findUnique({
        where: { id: donationId }
      });

      if (!donation) {
        throw new Error(`Donation ${donationId} not found`);
      }

      const updateData: any = {
        paymentHistory: {
          push: paymentEvent
        },
        updatedAt: new Date()
      };

      if (paymentData.status === 'succeeded') {
        updateData.lastPaymentDate = new Date();
        updateData.failedPaymentAttempts = 0; // Reset failed attempts on success
      } else if (paymentData.status === 'failed') {
        updateData.failedPaymentAttempts = donation.failedPaymentAttempts + 1;
      }

      await this.prisma.donation.update({
        where: { id: donationId },
        data: updateData
      });

      this.logger.info(`Added payment event for donation ${donationId}: ${paymentData.status}`);
    } catch (error) {
      this.logger.error(error, `Error adding payment event for donation ${donationId}`);
      throw error;
    }
  }

  /**
   * Get donation summary for a user
   */
  async getUserDonationSummary(userId: string): Promise<{
    totalDonations: number;
    activeDonations: number;
    totalAmount: number;
    lastDonationDate: Date | null;
  }> {
    try {
      const donations = await this.prisma.donation.findMany({
        where: { userId }
      });

      const activeDonations = donations.filter(d => d.status === 'active').length;
      const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
      const lastDonationDate = donations.length > 0 
        ? donations.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0].createdAt
        : null;

      return {
        totalDonations: donations.length,
        activeDonations,
        totalAmount,
        lastDonationDate
      };
    } catch (error) {
      this.logger.error(error, `Error getting donation summary for user ${userId}`);
      throw error;
    }
  }
}