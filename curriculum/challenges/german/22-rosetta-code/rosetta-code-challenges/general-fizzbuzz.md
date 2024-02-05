---
id: 5a23c84252665b21eecc7e78
title: Verallgemeinertes FizzBuzz
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Write a generalized version of <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a> that works for any list of factors, along with their words.

Dies ist im Grunde eine "Fizzbuzz"-Implementierung, bei der dem Benutzer die Spielregeln vorgegeben werden. Erstelle eine Funktion, um dies zu implementieren. Die Funktion sollte zwei Parameter haben.

Das erste wird ein Bereich mit den FizzBuzz-Regeln sein. Zum Beispiel: `[ [3, "Fizz"] , [5, "Buzz"] ]`.

Dies bedeutet, dass `Fizz` sollte gedruckt werden, wenn die Zahl ein Vielfaches von 3 ist und `Buzz`, wenn sie ein Vielfaches von 5 ist. Wenn es ein Vielfaches von beiden ist, sollten die Zeichenketten entsprechend der Auflistung angegebenen Reihenfolge zusammengesetzt werden. In diesem Fall, `FizzBuzz`, wenn die Zahl ein Vielfaches von 3 und 5 ist.

Der zweite Parameter ist die Zahl, für die die Funktion wie oben beschrieben eine Zeichenkette zurückgeben soll.

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
