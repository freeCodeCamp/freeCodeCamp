import { FastifyPluginCallback, type FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
// No need for query-string on either side.

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
  const messagesObject = prepareMessage(message);
  return `messages=${encodeURIComponent(JSON.stringify(messagesObject))}`;
}

const plugin: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorateReply('redirectWithMessage', redirectWithMessage);

  done();
};

export default fp(plugin, { name: 'redirect-with-message' });
