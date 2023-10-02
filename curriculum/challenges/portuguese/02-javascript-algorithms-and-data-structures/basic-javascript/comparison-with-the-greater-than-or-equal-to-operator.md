---
id: 56533eb9ac21ba0edf2244d5
title: Comparar com o operador maior ou igual
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

O operador maior ou igual que (`>=`) compara os valores de dois números. Se o número à esquerda é maior ou igual ao número à direita, ele retorna `true`. Caso contrário, ele retornará `false`.

Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara.

**Exemplos**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

Adicione o operador maior ou igual que às linhas indicadas para que as instruções de retorno façam sentido.

# --hints--

`testGreaterOrEqual(0)` deve retornar a string `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` deve retornar a string `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` deve retornar a string `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` deve retornar a string `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` deve retornar a string `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` deve retornar a string `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` deve retornar a string `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

Você deve usar o operador `>=` pelo menos duas vezes

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
