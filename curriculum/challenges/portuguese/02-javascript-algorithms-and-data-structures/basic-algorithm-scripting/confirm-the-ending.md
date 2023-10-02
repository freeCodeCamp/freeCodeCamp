---
id: acda2fb1324d9b0fa741e6b5
title: Confirmar o final
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Verifique se uma string (primeiro argumento, `str`) termina com a sequência de caracteres de destino fornecida (segundo argumento, `target`).

Este desafio *pode ser resolvido* com o método `.endsWith()`, que foi introduzido na ES2015. Para este desafio, entretanto, gostaríamos que você usasse um dos métodos de substring JavaScript.

# --hints--

`confirmEnding("Bastian","n")` deve retornar `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation","on")` deve retornar `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor","n")` deve retornar `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` deve retornar `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name","name")` deve retornar `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame","same")` deve retornar `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` deve retornar `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame","game")` deve retornar `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` deve retornar `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` deve retornar `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Seu código não deve usar o método integrado `.endsWith()` para resolver o desafio.

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
