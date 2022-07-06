---
id: 56bbb991ad1ed5201cd392ca
title: Accedere ai dati degli Array con gli indici
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Possiamo accedere ai dati all'interno degli array utilizzando gli <dfn>indici</dfn>.

Gli indici degli array sono scritti nella stessa notazione tra parentesi usata dalle stringhe, tranne per il fatto che invece di specificare un carattere, specificano una voce nell'array. Come le stringhe, gli array utilizzano l'indicizzazione <dfn>zero-based</dfn>, quindi il primo elemento in un array ha un indice di `0`.

<br>

**Esempio**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

`console.log(array[0])` scrive `50`, e `data` ha il valore `60`.

# --instructions--

Crea una variabile chiamata `myData` e imponila uguale al primo valore di `myArray` usando la notazione a parentesi quadre.

# --hints--

La variabile `myData` dovrebbe essere uguale al primo valore di `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Dovresti accedere ai dati nella variabile `myArray` usando la notazione a parentesi quadre.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
