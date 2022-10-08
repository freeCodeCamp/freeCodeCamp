import { Logger } from 'logover';

export const logover = new Logger({
  level: process.env.LOG_LEVEL || 'error'
});
