---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

One of the biggest problems with declaring variables with the `var` keyword is that you can overwrite variable declarations without an error.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

Here the console will display the string `David`.

As you can see in the code above, the `camper` variable is originally declared as `James` and then overridden to be `David`. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.  
A new keyword called `let` was introduced in ES6 to solve this potential issue with the `var` keyword. If you were to replace `var` with `let` in the variable declarations of the code above, the result would be an error.

```js
let camper = 'James';
let camper = 'David';
```

This error can be seen in the console of your browser. So unlike `var`, when using `let`, a variable with the same name can only be declared once. Note the `"use strict"`. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

```js
"use strict";
x = 3.14;
```

This will display an error that `x is not defined`.

# --instructions--

Update the code so it only uses the `let` keyword.

# --hints--

`var` should not exist in the code.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` should be the string `Oliver`.

```js
assert(catName === 'Oliver');
```

`quote` should be the string `Oliver says Meow!`

```js
assert(quote === 'Oliver says Meow!');
```

# --seed--

## --seed-contents--

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

# --solutions--

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
