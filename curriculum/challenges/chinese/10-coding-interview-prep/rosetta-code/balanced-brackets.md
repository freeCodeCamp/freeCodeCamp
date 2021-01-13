---
id: 594dc6c729e5700999302b45
title: 平衡括号
challengeType: 5
videoUrl: ''
dashedName: balanced-brackets
---

# --description--

<p>确定生成的括号字符串是否平衡;也就是说，它是否完全由成对的开/关括号（按此顺序）组成，其中没有一个错误嵌套。 </p>例子： <p class='rosetta__paragraph'> （空）是的</p><p class='rosetta__paragraph'> <code>[]</code>是的</p><p class='rosetta__paragraph'> <code>][</code>假</p><p class='rosetta__paragraph'> <code>[][]</code>是的</p><p class='rosetta__paragraph'> <code>][][</code>假</p><p class='rosetta__paragraph'> <code>[]][[]</code> false </p><p class='rosetta__paragraph'> <code>[[[[]]]]</code>是的</p>

# --hints--

`isBalanced`是一个函数。

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")`应该返回true。

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")`应该返回false。

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")`应该返回true。

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")`应该返回true。

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")`应该返回true。

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")`应该返回true。

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")`应该返回true。

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")`应该返回true。

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")`应该返回true。

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")`应该返回true。

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")`应该返回true。

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")`应该返回true。

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")`应该返回true。

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")`应该返回true。

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")`应该返回true。

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")`应该返回true。

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[[]]][][][[]][")`应该返回true。

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")`应该返回true。

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
