import { createSuperRequest, devLogin, setupServer } from '../../../jest.utils';
import { findOrCreateUser } from '../helpers/auth-helpers';

describe('GET /classroom/:id', () => {
  let loggerInfoSpy: jest.SpyInstance;
  let superGet: ReturnType<typeof createSuperRequest>;
  setupServer();

  let classroomId: string;
  let studentId1: string;
  let studentId2: string;
  // This user is in the database but not in the classroom and is included only
  // to confirm that the classroom is limited to a specific set of users.
  let nonStudentId: string;

  beforeAll(async () => {
    const setCookies = await devLogin();
    superGet = createSuperRequest({ method: 'GET', setCookies });
  });

  beforeEach(async () => {
    loggerInfoSpy = jest.spyOn(fastifyTestInstance.log, 'info');
    studentId1 = (await findOrCreateUser(fastifyTestInstance, '1')).id;
    studentId2 = (await findOrCreateUser(fastifyTestInstance, '2')).id;
    nonStudentId = (await findOrCreateUser(fastifyTestInstance, '3')).id;

    classroomId = (
      await fastifyTestInstance.prisma.classroom.create({
        data: {
          students: { connect: [{ id: studentId1 }, { id: studentId2 }] }
        }
      })
    ).id;
  });

  afterEach(async () => {
    await fastifyTestInstance.prisma.classroom.deleteMany({
      where: {
        id: classroomId
      }
    });
    await fastifyTestInstance.prisma.user.deleteMany({
      where: {
        id: { in: [studentId1, studentId2, nonStudentId] }
      }
    });

    jest.clearAllMocks();
  });

  test('rejects the request if the id is invalid', async () => {
    const response = await superGet(`/classroom/invalid-id`);

    expect(response.body).toStrictEqual({
      message: 'flash.invalid-classroom-id',
      type: 'info'
    });
    expect(response.status).toBe(400);
  });

  test('returns a list of students in the classroom (if it exists)', async () => {
    const response = await superGet(`/classroom/${classroomId}`);

    expect(response.body).toStrictEqual({
      id: classroomId,
      students: [{ id: studentId1 }, { id: studentId2 }]
    });
    expect(response.status).toBe(200);
  });

  test('returns a null id if the classroom does not exist', async () => {
    const response = await superGet(`/classroom/bd7123c8c441eddfaeb5bdef`);

    expect(response.body).toStrictEqual({
      id: null,
      students: []
    });
    expect(response.status).toBe(200);
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      'Classroom bd7123c8c441eddfaeb5bdef not found'
    );
  });
});
