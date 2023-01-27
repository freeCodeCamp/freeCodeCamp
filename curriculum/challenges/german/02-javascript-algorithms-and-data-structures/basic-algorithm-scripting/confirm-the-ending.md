---
id: acda2fb1324d9b0fa741e6b5
title: Bestätige das Ende
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Überprüfe, ob ein String (erstes Argument, `str`) mit einem gegebenen Target-String (zweites Argument, `target`) endet.

Diese Aufgabe *kann* mit der Methode `.endsWith()` gelöst werden, die in ES2015 eingeführt wurde. Jedoch hätten wir für den Zweck dieser Aufgabe gerne, dass du stattdessen die JavaScript Substring-Methode verwendest.

# --hints--

`confirmEnding("Bastian", "n")` soll `true` zurückgeben.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` soll `true` zurückgeben.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` soll `false` zurückgeben.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` soll `false` zurückgeben.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` soll `true` zurückgeben.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` soll `true` zurückgeben.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` soll `false` zurückgeben.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` soll `false` zurückgeben.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` soll `false` zurückgeben.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` soll `true` zurückgeben.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Dein Code sollte diese Aufgabe ohne die integrierte Methode `.endsWith()` lösen.

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
