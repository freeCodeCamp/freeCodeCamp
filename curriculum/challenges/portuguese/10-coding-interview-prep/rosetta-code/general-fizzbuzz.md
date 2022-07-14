---
id: 5a23c84252665b21eecc7e78
title: FizzBuzz geral
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Escreva uma versão generalizada do algoritmo <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a>, que funcione para qualquer lista de fatores, juntamente com suas palavras.

Esta é basicamente uma implementação de "fizzbuzz" onde as regras do jogo são fornecidas ao utilizador. Crie uma função para implementar isso. A função deve receber dois parâmetros.

O primeiro será um array com as regras para FizzBuzz. Por exemplo: `[ [3, "Fizz"] , [5, "Buzz"] ]`.

Isso indica que `Fizz` deve ser impresso se o número for múltiplo de 3 e `Buzz` deve ser impresso se for múltiplo de 5. Se for um múltiplo de ambos, as strings devem ser concatenadas na ordem especificada no array. Neste caso, `FizzBuzz` se o número for um múltiplo de 3 e 5.

O segundo parâmetro é o número para o qual a função deve retornar uma string, conforme indicado acima.

# --hints--

`genFizzBuzz` deve ser uma função.

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` deve retornar uma string.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` deve retornar `"Fizz"`.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` deve retornar `"Buzz"`.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` deve retornar `"Buzz"`.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` deve retornar `"13"`.

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` deve retornar `"BuzzFizz"`.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` deve retornar `"FizzBuzz"`.

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` deve retornar `"FizzBuzzBaxx"`.

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
