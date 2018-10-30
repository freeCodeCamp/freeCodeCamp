'use strict';

var watchman = require('fb-watchman');
var captureExit = require('capture-exit');

function values(obj) {
  return Object.keys(obj).map(key => obj[key]);
}

/**
 * Constants
 */

/**
 * Singleton that provides a public API for a connection to a watchman instance for 'sane'.
 * It tries to abstract/remove as much of the boilerplate processing as necessary
 * from WatchmanWatchers that use it. In particular, they have no idea whether
 * we're using 'watch-project' or 'watch', what the 'project root' is when
 * we internally use watch-project, whether a connection has been lost
 * and reestablished, etc. Also switched to doing things with promises and known-name
 * methods in WatchmanWatcher, so as much information as possible can be kept in
 * the WatchmanClient, ultimately making this the only object listening directly
 * to watchman.Client, then forwarding appropriately (via the known-name methods) to
 * the relevant WatchmanWatcher(s).
 *
 * Note: WatchmanWatcher also added a 'watchmanPath' option for use with the sane CLI.
 * Because of that, we actually need a map of watchman binary path to WatchmanClient instance.
 * That is set up in getInstance(). Once the WatchmanWatcher has a given client, it doesn't
 * change.
 *
 * @class WatchmanClient
 * @param String watchmanBinaryPath
 * @public
 */

function WatchmanClient(watchmanBinaryPath) {
  captureExit.captureExit();

  // define/clear some local state. The properties will be initialized
  // in _handleClientAndCheck(). This is also called again in _onEnd when
  // trying to reestablish connection to watchman.
  this._clearLocalVars();

  this._watchmanBinaryPath = watchmanBinaryPath;

  this._backoffTimes = this._setupBackoffTimes();

  this._clientListeners = null; // direct listeners from here to watchman.Client.

  // Define a handler for if somehow the Node process gets interrupted. We need to
  // close down the watchman.Client, if we have one.
  captureExit.onExit(() => {
    this._clearLocalVars();
  });
}

// Define 'wildmatch' property, which must be available when we call the
// WatchmanWatcher.createOptions() method.
Object.defineProperty(WatchmanClient.prototype, 'wildmatch', {
  get() {
    return this._wildmatch;
  },
});

/**
 * Called from WatchmanWatcher (or WatchmanClient during reconnect) to create
 * a watcherInfo entry in our _watcherMap and issue a 'subscribe' to the
 * watchman.Client, to be handled here.
 */
WatchmanClient.prototype.subscribe = function(watchmanWatcher, root) {
  let subscription;
  let watcherInfo;

  return this._setupClient()
    .then(() => {
      watcherInfo = this._createWatcherInfo(watchmanWatcher);
      subscription = watcherInfo.subscription;
      return this._watch(subscription, root);
    })
    .then(() => this._clock(subscription))
    .then(() => this._subscribe(subscription));
  // Note: callers are responsible for noting any subscription failure.
};

/**
 * Remove the information about a specific WatchmanWatcher.
 * Once done, if no watchers are left, clear the local vars,
 * which will end the connection to the watchman.Client, too.
 */
WatchmanClient.prototype.closeWatcher = function(watchmanWatcher) {
  let watcherInfos = values(this._watcherMap);
  let numWatchers = watcherInfos.length;

  if (numWatchers > 0) {
    let watcherInfo;

    for (let info of watcherInfos) {
      if (info.watchmanWatcher === watchmanWatcher) {
        watcherInfo = info;
        break;
      }
    }

    if (watcherInfo) {
      delete this._watcherMap[watcherInfo.subscription];

      numWatchers--;

      if (numWatchers === 0) {
        this._clearLocalVars(); // nobody watching, so shut the watchman.Client down.
      }
    }
  }
};

/**
 * Simple backoff-time iterator. next() returns times in ms.
 * When it's at the last value, it stays there until reset()
 * is called.
 */
WatchmanClient.prototype._setupBackoffTimes = function() {
  return {
    _times: [0, 1000, 5000, 10000, 60000],

    _next: 0,

    next() {
      let val = this._times[this._next];
      if (this._next < this._times.length - 1) {
        this._next++;
      }
      return val;
    },

    reset() {
      this._next = 0;
    },
  };
};

/**
 * Set up the connection to the watchman client. Return a promise
 * that is fulfilled when we have a client that has finished the
 * capabilityCheck.
 */
WatchmanClient.prototype._setupClient = function() {
  if (!this._clientPromise) {
    this._clientPromise = new Promise((resolve, reject) => {
      this._handleClientAndCheck(resolve, reject);
    });
  }

  return this._clientPromise;
};

/**
 * Handle the process of creating a client and doing a capability check and
 * getting a valid response, then setting up local data based on that.
 *
 * This is split from _setupClient and _createClientAndCheck so it can
 * provide the backoff handling needed during attempts to reconnect.
 */
WatchmanClient.prototype._handleClientAndCheck = function(resolve, reject) {
  this._createClientAndCheck().then(
    value => {
      let resp = value.resp;
      let client = value.client;

      try {
        this._wildmatch = resp.capabilities.wildmatch;
        this._relative_root = resp.capabilities.relative_root;
        this._client = client;

        client.on('subscription', this._onSubscription.bind(this));
        client.on('error', this._onError.bind(this));
        client.on('end', this._onEnd.bind(this));

        this._backoffTimes.reset();
        resolve(this);
      } catch (error) {
        // somehow, even though we supposedly got a valid value back, it's
        // malformed, or some other internal error occurred. Reject so
        // the promise itself doesn't hang forever.
        reject(error);
      }
    },
    () => {
      // create & capability check failed in any of several ways,
      // do the retry with backoff.

      // XXX May want to change this later to actually reject/terminate with
      // an error in certain of the inner errors (e.g. when we
      // can figure out the server is definitely not coming
      // back, or something else is not recoverable by just waiting).
      // Could also decide after N retries to just quit.

      let backoffMillis = this._backoffTimes.next();

      // XXX may want to fact we'll attempt reconnect in backoffMillis ms.
      setTimeout(() => {
        this._handleClientAndCheck(resolve, reject);
      }, backoffMillis);
    }
  );
};

/**
 * Create a promise that will only be fulfilled when either
 * we correctly get capabilities back or we get an 'error' or 'end'
 * callback, indicating a problem. The caller _handleClientAndCheck
 * then deals with providing a retry and backoff mechanism.
 */
WatchmanClient.prototype._createClientAndCheck = function() {
  return new Promise((resolve, reject) => {
    let client;

    try {
      client = new watchman.Client(
        this._watchmanBinaryPath
          ? { watchmanBinaryPath: this._watchmanBinaryPath }
          : {}
      );
    } catch (error) {
      // if we're here, either the binary path is bad or something
      // else really bad happened. The client doesn't even attempt
      // to connect until we send it a command, though.
      reject(error);
      return;
    }

    client.on('error', error => {
      client.removeAllListeners();
      reject(error);
    });

    client.on('end', () => {
      client.removeAllListeners();
      reject(new Error('Disconnected during client capabilities check'));
    });

    client.capabilityCheck(
      { optional: ['wildmatch', 'relative_root'] },
      (error, resp) => {
        try {
          client.removeAllListeners();

          if (error) {
            reject(error);
          } else {
            resolve({ resp, client });
          }
        } catch (err) {
          // In case we get something weird in the block using 'resp'.
          // XXX We could also just remove the try/catch if we believe
          // the resp stuff should always work, but just in case...
          reject(err);
        }
      }
    );
  });
};

/**
 * Clear out local state at the beginning and if we end up
 * getting disconnected and try to reconnect.
 */
WatchmanClient.prototype._clearLocalVars = function() {
  if (this._client) {
    this._client.removeAllListeners();
    this._client.end();
  }

  this._client = null;
  this._clientPromise = null;
  this._wildmatch = false;
  this._relative_root = false;
  this._subscriptionId = 1;
  this._watcherMap = Object.create(null);

  // Note that we do not clear _clientListeners or _watchmanBinaryPath.
};

WatchmanClient.prototype._genSubscription = function() {
  let val = 'sane_' + this._subscriptionId++;
  return val;
};

/**
 * Create a new watcherInfo entry for the given watchmanWatcher and
 * initialize it.
 */
WatchmanClient.prototype._createWatcherInfo = function(watchmanWatcher) {
  let watcherInfo = {
    subscription: this._genSubscription(),
    watchmanWatcher: watchmanWatcher,
    root: null, // set during 'watch' or 'watch-project'
    relativePath: null, // same
    since: null, // set during 'clock'
    options: null, // created and set during 'subscribe'.
  };

  this._watcherMap[watcherInfo.subscription] = watcherInfo;

  return watcherInfo;
};

/**
 * Find an existing watcherInfo instance.
 */
WatchmanClient.prototype._getWatcherInfo = function(subscription) {
  return this._watcherMap[subscription];
};

/**
 * Given a watchmanWatcher and a root, issue the correct 'watch'
 * or 'watch-project' command and handle it with the callback.
 * Because we're operating in 'sane', we'll keep the results
 * of the 'watch' or 'watch-project' here.
 */
WatchmanClient.prototype._watch = function(subscription, root) {
  return new Promise((resolve, reject) => {
    let watcherInfo = this._getWatcherInfo(subscription);

    if (this._relative_root) {
      this._client.command(['watch-project', root], (error, resp) => {
        if (error) {
          reject(error);
        } else {
          watcherInfo.root = resp.watch;
          watcherInfo.relativePath = resp.relative_path
            ? resp.relative_path
            : '';
          resolve(resp);
        }
      });
    } else {
      this._client.command(['watch', root], (error, resp) => {
        if (error) {
          reject(error);
        } else {
          watcherInfo.root = root;
          watcherInfo.relativePath = '';
          resolve(resp);
        }
      });
    }
  });
};

/**
 * Issue the 'clock' command to get the time value for use with the 'since'
 * option during 'subscribe'.
 */
WatchmanClient.prototype._clock = function(subscription) {
  return new Promise((resolve, reject) => {
    let watcherInfo = this._getWatcherInfo(subscription);

    this._client.command(['clock', watcherInfo.root], (error, resp) => {
      if (error) {
        reject(error);
      } else {
        watcherInfo.since = resp.clock;
        resolve(resp);
      }
    });
  });
};

/**
 * Do the internal handling of calling the watchman.Client for
 * a subscription.
 */
WatchmanClient.prototype._subscribe = function(subscription) {
  return new Promise((resolve, reject) => {
    let watcherInfo = this._getWatcherInfo(subscription);

    // create the 'bare' options w/o 'since' or relative_root.
    // Store in watcherInfo for later use if we need to reset
    // things after an 'end' caught here.
    let options = watcherInfo.watchmanWatcher.createOptions();
    watcherInfo.options = options;

    // Dup the options object so we can add 'relative_root' and 'since'
    // and leave the original options object alone. We'll do this again
    // later if we need to resubscribe after 'end' and reconnect.
    options = Object.assign({}, options);

    if (this._relative_root) {
      options.relative_root = watcherInfo.relativePath;
    }

    options.since = watcherInfo.since;

    this._client.command(
      ['subscribe', watcherInfo.root, subscription, options],
      (error, resp) => {
        if (error) {
          reject(error);
        } else {
          resolve(resp);
        }
      }
    );
  });
};

/**
 * Handle the 'subscription' (file change) event, by calling the
 * handler on the relevant WatchmanWatcher.
 */
WatchmanClient.prototype._onSubscription = function(resp) {
  let watcherInfo = this._getWatcherInfo(resp.subscription);

  if (watcherInfo) {
    // we're assuming the watchmanWatcher does not throw during
    // handling of the change event.
    watcherInfo.watchmanWatcher.handleChangeEvent(resp);
  } else {
    // Note it in the log, but otherwise ignore it
    console.error(
      "WatchmanClient error - received 'subscription' event " +
        "for non-existent subscription '" +
        resp.subscription +
        "'"
    );
  }
};

/**
 * Handle the 'error' event by forwarding to the
 * handler on all WatchmanWatchers (errors are generally during processing
 * a particular command, but it's not given which command that was, or
 * which subscription it belonged to).
 */
WatchmanClient.prototype._onError = function(error) {
  values(this._watcherMap).forEach(watcherInfo =>
    watcherInfo.watchmanWatcher.handleErrorEvent(error)
  );
};

/**
 * Handle the 'end' event by creating a new watchman.Client and
 * attempting to resubscribe all the existing subscriptions, but
 * without notifying the WatchmanWatchers about it. They should
 * not be aware the connection was lost and recreated.
 * If something goes wrong during any part of the reconnect/setup,
 * call the error handler on each existing WatchmanWatcher.
 */
WatchmanClient.prototype._onEnd = function() {
  console.warn(
    '[sane.WatchmanClient] Warning: Lost connection to watchman, reconnecting..'
  );

  // Hold the old watcher map so we use it to recreate all subscriptions.
  let oldWatcherInfos = values(this._watcherMap);

  this._clearLocalVars();

  this._setupClient().then(
    () => {
      let promises = oldWatcherInfos.map(watcherInfo =>
        this.subscribe(
          watcherInfo.watchmanWatcher,
          watcherInfo.watchmanWatcher.root
        )
      );
      Promise.all(promises).then(
        () => {
          console.log('[sane.WatchmanClient]: Reconnected to watchman');
        },
        error => {
          console.error(
            '[sane.WatchmanClient]: Reconnected to watchman, but failed to ' +
              'reestablish at least one subscription, cannot continue'
          );
          console.error(error);
          oldWatcherInfos.forEach(watcherInfo =>
            watcherInfo.watchmanWatcher.handleErrorEvent(error)
          );
          // XXX not sure whether to clear all _watcherMap instances here,
          // but basically this client is inconsistent now, since at least one
          // subscribe failed.
        }
      );
    },
    error => {
      console.error(
        '[sane.WatchmanClient]: Lost connection to watchman, ' +
          'reconnect failed, cannot continue'
      );
      console.error(error);
      oldWatcherInfos.forEach(watcherInfo =>
        watcherInfo.watchmanWatcher.handleErrorEvent(error)
      );
    }
  );
};

module.exports = {
  /**
   * Create/retrieve an instance of the WatchmanClient. See the header comment
   * about the map of client instances, one per watchmanPath.
   * Export the getInstance method by itself so the callers cannot do anything until
   * they get a real WatchmanClient instance here.
   */
  getInstance: function(watchmanBinaryPath) {
    let clientMap = WatchmanClient.prototype._clientMap;

    if (!clientMap) {
      clientMap = Object.create(null);
      WatchmanClient.prototype._clientMap = clientMap;
    }

    if (watchmanBinaryPath == undefined || watchmanBinaryPath === null) {
      watchmanBinaryPath = '';
    }

    let watchmanClient = clientMap[watchmanBinaryPath];

    if (!watchmanClient) {
      watchmanClient = new WatchmanClient(watchmanBinaryPath);
      clientMap[watchmanBinaryPath] = watchmanClient;
    }

    return watchmanClient;
  },
};
