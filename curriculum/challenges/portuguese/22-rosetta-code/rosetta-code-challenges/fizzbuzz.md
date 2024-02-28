---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Escreva um programa que gere um array de números inteiros de 1 a 100 (inclusive). Mas:

<ul>
    <li>para múltiplos de 3, adicione <code>"Fizz"</code> no array no lugar do número</li>
    <li>para múltiplos de 5, adicione <code>"Buzz"</code> no array no lugar do número</li>
    <li>para múltiplos de 3 e 5, adicione <code>"FizzBuzz"</code> no array no lugar do número</li>
</ul>

# --instructions--

O programa deve retornar um array contendo os resultados com base nas regras acima.

# --hints--

`fizzBuzz` deve ser uma função.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` deve retornar um array.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

Números divisíveis apenas por 3 devem retornar `"Fizz"`.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

Números divisíveis apenas por 5 devem retornar `"Buzz"`.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

Números divisíveis por 3 e por 5 devem retornar `"FizzBuzz"`.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

Números não divisíveis por 3 nem 5 devem retornar o próprio número.

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
