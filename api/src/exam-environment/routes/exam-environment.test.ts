import { Static } from '@fastify/type-provider-typebox';
import { ObjectId } from 'mongodb';
import {
  createSuperRequest,
  defaultUserId,
  devLogin,
  setupServer
} from '../../../jest.utils';
import {
  examEnvironmentPostExamAttempt,
  examEnvironmentPostExamGenerate
} from '../schemas';
import {
  exam,
  examAttempt,
  examId,
  seedEnvExam,
  generatedExam
} from '../../../__mocks__/env-exam';
import { constructUserExam } from '../utils/exam';

describe('/exam-environment/', () => {
  setupServer();
  describe('Authenticated user', () => {
    let setCookies: string[];
    let superPost: ReturnType<typeof createSuperRequest>;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let examEnvironmentAuthorizationToken: string;

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
      await seedEnvExam();
      // Add exam environment authorization token
      const res = await superPost('/user/exam-environment/token');
      expect(res.status).toBe(200);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      examEnvironmentAuthorizationToken =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.body.data.examEnvironmentAuthorizationToken;
    });

    describe('POST /exam-environment/exam/attempt', () => {
      afterEach(async () => {
        await fastifyTestInstance.prisma.envExamAttempt.deleteMany();
        await fastifyTestInstance.prisma.envGeneratedExam.deleteMany();
      });

      it('should return an error if there are no current exam attempts matching the given id', async () => {
        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt: {
            examId: new ObjectId().toString(),
            questionSets: []
          }
        };
        const res = await superPost('/exam-environment/exam/attempt')
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          )
          .send(body);

        expect(res).toMatchObject({
          status: 404,
          body: {
            code: 'FCC_ERR_EXAM_ENVIRONMENT_EXAM_ATTEMPT'
            // NOTE: Could be tested, but might not necessarily be a part of the api compatability guarantee.
            //       That is, it could be changed without requiring a major version bump, because it is just
            //       a human-readable/debug message.
            // message: "Invalid exam id given."
          }
        });
      });

      it('should return an error if the given exam id does not match an existing exam', async () => {
        const examId = new ObjectId().toString();
        // Create exam attempt with bad exam id
        await fastifyTestInstance.prisma.envExamAttempt.create({
          data: {
            examId,
            generatedExamId: new ObjectId().toString(),
            needsRetake: false,
            startTimeInMS: Date.now(),
            userId: defaultUserId
          }
        });
        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt: {
            examId,
            questionSets: []
          }
        };
        const res = await superPost('/exam-environment/exam/attempt')
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          )
          .send(body);

        expect(res).toMatchObject({
          status: 404,
          body: {
            code: 'FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM'
          }
        });
      });

      it('should return an error if the attempt has expired', async () => {
        // Create exam attempt with expired time
        await fastifyTestInstance.prisma.envExamAttempt.create({
          data: {
            examId,
            generatedExamId: new ObjectId().toString(),
            needsRetake: false,
            startTimeInMS: Date.now() - (1000 * 60 * 60 * 2 + 1000),
            userId: defaultUserId
          }
        });
        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt: {
            examId,
            questionSets: []
          }
        };
        const res = await superPost('/exam-environment/exam/attempt')
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          )
          .send(body);

        expect(res).toMatchObject({
          status: 403,
          body: {
            code: 'FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT'
          }
        });
      });

      it('should return an error if there is no matching generated exam', async () => {
        // Create exam attempt with no matching generated exam
        await fastifyTestInstance.prisma.envExamAttempt.create({
          data: {
            examId,
            generatedExamId: new ObjectId().toString(),
            needsRetake: false,
            startTimeInMS: Date.now(),
            userId: defaultUserId
          }
        });
        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt: {
            examId,
            questionSets: []
          }
        };
        const res = await superPost('/exam-environment/exam/attempt')
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          )
          .send(body);

        expect(res).toMatchObject({
          status: 404,
          body: {
            code: 'FCC_ENOENT_EXAM_ENVIRONMENT_GENERATED_EXAM'
          }
        });
      });

      it('should return an error if the attempt does not match the generated exam', async () => {
        const attempt = await fastifyTestInstance.prisma.envExamAttempt.create({
          data: { ...examAttempt, userId: defaultUserId }
        });
        await fastifyTestInstance.prisma.envGeneratedExam.create({
          data: generatedExam
        });

        // @ts-expect-error Exam is defined
        attempt.questionSets[0].id = new ObjectId().toString();

        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt
        };

        const res = await superPost('/exam-environment/exam/attempt')
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          )
          .send(body);

        expect(res).toMatchObject({
          status: 400,
          body: {
            code: 'FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT'
          }
        });

        // Database should mark attempt as `needsRetake`
        const updatedAttempt =
          await fastifyTestInstance.prisma.envExamAttempt.findUnique({
            where: { id: attempt.id }
          });
        expect(updatedAttempt).toMatchObject({
          needsRetake: true
        });
      });

      it('should return 200 if request is valid, and update attempt in database', async () => {
        const attempt = await fastifyTestInstance.prisma.envExamAttempt.create({
          data: {
            userId: defaultUserId,
            examId,
            generatedExamId: generatedExam.id,
            startTimeInMS: Date.now(),
            questionSets: [],
            needsRetake: false
          }
        });
        await fastifyTestInstance.prisma.envGeneratedExam.create({
          data: generatedExam
        });

        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt
        };

        const res = await superPost('/exam-environment/exam/attempt')
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          )
          .send(body);

        expect(res.status).toBe(200);

        // Database should update attempt
        const updatedAttempt =
          await fastifyTestInstance.prisma.envExamAttempt.findUnique({
            where: { id: attempt.id }
          });

        expect(updatedAttempt).toMatchObject(attempt);
      });
    });

    describe('POST /exam-environment/generate', () => {
      afterEach(async () => {
        await fastifyTestInstance.prisma.envExamAttempt.deleteMany();
        await fastifyTestInstance.prisma.envGeneratedExam.deleteMany();
        await seedEnvExam();
      });

      it('should return an error if the given exam id is invalid', async () => {
        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId: new ObjectId().toString()
        };
        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        expect(res).toMatchObject({
          status: 404,
          body: {
            code: 'FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM'
          }
        });
      });

      xit('should return an error if the exam prerequisites are not met', async () => {
        // TODO: Waiting on prerequisites
      });

      it('should return an error if the exam cooldown is in effect', async () => {
        const recentExamAttempt = {
          ...examAttempt,
          startTimeInMS: Date.now() - exam.config.totalTimeInMS
        };
        const _latestAttempt =
          await fastifyTestInstance.prisma.envExamAttempt.create({
            data: recentExamAttempt
          });

        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId
        };

        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        // console.log(res);

        expect(res).toMatchObject({
          status: 403,
          body: {
            code: 'FCC_EINVAL_EXAM_ENVIRONMENT_PREREQUISITES'
          }
        });
      });

      it('should return the current attempt if it is still ongoing', async () => {
        const latestAttempt =
          await fastifyTestInstance.prisma.envExamAttempt.create({
            data: examAttempt
          });
        await fastifyTestInstance.prisma.envGeneratedExam.create({
          data: generatedExam
        });

        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId
        };

        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        expect(res).toMatchObject({
          status: 200,
          body: {
            data: {
              examAttempt: latestAttempt
            }
          }
        });
      });

      it('should store a random generated exam in the database', async () => {
        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId
        };
        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        expect(res.status).toBe(200);

        const generatedExam =
          await fastifyTestInstance.prisma.envGeneratedExam.findFirst({
            where: { examId }
          });

        expect(generatedExam).toBeDefined();
      });

      it('should return an error if the exam generation fails', async () => {
        await fastifyTestInstance.prisma.envExam.deleteMany();
        // Create an exam that cannot be generated
        await fastifyTestInstance.prisma.envExam.create({
          data: {
            ...exam,
            config: {
              ...exam.config,
              tags: [{ group: ['invalid'], numberOfQuestions: 1 }]
            }
          }
        });

        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId
        };
        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        expect(res).toMatchObject({
          status: 500,
          body: {
            code: 'FCC_ERR_EXAM_ENVIRONMENT'
          }
        });
      });

      it('should store an empty exam attempt in the database', async () => {
        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId
        };
        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        expect(res.status).toBe(200);

        const generatedExam =
          await fastifyTestInstance.prisma.envGeneratedExam.findFirst({
            where: { examId }
          });

        expect(generatedExam).toBeDefined();

        const examAttempt =
          await fastifyTestInstance.prisma.envExamAttempt.findFirst({
            where: { generatedExamId: generatedExam!.id }
          });

        expect(examAttempt).toEqual({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          id: expect.any(String),
          userId: defaultUserId,
          examId,
          generatedExamId: generatedExam!.id,
          questionSets: [],
          needsRetake: false,
          submissionTimeInMS: null,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          startTimeInMS: expect.any(Number)
        });
      });

      xit('should unwind (delete) the exam attempt and generated exam if the user exam cannot be constructed', async () => {
        // TODO: Not sure how to test this as it involves stopping half way through a valid request
      });

      it('should return the use exam with the exam attempt', async () => {
        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId
        };
        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set(
            'exam-environment-authorization-token',
            examEnvironmentAuthorizationToken
          );

        expect(res.status).toBe(200);

        const generatedExam =
          await fastifyTestInstance.prisma.envGeneratedExam.findFirst({
            where: { examId }
          });

        expect(generatedExam).toBeDefined();

        const examAttempt =
          await fastifyTestInstance.prisma.envExamAttempt.findFirst({
            where: { generatedExamId: generatedExam!.id }
          });

        const userExam = constructUserExam(generatedExam!, exam);

        expect(res).toMatchObject({
          status: 200,
          body: {
            data: {
              examAttempt,
              exam: userExam
            }
          }
        });
      });
    });

    xdescribe('POST /exam-environment/screenshot', () => {});
  });

  describe('Unauthenticated user', () => {
    let setCookies: string[];
    let superPost: ReturnType<typeof createSuperRequest>;

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
      await seedEnvExam();
    });
    describe('POST /exam-environment/exam/attempt', () => {
      it('should return 403', async () => {
        const body: Static<typeof examEnvironmentPostExamAttempt.body> = {
          attempt: {
            examId: new ObjectId().toString(),
            questionSets: []
          }
        };
        const res = await superPost('/exam-environment/exam/attempt')
          .send(body)
          .set('exam-environment-authorization-token', 'invalid-token');

        expect(res.status).toBe(403);
      });
    });

    describe('POST /exam-environment/exam/generate', () => {
      it('should return 403', async () => {
        const body: Static<typeof examEnvironmentPostExamGenerate.body> = {
          examId: new ObjectId().toString()
        };
        const res = await superPost('/exam-environment/exam/generate')
          .send(body)
          .set('exam-environment-authorization-token', 'invalid-token');

        expect(res.status).toBe(403);
      });
    });

    describe('POST /exam-environment/screenshot', () => {
      it('should return 403', async () => {
        const res = await superPost('/exam-environment/screenshot').set(
          'exam-environment-authorization-token',
          'invalid-token'
        );

        expect(res.status).toBe(403);
      });
    });

    describe('POST /exam-environment/token/verify', () => {
      it('should allow a valid request', async () => {
        const res = await superPost('/exam-environment/token/verify').set(
          'exam-environment-authorization-token',
          'invalid-token'
        );

        expect(res).toMatchObject({
          status: 200,
          body: {
            code: 'FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN'
          }
        });
      });
    });
  });
});
