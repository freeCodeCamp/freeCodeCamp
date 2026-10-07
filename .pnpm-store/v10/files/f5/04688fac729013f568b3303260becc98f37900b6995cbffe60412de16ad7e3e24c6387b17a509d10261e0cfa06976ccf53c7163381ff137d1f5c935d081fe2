// Returns true for `true`, true, positive numbers
// Returns false for `false`, false, 0, negative integers and anything else
export function isTruthy(value) {
  // Return if Boolean
  if (typeof value === `boolean`) return value;

  // Return false if null or undefined
  if (value === undefined || value === null) return false;

  // If the String is true or false
  if (value.toLowerCase() === `true`) return true;
  if (value.toLowerCase() === `false`) return false;

  // Now check if it's a number
  const number = parseInt(value, 10);
  if (isNaN(number)) return false;
  if (number > 0) return true;

  // Default to false
  return false;
}