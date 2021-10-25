---
id: 587d7b87367417b2b2512b41
title: Declarar variáveis somente de leitura com a palavra-chave const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

A palavra-chave `let` não é a única nova forma de declarar variáveis. Na versão ES6, você também pode declarar variáveis usando a palavra-chave `const`.

`const` possui todos os recursos maravilhosos que `let` tem, com o bônus adicional que variáveis declaradas usando `const` são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com `const` não pode ser atribuída novamente.

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

O console vai exibir um erro devido à reatribuição do valor de `FAV_PET`.

Como você pode ver, tentar reatribuir uma variável declarada com `const` lançará um erro. Você sempre deve nomear variáveis que você não quer reatribuir, usando a palavra-chave `const`. Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria ser constante. Uma prática comum ao nomear constantes é colocar todas as letras em maiúsculas, com palavras separadas por sublinhado (underscore).

**Observação:** é comum que os desenvolvedores usem nomes de variáveis maiúsculas para valores imutáveis e minúsculas ou camelCase para valores mutáveis (objetos e arrays). Em um desafio posterior, você verá um exemplo de um nome de variável em minúsculo usado para um array.

# --instructions--

Altere o código para que todas as variáveis sejam declaradas usando `let` ou `const`. Use `let` quando você quiser que a variável mude e `const` quando você quiser que a variável permaneça constante. Além disso, renomeie as variáveis declaradas com `const` para estar em conformidade com as práticas comuns, o que significa que constantes devem ter todas as letras em maiúsculo.

# --hints--

`var` não deve existir no seu código.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` deve ser uma variável constante declarada com `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

A variável `i` deve ser declarada com `let`.

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` deve ser alterado para imprimir a variável `SENTENCE`.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```
