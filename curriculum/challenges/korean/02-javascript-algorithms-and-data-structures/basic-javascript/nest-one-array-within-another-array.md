---
id: cf1111c1c11feddfaeb7bdef
title: 한 배열을 다른 배열 안에 중첩하기
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

아래와 같이, 당신은 배열들을 다른 배열들 안으로 감싸 넣을 수도 있습니다.

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

이것을 <dfn>다차원 배열(multi-dimensional array)</dfn>이라고 부르기도 합니다.

# --instructions--

`myArray`라는 이름의 중첩 배열을 하나 만드세요.

# --hints--

`myArray`는 다른 배열 안에 적어도 한 개 이상의 중첩 배열을 가지고 있어야 합니다.

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
