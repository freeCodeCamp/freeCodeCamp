import {
  SESClient,
  SESClientConfig,
  SendEmailCommand
} from '@aws-sdk/client-ses';

import { MailProvider, SendEmailArgs } from '../mailer';
import { SES_ID, SES_SECRET, SES_REGION } from '../../utils/env';

/**
 * SESProvider is a wrapper around nodemailer that provides a clean interface
 * for sending email.
 */
export class SESProvider implements MailProvider {
  private client: SESClient;

  /**
   * Sets up SESClient and configures it with keys pulled from environment.
   */
  constructor() {
    if (!SES_ID || !SES_SECRET || !SES_REGION) {
      throw new Error('Email service is set to SES but missing required keys.');
    }
    const awsConfig: SESClientConfig = {
      credentials: {
        accessKeyId: SES_ID,
        secretAccessKey: SES_SECRET
      },
      region: SES_REGION
    };
    this.client = new SESClient(awsConfig);
  }

  /**
   * Sends an email using the SES sdk.
   *
   * @param param Email options.
   * @param param.to Email address to send to.
   * @param param.from Email address to send from.
   * @param param.subject Email subject.
   * @param param.text Email body (raw text only).
   * @param param.cc [Optional] Email address to CC.
   */
  async send({ to, from, subject, text, cc }: SendEmailArgs) {
    const opts = new SendEmailCommand({
      Destination: {
        ToAddresses: [to],
        CcAddresses: cc ? [cc] : []
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: text
          }
        }
      },
      Source: from
    });

    await this.client.send(opts);
  }
}
