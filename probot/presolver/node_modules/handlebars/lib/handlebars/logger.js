import {indexOf} from './utils';

let logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function(level) {
    if (typeof level === 'string') {
      let levelMap = indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function(level, ...message) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      let method = logger.methodMap[level];
      if (!console[method]) {   // eslint-disable-line no-console
        method = 'log';
      }
      console[method](...message);    // eslint-disable-line no-console
    }
  }
};

export default logger;
