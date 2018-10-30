import * as base from './handlebars/base';

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
import SafeString from './handlebars/safe-string';
import Exception from './handlebars/exception';
import * as Utils from './handlebars/utils';
import * as runtime from './handlebars/runtime';

import noConflict from './handlebars/no-conflict';

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  let hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

let inst = create();
inst.create = create;

noConflict(inst);

inst['default'] = inst;

export default inst;
