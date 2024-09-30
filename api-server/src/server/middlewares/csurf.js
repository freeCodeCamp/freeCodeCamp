import csurf from 'csurf';

export const csrfOptions = {
  domain: process.env.COOKIE_DOMAIN,
  sameSite: 'strict',
  secure: process.env.FREECODECAMP_NODE_ENV === 'production'
};

export default function getCsurf() {
  const protection = csurf({
    cookie: { ...csrfOptions, httpOnly: true }
  });
  return function csrf(req, res, next) {
    const { path } = req;
    if (
      // eslint-disable-next-line max-len
      /^\/donate\/charge-stripe$|^\/donate\/create-stripe-payment-intent$|^\/coderoad-challenge-completed$/.test(
        path
      )
    ) {
      next();
    } else {
      // add the middleware
      protection(req, res, next);
    }
  };
}
