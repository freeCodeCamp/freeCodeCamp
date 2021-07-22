---
id: 587d7b8c367417b2b2512b56
title: Usar a exportação para compartilhar um bloco de código
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

Imagine um arquivo chamado `math_functions.js` que contém várias funções relacionadas a operações matemáticas. Uma delas é armazenada em uma variável, `add`, que recebe dois números e retorna a soma deles. Você quer usar essa função em diversos arquivos JavaScript diferentes. Para compartilhá-las com esses outros arquivos, você primeiro precisa exportá-las (`export`).

```js
export const add = (x, y) => {
  return x + y;
}
```

Acima está uma forma comum de exportar uma única função, mas você pode alcançar a mesma coisa da seguinte forma:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

Quando você exporta uma variável ou função, você pode importá-las em outro arquivo e usá-las sem ter de rescrever o código. Você pode exportar várias coisas ao repetir o primeiro exemplo para cada coisa que você queira exportar, ou ao colocar todas elas em uma instrução de export do segundo exemplo, da seguinte forma:

```js
export { add, subtract };
```

# --instructions--

Há duas funções relacionadas a string no editor. Exporte ambas usando o método de sua escolha.

# --hints--

Você deve exportar corretamente `uppercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

Você deve exportar corretamente `lowercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
