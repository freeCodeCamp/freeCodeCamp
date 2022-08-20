---
id: 587d7b87367417b2b2512b43
title: Criar funções anônimas com arrow functions
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

No JavaScript, muitas vezes não precisamos nomear nossas funções, especialmente quando passamos uma função como argumento para outra função. Em vez disso, criamos funções anônimas. Como não vamos reutilizar essas funções posteriormente, não precisamos nomeá-las.

Para fazer isso, geralmente usamos a seguinte sintaxe:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 nos fornece um <dfn>syntatical sugar</dfn> onde não precisamos escrever funções anônimas como no exemplo acima. Ao invés disso, você pode usar a sintaxe **arrow function**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Quando a função executa apenas uma linha de código ou retorna apenas um valor, a sintaxe de arrow function nos permite omitir a palavra-chave `return` assim como as chaves ao redor do código. Essa abordagem ajuda a criar funções menores em instruções de uma linha:

```js
const myFunc = () => "value";
```

Esse código ainda retornará a string `value` por padrão.

# --instructions--

Rescreva a função atribuída à variável `magic` usando a sintaxe de arrow function. A função deve retornar `new Date()`. Além disso, garanta que nada seja definido usando a palavra-chave `var`.

# --hints--

Você deve substituir a palavra-chave `var`.

```js
assert.notMatch(code, /var/g)
```

A variável `magic` deve ser uma constante (use `const`).

```js
assert.match(code, /const\s+magic/g)
```

A variável `magic` deve ser uma `function`.

```js
assert(typeof magic === 'function');
```

Ao invocar `magic()`, uma data deve ser retornada.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

A palavra-chave `function` não deve ser usada.

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
