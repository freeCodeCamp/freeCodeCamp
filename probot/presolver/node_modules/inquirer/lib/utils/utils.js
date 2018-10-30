'use strict';
var _ = require('lodash');
var rx = require('rx-lite');
var runAsync = require('run-async');


/**
 * Create an oversable returning the result of a function runned in sync or async mode.
 * @param  {Function} func Function to run
 * @return {rx.Observable} Observable emitting when value is known
 */

exports.createObservableFromAsync = function (func) {
  return rx.Observable.defer(function () {
    return rx.Observable.create(function (obs) {
      runAsync(func, function (value) {
        obs.onNext(value);
        obs.onCompleted();
      });
    });
  });
};


/**
 * Resolve a question property value if it is passed as a function.
 * This method will overwrite the property on the question object with the received value.
 * @param  {Object} question - Question object
 * @param  {String} prop     - Property to fetch name
 * @param  {Object} answers  - Answers object
 * @...rest {Mixed} rest     - Arguments to pass to `func`
 * @return {rx.Obsersable}   - Observable emitting once value is known
 */

exports.fetchAsyncQuestionProperty = function (question, prop, answers) {
  if (!_.isFunction(question[prop])) {
    return rx.Observable.return(question);
  }

  return exports.createObservableFromAsync(function () {
    var done = this.async();
    runAsync(question[prop], function (value) {
      question[prop] = value;
      done(question);
    }, answers);
  });
};
