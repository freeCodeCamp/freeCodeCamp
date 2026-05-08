import { describe, expect, test, vi } from 'vitest';
import Fastify from 'fastify';
import { registerHintRoute } from '../route.js';
import type { GenerateFn } from '../hint.js';
import type { StructuredOutput } from '../schemas.js';

const buildApp = (generate: GenerateFn) => {
  const app = Fastify();
  registerHintRoute(app, { apiKey: 'secret', generate });
  return app;
};

const cleanOutput: StructuredOutput = {
  encouragement: 'You wrote a clear h1.',
  question: 'What labels the page name in the browser tab?'
};

const validBody = {
  description: 'Add a title that says Cat Photo App.',
  userInput: '<h1>Cat Photo App</h1>',
  seed: '<title>placeholder</title>',
  hints: [
    { text: 'Title should say Cat Photo App.', failed: true },
    { text: 'Page should have an h1.', failed: false }
  ],
  userId: 'u1'
};

const post = (app: ReturnType<typeof Fastify>, body: unknown, withKey = true) =>
  app.inject({
    method: 'POST',
    url: '/hint',
    headers: withKey
      ? { 'x-api-key': 'secret', 'content-type': 'application/json' }
      : { 'content-type': 'application/json' },
    payload: JSON.stringify(body)
  });

describe('POST /hint', () => {
  test('200 with concatenated hint on happy path', async () => {
    const generate = vi.fn().mockResolvedValueOnce(cleanOutput);
    const app = buildApp(generate);
    const res = await post(app, validBody);

    expect(res.statusCode).toBe(200);
    expect(res.json()).toStrictEqual({
      hint: 'You wrote a clear h1. What labels the page name in the browser tab?'
    });
    await app.close();
  });

  test('401 when x-api-key header is missing, model never called', async () => {
    const generate = vi.fn();
    const app = buildApp(generate);
    const res = await post(app, validBody, false);

    expect(res.statusCode).toBe(401);
    expect(res.json()).toStrictEqual({ error: 'unauthorized' });
    expect(generate).not.toHaveBeenCalled();
    await app.close();
  });

  test('401 when x-api-key is present but wrong, model never called', async () => {
    const generate = vi.fn();
    const app = buildApp(generate);
    const res = await app.inject({
      method: 'POST',
      url: '/hint',
      headers: { 'x-api-key': 'nope!!', 'content-type': 'application/json' },
      payload: JSON.stringify(validBody)
    });

    expect(res.statusCode).toBe(401);
    expect(res.json()).toStrictEqual({ error: 'unauthorized' });
    expect(generate).not.toHaveBeenCalled();
    await app.close();
  });

  test('400 no-attempt when userInput is empty', async () => {
    const generate = vi.fn();
    const app = buildApp(generate);
    const res = await post(app, { ...validBody, userInput: '   ' });

    expect(res.statusCode).toBe(400);
    expect(res.json()).toStrictEqual({ error: 'no-attempt' });
    expect(generate).not.toHaveBeenCalled();
    await app.close();
  });

  test('400 no-attempt when userInput is missing entirely', async () => {
    const generate = vi.fn();
    const app = buildApp(generate);
    const { userInput: _ignored, ...withoutInput } = validBody;
    const res = await post(app, withoutInput);

    expect(res.statusCode).toBe(400);
    expect(res.json()).toStrictEqual({ error: 'no-attempt' });
    expect(generate).not.toHaveBeenCalled();
    await app.close();
  });

  test('400 no-failing-test when all tests pass', async () => {
    const generate = vi.fn();
    const app = buildApp(generate);
    const res = await post(app, {
      ...validBody,
      hints: validBody.hints.map(h => ({ ...h, failed: false }))
    });

    expect(res.statusCode).toBe(400);
    expect(res.json()).toStrictEqual({ error: 'no-failing-test' });
    expect(generate).not.toHaveBeenCalled();
    await app.close();
  });

  test('400 invalid-request when payload fails Zod parse', async () => {
    const generate = vi.fn();
    const app = buildApp(generate);
    const res = await post(app, { description: '' });

    expect(res.statusCode).toBe(400);
    expect(res.json()).toStrictEqual({ error: 'invalid-request' });
    expect(generate).not.toHaveBeenCalled();
    await app.close();
  });

  test('400 pedagogy-violation when retries fail', async () => {
    const violating = {
      encouragement: '`<h1>` good.',
      question: '```\n<title>x</title>\n```'
    };
    const generate = vi
      .fn()
      .mockResolvedValueOnce(violating)
      .mockResolvedValueOnce(violating);
    const app = buildApp(generate);
    const res = await post(app, validBody);

    expect(res.statusCode).toBe(400);
    expect(res.json()).toStrictEqual({ error: 'pedagogy-violation' });
    await app.close();
  });

  test('500 service-unavailable when generate throws unexpected error', async () => {
    const generate = vi.fn().mockRejectedValueOnce(new Error('boom'));
    const app = buildApp(generate);
    const res = await post(app, validBody);

    expect(res.statusCode).toBe(500);
    expect(res.json()).toStrictEqual({ error: 'service-unavailable' });
    await app.close();
  });
});
