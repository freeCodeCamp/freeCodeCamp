import { FastifyPluginCallback, type FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
// TODO: (POST MVP)use node's querystring and just JSON stringify the message.
// No need for query-string on either side.
import qs from 'query-string';

declare module 'fastify' {
  interface FastifyReply {
    redirectWithMessage: typeof redirectWithMessage;
  }
}

type Message = {
  type: 'info' | 'danger' | 'success' | 'errors';
  content: string;
};

type MessageQuery = {
  info?: string[];
  danger?: string[];
  success?: string[];
  errors?: string[];
};

// The client expects a message like { info: ['foo'] }, { danger: ['bar'] } etc.
const prepareMessage = (message: Message): MessageQuery => ({
  [message.type]: [message.content]
});

function redirectWithMessage(
  this: FastifyReply,
  url: string,
  message: Message
) {
  return this.redirect(`${url}?${formatMessage(message)}`);
}

/**
 * Formats the message into a querystring.
 * @param message The message to format.
 * @returns The formatted message string.
 */
export function formatMessage(message: Message): string {
  return qs.stringify(
    {
      messages: qs.stringify(prepareMessage(message), {
        arrayFormat: 'index'
      })
    },
    { arrayFormat: 'index' }
  );
}

const plugin: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorateReply('redirectWithMessage', redirectWithMessage);

  done();
};

export default fp(plugin, { name: 'redirect-with-message' });
