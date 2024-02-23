---
id: 56533eb9ac21ba0edf2244bf
title: Conhecer o escopo local e funções
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

Variáveis que são declaradas dentro de uma função, assim como parâmetros das funções, possuem escopo <dfn>local</dfn>. Isso significa que elas são visíveis apenas dentro da função.

Aqui está uma função `myTest` com uma variável local chamada `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

A chamada da função `myTest()` vai exibir a string `foo` no console. A linha `console.log(loc)` (fora da função `myTest`) vai lançar um erro, já que `loc` não foi definido fora da função.

# --instructions--

O editor possui dois `console.log` para ajudar você a ver o que está acontecendo. Verifique o console enquanto codifica para ver como muda. Declare uma variável local `myVar` dentro de `myLocalScope` e rode os testes.

**Observação:** o console ainda exibirá `ReferenceError: myVar is not defined`, mas isso não causará falha nos testes.

# --hints--

O código não deve conter uma variável global `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

Você deve adicionar a variável local `myVar`.

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
