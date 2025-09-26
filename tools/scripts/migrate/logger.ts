import { DestinationStream, pino, TransportTargetOptions } from 'pino';

const prettyTarget: TransportTargetOptions = {
  target: 'pino-pretty',
  options: {
    singleLine: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
    colorize: true,
    messageFormat: '{if collection}({collection}){end} {msg}'
  }
};

const transport = pino.transport({
  targets: [prettyTarget]
}) as DestinationStream;

export const log = pino({ level: 'info' }, transport);
