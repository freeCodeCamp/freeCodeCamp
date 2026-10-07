'use strict';
var _ = {
  isFunction: require('lodash/isFunction'),
};
var { from, of } = require('rxjs');
var runAsync = require('run-async');

/**
 * Resolve a question property value if it is passed as a function.
 * This method will overwrite the property on the question object with the received value.
 * @param  {Object} question - Question object
 * @param  {String} prop     - Property to fetch name
 * @param  {Object} answers  - Answers object
 * @return {Rx.Observable}   - Observable emitting once value is known
 */

exports.fetchAsyncQuestionProperty = function (question, prop, answers) {
  if (!_.isFunction(question[prop])) {
    return of(question);
  }

  return from(
    runAsync(question[prop])(answers).then((value) => {
      question[prop] = value;
      return question;
    })
  );
};
