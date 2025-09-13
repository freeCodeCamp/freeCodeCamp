-- Enhanced Donation Schema Migration
-- This migration adds new fields to support comprehensive donation tracking

-- Add new fields to the Donation collection
-- Note: MongoDB/Prisma migrations are handled differently, this serves as documentation

-- New fields to be added to Donation model:
-- status: 'active', 'cancelled', 'expired', 'failed'
-- paymentHistory: Array of payment events
-- webhookEvents: Array of webhook events received
-- lastPaymentDate: DateTime of last successful payment
-- nextPaymentDate: DateTime of next expected payment
-- failedPaymentAttempts: Number of consecutive failed payments
-- cancellationReason: Reason for cancellation if applicable
-- createdAt: Timestamp when donation record was created
-- updatedAt: Timestamp when donation record was last updated

-- Payment History Schema:
-- {
--   id: ObjectId,
--   amount: Number,
--   currency: String,
--   status: 'succeeded' | 'failed' | 'pending',
--   paymentDate: DateTime,
--   paymentMethodId: String,
--   failureReason: String (optional),
--   providerTransactionId: String
-- }

-- Webhook Event Schema:
-- {
--   id: ObjectId,
--   eventType: String,
--   provider: 'stripe' | 'paypal',
--   eventId: String,
--   processedAt: DateTime,
--   data: JSON (raw webhook data)
-- }

-- This will be implemented as Prisma schema updates rather than SQL
-- since we're using MongoDB with Prisma