---
id: 56533eb9ac21ba0edf2244c8
title: ブラケット記法によるオブジェクトのプロパティへのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

オブジェクトのプロパティにアクセスする 2 つ目の方法は、ブラケット記法 (`[]`) です。 アクセスしようとしているオブジェクトのプロパティの名前にスペースが含まれている場合は、ブラケット記法を使用する必要があります。

ただし、オブジェクトのプロパティにスペースが含まれていない場合もブラケット記法を使用できます。

次は、ブラケット記法を使用してオブジェクトのプロパティを読み取る例です。

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` は文字列 `Kirk`、`myObj['More Space']` は文字列 `Spock`、`myObj["NoSpace"]` は文字列 `USS Enterprise` となります。

スペースを含むプロパティ名には引用符 (シングルクォートまたはダブルクォート) が必要なことに注意してください。

# --instructions--

ブラケット記法を使用して、`testObj` のプロパティである `an entree` と `the drink` の値を読み取り、それぞれ `entreeValue` と `drinkValue` に割り当ててください。

# --hints--

`entreeValue` は文字列である必要があります。

```js
assert(typeof entreeValue === 'string');
```

`entreeValue` の値は文字列 `hamburger`である必要があります。

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` は文字列である必要があります。

```js
assert(typeof drinkValue === 'string');
```

`drinkValue` の値は文字列 `water`である必要があります。

```js
assert(drinkValue === 'water');
```

ブラケット記法を 2 回使用する必要があります。

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
