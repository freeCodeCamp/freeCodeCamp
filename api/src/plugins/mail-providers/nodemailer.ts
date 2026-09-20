import nodemailer, { Transporter } from 'nodemailer';

import { MailProvider, SendEmailArgs } from '../mailer.js';
import {
  EMAIL_PROVIDER,
  MAILPIT_HOST,
  SES_SMTP_HOST,
  SES_SMTP_USERNAME,
  SES_SMTP_PASSWORD
} from '../../utils/env.js';

export type NodemailerConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
  tls?: { rejectUnauthorized: boolean };
};

/**
 * NodemailerProvider is a wrapper around nodemailer that provides a clean
 * interface for sending email.
 */
export class NodemailerProvider implements MailProvider {
  private transporter: Transporter;

  /**
   * Sets up nodemailer with the provided configuration.
   *
   * @param config - The nodemailer transport configuration.
   */
  constructor(config: NodemailerConfig) {
    this.transporter = nodemailer.createTransport(config);
  }

  /**
   * Sends an email using nodemailer.
   *
   * @param param Email options.
   * @param param.to Email address to send to.
   * @param param.from Email address to send from.
   * @param param.subject Email subject.
   * @param param.text Email body (raw text only).
   * @param param.cc [Optional] Email address to CC.
   */
  async send({ to, from, subject, text, cc }: SendEmailArgs) {
    await this.transporter.sendMail({
      from,
      to,
      subject,
      text,
      cc
    });
  }
}

/**
 * Creates a mail provider based on the EMAIL_PROVIDER environment variable.
 */
export function createMailProvider(): NodemailerProvider {
  return EMAIL_PROVIDER === 'ses'
    ? new NodemailerProvider({
        host: SES_SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
          user: SES_SMTP_USERNAME ?? '',
          pass: SES_SMTP_PASSWORD ?? ''
        }
      })
    : new NodemailerProvider({
        host: MAILPIT_HOST,
        port: 1025,
        secure: false,
        auth: { user: 'test', pass: 'test' },
        tls: { rejectUnauthorized: false }
      });
}
