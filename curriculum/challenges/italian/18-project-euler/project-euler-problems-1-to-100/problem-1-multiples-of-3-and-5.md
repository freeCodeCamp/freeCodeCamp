---
id: 5900f36e1000cf542c50fe80
title: 'Problema 1: multipli di 3 e 5'
challengeType: 1
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

Se elenchiamo tutti i numeri naturali sotto il 10 che sono multipli di 3 o 5, otteniamo 3, 5, 6 e 9. La somma di questi multipli è 23.

Trova la somma di tutti i multipli di 3 e 5 sotto al valore del parametro `number` inserito.

# --hints--

`multiplesOf3and5(10)` dovrebbe restituire un numero.

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` dovrebbe restituire 543.

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` dovrebbe restituire 233168.

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` dovrebbe restituire 16687353.

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` dovrebbe restituire 89301183.

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```
