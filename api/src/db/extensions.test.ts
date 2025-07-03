import { defaultUserEmail, setupServer } from '../../jest.utils';
import { createUserInput } from '../utils/create-user';

describe('prisma client extensions', () => {
  setupServer();

  beforeEach(async () => {
    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });
  });

  afterAll(async () => {
    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });
  });

  describe('updateCount', () => {
    it('should default to 0', async () => {
      const user = await fastifyTestInstance.prisma.user.create({
        data: createUserInput(defaultUserEmail)
      });

      expect(user).toMatchObject({
        updateCount: 0
      });
    });

    it('should increment by one for updates and creates', async () => {
      const user = await fastifyTestInstance.prisma.user.create({
        data: createUserInput(defaultUserEmail)
      });

      const updateUser = await fastifyTestInstance.prisma.user.update({
        where: { id: user.id },
        data: { username: 'any-change' }
      });

      expect(updateUser).toMatchObject({
        username: 'any-change',
        updateCount: 1
      });

      await fastifyTestInstance.prisma.user.updateMany({
        where: { id: user.id },
        // Even no change to values updates the updateCount
        data: { username: 'any-change' }
      });

      const updateManyUser = await fastifyTestInstance.prisma.user.findUnique({
        where: { id: user.id }
      });

      expect(updateManyUser).toMatchObject({
        username: 'any-change',
        updateCount: 2
      });

      const upsertUser = await fastifyTestInstance.prisma.user.upsert({
        where: { id: user.id },
        create: createUserInput(defaultUserEmail),
        update: { username: 'upser-user' }
      });

      expect(upsertUser).toMatchObject({
        username: 'upser-user',
        updateCount: 3
      });
    });

    it("should not increment for 'find' queries", async () => {
      const user = await fastifyTestInstance.prisma.user.create({
        data: createUserInput(defaultUserEmail)
      });

      const findUniqueUser = await fastifyTestInstance.prisma.user.findUnique({
        where: { id: user.id }
      });

      expect(findUniqueUser).toMatchObject({
        updateCount: 0
      });

      const findManyUsers = await fastifyTestInstance.prisma.user.findMany();

      expect(findManyUsers).toHaveLength(1);
      expect(findManyUsers[0]).toMatchObject({
        updateCount: 0
      });

      const findFirstUser = await fastifyTestInstance.prisma.user.findFirst();

      expect(findFirstUser).toMatchObject({
        updateCount: 0
      });

      const findRawUser = await fastifyTestInstance.prisma.user.findRaw({
        filter: { email: defaultUserEmail }
      });

      expect(findRawUser[0]).toMatchObject({
        updateCount: 0
      });
    });
  });
});
