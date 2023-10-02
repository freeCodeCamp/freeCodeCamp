---
id: 56533eb9ac21ba0edf2244c3
title: 戻り値の代入
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

<a href="/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">「代入演算子を使用して値を格納する」</a>で説明したように、等号の右側の部分はすべて、値が代入される前に解決されます。 つまり、関数の戻り値を受け取って変数に代入することができます。

2 つの数値を足し算する関数 `sum` が定義されているとします。

```js
ourSum = sum(5, 12);
```

`sum` 関数を `5` と `12` の引数で呼び出すと、`17` の戻り値が返されます。 この戻り値は `ourSum` 変数に代入されます。

# --instructions--

`7` を引数に取る `processArg` 関数を呼び出し、その戻り値を変数 `processed` に代入してください。

# --hints--

`processed` の値は `2` になる必要があります。

```js
assert(processed === 2);
```

`processArg` を `processed` に代入する必要があります。

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
