---
id: 587d7b7e367417b2b2512b21
title: Usar operadores de múltiplas condições (ternários)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

No desafio anterior, você usou um único operador condicional. Você também pode encadear eles juntos para verificar por múltiplas condições.

A seguinte função usa as instruções `if`, `else if` e `else` para verificar múltiplas condições:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

A função acima pode ser rescrita usando operadores de múltiplas condições (operador ternário):

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

É considerada a melhor prática para formatar operadores de múltiplas condições, já que cada condição está em uma linha separada, como mostrado acima. Usar operadores de múltiplas condições sem a indentação adequada pode dificultar a leitura do seu código. Por exemplo:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

Na função `checkSign`, use operadores de múltiplas condições - seguindo o formato recomendado usado em `findGreaterOrEqual` - para verificar se um número é positivo, negativo ou zero. A função deve retornar `positive`, `negative` ou `zero`.

# --hints--

`checkSign` deve usar operadores de múltiplas condições

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` deve retornar a string `positive`. Observe que a capitalização importa

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` deve retornar a string `negative`. Observe que a capitalização importa

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` deve retornar a string `zero`. Observe que a capitalização importa

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
