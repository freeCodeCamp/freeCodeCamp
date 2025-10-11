import {
  describe,
  test,
  expect,
  beforeAll,
  afterEach,
  beforeEach,
  vi
} from 'vitest';

import { Certification } from '../../../../shared/config/certification-settings.js';
import {
  defaultUserEmail,
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

describe('certificate routes', () => {
  setupServer();
  describe('Authenticated user', () => {
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
    });

    afterEach(() => {
      vi.restoreAllMocks();
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

      test('should return 400 if no certSlug', async () => {
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({});

        expect(response.body).toMatchObject({
          response: {
            message: 'flash.wrong-name',
            variables: { name: '' }
          }
        });
        expect(response.status).toBe(400);
      });

      test('should return 400 if certSlug is invalid', async () => {
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'non-existant'
        });
        expect(response.body).toMatchObject({
          response: {
            message: 'flash.wrong-name',
            variables: { name: 'non-existant' }
          }
        });
        expect(response.status).toBe(400);
      });

      // TODO: Revisit this test after deciding if we need/want to fetch the
      // entire user during authorization or just the user id.
      test.skip('should return 500 if user not found in db', async () => {
        vi.spyOn(
          fastifyTestInstance.prisma.user,
          'findUnique'
        ).mockImplementation(
          () =>
            Promise.resolve(null) as ReturnType<
              typeof fastifyTestInstance.prisma.user.findUnique
            >
        );
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: Certification.RespWebDesign
        });

        expect(response.body).toStrictEqual({
          message: 'flash.went-wrong',
          type: 'danger'
        });
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
          certSlug: Certification.RespWebDesign
        });

        expect(response.body).toMatchObject({
          response: {
            type: 'info',
            message: 'flash.name-needed'
          },
          isCertMap: {
            is2018DataVisCert: false,
            isApisMicroservicesCert: false,
            isBackEndCert: false,
            isCollegeAlgebraPyCertV8: false,
            isDataAnalysisPyCertV7: false,
            isDataVisCert: false,
            isFoundationalCSharpCertV8: false,
            isFrontEndCert: false,
            isFrontEndLibsCert: false,
            isFullStackCert: false,
            isInfosecCertV7: false,
            isInfosecQaCert: false,
            isJsAlgoDataStructCert: false,
            isMachineLearningPyCertV7: false,
            isQaCertV7: false,
            isRelationalDatabaseCertV8: false,
            isRespWebDesignCert: false,
            isSciCompPyCertV7: false
          },
          completedChallenges: []
        });
        expect(response.status).toBe(400);
      });

      test('should return 200 if user already claimed cert', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: defaultUserEmail },
          data: {
            completedChallenges: [],
            isRespWebDesignCert: true
          }
        });
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: Certification.RespWebDesign
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.response).toStrictEqual({
          type: 'info',
          message: 'flash.already-claimed',
          variables: {
            name: 'Responsive Web Design'
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
          certSlug: Certification.RespWebDesign
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(response.body.response).toStrictEqual({
          message: 'flash.incomplete-steps',
          type: 'info',
          variables: { name: 'Responsive Web Design' }
        });
        expect(response.status).toBe(400);
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
            isJsAlgoDataStructCertV8: true,
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

        const spy = vi.spyOn(fastifyTestInstance, 'sendEmail');

        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: Certification.RespWebDesign
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
          certSlug: Certification.RespWebDesign
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: defaultUserEmail }
        });

        expect(user).toMatchObject({ isRespWebDesignCert: true });
        expect(response.body).toStrictEqual({
          response: {
            message: 'flash.cert-claim-success',
            type: 'success',
            variables: {
              name: 'Responsive Web Design',
              username: 'fcc'
            }
          },
          isCertMap: {
            isRespWebDesignCert: true,
            isRespWebDesignCertV9: false,
            isJavascriptCertV9: false,
            isJsAlgoDataStructCert: false,
            isFrontEndLibsCert: false,
            is2018DataVisCert: false,
            isApisMicroservicesCert: false,
            isInfosecQaCert: false,
            isQaCertV7: false,
            isInfosecCertV7: false,
            isFrontEndCert: false,
            isBackEndCert: false,
            isDataVisCert: false,
            isFullStackCert: false,
            isSciCompPyCertV7: false,
            isDataAnalysisPyCertV7: false,
            isMachineLearningPyCertV7: false,
            isRelationalDatabaseCertV8: false,
            isCollegeAlgebraPyCertV8: false,
            isFoundationalCSharpCertV8: false
          },
          completedChallenges: [
            {
              completedDate: 123456789,
              files: [],
              id: 'bd7158d8c442eddfaeb5bd18'
            },
            {
              completedDate: 123456789,
              files: [],
              id: '587d78af367417b2b2512b03'
            },
            {
              completedDate: 123456789,
              files: [],
              id: '587d78af367417b2b2512b04'
            },
            {
              completedDate: 123456789,
              files: [],
              id: '587d78b0367417b2b2512b05'
            },
            {
              completedDate: 123456789,
              files: [],
              id: 'bd7158d8c242eddfaeb5bd13'
            },
            {
              challengeType: 7,
              // TODO: use matcher for date near now
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              completedDate: expect.any(Number),
              files: [],
              id: '561add10cb82ac38a17513bc'
            }
          ]
        });
        expect(response.status).toBe(200);
      });

      // Tests for all certifications as to what may currently be claimed, and what may no longer be claimed
      test('should return 400 if certSlug is not allowed', async () => {
        const claimableCerts = [
          Certification.RespWebDesign,
          // TODO: Enable, once these are no longer "upcoming".
          // Certification.RespWebDesignV9,
          // Certification.JsV9,
          Certification.JsAlgoDataStruct,
          Certification.FrontEndDevLibs,
          Certification.DataVis,
          Certification.RelationalDb,
          Certification.BackEndDevApis,
          Certification.QualityAssurance,
          Certification.SciCompPy,
          Certification.DataAnalysisPy,
          Certification.InfoSec,
          Certification.MachineLearningPy,
          Certification.CollegeAlgebraPy,
          Certification.FoundationalCSharp,
          Certification.LegacyFrontEnd,
          Certification.LegacyBackEnd,
          Certification.LegacyDataVis,
          Certification.LegacyInfoSecQa,
          Certification.LegacyFullStack
        ];
        const unclaimableCerts = ['fake-slug'];

        for (const certSlug of claimableCerts) {
          const response = await superRequest('/certificate/verify', {
            method: 'PUT',
            setCookies
          }).send({
            certSlug
          });

          // `flash.incomplete-steps` comes after the check for whether a certification may be claimed or not.
          expect(response.body).toMatchObject({
            response: { message: 'flash.incomplete-steps' }
          });
          expect(response.status).toBe(400);
        }

        for (const certSlug of unclaimableCerts) {
          const response = await superRequest('/certificate/verify', {
            method: 'PUT',
            setCookies
          }).send({
            certSlug
          });

          expect(response.body).toMatchObject({
            response: {
              variables: { name: certSlug },
              message: 'flash.wrong-name'
            }
          });
          expect(response.status).toBe(400);
        }
      });

      // This has to be the last test since vi.mockRestore replaces the original
      // function with undefined when restoring a prisma function (for some
      // reason)
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

        vi.spyOn(fastifyTestInstance.prisma.user, 'update').mockImplementation(
          () => {
            throw new Error('test');
          }
        );

        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: Certification.RespWebDesign
        });

        expect(response.body).toStrictEqual({
          message: 'flash.generic-error',
          type: 'danger'
        });
        expect(response.status).toBe(500);
      });
    });
  });
});
