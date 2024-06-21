---
id: bd7993c9c69feddfaeb8bdef
title: 자바스크립트 배열을 사용해서 1개의 변수에 여러 개의 값을 넣기
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

자바스크립트의 `array` 변수를 사용하는 것으로, 여러 개의 데이터를 한 곳에 넣는 것이 가능합니다.

배열을 선언하기 위해서는 다음과 같이, 시작 대괄호를 써서 선언을 시작하고, 각 항목 사이에 쉼표를 넣고, 마지막으로 종료 대괄호를 씁니다.

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

문자열과 숫자 모두가 (이 순서로) 포함되도록, 새로운 배열 `myArray`를 수정하세요.

# --hints--

`myArray`는 배열이어야 합니다.

```js
assert(typeof myArray == 'object');
```

`myArray`의 첫 번째 항목은 문자열이어야 합니다.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

`myArray`의 두 번째 항목은 숫자여야 합니다.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
