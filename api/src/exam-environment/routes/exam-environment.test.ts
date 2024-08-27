import {
  createSuperRequest,
  devLogin,
  seedEnvExam,
  setupServer
} from '../../../jest.utils';

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

    xdescribe('POST /exam-environment/exam/attempt', () => {
      it('should return an error if there are no current exam attempts matching the given id', async () => {});

      it('should return an error if the given exam id does not match an existing exam', async () => {});

      it('should return an error if the attempt has expired', async () => {});

      it('should return an error if there is no matching generated exam', async () => {});

      it('should return an error if the attempt does not match the generated exam', async () => {});

      it('should mark the attempt as needs retake if the attempt is invalid', async () => {});

      it('should return 200 if request is valid', async () => {});
    });

    describe('POST /exam-environment/generate', () => {
      it('should return an error if the given exam id is invalid', async () => {
        const res = await superPost('/exam-environment/exam/generate').send({
          body: { examId: 'invalid-id' }
        });

        expect(res).toMatchObject({
          status: 404,
          code: 'FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM'
          // NOTE: Could be tested, but might not necessarily be a part of the api compatability guarantee.
          //       That is, it could be changed without requiring a major version bump, because it is just
          //       a human-readable/debug message.
          // message: "Invalid exam id given."
        });
      });

      xit('should return an error if the exam prerequisites are not met', async () => {});

      xit('should return an error if the exam cooldown is in effect', async () => {});

      xit('should return the current attempt if it is still ongoing', async () => {});

      xit('should store a random generated exam in the database', async () => {});

      xit('should return an error if the exam generation fails', async () => {});

      xit('should store an exam attempt in the database', async () => {});

      xit('should unwind (delete) the exam attempt and generated exam if the user exam cannot be constructed', async () => {});

      xit('should return the exam with the exam attempt', async () => {});
    });

    xdescribe('POST /exam-environment/screenshot', () => {});
  });

  describe('Unauthenticated user', () => {
    xdescribe('POST /exam-environment/exam/attempt', () => {
      xit('should return 403', () => {});
    });

    xdescribe('POST /exam-environment/exam/generate', () => {
      xit('should return 403', () => {});
    });

    xdescribe('POST /exam-environment/screenshot', () => {
      xit('should return 403', () => {});
    });

    xdescribe('POST /exam-environment/token/verify', () => {
      xit('should allow a valid request', () => {});
    });
  });
});
