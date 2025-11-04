import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../schemas/index.js';
import {
  getNowUsCentral,
  getUtcMidnight,
  dateStringToUtcMidnight
} from '../utils/helpers.js';

/**
 * Plugin containing public GET routes for the daily coding challenges.
 * Note that they are only for getting challenge info, challenges are still
 * submitted via the main challenge completion routes.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const dailyCodingChallengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/daily-coding-challenge/date/:date',
    {
      schema: schemas.dailyCodingChallenge.date
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(
        { date: req.params.date },
        'Received request for daily coding challenge'
      );

      const { date } = req.params;

      try {
        const parsedDate = dateStringToUtcMidnight(date);

        if (!parsedDate) {
          logger.warn({ date }, 'Invalid date format requested');
          return reply.status(400).send({
            type: 'error',
            message: 'Invalid date format. Please use YYYY-MM-DD.'
          });
        }

        const challenge = await fastify.prisma.dailyCodingChallenges.findFirst({
          where: {
            date: parsedDate
          }
        });

        // don't return challenges > today US Central
        if (!challenge || challenge.date > getUtcMidnight(getNowUsCentral())) {
          logger.warn({ date: parsedDate }, 'Challenge not found for date');
          return reply
            .status(404)
            .send({ type: 'error', message: 'Challenge not found.' });
        }

        return reply.send({
          ...challenge,
          date: challenge.date.toISOString()
        });
      } catch (error) {
        logger.error(error, 'Failed to get daily coding challenge.');
        await reply
          .status(500)
          .send({ type: 'error', message: 'Internal server error.' });
      }
    }
  );

  fastify.get(
    '/daily-coding-challenge/today',
    {
      schema: schemas.dailyCodingChallenge.today
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info("Received request for today's daily coding challenge");

      const today = getUtcMidnight(getNowUsCentral());

      try {
        const todaysChallenge =
          await fastify.prisma.dailyCodingChallenges.findFirst({
            where: {
              date: today
            }
          });

        if (!todaysChallenge) {
          logger.warn({ date: today }, 'Challenge not found for today');
          return reply
            .status(404)
            .send({ type: 'error', message: 'Challenge not found.' });
        }

        return reply.send({
          ...todaysChallenge,
          date: todaysChallenge.date.toISOString()
        });
      } catch (error) {
        logger.error(error, "Failed to get today's daily coding challenge.");
        await reply
          .status(500)
          .send({ type: 'error', message: 'Internal server error.' });
      }
    }
  );

  fastify.get(
    '/daily-coding-challenge/month/:month',
    {
      schema: schemas.dailyCodingChallenge.month
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(
        { month: req.params.month },
        'Received request for month of daily coding challenges'
      );

      const { month } = req.params;

      try {
        // Month is guaranteed YYYY-MM format from schema validation
        const parts = month.split('-');
        const parsedYear = parseInt(parts[0]!, 10);
        const parsedMonth = parseInt(parts[1]!, 10);

        // Validate month range
        if (parsedMonth < 1 || parsedMonth > 12) {
          logger.warn({ month }, 'Invalid month value requested');
          return reply.status(400).send({
            type: 'error',
            message: 'Invalid date format. Please use YYYY-MM.'
          });
        }

        const monthStart = new Date(Date.UTC(parsedYear, parsedMonth - 1, 1));
        const monthEnd = new Date(Date.UTC(parsedYear, parsedMonth, 1));
        const todayUsCentral = getUtcMidnight(getNowUsCentral());

        const challenges = await fastify.prisma.dailyCodingChallenges.findMany({
          where: {
            date: {
              gte: monthStart,
              lt: monthEnd,
              lte: todayUsCentral
            }
          },
          orderBy: {
            date: 'desc'
          },
          select: {
            id: true,
            challengeNumber: true,
            date: true,
            title: true
          }
        });

        if (!challenges || challenges.length === 0) {
          logger.warn({ month }, 'No challenges found for month');
          return reply
            .status(404)
            .send({ type: 'error', message: 'No challenges found.' });
        }

        const response = challenges.map(challenge => ({
          ...challenge,
          date: challenge.date.toISOString()
        }));

        return reply.send(response);
      } catch (error) {
        logger.error(error, 'Failed to get monthly daily coding challenges.');
        await reply
          .status(500)
          .send({ type: 'error', message: 'Internal server error.' });
      }
    }
  );

  fastify.get(
    '/daily-coding-challenge/all',
    {
      schema: schemas.dailyCodingChallenge.all
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info('Received request for all daily coding challenges');

      const today = getUtcMidnight(getNowUsCentral());

      try {
        const allChallenges =
          await fastify.prisma.dailyCodingChallenges.findMany({
            // only where date <= today US Central
            where: {
              date: {
                lte: today
              }
            },
            orderBy: {
              date: 'desc'
            },
            select: {
              id: true,
              challengeNumber: true,
              date: true,
              title: true
            }
          });

        if (!allChallenges || allChallenges.length === 0) {
          logger.warn({ date: today }, 'No challenges found.');
          return reply
            .status(404)
            .send({ type: 'error', message: 'No challenges found.' });
        }

        const response = allChallenges.map(challenge => ({
          ...challenge,
          date: challenge.date.toISOString()
        }));

        return reply.send(response);
      } catch (error) {
        logger.error(error, 'Failed to get all daily coding challenges.');
        await reply
          .status(500)
          .send({ type: 'error', message: 'Internal server error.' });
      }
    }
  );

  fastify.get(
    '/daily-coding-challenge/newest',
    {
      schema: schemas.dailyCodingChallenge.newest
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info('Received request for newest daily coding challenge');

      try {
        const newestChallenge =
          await fastify.prisma.dailyCodingChallenges.findFirst({
            orderBy: {
              date: 'desc'
            },
            select: {
              date: true
            }
          });

        if (!newestChallenge) {
          logger.warn('No challenges found.');
          return reply
            .status(404)
            .send({ type: 'error', message: 'No challenges found.' });
        }

        return reply.send({ date: newestChallenge.date.toISOString() });
      } catch (error) {
        logger.error(error, 'Failed to get newest daily coding challenge.');
        await reply
          .status(500)
          .send({ type: 'error', message: 'Internal server error.' });
      }
    }
  );

  done();
};
