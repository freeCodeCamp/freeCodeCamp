---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Scrivi un programma che genera un array di integrali da 1 a 100 (inclusi). Ma:

<ul>
    <li>per multipli di 3, aggiunge <code>"Fizz"</code> all'array invede del numero</li>
    <li>per multipli di 5, aggiungi <code>"Buzz"</code> all'array invece del numero</li>
    <li>per multipli di 3 e 5, aggiungi <code>"FizzBuzz"</code> all'array invece del numero</li>
</ul>

# --instructions--

Il tuo programma dovrebbe restituire un array contenete i risultati seguendo le regole scritte sopra.

# --hints--

`fizzBuzz` dovrebbe essere una funzione.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` dovrebbe restituire un array.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

I numeri divisibili per solo 3 dovrebbero restituire `"Fizz"`.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

I numeri divisibili per solo 5 dovrebbero restituire `"Buzz"`.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

Numeri divisibili per 3 e 5 dovrebbero restituire `"FizzBuzz"`.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

I numeri non divisibili per 3 o 5 dovrebbero restituire il numero stesso.

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
