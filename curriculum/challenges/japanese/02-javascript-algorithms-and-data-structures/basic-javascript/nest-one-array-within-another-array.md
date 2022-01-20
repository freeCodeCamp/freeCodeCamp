---
id: cf1111c1c11feddfaeb7bdef
title: ある配列を別の配列内にネストする
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

次のように、配列を他の配列内にネストすることもできます。

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

これは<dfn>多次元配列</dfn>とも呼ばれます。

# --instructions--

`myArray` という名前のネストされた配列を作成してください。

# --hints--

`myArray` は、別の配列内にネストされた配列を少なくとも 1 つ持つ必要があります。

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```
