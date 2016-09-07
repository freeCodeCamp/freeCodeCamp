/**
 * MDN Links
 *
 * These links are for Bonfires. Each key/value pair is used to render a Bonfire with appropriate links.
 * The text of the key is what the link text will be, e.g. <a href="https://developer ...">Global Array Object</a>
 * General convention is to use the page title of the MDN reference page.
 *
 **/

var links = {
  // ========= NON MDN REFS
  "Currying": "https://leanpub.com/javascript-allonge/read#pabc",
  "Smallest Common Multiple": "https://www.mathsisfun.com/least-common-multiple.html",
  "Permutations": "https://www.mathsisfun.com/combinatorics/combinations-permutations.html",
  "HTML Entities": "http://dev.w3.org/html5/html-author/charref",
  "Symmetric Difference": "https://www.youtube.com/watch?v=PxffSUQRkG4",
  "Roman Numerals": "http://www.mathsisfun.com/roman-numerals.html",
  "Floating Point Guide": "http://floating-point-gui.de",

  // ========= GLOBAL OBJECTS
  "Global Array Object": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  "Global Object": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
  "Global String Object": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
  "Boolean Objects": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
  "RegExp": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
  "Global Function Object": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
  "Arguments object": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments",
  "Closures": "https://developer.mozilla.org/en-US/docs/" +
  "Web/JavaScript/Closures",

  // ========= GLOBAL OBJECT METHODS
  "parseInt()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt",


  // =========  PROPERTIES/MISC
  "String.length": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length",


  // ========== OBJECT METHODS
  "Object.getOwnPropertyNames()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",
  "Object.keys()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
  "Object.prototype.hasOwnProperty()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty",


  // ======== STRING METHODS
  "String.prototype.charAt()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
  "String.prototype.charCodeAt()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt",
  "String.prototype.concat()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",
  "String.prototype.indexOf()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
  "String.fromCharCode()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode",
  "String.prototype.lastIndexOf()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf",
  "String.prototype.match()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
  "String.prototype.replace()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
  "String.prototype.slice()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
  "String.prototype.split()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
  "String.prototype.substring()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring",
  "String.prototype.substr()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr",
  "String.prototype.toLowerCase()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
  "String.prototype.toString()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString",
  "String.prototype.toUpperCase()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",

  // ======== ARRAY METHODS
  "Array.prototype.concat()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
  "Array.prototype.every()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
  "Array.prototype.filter()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
  "Array.prototype.forEach()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
  "Array.prototype.indexOf()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
  "Array.isArray()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
  "Array.prototype.join()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
  "Array.prototype.lastIndexOf()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
  "Array.prototype.map()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
  "Array.prototype.pop()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
  "Array.prototype.push()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
  "Array.prototype.reduce()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
  "Array.prototype.reverse()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
  "Array.prototype.shift()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
  "Array.prototype.slice()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
  "Array.prototype.some()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
  "Array.prototype.sort()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
  "Array.prototype.splice()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
  "Array.prototype.toString()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",

  // ======== STATEMENTS AND DECLARATIONS
  "Switch Statement": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch",

  // ======== MATH METHODS
  "Math.max()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max",
  "Math.min()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min",
  "Math.pow()": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
  "Remainder": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder",

  // ======== GENERAL JAVASCRIPT REFERENCES
  "Arithmetic Operators": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators",
  "Comparison Operators": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators",
  "Details of the Object Model": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
  "For Loops": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
  "Truthy": "https://developer.mozilla.org/en-US/docs/Glossary/Truthy",
  "Falsy": "https://developer.mozilla.org/en-US/docs/Glossary/Falsy"
};

module.exports = links;
