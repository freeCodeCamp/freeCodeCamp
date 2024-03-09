---
id: 594dc6c729e5700999302b45
title: Colchetes balanceados
challengeType: 1
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

Determine se uma sequência de colchetes gerada é equilibrada, ou seja, se consiste inteiramente de pares de colchetes de abertura/fechamento (nessa ordem), nenhum dos quais colocado incorretamente.

**Exemplos:**
| Entrada                   | Saída |
| ------------------------- | ----- |
| <code>\[]</code> | true  |
| <code>]\[</code> | false |
| <code>[][]</code> | true  |
| <code>]\[]</code> | false |
| <code>\[]]\[\[]</code> | false |
| <code>\[\[\[\[]]]]</code> | true  |

# --hints--

`isBalanced` deve ser uma função.

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` deve retornar true.

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` deve retornar false.

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` deve retornar true.

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` deve retornar false.

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` deve retornar false.

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` deve retornar false.

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` deve retornar false.

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` deve retornar false.

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` deve retornar false.

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` deve retornar false.

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` deve retornar false.

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` deve retornar true.

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` deve retornar true.

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` deve retornar false.

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` deve retornar false.

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` deve retornar false.

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` deve retornar false.

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` deve retornar true.

```js
assert(isBalanced(testCases[17]));
```

# --seed--

## --after-user-code--

```js
const testCases = [
  '[]',
  ']][[[][][][]][',
  '[][[[[][][[[]]]]]]',
  '][',
  '[[[]]]][[]',
  '][[]',
  '][[][]][[[]]',
  '[[][]]][',
  '[[[]]][[]]]][][[',
  '[]][[]]][[[[][]]',
  '][]][[][',
  '[[]][[][]]',
  '[[]]',
  ']][]][[]][[[',
  '][]][][[',
  '][][',
  '[]]]',
  ''
];
```

## --seed-contents--

```js
function isBalanced(str) {

  return true;
}
```

# --solutions--

```js
function isBalanced(str) {
  if (str === '') return true;
  let a = str;
  let b;
  do {
    b = a;
    a = a.replace(/\[\]/g, '');
  } while (a !== b);
  return !a;
}
```
