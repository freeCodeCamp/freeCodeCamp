import {
  defaultUserEmail,
  defaultUserId,
  resetDefaultUser,
  setupServer,
  superRequest
} from '../../../jest.utils';
import { getFallbackFullStackDate } from '../helpers/certificate-utils';

describe('certificate routes', () => {
  setupServer();

  describe('Unauthenticated user', () => {
    beforeAll(async () => resetDefaultUser());

    describe('GET /certificate/showCert/:username/:certSlug', () => {
      beforeEach(async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            username: 'foobar',
            name: 'foobar',
            isHonest: true,
            isBanned: false,
            isCheater: false,
            profileUI: { isLocked: false, showCerts: true, showTimeLine: true }
          }
        });
      });
      test('should return user not found if the user cannot be found', async () => {
        const response = await superRequest(
          '/certificate/showCert/not-a-valid-user-name/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.username-not-found',
              variables: { username: 'not-a-valid-user-name' }
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should ask user to add name if there is no name', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { name: null }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.add-name'
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should return not eligible if user is banned', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { isBanned: true }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.not-eligible'
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should return not eligible if user is cheater', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { isCheater: true }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.not-eligible'
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should return not honest if user is not honest', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { isHonest: false }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.not-honest',
              variables: { username: 'foobar' }
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should return profile private if profile is private', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            // All properties need to be defined, as this op SETs `profileUI`
            profileUI: { isLocked: true, showTimeLine: true, showCerts: true }
          }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.profile-private',
              variables: { username: 'foobar' }
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should return certs private if certs are private', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            profileUI: { showCerts: false, showTimeLine: true, isLocked: false }
          }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.certs-private',
              variables: { username: 'foobar' }
            }
          ]
        });
        expect(response.status).toBe(200);
      });
      test('should return timeline private if timeline is private', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            profileUI: { showTimeLine: false, showCerts: true, isLocked: false }
          }
        });
        const response = await superRequest(
          '/certificate/showCert/foobar/javascript-algorithms-and-data-structures',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.timeline-private',
              variables: { username: 'foobar' }
            }
          ]
        });
        expect(response.status).toBe(200);
      });

      test('should return cert-not-found if there is no cert with that slug', async () => {
        const response = await superRequest(
          '/certificate/showCert/foobar/not-a-valid-cert-slug',
          {
            method: 'GET'
          }
        );
        expect(response.body).toEqual({
          messages: [
            {
              type: 'info',
              message: 'flash.cert-not-found',
              variables: { certSlug: 'not-a-valid-cert-slug' }
            }
          ]
        });
        expect(response.status).toBe(404);
      });
    });
  });
});

const fullStackChallenges = [
  {
    completedDate: 1585210952511,
    id: '5a553ca864b52e1d8bceea14'
  },
  {
    completedDate: 1585210952511,
    id: '561add10cb82ac38a17513bc'
  },
  {
    completedDate: 1588665778679,
    id: '561acd10cb82ac38a17513bc'
  },
  {
    completedDate: 1685210952511,
    id: '561abd10cb81ac38a17513bc'
  },
  {
    completedDate: 1585210952511,
    id: '561add10cb82ac38a17523bc'
  },
  {
    completedDate: 1588665778679,
    id: '561add10cb82ac38a17213bc'
  }
];

describe('helper functions', () => {
  describe('getFallbackFullStackDate', () => {
    it('should return the date of the latest completed challenge', () => {
      expect(getFallbackFullStackDate(fullStackChallenges, 123)).toBe(
        1685210952511
      );
    });

    it('should fall back to completedDate if no certifications are provided', () => {
      expect(getFallbackFullStackDate([], 123)).toBe(123);
    });

    it('should fall back to completedDate if none of the certifications have been completed', () => {
      expect(
        getFallbackFullStackDate([{ completedDate: 567, id: 'abc' }], 123)
      ).toBe(123);
    });
  });
});
