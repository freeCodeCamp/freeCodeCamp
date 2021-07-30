---
id: 56533eb9ac21ba0edf2244a8
title: Armazenar valores com o operador de atribuição
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

Em JavaScript, você pode armazenar um valor em uma variável com o operador de <dfn>atribuição</dfn> (`=`).

```js
myVariable = 5;
```

Isso atribui um valor do tipo `Number` de `5` para `myVariable`.

Se há qualquer cálculo à direita do operador `=`, esses cálculos são executados antes do valor ser atribuído à variável na esquerda do operador.

```js
var myVar;
myVar = 5;
```

Primeiro, esse código cria uma variável chamada `myVar`. Em seguida, o código atribui `5` para `myVar`. Agora, se `myVar` aparece novamente no código, o programa vai tratá-la como se fosse `5`.

# --instructions--

Atribua o valor `7` para a variável `a`.

# --hints--

Você não deve alterar o código acima do comentário especificado.

```js
assert(/var a;/.test(code));
```

`a` deve ter o valor de 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
