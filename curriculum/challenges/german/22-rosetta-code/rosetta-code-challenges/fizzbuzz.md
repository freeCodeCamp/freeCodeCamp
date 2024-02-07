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
    <li>für die Vielfachen von 5 füge anstelle der Zahl <code>"Buzz"</code> dem Array hinzu</li>
    <li>für die Vielfachen von 3 und 5 füge dem Array <code>"FizzBuzz"</code> anstelle der Zahl hinzu</li>
</ul>

# --instructions--

Dein Programm sollte ein Array zurückgeben, deren Ergebnisse den darüberstehenden Regeln entsprichen.

# --hints--

`fizzBuzz` sollte eine Funktion sein.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` sollte ein Array zurückgeben.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

Zahlen, die nur durch 3 teilbar sind, sollten `"Fizz"` ergeben.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

Zahlen, die nur durch 5 teilbar sind, sollten `"Buzz"` zurückgeben.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

Zahlen, die sowohl durch 3 als auch durch 5 teilbar sind, sollten `"FizzBuzz"` zurückgeben.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

Zahlen, die weder durch 3 noch durch 5 teilbar sind, sollten die Zahl selbst zurückgeben.

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
