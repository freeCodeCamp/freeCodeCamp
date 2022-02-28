---
id: 56533eb9ac21ba0edf2244d6
title: Comparar com o operador menor que
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

O operador menor que (`<`) compara os valores de dois números. Se o número à esquerda for menos que o número à direita, retornará `true`. Caso contrário, retorna `false`. Assim como o operador de igualdade, o operador menor que converte os tipos de dados enquanto compara.

**Exemplos**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

Adicione o operador menor que para indicar as linhas para que a instrução de retorno faça sentido.

# --hints--

`testLessThan(0)` deve retornar a string `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` deve retornar a string `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` deve retornar a string `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` deve retornar a string `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` deve retornar a string `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` deve retornar a string `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

Você deve usar o operador `<` pelo menos duas vezes

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
