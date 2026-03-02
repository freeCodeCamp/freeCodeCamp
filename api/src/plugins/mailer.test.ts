import { describe, test, expect, vi } from 'vitest';
import Fastify from 'fastify';

import mailer from './mailer.js';

describe('mailer', () => {
  test('should send an email via the provider', async () => {
    const fastify = Fastify();
    const send = vi.fn();
    await fastify.register(mailer, { provider: { send } });

    const data = {
      to: 'test@add.ress',
      from: 'team@freecodecamp.org',
      subject: 'test',
      text: 'test'
    };

    await fastify.sendEmail(data);

    expect(send).toHaveBeenCalledWith(data);
  });
});
