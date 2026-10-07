/* eslint-disable no-underscore-dangle */

'use strict';

const { Transform } = require('stream');

class DummyParser extends Transform {
  constructor(incomingForm, options = {}) {
    super();
    this.globalOptions = { ...options };
    this.incomingForm = incomingForm;
  }

  _flush(callback) {
    this.incomingForm.ended = true;
    this.incomingForm._maybeEnd();
    callback();
  }
}

module.exports = DummyParser;
