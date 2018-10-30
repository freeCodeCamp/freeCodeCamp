let platform;

/* global self */
if (typeof self === 'object') {
  platform = self;

/* global global */
} else if (typeof global === 'object') {
  platform = global;
} else {
  throw new Error('no global: `self` or `global` found');
}

export default platform;
