import { randomUUID } from 'crypto';
import { appendFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { FastifyPluginCallback } from 'fastify';

import fp from 'fastify-plugin';
import { FastifyReply } from 'fastify/types/reply';
import { FastifyRequest } from 'fastify/types/request';

const LOGS_DIRECTORY = 'logs';
const REQUEST_CAPTURE_FILE = 'request-capture.jsonl';
const RESPONSE_CAPTURE_FILE = 'response-capture.jsonl';

let REQUEST_BUFFER: unknown[] = [];
let RESPONSE_BUFFER: unknown[] = [];

/**
 * Plugin for capturing requests and responses to allow shadow testing.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
const shadowCapture: FastifyPluginCallback = (fastify, _options, done) => {
  mkdirSync(LOGS_DIRECTORY, { recursive: true });
  fastify.addHook('onRequest', (req, rep, done) => {
    // Attach timestamp at beginning of lifecycle
    // @ts-expect-error Exists
    req.__timestamp = Date.now();

    // Give request and response same id to match.
    const id = randomUUID();
    // @ts-expect-error Exists
    req.__id = id;
    // @ts-expect-error Exists
    rep.__id = id;
    done();
  });

  // Body is only included after `Parsing` lifecycle
  fastify.addHook('preValidation', (req, rep, done) => {
    captureRequest(req);
    done();
  });

  fastify.addHook('onSend', async (_req, rep, payload) => {
    // @ts-expect-error Exists
    rep.__payload = payload;
    return payload;
  });

  fastify.addHook('onResponse', (_req, rep, done) => {
    captureReply(rep);
    done();
  });

  done();
};

/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-return */
function captureRequest(req: FastifyRequest) {
  const savedRequest = {
    // @ts-expect-error Exists
    id: req.__id,
    // @ts-expect-error Exists
    timestamp: req.__timestamp,
    url: req.url,
    headers: omit(req.headers, 'cookie'),
    cookies: include(req.cookies, '_csrf', 'csrf_token', 'jwt_access_token'),
    user: req.user,
    body: req.body
  };

  if (REQUEST_BUFFER.length > 10) {
    appendFileSync(
      join(LOGS_DIRECTORY, REQUEST_CAPTURE_FILE),
      REQUEST_BUFFER.map(rb => JSON.stringify(rb)).join('\n') + '\n'
    );
    REQUEST_BUFFER = [savedRequest];
  } else {
    REQUEST_BUFFER.push(savedRequest);
  }
}

function captureReply(rep: FastifyReply) {
  const savedReply = {
    // @ts-expect-error Exists
    id: rep.__id,
    headers: rep.getHeaders(),
    timestamp: Date.now(),
    // @ts-expect-error Exists
    payload: rep.__payload,
    statusCode: rep.statusCode
  };

  if (RESPONSE_BUFFER.length > 10) {
    appendFileSync(
      join(LOGS_DIRECTORY, RESPONSE_CAPTURE_FILE),
      RESPONSE_BUFFER.map(rb => JSON.stringify(rb)).join('\n') + '\n'
    );
    RESPONSE_BUFFER = [savedReply];
  } else {
    RESPONSE_BUFFER.push(savedReply);
  }
}

/**
 * Returns a subset of the given object with the values or properties given removed.
 * @param obj - An array or an object literal.
 * @param vals - Items or properties to exclude from `obj`.
 * @returns Subset of `obj`.
 */
function omit(obj: Record<string, unknown> | unknown[], ...vals: unknown[]) {
  if (Array.isArray(obj)) {
    return obj.filter(o => !vals.includes(o));
  } else {
    return Object.keys(obj)
      .filter(k => {
        return !vals.includes(k);
      })
      .reduce((acc, curr) => ({ ...acc, [curr]: obj[curr] }), {});
  }
}

function include(obj: Record<string, unknown> | unknown[], ...vals: unknown[]) {
  if (Array.isArray(obj)) {
    return obj.filter(o => vals.includes(o));
  } else {
    return Object.keys(obj)
      .filter(k => {
        return vals.includes(k);
      })
      .reduce((acc, curr) => ({ ...acc, [curr]: obj[curr] }), {});
  }
}

export default fp(shadowCapture);
