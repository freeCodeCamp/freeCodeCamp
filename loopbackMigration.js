/* eslint-disable no-process-exit */
require('dotenv').load();
var Rx = require('rx'),
  uuid = require('node-uuid'),
  assign = require('lodash/object/assign'),
  mongodb = require('mongodb'),
  secrets = require('../config/secrets');

var MongoClient = mongodb.MongoClient;

var providers = [
  'facebook',
  'twitter',
  'google',
  'github',
  'linkedin'
];

// create async console.logs
function debug() {
  var args = [].slice.call(arguments);
  process.nextTick(function() {
    console.log.apply(console, args);
  });
}

function createConnection(URI) {
  return Rx.Observable.create(function(observer) {
    MongoClient.connect(URI, function(err, database) {
      if (err) {
        return observer.onError(err);
      }
      observer.onNext(database);
      observer.onCompleted();
    });
  });
}

function createQuery(db, collection, options, batchSize) {
  return Rx.Observable.create(function (observer) {
    var cursor = db.collection(collection).find({}, options);
    cursor.batchSize(batchSize || 20);
    // Cursor.each will yield all doc from a batch in the same tick,
    // or schedule getting next batch on nextTick
    debug('opening cursor for %s', collection);
    cursor.each(function (err, doc) {
      if (err) {
        return observer.onError(err);
      }
      if (!doc) {
        console.log('onCompleted');
        return observer.onCompleted();
      }
      observer.onNext(doc);
    });

    return Rx.Disposable.create(function () {
      debug('closing cursor for %s', collection);
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
      observer.onNext();
      observer.onCompleted();
    });
  });
}

var count = 0;
// will supply our db object
var dbObservable = createConnection(secrets.db).shareReplay();

var users = dbObservable
  .flatMap(function(db) {
    // returns user document, n users per loop where n is the batchsize.
    return createQuery(db, 'users', {});
  })
  .map(function(user) {
    // flatten user
    assign(user, user.portfolio, user.profile);
    return user;
  })
  .map(function(user) {
    if (user.username) {
      return user;
    }
    user.username = 'fcc' + uuid.v4().slice(0, 8);
    return user;
  })
  .shareReplay();

// batch them into arrays of twenty documents
var userSavesCount = users
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
  .count();

// create User Identities
var userIdentityCount = users
  .flatMap(function(user) {
    var ids = providers
      .map(function(provider) {
        return {
          provider: provider,
          externalId: user[provider],
          userId: user.id
        };
      })
      .filter(function(ident) {
        return !!ident.externalId;
      });

    return Rx.Observable.from(ids);
  })
  .bufferWithCount(20)
  .withLatestFrom(dbObservable, function(identities, db) {
    return {
      identities: identities,
      db: db
    };
  })
  .flatMap(function(dats) {
    // bulk insert into new collection for loopback
    return insertMany(dats.db, 'userIdentity', dats.identities, { w: 1 });
  })
  // count how many times insert completes
  .count();

var storyCount = dbObservable
  .flatMap(function(db) {
    return createQuery(db, 'stories', {});
  })
  .bufferWithCount(20)
  .withLatestFrom(dbObservable, function(stories, db) {
    return {
      stories: stories,
      db: db
    };
  })
  .flatMap(function(dats) {
    return insertMany(dats.db, 'story', dats.stories, { w: 1 });
  })
  .count();

var commentCount = dbObservable
  .flatMap(function(db) {
    return createQuery(db, 'comments', {});
  })
  .withLatestFrom(dbObservable, function(comments, db) {
    return {
      comments: comments,
      db: db
    };
  })
  .flatMap(function(dats) {
    return insertMany(dats.db, 'comment', dats.comments, { w: 1 });
  })
  .buffer(20)
  .count();

Rx.Observable.combineLatest(
  userIdentityCount,
  userSavesCount,
  storyCount,
  commentCount,
  function(userIdentCount, userCount, storyCount, commentCount) {
    return {
      userIdentCount: userIdentCount * 20,
      userCount: userCount * 20,
      storyCount: storyCount * 20,
      commentCount: commentCount * 20
    };
  })
  .subscribe(
    function(countObj) {
      console.log('next');
      count = countObj;
    },
    function(err) {
      console.error('an error occured', err, err.stack);
    },
    function() {

      console.log('finished with ', count);
      process.exit(0);
    }
  );
