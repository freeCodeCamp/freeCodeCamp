import pino, { TransportTargetOptions } from 'pino';
import { FastifyRequest, FastifyReply } from 'fastify';
import { isEmpty } from 'lodash';
import { FCC_API_LOG_LEVEL, FCC_API_LOG_TRANSPORT } from './env';

const transportOptionsPretty: TransportTargetOptions = {
  target: 'pino-pretty',
  options: {
    singleLine: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
    colorize: true
  }
};

const serializersPretty = {
  req: (req: FastifyRequest) => {
    return {
      REQ_METHOD: req.method,
      REQ_URL: req.url
    };
  },
  res: (res: FastifyReply) => {
    return {
      RES_STATUS_CODE: res.statusCode,
      RES_ELAPSED_TIME: res.elapsedTime
    };
  }
};

const serializersDefault = {
  req: (req: FastifyRequest) => {
    const id = req.id || 'ID not found';
    const method = req.method || 'METHOD not found';
    const url = req.url || 'URL not found';
    const xForwardedFor = Array.isArray(req.headers['x-forwarded-for'])
      ? req.headers['x-forwarded-for'][0]
      : req.headers['x-forwarded-for'];
    const ip =
      req.headers['cf-connecting-ip'] ||
      xForwardedFor ||
      req.headers['x-real-ip'] ||
      req.ip ||
      'IP not found';
    const userAgent = req.headers['user-agent'] || 'USER_AGENT not found';
    const country = req.headers['cf-ipcountry'] || 'COUNTRY not found';
    const query = isEmpty(req.query) ? 'QUERY not found' : req.query;

    return {
      REQ_METHOD: method,
      REQ_URL: url,
      REQ_IP: ip,
      REQ_USER_AGENT: userAgent,
      REQ_COUNTRY: country,
      REQ_QUERY: query,
      REQ_ID: id
    };
  },
  res: (res: FastifyReply) => {
    return {
      RES_STATUS_CODE: res.statusCode,
      RES_ELAPSED_TIME: res.elapsedTime
    };
  }
};

/**
 * Get a logger instance with the default options.
 *
 * @returns A logger instance with the default options.
 */
export const getLogger = () => {
  const isPretty = FCC_API_LOG_TRANSPORT === 'pretty';
  const options = {
    level: FCC_API_LOG_LEVEL || 'info',
    serializers: isPretty ? serializersPretty : serializersDefault
  };

  return isPretty
    ? pino({ ...options, transport: transportOptionsPretty })
    : pino(options);
};
