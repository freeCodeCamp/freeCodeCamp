/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
export default function typeOf(input) {
  var rawObject = Object.prototype.toString.call(input).toLowerCase();
  var typeOfRegex = /\[object (.*)]/g;
  var type = typeOfRegex.exec(rawObject)[1];
  return type;
}