export const getUUID = () => {
  const COOKIE_NAME = 'gbuuid';
  const COOKIE_DAYS = 400; // 400 days is the max cookie duration for chrome

  // use the browsers crypto.randomUUID if set
  const genUUID = () => {
    if (window?.crypto?.randomUUID) return window.crypto.randomUUID();

    // return a random UUID style string`
    return ((1e7).toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      c =>
        (
          Number(c) ^
          (crypto.getRandomValues(new Uint8Array(1))[0] &
            (15 >> (Number(c) / 4)))
        ).toString(16)
    );
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };
  const setCookie = (name: string, value: string) => {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * COOKIE_DAYS);
    document.cookie = name + '=' + value + ';path=/;expires=' + d.toUTCString();
  };

  // get the existing UUID from cookie if set, otherwise create one and store it in the cookie
  if (getCookie(COOKIE_NAME)) return getCookie(COOKIE_NAME);

  const uuid = genUUID();
  setCookie(COOKIE_NAME, uuid);
  return uuid;
};
