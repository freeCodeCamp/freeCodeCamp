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
<blockquote>var voxel = {x: 3.6, y: 7.4, z: 6.54 };<br>var x = voxel.x; // x = 3.6<br>var y = voxel.y; // y = 7.4<br>var z = voxel.z; // z = 6.54</blockquote>
Here's the same assignment statement with ES6 destructuring syntax:
<blockquote>const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54</blockquote>
If instead you want to store the values of <code>voxel.x</code> into <code>a</code>, <code>voxel.y</code> into <code>b</code>, and <code>voxel.z</code> into <code>c</code>, you have that freedom as well.
<blockquote>const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54</blockquote>
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
    testString: 'assert(getTempOfTmrw(AVG_TEMPERATURES) === 79, "<code>getTempOfTmrw(AVG_TEMPERATURES)</code> should be <code>79</code>");'
  - text: destructuring with reassignment was used
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*tempOfTomorrow\s*}\s*=\s*avgTemperatures/g),"destructuring with reassignment was used");'

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
