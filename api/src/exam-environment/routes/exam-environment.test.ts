import { examId } from '../../../__mocks__/env-exam';
import {
  createSuperRequest,
  devLogin,
  seedNewExam,
  setupServer
} from '../../../jest.utils';

describe('/exam-environment', () => {
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
      await seedNewExam();
      // Add exam environment authorization token
      const res = await superPost('/user/exam-environment/token');
      expect(res.status).toBe(200);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      examEnvironmentAuthorizationToken =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        res.body.data.examEnvironmentAuthorizationToken;
    });

    it('POST /exam/generate', async () => {
      const res = await superPost('/user/exam-environment/exam/generate').send({
        body: { examId }
      });
      expect(res.status).toBe(200);
    });
  });
});
