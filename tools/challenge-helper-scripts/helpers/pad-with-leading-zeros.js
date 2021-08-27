// Prepends zero's to the given value until length is equal to 3:
// '1' -> '001', '12' -> '012', ...
// Note: always want file step numbers 3 digits
function padWithLeadingZeros(value) {
  if (!(typeof value === 'number' || typeof value === 'string')) {
    throw `${value} should be of type number or string`;
  }

  const newValue = '' + value;

  if (newValue.length > 3) {
    throw `${newValue} should be less than 4 characters`;
  }

  return newValue.padStart(3, '0');
}

exports.padWithLeadingZeros = padWithLeadingZeros;
