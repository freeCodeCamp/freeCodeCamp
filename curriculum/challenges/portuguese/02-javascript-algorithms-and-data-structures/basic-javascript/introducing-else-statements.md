---
id: 56533eb9ac21ba0edf2244da
title: Introduzir instruções else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

Quando uma condição para uma instrução `if` for verdadeira, o bloco de código seguinte será executado. E quando a condição for falsa? Normalmente, nada aconteceria. Com uma instrução `else`, um bloco de código alternativo pode ser executado.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Combine as instruções `if` em uma única instrução `if/else`.

# --hints--

Você deve ter apenas uma instrução `if` no editor

```js
assert(code.match(/if/g).length === 1);
```

Você deve usar uma instrução `else`

```js
assert(/else/g.test(code));
```

`testElse(4)` deve retornar a string `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` deve retornar a string `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` deve retornar a string `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` deve retornar a string `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

Você não deve alterar o código acima ou abaixo dos comentários especificados.

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
