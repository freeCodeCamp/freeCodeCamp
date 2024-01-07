---
id: 56533eb9ac21ba0edf2244d2
title: Comparar com o operador de desigualdade
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

O operador de desigualdade (`!=`) é o oposto do operador de igualdade. Significa que não é igual e retorna `false` onde a igualdade retornaria `true` e *vice-versa*. Tal como o operador de igualdade, o operador de desigualdade converterá os tipos de dados de valores enquanto compara.

**Exemplos**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

Adicione o operador de desigualdade `!=` na instrução `if` para que a função retorne a string `Not Equal` quando `val` não for equivalente a `99`.

# --hints--

`testNotEqual(99)` deve retornar a string `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` deve retornar a string `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` deve retornar a string `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` deve retornar a string `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` deve retornar a string `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

Você deve usar o operador `!=`

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```
