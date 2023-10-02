---
id: 597089c87eec450c68aa1643
title: Definire un tipo di dato primitivo
challengeType: 1
forumTopicId: 302248
dashedName: define-a-primitive-data-type
---

# --description--

Defnisci un tipo di dato che si comporta come un numero intero ma ha il valore valido minimo di 1 e il valore valido massimo di 10.

Gestione degli errori:

<ul>
  <li>Se si prova a instanziare un <code>Num</code> con un valore al di fuori del range 1 - 10, dovrebbe dare un errore <code>TypeError</code> con un messaggio di errore di <code>'Out of range'</code>.</li>
  <li>Se si prova a istanziare <code>Num</code> con un valore che non è un numero, dovrebbe dare un <code>TypeError</code> con un messaggio di errore di <code>'Not a Number'</code>.</li>
</ul>

# --hints--

`Num` dovrebbe essere una funzione.

```js
assert(typeof Num === 'function');
```

`new Num(4)` dovrebbe restituire un oggetto.

```js
assert(typeof new Num(4) === 'object');
```

`new Num('test')` dovrebbe dare un errore TypeError con messaggio 'Not a Number'.

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)` dovrebbe dare un TypeError con messaggio 'Out of range'.

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)` dovrebbe dare un TypeError con messaggio 'Out of range'.

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)` dovrebbe dare un TypeError con messaggio 'Out of range'.

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)` dovrebbe dare un TypeError con messaggio 'Out of range'.

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)` dovrebbe essere uguale a 7.

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)` dovrebbe essere uguale a -1.

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)` dovrebbe essere uguale a 12.

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)` dovrebbe essere uguale a 0.75.

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)` dovrebbe restituire true.

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)` dovrebbe restituire false.

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()` dovrebbe restituire '5'

```js
assert.equal(new Num(5).toString(), '5');
```

# --seed--

## --seed-contents--

```js
function Num(n) {

  return n;
}
```

# --solutions--

```js
function Num(n) {
  if (isNaN(n)) {
    throw new TypeError('Not a Number');
  }
  if (n < 1 || n > 10) {
    throw new TypeError('Out of range');
  }

  this._value = +n;
}
Num.prototype.valueOf = function() { return this._value; };
Num.prototype.toString = function () { return this._value.toString(); };
```
