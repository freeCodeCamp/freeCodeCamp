type Email = {
  Content: { Headers: { Subject: string[] } };
};

type AllEmails = {
  items: Email[];
};

export const getAllEmails = async (): Promise<AllEmails> => {
  const res = await fetch('http://localhost:8025/api/v2/messages');
  return res.json() as Promise<AllEmails>;
};

export const getFirstEmail = (allEmails: { items: Email[] }) => {
  return allEmails.items[0];
};

export const getSubject = (email: {
  Content: { Headers: { Subject: string[] } };
}) => {
  return email.Content.Headers.Subject[0];
};

export const deleteAllEmails = async () => {
  await fetch('http://localhost:8025/api/v1/messages', {
    method: 'DELETE'
  });
};
