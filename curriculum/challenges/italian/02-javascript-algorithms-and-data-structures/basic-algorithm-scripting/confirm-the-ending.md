---
id: acda2fb1324d9b0fa741e6b5
title: Confermare la finale
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Verifica se una stringa (primo argomento, `str`) finisce con la stringa data (secondo argomento, `target`).

Questa sfida *può essere risolta* con il metodo `.endsWith()`, che è stato introdotto in ES2015. Tuttavia, per lo scopo di questa sfida, vorremmo che tu usassi uno dei metodi di sottostringa di JavaScript.

# --hints--

`confirmEnding("Bastian", "n")` dovrebbe restituire `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` dovrebbe restituire `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` dovrebbe restituire `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` dovrebbe restituire `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` dovrebbe restituire `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` dovrebbe restituire `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` dovrebbe restituire `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` dovrebbe restituire `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` dovrebbe restituire `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` dovrebbe restituire `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Il tuo codice non dovrebbe utilizzare il metodo integrato `.endsWith()` per risolvere la sfida.

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
