---
id: 594dc6c729e5700999302b45
title: 対の括弧
challengeType: 1
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

生成された括弧が対になっているかどうかを確認します。括弧が開き括弧と閉じ括弧の順番で対になっているかどうか、誤った入れ子になっていないかどうかを確認します。

**例:**
| 入力                        | 出力 |
| ------------------------- | -- |
| <code>\[]</code> | 真  |
| <code>]\[</code> | 偽  |
| <code>[][]</code> | 真  |
| <code>]\[]</code> | 偽  |
| <code>\[]]\[\[]</code> | 偽  |
| <code>\[\[\[\[]]]]</code> | 真  |

# --hints--

`isBalanced` という関数です。

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` は真を返します。

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` は偽を返します。

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` は真を返します。

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` は偽を返します。

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` は偽を返します。

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` は偽を返します。

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` は偽を返します。

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` は偽を返します。

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` は偽を返します。

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` は偽を返します。

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` は偽を返します。

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` は真を返します。

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` は真を返します。

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` は偽を返します。

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` は偽を返します。

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` は偽を返します。

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` は偽を返します。

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` は真を返します。

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
