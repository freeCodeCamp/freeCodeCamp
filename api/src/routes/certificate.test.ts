import {
  defaultUserEmail,
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../jest.utils';

describe('certificate routes', () => {
  setupServer();
  describe('Authenticated user', () => {
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
    });

    describe('PUT /certificate/verify', () => {
      beforeEach(async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            completedChallenges: [],
            name: 'fcc',
            isRespWebDesignCert: false,
            isJsAlgoDataStructCert: false,
            isFrontEndLibsCert: false,
            is2018DataVisCert: false,
            isRelationalDatabaseCertV8: false,
            isApisMicroservicesCert: false,
            isQaCertV7: false,
            isSciCompPyCertV7: false,
            isDataAnalysisPyCertV7: false,
            isInfosecCertV7: false,
            isMachineLearningPyCertV7: false,
            isCollegeAlgebraPyCertV8: false,
            isFoundationalCSharpCertV8: false,
            username: 'fcc'
          }
        });
      });

      test('should return 500 if no certSlug', async () => {
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({ certSlug: undefined });
        expect(JSON.parse(response.text)).toMatchObject({
          code: 'FST_ERR_FAILED_ERROR_SERIALIZATION'
        });
        expect(response.status).toBe(500);
      });

      test('should return 400 if certSlug is invalid', async () => {
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'non-existant'
        });
        expect(response.status).toBe(400);
      });

      test('should return 500 if user not found in db', async () => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const temp = fastifyTestInstance.prisma.user.findUnique;
        // @ts-expect-error `null` is assignable to `null`, but don't tell TS that 🤫
        fastifyTestInstance.prisma.user.findUnique = () => null;
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        fastifyTestInstance.prisma.user.findUnique = temp;

        expect(response.status).toBe(500);
      });

      test('should return 400 if user has not set a `name`', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            name: null
          }
        });

        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        expect(response.status).toBe(400);
      });

      test('should return 200 if user already claimed cert', async () => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const temp = fastifyTestInstance.prisma.user.findUnique;
        // @ts-expect-error `null` is assignable to `null`, but don't tell TS that 🤫
        fastifyTestInstance.prisma.user.findUnique = () => ({
          name: 'fcc',
          isRespWebDesignCert: true,
          completedChallenges: []
        });
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        fastifyTestInstance.prisma.user.findUnique = temp;

        expect(JSON.parse(response.text)).toMatchObject({
          response: {
            type: 'info',
            message: 'flash.already-claimed',
            variables: {
              name: 'Responsive Web Design'
            }
          }
        });

        expect(response.status).toBe(200);
      });

      test('should return 400 if not all requirements have been met to claim', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            completedChallenges: [
              { id: '587d78af367417b2b2512b03', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b04', completedDate: 123456789 },
              { id: '587d78b0367417b2b2512b05', completedDate: 123456789 },
              { id: 'bd7158d8c242eddfaeb5bd13', completedDate: 123456789 }
            ],
            isRespWebDesignCert: false
          }
        });
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        expect(response.text).toContain('flash.incomplete-steps');
        expect(response.status).toBe(400);
      });

      test('should return 500 if db update fails', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            completedChallenges: [
              { id: 'bd7158d8c442eddfaeb5bd18', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b03', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b04', completedDate: 123456789 },
              { id: '587d78b0367417b2b2512b05', completedDate: 123456789 },
              { id: 'bd7158d8c242eddfaeb5bd13', completedDate: 123456789 }
            ]
          }
        });
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const temp = fastifyTestInstance.prisma.user.update;
        fastifyTestInstance.prisma.user.update = () => {
          throw new Error('test');
        };
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        fastifyTestInstance.prisma.user.update = temp;

        expect(response.text).toContain('flash.went-wrong');
        expect(response.status).toBe(500);
      });

      // Note: Email does not actually send (work) in development, but status should still be 200.
      test('should send the certified email, if all current certifications are met', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            completedChallenges: [
              { id: 'bd7158d8c442eddfaeb5bd18', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b03', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b04', completedDate: 123456789 },
              { id: '587d78b0367417b2b2512b05', completedDate: 123456789 },
              { id: 'bd7158d8c242eddfaeb5bd13', completedDate: 123456789 }
            ],
            isRespWebDesignCert: false,
            isJsAlgoDataStructCert: true,
            isFrontEndLibsCert: true,
            is2018DataVisCert: true,
            isRelationalDatabaseCertV8: true,
            isApisMicroservicesCert: true,
            isQaCertV7: true,
            isSciCompPyCertV7: true,
            isDataAnalysisPyCertV7: true,
            isInfosecCertV7: true,
            isMachineLearningPyCertV7: true,
            isCollegeAlgebraPyCertV8: true,
            isFoundationalCSharpCertV8: true
          }
        });

        const spy = jest.spyOn(fastifyTestInstance, 'sendEmail');

        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        expect(spy).toHaveBeenCalled();
        expect(response.status).toBe(200);
      });

      test('should return 200 if all went well', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            completedChallenges: [
              { id: 'bd7158d8c442eddfaeb5bd18', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b03', completedDate: 123456789 },
              { id: '587d78af367417b2b2512b04', completedDate: 123456789 },
              { id: '587d78b0367417b2b2512b05', completedDate: 123456789 },
              { id: 'bd7158d8c242eddfaeb5bd13', completedDate: 123456789 }
            ],
            isRespWebDesignCert: false
          }
        });

        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: defaultUserEmail }
        });

        expect(user).toMatchObject({ isRespWebDesignCert: true });
        expect(response.text).toContain('flash.cert-claim-success');
        expect(response.status).toBe(200);
      });
    });
  });
});
