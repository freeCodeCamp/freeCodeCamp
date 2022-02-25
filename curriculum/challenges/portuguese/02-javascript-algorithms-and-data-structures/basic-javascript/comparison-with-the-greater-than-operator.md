---
id: 56533eb9ac21ba0edf2244d4
title: Comparar com o operador maior que
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

O operador maior que (`>`) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, ele retorna `true`. Caso contrário, ele retorna `false`.

Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara.

**Exemplos**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

Adicione o operador maior que para indicar as linhas indicadas para que as instruções de retorno façam sentido.

# --hints--

`testGreaterThan(0)` deve retornar a string `10 or Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` deve retornar a string `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` deve retornar a string `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` deve retornar a string `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` deve retornar a string `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` deve retornar a string `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` deve retornar a string `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

Você deve usar o operador `>` pelo menos duas vezes

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
