---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
---

## Description
<section id='description'>
We saw earlier how spread operator can effectively spread, or unpack, the contents of the array.
We can do something similar with objects as well. <dfn>Destructuring assignment</dfn> is special syntax for neatly assigning values taken directly from an object to variables.
Consider the following ES5 code:

```js
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```

Here's the same assignment statement with ES6 destructuring syntax:

```js
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

If instead you want to store the values of <code>voxel.x</code> into <code>a</code>, <code>voxel.y</code> into <code>b</code>, and <code>voxel.z</code> into <code>c</code>, you have that freedom as well.

```js
const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54
```

You may read it as "get the field <code>x</code> and copy the value into <code>a</code>," and so on.
</section>

## Instructions
<section id='instructions'>
Use destructuring to obtain the average temperature for tomorrow from the input object <code>AVG_TEMPERATURES</code>, and assign value with key <code>tomorrow</code> to <code>tempOfTomorrow</code> in line.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getTempOfTmrw(AVG_TEMPERATURES)</code> should be <code>79</code>
    testString: assert(getTempOfTmrw(AVG_TEMPERATURES) === 79);
  - text: destructuring with reassignment was used
    testString: getUserInput => assert(code.match(/{[\S\s]*\w+\s*:[\S\s]*\w+\s*}\s*=\s*(avgTemperatures|AVG_TEMPERATURES)/));
  - text: The key <code>tomorrow</code> was destructured from <code>AVG_TEMPERATURES</code>
    testString: getUserInput => assert(code.match(/{[\S\s]*tomorrow\s*:\s*tempOfTomorrow[\S\s]*}\s*=\s*(avgTemperatures|AVG_TEMPERATURES)/)); 

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
```

</div>



</section>

## Solution
<section id='solution'>

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow:tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
```
</section>
