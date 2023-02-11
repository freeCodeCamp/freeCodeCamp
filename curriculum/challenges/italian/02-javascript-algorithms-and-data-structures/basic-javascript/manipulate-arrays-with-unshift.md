---
id: 56bbb991ad1ed5201cd392ce
title: Manipolare gli array con il metodo unshift
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

Non puoi solo fare uno `shift` di elementi dall'inizio di un array: puoi anche fare un `unshift`, cioè aggiungere elementi all'inizio dell'array.

`.unshift()` funziona esattamente come `.push()`, ma invece di aggiungere l'elemento alla fine dell'array, `unshift()` lo aggiunge all'inizio.

Esempio:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

Dopo lo `shift`, `ourArray` avrà il valore `["J", "cat"]`. Dopo l'`unshift`, `ourArray` avrà il valore `["Happy", "J", "cat"]`.

# --instructions--

Aggiungi `["Paul", 35]` all'inizio della variabile `myArray` usando `unshift()`.

# --hints--

`myArray` ora dovrebbe valere `[["Paul", 35], ["dog", 3]]`.

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
