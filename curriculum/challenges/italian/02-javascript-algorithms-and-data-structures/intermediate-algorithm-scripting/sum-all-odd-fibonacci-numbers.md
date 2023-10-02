---
id: a5229172f011153519423690
title: Sommare tutti i numeri dispari di Fibonacci
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Dato un numero intero positivo `num`, restituisci la somma di tutti i numeri di Fibonacci dispari che sono minori o uguali a `num`.

I primi due numeri nella sequenza di Fibonacci sono 0 e 1. Ogni numero aggiuntivo nella sequenza è la somma dei due numeri precedenti. I primi sette numeri della sequenza di Fibonacci sono 0, 1, 1, 2, 3, 5 e 8.

Ad esempio, `sumFibs(10)` dovrebbe restituire `10` perché tutti i numeri dispari di Fibonacci minori o uguali a `10` sono 1, 1, 3 e 5.

# --hints--

`sumFibs(1)` dovrebbe restituire un numero.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` dovrebbe restituire 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` dovrebbe restituire 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` dovrebbe restituire 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` dovrebbe restituire 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` dovrebbe restituire 135721.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
