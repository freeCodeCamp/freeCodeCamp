---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
---

## Description
<section id='description'>
In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
<code>MYVAR</code> is not the same as <code>MyVar</code> nor <code>myvar</code>. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you <em>do not</em> use this language feature.
<h4>Best Practice</h4>
Write variable names in JavaScript in <dfn>camelCase</dfn>. In <dfn>camelCase</dfn>, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
<strong>Examples:</strong>

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

</section>

## Instructions
<section id='instructions'>
Modify the existing declarations and assignments so their names use <dfn>camelCase</dfn>.<br>Do not create any new variables.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code> should be defined and have a value of <code>10</code>.
    testString: assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
  - text: <code>properCamelCase</code> should be defined and have a value of <code>"A String"</code>.
    testString: assert(typeof properCamelCase !== 'undefined' && properCamelCase === "A String");
  - text: <code>titleCaseOver</code> should be defined and have a value of <code>9000</code>.
    testString: assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
  - text: <code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.
    testString: assert(code.match(/studlyCapVar/g).length === 2);
  - text: <code>properCamelCase</code> should use camelCase in both declaration and assignment sections.
    testString: assert(code.match(/properCamelCase/g).length === 2);
  - text: <code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.
    testString: assert(code.match(/titleCaseOver/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

</div>



</section>

## Solution
<section id='solution'>


```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

</section>
