import { Prisma } from '@prisma/client';
import { FastifyInstance } from 'fastify';

// TODO: this probably belongs in a separate file and may not be 100% correct.
// All it's doing is providing the properties required by the current schema.
const defaultUser = {
  about: '',
  acceptedPrivacyTerms: false,
  completedChallenges: [],
  currentChallengeId: '',
  emailVerified: false,
  externalId: '',
  is2018DataVisCert: false,
  is2018FullStackCert: false,
  isApisMicroservicesCert: false,
  isBackEndCert: false,
  isBanned: false,
  isCheater: false,
  isDataAnalysisPyCertV7: false,
  isDataVisCert: false,
  isDonating: false,
  isFrontEndCert: false,
  isFrontEndLibsCert: false,
  isFullStackCert: false,
  isHonest: false,
  isInfosecCertV7: false,
  isInfosecQaCert: false,
  isJsAlgoDataStructCert: false,
  isMachineLearningPyCertV7: false,
  isQaCertV7: false,
  isRelationalDatabaseCertV8: false,
  isRespWebDesignCert: false,
  isSciCompPyCertV7: false,
  keyboardShortcuts: false,
  location: '',
  name: '',
  unsubscribeId: '',
  picture: '',
  profileUI: {
    isLocked: false,
    showAbout: false,
    showCerts: false,
    showDonation: false,
    showHeatMap: false,
    showLocation: false,
    showName: false,
    showPoints: false,
    showPortfolio: false,
    showTimeLine: false
  },
  progressTimestamps: [],
  sendQuincyEmail: false,
  theme: 'default',
  // TODO: generate a UUID like in api-server
  username: ''
};

export class DbUtils {
  constructor(private fastify: FastifyInstance) {}

  findUserById = <T extends Prisma.userSelect>(id: string, select?: T) => {
    if (select) {
      return this.fastify.prisma.user.findUniqueOrThrow({
        where: { id },
        select
      });
    } else {
      return this.fastify.prisma.user.findUniqueOrThrow({
        where: { id }
      });
    }
  };

  findUserByEmail = <T extends Prisma.userSelect>(
    email: string,
    select?: T
  ) => {
    if (select) {
      return this.fastify.prisma.user.findFirst({
        where: { email },
        select
      });
    } else {
      return this.fastify.prisma.user.findFirst({
        where: { email }
      });
    }
  };

  findOrCreateUser = async (email: string) => {
    // TODO: handle the case where there are multiple users with the same email.
    // e.g. use findMany and throw an error if more than one is found.
    const existingUser = await this.fastify.prisma.user.findFirst({
      where: { email },
      select: { id: true }
    });
    return (
      existingUser ??
      (await this.fastify.prisma.user.create({
        data: { ...defaultUser, email },
        select: { id: true }
      }))
    );
  };

  updateUserById = async <T extends Prisma.userUpdateInput>(
    id: string,
    data: T
  ) => {
    return this.fastify.prisma.user.update({
      where: { id },
      data
    });
  };
}
