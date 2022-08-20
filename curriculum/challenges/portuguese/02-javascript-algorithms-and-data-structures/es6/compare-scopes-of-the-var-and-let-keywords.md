---
id: 587d7b87367417b2b2512b40
title: Comparar escopos das palavras-chave var e let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Se você não estiver familiarizado com `let`, confira <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow">este desafio sobre a diferença entre <code>let</code> e <code>var</code></a>.

Quando você declara uma variável com a palavra-chave `var`, ela é declarada globalmente, ou localmente se declarada dentro de uma função.

A palavra-chave `let` se comporta de forma similar, mas com alguns recursos extras. Quando você declara a variável com a palavra-chave `let` dentro de um bloco, declaração, ou expressão, seu escopo é limitado ao bloco, declaração, ou expressão.

Por exemplo:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Aqui o console vai exibir os valores `[0, 1, 2]` e `3`.

Com a palavra-chave `var`, `i` é declarado globalmente. Então quando `i++` é executado, ele atualiza a variável global. Esse código é semelhante ao seguinte:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Aqui o console vai exibir os valores `[0, 1, 2]` e `3`.

Este comportamento causará problemas se você criasse uma função e armazená-la para depois utilizar dentro de um laço `for` que utiliza a variável `i`. Isso se deve ao fato da função armazenada sempre vai se referir ao valor da variável global `i` atualizada.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

Aqui o console vai exibir o valor `3`.

Como você pode ver, `printNumTwo()` exibe 3 e não 2. Isso se deve ao fato do valor atribuído a `i` foi atualizado e `printNumTwo()` retorna a variável global `i` e não o valor que `i` tinha quando a função foi criada dentro do laço for. A palavra-chave `let` não segue este comportamento:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

Aqui o console vai exibir o valor `2`, e um erro que `i is not defined` (i não foi definida).

`i` não foi definida porque não foi declarada no escopo global. Ela é declarada apenas dentro da declaração do laço `for`. `printNumTwo()` retornou o valor correto porque três variáveis `i` distintas com valores únicos (0, 1 e 2) foram criadas com a palavra-chave `let` dentro da declaração do laço.

# --instructions--

Corrija o código para que a variável `i` declarada dentro do comando `if` seja diferente da variável `i` declarada na primeira linha da função. Tenha certeza de não usar a palavra-chave `var` em nenhum lugar do seu código.

Este exercício foi projetado para ilustrar a diferença ente como as palavras-chaves `var` e `let` definem o escopo para a variável declarada. Quando programamos uma função semelhante a aquelas utilizadas no exercício, geralmente, é melhor utilizar variáveis distintas para evitar confusão.

# --hints--

`var` não deve existir no código.

```js
assert(!code.match(/var/g));
```

A variável `i` declarada dentro do corpo do comando `if` deve ser igual a string `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` deve retornar a string `function scope`

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
