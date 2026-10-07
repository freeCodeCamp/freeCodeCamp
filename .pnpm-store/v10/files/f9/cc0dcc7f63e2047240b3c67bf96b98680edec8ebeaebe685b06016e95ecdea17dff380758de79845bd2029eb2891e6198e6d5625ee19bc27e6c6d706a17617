'use strict';

function valToNumber(v) {
  if (typeof v === 'number') {
    return v;
  } else if (typeof v === 'string') {
    return parseFloat(v);
  } else if (Array.isArray(v)) {
    return v.map(valToNumber);
  }

  throw new Error(
    'The value should be a number, a parsable string or an array of those.'
  );
}

module.exports = valToNumber;
