---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof Thermostat === "function" && typeof Thermostat.constructor === "function","<code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: ''
    testString: 'assert(() => {const t = new Thermostat(32); return typeof t === "object" && t.temperature === 0;}, "<code>Thermostat</code> can be instantiated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
