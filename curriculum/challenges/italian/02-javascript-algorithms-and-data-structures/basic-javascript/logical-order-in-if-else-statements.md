---
id: 5690307fddb111c6084545d7
title: Ordine logico nelle istruzioni If/Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

L'ordine è importante nelle istruzioni `if`, `else if`.

La funzione viene eseguita dall'alto verso il basso, quindi dovrai fare attenzione a quale istruzione viene prima.

Prendiamo queste due funzioni come esempio.

Ecco la prima:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

E la secondo cambia semplicemente l'ordine delle dichiarazioni:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

Anche se queste due funzioni sembrano quasi identiche, se passiamo un numero ad entrambe otterremo output diversi.

```js
foo(0)
bar(0)
```

`foo(0)` restituirà la stringa `Less than one`, e `bar(0)` restituirà la stringa `Less than two`.

# --instructions--

Cambia l'ordine della logica nella funzione in modo che restituisca le affermazioni corrette in tutti i casi.

# --hints--

`orderMyLogic(4)` dovrebbe restituire la stringa `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` dovrebbe restituire la stringa `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` dovrebbe restituire la stringa `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
