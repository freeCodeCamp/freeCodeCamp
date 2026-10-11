type Email = {
  Subject: string;
  ID: string;
  From: { Address: string; Name: string };
  To: Array<{ Address: string; Name: string }>;
};

type AllEmails = {
  messages: Email[];
  total: number;
  count: number;
};

const host = process.env.MAILPIT_HOST || 'localhost';

const addressSearchUrl = (address: string) => {
  // Include Cc: abuse reports copy the reporter there.
  const query = new URLSearchParams({ query: `addressed:"${address}"` });
  return `http://${host}:8025/api/v1/search?${query}`;
};

export const getEmailsForAddress = async (
  address: string
): Promise<AllEmails> => {
  const res = await fetch(addressSearchUrl(address));
  return res.json() as Promise<AllEmails>;
};

export const getFirstEmail = (allEmails: { messages: Email[] }) => {
  return allEmails.messages[0];
};

export const getSubject = (email: { Subject: string }) => {
  return email.Subject;
};

export const deleteEmailsForAddress = async (address: string) => {
  const res = await fetch(addressSearchUrl(address), {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error(`Could not delete emails: ${res.status}`);
};
