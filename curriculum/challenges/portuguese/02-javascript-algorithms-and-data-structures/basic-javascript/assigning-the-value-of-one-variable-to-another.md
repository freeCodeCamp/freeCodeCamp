---
id: 5ee127a03c3b35dd45426493
title: Atribuir o valor de uma variável para outra
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Após um valor ser atribuído para uma variável usando o operador de <dfn>atribuição</dfn>, você pode atribuir o valor daquela variável para outra variável usando o operador de <dfn>atribuição</dfn>.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

O código acima declara uma variável `myVar` sem valor, e então atribui a ela o valor `5`. Em seguida, uma variável chamada `myNum` é declarada sem valor. Depois, o conteúdo de `myVar` (o qual é `5`) é atribuído para a variável `myNum`. Agora, `myNum` também possui o valor de `5`.

# --instructions--

Atribua o conteúdo de `a` para a variável `b`.

# --hints--

Você não deve alterar o código acima do comentário especificado.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` deve ter um valor de `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` deve ser atribuído para `b` com `=`.

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
