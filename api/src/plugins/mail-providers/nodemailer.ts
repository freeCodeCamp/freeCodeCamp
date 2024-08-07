import nodemailer, { Transporter } from 'nodemailer';

import { MailProvider, SendEmailArgs } from '../mailer';
import { MAILHOG_HOST } from '../../utils/env';

/**
 * NodemailerProvider is a wrapper around nodemailer that provides a clean
 * interface for sending email.
 */
export class NodemailerProvider implements MailProvider {
  private transporter: Transporter;

  /**
   * Sets up nodemailer, with hardcodeded configuration.  This is intended for
   * use in development.
   */
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: MAILHOG_HOST,
      secure: false,
      port: 1025,
      auth: {
        user: 'test',
        pass: 'test'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
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
