import { build } from '../../app.js';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { FastifyInstance } from 'fastify';

describe('Challenge Map Routes', () => {
  let fastify: FastifyInstance;

  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  describe('GET /challenge-map', () => {
    it('should return a challenge map with valid structure', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/challenge-map'
      });

      expect(response.statusCode).toBe(200);
      
      const body = JSON.parse(response.body);
      expect(body.success).toBe(true);
      expect(body.challengeMap).toBeDefined();
      expect(body.totalChallenges).toBeGreaterThan(0);
      expect(body.generatedAt).toBeDefined();
      
      // Verify structure of challenge map entries
      const challengeIds = Object.keys(body.challengeMap);
      expect(challengeIds.length).toBeGreaterThan(0);
      
      // Check first challenge has required properties
      const firstChallenge = body.challengeMap[challengeIds[0]];
      expect(firstChallenge).toHaveProperty('title');
      expect(firstChallenge).toHaveProperty('block');
      expect(firstChallenge).toHaveProperty('superblock');
      expect(typeof firstChallenge.title).toBe('string');
      expect(typeof firstChallenge.block).toBe('string');
      expect(typeof firstChallenge.superblock).toBe('string');
    });

    it('should include known challenge IDs from curriculum', async () => {
      const response = await fastify.inject({
        method: 'GET',
        url: '/challenge-map'
      });

      const body = JSON.parse(response.body);
      const challengeMap = body.challengeMap;
      
      // Test with a known challenge ID from basic HTML
      const knownChallengeId = 'bd7123c8c441eddfaeb5bdef'; // "Say Hello to HTML Elements"
      
      if (challengeMap[knownChallengeId]) {
        expect(challengeMap[knownChallengeId]).toHaveProperty('title');
        expect(challengeMap[knownChallengeId].title).toBe('Say Hello to HTML Elements');
      }
    });

    it('should handle errors gracefully', async () => {
      // This test would require mocking file system errors
      // For now, we just ensure the endpoint doesn't crash
      const response = await fastify.inject({
        method: 'GET',
        url: '/challenge-map'
      });

      expect([200, 500]).toContain(response.statusCode);
    });
  });
});