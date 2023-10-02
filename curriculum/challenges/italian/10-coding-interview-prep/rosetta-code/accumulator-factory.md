---
id: 594810f028c0303b75339ace
title: Fabbrica di accumulatori
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

Un problema posto da Paul Graham è quello di creare una funzione che prende un singolo argomento numerico e che restituisce un'altra funzione che è un accumulatore. A sua volta anche la funzione accumulatrice restituita accetta un singolo argomento numerico, e restituisce la somma di tutti i valori numerici passati finora a quell'accumulatore (incluso il valore iniziale passato quando l'accumulatore è stato creato).

# --instructions--

Crea una funzione che prende un numero $n$ e genera funzioni accumulatrici che restituiscono la somma di ogni numero passato a loro.

**Regole:**

Non usare variabili globali.

**Suggerimento:**

La chiusura salva lo stato esterno.

# --hints--

`accumulator` dovrebbe essere una funzione.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` dovrebbe restituire una funzione.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` dovrebbe restituire un numero.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Passare i valori 3, -4, 1.5, e 5 dovrebbe restituire 5.5.

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
