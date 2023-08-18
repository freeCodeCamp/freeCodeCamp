import { MailProvider } from '../mailer';

export const MockEmailProvider: MailProvider = {
  send: jest.fn()
};
