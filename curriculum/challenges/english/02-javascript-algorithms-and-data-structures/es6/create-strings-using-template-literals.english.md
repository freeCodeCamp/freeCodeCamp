---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
---

## Description
<section id='description'>
A new feature of ES6 is the <dfn>template literal</dfn>. This is a special type of string that makes creating complex strings easier.
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
Consider the code below:
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Zodiac Hasbro",<br>&nbsp;&nbsp;age: 56<br>};<br><br>// Template literal with multi-line and string interpolation<br>const greeting = `Hello, my name is ${person.name}!<br>I am ${person.age} years old.`;<br><br>console.log(greeting); // prints<br>// Hello, my name is Zodiac Hasbro!<br>// I am 56 years old.<br></blockquote>
A lot of things happened there.
Firstly, the example uses backticks (<code>`</code>), not quotes (<code>'</code> or <code>"</code>), to wrap the string.
Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting <code>\n</code> within strings.
The <code>${variable}</code> syntax used above is a placeholder. Basically, you won't have to use concatenation with the <code>+</code> operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with <code>${</code> and <code>}</code>. Similarly, you can include other expressions in your string literal, for example <code>${a + b}</code>.
This new way of creating strings gives you more flexibility to create robust strings.
</section>

## Instructions
<section id='instructions'>
Use template literal syntax with backticks to display each entry of the <code>result</code> object's <code>failure</code> array. Each entry should be wrapped inside an <code>li</code> element with the class attribute <code>text-warning</code>, and listed within the <code>resultDisplayArray</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code> is an array containing <code>result failure</code> messages.
    testString: assert(typeof makeList(result.failure) === 'object' && resultDisplayArray.length === 3, '<code>resultDisplayArray</code> is a list containing <code>result failure</code> messages.');
  - text: <code>resultDisplayArray</code> is the desired output.
    testString: assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class='text-warning'>${result.failure[i]}</li>`), '<code>resultDisplayArray</code> is the desired output.');
  - text: Template strings were used
    testString: getUserInput => assert(getUserInput('index').match(/`.*`/g), 'Template strings were not used');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
