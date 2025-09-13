import cron from 'node-cron';
import type { FastifyInstance } from 'fastify';
import { DonationService } from './donation-service';

/**
 * Service to handle periodic donation maintenance tasks
 */
export class DonationCleanupService {
  private fastify: FastifyInstance;
  private donationService: DonationService;
  private jobs: cron.ScheduledTask[] = [];

  constructor(fastify: FastifyInstance) {
    this.fastify = fastify;
    this.donationService = new DonationService(fastify.prisma, fastify.log);
  }

  /**
   * Start scheduled cleanup jobs
   */
  start(): void {
    // Run every hour to check for expired donations
    const expiredDonationsJob = cron.schedule('0 * * * *', async () => {
      try {
        this.fastify.log.info('Running expired donations cleanup job');
        await this.donationService.processExpiredDonations();
      } catch (error) {
        this.fastify.log.error(error, 'Error in expired donations cleanup job');
      }
    }, {
      scheduled: false,
      timezone: 'UTC'
    });

    // Run every 4 hours to check for failed payments
    const failedPaymentsJob = cron.schedule('0 */4 * * *', async () => {
      try {
        this.fastify.log.info('Running failed payments cleanup job');
        await this.donationService.processFailedPayments();
      } catch (error) {
        this.fastify.log.error(error, 'Error in failed payments cleanup job');
      }
    }, {
      scheduled: false,
      timezone: 'UTC'
    });

    // Run daily to sync user isDonating flags
    const userStatusSyncJob = cron.schedule('0 2 * * *', async () => {
      try {
        this.fastify.log.info('Running user donation status sync job');
        await this.syncAllUserDonationStatus();
      } catch (error) {
        this.fastify.log.error(error, 'Error in user donation status sync job');
      }
    }, {
      scheduled: false,
      timezone: 'UTC'
    });

    // Start all jobs
    expiredDonationsJob.start();
    failedPaymentsJob.start();
    userStatusSyncJob.start();

    this.jobs.push(expiredDonationsJob, failedPaymentsJob, userStatusSyncJob);

    this.fastify.log.info('Donation cleanup jobs started');
  }

  /**
   * Stop all scheduled jobs
   */
  stop(): void {
    this.jobs.forEach(job => {
      if (job) {
        job.stop();
      }
    });
    this.jobs = [];
    this.fastify.log.info('Donation cleanup jobs stopped');
  }

  /**
   * Sync donation status for all users
   */
  private async syncAllUserDonationStatus(): Promise<void> {
    try {
      // Get users who might need status updates
      const usersToCheck = await this.fastify.prisma.user.findMany({
        where: {
          OR: [
            { isDonating: true },
            {
              donations: {
                some: {
                  status: 'active'
                }
              }
            }
          ]
        },
        select: { id: true }
      });

      let updatedCount = 0;

      for (const user of usersToCheck) {
        try {
          const wasUpdated = await this.syncUserDonationStatus(user.id);
          if (wasUpdated) updatedCount++;
        } catch (error) {
          this.fastify.log.error(error, `Error syncing status for user ${user.id}`);
        }
      }

      this.fastify.log.info(`Synced donation status for ${updatedCount} users`);
    } catch (error) {
      this.fastify.log.error(error, 'Error syncing all user donation statuses');
      throw error;
    }
  }

  /**
   * Sync donation status for a specific user
   */
  private async syncUserDonationStatus(userId: string): Promise<boolean> {
    const currentUser = await this.fastify.prisma.user.findUnique({
      where: { id: userId },
      select: { isDonating: true }
    });

    if (!currentUser) return false;

    const shouldBeDonating = await this.donationService.isUserCurrentlyDonating(userId);

    if (currentUser.isDonating !== shouldBeDonating) {
      await this.fastify.prisma.user.update({
        where: { id: userId },
        data: { isDonating: shouldBeDonating }
      });
      return true;
    }

    return false;
  }

  /**
   * Generate donation statistics report
   */
  async generateStatisticsReport(): Promise<{
    totalDonations: number;
    activeDonations: number;
    expiredDonations: number;
    cancelledDonations: number;
    failedDonations: number;
    totalRevenue: number;
    averageDonationAmount: number;
  }> {
    const donations = await this.fastify.prisma.donation.findMany({
      select: {
        status: true,
        amount: true
      }
    });

    const stats = donations.reduce((acc, donation) => {
      acc.totalDonations++;
      acc.totalRevenue += donation.amount;

      switch (donation.status) {
        case 'active':
          acc.activeDonations++;
          break;
        case 'expired':
          acc.expiredDonations++;
          break;
        case 'cancelled':
          acc.cancelledDonations++;
          break;
        case 'failed':
          acc.failedDonations++;
          break;
      }

      return acc;
    }, {
      totalDonations: 0,
      activeDonations: 0,
      expiredDonations: 0,
      cancelledDonations: 0,
      failedDonations: 0,
      totalRevenue: 0
    });

    return {
      ...stats,
      averageDonationAmount: stats.totalDonations > 0 
        ? Math.round(stats.totalRevenue / stats.totalDonations) 
        : 0
    };
  }
}

/**
 * Plugin to register the donation cleanup service
 */
export async function registerDonationCleanupService(fastify: FastifyInstance) {
  const cleanupService = new DonationCleanupService(fastify);
  
  // Start cleanup jobs when the server starts
  fastify.addHook('onReady', async () => {
    cleanupService.start();
  });

  // Stop cleanup jobs when the server closes
  fastify.addHook('onClose', async () => {
    cleanupService.stop();
  });

  // Decorate fastify instance with the service
  fastify.decorate('donationCleanupService', cleanupService);
}