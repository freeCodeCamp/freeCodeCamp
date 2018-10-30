import {createFrame, extend, toString} from './utils';
import Exception from './exception';
import {registerDefaultHelpers} from './helpers';
import {registerDefaultDecorators} from './decorators';
import logger from './logger';

export const VERSION = '4.0.5';
export const COMPILER_REVISION = 7;

export const REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

const objectType = '[object Object]';

export function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  registerDefaultHelpers(this);
  registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: logger.log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, partial) {
    if (toString.call(name) === objectType) {
      extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new Exception(`Attempting to register a partial called "${name}" as undefined`);
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  },

  registerDecorator: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple decorators'); }
      extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function(name) {
    delete this.decorators[name];
  }
};

export let log = logger.log;

export {createFrame, logger};
