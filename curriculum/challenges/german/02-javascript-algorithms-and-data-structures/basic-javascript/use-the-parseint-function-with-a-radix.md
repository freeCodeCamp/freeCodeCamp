---
id: 587d7b7e367417b2b2512b22
title: Benutze die parseInt Funktion mit einem Radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

Die Funktion `parseInt()` parst einen String und gibt eine Ganzzahl zurück. Sie nimmt ein zweites Argument für das Radix, das die Basis der Zahl in dem String angibt. Das Radix kann eine ganze Zahl zwischen 2 und 36 sein.

Der Funktionsaufruf sieht wie folgt aus:

```js
parseInt(string, radix);
```

Und hier ist ein Beispiel:

```js
const a = parseInt("11", 2);
```

Die Radix-Variable sagt, dass `11` im Binärsystem oder zur Basis 2 ist. Dieses Beispiel wandelt den String `11` in eine Ganzzahl `3` um.

# --instructions--

Verwende `parseInt()` in der Funktion `convertToInteger`, damit sie eine Binärzahl in eine Ganzzahl umwandelt und diese zurückgibt.

# --hints--

`convertToInteger` sollte die Funktion `parseInt()` verwenden

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` sollte eine Zahl zurückgeben

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` sollte 19 zurückgeben

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` sollte 57 zurückgeben

```js
assert(convertToInteger('111001') === 57);
```

`convertToInteger("JamesBond")` sollte `NaN` zurückgeben

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
