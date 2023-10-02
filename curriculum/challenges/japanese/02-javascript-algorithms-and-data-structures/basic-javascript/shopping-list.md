---
id: 56533eb9ac21ba0edf2244bc
title: ショッピングリスト
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

変数 `myList` にショッピングリストを作成してください。 リストは、複数のサブ配列を含む多次元配列とします。

各サブ配列の最初の要素には、商品の名前を持つ文字列を含める必要があります。 2 番目の要素は、数量を表す数値としてください。

```js
["Chocolate Bar", 15]
```

リストには、少なくとも 5 つのサブ配列が必要です。

# --hints--

`myList` は配列である必要があります。

```js
assert(isArray);
```

各サブ配列の最初の要素は、すべて文字列である必要があります。

```js
assert(hasString);
```

各サブ配列の 2 番目の要素は、すべて数値である必要があります。

```js
assert(hasNumber);
```

リストには少なくとも 5 つのアイテムが必要です。

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
