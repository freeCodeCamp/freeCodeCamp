---
id: 56533eb9ac21ba0edf2244c7
title: ドット記法によるオブジェクトのプロパティへのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

配列の場合と同様に、オブジェクトのプロパティへのアクセス方法も、ドット記法 (`.`) とブラケット記法 (`[]`) の 2 通りがあります。

ドット記法は、アクセスしようとしているプロパティの名前があらかじめわかっている場合に使用します。

次は、ドット記法 (`.`) を使用してオブジェクトのプロパティを読み取る例です。

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` の値は文字列 `val1`、`prop2val` の値は文字列 `val2` となります。

# --instructions--

ドット記法を使用して `testObj` のプロパティ値を取得してください。 変数 `hatValue` はオブジェクトのプロパティ `hat` と等しくなるように設定し、変数 `shirtValue` はオブジェクトのプロパティ `shirt` と等しくなるように設定してください。

# --hints--

`hatValue` は文字列である必要があります。

```js
assert(typeof hatValue === 'string');
```

`hatValue` の値は文字列 `ballcap`である必要があります。

```js
assert(hatValue === 'ballcap');
```

`shirtValue` は文字列である必要があります。

```js
assert(typeof shirtValue === 'string');
```

`shirtValue` の値は文字列 `jersey` である必要があります。

```js
assert(shirtValue === 'jersey');
```

ドット記法を 2 回使用する必要があります。

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
