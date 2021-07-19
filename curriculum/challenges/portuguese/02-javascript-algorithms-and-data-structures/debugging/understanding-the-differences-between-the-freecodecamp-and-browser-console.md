---
id: 587d7b83367417b2b2512b37
title: Entendendo a Diferença entre o console da freeCodeCamp e do Navegador
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Você pode ter percebido que alguns dos desafios de JavaScript da freeCodeCamp incluem seu próprio console. Esse console se comporta um pouco difrente do console do navegador que você utilizou no último desafio.

O desafio a seguir tem a finalidade de destacar a principal diferença entre o console da freeCodeCamp e do navegador.

Quando você executa JavaScript comum, o console do navegado exibirá suas instruções `console.log()` a exata quantidade de vezes que é chamada.

O console da freeCodeCamp irá imprimir suas instruções `console.log()` um curto período depois do editor detectar mudança no script, e também durante o teste.

O console da freeCodeCamp é apagado antes de cada execução de testes e, para evitar spam, só imprime os logs durante o primeiro teste (veja a nota abaixo para exceções).

Se você gostaria de ver todos os logs em todos os testes, execute os testes e abra o console do navegador. Se preferir usar o console do navegador e quiser que ele imite o console da freeCodeCamp, coloque `console.clear()` antes de qualquer outra chamada ao `console`, para apagar o console do navegador.

**Nota:** `console.log` dentro de funções são impressas no console da freeCodeCamp toda vez que essas funções forem chamadas. Isso pode ajudar a depurar (ou debugar) funções que são chamadas durante os testes.

# --instructions--

Primeiro, use `console.log` para exibir a variável `output`. Em seguida, use `console.clear` para apagar o console do navegador.

# --hints--

Você deve usar `console.clear()` para apagar o console do navegador.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Você deve usar `console.log()` para imprimir a variável `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

# --seed--

## --seed-contents--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

# --solutions--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```
