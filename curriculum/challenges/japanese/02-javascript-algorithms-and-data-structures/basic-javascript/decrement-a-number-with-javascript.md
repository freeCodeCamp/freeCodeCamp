---
id: 56533eb9ac21ba0edf2244ad
title: JavaScript で数値をデクリメントする
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

`--` 演算子を使用して簡単に変数の値を 1 減らす (<dfn>デクリメント</dfn>する) ことができます。

```js
i--;
```

は次の式と等価です。

```js
i = i - 1;
```

**注:** この行全体が `i--;` となり、等号が不要になります。

# --instructions--

コードを変更して `myVar` で `--` 演算子を使用してください。

# --hints--

`myVar` は `10` に等しくなる必要があります。

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` を書き換える必要があります。

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

`myVar` に `10` を代入してはいけません。

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

`myVar` には `--` 演算子を使用する必要があります。

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

指定されたコメントより上のコードを変更してはいけません。

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
