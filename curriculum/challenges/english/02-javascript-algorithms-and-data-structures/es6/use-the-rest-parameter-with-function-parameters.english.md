---
id: 587d7b88367417b2b2512b47
title: Use the Rest Parameter with Function Parameters
challengeType: 1
isHidden: false
forumTopicId: 301221
---

## Description
<section id='description'>
In order to help us create more flexible functions, ES6 introduces the <dfn>rest parameter</dfn> for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
Check out this code:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

The rest parameter eliminates the need to check the <code>args</code> array and allows us to apply <code>map()</code>, <code>filter()</code> and <code>reduce()</code> on the parameters array.
</section>

## Instructions
<section id='instructions'>
Modify the function <code>sum</code> using the rest parameter in such a way that the function <code>sum</code> is able to take any number of arguments and return their sum.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The result of <code>sum(0,1,2)</code> should be 3
    testString: assert(sum(0,1,2) === 3);
  - text: The result of <code>sum(1,2,3,4)</code> should be 10
    testString: assert(sum(1,2,3,4) === 10);
  - text: The result of <code>sum(5)</code> should be 5
    testString: assert(sum(5) === 5);
  - text: The result of <code>sum()</code> should be 0
    testString: assert(sum() === 0);
  - text: The <code>sum</code> function should use the <code>...</code> rest parameter on the <code>args</code> parameter.
    testString: assert(code.replace(/\s/g,'').match(/sum=\(\.\.\.args\)=>/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```

</section>
