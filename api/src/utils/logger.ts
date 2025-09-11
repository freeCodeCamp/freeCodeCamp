import { Transform, TransformCallback, TransformOptions } from 'stream';
import { FastifyRequest, FastifyReply } from 'fastify';
import { isEmpty } from 'lodash';
import pino, {
  TransportTargetOptions,
  DestinationStream,
  LoggerOptions
} from 'pino';
import { FCC_API_LOG_LEVEL, FCC_API_LOG_TRANSPORT } from './env';

const serializers = {
  req: (req: FastifyRequest) => {
    const id = req.id || 'ID not found';
    const method = req.method || 'METHOD not found';
    const url = req.url || 'URL not found';
    const xForwardedFor = Array.isArray(req.headers['x-forwarded-for'])
      ? req.headers['x-forwarded-for'][0]
        ? req.headers['x-forwarded-for'][0]
        : req.headers['x-forwarded-for']
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

const prettyTarget: TransportTargetOptions = {
  target: 'pino-pretty',
  options: {
    singleLine: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
    colorize: true
  }
};

class DeduplicatingTransform extends Transform {
  constructor(options?: TransformOptions) {
    super({ ...options, objectMode: false });
  }

  _transform(
    chunk: Buffer | string,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    try {
      const logString = Buffer.isBuffer(chunk) ? chunk.toString() : chunk;
      logString.split('\n').forEach(line => {
        if (line.trim() === '') return;
        const logObject = JSON.parse(line);
        const processedLog = JSON.parse(JSON.stringify(logObject));
        this.push(JSON.stringify(processedLog) + '\n');
      });
      callback();
    } catch (_err) {
      // If parsing or processing fails, pass the original chunk through
      // In a production scenario, you might want to log this internal error
      // to a different stream or use a fallback mechanism.
      this.push(chunk);
      callback();
    }
  }
}

/**
 * Get a logger instance.
 *
 * @returns A logger instance.
 */
export const getLogger = () => {
  const isPretty = FCC_API_LOG_TRANSPORT === 'pretty';
  const options: LoggerOptions = {
    level: FCC_API_LOG_LEVEL || 'info',
    serializers
  };

  if (isPretty) {
    const transport = pino.transport({ targets: [prettyTarget] }) as
      | DestinationStream
      | undefined;
    return pino(options, transport);
  } else {
    // For non-pretty, use the custom de-duplicating transform stream
    // This logger will write to a stream that then pipes to our de-duplicator
    const deduplicator = new DeduplicatingTransform();
    // Pino writes NDJSON, so our transform needs to handle that.
    // The pino instance itself doesn't need a complex transport, it writes to the stream.
    const logger = pino(options, deduplicator);
    deduplicator.pipe(process.stdout);
    return logger;
  }
};
