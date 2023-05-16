---
id: 5a23c84252665b21eecc7e78
title: General FizzBuzz
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Write a generalized version of <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a> that works for any list of factors, along with their words.

Dies ist im Grunde eine "Fizzbuzz"-Implementierung, bei der dem Benutzer die Spielregeln vorgegeben werden. Create a function to implement this. The function should take two parameters.

The first will be an array with the FizzBuzz rules. Zum Beispiel: `[ [3, "Fizz"] , [5, "Buzz"] ]`.

This indicates that `Fizz` should be printed if the number is a multiple of 3 and `Buzz` if it is a multiple of 5. If it is a multiple of both then the strings should be concatenated in the order specified in the array. In this case, `FizzBuzz` if the number is a multiple of 3 and 5.

The second parameter is the number for which the function should return a string as stated above.

# --hints--

`genFizzBuzz` sollte eine Funktion sein.

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` sollte einen String zurückgeben.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` sollte `"Fizz"` zurückgeben.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` sollte `"Buzz"` zurückgeben.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` sollte `"Buzz"` zurückgeben.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` sollte `"13"`zurückgeben.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` sollte `"BuzzFizz"` zurückgeben.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` sollte `"FizzBuzz"` zurückgeben.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` sollte `"FizzBuzzBaxx"` zurückgeben.

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
