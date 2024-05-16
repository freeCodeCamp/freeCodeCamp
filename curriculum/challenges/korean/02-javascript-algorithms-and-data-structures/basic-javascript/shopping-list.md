---
id: 56533eb9ac21ba0edf2244bc
title: 쇼핑 리스트
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

변수 `myList`에 쇼핑 리스트를 하나 만드세요. 리스트는 복수의 하위 배열들을 포함하고 있는 다차원 배열이어야 합니다.

각 서브 배열의 맨 처음 항목에는, 상품의 이름인 문자열을 가져야 합니다. 두번째 항목은 수량을 나타내는 숫자가 되어야 합니다.

```js
["Chocolate Bar", 15]
```

리스트에는 최소한 5개의 하위 배열들이 필요합니다.

# --hints--

`myList`는 배열이어야 합니다.

```js
assert(isArray);
```

당신의 하위 배열들의 각각 맨 처음 항목들은 모두 문자열이어야 합니다.

```js
assert(hasString);
```

당신의 하위 배열의 각 2번째 항목들은 모두 숫자여야 합니다.

```js
assert(hasNumber);
```

당신은 적어도 리스트에 5개의 항목 이상을 가지고 있어야 합니다.

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
