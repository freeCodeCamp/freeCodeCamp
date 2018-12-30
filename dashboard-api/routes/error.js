const httpStatus = require('http-status');
const expressWinston = require('express-winston');
const expressValidation = require('express-validation');

const config = require('../config/config');
const winstonInstance = require('../config/winston');
const log = require('../config/winston');
const APIError = require('../config/APIError');

function provideErrorMiddleware(app) {
  // enable detailed API logging in dev env
  if (config.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(
      expressWinston.logger({
        winstonInstance,
        meta: false, // optional: log meta data about request (defaults to true)
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
      })
    );
  }

  // if error is not an instanceOf APIError, convert it.
  app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
      // validation error contains errors which is an array of error each containing message[]
      const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
      const error = new APIError(unifiedErrorMessage, err.status, true);
      return next(error);
    } else if (!(err instanceof APIError)) {
      const apiError = new APIError(err.message, err.status, err.isPublic);
      return next(apiError);
    }
    return next(err);
  });

  const isAPIRoute = /^\/api/;
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    if (isAPIRoute.test(req.path)) {
      const err = new APIError('API not found', httpStatus.NOT_FOUND);
      return next(err);
    }
    return next();
  });

  // log error in winston transports except when executing test suite
  if (config.env !== 'test') {
    app.use(
      expressWinston.errorLogger({
        winstonInstance
      })
    );
  }

  // error handler, send stacktrace only during development
  app.use((
    err,
    req,
    res,
    next // eslint-disable-line no-unused-vars
  ) =>
    res.status(err.status).json({
      message: err.isPublic ? err.message : httpStatus[err.status],
      stack: config.env === 'development' ? JSON.stringify(err.stack, null, 2) : {}
    })
  );
}

module.exports = provideErrorMiddleware;
