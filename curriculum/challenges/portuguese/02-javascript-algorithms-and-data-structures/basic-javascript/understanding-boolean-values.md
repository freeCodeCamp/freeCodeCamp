---
id: bd7123c9c441eddfaeb5bdef
title: Entender valores booleanos
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

Outro tipo de dado é o <dfn>booleano</dfn>. Booleanos podem ser apenas dois valores: `true` ou `false`. Eles basicamente são interruptores pequenos, onde `true` é ligado e `false` é desligado. Esses dois estados são mutuamente exclusivos.

**Observação:** valores booleanos nunca são escritos com aspas. As strings `"true"` e `"false"` não são booleanos e não tem nenhum significado especial em JavaScript.

# --instructions--

Modifique a função `welcomeToBooleans` para que retorne `true` ao invés de `false`.

# --hints--

A função `welcomeToBooleans()` deve retornar um valor booleano (`true` ou `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` deve retornar `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
