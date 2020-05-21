---
title: FizzBuzz
id: 5e9ddb06ec35240f39657419
challengeType: 5
isHidden: false
forumTopicId: 385370
---

## Description
<section id='description'>

Write a program that generates an array of integers from 1 to 100 (inclusive). But:
<ul>
    <li>for multiples of 3, add <code>"Fizz"</code> to the array instead of the number</li>
    <li>for multiples of 5, add <code>"Buzz"</code> to the array instead of the number</li>
    <li>for multiples of 3 and 5, add <code>"FizzBuzz"</code> to the array instead of the number</li>
</ul>

</section>
## Instructions
<section id='instructions'>

Your program should return an array containing the results based on the rules above.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fizzBuzz</code> should be a function.
    testString: assert(typeof fizzBuzz=='function');
  - text: <code>fizzBuzz()</code> should return an Array.
    testString: assert(Array.isArray(fizzBuzz())==true);
  - text: Numbers divisible by only 3 should return <code>"Fizz"</code>.
    testString: assert.equal(fizzBuzz()[2], "Fizz");
  - text: Numbers divisible by only 5 should return <code>"Buzz"</code>.
    testString: assert.equal(fizzBuzz()[99], "Buzz");
  - text: Numbers divisible by both 3 and 5 should return <code>"FizzBuzz"</code>.
    testString: assert.equal(fizzBuzz()[89], "FizzBuzz");
  - text: Numbers not divisible by either 3 or 5 should return the number itself.
    testString: assert.equal(fizzBuzz()[12], 13);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fizzBuzz() {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function fizzBuzz() {
    let res=[];
    for (let i =1; i < 101; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
            res.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            res.push("Fizz");
        }
        else if (i % 5 === 0) {
            res.push("Buzz");
        } 
        else {
            res.push(i);
        }
    }
    return res;
}
```

</section>
