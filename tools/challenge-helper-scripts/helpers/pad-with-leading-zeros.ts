// Prepends zero's to the given value until length is equal to 3:
// '1' -> '001', '12' -> '012', ...
// Note: always want file step numbers 3 digits
function padWithLeadingZeros(value: number): string {
  const valueString = value.toString();

  if (valueString.length > 3) {
    throw `${valueString} should be less than 4 characters`;
  }

  return valueString.padStart(3, '0');
}

export { padWithLeadingZeros };
