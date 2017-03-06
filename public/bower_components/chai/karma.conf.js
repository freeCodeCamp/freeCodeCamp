module.exports = function(config) {
  config.set({
      frameworks: [ 'mocha' ]
    , files: [
          'chai.js'
        , 'test/bootstrap/karma.js'
        , 'test/*.js'
      ]
    , reporters: [ 'progress' ]
    , colors: true
    , logLevel: config.LOG_INFO
    , autoWatch: false
    , browsers: [ 'PhantomJS' ]
    , browserDisconnectTimeout: 10000
    , browserDisconnectTolerance: 2
    , browserNoActivityTimeout: 20000
    , singleRun: true
  });

  switch (process.env.CHAI_TEST_ENV) {
    case 'sauce':
      require('./karma.sauce')(config);
      break;
    default:
      // ...
      break;
  };
};
