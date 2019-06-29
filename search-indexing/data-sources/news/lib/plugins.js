/**
 * Plugin system
 */

'use strict';

const _ = require('lodash');
const path = require('path');

module.exports = (dirname, plugins) => {
  if (!_.isArray(plugins) || !plugins.length) {
    return () => {};
  }
  plugins = _.filter(
    _.map(plugins, plugin => {
      try {
        const p = require(path.join(dirname, plugin));
        if (!_.isFunction(p)) {
          throw new Error('Plugin must be a function');
        }
        return p;
      } catch (e) {
        console.error(e);
      }
      return null;
    })
  );
  return (record, data) => {
    _.each(plugins, plugin => {
      try {
        plugin(record, data);
      } catch (e) {
        console.error(e);
      }
    });
  };
};
