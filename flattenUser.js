/* eslint-disable no-process-exit */
require('dotenv').load();
var assign = require('lodash/object/assign'),
    Rx = require('rx'),
    mongodb = require('mongodb'),
    secrets = require('../config/secrets');

var MongoClient = mongodb.MongoClient;

function createConnection(URI) {
  return Rx.Observable.create(function(observer) {
    MongoClient.connect(URI, function(err, database) {
      if (err) {
        return observer.onError(err);
      }
      observer.onNext(database);
    });
  });
}

function createQuery(db, collection, selection, options, batchSize) {
  return Rx.Observable.create(function (observer) {
    console.log('Creating cursor...');
    var cursor = db.collection(collection).find(selection, options);
    cursor.batchSize(batchSize || 20);
    // Cursor.each will yield all doc from a batch in the same tick,
    // or schedule getting next batch on nextTick
    cursor.each(function (err, doc) {
      if (err) {
        return observer.onError(err);
      }
      if (!doc) {
        return observer.onCompleted();
      }
      observer.onNext(doc);
    });

    return Rx.Disposable.create(function () {
      console.log('Disposing cursor...');
      cursor.close();
    });
  });
}

function saveUser(user) {
  return Rx.Observable.create(function(observer) {
    user.save(function(err) {
      if (err) {
        return observer.onError(err);
      }
      observer.onCompleted();
    });
  });
}

var count = 0;
createConnection(secrets.db)
  .flatMap(function(db) {
    return createQuery(db, 'users', {});
  })
  .map(function(user) {
    assign(user, user.portfolio, user.profile);
    return user;
  })
  .flatMap(function(user) {
    return saveUser(user);
  })
  .count()
  .subscribe(
    function(_count) {
      count = _count;
    },
    function(err) {
      console.log('an error occured', err);
    },
    function() {
      console.log('finished with %s documents processed', count);
    }
  );
