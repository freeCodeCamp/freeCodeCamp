// Safe spread operator for empty slots
var test = [];
test.length = 1;

// Fix for older Node versions
var safeCopy = [...test.map(x => x)];

console.log("0 in test:", 0 in test);         // false
console.log("0 in safeCopy:", 0 in safeCopy); // true

