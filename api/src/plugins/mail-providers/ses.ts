import {
  SESClient,
  SESClientConfig,
  SendEmailCommand
} from '@aws-sdk/client-ses';

import { MailProvider, SendEmailArgs } from '../mailer';
import { SES_ID, SES_SECRET } from '../../utils/env';

export class SESProvider implements MailProvider {
  private client: SESClient;

  constructor() {
    if (!SES_ID || !SES_SECRET) {
      throw new Error('Email service is set to SES but missing required keys.');
    }
    const awsConfig: SESClientConfig = {
      credentials: {
        accessKeyId: SES_ID,
        secretAccessKey: SES_SECRET
      },
      region: 'us-east-1'
    };
    this.client = new SESClient(awsConfig);
  }

  async send({ to, from, subject, text }: SendEmailArgs) {
    const opts = new SendEmailCommand({
      Destination: {
        ToAddresses: [to]
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
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
