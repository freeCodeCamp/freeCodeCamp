---
id: 587d7dab367417b2b2512b6f
title: 배열의 요소가 기준을 충족하는지 확인하는 some 메소드 사용하기
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

`some` 메소드는 *어떠한* 요소라도 특정 테스트를 통과하는지 확인할 때 사용하기 좋습니다. 어떤 값이 기준에 맞는다면 `true`, 맞지 않는다면 `false`를 반환합니다.

예를 들면 다음 코드는 `numbers`의 어떤 요소가 10보다 작은지 확인합니다.

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

이 `some` 메소드는 `true`를 반환할 것입니다.

# --instructions--

`arr`에 양수인 요소가 있는지 확인하도록 `checkPositive` 함수 안에 `some` 메소드를 사용하시오. 이 함수는 불리언(boolean) 값을 반환해야 합니다.

# --hints--

`some` 메소드를 사용해야 합니다.

```js
assert(__helpers.removeJSComments(code).match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])`는 `true`를 반환해야 합니다.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])`는 `true`를 반환해야 합니다.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])`는 `false`를 반환해야 합니다.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
