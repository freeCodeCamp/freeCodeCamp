import validate from './validate.js';

function version(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

export default version;