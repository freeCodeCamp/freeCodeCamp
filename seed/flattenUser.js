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

function createQuery(db, collection, options, batchSize) {
  return Rx.Observable.create(function (observer) {
    console.log('Creating cursor...');
    var cursor = db.collection(collection).find({}, options);
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

function insertMany(db, collection, users, options) {
  return Rx.Observable.create(function(observer) {
    db.collection(collection).insertMany(users, options, function(err) {
      if (err) {
        return observer.onError(err);
      }
      observer.onCompleted();
    });
  });
}

var count = 0;
// will supply our db object
var dbObservable = createConnection(secrets.db).shareReplay();
dbObservable
  .flatMap(function(db) {
    // returns user document, n users per loop where n is the batchsize.
    return createQuery(db, 'users', {});
  })
  .map(function(user) {
    // flatten user
    assign(user, user.portfolio, user.profile);
    return user;
  })
  // batch them into arrays of twenty documents
  .bufferWithCount(20)
  // get bd object ready for insert
  .withLatestFrom(dbObservable, function(users, db) {
    return {
      users: users,
      db: db
    };
  })
  .flatMap(function(dats) {
    // bulk insert into new collection for loopback
    return insertMany(dats.db, 'user', dats.users, { w: 1 });
  })
  // count how many times insert completes
  .count()
  .subscribe(
    function(_count) {
      count = _count * 20;
    },
    function(err) {
      console.log('an error occured', err);
    },
    function() {
      console.log('finished with %s documents processed', count);
    }
  );
