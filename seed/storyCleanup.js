/**
 * Created by nathanleniz on 4/25/15.
 */
require('dotenv').load();
var mongodb = require('mongodb'),
  Story = require('../models/Story.js'),
  secrets = require('../config/secrets');
  mongoose = require('mongoose');

mongoose.connect(secrets.db);

function storyLinkCleanup(cb) {
  console.log('headLineCleanup');
  var i = 1;
  var stream = Story.find({}).skip(0).limit(0).batchSize(20000).stream();

  stream.on('data', function (story) {
    console.log(i++);
    this.pause();
    story.storyLink = story.storyLink.
      replace(/[^a-z0-9\s]/gi, '').
      replace(/\s+/g, ' ').
      toLowerCase().
      trim();
    story.save(function (err) {
      if (err) {
        console.log('woops');
      }
      this.resume();
    }.bind(this));
  })
    .on('error', function (err) {
      console.error(err);
    }).on('close', function () {
      console.log('done with set');
      stream.destroy();
      cb();
    });
}

function done() {
  console.log('Migration script has completed');
  process.exit(0);
}


storyLinkCleanup(done);
