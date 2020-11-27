---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
forumTopicId: 301202
---

## Description

<section id='description'>

One of the biggest problems with declaring variables with the `var` keyword is that you can overwrite variable declarations without an error.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
```

As you can see in the code above, the `camper` variable is originally declared as `James` and then overridden to be `David`. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.  
A new keyword called `let` was introduced in ES6 to solve this potential issue with the `var` keyword. If you were to replace `var` with `let` in the variable declarations of the code above, the result would be an error.

```js
let camper = 'James';
let camper = 'David'; // throws an error
```

This error can be seen in the console of your browser. So unlike `var`, when using `let`, a variable with the same name can only be declared once. Note the `"use strict"`. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

```js
"use strict";
x = 3.14; // throws an error because x is not declared
```

</section>

## Instructions

<section id='instructions'>

Update the code so it only uses the `let` keyword.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>var</code> should not exist in the code.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>catName</code> should be <code>Oliver</code>.
    testString: assert(catName === "Oliver");
  - text: <code>quote</code> should be <code>"Oliver says Meow!"</code>
    testString: assert(quote === "Oliver says Meow!");

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

</div>

</section>

## Solution

<section id='solution'>

```js
let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();
```

</section>
