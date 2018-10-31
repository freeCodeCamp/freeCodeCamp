---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
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
    testString: 'assert(typeof studlyCapVar !== "undefined" && studlyCapVar === 10, "<code>studlyCapVar</code> is defined and has a value of <code>10</code>");'
  - text: ''
    testString: 'assert(typeof properCamelCase !== "undefined" && properCamelCase === "A String", "<code>properCamelCase</code> is defined and has a value of <code>"A String"</code>");'
  - text: ''
    testString: 'assert(typeof titleCaseOver !== "undefined" && titleCaseOver === 9000, "<code>titleCaseOver</code> is defined and has a value of <code>9000</code>");'
  - text: ''
    testString: 'assert(code.match(/studlyCapVar/g).length === 2, "<code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.");'
  - text: ''
    testString: 'assert(code.match(/properCamelCase/g).length === 2, "<code>properCamelCase</code> should use camelCase in both declaration and assignment sections.");'
  - text: ''
    testString: 'assert(code.match(/titleCaseOver/g).length === 2, "<code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
