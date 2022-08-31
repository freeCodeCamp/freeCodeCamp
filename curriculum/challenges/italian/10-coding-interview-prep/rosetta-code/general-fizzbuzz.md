---
id: 5a23c84252665b21eecc7e78
title: FizzBuzz generico
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Scrivi una versione generalizzata di <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">Fizzbuzz</a> che funziona per ogni lista di fattori, assieme alle loro parole.

Questa è in pratica una implementazione di "fizzbuzz" dove le regole del gioco sono date all'utente. Crea una funzione per implementarlo. La funzione dovrebbe accettare due parametri.

Il primo è un array con le regole di FizzBuzz. Per esempio `[ [3, "Fizz"] , [5, "Buzz"] ]`.

Questo indica che `Fizz` dovrebbe essere scritto se il numero è un multiplo di 3 e `Buzz` se è un multiplo di 5. Se è un multiplo di entrambi allora le stringhe dovrebbero essere concatenate nell'ordine specificato nell'array. In questo caso, `FizzBuzz` se il numero è un multiplo di 3 e 5.

Il secondo parametro è il numero per cui la funzione dovrebbe restituire una stringa come detto sopra.

# --hints--

`genFizzBuzz` dovrebbe essere una funzione.

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` dovrebbe restituire una stringa.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` dovrebbe restituire `"Fizz"`.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` dovrebbe restituire `"Buzz"`.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` dovrebbe restituire `"Buzz"`.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` dovrebbe restituire `"13"`.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` dovrebbe restituire `"BuzzFizz"`.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` dovrebbe restituire `"FizzBuzz"`.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` dovrebbe restituire `"FizzBuzzBaxx"`.

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
