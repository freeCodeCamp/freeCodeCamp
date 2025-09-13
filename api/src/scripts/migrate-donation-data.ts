#!/usr/bin/env node

/**
 * Migration script to update existing donation data to the new enhanced schema
 * This script should be run after deploying the new donation schema
 */

import { PrismaClient } from '@prisma/client';
import { getLogger } from '../utils/logger';

const logger = getLogger();
const prisma = new PrismaClient();

async function migrateDonationData() {
  logger.info('Starting donation data migration...');

  try {
    // Get all existing donations
    const existingDonations = await prisma.donation.findMany({
      where: {
        // Only migrate donations that don't have the new fields
        OR: [
          { status: { equals: undefined } },
          { createdAt: { equals: undefined } }
        ]
      }
    });

    logger.info(`Found ${existingDonations.length} donations to migrate`);

    let migratedCount = 0;
    let errorCount = 0;

    for (const donation of existingDonations) {
      try {
        // Determine status based on existing data
        let status = 'active';
        let cancellationReason: string | undefined;

        if (donation.endDate) {
          const endDate = new Date(donation.endDate.date);
          if (endDate <= new Date()) {
            status = 'expired';
            cancellationReason = 'subscription_expired';
          }
        }

        // Update donation with new fields
        await prisma.donation.update({
          where: { id: donation.id },
          data: {
            status,
            cancellationReason,
            paymentHistory: [], // Start with empty history
            webhookEvents: [],  // Start with empty webhook events
            failedPaymentAttempts: 0,
            createdAt: donation.startDate.date, // Use start date as created date
            updatedAt: new Date()
          }
        });

        migratedCount++;
        
        if (migratedCount % 100 === 0) {
          logger.info(`Migrated ${migratedCount} donations so far...`);
        }

      } catch (error) {
        logger.error(error, `Error migrating donation ${donation.id}`);
        errorCount++;
      }
    }

    logger.info(`Migration completed. Migrated: ${migratedCount}, Errors: ${errorCount}`);

    // Update user isDonating flags based on new comprehensive status
    await updateUserDonatingFlags();

  } catch (error) {
    logger.error(error, 'Migration failed');
    process.exit(1);
  }
}

async function updateUserDonatingFlags() {
  logger.info('Updating user isDonating flags...');

  try {
    // Get all users who currently have donations
    const usersWithDonations = await prisma.user.findMany({
      where: {
        donations: {
          some: {}
        }
      },
      select: {
        id: true,
        isDonating: true
      }
    });

    logger.info(`Found ${usersWithDonations.length} users with donations`);

    let updatedCount = 0;

    for (const user of usersWithDonations) {
      try {
        // Check if user has active donations
        const activeDonations = await prisma.donation.findMany({
          where: {
            userId: user.id,
            status: 'active',
            OR: [
              { endDate: null },
              { endDate: { date: { gt: new Date() } } }
            ]
          }
        });

        const shouldBeDonating = activeDonations.length > 0;

        // Update if status has changed
        if (user.isDonating !== shouldBeDonating) {
          await prisma.user.update({
            where: { id: user.id },
            data: { isDonating: shouldBeDonating }
          });

          updatedCount++;
        }

      } catch (error) {
        logger.error(error, `Error updating user ${user.id} donation status`);
      }
    }

    logger.info(`Updated ${updatedCount} user donation statuses`);

  } catch (error) {
    logger.error(error, 'Error updating user donation flags');
    throw error;
  }
}

async function main() {
  try {
    await migrateDonationData();
    logger.info('Migration completed successfully');
  } catch (error) {
    logger.error(error, 'Migration failed');
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run migration if called directly
if (require.main === module) {
  main().catch(console.error);
}

export { migrateDonationData, updateUserDonatingFlags };