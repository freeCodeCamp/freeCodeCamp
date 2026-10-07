'use strict';

const getMessageData = require('./message');

module.exports = function report(context, message, messageId, data) {
  context.report(
    Object.assign(
      getMessageData(messageId, message),
      data
    )
  );
};
