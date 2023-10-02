import qs from 'query-string';

// add rx methods to express
export default function getExpressExtensions() {
  return function expressExtensions(req, res, next) {
    res.redirectWithFlash = uri => {
      const flash = req.flash();
      res.redirect(
        `${uri}?${qs.stringify(
          { messages: qs.stringify(flash, { arrayFormat: 'index' }) },
          { arrayFormat: 'index' }
        )}`
      );
    };
    res.sendFlash = (type, message) => {
      if (type && message) {
        req.flash(type, message);
      }
      return res.json(req.flash());
    };
    next();
  };
}
