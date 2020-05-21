---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
isHidden: false
forumTopicId: 301200
---

## Description
<section id='description'>
A new feature of ES6 is the <dfn>template literal</dfn>. This is a special type of string that makes creating complex strings easier.
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
Consider the code below:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

```

A lot of things happened there.
Firstly, the example uses backticks (<code>`</code>), not quotes (<code>'</code> or <code>"</code>), to wrap the string.
Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting <code>\n</code> within strings.
The <code>${variable}</code> syntax used above is a placeholder. Basically, you won't have to use concatenation with the <code>+</code> operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with <code>${</code> and <code>}</code>. Similarly, you can include other expressions in your string literal, for example <code>${a + b}</code>.
This new way of creating strings gives you more flexibility to create robust strings.
</section>

## Instructions
<section id='instructions'>
Use template literal syntax with backticks to display each entry of the <code>result</code> object's <code>failure</code> array. Each entry should be wrapped inside an <code>li</code> element with the class attribute <code>text-warning</code>, and listed within the <code>resultDisplayArray</code>.
Use an iterator method (any kind of loop) to get the desired output (shown below).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code> should be an array containing <code>result failure</code> messages.
    testString: assert(typeof makeList(result.failure) === 'object' && resultDisplayArray.length === 3);
  - text: <code>resultDisplayArray</code> should be equal to the specified output.
    testString: assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class='text-warning'>${result.failure[i]}</li>`));
  - text: Template strings and expression interpolation should be used.
    testString: getUserInput => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
  - text: An iterator should be used.
    testString: getUserInput => assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
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

  // Only change code below this line
  const resultDisplayArray = null;
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  
  const resultDisplayArray = arr.map(val => `<li class="text-warning">${val}</li>`);
  
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
```

</section>
