---
id: 56533eb9ac21ba0edf2244a9
title: Inicializar variáveis com o operador de atribuição
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
forumTopicId: 301171
dashedName: initializing-variables-with-the-assignment-operator
---

# --description--

É comum <dfn>inicializar</dfn> a variável com um valor inicial na mesma linha que declarada.

```js
var myVar = 0;
```

Cria uma nova variável chamada `myVar` e atribui o seu valor inicial como `0`.

# --instructions--

Define uma variável `a` com `var` e a inicializa com o valor de `9`.

# --hints--

Você deve inicializar `a` para o valor de `9`.

```js
assert(/var\s+a\s*=\s*9(\s*;?\s*)$/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

## --seed-contents--

```js

```

# --solutions--

```js
var a = 9;
```
