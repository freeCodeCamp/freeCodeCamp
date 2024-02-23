export function getEmailSender() {
  return process.env.SES_MAIL_FROM || 'team@freecodecamp.org';
}
