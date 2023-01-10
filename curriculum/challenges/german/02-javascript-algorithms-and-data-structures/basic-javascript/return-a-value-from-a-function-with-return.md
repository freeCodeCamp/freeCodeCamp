---
id: 56533eb9ac21ba0edf2244c2
title: Rückgabe eines Wertes aus einer Funktion mit Return
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

Mit <dfn>Argumenten</dfn> können wir Werte an eine Funktion übergeben. Du kannst eine `return`-Anweisung verwenden, um einen Wert aus einer Funktion zurückzugeben.

**Beispiel**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` hat den Wert `8`.

`plusThree` nimmt ein <dfn>Argument</dfn> für `num` und gibt einen Wert gleich `num + 3` zurück.

# --instructions--

Erstelle eine Funktion `timesFive`, die ein Argument entgegennimmt, es mit `5` multipliziert und den neuen Wert zurückgibt.

# --hints--

`timesFive` sollte eine Funktion sein

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` sollte `25` zurückgeben

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` sollte `10` zurückgeben

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` sollte `0` zurückgeben

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
