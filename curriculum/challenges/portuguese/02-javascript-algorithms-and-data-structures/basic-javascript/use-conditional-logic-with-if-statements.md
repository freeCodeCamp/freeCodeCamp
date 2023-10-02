---
id: cf1111c1c12feddfaeb3bdef
title: Usar lógica condicional com instruções if
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

instruções `if` são usadas para tomar decisões no código. A palavra-chave `if` diz ao JavaScript para executar o código nas chaves sob certas condições, definidas nos parênteses. Essas condições são conhecidas como condições `Boolean` e elas só podem ser `true` ou `false`.

Quando a condição for `true`, o programa executará as instruções dentro das chaves. Quando a condição booleana for `false`, as instruções dentro das chaves não serão executadas.

**Pseudocódigo**

<blockquote>if (<i>condição é verdadeira</i>) {<br><i>instrução é executada</i><br>}</blockquote>

**Exemplo**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` retorna a string `It was true` e `test(false)` retorna a string `It was false`.

Quando `test` é chamado com o valor `true`, a instrução `if` avalia `myCondition` para verificar se é `true` ou não. Já que é `true`, a função retorna `It was true`. Quando chamamos `test` com um valor de `false`, `myCondition` *não é* `true`, a instrução nas chaves não é executada e a função retorna `It was false`.

# --instructions--

Crie uma instrução `if` dentro da função para retornar `Yes, that was true` se o parâmetro `wasThatTrue` for `true` e retorne `No, that was false` caso contrário.

# --hints--

`trueOrFalse` deve ser uma função

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` deve retornar uma string

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` deve retornar uma string

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` deve retornar a string `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` deve retornar a string `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
