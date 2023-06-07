import nodemailer, { Transporter } from 'nodemailer';

import { MailProvider, SendEmailArgs } from '../mailer';

export class NodemailerProvider implements MailProvider {
  private transporter: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'localhost',
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

  async send({ to, from, subject, text }: SendEmailArgs) {
    await this.transporter.sendMail({
      from,
      to,
      subject,
      text
    });
  }
}
