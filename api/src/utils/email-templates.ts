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
  const intro = `Hello Team,\n\nThis is to report the profile of ${abuser}.`;
  const reportDetails = `Report Details:\n\n${reportDesc}`;
  const reporterUsername = `Username: ${reporter.username}`;
  const reporterName = `Name: ${reporter.name ?? ''}`;
  const reporterEmail = `Email: ${reporter.email}`;
  const reportedBy = `Reported by:\n${reporterUsername}\n${reporterName}\n${reporterEmail}`;
  const signature = `Thanks and regards,\n${reporter.name ?? ''}`;

  return `${intro}\n\n${reportDetails}\n\n\n${reportedBy}\n\n${signature}`;
};
