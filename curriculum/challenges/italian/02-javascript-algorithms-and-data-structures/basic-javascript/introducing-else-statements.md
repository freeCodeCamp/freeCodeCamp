---
id: 56533eb9ac21ba0edf2244da
title: Introduzione alle dichiarazioni Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

Quando una condizione per un'istruzione `if` è vera, viene eseguito il blocco di codice che segue. E quando quella condizione è falsa? Di solito non succede niente. Con un'istruzione `else` è possibile eseguire un blocco di codice alternativo.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Combina le istruzioni `if` in una singola istruzione `if/else`.

# --hints--

Dovresti avere una sola istruzione `if` nell'editor

```js
assert(code.match(/if/g).length === 1);
```

Dovresti usare una istruzione `else`

```js
assert(/else/g.test(code));
```

`testElse(4)` dovrebbe restituire la stringa `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` dovrebbe restituire la stringa `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` dovrebbe restituire la stringa `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` dovrebbe restituire la stringa `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

Non dovresti modificare il codice sopra o sotto i commenti specificati.

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
