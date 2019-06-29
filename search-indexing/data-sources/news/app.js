#!/usr/bin/env node

/**
 * App
 */

'use strict';
const path = require('path');
require('dotenv').config({ path: path.join('../../../.env') });
const argv = require('optimist').argv;
const pack = require('./package.json');
const fs = require('fs');
const u = require('url');
const _ = require('lodash');
const algoliasearch = require('algoliasearch');
const updateNotifier = require('update-notifier');
const chalk = require('chalk');

const processOne = require('./lib/process');
const sitemap = require('./lib/sitemap');
const dns = require('./lib/dns-cache');

let sitemapProcessed = 0;
let sitemapCount = 0;
let urlCount = 0;

const ERROR_EXIT_CODE = 10;
let returnCode = 0;
process.on('exit', r => {
  process.nextTick(() => process.exit(returnCode || r));
});

let configFile = argv.config ? path.resolve(argv.config) : './config.json';
let config = {};
try {
  config = require(configFile);
} catch (ex) {
  config = null;
}

// manually set credentials here since env
// variables don't mix well with json
config.cred.appid = process.env.ALGOLIA_APP_ID;
config.cred.apikey = process.env.ALGOLIA_ADMIN_KEY;

const pkg = require('./package.json');

updateNotifier({ pkg: pack }).notify();

if (!_.isObject(config)) {
  console.error('Invalid configuration');
  process.exit(1);
}
if (!_.isObject(config.cred)) {
  console.error('Invalid credentials');
  process.exit(2);
}
if (!_.isObject(config.index)) {
  console.error('Invalid index configuration');
  process.exit(4);
}
if (!_.isArray(config.sitemaps)) {
  console.error('Invalid sitemaps configuration');
  process.exit(8);
}

// Process map static selectors into their object equivalent
config.selectors = _.map(config.selectors, (selector, key) => {
  if (!_.isObject(selector)) {
    selector = { selector };
  }
  return {
    key,
    attributes: selector.attributes,
    selector: selector.selector,
    limit: selector.limit,
    exclude: config.exclusions && config.exclusions[key]
  };
});

const plugins = require('./lib/plugins')(__dirname, config.plugins);
const pingback = require('./lib/pingback')({ url: config.pingbackUrl });

const client = algoliasearch(config.cred.appid, config.cred.apikey);
const pages = client.initIndex(config.index.name);
const errors = [];

// Welcome
console.log('Welcome to "%s" %s v%s', config.app, pack.name, pack.version);
console.log();
console.log('Loaded "%s" configuration', configFile);
console.log();

// Show info about pingback configuration
if (pingback.ok) {
  console.log('Ping back url configured with: %s', config.pingbackUrl);
  console.log();
}

// Launch sitemap crawling
sitemap(config, (sitemap, urls) => {
  sitemapProcessed++;

  console.log('Parsing Sitemap %s', sitemap.url);

  if (!urls.length) {
    errors.push({
      ok: 'warn',
      message: 'Sitemap ' + sitemap.url + ' does not contain any urls',
      sitemap
    });
    console.log('Sitemap %s does not contain any urls', sitemap.url);
  } else {
    console.log('Sitemap %s contains %d urls', sitemap.url, urls.length);
  }

  const totalCount = urls.length;
  if (_.isArray(config.blacklist)) {
    urls = _.filter(urls, url => {
      return _.every(
        _.map(
          config.blacklist,
          bl => url.url !== bl && u.parse(url.url).path !== bl
        )
      );
    });
    if (totalCount != urls.length) {
      console.log(
        '%s blacklisted %d urls',
        sitemap.url,
        totalCount - urls.length
      );
    }
  }

  sitemapCount += urls.length;

  // All sitemaps have failed
  if (sitemapProcessed === config.sitemaps.length && sitemapCount === 0) {
    console.log('All Sitemaps do not contain any urls');
    process.exit(16);
    // All sitemaps are parsed, kick in the process
  } else if (sitemapProcessed === config.sitemaps.length) {
    processOne.start();
  }

  if (!urls.length) {
    // Current sitemap failed, exit
    return;
  }

  const results = _.map(urls, (url, index) => {
    console.log('Registered ' + url.url);
    const processResults = processOne(
      {
        config,
        url,
        index,
        plugins
      },
      function processOneCallback(error, record) {
        const id = urlCount + 1;
        if (!!error || !record) {
          console.error('%d - Error! %s', id, error.message);
          if (!!error && !error.retry) {
            errors.push(error);
          }
          if ((!!error.pageNotFound || !!error.pageRedirected) && !!record) {
            pages.deleteObject(record.objectID, (error, result) => {
              console.log(
                '%d - Deleted %s:%s (%s)',
                id,
                record.objectID,
                record.lang,
                record.url
              );

              // Ping back delete
              pingbackUrl({
                id,
                result: 'success',
                action: 'delete',
                url: url.url,
                callback: tearDown
              });
            });
          } else if (error.retry) {
            console.error('%d - Retry url %s', id, url.url);
            const retryResult = processOne(
              {
                config,
                url,
                index,
                plugins,
                isRetry: true
              },
              processOneCallback
            );

            if (!retryResult.ok) {
              console.error('%d - Error! %s', id, retryResult.message);
              errors.push(retryResult);
            }
            processOne.resume();
          } else {
            // Ping back delete
            pingbackUrl({
              id,
              result: 'success',
              action: 'delete',
              url: url.url,
              callback: tearDown
            });
          }
          return;
        }

        if (record.action === 'delete') {
          console.error('%d - About to delete! %s', id, record.objectID);
          pages.deleteObject(record.objectID, (error, result) => {
            if (error) {
              console.log();
              if (!!result && !!result.message) {
                console.error('%d - Error! %s', id, result.message);
                errors.push(result);
              }
              if (!!error && !!error.message) {
                console.error('%d - Error! %s', id, error.message);
                errors.push(error);
              }
              // Ping back delete
              pingbackUrl({
                id,
                id,
                result: 'error',
                action: 'delete',
                url: url.url,
                callback: tearDown
              });
            } else {
              console.log(
                '%d - Deleted %s:%s (%s)',
                id,
                record.objectID,
                record.lang,
                record.url
              );
              // Ping back delete
              pingbackUrl({
                id,
                id,
                result: 'success',
                action: 'delete',
                url: url.url,
                callback: tearDown
              });
            }
          });
        } else {
          console.log(
            '%d - About to save! %s:%s (%s)',
            id,
            record.objectID,
            record.lang,
            record.url
          );
          pages.saveObject(record, (error, result) => {
            if (error) {
              console.log();
              if (!!result && !!result.message) {
                console.error('%d - Error! %s', id, result.message);
                errors.push(result);
              }
              if (!!error && !!error.message) {
                console.error('%d - Error! %s', id, error.message);
                errors.push(error);
              }
              console.log();

              // Ping back error
              // Post error to ping back url if configured
              pingbackUrl({
                id: id,
                result: 'error',
                action: 'update',
                url: url.url,
                callback: tearDown
              });
            } else if (record.objectID !== result.objectID) {
              console.log();
              console.error('%d - Error! Object ID mismatch!', id);
              console.log();
              errors.push({
                ok: false,
                message: 'Object ID mismatch!'
              });

              // Ping back error
              pingbackUrl({
                id: id,
                result: 'error',
                action: 'update',
                url: url.url,
                callback: tearDown
              });
            } else {
              console.log(
                '%d - Saved %s:%s (%s)',
                id,
                record.objectID,
                record.lang,
                record.url
              );

              // Ping back saved
              pingbackUrl({
                id: id,
                result: 'success',
                action: 'update',
                url: url.url,
                lastModified: record.http.lastModified,
                callback: tearDown
              });
            }
          });
        }
      }
    );

    if (processResults.ok !== true) {
      errors.push(processResults);
      console.error(processResults.message || 'Error!');
    }
  });

  console.log(
    'Sitemap %s registered %s / %s urls',
    sitemap.url,
    results.length,
    urls.length
  );
});

const pingbackUrl = data => {
  // Process pingBack
  if (pingback.ok) {
    pingback.send(
      {
        result: data.result,
        action: data.action,
        url: data.url,
        lastModified: data.lastModified
      },
      data2 => {
        if (data2.ok) {
          console.log(
            '%d - Ping back executed: %s :%s',
            data.id,
            data.action,
            data.url
          );
        } else {
          console.log('%d - Ping back error: ', data.id);
          if (data2.err) {
            console.dir(data2.err);
          } else {
            console.log(data2.message);
          }
        }
        data.callback();
      }
    );
  } else {
    data.callback();
  }
};

// Configure index
if (_.isObject(config.index.settings)) {
  console.log('Configuring your index %s', config.index.name);
  pages.setSettings(config.index.settings, (error, result) => {
    if (error) {
      console.log();
      if (!!result && !!result.message) {
        console.error('Error! ' + result.message);
      }
      if (!!error && !!error.message) {
        console.error('Error! ' + error.message);
      }
    } else {
      console.log('Configured index properly');
      console.log();
    }
  });
}

const removeOldEntries = () => {
  if (_.isInteger(config.oldentries) && config.oldentries > 0) {
    console.log();
    console.log('Removing old entries...');
    console.log();
    const deleteQuery = {
      numericFilters: [
        'timestamp<' + (new Date().getTime() - config.oldentries)
      ]
    };
    if (config.oldentriesfilters) {
      deleteQuery.filters = config.oldentriesfilters;
    }
    pages.deleteBy(deleteQuery, (error, content) => {
      if (error) {
        console.error(chalk.red('Error deleting entries. ' + error.message));
        return;
      }
      console.log(chalk.green('Deleting old entries done.'));
    });
  }
};

const displayErrorReport = () => {
  console.log();
  if (!errors.length) {
    console.log(chalk.green('No problem were reported during the crawl!'));
  } else {
    console.log(
      chalk.yellow('%d problems occurred during the crawl'),
      errors.length
    );
    _.forEach(errors, e => {
      const isWarn = e.ok === 'warn';
      const fx = isWarn ? 'warn' : 'error';
      const c = isWarn ? chalk.yellow : chalk.red;
      console[fx](c(e.message || e));
      if (!isWarn) {
        returnCode = ERROR_EXIT_CODE;
      }
    });
  }
};

const tearDown = () => {
  urlCount++;
  if (urlCount === sitemapCount) {
    processOne.stop();
    removeOldEntries();
    displayErrorReport();
  } else {
    processOne.resume();
  }
};
