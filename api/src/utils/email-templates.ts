import { user } from '@prisma/client';

/**
 * Generates an email template for reporting a user profile.
 * @param reporter - The user who is reporting the profile.
 * @param abuser - The username of the user being reported.
 * @param reportDesc - The description of the report.
 * @returns - The generated email template.
 */
export const generateReportEmail = (
  reporter: user,
  abuser: string,
  reportDesc: string
) => {
  return `
Hello Team,

This is to report the profile of ${abuser}.

Report Details:

${reportDesc}


Reported by:
Username: ${reporter.username}
Name:${reporter.name ? ' ' + reporter.name : ''}
Email: ${reporter.email}

Thanks and regards,
${reporter.name ?? ''}`;
};
