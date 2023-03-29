import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyRequest
} from 'fastify';

import { AUTH0_DOMAIN } from '../utils/env';

declare module 'fastify' {
  interface Session {
    user: {
      id: string;
    };
  }
}

// TODO: this probably belongs in a separate file and may not be 100% correct.
// All it's doing is providing the properties required by the current schema.
const defaultUser = {
  about: '',
  acceptedPrivacyTerms: false,
  badges: {},
  completedChallenges: [],
  currentChallengeId: '',
  emailVerified: false,
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
  // TODO: check what this is used for in api-server and if we need it
  rand: 0,
  sendQuincyEmail: false,
  theme: 'default',
  // TODO: generate a UUID like in api-server
  username: ''
};

const getEmailFromAuth0 = async (req: FastifyRequest) => {
  const auth0Res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: req.headers.authorization ?? ''
    }
  });

  if (!auth0Res.ok) {
    req.log.error(auth0Res);
    throw new Error('Invalid Auth0 Access Token');
  }

  const { email } = (await auth0Res.json()) as { email: string };
  return email;
};

const findOrCreateUser = async (fastify: FastifyInstance, email: string) => {
  // TODO: handle the case where there are multiple users with the same email.
  // e.g. use findMany and throw an error if more than one is found.
  const existingUser = await fastify.prisma.user.findFirst({
    where: { email },
    select: { id: true }
  });
  return (
    existingUser ??
    (await fastify.prisma.user.create({
      data: { ...defaultUser, email },
      select: { id: true }
    }))
  );
};

export const devLoginCallback: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  fastify.get('/dev-callback', async (req, _res) => {
    const email = 'foo@bar.com';

    const { id } = await findOrCreateUser(fastify, email);
    req.session.user = { id };
    await req.session.save();
  });

  done();
};

export const auth0Routes: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.addHook('onRequest', fastify.authenticate);

  fastify.get('/callback', async (req, _res) => {
    const email = await getEmailFromAuth0(req);

    const { id } = await findOrCreateUser(fastify, email);
    req.session.user = { id };
    await req.session.save();
  });

  done();
};
