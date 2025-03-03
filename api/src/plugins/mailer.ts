import type { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    sendEmail: SendEmail;
  }
}

export type SendEmailArgs = {
  to: string;
  from: string;
  subject: string;
  text: string;
  cc?: string;
};

type SendEmail = (args: SendEmailArgs) => Promise<void>;

export interface MailProvider {
  send: SendEmail;
}

const plugin: FastifyPluginCallback<{ provider: MailProvider }> = (
  fastify,
  options,
  done
) => {
  const { provider } = options;

  if (!provider)
    return done(
      Error(
        "The mailer plugin must be passed a provider via register's options."
      )
    );

  fastify.decorate('sendEmail', async (args: SendEmailArgs) => {
    const logger = fastify.log.child({ args });
    logger.debug('Sending Email');

    return await provider.send(args);
  });

  done();
};

export default fp(plugin);
