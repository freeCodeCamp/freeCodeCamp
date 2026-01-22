---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Write a program that generates an array of integers from 1 to 100 (inclusive). But:

<ul>
    <li>for multiples of 3, add <code>"Fizz"</code> to the array instead of the number</li>
    <li>for multiples of 5, add <code>"Buzz"</code> to the array instead of the number</li>
    <li>for multiples of 3 and 5, add <code>"FizzBuzz"</code> to the array instead of the number</li>
</ul>

# --instructions--

Your program should return an array containing the results based on the rules above.

# --hints--

`fizzBuzz` should be a function.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` should return an Array.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

Numbers divisible by only 3 should return `"Fizz"`.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

Numbers divisible by only 5 should return `"Buzz"`.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

Numbers divisible by both 3 and 5 should return `"FizzBuzz"`.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

Numbers not divisible by either 3 or 5 should return the number itself.

```js
assert.equal(fizzBuzz()[12], 13);
```

# --seed--

## --seed-contents--

```js
function fizzBuzz() {

}
```

# --solutions--

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
