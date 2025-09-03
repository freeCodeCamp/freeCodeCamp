---
id: 5a23c84252665b21eecc7e78
title: General FizzBuzz
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Write a generalized version of <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a> that works for any list of factors, along with their words.

This is basically a "fizzbuzz" implementation where the rules of the game are supplied to the user. Create a function to implement this. The function should take two parameters.

The first will be an array with the FizzBuzz rules. For example: `[ [3, "Fizz"] , [5, "Buzz"] ]`.

This indicates that `Fizz` should be printed if the number is a multiple of 3 and `Buzz` if it is a multiple of 5. If it is a multiple of both then the strings should be concatenated in the order specified in the array. In this case, `FizzBuzz` if the number is a multiple of 3 and 5.

The second parameter is the number for which the function should return a string as stated above.

# --hints--

`genFizzBuzz` should be a function.

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` should return a string.

```js
assert(
  typeof genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ) == 'string'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` should return `"Fizz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ),
  'Fizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` should return `"Buzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    10
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` should return `"Buzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    12
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` should return `"13"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    13
  ),
  '13'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` should return `"BuzzFizz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    15
  ),
  'BuzzFizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` should return `"FizzBuzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    15
  ),
  'FizzBuzz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` should return `"FizzBuzzBaxx"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz'],
      [7, 'Baxx']
    ],
    105
  ),
  'FizzBuzzBaxx'
);
```

# --seed--

## --seed-contents--

```js
function genFizzBuzz(rules, num) {

}
```

# --solutions--

```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}
```
