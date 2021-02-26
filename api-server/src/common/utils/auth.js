import path from 'path';

import dedent from 'dedent';
import loopback from 'loopback';
import moment from 'moment';

export const renderSignUpEmail = loopback.template(
  path.join(
    __dirname,
    '..',
    '..',
    'server',
    'views',
    'emails',
    'user-request-sign-up.ejs'
  )
);

export const renderSignInEmail = loopback.template(
  path.join(
    __dirname,
    '..',
    '..',
    'server',
    'views',
    'emails',
    'user-request-sign-in.ejs'
  )
);

export const renderEmailChangeEmail = loopback.template(
  path.join(
    __dirname,
    '..',
    '..',
    'server',
    'views',
    'emails',
    'user-request-update-email.ejs'
  )
);

export function getWaitPeriod(ttl) {
  const fiveMinutesAgo = moment().subtract(5, 'minutes');
  const lastEmailSentAt = moment(new Date(ttl || null));
  const isWaitPeriodOver = ttl
    ? lastEmailSentAt.isBefore(fiveMinutesAgo)
    : true;

  if (!isWaitPeriodOver) {
    const minutesLeft = 5 - (moment().minutes() - lastEmailSentAt.minutes());
    return minutesLeft;
  }

  return 0;
}

export function getWaitMessage(ttl) {
  const minutesLeft = getWaitPeriod(ttl);
  if (minutesLeft <= 0) {
    return null;
  }

  const timeToWait = minutesLeft
    ? `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}`
    : 'a few seconds';

  return dedent`
    Please wait ${timeToWait} to resend an authentication link.
  `;
}

export function getEncodedEmail(email) {
  if (!email) {
    return null;
  }
  return Buffer.from(email).toString('base64');
}

export const decodeEmail = email => Buffer.from(email, 'base64').toString();
