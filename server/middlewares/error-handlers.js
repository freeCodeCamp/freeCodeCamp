import { inspect } from 'util';
import _ from 'lodash/fp';
import accepts from 'accepts';
import { unwrapHandledError } from '../utils/create-handled-error.js';

const isDev = process.env.NODE_ENV !== 'production';

const toString = Object.prototype.toString;
// is full error or just trace
// _.toString(new Error('foo')) => "Error: foo
// Object.prototype.toString.call(new Error('foo')) => "[object Error]"
const isInspect = val => !val.stack && _.toString(val) === toString.call(val);
const stringifyErr = val => {
  if (val.stack) {
    return String(val.stack);
  }

  const str = String(val);

  return isInspect(val) ?
    inspect(val) :
    str;
};

const createStackHtml = _.flow(
  _.cond([
    [isInspect, err => [err]],
    // may be stack or just err.msg
    [_.stubTrue, _.flow(stringifyErr, _.split('\n'), _.tail) ]
  ]),
  _.map(_.escape),
  _.map(line => `<li>${line}</lin>`),
  _.join('')
);

const createErrorTitle = _.cond([
  [
    _.negate(isInspect),
    _.flow(stringifyErr, _.split('\n'), _.head, _.defaultTo('Error'))
  ],
  [_.stubTrue, _.constant('Error')]
]);

export default function prodErrorHandler() {
  // error handling in production.
  // disabling eslint due to express parity rules for error handlers
  return function(err, req, res, next) { // eslint-disable-line
    const handled = unwrapHandledError(err);
    // respect handled error status
    let status = handled.status || err.status || res.statusCode;
    if (!handled.status && status < 400) {
      status = 500;
    }
    res.status(status);

    // parse res type
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');

    const redirectTo = handled.redirectTo || '/';
    const message = handled.message ||
      'Oops! Something went wrong. Please try again later';

    if (isDev) {
      console.error(err);
    }

    if (type === 'html') {
      if (isDev) {
        return res.render(
          'dev-error',
          {
            ...handled,
            stack: createStackHtml(err),
            errorTitle: createErrorTitle(err),
            title: 'freeCodeCamp - Server Error',
            status
          }
        );
      }
      if (typeof req.flash === 'function') {
        req.flash(handled.type || 'danger', message);
      }
      return res.redirect(redirectTo);
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({
        type: handled.type || 'errors',
        message
      });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  };
}
