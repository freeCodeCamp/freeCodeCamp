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

export const getAllEmails = async (): Promise<AllEmails> => {
  const res = await fetch(`http://${host}:8025/api/v1/messages`);
  return res.json() as Promise<AllEmails>;
};

export const getFirstEmail = (allEmails: { messages: Email[] }) => {
  return allEmails.messages[0];
};

export const getSubject = (email: { Subject: string }) => {
  return email.Subject;
};

export const deleteAllEmails = async () => {
  await fetch(`http://${host}:8025/api/v1/messages`, {
    method: 'DELETE'
  });
};
