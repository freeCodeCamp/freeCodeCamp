import getIterator from 'es-get-iterator';
import Module from 'module';

const require = Module.createRequire(import.meta.url);
const id = require.resolve('../node');
const mod = new Module(id);
mod.exports = getIterator;
require.cache[id] = mod;

require('./');
