const isDev = process.env.NODE_ENV !== 'production';

export function getEmailSender() {
  return process.env.SES_MAIL_FROM || 'team@freecodecamp.org';
}

export function getPort() {
  if (!isDev) {
    return '443';
  }
  return process.env.SYNC_PORT || '3000';
}

export function getProtocol() {
  return isDev ? 'http' : 'https';
}

export function getHost() {
  if (isDev) {
    return process.env.HOST || 'localhost';
  }
  return 'www.freecodecamp.org';
}

export function getServerFullURL() {
  if (!isDev) {
   return getProtocol()
        + '://'
        + getHost();
  }
  return getProtocol()
       + '://'
       + getHost()
       + ':'
       + getPort();
}
