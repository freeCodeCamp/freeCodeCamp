export const getCsrfToken = (cookies: string[]): string | undefined => {
  const csrfCookie = cookies.find(str => str.includes('csrf_token'));
  const csrfToken = csrfCookie?.split(';')[0].split('=')[1].trim();

  return csrfToken;
};
