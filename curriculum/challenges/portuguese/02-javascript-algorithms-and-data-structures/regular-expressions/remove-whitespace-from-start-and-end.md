---
id: 587d7dbb367417b2b2512bac
title: Remover espaços em branco do início e do fim de strings
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

Às vezes, strings têm espaços em branco indesejados em seus inícios e fins. Uma operação muito comum de strings é remover esses espaços ao redor delas.

# --instructions--

Escreva uma regex que, junto dos métodos apropriados de string, remove os espaços em branco do começo e do fim delas.

**Observação:** normalmente, usaríamos `String.prototype.trim()` para isso, mas a sua tarefa é fazer o mesmo usando expressões regulares.

# --hints--

`result` deve ser igual a `Hello, World!`

```js
assert(result === 'Hello, World!');
```

Você não deve usar o método `String.prototype.trim()` no seu código.

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

Você não deve atribuir uma string diretamente à variável `result`

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

O valor da variável `hello` não deve ser alterado.

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
