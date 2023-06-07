---
id: 5a23c84252665b21eecc7ec1
title: Quadratura di cifre iterata
challengeType: 1
forumTopicId: 302291
dashedName: iterated-digits-squaring
---

# --description--

Se sommi il quadrato delle cifre di un numero naturale (un numero intero più grande di zero), ottieni sempre o 1 o 89:

<pre>15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>

# --instructions--

Scrivi una funzione che prende un numero come parametro e restituisce 1 o 89 dopo aver eseguito il processo menzionato.

# --hints--

`iteratedSquare` dovrebbe essere una funzione.

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` dovrebbe restituire un numero.

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` dovrebbe restituire `89`.

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` dovrebbe restituire `1`.

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` dovrebbe restituire `89`.

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` dovrebbe restituire `89`.

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` dovrebbe restituire `1`.

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` dovrebbe restituire `1`.

```js
assert.equal(iteratedSquare(100), 1);
```

# --seed--

## --seed-contents--

```js
function iteratedSquare(n) {

}
```

# --solutions--

```js
function iteratedSquare(n) {
    var total;
    while (n != 89 && n != 1) {
        total = 0;
        while (n > 0) {
            total += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        n = total;
    }
    return n;
}
```
