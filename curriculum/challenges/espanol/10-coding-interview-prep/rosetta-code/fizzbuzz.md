---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Write a program that generates an array of integers from 1 to 100 (inclusive). Pero:

<ul>
    <li>para múltiplos de 3, suma<code>"Fizz"</code> a la matriz en lugar del número</li>
    <li>para múltiplos de 5, suma<code>"Buzz"</code> a la matriz en lugar del número</li>
    <li>para múltiplos de 3 y 5, suma<code>"FizzBuzz"</code> a la matriz en lugar del número</li>
</ul>

# --instructions--

Su programa debe devolver una matriz que contenga los resultados según las reglas anteriores.

# --hints--

`fizzBuzz` debe ser una función.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` debe devolver una matriz.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

Los números divisibles por solo 3 deberían regresar`"Fizz"`.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

Los números divisibles por solo 5 deberían regresar `"Buzz"`.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

Los números divisibles por 3 y 5 deberían regresar `"FizzBuzz"`.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

Los números que no son divisibles por 3 o 5 deben devolver el número en sí.

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
