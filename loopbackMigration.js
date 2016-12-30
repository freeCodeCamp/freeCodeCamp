/* eslint-disable no-process-exit */
require('dotenv').load();
var Rx = require('rx'),
  uuid = require('uuid'),
  assign = require('lodash/object/assign'),
  mongodb = require('mongodb'),
  secrets = require('../config/secrets');

const batchSize = 20;
var MongoClient = mongodb.MongoClient;
Rx.config.longStackSupport = true;

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
    debug('connecting to db');
    MongoClient.connect(URI, function(err, database) {
      if (err) {
        return observer.onError(err);
      }
      debug('db connected');
      observer.onNext(database);
      observer.onCompleted();
    });
  });
}

function createQuery(db, collection, options, batchSize) {
  return Rx.Observable.create(function(observer) {
    var cursor = db.collection(collection).find({}, options);
    cursor.batchSize(batchSize || 20);
    // Cursor.each will yield all doc from a batch in the same tick,
    // or schedule getting next batch on nextTick
    debug('opening cursor for %s', collection);
    cursor.each(function(err, doc) {
      if (err) {
        return observer.onError(err);
      }
      if (!doc) {
        console.log('onCompleted');
        return observer.onCompleted();
      }
      observer.onNext(doc);
    });

    return Rx.Disposable.create(function() {
      debug('closing cursor for %s', collection);
      cursor.close();
    });
  });
}

function getUserCount(db) {
  return Rx.Observable.create(function(observer) {
    var cursor = db.collection('users').count(function(err, count) {
      if (err) {
        return observer.onError(err);
      }
      observer.onNext(count);
      observer.onCompleted();

      return Rx.Disposable.create(function() {
        debug('closing user count');
        cursor.close();
      });
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
var dbObservable = createConnection(secrets.db).replay();

var totalUser = dbObservable
  .flatMap(function(db) {
    return getUserCount(db);
  })
  .shareReplay();

var users = dbObservable
  .flatMap(function(db) {
    // returns user document, n users per loop where n is the batchsize.
    return createQuery(db, 'users', {}, batchSize);
  })
  .map(function(user) {
    // flatten user
    assign(user, user.portfolio, user.profile);
    if (!user.username) {
      user.username = 'fcc' + uuid.v4().slice(0, 8);
    }
    if (user.github) {
      user.isGithubCool = true;
    } else {
      user.isMigrationGrandfathered = true;
    }
    providers.forEach(function(provider) {
      user[provider + 'id'] = user[provider];
      user[provider] = null;
    });
    user.rand = Math.random();

    return user;
  })
  .shareReplay();

// batch them into arrays of twenty documents
var userSavesCount = users
  .bufferWithCount(batchSize)
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
  .flatMap(function() {
    return totalUser;
  })
  .doOnNext(function(totalUsers) {
    count = count + batchSize;
    debug('user progress %s', count / totalUsers * 100);
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
          externalId: user[provider + 'id'],
          userId: user._id || user.id
        };
      })
      .filter(function(ident) {
        return !!ident.externalId;
      });

    return Rx.Observable.from(ids);
  })
  .bufferWithCount(batchSize)
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

/*
var storyCount = dbObservable
  .flatMap(function(db) {
    return createQuery(db, 'stories', {}, batchSize);
  })
  .bufferWithCount(batchSize)
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
  */

Rx.Observable.combineLatest(
  userIdentityCount,
  userSavesCount,
  // storyCount,
  function(userIdentCount, userCount) {
    return {
      userIdentCount: userIdentCount * batchSize,
      userCount: userCount * batchSize
      // storyCount: storyCount * batchSize
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

dbObservable.connect();
