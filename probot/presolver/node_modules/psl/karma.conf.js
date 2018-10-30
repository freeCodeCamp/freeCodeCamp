'use strict';


module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['browserify', 'mocha'],

    files: [
      'test/**/*.spec.js'
    ],

    preprocessors: {
      'test/**/*.spec.js': ['browserify']
    },

    reporters: ['mocha'],

    client: {
      mocha: {
        reporter: 'tap'
      }
    },

    plugins: [
      'karma-browserify',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher'
    ]

  });

};

